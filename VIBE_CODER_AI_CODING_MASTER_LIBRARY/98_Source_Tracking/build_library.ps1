param(
    [string]$SourceRoot = ""
)

$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($SourceRoot)) {
    $SourceRoot = [System.IO.Path]::GetFullPath((Join-Path -Path $PSScriptRoot -ChildPath "..\.."))
}

$LibraryName = "VIBE_CODER_AI_CODING_MASTER_LIBRARY"
$TargetRoot = Join-Path -Path $SourceRoot -ChildPath $LibraryName

$script:SourceMapRows = New-Object System.Collections.Generic.List[object]
$script:ExcludedRows = New-Object System.Collections.Generic.List[object]
$script:SecurityRows = New-Object System.Collections.Generic.List[object]
$script:FileInventoryRows = New-Object System.Collections.Generic.List[object]
$script:TranscriptRows = New-Object System.Collections.Generic.List[object]
$script:HashCache = @{}

function Join-PathSafe {
    param([Parameter(ValueFromRemainingArguments = $true)][string[]]$Parts)
    $path = $Parts[0]
    for ($i = 1; $i -lt $Parts.Count; $i++) {
        $path = Join-Path -Path $path -ChildPath $Parts[$i]
    }
    return $path
}

function Ensure-Directory {
    param([string]$Path)
    if (-not (Test-Path -LiteralPath $Path)) {
        New-Item -ItemType Directory -Force -Path $Path | Out-Null
    }
}

