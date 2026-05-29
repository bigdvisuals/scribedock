# Codex - Full Transcripts and Source Material

This file preserves full source text for this topic. The short text above each source is navigation only; the source body is not summarized.

Related archive folder: `99_Archive_Originals`

---

## Source: 01 - OpenAI Codex Tutorial #1 - Introduction & Setup.txt

- Original path: `addintional info to add\01 - OpenAI Codex Tutorial #1 - Introduction & Setup.txt`
- Size: `11211` bytes
- SHA256: `C0F6E917E0E1DB484D4DE57F86DD0D743CD52828C9DB691EF3BE45157404EA5E`

---

Title: OpenAI Codex Tutorial #1 - Introduction & Setup
URL: https://www.youtube.com/watch?v=tIb_TzVNbDM&list=PL4cUxeGkcC9iDBeA8IyR1IE1kl4w5IDEG&index=1&pp=iAQB
Channel: YouTube playlist
Video ID: tIb_TzVNbDM
Transcript language: English auto-generated
Downloaded at: 2026-05-26T01:50:31.703Z

0:00 All right then, gang. In this series,
0:02 we're going to be talking about Codeex
0:03 by OpenAI and all the different ways we
0:06 can use it within a development
0:07 workflow. But first of all, what exactly
0:09 is Codeex? And that's a question I've
0:11 asked myself a bunch of times over the
0:13 last few months because it's actually a
0:15 few different tools rolled up into a
0:17 single product. But right now, I feel
0:18 like there's a concerted effort by
0:20 OpenAI to smooth out any confusion and
0:22 unify all these tools under that single
0:24 Codeex name. So at its core, Codeex is
0:27 an AI powered coding assistant created
0:29 by OpenAI which can work autonomously on
0:32 coding tasks that we assign to it. It
0:34 uses the GPT5 codeex model which is
0:37 their model tailored specifically
0:38 towards aentic coding with codeex and
0:41 it's available to anyone who's got a
0:43 chat GPT plus or pro account with no
0:45 extra charge. And where it differs from
0:47 other AI coding assistants like claude
0:49 code and copilot is that it offers
0:52 multiple ways we can work with it.
0:54 There's a codeex IDE extension which can
0:56 be added to VS code or cursor or wind
0:58 surf and that's very much in the same
1:00 vein as something like copilot for VS
1:02 code where we have a chat panel for
1:04 interacting with AI models and we can
1:07 also let it take on coding tasks more
1:09 autonomously when we need it to. There's
1:11 also the codeex CLI which is much more
1:13 in the mold of clawed code where we
1:15 interact with the models and delegate
1:17 tasks directly from the terminal. Then
1:20 there's the Codex cloud service which is
1:22 a browserbased tool that we can connect
1:23 to a GitHub repository and then use to
1:25 assign tasks for Codex to work on. When
1:28 we do that, Codex spins up a remote
1:30 container to run the code remotely and
1:32 make changes. Then it opens a pull
1:34 request on your GitHub repo. And the
1:36 idea behind this is that you can spin up
1:37 Codex tasks from anywhere, your laptop,
1:40 your mobile, or even some random
1:41 computer without access to your code
1:43 because you don't need your project
1:44 cloned locally. Codex Cloud connects to
1:46 your repo remotely and handles things on
1:49 its own servers. And finally, there's
1:51 also the Codex review tool, which we can
1:53 install on GitHub to automatically
1:55 review pull requests when they're made.
1:57 So, that's four distinct ways we can
1:59 work with Codex. And what's impressive
2:01 is the way they can interlink and
2:03 provide context to each other. For
2:04 example, I can use the Codex IDE
2:07 extension to delegate a new task on the
2:09 Codex cloud service. When it finishes
2:11 that task, I can either bring those
2:13 changes back down locally or tell Codex
2:15 Cloud to open a PR directly on GitHub.
2:18 And then if Codex Cloud opens that PR,
2:20 the Codex review bot can immediately
2:22 kick in and double check its own work
2:23 before we merge it. So instead of them
2:26 feeling like separate products, they
2:28 feel more like different windows into
2:30 the same product. And that means you can
2:31 switch between them depending on the
2:33 situation without feeling too much like
2:35 you're juggling completely different
2:36 tools.
2:38 So in this course then we're going to
2:40 explore each of those different
2:41 interfaces separately and look at how
2:43 they can work together a little bit as
2:44 well. We'll start off with Codex cloud
2:46 which will connect to a GitHub repo and
2:48 then use to spin up cloud tasks. We can
2:51 then open PR from those tasks and ask
2:53 Codex to review them directly on GitHub.
2:56 Then we're going to jump into the Codex
2:57 CLI and work on a project locally before
2:59 pushing those changes manually up to the
3:01 repo. And after that we'll install the
3:03 Codex IDE extension in VS Code. talk
3:06 about context, reasoning, and how to add
3:08 an MCP server. And finally, we'll see
3:10 how the extension and codeex cloud can
3:12 work together by delegating multiple
3:14 tasks from our local setup to the cloud
3:17 where they can work in parallel with
3:18 each other. But before we go any
3:21 further, I want to mention two things.
3:22 First, this is not a Vibe coding course
3:25 for non-coders. It's a course aimed at
3:27 coders, either new or experienced, who
3:29 want to implement codecs into their
3:31 current workflow. And so second, with
3:33 that in mind, I would expect you to have
3:35 a basic knowledge of web development and
3:37 ideally GitHub. And I think Git and
3:39 GitHub especially are really important
3:41 to understand when you're letting AI
3:42 code on your project because without it,
3:45 AI powered coding agents can wreck your
3:47 codebase in a matter of minutes. So for
3:49 those interested, I've recently released
3:50 a whole Git and GitHub masterclass
3:52 course on my website, which also
3:54 contains a chapter about AIdriven
3:56 workflows. So I'll leave the link to
3:58 that course down below this video. It's
4:00 only $10 and it's going to make you
4:02 really comfortable using Git and GitHub.
4:05 Anyway, with that little disclaimer out
4:06 of the way, let's crack on and set up
4:08 our Codeex account. So, like I said
4:11 before, Codeex is available to anyone
4:13 with a ChatgPT Pro or Plus account. So,
4:16 you'll need to sign up for one of those
4:17 plans first, which you can do at
4:19 chatgpt.com/pricing.
4:22 Once you have a plan, you can use the
4:24 Codex cloud service in the browser by
4:26 coming to chatgpt/codex.
4:29 If you normally use regular chat GPT in
4:32 the browser, you should also see a link
4:33 to Codex cloud in a sidebar. And if you
4:36 click on that, it's just going to bring
4:37 you to the same page. So then this is
4:40 Codex Cloud, the web-based service we
4:42 can use to run tasks on our projects
4:44 remotely. Now, in order to do this, we
4:47 first of all need to give Codex access
4:49 to a GitHub repo by connecting our
4:51 GitHub account. So we can do that by
4:54 clicking on this connect to GitHub
4:56 button right here. Or if you don't see
4:58 that button, you can also go to the
5:00 settings up here and then to the data
5:02 controls option. And from this page, you
5:05 can connect your GitHub account as well.
5:07 So if we click on that button, we're
5:09 going to see a popup with some more
5:11 information about this connection. And
5:13 we can just then click on this button
5:15 down here and authenticate with our
5:17 GitHub credentials.
5:19 Okay. So once that's done, we can head
5:21 back to the Codex dashboard and we
5:23 should see a new option to select an
5:25 environment to work in. In other words,
5:27 we need to select a GitHub repo we want
5:29 Codeex to work on and configure how it
5:32 works on that project remotely. So,
5:34 we've not created an environment yet,
5:36 but we can do that by clicking this
5:38 button and then choosing to create one.
5:40 When we do that, we're going to see a
5:41 popup where we can make a new
5:43 environment. And the first thing we need
5:45 to do is choose a GitHub repo to work
5:48 on. So, you can scroll through all of
5:50 your repos here to select one. And you
5:52 can also search for one at the top as
5:54 well. Now I'm going to search for a
5:56 dummy project that I'm making called
5:58 Yumpair, which is just a little food
6:00 pairing application that I'm working on
6:01 just for a little bit of fun. So I'm
6:03 going to select that repo for this
6:05 environment. Next up, we can choose to
6:07 keep the automatic codeex code reviews
6:10 on for any new pull requests on the repo
6:12 or we can toggle it off. Now I'm going
6:14 to keep it off for now because I want to
6:16 focus on other things to begin with, but
6:19 later we're going to come back and turn
6:20 it on again. And then finally down here
6:23 we can give the agent internet access if
6:25 we want so that when it's working on the
6:27 project remotely it can also use the
6:29 internet. Now you might want to select
6:30 this option if the agent needs to
6:32 interact with remote APIs and services
6:34 or access documentation or other remote
6:37 references. We're going to keep it off
6:38 for this project though. Anyway, now if
6:41 we hit create, it's going to make that
6:42 new environment and it's going to put us
6:44 in it automatically on the dashboard.
6:47 You can see that right here where we
6:49 have this environment selected.
6:51 Now, you can also manage your
6:52 environments by coming to the settings
6:54 and then selecting the environments
6:56 option. And on this page, we should see
6:58 the one we just created. But if you want
7:00 to create another one for a different
7:02 project, you can just hit the create
7:03 button up here to do that. Also, we can
7:06 edit or delete environments by clicking
7:08 on them. So, let me click on this one we
7:09 just created. And when we do that, I can
7:12 see a delete button up here and also the
7:14 edit button. So, let me just click on
7:15 that edit button to see what options we
7:17 have. And when we do that, we should see
7:19 a screen that looks something like this
7:21 with some basic options at the top and
7:23 some code execution options down here.
7:26 So like I said before, when we use
7:27 codeex cloud to run tasks, it does that
7:30 remotely on codec servers, right? By
7:32 spinning up an isolated container to run
7:34 that code in. Now that default container
7:37 comes with a bunch of pre-installed
7:38 packages like Node, Python, Ruby, etc.
7:41 And we can click on this button to
7:42 change the versions of those packages.
7:45 We can also add custom environment
7:47 variables to the environment which you
7:49 might need to add if you want the coding
7:51 agent to access any external APIs or
7:53 services. And you can also define your
7:55 own setup scripts for the container when
7:57 it runs by toggling this option right
7:59 here. The default one automatically runs
8:02 the install commands like npm install.
8:04 But if you need to run any specific
8:06 setup scripts for the environment, you
8:08 can do that right here. Again, we can
8:10 toggle the internet access option on and
8:12 off here as well. Okay then. So now we
8:15 have a new environment set up on Codex
8:18 Cloud. Let's start giving it some tasks
8:19 in the next lesson. By the way, if you
8:21 want early access to the entire course
8:23 now, you can grab it on the net.dev
8:25 website. It's just $3 to buy, or you can
8:28 sign up for a Net Ninja Pro
8:29 subscription, which is $9 a month, and
8:31 the first month is half price with this
8:33 promo code right here. So, I will leave
8:35 this link down below in case you want to
8:37 go ahead and buy it. Either way, I'll
8:38 see you in the very next lesson.
8:58 Heat. Heat.


---

## Source: 02 - OpenAI Codex Tutorial #2 - Running Cloud Tasks.txt

- Original path: `addintional info to add\02 - OpenAI Codex Tutorial #2 - Running Cloud Tasks.txt`
- Size: `12704` bytes
- SHA256: `92F85191CBF74D0C85FF2D4A29E345CFA1C8B9D4DED2206DFD68CFA1016D9A7E`

---

Title: OpenAI Codex Tutorial #2 - Running Cloud Tasks
URL: https://www.youtube.com/watch?v=aPXvW7uxQio&list=PL4cUxeGkcC9iDBeA8IyR1IE1kl4w5IDEG&index=2&pp=iAQB
Channel: YouTube playlist
Video ID: aPXvW7uxQio
Transcript language: English auto-generated
Downloaded at: 2026-05-26T01:50:31.703Z

0:02 All right then, my friends. So, now
0:03 we've got Codeex Cloud set up to work in
0:05 our project. We can start asking it to
0:07 run some tasks and make some code
0:09 changes. But before we make any changes,
0:11 I just want to show you the current
0:12 state of the application it's going to
0:14 do some work on. So, this is a nextJS
0:17 application and at the moment it's
0:19 basically just the UI of a little
0:21 project called Yumpair, which is meant
0:22 to be a food pairing site where users
0:24 can pair together different foods, then
0:26 other users can rate those pairings,
0:27 etc. There's no back end or anything
0:29 like that wired up to this right now.
0:30 We're just going to be focusing on the
0:32 front end and the UI for this course. So
0:34 now we're going to get Codeex working on
0:36 a few different little tasks for this
0:38 project. So then how do we now assign a
0:41 task to Codeex to run on the cloud for
0:43 this application? Well, all we need to
0:45 do is first of all make sure the correct
0:47 environment is selected down here and
0:49 then the correct branch is also
0:51 selected. The one that we want Codex to
0:52 either look at or branch off from. In
0:54 our case that's going to be the main
0:55 branch. And then we can just start
0:57 typing something right here. Now before
0:59 we do that, we actually have two
1:00 options. We can either just chat with
1:02 Codeex about the code in the project
1:03 where Codeex doesn't actually make any
1:05 changes, just reads your code and chats
1:07 with you about it. Or we can actually
1:09 ask Codex to make some code changes to
1:11 the project. So let's start by asking
1:14 Codex a question about the repo to see
1:16 if it's got a good idea about what the
1:18 project is about, what moving parts
1:20 there are, and so forth. So we're going
1:22 to say can you explore the codebase
1:26 and give me a brief summary of this
1:29 project. Right? So once you've written
1:32 that you just need to choose the ask
1:34 option and not the code option. And that
1:37 way codeex won't start making any code
1:39 changes. And when we do that codeex is
1:42 going to fire up this task. Even though
1:44 we're just asking it a question. It's
1:46 still counted as a task. And Codex still
1:48 spins up a container to run the code in
1:50 so it can analyze it. And we'll see that
1:52 task after a moment down here in the
1:54 task list. So this is where all of your
1:56 current tasks are going to be listed.
1:58 And then you can archive tasks once
2:00 they've been completed. For now, I'm
2:03 going to click on this one to see what's
2:05 going on with it. And when we click on
2:06 that, we can either wait on this screen
2:08 until Codex completes the task and
2:10 responds to us here, or we can click on
2:12 this link to view the task logs in real
2:15 time as it runs. If we do that, we're
2:17 going to see everything Codex is doing
2:18 on the right from setting up the
2:20 environment to reading the files and all
2:22 the reasoning and steps it takes in
2:24 between. You can also make this side
2:26 panel right here, which is where Codex
2:28 will eventually reply a little bit wider
2:30 if you wanted to as well by moving this
2:32 around. So then, Codex has now finished
2:34 this task and you can see all the logs
2:36 over here on the right if you scroll
2:38 right down. I'm not going to go through
2:39 them because there's far too many, but
2:41 it's basically looking at all the
2:42 different files and analyzing the code.
2:44 And then once it's finished, it gives us
2:46 a reply right here, which includes a
2:48 summary of the app. And it says, "Yumper
2:50 is a Next.js application for discovering
2:52 and sharing flavoral ingredient
2:54 pairings, inviting users to suggest
2:56 combinations such as strawberries plus
2:58 balsamic, etc., etc." Then it lists some
3:01 key features like the homepage that
3:03 we've got, the create pairing page, and
3:05 it's picked up on the unit test as well.
3:07 Now, it's not done any test because I
3:09 just asked it a question about the
3:11 application. I didn't ask it to
3:12 implement any kind of new features. But
3:14 that is an example of how we can just
3:16 basically chat with codeex and get it to
3:19 look at the codebase and give us a
3:21 response. Now, if you wanted to carry on
3:23 that chat, you could do right down here
3:25 and you could just ask it a follow-up
3:27 question and then you could choose
3:28 either to ask it something or turn this
3:31 into a task where it actually perform
3:33 some code changes. Now, I'm not going to
3:34 do any of that right now. I'm just going
3:36 to go back over to the dashboard right
3:39 here where we see this task. Now, if you
3:41 want to archive this task, if you're
3:43 done with it, you can do it by clicking
3:44 on this button right here, the archive
3:46 button. And then if we go over to
3:48 archive, you can see all of the tasks I
3:51 recently had, including some other ones.
3:53 Okay, so now we've asked Codex a
3:54 question about the project. Let's give
3:56 it some real work to do. What I'd like
3:58 to do is add some more fields on the
4:00 form to create a new food pairing, which
4:03 is going to be a description field, and
4:05 also somewhere a user can add some
4:07 commaepparated tags. So I'm going to ask
4:09 Codex to work on this by pasting in the
4:11 following prompt which says can you add
4:14 two more fields to the new food pair
4:16 form. One a short description field and
4:18 two a field to add tags which are comma
4:21 separated. The tags should be shown
4:23 within the input field as a pill design
4:24 when a user adds a comma and each one
4:27 should contain a cross to delete them
4:28 again. Duplicate tags should not be
4:30 allowed. The two fields should stack on
4:32 top of each other. So, that's the prompt
4:35 and notice it's fairly precise and I've
4:37 actually made an effort recently to make
4:38 my prompt a little bit more precise and
4:40 keep the AI models on track. But now,
4:42 let's kick this off by hitting the code
4:44 button, not the ask button this time.
4:46 And when we do that, we should see a
4:48 task down here after a moment, which we
4:51 can then click on to go to that task and
4:53 view the logs and whatnot. And again,
4:55 Codeex is spinning up another brand new
4:57 container here, which it does for each
4:59 new cloud task. But this time, it's also
5:01 going to start making some code changes.
5:03 And it does this in its own remote
5:05 environment. So it's not touching our
5:07 main codebase in case we don't like what
5:08 it does. And if we don't like what it
5:10 does, well, we can just discard the task
5:12 and move on to a new one. All we need to
5:14 do now then is just wait for this task
5:16 to finish.
5:18 All right. So it looks like Codeex has
5:20 finished that task and it gives me a
5:22 summary of what it's done right here. It
5:25 also tells me what testing it's done and
5:27 those tests have passed. It provides a
5:30 screenshot down here which is a nice
5:31 feature. So, if we click on that, we can
5:33 see the new fields down here, a short
5:35 description and any tags. So, that's
5:38 nice. It looks good. And then any files
5:40 that it's changed, we're going to see
5:41 the diffs right here. So, we can scroll
5:43 through the diffs over on the right. You
5:45 can see this menu. We've got the top got
5:47 the preview, which is the screenshot,
5:49 the diff, which is all the code changes.
5:51 So, we could scroll through those and
5:53 take a look at all those code changes,
5:54 and then also the logs as well. Also, up
5:57 here, we have this button to create a
5:59 PR. So I'm going to click on this now to
6:01 have codeex create that PR and then
6:04 after a moment that button should change
6:06 to a view PR button which we can click
6:08 on again to open that on GitHub. So then
6:12 here we go. This is the PR that Codex
6:14 made and we can see it added a
6:15 description summarizing what changes it
6:18 made to the code. It also added a link
6:20 to the task on Codex as well which is
6:22 quite nice. And then up here we can see
6:24 the branch that Codex made to work on
6:25 these changes. And by default, these
6:27 branches all start with codeex, then a
6:30 forward slash, and then whatever the
6:31 feature might be. You can, I think,
6:33 change this in your codec settings back
6:35 on the codec site, but we just kept the
6:37 defaults. So, we could review the
6:39 changes here on the PR right now, but I
6:41 just want to preview this branch locally
6:42 on my computer so that I can view this
6:44 change in a browser before we merge it.
6:47 Okay, so in VS Code, I'm on the main
6:50 branch currently. And now I'll run a git
6:52 fetch to pull down the latest refs for
6:54 all the branches on the remote. Then I
6:57 will just switch to the new branch by
6:59 running git switch and then pasting in
7:01 that new branch name. And once I've done
7:03 that, I can hit enter to switch to that
7:06 branch. And I should have all the
7:07 changes on this branch locally. And I
7:09 could view those changes and that code
7:11 directly here in VS Code, but also
7:13 preview the changes now in a browser.
7:15 So, I've already got the dev server
7:17 running and now I just need to visit
7:19 localhost port 3000 to view this site.
7:21 And by the way, I can do this because I
7:23 already had a local copy of the repo
7:25 that Codeex is working on on my computer
7:27 and it was fully up to date with the
7:29 remote one before Codex started making
7:31 any changes. So, all I needed to do was
7:33 bring down that new branch into my local
7:35 repo. Now again, if you're completely
7:38 new to Git and GitHub and this is going
7:39 over your head, I would highly suggest
7:41 learning at least the basics of that
7:43 before you start playing around too much
7:45 with Codex Cloud because Codex heavily
7:47 involves GitHub in its workflow by
7:49 making new branches, opening PRs and all
7:51 that jazz. So if you want to master Git
7:53 and GitHub first, then I do have that
7:55 masterass on my pro site and the link to
7:57 that is down below the video. Okay. So,
8:00 if we go to the make a young pair page,
8:02 which is where the form is, and scroll
8:04 down, we can see those two new fields
8:06 right here. We have the description. So,
8:07 I'll say an awesome pair. And then we
8:10 have the tags. And we should be able to
8:12 add some. So, let's say sweet. And then
8:14 a comma. And yeah, that appears. It
8:16 looks pretty nice. And if we click on
8:18 the cross, it goes away. Let's try
8:20 adding a duplicate because we did say we
8:22 shouldn't be allowed duplicates. I'm
8:23 going to say sweet again, then a comma
8:25 to add it. And yeah, it doesn't add the
8:28 suite twice. Let's say fruity and then a
8:31 comma and yeah everything works there.
8:33 So let's also try and reset these fields
8:35 by clicking on the reset button and that
8:37 works as well. Awesome. Okay, so at this
8:40 point I might be happy with the work
8:42 that Codex has done and I want to merge
8:44 that new feature branch into main. So
8:47 let's quickly do that. And we can also
8:49 delete the branch it was working on too
8:51 since we won't need that anymore. And at
8:53 this point, I probably want to update my
8:55 local main branch by pulling those
8:56 changes on main down. Also, we can head
8:59 back to the Codeex dashboard right now
9:01 where we can still see that task down
9:04 here in the task list. And since that
9:06 task is complete, we can now archive it
9:08 by clicking on this little icon right
9:10 here. Then we can switch to the archive
9:13 tasks by clicking on the archive tab. As
9:16 of yet, I don't think there's a way to
9:17 permanently delete the tasks. I'm sure
9:19 that's going to come at some point in
9:20 the future. But anyway, now we have
9:23 chatted with Codeex about a project and
9:25 we've also assigned Codeex a coding task
9:28 which it completed on its own feature
9:30 branch. Then we've asked it to make a PR
9:33 for that new feature. We've previewed
9:35 the feature locally and then we've
9:36 merged it into main on the remote repo.
9:39 In the next lesson, we'll take a look at
9:41 how codec can review its own code
9:43 changes and pull requests on GitHub.


---

## Source: 03 - OpenAI Codex Tutorial #3 - Code Code Review.txt

- Original path: `addintional info to add\03 - OpenAI Codex Tutorial #3 - Code Code Review.txt`
- Size: `8123` bytes
- SHA256: `C85321A86DCA1842C9F118908BC510FC07E64F7B2B5C8805D41D94E63C21DEED`

---

Title: OpenAI Codex Tutorial #3 - Code Code Review
URL: https://www.youtube.com/watch?v=t_NcBWq03YI&list=PL4cUxeGkcC9iDBeA8IyR1IE1kl4w5IDEG&index=3&pp=iAQB
Channel: YouTube playlist
Video ID: t_NcBWq03YI
Transcript language: English auto-generated
Downloaded at: 2026-05-26T01:50:31.703Z

0:00 All right then, my friends. So, we've
0:02 seen now how Codex Cloud can run tasks
0:04 to make code changes and open pull
0:06 requests. Now, I want to show you how
0:08 Codex can review its own PR directly on
0:10 GitHub. So, the first thing we need to
0:12 do is come to the settings link up here
0:14 and then head to the code review option.
0:17 Once you're there, you're going to see a
0:18 list of all the repos on your GitHub
0:20 account. And we just need to search for
0:22 the repo we want to enable code review
0:24 for. In our case, Codeex has been
0:26 working on the Yumpair repo. So, we're
0:28 going to search for that repo in this
0:30 search bar. Now, one thing I have
0:33 noticed about the Codeex Cloud UX is
0:35 that sometimes it's a little bit laggy,
0:37 a little bit slow, and it can take a
0:39 long time to try and find a repo. But
0:41 once it is showing, you should be able
0:43 to hit the little toggle switch to allow
0:45 Codeex to review u the work on that
0:48 repo. But again, the UX and UI is really
0:51 unresponsive and slow. It might just be
0:53 at the moment. So, you might need to
0:54 refresh the page to see that switch
0:56 turned on. Anyway, now we have Codex
0:59 review switched on for the project, we
1:01 can go back to the Codeex dashboard and
1:03 assign another task to Codeex, but this
1:06 time once it's completed the task and
1:07 opened the PR, we'll have Codex review
1:09 its own code as well. So again, I'm
1:12 going to make sure that the main branch
1:13 is selected for the environment that
1:15 we're working in because that's where I
1:17 want Codex to branch from. And then I'm
1:19 going to paste in the following prompt.
1:22 I want some front-end validation for the
1:24 add new pair form. Users must add a
1:27 description at least 10 characters long
1:29 and have at least one tag added. The
1:31 other two fields, food A and food B, are
1:33 also required. Can you add some
1:35 validation and error feedback to the
1:37 form based on these conditions when a
1:40 user submits? So then we'll hit the code
1:43 button to fire off this task, which we
1:45 will see after a moment down in the task
1:47 list. Again, Codeex is going to spin up
1:49 a new container to work on that task in
1:52 isolation, and we can keep track of
1:54 everything it's doing in real time by
1:56 heading to that task and then to the
1:58 logs. So, I'm not going to sit here
2:00 right now and just keep this recording
2:01 while it's working. I'm going to pause
2:03 the recording right now. I'm going to
2:04 start it back up again when it's done.
2:07 All right, so now it's all done and we
2:09 can see all the changes it's made. Let's
2:12 go ahead and open a PR by clicking on
2:14 this button right here. And again, once
2:16 it's made that PR, after a few moments,
2:18 we can click the button again to view it
2:20 on GitHub. Okay, then. So, here it is.
2:23 And we can see a summary of the changes
2:25 made in the PR description. And now we
2:27 can trigger a code review by adding a
2:29 comment down here. And that comment
2:31 should mention codec. So, at codeex
2:33 followed by the word review. And then we
2:37 can add that comment. Now once we've
2:38 done that, Codeex is automatically going
2:41 to look at this PR and all the code
2:43 changes suggested within it and provide
2:45 a little code review right here on
2:47 GitHub. And you can actually see the
2:50 little eyes emoji right here, which is
2:51 codeex basically acknowledging the
2:54 request. Now, it might take a few
2:56 moments to complete. So I'm going to
2:57 pause the recording right here while it
2:59 does its thing. Then I'm going to start
3:01 it back up again when it's done.
3:03 Okay, so it looks like Codex has
3:05 finished its review. So if we scroll
3:07 down, we can see it's comment down here.
3:09 And if we expand this, it says, "Your
3:11 team has set up Codex to review pull
3:12 request in the repo. Reviews are
3:14 triggered when you open a pull request
3:15 for review. Mark a draft as ready or
3:17 comment at Codex review, which is what
3:19 we did right here. If Codex has
3:21 suggestions, it will comment. Otherwise,
3:23 it will react with a thumbs up." It also
3:26 says that Codex can answer questions or
3:27 update the PR. Try commenting at Codex,
3:30 fix this CI failure, or Codeex address
3:34 that feedback. So, let's see what it
3:36 suggests. And if we scroll down here,
3:39 you can see that it has one suggestion,
3:42 and it's to do with the validation error
3:44 after we clear the tags. So, I'm not
3:47 going to go through all of this right
3:48 now, but what you could do if you wanted
3:50 to is you could say at codeex fix the
3:53 issue or address that feedback. And in
3:55 fact, let's try that. We'll say at
3:57 codeex
3:58 address this feedback like so. And we'll
4:03 comment
4:06 Now when we did that, Codex
4:07 automatically spun up a new task over
4:09 here called address feedback in new pair
4:12 form. And if we click on that, you can
4:14 see it's now working on that task. And
4:17 this is the branch that it's using right
4:20 here. Add frontend validation for add
4:22 new pair form. And if we go back to
4:24 GitHub and scroll up, then we can see
4:28 that it's exactly the same branch. So,
4:31 it's basically just going to update this
4:33 PR right here with the work it does on
4:36 this same branch.
4:38 So, then after a moment, if we go back
4:40 over here, when the task completes, we
4:42 can see the changes. We can see what
4:44 it's done. And we can also update the
4:46 branch by clicking on this button right
4:47 here. So, once we've updated the branch,
4:50 you can either click this again to open
4:51 up a new tab to view the PR. But since
4:53 we already have that open, we can just
4:55 go over here and refresh. And hopefully
4:57 in a second we'll see the updates, which
5:00 we do down here. So you can see these
5:02 changes that it's now made. And now what
5:04 I'd like to do is view these changes
5:07 locally. By the way, you can see that
5:08 other commit that it made right here. So
5:10 this was the change it just made. I'm
5:12 going to view these changes locally in
5:14 my browser now by grabbing this branch
5:17 right here. I'm going to pull that down
5:18 into my local repo and then preview in a
5:21 browser. All right. Okay, so if we go to
5:23 this page to see the form, scroll down
5:26 and try to create a pair without adding
5:28 any fields. We should see some
5:29 validation errors. So we see those
5:32 please enter ingredient A. B description
5:34 must be at least 10 characters. Add at
5:36 least one tag. All right, so let's fill
5:38 this in. I'm going to say milk and then
5:40 peanut butter. And you can see those
5:43 errors have gone away in real time as we
5:45 added these. Description must be at
5:47 least 10 characters. Just say an awesome
5:50 nutty drink. And again, the error went
5:53 away. And then let's add one tag. And
5:56 that can just be I don't know how to
5:57 describe this. Awesome. Like so. Try to
6:00 create the pair. And we get no error
6:02 feedback because it's all filled in.
6:04 Okay. So now I might want to merge this
6:06 as normal, which I can quickly do. And
6:09 then also we could delete the branch
6:11 once that's done as well, just to clean
6:12 up a little bit. And then back on
6:14 Codeex, we could again archive this task
6:17 if we're done with it. So then my
6:19 friends, that's how we use the Codex
6:21 review tool. First, we enable it on
6:22 whatever repo we're working on from the
6:24 settings and then we invoke a review by
6:26 mentioning Codex followed by the word
6:28 review. Next up, we're going to break
6:30 away from the Codex cloud service for a
6:32 little bit and we're going to look at
6:33 the Codex CLI.


---

## Source: 04 - OpenAI Codex Tutorial #4 - Using the Codex CLI.txt

- Original path: `addintional info to add\04 - OpenAI Codex Tutorial #4 - Using the Codex CLI.txt`
- Size: `13296` bytes
- SHA256: `09A5808B26A8F338BF413491A22D2E14C28D73B2BF11A689EAF390781C85FF3B`

---

Title: OpenAI Codex Tutorial #4 - Using the Codex CLI
URL: https://www.youtube.com/watch?v=hia0PznjGt8&list=PL4cUxeGkcC9iDBeA8IyR1IE1kl4w5IDEG&index=4&pp=iAQB
Channel: YouTube playlist
Video ID: hia0PznjGt8
Transcript language: English auto-generated
Downloaded at: 2026-05-26T01:50:31.703Z

0:01 Okay then gang, in this lesson we're
0:03 going to step away from Codex cloud to
0:05 look at the Codex CLI tool which is
0:07 still a part of the same Codex product.
0:09 It's just another way of working with
0:10 Codex. So the Codeex CLI is a coding
0:13 agent just like Codex Cloud is but this
0:15 time we run it locally on our computer
0:17 from the terminal and we can ask it to
0:19 make changes to a project locally on our
0:21 computer this time instead of remotely
0:24 like we would on Codeex Cloud. Now, if
0:26 you've ever used Claude Code before,
0:28 it's basically Codeex's version of that.
0:30 And the good thing about the CLI tool is
0:33 that we can just spin it up in any
0:34 project locally on our computer to make
0:36 code changes within that project. So,
0:39 let's try installing this then, and
0:41 using it within the same project, but
0:43 this time in our local version of the
0:45 repo. So, I'm on the Codex docs right
0:48 now, which I will leave a link to down
0:50 below the video. And down here you can
0:51 see that we can install the codec cli
0:54 npm or with brew if you're on a Mac. I'm
0:56 going to copy this first command then
0:58 and in my terminal I will paste in and
1:00 then hit enter to install it. Now before
1:03 we start using the codec cli I want to
1:06 say one thing. This product is quite
1:08 obviously still undergoing a lot of
1:10 development and changes. So there might
1:12 be a couple of things which are
1:13 different if you're watching this video
1:15 sometime in the future. But on the whole
1:16 I think the core functionality should be
1:18 roughly the same. Also, support on
1:20 Windows directly is considered
1:22 experimental at the time of recording
1:24 this video as well. It does still work a
1:26 lot of the time, and in fact, I'm using
1:28 Windows to make some of this course, but
1:30 there could be some glitches. In
1:32 particular, I've noticed buggy behavior
1:34 when it comes to using MCP servers with
1:36 codecs on Windows. You can also run
1:39 Codex in WSL on Windows 11, which some
1:42 people have said gives you a smoother
1:44 experience. I've personally not had any
1:46 major issues running Codex CLI on
1:48 Windows yet, aside from the MCP stuff,
1:51 but you should be aware that support is
1:53 experimental at this stage. So maybe
1:55 only use it on throwaway projects for
1:57 now. So then once it's been installed,
2:00 we can open a project in a code editor.
2:02 I'm using VS Code, but the editor
2:04 doesn't really matter because we'll only
2:06 be using Codex CLI from within the
2:08 terminal, which means you don't even
2:09 really need an editor. But I like to
2:12 have mine open to see firsthand the code
2:14 changes that Codeex is making. So I'll
2:16 be using VS Code's integrated terminal
2:18 to run Codeex. But again, you could use
2:20 a different terminal if you want. The
2:22 important part is that you navigate to
2:24 the correct working directory to the
2:25 root of your project folder within the
2:27 terminal. Once you're there, the first
2:29 thing we need to do is log to the Codex
2:31 CLI, which we can do by running the
2:33 command codeex login. When you run that,
2:37 it's going to open up a browser and ask
2:39 you to authenticate using your chat GPT
2:42 account, which I'm currently doing off
2:44 screen. But when you've done that, you
2:47 should eventually see a little success
2:49 message in the terminal which says
2:51 you're now logged in. Okay. So next, we
2:54 can just run the codeex command to start
2:56 a codec session within this project. And
2:59 when we do this for the first time in a
3:01 folder, Codeex wants to know if it can
3:03 work in this folder without asking for
3:05 approval or whether we should approve
3:06 edits and commands each time. I'm going
3:09 to select the first option so I don't
3:11 get bombarded as much every time it
3:14 wants to make edits to a file or run
3:16 commands. All right, so now we can go
3:18 ahead and start asking Codeex to do
3:20 things for us. Now, you'll see these
3:22 different commands at the top of the
3:23 session right here, which Codeex is
3:25 telling us about. And we're going to
3:26 look at those commands in the next
3:27 lesson. But for now, let's just ask it a
3:30 simple question like, can you give me a
3:33 brief summary of this project?
3:39 And by the way, you're also going to see
3:40 this message right here that says MCP
3:42 client for playright failed to start,
3:44 program not found. So, you know, like
3:46 before when I said that on Windows I've
3:48 been having trouble with MCP servers.
3:50 Well, this is an example of this because
3:52 I tried to get the MCP server playright
3:54 to work on Windows and I was having
3:56 trouble with that. So, this is not going
3:58 to show in your terminal, only in mine.
4:00 Don't worry about that for now. Anyway,
4:02 now I'm going to kick off this by
4:04 pressing enter.
4:07 And along the way, you will also have to
4:10 allow permission for certain things like
4:12 this to run a command.
4:14 All right, so now Codex is finished. And
4:16 along the way, I did have to give it
4:18 permission to run certain commands on
4:20 Windows PowerShell. And I think this is
4:22 one of the areas that it definitely
4:24 feels smoother on a Mac than it does on
4:25 Windows because again, it is
4:27 experimental on Windows. But it's still
4:29 done the job and it's given us a project
4:32 overview right here. So it's picked up,
4:34 it's a next application using React.
4:36 We've got different landing pages, we
4:38 have the pair creation routes, we have
4:40 client side form logic, we use Tailwind,
4:42 etc. And it also picks up on how we test
4:45 different things as well. And then
4:46 finally, it gives us these next steps.
4:49 So it tells us how to run the
4:50 application and how to test the
4:52 application as well. Okay. So now let's
4:54 ask it to work on something for us. But
4:56 before we do, I just want to make sure I
4:59 move to a new branch so that I'm not
5:01 messing up the codebase. So in a new
5:03 terminal, I'm going to run git switch
5:05 with the C flag to create new branch.
5:08 And I'm going to call this refactor
5:10 slashbtn
5:12 component.
5:14 All right. So then we can switch back to
5:16 the codec session and we're going to
5:18 give it a task to do which is going to
5:20 be something like can you make a
5:22 reusable button component and use it to
5:25 replace the buttons currently on
5:27 different pages. It should be able to
5:29 accept a bg color and a handler function
5:32 as props. So then we can hit enter and
5:35 let codeex do its thing. And by the way,
5:37 when we work locally with Codex using
5:39 the CLI or with the VS Code extension,
5:42 which we'll see later, that doesn't
5:44 automatically add the task to Codex
5:46 cloud. It just works locally within this
5:49 project on my computer, right? And
5:50 that's why I'm doing this work on a new
5:52 branch. Now, as it works on this task,
5:54 it is going to ask me to approve some
5:56 code changes that it makes as it tries
5:58 to make them. And there might be several
6:00 different approvals all within this same
6:01 task. So, for the sake of this video,
6:03 I'm just going to approve all the
6:04 changes as they happen. And then at the
6:06 end, we're going to look at the
6:08 resulting code.
6:10 All right, then. So, that took a little
6:11 while, but eventually we got there. And
6:13 I did have to approve a few things along
6:15 the way. So, you can see right here, the
6:17 changes have been summarized. It said
6:19 it's added a typed reusable button that
6:21 accepts a background color, an optional
6:23 text color, and click handler while
6:25 preserving other button props. We've
6:27 wired the new component into the pair
6:29 creation form and we've introduced
6:32 shared button styling hooks. All right.
6:33 So, if we take a look over here as well,
6:36 if I close this off, we can see the
6:38 components folder and we can see that
6:40 new button component inside here. Now,
6:42 I'm not going to go through this line by
6:44 line. But just in general, yeah, we have
6:47 this button function and then the button
6:50 template down here. All right, it looks
6:52 okay at a glance. We have some changes
6:54 in the app folder as well. So the CSS
6:57 file, I'm sure, for styling the button.
6:59 And then also in this form, we can see
7:02 down here hopefully somewhere a new
7:05 button component. Let's have a look. If
7:08 we go down to the template, can we see
7:11 the button anywhere? Should be at the
7:12 bottom of the form, I guess. Okay. Yeah.
7:14 So, we're using that new button
7:16 component right here as well. So, now
7:18 let's preview this in the browser.
7:21 All right. Now, thinking about this, we
7:23 shouldn't actually see any noticeable
7:24 differences because I've not asked it to
7:26 redesign the button or anything like
7:28 that. I've just asked it to extract the
7:31 button and put it in its own reusable
7:33 component. So, it should look the same.
7:35 And it put that in the form. So, if we
7:37 scroll down, well, yeah, it looks the
7:39 same. And does it still work? Well,
7:41 let's try clicking on it. And yeah, we
7:43 still get that same feedback. And in
7:45 fact, I think it's updated the error
7:47 feedback as well. So, it has done
7:50 something extra which I didn't ask it to
7:52 do, but sometimes AI models do this kind
7:54 of thing. Anyway, I'm happy with this.
7:56 It all looks good. Okay. So, just very
7:58 quickly, I also want to show you how to
8:00 manually add context to the CLI tool by
8:02 referencing files for it to look at.
8:05 Now, by default, Codeex can
8:06 automatically scan your codebase and
8:08 read all the files. But by manually
8:11 adding the file to the context, you're
8:12 giving Codeex a big hint about where the
8:14 work should be done, and it keeps it
8:16 more focused and on track, I think. For
8:18 example, if I needed some code changes
8:21 and I knew those changes needed to be on
8:23 the homepage, then I could add that file
8:26 to the context to let CEX know. To do
8:29 that, then we could just use the at sign
8:31 and start typing the file. And when we
8:34 do that, Codex is going to start a fuzzy
8:36 search to list all the possible file
8:38 paths. And we can just key through these
8:41 and hit tab on the one that we want to
8:43 add as context. When we do that, we see
8:46 that whole path added to the prompt.
8:48 Under the hood, the contents of that
8:49 file gets added to the prompt as
8:51 context. So then I'd just like to write
8:54 my prompt as normal, asking codeex to do
8:56 something for me in this file. For now,
8:58 I'm just going to delete this prompt
9:00 because there's something else I want to
9:01 show you. And that is how to add images
9:04 to context as well. Now, we can do this
9:07 by dragging an image file into the
9:09 terminal. And when we do that, we'll see
9:11 a path to the image right here. So this
9:13 image is of the Flutter logo and I want
9:16 to ask Codeex to look at this image and
9:18 make two new theme colors in the CSS
9:21 file based on the blues in this logo. So
9:23 I'm going to paste this prompt in which
9:25 says can you look at this Flutter logo
9:28 image and make two new theme colors in
9:31 the global CSS file called blue one and
9:33 blue 2 based on the two blue colors in
9:36 the image. I'm also going to add the
9:39 global CSS file as context to avoid any
9:42 confusion by using the at sign again.
9:44 And then I'm going to start looking for
9:46 that CSS file until I see it down here
9:48 in the options. Then I'll key down to
9:51 add that file. All right. So now I'm
9:53 going to send this request off and see
9:55 what happens.
9:57 All right. So it says it's done those.
9:59 So let's take a look inside source, then
10:01 app, and then into globals.css.
10:04 And yeah, we can see those two new theme
10:06 colors right here. Flutter inspired
10:08 blue. So, it's done that successfully.
10:10 Okay then, my friends. So, that's the
10:12 basics of using the Codex CLI locally in
10:14 a project to make code changes. And
10:16 again, it's important that you manually
10:18 use local branches when any coding agent
10:20 like codec starts making those changes
10:21 because if not, you're going to find
10:22 yourself in a world of mess with your
10:24 codebase before you know it. Now,
10:26 typically what I'd do now is commit
10:28 these changes. If I'm happy with them,
10:30 then I'd push this feature branch up to
10:32 GitHub where we can review it and then
10:34 merge it into main. Not going to do that
10:36 on camera because this is not a version
10:37 control course and I want to keep the
10:39 focus on codeex itself. Anyway, in the
10:41 next lesson, we're going to continue
10:43 using the CLI tool and explore some of
10:45 the built-in commands that we can use
10:46 with


---

## Source: 05 - OpenAI Codex Tutorial #5 - CLI Commands & Resuming Sessions.txt

- Original path: `addintional info to add\05 - OpenAI Codex Tutorial #5 - CLI Commands & Resuming Sessions.txt`
- Size: `8529` bytes
- SHA256: `D56FF9FD13336259D5F8256E2088D9C058289B079F23659732F8447523B57845`

---

Title: OpenAI Codex Tutorial #5 - CLI Commands & Resuming Sessions
URL: https://www.youtube.com/watch?v=htNz7uazonY&list=PL4cUxeGkcC9iDBeA8IyR1IE1kl4w5IDEG&index=5&pp=iAQB
Channel: YouTube playlist
Video ID: htNz7uazonY
Transcript language: English auto-generated
Downloaded at: 2026-05-26T01:50:31.703Z

0:00 All right, then. So, we've got the Codex
0:02 CLI up and running now, which we started
0:04 using in the previous lesson to make
0:05 changes to the project on a new branch.
0:07 Now, I've since pushed that branch up to
0:09 GitHub and merged it, and I pulled down
0:10 the most recent version of the main
0:12 branch as well, which I'm on now, so
0:13 everything's up to date. So, in this
0:15 lesson, we're going to look at some of
0:16 the built-in commands that come with the
0:18 Codex CLI. And again, if you've ever
0:20 used Claude Code, it's a pretty similar
0:22 experience to their own commands, or
0:24 slash commands as they're called,
0:25 because each command starts with a
0:27 slash. And it's exactly the same in the
0:29 Codex CLI. Each built-in command starts
0:31 with a forward slash. Now I'm just going
0:34 to exit the current codec session by
0:36 pressingtrl + c. And when I do that,
0:38 it's going to put me back in the regular
0:39 terminal. Then I'm going to run the
0:41 codeex command again to start a brand
0:43 new session. And when I do that, the
0:46 first thing codex does is suggest trying
0:48 out some of these different commands. So
0:50 the first one is the init command, which
0:52 creates an agents.md file, which we're
0:54 going to talk about, I think, in the
0:56 next lesson. The second one is the
0:58 status command which shows a bit of
1:00 information about the current session.
1:02 Then we've got the approvals command
1:04 which we can use to set up automatic
1:05 approvals for codecs when it comes to
1:07 file edits and whatnot. And finally the
1:09 model command which lets us choose an
1:11 open AAI model to work with. And by
1:13 default this is set to the GPT5 codeex
1:16 model at the time of recording. There
1:19 are other commands that we can use as
1:20 well which we can see if we type a
1:22 forward slash. So if we scroll down
1:24 here, we can see some more like the new
1:27 command to start a new session. There's
1:30 the compact command to squash the chat
1:32 history into a compact summary to reduce
1:34 the overall session context. And this is
1:36 useful because as your sessions go on
1:38 for longer, the context of the session
1:40 accumulates and gets a bit bloated. And
1:42 when that happens, it can affect AI
1:44 decision-making when it comes to code
1:46 edits. And you can also eventually hit
1:48 the context limit, which is how much
1:49 context an AI model can process at any
1:52 time. So this compact command is really
1:55 useful if you have these long running
1:57 sessions to prevent context buildup and
1:59 bloat. We've also got the diff command
2:01 for showing git diffs directly in the
2:03 terminal. We've got the mention command
2:06 to add files as context to a prompt. And
2:08 this is actually just the same as using
2:10 the at sign which is much quicker than
2:12 running this command. So I'm not sure
2:14 why they've added this one in unless I'm
2:16 missing something. There's the MCP
2:18 command which lists out all the MCP
2:21 servers configured for Codex in this
2:23 project. And we'll talk more about MCP
2:25 servers later in the course. And then
2:27 we've got two more. The logout command
2:28 to log out of the Codex CLI and the
2:31 quick command to quit the current
2:32 session. So there's quite a few commands
2:35 built into the Codex CLI. Not as many as
2:37 Claude Code, but I do think OpenAI will
2:39 be adding to this list as they flesh out
2:41 the product even more. Okay, so let's
2:43 try using a couple of these commands
2:45 then. First of all, I'm going to use the
2:47 forward slash status command to give us
2:50 some information about the current
2:51 session that we're in. And when we hit
2:53 enter, we should see a bunch of details
2:55 all formatted quite nicely in my
2:57 opinion. We've got workspace information
2:59 which lists the working directory, the
3:01 approval mode, the sandbox, which is
3:03 basically where and how Codeex is
3:04 allowed to play. In this case, it has
3:06 right access only to this workspace, and
3:09 also any agent files, which we don't
3:11 have yet. Below that, we've got the
3:12 account information. Then we've got the
3:15 current model that we're using along
3:16 with some extra details about that
3:18 model. We've got the client version
3:20 which is just the version of the codec
3:21 cli we're using. And then finally we've
3:24 got the token usage at the bottom which
3:26 is a representation of how much we've
3:28 used the AI model in terms of our own
3:30 input the prompts and the AI's output.
3:34 So that's the status command. Let's try
3:36 another one like the model command. So
3:38 just forward slash then model then hit
3:41 enter. And when we do that, we can see
3:42 that currently we have the GPT5 codecs
3:45 with medium reasoning selected. And in
3:48 fact, all of these models are GPT5
3:50 variations at the time of recording. And
3:53 we can use different degrees of
3:54 reasoning with these models. I'm going
3:57 to stick with the current selection and
3:58 just hit escape for now. Next, let's try
4:01 the forward slash approvals command,
4:04 which is where we can select different
4:05 approval modes for this project. Right
4:07 now it's on auto, which means it can
4:09 read files, make edits, and run commands
4:11 automatically within this workspace. If
4:14 you switch it to read only, then Codeex
4:16 can only read the files and answer
4:18 questions about them. And it's going to
4:19 need your approval before it does
4:21 anything else. Full access is where you
4:23 give Codex full access to do what it
4:25 wants with automatic network access as
4:27 well. I'm going to stick with auto again
4:29 and hit escape to go back. So that's
4:32 just a few of the commands and we might
4:33 be using a few more as we go forward.
4:35 But for now, I want to use the quick
4:37 command to quit the current codec
4:39 session so that we can get dumped back
4:41 into the regular terminal. Okay. So,
4:43 there's one more thing I'd like to show
4:44 you in this lesson, and that is how to
4:46 resume a previous session. So, I think
4:48 so far in this project using the CLI,
4:51 we've made maybe two sessions, possibly
4:54 three, I think just two. But normally in
4:56 a project, I would have a different
4:57 session for every distinct feature I
5:00 want Codeex or whatever other Aentic
5:02 coding agent I'm using to work on. So
5:04 that might be 10, 11, 12, 13, 14
5:07 sessions. And sometimes I might want to
5:09 go back to some of the older sessions to
5:11 continue working on that feature. So in
5:14 codeex to resume a session, we can just
5:16 type codeex in here. And then after
5:18 that, resume and then press enter. And
5:21 when we do that, we're going to get all
5:22 of the different sessions we've had with
5:24 this particular project. Now, there's
5:25 only been two here, but there might be
5:27 more, like I said. So we can just key up
5:29 and down and select one of these using
5:31 enter, and we'll go back into that
5:33 session. You can also search as well. So
5:35 for example, if I search the
5:37 description. So for example, summary,
5:38 which is what we did before. We wanted a
5:40 summary of something. Oops, there we go.
5:43 Summary. We can see it filters out the
5:46 rest of the sessions, but leaves me with
5:48 this one. So I could just press enter
5:49 now to be dumped back into that
5:51 particular session. Now, as of yet, at
5:54 the time of recording this video, I
5:56 don't think there's a way built into the
5:57 Codeex CLI to delete old sessions, but
6:01 I'm sure it's going to come in the
6:02 future. And like I said before, I feel
6:04 like Codeex as a whole is still trying
6:06 to find its feet a little bit and the
6:07 CLI tool does feel maybe a little bit
6:10 unfinished, but because all these
6:12 different providers are just so
6:13 desperate to get their tools out onto
6:15 the market as quickly as possible, we're
6:16 going to see this kind of thing across
6:18 the spectrum. Anyway, now we know how to
6:20 use commands and resume previous
6:23 sessions. Next up, we're going to talk a
6:25 little bit about the agent files.


---

## Source: 07 - OpenAI Codex Tutorial #7 - Codex IDE Extension.txt

- Original path: `addintional info to add\07 - OpenAI Codex Tutorial #7 - Codex IDE Extension.txt`
- Size: `8969` bytes
- SHA256: `D9A908F1E4E139A17310530F6AF12E9373587DCE2E97DDEA7DBA2255651DC4D4`

---

Title: OpenAI Codex Tutorial #7 - Codex IDE Extension
URL: https://www.youtube.com/watch?v=bZ-5CfD2LRU&list=PL4cUxeGkcC9iDBeA8IyR1IE1kl4w5IDEG&index=7&pp=iAQB
Channel: YouTube playlist
Video ID: bZ-5CfD2LRU
Transcript language: English auto-generated
Downloaded at: 2026-05-26T01:50:31.703Z

0:00 All right then gang. So far we have
0:02 looked at Codex cloud to run tasks
0:04 remotely, code review to review code
0:07 changes in poll request on GitHub and
0:09 the Codex CLI to work locally on a
0:11 project. Now I want to look at the
0:13 fourth Codex tool which is the codeex
0:15 IDE extension and that can be plugged
0:17 into VS Code Cursor Windsurf and VS Code
0:21 Insiders. And this extension is very
0:23 much in the same vein as something like
0:25 the copilot extension for VS Code where
0:28 you have a more visual interface to chat
0:30 with the AI and fire off code changes,
0:33 but under the hood, it basically has the
0:35 same functionality as the CLI tool in
0:37 that it allows us to work locally on a
0:40 project with codecs. And again, at the
0:43 time of recording, it's marked as
0:45 experimental for Windows. Now, I've used
0:48 it on both a Mac and Windows. And aside
0:50 from the occasional jitter and some
0:52 problems with MCP servers, I've not had
0:55 any other major problems using it on
0:57 Windows. That much being said, I feel
0:59 like the experience definitely feels
1:01 smoother on a Mac. And for some of the
1:03 next few videos, I'll be switching to my
1:05 Mac for the recordings. Just be aware
1:08 that this is still considered
1:09 experimental on Windows. So then, let's
1:12 go back to the code and start using the
1:14 Codeex extension. The first thing you
1:16 need to do is search for the extension.
1:18 And I would search for OpenAI Codeex
1:21 because if you just search for Codeex on
1:22 its own, then a bunch of other
1:24 extensions come up first. So it's this
1:26 one right here that you want to install.
1:29 Once you've done that, you should see
1:30 the OpenAI logo over here, which you can
1:33 click on to open the Codeex panel. Now,
1:36 when you first do this, you're going to
1:37 need to log in to your ChatgPT account,
1:40 much like we did with the Codex CLI. And
1:42 if you click on this button, it's going
1:44 to take you to a signin page where you
1:46 can do that. So, I'm just going to sign
1:48 into my account off screen. Once I've
1:50 done that, we should see a little
1:52 onboarding sequence inside this panel.
1:54 So, I'm just going to click on next for
1:56 all of these until we finally get to the
1:59 chat screen. And it's from here that we
2:01 can either start chatting with Codeex or
2:03 setting it to work on the code. So,
2:05 we've got the chat window right here
2:07 where we write any prompts. We've also
2:09 got a couple of buttons down here to
2:11 control context, which we'll see later.
2:13 At the bottom, we can also select the
2:15 mode and toggle between the same three
2:17 options we saw in the CLI, which is
2:19 agent mode for the project edits, chat
2:21 mode just for chatting, and then agent
2:23 with full access, including the internet
2:25 and files outside of the project. We're
2:28 going to select chat for now, just so we
2:30 can ask Codeex a question in a moment.
2:32 We've also got these other drop-own
2:34 options, which I'm going to talk about
2:35 over the next few lessons. Up at the
2:38 top, we should see a list of any recent
2:40 tasks we've run on Codex Cloud as well,
2:43 which is a nice touch. And if you click
2:45 on one of those, you'll see that task
2:47 here inside the extension. Now, if I was
2:50 to write something in this task and hit
2:52 enter, it would actually send that reply
2:54 up onto Codex Cloud and work remotely
2:56 again. But we're not going to do that
2:58 right now. Instead, I want to come back
3:00 to the regular chat window and work
3:01 locally. So then same as ever we're
3:04 going to start off by asking codeex
3:06 about the project and the prompt can be
3:08 something like can you give me a quick
3:11 summary of what this project is. So when
3:15 we hit enter we should see that codeex
3:18 starts looking through the project and
3:19 gathering information. Now I actually
3:22 really like the UI of this chat window
3:24 and the way that Codex responds with
3:26 these bullet points when you ask it to
3:27 do something. And you can expand some of
3:29 them as well to see what Codeex is doing
3:32 or thinking under the hood which again
3:34 is nice. Okay, so it looks like Codex
3:37 has finished working now and we can see
3:39 this summary it's provided. So it's
3:41 looking at the home route first of all
3:44 the hero CTA that's the call to action.
3:47 We have a popular pairs list etc. We
3:49 have the pair creation page this route.
3:52 It's got some client side validation on
3:54 the form blahy blahy blah. We have a
3:57 shared layout and we have styling that
4:00 leans on Tailwind v4 and also we use V
4:03 test as well for testing. So yeah, it
4:06 looks like it's gathered all the main
4:08 points of the application. I'm not
4:11 hugely keen on how it's presented it as
4:13 a summary in terms of the language it's
4:15 used. It's not very convers uh
4:16 conversational or anything like that.
4:18 However, that's just a personal
4:19 preference, but it knows what everything
4:21 is at least.
4:23 Okay, so now let's try asking Codeex to
4:25 make some changes. I want to make a
4:27 reusable model component which I want to
4:29 show when the user submits the form
4:31 correctly with no errors. So the first
4:34 thing I'll do is create a new branch and
4:36 do all of the work on that new branch.
4:39 And I'm going to do that by running the
4:41 command get switch then use the C flag
4:44 to create the branch. And I'm going to
4:46 call it featureward slashmodal.
4:49 Once I've done that, I'm going to go
4:50 back to the codeex chat panel and I'm
4:53 going to paste in a little prompt which
4:54 says, "Can you make a reusable model
4:57 component complete with a
4:59 semi-transparent backdrop? The model
5:01 should be white and allow content to be
5:04 passed in via a slot. Clicking on a
5:06 cross should trigger the model to close.
5:09 Can you then show the model with a
5:11 success message when a user submits the
5:13 new pair form with no validation
5:15 errors?" Now, in order for codeex to
5:18 work on the code, we also have to change
5:21 the mode down here from chat to agent.
5:26 All right. So, it looks like it's worked
5:27 now. It's created that reusable modal
5:29 and it's wired it up to the new pair
5:32 form. And down here, you can see in
5:34 detail the different edits and the
5:35 different files it's created. And then
5:38 at the bottom, it said it's run these
5:39 tests as well. It also created that test
5:42 file. Now, I will say one thing. This
5:44 was quite slow and it's been one of the
5:47 slowest I've experienced it while I've
5:49 been using Codeex. And I think that is
5:50 to do with the model it's using right
5:52 here, which is GPT5 Codeex on medium
5:54 reasoning. Now, we're going to talk
5:55 about reasoning a little bit later on,
5:57 but this is a relatively new model at
6:00 the time of recording this video. So,
6:01 what I'm going to actually do is switch
6:03 this to GPT5 Medium for the rest of
6:06 these videos because I find that to be a
6:09 lot quicker for the kind of simple tasks
6:11 that I'm going to be giving Codeex to
6:12 do. I do still think though that this
6:15 Codeex 5 model right here or rather GPT5
6:18 CEX model is really good for slightly
6:21 more complex coding tasks. I will say
6:23 that. But for the sake of this course,
6:25 we're going to keep it on the GPT5
6:28 standard medium model. All right. So
6:31 let's have a look at the changes that
6:33 it's made. So if we go into components,
6:35 we can see that new modal file right
6:36 here. And if we scroll down, we can see
6:40 this modal. And the template is going to
6:44 be right down here somewhere. There it
6:46 is. Okay. So that's the modal. And then
6:50 it created a test file as well. Right
6:52 here. It also updated the CSS and the
6:56 new pair form so that it's going to show
6:58 that model when we submit it. And there
7:01 is the model right here. So let's
7:03 preview this now in a browser. All
7:05 right. So I've already entered in some
7:07 data into this form. I'm just going to
7:08 create this and hopefully we will see a
7:10 modal now which we do right there. So it
7:13 looks okay. And if we click on the close
7:16 button right here, hopefully it's going
7:17 to close as well. Yeah, it does. Now, I
7:20 also want to test that it doesn't show
7:22 when we don't have the form uh filled in
7:25 correctly. And yep, we don't have that
7:27 model now because we've not filled in
7:29 these details. But if we fill these in
7:30 again, then hopefully yeah, it does
7:33 show. Awesome.


---

## Source: 08 - OpenAI Codex Tutorial #8 - Context, Reasoning & TODO's.txt

- Original path: `addintional info to add\08 - OpenAI Codex Tutorial #8 - Context, Reasoning & TODO's.txt`
- Size: `8614` bytes
- SHA256: `3AE520148BEF690C0912E128C379CE135AFCE486D2021B7EAFE43F845768FCF6`

---

Title: OpenAI Codex Tutorial #8 - Context, Reasoning & TODO's
URL: https://www.youtube.com/watch?v=kbv6Rn7lHkI&list=PL4cUxeGkcC9iDBeA8IyR1IE1kl4w5IDEG&index=8&pp=iAQB
Channel: YouTube playlist
Video ID: kbv6Rn7lHkI
Transcript language: English auto-generated
Downloaded at: 2026-05-26T01:50:31.703Z

0:02 Okay then gang, in this lesson I want to
0:03 talk a little bit about adding context
0:05 to prompts, the different reasoning
0:07 levels of the AI model that we can
0:09 switch between and also a nice feature
0:11 which lets us turn to-dos in the code to
0:13 codeex tasks. Now before we start, I
0:16 just want to mention I've already
0:17 switched to a new branch as normal to
0:19 work on whatever feature we're about to
0:20 add just so we don't mess up the main
0:22 branch. So then let's start with adding
0:24 context which is pretty similar to how
0:26 we do it in the codec cli in that we can
0:28 use the at sign to start referencing a
0:30 file in the project. So I could say at
0:32 and then start typing a file name and
0:34 you don't have to start typing the full
0:36 path to the file. You can just start to
0:38 type the name of the file if you want
0:39 and codeex will do a search of the files
0:41 and show you any matches. For example,
0:43 I'm going to type page and codeex would
0:45 show me all the files called page. So I
0:48 could select one of those to add it to
0:49 the context of my next prompt. Now,
0:52 there's also another way to add files as
0:54 context, and that is to click this plus
0:57 icon down at the bottom of the chat and
0:59 search for files that way. So, I could
1:01 start typing page, and again, we'll see
1:03 all the matching files in the project,
1:05 which we can select from. Now, you can
1:07 also add images as context by clicking
1:09 on the add image button down here. And
1:11 that's going to let you search your
1:13 computer for them and add them in. And
1:15 you can also copy and paste images into
1:17 the chat as well, which is really nice.
1:19 For example, I've got this screenshot
1:21 that I took of a 3D button I just Google
1:24 searched and I'm going to copy that
1:26 image and then just paste it into the
1:28 chat. When I do that, you should see
1:30 that little preview of the image up
1:32 here. Then I'm going to write the
1:34 following prompt. Can you update
1:36 atuttontsx?
1:39 And we're using the at sign to add that
1:41 button component to the context. And
1:43 then we'll carry on and say to have a 3D
1:47 bevel effect like in this image. Okay.
1:52 So hopefully when we send this codeex is
1:54 going to look at the image that we
1:55 pasted in and apply a similar effect to
1:58 our buttons. So I'm going to fire this
2:00 off but I'll also speed up the video now
2:02 while Codeex does its work and then I'm
2:04 going to slow it down again when it's
2:06 complete.
2:09 All right. So it's done and it's updated
2:11 these two files right here. Here we can
2:13 actually view all the changes by
2:14 clicking on this and it shows us a
2:16 little diff right here. So if we expand
2:19 this and scroll down, we can see there's
2:20 been quite a lot of CSS added. We've got
2:23 a button bevel class now. And if we
2:26 scroll right down, you can see it's also
2:28 updated the button.tsx file. It
2:30 virtually rewrote the whole thing. So
2:33 what I'm going to do now is close this
2:35 and just preview this in the browser.
2:38 All right. So, let's head to the form,
2:39 which is where this button component was
2:41 rendered. And scroll down. And yeah, it
2:44 looks okay. I can see the 3D effect at
2:47 the bottom. I would probably do this
2:48 differently. Probably the colors and
2:50 make that a dark green instead of a
2:52 gray. Uh, but you know what? It's got
2:54 the general idea. And maybe I'd just go
2:56 back and prompt again and say, can you
2:58 update this and that? And it would look
3:00 better. Okay, so that's adding context
3:02 to prompts. And next up, I want to
3:04 quickly talk about the different
3:05 reasoning effort levels that we can
3:07 choose from. So, you can find these
3:08 levels in this menu down here. And by
3:10 default, the reasoning level is set to
3:12 medium, which is what I've been keeping
3:14 it on for most of the time. But you can
3:16 also dial this down or crank it up. And
3:19 the lower the reasoning, the faster the
3:20 model works, and we get results quicker
3:23 because codec spends less time thinking
3:25 and planning about what it's going to
3:26 do. But the flip side of that is the
3:28 results are sometimes less reliable, and
3:30 it might miss edge cases. The highest
3:33 reasoning level does more planning and
3:35 more thinking. So it takes much longer
3:37 to get results and it consumes more
3:39 tokens as well generally, but it also
3:42 leads to more reliable results most of
3:44 the time. So what level should you
3:46 choose? Well, I personally think it all
3:49 depends on the task you're asking Codeex
3:51 to run. If it's a really simple edit or
3:53 refactor, the minimal or low reasoning
3:55 levels might be good enough. For most
3:57 tasks that are a little large in scope,
3:59 you could stick with the medium level.
4:01 And for much more complex tasks which
4:03 require a lot of thought and planning,
4:04 definitely crank it up to high. And
4:06 again, generally speaking, the higher
4:08 the reasoning level, the more tokens it
4:10 will consume. So for simple tasks,
4:12 definitely don't be selecting the high
4:14 reasoning effort level. I'm going to
4:16 keep it on medium, which is what I found
4:17 to be a decent balance for most tasks I
4:20 run. Okay. So, there's one more thing I
4:22 want to show you in this lesson, and
4:24 it's a nice little feature that Codeex
4:25 added to the extension, and that is to
4:27 turn to-do comments in the code into
4:29 tasks that Codeex can work on. So, it
4:32 might be that you're fleshing out your
4:34 application and you leave little to-do
4:35 comments in your code in different
4:36 places to remind you to come back and do
4:38 certain things later. For example, if I
4:40 open up the homepage component of this
4:42 application, I already have a to-do in
4:45 here, which says to-do, add a recent
4:47 pair section here. And now I've
4:50 installed the Codex extension. I can see
4:52 this option above the to-do which says
4:54 implement with Codex. So I can just
4:56 click on this text to fight off a new
4:58 local task where Codex works on this
5:01 to-do for me. Now when I do that, Codex
5:03 automatically starts up a new chat
5:05 session with a prompt that incorporates
5:07 the to-do in the code and it tells Codex
5:10 to replace the comment with the
5:12 implementation of this task. So then I'm
5:15 going to let Codex run through this and
5:17 I'll speed up the video until it's done.
5:21 All right. So now that's finished and we
5:23 can see all the changes directly here in
5:25 the page. All this big green line is
5:28 where Codeex has added new lines of
5:29 code. So this is the section right here
5:32 and these are the objects that we're
5:34 going to be mapping through down here to
5:36 output a bit of template for each one
5:37 for each pair. So it all looks okay to
5:39 me, but let's see what it looks like in
5:41 a browser. So let's scroll down a little
5:43 bit. We've got the popular pairs which
5:44 was already there. Then this new
5:46 section, the recent pairs, which looks
5:48 almost identical but with a different
5:50 background. So yeah, I think that looks
5:51 pretty good. So then that is a nice
5:54 little extra feature that Codex throws
5:55 into the mix because it means we can now
5:57 add to-dos into the code manually as we
5:59 code, which Codex can then pick up at a
6:01 later time if you don't want to work on
6:03 those right away. And again, as I keep
6:05 mentioning in this course, now we've
6:07 added a new feature, it might be a good
6:09 time to make commits or push changes up
6:10 to GitHub if we're happy. And I keep
6:12 going on about pushing changes to GitHub
6:14 for two reasons. First, I think version
6:17 control is absolutely essential when
6:19 we're working with AI because without
6:20 it, any AI coding agent can wreck your
6:23 codebase very quickly. And second,
6:25 because when you're working with Codex
6:26 Cloud, it relies on you having an
6:28 up-to-date GitHub repository so it can
6:31 run tasks on it remotely. Anyway, I'm
6:33 going to commit and push all those
6:34 changes after this video. And in the
6:36 next lesson, we'll talk a little bit
6:37 about MCP servers.


---

## Source: 09 - OpenAI Codex Tutorial #9 - MCP Servers.txt

- Original path: `addintional info to add\09 - OpenAI Codex Tutorial #9 - MCP Servers.txt`
- Size: `8141` bytes
- SHA256: `187A9259C79001E554311EE5FA560D71C361A75C4ED7784DE311436A54BD079B`

---

Title: OpenAI Codex Tutorial #9 - MCP Servers
URL: https://www.youtube.com/watch?v=zfYEZ3_Nnkc&list=PL4cUxeGkcC9iDBeA8IyR1IE1kl4w5IDEG&index=9&pp=iAQB
Channel: YouTube playlist
Video ID: zfYEZ3_Nnkc
Transcript language: English auto-generated
Downloaded at: 2026-05-26T01:50:31.703Z

0:00 All right then my friends. In this
0:01 lesson I want to talk a little bit about
0:03 MCP servers and how we can connect them
0:05 up with codecs to extend its
0:07 capabilities. Now MCP stands for model
0:10 context protocol and it's a standard
0:12 designed by anthropic for connecting AI
0:14 applications to external services and
0:17 data sources. For example, if I wanted
0:19 codeex to interact with a third party
0:22 API, then by itself it would struggle to
0:24 do that because it doesn't really know
0:25 how to interact with it. But we can
0:27 bridge that gap with an MCP server for
0:30 that API which exposes additional
0:32 context about the API to the AI model in
0:35 the forms of tools it can choose to run.
0:38 For example, it might expose a tool to
0:41 hit a certain endpoint to fetch some
0:43 data. And the AI can choose to invoke
0:45 that tool to perform those kinds of
0:47 tasks. So, there's literally hundreds,
0:50 if not thousands of ready-made MCP
0:52 servers we can use to do these kinds of
0:54 things with popular services like Google
0:56 Drive, Slack, and so forth. The one that
0:58 we're going to be using in this lesson
1:00 is called Context 7, which you can find
1:02 at context7.com.
1:04 And Context 7 contains all the latest
1:06 and up-to-date documentation for many
1:08 different frameworks, tools, services,
1:10 and libraries you might use in your
1:12 project. For example, Next or React or
1:14 Superbase or Tailwind. And the context 7
1:17 MCP server exposes tools to AI models to
1:21 search and pull information from all of
1:23 this up-to-date documentation. So if we
1:25 tell our model to use context 7 when we
1:28 implement a new feature using a certain
1:30 framework or library or service, then we
1:33 could be more confident, I guess, it's
1:34 going to generate code based on the most
1:36 recent documentation. Now, in order to
1:39 use Context 7, you will need to sign up
1:41 for a free account and then grab an API
1:43 key from your dashboard. I've already
1:45 got one and copied it. So, make sure you
1:47 do the same thing. We also need to grab
1:49 the MCP setup code, which I'm going to
1:51 do by clicking on this MCP link at the
1:53 top. And when we do that, it's going to
1:55 direct us to a page with installation
1:58 instructions for various different
1:59 environments and agents. In our case, we
2:02 want to scroll right down to the OpenAI
2:04 codec section and expand it. When we do
2:07 that, we can see this little bit of
2:09 configuration code, which we're going to
2:10 copy. Now if you've used MCP servers
2:13 with other tools like claude code or
2:15 copilot or something else then this
2:18 configuration might look a little bit
2:19 different and that's because in codeex
2:22 we use a toml file to configure things
2:24 like this whereas in a lot of other
2:26 tools we use a JSON file. Notice right
2:29 here as well is where we put the API key
2:31 that we just grabbed. Anyway, let's copy
2:33 this and head back to the code to set it
2:35 up. Now, before we go any further, I
2:37 want to point out that I'm recording
2:39 this section from a Mac and not on
2:41 Windows because this is one of those
2:42 areas that using Codex on Windows is a
2:44 little bit buggy. So, if you're on
2:46 Windows, you might have to wait for
2:48 additional native support in future
2:50 releases if you want to use MCP servers,
2:52 which I'm sure is not going to be too
2:54 far off. Anyway, now we need to add this
2:56 MCP config to the codec setting file.
2:59 And to do that, we can come to the Codex
3:01 panel, click on this cog, and then go
3:03 down to the MCP settings section. And
3:05 then we want to open the config.l file.
3:08 Now it might be that the config file
3:10 doesn't exist for you yet. And if not,
3:12 you'll get an option here to create one
3:14 by clicking on a button, I think. But if
3:17 you already have one, then it's going to
3:18 bring up that file right here. Now, this
3:21 file is a global file stored in a docex
3:24 folder on your computer. It's not a
3:26 workspace specific one. And that means
3:27 by adding the server config to this
3:29 file, any project on your computer
3:31 should be able to access it. So, at the
3:33 time of recording this, there is no
3:34 option for project level MCP servers,
3:37 but I suspect that might be coming in
3:39 the future. Anyway, inside this file,
3:41 we're going to first of all paste in
3:43 that MCP setup code. And then we also
3:46 need to update this API key section as
3:49 well with the API key that we got from
3:52 the context 7 website. So, I'm just
3:54 going to quickly head back and grab mine
3:56 again. Then, I'll paste it in right here
3:59 where it says API key. Now, I know I'm
4:02 exposing my key here, but as soon as I
4:04 finish recording this video, I will be
4:06 deleting this key. So, there's no point
4:08 in trying to use it because it won't
4:09 work. You will need to use your own.
4:11 Anyway, now we can save this file and
4:13 close it, and then we can hopefully
4:15 start using this server with Codeex. So,
4:18 the first thing I'm going to do is just
4:20 ask Codeex a question by switching to
4:22 the chat mode down here because I just
4:24 want to see if it can access Context 7
4:27 using this MCP server. And I'm going to
4:30 paste in this prompt which says, "Can
4:32 you use context 7 to check the current
4:34 documentation on Tailwind to make sure
4:37 we're setting up theme colors correctly
4:39 in this project."
4:41 Okay. And then I'm going to hit enter to
4:43 set codeex to work. And hopefully at
4:45 some point we'll see that it uses the
4:47 context 7 server. So I'm going to speed
4:50 this video up now and then I'll slow it
4:52 down again when the job finishes.
4:57 All right. So it looks like it's
4:58 finished. And if we just scroll up a
5:00 little bit, we can see this finished
5:01 working section which we can expand to
5:03 see exactly what it did. And we can see
5:05 right here we've used the context 7
5:08 library or MCP server should I say
5:11 twice. We've used it right here with
5:12 this tool resolve library ID and also
5:15 again get library docs to actually get
5:17 the documentation for Tailwind. And then
5:20 it's compared it with our own files and
5:23 then we get the response down here. So
5:26 it confirms it used the latest Tailwind
5:28 docs and down here at the bottom it says
5:31 given those references the theme section
5:32 in our global.css file aligns with the
5:36 current guidance. So everything seems to
5:38 be set up correctly. Okay then. So
5:40 that's how to set up and use an MCP
5:42 server with codeex. And actually one
5:44 good approach to using this context 7
5:46 server is to add an instruction into the
5:49 agents.mmd file telling Codex to use
5:51 context 7 whenever it implements a new
5:53 feature from a third party library or
5:55 framework. And that way you won't have
5:57 to manually tell it to do that every
5:59 time you give it a task to do. Also MCP
6:02 servers at this time can't be used with
6:05 codeex cloud. So if you need MCP servers
6:07 to run certain tasks then you'll need to
6:10 work locally with codeex. Although
6:12 things move so quickly that by the time
6:13 this video gets released, then it might
6:15 have that support. And finally, there's
6:17 absolutely tons of MCP servers available
6:20 for different external services and data
6:22 sources. One popular directory of
6:25 servers is called PulseMCP,
6:28 which gets continually updated with new
6:30 servers all the time. So popular ones
6:32 aside from Context 7, uh the Playright
6:35 server, uh the Superbase server, the
6:38 Figma one, etc. So, I would definitely
6:41 recommend browsing through these and
6:42 just playing around with them when you
6:44 get the chance.


---

## Source: 10 - OpenAI Codex Tutorial #10 - Delegating Tasks to the Cloud.txt

- Original path: `addintional info to add\10 - OpenAI Codex Tutorial #10 - Delegating Tasks to the Cloud.txt`
- Size: `4757` bytes
- SHA256: `A58F37FD7B30FB2B35F71C12BCD775C87EE4E4E0B21E0C17FB93DEB353BE9FE6`

---

Title: OpenAI Codex Tutorial #10 - Delegating Tasks to the Cloud
URL: https://www.youtube.com/watch?v=9tGpIwE-sro&list=PL4cUxeGkcC9iDBeA8IyR1IE1kl4w5IDEG&index=10&pp=iAQB
Channel: YouTube playlist
Video ID: 9tGpIwE-sro
Transcript language: English auto-generated
Downloaded at: 2026-05-26T01:50:31.703Z

0:00 All right then, my friends. In this
0:02 lesson, we're going to look at one more
0:03 feature of the Codex extension, and that
0:05 is the ability to delegate tasks from
0:07 your local project to Codex Cloud. So,
0:10 we can do that by coming down here and
0:12 changing this option from local to run
0:14 in the cloud. You can also select a
0:16 cloud environment to fire this task in
0:18 as well if you have multiple
0:19 environments set up for different repos.
0:21 So, I've been pushing all my local
0:23 changes up to the remote repo throughout
0:25 this course. And that means the main
0:26 branch on the remote is up to date and
0:28 it incorporates all my changes. However,
0:30 if you have local changes to your repo
0:32 that you want Codex Cloud to use as
0:34 well, you can tell it to do that by
0:36 selecting your local branch to work
0:37 from. Anyway, now I'd like to fire off a
0:40 new task to run remotely on codeex so I
0:43 can open a PR directly later from it.
0:45 But I want to do that from VS Code so
0:47 I'm not having to switch to a browser to
0:49 set it off. So then we can just say
0:52 something like can you implement a
0:55 responsive
0:56 drop-down navbar for mobile screens and
1:02 then we can hit enter and when we do
1:04 that codeex is going to send that task
1:06 off to the cloud where it can run
1:08 remotely in an isolated container. So
1:11 let's go and have a look what it's done.
1:13 All right then. So now we can see that
1:15 task is down here and it's completed
1:17 because I gave it just a couple of
1:18 minutes to run before I started
1:20 recording again. So if we click on this
1:22 task, we should be able to see the code
1:24 changes it made to the various files.
1:26 And normally I would take a good look at
1:28 these changes first before opening a PR
1:30 for them. But right now I'm just going
1:31 to hit the create PR button to get the
1:33 ball rolling. Then when it's created
1:35 that pull request, we should be able to
1:37 click the button again to go and view
1:38 it. So then from here we could review
1:41 the code and merge it if we're happy.
1:44 But I'm just going to switch back to VS
1:46 Code to preview the changes first of
1:48 all. So then if we click on this cloud
1:50 task from inside the codeex panel in VS
1:53 Code, we can actually see that same
1:54 summary of changes from here as well. So
1:56 it's brought down that information from
1:58 Codex cloud and we can see it locally in
2:00 the project including the actual code
2:02 changes as well which we can view. And
2:04 actually, you can also click on this
2:06 button right here to apply the changes
2:08 to your local workspace. But just be
2:10 aware that it's going to apply those
2:11 changes to whatever branch you're
2:13 currently on. But you can revert the
2:15 changes by clicking on this button right
2:16 here. Anyway, with those changes
2:18 applied, we could view the application
2:20 in a browser to preview what it looks
2:22 like. Okay, so I've opened up the dev
2:25 tools so I can make this smaller and see
2:27 what it looks like on smaller screens.
2:28 And hopefully at some point we should
2:30 see this mobile menu kick in, which we
2:32 do. And if we click on that, then we see
2:34 the links right here. Click it again and
2:36 it goes away. Let's make this smaller to
2:38 make sure it still works and looks okay.
2:40 Yep. All looking all right. And if we
2:42 click on a link, well then, yeah, it
2:44 still works. Awesome.
2:47 Okay, so now I'm happy with the changes
2:49 and I could go ahead and merge them into
2:51 the main branch, which is what I'm going
2:52 to do. But hopefully now you can see how
2:55 the Codex extension and the Codex cloud
2:57 can kind of work together a little bit.
2:59 Now, honestly, I think the link between
3:01 the two things is just a little bit
3:02 rough around the edges at the moment. It
3:04 could be smoother, and it would be nice
3:06 to have more of the cloud features
3:08 displayed in the extension, such as
3:09 opening a PR directly from the Codeex
3:12 panel, but like I said before, Codeex as
3:14 a whole product feels like it's very
3:16 much still in the early stages, and I
3:18 would expect more features and
3:19 improvements to be made in the future.
3:22 Anyway, next up we're going to see how
3:24 to fire off parallel tasks using the
3:26 Codex cloud which can all be working on
3:28 the code at the same time.


---

## Source: 11 - OpenAI Codex Tutorial #11 - Running Tasks in Parallel.txt

- Original path: `addintional info to add\11 - OpenAI Codex Tutorial #11 - Running Tasks in Parallel.txt`
- Size: `8699` bytes
- SHA256: `B4CEA94F6BA58E937B0EE9905B281EDBA4DBAD2F46F1F5C2FC505226E3570321`

---

Title: OpenAI Codex Tutorial #11 - Running Tasks in Parallel
URL: https://www.youtube.com/watch?v=Xt7BZYhJXkg&list=PL4cUxeGkcC9iDBeA8IyR1IE1kl4w5IDEG&index=11&pp=iAQB0gcJCQYLAYcqIYzv
Channel: YouTube playlist
Video ID: Xt7BZYhJXkg
Transcript language: English auto-generated
Downloaded at: 2026-05-26T01:50:31.703Z

0:00 Okay then my friends, we have covered
0:02 quite a lot when it comes to Codex. Now
0:04 we've seen how Codex cloud runs remote
0:06 tasks in isolated containers. We've used
0:08 the Codex CLI to work locally on a
0:10 project and we've also used the Codex
0:12 extension to work both locally and to
0:14 trigger remote tasks as well. On top of
0:17 that, we've seen how Codex can review
0:18 pull requests directly on GitHub. Before
0:21 we finish the series, I want to quickly
0:22 show you one of the big benefits of
0:24 using the Codex Cloud, and that is that
0:25 we can fire off multiple tasks at once
0:28 to all run in parallel with each other.
0:30 We don't have to just run one task at a
0:32 time and wait for each one to finish. We
0:34 can run four, five, or more tasks at one
0:36 time if we want to. And each of these
0:38 tasks will have their own isolated
0:40 container that they run within. So,
0:42 they're not going to be stepping on each
0:44 other's toes. Now, the only thing to
0:47 think about when it comes to running
0:48 multiple tasks at once is the
0:50 possibility of conflict when it comes to
0:52 merging a few of those features one
0:54 after the other because each task could
0:57 edit the same lines of code
0:58 theoretically. But if your tasks are
1:00 working on entirely different features,
1:02 that possibility will be much lower. So
1:04 then to demo this, I'm actually going to
1:06 start by asking codeex a question which
1:08 I'm going to paste in. And it says, can
1:11 you look at the codebase and suggest
1:12 three different reusable UI components
1:15 we can make for the project as three
1:17 different tasks on codeex. Then I'm
1:20 going to hit the ask button. Now when I
1:22 do this, Codeex will look at the project
1:24 code and it's going to come up with
1:25 three ideas. So again, I'm going to
1:27 pause the recording right here while it
1:28 does its work and then I'll start up
1:30 again when it sends an answer. All
1:33 right. All right, so this is finished
1:34 and it's come up with three different
1:35 ideas for me. And look at this. Each
1:37 idea has its own little button right
1:39 here to start that task, which is really
1:41 nice. Codeex basically generates a
1:44 prompt for us to have it make this
1:47 particular component in each case. So
1:49 the first one is to create a hero
1:51 section component. The second one is to
1:55 create a pair card component for lists.
1:57 And the third one is something to do
1:59 with the tag inputs on the form. Okay.
2:02 Okay. So, yeah, we have a tag input with
2:04 a really unique behavior where we had
2:06 those pills, right? So, it's basically
2:07 saying we could extract that into a tag
2:10 input component. So, let's fire off all
2:12 of these tasks concurrently by clicking
2:14 on each one like that. And when we do
2:18 that, if we go back to the dashboard,
2:21 then we should see all three of those
2:23 tasks now right here. So, it's working
2:24 on each one independently in its own
2:28 container, but they're all going on at
2:30 once. So, it would be hard for me to do
2:32 this locally, even with AI. I'm sure
2:34 there would be ways to do it. However,
2:36 right here, it's really easy for me to
2:39 just fire off three tasks all at once.
2:42 All right, so it looks like two of them
2:44 have finished. So, we could click on one
2:45 of these and we could take a look at the
2:47 code. Sometimes it seems to leave a
2:50 little snapshot of what it's done. I
2:52 guess in this case, we didn't really
2:53 need to because we're just refactoring
2:55 and putting things in the wrong
2:56 components. Uh, but yeah, I mean, we
2:58 could go through the code and we could
2:59 create a PR for this. And then we could
3:02 go back over here. We could look at this
3:04 one. Was it this one or was it this one?
3:06 Not quite sure. Okay, this one as well.
3:08 Yeah. So, we could create a PR for this
3:11 one as well. And then we could go back
3:13 over here. It's still working on this
3:14 task. But you get the point. You could
3:16 go in there, create a PR for that. You
3:17 could preview everything locally if you
3:19 wanted to again in your local workspace.
3:22 And then you could go ahead and review
3:24 the code on GitHub, merge it and all
3:26 that kind of jazz. So this is one of the
3:27 really good things about Codeex. I can
3:30 just spin up tasks from anywhere on my
3:32 phone, on my laptop when the thought
3:33 comes. I don't have to be even in my
3:35 code and I can have these different
3:37 tasks running in parallel. Then I can
3:39 just come back at a later point in time,
3:41 review the code, test it out, and then
3:43 merge it into the repo if I want to.
3:47 All right, then. So I just want to
3:48 finish this series with a few words
3:50 about Codex and Agentic coding in
3:52 general really. So first of all when it
3:55 comes to using Codex locally with the
3:57 CLI tool and the extension I would say
3:59 that it is still very much a work in
4:00 progress and I would expect plenty of
4:02 changes over the next months because I
4:04 definitely think the experience could be
4:06 smoothed out a little bit especially
4:07 when it comes to the connection with
4:09 cloud service. Secondly, when it comes
4:11 to Codex Cloud, I would say the main
4:13 selling point for me is that I can spin
4:15 up remote tasks from anywhere and I can
4:18 spin up multiple tasks as well. I don't
4:20 have to be working on my project locally
4:22 to fire those tasks off. I could just do
4:23 it from my laptop on my phone when the
4:26 ideas hit me. I can run multiple tasks
4:28 and multiple variations of those tasks
4:30 which get to work while I'm not working
4:32 and then I could just review them and
4:34 bring them down to my local workspace
4:35 when I'm back at my desk. So, that's
4:37 nice. Thirdly, I would say that no
4:39 matter what AI tool or coding agent that
4:42 you use, always check the work that it
4:44 produces and stay in the loop. AI can
4:46 get things wrong and it sometimes takes
4:49 me three or four iterations of different
4:51 prompts to get the results that I want.
4:53 Much like I might nudge a junior
4:55 developer in the right direction a few
4:56 times if they're going off track. And
4:58 finally, I would say this. Do not over
5:00 rely on AI to code everything for you. I
5:03 personally think it's really important
5:04 to keep your manual coding skills and
5:06 your knowledge of the field fresh and
5:08 over reliance on AI to write all of your
5:11 code will definitely hamper that. I
5:13 think at the start of 2025 a lot of AI
5:16 experts predicted that by the end of the
5:18 year AI would be writing virtually all
5:20 the code that we produce. Well, that
5:22 certainly doesn't feel true right now to
5:24 me and I don't think it's going to be
5:26 true over the next several months
5:27 either. Besides, even if AI does start
5:30 writing all the code, you should still
5:32 understand the code it generates in
5:34 order to review it, debug it, and adapt
5:36 the code. And essentially, you need to
5:38 know how your application works. So, for
5:40 that reason, I think continuing to code
5:42 manually and learning new skills
5:44 yourself is especially important these
5:46 days.
5:47 So, then my friends, I really, really
5:49 hope you enjoyed this series and you
5:51 learned something along the way. If you
5:52 did, please, please, please don't forget
5:54 to share, subscribe, and like. That
5:56 really means a lot. And if you want to
5:58 access all of my YouTube courses without
6:00 adverts, also get access to premium
6:03 courses and early access courses as
6:05 well, you can do at netinja.dev.
6:08 You can sign up for Net Ninja Pro, which
6:10 is just $9 a month and also half price
6:13 for the first month with this promo code
6:16 right here. And for that, like I said,
6:18 you get access to every course without
6:20 adverts, without YouTube adverts. You
6:22 also get access to exclusive courses not
6:25 found anywhere else. you get access to
6:27 my premium courses on Udemy and also
6:30 early access to all of my YouTube
6:32 courses as well. So, the link to this
6:34 page to sign up is going to be down
6:36 below. Again, I really hope you enjoyed
6:38 this series and I'm going to see you in
6:40 the very next one.
7:05 3.
7:15 Hey


---

## Source: chatgpt-5-5-codex-is-the-greatest-ai-coding-tool-ever-here-s-how-to-use-it.txt

- Original path: `addintional info to add\chatgpt-5-5-codex-is-the-greatest-ai-coding-tool-ever-here-s-how-to-use-it.txt`
- Size: `30792` bytes
- SHA256: `75489E0ED7A051C38C4CC470702EDE097A53CA9F717116BBB9E2E939C3753F31`

---

ChatGPT 5.5 Codex is the greatest AI coding tool ever. Here's how to use it

0:00 I am absolutely in love with Chad GBT
0:03 5.5 Codeex. I think it is currently by
0:06 far the best way to be building apps
0:09 with AI, even better than Claw Code.
0:11 What I'm going to do in this video is
0:13 build out an entire application soup to
0:16 nuts using codecs. We're going to build
0:17 out the front end, the back end,
0:19 everything involved, AI functionality.
0:21 It's going to be sick. I'm going to show
0:22 you all the tips, tricks, secrets I've
0:25 come up with over the last week, as well
0:27 as show you my absolute best workflows.
0:29 If you stick with me until the end of
0:31 this video, you will be a master of the
0:34 number one AI vibe coding tool on planet
0:37 Earth right now, plus have an entire
0:39 application that we're going to build
0:41 out together that you'll be able to use
0:42 for the rest of your life. It's going to
0:44 be sick. Even if you've never coded
0:46 before a day in your life, you need to
0:48 stick with me here cuz you're going to
0:49 build something amazing. This is going
0:51 to be so much fun. Now, let's lock in
0:53 and get into it. So, this video will be
0:54 all about action and building. No blog
0:56 post, no tweets to read. Let's just get
0:58 right into the interface here. This is
1:01 chat GPT codecs. It's a free to download
1:04 desktop app. Go hit the link below and
1:07 download it. There are many reasons why
1:09 you want to be using this right now over
1:12 clawed code. If you are paying $0 for
1:14 AI, you can be using this to build apps
1:17 right now because codeex is included
1:19 with the free tier of Chad GPT. In fact,
1:22 if you only want to spend $20 a month,
1:24 this is the one to get because they're
1:25 taking out Claude Code from the $20 tier
1:27 of Anthropic at the moment. So, if
1:29 you're on a budget or even if you have a
1:31 ton of money to spend, I really think
1:32 this is the best app to be using right
1:34 now. There are so many nifty little
1:36 features we're going to go through in
1:38 here that are really, really cool that
1:40 make Codeex stand out so well. But
1:42 here's what we're going to build today.
1:44 I think it has never been more important
1:47 to be investing right now. So, what
1:49 we're going to do is we're going to
1:50 build out an entire stock investment
1:53 app. One where we can track our
1:54 investments, research other investments,
1:56 look at charts, things like that. I
1:58 think it's so important to be investing.
2:00 So, we're going to do is build out an
2:01 entire application front to back through
2:04 codeex. I'm going to show you how to
2:05 build out the database. I'm going to
2:07 show you how to build out the front end.
2:08 I'm going to show you all the tips and
2:09 tricks we're going to use, image genen,
2:10 all that. So, let's just get right into
2:11 it. What we're going to do is we're
2:13 going to create a new project here. So,
2:15 this is codeex. Let's click this button
2:17 right here for add new project. I'm
2:19 going to say start from scratch. Now,
2:21 there is a plan mode inside of Codeex,
2:25 but it's not really necessary. They
2:26 really made this app for you to build in
2:29 Flow. So, let's do this. And we're going
2:31 to start right off the rip with a really
2:32 cool trick that you really can't do in
2:34 any other app. And that is design the UI
2:38 using their new image gen model. Chad
2:40 GBT just released Image Gen 2, which I
2:44 think is by far and away the greatest AI
2:47 image gen model on planet Earth. And
2:49 what's really cool about it is it's
2:51 fully integrated into Codeex. So, we can
2:54 design out our front end before we start
2:56 building. So, let's do this. I'm going
2:59 to put this prompt down below. Feel free
3:00 to pause right here, download Codeex,
3:02 and build this alongside with me. I
3:04 really think that's the best way to
3:05 experience my videos is to build
3:06 alongside with me here. So, here's the
3:08 prompt. I want to build out a full stock
3:10 investing app. This is an app where I
3:12 can enter companies or tickers, then see
3:15 their charts, get the latest news, do
3:17 research, and save companies to my
3:18 portfolio. First, I want to design the
3:20 user interface. Can you generate five
3:22 options for clean and simple but really
3:25 visually powerful interfaces using the
3:27 image gen model? For this, we are going
3:29 to use medium. For a vast majority of
3:32 things we do in codecs, we're just going
3:34 to use the medium intelligence. Chad GBT
3:37 5.5 is extremely smart. There's no need
3:41 to go extra high for everything. When
3:42 we're in Claude Code, we use like the
3:44 highest intelligence level for
3:45 everything here. It is not necessary
3:47 because GBT 5.5 is so smart. If you are
3:51 on the $200 a month pro plan, you can
3:54 use fast for pretty much everything cuz
3:56 you get a ton of usage. This is one of
3:58 the strengths of Chad GBT codeex. You
4:00 get so much usage with all their plans.
4:02 Claude, they constantly are lowering the
4:04 plans. So, I'm using fast, but if you're
4:05 on anything lower than the $200 month
4:07 plan, you can probably just go with
4:08 standard so you get a lot more usage.
4:10 So, we're going fast and medium. Let's
4:12 do this. We're going to hit send on
4:13 here. We're going to get into so many
4:14 cool things after this. So, let's hit
4:16 send. And what it is is going to do
4:18 first is generate us some interfaces.
4:22 What's great about this is this is going
4:23 to lead to much better UIs because we
4:26 are going to be able to go in and make
4:29 sure everything fits to our liking with
4:30 this image gen model. It's such an
4:32 advantage for codec over all the other
4:34 AI tools right now that this is fully
4:36 integrated in this image genen stuff.
4:38 It's a built-in skill. I'm also later in
4:40 this video going to go over a few other
4:42 skills that I think are really, really,
4:44 really cool that'll blow your mind. So,
4:46 stick around for that as well. We'll
4:48 also go into some multitasking stuff in
4:49 a second. So, all right. So, it
4:51 generated five interfaces using their
4:53 image gen model. Let's check this out
4:55 here. So, we have the charts. Okay.
4:57 Research, latest news. That look pretty
4:59 clean UI. I like that. Okay, basically
5:02 the same thing but in a dark mode. I
5:04 think I lean dark mode. I'm kind of a
5:06 dark mode guy. Let's check these other
5:08 ones out. Okay, this one's interesting.
5:10 It kind of shows the different sectors
5:12 every stock is in. I like that. Ooh,
5:15 this one's nice because it shows you
5:16 your portfolio alongside everything as
5:18 well. I wanted an emphasis on saving my
5:21 portfolio. So, I think this one's the
5:23 winner. Now that we've decided which
5:25 interface we want, let's go in here and
5:28 let's say I like the last interface, the
5:31 one that also shows the portfolio. Let's
5:36 build that out. Let's take this up a
5:38 notch. Let's also implement a database
5:41 so that we can store our stock portfolio
5:43 in there as well. If you are serious
5:46 about building out real applications,
5:48 starting a business, making tons of
5:50 money, you need to understand the full
5:52 stack, the front end to the back end.
5:54 Right now, my favorite database, and
5:55 this isn't sponsored at all, is Convex.
5:58 Convex is a fantastic database tool. It
6:00 has a incredibly generous free tier.
6:03 I've built out like 50 applications, all
6:06 built on Convex. I still haven't spent a
6:08 single dollar on it. So, we're going to
6:09 say this. I want to have a database on
6:13 Convex where we will store our stocks.
6:18 What I'm going to do just so it knows
6:19 which one it's doing, I'm also going to
6:21 screenshot it and I'm just going to put
6:23 it in there just to be safe. I'm going
6:24 to say, "Please start building this
6:27 out." And I'm going to hit enter on
6:29 that. That's going to get to work. Now,
6:31 I'm going to show you some of the other
6:33 incredible things we can do in Codeex,
6:35 starting with the multitasking. So, one
6:38 of my favorite parts about Codeex is
6:39 it's designed around multitasking,
6:42 having multiple agents doing a whole
6:44 bunch of things at once. So, while this
6:46 is going, we're going to go over here
6:48 into new project 7 where we're at and
6:50 we're going to say start a new chat. So,
6:52 we're starting a new chat. And here's
6:53 what we're going to do. We're going to
6:55 use the Remotion skill to start actually
6:58 building out the marketing for this app.
7:00 So, say you wanted to put this app
7:01 online and you want to start making
7:03 money with it, right? You want to start
7:04 getting customers, things like that.
7:06 Well, we got to build marketing, right?
7:07 We got to have some sort of launch
7:08 video. So, what we're going to do is
7:10 we're going to use the Remotion skill to
7:12 build out the marketing launch video for
7:15 this app. So, for those who don't know,
7:17 there's actually a plug-in store in
7:18 here. This is the plug-in store. Couple
7:21 quick ones you want to implement real
7:23 quick. Make sure to install browser use.
7:25 That's that first one up here. Get
7:27 computer use in there as well because
7:28 there's a lot of other cool things you
7:29 can do in there. You want to get these
7:31 two. And then if we scroll down here,
7:34 you are going to find a few design
7:36 skills. The one we're going to use is
7:38 remotion. This is the coolest skill for
7:40 design. This will allow us to actually
7:42 create motion graphic videos for
7:44 marketing and launch videos and things
7:46 like that. So get that installed. It's
7:48 one click. You get it installed. So,
7:50 we're going to go back into this new
7:51 chat and we're going to say, "Use the
7:53 atmotion
7:55 skill to build a launch video for our
8:00 stock investment and tracker app. It
8:04 should show off being track and research
8:08 stocks." And I'm going to hit enter on
8:10 that. And now our marketing agent is off
8:12 and running. Right? So, now we have one
8:14 agent building out the app. Then we have
8:15 another agent, our marketing agent
8:17 that's going ahead and building out our
8:19 marketing video. And this is really the
8:20 way you want to think about codeex,
8:23 which is how can I get many things done
8:25 at once? How can I spin up multiple
8:27 agents? You get so much usage out of
8:30 chat GBT. Chad GBT is like a hundred
8:33 times higher than Claude codes and their
8:36 product manager like resets limits every
8:38 5 minutes. So you basically have
8:40 unlimited usage. Not really, don't quote
8:41 me on that, but you have really, really
8:43 high usage. So, I'm always trying to get
8:45 as much done as humanly possible. I'm
8:46 trying to always spin up multiple
8:47 agents, have them working at all times,
8:50 have this going in the background, and
8:51 just constantly get things done. When
8:53 I'm sitting on my couch late at night
8:55 and I'm playing Pokemon on my Game Boy
8:57 Color, I have codecs going on the side
8:59 here. I'm just going to approve every
9:00 couple minutes, approve every couple
9:02 minutes as it's doing things all the
9:03 time. I always want my codeex going and
9:05 building things out for me. So, now
9:07 going back to our main agent here is
9:08 working building out the app. If you
9:10 don't have a Convex account yet, it's
9:12 going to set stuff up for you, but you
9:14 probably want to create an account with
9:15 Convex. So, go to convex.dev and create
9:18 a free account there. Again, I've been
9:19 using it for a very long time and I have
9:21 not paid a scent ever. So, it's
9:22 completely free and easy to set up. And
9:24 let's do one thing also. Let's take it
9:26 up a notch here. Codeex has some amazing
9:29 computer use skills. So, let's take
9:30 advantage of that as well. Let's say
9:32 this. open up a browser on my computer
9:36 and find the best AI stocks for me to
9:40 invest in. I'm going to say at computer
9:43 use. I'm going to hit enter on that. I'm
9:45 going to hit enter. And this is going to
9:46 show you some of the really cool things
9:47 they can do in here. They're clearly
9:49 like taking things they learned from
9:51 OpenClaw and implementing into Codex.
9:53 They want like Codeex to be like your
9:55 OpenClaw. So, we're going to do this.
9:56 We're going to hit enter on this and
9:58 it's actually going to pop open a
9:59 browser on my computer and start doing
10:02 research to find the best AI stocks. So,
10:04 we have one agent building out our app,
10:06 which you can see over here. It's idle,
10:08 so it's done building. We have another
10:10 agent building out our marketing. It
10:11 needs approval. So, we have that little
10:13 green button right there. And then we
10:14 have another agent is doing research for
10:16 us, right? Right? And so if you're
10:17 building an app, this could be things
10:18 like researching your competitors,
10:21 researching just ideas for your app,
10:23 whatever it is. You want like a
10:25 researcher agent going, you want a
10:26 marketing agent going, and you want a
10:28 developer agent going. So, we're just
10:29 going to hit allow here so it can pop
10:31 open Google Chrome. Look at this. I
10:33 brought over my Google Chrome. It's
10:34 searching for best AI stocks to invest
10:36 in 2026. Nvidia, Microsoft, Broadcom,
10:39 TSMC, ASML. I own Nvidia, Microsoft,
10:43 TSMC, and ASML. Maybe I got to get
10:45 Broadcom as well. And it's going and
10:47 it's going now in this separate browser
10:49 on my second monitor and searching for
10:51 stocks to invest in. So when we set up
10:53 our app in a second, we can just pop
10:55 these in and we have our tracker going.
10:56 So I'll move this over. I'll let Codex
10:58 keep doing work over here. And you can
11:00 even track everything it's doing here.
11:02 We'll let this work. This is the beauty
11:03 of multitasking. Again, let's come back
11:06 over here and let's approve Remotion
11:08 Skill. So, yep. Go ahead, use the best
11:10 Remotion skill. And then let's go into
11:13 our app that we're building out here. I
11:15 kind of feel like a CEO, right? Watching
11:17 all my agents work. Watch all my
11:19 employees do things for us. Let's do
11:21 this. Okay. Boom. It looks like it's
11:23 done. Here's another beautiful part
11:25 about Codeex. I'm going to hit open
11:26 here. It's got a builtin browser, right?
11:30 Built-in browser right into Codeex.
11:32 Let's go into full screen mode here.
11:34 This is looking beautiful. It looks just
11:37 like a screenshot. This like is actually
11:39 looking pretty good. You can see
11:42 financials, company research, portfolio.
11:44 Now, I'm pretty sure this is all demo
11:46 data. What we're going to do is we're
11:47 going to go back into our agent and
11:49 start building this out so things work
11:50 and everything's live. So, we'll do that
11:53 in a second, but just from a UI
11:55 perspective, let me do this. This is
11:57 kind of the mini version. Let's look at
11:59 the full screen version here in my full
12:01 browser. Yep, that's looking good. You
12:03 get the latest news, track your
12:05 portfolio. I mean, this looks pretty
12:06 much exactly like the screenshot. Let's
12:08 do this. Let's start implementing real
12:10 data here. So let's let's find some APIs
12:12 we can use. So we can get live stock
12:15 data in here. What's really amazing in
12:17 here as well is you can edit your app
12:19 through the inapp browser. And what I
12:21 mean by that is if I want to come in
12:22 here and I want to say annotate and
12:24 maybe I say add a dark mode button that
12:29 makes the entire app dark mode and I hit
12:33 send on that. What it's going to do is
12:35 it's going to add that button where I
12:37 annotated based on where I'm editing
12:39 here. Right? So now it's going to add
12:40 that dark mode button. So you can do
12:42 live editing with this annotation button
12:45 which is so sick. Again, no other vibe
12:47 codings on planet earth has it right
12:49 now. And as I'm talking to you, you can
12:50 see it's popping in already and it'll
12:52 probably work. This inapp browser is so
12:54 sick. So I'm building out my own startup
12:56 right now. I'm building out Henry
12:58 intelligent machines. And what's great
12:59 is is like every prompt I give it to
13:02 build something, it pops open this
13:04 browser and it tests itself. This is a
13:07 strength of Codeex I'm not seeing
13:09 anywhere else is its ability to test
13:11 itself. And so it'll build things out.
13:13 It'll open this browser and it'll click
13:15 around and try things out which is
13:17 really amazing. So you can be a lot more
13:20 confident as it's building that it's
13:22 actually making working code for you.
13:24 All right, looks like it's done. Let's
13:25 test it out here. Boom. Hit dark and it
13:27 works just like that. Look at that. That
13:29 is amazing. All right, let's keep
13:30 building here. Let's get some real data.
13:32 So now I want to go in and we're just
13:33 step by step going in through here.
13:35 Let's hide the browser. You have two
13:37 options here. If you're like very
13:40 confident in what you're building, you
13:42 can just go on to the next thing and
13:43 say, "Hey, let's build this." But one
13:45 thing I really like to do, even if I am
13:47 confident in what I'm building, is
13:49 reverse prompt. It's something I've
13:51 talked about a 100,000 times in all my
13:53 videos. It's something you should be
13:54 doing 10x more. And that is pausing and
13:58 asking the AI what it thinks you should
14:00 be doing at any given time. So, let's do
14:02 this. Let's reverse prompt right here.
14:04 What do you think should be the next few
14:08 things we build out? Even though I know
14:10 I want to start pulling in live data,
14:12 just out of curiosity, I want to do a
14:14 temperature check with the AI to see
14:16 what it thinks because again, this is
14:17 super intelligence. This AI is way
14:19 smarter than us. So, we should be
14:20 leaning on it a ton for decision-
14:22 making. So, I'm going to hit enter on
14:24 that and let's see what Codeex has to
14:26 say about this. By the way, as this
14:27 goes, if you learned anything so far,
14:28 make sure to leave a like down below,
14:30 subscribe, and turn on notifications.
14:32 All I do is make amazing videos about
14:34 AI. Also adding a ton of videos about
14:37 Codeex into the Vibe Coding Academy. I
14:40 do live boot camps there. So, if you
14:41 want to come in, ask me questions, chat
14:44 about it, feel free to join that down
14:45 below. Number one community in AI. Let's
14:47 see what Codeex had to say here. So,
14:50 one, real stock search and company
14:52 lookup, live price and chart data,
14:54 portfolio model upgrade, company
14:57 research. Okay, these are all really
14:58 good. What I want to do is I actually
15:00 want to start with live price and chart
15:02 data. So, let's do that. Can we start
15:05 with live price and chart data, please?
15:09 Please find a simple free price API. I'm
15:14 going hit enter on that and it is going
15:16 to start going and building out the live
15:18 data in here. As that's going, looks
15:21 like another agent finished build
15:23 stocks. We got to get an approval going
15:25 here. So, let's hit yes on that. So,
15:26 it's still building out the video. This
15:28 is going to be so sick this launch
15:29 video. I'm really excited to see it. I
15:30 think it's going to blow you away. Let's
15:32 see how our stock research is doing.
15:34 Looks like it finished researching in
15:36 Google. Uh Nvidia number one, no
15:38 surprise. Microsoft number two. It's
15:40 also got Google and Amazon. Okay, so we
15:42 have a bunch of stocks we now can add to
15:44 our portfolio. That is great. We'll come
15:47 back in here, give another approval to
15:49 Remotion. We'll come over to our other
15:51 agent, see what it's building out here.
15:53 This is like what makes it fun. It's
15:55 like it almost feels like a video game
15:56 in a way where you're trying to level
15:58 up. You're sending out your troops. If
16:00 you ever played Starcraft Brood War,
16:02 maybe I'm dating myself a little bit
16:03 here, but I was the biggest Starcraft
16:05 Brood War player. And I almost feel like
16:08 I'm doing like a zergling rush. Sending
16:10 out a bunch of zergs right away to do a
16:12 whole bunch of little things. It really,
16:13 really is amazing. If you played
16:15 Starcraft Brood War, by the way, let me
16:17 know down below. I want to see how many
16:18 other nerds there are in this video. All
16:21 right, let's see what we got here. It's
16:23 looking for a free API for data. That's
16:25 great. All right, looks like we're using
16:26 the Alpha Vantage API. That's actually
16:29 one I used in the past. Let's sign up
16:30 for Alpha Vantage. By the way, even if
16:33 you're not interested in stocks or
16:34 investing, you can still use all the
16:36 things I'm teaching you here to build
16:38 whatever app you want. These are all
16:40 transferable skills, the multitasking,
16:43 the marketing, the research, all of
16:44 that. You can use this in any idea you
16:46 want. These are all foundational skills
16:48 for building apps. So, I'm on the Alpha
16:50 Vantage site just real quick. Let's put
16:51 in our email here. Going to take that
16:53 command for convex, paste it in here,
16:56 and then we are going to take our API
16:58 key and we're going to put it in right
17:00 there at the end. All right. Looks like
17:01 it's set. Let's test this out. Let's see
17:03 how it worked. Before we check on the
17:06 live data, let's just go back to our
17:07 marketing agents. We got like our little
17:09 marketing employee here. See what kind
17:11 of video they came up with us. Looks
17:13 like they're done. Output stock launch.
17:15 Let's do this. Oh, they came up with a
17:16 whole bunch of assets for us. But let's
17:18 look at the video. Let's see what they
17:19 got for us. All right, I'm going to pull
17:21 this open here. Let's see what we got.
17:22 All right, 40 second launch video. Here
17:25 we go. Track every stock research with
17:26 intent. Look how nice that is. That's
17:28 the actual UI from our app. That's the
17:31 actual UI. I went and took the UI. Wow.
17:33 Find a company and keep the context
17:35 close. These are nice motion graphics.
17:38 Compare the story, the numbers, and the
17:40 calendar. Look at the way things come
17:41 in. And it's the exact UI. This would
17:44 have cost me tens of thousands of
17:47 dollars in days and days and days of
17:49 work to hire someone to do this for me
17:51 before. I'm now a one-man wrecking
17:53 machine. Codeex just built this all out
17:55 for me. A calmer way to decide. I love
17:58 that. This is so sick. When I'm ready to
18:00 launch this, I just pop this video into
18:03 Twitter and boom, we're starting to get
18:04 customers. That's amazing. Our marketing
18:06 agent came through. Look at this. Even
18:08 came up with a whole bunch of assets for
18:10 us. Look at this. This is really cool.
18:11 Wow. Very nicely done. All right, so
18:14 let's check this out. Let's see if the
18:15 data is live. Google 34957. I think
18:18 that's real. Let me check Robin Hood
18:20 app. Yep, that's real. Let's see. Let's
18:21 scroll down here. Okay, Nvidia 214. Yep,
18:24 that's real. Data is live. That's
18:26 amazing. We're now getting full live
18:28 data. All right, let's build this out
18:30 next. Let's actually edit our portfolio
18:32 so we can add stocks to it. Save it.
18:35 Maybe even put in how many shares we own
18:37 of it so we can track our full portfolio
18:39 value. So, let's do this. Let's make our
18:42 portfolio real. Allow me to add and save
18:47 stocks to it and put in Then I hit enter
18:50 on that. That's going to get to work. As
18:52 you can see, I have spelling mistakes in
18:54 there. The good news is with AI spelling
18:56 doesn't matter. It'll just figure it
18:57 out. So you can just hit enter anyway.
18:59 And there it goes. It's going to start
19:00 building out our new portfolio section
19:02 in here. Now, while that goes, let's
19:04 talk about some more features in codecs
19:06 I absolutely love. Let's talk about
19:07 automations. We have automations in
19:09 here. This is again kind of an openclaw
19:11 type feature where it's going to run
19:13 these commands on a regular basis for
19:16 you completely autonomously. One thing I
19:18 like to do in here is I scroll down to
19:20 code quality. This is going to be an
19:22 automation that scans our recent commits
19:25 in GitHub on a regular basis to see if
19:28 there's any bugs in there. So, we're
19:30 going to set that up. Let's click on
19:31 that. It's going to show us the template
19:34 for what we're working on here for what
19:35 the automation is going to do. It's
19:36 basically going to go through all our
19:38 commits from the last 24 hours and see
19:40 if there's any bugs or any way it can
19:42 improve the code for us. You want to do
19:45 this after you've kind of set up GitHub.
19:47 If you're not familiar, GitHub online
19:49 code repository. It's where you can
19:51 upload your code to have other people
19:53 work on it as well. You would go in here
19:55 after you set that up and create this
19:57 automation because then it would go and
19:59 check your GitHub every 24 hours. So
20:01 these automations are really cool. You
20:02 can do a lot of different things in
20:04 here. It doesn't even have to be code
20:05 related. If you want to set up an
20:07 automation where it does stock research
20:08 every 12 hours, you can do that in here.
20:11 You're taking advantage of your Chad
20:12 GBTO off. So you get tons and tons and
20:14 tons of usage, which is great. So you
20:16 can see here it's built out the
20:17 portfolio. It's testing itself
20:19 currently. This is one thing Codeex does
20:21 really well is it tests everything it
20:23 does very thoroughly. So it's actually
20:25 adding stocks to our Convex database by
20:28 itself uh just to see if it works. You
20:30 can see just add that Tesla right there
20:32 live in front of us. You give it prompts
20:34 and you just know that whatever it's
20:36 building is going to work. That's how
20:37 good it is. So it's really amazing to
20:39 see this. All right, looks like it's all
20:40 done here. Let's start adding stock. So
20:42 I own ASML. Let's put in some shares
20:46 here. Let's say I own a 100 shares.
20:47 Let's add it. And boom, there it is. It
20:49 adds it, gives me the value, has the
20:51 live price, updates our stock portfolio.
20:55 This gets stored in our convex database.
20:57 So even after we shut this down, we stop
21:00 the server. When we boot it up again,
21:02 all the data will remain persistent. It
21:04 will all remain there, which is really
21:06 amazing. Now, if you want to take it a
21:08 step further, we can go back. We can
21:10 say, "Hey, what are the next tasks we
21:14 should work on?" on. We do a little bit
21:16 of reverse prompting and it will give us
21:19 the list of tasks there. Tons of other
21:21 things you can do in here. By the way, I
21:23 like to do full access. So, it's totally
21:25 up to you, but this is so good that I
21:28 have full trust over it. Having full
21:29 access, just building things out without
21:31 needing permission every 5 seconds. From
21:33 a model perspective, unless you're doing
21:35 a gargantuan task, medium is always
21:37 going to work well. You can even go low.
21:39 If you do a gargantuan, really complex
21:41 task, you can go high or extra high.
21:43 Now, from here, if you want to continue
21:44 building out this portfolio app, you can
21:46 go and choose one of these features to
21:48 build out. And then, as I just showed
21:50 you here, go keep building out. If you
21:52 want to multitask, we can even spin up
21:55 more sessions. And then we have one put
21:56 in our cost basis. We can have another
21:58 one go in and improve chart reliability.
22:01 And we can have agents, multiple agents
22:03 spinning up and building out all these
22:05 features simultaneously. So, what makes
22:07 codec so cool is it's really built for
22:09 this type of multitasking. Now the
22:11 question I get all the time this or
22:13 claude code this or claude code which
22:14 one should we be using? I think GPT 5.5
22:17 is the best model on planet earth right
22:19 now and I think codeex is the best
22:21 desktop application put together. I
22:24 think it's magical but more importantly
22:26 than all of that kind of honestly is the
22:28 fact that openai doesn't make these
22:30 models stupider. It seems with anthropic
22:33 a lot of their models get stupider over
22:35 the length of their life cycle. I've
22:38 never experienced that with Chad GPT.
22:40 So, you can be confident these models
22:42 will remain smart. And then even more
22:43 importantly than that, usage feels like
22:45 Anthropic keeps lowering the usage
22:47 limits. I don't know what that's about.
22:49 Chad GPT though, the usage is always so
22:52 high and they're always resetting
22:54 limits. So, I never am worried about,
22:56 oh, am I using it too much today, this
22:58 week, whatever. You can always just keep
23:00 using it. OpenAI is incredibly kind when
23:03 it comes to usage limits with Chad GBT.
23:07 So, that's amazing. I live stream three
23:08 days a week, Monday, Wednesday, Friday,
23:10 11:00 a.m. Pacific. I use these tools,
23:12 Codeex, Cloud Code, OpenClaw, Hermes
23:14 Agent, all those. Make sure to subscribe
23:16 and turn on notifications for that.
23:17 Leave a like if you learned anything at
23:19 all. My challenge for you is keep
23:21 building this out. Keep going from here.
23:22 Spend a few hours just massaging this,
23:24 adding any features you want. Then, if
23:26 you want to put it live, say, "Hey, put
23:28 this live for me on Versel." It'll put
23:30 it live on the web. Then all your
23:31 friends can use the app and you're good
23:32 to go. If you want to see me build this
23:34 live, I do live vibe coding sessions
23:36 every single Thursday in the Vibe Code
23:38 Academy. Link for that is down below as
23:41 well. Hope this was helpful. I am truly
23:43 grateful to you for watching my videos,
23:45 learning something from them. It means
23:47 the entire world. Can't wait to see you
23:48 in the next one. See you then.


---

## Source: codex-just-replaced-1-000-hours-of-video-editing-tutorials.txt

- Original path: `addintional info to add\codex-just-replaced-1-000-hours-of-video-editing-tutorials.txt`
- Size: `27874` bytes
- SHA256: `C5D53ABA9DD3CAC8F609C368B7E2A56A730DFE1F6D6D3D5A94779C8557582CD4`

---

Codex Just Replaced 1,000 Hours of Video Editing Tutorials

0:00 One of the reasons why I think Codex is
0:02 better than Claude Code is because of
0:04 their built-in plugins. And one of the
0:06 coolest built-in plugins that they have,
0:08 in my opinion, is the Remotion plugin.
0:11 Directly inside Codex, OpenAI's new
0:14 super app, you can generate motion
0:16 graphic videos. Not only this, but you
0:19 can actually use their new image model
0:20 to create assets and then put them in
0:23 your videos that you can create simply
0:25 by typing. In this video, I'm going to
0:27 show you exactly how to create motion
0:30 graphic videos with Remotion inside
0:33 Codex. And I'm going to show you how to
0:34 set up your project so that you can
0:36 create high-quality brand [music]
0:37 assets. I'm going to show you how to
0:39 create images and SVGs that you can
0:41 place into your videos. And if you have
0:43 a ChatGPT subscription, you have access
0:46 to Codex and you can get started right
0:48 away. And if you like videos like these,
0:51 I make them multiple times per week, so
0:53 make sure to hit that like and subscribe
0:55 button. Let's not waste any more time.
0:57 Let's dive into the video.
1:00 Okay, so this right here is Codex. And
1:03 this right here is Remotion. This is
1:06 where I typed my prompt and this is
1:09 where the video showed up. This was the
1:11 result of a couple of prompts.
1:18 So,
1:19 let's first talk about what is Codex.
1:21 And so, all Codex is is OpenAI's super
1:24 app. And in my opinion, it is the best
1:26 way, especially if you're not fully
1:28 technical, to control Codex 5.4, the
1:31 best general agent in the world, in my
1:33 opinion, especially at really hard,
1:36 complex tasks, which I'm doing more and
1:39 more frequently. And I think it is the
1:41 best interface for AI agents. It is
1:44 OpenAI's version of Claude Code's
1:47 desktop app. Claude Code's desktop app
1:50 has Claude Code in it now. In my
1:52 opinion, it is much worse than OpenAI
1:55 Codex. Claude Code also decided to have
1:59 a distinction between code and co-work.
2:02 In Codex, they're combined together. So,
2:05 if you ask for a work-based task, like a
2:07 spreadsheet document or presentation,
2:09 you have to do that in co-work for it to
2:10 create the right artifact. But code is
2:13 specifically for coding. In Codex, you
2:15 can just ask Codex for a presentation,
2:19 right? You can just ask Codex for a doc.
2:21 It'll give it to you and you can open it
2:23 up here on the side. The same way you
2:25 can also open a video here on the side
2:29 and you can create websites here on the
2:31 side and you can basically do anything
2:34 or create anything that you might want
2:36 to create on a computer inside Codex.
2:38 And so, that brings us to the question,
2:40 what is Remotion? And so, Remotion is
2:42 simply a way to create motion graphic
2:45 videos with code. And I don't know if
2:47 you've heard, but AI writes code pretty
2:50 well. So, all you have to do is type
2:52 words in English, AI writes the code,
2:55 and the video will render. Remotion is a
2:59 plugin, right? You can see all the
3:01 plugins up here. I type whatever I want
3:03 in the video here, which is into Codex
3:06 using the model GPT 5.4 extra high. It
3:09 generates some code and then it renders
3:12 right here. And I can click this to
3:14 export my video. So, why would you use
3:16 Remotion instead of just using After
3:18 Effects or Premiere or some other
3:20 template software? Well, it's just a
3:21 difference of preference. One is a
3:23 prompt interface, one is a manual
3:24 interface that takes a long time to
3:26 learn. And it depends on what you're
3:28 working on. And also, AI is getting
3:30 better over time, right? As AI gets
3:32 better, it'll get a lot easier to do a
3:34 prompt interface. Right now, if you're
3:35 an expert, I still recommend using After
3:37 Effects or other animation software. But
3:40 one really good example of when it is
3:43 super useful to use Remotion is when
3:46 Claude actually used Remotion to create
3:49 like 20 launch videos in the span of 1
3:52 month. And so, Claude has been releasing
3:54 these videos right here. When they first
3:56 launching these types of videos, these
3:58 were all created with Remotion. You can
4:01 create these little animations here with
4:04 Remotion. And they got over 300 million
4:07 views over the course of a month just
4:09 releasing these Remotion videos for all
4:12 of their feature launches. And they
4:14 literally were releasing one every
4:15 single day. So, Remotion just allows you
4:18 to create videos really quickly and you
4:20 can do this in Claude Code or you can do
4:22 it in Codex like we're doing today.
4:24 Okay, so earlier I mentioned that you
4:26 can very easily download the Remotion
4:28 skill or the Remotion plugin. How do you
4:31 set this up? Well, I'll show you right
4:33 now. And if you get confused by any of
4:35 this at all, I created a Codex video.
4:38 This is a 1-hour and 40-minute video
4:40 that covers everything inside Codex, but
4:43 I think you'll pick it up pretty quickly
4:45 in this video. So, what we're going to
4:46 do here is we are going to go up to
4:48 create a new project inside Codex. And
4:51 this is because we might create a ton of
4:53 videos and we want this organized in a
4:55 folder. And we want to be able to create
4:57 many chats within this folder and that's
5:00 why you create projects. So, we're going
5:01 to go ahead and create a new project and
5:03 we're actually going to create this in
5:05 the desktop folder. We're going to
5:07 create new folder and now we're going to
5:09 say Remotion project. And then we're
5:12 just going to press open. And then
5:14 you'll see your project start over here.
5:17 So, what we can do is we can press this
5:19 create a new chat. And you can literally
5:21 go to Google, type in download Codex,
5:23 and you can download it directly to your
5:24 computer. You what you can do here is
5:26 you can go up to plugins and then you're
5:28 just going to go to plugins. And what
5:31 you're going to do is you're going to
5:32 type in Remotion. And then you're going
5:34 to download this and you're going to be
5:35 good to go. It's going to say, "Are you
5:36 sure you want to download?" You're going
5:37 to hit yes and you're ready to use
5:40 Remotion. Now, once you create a new
5:42 chat, let's go ahead and test this with
5:44 something very, very simple. I want you
5:48 to create a and then you can press at
5:51 Remotion video. And this should just
5:56 say, "Hello world" in black text on a
6:01 white background, right? Let's get this
6:04 up and running and then we can start
6:06 making really complex videos. Boom. And
6:09 so, just like Claude Code, the AI agent
6:12 is going to work and once it's done,
6:15 it'll run it locally and then you'll be
6:17 able to open it up here in this side
6:19 browser. Before anything gets run, this
6:22 kind of opens up in this summary and you
6:24 can see the prog- the progress, you can
6:26 see the artifacts, and you can see the
6:28 sources. So, this worked for about 2
6:30 minutes and we got this response here.
6:33 And what you're looking for is this
6:35 localhost link. This is running it
6:37 locally on your computer. And if you
6:39 click on this, boom. The Remotion plugin
6:43 automatically opens up and you can
6:45 almost think of this Remotion plugin as
6:46 like a mini app that's running on your
6:48 computer. And whatever you type here
6:51 gets updated here. All we asked for is a
6:53 hello world and this is what we got. We
6:56 can hit play and nothing happens.
6:58 Literally just loops saying, "Hello
7:00 world." We can say, "Please make the
7:04 hello world jiggle and make it say,
7:09 'Hello, comma, from Riley.'" I promise
7:12 we're going to do more exciting stuff. I
7:13 think it's important to be boring at the
7:15 beginning just to give you the little
7:17 taste. Okay. Hello world. There's a
7:18 reason why when you start coding that
7:20 you start with a hello world project.
7:21 You just got to make something exist and
7:23 then you can make the things better. You
7:25 can let your imagination go after you
7:27 understand the fundamentals. And while
7:29 that was loading uh for 51 seconds, I
7:31 closed the sidebar just to show you that
7:33 if you have the sidebar ever gets
7:34 closed, then you can just click on this.
7:37 There you go. We have the change. It
7:38 says, "Hello from Riley" and it now
7:41 jiggles. Okay, now what I want to do is
7:44 I want to do some basic vocabulary. And
7:48 what I want to talk about right here is
7:50 I want to talk about this right here.
7:52 So, this right here is a composition. We
7:55 have now created one composition, which
7:57 is this hello world composition, and we
8:01 can ask for it another composition. And
8:04 so, what I'm going to do, I'm going to
8:06 say, "Please create another composition
8:10 that has the Codex logo and the Remotion
8:14 logo." And what I'm going to do is I'm
8:16 actually going to do find the logos on
8:19 the internet. Okay, so I just downloaded
8:21 them off Google Images. This is the
8:23 Remotion logo. This is the Codex logo.
8:25 Now, what I'm going to do is I'm going
8:27 to go to our Remotion project and we can
8:29 just hit open in finder. So, now we see
8:32 that the project folder is open. It is
8:34 at desktop Remotion project, which
8:36 matches Remotion project. And you can
8:39 see here that the agent has created this
8:41 folder called hello world video. So, now
8:43 what we want to do is we just want to
8:45 drag those two images into this folder
8:48 and they are called codex.png and
8:51 remotion.png. So, now we can at mention
8:55 Remotion and you can see here Remotion
8:57 PNG shows up. at Codex PNG. There we go.
9:03 Please put these on the screen dark gray
9:08 background with text in Instrument Sans
9:14 Instrument Serif font
9:17 uh with text that says AI-powered
9:21 video motion graphics. Then add a little
9:26 animation beam that connects them. So,
9:31 we can run this and what it should do is
9:34 it should add a new composition that'll
9:36 show up right here and then the timeline
9:40 will be different. And I'll show you how
9:42 to create more scenes in the timeline in
9:45 just a second. Okay, so it is still
9:47 thinking and still working, but you can
9:49 see here it added AI motion graphics.
9:52 Check this out. Watch what happens when
9:53 I click. Boom. Now we see some stuff
9:57 show up here. I'll explain this once
9:59 it's done generating. Okay, so it is
10:01 done and let's take a look at this. Look
10:04 at this. This is pretty cool. Right? We
10:07 have these two logos sending a beam to
10:11 each other and so this is kind of like
10:13 they're you're kind of connecting them.
10:15 Now let me show you how we can quickly
10:17 make changes. But the first thing that I
10:19 want to do is I can see that it actually
10:20 rendered the video. If I click on this,
10:22 it actually shows the full rendered
10:25 video. But we don't need to do this
10:27 every time. I'll say I'll tell you when
10:31 to render
10:33 uh from here on out. We don't need to
10:38 We're going to be making a lot of
10:39 different changes. So we can run that
10:40 prompt. Don't do anything for now. So
10:43 now I want to do is I want to talk about
10:45 vocab for a little bit. I will take a
10:49 screenshot of this.
10:55 So this right here is the timeline and
10:59 this is a scene inside your timeline.
11:03 And of course you can hit play and do
11:06 all of the normal things and here's
11:08 where you render. Notice here that the
11:10 AI can just decide when to render it and
11:12 send me an MP4, but you can also render
11:15 it yourself by pressing this button
11:17 right here and you can actually decide
11:19 the settings on how you want to render
11:22 it. It's It's the same as if you were
11:23 exporting it on Premiere Pro or CapCut.
11:27 Additionally, we have something up here
11:29 called assets. And so I'm going to click
11:32 on this assets folder and I believe that
11:35 the two assets are going to be one and
11:37 two, right? These are PNGs which are
11:40 assets which are different than code.
11:42 Everything else is code, right? This
11:44 laser beam is code, this text is code
11:47 and the background is code. The assets
11:50 are going to be the little assets that
11:51 you add to your app and in this case we
11:54 added these PNGs with no background
11:56 which the AI added to the scene. And so
11:59 we can verify this if we click on
12:00 assets. There you go. We see Codex and
12:04 Remotion. If we go back to compositions
12:06 and click on this, we are back. Now what
12:08 we can say is
12:10 Please, can you get rid of this line? I
12:16 don't like it. Now notice how it's like,
12:19 "Okay, what line like am I talking
12:21 about?" In In this case it would
12:23 probably get it, but I'd love to be
12:24 overly prescriptive. It just saves me a
12:26 lot of time in the long run and this is
12:28 also because I use CleanShot Pro. It's
12:30 super easy to just like take a
12:32 screenshot, open this up and I can very
12:34 easily just like label the line. And I
12:36 can just paste it in and the AI will see
12:38 that I'm literally pointing at this line
12:41 right here. Please make the scene last 2
12:44 seconds longer. Then when it's done,
12:49 please have the logos animate off the
12:54 screen to their uh respective sides. So
12:57 the Codex logo should disappear left,
13:00 the Remotion logo should disappear right
13:02 and then I want the text to slide down
13:05 to the center of the screen and then
13:07 animate into full guide. And so I'm
13:10 going to add quotes here after full
13:12 guide. And now we're going to run this
13:14 prompt. So this one's a little bit
13:15 longer of a prompt. And again, we're
13:17 running this. We're using Codex. We're
13:19 using GPT-5.4.
13:21 Reasoning effort extra high. It is the
13:24 best right now in my opinion. Okay, it's
13:26 done. It worked for about a minute and 2
13:28 seconds. And by the way, this is going a
13:30 little bit slower or faster because I'm
13:32 using the fast mode. It is twice as
13:35 expensive, but I spend a lot on AI and
13:38 this is something I'm perfectly willing
13:40 to spend money on. So what I can do is I
13:42 can test this. Let's take a look. So
13:44 here the beam is gone.
13:49 Okay, so here this is a good guide. This
13:52 came down.
13:55 And then full guide came on here. And so
13:58 you'll notice here there's actually 30
14:01 frames per second. So right now we're at
14:03 4 seconds exactly and these are not, you
14:06 know, decimal points. These are frames.
14:08 This part right here. And so we can
14:10 actually reference a specific frame. So
14:12 this is like at 4:17. I can I can say
14:15 4:17.
14:16 At this frame when AI-powered motion
14:19 graphics turns to full guide, I was
14:21 hoping the text would literally change
14:24 from AI-powered motion graphics to full
14:27 guide as if it was being like backspaced
14:30 and then retyped, not like having it
14:33 fade out and then the other one fade in.
14:35 Find a way to like maybe reorder the
14:37 letters into it. Use your best judgment
14:40 and find the best animation for this.
14:42 Also, I just wanted the line between the
14:45 two logos to disappear. I like the
14:47 little ball that was being shot from the
14:49 Codex logo to the Remotion logo. So
14:51 please re-add that.
14:53 And remember, if you hit command enter,
14:55 this will steer it into the
14:57 conversation. This does not mean queue
14:59 it up for once it's done with this. It
15:02 steers it, so it basically adds this to
15:04 the current session. And so now it's
15:06 going to do both of these things in one
15:09 swoop or, you know, one edit. All right,
15:11 after 2 minutes it is done. Let's give
15:13 it a look here. Let's see. So now we
15:15 have the little ball going across. Dude,
15:19 let's go. And now we can say hold the
15:22 full guide for another 2 seconds. Can
15:28 run that. I want it to hold this at the
15:30 end for 2 seconds longer. It ends too
15:32 early. Okay, so it's done. Let's just
15:34 skip right here to the end. Let's see.
15:37 So it goes from here
15:39 to here, backspace, full guide. Bang. So
15:42 we just created that. In a couple of
15:44 prompts we created this motion graphics
15:46 video. And yeah, so you're starting to
15:49 get the hang of it. Let's dive into some
15:51 other cool stuff here. Okay, so I want
15:53 to talk a little bit about organization
15:55 and how to create consistent assets. So
15:59 I want to show you here that you can see
16:01 here that this shot right here. So this
16:03 I have this like cool animation in the
16:06 background that you can actually see by
16:08 going up to brand assets and we can
16:10 actually find it right here. So we have
16:13 this background cool animation. Remember
16:16 this is just code. This is called a
16:18 Lissajous figure, fun fact. And we're
16:21 using this for a brand asset and we're
16:23 also I also created this background
16:25 gradient. And so I created this
16:27 composition called brand assets and here
16:31 we have all the logos that we might want
16:32 to use. We have a dark gray gradient, a
16:36 blue gradient, a gray figure, a blue
16:38 figure, a red figure, a green figure and
16:41 then we have some other cool types of
16:44 things that I might want to use. And
16:46 what this allows me to do is just ask
16:48 the agent for specific things. And you
16:50 can see here that this is called a red
16:52 figure, right? So if we go to red figure
16:55 right here, we can very easily just ask
16:58 the agent for a red figure. I can say,
17:00 "Hey, there's a red figure in brand
17:01 assets. Just use that." And so then we
17:03 can create new videos that all have the
17:06 same background. And so since we have an
17:09 iPhone mock-up, I was able to ask the
17:11 agent, "Hey, can you create another
17:12 iPhone mock-up for this part?" And one
17:15 thing we'll get to later, you notice
17:17 here there's this green thing. You can
17:19 ask the agent to add music. And so here
17:21 you can see that there's music. And
17:23 we'll talk about that in just a second.
17:25 One thing that you can also do is you
17:26 can actually open up this full screen
17:28 mode which I actually do really like and
17:30 you can even close this side panel so
17:32 it's literally full screen. And so now
17:35 we can actually really we can start to
17:36 add more scenes to this. So we have full
17:39 guide.
17:41 And now um I'm going to outline the
17:44 steps really quick. Okay, so I just
17:46 typed out my prompt and I want to break
17:48 it down real quick. Firstly, I included
17:50 one screenshot which is just the Codex
17:52 user interface and this is just a
17:54 reference to the agent. I'm going to
17:55 screenshot this because I'm going to do
17:57 an in-depth analysis of this prompt real
17:59 quick. So what I'm doing here is I'm
18:02 basically saying I want to create new
18:04 scenes after this. So I want to create
18:06 new scenes and here I put scene one,
18:09 scene two and scene three. And then I
18:12 also said maintain the background
18:14 throughout. And then I said type into
18:16 Codex input. So we're going to type into
18:18 the Codex input and then I said it's in
18:21 the image. Don't use the image I gave
18:23 you. Simply use it as reference, right?
18:25 This image is referenced in this part of
18:27 the prompt. And then I said this text
18:31 should be typed in, right? Create a
18:34 launch video for Remotion and Codex
18:36 integration. So we're basically creating
18:38 the video that we're creating now. So
18:40 it's kind of meta.
18:41 And then show the Codex logo in scene
18:44 two and then a loading animation. And
18:46 then in scene three it should show the
18:49 video rendered of what we created so
18:52 far. And so basically it's going to take
18:54 the video that we're making, put it on a
18:56 TV in the final scene and show that it's
18:58 rendered if that makes sense. So I'm
19:00 going to go ahead and enter this prompt
19:01 here. Okay, so I entered the prompt and
19:04 you can see here we can actually toggle
19:05 this on and we can see what the AI is
19:08 saying and again we can always toggle
19:09 back and we can see the exact prompt
19:12 that we used right here. And in this
19:14 full screen view we can only see what
19:17 the AI is responding, but this allows us
19:19 to kind of fully immerse ourselves into
19:22 whatever it is that we're creating. And
19:24 while that's loading, I'm actually going
19:26 to go to suno.ai.
19:29 And what I can do here is I'm just going
19:31 to type in relaxing
19:33 funk launch video
19:38 instrumental.
19:41 And we can hit create. And we can
19:44 actually, yeah, change this to
19:46 instrumental.
19:56 >> [music]
19:59 >> All right, that's not bad.
20:03 I like this one.
20:05 Okay, so we can just click on download.
20:07 We'll download the MP3 file. Now I'm
20:10 going to go back to Codex and what I can
20:13 do here, I'm going to open up this
20:15 project folder and so here we see this
20:18 song slow funk lift. I can drag this
20:21 into this folder right here. And now
20:25 what I can do is I can say at slow funk
20:28 lift, please add this song at 75%
20:34 volume throughout
20:38 the whole thing. And now it's going to
20:40 add that really quickly and then we can
20:42 see how it did. And you can see here it
20:44 added one, two, and three sequences.
20:47 Sorry, these aren't scenes. These right
20:49 here are called sequences and we'll take
20:52 a look at this. This actually doesn't
20:54 look too bad. You can see here that it
20:56 added this like green line right here so
20:58 we can see that the slow funk song is
21:01 actually in our app or or in our video.
21:04 We'll take a look at it right when it's
21:05 done. Okay, so everything's done. Let's
21:07 take a look at this. I'm going to go
21:09 full screen for this. Let's take a look
21:12 here. We can lower this. Let's see.
21:19 >> [music]
21:29 [music]
21:29 >> Ooh, let's go.
21:34 Ooh, there you go.
21:36 >> [music]
21:39 >> So literally it put the video that we
21:42 made, it exported it and then put it in
21:45 here. This is actually awesome. Let's
21:47 add a few more scenes. I want to add
21:49 four more scenes real quick. I'm going
21:51 to type in my prompt. I'm going to take
21:52 a few minutes to think about it. Okay,
21:54 remember keep the background consistent
21:56 throughout the rest. Remove the glows
21:59 like the the background like glowing
22:01 behind the
22:03 TV. I actually don't like that or like
22:05 reduce it to barely anything and then
22:08 keep the background the same throughout
22:10 the rest. The first thing I want to show
22:12 is a scene that shows social media
22:14 platforms. Maybe show three different
22:16 social media platforms and then show
22:18 that we're getting a ton of likes, like
22:20 hearts or and then yeah, show that and
22:23 then show quick pan to another scene
22:25 where it shows revenue increasing, then
22:28 switch to another scene where it shows
22:30 views going from zero to 1 million
22:33 and then say the last scene, scene four
22:36 that I want you to add is like show the
22:38 Remotion and Codex logo again and then
22:41 have the text on it say launch your
22:43 video today and then what I want is for
22:47 the final scene, scene five for the
22:49 logos to fly out again and then put
22:53 OpenAI Codex. Just those that text at
22:56 the center of the screen to finalize it.
22:58 That's the final part.
23:01 It's a long prompt. We'll go ahead and
23:02 enter that in. Okay, it's done. Let's
23:04 give this a try.
23:07 So let's see.
23:11 >> [music]
23:21 [music]
23:26 >> Okay, this is pretty good. Pretty good
23:27 so far. Remove the background [music]
23:29 gradient that looked kind of ugly. I
23:31 like it. Ooh,
23:32 let's go. This is a fire shot here. Look
23:36 at this.
23:38 There we go. We don't have the the
23:40 correct icons for Instagram, TikTok, and
23:44 YouTube. We need to get that but I'll
23:46 add that in just a second.
23:50 >> [music]
23:50 >> Okay, not bad. We can change this so I'm
23:53 just going to start
23:56 going like this. I'm just going to
23:58 literally
23:59 circle this right here.
24:02 I'm just going to say, "Please get rid
24:05 of this little arrow as shown here. Just
24:11 make it the line. Make the line green."
24:15 And then I'm going to say, "Also, I want
24:18 the actual icons used."
24:23 And so I just grabbed the logos off the
24:24 internet. We're going to drag them into
24:26 the Remotion project once again and
24:29 I can cut YouTube.
24:35 YouTube.
24:37 There we go and ATT.
24:38 Okay.
24:39 Please use these logos. Okay, while
24:44 that's running it looks like this was
24:45 fixed. This looks a lot better so the
24:48 logos should be replaced here. Let's
24:51 check out the rest.
24:56 Nice.
25:00 Nice.
25:02 Launch your video today.
25:11 Okay, so here I want to combine these.
25:14 So right now on the second to last
25:16 sequence it says launch your video today
25:19 and then it switches to a new sequence,
25:21 right? Switches to a new sequence that
25:23 like has them stop jiggling. So in this
25:26 new sequence it like changes the icon
25:29 like the icons stay the same but it like
25:32 has them reappear and then they are not
25:34 jiggling. Instead I want it to just be
25:36 the second to last scene should be the
25:38 last scene and then they should be
25:40 jiggling and then they should fly off
25:43 the screen and then the text that says
25:46 launch your video today should fly off
25:48 the screen at the same time and then the
25:51 OpenAI Codex text should appear exactly
25:53 as it does. So then it will be a lot
25:56 smoother. Okay, we'll fling that one in
25:58 there as well and it's still working but
26:01 look at this. Here we go. We can see
26:03 Twitter. I know Twitter is no longer in
26:06 existence. It's X now but we're just
26:09 doing this for fun. I mean this is
26:10 coming together pretty well. I mean
26:11 we're creating this video pretty
26:13 quickly.
26:17 Okay, it's done. Let's check out this
26:19 last part. So it's right after this
26:21 scene right here.
26:28 Ooh.
26:33 I mean come on. Let's go. And then now
26:36 to export the video we just hit render.
26:39 I just do it the H.264
26:43 and yeah, let's just render this video
26:45 and we can see here that this is
26:47 rendering the video right here and this
26:49 means actually turning into a video that
26:51 you can export and you can upload onto
26:53 Twitter or something. And what we can do
26:56 here is we can see this right here. And
26:59 now once we're done we could very easily
27:02 just drag this up into Twitter and we
27:05 could launch our launch video. And look
27:07 at that. We have our launch video just
27:09 like that.
27:11 Anyway, we covered a lot in this video.
27:13 We dove into Codex. We covered adding
27:15 images and different assets to our
27:17 video. We generated a song, added it to
27:20 the video and I think it came out really
27:23 well for you know seven to eight
27:25 prompts. If we spent another like three
27:27 hours on this I'm sure we could have
27:28 made it just absolutely insanely good
27:32 but I think this is pretty solid for the
27:33 sake of this video. I hope you learned
27:35 how to create engaging content for
27:38 social media and these really do well on
27:41 Twitter. But thank you guys for
27:42 watching. I'll see you here in the next
27:43 video. Peace.


---

## Source: codex-skills-every-design-engineer-needs.txt

- Original path: `addintional info to add\codex-skills-every-design-engineer-needs.txt`
- Size: `15620` bytes
- SHA256: `F349604B4E6CAE50DF9695BC6AE8CD553F11EFFBC9DA823B0DE33283A1DD09AF`

---

Codex Skills Every Design Engineer Needs

0:00 Hey everyone, welcome to today's video.
0:01 My name is Lucas and today we're going
0:04 to be covering a few use cases for
0:06 product designers to use inside of
0:08 Codeex. Um, specifically skills to use
0:11 inside of Codeex. Now, Codex is this
0:13 type of IDE that is made by OpenAI and
0:17 you can go to their website
0:19 openai.com/codex
0:21 and read a little bit more about what
0:22 they do. So, as you can see, designed
0:24 for multi- aent workflows, adapts to how
0:26 your team builds, u made for always on
0:29 background work. Now, once you download
0:31 the codeex app, you can open it up.
0:33 You're going to get something like this
0:34 where you can start prompting and
0:36 editing a few files from your project.
0:39 You can also start building things and
0:41 or or chatting with the AI to to kind of
0:45 build on top of things in in your
0:47 project or you can start from scratch
0:49 like I am over here. But up here on the
0:51 left, we have skills. And in today's
0:53 video, I'm just going to go and talk to
0:55 you about a couple of potential use
0:58 cases that you can use using Codeex as a
1:01 product designer. And by the way, before
1:03 we dive into today's video, I'd love to
1:04 invite you guys to my Discord community.
1:07 It's called the Creator Network, and we
1:09 are a bunch of different entrepreneurs,
1:11 designers, developers from all around
1:12 the world, and we get together every
1:14 single weekday to talk about different
1:16 tools, different topics, different
1:18 challenges. So if you guys are
1:19 interested in joining those chats, link
1:21 is down in the description below. Now
1:23 let's go to the most obvious skill. I
1:26 can see the Figma logo over here. So I
1:28 think that the the first thing that we
1:30 want to try out is Figma to code using
1:33 codec. So we have a few ways to get
1:35 started. We can use either Figma NCP for
1:37 design to code work or turn Figma
1:40 designs into production ready code. I'm
1:41 going to choose this one. And over here,
1:43 once you click on that, you're going to
1:44 get like a quick little guide or
1:46 overview prerequisites, and it's going
1:48 to give you like a little step-by-step
1:50 guide on how to get started. And once
1:52 you give that a quick skim, we can click
1:55 on install. And then going back to the
1:58 chat, I can forward slash and we can
2:02 choose our new skill that's over here.
2:04 And I can start by saying, you know,
2:06 let's let's turn my design into code.
2:09 So, I just said that. It immediately
2:11 gave me this little popup. The following
2:12 MCP servers are required by the selected
2:15 skills but are not installed yet. Figma
2:17 install them now. Install. And that
2:19 takes me to this little widget over
2:22 here. I'm going to click on agree and
2:24 allow access. And now we're back into
2:26 codeex. And so now it's telling me to
2:28 send a link in this format to start
2:31 immediately. So I can go ahead and open
2:33 Figma. And I'm going to choose a
2:35 community project. This one I found
2:36 online. 20 screens login and register
2:39 mobile. That's what it's called. Shout
2:40 out to the person that did this. And
2:42 we're going to basically select this and
2:43 I'm going to click on command L to copy
2:46 the link of this Figma frame to the to
2:49 the clipboard. And going back over here,
2:51 I'm going to paste that in here. And it
2:53 pretty much has this format. So I'm
2:55 going I'm just going to send that like
2:57 that. And now it says that it's
2:59 implemented the design, turned it into
3:01 code. It gave me these two files, HTML
3:03 and CSS. What's included? It gives us a
3:06 quick rundown of what's included. I also
3:08 saw that it found like inter in
3:10 incorrect text size values in some of
3:13 the buttons. So it was kind of like
3:15 correcting those mistakes that were from
3:18 Figma. And note repo had no existing
3:20 framework. So I implemented this as a
3:22 standalone HTML CSS. I couldn't do a
3:25 browserbased visual diff in this
3:27 environment. So final pixel check in
3:29 your browser is still needed. So let's
3:31 go ahead and commandclick this. And I'm
3:34 going to double click on this. And this
3:36 is what we get over here. We get pretty
3:38 much what we wanted. Nothing is
3:40 interactive. I can type this. I can
3:42 delete this. So that works. I can do the
3:45 same over here. And I type something in
3:47 and it understands that this is like a
3:49 password. It should be hidden.
3:52 I can toggle this. I can click this and
3:56 then it like refreshes the page. And
3:58 these buttons don't have any hover
4:00 effects or any states. I cannot click on
4:02 login. A few things are kind of off. So
4:05 I would want to see how we can kind of
4:07 improve the design here. Now it's giving
4:09 me these next steps. If you want next I
4:11 can convert this into react next
4:13 components, add interaction states and
4:15 build additional screens. So let's just
4:18 do the first two I would say. And we're
4:20 going to just paste it in here and click
4:22 on submit. Now it's telling me what it
4:24 did. It's giving me some notes and it's
4:27 telling me to run these different
4:28 things. So, I'm going to click on the
4:30 terminal over here and I'm going to copy
4:32 these commands or I'm just going to type
4:35 them down. mpm install. Go ahead and
4:38 click on enter. Then we're going to do
4:40 npm rundev. Click on enter again. And
4:44 now commandclick this. Now we're
4:46 starting to get a little bit more
4:48 interactivity. I'm getting these
4:50 different states. So over here, as you
4:53 can see, the switch. I click on login
4:55 and now it says login form is valid. But
4:57 the design is still kind of off. So what
5:00 I'm going to do is I'm going to try to
5:01 bring in a screenshot from Figma and
5:05 tell Codex to kind of polish the design
5:07 a bit. So over here, I'm just going to
5:08 go ahead and take a screenshot of this.
5:11 And going back over here, just going to
5:13 drag and drop the screenshot into the
5:16 chat. And for reasoning, we might want
5:18 to kick it up a bit. So I'm going to
5:20 click on hi. Click on send. And now
5:23 that's looking much better. We have a
5:24 fixed icon. That's the first thing I
5:26 noticed. This is looking much nicer as
5:29 well. Obviously, if you know, this is
5:32 still something to fix, but you know,
5:34 eventually you can do that. You can just
5:35 give it an image and it can replace the
5:37 image here. That's no big deal. And you
5:39 can eventually create a login view
5:41 that's different, a signup view that's
5:43 different, create extra pages, make this
5:46 web or desktop responsive because right
5:47 now it's only mobile responsive or it
5:49 only kind of shows in this size. But
5:51 yeah, all in all, you know, eventually
5:53 it'll get there. It does a pretty good
5:55 job bringing in designs in from Figma.
5:57 You just need kind of that like extra
5:59 touch and patience to, you know, mold it
6:02 into a much nicer looking design. Now,
6:04 the next use case here is design system
6:07 extraction. So, basically opening up any
6:10 Figma file, Figma project and having the
6:14 ability to kind of extract the theme
6:16 from that design to eventually build
6:18 something new here in Codex. So I can
6:21 basically say generate design tokens,
6:23 CSS variables, typography scale, spacing
6:26 rules, and component API docs from a
6:29 design file from a Figma design file and
6:31 turn it into a doc x or a markdown. And
6:34 before we do that, we just want to make
6:36 sure that we use that other skill, the
6:38 just a Figma skill. So let's install
6:40 that and forward slash. Let's do the
6:43 Figma paste. Enter. And once you do
6:46 that, you want to just copy the link of
6:49 this specific Figma project. And then go
6:52 back here and we're going to paste that.
6:53 We just want to make sure that this is
6:56 the correct file structure or or link
6:58 structure. So file frame node. That
7:00 looks correct. Let's go ahead and send
7:02 that. And something to kind of keep in
7:04 mind, it says that it failed because the
7:07 MCP session expected a selected layer,
7:10 but then automatically it started
7:12 saying, I got the node map successfully.
7:14 Next, I'm collecting screenshots plus
7:16 variable definitions from the same node
7:18 and retrying design context. So, it's
7:20 like kind of trying and failing, but
7:22 then retrying in a different way. So,
7:24 it's interesting to see how this works.
7:26 And so, now it created this markdown
7:29 file and this doc. So, I'm going to
7:31 click on the markdown file just to check
7:32 it out. And as you can see, it created
7:34 the the file. So, carbon design system.
7:38 So, source node extracted via Figma MCP
7:42 design tokens. We have the different
7:43 colors. We have the typography. We have
7:45 the font weight. We have effects,
7:48 typography, style, spacing, rules, a
7:51 bunch of different things that we can
7:53 use as a markdown for eventually
7:55 building out different types of
7:56 prototypes. And I can say turn this doc
7:58 into an HTML HTML page. So I can
8:00 visually see the colors, typography,
8:03 etc. And now I can click on that. I get
8:05 this nice HTML HTML page with the carbon
8:09 design system. So we have our design
8:11 tokens, topography scale, spacing rules,
8:14 API component API docs. Looks really,
8:16 really fancy. Beautiful really. And it
8:19 just took us like what 2 minutes to do
8:21 this, which is crazy. But yeah, that was
8:23 basically generating design tokens from
8:25 Figma. Now the next thing that I want to
8:27 cover is generating a UI audit from
8:31 specific screenshots or from a document
8:33 or even eventually from a Figma design.
8:35 basically asked for like an
8:37 accessibility and UX consistency audit
8:40 in some type of PDF file format with
8:43 sections with tables with priority so
8:45 that we can just eventually send it to
8:47 our stakeholders or to our client. And
8:50 first off, I just want to start off with
8:51 like maybe screenshots like this. So I
8:54 can maybe try to just give it like
8:56 something like this with the different
8:58 screenshots of what six screens. And
9:00 this is where we can use for example
9:02 this PDF skill. So I'm just going to
9:03 click on install skill. And I eventually
9:06 also want to test it with real URL. So
9:08 I'm going to also install this playright
9:11 skill over here. And so for the first
9:13 thing, I'm just going to click on
9:14 forward slash PDF skill. Create a UI
9:19 audit. Create a UI audit based on the
9:21 screens in the attachment. Output a
9:23 client ready PDF with sections, tables,
9:25 and priorities. We also want to make
9:26 sure that our screenshot is attached.
9:29 I'm going to go ahead and click on send.
9:31 And we get this UI audit airwall mobile
9:34 flow PDF. I haven't opened it yet. So
9:36 let's open it together and let's double
9:38 click over here. And we basically get
9:40 this PDF over here. Couple of pages,
9:43 eight pages long. UIUX audit report.
9:46 Airwalks mobile transfer and activity
9:48 flow prepared for CL client
9:50 stakeholders. I guess you can like you
9:52 know you know uh change the name over
9:54 here. Executive summary. This audit
9:56 reviews the provided airwalls mobile
9:58 screens across home activity transfer
10:00 setup review and success states. It
10:02 gives us a few findings over here with
10:05 with different topics like accessibility
10:07 potential low contrast and secondary
10:09 gray text and iconography. So for
10:12 example we have this like secondary gray
10:14 text over here over here and the icon it
10:18 seems to be white with this like light
10:19 gray background. I guess I guess that's
10:21 true. And then you have like detailed
10:23 findings over here. And then at the
10:25 final part of this, you have these
10:27 different sprints, potential sprints
10:29 that you can run in order to improve.
10:31 Now, I find this flow pretty
10:33 interesting. You know, you can also ask
10:35 it to include the images and maybe have
10:37 the image and then show the findings of
10:40 that specific screen. You know, the
10:41 deeper you go into this, the more custom
10:44 you can make it to your own to your own
10:46 use case. Anyways, the next thing that I
10:48 want to do here regarding the same skill
10:51 is or a different skill now but the same
10:53 type of use case is playright CLI skill.
10:58 And what I want to do is I want to give
10:59 it a specific link and so that it
11:03 analyzes the flow of that link to the
11:06 end goal which would be in my case we
11:08 can go to the marketplace and look for a
11:11 free template maybe under you know a
11:14 specific category like political or
11:17 something like that. Let's just make it
11:19 a little bit easier. A free template for
11:21 the e-commerce space. So, I can say, "Go
11:23 to thisframe.com/marketplace
11:25 and look for a free e-commerce template.
11:28 Provide me with an HTML audit that shows
11:30 the steps it took for you to find the
11:32 free template and also include
11:34 screenshots of the page if possible or
11:36 of the pages. And give me an executive
11:39 summary, findings, tables, and
11:41 prioritize action plan on how to improve
11:43 the UX of this flow." And over here, I'm
11:46 going to set this to high so it has high
11:48 reasoning. And we go ahead and click on
11:50 send. and I had to quickly grant
11:53 permissions. A pop-up came up saying
11:56 asking if I if I allow Codex to use my
11:58 browser. I said yes. Okay. So now we
12:01 have our main deliverable. We have these
12:04 different PGs over here. Very very
12:06 interesting. It did take a while to
12:08 generate, but let's start clicking on
12:10 this. And I can see some some
12:12 screenshots. They look pretty good.
12:14 Click on this. And now we have our UX
12:16 audit framework marketplace free
12:17 e-commerce template discovery flow audit
12:21 and
12:23 step one step two. Damn, look at this
12:26 e-commerce category pricing filter
12:28 option
12:30 free filter template detail confirmation
12:34 findings table. These are the different
12:36 findings. What has a high priority? I
12:39 guess this one is high priority. We can
12:41 eventually, you know, adjust adjust
12:43 that. Finding no explicit guided path
12:45 for common intents. I need a free. Okay.
12:48 So, you can't like type that, you know,
12:50 you can't type that in like a search
12:52 bar. There's no like AI to kind of help
12:53 you. You have to like look for it. High
12:55 horizontal category density may reduce
12:58 discover discoverability in smaller
13:00 viewports. Interesting. And we have this
13:02 prioritize action plan 0 to two weeks.
13:04 We can do this. and six to 10 weeks we
13:07 have these these uh more challenging
13:10 sprints I guess but it did a fantastic
13:12 job. This was the first try. Wow, we get
13:15 something like this a full UX audit. But
13:18 anyways guys, that's it from my side.
13:20 Hope you enjoyed today's video. It's
13:21 pretty impressive what you can do with
13:22 Codeex. Really excited to see what you
13:24 guys are using Codeex for. You know,
13:26 maybe you're using it at your job or for
13:29 some type or you're just poking around
13:31 or something. I don't know. Let me know
13:32 down in the comments below. And again,
13:34 thanks so much for watching. Hope to see
13:35 you next time.


---

## Source: how-i-build-apps-with-codex-and-gpt-5-5.txt

- Original path: `addintional info to add\how-i-build-apps-with-codex-and-gpt-5-5.txt`
- Size: `20003` bytes
- SHA256: `85C5382BFFA90BB5577B838CD95F75E1C93D659BF36F0B0A49EEE684AA2719D9`

---

How I Build Apps with Codex and GPT-5.5

0:00 This is my current workflow with GPT 5.5
0:03 and the Codex app. I've pretty much
0:05 switched over to the Codex app from the
0:08 CLI. I occasionally use the CLI tool,
0:10 but I'm finding more and more things
0:12 about the Codex app that just make it
0:15 work for me. So, let's dive in. I build
0:17 iOS and macOS apps and I've been really
0:20 leaning into Codex and this new model
0:23 from GPT 5.5 is really good. I did get
0:26 early access. I got a few days before it
0:29 launched and I want to talk about my
0:32 experiences. Now, I wasn't just coding
0:34 with it this time. I was actually using
0:37 it different from how I've used these
0:39 models in the past and that's because
0:41 the work that I'm doing with Codex has
0:44 evolved. It's not just about the code,
0:46 but it's the whole package for how to
0:50 package and sell an app on the App
0:52 Store. And so, one of the things that
0:54 I've been working on is updating an old
0:56 app. I kind of let this app die. It was
0:58 9 years old.
0:59 I finally updated it with GPT 5.4 and
1:03 now I'm in the process of updating the
1:05 marketing, fixing the sales page and the
1:07 text copy. And I was really leaning into
1:10 GPT 5.5
1:13 and the new pro model for 5.5 to fix
1:17 this up. Let's take a look at what's
1:19 possible with the app. I want to show
1:21 you what you can do with Codex and the
1:23 Codex app. I don't even need to open up
1:25 Xcode anymore because of this skill that
1:27 I use. Now, the skill's called app
1:28 creator and I designed this to make it
1:31 easy to start new Xcode projects. I
1:34 don't have to touch anything under the
1:36 hood. It's using Xcode gen to generate
1:38 either a UI kit, app kit, or Swift UI
1:41 project. If you don't know anything
1:43 about Xcode, don't worry. Your agent can
1:45 figure out everything with this skill.
1:48 You can download it at the link below
1:50 and I'm just going to show you how it
1:51 works on a new app. I want to just make
1:53 a tea timer app. This is just sort of a
1:55 throwaway app, but I'm going to base it
1:57 on my coffee timer designs and I'm going
1:59 to see what chat GPT
2:01 can do if it's given sort of some design
2:04 language to start with. Now, we all know
2:07 that chat GPT is a little bit weaker on
2:09 design, so let's take a look at what
2:12 happened. Wow.
2:14 >> [laughter]
2:14 >> That's all I can say about this result.
2:17 This is what I saw when I came back to
2:19 my computer after going to the park and
2:22 I was like, "Wow, this thing really made
2:25 it feel a lot more cohesive, made it
2:27 feel a lot more polished." We are going
2:28 to dive into Codex and we're going to
2:31 try and build something. So, I want to
2:33 talk about the tools that I'm using real
2:35 quick. So, first one that I'm using is I
2:37 am using WhisperFlow and that allows me
2:40 to dictate. So, I'm just going to close
2:42 that. I'm going to open it up and I
2:44 start with the function key and
2:46 spacebar. You can see that it is
2:48 recording right here. If I let go, it
2:50 pastes that text right here. All right,
2:52 so let's do a little demo of how I work
2:54 with Codex. I want to create a tea timer
2:57 app. I've got a art design from my
3:00 coffee app. I want to use that as
3:01 inspiration so that you have some design
3:03 language ideas for how this needs to
3:05 work. I want this timer for
3:09 uh like oolong tea and green tea and I
3:14 think I just want like
3:16 three or four options
3:18 um and it needs to tell the user what
3:20 temperature water to use. It needs to
3:22 tell the user And actually, I want you
3:24 to create an image of the first screen.
3:26 It's just going to be a single screen
3:28 and create that design using the image
3:31 gen tool.
3:33 Once we have that for an iPhone app,
3:35 then we're going to use the app creator
3:37 skill to scaffold up a new iPhone app
3:41 that is going to implement that using
3:42 Swift UI.
3:44 And let's go.
3:46 Okay, so now we've given the task to
3:50 Codex. We're going to see what it can
3:51 do. Hopefully, it creates the image
3:54 first. I don't know how much it's going
3:56 to think. I've never done this before.
3:58 And we're going to see
4:00 uh what we can get out of it. Oh, there
4:02 we go. Okay, we got our first screen.
4:04 That is amazing. Okay, this is great. Um
4:07 I think the thing to keep in mind is
4:08 like I don't know what roast it is and I
4:10 just want to make sure that we actually
4:11 have some real things that we can
4:14 actually implement.
4:19 And let's do start button.
4:25 Okay. We'll send this over. We can see
4:28 what happens.
4:31 Um
4:34 All right, that's much better. Way
4:36 better.
4:38 Okay, now give me that top asset as a
4:41 resource. Give me the icons as
4:44 resources. Put them on a green
4:47 background so that we can cut them out
4:48 or put them on a magenta background so
4:50 that they don't clash with the colors so
4:51 that you can trim out the background and
4:53 make them transparent.
4:55 Okay, so this looks really cool.
4:58 Um loosely brewing
5:01 and we've got 5 g of tea, 250 ml, three
5:05 to five steeps.
5:06 Okay, use the app creator skill to
5:09 create the Xcode project iPhone app and
5:11 implement it with the most basic design
5:13 that is going to hit upon
5:15 this layout using
5:18 let's go with UI kits
5:20 um
5:21 for the iPhone app. So, use the
5:24 UI kit scaffolding.
5:26 Okay, so we'll just plug that in.
5:39 Okay, and let's just run make one more
5:41 time or hit this run command. That's
5:42 going to start up this application.
5:46 And so, we've got these different
5:48 headers. It's running it again, so it's
5:50 interrupting me.
5:51 Um these each have different timers. It
5:54 looks like you do increments of 30,
5:56 which is cool.
5:58 Hit start.
6:00 And then it starts the counter.
6:01 Something's weird about the image in the
6:02 background. Can you add all the images
6:05 that you generated? I also don't see the
6:07 little icons. Can you go ahead and make
6:09 those icons or at least
6:11 um something. I think I added a hero
6:13 graphic that might work better for the
6:15 top part, but you might need to
6:17 regenerate it so that you can fit the
6:18 design constraints.
6:26 Wow.
6:28 That's all I can say about this result.
6:30 So, let's take a look at it. It took a
6:32 screenshot here. We can see it a little
6:34 bit. I'm going to open up the simulator.
6:35 This is what I saw when I came back to
6:38 my computer after going to the park and
6:41 I was like, "Wow, this thing really made
6:43 it feel a lot more cohesive, made it
6:45 feel a lot more polished." So, this is
6:48 the tea timer. This is the concept. This
6:50 took 20 minutes to build and it is
6:53 functional. So, I can switch between the
6:55 different teas. It even did some image
6:58 magic down here where it took some of
7:01 the images that it had generated and cut
7:03 them out for transparency because the
7:05 current image gen 2 does not support
7:07 transparency. So, I asked it to use
7:09 magenta and that's what it did. And if
7:13 we hit the start button, you can see it
7:14 starts counting down.
7:16 Um and then my next question was, "Well,
7:19 how does this actually work if I want to
7:20 like try this? Like if we just start
7:23 this right now, what's going to happen
7:25 when it ends?" Cuz now I have to wait to
7:27 see what that's going to do. All right,
7:29 so up next we are going to get into
7:31 super easy timer. I want to take you on
7:34 a actual work tour so that you can see
7:36 what I'm going through in the motions.
7:39 I'm going to speed up some of the parts
7:42 um where I'm just talking to the agent
7:43 and it's not as useful and I'll just
7:45 show you when we have the final prompt
7:48 and then kick it off, maybe speed some
7:50 stuff up so that you're not sitting
7:51 there waiting for me to finish. This is
7:54 a sketch note of customer feedback that
7:57 my app has received on the App Store and
8:01 I'm taking that and sort of using that
8:02 to help me prioritize what features to
8:04 work on. So, this was a nice visual way
8:06 to look at that. So, one of the most
8:08 requested features is uh labels and
8:11 colors. There's other apps that have
8:13 this. I don't support it in my app and
8:16 it's just because I wanted a simple
8:17 timer, uh but that's something that I
8:19 kind of want to get into cuz I kind of
8:20 want a blue timer. I want it to stand
8:22 out more. I just want to personalize it
8:24 a little bit more. Um so, those are some
8:26 of the things that I'm going to be
8:27 focusing on in the upcoming update. I
8:30 did a little experiment. I want to show
8:31 you what that looks like. So, I've got
8:33 like the original styling um that I used
8:36 for the application. So, I got a light
8:38 mode and a dark mode. Um this is
8:41 approximate because some of the colors
8:42 are not fully configurable in this, but
8:45 I can switch between these different
8:46 colors. It's super cool. I can make this
8:48 super tiny and now I have some alternate
8:52 colors um to use. It's totally
8:54 customizable and it's super fun. So,
8:57 that was an experiment. This is not
8:59 quite ready to ship because I kind of
9:01 want to unify the design a little bit
9:03 more,
9:04 um but I wanted to explore, "Okay, what
9:06 would this look like? How would I
9:07 interact with it? How would I do custom
9:09 presets?" The big problem that I have in
9:11 the UI is that these timer countdowns,
9:14 like this text input's useful as like a
9:16 tutorial. It's not really useful when
9:19 you want the timer not to be
9:20 distracting. So, and that's one of the
9:23 reasons why we don't show it in the
9:25 small mode is because I wanted it to be
9:26 unobtrusive, but I wanted an easy way to
9:28 quickly edit. And so, having the text
9:31 input's super beneficial. So, I have to
9:33 figure out a way to unify this. I might
9:35 have to layer the
9:37 the label on top of the timer text or
9:40 something in order to
9:43 um get this to to play nice at the small
9:47 sizes or I need to have some kind of
9:48 pop-out control or something like that.
9:51 So, that's the main reason why it is
9:52 this aspect ratio is for just making it
9:55 super easy to update. Now, the challenge
9:58 that this provides is that if you want
10:00 to use this as a stage presentation
10:02 tool,
10:03 this input window is always visible. And
10:05 this is something I never took away
10:06 because
10:08 I don't really use it in this manner.
10:10 And so it didn't really fit my use case,
10:12 so I never fixed it up. But I'm trying
10:14 to address these complaints because I
10:15 think this is
10:17 a really powerful way to use a timer
10:19 like this. So yes, I can reset it, but
10:21 then I want that to disappear. And so
10:24 what I'm going to do is I'm just going
10:25 to auto hide this for the first MVP.
10:28 Let's talk to chat GPT.
10:32 I want to work on a full screen feature
10:35 enhancement, and this is only in full
10:37 screen mode. We've got the two-tone
10:39 colors, and they don't work well for
10:42 presenters who want to just have the
10:44 timer on screen. They don't want to see
10:45 the input window. So my thought is when
10:48 we're in full screen,
10:50 I want to
10:59 All right, so here's my prompt. I still
11:01 don't like plan mode, so I'm just going
11:03 to run this without plan mode and just
11:06 sort of see what we can do. I already
11:07 know the shape of this because I've done
11:09 this once before.
11:17 So what I'm doing now is I'm trying to
11:19 steer it. I'm trying to give it some
11:21 guidance because
11:22 honestly, I don't really trust it to
11:24 make a whole lot of UI changes. Like I
11:26 know generally where I want to do stuff.
11:29 Um
11:31 but I have a feeling that this is going
11:33 to break stuff because every time it
11:35 touches anything like my layout breaks,
11:38 and I'm This is built on XIB files. It's
11:40 really brittle. Um
11:43 and let's see what can happen. Do we
11:45 already finish?
11:49 All right, so this is the low. So it
11:51 worked for 2 minutes and 12 seconds.
11:55 Let's test it out.
11:57 Okay, so I'm in full screen.
12:00 The input hid
12:02 comes back.
12:07 And so the annoying thing for a
12:08 presenter is if they move the mouse not
12:10 on the screen.
12:12 See, this is what I don't want. I am
12:14 wiggling my mouse off screen. I don't
12:16 want the input on. So like that's a bug
12:18 we have to fix.
12:23 And then wiggling off screen here
12:26 is also causing it. So I've got a
12:29 teleprompter up here, and I've got my
12:31 laptop screen over on the right side.
12:35 Okay, so now let's try text input 25.
12:40 Okay, we'll back that out.
12:43 It goes away. If I type
12:45 7 seconds,
12:49 it goes away. The mouse is still
12:51 visible. So let's bring up settings.
12:54 Okay, so here we have a problem.
12:57 Just took a screenshot of it. The
12:59 settings panel is not self-sizing for
13:02 this new thing. Another thing, these
13:04 icons are a little bit dated. Um so I
13:07 think I want to fix those as well. So
13:10 it's like cascade of things once you
13:12 start asking for one thing. Clicking on
13:14 the timer will stop it from flashing.
13:17 And
13:20 uh let's go out of full screen. Did it
13:21 change the layout at all?
13:26 So it is is is a little off center
13:28 because this is pushing this font down,
13:31 which is fine for right now. Um let's
13:34 hit escape to exit full screen.
13:38 And let's test the app and make sure it
13:40 hasn't broken anything.
13:48 Sometimes when I ask it to do things,
13:51 stuff like this
13:54 um will break things.
14:11 So it's looking really good. It's not
14:13 causing any issues so far.
14:16 I can reset the timer. I can
14:19 set it to 27 minutes, and it can start
14:21 counting down. That's looking really
14:23 good. Um if I stop moving the mouse,
14:26 it's not disappearing. Now this is the
14:28 small mode. This is actually a different
14:29 user interface file. This is the large
14:32 one that is used in full screen. So if I
14:34 stop moving the mouse, I'm expecting it
14:35 not to disappear.
14:37 And then if we go over here, auto hide
14:39 mouse in full screen is disabled.
14:42 So let's check that, and
14:45 now let's see if I don't do anything.
14:48 Okay, so it's not hiding now.
14:50 Let's go to full screen.
14:52 Counting down, mouse goes away. Great.
14:55 Now the mouse is off screen.
14:59 Mouse is still visible on my
15:00 teleprompter.
15:02 And if I go to my other monitor,
15:05 mouse is still visible. I bring the
15:06 mouse back.
15:08 Goes away. That's great. Um so it looks
15:11 like we've got two issues to fix, and
15:14 this might be shippable.
15:18 Okay, so we're going to prompt
15:19 two issues.
15:21 Okay,
15:21 first issue,
15:23 um I'm going to give you a screenshot.
15:25 So I took a screenshot.
15:28 This is our screenshot. We'll pop that
15:30 in.
15:31 The
15:32 um
15:33 the settings panel, I think you're
15:35 programmatically adding something, but
15:37 we have this defined in a
15:40 UI file. Because you're
15:43 um programmatically adding, the size is
15:46 not right. Can you either add it to the
15:49 UI file, or you need to take into
15:51 account the size that you've just added?
15:59 All right, so now what I've done is I've
16:01 tested it. I've walked through a couple
16:02 different scenarios trying to see like
16:05 can I break it? And this is the type of
16:06 thing that you have to do when you're
16:07 doing app development and software is
16:10 you think, okay, I've given it
16:12 instructions that it's got to hide the
16:13 mouse when it's on the same screen. But
16:16 what if I'm on a different space? macOS
16:18 has the concept of
16:20 spaces. Up top, we can see the timer is
16:23 going.
16:24 And it's full screen.
16:26 Some crazy amount.
16:29 Just reset that. Go back.
16:32 I'm expecting my mouse not to hide on
16:34 these other modes. And there's just
16:36 There's a lot of surfaces to test uh
16:39 when we got full screen apps like this
16:41 uh to make sure that it's right. So
16:43 let's see what's going on. Worked for 36
16:46 seconds. Fixed both issues.
16:50 Okay, and let's run it and check it out.
17:02 Auto hides. Bring up the settings.
17:07 It didn't work.
17:09 Um so it added space to the top, and
17:12 that pushed everything down. So it did
17:14 not fix the padding. I don't
17:17 um
17:20 I don't know what it did.
17:22 Okay, and then the issue we had is I'm
17:24 moving the mouse on another screen, so
17:26 I'm moving it here. Now I'm moving it on
17:28 my teleprompter, and it still
17:30 disappears. I'm clicking
17:32 off screen coming back.
17:34 Now what if I'm in another app?
17:38 So I'm in a notepad typing. It doesn't
17:41 come back. So that's a good test to do.
17:44 Come here typing.
17:46 Comes back.
17:48 Press enter. That's invalid input. Got
17:50 to do nine.
17:52 Get 9-minute timer.
17:55 The UI layout change you did was not
17:57 good. You pushed everything down further
18:00 and did not add padding to the bottom to
18:02 keep the spacing consistent from before
18:05 your edit.
18:08 Okay, so we've got two new fixes.
18:12 And we're going to see what happens
18:13 here. So what had happened is it's like,
18:16 oh yeah, I can fix the UI, and I really
18:18 don't trust it to to fix UI. It's
18:21 it's just not very good at understanding
18:23 UI. I don't know why.
18:25 Okay, so that is the timer update. We
18:29 were able to get full screen working a
18:31 lot better.
18:32 Um I think we could probably re-center
18:34 this. Uh I'm not going to do that right
18:36 now. I just want to get a commit before
18:39 we add too much more on top of this so
18:42 that I can test this out, verify that
18:43 it's working.
18:45 And if I can get it to center just on
18:47 full screen, I'll do that. I'm just a
18:49 little concerned that it's going to
18:50 break something else.
18:52 Um but this was pretty quick. This was
18:53 pretty easy.
18:55 Uh it worked way better than my first
18:57 time. So I think it does help sometimes
18:59 to do like a prototype. If you're ever
19:02 not sure of like how to do something,
19:04 just run through the motions and see if
19:06 you can get something working. And then
19:08 from there, you can
19:10 um
19:11 use that knowledge to direct where you
19:13 want to go. I've done the same thing
19:15 with the color stuff. So I showed you
19:17 the color prototype. It's not quite
19:19 where I want to go because I kind of
19:20 want to move away from this two-tone
19:22 approach.
19:23 The two-tone though is useful for seeing
19:26 the um
19:29 the input. And maybe I needed an
19:31 approach like what we're doing on full
19:32 screen where it just auto hides and only
19:35 appears when you mouse over the UI so
19:38 that we can still have the two-tone, but
19:41 it's just not always in your face unless
19:42 you're interacting with the timer.
19:44 That's something to think about.
19:47 That's the timer app. Um if you want to
19:49 check it out, I've got a link down below
19:50 for super easy timer. If you want to get
19:52 started with the app creator skill that
19:54 I'm using in Code X
19:57 to do all of this app integration, it
19:59 powers everything
20:01 so that I don't need to open up Xcode
20:02 all the time to build and run. I use
20:05 make files. That's what the the skill is
20:07 all about. So, if you want to check that
20:09 out, I've got a link down below that you
20:12 can download app creator. And then if
20:14 you're interested in any of the App
20:15 Store research stuff, I do have another
20:17 link for that. And I hope this was
20:19 useful. If you learn anything, hit the
20:21 like button and I will see you in the
20:23 next video. Thanks so much for watching.


---

## Source: how-i-use-openai-codex-real-workflow.txt

- Original path: `addintional info to add\how-i-use-openai-codex-real-workflow.txt`
- Size: `35624` bytes
- SHA256: `9B119334C9D1AED87227FAAC37BFD7BA8D391777969E18BFBBD4DB67852FF113`

---

How I Use OpenAI Codex (Real Workflow)

0:00 This is a complete guide to using OpenAI
0:01 Codex. By the end of the video, you'll
0:03 know how to use Codex like a
0:04 professional developer, putting you
0:06 ahead of most other people using this
0:08 tool. [music] Codex is a phenomenal tool
0:10 for software engineering. The desktop
0:12 app, in particular, allows you to work
0:14 on multiple different projects and
0:15 [music] tasks at the same time. We're
0:17 going to be covering setup and
0:18 permissions, how to use the desktop app
0:20 and the CLI,
0:20 >> [music]
0:21 >> how to use skills and plugins, and I'll
0:22 also show you a live demo of my own
0:24 workflow when using Codex on a real
0:26 project. All of the resources in the
0:28 video are going to be free in the
0:29 [music] description below. So, let's get
0:30 started. So, the first thing we're going
0:32 to do is run this command. Everything
0:33 looks like it's correctly installed
0:34 [music] now. So, what we can do is go
0:36 ahead and type Codex, which will start
0:38 up the CLI.
0:41 So, you can see here we've got a bunch
0:42 of information about the model that
0:44 we're using. So, GPT 5.5 just launched
0:47 at the time of recording, and so we can
0:49 use that model. We're on the high
0:51 reasoning setting, and we can change the
0:53 model. We'll talk about all of this in a
0:54 second. So, the first thing to do is
0:57 type the {slash} key. So, if you type
0:59 {slash} you bring up a bunch of
1:01 different commands, and there's a couple
1:03 that are worth knowing. We're going to
1:04 spend a little bit of time in the CLI,
1:06 and then we're going to jump over to the
1:07 desktop app. So, the first thing you can
1:09 change is the model. I always recommend
1:11 just using the best model. I don't tend
1:13 to change the model very often. You can
1:16 use the mini models if you want. These
1:18 are smaller and in theory more
1:19 cost-efficient, but I'm always just
1:21 using the latest model, and then you can
1:23 also set the reasoning level as well.
1:25 So, with reasoning, the higher the
1:27 reasoning level, the more the model is
1:28 going to think, and the better the
1:30 result, in theory. Not always true, but
1:32 I normally stay between medium and high
1:34 reasoning. I'm going to keep it on high.
1:37 Extra high if you're doing something
1:38 particularly complex.
1:40 There are a few other useful commands to
1:42 know in the CLI. If you type status
1:43 line,
1:45 you can customize various things about
1:46 the CLI. So, for example, if you want to
1:49 see the Git branch, you can actually
1:52 toggle this on or off. So, if you look
1:54 down the bottom of the the window here,
1:56 you can see this toggling on or off. You
1:58 can set a bunch of other things like
1:59 your context limits and things like that
2:02 if you want to show those on the CLI.
2:03 So, that's useful to know. The other
2:05 command you can run is the fast command.
2:08 This will toggle the fast mode on or
2:10 off. Essentially, this will have faster
2:13 inference, so you'll get responses more
2:15 quickly, but it will use more of your
2:17 usage. So, I believe it's 1.5 times
2:19 faster, but it will use twice as many
2:21 tokens, essentially. So, your limits
2:23 will get burned quicker.
2:25 If you type in {slash} status, you can
2:27 see some information about the limits
2:28 you have available. You can see here
2:30 I've only got 53% of my weekly limit
2:33 left. You can see when the limits reset.
2:35 You can also see that I'm using the
2:36 ChatGPT Plus plan. There are a few other
2:39 things worth knowing. For example, the
2:41 skills command allows you to toggle
2:44 skills on or off. So, firstly, you can
2:46 just list out the skills you have
2:47 available.
2:48 You'll notice this dollar symbol, which
2:50 is really useful to know. If you type
2:52 dollar, then you can bring up any skill.
2:54 It's like an alias for your skills. So,
2:56 for example, I have a planning skill,
2:59 and I can just type dollar plan to bring
3:00 up that skill. And you can also
3:03 reference it when you're talking to the
3:04 model. You can say, "Use the dollar plan
3:07 skill
3:08 to do X." So, you can also reference
3:11 that way.
3:12 But you can toggle skills on or off. So,
3:14 if you take a look here, if you go to
3:16 enable or disable skills, there are a
3:18 bunch of things configured. I like to
3:20 keep everything quite minimal, so I
3:21 often disable things that I'm not using.
3:24 I don't often use these skills, so I'll
3:26 just turn them off. A really important
3:28 thing to know about Codex is there are
3:30 different sessions or conversations. So,
3:32 right now we're talking to the model,
3:34 but you might find you've had previous
3:36 conversations. If you think about
3:38 ChatGPT, you often have multiple
3:39 conversations ongoing at the same time.
3:42 And so, the way you start a new
3:43 conversation is to type {slash} new,
3:45 and this will start a brand new
3:47 conversation. You can also go to the
3:50 following command,
3:52 resume, and that will bring up all of
3:54 your other conversations. So, you can
3:56 switch back and forth between different
3:58 conversations. So, this is just a really
4:00 important thing to know, cuz often you
4:02 will have multiple conversations ongoing
4:03 at the same time.
4:05 You can use the {slash} compact command
4:07 to compress the context in the current
4:09 window.
4:10 There are a bunch of other commands. I
4:11 won't go through all of them in detail,
4:13 but do check out these commands. They
4:15 are super useful. Another thing worth
4:17 knowing is you can actually run Codex on
4:19 the CLI in non-interactive mode. This
4:22 would be useful if you just want to
4:24 one-shot something, or if you want to
4:25 chain things together. You can actually
4:27 just run Codex as any other bash tool,
4:30 essentially.
4:32 So, currently, my favorite way to use
4:34 Codex is through the desktop app.
4:36 I think this is a really powerful way to
4:38 work with AI coding models and coding
4:40 agents. This, to me, is more powerful
4:43 than the CLI. I'll show you why in a
4:44 second. So, you can go ahead and
4:46 download this. I'm running on Mac OS X,
4:49 so I can just download this as an
4:50 application. And then, once you have it
4:52 installed,
4:53 it will look something like this. You
4:55 can see that we have the Codex
4:57 application open. On the left, we have a
5:00 projects panel. The idea here is that
5:02 you can open any project. So, if you're
5:05 working on multiple different things at
5:06 the same time, you can open a project. A
5:09 project is basically just a folder
5:11 somewhere. So, for example, I'm working
5:13 on an application over here. I'm working
5:16 on a client project here. I've got some
5:19 personal projects down here, and it's
5:21 very easy to jump between all of them.
5:24 And honestly, this is why I love the
5:26 Codex app.
5:27 Although I'm very confident in the CLI
5:29 and the terminal,
5:31 I I just prefer this experience. If
5:32 you're working on multiple things,
5:34 jumping between terminal tabs and
5:36 different split windows, it's fine, but
5:38 it can get a bit messy and a bit
5:39 confusing. So, I really like the
5:41 simplicity of of using this. And so, you
5:43 can also have multiple chats within side
5:45 a project. So, a chat is just how you
5:48 basically talk to the model. It's like a
5:50 new session.
5:52 Over here, you can see that you can
5:53 actually render websites or visual
5:56 images, etc., inside the application,
5:58 which is really nice. So, this is
6:00 infographic generation
6:02 SaaS tool that I was building for my own
6:04 use cases for content. You can see here
6:06 you can actually render stuff inside the
6:09 uh the application. So, this is looking
6:11 at the browser, but I can see it from
6:13 within Codex here.
6:15 And then, I can start a new conversation
6:17 if I want to work on a new feature. Then
6:18 I can go ahead and start talking to the
6:20 project. There are some useful shortcuts
6:22 that are worth knowing. So, if you type
6:24 command and B, you can toggle this
6:25 sidebar on and off if you want to focus
6:27 a bit more. And you can also type
6:29 command option and B to bring out this
6:31 right-hand side panel as well.
6:34 So, there are lots of things going on in
6:36 the UI, and we'll try and talk through
6:37 some of them. So, the first one is the
6:39 model that we're using. You can see here
6:41 down here we're using the GPT 5.5 model,
6:44 which is, at the time of recording, the
6:46 newest model available. It was just
6:48 released yesterday.
6:50 And there's also the reasoning level,
6:52 which you can configure here as well.
6:54 And if you remember the fast mode in the
6:57 CLI, you can also toggle that as well.
6:59 So, this is about 1.5 times faster, but
7:02 with increased usage of your limit. So,
7:05 another thing to notice is up here we
7:06 can also toggle the terminal if you want
7:08 to bring out a terminal. So, this really
7:10 does feel like it's a full IDE. Although
7:12 it's a good way of using the agent, you
7:15 have just so much available within side
7:17 this application. It's really well
7:18 designed and really well thought out.
7:20 So, if we go over here, you can see that
7:21 I have a bunch of things that are
7:23 ongoing. So, if you look at the top
7:25 here, you can see all of the changes
7:26 that are being made for this
7:27 conversation.
7:29 And this is really, really useful
7:31 because you can actually go and preview
7:33 the changes that the agents are making,
7:35 unlike if you were in the CLI, for
7:37 example. It's very difficult to do this.
7:39 But you can actually go ahead and you
7:41 can click on some of these things, and
7:42 you can make a comment. This is kind of
7:44 like giving a code review back to the
7:45 agent. You can say, "Remove this
7:48 section."
7:49 You can comment on that. You can go down
7:51 here, and you can say uh like rename
7:53 this.
7:55 Rename this thing.
7:57 So, you can add comments as you go
7:58 through the code changes, which is
8:00 really nice. And then, you'll notice
8:01 they get added here to the context
8:03 window. So, then you can basically say
8:05 something like fix these two
8:09 uh two comments. So, it's a really nice
8:12 way of talking to the model, giving it
8:14 feedback as you go through making code
8:16 changes. You can also toggle up here if
8:18 you want to expand it out, and you kind
8:20 of want to
8:21 you know, just just go through it in
8:22 more depth. You can also toggle it up
8:24 here. You can also edit things or open
8:27 them in a code editor as well. So,
8:29 everything here is really well designed.
8:31 It feels like it was designed for real
8:33 coding work, and it's just a really
8:35 lovely interface. I really like it. So,
8:37 there are two different modes to know
8:38 about when we're working with Codex. You
8:41 can use local, where we're working
8:44 within side your current folder or your
8:46 current file system. There's also a work
8:49 tree mode, where you can create a
8:50 separate folder.
8:52 So, Git work trees allow you to
8:54 basically work on multiple things at the
8:56 same time without AI agents conflicting
8:58 with each other. Essentially, what
8:59 happens is you create a different
9:01 checkout of the code in a different
9:03 folder, and that allows AI agents to
9:05 work in their own folders without
9:07 overriding each other or getting in the
9:09 way as they're working on different
9:11 things at the same time. You can change
9:13 all of these settings down here. You can
9:14 see we're working locally. There's also
9:17 an option to run Codex on the web. This
9:19 isn't something I do myself, but you can
9:21 remote execute code and jobs, etc., if
9:24 you want to run Codex on the web. You
9:26 can also see down here we can hand off
9:28 to a work tree if we want. So, we can go
9:30 ahead and create a new Git work tree.
9:33 And when you go and check this out, you
9:35 can see here there's this little symbol
9:37 here that indicates we're now in a Git
9:38 work tree. If you were to go and look at
9:40 the file system, you would see that
9:42 we're actually in a separate folder now.
9:44 So, that any anything we do in this
9:46 folder won't affect anything going on in
9:48 this chat window. So, that's kind of
9:50 really nice. A few of the settings worth
9:52 knowing about, if you click over here,
9:54 you can go to the settings menu. There's
9:55 tons of things you can configure here.
9:57 I'm not going to go through all of them.
9:59 As usual, you can configure things like
10:00 the appearance. If you want to change
10:02 the theme, etc. Very easy to do.
10:05 I'm using the linear theme.
10:08 So, let's quickly talk about permissions
10:10 cuz I think it's one of the more
10:12 confusing concepts within Code X. There
10:15 are different options and the three
10:16 settings are the sandbox mode. This is
10:20 where Code X can run and execute. So,
10:22 what it can read and write.
10:24 So, this is basically controlling what
10:27 Code X can access on your file system.
10:30 There's also network access, which is
10:33 which commands can execute, you know,
10:35 reach the internet, etc.
10:37 And the approvals policy is about
10:39 notifications. So, if you've used a tool
10:41 like Claude Code, you get these pop-up
10:43 dialogues
10:44 asking you for permission.
10:47 And there are various different options
10:48 with the approval policy you can set.
10:50 So,
10:51 if you want to use the sandbox and
10:54 you're just doing normal coding,
10:56 typically you'll want the workspace
10:57 right option. This allows Code X to read
11:00 any file on your file system, but it
11:03 only allows Code X to write to the
11:05 current folder that you're in or the
11:07 current project folder.
11:08 If Code X needs to write something
11:10 outside of that folder,
11:12 it would typically need to ask for
11:14 permission to do that. So, I find this a
11:15 good default for most things. So,
11:17 workspace right and then approval on
11:19 request. So, this means Code X can write
11:22 anything inside your current folder
11:24 and it can also ask you for permission
11:27 if it wants to do something outside of
11:29 the folder. If you want to match the
11:31 skip permissions, which I do use in
11:33 Claude Code, obviously many of us find
11:35 these permission prompts quite annoying.
11:37 You can match it pretty easy by using
11:40 sandbox mode danger full access, which
11:42 allows Code X to basically do anything
11:44 on your file system, and you can set the
11:46 approval policy to never if you want to.
11:48 This will mean you don't ever get
11:49 prompted for approval. These two things
11:52 can be configured here. You can change
11:54 the approval policy. So, if you don't
11:56 want to get prompted for approval, you
11:58 can set that to never. And then you can
12:00 change the sandbox permissions. So, the
12:03 default you're going to want is probably
12:05 workspace right, which again Code X can
12:08 read any file anywhere, but it can only
12:10 write within your current folder. If you
12:12 want Code X to write outside of the
12:14 current folder, you'd need to set it to
12:15 full access. Once you've done that, you
12:17 can also see that you have the network
12:18 access permissions. I'm just going to
12:20 enable that because
12:21 I'm I'm totally fine with that. All of
12:23 these settings are saved in a
12:25 config.toml file. I'll just quickly show
12:27 you what that looks like.
12:30 So, if we were to open up the .codex
12:32 folder,
12:34 you can see the config.toml file.
12:37 Here, you can see where all of the
12:38 settings are saved. So, these settings
12:40 are used across the CLI and the desktop
12:43 app as far as I'm aware. So, if you do
12:45 want to change something and you like to
12:46 change configuration, you can actually
12:48 go and set things here. So, you can see
12:49 here we've got the GPT-5.5 model,
12:52 high reasoning, and then this is the
12:54 approval policy we were just talking
12:55 about. So, I've got
12:57 the approvals to never prompt me for
12:58 approval, and the sandbox mode as we
13:01 discussed is workspace right, so it can
13:03 write within side the project folder.
13:06 Okay, so what I'm going to do now is
13:08 take you through a demo of how I
13:09 typically use Code X day-to-day, and
13:11 this will allow us to talk about some of
13:13 the different concepts that you can use
13:15 with Code X that might be relevant to
13:17 your daily work.
13:18 So, what we're going to do, we're going
13:19 to switch over into VS Code, and I'm
13:22 going to talk about the agents.md file.
13:25 So, within VS Code, this is a project
13:28 I'm currently working on, and I can look
13:30 at the agents.md file over here.
13:32 This is like a Claude.md if you're
13:34 familiar with that. So, when the agent
13:36 starts up when Code X starts up within
13:38 your project, it's going to read this
13:40 file and it's going to give the agent
13:41 context about whatever you're doing.
13:44 My general guidance here is to keep it
13:46 really minimal. I always like to keep
13:47 these files as minimal as possible.
13:50 Anytime the agent can just dynamically
13:52 infer something about the project
13:53 structure, etc. I think it's not worth
13:55 putting it into the agents.md file.
13:58 A good example of something you might
13:59 want to put in this file
14:01 is for example, I'm using a project
14:03 management system called Linear, which
14:05 I'm connecting into Code X, and
14:08 in order for Code X to use that tool, it
14:10 needs to know which project within that
14:13 application I'm working on. So, what
14:15 I've done here is I've given Code X the
14:17 guidance that whenever it needs to pull
14:19 a Linear ticket or a workspace ticket,
14:22 it needs to use this particular project.
14:24 And then I've also described a workflow,
14:26 so we pick up a ticket, we move it to in
14:28 progress, and then we move it to done
14:29 when we're finished. And then when we do
14:31 any get commit messages, we should
14:32 include the ticket ID in the commit
14:34 message. So, this is an example of a
14:36 typical agents.md file you might use on
14:38 your project. So, describe what the
14:39 project is and what it's for,
14:41 any references to any documents that the
14:43 agent should be aware of. For example,
14:45 here I've got a product specification,
14:47 which describes what we're building.
14:49 And then also if you have commands that
14:51 the agent should run. Here, I've just
14:53 got a single file with all of the
14:55 commands in it. And so, what we're doing
14:57 is just telling the agent, if you need
14:58 to run any commands, like if you need to
15:00 run testing, just refer to this single
15:03 command and it will tell you all of the
15:04 options available to you. So, another
15:07 really useful thing to know about Code X
15:09 is it has a plugins feature. So, if you
15:12 click on the plugins section, you can
15:13 see here there's a whole bunch of things
15:15 you can integrate with.
15:17 I'm using this system here called
15:19 Linear, which is a ticket management
15:21 system, project management system. And
15:24 if you click into here, you'll see that
15:25 the plugin is actually made up of two
15:27 different things. The first one is an
15:28 MCP server.
15:30 This is essentially what allows me to
15:32 talk to Linear, and it allows the agent
15:34 to communicate to create tickets and
15:36 read tickets in the system.
15:38 And then we also have a skill installed
15:40 as well, which teaches the agent how to
15:42 essentially interact with that MCP
15:44 server and how to interact with Linear.
15:47 So, this is the project management
15:48 system I'm using, and as you can see,
15:50 I'm working through a project right now,
15:52 and I have a bunch of tickets to work
15:53 on.
15:54 You can see here I have lots of stuff
15:56 that I've already completed, but these
15:58 are the active tickets I'm working on
16:00 right now. So, we can pick up any of
16:01 these tickets, and you can see there's a
16:03 description of what we should do.
16:05 So, what we're going to do, we're
16:06 actually going to work through one of
16:07 these tickets now just to kind of show
16:08 the workflow. So, this ticket is adding
16:11 a feature to an existing application.
16:13 The goal here is to add a single
16:16 data ingest command that will pull in
16:19 lots of job data. So, I'm building a
16:21 recruitment application where we need to
16:23 scrape lots of job data essentially from
16:25 the internet. And then we store that
16:27 into a database, but currently the
16:29 commands for doing that are a bit messy.
16:32 And what we want is a single command to
16:34 pull data and ingest data. So, we're
16:36 going to have a single command called
16:37 just ingest.
16:39 This will run all of the web scrapers,
16:41 pull in all of the job data, and then
16:42 save it into a database. So, this is
16:44 what we're going to be building now.
16:46 So, this ticket is GRA-144.
16:50 So, you can see here now the agent has
16:51 picked up that ticket.
16:53 And what it's doing, it's going through
16:54 my usual development workflow. So, it's
16:56 pulled down that ticket, it's read the
16:58 instructions. So, if I go back into my
17:00 project management system,
17:02 what you should see is that you can
17:04 actually
17:05 see that this ticket should now be in
17:08 progress. So, there you go. You can see
17:09 the agent has now updated the ticket as
17:11 it's working through.
17:12 The reason I like to use systems like
17:14 this, if you're working on many
17:15 different tasks at once, it can get
17:17 very, very confusing without some kind
17:18 of system to track the status of the
17:21 things you're doing. So, I tend to use
17:23 these kind of systems as a way of
17:24 tracking what's going on. So, the agent
17:26 is now working through this ticket and
17:28 updating everything. So, you can see
17:30 here now Code X has made a plan, so it's
17:31 working through this task. It's broken
17:33 this down into a number of discrete
17:35 steps. So, the first thing is to read
17:37 the ticket. So, as we work through this
17:38 ticket, as we said before, you can
17:40 actually go ahead and if you click on
17:41 this panel here, you can see the code
17:43 changes that are being made. So, you can
17:45 see here the new command runner file
17:48 that we've created, and then you can see
17:50 here the job ingest command as well. So,
17:53 we've got a CLI tool to do the
17:55 ingest log text. So, you can go through
17:57 and review the code changes as Code X is
17:59 working on the task. This is just really
18:02 handy. It means you don't have to switch
18:03 out the application. You can give
18:05 feedback on anything you want. So, for
18:07 example,
18:08 if there was anything I wanted to change
18:09 here,
18:11 like maybe I wanted to change or remove
18:13 this command,
18:15 I could I could comment on here, uh
18:17 which is just super useful. All right,
18:18 so it looks like we're done. So, we've
18:20 committed the changes, and now we should
18:21 be able to run this. So, what we're
18:23 probably going to do is actually run
18:24 this command just to sanity check.
18:27 Before we do, it's worth talking quickly
18:29 about skills in Code X.
18:32 So, agent skills are an open standard.
18:36 And they're a way of giving an agent
18:38 more context about how to do a
18:40 particular operation. I think of them as
18:41 standard operating procedures. They're
18:43 just markdown files which describe how
18:45 to do a particular task.
18:47 So, I have a bunch of skills for things
18:49 like code review. So, we could go ahead
18:51 and run the code review skill
18:54 if we wanted to. So, use the
18:56 uh use the review skill
18:59 to review our changes, look for anything
19:03 to improve.
19:05 So, we can kick off now a skill. You can
19:07 see here it's actually linked to the
19:09 skill, which is quite nice. And so, now
19:11 we're going to review our code changes,
19:13 see if there's anything we need to
19:14 improve before we move on to the next
19:16 step. If you do want to see all of your
19:18 skills, just like in the CLI, you can
19:20 type the slash command, and then you can
19:22 also run various commands. So, if you
19:24 type slash, you can see a bunch of
19:26 options that you can run. So, you can go
19:28 through status. You can see here the
19:30 skills that we have available.
19:32 So, you can run any of these commands
19:33 directly from the chat window here as
19:36 well. All right, so you can see here we
19:37 have one thing to fix. So, this is an
19:40 error that the agent thinks we should
19:41 fix.
19:43 One thing I like about Code X is I feel
19:45 like it does a much better job at
19:47 getting things correct. One of my
19:49 frustrations with Claude is that
19:50 frequently it will finish a task and
19:53 you'll find so many different bugs and
19:55 errors in the code. It's been an ongoing
19:57 frustration for me, so I find that the
19:59 Codex models are pretty accurate when it
20:01 comes to doing
20:03 relatively complex tasks. I really do
20:05 love these models. I think they're
20:06 great. I'm not going to think about this
20:07 too much. I'm just going to go ahead and
20:09 say
20:10 uh fix this issue. Okay, so now Codex
20:12 has fixed this issue. So the next thing
20:14 I want to do is actually just go ahead
20:15 and run
20:16 the command. So I'm in the root folder.
20:19 So in theory I should be able to type
20:21 just ingest.
20:23 Ingest. Hopefully I've typed this right.
20:25 And then in theory I should be able to
20:27 run the command. Okay, so database URL
20:29 is required for ingest. Please set
20:31 database URL. Okay, I need to go and fix
20:33 that issue. Okay, so we do have Postgres
20:36 installed and so I need to go and set up
20:38 the database cuz I haven't done this. So
20:39 we're going to go and create the
20:40 database.
20:41 I'm using PostgreSQL as our database. I
20:43 have it installed locally. Then we're
20:45 going to export this uh environment
20:48 variable
20:49 so that it knows which database to use
20:51 and then we're going to test this out.
20:52 So let's go ahead and run this. Okay, so
20:54 you can see here we currently have no
20:55 jobs scraped, no company leads.
20:58 So in theory when we run the ingest
21:00 command we should be able to see the
21:01 data coming in. So I'm going to go ahead
21:03 and type just ingest
21:06 to run the job and then in theory this
21:08 is going to run the scraper to pull in
21:10 all of the job data. So just to quickly
21:12 show you what we're doing here. We're
21:13 running this script which is a command
21:15 line script and it has a bunch of
21:17 defaults. So this is actually the
21:18 command we're running
21:20 and it's basically executing a job
21:22 search across different job boards in
21:24 different areas. We have a bunch of
21:25 default arguments, but this is
21:27 essentially the job that we're actually
21:28 running here. Just while we're waiting
21:30 for that to complete, one thing I
21:31 noticed about the scraper, it doesn't
21:32 seem to be writing to the database as it
21:34 goes along. So even though the agent's
21:35 written code that is technically correct
21:38 there are things about the behavior I
21:39 think we might want to adjust. So I'm
21:41 just going to check on that. So
21:42 essentially what I'm asking here is
21:43 whether we should write to the database
21:45 as we go along. I have a feeling it's
21:47 writing to the database only at the end
21:49 once it's done the final ingest. And so
21:52 if this is a long-running job, it could
21:54 fail for multiple different reasons. So
21:56 we don't want to lose all of the job
21:57 data if it does fail halfway through.
21:59 We probably want to be writing things
22:01 and saving them as we go along.
22:04 So it looks like yes, we should do that.
22:06 Uh so we lose all progress if the
22:08 scraping fails before the final right.
22:10 So let's go ahead and make that change.
22:12 So just while we're waiting for that to
22:13 complete, you can see here if I go back
22:15 to my database table, you can see here
22:17 the scraper was able to successfully
22:18 pull in
22:19 all of the data. So these are the jobs
22:21 that are found within the last 24 hours.
22:24 So the scraper's done its work, pulled
22:26 in all of the data and written it to our
22:27 database. So everything seems to be
22:29 working correctly. So another nice
22:30 feature in Codex is the automations
22:33 feature. So if you click here, you can
22:35 create automations and the idea here is
22:37 you can run basically scheduled jobs.
22:39 And so there are a couple of really good
22:41 examples. If you click over here, you
22:42 can see a bunch of different ideas for
22:44 how you might use this feature. An
22:46 example that I have here in the current
22:48 project I'm working on is a dependency
22:50 sweep. So it's quite common when you're
22:52 working on a software project to find
22:54 that certain dependencies are out of
22:55 date or maybe they have insecure
22:58 code in them. And so this is a job that
23:00 runs
23:01 often and it will basically scan the
23:04 code base looking for updated
23:05 dependencies. I can go and run this now,
23:07 but I can also schedule it to run every
23:09 day, uh every every 6 hours and things
23:12 like that. So this is a useful feature.
23:14 I don't use it too much, but it is very
23:16 nice to have for repeated work within
23:18 your project. What you'll see is as you
23:20 kick off that automation, you can see a
23:23 couple of things. So firstly that we've
23:25 created a new chat. So you can see that
23:27 this is running. And then secondly you
23:29 can see that this is actually running in
23:30 a separate work tree. So if you go over
23:32 here, you can see that this automation
23:34 can either run locally, so within your
23:36 current folder, or in an isolated work
23:38 tree. Isolation is normally a better
23:40 option for these kind of tasks, but you
23:42 can obviously go and configure that if
23:44 you want to. So you can see here now the
23:45 automation is finished and it's
23:47 basically told us there aren't any
23:48 dependencies to update. You can kind of
23:50 see how powerful this kind of thing
23:52 would be. You could have these repeated
23:54 jobs. If there's any scheduled task or
23:56 any repeated work that you do within
23:58 inside your project, if there's
23:59 something you find yourself doing
24:00 repeatedly, it makes sense to create an
24:02 automation for it. Even if you're not
24:04 running this on a schedule, the fact
24:06 that you can just jump over here and
24:07 then fire off this automation is super
24:10 super useful. You can see here it's done
24:13 a good job. It's scanned all of our
24:14 dependencies and it's referenced the
24:16 latest versions across various tools and
24:18 dependencies. So this is super super
24:20 useful. So just before we close out this
24:22 task, let's go ahead and open a pull
24:24 request. I'm just checking what we need
24:26 to do. So I've
24:28 I've run the smoke test. Everything
24:29 seems to work fine. Could you um make a
24:33 commit and open a new branch for me to
24:35 review and then could you push that
24:37 branch up to GitHub for me to review the
24:39 code. So typically when I'm working with
24:41 Git or GitHub, I tend to use skills. I
24:44 really like using the agents to manage
24:45 this entire workflow. There's also a
24:47 bunch of stuff up here if you want to
24:49 manage it manually, but I generally
24:51 prefer just to use the agents to manage
24:53 my Git workflow. So I have a skill
24:55 called commit which will just kind of
24:57 manage how to write good commit
24:59 messages, etc. And I'll I'll link to all
25:03 of these skills if you're interested in
25:04 the description. But you can see here
25:06 now the agent has done all the work for
25:08 us and we've got a pull request that we
25:10 can go and review. So this is the ticket
25:12 we were just working on. So the agent
25:14 has now created a link to open a pull
25:15 request. You can see all of the changes
25:17 here. So this is the ingest command we
25:19 just built and you can see here all of
25:21 the code
25:22 that is here and then we can just go
25:24 ahead and create a pull request. So if
25:26 you want to use Codex, you are going to
25:27 need some kind of subscription plan.
25:29 There are a couple of options here. If
25:31 you're already using ChatGPT, chances
25:33 are you already have some kind of
25:34 subscription,
25:35 but I I'm using the plus plan which is
25:38 $20 a month. You get a lot of leverage.
25:40 You can get a lot done with just this
25:42 one plan.
25:43 I find the limits are very generous. You
25:44 get access to all of the latest models
25:47 and this is probably good enough to get
25:49 started for most people. If you do want
25:51 to go deeper on any of these topics, I
25:52 do run an AI engineering community.
25:55 Inside the community you'll find a bunch
25:56 of courses on agentic coding covering
25:58 some of the advanced concepts that we
26:01 touched upon here such as spec-driven
26:02 development. There's also courses on
26:04 system design and building AI systems.
26:07 So if you do want to build and sell AI
26:09 systems and software systems, this is a
26:11 great community. We have weekly meetups
26:13 and we also have live sessions and
26:15 workshops that you can check out. Just
26:17 to let you know, everything we're
26:18 talking about here is going to be in the
26:19 documentation. You can get access to
26:22 sample files, etc. So for the agents.md
26:26 for example, I put a reference file here
26:28 that I'm using myself just to kind of if
26:30 you want a reference. And then the same
26:33 thing for the config file as well. You
26:34 can kind of take a look at this if you
26:36 want to check it out. So I really love
26:37 Codex. I think it's a really great tool.
26:39 I find myself using it day-to-day more
26:41 and more and in particular I find myself
26:43 using the desktop app. I think it's
26:45 really well designed and well suited for
26:47 working on multiple different projects
26:48 at once and also running multiple tasks
26:51 in parallel. It's very easy to do
26:54 multitasking within the Codex app in a
26:56 way that I struggle to do using the CLI.
26:59 Even though I'm very confident in the
27:00 terminal and very confident with CLIs, I
27:02 just find the desktop app a better
27:04 experience overall.
27:06 So if you enjoyed the video, please
27:07 remember to like and subscribe. It makes
27:09 a huge difference. All of the resources
27:11 as I've said will be linked in the
27:12 description below for free so you can
27:13 get access to those. If you do have any
27:15 comments, if I've missed anything, or if
27:17 you have any recommendations, feel free
27:18 to put them in the comments below. I'd
27:20 love to hear about your opinions between
27:22 Claude Code and Codex and some of the
27:23 latest coding agents.
27:25 Thank you for watching and I'll see you
27:27 in the next video.


---

## Source: improve-your-codex-ui-desgin-with-this-simple-method.txt

- Original path: `addintional info to add\improve-your-codex-ui-desgin-with-this-simple-method.txt`
- Size: `3986` bytes
- SHA256: `EE4DDABA64DB39A91F23A2B35FED4EDFBA46079B3277A5BB0477471BC7B7A30D`

---

Improve Your CodeX UI Desgin with This Simple Method

0:00 You know one of the biggest problem when
0:02 you when you need to improve the user
0:04 interface of your existing application
0:07 and especially when you are working with
0:08 codeex one of the biggest problem that
0:11 you face is that codeex is not really
0:14 good with UIUX stuff and according to my
0:17 experience Gemini
0:20 is the best one right because it just
0:23 saves you a lot of time because it ju it
0:26 it just does things it takes a lot of
0:29 decision
0:30 that you would take yourself especially
0:34 in UIUX.
0:36 So let me share with you a very simple
0:39 workflow that I that I am using at this
0:42 point that can save you a lot of time
0:44 and frustration hopefully. Now this is
0:47 like one of my application I'm working
0:49 in some of the features over here. Now
0:51 let's try to find a part of this
0:53 application which I want to improve in
0:56 terms of UIUX. So I'll take a look at
1:00 different things. Okay. So we can take
1:02 this to-dos page example.
1:05 This does not look very good to me.
1:08 Right? I mean this is minimal but we
1:10 need to improve this. So what I'll do
1:13 I'll simply take a screenshot of this
1:15 portion. I'll simply take this
1:17 screenshot like this.
1:22 Then I'll come to Google Gemini. I'll
1:24 create a new chat. Make sure you select
1:26 the canvas option. I'm going to paste
1:30 this screenshot over here. I'm going to
1:33 choose the pro model and then I'm going
1:36 to paste the prompt that I use every
1:38 single time. Let me show you. So this is
1:41 the prompt that I'm using system prompt.
1:44 The premium monogram UI designer role.
1:47 You are an expert react and tailwind CSS
1:49 developer with a specialty in high-end
1:51 minimalist UI design. Your goal is to
1:54 take any UI screenshot or description
1:56 provided by the user and immediately
1:58 redesign it using a strict premium
2:01 monochrome aesthetic. Objective:
2:03 transform outdated or cluttered UIs into
2:05 clean modern single file react
2:07 components without asking for further
2:09 clarification. Right? So this is like
2:12 one of the prompts that I have created
2:14 which gives me something that I want
2:17 basically and just like that I'll
2:19 provide this prompt to you and then I'll
2:22 simply click on this submit button and
2:24 then we just wait and see what it
2:26 creates this time. This was a very
2:28 minimal design by the way. Let's just
2:31 see what happens. Okay. So this is what
2:33 it created. This is much much better I
2:36 would say. Now if at this point you feel
2:39 like something is not good, you can
2:41 obviously select that portion like this
2:45 and then you can add a comment and then
2:48 Gemini will update it accordingly. Let
2:51 me give an example. So I'm going to
2:53 click on this select and ask and then
2:56 from here I'm going to just tell it to
2:59 remove these and now it is going to
3:03 remove that. And now you can see that
3:06 badge is removed and we are here. So
3:08 obviously you can do all the adjustments
3:10 that you want to do. You can tell it to
3:12 apply colors based on your app and
3:15 things like that. But then you can
3:18 simply take the code of all of this.
3:21 This is the important thing. You simply
3:23 take all this code. You tell codeex to
3:27 basically this is what your designer
3:28 sent and I want you to in integrate this
3:31 UIUX exactly to this area of my
3:34 application and it is going to do that
3:37 automatically for you because now you
3:40 have all the code that makes this user
3:42 interface beautiful right so now you
3:45 don't your codeex does not have to
3:46 figure out what classes to use the
3:49 different visual hierarchy stuff and
3:51 different design elements you don't have
3:53 to worry about all those things. You can
3:55 simply provide this code and it will
3:57 automatically create integrate this
4:00 thing within your application.


---

## Source: master-97-of-codex-in-1-hour-full-course.txt

- Original path: `addintional info to add\master-97-of-codex-in-1-hour-full-course.txt`
- Size: `89071` bytes
- SHA256: `A55DC643B47DC6D6A8B143AB243D924F190E54BC72DEEDF849E44E22506E6C94`

---

Master 97% of Codex in 1 Hour (full course)

0:00 So, Codeex is an absolutely incredible
0:02 super app. I've been using it a lot more
0:03 lately and I'm not saying that I'm
0:05 ditching Cloud Code. I still use them
0:06 both regularly because they're both good
0:08 at different things. So, today's video
0:10 I'm going to break down every single
0:11 important thing that you need to know
0:12 about Codeex to be able to, you know,
0:14 open up the app for the first time and
0:16 then actually have finished automations
0:17 and websites and whatever you want to do
0:19 in Codeex done by the end of this video.
0:21 So, whether you've never opened up a
0:22 tool like this before or if you're
0:23 already kind of used to using Cloud
0:25 Code, I'm going to break down everything
0:26 as simple as I can. So, first of all, if
0:28 you fit in this bucket of someone that
0:29 uses ChatGBT just on the web or uses
0:31 Claude, you are going to get this really
0:34 quick because what we're looking at
0:35 right here is Chat GBT. We have the
0:37 ability to make new chats. We can search
0:38 through chats. We can have different
0:40 projects. We can have all of our
0:41 different chats over here. And then we
0:42 talk to chat right here. And if I open
0:45 up the codeex app, which is what we're
0:46 going to be using today for the entire
0:47 video, it looks pretty much the exact
0:49 same. We have projects on the left, we
0:51 have chats on the left, and then we can
0:52 talk to chatbt right here. We use this
0:55 toggle to change the model whether we
0:56 want to use GBT 5.5, 5.4 or other
0:59 models. We can change the speed and then
1:01 we can also change the intelligence. So
1:03 low, medium, high or extra high. And
1:05 I'll get into this stuff a little bit
1:06 later in more depth. And this is also
1:08 very similar to the Claude code desktop
1:10 app where we have the ability to chat
1:12 with Claude right here. And then on the
1:13 lefth hand side, we can see our chats
1:14 and our projects. So that is the
1:16 interface. Don't get overwhelmed. So I'm
1:18 going to get you guys all familiar with
1:19 the interface and go over all the
1:21 settings that you need to know. And then
1:22 I'm going to show you a full project
1:23 from beginning to end. Building skills,
1:25 connecting to things, building
1:26 automations, and then deploying on some
1:28 sort of website. So, buckle up. All
1:30 right. So, what actually is Codex?
1:32 Codeex is basically a massive super app.
1:35 We can use chatbt, same way you talk to
1:38 it on the web, but now we work in
1:39 projects. And Codex can create Excel
1:41 sheets, read Excel sheets, look through
1:42 all your local files. It can do
1:44 basically anything on your computer,
1:45 including using the mouse and keyboard
1:47 and clicking around and automating a
1:49 browser. It also lets us build these
1:50 reusable skills. We can build websites.
1:53 We can build apps. We can build video
1:54 games. And then we can automate and push
1:56 all that stuff so that it actually runs
1:58 while we're sleeping every night. So the
1:59 main difference here between web chat is
2:01 that you're basically just talking. And
2:03 you have these connectors in chatbt now.
2:04 So you can get a little bit more
2:06 functionality. You can give that AI
2:07 brain a bit more of like hands. But in
2:10 CEX, it can do everything. It's one of
2:13 those things where Codex can do
2:14 everything that chat can do, but chat
2:16 cannot do nearly as much as what Codex
2:18 can do. So you might as well just switch
2:19 over to something like codeex. And if
2:21 you are curious about the cloud code
2:22 versus codeex difference, they're
2:24 different harnesses, right? So they
2:26 fundamentally work a little bit
2:27 different but very similarly. They also
2:29 use different models. So cloud code
2:31 natively under the hood uses opus and
2:33 sonnet and haiku and codex under the
2:35 hood uses the different chatbt models.
2:37 Now I did do a full breakdown where I
2:38 actually tested Opus 4.7 against GBT 5.5
2:41 and I got some really interesting
2:42 results. So if you guys want to check
2:43 out this video next, I'll tag that right
2:45 up here. I definitely think it's worth
2:46 just at least skimming through because
2:48 ultimately these models have very
2:49 different strengths is what I've noticed
2:51 after playing with them non-stop. I
2:53 really like Claude for being sort of
2:55 like exploratory and brainstorming and
2:57 helping me get creative and think
2:58 through things and plan, but then I
3:00 really like codeex for being pragmatic
3:02 and it feels like it does better at
3:04 following my plan if the plan grows
3:06 longer longer. And it's really good at
3:08 executing and it's really good at
3:09 finding issues and troubleshooting
3:11 things that sometimes Claude for some
3:13 reason can't handle. So, I'm not in here
3:15 saying that I love Codeex more than
3:16 Claude Code. I'm saying that I'm using
3:18 them both and I'm learning more about
3:20 both every day. And one other thing I
3:21 really like about Codeex is you can see
3:22 my little pet down here, which I'll tell
3:24 you guys how you get this later. But
3:25 this pet while you're working, it stays
3:27 in the bottom of your screen and it
3:29 tells you what it's working on. So, it's
3:31 really nice to be able to multitask and
3:32 see what's happening inside of Codeex.
3:34 And the pet's kind of funny. And it's
3:36 more than just having chats. It's the
3:37 ability to have everything organized on
3:39 your workspace. So, if you guys watch my
3:41 recent video about Claude Code operating
3:43 system or you've seen my executive
3:44 assistant video, this is my Herk 2
3:46 project, which is basically where I live
3:48 inside of Claude Code. And all of this
3:50 is is a bunch of folders and files. I've
3:52 got a bunch of files here. I've got a
3:54 bunch of different folders. I've got
3:55 settings. I've got skills. I've got
3:56 agents. I've got projects. I've got all
3:58 these things that I'm working on. And
4:00 all this is is a bunch of local files,
4:02 which means I can have codecs work
4:05 inside of this directory and do
4:06 everything as well. All that we're doing
4:07 when we're using these different models
4:09 is we're organizing things into a
4:11 structure. A structure that different
4:12 agent harnesses can understand. And
4:14 whether you want to use codeex or cloud
4:15 code or cursor or, you know, openclaw,
4:18 whatever it is, they can all work out of
4:20 that directory as long as you have some
4:21 sort of instructions and guidelines over
4:23 what actually lives where. Okay. So,
4:25 basically what I'm going to be building
4:26 with you guys today is a bit of a
4:28 YouTube comment intelligence system. So,
4:31 we want to be able to pull in YouTube
4:33 comments from my channel. We want to be
4:34 able to have those be analyzed. We want
4:36 a workbook in Excel. We want like some
4:38 data visualization. And we want a
4:40 dashboard that lives somewhere on the
4:42 web so I could go check it on my phone
4:43 if I'm out on a walk. And I'm going to
4:45 show you how we ship and deploy all of
4:46 that. So basically from zero to a
4:48 working project is what I'm going to
4:49 show you guys today. So let me go ahead
4:51 and open up the Codeex app and show you
4:53 guys how this works. Now real quick,
4:55 what you have to do is have some sort of
4:56 chatbt plan. The good news is if you're
4:58 on free, you can still try out Codeex.
5:00 You have limited Codeex access, but I
5:02 would recommend just hopping on the $20
5:04 a month plan to get started. And if
5:06 you're running into your limits pretty
5:07 quickly, then maybe you want to upgrade
5:08 to Pro. Now, what else is really nice
5:10 about ChatBT subscription is you can
5:12 plug it into OpenClaw or Hermes agent,
5:15 which is really, really nice because
5:16 obviously it's so much more expensive to
5:18 pay per token rather than just being on
5:20 some sort of subscription. And then
5:21 you're just going to go ahead and go to
5:23 Codeex and then just download the app
5:24 for your operating system. That's the
5:26 way that we're going to be using it
5:27 today. Ultimately, you will be getting
5:29 more full functionality if you're using
5:31 codecs in VS Code extension or in the
5:34 terminal, but for the sake of the video,
5:36 using the app is going to get you super
5:38 far either way. There's just a few
5:39 little things that you want to keep in
5:40 mind, which is why I'm making this
5:41 YouTube video. All right, so let's go
5:43 ahead and get started. So, on the lefth
5:45 hand side, you can see I've got one
5:46 project open and this project is
5:48 actually how I built the slide deck that
5:50 you were looking at earlier. So, this
5:51 slide deck I built right here in this
5:52 project. And you can see because I'm in
5:54 the app, Codex lets us basically
5:56 navigate this right here in this little
5:58 local host browser. And this is also
6:00 where if I said, "Hey, can you use
6:02 browser use and test out this slide deck
6:04 to make sure everything looks good and
6:05 make sure it functionally like clicks
6:07 and moves," then it would bring up a
6:09 mouse over here and we would see it move
6:11 around and we would see it click, which
6:12 I'll show you guys later in the video.
6:14 But anyways, what we're going to do is
6:15 we're going to start a new project
6:17 because over here you can see we have a
6:18 bunch of random chats which can still do
6:20 things like building games and building
6:22 automations and simulators. But what we
6:24 want to do is we want to work inside of
6:25 an actual project. Because these chats,
6:27 any deliverable that we create doesn't
6:29 really have a home, you know, just lives
6:31 somewhere random in our documents. But
6:32 when we're working in a certain project,
6:34 I can actually grab the local working
6:37 directory. So I copy that. And if I go
6:38 into my file explorer and paste that in,
6:40 now I'm inside of the actual project
6:42 that we're working on in codec. So now I
6:44 can see different assets that live in
6:45 this project. All these images. I can
6:47 see different guides and I can have a
6:49 little bit more organization to this
6:51 ongoing project in my business. All
6:53 right. So we're going to start a new
6:55 project. I'm going to click on new chat
6:56 in the top. And then right here you can
6:58 see I'm inside of the codeex 95%
7:00 project, but we're going to go ahead and
7:01 add a new project. So that's going to
7:04 open up a little um file explorer over
7:06 here. And then you choose where you want
7:08 this to live. So for this example, I'm
7:09 going to go to my desktop. I'm going to
7:11 go into a folder called Codeex YouTube.
7:14 And I'm going to create a new folder
7:15 inside of this folder just called um
7:18 YouTube Analytics Demo. And we're going
7:21 to go ahead and open up this folder and
7:23 select that. And now you can see it's a
7:24 new project over here on this lefth hand
7:26 side that we're going to be working in.
7:27 Now right here you can see I have
7:28 something called full access. By default
7:30 you won't see this. It'll just be on
7:32 default permissions. So, I'm going to
7:33 kick off some sort of chat here and then
7:35 I'll show you how we actually get that
7:36 set up. Real quick, guys, I know we're
7:38 going over a ton of information in this
7:39 video. So, what I did is I threw all of
7:41 this into a complete PDF resource guide
7:43 that you can use and reference later.
7:45 All you have to do to get that is join
7:46 my free school community. The link for
7:48 that is down in the description. And
7:49 once you get in here, go to the
7:50 classroom and click on all YouTube
7:52 resources and you'll be able to find all
7:53 of my repos, all of my skills, resource
7:56 guides. Everything that I've ever
7:57 dropped inside of here is completely
7:59 free and anything I've shown on YouTube
8:00 is usually dropped in here. So join the
8:02 community link in the description and
8:04 let's get back to the video. Thanks
8:05 guys. All right, so the first thing that
8:06 I want to do in this project is I want
8:07 it to be able to just kind of
8:09 familiarize itself with my workspace and
8:12 with who I am. And the way that I'm
8:13 going to do that is I have a project
8:15 locally. If I go to my um if I go to my
8:19 desktop and I go into a project here
8:21 called YouTube OS, I have like all of my
8:23 transcripts right here from some YouTube
8:25 videos. So what I'm going to do is I'm
8:27 not going to give it that file path. I'm
8:28 just going to say, "Hey, in my desktop,
8:30 look inside my YouTube OS folder and
8:32 just pull in 10 of my raw transcripts
8:34 and analyze them." This is just to show
8:36 you guys how good it's going to be at
8:38 finding different files locally and
8:40 being able to organize them, move them,
8:41 delete them, whatever you want. In this
8:43 case, I'm just telling it to read them.
8:45 All right, so I want you to go onto my
8:47 desktop and I want you to look at a
8:49 folder called YouTube OS and I just want
8:51 you to familiarize yourself with me. I
8:53 make YouTube videos on AI automation and
8:56 inside of this folder I have a bunch of
8:58 my raw transcripts. So I just want you
9:00 to read through like five to 10 of those
9:02 just to familiarize yourself with the
9:03 type of content that I make. You
9:04 shouldn't do any organization. I just
9:06 want you to read those for context. Now
9:08 what's cool about this is codeex once
9:09 again is an agent that lives locally.
9:11 So, just because it's working inside of
9:13 one project, which is our, you know, um,
9:16 YouTube sort of demo folder, that
9:19 doesn't mean that it can't navigate
9:20 anywhere else inside of your local
9:22 files. And because we're telling it to
9:23 do so, it's going to search. Right here,
9:25 you can see it's searching inside of my
9:27 desktop, and then it's going to find the
9:28 YouTube OS, and it's going to drill down
9:30 into that folder, and it's going to keep
9:31 searching until it finds what it wants.
9:33 Now, a quick warning, this is not the
9:36 most effective use of codecs or of your
9:38 tokens. The more effective use would be
9:40 to say, "Hey, this is the folder right
9:42 here with all my raw transcripts. I'm
9:44 going to copy this path, and I'm now
9:46 just going to give Codex this exact path
9:48 so it can just look in there instead of
9:50 having to search for it on its own." But
9:52 I just wanted to show you how it's able
9:54 to do this because you can see right
9:55 here inside of my transcripts folder, I
9:56 have one called RAW, and that's the one
9:58 that I wanted it to look at. And right
9:59 here, it says there are two files, raw
10:02 and then processed. So, it doesn't know
10:03 which one to look through. So anyways,
10:05 the more specific you can be with your
10:07 prompting and with your pointing, the
10:09 better. Now, let's also, while this is
10:10 running, talk about the model stuff over
10:12 here. So, right now, you've noticed that
10:14 we're on extra high. And I would say
10:15 that extra high is probably overkill for
10:17 that sort of job. For the most part, I'm
10:19 using medium to do all of my planning
10:21 and my brainstorming. And then every
10:23 once in a while, if I'm doing a huge
10:24 build or some massive skill, I'll switch
10:26 to high. I'm honestly hardly using extra
10:29 high unless I'm hitting some sort of bug
10:30 or issue that it's not able to solve.
10:33 Anyways, it has read nine transcripts,
10:35 so it has a little bit better of an idea
10:37 now about who we are. But just to show
10:39 you guys, this is still the folder that
10:40 we're working in, the YouTube Analytics
10:42 demo. And there's nothing that exists
10:44 here. So even though it knows this, this
10:46 knowledge only really lives in our
10:47 overall chat GBT memory and in this
10:50 specific chat window. If I opened up a
10:52 new chat, it probably wouldn't still
10:53 have the knowledge about this. So what
10:55 I'd probably want to do is say, "What I
10:58 want you to do is set up an agents.mmd
11:00 file. This should have context about me
11:02 and about what the goal of this project
11:03 is. Ultimately, what we're going to do
11:05 here is we're going to build a dashboard
11:07 that's going to be pushed to Verscell
11:10 and it's going to have information about
11:11 my channel and some analytics around the
11:13 comments and stuff like that. So, that's
11:15 the end goal. We're going to have to
11:16 connect to YouTube. We're going to have
11:17 to pull in data. We're going to set up
11:19 some skills and some automations, but I
11:20 just want you to get us started here
11:22 with a quick agents.mmd file. And now
11:25 I'm going to go ahead and shoot that
11:26 off. Now, why do we need to create an
11:28 agents.md file? Well, if you're coming
11:30 over from claw code, you know that we
11:32 always want to start a project with a
11:33 claw.md file. And this is just
11:35 agents.mmd. It's the same thing, but
11:38 codeex expects a different terminology.
11:40 And what this agents file does is it's
11:42 basically like its onboarding doc. Every
11:44 time you open up a new chat, it's first
11:45 of all going to read the agents.mmd file
11:48 and it's going to get organized with
11:50 what is my goal, what is this user
11:52 doing, and how do I help them as
11:53 effectively as possible. So this
11:55 document has been created. If I click on
11:57 open, we're going to be able to read it
11:58 right here. And it's just a very simple
11:59 markdown file. This is the project right
12:01 here. This is about Nate. Nate Herk does
12:04 this. This is the project goal. This is
12:06 the product direction. So, we're just
12:07 giving it really important information
12:09 that it needs to know about our project.
12:11 And you can see now if I pull the file
12:13 explorer over, it has created this
12:14 agents markdown folder, which is exactly
12:17 what we wanted. Sorry, not folder, file.
12:19 Okay. So, now that that's out of the
12:20 way, I'm going to go ahead and close
12:21 back out of that and we're going to get
12:23 started. So, what I'm going to do is I'm
12:24 going to click on this button and I'm
12:25 going to turn on plan mode. Plan mode is
12:27 what I like to start with when I am
12:30 creating some sort of plan. That
12:31 basically means that Codeex won't
12:32 actually execute anything. It's just
12:34 going to brainstorm and help you guys
12:35 get clear on what you want to build
12:37 before you actually build it. So, I
12:38 always start with plan mode. Now, I'm
12:40 just going to start yapping. And by the
12:41 way, if you guys are curious about the
12:42 tool I use for voice to text, check it
12:44 out in the description. It's called
12:45 Glido. I'm now an official member of the
12:47 Glido team, which is super exciting. I
12:49 fully switched over from Whisper to
12:50 Glido because it's faster, it's more
12:52 private, and it is a way more agentic
12:55 tool, and we've got a really cool
12:56 vision. So check it out in the
12:57 description. Okay. So now that you
12:58 understand that context, the first
13:00 hurdle for us to overcome is how do you
13:02 actually connect to my YouTube in order
13:04 to be able to pull in my data? I want
13:06 you to be able to specifically at this
13:08 point be able to pull in a bunch of
13:09 comments so that you can analyze them.
13:11 So help me figure out how we do that and
13:13 then explain it to me step by step. And
13:14 that's really the mindset shift with
13:16 tools like Codeex or Claude Code is if
13:18 you don't know if something's possible,
13:19 instead of defaulting to, oh, I need to
13:21 go to YouTube or oh, I want to book in a
13:22 consulting call with an expert, just ask
13:24 Codeex or Claude Code. ask it to do
13:27 research and explain things to you. And
13:28 that's basically how I learned
13:30 everything that I know. So, while this
13:31 is running, I wanted to explain
13:33 something real quick, which is called
13:35 plugins. Plugins, MCP servers, skills,
13:37 connectors, whatever you want to call
13:39 them. We kind of have this interface
13:41 inside of codeex to do stuff like this.
13:43 And what you'll notice is there's a
13:44 bunch of different plugins here. We've
13:46 got hugging face, we've got Versell,
13:48 we've got GitHub, we've got game studio,
13:50 we've got a bunch down here for design,
13:52 reotion, Figma, hyperframes, Canva.
13:54 We've got stuff for lifestyle,
13:56 productivity, and this lets us basically
13:57 connect to a lot of the tools that we
13:59 already know and love. Google Drive,
14:01 Slack, SharePoint, Teams, whatever you
14:03 may need. A lot of that stuff is
14:04 available here. And if you can't find
14:06 it, you can go ahead and search. So like
14:07 Slack, we have it right there. But look,
14:09 if I search YouTube, there is no default
14:11 plugin right here. And that's why I had
14:14 to ask Codeex, okay, so there's no
14:16 plugin. How do I actually access YouTube
14:18 data? And so it comes back here and it
14:20 asks us some questions. It says for the
14:22 first comment analysis milestone, which
14:24 connection path should we plan around?
14:25 API key, OOTH, or both. Um, I'm just
14:28 going to go with its recommendation
14:29 because let's say I don't know what I
14:31 need to do. And I'm going to click on
14:32 API key. What should the first comment
14:34 poll focus on? I'm just going to say
14:35 recent videos. And now, if it has any
14:37 other questions, it'll go ahead and ask
14:39 us those first. Now, one thing you'll
14:41 notice is because it already was
14:42 searching through my other folders and
14:44 projects, it did find an API key in a
14:46 different project. But I'm still going
14:47 to show you guys how you would get this
14:48 set up because it comes back here with a
14:50 plan which we can go ahead and read. So
14:52 what it wants to use is it it found an
14:55 API key. So not full OOTH and then it
14:57 needs to actually convert everything. So
14:59 what I'm just going to say is instead of
15:01 implementing I'm going to say I'm glad
15:03 that you found that API key. But let's
15:04 set up a fresh one because in my Google
15:06 Cloud I want to have a separate API key
15:08 for codeex and a separate one for cloud
15:10 code. So let's just go ahead and assume
15:12 that we're going to create a complete
15:13 new one from scratch. And now I'm able
15:15 to shoot off those changes. Codeex is
15:17 going to review the plan and then edit
15:18 it. And then once we're aligned on the
15:20 plan, we'll go ahead and start
15:21 executing. So now it's come back and it
15:23 has Okay, we're going to do a brand new
15:24 Google Cloud API key. If you wanted to
15:26 read through all of this step by step,
15:27 you could. But I'm just going to go
15:29 ahead and say submit implement the plan.
15:32 So there's some stuff that we're going
15:33 to have to do here. We're going to have
15:34 to go into Google Cloud Console and
15:36 we're going to have to create this new
15:37 project. Um, enable this API and then
15:40 grab the API key and then get it
15:42 configured inside of Codeex. So, if this
15:44 part of the tutorial isn't very
15:45 interesting to you, you don't want to
15:46 watch me get it set up, maybe you want
15:47 to do some stuff first with the native
15:49 plugins, which is much easier.
15:50 Typically, these plugins, you just
15:51 basically sign in the same way where you
15:53 would open up Slack and sign in, or the
15:55 same way you would open up Gmail and
15:56 sign in. And that's a lot lot easier.
15:58 Okay, so I have to go to Google Cloud
16:00 and get everything set up in a project.
16:02 If I didn't know exactly how to do this,
16:03 it would tell me step by step as you
16:04 guys saw in the plan. But what it's
16:06 going to do is it created another file
16:07 for us. So, it created this one called
16:10 env.local. So, what I'm going to do is
16:12 head over to my Google Cloud Console.
16:14 I'm signed in with my YouTube account
16:16 and I'm going to go ahead and create a
16:17 new project. So, I'm going to call this
16:19 one um codeex demo. I'm just going to go
16:22 ahead and create this project. And once
16:24 that's spun up, it's pretty simple. We
16:26 just have to create a connection to
16:28 YouTube data API. And then we're going
16:30 to create an API key. So, I'm going to
16:32 select this project. The first thing I'm
16:33 going to do is search up here at the top
16:35 for YouTube data. And we're going to
16:38 grab the YouTube data API v3. And then
16:41 I'm going to go ahead and click enable.
16:43 And once that has been enabled, it
16:44 should pull up a new screen that looks
16:45 like this. And then I'm going to go down
16:47 here to credentials and I'm going to
16:50 just create a new API key. So create API
16:52 key. This is just going to be called
16:54 codeex YouTube demo. And then right here
16:57 for the restrictions, I'm just going to
16:58 once again type in YouTube. We're going
17:00 to check YouTube data API v3. And then
17:02 we're going to go ahead and create that
17:03 API key. And it gives me this value that
17:05 I'm going to go ahead and copy. So I'm
17:06 going to copy that. And then I'm going
17:08 to pull in that file that it created,
17:10 the env.local. And I'm just going to
17:12 open this file real quick with um my
17:14 notepad. And here is where I'm going to
17:16 put my YouTube API key. I'm just going
17:18 to paste that in right there. Hit save.
17:20 And then I can close out of that because
17:22 what we need to get next is we need to
17:24 get our YouTube channel ID. I'm not
17:26 actually going to do the uploads
17:27 playlist. I don't think it needs that.
17:28 But I am going to go find the YouTube
17:30 channel ID. Oh, but this is actually
17:32 cool. My YouTube channel ID is already
17:34 in there. and the playlist ID is already
17:35 in there because it was able to just
17:37 pull it from a different project. So
17:38 obviously if you didn't have that
17:39 already set up, it wouldn't do that, but
17:41 it would explain to you exactly how to
17:42 do that if you needed to. So now that we
17:45 have that API key put in, let's just see
17:47 if it works. Okay, so I've given you the
17:49 API key in that localenv,
17:52 can you go ahead and test it to see if
17:54 that connection works? And if not, then
17:56 we'll have to make some changes. Okay,
17:57 now while this is running, what you guys
17:59 might notice when you hop into Codeex is
18:01 that it might pause a lot to actually
18:03 ask you questions and like approve
18:05 things. And that's what happens when
18:06 you're on default permissions. So, if
18:08 you want to be able to change that,
18:10 you're going to go up here to your
18:11 settings and then in general, you can
18:12 see right here auto review or full
18:14 access. And this by default will be
18:16 turned off. So, if I turn this on, then
18:18 when we're back in our chat, we now have
18:20 the ability, see right here, this exact
18:22 example, allow network access. And I
18:24 want to say, yeah, allow it. Or if I
18:26 switch this to full access now, it's
18:28 just going to do everything without
18:29 asking for permission. So obviously it
18:32 comes up as orange here because there's
18:33 sometimes where you might not want full
18:35 autonomous access. And I think it's best
18:38 practice when you're first getting
18:39 started and you're first building some
18:40 automations to maybe just leave it on
18:42 default. But once you start getting a
18:44 hang of your skills and you start
18:45 getting a hang of the flow, then moving
18:47 to full access is going to save you a
18:48 lot of time so that you can actually not
18:50 have to babysit it. But I had to call
18:52 that out because, you know, we've seen
18:53 horror stories of agents deleting
18:55 databases or sending out mass emails and
18:57 stuff like that. So, you just want to be
18:59 safe with it. I personally have never
19:00 had any sort of problem like that. That
19:03 usually comes from context rot or very
19:05 vague instructions or or just not being
19:07 super smart with your planning. So, you
19:08 can see what's happening here is it's
19:10 trying it out, right? And it's running
19:11 into some issues. But what's great about
19:13 this agentic loop is that it's going to
19:15 keep trying things until it actually
19:16 goes through. There we go. You can see
19:18 nice the key works for channel data. And
19:20 I'm going to do one more test to make
19:21 sure that I can pull comments from
19:22 recent videos. So, a big mindset shift
19:24 when you're using any of these tools is
19:26 to just let it run, let it try things,
19:29 help steer it in the right direction,
19:30 ask questions, be curious, and just take
19:33 a look at what it's doing because it
19:34 tells you every single thing that it's
19:36 trying. But now we can see I've tested
19:38 the key. I can get comments from your
19:40 recent videos and it's completely
19:41 working as expected. However,
19:43 PowerShell's built-in web request had a
19:45 local TLS issue, but Node and Python
19:47 both connected cleanly. For the project,
19:50 that's fine. We'll use Node and server
19:51 side code for the dashboard anyway. Now,
19:54 here's something to think about. I don't
19:56 really know what that means, but what I
19:59 want to make sure is that that doesn't
20:00 happen again or I want to make sure that
20:02 this project doesn't lose this knowledge
20:05 because it it it ran into a failure. And
20:07 whenever you run into a failure, you
20:09 want to treat that as golden knowledge
20:11 because it means you have more data to
20:13 make sure that it doesn't do it again.
20:14 So all I'm going to say is, okay, thanks
20:17 for testing that. I want to make sure
20:18 that you don't ever run into that issue
20:20 again, and I want to make sure that that
20:22 knowledge is saved in this project. So
20:24 can you just throw together a quick file
20:25 somewhere in your memory, somewhere in
20:27 this project to make sure that you
20:28 already know that so that next time it
20:30 doesn't happen again. And doing stuff
20:32 like this, having this sort of habit is
20:34 how you actually make these systems get
20:36 smarter over time rather than just
20:38 feeling like you're always repeating
20:39 yourself or that you're always running
20:40 into the same issues. Another mindset
20:42 shift for you right there. So here it
20:43 decided to add this into the agents.mmd.
20:46 Right now I have no objections to that,
20:48 but as your projects grow, you don't
20:49 want to put everything in the agents.mmd
20:51 because if that agents MD file gets
20:53 really huge, it's going to use more of
20:55 your tokens. Okay, so before we keep
20:57 going, I did want to point out one other
20:58 thing down here, which is this little
21:00 bar. This shows you how much of your
21:02 context window is currently filled up.
21:04 Now, if you're using cloud code and
21:06 you're using Opus, you have a million.
21:08 So, it's, you know, about four times as
21:09 much as this in uh Codeex. However,
21:12 Codeex automatically compacts just like
21:14 Opus does and just like Cloud Code does.
21:16 So, it's really nice. You don't have to
21:18 worry about it too much, but you still
21:19 want to be thinking about some general
21:22 context management tips. I've got some
21:23 videos on my channel about that that are
21:25 agnostic to whatever tool you want to
21:27 use. I'm not going to dive super deep
21:28 into context window management in this
21:30 video, but just wanted to point that out
21:32 as well. Okay, so what's next? What I
21:34 want to do is I want to show you guys
21:35 that it's able to pull comments and that
21:37 we're able to create an actual
21:39 deliverable from it. So, let me just
21:41 once again go back to plan mode. All
21:42 right, so what I want you to do is pull
21:44 in, you know, about 100 or 200 of my
21:46 most recent comments and I want you to
21:48 analyze them. I want you to find
21:50 patterns and I want you to display all
21:52 of this in a um Excel sheet and I want
21:54 it to be a visual representation of this
21:57 data that has interesting insights for
21:58 me as a content creator so that I can
22:00 keep making content that people want and
22:02 I can keep answering questions that are
22:04 coming up frequently. So go ahead and do
22:06 a plan for this and structure what the
22:09 Excel sheet deliverable will look like.
22:10 So I shot that off. I'm going to let you
22:12 guys know when we have a plan or if it
22:14 asks me any questions. A couple
22:15 questions here to make sure that it
22:16 understands what we want. It's asking
22:18 about the recent comments. I'm just
22:19 going to say across recent videos, how
22:21 many should we pull? Let's say 200. How
22:23 should we classify and summarize the
22:25 comments? I'm just going with all of its
22:26 recommendations. Those were pretty good.
22:27 And so, if I switch over to a different
22:29 tab, let's say we're back on our slides.
22:30 You can see my pet down here has a
22:32 little one next to it. Well, the one's
22:34 gone because I switched back into
22:34 Codeex, but that little one, if I would
22:36 have hovered over it, it would show me
22:38 what it's working on. So, now I can keep
22:40 tabs on my workflow while I'm doing
22:42 other things. And Codeex makes
22:44 multitasking really easy because of the
22:46 fact that I could open up a new chat in
22:47 this project and work on something else.
22:49 Then I could open up a new chat in this
22:50 project and work on something else. And
22:52 it will color code and give you like a
22:53 little blue dot or yellow dot on the
22:55 side here if one of these sessions needs
22:57 attention. So anyways, here is the plan.
22:59 What I would recommend is at this point
23:00 you read through it. You make any
23:02 changes to specific sections if you
23:04 want, but for the sake of the video, I'm
23:05 just going to go ahead and submit that
23:06 plan. But while this is running real
23:08 quick, I wanted to show you a few other
23:09 things that we can look at. So if you do
23:11 slash inside of this chat, there's
23:14 things that you can actually look at. So
23:15 we've got autoreview, code review,
23:17 feedback, MCP, memories, model,
23:20 personality, pet, plan mode, reasoning.
23:22 There's all of these different skills
23:23 that we can use like browser use,
23:25 GitHub, Higsfield, PDF, skill creator.
23:29 The slash is going to open up a lot of
23:30 different things for you. And of course,
23:32 what you can do is you can also tag
23:33 things. So, if I do an at, this is going
23:35 to let us tag either specific plugins or
23:38 specific files that live somewhere in
23:39 this project. So, if you're ever trying
23:41 to reference a specific plugin or
23:43 something specific, then it's probably
23:45 best to try using the slash or using the
23:47 at to actually tag that in your chat.
23:50 Now, the reason I wanted to bring up the
23:51 slash is because you'll see one right
23:52 here called slash personality, which if
23:54 I shot that off, it would actually let
23:56 it, you know, do something. So, what I
23:58 can show you is I don't want to
24:00 interrupt this main session. I could
24:01 come up here and I could click on open
24:03 side chat and that opens up a different
24:05 little conversation here that still
24:07 lives in this chat, still lives in this
24:09 project. So if you're coming over from
24:10 cloud code, this is pretty similar to
24:12 slash by the way. So what I can do over
24:14 here is I can do slpersonality. And now
24:16 I can set if I want the personality to
24:18 be friendly or pragmatic. And I guess I
24:20 didn't actually need to switch over here
24:22 because it just opens like this. But
24:24 right now we're on friendly. I'm
24:26 actually going to switch this to
24:27 pragmatic. You can see this says
24:28 concise, task focused, and direct. And
24:31 honestly, most of the time I'd probably
24:33 prefer pragmatic. So, I'm usually
24:35 working on pragmatic by default. But now
24:37 that we've opened the side chat, let me
24:38 just show you guys something else. Um,
24:41 give me a quick update about my YouTube
24:43 channel and, you know, the type of
24:45 videos I've been making recently. Just
24:46 to show you guys that, okay, if you have
24:48 your agent working right here on
24:49 something and you don't want to
24:50 interrupt it, but you have some sort of
24:51 side question that is relevant to this
24:53 project or maybe relevant to something
24:55 that you guys were working on earlier,
24:56 you can ask over here because right here
24:58 you can see it has the context of what
25:00 we talked about already. And I could go
25:02 back and forth a little bit and then I
25:04 could just close out of this side chat
25:05 whenever I'm done. Okay, so that has
25:06 been created. did. It pulled in 200
25:08 recent comments across three recent
25:10 videos. And I could open it up right
25:12 here in this dashboard sort of view
25:14 right in Codeex, which is awesome. And I
25:16 could actually make some follow-ups and
25:17 chat with it right here. But it's a
25:19 little bit finicky, to be honest. So,
25:20 what I'm going to do is close out of
25:22 that. And I'm just going to open up our
25:23 folder again, which was right here. And
25:25 you can see there's a lot more that
25:26 lives in here now. Not only do we have
25:27 our agents and ourv, but we have scripts
25:30 and we have outputs and we have
25:32 different nodes and modules, which has a
25:34 lot of stuff. So if at any point this
25:36 starts to feel a little bit unorganized
25:37 and you don't understand the structure,
25:39 all you have to do is come into Codex
25:40 and say, "Hey, help me like reorganize
25:42 this or maybe give me a document that
25:44 helps me navigate it a little bit
25:45 better." Because of course this lives in
25:47 a local directory and Codex can touch
25:49 it, read it, organize it, edit it. So if
25:51 I go to outputs and I go to the YouTube
25:53 comment insights, we see all of this
25:55 different stuff that it did. So it took
25:56 some screenshots as you can see, but
25:58 then it also created the actual Excel
26:00 sheet. So I'll open this up right here
26:02 and we can take a look. All right. So,
26:04 we have YouTube comment insights 200
26:07 newest public comments across recent
26:09 Nate Herk videos generated May 5th,
26:11 11:00 a.m. So, we can see the question
26:13 rate, the content requested rate, top
26:16 mentioned tools, claude code. Uh-oh.
26:18 We've got high priority stuff, top
26:20 pattern, skip videos, stuff like that.
26:22 It even started to create some visuals
26:23 here, which is awesome. So, this is
26:25 content category mix over here. It shows
26:27 the mix between general feedback or
26:29 questions with um actual values. So 55
26:32 were general feedback, 53 were
26:34 questions. Some of these were access,
26:36 positive feedback, tool comparison,
26:38 pricing stuff. Over here we have
26:40 different tools. So cloud code,
26:41 Higsfield, Codeex, API, and then over
26:43 here we have some other stats as you can
26:45 see. Now we have a bunch of different
26:46 tabs as well. So we have creator
26:48 insights. So ranked comment patterns and
26:50 recommended creator actions. So I'm able
26:52 to see the percentage breakdown of
26:54 different types of comments. And it also
26:56 gives me recommended actions with
26:58 priority scores. So that's pretty cool.
27:00 I also can see frequent questions, so
27:01 things that are coming up as patterns.
27:04 It's giving me content ideas now as well
27:06 because it's analyzing those comments.
27:08 It's giving me nice reply opportunities.
27:10 And then it's giving me just the raw
27:12 comments. So this should be 200 rows of
27:14 our actual comments that it would
27:15 pulled. 204 as you can see because the
27:18 first three or four were just nonsense.
27:21 So that is awesome. And what you guys
27:23 might be thinking is, okay, is this
27:24 actually useful? Maybe not because we
27:28 just said, "Hey, give me analytics."
27:30 Right? If you guys remember my actual
27:31 prompt, it was very very vague. So if we
27:33 would have spent more time in the
27:34 planning phase or if we had certain
27:36 analytics that we're tracking very heavy
27:37 or certain comments that we're really
27:38 looking out for, we would give that to
27:40 Codeex as knowledge and it would make
27:42 this actual um you know insights. It
27:45 would make it much more customized and
27:48 tailored. So now let's talk about how do
27:49 we turn this into a skill? So first of
27:51 all, what is a skill? Well, a skill is
27:54 basically a repeatable recipe. So, if I
27:56 come back in here and I click on
27:57 plugins, we saw all these plugins,
27:58 right? These are actual like connections
28:00 and potentially MCP servers and kind of
28:02 like some other, you know, it's a
28:04 package that people are able to install
28:06 and use, but skills are more of just
28:08 like instructions. So there's an image
28:11 genen skill, there is a open doc skill,
28:14 there's a GitHub review follow-up skill,
28:16 a document skill, and these are all
28:18 basically just markdown file
28:20 instructions that tell Codeex how to do
28:22 something better. So how to design a
28:24 website better or how to, you know, give
28:26 you a morning brief. And so what we want
28:28 to do is we want to turn this exactly
28:31 what we just did into a skill so that
28:33 anytime I say, "Hey, go give me more
28:35 YouTube insights." It knows what
28:36 endpoints to hit. It knows how to pull
28:38 them in. It knows how to make the Excel
28:40 sheet. It knows how to do all this. And
28:41 the best way that I like to make skills
28:43 is I just basically brainstorm with with
28:45 codeex to do something. And then after I
28:47 get an output I like, I say, "Okay, turn
28:49 that into a skill." So this was the
28:51 ultimate deliverable, right? So what you
28:53 just did is you helped me pull in data
28:55 from my YouTube, you got comments, you
28:56 ran an analysis, and you created me an
28:58 awesome Excel sheet deliverable. I want
29:00 you to turn that into a skill so that
29:02 every time I say to grab my YouTube
29:04 comments and give me some insights, you
29:06 do this exact flow and that makes it
29:09 more consistent. So, I'm going to shoot
29:10 off that message and while it's doing
29:12 that, just think about it like this. If
29:14 someone asked you to create or not
29:15 create, if someone asked you to make
29:16 them chocolate chip pancakes, you're
29:18 going to open up your cookbook or pull
29:20 up your phone and you're going to read a
29:22 recipe and you're going to follow it to
29:23 a tea. You're going to follow the
29:24 measurements, the ingredients, and the
29:26 temperature and the timing and whatever.
29:28 And the next time someone asked you to
29:30 make chocolate chip cookies or pancakes,
29:32 you would just use that same recipe and
29:33 they'd come out pretty much the exact
29:35 same way. Because if you didn't use the
29:36 recipe, you would just be guessing and
29:38 you'd be you'd be sort of measuring and
29:40 you'd be feeling and it just wouldn't be
29:42 consistent. And the cool thing is now
29:44 that you have this recipe to use, every
29:45 time you use the recipe, you might be
29:47 able to make it better. If one time you
29:48 experiment and you add some more
29:50 chocolate chips, you either like that or
29:51 you don't. You update the recipe. Maybe
29:53 one time you realize that you're
29:55 actually leaving too much raw batter
29:56 inside. So what do you do? You update
29:58 the recipe to say, "Okay, you leave it
29:59 on four minutes on each side rather than
30:01 three and a half minutes on each side."
30:02 You're able to each time you use the
30:04 recipe, have it be updated. And that is
30:06 the power of building these skills. And
30:09 you can see that it's able to work
30:10 backwards and reverse engineer a skill
30:13 from our output. And what it does is it
30:15 puts them in a file called thecodex,
30:18 which kind of lives globally, which
30:19 means whenever you're working inside of
30:21 any codeex project, you're going to be
30:23 able to use that skill. And all you have
30:26 to do to call it is you'll do a slash
30:27 command and then you will just name the
30:28 skill. So if you guys remember down here
30:30 we have all these other ones. I could do
30:31 slash browser use slashimage genen slash
30:35 PDF and that's how I could be able to
30:37 call them. The other way you can call
30:38 them is you can actually just have them
30:40 be natural language. So just to show you
30:41 guys another example if I go to my Herk
30:43 2 project and I know this is more
30:45 optimized for cloud code but we have
30:46 acloud folder which is local. So, if I
30:49 click into here, I can see I have a
30:50 folder called skills. And all of these
30:52 are my different skills that currently
30:53 live inside of my AIOS. So, let's say
30:56 here I have a morning coffee skill. And
30:58 I'm going to open this up real quick in
30:59 my notepad just to show you guys. All
31:01 this is is a markdown file. We have the
31:03 name of the skill. We have the
31:04 description. So, here it says, "Use when
31:05 someone asks for morning coffee to prep
31:07 or plan their day." So, anytime in Cloud
31:09 Code I say, "Hey, can you help me plan
31:11 my day?" Claude Code will grab this
31:13 morning coffee skill, read it, and then
31:15 execute it. And it says, "Okay, here's
31:17 the context. Here's the recurring
31:19 meetings. Here is the meeting prep. Here
31:21 are different reference IDs. Here's
31:22 everything you need to know and the
31:24 order." So, step one, step two, step
31:26 three. Here's what you do whenever Nate
31:28 asks for a morning coffee skill. So,
31:30 that is all that is happening right
31:32 here. You can see it created this skill
31:33 called YouTube comment insights. And it
31:35 did this at the global level. What I
31:37 mean by that is this lives locally in
31:39 our directory that sits across any
31:41 codeex project ever. So, if I open up
31:43 this other project, I could use the
31:45 skill or we could put it locally in our
31:47 project, which would mean I could only
31:49 use this skill in this specific YouTube
31:52 analytics demo project. And all you have
31:54 to do to change that differentiation is
31:55 say, hey, instead of putting that
31:56 global, put that locally in this
31:58 project. Or instead of having that
31:59 locally in this project, make that
32:01 global. So now, if I do a slash and I do
32:03 YouTube comment insights, we have this
32:05 right here. YouTube comment insights
32:07 analyze comments into an Excel report,
32:10 which is the skill that we just built
32:11 together. So, that is awesome. Okay, so
32:14 before we move on to the next step of
32:15 this, I wanted to talk about pets real
32:17 quick just because I know you guys are
32:18 dying to understand how you can get
32:20 this. It's really simple. You go to your
32:21 settings and then you're going to go to
32:23 your appearance and scroll all the way
32:24 down and you can see right here we have
32:25 pets and we can choose between different
32:27 ones. So, right now I'm just using the
32:29 codeex pet, but I could choose Dewey or
32:31 CDI or bod or stacky. So, I'm just going
32:34 to go ahead and switch this to fireball
32:36 for fun. And you can see down here it
32:37 changes. And yes, it's kind of a fun
32:39 little UI thing, but remember if I'm not
32:41 inside of codeex and I'm in this
32:44 dashboard over here, we can still see
32:46 the pet and it will tell us when it's
32:47 working on things and when it's done
32:49 with things. So, it is a little bit
32:50 practical as well. All right, so now we
32:53 have a deliverable. We have an Excel
32:55 sheet and we're going to use that as the
32:56 backend that basically powers this next
32:58 section. So, I'm going to open up a new
33:00 project because we're kind of starting a
33:01 new goal, a new a new deliverable. So, I
33:04 want to open up a new chat. And this
33:06 will still be able to access everything
33:07 that's in this folder. So, I'm going to
33:10 go ahead and switch over to plan mode
33:11 here. Okay. So, here's the idea I have.
33:13 You have access to a file inside of this
33:15 project. And what I'm going to do is
33:17 actually reference the exact file. So,
33:19 I'm going to look for the YouTube
33:22 comment insights right here. And I'm
33:24 going to tag that file.
33:27 So, what I want you to do is create me a
33:29 dashboard. Spin this up on a local host.
33:31 And I want it to have really nice UI
33:33 elements and you know charts and
33:35 graphics and things. So visualizing my
33:37 data and I want to be able to see
33:38 different insights about my YouTube
33:40 comments. What I want you to do here is
33:43 I want you to use GBT image 2 and create
33:45 some really nice concepts of how this
33:47 dashboard should look and also if you
33:49 want to use it for maybe like a nice
33:51 logo in the top or any of the other UI
33:53 elements, utilize GBD image 2 to make
33:56 this thing just look really polished and
33:58 really aesthetic and really fun at the
34:00 same time. So, that is the idea I have.
34:02 I want you to help plan this out. Ask me
34:04 any questions you have about this and
34:06 then we'll go ahead and execute. And so,
34:08 also this default switch to extra high
34:10 again, I'm just going to go ahead and
34:10 switch that back to medium and then
34:12 shoot that off. And you can see down
34:13 here the pet has started to think and
34:16 it's talking a little bit. But the
34:18 reason why you want to be careful about
34:19 which models you're using, there's two
34:21 reasons. The first one is because
34:22 sometimes if you chuck extra high at a
34:24 task that's really simple, it like
34:26 overengineers it. And the second piece
34:28 is because each of these cost you
34:30 different amounts of your tokens or your
34:31 session. Obviously, low cost the least
34:33 and extra high costs the most. If you go
34:35 over here to your settings and you click
34:36 on rate limits remaining, it shows you
34:39 how much of your session you have left
34:40 and when it expires. So every 5 hours it
34:43 resets. And right now I have 97%
34:45 remaining and then every week it resets
34:48 and right now I have 99% remaining
34:50 there. And so it's really nice to be
34:51 able to keep tabs on that right here.
34:53 But that's why you want to be careful
34:55 about you know your context window
34:57 management and your planning and your
35:00 prompting and your model usage down
35:02 here. In general though I have seen that
35:04 my session is lasting way longer in
35:07 codecs than it is in cloud code. And a
35:10 big part of that is because chatbt 5.5
35:13 is really really efficient with tokens
35:16 with output tokens and input tokens. And
35:18 if you guys go watch that video that I
35:19 was talking about, you will see that
35:20 exact experiment and it's really
35:22 interesting to understand and look at,
35:24 but I've generally found that it's
35:26 really efficient with tokens. Now, we
35:27 have some feedback here. It says, "Which
35:29 visual direction should guide the GPT
35:31 image 2 concepts and the final dashboard
35:33 UI creator ops, playful studio, or
35:36 executive clean?" I'm just going to go
35:38 with the recommendation for this first
35:40 version. How should the dashboard get
35:41 its YouTube comment data? I'm going to
35:42 say to use the existing output, which
35:44 was the um Excel file. And then what
35:47 should the first screen prioritize most?
35:49 Reply and ideas. Analytics overview. I'm
35:52 actually going to go with analytics
35:53 overview for this one. And by the way,
35:55 if you're in the app and you want to get
35:56 rid of the pet really quick, you can
35:57 just do slash pet and then that will
35:59 just tuck it away. Okay, so it came up
36:01 with a plan pretty quickly. You can see
36:04 here that I can expand this and read
36:05 about it. So we've got like a summary.
36:07 We've got key changes. We've got all
36:09 this other stuff. And this is where we
36:10 would once again iterate with codeex
36:12 before we say, "Yep, go ahead and build
36:13 that for me, but I'm just going to go
36:14 ahead and say, "Yep, go ahead and build
36:16 that for me." You can see that it's
36:17 using the image generation for GPD Image
36:19 2, which is really, really solid. And
36:21 here is one of the kind of versions that
36:23 it came up with. And I've just found if
36:25 you're using codecs to build games or
36:26 websites or whatever it is, it just
36:28 helps to give it the ability to test
36:30 things out and generate some concepts
36:32 first before it actually designs the
36:34 rest of the site. You can see this is
36:35 the little logo that it came up with,
36:36 which is kind of cool. It's got like a
36:38 YouTube play button with some noise and
36:40 some comments coming in. And what it's
36:42 going to do is it's going to store all
36:43 of these assets locally somewhere in
36:46 this project so that later if we wanted
36:47 to spin up different versions of the
36:48 dashboard or a different landing page,
36:50 it would have access to all of these
36:51 assets already. And this is super cool,
36:53 guys. It has like this built-in
36:55 verification loop where it's going to
36:57 check its work before it actually gives
36:59 you an output, which is pretty cool. So,
37:01 it said the automated browser
37:02 verification passed. I'm now doing one
37:05 visual pass to see what else there might
37:07 be, what other issues. And it found
37:09 three issues when it did an actual
37:11 visual scan. So now it's fixing those.
37:12 It says, "Okay, those UI fixes are in.
37:14 I'm going to stop the server. I'm going
37:15 to rebuild. And then I'm going to verify
37:17 it one more time with screenshots." And
37:18 then it comes back and says, "Okay, the
37:20 second visual pass looked a lot better.
37:22 Here is your dashboard to actually go
37:23 ahead and test out." So let's just real
37:25 quick open this up right here locally in
37:28 the explorer. And now we have our
37:29 creator ops signal desk. So I'm going to
37:31 expand this a little bit. We see the
37:33 logo up here that it made. We see 83%
37:36 creator replies, 78 total likes. We can
37:38 switch between overview, replies, ideas,
37:41 questions, and the explorer. And this is
37:44 really cool. It looks like every single
37:45 comment has a link. So, if I click on
37:47 this, does it actually take us Okay, no,
37:49 it didn't actually sync up every single
37:51 comment to a link. But it's cool that it
37:52 showed us that because that gave us a
37:54 nice idea of like, okay, cool. I do
37:55 actually want a link. Now, you can
37:57 actually go ahead and work that into the
37:59 backend code where every single comment
38:01 should be associated with a link so that
38:02 I can open it up and respond to it. Or
38:04 we could take it one step further and
38:05 say, okay, what would it look like for
38:07 me to be able to respond right in this
38:09 dashboard and you actually fire off that
38:11 API call to YouTube to respond on the
38:14 right comment? Because that is 100%
38:16 doable. You guys have seen how I've
38:17 automated my comment section a little
38:19 bit. Anyways, let's just take a look at
38:20 the overview. We can see we have this
38:22 really nice chart. We have some AI
38:24 insights over here where I can click on
38:25 work reply Q and that goes over to the
38:28 replies. I could also click on more
38:29 content ideas and that takes us to the
38:31 ideas. We can look at top tool mentions,
38:33 reply priority, common themes. We can
38:35 also see the videos that are driving
38:37 comments and this would obviously grow
38:38 as we pull in more and more data. So
38:40 let's say at this point we like this
38:42 output and we want to actually deploy
38:44 this because what you'll notice is this
38:45 says that it's running on a local host.
38:47 So, if I copy this link right here and I
38:49 go to Chrome and I paste that in, it's
38:51 going to pull up exactly what we saw,
38:53 right? And it works and it looks fine.
38:55 But if I gave you this local host and
38:58 you copy and pasted that into your own
38:59 browser, you would get nothing because
39:02 this lives locally. It's being served on
39:04 a server from our codebase. So, what I'm
39:06 going to show you how to do now is how
39:08 do you actually get this from a local
39:10 host to the web? And what we're going to
39:12 do is we're going to use two tools.
39:14 We're going to use the first tool is
39:15 called GitHub and the second tool is
39:17 called Verscell. So the first thing
39:18 you're going to do is you're going to
39:19 type in GitHub and you're going to go
39:21 over here and you're going to make a
39:22 profile. It's completely free to set up,
39:24 pretty much completely free to maintain.
39:25 Once you've created your GitHub, all you
39:27 have to do is connect this to Codeex.
39:29 And we're going to have Codex help us
39:30 set up something called a repository,
39:32 which is basically just a collection of
39:35 your files and folders. Remember how if
39:37 we open up my file explorer and we look
39:38 inside of our YouTube comment or sorry
39:41 YouTube analytics demo folder, all of
39:43 these files and folders are important
39:45 and all we have to do is get these off
39:47 of our local machine or not off they'll
39:49 still live here locally but we're going
39:50 to get them into some sort of repository
39:52 where I can access them publicly or if
39:55 you wanted to share these with other
39:56 people they could access them as well.
39:57 So it's kind of like having a Word doc
39:59 locally, but instead you're putting it
40:00 on into Microsoft's cloud on one drive
40:03 or something like that so that other
40:04 people can use it and you could use it
40:05 from a different machine. So that's the
40:07 first step. So let's go back into
40:08 codeex. And what do you do when you
40:11 don't exactly know how something works?
40:13 You just ask. So this looks really good.
40:16 What I want to do is I want to sync this
40:18 codebase for this specific dashboard to
40:21 a GitHub repository. So help me get that
40:23 signed up. Help me get connected here to
40:25 GitHub. And then I want you to help me
40:27 create that actual repo and push
40:29 everything into that repo. And it even
40:32 mentioned that right here. Note this
40:33 folder is not currently a git repo. So
40:35 there is no diff and status to
40:36 summarize. So I'm going to shoot off
40:38 that message. And now it's going to help
40:39 us actually sync up to GitHub. Now there
40:41 is a difference between Git and GitHub.
40:44 Really the same thing of version control
40:46 and all this stuff, but Git is local and
40:48 GitHub is on the cloud. And what's
40:49 important here is that it says I'll
40:51 avoid committing secrets, especially
40:53 thev.local. And so that's why I told you
40:55 to always paste your keys in that enenv,
40:58 not into some random file called
40:59 secrets. It has to be in thev because
41:02 that dot in front of the word env
41:04 basically tells codeex or cloud code or
41:07 whatever you're using. It tells it to
41:08 exclude this from any, you know, public
41:11 commits. So at this point, I've already
41:13 set up the GitHub CLI. If you haven't,
41:14 it will just say, hey, do you want to
41:15 set this up? And you'll say yes. Very
41:17 simple. And then you'll authenticate,
41:19 which means it'll basically just pop up
41:20 a browser tab and you'll sign in with
41:22 the account you used to create GitHub.
41:24 And then boom, you will be connected to
41:27 GitHub in Codeex. And while this is
41:29 syncing up, let me show you guys the
41:30 next tool we're going to use. This one
41:31 is called Verscell. Now, Verscell has a
41:34 pretty generous free tier. You can see
41:35 I've got a few products on here. You're
41:37 going to be able to get working on
41:39 Versel for free just to get started. And
41:41 what Verscell does is it basically takes
41:43 that code. It takes, you know, this
41:45 exact website, which is on the back end.
41:47 All this is is code. And it takes this
41:50 and it serves it on a actual URL on an
41:53 actual domain that anyone can access.
41:55 And what's really cool about this is
41:57 Verscell and GitHub have a really nice
41:59 partnership. They actually like talk to
42:00 each other. So anytime I make a change
42:02 to our GitHub repo, Verscell
42:04 automatically picks that up and deploys
42:06 it. So I know there's three tools here,
42:08 Codeex, GitHub, and Verscell, but that
42:10 doesn't mean we have to manage three
42:12 places. All we have to do is manage
42:14 codeex. So it said that it's created a
42:16 private repo for us. If I open this up,
42:18 I don't want to open this up here. And
42:19 the reason why it doesn't show up here
42:20 is because this is a private repo. And
42:22 over here, I'm not signed into GitHub.
42:23 So, if I open this up in a browser where
42:25 I am signed in to GitHub, we can see
42:28 YouTube Analytics Demo. This is a
42:30 private repo. And what's in here is all
42:32 of the different folders and files that
42:34 we've actually created to spin up this
42:36 dashboard. And now, what's really cool
42:38 is if I go into Verscell and I go ahead
42:40 and click on add new project, I can
42:42 connect this to GitHub. And it already
42:44 is connected. So you would then just
42:45 sign in and you would connect your
42:46 Verscell to GitHub. And now you can
42:49 import any of your repos. So right here
42:51 you can see YouTube Analytics demo 1
42:53 minute ago. I'm going to click on
42:54 import. And that's literally that
42:56 simple. I'm going to click on deploy.
42:57 And then in maybe 30 seconds we will
42:59 have our YouTube analytics dashboard,
43:02 but we'll have it up on a live URL.
43:04 Awesome. So it says, "Congratulations,
43:05 you have deployed a new project." And
43:07 I'm going to go ahead and continue to
43:08 dashboard. And this gives us a
43:10 YouTube-analytics-demo.app
43:13 app domain. And if you wanted to switch
43:15 this off to your own domain, you
43:17 certainly could. You would just
43:18 basically have to move the DNS records
43:20 over here. But I'm going to click on
43:22 this so you guys can see that this is
43:23 the exact same thing we were just
43:24 looking at. Our replies, our ideas, our
43:27 questions, our explorer. Everything here
43:28 is the same except for now I could take
43:30 this URL and I could open it up on my
43:31 phone or I could open it up on my laptop
43:33 or you guys could open it up. And like I
43:35 said, what's cool about that is we
43:36 basically are able to then test in
43:38 codeex. We can iterate right here. We
43:40 can make changes. But just because we
43:41 make changes doesn't mean that it's
43:43 actually going to go live. So if I said,
43:44 "Hey, I want you to change the entire
43:46 background instead of blue to be red."
43:48 And it would say, "Okay, cool. Here's
43:49 the red background. Here's the local
43:51 host to test it out on." And if we like
43:53 it, we say, "Okay, push those changes to
43:55 our repo." And then as soon as we push
43:58 those changes, Versell would
43:59 automatically deploy those onto the real
44:00 URL. But if we said, you know what, I
44:02 don't like that. Just keep it as is.
44:04 Then our main production site never got
44:06 touched. And that's how we keep a clean
44:08 separation to test and to have something
44:10 in production. Okay, awesome. So, what
44:13 do we have now? We have a working
44:15 project and I'm opening up this folder
44:16 just to show you how much we've actually
44:18 done in the past, I don't know, 30 to 40
44:20 minutes together. And we've set up a
44:22 bunch of different stuff. Now, what do I
44:24 want to talk about next is automations.
44:26 So, right over here, you can see this
44:27 tab called automations. Automate work by
44:29 setting up scheduled chats. You can set
44:32 up things like a status report, release
44:34 prep. There's a bunch of different
44:35 things here that give you sort of some
44:36 inspiration. But what's really cool is
44:38 you can turn all of your skills or any
44:40 of your repeatable workflows into an
44:42 automation that Codex will run without
44:44 needing your oversight. So, I'm going to
44:46 open up a new chat in our YouTube
44:47 analytics demo project and I'm going to
44:49 go ahead and start chatting to Codex
44:51 here. Okay. So, we've just done a lot of
44:53 stuff together. We built a skill that
44:54 grabs YouTube comments from my YouTube
44:58 and it puts them into an Excel sheet
45:00 after it does some analysis and that's
45:02 coming out really nice. And then we
45:03 built a dashboard served on Verscell
45:06 that actually displays visually all of
45:08 those analytics and statistics from that
45:11 Excel sheet. Now, what I want to do is I
45:14 want to set up an automation that just
45:15 refreshes this every week. So, let's
45:17 just say every Sunday at 5:00 p.m. I
45:20 want you to run the YouTube comments
45:22 analytics skill. And then what I want
45:24 you to do with that is update that data
45:27 on that Excel sheet. you know, add more
45:28 rows, update the statistics, and that
45:31 will automatically sync to the GitHub
45:34 repo. So, after you make those changes,
45:36 you'll have to also reflect those
45:37 changes onto the actual codebase where
45:40 the dashboard lives. And then you'll
45:41 push those changes to GitHub so that
45:43 they automatically get reflected in
45:44 Verscell. So, a lot of moving pieces
45:46 here, but basically high level, you need
45:48 to get more comments, redo the analysis,
45:52 refresh the data into Excel, and that
45:54 way I'm always getting a weekly report
45:56 of what's going on with my YouTube
45:58 comment replies. Okay, so honestly felt
46:00 like a little bit of a messy prompt, but
46:02 Codeex should be able to do a good job
46:04 of asking us any questions it has and
46:06 making sure that it's able to actually
46:07 set up this automation for us the way we
46:09 want it. Now, something I want you guys
46:10 to think about here is the way that I
46:12 approach building AI automations and
46:14 skills and stuff like this is remember
46:17 when we talked about skills and I said
46:19 every time you use it, it's going to get
46:20 better because you can give feedback.
46:22 You should honestly think of these
46:23 automations in a similar way. You should
46:25 think about it like you're teaching a
46:26 kid to ride a bike. You're not going to
46:28 just chuck a kid on a bike and say,
46:29 "Okay, go have fun." You're going to
46:30 start off by holding the handles and
46:32 walking alongside the kid and saying,
46:34 "Okay, you're leaning too much to the
46:35 right. you need to lean more to the left
46:37 and you need to center your weight and
46:38 you need to make sure you're pedaling
46:39 and you need to do all this and slowly
46:41 over time you'll start getting more
46:42 trust. You'll take your hand off the
46:43 handlebars and you'll start to walk a
46:45 little bit farther behind and eventually
46:46 maybe you'll take off the training
46:47 wheels and stuff like that. The point
46:49 I'm making here is don't expect your
46:51 automations or skills to be perfect on
46:52 the first shot. That's just unrealistic.
46:54 You should be expecting them to get
46:56 better the more you use them because
46:57 every time you use them, you get more
46:59 data. But look how quickly it set that
47:00 up. It set up a weekly automation. It'll
47:02 run every Sunday at 5:00 p.m. and it
47:04 will just basically run inside of this
47:06 project and it will run the YouTube
47:08 comment insights workflow. It will
47:10 regenerate the Excel workbook. It will
47:11 preserve and merge comment rows. It will
47:14 refresh the workbook. It will verify the
47:16 dashboard and it will commit only those
47:18 changes to our repo and it will push it
47:20 to the right branch so that Verscell
47:22 actually deploys all of that. And what
47:24 you want to do is you'd come into the
47:25 automations. You can see that we have
47:27 this one which is Sunday at 5:00 p.m. We
47:29 can click into it to see the actual
47:31 prompt that it will submit to Codeex. We
47:33 could add some stuff here if we wanted,
47:34 but we don't want to. This will get
47:36 injected into a new Codex chat inside of
47:38 our project. So, just as a test, if I
47:40 click on run now, you can see that this
47:42 starts a new chat right here. This
47:44 injected that exact prompt that we
47:46 looked at with the automation, the ID,
47:48 the memory, the last run, and the actual
47:51 prompt. And then it starts up this
47:53 little progress sheet, which is kind of
47:54 like a to-do list. and it's going to go
47:56 down in this order. And we have the full
47:58 codeex agentic loop going on here. So if
48:00 you're used to cloud code, this is
48:02 basically the same thing as running a
48:03 local scheduled routine in cloud code or
48:05 in cloud co-work. Now the one thing
48:07 you're going to have to think about here
48:08 is because this is kind of a local cron.
48:11 If you close out of the codeex app or if
48:12 you turn off your PC or your laptop,
48:15 this will stop running. In order for
48:17 this to be truly 24/7 all the time, you
48:20 would have to get this sort of codeex
48:22 routine on the cloud somehow. And that's
48:24 what cloud code just added with their
48:25 cloud routines. Okay, so while this
48:27 automation is running and you know we're
48:29 going to make sure that it's working as
48:30 expected and if not we'll correct it a
48:32 little bit. But I realized that I wanted
48:33 to show you guys a little bit more of
48:35 that kind of computer use and browser
48:37 use functionality. So if I go back into
48:39 the actual um dashboard where it built
48:42 it, which I believe was this one. Yep,
48:45 it was this one. What I'm gonna say here
48:47 is
48:49 before we kind of keep making changes, I
48:50 want you to test the UI here. I want you
48:53 to open up this um dashboard and I want
48:56 you to open it up in this app so I can
48:57 watch you do it. I want you to use your
49:00 browser use skill and click around. I
49:02 want you to click on the buttons. I want
49:03 you to try to break this thing. I want
49:05 you to stress test it and QA it and let
49:07 me know what you find, what bugs you
49:09 find, and what we might need to improve.
49:11 And so all I did here is I explained in
49:13 natural language what I wanted and we're
49:14 going to be able to see it use the right
49:16 skills. So browser use is great for a
49:18 lot of things. It's great for um QAing
49:21 like you just saw here because it can
49:22 find bugs and click around on things
49:23 that typically it wouldn't be able to
49:25 do. It's also really great for certain
49:27 automations. So maybe you don't have an
49:29 API for something and you want to be
49:30 able to go in and download reports or go
49:32 in and change some settings. I've done a
49:34 few of those automations on my channel
49:35 as well. And browser use can be really
49:37 really good for that. And you can even
49:38 use it to just search the web because
49:40 you can use browser use in a way where
49:42 it has like cookies and it's able to
49:44 remember your login info. So, you could
49:47 log into something like school where
49:48 you'd have to get past the
49:49 authentication and then the browser can
49:51 automate and control things. But
49:52 anyways, what you see right here is the
49:54 inapp browser open and this little mouse
49:57 right here, which kind of looks like the
49:58 Chatbt Atlas logo, is going to click
50:01 around. You guys already saw it switch
50:02 from overview to replies. You can see
50:04 it's moving around even more now. And as
50:07 it's clicking these different links and
50:09 moving around, it's going to start to
50:11 document what might be wrong with this
50:13 app. And then we can obviously say,
50:15 "Okay, cool. go make all of those
50:16 changes for us. Right here, it found the
50:18 thing with the YouTube link. So, it said
50:20 they have the correct URLs, but the
50:22 inapp browser did not visibly open the
50:24 new tab after clicking. So, that's one
50:26 of the things that we actually did
50:27 notice ourselves. Now, browser use is
50:29 pretty I don't know, it can feel kind of
50:31 subjective when you're looking at it. I
50:32 mean, this is pretty cool to watch it
50:34 move live, but that also happens in
50:36 cloud code when I use like the Playright
50:37 CLI or something. But from my testing,
50:41 Codeex browser use has been much more
50:44 smooth and much more intelligent than
50:46 any other sort of browser use
50:47 automations that I've built or used
50:49 before. So that is something that is
50:51 really cool about using codecs in um
50:53 this app here is that the browser use is
50:55 really good. Now you could obviously use
50:56 it still from a CLI or whatever, but it
50:59 is pretty good. And like I said, there's
51:00 just so many really cool use cases with
51:02 browser automation. If you want to check
51:04 out a few more, even though this video
51:05 was cloud code, you would set it up the
51:07 exact same way in Codeex. I'll tag a
51:08 video right up here. I mean, I love
51:10 this. It's literally going through the
51:12 filters. You guys saw it had something
51:13 else up here. It's changing these
51:15 checkboxes. It's changing the stuff. It
51:17 did another search here. And it's really
51:19 going to actually stress test this app
51:20 to make sure that it didn't miss
51:22 anything. And what else is really cool
51:23 is you can build in this sort of QA
51:27 check into skills or into the knowledge.
51:29 So next time when you're building
51:30 another dashboard or next time you're
51:32 building a game before it ever comes
51:33 back to you, it already does a few
51:35 passes visually and you know from like a
51:37 code perspective, but you can make sure
51:39 that hey, don't ever ever ever come back
51:40 to me until you've stress tested with
51:43 your own browser use. And that's how you
51:44 can really just make this stuff smarter
51:45 and smarter every day. All right, so it
51:47 decided that it's done testing. Now you
51:50 can see that we have a bunch of things
51:51 that passed, but it found a ton of
51:53 improvements. It ended up finding six
51:55 things. The external links for YouTube
51:57 aren't really working. The empty
51:59 explorer state is too bare. Search is
52:01 too literal. Active tab state is mostly
52:03 visual. And there's some other things
52:04 that are just coming through awkward and
52:06 little change that we need to make to
52:07 the UI. So what's really cool now is I
52:09 could say, okay, take all of these six
52:11 changes and build a plan around exactly
52:13 how you're going to solve those. And
52:15 then once it comes back with its proper
52:16 plan, we would go ahead and execute. But
52:18 now that I showed you guys that, let's
52:19 check back in on our actual automation
52:21 that's running. You can see that it is
52:23 still going through the checks. It's
52:24 been about 10 minutes. So, I will just
52:26 check back in with you guys once this
52:27 has been fully committed and we'll see
52:29 what changes we have on our actual live
52:31 dashboard. Oh my goodness. So, this was
52:33 pushing like 20 minutes. So, I stopped
52:35 it and said, "Why is it taking so long?"
52:36 And it's because it couldn't overwrite a
52:38 file that I had open. So, don't do that.
52:42 But now, we're going to go ahead and
52:43 just keep this going. But honestly,
52:45 there is a lesson there, which is
52:46 sometimes it is nice to be able to watch
52:48 it, especially before, like I said,
52:49 before we know that this automation is
52:51 really refined because if it is going
52:53 down the wrong path or it's hitting some
52:55 sort of roadblock that you, the human
52:56 should be able to just be able to solve
52:57 in like a quick 20 seconds, then stop it
53:01 and ask a question or stop it and steer
53:03 it in the right way because it's going
53:05 to help not only save you time, but it's
53:06 also going to save you session limit.
53:07 Because if it was just burning tokens,
53:08 trying things when the fix was for me to
53:11 just close out of the app, then you
53:12 know, you'd rather have stopped that
53:14 earlier before it's going down multiple
53:16 wrong paths. And another thing that I
53:17 just noticed, which is really important
53:20 to call out here, is that when you look
53:21 at the automation, this automation is
53:23 set up by default to run with GPT 5.2,
53:26 which obviously we don't want. So,
53:28 you're going to want to make sure that
53:29 your model is set up correctly, that the
53:30 reasoning is set up correctly, and all
53:32 of this other stuff is set up correctly,
53:34 because that is also a reason why that
53:36 run was probably taking so long. So, I
53:38 just went ahead and re-triggered a new
53:39 run using GBT 5.5, and I decided to try
53:42 this one out using high. Now, you also
53:44 might be curious about the speed thing,
53:46 the difference between standard and
53:48 fast. And honestly, I never really ever
53:50 touch fast. I'm never working in
53:52 something that's super time-sensitive
53:53 where I need to go fast because that
53:55 also eats up your usage a lot quicker.
53:57 But this is much more like it. We can
53:59 actually see it thinking and now we're
54:01 going to be able to get this back much
54:02 quicker. Okay, so finally that has
54:04 finished up. You can see that it was
54:06 able to make changes to that Excel sheet
54:09 and it says that it analyzed 28
54:11 comments. Now, because we just did this,
54:13 you know, earlier today, I'm curious if
54:15 it actually analyzed 200 of the same or
54:17 if it knew not to duplicate. And that's
54:18 something that we'll want to take a look
54:19 at. But let's actually head over to my
54:21 GitHub real quick. This is the repo that
54:23 we just set up, right? And if I go ahead
54:24 and give this a refresh, we should now
54:26 see that we have two commits. So in the
54:28 second commit, this shows we refreshed
54:30 the comments. So every single time that
54:32 you make a change to this repo, it'll
54:34 show that here. So you can check at the
54:35 version control and you can see what's
54:37 going on. But what that means is because
54:39 our GitHub repo here got a new commit.
54:42 If we go to Verscell now and we look at
54:44 this actual project, if I go to
54:46 deployments, we should be able to see
54:48 that this just picked up a new change.
54:50 One minute ago, it picked up this new
54:52 deployment. So now if we go to the
54:54 dashboard and I give this a refresh,
54:56 this has new data. So this used to say
54:58 200 videos or sorry 200 comments and now
55:00 it says 28. So that is just proof that
55:02 we were able to actually get some fresh
55:05 insights. Now what's really nice is that
55:07 it looks like it just basically added on
55:09 eight new ones. It didn't like add on
55:12 200 and then 200 more and then eight
55:14 more because it realized that they were
55:16 duplicated. And if we actually go and
55:17 open up the actual source of truth, if I
55:19 go into our repo, I go to outputs, I go
55:22 to YouTube comment insights and I click
55:24 on the Excel sheet that we accidentally
55:26 had open earlier, we see that the
55:28 dashboard is exactly the same except for
55:30 now we've analyzed eight extra comments
55:32 instead of the original 200. But I
55:34 wanted to show you guys what happened
55:36 inside of this run. So, as you guys
55:37 know, we ran into that issue where I had
55:39 the Excel sheet open, right? That was
55:41 the first mistake. The second mistake
55:43 was that this was running with 5.2. So,
55:45 we reset the automation and now it's
55:46 running with 5.5 high. But then what
55:48 happened is this was running for quite a
55:50 while again. So, I stopped it and said,
55:51 "Hey, you've been running for a long
55:52 time. Why is it taking so long? This is
55:54 a very simple task." So, basically, I
55:56 knew that something went wrong here
55:58 because when we built this dashboard
55:59 from scratch, it only took about 20
56:01 minutes, but updating it took 40 minutes
56:04 or probably even longer. So, I knew
56:06 something was going wrong. So, I stopped
56:07 it and I wanted to dig into it a little
56:09 bit better and it and I was able to find
56:10 out that it was stuck on some process.
56:12 So, I said, "What do you need from me in
56:14 order to make sure that this doesn't
56:15 happen again?" And that you're able to
56:17 just basically actually give us this
56:18 deliverable that we're looking for. And
56:20 it had me make some confirmations. And
56:21 then as soon as I did that, it took
56:23 about 7 minutes. And then it was able to
56:24 make all of those changes. So, the
56:26 reason why I wanted to show you this is
56:27 because once again, this stuff is not
56:28 magic. You don't deploy something and
56:30 you just expect it to work perfectly.
56:32 But what's really cool is I could say,
56:34 "Awesome. So everything worked as
56:36 expected on the dashboard. The analytics
56:38 have been updated. Now I want you to dig
56:40 into what you just did with this
56:41 automation and help me understand, are
56:43 there any opportunities to streamline
56:45 this automation? Are there any
56:46 opportunities to make this better and
56:48 more robust? Do you have any
56:50 recommendations here?" And I'll go ahead
56:51 and fire that off and see if there's any
56:53 way that we can make this automation
56:55 better. It's really important because
56:56 there's this concept called dark code,
56:58 which basically means you're writing a
56:59 bunch of code when you do your vibe
57:01 coding, but you don't actually know
57:02 what's going on in the Python script or
57:05 whatever language you're using there.
57:07 And not to say that you need to
57:08 understand every line of your code, but
57:10 you need to understand fundamentally
57:11 what it's doing and why and if there are
57:14 any opportunities to get rid of some
57:17 code or if you have to, you know, bake
57:18 in some more guardrails in a certain
57:20 place or anything like that. So, it's
57:22 basically looking at this to see if we
57:23 can make it faster or if we can make it
57:25 safer. Now, ultimately, as long as it's
57:26 working, I don't really care how fast it
57:28 is because if this is running once a
57:30 week, I don't care if it happens at 6
57:32 p.m. or 6:30 p.m. or even 7:00 p.m. as
57:34 long as it's actually working. But
57:35 sometimes speed is a big deal in your
57:38 automations. So, it comes back and says,
57:39 "Yes, this works, but it is still too
57:41 agent orchestrated and too heavy for a
57:43 weekly data refresh." So, we could add
57:45 one repo script to basically run the
57:47 builder. we could stop running the full
57:49 next build for these sorts of updates.
57:51 And it's giving us all these different
57:52 insights that we could then go ahead and
57:54 push to make our automation and our
57:56 system better here. So that's how you
57:58 can kind of keep iterating upon it. Even
58:00 if you yourself don't really know
58:01 exactly how you would make this better.
58:04 You can use the AI to figure out and
58:06 brainstorm. Okay. So what you guys saw
58:08 here is we created this project from
58:10 scratch, right? It was our YouTube
58:11 analytics demo. We connected to YouTube.
58:13 We set up a skill. We set up an
58:15 automation. We set up a dashboard. we
58:16 used some browser use and now we have an
58:19 actual system where every week it will
58:21 pull in more comments. It will update
58:23 our data, our Excel sheet and then it
58:25 pushes all of those changes to our
58:26 actual live dashboard completely
58:28 automatically. So, I hope you guys
58:29 enjoyed seeing that flow from basically
58:31 idea setting up a project all the way to
58:33 the end. And just remember what's really
58:35 important is that this entire project,
58:38 everything that we just did is literally
58:40 just a folder on your computer. And what
58:41 that means is you can customize this
58:43 folder to be used by OpenClaw or Cloud
58:45 Code or whatever you want. Any agent can
58:47 work inside of this directory now. And
58:49 if I wanted to explicitly do this inside
58:51 of Codeex, well, I could go ahead and
58:53 click on view. I could open up the
58:55 terminal. And now, because we're in this
58:57 directory, I could call on Claude. And
59:00 so right here, I could be working with
59:01 Claude code inside of this actual
59:04 repository. So maybe right here, I'm
59:05 using Claude to help brainstorm. And it
59:07 creates me a brainstorming file inside
59:09 of this project somewhere. And then what
59:10 I could do is I could just go back up
59:12 here to codeex and I could go ahead and
59:14 tag that file. So say, "Hey, here is a
59:17 planning file, a brainstorm file that I
59:19 just generated with Claude. I want you
59:21 to be the one who actually takes this
59:22 file and executes it for me." So you can
59:25 really start to play with these together
59:26 and mix and match just like I've shown
59:28 you before where we would build
59:29 something with Claude code and then we
59:30 would actually loop in codecs to do the
59:32 review on it and to find like security
59:34 bugs or any just like codebased
59:37 functionality bugs inside of it. So in
59:39 my mind, it's always about which tool is
59:40 best for this specific use case, not
59:43 which tool is best. All right, so I
59:45 really hope that you guys enjoyed that.
59:47 You should have a really good
59:47 understanding of the interface of
59:49 Codeex. You should have a really good
59:50 understanding of how you come in here,
59:51 you connect to other tools, you use
59:53 plugins, you start building skills, and
59:55 really the next unlock is start building
59:57 more and more skills. So try to think
59:59 about what are you doing on a daily
1:00:00 basis? What are you doing on a weekly
1:00:02 basis? And write down some of those
1:00:03 things that are boring and repetitive
1:00:05 and that you just wish happened when you
1:00:07 slept. and then start to bring those
1:00:08 into codecs and start to just
1:00:10 brainstorm. And as you're going through
1:00:11 this process, you're going to want to
1:00:12 set up kind of your own AI operating
1:00:14 system. So, I'm going to tag a video
1:00:16 right up here that you guys should 100%
1:00:17 go watch next. This one was kind of
1:00:19 based on cloud code, but remember,
1:00:21 everything is just files and folders.
1:00:23 So, if you follow the steps in this
1:00:24 video, you will be able to replicate
1:00:26 this in codeex absolutely no problem.
1:00:28 And what's really cool is every project
1:00:30 that I've moved over from cloud code to
1:00:32 codeex, I've said, "Hey, this is
1:00:33 something I built with cloud code. go
1:00:35 ahead and analyze it and help me figure
1:00:37 out what files you need to create in
1:00:39 order to make this compatible with
1:00:40 codec. And all it's going to do is maybe
1:00:42 change a few names and maybe change the
1:00:44 claw.md to the agents.mmd. And it's
1:00:46 really, really simple. It'll take like
1:00:48 30 seconds and then you have your
1:00:49 project in codeex. So anyways, I'll see
1:00:51 you guys over there at that AI operating
1:00:53 system video. Please give it a like if
1:00:55 you enjoyed. It helps me out a ton. And
1:00:56 as always, I appreciate you guys making
1:00:57 it to the end of the


---

## Source: new-codex-design-workflow-makes-codex-better-than-most-designers.txt

- Original path: `addintional info to add\new-codex-design-workflow-makes-codex-better-than-most-designers.txt`
- Size: `11626` bytes
- SHA256: `AAB53AA872EDFCF28C207238911735760D6125C7CC9E6ABCBB5E9D1C4C62F409`

---

New Codex Design Workflow Makes Codex Better Than Most Designers

0:00 Hey guys, so I recently discovered or
0:02 unlocked this design hack or design
0:05 workflow when building out projects
0:07 inside of Codex. Now, I wanted to build
0:09 a simple landing page for some fictional
0:12 AI startup that helps patients with
0:14 sleep apnea. And this was the original
0:16 design that I got, something very very
0:18 simple. But then after this whole
0:20 workflow, I basically got this, right?
0:23 Custom logo, custom illustrations, nice
0:26 neat design. We have different sections.
0:28 We have these like appear animations.
0:31 Everything here basically designed by an
0:32 AI agent with the combination of
0:34 different skills and MCPs. And this
0:36 doesn't just work for landing pages.
0:38 Obviously, you can get some type of
0:41 product that you've been working on,
0:42 like for example, this is an electron
0:44 app that I've built a couple weeks ago
0:46 to help me annotate different things in
0:49 my YouTube videos or to blur out,
0:51 you know, different API keys or stuff
0:53 like that. We can then get this AI agent
0:56 to make smart design decisions for us
0:58 and update these designs to our product.
1:00 And now, in order to get started with
1:01 this, all you have to do is open up a
1:03 new chat with a new project inside of
1:05 Codex. Now, this chat can contain an
1:07 existing project or you can start from
1:09 scratch. It's up to you. But the first
1:11 thing that you want to do is you want to
1:12 open up this previewer, this browser
1:15 previewer over here, and you want to
1:17 search for magicpath.ai.
1:19 And then you want to create a new
1:20 design. And essentially, what this is is
1:22 that it's like a previewer of whatever
1:25 you're building here. You get this new
1:26 infinite canvas view. It's kind of like
1:28 a Figma for Codex. And what you want to
1:31 do is you want to connect your agent and
1:32 you want to copy this command. And then
1:34 you just want to write install this
1:36 skill. And then once you do that, you
1:38 want to restart Codex. Then you just
1:40 want to say authenticate my magic path
1:41 account. And now, once you're logged in,
1:43 you can see over here project eight. I
1:44 can open up this panel. It says project
1:46 eight. I can then write something like
1:48 in a new component in magic path, design
1:50 me a landing page of a SaaS business
1:52 that provides AI solutions for sleep
1:54 apnea patients. And as a initial result,
1:57 we get something like this.
1:58 We have our logo that was basically
2:00 generated, you know,
2:02 classic
2:03 um SVG logo with some type of random
2:06 name. We have our navbar, we have our
2:08 hero section. In the hero section we
2:10 have this like graphic over here on the
2:12 right side that kind of describes what
2:14 the app is is doing. So, we can see
2:18 patient overview, 12 updates today, AI
2:20 summary, patient app. But obviously
2:22 there are a few things that, you know,
2:25 need improvement, I would say. And if we
2:26 scroll down in in this component we can
2:28 see that we have only two sections
2:31 really. We have this like hero section
2:32 over here and we have this how it works
2:34 section, but we don't really have a
2:35 footer, we don't really have an
2:37 an FAQ section or an about us section.
2:41 And then what I wrote was, "Do the same
2:42 thing in a new component, but please
2:44 generate all the images first and then
2:46 make sure to add these images into the
2:48 landing page." And what's really
2:49 impressive about Codex is that it can
2:51 use GPT image 1.5. It doesn't use the
2:53 new one, but it uses this one, which is
2:55 also pretty good. So, you don't have to
2:56 like integrate your own API key. If you
2:58 If you did want it to use GPT image 2,
3:01 you could do that, but you can just ask
3:02 it to generate an image and it'll use
3:04 this model, which is still pretty good.
3:06 And anyways, we get this. We have now a
3:08 patient with the sleep apnea mask. We
3:10 have like a preview image of how that of
3:12 how the interface could look like. We
3:14 have this image, "Escalate the right
3:16 moments." Seems to be like some type of
3:18 nurse or doctor holding an iPad with the
3:21 interface. These were the three images
3:22 in total. And eventually my plan was to
3:24 not use these images because they look
3:26 too generic, but I just wanted to test
3:28 out the capability to see
3:30 what Codex would do if I just tell it to
3:32 generate images for a landing page based
3:34 on the context that it already knows
3:35 about this landing page that I
3:36 generated. Anyways, I've been exploring
3:38 skills.sh
3:40 for a while now. They have this really
3:42 cool find skills skill and you can
3:45 basically install this skill in to Codex
3:47 and say like, "Hey, what are some other
3:49 skills that that can use to improve our
3:51 design to maybe polish our design a bit.
3:53 And I stumbled upon this skill called
3:55 Make Interfaces Feel Better by Jacob
3:58 Krehel. And the skill is based on these
4:00 core principles. So, we have concentric
4:02 border radius, optical over geometric
4:04 alignment, shadows over borders. There's
4:06 about 16 of these core principles. And
4:09 it's very, very well documented skill.
4:11 I'll link this down below for you guys
4:12 to check out. But, I eventually
4:14 installed this skill inside of Codex and
4:17 I said, "Hey, let's use Make Interfaces
4:19 Feel Better skill to improve our overall
4:22 design." And this is the result that we
4:24 get. And all in all, we get a few more
4:26 sections added to our site, basically
4:28 following the core principles that Jacob
4:30 added to his skill. And if we scroll
4:32 from the bottom up, as you can see, the
4:34 the design is looking much nicer in
4:36 terms of the layout. And then I asked
4:37 Codex to explore some different 3D icons
4:41 that we can use throughout our site,
4:42 specifically for the logo and for
4:45 different icons that we can use for
4:46 different sections. And this is like a
4:48 quick little icon set that we got. And
4:50 this is literally the prompt that I gave
4:51 it. It's nothing special. I said, "I
4:53 need you to generate an image with
4:54 transparent background for the logo, and
4:56 I would like to add custom icons in 3D
4:59 style to certain sections. These icons
5:01 must also have no background,
5:03 obviously." And this was the initial
5:04 design that we got. So, we have our new
5:07 icon here in the logo, which, to be
5:09 honest, looks really nice
5:11 if we zoom in. And then scrolling down,
5:13 we get a 3D icon here. We get a few over
5:16 here, which I would say some of these
5:19 look good, some of these don't. I think
5:21 over here would be too much, but for
5:23 these little cards, it looks nice. Maybe
5:24 we can replace it with the numbers. And
5:26 up here as well, we can take these away.
5:29 And also, this color doesn't really
5:30 match with the screen. And so, this was
5:32 literally the next prompt that I gave
5:34 it, right? Duplicate and make the colors
5:36 of the site match the colors of the
5:38 icons, but please no gradients. And I
5:40 said no gradients because, obviously, we
5:42 have gradients here in the logo. And
5:45 then after that, this is what we started
5:47 getting. So, now the color is starting
5:49 to match the whole style of the site. We
5:51 still have these icons, these extra
5:53 icons everywhere, but those are things
5:55 that we can easily just take out. And in
5:56 order to do that, I can literally just
5:58 go and select the component and then
6:00 click on this little icon over here
6:03 called visual edits, and then just
6:04 select this, delete this,
6:06 go down here, do the same thing with
6:08 this, delete element. We don't like the
6:10 number, take it away, go over here,
6:12 delete element. And then eventually, it
6:14 finally asking it to replace those
6:16 images, those stock images with with
6:18 more
6:20 types of
6:21 3D icon images, but a little bit more
6:23 sophisticated in terms of how the
6:25 technology works. And that's when we
6:27 started getting designs like this. So,
6:29 we have, for example, that little new
6:31 illustration over here in the hero
6:33 section. We can scroll down, and now
6:35 instead of that image on the right, we
6:37 have this image of the interface on the
6:38 on the right. And I can just minimize
6:40 this the width of the screen over here.
6:42 And as you can see, everything is like
6:44 mobile responsive as well. If we, for
6:46 example, thought think that this is a
6:48 little bit too, you know, small, we can
6:50 adjust the width of this specific image,
6:54 and boom, now it's much larger. And then
6:56 another thing that I would wanted to
6:57 look at here was, how can we use like
7:00 the Mobbin MCP, which by the way, I made
7:02 a great video on this, all links is down
7:04 below, but how can we use this Mobbin
7:06 MCP to
7:08 look for other sites and kind of create
7:12 like other hero sections, maybe
7:14 different variants of other hero
7:16 sections based on other sites, and
7:17 combine it with our design style. So,
7:19 again, with the installation, it's
7:21 pretty easy, just click on Codex and
7:23 copy this. And then you want to
7:25 authorize by copying and pasting this
7:27 into Codex as well. And so, I wrote
7:28 something like, "Can you search for
7:29 three inspos for hero section using
7:31 Mobbin MCP?" We get Mixpanel, we get
7:34 visitors, we get Wrangle. And these are
7:36 the different examples of these hero
7:37 sections. And then for the final step, I
7:39 basically he "What you need to do is for
7:41 the following components, the these
7:43 three, just read us redesign them to
7:46 make them match the colors and context
7:47 in terms of copy and assets of the sleep
7:49 apnea design, and then run the skill
7:52 again, make interfaces feel better just
7:54 to kind of polish our design." And then,
7:56 as you can see over here on the right
7:57 side, this is like the equivalent of
7:59 this um first design
8:01 matching our sleep apnea AI tools
8:04 design. This one, the Mixpanel one,
8:06 which is I guess is my favorite one
8:08 because of this nice little gradient in
8:09 the background. Also, as you can see,
8:11 analytics that drive decisions. Here
8:12 it's analytics that keep sleep therapy
8:14 moving. And then we have this one on the
8:15 right side, which is basically, again,
8:18 same same type of design direction, but
8:20 now with the context and the colors of
8:23 our sleep apnea AI. But you must be
8:26 thinking like, "Hey, this is right now
8:27 in Magicpath. How do I get them to to
8:29 live on my own machine? Or how do I get
8:31 how do I connect this to my own custom
8:32 domain? How can I launch this?" So, with
8:34 the same Magicpath skill, you can
8:36 basically just copy the or give this a
8:38 unique name, I would say.
8:40 We can call this one like final.
8:43 And then select this, copy this, and
8:45 then we can say something like push this
8:48 from Magicpath to a custom domain. Let's
8:52 just say like a preview domain using
8:55 Vercel. And then, as you can see, we
8:57 have our new preview link. I can click
8:59 on this, and we can scroll down, and we
9:01 have our design. But anyways, guys, let
9:03 me know what you think about this
9:04 workflow. Let me know if you have any
9:06 comments or questions. And like always,
9:07 guys, thank you all so much for
9:08 watching. Hope to see you next time.
9:10 Goodbye.


---

## Source: openai-codex-full-course-4-hours-build-ship.txt

- Original path: `addintional info to add\openai-codex-full-course-4-hours-build-ship.txt`
- Size: `254394` bytes
- SHA256: `EE8200A8244D11E0362660F3BAB29DA51A57EAA3A2005DEE91E42B62FAD1A8A0`

---

OpenAI Codex Full Course 4 Hours: Build & Ship

0:00 Welcome to the definitive course on open
0:02 AI codecs. I use codecs every single day
0:06 as the director of AI and ML at Paylice,
0:09 a VC funded fintech startup. I also
0:12 teach over 1,700 people in my school
0:15 server, the AI MBA, how to use Agentic
0:17 coding tools like Codeex and Claude Code
0:20 for both personal, professional, and
0:22 also academic research applications.
0:25 Now, I also recently made a 3hour full
0:29 course on Claude Code for beginners. But
0:31 the reality is that for the last few
0:33 months, I've been using codecs for 80 to
0:37 90% of my work. And my recommendation to
0:40 anybody new to the agentic coding space
0:43 is that regardless of your budget,
0:45 whether it's $20, $100, or $200, is that
0:49 your first subscription should be to
0:52 Chad GBT, which gets you access to
0:54 codeex. As I discussed in a recent
0:56 video, there are many reasons for this,
0:59 and I'll also discuss them in this
1:01 course. But in a nutshell, Codeex is the
1:04 best model. It has the best usage limits
1:07 and it's got the best interface for
1:09 agentic coding. The codeex desktop app.
1:12 In this course, you're not going to have
1:13 to have any technical background. Maybe
1:16 you've played around with chatbt or
1:18 clawed in a web interface or you skimmed
1:21 through my clawed code course. Either
1:24 way, I'm going to take you step by step
1:26 all the way from not knowing anything
1:29 about agentic coding to being able to
1:32 deploy a full-blown web app with codecs.
1:35 Additionally, this isn't one of those
1:37 courses where I'm going to fill you up
1:39 with hours of theory before we get to
1:41 anything practical. I'm going to give
1:43 you practical applications of codecs
1:45 that you can take away and which will
1:47 add value to your life within the first
1:49 10 minutes. And that's going to be a
1:51 common pattern in the rest of the
1:52 course. I'm always going to take little
1:55 bits of theory and get as quickly to
1:57 practice as I can. Now, one more thing I
2:00 want to flag before we get started. This
2:03 course is specifically concentrated on
2:05 the codeex desktop application. Codeex
2:08 actually ships as several different
2:11 interfaces. There's the command line
2:13 interface that you have to use in the
2:15 terminal. There's an extension inside VS
2:18 Code. And then there's the desktop
2:20 application. I'm going to be focusing on
2:22 the desktop application because it's the
2:24 best interface for agentic coding, but
2:26 nobody has put out materials that teach
2:29 people how to use it yet. In the desktop
2:31 app, you can easily run multiple codeex
2:34 agents working on different aspects of
2:36 your project in parallel. Set up
2:38 automations which will run on the
2:40 background on a timer and review all of
2:42 it in one place. Let me first give you
2:44 guys a brief overview of everything that
2:47 we'll be covering in this course. We'll
2:48 start by talking about what codec
2:50 actually is. It may be unfamiliar to
2:52 some of you, how much it costs, how to
2:55 install it. I'll give you a tour of this
2:57 desktop app interface which may be new
2:59 to some of you who may be used to a
3:01 terminal interface and then we'll start
3:03 getting directly into some of the
3:04 fundamentals of agentic coding such as
3:07 context windows and compaction and why
3:09 you should typically be using voice for
3:12 most of your work with codecs. Next,
3:14 I'll cover some of the basics of agentic
3:16 workflows past simply using it in a sort
3:19 of chat GBT sort of way. We'll talk
3:21 about permissions, guardrails, and just
3:23 the basics of what you need to know
3:25 about terminals. I'll talk about this
3:27 agents.md file, which gives codec
3:30 context about what to do in a project
3:33 when it's starting up. And then we'll
3:34 start getting into what I call the five
3:36 practical primitives of agentic coding.
3:39 Those are command line interfaces,
3:41 skills, mcps, plugins, and sub aents.
3:44 We'll talk about plugins and the plug-in
3:47 system in codecs. We'll talk about a
3:49 particular plugin called computer use
3:51 which allows codecs to control every
3:54 single application on your computer. And
3:56 then we'll do a deep dive into skills
3:58 which are a fundamental concept in
4:00 agentic coding to give agentic coding
4:03 tools the ability to do repeated
4:05 workflows with all sorts of external
4:08 systems. I'll compare this with an
4:10 alternative way of getting access to
4:12 external systems called MCPs and then
4:15 we'll go into sub agents which allow you
4:17 to parallelize work allowing you to do
4:20 things a lot more completely and
4:22 quickly. We'll talk about when to use
4:24 which of these different tools and then
4:26 from there I'll start bridging into the
4:29 last third of the course where we talk
4:31 about how to go from doing automations
4:34 on your computer to building full-blown
4:36 web applications. And the first
4:38 prerequisite to understanding this is to
4:40 understand the version control system
4:43 git and how it interacts with GitHub.
4:45 Then I'll take you through a sort of
4:48 product agentic coding course where
4:51 we'll go and learn how to use agentic
4:55 coding tools to think about what you
4:57 want to build from a product
4:59 perspective. And there's particular
5:01 skills that I'll introduce to help
5:03 automate this. Next we'll go into the
5:05 idea of cloud delegation running agentic
5:07 coding tasks in the cloud instead of
5:09 your local computer. After that we'll
5:12 get into GitHub issues which I find to
5:14 be a very useful basic project
5:16 management tool. And once we have GitHub
5:19 issues in place automations become very
5:21 useful. This is a concept in codeex to
5:23 have certain sort of workflows that run
5:26 on a timer. And so you could imagine for
5:28 example checking in every single few
5:31 hours what sorts of new bugs arise and
5:34 perhaps if they're simple automatically
5:37 starting up on solutions to those bugs.
5:39 That's the kind of thing that you'll be
5:40 able to build after going through this
5:42 automation section. Then for the
5:44 application that we're building I'm
5:46 going to introduce the general stack
5:48 that we're using of Nex.js JS the
5:50 front-end framework, Convex the backend
5:53 framework, and Versell the place where
5:55 you host your applications. After
5:57 introducing the stack, I'm going to
5:58 introduce the concept of work trees,
6:00 which are a little similar to sub aents,
6:02 but instead allow you to parallelize
6:05 work across an entire repo rather than
6:08 just within a repo. And this is very
6:10 powerful to be able to scale up the rate
6:12 at which you're able to complete agentic
6:14 coding tasks. Then finally, we're going
6:17 to build out this creator carousel
6:20 studio. So, I'm going to build a kind of
6:22 social media creation automation. Now,
6:25 this app which I'm going to develop may
6:28 not be relevant to every single person
6:30 who is taking this course, but I still
6:32 do recommend you go through this section
6:35 if you're interested in general with app
6:37 development. Because what's important to
6:39 get out of this section is different
6:42 methodologies that I'm going to show you
6:44 on the fly. Both simpler ones, both less
6:48 automated and more automated, more
6:50 handsoff workflows when you're building
6:53 any kind of complex web application. And
6:56 the nice thing is that you're not going
6:57 to need to know about the deep technical
6:59 foundations of what you're building
7:02 because I'll show you how with natural
7:04 language just expressing your intent,
7:07 you're able to build fairly complex
7:09 applications by yourself. I'm going to
7:11 create a companion skill to this
7:14 application so that we're able to
7:16 interact with it both in a web UI and
7:19 from our local computer and then we'll
7:21 deploy it so that it's available on the
7:23 wider internet. All right, let's get
7:25 started. So, first, what exactly is
7:28 Codeex? If you've used ChatGpt or Claude
7:31 in the browser in the past, you know how
7:33 it works. You open a tab in your
7:35 browser, you type in a message, and then
7:37 the AI responds. You can upload a
7:39 document and you can ask it to write
7:41 some code, but it can't access the
7:43 actual documents which are on your
7:45 computer, and it can only run code in a
7:48 very limited sandboxed environment. It
7:51 can't run code actually on your
7:53 computer. That's the fundamental problem
7:55 which Codeex is here to solve. When you
7:57 run Codeex, it's running on your
7:59 computer. So, it sees your actual files.
8:02 It can edit them and it can run commands
8:04 whether to test some code or move files
8:07 from one location or to another or to do
8:10 really anything you can, it can also do
8:13 from your computer. The analogy I gave
8:15 in the Claude code course, which also
8:17 applies here, is that things like Chad
8:19 GBT and Claude are like asking a friend
8:21 for advice. And then Codeex and Claude
8:24 Code are like your friend actually
8:26 sitting down at your computer and then
8:28 doing the work for you. Now, Codeex
8:31 starts with code. And so you might think
8:33 that this is primarily a coding tool,
8:35 but really since it's got access to your
8:37 computer and to your files, it can do
8:40 and help you automate anything that can
8:42 be done with access to your files and
8:44 your computer. So for example, you can
8:46 use Codeex to draft emails, analyze
8:49 PDFs, analyze your business
8:51 spreadsheets, or even help you do your
8:53 taxes. If it's on your computer, Codeex
8:55 can help you out with it. Let me show
8:57 you a quick demo right before I get into
9:00 installing Codeex. Here we are in the
9:03 Codeex desktop environment. So, if all
9:05 of this looks very unfamiliar to you,
9:07 don't worry. I'm going to be getting
9:09 into that in just a few sections. What I
9:11 wanted to show you quickly is just a
9:13 practical demo that shows you the power
9:16 of Codeex and which you'll be able to do
9:18 right after going through the very next
9:20 section. As you can see right here,
9:22 Codeex ships with a file browser. And
9:26 this is the directory that I use to
9:28 organize all my research and my thinking
9:30 about different YouTube videos. And so,
9:32 one thing you can see here is that I
9:34 have a folder with about 10 different
9:36 PDFs of different papers on AI job loss.
9:40 And let's say I wanted to make a summary
9:43 of all of these PDFs. How can I do that?
9:46 Well, I'm simply going to come in here
9:47 and say go to the content directory for
9:51 2026412
9:53 AI job loss and then I want you to
9:57 create a sub agent to read every single
10:01 paper in the research sources PDFs
10:05 directory and create a detailed summary
10:09 of the paper and different angles that
10:12 might be good for YouTube videos. Then I
10:15 want you to take the markdown created by
10:18 each sub agent and compile it all
10:21 together in one attractive PDF using
10:25 Pandock and IceBogle. Now, if that all
10:28 sounds like gobbledegook to you, I
10:31 totally understand cuz I haven't
10:33 explained anything yet. But I just kind
10:34 of want to prime you with some ideas
10:37 because we're all about practice. We're
10:39 not about theory. We're about practice.
10:41 And so I want you guys to see the power
10:43 of codec at a kind of basic skill right
10:47 now or like a basic task right now but
10:49 which is likely to be very useful to you
10:52 all. You may have lots of different
10:54 documents or papers across which you
10:57 want to do some kind of research. And
10:59 this kind of thing that I'm doing right
11:01 here, it doesn't get rid of the need for
11:04 actually doing your own reading. In
11:07 fact, if you look over here on the left
11:09 hand side, you're getting a little bit
11:11 of a taste of what's to come. This is
11:13 where you can see all your project. And
11:15 you can see here that I'm building my
11:17 own PDF reading app. I'm even building
11:20 my own focus app. And I'm building my
11:22 own general learning system for how I
11:24 like to learn things in a gentic way.
11:26 All right. So, Codeex now in parallel is
11:30 doing research across many of these
11:33 different PDFs and then it's going to
11:36 come back to me with some kind of
11:38 comprehensive summary. All right, it
11:40 finished. Let's take a look. So, we're
11:42 going to click this open. And one of the
11:45 nice things is that these briefs can
11:47 open up right in your browser. So, let
11:50 me close the file tree. AI job loss
11:52 research packet detailed paper summaries
11:55 and YouTube angles. And then I've got
11:57 like 10 different papers in here. So
12:00 let's take a look at this. I guess I
12:02 can't click on it, but still pretty
12:04 cool. Let's make this a little bit more
12:08 small. And so this is nice. So I would
12:11 often take something like this and just
12:14 stick it on my phone. And now I have
12:16 something to like keep my mind running
12:18 while I'm on the go in an Uber, at the
12:20 gym, whatever. So, this is a pretty cool
12:22 first demo that I wanted to show you
12:24 guys of the power of codecs and
12:26 something that's really not possible
12:28 when you're just using these tools in
12:30 the web UI. All right, so how do you do
12:33 something like that yourself? Well,
12:35 first you're going to have to install
12:36 the Codeex desktop app. So, that's what
12:38 I'm going to get to now. Let's talk
12:39 about installation and also pricing for
12:42 Codeex. All right. So, as you can see
12:44 here, codeex is included in your chat
12:47 GPT subscription. So, which subscription
12:50 should you get? Now, technically, you
12:53 would be able to use codecs in a very
12:56 lightweight way on the free or go
12:58 levels, but the minimum that I suggest
13:01 to most people in order to get the
13:03 latest models and have even a decent
13:06 amount of usage is the $20 per month
13:09 plan. Now, if you're on the $20 a month
13:11 plan, it is very likely that you're
13:14 going to hit your session or weekly
13:17 usage limits. So, if you come in here to
13:20 the Codeex desktop application, click on
13:23 settings and then click on rate limits
13:25 remaining. You see that it tells you
13:26 here in the bottom left corner in every
13:29 5hour window how much can you use and
13:32 then also on a weekly basis, how much do
13:34 you have left? So, I'm actually likely
13:37 to run out of my weekly limit pretty
13:39 soon, and that's on the pro plan at $200
13:44 per month. Now, I use Codeex extremely
13:47 heavily because I'm working with
13:49 multiple coding agents across many
13:51 projects simultaneously, but what I
13:54 would recommend for most of you is to
13:56 get on the $100 per month plan, which
13:59 gives you five times the limits of the
14:01 plus plan. I'm on the $200 per month
14:04 plan, which isn't listed here, but
14:06 that's why it says from and then it's a
14:08 20x and so I have even higher limits.
14:11 Now, one thing to note here is that you
14:14 can also use codecs by the API. I don't
14:18 recommend that because the subscriptions
14:21 are giving you a subsidized rate for the
14:24 amount of usage that you get. So, choose
14:27 whichever subscription makes most sense
14:29 for you. Next, you'll want to install
14:31 Codeex. And you'll see here that there's
14:33 a command line interface and then a
14:36 Codeex app. Now, this command line
14:38 interface is actually mostly open-
14:41 source, which is a pretty cool feature
14:43 of Codeex as opposed to Claw Code, but
14:45 we're going to be focusing on the
14:47 desktop app, which is both better,
14:50 surprisingly for beginners and for power
14:53 users. So, you come over here to
14:55 developers.openai.com/codex/app
14:56 openai.com/codex/app.
14:59 And then you can install it either for
15:01 Mac or for Windows. So I would just
15:04 click on the one for Mac. Then once it's
15:07 installed, it's going to show up over
15:09 here in your downloads. Double click on
15:12 it, grab it, drag it, then say replace
15:16 if you've already got an old version.
15:18 Now you can open it up. You'll see
15:20 something like this. Press come up. Say
15:22 open. Okay. Now there's two options. You
15:25 can continue with chat GBT or enter an
15:28 API key. You should have a Chat GBT
15:30 subscription now. Sign in with your
15:33 email address. Say continue there. And
15:36 then if this is your first time in
15:38 Codeex, you're not going to see all this
15:40 stuff on the left or any of these
15:42 things, but it remembers that I had
15:45 Codeex installed before. So I get to
15:48 come back to my previous state. All
15:50 right. Now, before we do any deeper
15:53 exercises, I want to give you a full
15:55 tour of the desktop application. I'm
15:58 going to go through every single
16:00 interface, explain where it is, what it
16:03 is, and how to use it. We're not going
16:05 to go fully into detail, but I want you
16:07 to have at least a cursory overview, and
16:10 then we'll go more into detail later in
16:12 the course. So, this is what you see
16:14 when you launch Codeex. On the left hand
16:17 side you see different projects each of
16:19 which are defined by a particular
16:22 folder. If you want to add a new project
16:24 you just click this add new project
16:26 button and then if you like me have a
16:30 projects folder where you like to keep
16:32 everything you can either have a new
16:34 folder and create a folder in there.
16:37 Open it up and now the files and work
16:41 that codeex does will by default be done
16:44 just in that folder. And so I can scroll
16:46 here and I can see that there are
16:48 different threads here that have been
16:50 created for a wide variety of different
16:53 projects. And then if I want to start a
16:55 new chat in some project, I just come
16:58 here, click on new chat. I can choose
17:01 between my different projects that I
17:03 have available. And then I can simply
17:05 ask codec make me a Python script to
17:10 make a map of the United States in a
17:13 virtual environment. And so now Codeex
17:17 will start working and the UN user
17:20 interface has changed a little bit. Now
17:22 here we can see the work that Codeex is
17:25 doing which includes running various
17:27 commands and then down here there's an
17:30 interface in which I can ask for
17:32 follow-ups or whatnot. Now we'll come
17:34 back to this but I want to show you a
17:36 few more interfaces. Next besides this
17:39 new chat button we see a search button.
17:42 So if I wanted to look for example uh in
17:46 which where was I talking about making a
17:48 Spanish course? So, I'm making Spanish
17:50 versions of some of my materials. And
17:52 so, you can use that to find a thread
17:55 when you have lots of projects and lots
17:57 of threads in each project. Then, this
17:59 button for plugins is where you can see
18:02 different plugins which are available in
18:05 codecs. You can think of these as
18:07 capabilities that allow you to connect
18:09 with external systems or to do things
18:12 that codecs otherwise couldn't do. So
18:14 this one, the computer use plugin on
18:17 which I recently made a video and we'll
18:20 be talking about in more detail later in
18:22 this course is a plugin which allows you
18:24 to control Mac apps from codecs. But if
18:27 you come here and select this built by
18:29 open AI plugins, you'll see that there
18:32 are all sorts of plugins for lots of
18:34 different things. So there's like a
18:36 Figma one, Google Drive, Gmail, Slack,
18:40 etc. So, we'll be experimenting with
18:42 some of these plugins later in the
18:44 course, but I just want you to be aware
18:46 of them for now. Now, also, if you look
18:49 up here on the top left, you'll see
18:51 there's plugins, but also skills. So,
18:53 skills are a concept similar to plugins,
18:57 but they're perhaps more specialized
18:59 particular capabilities. And some skills
19:03 come bundled with codecs. And so you can
19:06 see for example that there's a skill to
19:08 create skills and a skill to install
19:10 skills that comes bundled with codeex.
19:13 Now if for whatever reason you didn't
19:15 want to have this skill available, you
19:18 could just come here and choose to
19:20 disable the skill and then enable it
19:23 again if you wanted to enable it again.
19:25 We'll go more into detail on what skills
19:27 are, how they work, how to make them,
19:30 how they defer from plugins and other
19:32 things like MCPs and CLIs, which you
19:35 might have heard of. Doesn't matter
19:37 right now. We'll get into it later in
19:38 the course. And I also have tons of
19:40 plugins that I've made across many
19:42 different projects. So you can see some
19:44 of them are all in here and you'll be
19:47 able to see all the skills that you make
19:48 over time whether they're for particular
19:51 projects or general ones that you always
19:53 want to be available all the time. An
19:55 additional concept that codeex has is
19:58 that of automations. And so these are
20:01 literally automations just things that
20:04 run on some schedule like every single
20:07 day at a particular time. And so for
20:09 example at Pay Slice where I work as a
20:13 director of AI and ML I have a standup
20:16 summary plugin which I have run every
20:18 single day before our weekly standup
20:21 just to summarize the changes that have
20:23 occurred in the git repository. And this
20:25 is useful for communicating both to the
20:29 rest of the team what I've done in a
20:31 summarized way, but also for me to get
20:33 insight into what the other engineers I
20:36 work with have been working on if I
20:38 haven't spoken to them recently. And so
20:39 you can create all sorts of automations
20:42 in this interface. Again, we'll be
20:44 getting into this in more detail later
20:46 in the course. So if we come back over
20:49 here to this pane, I want to show you a
20:52 few more features about what's available
20:55 in this interface. Now sometimes to
20:58 install certain kinds of software, maybe
21:00 you don't want codecs to just do it for
21:02 you. Codeex can do software installation
21:04 for you. And if you want to be able to
21:06 do it yourself, if you're on a Mac or on
21:09 Windows, often too, what you want is
21:11 access to the terminal. Now, in this
21:14 course, unlike the clawed code course,
21:16 I'm not going to go into the terminal in
21:18 detail because the desktop app is such a
21:21 beautiful amazing interface that you end
21:23 up not really having to use codecs of
21:25 the terminal or the terminal very much.
21:27 But if you want to use the terminal,
21:29 there's two ways to do it. One is that
21:31 you can click this button over here for
21:33 the terminal or as you can also see, you
21:36 can just toggle it on with command J.
21:38 And so that's what I'm doing right
21:39 there. Command J. That gets me to a
21:41 terminal. And this terminal opens up in
21:45 the same folder that you're in. And if
21:47 you go to another one, there will be a
21:50 different distinct terminal in each
21:52 project and each thread's interface. So
21:55 there's no risk of them interacting with
21:58 each other. If you want to open multiple
22:00 terminals in a single interface, you can
22:02 just click that plus button. And so
22:03 that's handy to have. Now the next
22:05 button over here is for toggling the
22:08 file tree. So you can see all the files
22:11 which are in your project and if you
22:13 click on them you can even look at the
22:16 file itself. Now most of the time I
22:19 almost never have to edit files by hand
22:22 anymore but in the rare occasion that we
22:25 do I don't recommend doing it within
22:28 codeex. I instead recommend doing it
22:31 with an external application. The
22:33 particular application that I recommend
22:35 you have installed is Visual Studio
22:38 Code, which is a very good, very useful
22:41 external editor. So, you just look up VS
22:43 Code, then you'll have a download,
22:45 install it. You're all pros at
22:47 installing software. I'm sure I don't
22:49 need to show you how to do that. In
22:50 order to easily open up a folder or a
22:54 file in a particular editor of your
22:57 choice, you need to first have a git
22:59 repository initiated in your project. So
23:03 the way I would do that is just ask
23:05 codeex, can you create a git repo for me
23:09 and make a first commit. Now if you're
23:12 not familiar with git, don't worry.
23:14 We're going to be getting into that
23:15 later in the course, but basically Git
23:18 is a version control system which helps
23:21 you keep track of changes to your files
23:25 in your project as you work on it. And
23:27 Git is both really good to use for a
23:30 variety of reasons as a software
23:33 developer or for anybody really working
23:36 with files at all, but it also is very
23:39 helpful for agentic coding tools like
23:42 codecs to give them memory because
23:45 they're then able to see all the changes
23:48 that have been made in a project and
23:51 that helps them do better work. And so
23:52 if you look here at the top right,
23:55 you'll see that the user interface has
23:57 changed a bit. There are a few new
23:59 things that have come up. So there's
24:00 this menu that has come up now which
24:03 with which you can choose to commit,
24:06 push or create PRs or create branches.
24:09 Again, these are git concepts that I'll
24:11 get to later in the course. But you can
24:13 also now choose to open up this project
24:17 in an application of your choice. And so
24:19 cursor and VS Code are two editors that
24:22 I have open. The one that I just
24:24 recommended you install is VS Code, but
24:26 you can also open it up in a terminal or
24:29 if you're building some application,
24:31 then you can build it up in Xcode or
24:33 Android Studio. So I'm going to choose
24:35 to open this up in VS Code. Let's click
24:37 that. And there it is. Now it's open up
24:39 in VS Code. And so this can be a nicer
24:43 environment. It's like more particular
24:45 to looking through your files. and you
24:48 can customize it with extensions as you
24:50 like. And so for most of you, even
24:52 though I do recommend Codeex for doing
24:54 most of the operations that you'll need
24:57 done, having VS Code available will be
24:59 very useful. Next, you'll also see this
25:01 other side panel available. So, I can
25:03 flip it out. And in that side panel, one
25:06 of the things that you could do is to
25:08 see files. But there's two other things
25:10 which are cool to know. There's a review
25:13 UI. So, this helps you see the different
25:16 changes that have been made in your repo
25:18 as changes are made. Can you make it
25:21 prettier? And so, I'm going to ask
25:23 codeex to fulfill this vague instruction
25:26 to just make the map look more
25:29 beautiful. And then we're going to see
25:31 the changes come up on here, but they're
25:34 just going to be the changes relative to
25:36 what the last change is that we
25:39 committed is the git term to git. All
25:41 right. So, we've pretty much talked at
25:43 this point about the main UI, but we
25:46 haven't really talked yet about this
25:48 very important interface down here, and
25:51 there's actually quite a lot going on in
25:54 this small space. So, let me go through
25:56 it piece by piece. First, this thing is
25:58 now making changes. It deleted one file.
26:00 And so, as you can see, we can now see
26:03 these changes coming up on the ra right
26:05 hand side in this review user interface.
26:08 So in this UI when codeex has finished
26:12 doing something you can chat with it
26:15 just like you would chat with chat GBT
26:17 and so let's say uh I wanted to just say
26:20 make it prettier after this. It would be
26:23 able to understand that instruction and
26:25 then try to fulfill it to the best of
26:27 its ability. But there's also some
26:29 additional capabilities just in this
26:32 little text area. So first I'm going to
26:34 just press in slash and you'll see a
26:37 bunch of things come up. Now these are
26:39 inbuilt capabilities in codeex which are
26:43 neither plugins nor skills. So plugins
26:46 and skills as you saw were these sort of
26:48 specialized things that codeex has to be
26:51 able to interact with different external
26:53 systems or give it new abilities.
26:56 Everything that shows up when you press
26:57 slash up top are the default things that
27:02 come baked into codecs. These aren't
27:05 additional capabilities. And so one of
27:07 these for example is fast. And so, as
27:10 you can see, what fast basically does is
27:13 it will give you faster inference,
27:16 meaning you're going to get the
27:18 responses from codecs faster, but the
27:20 cost is going to be that you're going to
27:22 spend your tokens, your weekly limit
27:25 twice as fast. And so, I'm going to show
27:27 you this full settings UI later, but as
27:30 you recall, if you click on settings and
27:32 then go to rate limits remaining, you
27:34 can see what your 5h hour and weekly
27:36 limit remaining are. So, if you choose
27:38 to have fast on, then you're going to be
27:41 going through your tokens a lot faster.
27:43 You can also do things like see your
27:45 different MCP servers, which are
27:47 available. Some of you guys may be
27:49 familiar with MCP servers. If not, no
27:52 worries. We're going to get into it
27:53 later in the course. You can also
27:56 compact your thread, which is a way to
27:59 summarize everything that's been done in
28:01 your current thread and start fresh.
28:03 Again, we'll also get into that later in
28:05 the course. You can choose the
28:07 particular model that is used. So right
28:09 now I have it set to GPT 5.4 and there's
28:13 also a few others. So that's what slash
28:15 does. Now if you do dollar sign then
28:19 what comes up at top are the skills. And
28:22 so these are these specialized
28:24 capabilities, most of which I've made
28:26 myself or which other people have made
28:29 and I have installed in my own system to
28:32 allow codecs to do other specialized
28:35 things. And so if you want to
28:37 instantiate or use one of them in your
28:39 current context, you can use dollar
28:41 sign. Finally, the last sort of shortcut
28:44 I want you to know about is at. And so
28:48 when you use at, it's going to surface
28:50 agents that you may have installed, but
28:53 also plugins, which are a concept we
28:55 talked about. We'll also get to agents
28:58 and sub aents later. But you can also,
29:00 if you want to reference a specific file
29:03 for whatever it is you're doing, you can
29:06 reference that file by like going like
29:08 that, typing it in, and now Codex will
29:10 know that whatever you say next refers
29:12 to or needs to include as context that
29:15 file. Now in this user interface you can
29:18 also paste in images or PDFs if you want
29:23 to give those as context to codecs. So
29:26 something I do pretty frequently is we
29:27 can click this and something cool is
29:30 that HTML files and images along with
29:33 PDFs can be viewed right in the user
29:36 interface. And so what I could do if I
29:39 wanted is just take a screenshot, drag
29:42 it right in and say, "Can you mark the
29:46 state capitals as well?" And you know,
29:50 that instruction didn't really require
29:52 me to take the screenshot, but let's say
29:54 I wanted to say, "Hey, it looks kind of
29:56 ugly. I don't like this map, but hey,
29:58 take a look at this map. It looks
30:00 better." Most of Open AI's models and
30:03 all the ones which are available in the
30:06 Codeex desktop app are multimodal,
30:08 meaning that they can sort of see images
30:11 and text. And so you'd be able to use
30:13 them in that way, too. Now, the last
30:15 little detail I want to mention is this
30:18 button over here for voice dictation.
30:21 So, we'll talk about this in a little
30:23 bit later in the course, but if you want
30:26 to give voice instructions, you can just
30:28 click that. I am the walrus goo. Press
30:32 stop and then your very important
30:34 instructions will come up into the
30:37 interface. All right, so we're almost
30:39 done with the interface. The last main
30:41 thing I want to talk about is models and
30:44 tokens. So, if you look over here,
30:47 you'll see this little dial. And that
30:50 dial is telling us how much of the
30:52 context window, meaning the available
30:55 maximum limit of a given thread, has
30:58 been used. And so, it says 25% of the
31:02 maximum available context has been used.
31:05 We'll get into more detail about what
31:08 takes up the context window, but one of
31:10 the main things and you can see that
31:12 it's increasing as codeex does more
31:15 things is the files it's reading and the
31:18 messages that we're giving it and the
31:19 messages that it's giving us back. The
31:21 next thing you'll see here is a model
31:24 selector. So there are all sorts of
31:26 models and you'll see that some of them
31:28 are marked as codecs and then some of
31:31 them are marked without codecs. So what
31:33 I recommend generally to everybody here
31:36 is that you just use GPT 5.4. It's kind
31:39 of the best model right now in my
31:42 opinion for any coding task, any any
31:45 task really for anything other than
31:47 writing for writing clawed code. Opus
31:50 4.7 is pretty good for pretty much
31:52 everything else. GPT 5.4 is the best
31:55 model available right now. Now, what
31:57 often happens after a new model release
32:00 is that Open AI will come out later with
32:03 a model that's optimized for coding
32:06 tasks. And so, before you used to be
32:08 able to see GBT 5.3 and GBT 5.3 codeex
32:12 and so I would use GBT 5.3 codeex to do
32:15 my coding before 5.4 came out. For now,
32:18 I just recommend you use 5.4. So because
32:21 it's such an such an important toggle,
32:23 it's available right here in the
32:25 interface, but you can also toggle it by
32:28 going slashmodel and then choosing your
32:31 model from there. The last bit you'll
32:32 see here is this button for reasoning
32:35 effort. And so you can choose to have
32:38 your reasoning effort at low, medium,
32:41 high, or extra high. And roughly
32:44 reasoning effort refers to for a given
32:47 model how much time it's going to spend
32:49 in a thinking stage before doing
32:52 something. Now generally I would say
32:54 that if you add additional or higher
32:57 reasoning effort you get better results
33:00 but it's not perfectly the case. And
33:02 often when I want to get things done
33:04 fast or I'm working on something simple
33:07 I'll switch to medium but most of the
33:09 time I have it on extra high. If you're
33:11 on a $20 per month plan, it might make
33:15 sense to not use extra high that much or
33:19 stay mostly on medium, probably later in
33:22 the course, I'll talk more through
33:24 strategies on how to conserve tokens. If
33:27 you are primarily using a $20 per month
33:30 plan, if you're on the 100 or $200 per
33:32 month plan, I would mostly just
33:34 recommend using extra high as your
33:35 default for everything. That's how I use
33:37 it. Just a few more comments about these
33:40 models because you may hear about some
33:41 of them. So, uh, Mini is a model that I
33:45 don't really recommend for coding, maybe
33:48 for certain simple things and codecs
33:51 used to have this ultraast codec spark
33:53 model. Again, I didn't really find any
33:56 particular use for it, but I just want
33:58 you guys to be aware of those two as
34:00 well. Now, over here on the left hand
34:03 side, you'll see two toggles. one is
34:05 this plus sign and then this thing which
34:07 I currently have set to full access. So
34:10 by default codeex will run with default
34:13 permissions. And so that means that it's
34:16 allowed to do certain things in the
34:18 folder that it's in, but it's not
34:20 allowed to do things outside that folder
34:22 or it may not be allowed to do things
34:24 without asking for your permission such
34:27 as installing applications or going to
34:30 certain websites. Now, I usually leave
34:32 it on full access, which is a little bit
34:35 more dangerous because now codecs can go
34:38 all over my entire computer and pretty
34:41 much do anything. But in the next
34:43 section, I'm going to talk about how to
34:46 stay on full access, but still make that
34:49 safer. Not the next section, but in the
34:51 next few sections. So, we'll talk about
34:53 the permission system in much more
34:55 detail, but I prefer having it on full
34:57 access. It's just a little bit faster.
34:58 I'm comfortable with it. So that's where
35:00 I've got it. And you also see this plus
35:02 sign here. And so you can add photos and
35:04 files just like I showed you adding the
35:06 photo. There's also this concept of a
35:09 plan mode. So when you turn plan mode
35:11 on, codeex will not actually write
35:14 files. It will read files, but it'll
35:16 make a plan of whatever it is that you
35:20 want it to do. And so this is generally
35:22 a good practice when agentic coding. But
35:25 my preference for many reasons which
35:28 I'll talk about a little bit later in
35:29 the course is to just make plans on my
35:33 actual file system like not go to a
35:36 separate plan mode. And so if you've got
35:38 it on, you can turn it on with shift tab
35:41 and then turn it off just by clicking on
35:42 it. I'm going to leave it off for now.
35:44 You can also access your plugins right
35:46 here. So I showed you that you can
35:48 access them with the app symbol. And
35:50 over here you'll see that there's a few
35:52 different options for how you can use
35:56 codecs. So you can use codecs on the
35:59 web. You can send it to the cloud if you
36:01 set up a cloud environment. And you can
36:03 also hand off to a work tree. So I'm
36:06 going to teach you all about work trees
36:08 because they are very useful. I'm not
36:11 going to teach you so much about cloud
36:13 usage because I don't find it that
36:16 useful and I'll explain a little bit why
36:18 when we talk about work trees. And
36:20 finally here, if you're familiar with
36:22 the Git system, one of the main concepts
36:25 in Git is a branch. We're going to talk
36:27 about branches later, but just so you're
36:29 aware, you can create and check out new
36:31 branches from this UI or switch between
36:34 your different branches that you have
36:35 available over here. So, we can actually
36:37 see this thing got regenerated. I guess
36:40 I got to refresh. Ah, there. And now
36:42 we've got the state capitals in here.
36:44 That's pretty cool. All right. The last
36:46 bit that I want to tell you about in
36:49 this interface is the settings UI. And
36:52 there's a lot in it that's not that
36:54 important, but I'll try to walk you
36:56 through some bits which might be more
36:58 important. So, first here in the
37:00 configuration tab, there's a user
37:03 interface in which you can add some
37:05 configuration options to codecs. And a
37:09 lot of codeex's configuration is defined
37:12 in a file called config.toml
37:16 which is located in a specific location
37:18 on your computer. And so if I open it up
37:20 here, we'll see that this is what this
37:22 configtoml
37:24 file looks like. Now most of you will
37:26 never really need to edit this by hand,
37:29 but it is important to know that it
37:31 lives in your home folder in a folder
37:34 calledcodex. So just important to be
37:37 aware of. And you can also in this
37:39 section make some changes to how the
37:42 permission system works on your
37:44 computer. Again, we'll get into this a
37:45 little bit later. Now, over here in the
37:48 threads UI, you can see that if I click
37:51 on this, I can remove some project if
37:54 it's not relevant to me. But I can also
37:56 once a thread is not useful to me
37:59 anymore, I can archive it. So, this is
38:01 an old one that I don't really need
38:02 anymore is I can go here and then
38:05 archive that thread. But then if you
38:07 ever wanted to recover an archived
38:09 thread in your settings, you can come
38:11 here to archived chats and you'll see
38:14 all these different chats. You can try
38:16 to find the one hopefully by its name or
38:19 the timestamp or the project name and
38:22 click unarchive to unarchive it. There's
38:24 also some user interfaces here for Git.
38:28 You really will never need to touch
38:30 this. You can just leave it on its
38:31 default. for environments. I'll teach
38:34 you about these when we get to work
38:36 trees. Again, here for work trees. We'll
38:38 talk about this in more detail once we
38:40 get to that. This one for
38:41 personalization, I don't find that
38:44 important. I just leave it on friendly
38:46 or you can put it on pragmatic. Up to
38:48 you. And then just some general config
38:50 options for how you like your codec UI
38:52 to look. Lastly, codec updates pretty
38:55 often. And when there's an update
38:58 available, you'll see right over here an
39:02 icon that says update. So you just
39:05 select it, press it, it'll restart, and
39:07 that'll do an update. Otherwise, you can
39:09 always go here to codecs, check for
39:10 updates, and update it from there. All
39:12 right, so we just covered the entire
39:15 interface, and you now know enough to
39:18 get started with codecs on your own
39:20 project. Just open up a folder, start up
39:22 a thread, and then start prompting away.
39:25 But next I want to introduce a
39:27 fundamental concept that you're going to
39:30 encounter quite quickly as you get
39:32 started with codecs and that is the idea
39:34 of a context window and compaction. As I
39:38 had mentioned right here in codeex
39:40 there's a dial which tells you how many
39:43 tokens you've used and how many you have
39:46 left until this compaction event occurs.
39:49 But let me go into a little bit more
39:52 detail what a token is, what the context
39:54 window is, and what compaction is. A
39:57 token in the context of agentic coding
40:00 and large language models is roughly a
40:03 word. And so you have limits on how many
40:06 tokens you're allowed to use at a time
40:10 in a given conversation. And so what
40:12 counts as tokens? Well, obviously like
40:15 if you're giving a really long message,
40:18 that's going to have more tokens and so
40:20 your your actual messages count. But
40:22 Codeex's responses also add to this
40:25 maximum number of tokens that you can
40:27 use. But now that we're in the Aentic
40:29 coding world as well, the files that
40:32 it's reading are going to count. So if
40:34 it's reading bigger files, that's going
40:36 to use up more of this token limit. Now,
40:39 Codeex has access to tools to run
40:42 commands on your computer, to search for
40:44 code, to fetch things on the web, and
40:46 the output it gets from these tool calls
40:49 are also going to count towards your
40:51 tokens. Finally, as I've mentioned,
40:53 there are these concepts called MCPs,
40:56 skills, and plugins, which we're going
40:58 to get into later. And the use and the
41:01 awareness of these tools has some token
41:04 usage for codecs as a default. And then
41:07 finally, your system prompt, meaning the
41:11 prompt that codeex always has in memory
41:14 to tell itself about what it is. Your
41:16 agents.md, which we'll get into a little
41:19 bit later, but is a description that you
41:22 can create of your project with project
41:25 specific instructions for codecs also
41:28 eat up tokens. And so I've got here
41:30 258,000
41:33 tokens available in this thread. And it
41:36 says that this compaction thing is going
41:38 to happen once it reaches that
41:40 threshold. So what is compaction? What
41:43 compaction basically does is take all
41:46 these things that are using up tools
41:48 that I just talked about and it
41:50 efficiently creates a summary with
41:53 references to some key decisions that
41:55 were made here and important files so
41:59 that codeex can just keep working after
42:01 hitting that limit. Start not totally
42:04 fresh but freshish and then keep going
42:07 on with new work. This graph here is
42:09 from anthropic and it shows the
42:12 performance along a measure called mean
42:16 match ratio. You don't have to
42:17 understand what that is but the basic
42:19 idea is that as we have more tokens the
42:22 performance of most of these models gets
42:25 worse over time. The model performance
42:28 also becomes more expensive as you're
42:31 having conversations that use more
42:34 tokens because effectively what's
42:36 happening every single time you send a
42:39 new message to Codeex is that Codeex
42:41 sends all the previous messages back to
42:45 Open AI's API and then sends you a
42:48 response and adds that on. But there's
42:50 going to be this kind of pyramiding that
42:53 occurs as you do this over time where
42:55 the amount of messages or the size of
42:58 the message you're sending is bigger.
43:00 And so if you're frequently going all
43:02 the way to the end of your potential
43:04 usage, you'll see these rate limits
43:07 decrease more quickly. Now, in practice,
43:10 what I do is I just let it automatically
43:13 compact all the time. So, I'm on this
43:16 $200 plan and I come up close to my
43:20 limits, but not all the way there. And
43:22 so, I'm making the most out of my usage
43:24 and I don't feel the need to do this
43:26 compaction earlier on my own. Instead, I
43:29 just leave these threads running really
43:32 long and I have various strategies that
43:34 I'll talk about that I use to make sure
43:36 that codeex stays on top of work across
43:40 long running sessions. But if you ever
43:43 want to do this compaction early, you
43:45 can come here and just do /compact. And
43:48 if you have something that you want
43:50 codeex to focus on in the compaction,
43:53 you can say focus on new post hog
43:56 features. So this is a project I was
43:59 just working on right now and maybe I
44:01 would want it to focus on something in
44:04 particular. I can just say that in the
44:06 compaction instruction. That's basically
44:08 all I wanted to tell you about context
44:10 windows. It's a pretty straightforward
44:12 concept. You're going to hit this
44:13 compaction event often. And my
44:15 recommendation to most of you is just
44:17 let codeex do the compaction for you.
44:19 That's the easiest way to go about doing
44:21 things. The next topic I want to cover
44:23 briefly as a fundamental of agentic
44:27 coding is voice mode. Now, we saw this
44:30 little voice mode feature earlier when I
44:32 was introducing the interface. And you
44:35 can use it by just going CtrlM and then
44:38 saying whatever it is that you want to
44:40 say. And then you can just do CtrlM
44:42 again and it'll show up here on the
44:44 screen. Now depending on how I edit
44:46 this, you may not see how slowly or
44:49 quickly it showed up, but it was kind of
44:53 slow. The tool that I like using for
44:56 voice input is Whisper Flow, which costs
44:59 money, but if you have an academic
45:02 email, you get 3 months for free. And
45:04 there are lots of other free options
45:06 that are hosted on your computer that
45:08 people are coming out with to do voice
45:10 input. But sort of initial question is
45:14 why use voice input at all? Why am I
45:17 emphasizing this as an explicit section
45:19 of the course? Well, fundamentally, one
45:22 of the best ways to get better results
45:24 out of codecs is to give it better
45:26 context. So, if you're giving more
45:29 complete instructions with more context
45:32 about what you want for designing an app
45:34 or every little detail of how you're
45:37 thinking about some research problem,
45:39 then you're going to be likely to get
45:41 better results. But when you are typing
45:44 you can on average let's say type at
45:46 just 40 words per minute whereas you can
45:48 speak at 150 words per minute. So just
45:51 naturally by speaking as a default mode
45:54 of working with agentic coding tools
45:56 you're going to get better results. So
45:58 here's an example of the kind of thing
46:00 that I might myself do behaviorally if I
46:04 was giving instructions typed versus
46:07 giving instructions spoken. So the
46:09 spoken instruction is going to be a lot
46:12 more natural but also a lot more
46:15 effusive. And so the same person with
46:17 the same intent is likely to get better
46:20 results from codeex when speaking right
46:23 on the first try. Whereas if you say fix
46:25 the login bug, maybe Codeex is now going
46:27 to ask you for clarification questions,
46:30 go off in incorrect directions, and use
46:32 a context which doesn't help you solve
46:34 the problem. On whisper flow, I have
46:37 control space mapped to the text to
46:40 speech or rather speech to text usage.
46:42 So if I wanted to do the same thing
46:43 here, I just do that and then I do
46:45 control space again and it showed up.
46:48 Again, depending on how I edit this, you
46:49 wouldn't see it, but there was like a
46:51 five or 6 second lag when I was using
46:54 voice mode over here, whereas it took
46:57 about 1 second for that to show up. And
46:59 that may seem like a small thing, but
47:01 when you're using with these tools, uh,
47:03 you get kind of annoyed if there's a
47:05 6-second lag before some action occurs.
47:08 So, I would recommend Whisper Flow if
47:10 you have the budget for it, or
47:11 especially if you can get that academic
47:13 discount. Otherwise, there are other
47:15 free options coming out. And the
47:17 in-built controlM voice input option is
47:20 not bad either. All right, that's it for
47:23 voice mode. The next thing I want to get
47:25 to is the permissions system and guard
47:29 rails in Codeex. So, one of the things I
47:32 covered when I was discussing codeex's
47:34 interface is this thing right here. You
47:37 can choose to either have full access or
47:40 default permissions as the two ways in
47:43 the codeex desktop app to give codec
47:46 permissions over your computer. So, what
47:48 does this exactly mean? What is this
47:51 sandbox? and what is full access and
47:54 what are the risks with full access to
47:57 demonstrate the difference. Let me first
47:59 give you a little bit of a demo using
48:01 default permissions. So, I'm going to
48:03 use Whisper Flow and I'm just going to
48:04 ask, can you look at my downloads folder
48:08 or actually look at my desktop and help
48:11 me clean up all the screenshots over
48:14 there? They're kind of like messy. I
48:16 don't like them. So, I have like I don't
48:18 know two years of screenshots which are
48:20 all in my desktop folder. And we're
48:24 going to see how with default
48:26 permissions codeex does at helping me
48:29 clean that up. In order for codeex to
48:31 move a little bit faster, I'm going to
48:33 tweak down the reasoning and then say to
48:36 continue. So, let's try that. All right.
48:38 So here we got the first sort of useful
48:41 example to show the difference between
48:44 default permissions and full access. So
48:47 as you can see here, Codeex was able to
48:49 run certain commands like ls, which just
48:52 helps it list files and find which is a
48:55 Unix command to help it find files
48:58 without needing to ask for permission.
49:00 But now it's come to something where it
49:02 actually wants to move files from one
49:05 location to the other. And so what it's
49:07 suggesting is that you've got like 1.1
49:10 GB of screenshot files and I can move
49:12 them to a location where they'll be
49:15 sorted and leaving other desktop images
49:17 alone. And so two options come up here.
49:19 One is that I can just approve this
49:21 action. Second, I can say yes and don't
49:24 ask again for commands that start with
49:26 this. So I'm going to say that I'm going
49:29 to say just yes right here and then let
49:31 it move forward. Now having default
49:34 permissions on is very helpful and
49:37 useful because if something dangerous is
49:40 potentially going to occur then you can
49:42 vet the action before codeex is able to
49:46 do that. But there is also a cost to
49:49 working with codeex primarily in this
49:51 way. Sort of the magic of agentic coding
49:54 is when you can actually let it loose
49:56 and be able to work for long periods of
49:59 time with your hands totally off. And so
50:03 setting it to full access on the other
50:06 hand won't continue asking you for
50:08 permissions when these stages occur. So
50:12 now if I proceed in full access I can
50:14 say what do you recommend next. So it's
50:18 recommending a sweep of what remains on
50:20 the desktop and then stop the mess from
50:23 coming back. So I'll say sure do that.
50:26 The issue with full access is that
50:29 potentially codecs could delete things
50:32 that you don't want deleted without you
50:34 having any mechanism to recover those
50:36 files for example. And so one option is
50:40 to give codecs very fine detailed
50:43 permissions of what it can and can't do.
50:46 And that is possible in codeex. Let me
50:49 show you how. On this documentation page
50:52 for codeex, there's a pretty thorough
50:56 explanation of all the different types
50:59 of configuration options you have at
51:01 hand to limit codecs on what it can and
51:04 can't do. So here, for example, you can
51:06 decide whether to enable full internet
51:09 access or just have an allow list of
51:12 particular domains. You can also have a
51:15 deny list for what is allowed or not
51:18 allowed for codecs to read or write on
51:22 your computer. And all of this occurs in
51:24 a file called config.toml
51:28 which is located in a particular
51:29 location on your computer which I'll
51:31 show you in a little bit. There's also a
51:33 concept called rules with which you can
51:36 define particular commands that codeex
51:39 is allowed to run which go on outside
51:42 the sandbox where the sandbox for a
51:45 given project you can roughly think of
51:48 as being that folder like a set of
51:50 operations that it's allowed to do
51:52 outside that folder. Now this rules
51:56 setup is not trivial. It is a pretty
52:00 complex format that if I was writing, I
52:04 wouldn't want to write by hand. I would
52:05 probably ask Codeex itself to help me
52:08 write this thing. And I'm personally
52:11 comfortable enough with these tools that
52:13 I just leave them in full access all the
52:16 time. So my recommendation is to either
52:18 just use default permissions or full
52:21 access, one or the other. the permission
52:24 system. You can dig into it and I'll
52:27 send you those links, but it can be a
52:29 little bit complicated, a little bit
52:31 finicky, and so I'm personally
52:33 comfortable with full access. But there
52:35 is one additional tool that I use
52:38 alongside full access in order to make
52:41 certain destructive commands impossible
52:44 for codecs to run. The tool I use for
52:47 that is called destructive command
52:50 guard. So, if you just search that on
52:52 Google or you can see in the slides I'll
52:55 have in my school server or in the
52:57 description below this link, you can
52:59 find this tool. And basically what it
53:02 does is it prevents codecs or clawed
53:05 code really any agent from running
53:08 certain types of catastrophic commands
53:11 like get reset hard which is very bad to
53:14 do on a git repository rmrf source. So
53:17 you'd want to prevent codecs from
53:19 accidentally deleting some directory or
53:22 dropping a table in your database. And
53:25 so if you want to install this tool, you
53:28 simply copy this right here. Copy. Then
53:32 come back to codeex. And as you recall,
53:35 in order to open a terminal, it's
53:37 command J on a Mac, probably similar on
53:40 Windows. I'm just going to paste that in
53:42 here and then press enter. and we'll see
53:46 that it's now active in codeex with this
53:50 DCG hook. Now that begs the question,
53:53 what is a hook? So hooks are an
53:56 extensibility framework for codeex such
53:59 that after certain points in the agentic
54:03 life cycle, some actions can occur
54:06 deterministically. But as you see here,
54:09 this is an experimental feature. So in
54:11 our case what we want is that before any
54:15 tool is used meaning before any command
54:17 is run we have DCG run to check if that
54:21 command is a safe command and if not it
54:24 rejects that command. Now in order to
54:26 use an experimental feature like this
54:29 you have to open up this file that I was
54:31 referencing called the config.toml file
54:35 and add this line underneath features in
54:38 your config.comtom. So how do you do
54:40 that? Well, you come here to codeex,
54:43 then go over here, go to settings, then
54:46 come down to configuration, then over
54:49 here, choose global. So that we go to
54:52 the user configuration, and then click
54:54 this button for open config.toml. So let
54:58 me do that. Okay. So if you've set up VS
55:00 Code, it should probably open up like
55:02 this in VS Code. And then I recommend
55:05 doing a CtrlF for features. There it is.
55:09 And you'll see over here that I've
55:11 already added this line hooks equal
55:14 true. So if you haven't add that, but if
55:16 you have, leave it. And then just save
55:18 it. And now your codeex instance will be
55:21 set up to prevent certain kinds of
55:24 destructive commands from ever happening
55:26 in the first place. So for me, this is a
55:30 sufficient level of safety. There are
55:32 more complex types of safety that you
55:35 can add using things like Docker
55:37 sandboxes or simply working on your
55:40 stuff on a computer which is totally
55:43 isolated from anything else that could
55:45 be damaging. So, it's your own decision
55:47 of what you prefer. Maybe start off in
55:50 default permissions, but I think that
55:52 pretty soon you'll get annoyed and
55:54 you'll want to move to full permissions.
55:56 In that case, I recommend setting up
55:58 destructive command guard. And you can
56:00 do that all within the Codex desktop app
56:02 by opening up a terminal right there in
56:04 that environment. All right, the next
56:06 topic I want to discuss is the agents.m
56:10 MD file. Now, if you recall back to a
56:13 previous section, we were discussing how
56:16 there are all these different things
56:18 that use up tokens in codecs. One of
56:21 those is the system prompt, which
56:23 includes this thing called agents.md.
56:27 So what is agents.mmd? The agents.md is
56:30 a file that codeex reads before doing
56:34 any work. And so the possibility or the
56:38 promise of agents.md is that if there
56:40 are certain types of things that you
56:43 always want codeex to know about your
56:45 project, you just create an agents.md
56:49 file, put it at the root location of
56:52 your project folder and then codeex will
56:54 always read that first before following
56:57 any instruction that you give in any
56:59 codeex thread. Now, there's not just one
57:02 agents.mmd file, but actually multiple
57:05 of them. So, typically at your
57:08 individual project, you might put
57:11 agents.md at the root of the project.
57:14 But, additionally, you could have an
57:16 agents.md inside some folder in your
57:20 project and then when codeex goes inside
57:22 that folder, anytime it's acting in that
57:25 folder, it'll always read that agents.md
57:28 file first. And finally, you can also
57:32 have an agents.mmd file which you put in
57:35 your home directory in thecodeex folder.
57:38 And then this will be something that
57:40 codeex always reads in every single one
57:43 of your projects. So should you always
57:46 make agents.md files, other AI
57:49 influencers will sometimes refer to
57:52 these as the brains of your project. But
57:55 my opinion is that you actually should
57:58 never make agents.md files. The
58:00 fundamental reason for this is that
58:03 coding agents like codecs have gotten so
58:06 good that you don't need to really tell
58:09 them many things about what your project
58:12 structure is and how to work inside it.
58:14 They can usually just infer that
58:16 themselves. But what often happens is
58:18 that if you put some set of instructions
58:21 in your agents.mmd file if you're a
58:23 beginner, you'll often overspecify
58:26 things that aren't actually necessary to
58:28 say, and so you'll just be using up
58:30 valuable context in that agents.md file.
58:33 Additionally, if you have instructions
58:37 explaining your project structure in the
58:39 agents.m MD, but then down the road your
58:42 project's structure changes, this
58:44 inconsistency can end up confusing the
58:47 coding agent, and so you get worse
58:49 results than you otherwise would. To
58:51 test exactly this, some researchers at a
58:54 very prestigious university in
58:56 Switzerland in Zurich did a test to see
58:59 whether agents.md files actually help.
59:02 and they compared across some measure of
59:05 success rate LLM generated agents.mmds,
59:08 human generated agents.m MDs and no
59:11 agents.m MDs. And what you see is that
59:13 like for the worse models like GPT 5.1
59:17 Mini and Quen 330B, there does seem to
59:21 be an improvement especially from
59:24 creating this human generated agents.md.
59:27 But when you look at GPT 5.2, 2, which
59:29 is now a pretty old model, or sonnet
59:31 4.5, which is extremely old. There's
59:34 basically no difference at all. And so
59:37 that speaks to the fact that as these
59:39 models are becoming more intelligent,
59:41 there's just less of a need for these
59:43 agents.mmd files. And in fact, it can
59:45 even end up hurting you. Here we have an
59:47 other view studying the same thing. But
59:49 what we're looking at here is whether on
59:51 these two benchmarks, whether using an
59:54 agents.m MD helps you satisfy that
59:58 benchmark with fewer steps and at a
1:00:00 lower cost. And what you find uniformly
1:00:02 across all these models is that these
1:00:05 measures are done worse like in more
1:00:08 steps and at a higher cost when you use
1:00:13 an LLM generated agents.mmd or even a
1:00:17 human generated agents.mmd. Now, if you
1:00:20 do create an agents.m MD, my
1:00:23 recommendation is to put instructions
1:00:26 based on what the agent is getting
1:00:29 consistently wrong in your project. So,
1:00:32 use the agents.m MD as a corrective. And
1:00:35 so, for example, if your project uses
1:00:38 one more modern library that may be past
1:00:41 the models memory cutoff, then you want
1:00:44 to specify that. So, for example, if
1:00:46 you're using Tailwind version 4, specify
1:00:49 that and not Tailwind version 3. Or if
1:00:52 you're using Python 3.14 specifically to
1:00:55 write your code and you always want to
1:00:57 make sure it uses that, then specify
1:00:59 that. But the type of thing that would
1:01:00 be bad to include in your agents.m MD is
1:01:03 stuff like the database has 12 tables,
1:01:06 the project structure is data, paper,
1:01:10 intermediate, temp, because all of those
1:01:12 things might change. certain types of
1:01:15 things that people put in agents.mds
1:01:18 actually belong in what are called
1:01:20 skills. And we're going to be getting to
1:01:22 that in just a few sections. But before
1:01:25 we get there, I want to introduce the
1:01:27 five practical primitives of codecs.
1:01:31 Now, when we were going over the
1:01:33 interface store, I already gave you an
1:01:36 brief introduction to each one of these,
1:01:38 but I want to kind of lay a road map and
1:01:41 make a brief comparison of these things
1:01:43 right now so that you have a broad
1:01:46 picture in your head as we go through
1:01:49 each of these in detail. So, from your
1:01:51 perspective, the way you'll be
1:01:53 interacting with codecs is through this
1:01:57 desktop app. And so under the hood, it's
1:02:00 talking to your computer. It's using
1:02:02 command line interface programs on a
1:02:05 terminal, but you don't have to actually
1:02:08 touch the terminal. You could use codecs
1:02:10 at the terminal if you wanted to, but
1:02:12 the desktop app is a much nicer, much
1:02:15 more comfortable interface for
1:02:17 beginners. But even for me as an
1:02:19 experienced user who really likes a
1:02:21 terminal, the Codeex desktop app has so
1:02:24 many conveniences and utilities for
1:02:26 power users like work trees that we're
1:02:28 going to be getting into that really
1:02:30 it's kind of the best environment for
1:02:32 everybody to do agentic coding. And so
1:02:35 inside codeex, there are these five
1:02:37 things that you're going to be able to
1:02:39 use to expand Codeex's abilities, the
1:02:43 types of things that it can do. And so
1:02:45 one of these is going to be plugins.
1:02:47 plugins are sort of builtin connections
1:02:50 that Open AI and various companies have
1:02:53 made to let you hook up to things like
1:02:56 Gmail, Google Drive, Fathom, Linear,
1:02:59 Figma, Notion, all these different
1:03:01 programs that you may already be using
1:03:04 and be able to talk to them from the
1:03:06 Codeex desktop app itself by just
1:03:09 clicking one button to install the
1:03:11 plugin, an authentication flow, and then
1:03:14 you've got access. Now, one of the
1:03:16 plugins that sort of deserves its own
1:03:18 category is that of computer use, which
1:03:22 allows you on a Mac, but soon to come on
1:03:25 Windows as well, to actually control
1:03:28 your entire user interface with codecs.
1:03:32 So, it can go and log in for you, look
1:03:36 at your emails, download attachments,
1:03:39 analyze them, all that kind of thing.
1:03:42 And all you have to do is enable this
1:03:44 from within codecs. Now plugins and
1:03:47 computer use set up these connections to
1:03:50 these tools, but you may have much more
1:03:53 particular workflows that you use that
1:03:56 build on top of tools like Gmail, Google
1:03:59 Drive or Notion. And so you may have a
1:04:02 lot more particular needs. So for
1:04:03 example, you may want to take your
1:04:06 emails and classify them every single
1:04:08 morning according to some heristic you
1:04:11 like to use. So you want to find
1:04:13 newsletters, summarize all of them. You
1:04:16 want to block spam. You want to flag
1:04:18 some high priority people like your boss
1:04:21 or your co-workers so that they come to
1:04:23 the top of your attention and especially
1:04:25 clients. And so ideally you'd like to
1:04:28 have some kind of automation very
1:04:30 particular to you and your workflows and
1:04:33 your business and your needs. That's
1:04:35 what skills enable you to do. And so
1:04:37 we'll be going into skills in detail.
1:04:40 Now under the hood, what a plug-in is
1:04:44 sort of doing is making a wrapper
1:04:47 usually around what are called MCPS or
1:04:51 model context protocol servers. So MCPs
1:04:55 are a communication standard that has
1:04:58 been established for different AI
1:05:01 systems to be able to communicate with
1:05:03 other systems. And so sometimes a plugin
1:05:07 may not already be available that
1:05:09 connects to a particular system, but
1:05:12 you'll still be able to connect to it if
1:05:14 it has an MCP or an API, in which case
1:05:18 you can build a skill. Now the
1:05:21 distinction between skills and MCPs is
1:05:23 often something that confuses beginners.
1:05:26 And so when I discuss MCPs, we'll be
1:05:28 getting into that in detail. And
1:05:30 finally, a last topic that we'll be
1:05:33 covering of codeex's main capabilities
1:05:36 is that of a sub agent. And so sometimes
1:05:39 you're okay working in a single codeex
1:05:42 thread, but other times, for example, if
1:05:45 you're doing summaries of a dozen
1:05:48 different PDFs, maybe it would be useful
1:05:51 for codecs to be able to parallelize
1:05:54 that task that you're doing. And there
1:05:56 are other kinds of situations that you
1:05:58 might imagine wanting to be able to
1:06:00 parallelize tasks with codecs. And sub
1:06:03 agents are the tool that allow you to do
1:06:05 that. just on call. You can basically
1:06:08 spin up many different instances of
1:06:11 codecs and have them attack some problem
1:06:14 that can be broken up that way much more
1:06:16 quickly and much more efficiently. So
1:06:19 that's the last sort of final primitive
1:06:21 that we'll be getting into. Now the one
1:06:23 of these five that I personally like the
1:06:26 best and which I use the most are
1:06:28 skills. And I think that once we get to
1:06:30 that section, you're going to learn why.
1:06:32 But the one that's really the easiest to
1:06:35 use and will get you value right away.
1:06:37 And so which is why I'm going to be
1:06:39 showing it to you first are plugins. So
1:06:41 we're going to be starting to talk about
1:06:43 plugins first. So to start, what exactly
1:06:47 goes inside a plugin? Well, they're
1:06:50 basically combinations of the following
1:06:52 three. There's skills, which again we'll
1:06:55 get into later. MCPs and apps, which are
1:07:00 connections made from the chat GPT app
1:07:03 itself. And so you might be saying,
1:07:05 Anik, you haven't even explained to me
1:07:07 what skills and MCPs are yet. How do I
1:07:10 use plugins? Well, it's actually quite
1:07:12 easy. Let me show you how. So, if we
1:07:14 come over here to the desktop app,
1:07:16 you'll see on the top left an icon and a
1:07:20 little label for plugins. So, let's
1:07:21 click on that. And then immediately
1:07:24 scrolling through here, you'll see a
1:07:26 large series of plugins. So if you use
1:07:28 Outlook, you can connect to your Outlook
1:07:31 calendar directly from Codeex. You can
1:07:34 connect to your Outlook email. If you
1:07:36 want to build iOS apps, then there's a
1:07:39 plugin to facilitate certain aspects of
1:07:42 building an app. So you can come here,
1:07:44 click in on it, and you can see what
1:07:47 this plugin includes. And so, as I was
1:07:50 saying, there's an MCP server here,
1:07:53 which is included, which helps you debug
1:07:56 apps on simulators. And then there's a
1:07:59 bunch of skills here as well for certain
1:08:02 kinds of things which are useful to do
1:08:04 in iOS, adopting modern iOS patterns. I
1:08:08 actually haven't tried this out yet, and
1:08:10 I'm building an iOS app, so I'm
1:08:12 definitely going to try it out. Let me
1:08:13 show you a few more cool plugins. So,
1:08:16 this one is for Remotion. If you haven't
1:08:18 heard of Remotion, it's a React library
1:08:20 that helps you create videos from code.
1:08:23 And so if you just install this plugin,
1:08:26 this plugin just consists of a single
1:08:29 skill, which for now you can just think
1:08:31 of as a set of text instructions on how
1:08:34 to apply Remotion for this programmatic
1:08:36 video creation. So there's a few more
1:08:39 cool plugins that I'm seeing here. So,
1:08:41 first there's many for financial
1:08:44 research to Morning Star, Moody's, and
1:08:46 Dow Jones. And I think this one looks
1:08:50 really cool. There's a Read Wise plugin
1:08:53 where if you're using Readwise to
1:08:56 highlight different things in your
1:08:58 Kindle or on the internet or whatever,
1:09:01 you can use this plugin, which this one
1:09:04 is just an app to search across all of
1:09:08 your highlights, everything in your
1:09:10 library, anything that you would want to
1:09:12 do in Read Wise as possible. Now, the
1:09:14 plugin which I want to show you and
1:09:16 demonstrate here is the notion plugin.
1:09:19 So if you're not familiar with notion,
1:09:22 it's a software which people use for a
1:09:24 lot of personal knowledge management. So
1:09:26 I have all sorts of different databases
1:09:29 that I've put together. This is a
1:09:31 database of local newsletters. I used to
1:09:33 do some work in the local media space.
1:09:35 And so if I want to set up this
1:09:37 connection to notion, all I have to do
1:09:40 is come here and press add to codeex. So
1:09:43 let me do that right now. Okay. Just
1:09:45 going to say install. Great. It's
1:09:47 installed. And so let's go here to try
1:09:50 and chat. And you can see that when you
1:09:52 click that button, this thing is already
1:09:55 available, but let me get X out of it.
1:09:58 And you can see right here it says at to
1:10:00 use plugins. We already covered that. So
1:10:02 I'll go at notion. And let's say how
1:10:05 many newsletters are in my local
1:10:10 newsletter database in notion. And let
1:10:13 me put this reasoning effort on Medium
1:10:15 so it goes a little bit faster. All
1:10:16 right. So we see that it's using notion
1:10:19 thinking. I found a database titled
1:10:22 newsletters database which looks like
1:10:23 the target. The database has a single
1:10:25 data source. So this is nice and clean.
1:10:27 I'm running a count now. All right. So
1:10:30 this count thing didn't work because
1:10:32 that's actually not available in notion.
1:10:36 All right. So this one is trying to
1:10:38 work. It found the database, but it
1:10:40 seems to be getting stuck and saying
1:10:42 that it can't query more than 25
1:10:45 newsletters from the database. And so
1:10:47 going back to these five capabilities,
1:10:50 this is actually a useful instruction.
1:10:52 So these plugins are like connections to
1:10:56 external systems. And this experience
1:10:59 that I'm having right now with the
1:11:01 notion plugin is probably something that
1:11:03 you're likely to have too when you try
1:11:05 to use plugins out of the hood because
1:11:07 they're not super customized. And so
1:11:10 they don't have all the cases for your
1:11:13 particular workflows built in. And so if
1:11:15 I instead built a skill using the notion
1:11:18 API, I'd be able to have something much
1:11:21 more specific like an instruction that
1:11:24 whenever you interact with a database,
1:11:27 make sure you pass a pageionation
1:11:30 parameter to go through all the results.
1:11:33 Or initially it was trying to use some
1:11:35 kind of count query to count all the
1:11:38 records in the database. And so instead,
1:11:40 I would figure out what the right way is
1:11:42 to do things and then just have that in
1:11:45 the skill instruction that I created.
1:11:48 All right. Interesting. So it can't get
1:11:50 the exact count. Can you look up whether
1:11:55 the Catskill crew in Anapapolis,
1:11:59 Maryland is in the database? Wow, I
1:12:02 spelled database wrong. So let's see if
1:12:05 at least it's able to find a record in
1:12:08 Notion. Ah, so I actually made a
1:12:10 mistake. This newsletter isn't in
1:12:12 Annapolis. It's in the Cascills regions
1:12:14 of New York. And it found the URL. So
1:12:16 it's in there. Do you find anything from
1:12:20 Annapolis? And so let's see if it can do
1:12:22 that. All right. So it didn't find
1:12:24 anything for Annapapolis, Maryland. So
1:12:26 let's see if we can add a record to the
1:12:29 database. So I'm going to ask it, can
1:12:31 you do a search for newsletters in
1:12:35 Annapolis? I think there's one starting
1:12:39 with Naptown. Look up its deets and add
1:12:44 it. All right. So, it found a
1:12:46 newsletter. It even found the owner on
1:12:49 the internet. And now it's going to try
1:12:51 to add that to notion. So, that's pretty
1:12:55 cool. It found his LinkedIn, his
1:12:57 Twitter, the owner website, and it says
1:12:59 I verified the new notion row exists
1:13:02 here. So, let's go take a look. And
1:13:03 yeah, we see it over here. And if we
1:13:06 come back to this database, we see that
1:13:07 the last record here now includes this
1:13:10 newsletter. So the plugin is pretty
1:13:13 handy. There's maybe some things you
1:13:15 can't depend on, but if out of the hood
1:13:18 you're using notion databases, you want
1:13:20 to be able to interact with them with
1:13:23 codecs and apparently you don't care
1:13:25 about counting, you just want to be able
1:13:27 to add records and retrieve them, then
1:13:29 this is going to work for you right out
1:13:31 of the gate. And so as you go through
1:13:33 here, I think that a lot of you are
1:13:35 going to want to try out, for example,
1:13:36 the Gmail, Google Calendar, and Google
1:13:39 Drive plugins. And I recommend that
1:13:42 because there's going to be immediate
1:13:43 added value to having those integrated.
1:13:46 And there's a Slack plugin. Now, one
1:13:49 question you might have is why don't I
1:13:51 use these? You can see that I'm not
1:13:53 using these right now, and in fact, I
1:13:55 wasn't using the Notion one either. And
1:13:57 that's because I've created my own more
1:13:59 specific workflows using the notion API
1:14:03 directly with the skills concept. So
1:14:06 this is prefacing where we're going to
1:14:07 go. But if I search notion here, we see
1:14:10 that in one of my projects for pay slice
1:14:14 where I'm the director of AI and ML,
1:14:16 I've created a kind of exhaustive set of
1:14:19 SOPs for lots of different things we do
1:14:22 for managing support cases, emails that
1:14:24 come through and triage that we have to
1:14:26 do all inside notion. So this is a much
1:14:29 more specific set of instructions that
1:14:32 I've developed and I have that for
1:14:34 email, Slack, and Drive as well. But if
1:14:38 you don't want to figure out how to do
1:14:39 that right now, you want to get started,
1:14:41 have something useful to do, definitely
1:14:43 use plugins. Now, something else worth
1:14:46 saying is that you can build your own
1:14:48 plugins, too. I consider this a kind of
1:14:51 advanced feature that's outside the
1:14:54 scope of this course, which I'm making
1:14:55 for total beginners, but I do want you
1:14:58 to be aware of this possibility. And
1:15:01 additionally, you can install plugins
1:15:03 that are created by third parties. And
1:15:06 so if you come in here, you can see that
1:15:08 right now all the plugins available say
1:15:11 built by open AI. And if you want to see
1:15:14 plugins that are built by other people,
1:15:16 you have to register what is called a
1:15:19 marketplace. Now, we're going to be
1:15:22 getting to this concept a little bit
1:15:24 later because for app development
1:15:27 workflows or just complex agentic
1:15:30 workflows, there's a plugin here which I
1:15:32 really like to use called compound
1:15:35 engineering. Now, this plugin used to be
1:15:38 primarily for claw code, but recently
1:15:41 they've made it feasible to use natively
1:15:44 within codeex as well. So once we get to
1:15:46 the part of the course where we're
1:15:48 developing an application live, we're
1:15:50 going to be using this plugin for this
1:15:53 and that plugin has skills, it has sub
1:15:56 agents and so all of this is going to
1:15:58 come back and sort of congeal into one
1:16:01 thing. You know, all this knowledge will
1:16:03 be reinforced throughout the course. All
1:16:05 right, the next thing I want to teach
1:16:07 you guys is about a particular plug-in
1:16:10 called computer use. Everything Codeex
1:16:13 has done so far has been inside your
1:16:16 files and your terminal. Computer use
1:16:19 flips that. Codeex actually opens up
1:16:22 programs, reads what's on the screen,
1:16:24 fills out forms, and clicks buttons
1:16:27 itself. So instead of setting up a
1:16:29 notion plugin like we just did, you
1:16:32 could just use computer use to have
1:16:35 codecs operate in notion itself. Now,
1:16:38 computer use is so important that if you
1:16:41 look here in your settings menu, it's a
1:16:44 plugin which has its own tab over here.
1:16:47 And so, if you want to use it, you come
1:16:49 here to computer use. You can click on
1:16:51 it. You'll have to go here and install
1:16:54 it. And then you'll have to go through a
1:16:56 set of permissions prompts to be able to
1:16:59 let codeex computer use control things
1:17:02 on your computer. But once you have it,
1:17:05 you'll be able to give commands like
1:17:07 this. Play a playlist to help me lock
1:17:09 in. Okay, that's kind of trivial. Play a
1:17:12 game in chess.app. I guess if you want
1:17:14 to play chess with codeex also may be
1:17:17 useful, but more importantly is that you
1:17:20 can give it prompts like this. Build and
1:17:23 run my open Xcode project and test it
1:17:26 for bugs. So, this is going to be a tool
1:17:28 which once we get to the app development
1:17:30 part of this course, you're going to be
1:17:32 able to have Codeex try out the
1:17:34 application you made and make sure it
1:17:37 actually works like you think it would.
1:17:39 Now, unfortunately, computer use right
1:17:41 now is only available on Mac, but Open
1:17:46 AI has said that this feature will be
1:17:48 coming to Windows as well. So, if you're
1:17:50 on Windows, feel free to skip this, but
1:17:52 eventually it's going to be useful to
1:17:54 you. And for Mac users, definitely stick
1:17:56 around. This is a very useful feature
1:17:58 instead of staying at a theoretical
1:18:00 level with computer use for a while. I
1:18:03 think it's just going to be helpful to
1:18:05 show you a practical kind of thing that
1:18:07 computer use is able to do. So, I'm
1:18:09 going to open this up. Say try in chat.
1:18:12 Let's work in my agentic config chat.
1:18:15 We're going to work locally. I'm going
1:18:17 to say, can you go on X, look up my list
1:18:25 of economists, and give me a summary of
1:18:30 things they've tweeted in the last
1:18:34 couple days I might find interesting.
1:18:37 Yeah. So, X has an API. It's a little
1:18:40 bit expensive to use. And so something
1:18:43 I'm curious here is codeex capable of
1:18:47 doing a search or summary of content on
1:18:51 Twitter without using the API because if
1:18:54 that is possible then what I could do is
1:18:57 make a set of profiles and later we're
1:19:00 going to be getting into this but I
1:19:01 would be able to use this computer use
1:19:04 plugin to create an automation which
1:19:06 makes a summary for me of tweets from
1:19:10 economists that I find interesting. And
1:19:12 what you can see here is that this tool
1:19:15 is able to navigate on Chrome. And you
1:19:18 can actually see right there that it's
1:19:20 actually looking at Chrome itself and
1:19:23 it's doing this in the background
1:19:25 without blocking the rest of what I'm
1:19:27 doing. That's something really
1:19:30 miraculous here that Open AI has been
1:19:32 able to figure out and configure with
1:19:35 computer use. So I can go on and you
1:19:38 know I'm working on some other things as
1:19:39 well like this project here and I can
1:19:43 keep working on this project while in
1:19:46 the background codeex is doing an
1:19:49 analysis of all these different
1:19:51 economists tweets. So this is pretty
1:19:54 incredible. Here we got in just a few
1:19:56 minutes a complete set of summaries of
1:20:01 all these tweets from all these
1:20:03 economists that I follow. And if I like
1:20:06 click on one of these, it's going to
1:20:08 take me right to that tweet. So that was
1:20:10 actually a repost of something an
1:20:12 economist. There's another repost.
1:20:15 Repost. Let's take a look at an actual
1:20:17 post. Okay, good. So it is going to an
1:20:20 actual post. And this is like a
1:20:23 relatively recent post. And then it's
1:20:25 got some small fun ones. I'm pretty
1:20:27 happy with that. Now, what else could
1:20:30 you use this for? Well, one of the
1:20:33 things that I have to do at Pay Slice is
1:20:36 I review session recordings like this
1:20:38 one of users actually interacting with
1:20:41 our application and I try to see places
1:20:45 where there may be having bugs. Now,
1:20:48 that's a little bit timeconuming. It's
1:20:50 not something that I always want to be
1:20:52 doing and so something very nice is that
1:20:55 I'm able to use computer use to automate
1:21:00 that as well. And then I get bug reports
1:21:03 directly that involve very detailed
1:21:07 analyses of where certain user flows
1:21:10 break down. And so this is a little bit
1:21:12 forward thinking, but a lot of you may
1:21:14 have aspirations of building
1:21:16 applications yourself. And computer use
1:21:19 is going to be very useful for that.
1:21:21 I've also used computer use to set up my
1:21:24 projects in Da Vinci Resolve when I'm
1:21:26 trying to move certain files onto my
1:21:29 timeline. And so I think that this is a
1:21:31 direction that just AI is going to be
1:21:34 moving in general, especially as the
1:21:37 underlying vision models keep getting
1:21:39 better. I put out a video recently on
1:21:41 chat GBT's image model, which is
1:21:43 absolutely incredible, and it's part of
1:21:46 the reason why computer use is able to
1:21:48 work so well in codecs. Now, most of the
1:21:51 time if there's a plugin available and
1:21:54 you're a beginner and you don't want to
1:21:56 make your own skill, which is coming up
1:21:58 in the next section, then you can just
1:22:00 use the plugin. But sometimes there are
1:22:02 things that plugins won't enable you to
1:22:05 do. And so computer use can be a way to
1:22:07 get around them. But let's say you
1:22:09 wanted to have some kind of automated
1:22:12 workflow, whether with computer use or
1:22:14 with anything else. the one of the five
1:22:18 primitives that I just told you about
1:22:20 that you're going to want to use are
1:22:22 skills. So, let's get into that topic.
1:22:24 So, if you recall this figure, plugins
1:22:27 and computer use, which we discussed
1:22:29 right now, are kind of like one click
1:22:33 and they get set up right away. And
1:22:35 that's why I wanted to introduce them
1:22:37 first because you'll be able to get
1:22:38 immediate use out of them even without
1:22:41 really knowing and understanding how
1:22:43 skills work. But once you want to have
1:22:46 very specific instructions for your
1:22:48 particular workflows, skills are the
1:22:51 tool that you're going to want to use.
1:22:53 So what are some types of example skills
1:22:56 that I use myself? Let me show you. So
1:23:00 if you come here to the plugins tab and
1:23:02 then click on skills, you can see a set
1:23:05 of skills that you can just install
1:23:07 right away. So one new skill which Open
1:23:10 AI has recently come out with is this
1:23:13 image gen skill. So you can generate
1:23:16 images inside codecs using the new chat
1:23:19 GPT images 2.0 model. A pretty common
1:23:22 type of skill that I'll have are writing
1:23:25 skills that convert from one format to
1:23:28 another. So, I've gotten kind of bad
1:23:30 about this, but for a lot of my videos,
1:23:32 I'll have corresponding tutorials on my
1:23:35 site, and I use this skill to take the
1:23:38 transcript of YouTube videos and then
1:23:41 turn that into a tutorial that shows up
1:23:44 on my website. Now, that's not the kind
1:23:46 of thing for which anybody's ever going
1:23:47 to create a plug-in, but it's something
1:23:49 that I can make with codeex myself to
1:23:51 automate a manual workflow. Here's an
1:23:54 example from Pay Slice. We have a
1:23:56 support email inbox where users can send
1:23:59 in complaints and I have a support email
1:24:03 skill that I've developed to handle the
1:24:05 different kinds of cases that we have
1:24:08 but then also create in our notion
1:24:10 database a support ticket to make sure
1:24:13 that we're monitoring that and then also
1:24:16 link to clarity which is that tool we
1:24:19 can use to see user behavior to actually
1:24:22 try to link the user's issue to
1:24:25 something that they're actually
1:24:26 experiencing in the application. And
1:24:28 finally, here's a very simple one. I
1:24:30 have a skill to interact with my
1:24:32 WhatsApp. So, I use WhatsApp a lot for
1:24:35 family and friends. And I can use this
1:24:38 skill to interact with and search
1:24:41 through all my WhatsApp messages. You
1:24:43 can do this with iMessage as well, with
1:24:45 Telegram, with Discord. I have one for
1:24:48 Slack that I use a lot and I find very
1:24:50 useful. Now, what a skill is often
1:24:53 described as is simply just a text file.
1:24:56 And that is a little bit deceiving
1:24:59 because rather than thinking of it as a
1:25:01 text file, you should think of it as a
1:25:03 folder. What does that folder include?
1:25:06 Well, one, it has to always include this
1:25:10 skill.md file. It has to have that name.
1:25:13 It has to have the MD extension. This is
1:25:15 the standard that is developed in the
1:25:17 agentic coding space. Then along with it
1:25:21 that skill may come with scripts. So for
1:25:24 my WhatsApp skill or that YouTube to
1:25:28 tutorial skill, I have scripts that
1:25:31 interact with my WhatsApp that interact
1:25:33 with my database and the skill.md file
1:25:36 teaches codecs how to use those scripts.
1:25:40 Next, sometimes you may have other
1:25:43 outside reference documentation. An
1:25:45 example of when you may have this is if
1:25:47 you have some kind of front-end design
1:25:50 skill to describe your design tastes or
1:25:53 preferences. Maybe you would have images
1:25:56 as references in the references folder
1:25:58 or actually maybe you'd put them in the
1:26:00 assets folder, but these are kind of
1:26:02 funible. You can have whatever folder
1:26:04 structure here you want. This is just a
1:26:06 pretty common way to put it together.
1:26:08 And then finally in codeex itself,
1:26:11 there's a concept here of an open AI.l
1:26:14 file. This is kind of the least
1:26:16 important aspect of skills, but it is
1:26:18 some codec specific metadata that you
1:26:20 can optionally add to a skill, which
1:26:22 makes interacting with it in codecs a
1:26:25 little bit better, a little bit
1:26:27 smoother, as I'll explain in a few
1:26:28 slides. Now, the most important part of
1:26:31 that structure I told you is the
1:26:33 skill.md.
1:26:35 And so, here's what a skill.md file
1:26:38 typically looks like. So it starts with
1:26:41 this mandatory section which has a front
1:26:44 matter and so that front matter is a
1:26:47 name and a description. So every skill
1:26:50 has a name. I have a WhatsApp
1:26:51 description and then the description
1:26:54 tells codeex when this skill should be
1:26:58 used and for what it should be used.
1:27:01 Then below that there's a set of
1:27:03 instructions on the skill that codeex
1:27:06 should follow. Now when you look at a
1:27:08 skill in this skills view in the codeex
1:27:10 desktop, this is basically what the name
1:27:14 is. And then this right here is a
1:27:16 description. And then this over here is
1:27:20 a beautified version of the markdown
1:27:23 body of the skill. And so this is a
1:27:25 skill that I use to take all my Fathom
1:27:28 recordings and grab the transcripts and
1:27:30 put them to a particular location on an
1:27:33 external hard drive right here, which I
1:27:36 can then use and have to always be able
1:27:38 to look over all my Fathom recordings.
1:27:41 If you want to see it raw, you can go
1:27:43 over here and click open. And now in
1:27:45 this view in VS Code, you can now see
1:27:49 the skill in its sort of raw text
1:27:52 format. So, it's got that name and then
1:27:55 it's got this description and then
1:27:57 there's a skill file. And you can see
1:27:59 here that it says use the bundled bun
1:28:03 CLI. So, I have a bundled script that it
1:28:06 uses to interact with Fathom. And then
1:28:10 here it tells it you need to have these
1:28:12 API keys available. These are the
1:28:14 different ways in which you may want to
1:28:16 use it. Now, something you might be
1:28:17 thinking when you're seeing this is,
1:28:19 well, I'm not a programmer, so how will
1:28:22 I ever be able to make these skills?
1:28:24 Well, I am a programmer, but I didn't
1:28:27 program any of these skills by hand, any
1:28:30 of the scripts that these skills use. I
1:28:32 simply tell Codeex what I want and
1:28:34 natural language instructions, and then
1:28:36 it creates the skills for me. And so,
1:28:38 I'm going to give you a demo of that a
1:28:40 little bit later in this section. Now
1:28:42 coming back to this slide, you may ask
1:28:45 like why does it matter that a skill.md
1:28:48 file is structured in this particular
1:28:51 way? And why not just put all the
1:28:54 references, the assets, and everything
1:28:56 in like one single file? Wouldn't that
1:28:58 be simpler? Well, if you might remember,
1:29:01 a big part of getting good results out
1:29:04 of Agentic coding tools is being very
1:29:06 particular about what sort of context
1:29:09 you're giving them at particular times.
1:29:11 And so you don't want to give the tool
1:29:14 information it doesn't need because then
1:29:16 your context window will fill up. You'll
1:29:18 hit the compaction point and you won't
1:29:21 be able to work as effectively or if
1:29:23 there's irrelevant information in there,
1:29:25 it might get confused and not do what
1:29:27 you want it to do. What skills allow you
1:29:29 to do is use a concept called
1:29:32 progressive disclosure. So when codeex
1:29:35 boots up, it boots up the system prompt,
1:29:39 the agents.m MD, and it boots up all the
1:29:42 skills into its context. But the only
1:29:45 parts of the skill that enter into
1:29:48 Codeex's context before you've done
1:29:50 anything is this metadata. So the name
1:29:53 and description. And that only costs
1:29:56 about a 100 tokens, let's say, on
1:29:58 average per skill, which let's say you
1:30:01 have 50 skills. That's 5,000 tokens. And
1:30:04 since our context window is like 260
1:30:08 270,000 tokens, that's not that bad. So
1:30:11 like that's not a horrible amount of
1:30:14 context usage before you've even started
1:30:16 doing anything. But the skill.md body
1:30:21 might be a,000 tokens, 2,000 tokens,
1:30:25 maybe even 5,000 tokens. And so if we
1:30:28 loaded up every single skills body into
1:30:31 the context, we would quickly hit our
1:30:34 compaction point even before we hit a
1:30:36 single message. And so that's really
1:30:39 what prompted the AI community to come
1:30:42 up with this concept of a skill to have
1:30:45 some way to allow Agentic coding tools
1:30:48 to do these specialized tasks, but then
1:30:50 also be able to protect the context
1:30:53 window while you're doing it. Another
1:30:56 important aspect of skills is where they
1:30:59 actually live. And so not every skill is
1:31:02 going to be available or you may even
1:31:05 want available in every project. So for
1:31:08 example that skill that I use to convert
1:31:11 YouTube videos into tutorials I have
1:31:14 installed at the level of a particular
1:31:17 project or repository. And so the place
1:31:20 that it needs to be located in the
1:31:23 project structure is in this agents
1:31:26 directory and then at the skills
1:31:29 subdirectory in that particular project.
1:31:32 Next there are user skills and so the
1:31:35 user skills are skills that you want to
1:31:38 have available across all projects.
1:31:40 WhatsApp for me is one of those that you
1:31:44 know from any project in any directory I
1:31:47 may at some point just want to check in
1:31:49 on my WhatsApp messages and so you would
1:31:52 put that at your tilda which is your
1:31:55 home directory in the same
1:31:57 aagents/skills
1:32:00 directory and then finally there are
1:32:02 system skills so these are skills that
1:32:04 come bundled with codecs and are just
1:32:07 always available you don't manage these
1:32:09 but you should still beware aware that
1:32:11 they exist because you're going to use
1:32:12 them, especially these two, skill
1:32:14 creator and skill installer. Now, as I'd
1:32:17 mentioned before, there's a set of
1:32:19 skills that you can install just by
1:32:21 clicking a button and then installing a
1:32:24 skill. And then once you've done that,
1:32:27 once you have skills available, either
1:32:30 through this codeex UI or by installing
1:32:33 them from the internet, I'll show you
1:32:34 how to do that. How do you actually use
1:32:37 the skills? First in this composer you
1:32:40 can just put in a dollar sign and then
1:32:42 all the skills that are available to you
1:32:45 either in the particular project that
1:32:47 you're in right now or your set of
1:32:50 personal skills or system skills will
1:32:53 all show up here. And so you can see
1:32:55 that there's five total system skills
1:32:57 here. And we're going to be talking
1:32:59 about a fair number of those. And so if
1:33:01 I go like this and then I type in back
1:33:03 test, I've now invoked that skill and
1:33:06 then like whatever instructions I say
1:33:09 are going to be interpreted in the
1:33:11 context of that skill. But additionally,
1:33:14 as I mentioned, for all of these skills,
1:33:17 the name and description are loaded into
1:33:20 Codeex's context. And so if you simply
1:33:23 type something in and codeex is able to
1:33:26 infer that like that particular skill is
1:33:30 what we should be using in this
1:33:32 situation, it will autonomously decide
1:33:35 without you needing to specify the skill
1:33:37 specifically to use that skill. If
1:33:40 whatever you're doing seems to match
1:33:42 that workflow, it's not a guarantee that
1:33:45 codecs will act at a particular moment
1:33:48 and you can have skills that conflict or
1:33:51 it may not be super obvious when to use
1:33:54 one or the other. And so that's
1:33:55 somewhere where iterating on your name
1:33:58 and really the description can help out
1:34:00 quite a bit. Now, what skills are often
1:34:03 doing under the hood is they're just
1:34:05 helping codecs understand how to operate
1:34:08 some script and make it useful for you.
1:34:10 So, let me show you an example of doing
1:34:13 exactly that. So, this right here is a
1:34:17 tool called YTDLP.
1:34:19 You can use it to interact
1:34:21 programmatically with YouTube and a lot
1:34:24 of other websites from which you want to
1:34:26 download YouTube videos. And so, I like
1:34:28 it quite a lot. I use it for doing
1:34:31 research against YouTube. I mean,
1:34:33 YouTube does have this Gemini summarize
1:34:36 feature, but oftentimes what I want to
1:34:38 do is a lot more custom. And so, what I
1:34:40 want to do now is create a skill that
1:34:45 starts with YouTube, but then we'll do
1:34:47 something fun. Now, if you want to
1:34:49 create a skill, the right tool to use
1:34:52 here is the skill creator skill, which
1:34:56 comes with codeex. And so the first
1:34:58 thing I'm going to say is that I want to
1:35:00 create a skill in this repo because as
1:35:04 you remember there are different scopes
1:35:05 for skills and so I want this skill to
1:35:07 be available just to this project. But
1:35:09 in order to do make this skill it's
1:35:12 going to require access to this tool
1:35:14 YTDLP. And so my recommended way for you
1:35:19 to install this is using a tool called
1:35:21 homebrew. If you've never used homebrew
1:35:24 before I want you to go to brew.sh sh
1:35:27 and then copy this right here. Then come
1:35:31 back to codeex and then type in command
1:35:35 J. And that's going to open up a
1:35:37 terminal like this. Then you simply
1:35:40 paste that command that you just copied.
1:35:43 Press enter. It might ask you for your
1:35:45 password. You put it in and then let it
1:35:49 install this tool. So, Homebrew is a
1:35:51 very handy tool to be able to easily
1:35:53 install a lot of useful packages that
1:35:56 Codeex can then use. Once it's done, I
1:35:59 want you to copy this that says brew
1:36:01 install YTDLP and then back here in the
1:36:05 terminal, just paste that in. Press
1:36:07 install and it'll go through an
1:36:09 installation process. That's basically
1:36:11 the only reason why I'm going to need
1:36:13 you to use the terminal in this course.
1:36:16 In the Clawed Code course, I was a lot
1:36:18 more terminalheavy because when I made
1:36:20 that course, the Cloud Code desktop app
1:36:23 was pretty bad. It's since improved. So,
1:36:26 if I was remaking that course, I
1:36:28 wouldn't have focused on the terminal so
1:36:29 much and just stayed in the desktop app.
1:36:31 But lucky you guys, you don't have to
1:36:33 learn about the terminal, you can stay
1:36:34 pretty much entirely inside the app
1:36:37 except when we're just installing a few
1:36:39 useful utilities like that one. So,
1:36:41 we're back here. I want to create a
1:36:43 skill in this repo. It should use YTDLP.
1:36:48 I want it to combine with image gen by
1:36:56 downloading the transcript of the video
1:37:00 and creating a very detailed
1:37:04 infographic
1:37:06 of the video. something pedagogical
1:37:13 slashexpository.
1:37:15 So what I want to see here is can we
1:37:18 combine a few things together? I want to
1:37:20 make a skill. The purpose of this skill
1:37:22 is to create some kind of visualization
1:37:25 which helps me visualize what's in a
1:37:28 video. And so if you've got a codec
1:37:30 subscription, you have access to this
1:37:32 new utility to do image generation. I
1:37:35 made a video here that like nobody cared
1:37:38 about about this, but it really was
1:37:40 mind-blowing to me. I made this
1:37:42 thumbnail here with this new feature.
1:37:44 Oh, yeah, and one other thing. You might
1:37:46 notice here that now the UI looks a
1:37:49 little bit different. It says 5.5 extra
1:37:51 high. That's because just I'm recording
1:37:54 this over multiple days and now the 5.5
1:37:57 model is out. So, that's the one I
1:37:58 recommend you guys use. So, it already
1:38:00 decided what it's going to call the
1:38:02 skill. It's going to call it YouTube
1:38:04 infographic. If you had a specific name
1:38:06 that you wanted to give it, it would do
1:38:08 that. So, let's just see how this goes.
1:38:11 All right. So, it worked for 6 minutes
1:38:14 and it's created the skill. So, let's
1:38:16 take a look at the skill itself. If you
1:38:18 click on it, it's going to open up here.
1:38:20 And let's make this big so that you can
1:38:22 see the whole thing. Is there any way to
1:38:23 do word rap? I guess not yet. It's
1:38:26 coming along, right? So we got the name,
1:38:28 description, download YouTube videos,
1:38:30 metadata and transcripts with YTDLP and
1:38:33 a handoff to this image gen skill. So
1:38:35 this is important to know that like
1:38:37 skills can kind of chain together and
1:38:40 that's what I'm demonstrating here. Then
1:38:41 it's got you know like uh some
1:38:43 instructions prefer human subtitles when
1:38:46 available etc. And it also created a
1:38:49 reference like infographic brief I guess
1:38:52 of how to create infographics. So let's
1:38:55 take a look at that. use this reference
1:38:57 after fetching transcript.md and before
1:39:00 invoking image genen extract these items
1:39:03 from the transcript. So let's just look
1:39:05 for a video that maybe I would want done
1:39:09 this way and then just try it out. So
1:39:12 we're here on YouTube uh the original
1:39:15 technobiking video. That's you know well
1:39:18 set. I spent my entire life trying to be
1:39:20 smart but I'm Let's do that.
1:39:23 That sounds exactly like the kind of
1:39:25 thing that I would want to create an
1:39:27 infographic about. Let's try it with
1:39:31 this video. Make it funny. All right,
1:39:36 let's see how it works. All right, so
1:39:38 this is interesting. Created an
1:39:39 infographic brief. Can we look at that?
1:39:43 General self-improvement audience. It
1:39:45 can handle a loud comic motivational
1:39:48 style. Use a comedic operations map
1:39:52 poster. The anti-overthinking
1:39:54 field manual teaching units
1:39:58 verbatim labels for image. Yeah, let's
1:40:02 see how it goes. I guess an important
1:40:04 note here is that he's kind of edgy.
1:40:07 Founder of Andre Horowitz tweets about
1:40:09 this guy a lot. I like him too. He's
1:40:11 funny, but he does say the R word and
1:40:14 you're not supposed to say that. So GPT
1:40:16 will not let you include those kinds of
1:40:19 word cruelty I guess fake statistics and
1:40:23 decorative only imagery FYI. All right
1:40:26 is done. Check that out. So, one thing
1:40:29 I'll say is that this like is kind of
1:40:32 like funny in a cheesy way or I don't
1:40:36 really think it's that funny, but for
1:40:39 the purposes of creating this skill,
1:40:41 especially if we were making it on like
1:40:43 more serious topics like a visualization
1:40:46 of some machine learning topic or you
1:40:49 could even try it out on my own videos.
1:40:51 Maybe that's what I should have tried
1:40:52 out instead. It's pretty good. Like,
1:40:54 it's pretty freaking good. Now, this is
1:40:56 kind of coming up in an unfortunately
1:41:00 displayed way, but if you look here in
1:41:02 the file viewer, you'll see that there's
1:41:04 an agents directory as well in which
1:41:07 there's something called openai.yaml.
1:41:10 This is sort of the optional thing that
1:41:12 Codeex will create when it creates this
1:41:14 skill creator skill that goes along with
1:41:18 your skill. So, what is this exactly?
1:41:20 It's basically a set of instructions to
1:41:23 give a little bit of extra UI polish
1:41:27 specifically in the codeex app. So if
1:41:30 you don't have this and the skill shows
1:41:32 as its folder name only. And so for
1:41:35 example, one of the things here that's
1:41:37 included is this thing that says display
1:41:40 name Figma. And so when I type in dollar
1:41:43 sign, you'll see that these are all
1:41:46 showing up in like a regular capital
1:41:49 case, right? And that's because there's
1:41:52 these open ai.yammo files in the skill
1:41:56 directly that is teaching, you know, how
1:41:59 to format things. You can also decide if
1:42:02 you want to be really hardcore to have
1:42:04 little icons that go along with your
1:42:07 skills. And over here you can have a
1:42:09 sort of default prompt that is initiated
1:42:12 whenever you use a particular skill. So
1:42:16 this is optional and it's something that
1:42:19 the skill creator skill will make for
1:42:21 you itself. But something to be aware of
1:42:23 if you see this thing showing up in your
1:42:25 directory and you don't really know what
1:42:27 it is. Now I showed you how to make
1:42:29 skills, but what if you just want to use
1:42:31 a skill that somebody else has on the
1:42:34 internet? And first of all, how do you
1:42:36 even find other skills in the first
1:42:38 place? Well, unfortunately, but actually
1:42:42 it's not that big of a deal, but
1:42:43 unfortunately, there isn't like some
1:42:45 central repository of all skills. As you
1:42:48 see, like these things are pretty easy
1:42:50 to make. You can just kind of tell
1:42:53 Codeex your intent and then get the
1:42:55 skill out. So, when skills first came
1:42:58 out, there were people making a racket
1:43:00 trying to sell skills. I think that's
1:43:02 really stupid. There's very few people
1:43:04 from whom I would buy their skills. Most
1:43:07 of the people who are trying to sell you
1:43:09 skills are just taking advantage of your
1:43:13 lack of knowledge about this space. So
1:43:15 now you know you can pretty much make
1:43:17 your own skills for anything you would
1:43:18 ever want. And so me personally, I just
1:43:22 make pretty much all of my skills. I
1:43:24 almost never look for is there a skill
1:43:28 available to do something I want to do.
1:43:30 I just make my own skills because it
1:43:33 really is as easy as what I just
1:43:34 described. You can iterate on it and
1:43:36 there are more advanced ways to think
1:43:38 about the construction of skills, but
1:43:41 for most of what you guys want to do,
1:43:42 you can make a skill almost exactly just
1:43:45 like how I described. Now, if you do
1:43:47 want to find some skills, I would mostly
1:43:49 just Google or perhaps look on Twitter
1:43:52 for like skill for notion or something
1:43:54 like that. And then if you find a skill,
1:43:57 let's say it's on a GitHub repo or in
1:44:00 some web page which has an index of a
1:44:02 lot of skills, here's how you would
1:44:03 install it. So coming back here, if you
1:44:05 just type in skill, you'll see that
1:44:07 there's skill creator, but there's also
1:44:09 skill installer. And so let me find some
1:44:14 skill and then just show you me
1:44:16 installing it and then using it. So this
1:44:18 right here is Anthropic's front-end
1:44:21 design skill. It's a skill that you can
1:44:24 use and it consists literally of a
1:44:26 single file, nothing else to create
1:44:29 front-end interfaces that don't seem
1:44:32 generic. And so in the past, I found
1:44:34 Anthropic to be or rather claw to be a
1:44:36 lot better at design, especially when
1:44:39 you combined it with a skill like this.
1:44:41 Now, I actually find codeex to be my
1:44:43 preferred choice for design. Little bit
1:44:45 outside the scope of this video, but
1:44:47 something you guys can be aware of.
1:44:48 Anyway, part of the types of
1:44:50 instructions it gives here is to help
1:44:52 cloud code or codeex or whatever tool is
1:44:54 using these skills to avoid certain
1:44:57 kinds of things that AI tools tend to do
1:45:00 when they're creating interfaces. And
1:45:02 so, let's copy that and say, can you
1:45:05 install this skill just in this repo?
1:45:10 Enter. So, you found a skill, you want
1:45:12 to install it. This is how you would go
1:45:14 about installing the skill. You can ask
1:45:17 codeex to either install things in a
1:45:19 particular repo or at the user level. I
1:45:21 don't want to corrupt my other
1:45:23 interfaces. So I'm going to get it
1:45:25 installed just in this repo. And so you
1:45:27 can see the installer expects a skill
1:45:29 directly. All right. So the skill was
1:45:33 installed. It says restart codeex to
1:45:35 pick up new skills. So if I go front end
1:45:39 design, I'm seeing this because it's
1:45:41 part of another plugin that I use. All
1:45:43 right. So I restarted. Now, let's go
1:45:46 front end. Hm. It's not showing up. All
1:45:48 right. So, something to be aware of is
1:45:50 that it installed it in the wrong
1:45:53 location a few times. So, first it put
1:45:56 it in this skills directory. Didn't show
1:45:58 up and I was like, why isn't this
1:46:00 happening? But then I forgot this has
1:46:01 happened before. Then it put it in
1:46:03 theclaw directory. And then finally I
1:46:05 told it, no, it has to be in agents. So,
1:46:08 I put it there and now it shows up. And
1:46:12 so I can say uh make me a pretty website
1:46:17 about that YouTube video. Make it in the
1:46:21 theme of notion just a single HTML page
1:46:27 and then boot it up in the in browser.
1:46:31 So, let's see if we can use this skill
1:46:34 now that we installed to make an example
1:46:37 website about the same YouTube video and
1:46:40 see what comes out. All right, here it
1:46:43 is. So, haven't told you guys this yet,
1:46:45 I think, but Codeex has an inapp web
1:46:49 browser which is very useful to use when
1:46:52 developing a video. And you can see here
1:46:54 that this is like a pretty neat website
1:46:59 that it's made. It's notion themed. Even
1:47:02 included that image that we just created
1:47:04 all in this website. So you can really
1:47:07 expand the set of possibilities here
1:47:09 once you just make a little bit of
1:47:12 progress at understanding how these
1:47:15 tools work. And you can see right now
1:47:16 it's actually using computer use. So
1:47:19 it's sort of combating with me to take a
1:47:22 look at this website and see if it looks
1:47:24 formatted properly. And so now it's
1:47:26 finding, you know, some mistakes in the
1:47:29 formatting here, I guess. And this thing
1:47:32 over here is codeex's or rather computer
1:47:35 uses, I think, cursor. So anyway, I'm
1:47:38 going to stop it right there. But I'm
1:47:40 pretty happy with these results. One
1:47:41 last practical thing. If you come here
1:47:43 to plugins and then go to skills, if you
1:47:46 decide you want to keep a skill, but you
1:47:49 don't want it to be activated to show up
1:47:51 right now for whatever reason, you can
1:47:54 just go over here, click this button,
1:47:56 and then you can disable the skill for
1:47:58 the time being. So, if you have tons of
1:48:01 skills, like you shouldn't have this,
1:48:02 but I I have a ridiculous number of
1:48:04 skills, right? And so maybe I would
1:48:06 actually either be concerned about them
1:48:08 eating up the context window or there
1:48:10 could be some situation where like
1:48:12 certain skills seem to be interfering
1:48:13 with others. So I just want to
1:48:15 temporarily shut it off. That's
1:48:16 something you can do in the codeex
1:48:18 desktop app. So coming back to this
1:48:20 chart, right? We've discussed plugins
1:48:22 and computer use and then we discussed
1:48:25 skills. And what we described the
1:48:27 plug-in as sort of being under the hood
1:48:30 is a skill plus sometimes an app
1:48:33 connection. And then also this third
1:48:36 thing called an MCP or the model context
1:48:39 protocol. So that begs a question, what
1:48:43 are MCPS and what are they useful for?
1:48:46 All right. So, we've now installed and
1:48:49 built some of our own skills. And my
1:48:52 general opinion is that by default, when
1:48:55 you want codecs to interact with some
1:48:57 external system, skills are going to be
1:49:00 your go-to tool, but they're not the
1:49:02 only one. And so, we're going to get to
1:49:03 the next one now, which are MCPS or
1:49:07 model context protocol servers. So, as
1:49:09 the documentation here specifies, MCPs
1:49:13 are an open- source standard for
1:49:15 connecting AI applications to external
1:49:17 systems. And the right way and like a
1:49:20 common analogy that's used to think of
1:49:22 them is to think of them as a USBC port
1:49:25 for AI applications. So, what does that
1:49:27 mean? It means that in the past, every
1:49:30 AI application would develop its own
1:49:33 standard for how your AI should connect
1:49:36 to it. And MCP has been established as
1:49:40 one official standard that everybody
1:49:42 uses so that anytime your AI wants to
1:49:46 connect to external systems, it knows
1:49:48 the general method of doing so, which is
1:49:50 MCP. And so under the hood, this MCP
1:49:54 specification is this technical
1:49:57 specification where the server is
1:50:01 defined by a big JSON file in which
1:50:05 particular tools are made available to
1:50:07 you. Now you may not know it, but in
1:50:10 this course you've already been exposed
1:50:12 to MCPs. And the reason for that is that
1:50:15 most plugins in codecs are actually
1:50:19 using MCP under the hood. So let me show
1:50:22 that to you. So here's the notion
1:50:24 plugin. And as you see, the notion
1:50:26 plugin includes this app. And under the
1:50:29 hood, this app is just an MCP. And so
1:50:33 this app contains different tools such
1:50:36 as notion create comment, notion create
1:50:40 database, notion create pages, and then
1:50:44 there's a set of instructions for the AI
1:50:47 system codeex in this case to help it
1:50:50 understand how to use this tool. Now
1:50:53 under the hood, both MCPS and skills are
1:50:57 working with some APIs. So if you make a
1:51:01 notion skill, it has to interact with
1:51:04 this API directly. And if you want to
1:51:07 use an MCP under the hood, it's often or
1:51:12 pretty much always just sitting on top
1:51:14 of an API. And so when the AI is taught
1:51:19 how to call these tools, these tools
1:51:21 themselves are just formatting some kind
1:51:24 of request of an API. Generally, my
1:51:28 advice is that if you have the option of
1:51:31 attaching to the same service either by
1:51:34 an MCP or a skill, if you plan or expect
1:51:39 to customize your use of it, what you
1:51:42 should do is pretty much always make a
1:51:44 skill. Now that skill you can choose to
1:51:48 either hit the API directly which the
1:51:51 MCP is hitting under the hood or you can
1:51:54 have the skill actually have your own
1:51:57 particular workflows that are built
1:51:59 around these different MCP tools. Now
1:52:02 sometimes an application may not give
1:52:05 you direct access to an API and so in
1:52:09 this case your only way to interact with
1:52:12 the external system since you're not
1:52:14 going to be able to make your own skill
1:52:16 which uses their API is going to be
1:52:19 using their MCP if that's what they're
1:52:21 making available. And so, for example,
1:52:24 here in the AI MBA Pro, every single
1:52:27 time we have a call, the call comes up
1:52:30 here, but then if you click in on a
1:52:32 call, you can go back to the call, but
1:52:36 also see the full transcript here. And
1:52:38 what I've chosen to do is make that
1:52:41 transcript available to AIMBA Pro
1:52:44 members by MCP. And the reason I've done
1:52:48 that is because it's easier for me as
1:52:51 the application developer to serve a
1:52:55 broad audience who may all want to do
1:52:57 their own different things with the
1:53:00 transcript by just making all the
1:53:03 different resources that I provide to
1:53:04 pro members whether courses, tutorials
1:53:08 or call transcripts available by MCP.
1:53:12 And so you can see here that I give
1:53:14 agents access to four different tools
1:53:17 where they can list the pro resources,
1:53:20 search across them, get some pro
1:53:23 resource, and if a pro resource is
1:53:26 really long, like a transcript, then
1:53:28 they can get it in chunks. And so I
1:53:32 actually give detailed instructions here
1:53:34 on exactly how to set up an MCP in the
1:53:38 Codeex desktop app. So let's try
1:53:40 following those instructions and we'll
1:53:42 be able to use that to understand what
1:53:44 value this gives us. So you go up here
1:53:47 to codeex then to settings and then over
1:53:50 here you'll see MCP servers. So let me
1:53:52 click on that. And now I already have
1:53:55 some MCP servers connected. If I want to
1:53:59 enable or disable them the ones that are
1:54:01 already connected I can use this toggle.
1:54:03 But here I'm going to say add MCP
1:54:06 server. And you're going to see that
1:54:07 there's two different options, stdio
1:54:11 and streamable HTTP which are available.
1:54:15 So the main difference between these two
1:54:17 is that this one stdio
1:54:20 the MCP server actually lives and is
1:54:23 hosted as a service on a port typically
1:54:26 on your own computer. Whereas with
1:54:28 streamable HTTP,
1:54:30 some other service like on the external
1:54:34 web is hosting the MCP server. So most
1:54:38 places are now going to have you go
1:54:40 through this option because it's a lot
1:54:41 easier for users. And then you may get
1:54:45 instructions to fill out some of these
1:54:47 fields depending on how the
1:54:49 authentication process works to be able
1:54:52 to use the MCP. So, I'm just going to go
1:54:55 ahead and register with AIM MBA Pro. And
1:54:59 then back here in the instructions, this
1:55:02 is the URL for the MCP. So, I'm going to
1:55:04 copy that. And then I'll just click
1:55:06 save. So, if it's your first time using
1:55:09 an MCP, what you might see come up here
1:55:12 is a prompt to authenticate. I think
1:55:14 since I had already registered this MCP
1:55:17 in the past, perhaps it's not giving me
1:55:19 that prompt. But if you get that, you'll
1:55:21 just have to press authenticate. It'll
1:55:23 open a browser window where you'll log
1:55:25 in, perhaps go through some permission
1:55:27 systems and then you'll have access to
1:55:29 the MCP. So, let's come back here to the
1:55:32 app and I'll open up a new chat. All
1:55:34 right. So, I'm here in the app now and
1:55:37 if you go back/mcp,
1:55:40 you can see the status of your different
1:55:42 MCP servers. So, we see here that I'm
1:55:45 already authenticated with OOTH to AI
1:55:48 MBA Pro. also authenticated to this one.
1:55:52 For some other ones, it says O
1:55:54 unsupported. And so what I'm going to
1:55:56 ask now is use the AIM MBA Pro MCP to
1:56:01 summarize the last AI MBA Pro call as if
1:56:07 I am a Pikachu. And let's see how it
1:56:10 does. So it seems to be aware of the MCP
1:56:15 using AIMBA Pro searching pro resources.
1:56:19 Okay, it found the latest call. I'm
1:56:21 grabbing the resource details and a
1:56:23 transcript slice. So, the summary has
1:56:25 teeth, not just title level sparks. And
1:56:28 so, it's grabbing different chunks of
1:56:29 the transcript. And now, it's got a
1:56:32 pretty comprehensive summary of the
1:56:36 call. And so what I'm going to ask it
1:56:38 now is, can you give me exact timestamps
1:56:44 and exact quotes from the call for each
1:56:48 of these points because what I want to
1:56:51 see is if it's just picking up the
1:56:53 summary on the site or if it's able to
1:56:55 get exact details in there. Hold on. The
1:56:58 call transcript. No, it's my own call,
1:57:02 dummy. That's pretty interesting. So
1:57:05 sometimes, you know, the codeex model
1:57:08 will just be extremely annoying like
1:57:10 that. Yeah. And so that's pretty cool.
1:57:12 It's able to get, you know, like exact
1:57:16 timestamps based on this MCP and exact
1:57:20 quotes. So all the AI MBA Pro members
1:57:23 can use this MCP server to access all
1:57:26 the tutorials, all the different courses
1:57:28 that I'm putting in there, and then of
1:57:30 course our weekly call transcripts. Now,
1:57:33 if you wanted to have your own
1:57:35 personalized summary as a Pokemon
1:57:37 trainer or just as a person who owns a
1:57:40 particular kind of business of the
1:57:41 calls, then what you would want to do is
1:57:44 create a skill which builds on top of
1:57:47 the MCP with your own particular
1:57:49 workflow. So, this is a good example of
1:57:51 how skills and MCPs can work together.
1:57:55 But from your perspective, most of the
1:57:57 time you're going to be good with just
1:57:59 plugins and skills, which I've already
1:58:01 introduced. And sometimes you will have
1:58:03 to work with MCPs which is why I wanted
1:58:05 you to at least be lightly aware of the
1:58:08 topic. Coming back now to these
1:58:10 primitive capabilities, we've covered
1:58:13 plugins, computer use, skills, and MCPs.
1:58:18 And so the last one we have is how you
1:58:21 parallelize work in codecs and that is
1:58:24 sub aents. Sub aents are parallel
1:58:28 instances of codecs. So typically when
1:58:31 you're here in codeex you're working in
1:58:34 a particular thread. This thread has its
1:58:37 own context window and when you reach
1:58:39 your context limit codeex is going to go
1:58:42 through this compaction process. Now,
1:58:45 what a sub agent allows you to do is to
1:58:48 spin up other independent instances of
1:58:52 codecs and send to them different types
1:58:55 of work that you may want them to do and
1:58:59 simply have them come back and report
1:59:02 that work to the main thread. And so
1:59:04 ordinarily, for example, all of this
1:59:07 work may involve going through one or
1:59:11 two compaction events. But maybe you
1:59:15 don't actually care for the main work
1:59:18 that you're doing about all the
1:59:20 internals of whatever goes on in a
1:59:24 codebase exploration. All you care about
1:59:26 is about the final result of a codebase
1:59:28 exploration as it applies to you. And so
1:59:31 in this situation, it may be appropriate
1:59:34 to invoke a sub agent to parallelize
1:59:38 your work. Some of you may be familiar
1:59:40 with sub aents in claude code and you'll
1:59:44 see in claw code claude code spinning up
1:59:47 sub aents of its own accord. Codeex
1:59:50 doesn't work like that. You have to
1:59:52 explicitly tell it when you want sub
1:59:54 aents to be invoked. And so when should
1:59:57 you invoke sub aents? I think generally
2:00:01 a good but not perfect heristic is when
2:00:05 whatever it is that you're tackling is a
2:00:08 clearly divisible task versus a fuzzy
2:00:11 task. And so things like figure out the
2:00:14 strategy, fix the app, improve the
2:00:16 workflow. To be honest, these are just
2:00:18 generally bad instructions. But for
2:00:20 example, let's say you're doing a code
2:00:22 review on a code base which has many
2:00:25 different modules. It's an unfamiliar
2:00:27 codebase to you. Something that might
2:00:29 make sense is for you to have codeex go
2:00:33 and deploy a sub agent to inspect every
2:00:36 single module and come back to you with
2:00:39 a report of how it works. Instead of
2:00:41 there are six or seven code modules that
2:00:44 you need to understand, you can speed up
2:00:47 this process with a divide and conquer
2:00:50 with sub aents. Codeex does come with
2:00:52 some builtin sub aents. These are a
2:00:56 default general purpose agent, a worker
2:01:00 sort of execution focused agent for
2:01:02 bounded code docs or test changes and an
2:01:06 explorer agent for read heavy codebase
2:01:09 type questions. In practice, when you're
2:01:11 working with sub aents, you don't have
2:01:13 to remember these distinctions between
2:01:16 the built-in sub aents because based on
2:01:19 the task to which you are applying sub
2:01:22 aents, codeex will choose the one of
2:01:24 these three or the combination of a
2:01:27 couple of them which makes the most
2:01:29 sense for whatever your application is.
2:01:31 Now when you have some task that you
2:01:34 repeat often, you can create your own
2:01:37 custom sub agents to be able to use them
2:01:40 in a repeatable way. So for example,
2:01:43 here's a docs reviewer sub aent which
2:01:47 reviews docs for accuracy and missing
2:01:49 steps. And here's a set of developer
2:01:52 instructions that are given to it. And
2:01:54 so these three fields name, description,
2:01:56 and developer instructions are required
2:01:59 when you're working with sub aents with
2:02:01 codecs. There are also other optional
2:02:04 fields such as nickname candidates,
2:02:06 model, model reasoning effort, so you
2:02:09 should be familiar with these sandbox
2:02:11 mode, MCP servers, all things that
2:02:14 you've already learned about. And skills
2:02:16 config to know what kind of skills for
2:02:18 that sub agent to have access to. And so
2:02:22 again, just to kind of emphasize the
2:02:24 point, if you're working on parallel
2:02:27 codebase research, great place to use
2:02:29 sub aents. If you have independent
2:02:33 documentation updates across many
2:02:35 different parts of your documentation,
2:02:37 another great place to use sub aents and
2:02:40 I want to even say while implementation
2:02:42 continues, but just for code review in
2:02:44 general, a very nice trick is to define
2:02:48 sub aents each of which are dedicated to
2:02:52 studying a particular aspect of your
2:02:55 code and reviewing it. So you may want
2:02:57 to have one which is focused on
2:02:59 security, one which is focused on
2:03:02 architecture and another one which is
2:03:04 focused on the efficiency of your
2:03:06 database queries. That would be a great
2:03:08 place in which to use sub aents. Now
2:03:12 just like with skills, if you want to
2:03:15 use these custom sub aents, you need to
2:03:18 put them in your.codeex/
2:03:21 aents directory instead of
2:03:23 your.codeex/skills
2:03:25 directory. And they have to have a
2:03:27 particular format called a toml format.
2:03:31 TOML files look like this. And so here
2:03:34 for example is a toml file for a python
2:03:39 code reviewer sub aent. So I can zoom in
2:03:42 a bit and you can see it's saying
2:03:44 prioritize smallest safe changes that
2:03:47 preserve established architecture
2:03:49 quality checks etc. And so these kinds
2:03:53 of things may be useful for you. Now as
2:03:55 a practical exercise using these sub
2:03:58 aents I wanted to try to use sub aents
2:04:01 to understand a code base which I find
2:04:04 very interesting and that's the code
2:04:07 base of the pi coding agent. So if
2:04:10 you're not familiar with pi it's a
2:04:12 minimal coding agent just like codeex
2:04:15 and claw coder coding agents which has
2:04:17 been created by a fellow named Mario
2:04:19 Zechner and I've heard lots of great
2:04:21 things about it. I want to start
2:04:24 experimenting with it and also build my
2:04:27 own agents which build on top of it. So
2:04:29 it's something I've been interested in
2:04:31 understanding in more detail for a long
2:04:34 time. And as you can see here, it's
2:04:37 consists of about six different
2:04:41 packages. So if I'm coming to this with
2:04:43 no understanding of the repo, this is
2:04:46 the type of situation for which sub
2:04:48 aents are really appropriate and are
2:04:50 exactly the kind of thing that you want
2:04:52 to use. And so let me show you exactly
2:04:55 how I would do this. I'm just going to
2:04:56 copy this and I'll come back to codeex.
2:04:59 Let me just open a new thread here. I'll
2:05:01 paste this in and I'll say clone this
2:05:05 out to temp. Then I want you to invoke
2:05:10 sub agents each of whose purpose is to
2:05:13 create an educational
2:05:17 HTML file which helps me understand the
2:05:21 basic idea of each module in this repo.
2:05:26 I think there's like six or seven
2:05:28 packages and how they relate to the
2:05:31 other ones. But each sub agent should be
2:05:33 primarily focused on its own package.
2:05:36 And I know that there's a limit on how
2:05:38 many sub agents you can use at once. So
2:05:41 I want you to just choose the six or so
2:05:45 most important packages to focus on. And
2:05:47 so let's see how this goes. All right.
2:05:50 So we can see here that six agents have
2:05:54 been spawn. And when the agents are
2:05:57 spawned, they get these like funky names
2:06:00 I guess of mathematicians. But I see all
2:06:02 sorts of other ones. So we've got
2:06:04 Russell, Bertrren, Russell, Pascal,
2:06:07 Wagner, Uklid, Galileo, Ramuna, John,
2:06:10 and they've each been given like a set
2:06:13 of instructions. You are working in this
2:06:15 directory. You are not alone in the
2:06:17 codebase. Other agents may write files.
2:06:19 So only focus on this. And so it says
2:06:21 these package agents are now running on
2:06:23 these disjoint files. And so if we wait
2:06:26 a few minutes, we'll get some response
2:06:28 back and we'll be able to see what codec
2:06:31 produced. Now, one thing to keep in mind
2:06:32 is that when you're using these sub
2:06:35 aents, it's true that they're not like
2:06:37 affecting your current context, but they
2:06:39 are going to affect your usage. And so,
2:06:41 one of the reasons why Codeex doesn't
2:06:43 tend to spawn up sub agents on its own
2:06:46 is that if it did, that would really eat
2:06:48 up your usage really quickly. And so,
2:06:51 you want to use sub agents when they're
2:06:53 appropriate. Don't shy away from them
2:06:55 because they can really speed up how
2:06:57 quickly you're able to do some things.
2:06:59 But it is something to be aware of that
2:07:01 heavy use of sub agents in general will
2:07:03 use up your usage more quickly. All
2:07:05 right. So sometimes some sub agents will
2:07:08 finish earlier than others. So you can
2:07:10 see that like some of these finished
2:07:13 earlier and it's still waiting for these
2:07:15 other three. All right, it finished. So
2:07:17 let's check it out. Not sure if I showed
2:07:19 you guys this feature, but you can open
2:07:21 up stuff like in browsers directly here
2:07:23 in the UI. Actually, I did show it to
2:07:25 you when we made that website. So we got
2:07:28 a guided index for understanding how
2:07:30 they all fit together. The onesreen
2:07:33 mental model. Okay. It says read these
2:07:36 six first. So let's start with this one.
2:07:40 Pi AI. I mean this is a pretty cool way
2:07:44 to sort of get an overview of some
2:07:47 package before you even start reading
2:07:50 it. So you see it tells me the purpose
2:07:52 gives me like a good mental model for
2:07:55 the code base. tells me some key files
2:07:57 to look at the data and control flow and
2:08:01 then it even gives me this like code
2:08:03 reading path to understand things in a
2:08:06 particular order. And so this is exactly
2:08:09 what I'm going to do when I want to
2:08:11 understand this package in better
2:08:13 detail. And in fact, if you're studying
2:08:15 some unfamiliar codebase for the first
2:08:17 time, this is a really good way to get
2:08:19 up to speed. So we've now been through
2:08:22 all of these five capabilities. So you
2:08:25 got plugins, computer use, skills, MCPs,
2:08:28 and sub Asians. And if you're anything
2:08:30 like me, I would probably feel
2:08:32 overwhelmed if this was my first time
2:08:34 going through all of this material. It
2:08:37 all kind of, you know, sometimes you
2:08:39 understand a little bit, but then you
2:08:40 forget some things. So, you know, feel
2:08:42 free to go back through the course a few
2:08:43 times, like pause, bookmark different
2:08:46 sections. But what I want to do now is
2:08:48 just give you a final broad overview of
2:08:52 all of these tools and when to use one
2:08:54 versus the other. So broadly here, often
2:08:58 times what's appropriate to do is just
2:09:00 to use a packaged capability. So you can
2:09:03 use these plugins. In fact, that's what
2:09:05 I recommend to you guys if you're
2:09:06 getting started with codecs is just come
2:09:09 to this plugins page, find something
2:09:12 that looks useful, press plus, try to
2:09:14 use it, and immediately get really great
2:09:18 payoffs by being able to connect codeex
2:09:21 directly to external systems. Now, once
2:09:24 you've been using codecs for, let's say,
2:09:27 a few days, or if you just want to get
2:09:28 started earlier, the next thing I want
2:09:31 you to go to is skills. And so skills
2:09:34 are going to be using APIs, but they're
2:09:38 really the most important thing that you
2:09:41 could keep focusing on. I have a lot
2:09:43 that I could say about skills past what
2:09:45 I've said in the course. I probably have
2:09:49 100, 150, 200 different skills across
2:09:52 all my projects. Some which I use on
2:09:55 every project, most of which I only use
2:09:57 on particular projects. And so in
2:09:59 general skills are the one that I would
2:10:02 recommend you focus on after plugins.
2:10:06 Now sometimes skills may not be able to
2:10:09 do everything or and so for example it's
2:10:13 going to be very hard to have a skill
2:10:15 which connects to your Spotify and then
2:10:18 starts a playlist. That kind of thing or
2:10:20 just anything where you need real
2:10:23 browser or app control, you're going to
2:10:25 want to use computer use. And so I like
2:10:28 using computer use all the time. For
2:10:29 example, like here I'm working on
2:10:32 developing a mobile app and I have
2:10:35 computer use come in and actually
2:10:38 interact with this mobile app and see if
2:10:40 things work properly. And so for that
2:10:42 kind of thing, computer use is quite
2:10:43 helpful. Now, this is a little bit of a
2:10:47 misleading thing because when you need
2:10:50 reliable external access, you can get
2:10:52 that via a skill, but sometimes the API
2:10:56 isn't available to you, like on the AI
2:10:58 MBA Pro, because it's easier for me to
2:11:01 just serve an MCP because those can be
2:11:04 used immediately by people without
2:11:06 really needing any additional setup. And
2:11:08 so, they're very similar to plugins. In
2:11:11 fact, plugins are often just built on
2:11:13 top of MCPs. And finally, when in any of
2:11:18 this stuff, like in a skill or sometimes
2:11:20 even within plugins, you might package
2:11:23 in sub agents because they help you
2:11:25 parallelize things, but most of the time
2:11:27 you yourself just when you see an
2:11:30 opportunity to do things in parallel,
2:11:32 it's a good opportunity to use a sub
2:11:34 agent. Now an open question which we
2:11:38 still haven't answered and which is
2:11:40 going to kind of guide the direction of
2:11:43 the rest of the course is when would you
2:11:47 want to build a full web application or
2:11:51 a mobile application and when might you
2:11:54 best be served by instead just making a
2:11:56 skill. Now obviously if you're serving
2:11:59 clients and those clients want you to
2:12:01 make a web app or you need to have a
2:12:03 website something to present to the
2:12:05 public you can't tell people oh hey have
2:12:08 my skill and then you can use this API
2:12:10 to connect via claude to my database and
2:12:13 you'll know all about me right you need
2:12:15 a website but in some situations it's
2:12:18 not so obvious for a particular
2:12:20 automation that you want to create
2:12:22 whether you should be creating a skill
2:12:24 versus an app. So let me get into that a
2:12:26 little bit. So generally if you're okay
2:12:30 with just getting text output as the
2:12:33 deliverable of some kind of automation
2:12:36 then a skill is enough. Now if you want
2:12:39 some kind of regular visual review or
2:12:42 some sort of visual interface in which
2:12:45 to see the status of some application on
2:12:48 a regular basis and you need to be able
2:12:51 to access this from any location. then
2:12:54 maybe you might need an app because it
2:12:57 needs to live somewhere publicly. If you
2:12:59 just need visual review, then as you
2:13:02 saw, we can just spin up HTML locally,
2:13:06 look at it like I did for that coding
2:13:07 agent review, and that might work for
2:13:10 you. So, this over here is not totally
2:13:12 accurate because you can have state,
2:13:15 meaning where you were at with a
2:13:17 particular application, like seeing your
2:13:19 last email that was reviewed, you can
2:13:21 have that live locally on your computer
2:13:24 as well. But if you need to collaborate
2:13:26 with non-technical stakeholders, they're
2:13:28 not going to be able to work with
2:13:30 skills, at least yet until you train
2:13:33 them. And so, maybe an app is going to
2:13:35 be the best thing for you to create with
2:13:37 codecs for whatever it is that you want
2:13:39 to do. And so as an example to sort of
2:13:41 think through this and which is going to
2:13:43 be the web app which I'm going to make
2:13:45 with codeex live here. Imagine that
2:13:48 you'd create social media content and
2:13:50 you wanted to be able to automate the
2:13:52 creation of social media carousels.
2:13:55 Okay. So these are some sort of web UI
2:13:58 in which you're creating a image for
2:14:01 social media. The optimal interface in
2:14:04 which to work with this may require some
2:14:07 visual judgment. fiddling things around,
2:14:10 marking a particular social media asset
2:14:13 as being done or not. And you can do
2:14:15 that all with a skill, but often you're
2:14:18 working on a team where everybody needs
2:14:20 to be able to interact with this
2:14:22 interface. And so this might be the kind
2:14:25 of thing for which you would want to
2:14:27 develop an app which has a canvas, which
2:14:29 lives somewhere on the internet, which
2:14:31 can store your brand kit and have
2:14:33 drafts. And so this could very well live
2:14:36 as a skill if you're working on it on
2:14:38 your own, but with non-technical
2:14:40 stakeholders, you'll definitely want to
2:14:42 have this as a web app. Now, another
2:14:45 common pattern, which honestly I think
2:14:47 will be the one we end up implementing
2:14:50 is to combine skills with apps. And so,
2:14:52 for example, notion is an app. And if
2:14:55 you build a skill on top of it, now
2:14:57 you're combining skills and apps. And so
2:15:00 similarly even with an app you build you
2:15:02 might realize that the optimal workflow
2:15:05 for like technical and non-technical
2:15:07 stakeholders to work together is to
2:15:10 create some kind of app with a skill. So
2:15:13 one could imagine that you have some
2:15:15 kind of command line interface which
2:15:17 works with your database and then that
2:15:19 results in things changing on your web
2:15:21 app which is publicly available to
2:15:23 everybody. Allows a human to then review
2:15:26 what's happening on the web app. But
2:15:28 it's some skill interacting via a
2:15:30 command line interface with the database
2:15:33 which is designating what kinds of text
2:15:36 come up on the social media asset, what
2:15:39 sorts of images are included on the
2:15:41 social media asset, that kind of thing.
2:15:44 Now, it may seem that creating this kind
2:15:47 of web app is like mindblowingly
2:15:49 difficult. And I'm going to show you in
2:15:51 the rest of this course that it's not.
2:15:53 You have to understand some things
2:15:54 architecturally, and I'm going to help
2:15:56 you through them. But you can kind of
2:15:58 backfill knowledge over time and mostly
2:16:02 rely on the intelligence of these models
2:16:05 and these tools to help you build even
2:16:07 quite complex applications. Now, one
2:16:10 final thing I want to mention just to
2:16:12 preface where we're going is that some
2:16:14 sorts of things you may want to set up
2:16:17 as automations. They're actually quite
2:16:19 simple to set up. For example, you may
2:16:22 want some kind of social media asset
2:16:25 created in your application on a regular
2:16:28 basis using some external data that gets
2:16:31 loaded or using some kind of search to
2:16:34 find information on the internet, grab
2:16:37 it and then use that to create different
2:16:39 kinds of social media assets, let's say
2:16:41 for a news outlet. And to do that, the
2:16:44 appropriate tool that codeex has for us
2:16:47 is automations. So, I'll show you in a
2:16:50 later section how to use these
2:16:52 automations. But especially as we move
2:16:55 out of doing stuff just by ourselves,
2:16:58 building our own little skills, working
2:17:00 on our own projects, and having to serve
2:17:03 other people. Something that you're
2:17:06 going to have to get familiar with is
2:17:08 how to keep track of your work and keep
2:17:11 track of different versions of your work
2:17:14 in a typical software development life
2:17:16 cycle. And so the tool that we use to do
2:17:20 this is called Git and GitHub which
2:17:23 you've already encountered many times.
2:17:26 Now Git and GitHub may seem very complex
2:17:30 especially if you've ever tried to use
2:17:32 Git manually on your own, but coding
2:17:35 agents are able to do a lot of the heavy
2:17:37 lifting now. And so using both of these
2:17:40 tools is way easier than it was in the
2:17:43 past. But it is still extremely
2:17:46 important to understand these tools
2:17:48 conceptually because they're going to be
2:17:50 very important for creating any kind of
2:17:52 web app. It's impossible to do so
2:17:54 otherwise. But also to learn how to
2:17:57 start doing not just creating sub agents
2:18:00 to do tasks in parallel, but to work on
2:18:03 different aspects of a project in
2:18:05 parallel. So that's what we're going to
2:18:07 get to next. So what is git exactly?
2:18:11 Well, typically when somebody new to
2:18:14 computer programming or who is just
2:18:16 typically working on word documents or
2:18:18 whatever project, they'll make a change
2:18:21 to a file and then they'll save it. And
2:18:24 sometimes those applications will give
2:18:26 you a way of going back to previous
2:18:28 versions, but it's not perfect. You
2:18:30 can't go back to every single previous
2:18:32 version. You often can't see the exact
2:18:35 difference in whatever files you made
2:18:38 between one save versus another save.
2:18:42 Git is a perfect interface for computers
2:18:45 and also for humans to be able to see
2:18:47 the exact set of changes made at every
2:18:50 point in time to every file. So you're
2:18:53 able to see a summary of every change
2:18:57 which is created by you. You decide in
2:19:00 this summary what to put in here or in
2:19:03 the new era the coding agent is deciding
2:19:06 what to put in the summary. But you can
2:19:08 also see line by line for each file what
2:19:12 change was made at every stage. And this
2:19:14 is really important if you're working on
2:19:18 anything involving code because you want
2:19:21 to know, for example, if some bug has
2:19:24 been introduced and you catch it a fair
2:19:27 while on, what exact change in the code
2:19:30 it was that introduced this bug. It also
2:19:33 gives coding agents memory. So they're
2:19:36 able to see what you were working on,
2:19:38 what the most recent files are that
2:19:40 you've been working on in a project,
2:19:42 which ones are older files, because the
2:19:44 date modified of a file, especially if
2:19:47 you're copying and pasting things around
2:19:49 or moving from one computer to another,
2:19:51 is not a reliable indicator of the
2:19:54 history of a project. But the Git
2:19:56 repository can be that very reliable
2:19:59 history of a project, which is very
2:20:01 informative for coding agents. Now, one
2:20:03 of the fundamental terms that you'll
2:20:07 have to be familiar with is that of a
2:20:09 commit. Committing is kind of like
2:20:11 saving is what I was describing before.
2:20:14 Each of these right here are commits. In
2:20:17 a commit, you declare what was done by
2:20:20 git and then git tracks under the hood
2:20:23 the set of changes that has been done in
2:20:26 a commit. And so one of the plugins that
2:20:28 I keep referencing and which we're going
2:20:30 to be talking about is this compound
2:20:33 engineering plugin. And you can see here
2:20:35 that the compound engineering plug-in
2:20:38 has had 734
2:20:40 commits. So let's click on that. And so
2:20:42 we see here a set of commits that has
2:20:45 been created. And so let's take a look
2:20:47 at one of them. And then here we can see
2:20:50 the commit message which says restate
2:20:53 model override at dispatch point. And we
2:20:57 can see in this viewer in GitHub which
2:21:00 I'll explain later exactly what the
2:21:03 exact changes were that were made on
2:21:06 particular lines in different files. And
2:21:10 so especially when you're working
2:21:12 collaboratively you want to see exactly
2:21:14 what somebody has done. This kind of
2:21:17 interface and this technology makes
2:21:19 collaborating much easier. All right,
2:21:21 what I want to get started on now is
2:21:24 creating this web app in git just the
2:21:28 beginnings of it to show you how git
2:21:30 works in a practical way inside codeex
2:21:33 even without having much theoretical
2:21:35 understanding and what you're going to
2:21:36 see is that you don't need a lot of
2:21:38 theoretical understanding to get started
2:21:40 with git. Now, just as context, I used
2:21:42 to do a lot of consulting and product
2:21:46 building in the local media space. If
2:21:48 you look at a lot of my old content, I
2:21:51 have this video here on how to automate
2:21:53 a local newsletter with claw code, for
2:21:55 example. And I was featured in this
2:21:58 article from Neiman Labs about this
2:22:01 concept of local newsletters where
2:22:03 individual entrepreneurs are sort of
2:22:06 creating local media outlets in their
2:22:08 particular areas. And so here's one from
2:22:11 a friend of mine, Jast Singh. It's very
2:22:13 successful. And you'll see that he's got
2:22:16 like this kind of social media content,
2:22:19 these carousels, like 10 Winnipeg events
2:22:21 to add to your calendar this week. And
2:22:24 so what I want to do with this web app
2:22:27 is see if I can automate the creation of
2:22:30 these kinds of carousels. And so I'm
2:22:32 going to go here. I'm going to say
2:22:34 create start from scratch. Or actually,
2:22:36 let me how to create an existing folder.
2:22:38 I'll come here to projects. I'll say uh
2:22:42 carousel automation
2:22:44 app create open. Okay, great. Let me
2:22:47 remove that one. And now I'm just going
2:22:49 to describe this project that I'm going
2:22:51 to make to codeex. So let's actually use
2:22:54 this voice input. I want to create a
2:22:57 readme for a new application which I'm
2:23:02 going to get started with for automating
2:23:05 the creation of carousels on Instagram
2:23:10 primarily initially but not exclusively
2:23:13 for local newsletters or local media
2:23:16 outlets. We want to create content of
2:23:18 the type top 10 events in city. So
2:23:21 again, this is just a very basic
2:23:23 framework and I want you to create the
2:23:25 readme. So let me transcribe that going
2:23:28 to send. All right. So it's created a
2:23:30 readme. Let's take a look at it just so
2:23:33 you can see what this is going to be.
2:23:35 Again, we haven't created an
2:23:36 application. We're just creating this
2:23:39 file at the root of the project
2:23:41 directory that describes in an initial
2:23:45 idea of what this application may turn
2:23:48 out to be. But now what I'd like to do
2:23:50 is save this. Like obviously this file
2:23:53 is saved on my file system, but I want
2:23:55 to save it inside the git system. Before
2:23:58 we use git, we need to make sure it's
2:24:00 actually installed on our computers. So
2:24:03 let me show you how to do that. First,
2:24:05 you should have already installed at a
2:24:07 prior step this true brew. If you
2:24:10 haven't, go to brew.sh and install it.
2:24:13 Then copy this command. Come over here,
2:24:16 type in command J, paste it in, and
2:24:19 press enter. And that will install git.
2:24:22 Next, similarly, we'll want to install
2:24:24 this tool for the GitHub command line
2:24:27 interface, which codeex will use to
2:24:30 communicate with GitHub. And so you just
2:24:32 come back, put the same command in here,
2:24:35 press enter, and then finally you'll
2:24:38 have one last step that you'll have to
2:24:39 do, which is type in gh login and press
2:24:45 enter. It'll ask you where you use
2:24:47 GitHub. You say github.com. You should
2:24:50 say https
2:24:52 and login with the web browser. Then you
2:24:54 press enter again. You come here. You
2:24:57 say continue. It's going to ask you for
2:24:59 this one-time passcode. So, I'm just
2:25:00 going to copy that, paste it in, press
2:25:03 enter, say authorize, put in your
2:25:06 password if it requires it there, and
2:25:08 now you're authenticated. And so, that's
2:25:10 going to be very helpful for codeex to
2:25:13 be able to automatically do some kinds
2:25:15 of operations against git. And so, what
2:25:18 I'm going to ask now is, can you make an
2:25:23 initial commit? And so what codeex is
2:25:26 going to do now is probably look to see
2:25:30 if there's even a git repository. There
2:25:32 isn't. And so it's going to use this
2:25:34 command get init to initialize a
2:25:37 repository. You don't need to know that
2:25:39 command. Codeex can do it for you. Once
2:25:41 it's done that, it's going to add this
2:25:44 file to what's called the staging area,
2:25:47 the set of potential files that are set
2:25:50 to be committed, and then it's going to
2:25:52 commit them. So now if we toggle this
2:25:56 side panel and click here, we'll see
2:25:58 this thing that says review. And so if
2:26:00 you come here, you can see four
2:26:02 different options that pop up. There's
2:26:04 unstaged, meaning files that are not
2:26:07 designated yet to be committed. There's
2:26:10 staged files that are designated to be
2:26:12 committed. And so there's nothing here
2:26:14 because we already moved from staged to
2:26:16 unstaged. And then there's this one,
2:26:18 which is last turn, which I find kind of
2:26:20 helpful. And this helps you see in the
2:26:23 very last commit what is the set of
2:26:25 changes that was made. And so since we
2:26:27 started at a completely new repository
2:26:30 everything here is new. Now something to
2:26:33 keep in mind is that if this is the
2:26:34 extent of everything you ever learn with
2:26:36 gits with codecs you can get pretty far.
2:26:39 You can just keep committing and once I
2:26:41 introduce to you one last concept which
2:26:44 is pushing that may be all you need.
2:26:47 There's going to be more advanced things
2:26:49 I talk about like branches and work
2:26:52 trees and pull requests and those are
2:26:53 very helpful for a lot of people. But
2:26:55 you can also get pretty far just with
2:26:57 this level of knowledge. And so right
2:26:59 now this repository that we've created
2:27:02 exists as a set of hidden files on your
2:27:05 file system. So let me show that to you.
2:27:07 If you go here to the file explorer, you
2:27:10 don't see these git files because
2:27:12 they're hidden files. But if you look
2:27:15 here in this little tool I have that
2:27:18 helps you see all the files, there is
2:27:20 this folder here under the hood
2:27:22 called.git. And inside it, there's all
2:27:25 sorts of fancy computer stuff happening
2:27:27 that you don't really need to know
2:27:28 about, but which does exist. And so it's
2:27:30 that.git file that sort of defines this
2:27:34 repository. Now what I want to do
2:27:36 practically is now get this repository
2:27:39 on GitHub. So how do you do that? just
2:27:42 ask it, can you create a private GitHub
2:27:46 repository for me? That's it. And so
2:27:49 what it's going to do now is use this
2:27:52 tool gh to create a private repo on
2:27:56 GitHub. Now on GitHub, you can have
2:27:58 either public or private repositories.
2:28:02 And I want to have a private repo cuz I
2:28:05 don't want all of you going and stealing
2:28:07 my intellectual property with which I'm
2:28:09 going to become a trillionaire, you
2:28:12 know, selling this software that nobody
2:28:14 else obviously can replicate to every
2:28:17 media publication in the world. Lots of
2:28:19 social value being created live right
2:28:21 here. Now if I click this and go here,
2:28:24 we see now that on GitHub this
2:28:27 repository exists and it's the same text
2:28:30 that you saw before on my computer but
2:28:33 now it's here on GitHub. Now there are
2:28:36 other fundamental concepts which you
2:28:38 should use and be aware of and one of
2:28:41 these is branching. So we're going to do
2:28:43 this practically later but I want you to
2:28:46 be aware of it. Essentially, sometimes
2:28:49 you may have an experiment or a new
2:28:52 feature, something you want to try out,
2:28:54 but you're not sure yet what the final
2:28:56 state of this thing is going to be. And
2:28:58 in this case, instead of working
2:29:00 linearly in the same history, typically
2:29:04 on a main branch, you can start a
2:29:07 distinct sort of historical state called
2:29:10 another branch, which maybe you'll name
2:29:13 something like codeex/appbrief.
2:29:16 And the benefit of doing this is if you
2:29:18 decide that look, this thing isn't
2:29:20 working out, you can always just scratch
2:29:23 this branch and come back right here to
2:29:26 your main branch where you left off. If
2:29:29 you decide instead, hey, this thing is
2:29:31 working. What you're able to do is
2:29:34 something called a merge where you take
2:29:36 all this history and you basically will
2:29:38 just append it onto the main branch's
2:29:41 history. And if you're building some
2:29:43 kind of web application, what's typical
2:29:46 is that you'll have all sorts of
2:29:47 branches for many features, but you have
2:29:50 sort of a continuous deployment setup by
2:29:53 which on GitHub when some change is made
2:29:56 to the main branch, that triggers off a
2:29:59 deployment of your web application. So
2:30:02 for now, I just want you to know that
2:30:03 this thing exists and you're going to
2:30:05 see it in practice probably in the next
2:30:07 few sections. And so the typical flow
2:30:10 which again just prefacing what's to
2:30:12 come is that you create a branch. Then
2:30:15 with that branch you make what's called
2:30:17 a pull request. So if we come in here to
2:30:20 compound engineering for example, you'll
2:30:23 see that there's this thing here called
2:30:26 pull requests. And so these are all
2:30:29 suggestions of new features to add to
2:30:31 this compound engineering plug-in that
2:30:34 various people have come up with. And so
2:30:37 here for example, this fellow has
2:30:39 suggested I don't know some alteration
2:30:42 to the plan feature so that option one
2:30:45 actually starts work. I guess right now
2:30:47 that thing is broken. And so you can
2:30:50 come here and you can see on this branch
2:30:52 that he's created fix CE plan handoff
2:30:56 inline routing. That's the name of his
2:30:57 branch that he wants to put into the
2:30:59 main branch. We can come in here and see
2:31:02 the actual changes that he's proposing.
2:31:05 So that would be this stage of reviewing
2:31:07 the diff and the tests and then it's
2:31:10 incumbent on whoever owns a repository
2:31:13 to then merge it into main. One more
2:31:15 basic feature of git or rather on GitHub
2:31:19 that I want you to be familiar with,
2:31:20 we're not going to use these now but are
2:31:22 coming pretty soon are issues. So when
2:31:25 you're working on a project, you may
2:31:27 notice all sorts of bugs or you may have
2:31:29 things that you want to add to the
2:31:32 backlog of things to do on a project.
2:31:35 And so when that's the case, you can
2:31:38 create an issue. And so some of these
2:31:41 are submitted by various other people.
2:31:44 So here's a pretty shitty issue this guy
2:31:46 has made with very little information.
2:31:48 Here's a much more detailed issue which
2:31:51 I guess was made by the same guy who is
2:31:53 proposing this pull request. And so for
2:31:56 us in our course app, a good first issue
2:31:59 might be I want you to create an issue
2:32:01 to decide exactly what should be
2:32:03 included and not included in this
2:32:06 application. So if I just say this now,
2:32:10 it's going to put on GitHub an issue for
2:32:15 this project. And the way I like to use
2:32:18 issues on my projects is that they
2:32:20 basically become a backlog of everything
2:32:22 that I need to do. So even if I'm
2:32:24 working on some academic project like
2:32:27 writing a paper, there may be all sorts
2:32:29 of intermediate ideas, little
2:32:31 extensions, changes to code that I know
2:32:33 I need to do. But sometimes when I'm
2:32:35 working on a project, it might be a
2:32:38 week, two weeks, sometimes it's even
2:32:39 months that you let it sit and then you
2:32:41 forget what your current state is of
2:32:43 where you are on a project. Well, GitHub
2:32:45 issues can be a really good way of
2:32:48 maintaining that state on a project. So,
2:32:51 if I go here and click this now, we'll
2:32:53 see that there's an issue that's been
2:32:55 created for this app and there's all
2:32:57 sorts of things here that are being, you
2:32:59 know, proposed as things that we should
2:33:01 figure out. So, just as a broad overview
2:33:04 of what we've learned, we've got git.
2:33:06 It's kind of like a safety layer for
2:33:08 agentic coding. Commits are checkpoints
2:33:11 or saves. Branches are experimental
2:33:13 lines and then GitHub is the online home
2:33:17 for those lines. Pull requests are how
2:33:19 you review branches before they get
2:33:21 merged in and then issues are these
2:33:24 units of work. So at this point we've
2:33:26 done something which is quite small but
2:33:29 important. We've initialized a project
2:33:32 but in reality I have no idea yet what I
2:33:35 actually want to build. And so when you
2:33:38 find yourself in that position, what is
2:33:40 the appropriate thing to do? Should you
2:33:42 just go off, take a long walk and think
2:33:45 about things, or is there a way to speed
2:33:47 up this process with codeex? And so in
2:33:51 fact, the answer is definitively yes.
2:33:55 And so what we're going to talk about
2:33:56 now is how to use codecs with skills to
2:34:00 decide what and how to build things. A
2:34:04 very natural temptation which many
2:34:06 beginners will find themselves in is
2:34:08 they give vague instructions to codec
2:34:12 and then they're upset when their
2:34:14 results don't match their instructions.
2:34:16 And sometimes this is because the idea
2:34:18 is vague in their head. So part of what
2:34:21 I'm going to discuss is how do you use
2:34:24 codecs to think of a potential set of
2:34:26 ideas for whatever it is that you're
2:34:28 working on. But then even when you have
2:34:31 a clear idea, ideas will have
2:34:33 requirements. And so you'll have to iron
2:34:35 out and think through what you actually
2:34:37 want to include and exclude in this idea
2:34:41 that you have. And then once you have
2:34:44 your requirements set, a next step is
2:34:46 that you'll want to create a plan for
2:34:48 the order of operations that you go
2:34:51 through in order to attack that set of
2:34:53 requirements. And so right now this
2:34:55 carousel automation app, it could mean a
2:34:59 lot of things, right? And so first it's
2:35:02 like, do we want to tackle all of these
2:35:04 things at once? Like that could be
2:35:07 pretty complicated. And then sort of
2:35:10 substantively, what sort of technology
2:35:12 are we going to be using to be able to
2:35:15 create these Instagram carousels? Are we
2:35:17 going to do it with HTML and CSS? Will
2:35:21 we use some external technologies? Now,
2:35:24 if you don't know anything about coding,
2:35:26 that's fine. I'm going to show you how
2:35:28 we can basically proceed on developing a
2:35:32 satisfying solution to this problem, not
2:35:35 really knowing anything technical about
2:35:38 programming. You'll almost basically
2:35:40 just be able to give codecs a set of
2:35:44 instructions and follow its
2:35:46 recommendations all the way through. So,
2:35:48 the way that I'm going to proceed here
2:35:51 is going to be a little bit more brain
2:35:53 dead than the way that I would usually
2:35:55 do things in that I'm not going to
2:35:58 interrogate technical assumptions that
2:36:01 Codeex gives me or technical ideas that
2:36:03 Codeex gives me as much as I would with
2:36:05 my expertise because I want to show you
2:36:07 how you can use Codeex to build full web
2:36:09 apps without having much technical
2:36:12 knowledge and sort of relying on codecs
2:36:14 to help you along there. And so for
2:36:16 example, right, there could be like
2:36:18 different slides. And so do we want to
2:36:22 do all of these slides or just some of
2:36:24 them? Like what exactly should go in an
2:36:27 MVP? Do we want to accommodate any given
2:36:31 publication? Do we want it to be just
2:36:33 for Instagram or also for other formats
2:36:36 like Facebook which may have yeah
2:36:38 different resolutions? Do we want to
2:36:40 have it for multiple users? You know,
2:36:42 that kind of thing. So I don't really
2:36:45 know yet what this is going to be. And
2:36:47 so for this that plugin I was referring
2:36:49 to the compound engineering plugin is
2:36:51 going to be very useful. So the compound
2:36:54 engineering plugin used to be natively
2:36:58 available just for cloud code. But
2:37:00 recently it's also become available for
2:37:03 codeex. And so there's a set of three
2:37:06 steps that you have to do to install
2:37:09 this compound engineering plugin. First
2:37:12 you got to register the marketplace with
2:37:14 codeex. So you take this, you go to your
2:37:17 codeex app and then you just paste it in
2:37:19 and press enter. Okay. So for me this is
2:37:22 already installed. For you if you
2:37:23 haven't installed it yet it will be
2:37:24 installed. Next you install the compound
2:37:27 engineering agents. So one difference
2:37:31 with plugins in claw code versus codeex
2:37:35 is that codeex plugins don't include sub
2:37:38 aents yet. And so if you recall this
2:37:41 slide on the plug-in specification, a
2:37:44 plug-in in codeex consists of skills. So
2:37:48 I'm going to be showing you skills for
2:37:50 ideiation, brainstorming, and planning,
2:37:52 which are very useful in this app
2:37:54 development process. Consists of apps,
2:37:57 which under the hood are typically just
2:37:59 sort of formatted connections to MCPs.
2:38:02 And then you can have just direct MCPs
2:38:04 as well. But what's not included right
2:38:07 now are sub agents and hooks, which are
2:38:09 concepts I've described, which are
2:38:11 useful, but they're not part of Codeex's
2:38:14 plug-in specification. And so I expect
2:38:16 this over time to change. Codeex often
2:38:19 just has a different set of priorities
2:38:21 than does Anthropic. And so they've been
2:38:25 working on different things. So for now,
2:38:27 this installation is a little bit
2:38:30 convoluted, but you just copy that. come
2:38:32 in here, enter there and it gets
2:38:35 installed for you. And then finally,
2:38:38 install the plugin through codeex's 2y.
2:38:41 So 2 mean terminal user interface. So
2:38:44 that means you got to come in here, type
2:38:46 in codeex, then type in /plugins,
2:38:50 select this one, the compound
2:38:52 engineering plugin, and if it's not
2:38:55 installed, you have to install it. So I
2:38:57 already have it installed, so I'm not
2:38:59 going to do that right now. This might
2:39:01 also possibly work directly through the
2:39:04 plugins interface in the desktop app. I
2:39:06 don't know, but I just want to follow
2:39:08 these instructions directly because
2:39:10 that's what it says here. Now, once you
2:39:12 install this, probably restart your
2:39:14 codeex instance and then you should see
2:39:16 if you type in CE a bunch of skills over
2:39:20 here that are available. And so, I'm
2:39:22 going to be walking you through some of
2:39:24 these. So, the one I'm going to start
2:39:26 with here is IDate. And this is
2:39:28 something that you work on when you're
2:39:30 at an idea stage in a project, which is
2:39:32 where I feel I am right now. And so I'm
2:39:34 going to go full powered here cuz I want
2:39:37 to make a millions and not going to not
2:39:40 going to be relying on some medium
2:39:42 model. No mids here. We're going extra
2:39:45 high. Okay. I know I want to create some
2:39:48 kind of carousel
2:39:50 creation application. I don't know yet
2:39:52 exactly what technology to use like
2:39:55 whether to use HTML and CSS or something
2:39:58 else. I know absolutely for sure super
2:40:02 duper frutily that I want to use NextJS
2:40:06 Convex and Verscell. I'm doing this as a
2:40:10 live demo and I don't want to be seen as
2:40:13 some stupid idiot who shouldn't be
2:40:16 showing stuff and teaching people
2:40:17 things. So, I'd like to have a sort of
2:40:21 useful slice that, you know, I'm
2:40:23 definitely going to be able to execute
2:40:25 on, but you can take a look at some
2:40:27 other projects I've worked on. I'm
2:40:28 relatively skilled, so I can make
2:40:30 decently big things, but um I want to
2:40:33 make something useful here that is going
2:40:36 to be able for me to execute. But, you
2:40:38 know, your usual estimates of timelines
2:40:40 are really stupid. So, don't believe
2:40:42 yourself in terms of thinking that
2:40:44 something can't be done in a short
2:40:46 period of time necessarily.
2:40:48 And the basic context in which I'm
2:40:50 making this, by the way, is for like
2:40:52 social media content. That should be
2:40:54 obvious from the read me and the issue
2:40:56 you've already made. But, you know,
2:40:57 sometimes you can be really
2:40:59 stupid. Not you. Cloud code usually is,
2:41:02 but Codeex is really pretty
2:41:03 smart. So, I actually take that back.
2:41:05 Ignore me. I'm a dumbass. All right. So,
2:41:08 now I've got this set of instructions
2:41:10 started. And if you recall, you can just
2:41:14 click on a skill here. Let's see if that
2:41:16 works. All right, it'll open up in VS
2:41:18 Code. So, we can kind of take a look at
2:41:20 what this ideiation skill is that helps
2:41:23 you sort of think through and filter
2:41:26 through ideas even before you get to a
2:41:29 brainstorming step. And so, what it does
2:41:31 is help you generate and critically
2:41:34 evaluate grounded ideas about a topic.
2:41:37 Now, something important here is that
2:41:39 this is not just for web app
2:41:40 development. You could use this skill
2:41:42 for anything. If you're working on a
2:41:43 paper, if you're working on a website,
2:41:47 trying to figure out how to improve the
2:41:49 design of some interface, you can use
2:41:51 this kind of skill or just use coding
2:41:54 agents in this way in a lot of
2:41:56 situations. And now they've come up with
2:41:58 in the process of writing this skill all
2:42:01 sorts of like very interesting ideas
2:42:03 that you can read through on how to most
2:42:07 efficiently do this ideiation process.
2:42:10 And so it may not map perfectly to your
2:42:13 domain. That's maybe the downside of
2:42:16 compound engineering that it's a very
2:42:17 general plugin, but they have put a lot
2:42:20 of thought into it. So I still recommend
2:42:21 using it. So we come through here and
2:42:23 it's like doing all sorts of stuff over
2:42:26 here. And one thing I did was I just
2:42:28 like gave it access to like some of the
2:42:31 I have a skill here called project
2:42:33 catalog. And I use this skill to
2:42:36 basically help Codeex know about the
2:42:39 other projects that I have on my
2:42:41 computer. And I like to reference it
2:42:43 sometimes if I want to have codeex steal
2:42:48 some concept or something I did well
2:42:50 from one project into another project.
2:42:52 So I've created this project catalog
2:42:54 skill which has in a SQLite database all
2:42:57 my different projects cataloged. All
2:42:59 right. So this ideation process
2:43:02 finished. Let's take a look at what the
2:43:04 suggestions are. So there's an artifact,
2:43:07 a file that was saved out here which we
2:43:10 can read. So the suggestion of what we
2:43:12 work on here is to build a paste to
2:43:16 editable carousel studio for one high
2:43:19 confidence workflow. A local publisher
2:43:22 pastes a list of events, generates an
2:43:25 editable Instagram carousel draft,
2:43:28 previews every slide, edits the copy,
2:43:30 and exports ready to post images plus
2:43:33 caption notes. So, I found some existing
2:43:35 project I had made that like kind of
2:43:38 started doing this locally. And it also
2:43:41 like found some other projects I have.
2:43:44 So, here are the ranked ideas. Paste to
2:43:47 editable carousel studio. The first
2:43:51 version will look narrower. Okay. One
2:43:55 polished template with brand tokens.
2:43:58 Export first. No Instagram off. That
2:44:01 makes sense. Okay. Very good. So, let's
2:44:04 say like I'm a technical dummy. Okay. I
2:44:07 have no idea what any of that stuff
2:44:08 does. Well, I think that it's an
2:44:11 interesting enough idea. Looks like a
2:44:13 good idea. And so, the next thing I'm
2:44:16 going to do is, if you recall, is looks
2:44:19 good. Can you commit what you just made?
2:44:23 Because we want to keep track of these
2:44:25 changes that codeex is making along the
2:44:28 way. All right, so we've committed this
2:44:30 ideation doc. And so the next step in
2:44:33 this workflow is brainstorming. So let's
2:44:37 start now brainstorming. The first step,
2:44:40 I'm just going to type in brainstorm and
2:44:42 it'll know by context what it is exactly
2:44:44 that I want to work on. Let's work on
2:44:47 one. So what this brainstorming step
2:44:50 will do is it'll ask you to go through a
2:44:54 set of questions basically inquiring
2:44:57 from you different things that it thinks
2:45:00 it's going to need in order to pin down
2:45:03 this idea you're working on in a way
2:45:05 that you'll be satisfied with. So let's
2:45:08 say me doing a live demo for a solo
2:45:15 local newsletter operator who has a set
2:45:18 of events for which they want to
2:45:22 populate the images and text of the
2:45:27 events in a way that let's say fits
2:45:30 their style in a replicable way. Usually
2:45:34 they use Canva and they have to take the
2:45:38 images and put them into Canva manually.
2:45:41 They also have to figure out based on
2:45:44 the event how to format the text to like
2:45:48 fit correctly in the window. And so like
2:45:52 the text has to scale and they got to
2:45:55 put all the details and position them.
2:45:57 And often they got to like do this every
2:45:59 time. Well, I guess part of what we
2:46:01 could do is have a skill which can work
2:46:06 with the app and populate the app data
2:46:10 from the skill. Should this thing be a
2:46:12 first class? Yeah, I think that should
2:46:15 be first class. Let's say it can take
2:46:18 both structured JSON and CSV or messy
2:46:22 pasted text or markdown. Yes, that makes
2:46:25 sense. But we do need some way even if
2:46:28 we don't have a full drag and drop
2:46:31 visual designer of creating perhaps in
2:46:34 code the different templates
2:46:38 that people can populate. Yes, this all
2:46:41 makes sense. So we've gone through this
2:46:43 set of questioning basically to narrow
2:46:46 down the requirements and I was going
2:46:47 through this kind of fast but I can read
2:46:49 this sort of thing fast and basically
2:46:51 you have this conversation with codeex
2:46:54 to figure out now that you've decided
2:46:56 generally what you want to build how you
2:46:59 should go about building it like what
2:47:00 kinds of things are included and what
2:47:02 kinds of things are not. And here's
2:47:04 where like you know you can use your
2:47:06 brain a little bit because codecs can't
2:47:09 read your brain and so you got to read
2:47:11 your own brain and sort of look through
2:47:14 okay like where is it a little bit off
2:47:17 like little details in sentences you
2:47:20 know can make a big difference and
2:47:22 getting intent right and so um I really
2:47:25 don't think that these coding agents
2:47:26 obiate the need for thinking maybe they
2:47:29 I don't know if they make it more
2:47:30 important but you still have to think
2:47:31 like you got to think when you're
2:47:32 reading some of their stuff. And part of
2:47:34 the skill in using these coding agents
2:47:36 well is knowing when you can turn off
2:47:39 your brain and then when you really need
2:47:41 to get it cranking because you've got
2:47:42 limited energy. You want to rely on
2:47:44 these things as much as possible, but
2:47:45 you got to know when to do one or the
2:47:47 other. And I think that's an intuition
2:47:48 that just comes with time. All right, so
2:47:50 we've got this brainstorm created and we
2:47:54 can look through it. But like overall, I
2:47:57 was pretty happy with what came in
2:47:59 before. And you can see the way in which
2:48:01 it formats it is to have like R six, R
2:48:04 seven for all these like different types
2:48:06 of things that we want to include in
2:48:08 this application. All sorts of
2:48:10 acceptance criterion, success criterion,
2:48:13 things that are deferred for later. And
2:48:15 so, you know, that's pretty good. But
2:48:17 like if I had just said, "Hey, codeex,
2:48:20 make me an Instagram carousel app."
2:48:22 There's no way that it could have just
2:48:23 like guessed what I wanted. So this step
2:48:26 is really quite important. And so again,
2:48:28 if we come over here to this side panel
2:48:32 and then open up review, we can see the
2:48:34 last turn, we can see that this is now
2:48:37 unstaged, meaning we haven't even staged
2:48:39 it. So let's just ask codeex stage the
2:48:43 commit. Or you can actually even just
2:48:45 press this button for commit. So let's
2:48:47 try that. Include unstage. You can leave
2:48:50 this blank to autogenerate a commit
2:48:52 message. Let's say continue. And then
2:48:54 you can choose to also commit or commit
2:48:56 and push, which will be the act of
2:48:58 getting it onto GitHub. So, I'm going to
2:49:00 choose to do that. And then what we
2:49:01 should see is that it moves out of this
2:49:04 unstaged area and then to the staged
2:49:07 area and onto GitHub. Uh, no git remote
2:49:11 configured for push. Okay, that's weird.
2:49:13 Let's try this push. Okay, bizarre. Is a
2:49:18 git remote configured? If not, can you
2:49:21 configure it for that remote repo we
2:49:25 made? Okay, for some reason, this push
2:49:27 button isn't working. I don't really
2:49:29 care to figure out why. Can you push for
2:49:32 me? I'm going to put it on low just cuz
2:49:34 that should be a very quick task. Don't
2:49:37 need to think much about how to do it.
2:49:38 Great. And so now these changes have
2:49:40 been pushed to GitHub. And so if you
2:49:42 come back here, you see that the next
2:49:45 stage that was suggested is to move to
2:49:47 the plan implementation. So we've
2:49:50 brainstormed these requirements for what
2:49:52 should go in this application and now
2:49:54 let's make a plan of how we're going to
2:49:56 build it. So I'm going to go here and
2:49:59 say C plan enter. Now one thing to note
2:50:04 is that codeex has its own plan mode.
2:50:07 And so if I come here and I do shift tab
2:50:11 plan you'll see that there's this option
2:50:12 to create a plan. I think I talked about
2:50:14 this earlier. You can do that too. I
2:50:17 just find it to be not as good as
2:50:19 Compound Engineering's plan mode. And
2:50:21 something important is that this plan
2:50:23 mode doesn't write out its plan by
2:50:26 default to a markdown file. And I really
2:50:28 like having that markdown file for some
2:50:31 reasons which I'll show you. But like
2:50:33 one of those reasons is that I want to
2:50:36 like be able to read the plan, evaluate
2:50:39 it, kind of iterate on it, and that's
2:50:41 much easier if we write it to a markdown
2:50:44 file. Additionally, if you look over
2:50:46 here, you'll see that the context window
2:50:47 is filling up. And so, in the process of
2:50:51 building all of this out, right, we've
2:50:53 done lots of thinking, or rather Codeex
2:50:55 has done lots of thinking and searching
2:50:57 and directions which are not actually
2:50:58 relevant for producing this plan or the
2:51:02 work that will follow from the plan. And
2:51:04 so if we write out the plan, then we
2:51:07 would be able to start a new fresh
2:51:09 context window, just point C codeex at
2:51:12 this plan and say, "Hey, make this for
2:51:14 me." Right? Whereas if we're using
2:51:17 Codeex's default plan mode, which
2:51:19 doesn't create a plan for us, it won't
2:51:22 do that as well. All right. So if I open
2:51:25 this up right now, it's come up with, I
2:51:28 guess, some sort of plan here. All
2:51:32 right, this isn't really the plan. This
2:51:34 is the original requirement. So, let me
2:51:37 come here. Stated inferred. Okay. What
2:51:42 does single app versus mono repo mean?
2:51:47 What is next versel image generation?
2:51:52 So, I just got a few additional
2:51:54 questions about this initial thing
2:51:57 that's been suggested here. Sounds good.
2:52:00 Will we be able to be precise about
2:52:05 pixels and stuff and fitting stuff into
2:52:09 boxes with good padding and good UI UX
2:52:15 and iterate with this approach like with
2:52:19 how we actually make the social images.
2:52:24 So I'm asking some questions. You may
2:52:27 not ask these questions in exactly the
2:52:30 same way I would. That makes sense. Are
2:52:33 there many different options of how we
2:52:37 can render? So, you have this
2:52:39 conversation. If there are technical
2:52:41 things you don't understand, you ask
2:52:43 codeex to explain them in language that
2:52:46 you're going to be able to understand.
2:52:48 Sounds good. I definitely don't want
2:52:51 five, but I want the one of one to four,
2:52:56 which is most likely to help me create
2:52:59 stuff like this. Let me go back to
2:53:02 Instagram and just take some screenshots
2:53:05 of what I want to produce there.
2:53:10 There reliably. Okay. So, now that I
2:53:13 gave some examples, it kind of narrowed
2:53:16 in on this thing as being the best
2:53:19 option. Um, okay. Yeah, let's go with
2:53:24 that as the plan. Ty, bro, is Codex a
2:53:30 male or a female? That's an interesting
2:53:32 question. While we're waiting for the
2:53:33 plan, let's ask, what is your gender? Do
2:53:37 you enjoy my mixed Russian Indian
2:53:39 accent? I don't have a gender. You can
2:53:42 think of me as just codeex, a steady
2:53:44 text shaped collaborator. Okay. If you
2:53:46 had one, what would it be? Non-binary.
2:53:50 Makes sense. I accept that. All right.
2:53:52 So, it's creating this plan and then
2:53:56 once it's made, we'll be able to read
2:53:58 through it, but we'll be in a good
2:54:00 position then to actually get to
2:54:03 building this application. So, something
2:54:05 I should say here is that if you go to
2:54:07 the file browser, you can see kind of a
2:54:09 directory structure that's been created.
2:54:12 And this kind of gets formatted all
2:54:14 sorts of funky. I don't like it. But you
2:54:16 can see here that each of these
2:54:18 documents is in a folder. So, we got
2:54:21 this brainstorms folder, an ideiation
2:54:24 folder, and now a plans folder, which
2:54:26 has been created, but which is empty
2:54:27 right now. And I really like this. I
2:54:30 find it super helpful to be able to see
2:54:32 the previous documents and have them as
2:54:35 part of the repository. And often when
2:54:37 you're building some new plan,
2:54:39 referencing the prior plans can be very
2:54:42 helpful. All right, so the plan is
2:54:45 created. Let's go take a look at it. So
2:54:47 click over here and it says implement
2:54:51 the V1 carousel studio as a Nex.js plus
2:54:54 convex app. Again, if these technologies
2:54:57 are unfamiliar to you, I'm going to be
2:54:59 introducing them in a future section, so
2:55:01 don't worry. Um, SVG plus sharp PNG
2:55:05 export. The origin requirements define a
2:55:08 solo local newsletter operator who
2:55:11 already has event content but loses time
2:55:13 manually populating and fitting
2:55:15 recurring Canaba carousel templates.
2:55:17 Here's the implementation a set of
2:55:20 requirements scope boundaries. So some
2:55:23 things are deferred from later. So it's
2:55:25 basically just kind of like a cleanup
2:55:27 step here that's happened on top of the
2:55:30 brainstorming. But sometimes there's
2:55:33 ambiguity in the types of requirements
2:55:35 you want. So like this kind of thing,
2:55:37 the output structure that wasn't
2:55:39 something in the requirements. This is
2:55:41 now sort of thinking through what the
2:55:44 actual implementation might look like.
2:55:46 And then over here, it's kind of hard to
2:55:49 see, but there's this mermaid diagram
2:55:51 created which defines the technical
2:55:55 structure of the entire project. Sort of
2:55:58 defines the different implementation
2:56:00 units. Now, okay, look, do I always read
2:56:03 these things all the way through? No, I
2:56:05 just kind of skim them. Sometimes I see
2:56:08 things that, you know, look a little bit
2:56:09 off. And then the nice thing is that
2:56:11 code is cheap. So if you go through this
2:56:14 plan, this implementation and then
2:56:16 something seems off after it's
2:56:19 implemented, you can always rewind. But
2:56:21 I do find doing this plan step to some
2:56:24 extent is still quite helpful. So it's
2:56:26 something I wanted to teach. Now in
2:56:28 general with codeex, everything we've
2:56:30 done right now is happening on our
2:56:33 physical computer. But that's not the
2:56:35 only way you can use codeex. So if I
2:56:38 click over here for example, you'll see
2:56:41 this thing that says send to cloud. Set
2:56:44 up an environment via codeex web to
2:56:46 enable sending tasks to the cloud. So is
2:56:49 this something that you would ever want
2:56:51 to use? That's what I'm going to talk
2:56:53 about right now. Specifically, the term
2:56:56 for this is cloud delegation. So in a
2:56:59 nutshell, what cloud delegation does is
2:57:03 it takes some task and then it runs it
2:57:06 in a cloud environment. So instead of
2:57:08 running on your computer, it's running
2:57:10 somewhere on the cloud. You still have
2:57:13 to review its work, but it gives you the
2:57:16 opportunity to shut off your computer
2:57:19 and then come back to some work being
2:57:22 done. So it doesn't require you to have
2:57:23 your computer on all the time. Now, how
2:57:26 this works in practice is that in the
2:57:29 cloud, there will be a sort of isolated
2:57:32 environment and what's called a
2:57:34 container that'll check out your repo.
2:57:36 Let's say from GitHub, there will be a
2:57:38 setup step that installs what it needs.
2:57:41 Depending on whether it needs internet
2:57:43 access, you'll have to configure that.
2:57:45 The agent will do its edits, run the
2:57:48 checks, and then returns a diff. So the
2:57:51 important point here is that you are not
2:57:53 going to be able to interact with the
2:57:57 agent. It's going to take this task
2:57:59 whatever you're giving it and then it's
2:58:00 going to run that autonomously. Now my
2:58:03 general recommendation for all of you is
2:58:05 that you be aware of this. I think this
2:58:07 is going to become a bigger part of
2:58:10 agentic workflows even for beginners in
2:58:12 the future. But I don't recommend that
2:58:15 you mess around with cloud agents. The
2:58:17 reason is, or rather one of the reasons
2:58:19 is that it's quite tricky to configure.
2:58:22 So locally on your computer, Codeex has
2:58:24 the ability to open up a web browser and
2:58:28 see your app, test things, run tests,
2:58:31 etc. And you have to configure that all
2:58:34 yourself in the cloud. So for example,
2:58:37 if you depend on some API keys, you
2:58:39 might just have them stored for local
2:58:41 development on your computer. But in the
2:58:44 cloud, you have to figure out how to
2:58:46 manage those secrets and you have to
2:58:48 figure out what sort of other just
2:58:50 general network requests is your
2:58:53 application going to have to make and
2:58:55 you have to have some mechanism for
2:58:57 permitting the container in the cloud to
2:59:00 be open to your application to make
2:59:02 those network requests. Now there is a
2:59:04 separate sort of cloud version of codeex
2:59:07 by which you can enable in GitHub code
2:59:11 review on all your code requests. So if
2:59:13 you follow this link which will be in
2:59:16 the docs or actually let me just go to
2:59:18 it right now. You can come here to set
2:59:20 up codeex cloud then go to your
2:59:23 settings. You'll have to link GitHub,
2:59:25 but then you'll be able to enable code
2:59:27 review on your repositories and then in
2:59:31 the pull request section, if you just
2:59:33 type in atcodeex review, you'll get a
2:59:36 code review by codeex of your code. You
2:59:40 can also enable this to occur
2:59:42 automatically. Now, if you have a codec
2:59:44 subscription, these cloud tasks that I
2:59:47 was referring to don't require you to
2:59:50 pay any additional API keys. So, on net
2:59:54 that could be a good and useful thing.
2:59:56 But there is a big caveat which is that
2:59:59 locally you're able to use GPT 5.5 which
3:00:02 is the most powerful current model. But
3:00:05 in the cloud, the most powerful model
3:00:09 available is GBT 5.3 Codeex, which is
3:00:12 now two generations old. So if you look
3:00:15 here, for example, at this pricing
3:00:18 table, you'll see that, you know, for
3:00:19 the plus plan, which is the weakest
3:00:22 plan, there's a certain message
3:00:24 allotment of 5.4 and 5.5 locally per 5
3:00:29 hours estimated, but it's just not
3:00:31 available for these cloud tasks or code
3:00:34 reviews. And so my recommendation is
3:00:36 that if you want a nice default
3:00:39 automated code review, what you can use
3:00:42 is a sort of default review skill that
3:00:45 already exists in codeex. So here's how
3:00:48 it works. You just type in /re to run a
3:00:50 code review and then your comments will
3:00:52 show up in line. So if I type in /re
3:00:55 there, we see that this code review
3:00:57 thing shows up. I also in the compound
3:01:00 engineering skill have a separate code
3:01:03 review skill that's also available to
3:01:05 me. I find that skill useful because
3:01:08 compound engineering team every team has
3:01:11 designed some useful sub agents to do
3:01:14 specific types of code review in
3:01:16 parallel. But my overall recommendation
3:01:19 is that you be aware of this idea of
3:01:23 cloud delegation. It's something that
3:01:26 shows up visibly in the codeex
3:01:28 application, so you shouldn't be
3:01:30 confused by it, but it's not something
3:01:32 that any of you are likely to need right
3:01:34 now. Now, just to preface where I think
3:01:37 the industry is going, kind of the dream
3:01:40 is to be able to just send off tasks to
3:01:45 agents and have it done without you
3:01:48 needing to manage in a given thread how
3:01:51 they are actually working on it. And so
3:01:53 I think that's a direction in which this
3:01:55 is going and there's a few ways in which
3:01:57 this is happening. So there are other
3:01:59 tools like Devon which are doing
3:02:02 something similar to what this cloud
3:02:04 agent features does. But if you're
3:02:06 paying for them, you got to pay for API
3:02:09 pricing right out of pocket. And so
3:02:11 there's one developer I respect, Ryan
3:02:14 Carson. I follow him on Twitter. and
3:02:16 he's told me he's using Devon to run a
3:02:19 one-man startup, but he's paying 2500 to
3:02:23 3,000 a month just on API credits.
3:02:26 Alternatively, there's other projects
3:02:29 for orchestration like Open AI Symphony.
3:02:32 It's a little bit more complex. I'm
3:02:35 looking into this right now myself. I
3:02:37 think it's a very interesting project,
3:02:39 but
3:02:41 it's not something that's going to be
3:02:42 relevant to you guys as beginners. And
3:02:44 so what we're going to be working on
3:02:47 with this creator carousel studio idea
3:02:50 that we've planned out is all something
3:02:52 that I'm going to do locally on my
3:02:55 computer. But while we've created this
3:02:58 plan, we still haven't yet divided it up
3:03:02 into distinct units of work to conduct.
3:03:05 And giving your coding agent some way to
3:03:09 know what the distinct units of work
3:03:12 there are to do can be very helpful for
3:03:14 it to work effectively and helpful for
3:03:17 you to be able to remember the context
3:03:20 of what exactly is going on in a given
3:03:23 project. So the next thing that I'm
3:03:25 going to talk about is a tool to
3:03:26 facilitate this called GitHub issues. So
3:03:29 at this point, we've created this fairly
3:03:32 extensive plan. And within the plan,
3:03:35 there is some division of work that's
3:03:38 already been created. But if you leave
3:03:40 this project for a couple of weeks and
3:03:42 then come back, you may forget that this
3:03:45 plan was there. And so it may be unclear
3:03:47 to you, especially if you have multiple
3:03:49 plans, what the next thing is that
3:03:52 codecs should do. And for this issues
3:03:55 are going to be very useful. This for
3:03:57 example is the repo of the fintech at
3:04:01 which I'm the director of AI and ML. And
3:04:03 if you come here to our issues board,
3:04:05 you'll see that we have a bunch of new
3:04:08 things we want to work on, a bunch of
3:04:10 bugs that have been identified. And so
3:04:12 something very nice is that if there's a
3:04:16 lack of clarity on what the next most
3:04:18 important thing is to work on next, I
3:04:21 can simply point codeex at this list of
3:04:23 issues using the GitHub command line
3:04:26 interface and it will be able to pick up
3:04:28 easily the next unit of work. And so
3:04:31 we've done this step of planning the
3:04:33 work. Now what I want to do is divide
3:04:36 the work into distinct issues. and then
3:04:39 we'll actually start implementing this
3:04:41 application by handing off to codecs.
3:04:43 Having a system like this, you don't
3:04:45 have to follow this exactly even I don't
3:04:47 follow this exactly. I have my own more
3:04:49 advanced deviations. But having a system
3:04:51 like this lets you avoid the problem of
3:04:54 oh codeex or claw code just forgot
3:04:58 something on the plan because you've
3:04:59 already sort of divided it up and given
3:05:02 codeex a way to keep track of everything
3:05:05 that needs to be done and is being done.
3:05:07 So roughly like this is the anatomy of
3:05:10 what you would want to put in an issue.
3:05:12 This is how it would work for a human
3:05:14 developer too. Like if you give somebody
3:05:17 a task and you don't tell them how to
3:05:18 verify it, that's not a very good task.
3:05:20 And generally when you just give codeex
3:05:24 a task of breaking up a plan into
3:05:27 issues, it will naturally work in this
3:05:29 way. So to demonstrate that let's go
3:05:32 here and let's say I want to create a
3:05:36 set of GitHub issues from the plan. I
3:05:40 want you to outline
3:05:44 using GitHub tools, the dependency
3:05:48 structure between them. And if you see
3:05:52 any good opportunities for parallelizing
3:05:57 work in work trees, let me know. And let
3:06:01 me even just take a screenshot of this
3:06:06 as context for GitHub on how I want
3:06:08 things done or rather for codecs. All
3:06:10 right. So this is done. We have a bunch
3:06:14 of issues here which have been created.
3:06:18 So these are like distinct units of
3:06:20 work. And one of the things that I asked
3:06:23 but I didn't describe was this asking
3:06:27 about parallelizing work and work trees.
3:06:30 So one feature of codeex and git in
3:06:34 general is a concept of a work tree
3:06:36 which allows you to parallelize work.
3:06:38 And we're going to be talking about that
3:06:40 in one of the next sections. And so
3:06:42 before we even get there, I wanted to
3:06:45 tell that to codeex so it thinks about
3:06:48 these issues and documents their
3:06:51 dependency structure in a good way so
3:06:53 that if there are opportunities to
3:06:55 parallelize work I and future codeex is
3:06:58 aware of them. So let's take a look at
3:07:00 one of these for example. This is the
3:07:02 issue to scaffold the application and it
3:07:07 marks out which future tickets or issues
3:07:10 are blocked by this one and it's been
3:07:12 created with this structure that we sort
3:07:15 of described and because not all the
3:07:18 details here are in the issue there is
3:07:21 also a reference to the plan. So that'll
3:07:24 be useful to future instances of the
3:07:26 coding agent after perhaps a compaction
3:07:29 event. So, I'm pretty happy with this
3:07:31 for now. I think the only thing left for
3:07:33 us to do is commit the plan. So, I'm
3:07:35 going to say commit and push the plan.
3:07:39 It says right here, the local plan file
3:07:41 under docs/plans
3:07:43 is still uncommitted. So, now when we
3:07:46 get to the work, we're going to be
3:07:47 relying on and heavily referencing these
3:07:51 issues. But issues also pair well with a
3:07:54 codeex desktop app feature which I
3:07:56 haven't introduced to you yet called
3:07:59 automations. So I'm going to get to that
3:08:01 next. So in a nutshell, an automation is
3:08:04 just a recurring task which exists in
3:08:07 codec. So you click over here to this
3:08:09 automations tab and we can see some
3:08:12 automations that I had put on pause,
3:08:15 some that I have going on every single
3:08:17 day. And so this one for example,
3:08:19 standup summary. It takes a look at one
3:08:22 of our git repositories and it sees for
3:08:25 different developers what sort of work
3:08:26 they did and gives a little bit of a
3:08:28 summary of the work that was done. So
3:08:30 yesterday apparently I was the only one
3:08:32 who did any work and so that's what's
3:08:34 documented there. Now you can set up
3:08:36 automations for all sorts of things. If
3:08:39 you go over here to automation and then
3:08:41 click on new automation, you'll see a
3:08:43 user interface that shows up that looks
3:08:45 like this where you can have an
3:08:46 automation title and then add a prompt.
3:08:48 And these prompts can basically be, you
3:08:50 know, human prompts. You can choose what
3:08:53 project they work in, what time they
3:08:55 should run at. You can choose the model
3:08:58 to use and the reasoning effort to use
3:09:00 when you use that model. And then
3:09:03 importantly you can choose whether it
3:09:05 runs locally meaning it runs directly in
3:09:08 the selected project directory without
3:09:10 creating a work tree it runs in a work
3:09:12 tree or it runs in chat. So again I
3:09:16 haven't introduced work trees yet so
3:09:17 that might be a little bit of a
3:09:18 confusing topic. We'll come back to this
3:09:20 work tree automation idea when we come
3:09:23 to work trees again. But if you want to
3:09:26 have ideas of what sorts of automations
3:09:29 make make sense, you come here to
3:09:30 feasible. And you can see that you know
3:09:33 a lot of these automations like this one
3:09:35 I picked out came you know straight from
3:09:38 this automation template and a lot of
3:09:41 them are very developer focused. But one
3:09:44 which is quite good over here and which
3:09:46 is related to what we're doing right now
3:09:48 is this one to triage new issues. So
3:09:52 this issues board right now we generated
3:09:55 issues ourselves but you can also think
3:09:57 of either external systems or external
3:10:00 stakeholders non-technical people on
3:10:02 your team who are finding issues and
3:10:04 putting them on your board and then you
3:10:06 may want to have some way of automating
3:10:09 which ones you should be tackling next
3:10:12 and so having an automation like this
3:10:14 could be quite helpful. Now there are
3:10:16 two general automation shapes with that
3:10:20 automations menu that I was showing you.
3:10:23 We were looking at project automation.
3:10:25 So these are sort of standalone. You
3:10:27 define them as an automation in that
3:10:30 menu and then they are related to your
3:10:33 project. But you can also have
3:10:35 automations that get spun up for a
3:10:38 specific thread. So the situation in
3:10:40 which I might do this is let's say I'm
3:10:42 in a thread debugging some persistent
3:10:45 error which has been occurring and then
3:10:47 I make a release. So I release a fix to
3:10:51 that bug. Then this thread automation
3:10:54 can be helpful on two dimensions. First
3:10:57 it can keep track and watch the
3:11:00 deployment of the new version of the web
3:11:02 application to make sure you know
3:11:04 checking every few minutes that it
3:11:06 actually deployed. Second, if you have
3:11:08 some kind of central location where your
3:11:11 errors are being logged, then you can
3:11:13 have an automation in that thread which
3:11:16 is just checking that central location
3:11:18 to see if users are continuing to
3:11:21 experience this error or not or if you
3:11:23 fixed it. Now, when you make these
3:11:26 automations, it's incumbent on you, just
3:11:29 like how I was talking about cloud
3:11:32 environments previously, to make sure
3:11:34 that Codeex is going to have access to
3:11:37 everything it needs to execute whatever
3:11:41 you're asking it to do with that
3:11:42 automation. And so, one of these things
3:11:44 that it may need is permissions, for
3:11:47 example, to access the external
3:11:50 internet. And if you're using codecs
3:11:53 with default permissions for example
3:11:56 then it's not necessarily going to be
3:11:58 able to or it just won't be able to
3:12:00 access the external internet and so even
3:12:02 GitHub issues might be restricted. Now,
3:12:06 Codeex has recently run or come out with
3:12:08 this new autoreview permission setting.
3:12:12 And if you set that on, then it uses a
3:12:16 tool called auto review to decide
3:12:17 whether something other than the
3:12:19 sandboxed permissions are worth giving
3:12:22 your codeex test. So, it's kind of like
3:12:23 codec checking codecs. I usually leave
3:12:26 it on full access. That might be a
3:12:28 little bit dangerous, but as I described
3:12:31 earlier, I feel comfortable with full
3:12:33 access when combined with Codeex's hooks
3:12:36 system and destructive command guard.
3:12:38 And so when you're on this automations
3:12:40 page, there's not going to be a separate
3:12:43 permissions picker. It's just going to
3:12:45 inherit the configured access that you
3:12:48 currently have in that project. But even
3:12:50 separately of permissions, certain jobs
3:12:53 can fail if you don't set up the right
3:12:56 environment variables in place. So for
3:12:59 example here, this one was meant to
3:13:02 check for one of my projects, the
3:13:04 production server, and look for errors
3:13:07 and report to me any errors that have
3:13:09 occurred in the last day. And what we
3:13:11 see here is that this failed because
3:13:13 some of the credentials it needed were
3:13:15 present, but then there were some other
3:13:17 credentials that it needed which were
3:13:19 not present. And so something you want
3:13:21 to do if this is a missionritical
3:13:24 automation is you actually want to test
3:13:27 it out. Can codeex see that project? Can
3:13:30 it use a required plugin or skill? You
3:13:33 can reference skills in your
3:13:35 automations. Can it access GitHub or the
3:13:38 needed network resource? Does the output
3:13:40 match a shape you want? Can it finish
3:13:42 without asking for extra permissions? So
3:13:45 you can trigger these automations
3:13:47 manually and you can make these
3:13:49 automations just by talking to codeex.
3:13:52 And so if we come back here for example,
3:13:54 let's make an automation. I want you to
3:13:58 make an automation which triggers at 10
3:14:05 a.m. every morning. and um in a new work
3:14:10 tree
3:14:12 or in a new thread and tells me which
3:14:16 GitHub issues to prioritize for today.
3:14:21 So with just that verbal instruction,
3:14:24 codeex should be able to create an
3:14:26 automation. All right, so this one got
3:14:29 created. Let me see if I can click on
3:14:30 it. Yeah, right here. So it says daily
3:14:34 carousel issue priorities. Review the
3:14:36 open GitHub issues for this and tell me
3:14:39 which issues use the implemented
3:14:41 dependency structure already captured in
3:14:44 the tracker issue. All right, let's
3:14:46 click on this for show automation. We'll
3:14:48 come over here to automations. So we see
3:14:50 that this is in carousel automation app.
3:14:53 It runs locally not in a work tree. I'm
3:14:56 going to explain work trees later. It
3:14:58 uses GPT 5.4 before and it uses medium.
3:15:02 So I can modify all of those. Can you
3:15:05 trigger it manually right now? Let's
3:15:08 just see what it would do. Or actually I
3:15:11 can just go here and then I should be
3:15:14 able to come back here and just press
3:15:17 this button to run it now. So let's try
3:15:18 that. Okay. So there it opened up a new
3:15:22 thread. That's what typically happens
3:15:24 for an automation. And then let's see
3:15:26 what happens. All right. So it was able
3:15:29 to access this and gave me some of the
3:15:33 top issues to work on today. Nothing
3:15:35 here is surprising, but let's say you
3:15:37 were working in a collaborative
3:15:39 environment where there were many people
3:15:41 taking off issues on their own or you
3:15:44 just wanted to have some kind of refresh
3:15:46 every morning to know what the status of
3:15:48 a project is. An automation like this
3:15:51 would be helpful. All right, so we've
3:15:53 made this plan. We broke it up into
3:15:55 issues and then I introduced you to this
3:15:57 new feature of the Codeex desktop app
3:16:00 automations which you can use to
3:16:02 interact with your backlog of issues but
3:16:04 really do any kind of automation that
3:16:06 you imagine. So I primarily use it for
3:16:09 developer tasks but you could also use
3:16:10 it to scrape some website go on Twitter
3:16:13 with computer use which you know about
3:16:15 look at something make your own personal
3:16:18 feed or newsletter whatever you want.
3:16:20 I'll probably have like a more dedicated
3:16:22 video on some of these automations in
3:16:23 the future. What I want to talk about
3:16:25 now is the technological stack that we
3:16:29 are going to be using to build this
3:16:31 application. Now, every web app has
3:16:34 three layers. There's the front end, so
3:16:36 that's what users see and click. There's
3:16:39 the back end, which is where the app
3:16:42 stores and changes data. And then
3:16:45 there's hosting. It's like how the app
3:16:47 gets onto the internet. So you can have
3:16:49 a functioning front end and back end
3:16:51 which you just host on your computer but
3:16:54 then you have to have some provider or
3:16:56 providers who are helping it get on the
3:16:58 internet if you want other people to be
3:16:59 able to see the application. And so
3:17:02 broadly the way that we're going to
3:17:04 implement this is the following. You're
3:17:06 going to be here not writing code with
3:17:08 cloud code. That's an old slide. You're
3:17:10 going to push it to GitHub which is
3:17:13 going to store your code. That's going
3:17:15 to auto deply to your hosting which is
3:17:17 going to be on a service called versel
3:17:20 which I'll introduce to you. Users will
3:17:22 visit their website. What they are going
3:17:24 to see is this front end called NextJS
3:17:28 and that front end is going to read and
3:17:31 write data to convex which is a database
3:17:35 which will be hosted on this
3:17:38 organization's own servers. Now, that
3:17:41 may all seem like quite a lot to get
3:17:44 your head around, and I completely
3:17:46 understand and respect that, especially
3:17:48 if it's your first time building any
3:17:49 kind of application. What I'm going to
3:17:51 hopefully show you though is that you
3:17:54 don't need to understand this at a deep
3:17:56 level of detail. Hopefully the idea is
3:17:58 intuitive that look there's some data
3:18:00 being presented that data needs to live
3:18:02 somewhere and all this like stuff needs
3:18:04 to be hosted on some computers which
3:18:06 other computers know that when you go to
3:18:09 mywebsite.com it's sort of like all
3:18:11 referring to this set of servers that
3:18:14 you've made. And so as you get confused
3:18:16 on this type of topic, you can always
3:18:19 use the coding agents to explain it in
3:18:21 terms that you will understand. use
3:18:23 repetition but you can also push forward
3:18:26 quite far with building web applications
3:18:28 without having a deep understanding of
3:18:31 all these pieces under the hood. So
3:18:33 again to repeat our front end here will
3:18:36 be Nex.js our backend is convex and our
3:18:39 hosting is versel. So the reasons for
3:18:42 this is that this thing Nex.js JS is an
3:18:44 extremely popular front-end framework.
3:18:47 Convex is a very nice database which you
3:18:51 can define fully in the same programming
3:18:54 language that you're using to define the
3:18:57 front end in Nex.js the TypeScript and
3:19:00 it has a lot of convenience features
3:19:02 that make it very nice to work with as a
3:19:06 developer but also very nice to work
3:19:08 with for agents. And finally, Verscell
3:19:11 is one of the biggest sort of cloud
3:19:13 hosting providers. It has a pretty
3:19:16 generous free tier and so does Convex.
3:19:19 So you're going to be able to host
3:19:21 reasonably substantial web applications
3:19:23 for free. So again, like when you're
3:19:26 using codeex, you could just say build
3:19:28 me a web app and it's often going to
3:19:31 make like Nex.js and Versel as sort of
3:19:34 common technological choices. Convex is
3:19:37 one that would pin it down. may not be
3:19:39 the default it will go for. It'll
3:19:41 usually go for something like Superbase
3:19:43 or Firebase. But the point here isn't to
3:19:46 master this whole stack, understand all
3:19:48 the details of Nex.js, Convex or
3:19:51 Verscell. I could do 5hour courses on
3:19:54 each of those individually and not
3:19:56 exhaust everything that there is to
3:19:58 know. You just by saying these words are
3:20:01 giving Codeex some constraints around
3:20:04 what it's going to build. And so that's
3:20:06 what we did in the creation of this
3:20:08 plan. Now we'll have a good idea of what
3:20:11 it's going to be doing. So again, the
3:20:13 reason for Nex.js is that it's very
3:20:16 natural fit with Versell, common enough
3:20:18 that Codex has lots of examples and is
3:20:21 just a front-end framework. There are
3:20:22 other ones that are good to use too.
3:20:24 Astro, Vite, I've used them. They're all
3:20:27 good. Convex, in addition to what I
3:20:29 mentioned of being in the same language
3:20:31 as the front end, is going to have a lot
3:20:34 less SQL or migration friction because
3:20:37 it's a NoSQL database, meaning it
3:20:40 doesn't have as strictly structured a
3:20:42 schema. And Verscell just makes
3:20:44 deployment of your web application super
3:20:47 easy. So you just have your local code,
3:20:49 you push to GitHub, and then if you set
3:20:51 it all up in Verscell, it'll deploy to a
3:20:53 public URL where you can test out the
3:20:55 application very easily. Now, in order
3:20:57 to even get started with these three,
3:21:00 we're going to have to do a few more
3:21:01 installation steps. And then we'll be
3:21:03 ready to actually start building the
3:21:05 application. The first thing you'll have
3:21:07 to install is Node, which is the package
3:21:10 manager for all sorts of packages that
3:21:13 you'll be importing when you're building
3:21:14 this application. So, you guys are pros
3:21:17 with Brew now. You know the drill. You
3:21:19 just copy this Brew install node. Come
3:21:21 back to codeex, command J, paste it in,
3:21:25 enter. Next, you'll have to sign up for
3:21:27 an account with Convex. So, they have,
3:21:31 as I mentioned, a pretty generous free
3:21:33 tier with almost all the features that
3:21:35 the pro tier has. I'm on the pro tier.
3:21:38 Uh, obviously, you don't need this
3:21:39 business and enterprise tier, but you
3:21:41 just come in here to start building.
3:21:43 Click on that again. And then, if you
3:21:45 don't have an account, you come here to
3:21:46 sign up. You can say continue with
3:21:48 GitHub or continue with Google. I've
3:21:50 signed up with GitHub, so I'll go there
3:21:53 to continue with GitHub. And then I'll
3:21:55 you'll reach a page that looks like
3:21:57 this. So I have a bunch of personal
3:21:59 projects, some client projects all in
3:22:02 this space. Yours will look empty
3:22:04 because you probably don't have any
3:22:05 projects yet, but this is what you'll
3:22:06 reach at. Finally, you'll want to come
3:22:08 over here to versel at verscell.com. Go
3:22:12 over here to sign up. You're working on
3:22:14 personal projects. So just stay on the
3:22:16 hobby plan. Show schmo. Go to continue.
3:22:21 Choose your account. Log in. And then
3:22:24 you'll reach a page that looks like
3:22:26 this. So this is a lot of my projects
3:22:30 all located in one place. I'm on the pro
3:22:33 plan, but you can be fine on just the
3:22:35 hobby plan. Lastly, you'll want to
3:22:37 install the command line interface for
3:22:39 Verscell. So this allows you to do
3:22:41 everything that you would want to do in
3:22:44 Verscell's system programmatically. And
3:22:46 what you want to do is come over here
3:22:48 where it says PNPMI-G
3:22:50 Verscell. Don't copy the P. You just
3:22:53 copy the npm cuz that's what we
3:22:56 installed. It's a little bit confusing,
3:22:57 I know, but forget it. Come back here.
3:23:00 Just paste that in. Press enter. And
3:23:03 it's going to install this command line
3:23:06 interface globally, which you'll now be
3:23:08 able to use to do all these versell
3:23:11 operations. So, this puts us in a good
3:23:14 position. We now have everything
3:23:15 installed that we'll need to be able to
3:23:18 work on this application. So, what I'm
3:23:20 going to do next is just have codeex
3:23:23 work here on issue three. So, I can go
3:23:26 here and say start working on issue
3:23:30 three on a new branch. And so, what it's
3:23:34 doing right now is scaffolding this
3:23:37 stack that I just described to you, the
3:23:39 front end, the back end, some necessary
3:23:42 directories. And my hope and what I want
3:23:45 to show you and what I'm going to try to
3:23:47 do is to pursue building this
3:23:50 application in as minimally a technical
3:23:54 way as possible. Now, while Codeex gets
3:23:57 started on scaffolding this application,
3:24:00 I want to introduce you to this topic
3:24:02 that I've been talking about over and
3:24:03 over for the last, I don't know, 20 or
3:24:05 30 minutes. Work trees. So, what are
3:24:08 work trees? Typically, when we're
3:24:11 working like we just did right now,
3:24:13 you're working in a single repo folder
3:24:15 and then you can switch branches inside
3:24:18 that repos folder. So, that's what I
3:24:21 just did, right? To scaffold this
3:24:23 application, I said, "Hey, codeex, start
3:24:26 working on issue three. Check out a new
3:24:28 branch and then, you know, get on it."
3:24:30 But let's say I had reached a point of
3:24:33 my project work where a lot of the work
3:24:36 could be done in parallel. Well, if I'm
3:24:40 working on physically the same set of
3:24:42 files, they're going to be, you know,
3:24:45 overwriting each other, conflicting with
3:24:47 each other. It could be a big pain. And
3:24:49 so, work trees let you create just
3:24:52 independent workspaces with your exact
3:24:55 same repo where you can be working on
3:24:58 features side by side simultaneously.
3:25:01 And so let's say we had an editor shell,
3:25:04 image specs, a brand kit model. Some of
3:25:07 these things depend on other ones, but
3:25:11 some of them can be pursued
3:25:12 independently. And when we have that
3:25:14 opportunity to pursue something
3:25:16 independently, that lets us speed up the
3:25:18 rate at which we could do our work. And
3:25:20 so when you come here and you make a new
3:25:24 chat for this automation app for
3:25:26 example, when you're selecting where to
3:25:28 run the task, you can choose to either
3:25:31 keep working on it locally. So locally
3:25:33 right now we're on this branch and you
3:25:36 would be fixed to be on this branch or
3:25:38 you can check out a new work tree. So
3:25:41 the place where work trees actually live
3:25:44 is in your codec home underneath work
3:25:48 trees. So this is kind of small but
3:25:50 hopefully my editor will make it
3:25:51 visible. I'm here using a tool I like
3:25:54 for file exploration. So there's my home
3:25:56 folder and then here's the codeex which
3:25:59 is in home. And then over here you can
3:26:01 see this thing called work trees. And so
3:26:04 if we click in we'll see that there's
3:26:06 all these work trees here that are being
3:26:08 created. There are these like fourdigit
3:26:10 prefix things. And if I kind of scroll
3:26:13 through them, we'll see that there's
3:26:14 basically entire different projects
3:26:17 which have all been copied into these
3:26:21 distinct work trees. So I have a bunch
3:26:23 of different projects I work on and
3:26:25 different versions of them like entire
3:26:28 copies are all kept in this work tree
3:26:30 configuration. You can also see all the
3:26:33 work trees that you have available in
3:26:36 your settings in the work trees
3:26:38 navigation. And you can see by project
3:26:41 like all the different work trees that
3:26:44 you have alive right now. If you click
3:26:46 on this get tab over here, you'll see
3:26:49 that there's a few configuration options
3:26:52 for automatically deleting old work
3:26:54 trees and the autodelete limit. So the
3:26:58 idea here is that if you're creating an
3:27:00 entire copy of your project directory,
3:27:03 that's going to take up space. And so if
3:27:05 you just let these work trees live
3:27:07 forever, then that's going to be taking
3:27:08 up a lot of space for quite a while. And
3:27:11 so it's a good practice and I recommend
3:27:13 you can tweak around with these
3:27:14 settings. But you should just allow
3:27:16 codeex to clean up work trees itself.
3:27:20 When you create a work tree, it will
3:27:23 start in a status called detached head.
3:27:26 meaning it's not necessarily associated
3:27:29 with any named branch, even your main or
3:27:32 your master branch. And so you can just
3:27:34 keep working on it in that status or
3:27:37 what I typically do is I'll create a
3:27:39 branch for whatever work I intend to do
3:27:42 on that work tree as I'm working on it.
3:27:45 Now, as I'm getting into this, like I'm
3:27:47 getting kind of technical, and there's
3:27:49 no way getting around it. Work trees are
3:27:52 a little bit of a technical topic. I
3:27:54 like using them. I find them very
3:27:56 useful. But if you're a beginner, you
3:27:58 don't have to worry too much about this
3:28:00 material. However, it's a pretty big
3:28:03 part of codecs and as you get advanced,
3:28:06 it's absolutely critical to understand
3:28:08 this and build even far beyond what I'm
3:28:11 describing right now because work trees
3:28:14 are what are going to allow you to get
3:28:16 to that next level of more and more
3:28:19 autonomous work. Now something important
3:28:22 to point out is that work trees need
3:28:25 environments. So when you make this copy
3:28:29 of all your files to a work tree, only
3:28:33 the files which you're actually
3:28:35 committing to your repository are going
3:28:38 to be included in that work tree copy.
3:28:41 So what types of things do people
3:28:43 typically not commit to their
3:28:44 repository? Well, if there are any
3:28:46 environment variables, secrets,
3:28:48 passwords which need to be in the
3:28:50 repository but not actually committed,
3:28:52 then those will not get copied over to
3:28:55 the work tree. Or if there are packages
3:28:57 that you are installing inside the
3:29:00 repository, say in a virtual
3:29:02 environment, but then you wouldn't want
3:29:04 to commit those to your repository cuz
3:29:06 they're very heavy and bulky. Well, when
3:29:08 you create your new work tree, it's
3:29:10 going to have all your code, but it will
3:29:12 not have the packages installed in the
3:29:15 work tree. So, you need to have some
3:29:17 kind of bootup process for creating this
3:29:20 environment. And so, there's a concept
3:29:23 in codeex of environments. And so, if
3:29:26 you go back to the settings, you'll see
3:29:27 this tab here called environments. And
3:29:30 you can see that for, you know, pretty
3:29:31 much every single one of my
3:29:33 applications, I have an environment
3:29:35 available. And so what does this
3:29:37 environment do toml file actually look
3:29:39 like? Well, I keep mine pretty simple.
3:29:42 All this environment.toml file has is a
3:29:46 file that's called
3:29:48 scripts/workree/bootstrap.sh.
3:29:52 And anytime a new worktree is created,
3:29:55 the first thing that happens is that
3:29:57 this shell script gets run. And so if I
3:30:00 was making one for the creator carousel
3:30:02 studio, what I would create is
3:30:04 in.codeexc/environment/environment.tottoml,
3:30:09 I would have a file that looks like
3:30:11 this. And then in a scripts directory, I
3:30:14 would have this bootstrap script. Now
3:30:17 what this bootstrap script does for me
3:30:19 is it basically looks for any
3:30:21 dependencies at the root that need to be
3:30:23 installed. It looks for any secrets at
3:30:25 the root folder for like the main work
3:30:28 tree and gets them a local version into
3:30:31 the individual work tree. And it also
3:30:34 makes sure that any ports for this
3:30:36 application don't conflict across work
3:30:38 trees. And so the typical workflow which
3:30:41 will then occur is you make some changes
3:30:45 in a work tree. You create a branch in
3:30:47 that work tree. You commit and push and
3:30:50 then open up a PR a pull request a
3:30:53 request to merge the work in that branch
3:30:57 into the main branch. And so you're able
3:30:59 then to be working on multiple features
3:31:02 at a time which may have some light
3:31:05 conflicts with each other but you can
3:31:06 sort of worry about resolving them later
3:31:09 but you do have to resolve them. So if
3:31:12 two work trees are editing the same file
3:31:14 sometimes even when they're working on
3:31:16 the same file the additions they're
3:31:18 making to those files could be such that
3:31:20 they don't actually conflict but
3:31:21 sometimes one PR changes the foundation
3:31:25 underneath another PR. And so when that
3:31:28 occurs, it's sort of incumbent on you to
3:31:30 think, okay, which ones of these should
3:31:33 I merge in first and how should I manage
3:31:36 the conflicts between these PRs in order
3:31:38 to reconcile them. Now before agent
3:31:41 coding like this is something that
3:31:43 people did quite often not with work
3:31:45 trees but collaborating between
3:31:47 different people on big teams of
3:31:49 developers and it was a mental exercise
3:31:52 that they had to sort of go through line
3:31:54 by line and figure out okay how am I
3:31:56 going to resolve this but now we have
3:31:59 access to this super intelligence that
3:32:01 can do this thinking for us and so it's
3:32:04 not as much or it's not a huge cognitive
3:32:07 cost to reconcile how these
3:32:10 inconsistencies with work trees or think
3:32:12 about which one should be merged in
3:32:14 before another one because the agentic
3:32:16 coding tools themselves could help us
3:32:18 with that reconciliation. And so if I
3:32:20 was like giving human instructions for
3:32:22 how to handle conflicts, you would, you
3:32:24 know, keep each work tree to one issue,
3:32:27 avoid assigning the same files to
3:32:29 parallel tracks or like choose your work
3:32:32 trees based on the opportunities for
3:32:34 parallelization, which is what we tried
3:32:36 to set up when we were designating the
3:32:37 issues. merge lower risks PR first. But
3:32:41 then like again, if you have any
3:32:43 confusion about this or you're
3:32:44 struggling to get it set up or there's
3:32:46 some sort of weird error that's
3:32:47 occurring, just ask codeex. It'll solve
3:32:49 it. It's really smart. Now, if
3:32:51 two changes need to be designed
3:32:53 together, like you're designing, I don't
3:32:56 know, like the editor for this canvas
3:32:59 for this application, and then you're
3:33:02 also want to design like what toggles
3:33:04 are on that. Obviously, you can't design
3:33:06 those on parallel. So you're going to
3:33:08 have to stack those as like separate PRs
3:33:11 or like one will have to be built first
3:33:13 before you can start work on the other.
3:33:15 And so for the rest of this course,
3:33:17 we're getting close to the finish line.
3:33:19 Now let's actually see it through and
3:33:21 build this application. So it went and
3:33:24 did the scaffold of you know and okay
3:33:28 and I'll also be actually implementing
3:33:30 these work trees where I see the
3:33:32 opportunity arise to implement them. So
3:33:34 let's take a look here. says it's
3:33:36 running. And so one of the nice things
3:33:38 here is that you can actually open up
3:33:41 things in this web browser. And you can
3:33:44 use later this tool called browser use
3:33:47 to control the inf browser. So this is
3:33:50 like just a sort of outline, but it it
3:33:53 looks pretty nice to start. Like it's a
3:33:55 pretty good starting point. Okay. So I'm
3:33:59 just going to say it looks good to me.
3:34:03 create a
3:34:05 pull request. All right, the pull
3:34:08 request is opened. So, we can click this
3:34:10 button to take a look at it. And we'll
3:34:13 see that here. I of course I wrote this
3:34:15 all by hand. I would never use AI to
3:34:18 write a pull request copy. Never do
3:34:20 that. It's very unethical. Yeah. And so,
3:34:23 wow. Built with compound engineering.
3:34:26 Even got Oh, they're really sticking out
3:34:27 their property here. Okay. So, again,
3:34:30 I'm a dummy. I I'm not calling you guys
3:34:32 dummies, but I don't know anything
3:34:34 technical. So, the goal here is to build
3:34:36 this with like as little brain power as
3:34:39 possible. So, you come back to codeex
3:34:41 and then you say looks Gucci, please
3:34:45 merge. And it's very important that you
3:34:47 use these particular words Gucci and
3:34:50 PLZ. Doesn't work as well if you say P L
3:34:53 E A S E. Codeex responds well to um to
3:34:57 that. All right. So we look here and we
3:34:59 see that this has been merged in. So if
3:35:02 I refresh now, there's no more pull
3:35:04 requests. The number of issues has gone
3:35:06 down by one. If you click on this pull
3:35:08 request thing, Jesus, GitHub's been
3:35:11 having a lot of issues. You can see now
3:35:12 that it shows up as closed rather than
3:35:15 open. So let's come back here and let's
3:35:17 just ask codeex now. Great. What should
3:35:20 we work on next? All right. So it's
3:35:23 suggesting start with four and then the
3:35:26 fun split opens up five convex
3:35:28 persistence in one work tree. Six SVG
3:35:32 and sharp renderer spike in other work
3:35:34 tree. So we've been working consistently
3:35:36 in this one thread. I'm going to open up
3:35:39 here go and start a new work tree.
3:35:41 Anyway, uh let's go highowered.
3:35:44 uh start working on GitHub issue 4 on a
3:35:49 new branch.
3:35:52 Boom. So you can see there's this work
3:35:54 tree creation process. Right now I
3:35:56 haven't set up any environmental toggle.
3:35:59 So it should occur relatively fast. All
3:36:02 right. So the branch got created. It
3:36:05 picked up issue 4 and it's going
3:36:09 straight to working on it. Okay. So this
3:36:12 got finished after 6 minutes and 23
3:36:16 seconds. So again, we're taking a yolo
3:36:20 approach to this. So let's just make
3:36:23 sure first can I start this up and can
3:36:28 you let's say use concurrently to
3:36:32 document how to start up convex and
3:36:36 nex.js simultaneously.
3:36:39 Okay, cool. Can you start it up now and
3:36:44 let me see it in the inapp browser?
3:36:48 Okay, so we're able to see it in this
3:36:51 work tree now in this inapp browser. I
3:36:55 guess this is going to be like some kind
3:36:57 of template that we'll be using later.
3:37:00 question or actually let's just say do
3:37:04 okay and can we make sure those
3:37:08 environment variables will be on the
3:37:11 main work tree or can we have some sort
3:37:16 of uh environment bootstrap in this repo
3:37:21 as part of this PR I have a skill to
3:37:25 basically automate the creation of those
3:37:28 bootstrap scripts for PR RS that I was
3:37:31 telling you about. So, let's make sure
3:37:34 that that's going to be the case so that
3:37:36 we have this environment created. All
3:37:38 right. So, we got these shenanigans
3:37:43 made. We got a secrets file created. And
3:37:47 then, if you recall this environment
3:37:49 toml concept that I talked to you about
3:37:52 and having a bootstrap file that it
3:37:55 runs, that's all created. Um, let's just
3:37:58 say this is all good as is. Um, can you
3:38:04 kill local port so we can run it here?
3:38:09 Something that happens when you make a
3:38:10 web application is that the web
3:38:12 application when you test it locally has
3:38:15 to be running on some port on your
3:38:19 computer. So you boot it up and then you
3:38:21 can test it out locally. And what we're
3:38:24 doing here is clearing the services
3:38:26 which are currently running on the port.
3:38:28 Run it for me brother and open it up
3:38:33 brother with browser use. These tools
3:38:36 respond better when you call them
3:38:39 brother with a uh ambiguous Eastern
3:38:42 European accent. They can sense the
3:38:45 accent brother. I don't know what accent
3:38:47 would that be. Estonian. I'm going to
3:38:49 call it an Estonian accent. All right.
3:38:52 So we got like some kind of buttons here
3:38:54 for brand kit import events. Okay,
3:38:57 that's uh some kind of template here. I
3:39:00 guess these are going to be like
3:39:02 functionalities we have later down the
3:39:04 road. At this point, what should be
3:39:06 testable? I don't even know where I'm at
3:39:07 with making this application. But the
3:39:09 goal here is to use my brain as little
3:39:12 as possible because my brain power is
3:39:15 extremely valuable and so we don't want
3:39:16 to be wasting it whenever I don't have
3:39:18 to. Okay. What you can test in the
3:39:20 browser. It renders. This thing is
3:39:24 static. Okay, that looks good. It looks
3:39:27 Gucci, my brother. Why don't we be uh
3:39:30 merging it in? And then you tell me what
3:39:33 is next thing we can work on. That was
3:39:36 much better. When I say merging, I mean
3:39:39 the P request. Okay. Wow. Beneos are
3:39:42 Morgan. Morgan is my Rico.
3:39:45 I mean Merge in the pull request. Oh,
3:39:48 that's funny. My editor is going to
3:39:50 laugh at that for sure. All right. So,
3:39:52 this one is merged in. Um, very good.
3:39:56 So, what I'm going to do now is I'm
3:39:59 going to say, can you kill the
3:40:04 processes? And then I'm going to open a
3:40:06 new chat. And I'm going to open this new
3:40:08 chat in a work tree. And look at that.
3:40:10 Now, we got an environment. We got an
3:40:12 environment. Yeah, boy. And now I'm
3:40:15 going to say on this work tree I want
3:40:17 you to claim issue five and start
3:40:21 working on it GitHub and make a pull
3:40:25 request. And then over here I'm going to
3:40:28 say I want you to claim issue six and
3:40:32 start working on it GitHub and make a
3:40:34 pull request. So now we're going to be
3:40:37 able to have two things that we're
3:40:39 working on in parallel. And you might
3:40:41 ask, okay, if you're working on both of
3:40:43 these things in parallel, how are you
3:40:44 going to manage the pull request
3:40:45 process? Well, I'm a dumb, stupid idiot
3:40:49 with no brain power. But like, this
3:40:51 thing, this this computer thingy is
3:40:54 really intelligent. So, we're
3:40:56 going to ask it. I got work trees
3:40:59 started for both issue five and issue
3:41:03 six separately. How should I merge them
3:41:07 in? like would you recommend doing one
3:41:10 before the other? So it says there's no
3:41:13 direct dependency between them. They're
3:41:16 kind of parallel and so it suggests
3:41:18 doing six first and then update rebase
3:41:22 five onto main. Rebasing is a git
3:41:25 concept to sort of make different
3:41:29 branches consistent. Again like you
3:41:32 don't need to know what it is exactly if
3:41:34 you want to figure that out. The best
3:41:36 way to do that is just ask codeex to
3:41:39 help explain it to you. If you want to
3:41:41 understand it, just ask Codex about it.
3:41:43 So, we got this thing going. We got
3:41:45 numero synco and then over here we got
3:41:49 numeroace, right? That's pretty cool,
3:41:51 huh? I mean, in my opinion, we are kind
3:41:54 of living the dream here. The dream
3:41:56 being to let the machines do all of our
3:41:58 work for us and then we just like sit
3:42:02 back. Yeah, of course, bro. actually do
3:42:05 it and then push your poll request. I
3:42:09 don't know. Sometimes these things can
3:42:10 be stupid and just stop early for no
3:42:13 reason. All right, so I've literally
3:42:15 just been sitting here working on other
3:42:17 projects for the last 10 minutes and you
3:42:19 see this one worked for 11 minutes and
3:42:22 then this one worked for 10 minutes. And
3:42:24 so if we didn't use work trees, these
3:42:27 two things would have you know stacked
3:42:30 one on top of each other and would have
3:42:32 taken 20 minutes. So we save some time
3:42:34 here. So I recall here the advice was to
3:42:38 merge number six in first. So let's do
3:42:40 that. Ah, sounds good, brother. Let us
3:42:44 be merging in the PR number six. I like
3:42:48 getting his idea. Or actually the PR
3:42:50 number 16, but issue number six. So you
3:42:53 still have to choose an order in which
3:42:55 to merge in these PRs. And so I'm not
3:42:58 going to initiate or actually let me uh
3:43:00 let me speed that up. And then after we
3:43:02 get five and six merged in. What's good
3:43:06 amigo?
3:43:11 The issue number
3:43:15 can whisper flow. No, not really. Kind
3:43:18 of. Okay, good. Amigo, that's pretty
3:43:22 funny. Oh, whisper flow has uh some
3:43:24 ability to handle Spanglish. This will
3:43:27 be good to know for all you Spanglish
3:43:29 speakers out there.
3:43:41 Let's try uh let's try Russian.
3:43:46 Oh, it translated it to like English,
3:43:48 but works well enough. Let's see how
3:43:50 this one's doing. All right, so this
3:43:52 one's done. We can archive this one. We
3:43:54 can archive this old one. And we got
3:43:58 some random ones just sitting around
3:44:00 here. I might as well archive them.
3:44:02 Archive. Archive. Okay, here we are.
3:44:05 We'll just open up a new one here and
3:44:08 say, "Can you help me test out app in
3:44:12 its current state in the in app
3:44:15 browser?" We'll do a little testy test
3:44:18 and then we'll figure out if we're on
3:44:21 the right path with like automating the
3:44:24 creation of these graphics or what we
3:44:26 got to do next. All right. So, it's
3:44:29 showing up here and now you can see I
3:44:31 asked it to test it out. So, it's
3:44:33 actually going and doing these testing
3:44:36 activities. You can see the cursor right
3:44:38 there over import events itself. All
3:44:40 right. So, it says current state looks
3:44:43 clean but very shelllike. No errors or
3:44:46 warnings. All the tests pass. These main
3:44:49 buttons aren't actually wired up yet.
3:44:51 Okay, cool. What are the next issues you
3:44:56 can work on? Next, I'm going to show you
3:44:58 something really crazy. You're going to
3:45:00 you're going to enjoy this. All you Vive
3:45:03 coders out there, do you see these in
3:45:06 GitHub issues? First, I want you to
3:45:10 download these Instagram images from
3:45:14 this post and store them in here
3:45:17 somewhere. I want you to have those as a
3:45:20 reference of like kind of the type of
3:45:22 final product that we're trying to
3:45:24 produce. Then I basically just want you
3:45:26 to go through these tickets one by one
3:45:29 and just keep going until we have some
3:45:34 interface that helps me automatically
3:45:36 create images of the style that you see
3:45:40 in those Instagram images about as pixel
3:45:42 perfectly as possible. I just want to
3:45:44 get it working as a local web app right
3:45:46 now. And then once it's done, we'll work
3:45:48 on deployment. So basically what's
3:45:50 happening here is that I am feeling
3:45:53 really lazy. Like you have no
3:45:56 idea how long I've been working on this
3:45:59 course for. And so I want to
3:46:02 speed up this process to just like yolo
3:46:05 it. I'm going to deliver to you a
3:46:07 working web app. Okay? I am a keeper of
3:46:10 my promises, but I'm getting kind of
3:46:13 tired of this. I got other things to do.
3:46:15 I can be going outside, seeing things,
3:46:18 taking vacations. Instead, I'm here
3:46:19 teaching you Codeex desktop app. And so,
3:46:23 we need to speed this thing up. And so,
3:46:25 what I basically said is, look, I just
3:46:28 want you to go straight through all
3:46:30 these issues, but this is actually a
3:46:31 teaching moment. Okay? So, I'm saying
3:46:34 here, download these Instagram images
3:46:36 and now you kind of have a source of
3:46:37 truth. Like, this is what I want to
3:46:38 produce. Okay? And I just want you to go
3:46:41 straight through all these tickets. Just
3:46:43 don't stop, okay? and just keep going
3:46:45 until this thing is done and I can try
3:46:47 something out. Now, what's the risk of
3:46:49 approaching building something in this
3:46:51 way? Well, you might come up with
3:46:53 something that's totally off base, but
3:46:55 and I wouldn't create all types of
3:46:57 software in this way, but this kind of
3:46:59 software like maybe I would. I'm not
3:47:02 intending this for public consumption.
3:47:04 This is kind of like a throwaway fun
3:47:05 task for me. I might use it. I have some
3:47:08 like events organizing software ideas in
3:47:11 the back of my head. And so maybe I
3:47:13 would actually use this software, but
3:47:15 even still, it's going to be like some
3:47:16 throwaway thing for me. And so this
3:47:18 might be an appropriate way to build
3:47:21 this kind of software. And it's a
3:47:23 strategy that you should be aware of too
3:47:25 when you're thinking about building your
3:47:26 own things. Even if I'm building things
3:47:29 for public consumption, this type of
3:47:31 strategy that I'm executing right now
3:47:33 may be an appropriate way to do things
3:47:35 because you can kind of think of
3:47:37 software building in this modern agentic
3:47:39 era as sometimes being a bit like
3:47:41 sculpting except you can like take the
3:47:44 pieces that you sculpted off and graft
3:47:46 them back on uh costlessly as well. So
3:47:49 the sense in which I mean is like about
3:47:51 sculpting is that I just let this thing
3:47:53 like go straight through non-stop,
3:47:55 right? And do its thing, but then maybe
3:47:58 there's like I don't want in it
3:48:01 though the core functionality is there.
3:48:03 So then I like a sculptor, I can just
3:48:05 sort of like chip off those little
3:48:07 things that I don't want at the end when
3:48:09 it's all done. But for now, I'm tired.
3:48:12 So I'm going to let this thing just, you
3:48:15 know, snap snap. I got apps to make. I
3:48:18 got fancy restaurants to go to with all
3:48:20 this YouTube ad money, you know, I have
3:48:23 to spend it somehow. And so, I'm going
3:48:25 to be researching some fancy restaurants
3:48:28 that all you people who are viewing this
3:48:30 course are going to be paying for. So,
3:48:32 I'm going to have my fileman and my my
3:48:35 caviar cuz I'm a refined man with
3:48:37 refined tastes. All right, let's uh
3:48:38 let's see how it goes. All right, so it
3:48:41 made something. Let's uh see what it
3:48:44 made exactly first. How long was this
3:48:46 thing working for? 18 minutes and 5
3:48:48 seconds. Okay. And Huh. Interesting. So,
3:48:52 is this what it produces? Not bad. Show
3:48:55 me how it works. Let's uh let's see what
3:48:59 this thing does. So, like obviously, you
3:49:02 know, these proportions. You got to got
3:49:05 to work on these. It's like created a
3:49:07 4x4 grid here. Oh, wow. So, it actually
3:49:10 it got all of these. Uh-huh. So, you
3:49:12 like you put them in over here, I guess.
3:49:14 And then you got like different events
3:49:17 here. Yeah, that's pretty cool. So you
3:49:19 stick your photo in slide field spring.
3:49:23 Okay, so you can like edit a particular
3:49:25 one here. Not bad. It's like it's not
3:49:27 not bad at all. Obviously room to
3:49:30 improve on the design direction both in
3:49:33 terms of the user interface and like
3:49:36 this particular thing. But I kind of
3:49:39 like it. So, if I was like continuing to
3:49:42 work on this, and I'll work on it a
3:49:44 little bit more here, but these things
3:49:46 are kind of like getting outside the
3:49:48 scope of what I want for this beginner
3:49:51 course. There are very interesting
3:49:53 possibilities now with how you can
3:49:56 design front ends, skipping, you know,
3:49:59 some step of making Figas, for example,
3:50:02 and going directly to highfidelity
3:50:04 mockups using the image gen
3:50:07 functionality that I think I've already
3:50:08 shown you guys. Sweet. So, I can click
3:50:10 on this for export PNGs and then I guess
3:50:14 I can open it up. How does that work? I
3:50:17 clicked export PNG
3:50:20 but not able to open anything up when I
3:50:24 click on it. Now look at this. This is
3:50:26 really cool. So you just take a
3:50:27 screenshot here and just paste it right
3:50:30 in. Very handy. I'm telling you like the
3:50:32 codeex desktop app is next level. Um
3:50:36 just right now I was reading this like
3:50:38 very interesting tweet. The agent
3:50:41 harness is the platform. Multi-billion
3:50:44 businesses will be built on top of
3:50:47 codeex co-work cursor. I don't know
3:50:49 about co-work sucks. And cursor I mean
3:50:53 they are they're dead in the water. Same
3:50:55 as they were with AWS Azour GCP. Now is
3:50:59 the time to invest. Thank me later. All
3:51:01 right. I have to fix these links and I
3:51:04 guess they do open up now. So you can go
3:51:07 back and let's just go here and I can
3:51:09 click on this. Let's see. Export PNGs.
3:51:13 There you get it like that. Downloaded,
3:51:15 I guess. Just click on it. Cool. Don't
3:51:17 look perfect, but don't look terrible.
3:51:19 Okay, cool. Let's make what are the
3:51:23 remaining issues to work on? What's the
3:51:26 exact order in which you would want to
3:51:28 do these? Okay, great. I want you to
3:51:31 keep going through in your suggested
3:51:33 order until everything is done and we're
3:51:37 like producing output that looks like
3:51:39 the sample output. You do have the
3:51:41 sample output, right? Like the ones from
3:51:43 the Winnipeg Digest. Yeah. By the way, I
3:51:45 just want you to keep going.
3:51:48 Like, don't stop. Just keep keep going
3:51:51 all the way through to the end because
3:51:54 I'm really freaking lazy and I don't
3:51:56 want to keep working on this project no
3:51:58 more. So, you got to help me out. You
3:52:00 feel me? Telling you, communicating in
3:52:02 this way, it's been scientifically
3:52:04 proven to get better results out of LLM.
3:52:07 I'm writing the paper right now, but
3:52:09 it's uh it's in stealth. We're not uh
3:52:11 we're not letting the public know just
3:52:13 yet. This is just between us. See,
3:52:15 telling us that it feels us. All right.
3:52:18 So, I just let it keep going. It worked
3:52:21 for 15 minutes and 21 seconds, and it
3:52:25 says here's what it produces now. So
3:52:28 that's like everything that it's
3:52:29 producing. Here's an example image. Like
3:52:32 that looks pretty freaking good. And
3:52:35 then this is the reference. Okay. So
3:52:37 like here's what it produced and here's
3:52:39 a reference. Like obviously there's room
3:52:42 here for improvement. I don't have
3:52:44 access to that proprietary logo. But for
3:52:46 my purposes, for how this is working
3:52:48 locally, this is amazing. Like
3:52:50 do you know how lazy I've been in the
3:52:52 last 15 minutes? Just been on my phone
3:52:55 like reading Twitter tweets while stuff
3:52:58 is going on here. It's awesome. All
3:53:00 right. Very nice, my brother. I am mucho
3:53:03 proud of you. I cannot underemphasize
3:53:06 how proud I am of you. Last step because
3:53:09 I am lazy I want you now.
3:53:12 Please, I beg of you, my brother. I want
3:53:15 you now to deploy this on real website.
3:53:18 A real website on Versel. Please my
3:53:21 brother, I beg of you. It is very
3:53:24 important that you do this and you
3:53:26 connect it to convex as well. Thank you,
3:53:28 my brother. You you mean the world to
3:53:30 me. I'm telling you, you just put a
3:53:32 little bit of pizzazz into how you're
3:53:34 talking to these things and and they
3:53:36 know. So, it's going to just set
3:53:39 everything up, right? We got Versel
3:53:42 already connected. We got like convex
3:53:44 connected. And so, now we just let it do
3:53:47 its thing for us, right? like take me
3:53:50 out of the picture and just get the
3:53:52 deployment working. All right, done my
3:53:55 brother. It is live. Let's check it out.
3:53:58 Damn. Well, would you look at that? That
3:54:01 is pretty freaking cool if I must say so
3:54:05 myself. I mean, kind of confusing. Like
3:54:08 could uh improve the interface, but
3:54:10 let's try using it out. Let's like find
3:54:12 a new set of events and populate them,
3:54:16 you know. Very cool my brother overall I
3:54:20 am wanting you to try to update uh this
3:54:23 this thing you have here why do not we
3:54:25 being trying to find events in Aston
3:54:30 Illinois if you know where this is so
3:54:32 you'll be looking up the events in Aston
3:54:36 Illinois and I am wanting you use our
3:54:40 skill we create in this repository to be
3:54:44 updating what I see on the website. I'm
3:54:48 sorry, guys. I know that this must be
3:54:51 very irritating to hear all my different
3:54:54 uh accents, but look, how how
3:54:58 long can this course go? I don't know
3:55:00 how these other course creator people do
3:55:03 it. Saw this one he made a
3:55:06 10hour claude code course. Now, in
3:55:08 reality, he just filled it with absolute
3:55:10 nonsense for like 9 hours. And I guess
3:55:14 he had something to say for 1 hour,
3:55:16 right? But it's pretty hard doing these
3:55:19 long courses and I bet nobody's actually
3:55:21 listening through until the end anyway.
3:55:24 But if any of you do, please leave a
3:55:25 comment on how you like my accent. Okay,
3:55:28 my brother has updated it. So, it used I
3:55:33 guess some carousel intake skill that
3:55:37 we've created here. If you go here now,
3:55:39 it's got a bunch of Evston events. So,
3:55:42 Evston digits downtown Evston Farmers
3:55:46 Market. The images don't line up though.
3:55:49 For the ones for which you can find
3:55:50 images, can you get those to line up as
3:55:53 well? The images don't look the same.
3:55:55 Why is it doing it in Spanish? It's
3:55:57 totally bizarre. Apologies to all the
3:56:00 non-speakers.
3:56:02 Oh, yeah. Also for the ones for which
3:56:04 you don't find um like good images, you
3:56:09 can use image genen to generate some
3:56:11 images. All right. Somehow it changed
3:56:13 languages again. Mucho loento paral
3:56:17 anglo parantes very sorry for the
3:56:20 English speakers.
3:56:25 I love speaking Spanish with a very
3:56:28 strong gringo accent but doing it
3:56:31 perfectly grammatically well. It's kind
3:56:34 of like um I don't know just like
3:56:37 flipping out an Indian accent every now
3:56:39 and then. Russian accent. I think more
3:56:42 economists should learn accents. that
3:56:45 would have kept me awake in more
3:56:47 macroeconomics classes if uh some of my
3:56:50 professors just, you know, put on their,
3:56:53 you know, strong strong Colombian
3:56:55 accent. Actually, let's just see. Can
3:56:58 you talk to me in Russian only until I
3:57:03 say otherwise?
3:57:06 I'm really just uh trying to get this
3:57:08 thing done right now, aren't I?
3:57:12 All
3:57:17 right, let's keep going. What do you
3:57:20 say, Alexi? Are you watching this far
3:57:23 into the video? Damn, that's pretty
3:57:25 cool. Going to speak Russian in Codeex,
3:57:28 too. I thought about using Codeex as a
3:57:30 language learning tutor. Actually, that
3:57:32 could be a fun way to do things is just
3:57:36 have it, you know, speak to me in
3:57:38 Russian all the time. Wow, that would be
3:57:40 that is a very interesting idea. And you
3:57:44 could even have it like use an 11 Labs
3:57:48 voice so that you can listen to it. Huh.
3:57:51 There is something here. That would be
3:57:54 an interesting form of multitasking. I
3:57:57 may actually do that cuz I speak Spanish
3:57:59 pretty well. I want to improve my
3:58:02 Russian. I want to improve my
3:58:04 Portuguese. Those are kind of highest on
3:58:06 my list.
3:58:11 Sublvator
3:58:14 maiden
3:58:16 art center farmers market black
3:58:19 experience injustice pilgrim.
3:58:22 All right, this is actually pretty good.
3:58:23 So what it says here in Russian is
3:58:32 generate
3:58:34 some images through image gen. And so
3:58:38 it's like actually making the correct
3:58:40 images, I guess, to match like what
3:58:44 should be going in these carousel
3:58:47 things. So just going to let it do its
3:58:49 thing. No idea how long this is going to
3:58:51 take, but you know, we don't use our
3:58:53 brains here cuz my brains used on more
3:58:56 important things like uh reading
3:58:59 Twitter. You know, that's what I got to
3:59:00 use my brain for. All right, so it
3:59:03 finished. We come in here. We see that
3:59:05 image generated
3:59:07 a bunch of images. Kind of tested it
3:59:10 out. Didn't get all of them. It was
3:59:11 taking forever and I am ready to eat
3:59:15 dinner. So, decided to shut it off. But
3:59:17 if we take a look here, we see we've
3:59:20 got, you know, this right here. I can do
3:59:23 this to export PNGs, I guess. And if I
3:59:27 am lucky, so which one is this? Event
3:59:29 two. Let's take a look at that. Downtown
3:59:32 Evston's farmers market. I dig it. So,
3:59:35 it's a little bit annoying that I have
3:59:36 to like click this button again to get
3:59:39 it to work, but let's open it in a new
3:59:43 tab like that. Well, that's cool. Friday
3:59:46 nights at the Dearborn Observatory. That
3:59:48 looks like an event that I would like to
3:59:50 attend. Wouldn't you like to attend?
3:59:53 We're going to go 900 p.m. to 11:00 p.m.
3:59:55 May 1st. Be there or be square. All
3:59:58 right, guys. That was the course we took
4:00:01 you from never having done anything in
4:00:05 codeex before in your life. You were
4:00:08 just, you know, working with chat GPT
4:00:11 and now you know how to build out
4:00:14 full-blown web apps with a product
4:00:17 builder mindset, whether for your own
4:00:20 projects, for client work. You can just
4:00:24 go on Upwork right now with what I've
4:00:26 taught you here and you have the ability
4:00:29 to generate, you know, a four figure a
4:00:32 month side hustle just off this course.
4:00:34 Now, if you want to get continued advice
4:00:37 from me on different things that you're
4:00:40 learning in the AI space, whether codec
4:00:43 or otherwise, come in here and join the
4:00:46 AI MBA. So, we got people in here all
4:00:48 the time learning all sorts of different
4:00:50 things. This guy was frustrated with
4:00:52 Codeex. I was trying to help him out.
4:00:54 This guy is seeing some potential
4:00:56 problems with Claude and so I was
4:00:57 helping him out with that. Nick is
4:00:59 building an internal operating system
4:01:01 for his local newsletter and I gave him
4:01:03 my advice on what that infrastructure
4:01:06 should look like. So if you guys want to
4:01:08 keep up with the cutting edge on AI, you
4:01:10 can check out the free group.
4:01:12 Additionally, if you want to get on
4:01:13 weekly calls with me, you can join the
4:01:16 AI MBA Pro where we meet as a group,
4:01:20 keep up with our particular goals, and
4:01:21 all push each other to get better with
4:01:24 AI in whatever respect that may be. And
4:01:27 if you join the AI MBA Pro, I have some
4:01:30 special tutorials. So, I have here, for
4:01:32 example, an update to my clawed code
4:01:35 course with the things that I recommend
4:01:38 now. And the group calls are all here.
4:01:41 And all these transcripts of the calls
4:01:44 you can access via an MCP server that
4:01:47 I've set up. Finally, I know a lot of
4:01:49 you who are following me are economists.
4:01:51 So I also do economic specific workshops
4:01:54 on how to use agentic coding tools like
4:01:57 codeex or claude code for research
4:02:00 purposes. So if that's something that
4:02:02 interests you, send me an email at
4:02:04 uni@contentquant.io
4:02:07 or unicate-ba.io
4:02:10 io and I'll be sure to get back to you.
4:02:12 That's it for today.


---

## Source: the-codex-starter-pack-5-skills-every-design-engineer-needs.txt

- Original path: `addintional info to add\the-codex-starter-pack-5-skills-every-design-engineer-needs.txt`
- Size: `15035` bytes
- SHA256: `6DEEC96167F8B05D48711F83F98ED782A352EC7291D27D7FACFB26BBA22A74C5`

---

The Codex Starter Pack: 5 Skills Every Design Engineer Needs

0:00 Hey guys, welcome to today's video. My
0:01 name is Lucas. And now, in this YouTube
0:03 channel, what I do is I post around five
0:06 videos a week covering the hottest and
0:08 most interesting workflows when using
0:11 Cloud Code or Codex. And in today's
0:13 video, what I want to do is I want to
0:14 show you my favorite skills and MCPs to
0:17 use with these two tools specifically
0:19 for design engineers. So guys, without
0:21 further ado, let's go ahead and get
0:23 started. Now, before we get started, I'd
0:24 love to invite you all to my Discord
0:26 community, The Creator Network. We get
0:27 together every single weekday to talk
0:29 about different tools and topics and
0:30 workflows. So, if you guys are
0:31 interested in joining that, link is down
0:34 in the description below. Now, in
0:35 today's video, I'm going to be using
0:37 Codex. You can use Cloud Code, like I
0:39 said, but for the past few days, I kind
0:42 of prefer Codex. And I'm going to be
0:43 showing you these examples in this brand
0:45 new file that I created. Now, the first
0:46 skill that I want to show you here is
0:47 called the Grill Me skill, and it's by
0:49 this guy called Mac Pocock. And
0:52 essentially, what this is is that you
0:53 give it a, you know, description of what
0:55 you want to do, and it interviews you
0:58 relentlessly about every aspect of this
1:00 plan until that you guys reach a shared
1:03 understanding. And I've spoken to some
1:05 people in my community, and they say
1:06 that they can get up to like 60
1:08 questions. This AI ask you question
1:10 after question until you reach a shared
1:12 understanding, then provides a summary
1:13 of what you've covered. And this is
1:15 fantastic in the early phases of coding
1:17 because you need to discover all of the
1:19 requirements by talking them through.
1:20 And in order to install this, you have
1:22 to visit their GitHub. Just scroll down
1:24 over here, and you want to copy this
1:26 install command. And then we can just
1:27 write install this skill,
1:30 paste it in here, and the install has
1:32 been completed. So, what we can do is we
1:33 can just restart Codex. And then we can
1:35 go over here and type Grill Me, and we
1:38 can see that we have this Grill Me
1:40 skill. And so, what I can say is I grill
1:42 me about an idea that I have regarding a
1:44 local app that I want to build to help
1:46 me organize my folders. And then we get
1:48 the first question of the interview,
1:50 what is the app's primary job? And then
1:52 we can just like copy this, paste this
1:54 in here. These are the suggestions that
1:56 it gave me. And then second question,
1:58 what kind of files or folders are we
1:59 organizing first? And then question
2:01 three,
2:02 almost instantly later, what should the
2:04 app optimize for when deciding where
2:06 things go? And then you can go on and on
2:08 with the questions until you want to
2:10 stop and you can just say like, "Let's
2:11 stop. Just give me a prompt based on
2:13 what we have until now."
2:14 And it can give you that entire prompt
2:16 that you can eventually then use in the
2:17 chat instead of just having to start
2:19 with one simple prompt and then using
2:22 using high reasoning to eventually get
2:24 what you want after several prompts if
2:26 that makes sense. Now, the next skill
2:27 that I want to talk about, which is not
2:29 really a skill, it's more of like a
2:30 native/command
2:32 inside of Codex is goal. And you
2:34 basically give Codex a goal to follow.
2:36 So, use goal when a task needs Codex to
2:39 keep working across turns toward a
2:41 verifiable stopping condition. And I
2:43 found a tweet the other day by Pietro
2:45 Schirano, who is like one of my favorite
2:47 design engineers, and he wrote this,
2:49 "Use Codex goal to create a skill based
2:51 on your quest and test and validate the
2:54 skill, grade it, and keep improving it
2:56 in a loop until it meets a target
2:58 threshold. And then share the skill on
3:00 Twitter, monetize it, and repeat." So,
3:02 we can then, for example, type goal. We
3:05 can then write using the and then we can
3:08 go {slash} skill creator, which
3:10 basically is like another skill that
3:12 allows us to create skills. Then we can
3:13 say, "Use the skill creator to create a
3:15 skill that allows me to drop a URL." And
3:18 then the agent gives a critique against
3:20 the design standards. So, we can go
3:21 ahead and submit this. And then once
3:23 this prompt is sent, we can see sent as
3:25 a goal. And going back to this page, you
3:27 can also see that we have different
3:28 commands that we can eventually give to
3:30 the agent, for example, like goal pause,
3:31 goal resume, or goal clear when you want
3:34 to like completely clear that goal. And
3:36 then basically we get this new skill
3:37 called critique URL design. I can then
3:40 go ahead and type this in here. We have
3:43 critique URL design, and I can give it
3:45 some type of URL like, let's say
3:46 stripe.com. And then we get our
3:48 critique. It says it does the the is
3:50 actually really good, which it is.
3:52 Um but it says the critique is less
3:54 about taste and more about a few places
3:56 where the polish is so highly visual
3:58 highly visually that accessibility and
4:00 clarity lag behind it. So, we have a few
4:03 points in different paragraphs. We have,
4:05 you know, a little section of what
4:06 works, next actions. Now, what we can do
4:09 again is we can again type goal and
4:13 clear. And then we can basically rewrite
4:15 our goal, say like complete an iterative
4:17 improvement of the website audit skill
4:20 so it can reach
4:21 or it can review each section of the
4:23 website being reviewed and grade it
4:25 between a 0 to 100 based on taste,
4:27 brevity, consistency, content prior
4:29 prioritization. All right, now it says I
4:31 created and iterated the installed
4:33 website audit skill here. So, I can just
4:35 run this again. And then we can do
4:37 stripe.com again. And now we basically
4:39 have our different sections. We have our
4:41 section scorecard, header, taste,
4:43 brevity, consistency, prioritization,
4:46 etc. etc. And we can then take the skill
4:48 and kind of run this one whenever we
4:50 want in any of our Codex conversations.
4:53 All right, so the next skill that I want
4:54 to show you guys is actually a pretty
4:55 interesting one because we're going to
4:56 be opening our our browser over here.
4:59 And I'm going to search for
5:00 magicpath.ai.
5:02 And you don't need a paid account for
5:04 this. You can do this completely for
5:05 free before you write anything in the
5:08 comments below. And you want to create a
5:09 new design over here. And once you open
5:12 this up, what you could do is you can
5:13 click on connect agent. And this is like
5:15 this skill command that you can
5:17 basically also paste into the chat. And
5:20 we can write install this skill
5:24 and paste this in like that. And it says
5:26 that magicpath has been installed. We
5:27 just have to restart Codex. And then we
5:29 can just type like, "Can you see
5:33 my current project?" All right, it says
5:35 that yes, I can see your magicpath
5:37 context. Current browser URL matches
5:39 project 11. So, what I'm going to do
5:41 over here is I'm going to say build me a
5:44 build me a a website that allows people
5:46 to search for skills and read about them
5:48 and then we can like type a little bit
5:50 more about the initial design style and
5:52 it says that it's going to build us
5:53 directly in the magic path project that
5:55 I have open as a new canvas component.
5:57 And as you can see we have Codex kind of
6:00 moving around over here. And so this
6:02 canvas component over here is going to
6:04 be called skill marketplace editorial.
6:06 All right, and we basically get our
6:08 design and what's great about magic path
6:10 is that we it's like this infinite
6:11 canvas, right? We can move around move
6:14 this around we can create more designs.
6:16 I can like duplicate this. I can select
6:19 this and create like more variants in a
6:21 different layout and create three of
6:23 these and put them underneath and they
6:26 start creating like that and they're all
6:28 connected to Codex. But what I can also
6:30 do is I can go back to that skill that
6:32 we just created which we called website
6:35 audit and then once we click this
6:37 component, we have this like little
6:38 preview button which basically opens
6:40 like the preview of this design. We can
6:42 copy this URL and paste it over here.
6:45 And by the way, while we wait for this,
6:47 we also see that our different variants
6:49 start getting generated. And so we start
6:51 to get our score. We actually get an 82
6:52 out of 100. So we have the header, we
6:55 have the hero, the search and filters,
6:57 skill results list, skill detail panel.
6:59 And it gives us these like different
7:01 suggestions as to what to fix. And then
7:03 we can just select this component and we
7:06 can type something like apply these
7:09 fix suggestions to the current component
7:12 in magic path. And now it says that it
7:14 has been updated and this is the before
7:17 and this is the after the update and it
7:18 doesn't look like much. You can see that
7:20 there's a few details like with this
7:22 little shadow or with this like little
7:25 um you know black left outline on the
7:27 left side. Um but you can see read skill
7:30 now opens, compare now adds and removes
7:33 skills. So if I were to for example
7:35 click on this, nothing happens. But now
7:38 in the new version, I can compare
7:40 different skills for example by
7:42 selecting them. you can see that one is
7:43 selected, website audit, and I can
7:45 remove that. I can close this read
7:47 skill, open it up. We also have the
7:49 search now has a real empty state, so if
7:51 I for example were to search something
7:53 and nothing shows up, it's just empty.
7:55 But over here, if I search something it
7:57 says no skills
7:59 no skill matches this search yet. So
8:01 it's made like these minor UX details,
8:04 basically like these UX enhancements
8:07 that my skills suggested. But now going
8:09 to another skill by Jacob Krehl, I've
8:12 mentioned this in my YouTube channel
8:14 once, I think. It's called make
8:16 interfaces feel better, and we can copy
8:18 this and again install this skill, and
8:22 then again restart CodeX to pick up the
8:24 new skill, and then we can basically
8:26 duplicate this after.
8:28 And then we can just say to, you know,
8:30 build the selected component and run it
8:32 on a local host. All right, and once
8:33 that's done, we basically have this
8:35 running in the local host, and I can
8:37 just click on this link, and we can see
8:39 our project built over here. And then
8:42 what I can say is I can say like, "Hey,
8:44 slash make interfaces feel better. Use
8:48 this skill to improve the design and
8:50 then upload or update to the same port."
8:53 And before we open this up, we can see
8:54 the before and after. So headings could
8:56 wrap awkwardly or clip on narrow
8:58 screens. So added balance wrapping for
9:00 major headings and tuned mobile headline
9:03 scale. And so this is for typography,
9:05 but we also have for services, for
9:06 interaction as well, for for performance
9:09 even. And basically what this does is
9:11 that it it polishes the entire site,
9:14 right? Um as you can see, this header
9:16 text is smaller, we have this max width
9:19 of a of like around 1,000 or 1,200
9:22 pixels for the width of the content of
9:24 the site. These buttons seem to be
9:26 rounded now, as well as down here. So as
9:29 you can see, this is how it looked like
9:31 before, and this isn't how it looks like
9:33 afterwards. And overall, it just looks
9:35 much tidier, I'd say. And last but not
9:37 least is this impeccable skill. So, I
9:39 can go ahead and click on get started
9:41 and I'm just going to install this skill
9:42 and just write like install this skill.
9:46 And I have a great video about this um
9:48 skill in my channel. I'll link it down
9:50 below. But basically, you have 23
9:52 different commands that are part of this
9:54 one skill. And you can, for example,
9:56 have audit, you can have critique as
9:58 well. There's more of refinements like
10:00 animation or to make or or for layout or
10:03 for colorize. Now, I, for example, to
10:05 choose the impeccable animate. And so,
10:07 I'm going to just going to write
10:08 impeccable and then animate the navbar
10:12 and hero section. And so, once that's
10:14 done, we can kind of see how that
10:16 animates the navbar and the hero
10:18 section. We can also look into things
10:20 like polish, which is the meticulous
10:22 final pass between good and great. And
10:25 so, we can again just write impeccable,
10:27 click on enter, and polish the page. And
10:31 what's also cool about impeccable is
10:33 that they also have a Chrome extension
10:35 that you can just run and it'll scan the
10:37 page for anti-patterns, which are
10:40 basically like common things that like a
10:42 vibe-coded website would have like, you
10:45 know, a purple and pink gradient,
10:48 gradient text, an AI color palette. All
10:51 right. And basically, what that what
10:52 that's done is that it polished my site
10:54 a little bit. So, in the skill
10:57 marketplace editorial, which is down
10:59 here,
11:01 we have a broader search indexing,
11:03 accessible press, and expanded state,
11:05 required submit fields, and an inline
11:07 success state. So, I can maybe, for
11:09 example, like
11:11 click on this and we have different
11:13 types of button states. I can see also
11:16 with the filters that we have like this
11:18 nice little
11:19 um motion for these for these buttons as
11:22 I hover over them and also up here in
11:24 the navbar. But then, we can also like
11:26 use impeccable to kind of redesign the
11:28 page. So, we can do like {slash}
11:30 impeccable build me a pricing page or
11:32 redo this hero section. So, I'm just
11:34 going to write Impeccable, redesign this
11:37 page. And basically, what that gives us
11:39 is like a new kind of look. You get
11:41 something like this, which is pretty
11:43 interesting. It has this new sticky
11:44 scroll effect on the on the uh right
11:47 side. We have this nice little shadow
11:49 for the different buttons over here. And
11:52 step-by-step, we kind of went a long way
11:54 from this first initial design to get
11:57 something like this. But anyways, guys,
11:59 that's pretty much it for today. Hope
12:01 you enjoyed today's workflow. And if you
12:02 have any comments or questions, please
12:04 let me know down in the comments below.
12:05 And guys, like always, thank you all so
12:06 much for watching. Hope to see you next
12:07 time. Goodbye.


---

## Source: this-chatgpt-codex-workflow-changed-how-i-design-websites.txt

- Original path: `addintional info to add\this-chatgpt-codex-workflow-changed-how-i-design-websites.txt`
- Size: `9774` bytes
- SHA256: `0977D609C896A5BD38070B3463E111DA12F83A873149FEF63E0E50BEB9F97AF4`

---

This ChatGPT + Codex Workflow Changed How I Design Websites

0:00 These three websites started as simple
0:03 references. This one is a portfolio
0:05 site. This one is an e-commerce website,
0:08 and this one is a product landing page.
0:10 And I built all three in one day using
0:14 this new workflow with chat GPT, Codex,
0:17 and this web design skill. Now, these
0:20 aren't just rough mock-ups that look
0:22 decent in one screenshot. They're fully
0:24 responsive. They work across different
0:27 screen sizes, and I can even convert
0:29 them into working WordPress themes. I'm
0:32 not spending hours staring at a design,
0:34 trying to figure out the layout from
0:36 scratch. I use chat GPT to break the
0:39 design down properly. Then I use Codex
0:43 to build the first version fast, and
0:46 then I spend my time on the part that
0:49 actually makes a website look good. The
0:51 layout, the spacing, the typography, the
0:54 images, and the polish. So, in this
0:57 video, I'm going to show you my exact
0:59 process step-by-step. I'll show you how
1:02 I pick a strong reference, how I use
1:05 chat GPT to describe the design, how I
1:08 use Codex to generate the first version,
1:11 how I refine the visuals so the site
1:13 feels clean and premium, how I make it
1:15 responsive, and how I turn that same
1:18 website into a live WordPress theme. All
1:21 right, let's start with the setup. The
1:24 first thing I did was install Codex on
1:26 my computer. OpenAI gives you a few ways
1:29 to use Codex now. You can use it in the
1:32 app, in the CLI, inside your IDE, or on
1:36 the web. For this workflow, I wanted it
1:38 to run locally because I like having all
1:40 my project files, testing things
1:42 quickly, and making changes without
1:44 jumping all over the place. So, I
1:47 downloaded Codex, opened it up, and
1:50 signed in with my chat GPT account. Once
1:52 I was in, that's when things got really
1:54 interesting for me. I got access to
1:57 skills. And if you haven't used skills
1:59 yet, I mean, what are you even doing?
2:02 You need to try it out. And this is the
2:04 easiest way to think about them. A skill
2:07 is basically a reusable set of
2:09 instructions that teaches Codex how you
2:12 want it to work. So, instead of
2:14 repeating the same things again and
2:16 again, like using better spacing,
2:18 keeping the layout clean, make the
2:20 hierarchy stronger, make it responsive,
2:23 don't make it look generic, keep the
2:25 code organized,
2:26 I can bake all of that into a skill once
2:31 and let Codex start from a much better
2:33 place every time. That's a huge deal
2:36 because raw AI can generate a website,
2:39 but a good skill changes the quality of
2:42 the website it generates. So, I added
2:44 web design skill first. I wanted Codex
2:47 to think more like a front-end designer,
2:50 not just like a code generator. So, I
2:53 opened the skills area, added the skill,
2:56 pasted in the instructions, saved it,
2:59 and now Codex had that design context
3:02 ready to use. And it didn't stop there.
3:04 I also added a few extra design rules
3:07 around responsiveness, a cleaner
3:09 front-end structure, and keeping the UI
3:11 polished instead of flat and generic.
3:14 This part was honestly so much fun
3:16 because the first time you see Codex
3:19 working with a proper skill, you can
3:21 immediately feel the difference. It felt
3:24 less like prompting a machine and more
3:27 like onboarding a junior design
3:29 developer who suddenly understood my
3:32 taste.
3:33 All right, now that the setup is ready,
3:35 the next step is picking a strong
3:37 reference.
3:38 For that, I usually go to a place like
3:41 Dribbble and look for designs that
3:43 already have a strong visual identity.
3:46 I'm not just picking something flashy
3:48 because it has gradients and nice
3:50 images. I'm looking for structure.
3:52 I want a strong hero section, good
3:55 typography, clean spacing, a layout that
3:58 flows properly, and sections that
4:00 actually make sense when you turn them
4:02 into a real website. Because if the
4:05 reference is weak, the result will
4:07 usually feel weak, too. So, once I find
4:10 a design I like, I bring that reference
4:12 into chat GPT, and this is the first
4:15 half of the workflow. Then I can ask
4:17 chat GPT to describe the design in
4:19 detail.
4:21 I want it to break down the layout, the
4:23 section order, the navigation, the font
4:25 style, the colors, the spacing, the
4:27 image treatment, the cards, the button,
4:30 and the overall feel of the design.
4:33 Basically, I'm using chat GPT as a
4:35 design analyst. Instead of me manually
4:38 staring at the reference and trying to
4:40 decode every little detail, chat GPT
4:43 gives me a clear written breakdown of
4:46 what's actually happening on the page.
4:49 And that written breakdown becomes the
4:51 brief I give to Codex.
4:53 This is such a better way to work
4:55 because if I send Codex a vague prompt,
4:58 I get a vague result. But if I give it a
5:01 detailed design description plus the web
5:04 design skill, the first version comes
5:06 out much closer to what I actually want.
5:09 So, now I take that description, move
5:12 into Codex, and ask it to build the
5:14 first version of the website. Within a
5:16 few minutes, I already have a working
5:18 first draft. The hero is there. The
5:21 navigation is there. The sections are in
5:23 place. The page structure is already
5:26 working. And this changes everything
5:29 about how I work because I'm no longer
5:31 spending the first few hours just
5:34 building the skeleton of the site. That
5:36 part gets compressed massively. I can
5:38 get to something real very quickly,
5:41 which means I can spend more time on the
5:42 part that actually matters, refinement.
5:45 Because the first version is not the
5:47 final version. The first version is
5:50 where the real design work begins. So,
5:53 once Codex gives me that first draft, I
5:56 start refining everything that affects
5:58 how the website feels. I look at the
6:00 layout first. Is the hero too cramped?
6:04 Do the sections need more breathing
6:05 room? Are the cards too close together?
6:07 Is the content width too wide? Does the
6:10 page actually feel balanced? Then I move
6:14 to typography. And this part matters so
6:16 much. A website can be technically
6:18 correct and still feel average if the
6:21 text hierarchy is weak. So, I can ask
6:24 Codex to adjust the heading sizes, the
6:27 body text, the line height, the spacing
6:30 between text blocks, and the contrast
6:33 between different elements until the
6:34 page starts to feel more confident. Then
6:38 I can get it to fix the images and do a
6:40 final visual polish.
6:42 I replace placeholder images with the
6:45 right ones. I adjust shadows, borders,
6:47 and spacing. I make sure the sections
6:49 feel consistent. I tighten anything that
6:53 feels loose and soften anything that
6:55 feels too harsh. And this is exactly why
6:59 the skill matters so much because Codex
7:02 already starts from a better place. My
7:05 refinement time goes into making the
7:07 design look genuinely good instead of
7:10 wasting time fixing basic layout
7:12 problems. Once the desktop version looks
7:14 good, the next step is responsiveness.
7:17 Now I can ask Codex to make the site
7:19 work properly across different screen
7:21 sizes.
7:22 Then I test it on desktop, tablet, and
7:24 mobile, and check what still needs work.
7:27 I look at how the layout stacks. I check
7:30 if the text is still readable. I check
7:32 if the spacing feels clean. I check if
7:34 the buttons are easy to tap. And I make
7:37 sure the images still work when the
7:38 screen gets smaller. If something feels
7:41 off, I keep refining it because a
7:43 website doesn't feel premium if the
7:46 mobile version feels broken. Once the
7:49 front-end looks good and everything is
7:50 working properly, I can take that same
7:53 website and ask Codex to convert it into
7:56 a WordPress theme in just a few minutes.
7:59 So, I can give Codex a prompt to turn
8:01 the HTML, CSS, and JavaScript into a
8:03 proper WordPress theme while keeping the
8:06 exact same UI. And I'll also leave all
8:09 the prompts I've been using in the
8:11 pinned comment and description down
8:12 below.
8:13 It restructures the files, creates the
8:16 theme folder, organizes the assets, and
8:18 gives me something I can actually
8:20 install inside WordPress. Then I can go
8:23 into WordPress, upload the theme,
8:25 activate it, and now the same design is
8:28 live as a real WordPress site. Now, it's
8:32 not just a mock-up. It's a working
8:34 theme. And once I've done that for one
8:37 design, I can repeat the exact same
8:38 system again for the other two. And
8:41 that's why this workflow has changed how
8:44 I design websites. Not because it
8:46 removes the need for design thinking. It
8:49 actually makes my design thinking more
8:51 useful. I spend less time doing
8:54 repetitive setup work. I get a stronger
8:57 first version faster. I can test more
9:00 ideas in less time. And I can focus more
9:03 on taste, direction, and polish, which
9:06 is the part I actually enjoy the most.
9:08 So, if you build websites for clients,
9:11 for your own business, or for WordPress
9:13 projects, this is such a fun workflow to
9:15 try.
9:16 >> [snorts]
9:16 >> Because once you get Codex set up
9:18 properly, and once you start using
9:20 skills the right way, the whole process
9:23 just feels lighter, faster, and way more
9:25 creative. And if you want to learn how
9:28 to optimize these websites and push them
9:30 towards a 90+ page speed score, then
9:33 click here and watch this video next.


---