function Get-RelativePathSafe {
    param(
        [string]$BasePath,
        [string]$FullPath
    )
    $baseFull = [System.IO.Path]::GetFullPath($BasePath).TrimEnd("\", "/")
    $fullFull = [System.IO.Path]::GetFullPath($FullPath)
    if ($fullFull.StartsWith($baseFull, [System.StringComparison]::OrdinalIgnoreCase)) {
        return $fullFull.Substring($baseFull.Length).TrimStart("\", "/")
    }
    return $fullFull
}

function To-RepoPath {
    param([string]$Path)
    return ($Path -replace "\\", "/")
}

function Get-Sha256 {
    param([string]$Path)
    if ($script:HashCache.ContainsKey($Path)) {
        return $script:HashCache[$Path]
    }
    $hash = (Get-FileHash -LiteralPath $Path -Algorithm SHA256).Hash
    $script:HashCache[$Path] = $hash
    return $hash
}

function Add-ExcludedRow {
    param(
        [string]$SourcePath,
        [string]$IntendedPath,
        [string]$Area,
        [string]$Reason
    )
    $script:ExcludedRows.Add([pscustomobject]@{
        original_path = Get-RelativePathSafe -BasePath $SourceRoot -FullPath $SourcePath
        intended_path = if ($IntendedPath) { Get-RelativePathSafe -BasePath $TargetRoot -FullPath $IntendedPath } else { "" }
        area = $Area
        reason = $Reason
    }) | Out-Null
}

function Add-SecurityRow {
    param(
        [string]$SourcePath,
        [string]$Severity,
        [string]$Finding,
        [string]$Action
    )
    $script:SecurityRows.Add([pscustomobject]@{
        original_path = Get-RelativePathSafe -BasePath $SourceRoot -FullPath $SourcePath
        severity = $Severity
        finding = $Finding
        action = $Action
    }) | Out-Null
}

function Add-SourceMapRow {
    param(
        [string]$SourcePath,
        [string]$OrganizedPath,
        [string]$Category,
        [string]$Area,
        [string]$Notes
    )
    $file = Get-Item -LiteralPath $SourcePath
    $script:SourceMapRows.Add([pscustomobject]@{
        original_path = Get-RelativePathSafe -BasePath $SourceRoot -FullPath $SourcePath
        organized_path = Get-RelativePathSafe -BasePath $TargetRoot -FullPath $OrganizedPath
        category = $Category
        area = $Area
        file_type = $file.Extension
        file_size = $file.Length
        sha256 = Get-Sha256 -Path $SourcePath
        notes = $Notes
    }) | Out-Null
}

function Test-JunkPath {
    param([string]$RelativePath)
    $segments = $RelativePath -split "[\\/]+"
    $junkDirs = @(
        ".git", "node_modules", ".next", "dist", "build", ".cache", ".turbo",
        "coverage", ".parcel-cache", ".vite", ".nuxt", "out", "target", "tmp", "temp"
    )
    foreach ($segment in $segments) {
        if ($junkDirs -contains $segment) {
            return $true
        }
    }
    $name = [System.IO.Path]::GetFileName($RelativePath)
    if ($name -in @(".DS_Store", "Thumbs.db", ".coverage")) {
        return $true
    }
    if ($name -match "\.(log|tmp|temp)$") {
        return $true
    }
    return $false
}

function Test-UnsafeName {
    param([string]$RelativePath)
    $name = [System.IO.Path]::GetFileName($RelativePath).ToLowerInvariant()
    if ($name -match "^\.env($|\.)") { return $true }
    if ($name -match "\.(pem|key|p12|pfx)$") { return $true }
    if ($name -match "^id_(rsa|dsa|ecdsa|ed25519)") { return $true }
    if ($name -match "^(secret|secrets|credential|credentials|token|tokens)$") { return $true }
    if ($name -match "^(secret|secrets|credential|credentials|token|tokens)\.(json|ya?ml|env|txt|ini|config)$") { return $true }
    return $false
}

function Get-SecretRisk {
    param([string]$Path)
    $file = Get-Item -LiteralPath $Path
    $textExts = @(
        ".txt", ".md", ".mdx", ".json", ".js", ".jsx", ".ts", ".tsx", ".mjs",
        ".cjs", ".yml", ".yaml", ".toml", ".xml", ".html", ".css", ".scss",
        ".py", ".sh", ".csv", ".sql", ".prisma", ".example", ".npmrc", ".nvmrc"
    )
    if (-not ($textExts -contains $file.Extension.ToLowerInvariant())) {
        return $null
    }
    if ($file.Length -gt 9MB) {
        return $null
    }
    try {
        $text = [System.IO.File]::ReadAllText($Path)
    }
    catch {
        return $null
    }
    $highRiskPatterns = @(
        "-----BEGIN (RSA |OPENSSH |DSA |EC )?PRIVATE KEY-----",
        "(?i)\bsk-(proj-)?[A-Za-z0-9_-]{20,}",
        "(?i)\bgithub_pat_[A-Za-z0-9_]{20,}",
        "\bgh[pousr]_[A-Za-z0-9_]{20,}",
        "\bAKIA[0-9A-Z]{16}\b",
        "(?i)\bxox[baprs]-[A-Za-z0-9-]{20,}"
    )
    foreach ($pattern in $highRiskPatterns) {
        if ([regex]::IsMatch($text, $pattern)) {
            return "High-risk secret-like pattern: $pattern"
        }
    }
    return $null
}

function Get-ExclusionReason {
    param(
        [string]$SourcePath,
        [bool]$ExcludeJunk = $true
    )
    $relative = Get-RelativePathSafe -BasePath $SourceRoot -FullPath $SourcePath
    if ($ExcludeJunk -and (Test-JunkPath -RelativePath $relative)) {
        return "Common junk/build/cache path"
    }
    if (Test-UnsafeName -RelativePath $relative) {
        return "Unsafe/private filename pattern"
    }
    $secretRisk = Get-SecretRisk -Path $SourcePath
    if ($secretRisk) {
        return $secretRisk
    }
    return $null
}

function Copy-TrackedFile {
    param(
        [string]$SourcePath,
        [string]$DestinationPath,
        [string]$Category,
        [string]$Area,
        [string]$Notes,
        [bool]$ExcludeJunk = $true
    )
    $reason = Get-ExclusionReason -SourcePath $SourcePath -ExcludeJunk $ExcludeJunk
    if ($reason) {
        Add-ExcludedRow -SourcePath $SourcePath -IntendedPath $DestinationPath -Area $Area -Reason $reason
        if ($reason -like "High-risk secret-like pattern:*" -or $reason -like "Unsafe/private filename pattern") {
            Add-SecurityRow -SourcePath $SourcePath -Severity "blocked" -Finding $reason -Action "Excluded from organized library"
        }
        return $false
    }

    Ensure-Directory -Path (Split-Path -Parent $DestinationPath)
    try {
        Copy-Item -LiteralPath $SourcePath -Destination $DestinationPath -Force
        Add-SourceMapRow -SourcePath $SourcePath -OrganizedPath $DestinationPath -Category $Category -Area $Area -Notes $Notes
        return $true
    }
    catch {
        Add-ExcludedRow -SourcePath $SourcePath -IntendedPath $DestinationPath -Area $Area -Reason ("Copy failed: " + $_.Exception.Message)
        return $false
    }
}

function Copy-DirectoryTracked {
    param(
        [string]$SourceDir,
        [string]$DestinationDir,
        [string]$Category,
        [string]$Area,
        [string]$Notes,
        [bool]$ExcludeJunk = $true
    )
    if (-not (Test-Path -LiteralPath $SourceDir)) {
        return
    }
    Ensure-Directory -Path $DestinationDir
    $files = Get-ChildItem -LiteralPath $SourceDir -Recurse -File -Force
    foreach ($file in $files) {
        if ($file.FullName.StartsWith($TargetRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
            continue
        }
        $relative = Get-RelativePathSafe -BasePath $SourceDir -FullPath $file.FullName
        $dest = Join-Path -Path $DestinationDir -ChildPath $relative
        Copy-TrackedFile -SourcePath $file.FullName -DestinationPath $dest -Category $Category -Area $Area -Notes $Notes -ExcludeJunk $ExcludeJunk | Out-Null
    }
}

function Write-Utf8File {
    param(
        [string]$Path,
        [string]$Content
    )
    Ensure-Directory -Path (Split-Path -Parent $Path)
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($Path, $Content, $utf8NoBom)
}

function Read-SourceText {
    param([string]$Path)
    try {
        return [System.IO.File]::ReadAllText($Path)
    }
    catch {
        return (Get-Content -LiteralPath $Path -Raw -ErrorAction Stop)
    }
}

$CategoryDefs = @(
    [pscustomobject]@{ Key = "ai_agents"; Title = "AI Agents"; Folder = "01_Full_Topic_Library\01_AI_Agents"; Pattern = "(?i)\bagent(s)?\b|multi-agent|autonomous|orchestrat|subagent" },
    [pscustomobject]@{ Key = "bmad"; Title = "BMad Method"; Folder = "01_Full_Topic_Library\02_AI_Coding_Tools\BMad_Method"; Pattern = "(?i)\bbmad\b|bmad-method" },
    [pscustomobject]@{ Key = "codex"; Title = "Codex"; Folder = "01_Full_Topic_Library\02_AI_Coding_Tools\Codex"; Pattern = "(?i)\bcodex\b|openai codex|chatgpt.*codex" },
    [pscustomobject]@{ Key = "claude_code"; Title = "Claude Code"; Folder = "01_Full_Topic_Library\02_AI_Coding_Tools\Claude_Code"; Pattern = "(?i)claude code|anthropic" },
    [pscustomobject]@{ Key = "antigravity"; Title = "AntiGravity"; Folder = "01_Full_Topic_Library\02_AI_Coding_Tools\AntiGravity"; Pattern = "(?i)antigravity|gemini" },
    [pscustomobject]@{ Key = "mcp"; Title = "MCP"; Folder = "01_Full_Topic_Library\02_AI_Coding_Tools\MCP"; Pattern = "(?i)\bmcp\b|model context protocol|magic-mcp" },
    [pscustomobject]@{ Key = "chrome_extensions"; Title = "Chrome Extensions"; Folder = "01_Full_Topic_Library\06_Chrome_Extensions"; Pattern = "(?i)chrome|extension" },
    [pscustomobject]@{ Key = "cybersecurity"; Title = "Cybersecurity"; Folder = "01_Full_Topic_Library\10_Cybersecurity"; Pattern = "(?i)cyber ?security|hacking|ethical|kali|nmap|phishing|ddos|ssrf|cryptography|password|penetration|firewall|scanner|xss|metasploit|netcat|comptia|ceh|cissp|malware|security" },
    [pscustomobject]@{ Key = "prompting_workflows"; Title = "Prompting and Workflows"; Folder = "01_Full_Topic_Library\03_Prompting_Workflows"; Pattern = "(?i)prompt|workflow|context|agents\.md|skill|skills|read and understand code|think like" },
    [pscustomobject]@{ Key = "app_design_ux"; Title = "App Design and UX"; Folder = "01_Full_Topic_Library\04_App_Design_UX"; Pattern = "(?i)\bui\b|\bux\b|design|designer|interface|framer|mockup|photoshop|logo|landing page|addictive app|game design|gamification|duolingo|psychology" },
    [pscustomobject]@{ Key = "seo_growth"; Title = "SEO and Growth Marketing"; Folder = "01_Full_Topic_Library\08_SEO_Growth_Marketing"; Pattern = "(?i)\bseo\b|growth|marketing|market|viral|reels|social media|brand|programmatic|influencer|content|firecrawl|go-to-market|value prop|apple|tesla|stanley|sales" },
    [pscustomobject]@{ Key = "entrepreneurship_startups"; Title = "Entrepreneurship and Startups"; Folder = "01_Full_Topic_Library\07_Entrepreneurship_Startups"; Pattern = "(?i)startup|entrepreneur|founder|business|money|micro.?saas|product|customer|invest|profitable|100k|billionaire|hormozi|greg-isenberg|school-of-hard-knocks|starter-story|yc|seibel|mullins|ted|make money" },
    [pscustomobject]@{ Key = "developer_tools_infra"; Title = "Developer Tools and Infrastructure"; Folder = "01_Full_Topic_Library\09_Developer_Tools_Infrastructure"; Pattern = "(?i)\bgit\b|github|system design|\bapi\b|database|caching|cdn|load balancing|infrastructure|docker|mysql|php|software fundamentals|architecture" },
    [pscustomobject]@{ Key = "app_building_distribution"; Title = "App Building and Distribution"; Folder = "01_Full_Topic_Library\05_App_Building_Distribution"; Pattern = "(?i)fullstack|full-stack|app|web app|mobile app|react native|nextjs|nodejs|mongodb|express|build and deploy|developer career|project|fitness|food delivery|therapist|python full course|coding bootcamp|website" },
    [pscustomobject]@{ Key = "ai_coding_tools"; Title = "AI Coding Tools and Platforms"; Folder = "01_Full_Topic_Library\02_AI_Coding_Tools"; Pattern = "(?i)cursor|copilot|windsurf|vibe coding|ai coding|ai-assisted|rocket|coding tool|developer tools|openclaw" },
    [pscustomobject]@{ Key = "inspiration_vision"; Title = "Inspiration and Vision"; Folder = "01_Full_Topic_Library\11_Inspiration_Vision"; Pattern = "(?i)inspiration|vision|steve jobs|bill gross|dangerously confident|story|shy" },
    [pscustomobject]@{ Key = "additional_resources"; Title = "Additional Resources"; Folder = "01_Full_Topic_Library\12_Additional_Resources"; Pattern = ".*" }
)

function Get-TopicCategory {
    param([string]$RelativePath)
    $text = $RelativePath.ToLowerInvariant()
    foreach ($category in $CategoryDefs) {
        if ($text -match $category.Pattern) {
            return $category
        }
    }
    return ($CategoryDefs | Where-Object { $_.Key -eq "additional_resources" } | Select-Object -First 1)
}

function Get-SourceFiles {
    $all = Get-ChildItem -LiteralPath $SourceRoot -Recurse -File -Force | Where-Object {
        -not $_.FullName.StartsWith($TargetRoot, [System.StringComparison]::OrdinalIgnoreCase)
    }
    return $all
}

function Initialize-Folders {
    $dirs = @(
        "",
        "00_Start_Here",
        "01_Full_Topic_Library",
        "01_Full_Topic_Library\01_AI_Agents",
        "01_Full_Topic_Library\02_AI_Coding_Tools",
        "01_Full_Topic_Library\02_AI_Coding_Tools\BMad_Method",
        "01_Full_Topic_Library\02_AI_Coding_Tools\Codex",
        "01_Full_Topic_Library\02_AI_Coding_Tools\Claude_Code",
        "01_Full_Topic_Library\02_AI_Coding_Tools\AntiGravity",
        "01_Full_Topic_Library\02_AI_Coding_Tools\MCP",
        "01_Full_Topic_Library\03_Prompting_Workflows",
        "01_Full_Topic_Library\04_App_Design_UX",
        "01_Full_Topic_Library\05_App_Building_Distribution",
        "01_Full_Topic_Library\06_Chrome_Extensions",
        "01_Full_Topic_Library\07_Entrepreneurship_Startups",
        "01_Full_Topic_Library\08_SEO_Growth_Marketing",
        "01_Full_Topic_Library\09_Developer_Tools_Infrastructure",
        "01_Full_Topic_Library\10_Cybersecurity",
        "01_Full_Topic_Library\11_Inspiration_Vision",
        "01_Full_Topic_Library\12_Additional_Resources",
        "80_Reference_Repos",
        "80_Reference_Repos\BMAD_Method",
        "80_Reference_Repos\UI_Component_Libraries",
        "80_Reference_Repos\Agent_Skills",
        "80_Reference_Repos\Design_Skills",
        "80_Reference_Repos\MCP_Tools",
        "80_Reference_Repos\Product_Examples",
        "90_Presentation_View",
        "98_Source_Tracking",
        "99_Archive_Originals",
        "99_Archive_Originals\root_transcripts",
        "99_Archive_Originals\existing_organized_knowledge_base",
        "99_Archive_Originals\additional_info_to_add",
        "99_Archive_Originals\bmad_method_original"
    )
    foreach ($dir in $dirs) {
        Ensure-Directory -Path (Join-Path -Path $TargetRoot -ChildPath $dir)
    }
}

function Build-FileInventory {
    Write-Host "Building file inventory..."
    $files = Get-SourceFiles
    foreach ($file in $files) {
        $relative = Get-RelativePathSafe -BasePath $SourceRoot -FullPath $file.FullName
        $script:FileInventoryRows.Add([pscustomobject]@{
            original_path = $relative
            file_type = $file.Extension
            file_size = $file.Length
            sha256 = Get-Sha256 -Path $file.FullName
            category_guess = (Get-TopicCategory -RelativePath $relative).Title
        }) | Out-Null
    }
}

function Copy-ArchiveOriginals {
    Write-Host "Copying archive originals..."
    $archiveRoot = Join-Path -Path $TargetRoot -ChildPath "99_Archive_Originals"

    $rootFiles = Get-ChildItem -LiteralPath $SourceRoot -File -Force | Where-Object {
        -not $_.FullName.StartsWith($TargetRoot, [System.StringComparison]::OrdinalIgnoreCase)
    }
    foreach ($file in $rootFiles) {
        $dest = Join-PathSafe $archiveRoot "root_transcripts" $file.Name
        Copy-TrackedFile -SourcePath $file.FullName -DestinationPath $dest -Category "Archive Originals" -Area "archive" -Notes "Root-level source file copied unchanged" -ExcludeJunk $true | Out-Null
    }

    Copy-DirectoryTracked -SourceDir (Join-Path $SourceRoot "ORGANIZED_KNOWLEDGE_BASE") -DestinationDir (Join-PathSafe $archiveRoot "existing_organized_knowledge_base") -Category "Archive Originals" -Area "archive" -Notes "Existing organized knowledge base copied unchanged" -ExcludeJunk $true
    Copy-DirectoryTracked -SourceDir (Join-Path $SourceRoot "addintional info to add") -DestinationDir (Join-PathSafe $archiveRoot "additional_info_to_add") -Category "Archive Originals" -Area "archive" -Notes "Additional info source copied unchanged" -ExcludeJunk $true
    Copy-DirectoryTracked -SourceDir (Join-Path $SourceRoot "BMAD-METHOD-main") -DestinationDir (Join-PathSafe $archiveRoot "bmad_method_original") -Category "Archive Originals" -Area "archive" -Notes "BMad source copied unchanged" -ExcludeJunk $true
}

function Copy-ReferenceRepos {
    Write-Host "Copying clean reference repos..."
    $repoSources = @(
        [pscustomobject]@{ Source = "BMAD-METHOD-main\BMAD-METHOD-main"; Dest = "80_Reference_Repos\BMAD_Method\BMAD-METHOD-main"; Label = "BMAD Method"; Why = "Main BMad Method repository with docs, workflows, agents, and source code." },
        [pscustomobject]@{ Source = "addintional info to add\ui-main"; Dest = "80_Reference_Repos\UI_Component_Libraries\ui-main"; Label = "UI Component Library"; Why = "Large UI component/reference library for interface examples." },
        [pscustomobject]@{ Source = "addintional info to add\awesome-ai-tools-for-ui-main"; Dest = "80_Reference_Repos\UI_Component_Libraries\awesome-ai-tools-for-ui-main"; Label = "Awesome AI Tools for UI"; Why = "Curated UI and AI design tooling reference." },
        [pscustomobject]@{ Source = "addintional info to add\agent-skills-main"; Dest = "80_Reference_Repos\Agent_Skills\agent-skills-main"; Label = "Agent Skills"; Why = "Agent skill examples and implementation patterns." },
        [pscustomobject]@{ Source = "addintional info to add\skills-main"; Dest = "80_Reference_Repos\Agent_Skills\skills-main"; Label = "Skills"; Why = "Skill templates and reusable agent instructions." },
        [pscustomobject]@{ Source = "addintional info to add\skill-main"; Dest = "80_Reference_Repos\Agent_Skills\skill-main"; Label = "Skill"; Why = "Small skill reference repository." },
        [pscustomobject]@{ Source = "addintional info to add\magic-mcp-main"; Dest = "80_Reference_Repos\MCP_Tools\magic-mcp-main"; Label = "Magic MCP"; Why = "MCP tool/server reference material." },
        [pscustomobject]@{ Source = "addintional info to add\impeccable-main"; Dest = "80_Reference_Repos\Product_Examples\impeccable-main"; Label = "Impeccable"; Why = "Product/design example repository." },
        [pscustomobject]@{ Source = "addintional info to add\dasdasdas ffds"; Dest = "80_Reference_Repos\Product_Examples\dasdasdas-ffds"; Label = "Additional Product Example"; Why = "Additional local project/source example." },
        [pscustomobject]@{ Source = "addintional info to add\make-interfaces-feel-better-main"; Dest = "80_Reference_Repos\Design_Skills\make-interfaces-feel-better-main"; Label = "Make Interfaces Feel Better"; Why = "Design and interface improvement reference." },
        [pscustomobject]@{ Source = "addintional info to add\swiss-design-skill-main"; Dest = "80_Reference_Repos\Design_Skills\swiss-design-skill-main"; Label = "Swiss Design Skill"; Why = "Design system and Swiss design reference." },
        [pscustomobject]@{ Source = "addintional info to add\taste-skill-main"; Dest = "80_Reference_Repos\Design_Skills\taste-skill-main"; Label = "Taste Skill"; Why = "Taste/design evaluation skill reference." },
        [pscustomobject]@{ Source = "addintional info to add\ui-ux-pro-max-skill-main"; Dest = "80_Reference_Repos\Design_Skills\ui-ux-pro-max-skill-main"; Label = "UI UX Pro Max Skill"; Why = "UI/UX skill and design workflow reference." }
    )

    foreach ($repo in $repoSources) {
        $src = Join-Path -Path $SourceRoot -ChildPath $repo.Source
        $dest = Join-Path -Path $TargetRoot -ChildPath $repo.Dest
        if (Test-Path -LiteralPath $src) {
            Copy-DirectoryTracked -SourceDir $src -DestinationDir $dest -Category $repo.Label -Area "clean_reference_repo" -Notes "Clean reference repo copy: $($repo.Why)" -ExcludeJunk $true
            $notePath = Join-Path -Path $dest -ChildPath "README_VIBE_CODER_NOTE.md"
            $note = @"
# $($repo.Label)

This is a clean reference copy used by the Vibe Coder AI Coding Master Library.

Original source path:

$($repo.Source)

Why it matters:

$($repo.Why)

Cleaning rules applied:

- Common generated folders were excluded, such as node_modules, .next, dist, build, caches, logs, and temp files.
- Secret-looking filenames and high-risk token/private-key patterns were excluded and recorded in 98_Source_Tracking/excluded_files.csv.
- Original README and documentation files were preserved when safe.

"@
            Write-Utf8File -Path $notePath -Content $note
        }
    }
}

function Build-CombinedTopicFiles {
    Write-Host "Building full-detail topic Markdown files..."
    $sourceFiles = Get-SourceFiles
    $transcriptFiles = foreach ($file in $sourceFiles) {
        $relative = Get-RelativePathSafe -BasePath $SourceRoot -FullPath $file.FullName
        $isTextTranscript = $file.Extension -ieq ".txt"
        $isExistingKb = ($relative -like "ORGANIZED_KNOWLEDGE_BASE\*.md")
        if ($isTextTranscript -or $isExistingKb) {
            $file
        }
    }

    foreach ($file in $transcriptFiles) {
        $relative = Get-RelativePathSafe -BasePath $SourceRoot -FullPath $file.FullName
        $category = Get-TopicCategory -RelativePath $relative
        $reason = Get-ExclusionReason -SourcePath $file.FullName -ExcludeJunk $true
        if ($reason) {
            Add-ExcludedRow -SourcePath $file.FullName -IntendedPath (Join-PathSafe $TargetRoot $category.Folder "FULL_TRANSCRIPTS.md") -Area "topic_combined" -Reason $reason
            continue
        }
        $script:TranscriptRows.Add([pscustomobject]@{
            original_path = $relative
            category_key = $category.Key
            category = $category.Title
            file_name = $file.Name
            file_size = $file.Length
            sha256 = Get-Sha256 -Path $file.FullName
            full_path = $file.FullName
        }) | Out-Null
    }

    foreach ($category in $CategoryDefs) {
        $catDir = Join-Path -Path $TargetRoot -ChildPath $category.Folder
        Ensure-Directory -Path $catDir
        $combinedPath = Join-Path -Path $catDir -ChildPath "FULL_TRANSCRIPTS.md"
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        $writer = New-Object System.IO.StreamWriter($combinedPath, $false, $utf8NoBom)
        try {
            $writer.WriteLine("# $($category.Title) - Full Transcripts and Source Material")
            $writer.WriteLine("")
            $writer.WriteLine("This file preserves full source text for this topic. The short text above each source is navigation only; the source body is not summarized.")
            $writer.WriteLine("")
            $writer.WriteLine('Related archive folder: `99_Archive_Originals`')
            $writer.WriteLine("")
            $writer.WriteLine("---")
            $writer.WriteLine("")
            $records = $script:TranscriptRows | Where-Object { $_.category_key -eq $category.Key } | Sort-Object original_path
            if (-not $records -or $records.Count -eq 0) {
                $writer.WriteLine("No transcript/source text files were classified into this topic.")
                $writer.WriteLine("")
            }
            foreach ($record in $records) {
                $writer.WriteLine("## Source: $($record.file_name)")
                $writer.WriteLine("")
                $writer.WriteLine('- Original path: `' + $record.original_path + '`')
                $writer.WriteLine('- Size: `' + $record.file_size + '` bytes')
                $writer.WriteLine('- SHA256: `' + $record.sha256 + '`')
                $writer.WriteLine("")
                $writer.WriteLine("---")
                $writer.WriteLine("")
                $content = Read-SourceText -Path $record.full_path
                $writer.WriteLine($content)
                $writer.WriteLine("")
                $writer.WriteLine("")
                $writer.WriteLine("---")
                $writer.WriteLine("")
                Add-SourceMapRow -SourcePath $record.full_path -OrganizedPath $combinedPath -Category $category.Title -Area "topic_combined" -Notes "Full source text embedded in topic file"
            }
        }
        finally {
            $writer.Close()
        }

        $readmePath = Join-Path -Path $catDir -ChildPath "README.md"
        $count = ($script:TranscriptRows | Where-Object { $_.category_key -eq $category.Key }).Count
        $readme = @"
# $($category.Title)

This folder contains the full-detail topic file for **$($category.Title)**.

Open this first:

- `FULL_TRANSCRIPTS.md`

What is included:

- Full transcript/source text classified into this topic
- Source headers before each imported file
- Original path, size, and SHA256 hash for traceability

Source count in this topic: $count

For original copies, use:

- `../../99_Archive_Originals/`
- `../../98_Source_Tracking/source_map.csv`
- `../../98_Source_Tracking/transcript_inventory.md`

"@
        Write-Utf8File -Path $readmePath -Content $readme
    }
}

function Write-CoreDocs {
    Write-Host "Writing README, indexes, and presentation view..."
    $totalFiles = $script:FileInventoryRows.Count
    $totalBytes = ($script:FileInventoryRows | Measure-Object file_size -Sum).Sum
    $totalMb = [math]::Round($totalBytes / 1MB, 2)
    $transcriptCount = $script:TranscriptRows.Count
    $excludedCount = $script:ExcludedRows.Count
    $generatedOn = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

    $readme = @"
# Vibe Coder AI Coding Master Library

This is an organized, GitHub-ready and presentation-ready knowledge base built from the VIBER CODER source folder.

It preserves the important detail in two layers:

- Full original archive copies in `99_Archive_Originals`
- Full topic-based Markdown files in `01_Full_Topic_Library`

Generated: $generatedOn

Source files inventoried: $totalFiles

Approximate source size inventoried: $totalMb MB

Transcript/source text files embedded into topic files: $transcriptCount

Excluded or blocked files recorded: $excludedCount

## Start Here

Open these files first:

- `00_Start_Here/How_To_Use_This_KB.md`
- `MASTER_INDEX.md`
- `90_Presentation_View/04_GitHub_Showcase_Walkthrough.md`

## Main Areas

- `01_Full_Topic_Library` - Full-detail topic files grouped by subject
- `80_Reference_Repos` - Clean reference copies of important repos and frameworks
- `90_Presentation_View` - Files for showing this library to someone
- `98_Source_Tracking` - Inventories, source map, security review, and exclusions
- `99_Archive_Originals` - Original source copies, preserved for traceability

## Important Publication Note

This library may contain full transcripts and third-party source material. Treat it as a private study/work library unless you have permission to publish the included content.

"@
    Write-Utf8File -Path (Join-Path $TargetRoot "README.md") -Content $readme

    $catLines = foreach ($category in $CategoryDefs) {
        $count = ($script:TranscriptRows | Where-Object { $_.category_key -eq $category.Key }).Count
        "- [$($category.Title)]($(To-RepoPath $category.Folder)/README.md) - $count source text files"
    }
    $master = @"
# Master Index

This index points to the organized full-detail library. It is navigation, not a summary replacement.

## Topic Library

$($catLines -join "`n")

## Reference Repos

- `80_Reference_Repos/BMAD_Method` - BMad Method source/docs/workflows
- `80_Reference_Repos/UI_Component_Libraries` - UI libraries and interface references
- `80_Reference_Repos/Agent_Skills` - Agent/skill repositories
- `80_Reference_Repos/Design_Skills` - Design skill repositories
- `80_Reference_Repos/MCP_Tools` - MCP tool references
- `80_Reference_Repos/Product_Examples` - Product and app examples

## Presentation View

- `90_Presentation_View/01_Project_Overview.md`
- `90_Presentation_View/02_Learning_Map.md`
- `90_Presentation_View/03_Key_Frameworks_And_Workflows.md`
- `90_Presentation_View/04_GitHub_Showcase_Walkthrough.md`
- `90_Presentation_View/05_What_To_Open_During_A_Presentation.md`

## Source Tracking

- `98_Source_Tracking/source_map.csv`
- `98_Source_Tracking/file_inventory.csv`
- `98_Source_Tracking/transcript_inventory.md`
- `98_Source_Tracking/excluded_files.csv`
- `98_Source_Tracking/security_review.md`

"@
    Write-Utf8File -Path (Join-Path $TargetRoot "MASTER_INDEX.md") -Content $master

    $githubGuide = @"
# GitHub Guide

Use this folder as the clean project root if you want to show the library on GitHub.

Recommended GitHub setup:

1. Keep the repository private unless you have permission to publish the transcripts and third-party material.
2. Start viewers at `README.md`.
3. Use `MASTER_INDEX.md` as the table of contents.
4. Use `90_Presentation_View` when explaining the library to someone.
5. Use `98_Source_Tracking` when checking where a file came from.

Do not publish files listed in `98_Source_Tracking/excluded_files.csv` without manual review.

"@
    Write-Utf8File -Path (Join-Path $TargetRoot "GITHUB_GUIDE.md") -Content $githubGuide

    $presentationOverview = @"
# Presentation Overview

This folder is organized so you can show the collection in a clean way without losing the full detail.

The presentation flow is:

1. Open `README.md`
2. Open `MASTER_INDEX.md`
3. Open `90_Presentation_View/01_Project_Overview.md`
4. Open one topic folder in `01_Full_Topic_Library`
5. Open `98_Source_Tracking/source_map.csv` to prove traceability

"@
    Write-Utf8File -Path (Join-Path $TargetRoot "PRESENTATION_OVERVIEW.md") -Content $presentationOverview

    $publicationNotice = @"
# Publication Notice

This library may include full transcripts, screenshots, documentation, source code, and educational material from outside sources.

Use it as a private learning and reference library unless you have permission to publish the included material.

Before making a public GitHub repository:

- Review `98_Source_Tracking/security_review.md`
- Review `98_Source_Tracking/excluded_files.csv`
- Confirm you have rights to share the transcript/source material
- Consider keeping only indexes public and the full archive private

"@
    Write-Utf8File -Path (Join-Path $TargetRoot "PUBLICATION_NOTICE.md") -Content $publicationNotice

    $howToUse = @"
# How To Use This Knowledge Base

Start with `MASTER_INDEX.md`.

For deep learning, open a topic folder inside `01_Full_Topic_Library` and read `FULL_TRANSCRIPTS.md`.

For source checking, use:

- `98_Source_Tracking/source_map.csv`
- `98_Source_Tracking/transcript_inventory.md`
- `99_Archive_Originals`

For showing this to someone, use:

- `90_Presentation_View/04_GitHub_Showcase_Walkthrough.md`
- `90_Presentation_View/05_What_To_Open_During_A_Presentation.md`

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "00_Start_Here" "How_To_Use_This_KB.md") -Content $howToUse

    $assistantInstructions = @"
# AI Assistant Instructions

When using this library:

- Prefer `MASTER_INDEX.md` for navigation.
- Use `01_Full_Topic_Library` when full detail is needed.
- Do not treat presentation files as replacements for source material.
- Use `98_Source_Tracking/source_map.csv` to trace an organized file back to its original source.
- Do not assume excluded files are unimportant; they were excluded for GitHub-safety or cleanup reasons.
- When answering questions, cite the relevant topic file and original source path when possible.

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "00_Start_Here" "AI_Assistant_Instructions.md") -Content $assistantInstructions

    $navigationMap = @"
# Navigation Map

## Fast Paths

- Need the big table of contents: `MASTER_INDEX.md`
- Need all source text by subject: `01_Full_Topic_Library`
- Need clean repo references: `80_Reference_Repos`
- Need a presentation path: `90_Presentation_View`
- Need originals: `99_Archive_Originals`
- Need source tracking: `98_Source_Tracking`

## Recommended Reading Order

1. `README.md`
2. `MASTER_INDEX.md`
3. `00_Start_Here/How_To_Use_This_KB.md`
4. A relevant topic folder
5. `98_Source_Tracking/source_map.csv`

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "00_Start_Here" "Navigation_Map.md") -Content $navigationMap

    Write-PresentationDocs
    Write-ReferenceReadmes
}

function Write-PresentationDocs {
    $overview = @"
# Project Overview

This library organizes the full VIBER CODER learning collection into a professional knowledge base.

It is built for two uses:

- GitHub browsing
- Presenting the collection to another person

The full source detail is preserved in topic files and archives. This presentation view only explains how to walk through it.

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "90_Presentation_View" "01_Project_Overview.md") -Content $overview

    $learningMap = @"
# Learning Map

Use this order if you want to learn from the library:

1. AI agents and coding tools
2. Prompting and workflows
3. App building and distribution
4. Design and UX
5. Chrome extensions
6. Startups, SEO, and growth
7. Developer tools and infrastructure
8. Cybersecurity

Each area links back to full-detail source files in `01_Full_Topic_Library`.

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "90_Presentation_View" "02_Learning_Map.md") -Content $learningMap

    $frameworks = @"
# Key Frameworks And Workflows

Open these folders when explaining the most important frameworks:

- `01_Full_Topic_Library/02_AI_Coding_Tools/BMad_Method`
- `01_Full_Topic_Library/02_AI_Coding_Tools/Codex`
- `01_Full_Topic_Library/02_AI_Coding_Tools/Claude_Code`
- `01_Full_Topic_Library/02_AI_Coding_Tools/MCP`
- `80_Reference_Repos/BMAD_Method`
- `80_Reference_Repos/Agent_Skills`
- `80_Reference_Repos/Design_Skills`

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "90_Presentation_View" "03_Key_Frameworks_And_Workflows.md") -Content $frameworks

    $showcase = @"
# GitHub Showcase Walkthrough

Use this path when showing the library on GitHub:

1. Start at `README.md`.
2. Open `MASTER_INDEX.md` to show the full structure.
3. Open `01_Full_Topic_Library/02_AI_Coding_Tools/README.md`.
4. Open `01_Full_Topic_Library/02_AI_Coding_Tools/BMad_Method/FULL_TRANSCRIPTS.md`.
5. Open `80_Reference_Repos/BMAD_Method`.
6. Open `98_Source_Tracking/source_map.csv` to show traceability.
7. Open `PUBLICATION_NOTICE.md` to explain why this should usually remain private.

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "90_Presentation_View" "04_GitHub_Showcase_Walkthrough.md") -Content $showcase

    $whatToOpen = @"
# What To Open During A Presentation

Open these files in this order:

1. `README.md`
2. `MASTER_INDEX.md`
3. `90_Presentation_View/01_Project_Overview.md`
4. `90_Presentation_View/02_Learning_Map.md`
5. `01_Full_Topic_Library/02_AI_Coding_Tools/README.md`
6. `80_Reference_Repos/BMAD_Method`
7. `98_Source_Tracking/source_map.csv`

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "90_Presentation_View" "05_What_To_Open_During_A_Presentation.md") -Content $whatToOpen
}

function Write-ReferenceReadmes {
    $referenceReadmes = @{
        "80_Reference_Repos\README.md" = "# Reference Repos`n`nClean copies of important source repositories and documentation references.`n"
        "80_Reference_Repos\BMAD_Method\README.md" = "# BMAD Method References`n`nClean BMad Method repo copies and related documentation.`n"
        "80_Reference_Repos\UI_Component_Libraries\README.md" = "# UI Component Libraries`n`nClean UI component and interface reference repositories.`n"
        "80_Reference_Repos\Agent_Skills\README.md" = "# Agent Skills`n`nClean copies of agent skill repositories and reusable assistant instructions.`n"
        "80_Reference_Repos\Design_Skills\README.md" = "# Design Skills`n`nClean copies of design skill repositories and UX guidance.`n"
        "80_Reference_Repos\MCP_Tools\README.md" = "# MCP Tools`n`nClean copies of MCP-related repositories and examples.`n"
        "80_Reference_Repos\Product_Examples\README.md" = "# Product Examples`n`nClean copies of product, app, and implementation examples.`n"
    }
    foreach ($key in $referenceReadmes.Keys) {
        Write-Utf8File -Path (Join-Path -Path $TargetRoot -ChildPath $key) -Content $referenceReadmes[$key]
    }
}

function Write-TrackingFiles {
    Write-Host "Writing source tracking files..."
    $trackingRoot = Join-Path -Path $TargetRoot -ChildPath "98_Source_Tracking"

    $script:SourceMapRows | Export-Csv -LiteralPath (Join-Path $trackingRoot "source_map.csv") -NoTypeInformation -Encoding UTF8
    $script:FileInventoryRows | Export-Csv -LiteralPath (Join-Path $trackingRoot "file_inventory.csv") -NoTypeInformation -Encoding UTF8
    $script:ExcludedRows | Export-Csv -LiteralPath (Join-Path $trackingRoot "excluded_files.csv") -NoTypeInformation -Encoding UTF8

    $duplicates = New-Object System.Collections.Generic.List[object]
    $groups = $script:FileInventoryRows | Group-Object sha256 | Where-Object { $_.Count -gt 1 -and $_.Name }
    foreach ($group in $groups) {
        foreach ($row in $group.Group) {
            $duplicates.Add([pscustomobject]@{
                sha256 = $group.Name
                duplicate_count = $group.Count
                original_path = $row.original_path
                file_size = $row.file_size
            }) | Out-Null
        }
    }
    $duplicates | Export-Csv -LiteralPath (Join-Path $trackingRoot "duplicate_candidates.csv") -NoTypeInformation -Encoding UTF8

    $categoryRules = "# Category Rules`n`nThese rules were used to classify transcript/source text files into topic folders.`n`n"
    foreach ($category in $CategoryDefs) {
        $categoryRules += "## $($category.Title)`n`n"
        $categoryRules += "- Folder: $($category.Folder)`n"
        $categoryRules += "- Pattern: $($category.Pattern)`n`n"
    }
    Write-Utf8File -Path (Join-Path $trackingRoot "category_rules.md") -Content $categoryRules

    $inventoryMd = "# Transcript Inventory`n`nThis lists every source text file embedded into a topic file.`n`n"
    foreach ($category in $CategoryDefs) {
        $records = $script:TranscriptRows | Where-Object { $_.category_key -eq $category.Key } | Sort-Object original_path
        $inventoryMd += "## $($category.Title)`n`n"
        $inventoryMd += "Count: $($records.Count)`n`n"
        foreach ($record in $records) {
            $inventoryMd += "- $($record.original_path) -> $($category.Folder)/FULL_TRANSCRIPTS.md`n"
        }
        $inventoryMd += "`n"
    }
    Write-Utf8File -Path (Join-Path $trackingRoot "transcript_inventory.md") -Content $inventoryMd

    $securityMd = "# Security Review`n`n"
    $securityMd += "The build excluded unsafe/private filenames and high-risk secret-like content from the organized library.`n`n"
    $securityMd += "Blocked or flagged files: $($script:SecurityRows.Count)`n`n"
    if ($script:SecurityRows.Count -eq 0) {
        $securityMd += "No high-risk secret-like files were blocked by the automated scan.`n`n"
    }
    else {
        foreach ($row in $script:SecurityRows) {
            $securityMd += "- $($row.original_path) - $($row.severity) - $($row.finding) - $($row.action)`n"
        }
        $securityMd += "`n"
    }
    $securityMd += "Manual review is still recommended before publishing this folder publicly.`n"
    Write-Utf8File -Path (Join-Path $trackingRoot "security_review.md") -Content $securityMd
}

function Write-PresentationDocs {
    $overview = @"
# Project Overview

This library organizes the full VIBER CODER learning collection into a professional knowledge base.

It is built for two uses:

- GitHub browsing
- Presenting the collection to another person

The full source detail is preserved in topic files and archives. This presentation view only explains how to walk through it.

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "90_Presentation_View" "01_Project_Overview.md") -Content $overview

    $learningMap = @"
# Learning Map

Use this order if you want to learn from the library:

1. AI agents and coding tools
2. Prompting and workflows
3. App building and distribution
4. Design and UX
5. Chrome extensions
6. Startups, SEO, and growth
7. Developer tools and infrastructure
8. Cybersecurity

Each area links back to full-detail source files in 01_Full_Topic_Library.

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "90_Presentation_View" "02_Learning_Map.md") -Content $learningMap

    $frameworks = @"
# Key Frameworks And Workflows

Open these folders when explaining the most important frameworks:

- 01_Full_Topic_Library/02_AI_Coding_Tools/BMad_Method
- 01_Full_Topic_Library/02_AI_Coding_Tools/Codex
- 01_Full_Topic_Library/02_AI_Coding_Tools/Claude_Code
- 01_Full_Topic_Library/02_AI_Coding_Tools/MCP
- 80_Reference_Repos/BMAD_Method
- 80_Reference_Repos/Agent_Skills
- 80_Reference_Repos/Design_Skills

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "90_Presentation_View" "03_Key_Frameworks_And_Workflows.md") -Content $frameworks

    $showcase = @"
# GitHub Showcase Walkthrough

Use this path when showing the library on GitHub:

1. Start at README.md.
2. Open MASTER_INDEX.md to show the full structure.
3. Open 01_Full_Topic_Library/02_AI_Coding_Tools/README.md.
4. Open 01_Full_Topic_Library/02_AI_Coding_Tools/BMad_Method/FULL_TRANSCRIPTS.md.
5. Open 80_Reference_Repos/BMAD_Method.
6. Open 98_Source_Tracking/source_map.csv to show traceability.
7. Open PUBLICATION_NOTICE.md to explain why this should usually remain private.

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "90_Presentation_View" "04_GitHub_Showcase_Walkthrough.md") -Content $showcase

    $whatToOpen = @"
# What To Open During A Presentation

Open these files in this order:

1. README.md
2. MASTER_INDEX.md
3. 90_Presentation_View/01_Project_Overview.md
4. 90_Presentation_View/02_Learning_Map.md
5. 01_Full_Topic_Library/02_AI_Coding_Tools/README.md
6. 80_Reference_Repos/BMAD_Method
7. 98_Source_Tracking/source_map.csv

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "90_Presentation_View" "05_What_To_Open_During_A_Presentation.md") -Content $whatToOpen
}

function Write-CoreDocs {
    Write-Host "Writing README, indexes, and presentation view..."
    $totalFiles = $script:FileInventoryRows.Count
    $totalBytes = ($script:FileInventoryRows | Measure-Object file_size -Sum).Sum
    $totalMb = [math]::Round($totalBytes / 1MB, 2)
    $transcriptCount = $script:TranscriptRows.Count
    $excludedCount = $script:ExcludedRows.Count
    $generatedOn = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

    $readme = @"
# Vibe Coder AI Coding Master Library

This is an organized, GitHub-ready and presentation-ready knowledge base built from the VIBER CODER source folder.

It preserves the important detail in two layers:

- Full original archive copies in 99_Archive_Originals
- Full topic-based Markdown files in 01_Full_Topic_Library

Generated: $generatedOn

Source files inventoried: $totalFiles

Approximate source size inventoried: $totalMb MB

Transcript/source text files embedded into topic files: $transcriptCount

Excluded or blocked files recorded: $excludedCount

## Start Here

Open these files first:

- 00_Start_Here/How_To_Use_This_KB.md
- MASTER_INDEX.md
- 90_Presentation_View/04_GitHub_Showcase_Walkthrough.md

## Main Areas

- 01_Full_Topic_Library - Full-detail topic files grouped by subject
- 80_Reference_Repos - Clean reference copies of important repos and frameworks
- 90_Presentation_View - Files for showing this library to someone
- 98_Source_Tracking - Inventories, source map, security review, and exclusions
- 99_Archive_Originals - Original source copies, preserved for traceability

## Important Publication Note

This library may contain full transcripts and third-party source material. Treat it as a private study/work library unless you have permission to publish the included content.

"@
    Write-Utf8File -Path (Join-Path $TargetRoot "README.md") -Content $readme

    $catLines = foreach ($category in $CategoryDefs) {
        $count = ($script:TranscriptRows | Where-Object { $_.category_key -eq $category.Key }).Count
        "- [$($category.Title)]($(To-RepoPath $category.Folder)/README.md) - $count source text files"
    }
    $catBlock = $catLines -join [Environment]::NewLine

    $master = @"
# Master Index

This index points to the organized full-detail library. It is navigation, not a summary replacement.

## Topic Library

$catBlock

## Reference Repos

- 80_Reference_Repos/BMAD_Method - BMad Method source/docs/workflows
- 80_Reference_Repos/UI_Component_Libraries - UI libraries and interface references
- 80_Reference_Repos/Agent_Skills - Agent/skill repositories
- 80_Reference_Repos/Design_Skills - Design skill repositories
- 80_Reference_Repos/MCP_Tools - MCP tool references
- 80_Reference_Repos/Product_Examples - Product and app examples

## Presentation View

- 90_Presentation_View/01_Project_Overview.md
- 90_Presentation_View/02_Learning_Map.md
- 90_Presentation_View/03_Key_Frameworks_And_Workflows.md
- 90_Presentation_View/04_GitHub_Showcase_Walkthrough.md
- 90_Presentation_View/05_What_To_Open_During_A_Presentation.md

## Source Tracking

- 98_Source_Tracking/source_map.csv
- 98_Source_Tracking/file_inventory.csv
- 98_Source_Tracking/transcript_inventory.md
- 98_Source_Tracking/excluded_files.csv
- 98_Source_Tracking/security_review.md

"@
    Write-Utf8File -Path (Join-Path $TargetRoot "MASTER_INDEX.md") -Content $master

    $githubGuide = @"
# GitHub Guide

Use this folder as the clean project root if you want to show the library on GitHub.

Recommended GitHub setup:

1. Keep the repository private unless you have permission to publish the transcripts and third-party material.
2. Start viewers at README.md.
3. Use MASTER_INDEX.md as the table of contents.
4. Use 90_Presentation_View when explaining the library to someone.
5. Use 98_Source_Tracking when checking where a file came from.

Do not publish files listed in 98_Source_Tracking/excluded_files.csv without manual review.

"@
    Write-Utf8File -Path (Join-Path $TargetRoot "GITHUB_GUIDE.md") -Content $githubGuide

    $presentationOverview = @"
# Presentation Overview

This folder is organized so you can show the collection in a clean way without losing the full detail.

The presentation flow is:

1. Open README.md
2. Open MASTER_INDEX.md
3. Open 90_Presentation_View/01_Project_Overview.md
4. Open one topic folder in 01_Full_Topic_Library
5. Open 98_Source_Tracking/source_map.csv to prove traceability

"@
    Write-Utf8File -Path (Join-Path $TargetRoot "PRESENTATION_OVERVIEW.md") -Content $presentationOverview

    $publicationNotice = @"
# Publication Notice

This library may include full transcripts, screenshots, documentation, source code, and educational material from outside sources.

Use it as a private learning and reference library unless you have permission to publish the included material.

Before making a public GitHub repository:

- Review 98_Source_Tracking/security_review.md
- Review 98_Source_Tracking/excluded_files.csv
- Confirm you have rights to share the transcript/source material
- Consider keeping only indexes public and the full archive private

"@
    Write-Utf8File -Path (Join-Path $TargetRoot "PUBLICATION_NOTICE.md") -Content $publicationNotice

    $howToUse = @"
# How To Use This Knowledge Base

Start with MASTER_INDEX.md.

For deep learning, open a topic folder inside 01_Full_Topic_Library and read FULL_TRANSCRIPTS.md.

For source checking, use:

- 98_Source_Tracking/source_map.csv
- 98_Source_Tracking/transcript_inventory.md
- 99_Archive_Originals

For showing this to someone, use:

- 90_Presentation_View/04_GitHub_Showcase_Walkthrough.md
- 90_Presentation_View/05_What_To_Open_During_A_Presentation.md

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "00_Start_Here" "How_To_Use_This_KB.md") -Content $howToUse

    $assistantInstructions = @"
# AI Assistant Instructions

When using this library:

- Prefer MASTER_INDEX.md for navigation.
- Use 01_Full_Topic_Library when full detail is needed.
- Do not treat presentation files as replacements for source material.
- Use 98_Source_Tracking/source_map.csv to trace an organized file back to its original source.
- Do not assume excluded files are unimportant; they were excluded for GitHub-safety or cleanup reasons.
- When answering questions, cite the relevant topic file and original source path when possible.

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "00_Start_Here" "AI_Assistant_Instructions.md") -Content $assistantInstructions

    $navigationMap = @"
# Navigation Map

## Fast Paths

- Need the big table of contents: MASTER_INDEX.md
- Need all source text by subject: 01_Full_Topic_Library
- Need clean repo references: 80_Reference_Repos
- Need a presentation path: 90_Presentation_View
- Need originals: 99_Archive_Originals
- Need source tracking: 98_Source_Tracking

## Recommended Reading Order

1. README.md
2. MASTER_INDEX.md
3. 00_Start_Here/How_To_Use_This_KB.md
4. A relevant topic folder
5. 98_Source_Tracking/source_map.csv

"@
    Write-Utf8File -Path (Join-PathSafe $TargetRoot "00_Start_Here" "Navigation_Map.md") -Content $navigationMap

    Write-PresentationDocs
    Write-ReferenceReadmes
}

Write-Host "Initializing $LibraryName..."
Initialize-Folders
Build-FileInventory
Copy-ArchiveOriginals
Copy-ReferenceRepos
Build-CombinedTopicFiles
Write-CoreDocs
Write-TrackingFiles

Write-Host "Done. Library created at: $TargetRoot"
