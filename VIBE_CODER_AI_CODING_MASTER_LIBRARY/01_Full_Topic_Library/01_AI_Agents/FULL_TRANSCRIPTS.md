# AI Agents - Full Transcripts and Source Material

This file preserves full source text for this topic. The short text above each source is navigation only; the source body is not summarized.

Related archive folder: `99_Archive_Originals`

---

## Source: 06 - OpenAI Codex Tutorial #6 - Using the AGENTS.md file.txt

- Original path: `addintional info to add\06 - OpenAI Codex Tutorial #6 - Using the AGENTS.md file.txt`
- Size: `5871` bytes
- SHA256: `10EF6B2FE64C8A73F3CB2D3BFD4BB58F8A423ADAC77102A6FCAC64E16645B846`

---

Title: OpenAI Codex Tutorial #6 - Using the AGENTS.md file
URL: https://www.youtube.com/watch?v=NlNuoH5PPl4&list=PL4cUxeGkcC9iDBeA8IyR1IE1kl4w5IDEG&index=6&pp=iAQB
Channel: YouTube playlist
Video ID: NlNuoH5PPl4
Transcript language: English auto-generated
Downloaded at: 2026-05-26T01:50:31.703Z

0:00 Okay then my friends in the previous
0:02 lesson we talked about commands which
0:04 come baked into the Codex CLI tool and
0:07 one of those commands was the init
0:08 command which generates an agents.md
0:11 file for us in this project. Now we're
0:13 going to run this command shortly but
0:15 just very quickly first of all I want to
0:16 talk about what an agents file actually
0:18 is and why we would use one. So you can
0:21 think of an agents file as a bit like a
0:24 readme but instead of being written for
0:25 humans it's written for the coding
0:27 agents that you're working with. It
0:29 lives in your project, usually in the
0:31 root folder, and it tells the agent how
0:33 your codebase works, what commands it
0:35 should use to build and test things,
0:37 what coding styles you prefer, how your
0:39 project is structured, and so forth.
0:41 It's basically like a little cheat sheet
0:43 that helps the agent slot into your
0:44 workflow and code basically how you
0:47 would like them to code. So, Codeex
0:50 leans heavily into this agents.md file.
0:53 And whenever you ask Codeex to do
0:55 something either locally or on Codex
0:57 cloud, it's going to look for that file
0:59 in your project, if it's there, it's
1:01 going to use any information inside that
1:03 file as context within your prompts and
1:05 any task that you give it. If you've
1:08 used any other AI coding agents like
1:11 Claude Code or Copilot, you have
1:13 probably seen similar kinds of files in
1:15 those things. In Clawed Code, we use a
1:17 claw.md file for projectwide
1:19 instructions. And in copilot, we use a
1:22 copilot instructions markdown file for
1:24 the same kind of uh stuff. And these all
1:27 serve a similar purpose, right? In that
1:29 they give each agent memory and concise
1:32 project context. Where they differ is
1:35 that the agents.mmd file is being pushed
1:38 as a standard across different AI coding
1:41 tools. So that instead of juggling these
1:43 different files for different coding
1:44 agents, the idea is that we can have
1:47 just a unified agents file which could
1:50 then be used across all of them. And
1:52 there's already a bunch of different
1:53 tools incorporating this agents.mmd
1:55 file. So let's head back to the code
1:58 then and use the codec cli to scaffold
2:01 an agents file for us. Okay then. So I'm
2:04 currently in a codec session and I'm
2:06 going to use the init command to
2:08 generate a new agents.mmd file. And when
2:12 we use this command, codeex is
2:14 automatically going to scan the codebase
2:16 and scaffold the file for us with any
2:18 code styles, testing preferences, and
2:21 other things it finds. Sometimes it
2:23 might add its own personal preferences
2:25 as well. So you have to rein those in a
2:27 little bit if you see those. And along
2:29 the way, we might need to approve
2:30 certain commands as well. But then after
2:32 a few moments, it's going to make it for
2:33 us and place it in the root of our
2:35 project. Okay, so it looks like it's
2:38 done it. Let's go and have a look over
2:40 here at this new file. And you can see
2:42 it's written some fairly comprehensive
2:44 guidelines. It's a little lean, but you
2:47 can always add to this later. So we have
2:49 different headings for different things.
2:50 So for example, the project structure
2:52 and module organization talks about
2:54 where different things live. So we have
2:57 the app which lives inside this folder
2:59 and then we have different route
3:02 segments like this. We also have the
3:04 layout and the global CSS file. Reusable
3:07 UI components live here. Okay. So that
3:09 all looks pretty good. Uh we've got some
3:12 building testing and development
3:13 commands down here which all look quite
3:16 accurate. Yep. Then we have some coding
3:19 style and naming conventions. It says
3:21 use Pascal case like this. Okay. So
3:24 basically this is all generic stuff but
3:26 all it's doing is looking at our current
3:29 uh project as it is at the moment and
3:32 inferring the guidelines from there and
3:34 it all looks quite accurate at the
3:36 moment. It's got some testing guidelines
3:38 down here as well and it talks about
3:41 this test folder to put the test inside
3:44 and then at the bottom we've got some
3:45 commit and pull request guidelines as
3:47 well. Awesome. So then you should also
3:50 probably commit this agents file to your
3:52 GitHub repository if you want the Codex
3:54 cloud to use it when you're running
3:56 remote tasks because again whenever you
3:58 ask it to do something on the cloud it's
4:00 going to look for this file
4:01 automatically and it's going to use it
4:03 as context for that task. And for that
4:05 reason I'm going to push this change up
4:07 to the GitHub repo once I finish
4:08 recording this video just to keep
4:10 everything up to date and in sync. And
4:12 by the way, this file isn't something
4:14 you should just create and forget about.
4:16 As your project changes and evolves, you
4:18 should update your agent file as well
4:20 with anything new the coding agent
4:22 should know about. For example, if you
4:24 start using particular libraries or
4:26 frameworks or if you change your project
4:28 structure or testing procedures, etc.
4:31 Because if you don't keep the file up to
4:33 date, then codeex might go off track and
4:35 do things the old way as outlined in the
4:37 original agents file if you don't change
4:39 it. So definitely come back and update
4:42 the file as and when you need to.


---

## Source: contract-commitments-empty-200.txt

- Original path: `addintional info to add\agent-skills-main\packages\vercel-optimize-tests\test\fixtures\real-cli-output\contract-commitments-empty-200.txt`
- Size: `525` bytes
- SHA256: `8F1A6693CC4A37E923DB49C0C237B1E282740EE68A0A0D44A0C0E0FFA85EDF36`

---

HTTP 200 OK
access-control-allow-headers: Authorization, Accept, Content-Type
access-control-allow-methods: OPTIONS, GET, POST, PUT, PATCH, DELETE
access-control-allow-origin: *
cache-control: private, max-age=60, stale-while-revalidate=900
content-type: application/jsonl
date: Wed, 13 May 2026 04:28:32 GMT
server: Vercel
strict-transport-security: max-age=63072000; includeSubDomains; preload
transfer-encoding: chunked
x-ratelimit-limit: 60
x-ratelimit-remaining: 59
x-ratelimit-reset: 1778646572
x-vercel-id: [REDACTED]



---

## Source: usage-404-stderr.txt

- Original path: `addintional info to add\agent-skills-main\packages\vercel-optimize-tests\test\fixtures\real-cli-output\usage-404-stderr.txt`
- Size: `66` bytes
- SHA256: `E273C638510CE4C7733031B9B53881F8511763C520837DC187C5A5B405EAC6BD`

---

Fetching usage data for example-team
Error: Costs not found (404)



---

## Source: build-a-full-stack-ai-therapist-agent-app-using-nextjs-nodejs-mongodb-expressjs-.txt

- Original path: `addintional info to add\build-a-full-stack-ai-therapist-agent-app-using-nextjs-nodejs-mongodb-expressjs-.txt`
- Size: `230185` bytes
- SHA256: `F32135C5CE936475564F68AD6EE0973B6D6929510E0697F2858512264CA90CD8`

---

Build a Full Stack AI Therapist Agent App using NextJS, NodeJs | MongoDB , ExpressJs , EchoAPI

0:00 peace of mind and mental health. These
0:02 are some of the most overlooked needs of
0:04 the human experience. We all face mental
0:07 breakdowns at some point. But when
0:10 you're down, who do you talk to? A
0:12 therapist, a close friend? If you've
0:14 ever wished for someone to just listen.
0:17 This is the app we are going to build
0:19 together. Meet Aura 3.0, your AI mental
0:24 health companion. In this video, we're
0:27 going to build our very own AI therapist
0:30 from scratch. Let me walk you through.
0:34 First, we've got a clean and calming
0:36 landing page that sets the tone for what
0:40 Aura is all about. The app supports both
0:43 light and dark mode for your comfort.
0:46 Let's go ahead and sign up to access the
0:48 dashboard.
0:50 After signing up and logging in, you are
0:52 welcomed with a beautifully designed
0:54 dashboard. Here you can track your mood,
0:58 helping the AI better understand you
1:00 over time. We've also added relaxing
1:03 mini games like breathing patterns, zen
1:05 garden, mindful forest, ocean waves.
1:12 Now let's try chatting with the AI
1:14 agent.
1:18 I'll ask, "How do I manage stress?" And
1:21 just like that, Aura responds with
1:24 thoughtful, supportive advice. But we're
1:27 not just showcasing it. We're building
1:29 this together. We'll deploy the back end
1:31 on render, the front end on Vessel, use
1:34 MongoDB for data storage, integrate
1:37 inest for AI tasks, and use Echo API for
1:40 testing endpoints. If this sounds
1:43 exciting, stay tuned and let's build
1:45 something meaningful together. Let's
1:48 walk through how the AI therapy agent
1:51 system works using this diagram as our
1:54 guide. At the very top, we have users.
1:57 That's you and anyone else who wants to
1:59 use the therapy app. You interact with
2:02 the system through the web app, which is
2:04 built using React. Think of this as the
2:07 friendly website you see and use on your
2:10 phone or computer. When you type a
2:12 message or click a button, the web app
2:15 sends your request to the back end, the
2:17 main engine running the show behind the
2:19 scenes. The back end is like the control
2:22 center. It has several doors called API
2:25 endpoints. The O endpoint handles
2:28 logging in and signing up. The chat
2:31 endpoint is where your messages go for
2:33 therapy conversations. Mood endpoint for
2:37 tracking how you're feeling and AP
2:39 activity. End point for activity
2:42 suggestions and tracking. Before
2:45 anything happens, your request passes
2:47 through a set of middleware. These are
2:50 like security guards and helpers. For
2:52 security, we use helmet to keep things
2:55 safe. Course make sure only allowed
2:57 websites can talk to the back end. JSON
3:01 passing helps the back end understand
3:03 your messages. And for login we use
3:05 Morgan to keeps a record of what's
3:08 happening and error handling catches and
3:11 manages any problems. Some actions like
3:15 sending a chat message or updating your
3:17 mood trigger special background jobs
3:20 using something called ingest. Think of
3:23 ingest as a smart assistant that handles
3:26 important tasks in the background. So
3:29 the main app doesn't get overwhelmed.
3:32 There are three main jobs functions it
3:34 handles. Process chat message looks at
3:38 what you said and figures out the best
3:40 response. Analyze therapy session.
3:43 Reviews your session for themes and
3:46 progress. Generates activity
3:48 recommendations.
3:49 Suggests activities based on your mood
3:51 and history. Whenever the system needs
3:54 to understand your message or come up
3:56 with a helpful reply, it asks Google
3:58 Gemini AI for help. This is like having
4:02 a super smart advisor who reads your
4:04 message and gives thoughtful advice. All
4:07 your messages, moods, and activity
4:09 suggestions are saved in MongoDB. Think
4:12 of this as the app's memory so it can
4:15 remember you and your progress over
4:17 time. Sometimes the system needs extra
4:20 information like new mental health tips
4:23 or resources. Ingest services are like
4:26 little helpers that go out, gather this
4:29 info, and bring it back to the back end
4:31 or database. Developers, the people
4:34 building and maintaining the app, use
4:36 tools like Echo API to test everything.
4:40 This helps them make sure all the parts
4:42 are working together smoothly without
4:44 needing real users for every test. How
4:47 everything connects? You interact with
4:50 the web app. The web app talks to the
4:53 back end through those API endpoints.
4:56 The backend saves and retrieves info
4:58 from MongoDB. When needed, the back end
5:02 triggers inest to handle background
5:04 jobs. Ingest jobs ask Google Gemini AI
5:08 for advice or analysis. Results and
5:11 updates are saved back to MongoDB.
5:14 Ingest services bring in new info to
5:17 keep things fresh. Developers use Echo
5:20 API to test and improve the system. For
5:23 this project, we'll be using a few tools
5:25 and technologies and one of them is KZA
5:28 AI. You can download it for either Mac
5:32 OS or Windows. It's very similar to VS
5:35 Code. In fact, it's actually a fork of
5:38 VS Code. So, if you're already a fan of
5:40 VS Code, you'll feel right at home using
5:43 Cursor. We are using cursor mainly
5:45 because of its built-in AI features.
5:48 It's an AI powered code editor that
5:51 helps you generate boilerplate code
5:53 quickly, making the development process
5:56 much smoother. It also comes packed with
5:59 a ton of useful features. If you want to
6:02 dive deeper, check out kza.com.
6:06 Next on the list is NextJS.
6:09 It's a powerful React framework built
6:11 specifically for the web. Think of it as
6:14 React but supercharged. It gives you
6:17 features like serverside rendering SSR,
6:20 static site generation, SSG, and API
6:24 roads all built right in. That means
6:27 faster load times, better SEO, and
6:30 cleaner code architecture without having
6:32 to configure everything manually. Nex.js
6:35 JS also supports dynamic routing, image
6:39 optimization, and even edge functions,
6:42 which makes it perfect for both startups
6:45 and enterprise level apps. Whether
6:47 you're building a simple portfolio or a
6:50 full stack SAS platform, Next.js gives
6:53 you the tools to scale. We are using it
6:56 in this project because it helps us
6:57 build production ready web apps with
7:00 great developer experience, performance,
7:03 and flexibility
7:04 all while keeping things organized and
7:07 efficient. Now that we've got our
7:09 framework in place with NexJS, let's
7:12 talk about how the app will actually
7:14 look and feel. And that's where Shard C
7:17 comes in. Shard CN is a beautifully
7:20 designed component library built on top
7:22 of Tailwind CSS and Redix UI. It gives
7:26 us access to clean, customizable, and
7:29 accessible UI components. Everything
7:32 from buttons and modals to forms and
7:34 drop downs without the need to reinvent
7:37 the wheel. The best part, it's not a
7:40 bloated component library. You only pull
7:43 in what you need and you have full
7:45 control over the styling. So your app
7:48 still looks unique, not like every other
7:50 Tailwind project out there. We're using
7:53 Shard CN in this project to help us move
7:56 faster, stay consistent with our design
7:58 system, and shape something that looks
8:01 modern and polished right out of the
8:03 box. All right, so our UI looks good
8:06 with Shard Cen, but let's be real,
8:08 visuals alone aren't enough. We want our
8:12 app to feel alive, not like a static
8:14 page. That's where Framer Motion comes
8:16 in. It's my go-to for adding smooth
8:19 animations in React. Whether it's a
8:21 button that bounces a little when you
8:23 hover or a page that fades in nicely,
8:27 Frame Motion makes it super easy and fun
8:29 to work with. And to add that extra
8:32 layer of polish, we're using Lucid
8:34 icons. Clean, modern, and just super
8:37 easy to drop into any component. You can
8:40 resize them, style them however you
8:42 want, and they always look crisp. So
8:45 yeah, animations plus icons equals a
8:48 better experience for the user and
8:50 honestly more fun for us as devs, too.
8:54 We're going to set up shard CN with
8:57 Tailwind CSS. To follow along, head over
9:00 to this URL so we're on the same page.
9:03 On that page, we'll use a single command
9:06 to create a new project. But before
9:09 that, let's first create a folder and
9:12 open it in Kursa AI to kickstart
9:14 development.
9:17 Kursa feels and looks very familiar,
9:20 almost identical to VS Code. So if
9:23 you've used VS Code before, you'll be
9:25 right at home. Now let's close the chat
9:28 section in Cursa and fire up the
9:31 terminal using control plus tilda. I'm
9:34 also going to split the terminal for
9:36 easier multitasking. Next, we'll copy
9:39 the yan command from the website and
9:41 paste it into the terminal.
9:46 But boom, we hit an error because yarn
9:50 isn't installed on this machine. No
9:53 worries. Let's try npm instead.
9:59 You'll be prompted to install shard CN.
10:02 So just type y to continue. When asked
10:04 to choose a framework, select next.js.
10:08 For the app name, I'm just typing a
10:10 period. That tells the setup to use the
10:13 current folder name as the project name.
10:16 I'll fast forward this part since it
10:18 might take a minute to install
10:20 everything. When it asks for a color
10:22 theme, I'm going with neutral, but feel
10:24 free to pick whichever fits your vibe.
10:27 And that's it. We've just set up Shard
10:30 CN NextJS and Tailwind CSS all in one
10:34 go.
10:37 Now that we've finished setting up Shard
10:39 CN NextJS and Tailwind CSS, let's take a
10:42 quick look at the folder structure we
10:44 just generated. So you know where
10:46 everything lives. Here's what your
10:48 project should look like in KZA editor
10:50 or VS Code. Let's break it down. First,
10:53 we've got the app folder. This is where
10:56 your routes and layouts live. Think of
10:58 it as the heart of your app in the new
11:01 NextJS architecture. Inside you'll see
11:04 layout.tss
11:06 which wraps all your pages with shared
11:08 layout components like headers or
11:11 footers and globals. CSS is where your
11:15 global styles including Tailwind base
11:17 styles are defined. Next we have the lib
11:21 folder. This is usually where you put
11:24 utility functions or shared logic. Right
11:26 now, it just has a utils.t file, but
11:30 we'll be adding more here as the project
11:32 grows. Public is where you store static
11:34 assets, images, icons, or anything you
11:37 want to serve directly. Moving down,
11:40 you'll see files like package.json.
11:43 This keeps track of all the dependencies
11:45 and scripts for the project.
11:47 Typescript.json
11:48 JSON configures TypeScript for your
11:51 project. Next.config.ts
11:55 handles custom NestJS configurations.
11:59 All right. Now, let's start building out
12:02 the actual components of this app. We'll
12:04 begin with the header section, which
12:07 includes the logo, navigation items, a
12:10 theme toggle for switching between light
12:12 and dark mode, and a signin button. Next
12:16 up is the hero section. We're going to
12:18 implement a really cool interactive
12:21 slider here based on your selection. The
12:24 gradient background color will change.
12:26 It's clean. It's modern and it's super
12:30 fun to build. Then we've got the CTA
12:33 call to action section which we'll add
12:37 toward the end. So, let's dive in.
12:40 First, open the app directory and head
12:42 into the page.x file. Let's fire up the
12:46 development server by typing npm run
12:50 div.
12:56 This will launch local host at port 3000
12:59 and you'll see the default boiler plate
13:01 template from next year. We don't need
13:03 that. So go ahead and clear it out.
13:08 Let's start fresh by typing hello world.
13:11 Hit save and boom. You should now see
13:15 hello world showing up on local host.
13:18 That's the first step in what's going to
13:20 be a much bigger journey.
13:23 Now we'll replace that paragraph with
13:25 div and add the following tailwind CSS
13:29 utility classes. Flex flex co mine h
13:33 screen overflow hidden.
13:37 Here's what each of those does. Flex
13:40 turns the container into a flex box.
13:43 Flex call arranges child elements
13:46 vertically.
13:47 Min age screen ensures the height is at
13:50 least the full height of the viewport.
13:52 Overflow hidden prevents unwanted scroll
13:55 bars by hiding any overflow content.
13:58 Cool. Now let's switch over to the
14:01 layout tsx file. This is where we'll
14:05 structure the global layout for our app.
14:08 Meaning we'll import and render our
14:10 header, footer, and any other global
14:13 components here. Why? Because we want
14:16 these components to appear across all
14:18 pages. So, it makes sense to include
14:21 them in the layout, not on individual
14:23 pages. Starting with the header
14:26 component. This will contain the logo,
14:28 navigation links, theme toggle, and
14:32 maybe a sign-in button. You can actually
14:35 preview what it's going to look like on
14:37 the live deployed site right over here.
14:41 Now, let's switch back to localhost and
14:44 continue building. All right, it's time
14:46 to start building out our header
14:48 component. First, let's create a new
14:51 directory inside the root of the project
14:54 and call it components. This is where
14:57 we'll store all the reusable parts of
14:59 our UI. Keeping components in their own
15:01 folder makes our codebase clean,
15:04 modular, and easy to scale. Inside that
15:07 folder, create a new file called
15:09 header.tsx.
15:11 In it, we'll define a default export for
15:14 the header function. Just type export
15:17 default function header and hit tab.
15:21 This lets us easily import the component
15:23 anywhere in our project without curly
15:26 braces. Now, let's switch over to
15:28 layout.tsx. CSX and import the header
15:32 component. This ensures the header
15:34 appears across all pages since the
15:36 layout file wraps our entire
15:38 application. That way, as we build,
15:42 we'll see the header update in real
15:44 time. Back in header.csx,
15:47 clear out the placeholder and start with
15:49 a parent div.
15:56 We'll give it some Tailwind classes. W
15:58 full fixed top zero Z50BG background/
16:03 95 backdrop blur. This makes the header
16:07 span the full width, stay fixed at the
16:10 top of the screen, sit above other
16:12 elements with a high Zindex, and have a
16:15 slightly transparent background with a
16:17 nice blur effect behind it. Inside that,
16:20 create another div. This will act as a
16:23 subtle border or visual separator under
16:26 the header. Now, let's add the main
16:28 header content.
16:33 We'll start by creating a div that will
16:35 hold our logo and text. Inside it, we'll
16:38 use Next.js's link component to wrap the
16:42 logo and link it to the homepage. So,
16:44 import link from next/ink at the top.
16:48 Then, use it like this.
16:51 We'll add the classes flex items center
16:56 gap two. So the icon and text sit next
17:00 to each other with a bit of space.
17:02 Inside the link, we'll use an icon from
17:05 Lucid React called audio waveform. Now
17:08 let's install lucide icons by running
17:12 the command mpm install lucide react.
17:16 Just paste it into the terminal. Once
17:18 that's done, we can go ahead and import
17:21 the icon we want to use in our
17:23 component.
17:26 This will serve as our app's logo. So,
17:29 import it at the top of the file and
17:32 give it the classes H-7W-7
17:36 text primary animate pulse gentle to
17:39 give it a nice pulsing animation in our
17:41 brand color. Next to the icon, create a
17:44 div. And inside that, add a span that
17:47 says Aura 3.0.
17:50 This is our logo text. You should now
17:53 see both the icon and text on the screen
17:56 in the top left of your app. Let's style
17:59 the link element with flex item center.
18:03 Space X2 transition opacity hover
18:06 opacity 80 to give it smooth spacing and
18:10 a slight fade effect on hover. For the
18:13 container of the text, we'll use flex
18:15 flex coal in case we want to add a
18:18 tagline or secondary label later. And
18:21 for the logo text itself, we'll apply
18:24 text LG font semibold BG gradient to R
18:28 from primary to primary/80
18:31 text transparent BG clip text to give it
18:35 a bold look with a gradient that fades
18:37 slightly at the end.
18:48 Now scroll up to the outer wrapper of
18:50 the header component and apply relative
18:53 max w6 xl
18:56 x auto px4 to center everything. Limit
18:59 the width and add padding on the sides.
19:02 Finally to space everything inside the
19:05 header including future nav items and
19:08 buttons. We'll add flex h-16 items
19:12 center justify between to the main
19:15 content container. This sets a fixed
19:17 height, centers all items vertically and
19:21 pushes them to opposite ends of the
19:23 header. At this point, our layout is
19:25 coming together beautifully. We've got a
19:28 clean responsive header with a logo,
19:30 animation, and structure ready for the
19:33 next piece, the navigation, and
19:36 interaction elements. Now let's build
19:38 out the navigation menu inside a div
19:41 with the class flex items center gap 4.
19:44 We are grouping the nav and other future
19:46 elements like a theme toggle or sign in
19:49 button in a horizontal row with a little
19:52 spacing between them. Inside that we've
19:54 got a nav in a horizontal row with a
19:57 little spacing between them. Inside that
19:59 we've got a nav element which is where
20:02 all our navigation links will live.
20:04 Notice we've added hidden MD flex. This
20:08 means the nav is hidden on smaller
20:10 screens and only shows up from medium
20:12 screen sizes and up. Perfect for
20:15 responsive design. We're mapping over a
20:18 nav items array which contains our
20:21 navigation links. For each item, we
20:24 render a next DJS link component. We are
20:27 using the key prop to uniquely identify
20:30 each link using the hrf and then passing
20:33 the href and label values dynamically.
20:36 Each link has padding and font styling
20:39 using tailwind classes px-4
20:43 py-2 text- small font- medium
20:47 text-muted-foreground.
20:50 When you hover, the text color changes
20:52 smoothly thanks to hover text foreground
20:55 and transition colors. Right inside the
20:57 link, we've added a span with the class
21:00 absolute bottom zero left 0 W full H0.5
21:06 BG primary. By default, it's scaled down
21:10 with scale X0. But when you hover over
21:13 the link, the group hover scale X00
21:16 class kicks in, creating a slick
21:19 underlying animation from left to right
21:22 thanks to the origin left and transition
21:25 transform. This gives our nav links a
21:28 clean modern hover effect without
21:30 needing any extra JavaScript. Just
21:32 Tailwind utility magic. You'll notice
21:35 that nav items is underlined here.
21:38 That's because we haven't created it
21:40 yet. So, let's go ahead and build.
21:44 We're using an array because we might
21:46 have multiple items in our navigation.
21:49 Each item is an object and inside that
21:52 object, we have two properties. HRF is
21:55 the link or URL the user will be taken
21:58 to when they click. Label is the text
22:02 that will be displayed in the navbar. So
22:05 in this case we're showing two items.
22:08 One that links to /features and displays
22:12 the text features. Another that links to
22:15 slashabout and shows about aura. This
22:19 approach is super helpful because
22:20 instead of writing separate code for
22:22 each link, we can just loop through this
22:25 array and automatically create the nav
22:27 links. It makes the code cleaner, easier
22:31 to manage, and much more scalable if we
22:33 want to add more pages later. Let's give
22:36 this a save. And boom, you'll see the
22:38 nav items rendered right here in the
22:41 header. Let's enhance the top right part
22:43 of the header by adding two key
22:46 elements. a toggle for switching between
22:48 light and dark themes and a button that
22:51 takes the user to the login page. In
22:54 your header tsx file, scroll down to
22:58 where the navigation ends. Just after
23:00 the tag, let's add a new div element.
23:03 This div is going to hold both the theme
23:06 toggle and the sign in button.
23:10 We're applying flex here, so the child
23:13 elements are laid out horizontally in a
23:15 row. The items center class makes sure
23:18 the items are vertically aligned in the
23:21 center of the header. And gap 3 adds a
23:24 little spacing between the toggle and
23:27 the button. The two components theme
23:30 toggle and sign in button haven't been
23:34 created yet. So let's take care of that.
23:37 Next, inside your components folder,
23:40 create a new file and name it theme
23:43 toggle.tsx.
23:45 This component will handle switching
23:47 between light and dark modes when the
23:50 user clicks the icon. Start the file
23:53 with use client. This line is necessary
23:56 because we're using client side
23:58 interactivity.
23:59 And nextjs needs to know this component
24:02 should run in the browser. Then add
24:06 these imports. We're importing two icons
24:09 moon and sun from the loose side react
24:12 icon set. This will serve as our visual
24:14 cues for dark and light mode. The use
24:17 theme hook gives us access to the
24:19 current theme and a way to update it.
24:22 And we're also bringing in the button
24:24 component from Shenen UI setup. Now
24:28 let's define the component. We're
24:30 defining a function component called
24:33 theme toggle. Inside it, we use the use
24:36 theme hook to grab the current theme and
24:39 a function called set theme that lets us
24:42 change it. Now, let's return the actual
24:45 button. Here, we're using our SH CN
24:47 button component. The variant equals
24:50 ghost makes the button background
24:52 transparent and size equals icon adjust
24:55 the padding to fit tightly around an
24:58 icon. The onclick handler checks if the
25:01 current theme is light. If so, it
25:04 changes it to dark, otherwise it
25:07 switches back to light. Now we add the
25:10 icons. The sun icon is visible by
25:12 default. It has a height and width of
25:15 one rim, H-4W-4.
25:19 No rotation or scaling applied in light
25:21 mode and fades out in dark mode. The
25:24 moon icon starts off rotated and scaled
25:26 down to hide it. But once the theme is
25:29 dark, it rotates into place and becomes
25:31 visible. The transitions are all handled
25:34 by Tailwind classes for smooth
25:36 animation. We also add this span element
25:39 is only visible to screen readers. It
25:42 improves accessibility by describing
25:44 what the button does for users who rely
25:47 on assistive technology. Now go back to
25:50 your header.tsx file and at the top type
25:55 import theme toggle from theme toggle.
26:00 This makes the toggle component
26:02 available inside the header where we
26:04 already placed it. Next, let's build the
26:06 sign-in button. Inside the components
26:09 folder, create a new folder called O if
26:12 it doesn't already exist. Inside that
26:15 folder, create a file called signin
26:18 button.tsx.
26:25 At the top, add use client. We're doing
26:28 this again because this button will be
26:30 interactive on the client side. Now we
26:33 add our imports here. We're importing
26:36 the same button component and the link
26:38 component from next.js. The link
26:42 component lets us navigate pages without
26:44 refreshing. Now define the component.
26:47 This interface allows the component to
26:49 optionally receive custom styling via a
26:52 class name prop. Then we write the
26:55 component itself we use as child so that
26:58 the link replaces the default button tag
27:01 that would normally be rendered. This
27:03 way the link looks and behaves like a
27:05 button. The href equals forward/
27:09 login makes the button navigate to the
27:11 login page when clicked. Back in your
27:14 header tss scroll to the top and add the
27:19 sign in button. Now, both the theme
27:22 toggle and sign-in button are set up
27:24 inside the header. But theme switching
27:26 won't work until we wire up the
27:28 provider.
27:30 To make the theme toggle work across the
27:32 entire app, we need a theme provider. In
27:35 the components folder, create a file
27:37 called theme provider.tsx.
27:45 We import next themes provider which
27:48 handles the logic of applying light or
27:50 dark classes to the HTML tag. We also
27:53 import react node. So we can type the
27:56 children prop. Now define the component.
28:00 We are wrapping the children meaning the
28:03 entire app inside the next themes
28:06 provider. The attribute equals class
28:10 tells it to apply class equals dark or
28:13 class equals light to the element.
28:16 Default theme equals system means it
28:19 will match the users OS setting and
28:22 enable system keeps that syncing in real
28:25 time. Now we'll create a wrapper
28:27 component to include our theme provider
28:29 globally. In the same components folder,
28:32 create a file called providers.tsx. tsx
28:40 start with use client import
28:44 theme provider
28:46 then write the wrapper.
28:49 This component simply wraps our app in
28:51 the theme provider and applies it
28:54 globally. The disabled transition on
28:56 change prop prevents flickering when
28:59 switching themes.
29:02 Now, one more thing before we finish
29:05 everything up. Back to the layout file.
29:08 We're going to wrap the provider around
29:10 the layout file. We'll import it at the
29:12 top and then scroll all the way down to
29:16 wrap it around the children element,
29:18 which will also include the header.
29:23 We might then get an error saying
29:25 provider doesn't exist in target module.
29:29 This error occurs because we haven't
29:32 saved the provider component. So let's
29:34 move to the provider component and save
29:37 the file. Once these fixes are applied
29:40 and saved, our code begins working and
29:43 the live preview now functions. When we
29:46 toggle between the light and dark modes,
29:49 we can see it operating perfectly and
29:51 beautifully. You've now added a fully
29:54 functional responsive header with
29:56 theming and navigation support. built
29:59 from scratch and fully extendable. Now
30:02 that we have the desktop navigation
30:04 setup, let's make it responsive for
30:07 smaller screens. We'll add a hamburger
30:10 style toggle button that appears on
30:12 mobile and expands to reveal the mobile
30:16 menu. First, we need a way to track
30:19 whether the mobile menu is open or not.
30:23 At the top of your header tsx file just
30:27 inside the component. Let's create a
30:29 piece of state using the use state hook
30:33 right after your import and before the
30:35 return statement.
30:37 This initializes a state variable called
30:40 is menu open which starts as false. When
30:44 is true will show the mobile menu. When
30:46 it's false the menu stays hidden. Set is
30:50 menu open is the function we'll use to
30:52 update that state. Now let's add the
30:55 toggle button itself.
30:57 Scroll down to where we placed the theme
30:59 toggle and sign in button. Just after
31:03 those two components, still inside the
31:06 same div, add this.
31:11 This button only shows on mobile screens
31:13 because of the MD hidden class, meaning
31:16 it's hidden on medium and larger
31:18 screens. On smaller screens, it appears.
31:22 We use the button component with a ghost
31:24 style and icon size to make it clean and
31:27 compact. The onclick handler toggles the
31:31 is menu open state between true and
31:34 false every time the button is clicked.
31:37 Inside the button, we conditionally
31:39 render an icon. If it's menu open is
31:43 true, we show an X icon to indicate the
31:46 menu can be closed.
31:49 If it's false, we show the menu icon.
31:52 Three horizontal lines to indicate the
31:54 menu can be opened. Now, let's build the
31:57 actual mobile menu that appears when
31:59 this button is clicked. just below the
32:02 main header content right before the
32:05 closing tag of the header component will
32:08 add this block. This whole block only
32:10 renders when is menu open is true.
32:14 That's why it's wrapped in curly braces
32:16 with a condition. This is how we create
32:18 the slide down effect on mobile. The
32:20 content only appears in the DOM when
32:23 it's open. The outer div has MD hidden
32:26 again. So this mobile menu is only
32:28 visible on small screens. It also has a
32:31 top border to visually separate it from
32:35 the header. Inside, we use a vertical
32:37 nav with flex coal to stack the nav
32:40 links vertically and space e1 adds space
32:44 in between each item. We loop through
32:47 the same nav items array we used for the
32:49 desktop nav. Each link gets padding font
32:53 styles and hover states. When a link is
32:56 clicked, we immediately set it menu open
32:59 back to false. So the menu closes after
33:01 navigation. Now save your file. When you
33:05 refresh and resize your browser to
33:06 mobile width, you should see a hamburger
33:10 icon on the right. Click it to expand
33:13 the mobile menu. See the nav links
33:16 stacked vertically. Tap any link to
33:18 navigate and close the menu. See the
33:21 start chat button if the user is
33:24 authenticated.
33:25 This gives us a fully functional mobile
33:28 friendly navigation experience that
33:30 matches modern UI standards and still
33:33 feels lightweight and fast. Now that we
33:36 have our theme toggle and UI components
33:38 set up, it's time to define the look and
33:41 feel of our entire app by customizing
33:44 the design tokens. Specifically, the
33:47 color variables used for light and dark
33:50 themes. We'll do this using Tailwind's
33:53 at layer base feature which allows us to
33:56 define CSS variables globally including
33:59 things like background color, text
34:01 color, button styles, and component
34:03 behavior all in one place.
34:07 Let's go into our global CSS file. This
34:10 is usually located at app/globals.css.
34:14 Scroll down or create a block that
34:17 starts with layer base. Inside this
34:19 block, we'll define two major parts.
34:21 Root for the light theme and dot dark
34:24 for the dark theme. This root selector
34:28 is where we define variables for the
34:30 light theme. These are CSS custom
34:32 properties that will be used throughout
34:35 the app wherever Tailwind classes like
34:38 BG background or text primary are used.
34:41 Now, let's define our light mode colors.
34:45 These are designed to feel soft and
34:47 calming. Great for wellness, lifestyle
34:50 or minimalist applications. Arc of these
34:53 variables represents a design row.
34:56 Background is used for the base page
34:58 color. Foreground is typically used for
35:01 text. Primary is your brand color,
35:05 buttons, highlights, etc. Secondary is
35:08 used for secondary buttons, chips, or
35:11 tags. Mutate colors are for subtle UI
35:14 elements like backgrounds or dividers.
35:18 Ascent adds soft visual variety.
35:22 Destructive is used for errors, warnings
35:24 or delete buttons.
35:26 Border and input define form outlines
35:30 and card edges.
35:32 Rain is used for focus states like when
35:34 a button or input is selected.
35:37 Radials controls border rounding. Now
35:40 let's define the dark theme. Below root,
35:44 we'll add a dot dark class. This class
35:47 is applied to the element when dark mode
35:49 is active, either through your theme
35:52 toggle or system preference. Here's the
35:55 full dark theme set. These colors are
35:59 all slightly desaturated and soft. The
36:02 background is a deep navy blue black.
36:04 The foreground is a cool pale white, and
36:07 all the accents lean toward greens,
36:10 purples, and off blacks. It's meant to
36:12 feel elegant and readable without being
36:15 harsh on the eyes. Once you save this
36:18 file, Tailwind will automatically pick
36:20 up these variables anywhere you use a
36:23 class like BG background text primary
36:26 border muted or hover bg secondary. It
36:30 will be tied directly to these color
36:32 definitions. This setup gives you full
36:35 control over your app's visual identity.
36:39 You can change your entire theme, both
36:41 light and dark, by updating just this
36:44 one file. And thanks to how Tailwind is
36:47 structured, everything else, buttons,
36:49 inputs, components will follow this
36:51 system without having to manually
36:54 restyle them. Go ahead and hit save,
36:57 reload your browser, and toggle between
36:59 light and dark mode. You should now see
37:02 your entire app styled with the new soft
37:04 green, lavender, and slate color
37:07 palette. beautifully consistent in both
37:09 light and dark themes. All right, let's
37:12 build out the hero section of our
37:14 landing page. This is the first thing
37:17 users will see and we want it to feel
37:19 calming, welcoming, and emotionally
37:23 interactive. We'll start clean. Open up
37:26 app/page.tsx
37:29 or wherever your home route is defined
37:32 first. Since we'll be using client side
37:34 state and animation, we need to tell
37:37 Nex.js this component should run on the
37:40 client. Inside this component, we'll be
37:43 tracking the user's emotion selection
37:45 and mounting states for animations.
37:48 Let's import and use the required hooks.
37:51 Just below the function line, we define
37:53 our array of emotions. We're defining a
37:56 list of different emotional states that
37:58 users can pick from using the mood
38:01 slider. Each object in this array has
38:03 three things. A value which represents
38:07 how intense the emotion is on a scale
38:09 from 0 to 100. A label which combines an
38:13 emoji and a short description like happy
38:16 or peaceful. This is what we'll display
38:19 in the UI. A color which holds a
38:22 tailwind gradient class. We'll use this
38:24 to visually reflect the selected emotion
38:27 in the background of the hero section.
38:29 This design allows us to map the user's
38:32 slider input directly to a mood. So, as
38:35 they adjust the slider, we can update
38:38 the background glow and UI to match
38:40 their emotional state. For example, when
38:43 the value is around zero, we'll show a
38:46 sad face and use a soft blue tone. If
38:49 it's 100, we show excitement with a pink
38:52 glow. The gradient colors blend nicely
38:55 into our UI and make the user experience
38:58 feel emotionally responsive. This array
39:01 gives us a scalable way to represent
39:04 mood in both data and visuals. And we'll
39:07 be referencing it throughout the rest of
39:09 the hero section for interaction and
39:13 design feedback. Now let's track which
39:16 emotion is selected using React state.
39:19 We will import this before using it.
39:22 Then declare the state variables.
39:27 We start with the slider at the middle
39:29 value 50 equals peaceful. The mounted
39:32 state is used to trigger animations only
39:35 after the component has loaded. Now,
39:38 right after defining our emotions array,
39:41 we need a way to track which emotion is
39:43 currently selected based on the slider
39:45 value and also make sure animations
39:48 don't run too early before the component
39:51 is ready. Let's take a look at this
39:54 part. This use effect runs once right
39:57 after the component mounts because of
40:00 the empty dependency array. Inside we're
40:03 setting mounted to true using the set
40:06 mounted function. We'll use this mounted
40:08 flag later to control animations from
40:11 framer motion. So things only fade in
40:14 after the page is fully loaded. Without
40:17 it, animations might run too early or
40:20 jitter while the DOM is still building.
40:23 Now let's figure out which emotion the
40:25 user has selected. Here's what's
40:28 happening. We already have a state
40:30 variable called emotion. that holds the
40:33 current value of the slider. What this
40:36 line does is loop through all the items
40:38 in our emotions array. It tries to find
40:41 the first emotion where the difference
40:44 between the slider value and the
40:46 emotions value is less than 15. So for
40:50 example, if the slider is at 47, it will
40:53 match to the peaceful state which is at
40:56 50 because the difference three is less
41:00 than 15. We use math.abs
41:03 to make sure we're comparing the
41:05 absolute difference, whether it's
41:07 slightly above or below the emotions set
41:10 value. And if it doesn't find anything
41:13 close, which is rare, it falls back to
41:16 emotions, which is our peaceful state at
41:20 50. This logic lets us say, hey, the
41:24 user is somewhere around this mood
41:26 level. Let's pick the closest one. And
41:29 we'll use this current emotion value to
41:32 update the background color and icons in
41:34 the UI. It's a simple but powerful way
41:38 to connect the slider's numeric value to
41:41 a real emotion and design feedback that
41:44 feels smooth and responsive. Now, we're
41:46 starting with our main hero section.
41:49 This is the first section users will see
41:51 when they land on the page. Let's look
41:54 at the structure of this container.
41:56 We're using a section tag to hold our
41:58 hero content. The relative class lets us
42:02 layer background elements inside it.
42:04 Main age 90% view height makes the
42:09 section take up 90% of the screen height
42:12 giving it a full screen feel. MT20 adds
42:15 space at the top so it doesn't touch the
42:17 header. We also added flex flex coal to
42:21 stack everything vertically with item
42:24 center and justify center. The content
42:27 is perfectly centered both sideways and
42:29 top to bottom. Lastly, pi 12px4 adds
42:33 padding around the section. So, it has
42:36 some nice space on all sides.
42:38 Altogether, this gives us a clean and
42:40 centered layout that feels open and
42:42 calming. Let's now add our glowing
42:45 background effects. This covers the full
42:48 section, insert zero, pushes the layer
42:51 behind everything, negative Z10, and
42:55 clips any overflow. Then we layer in our
42:58 emotionbased glow. This creates a
43:01 blurred circular gradient at the top
43:03 left whose color updates based on the
43:05 selected emotion. Next, we have a div
43:09 that creates one of our floating
43:11 background visuals. We position it using
43:14 absolute which lets us place it freely
43:17 inside the section. We give it a fixed
43:20 size of 400 pixels width and height and
43:24 shape it into a perfect circle using
43:27 rounded full. The background color is a
43:30 soft version of our secondary color made
43:33 transparent with tin. To make it glow,
43:36 we add blur 3xl which creates that soft
43:40 dreamy blur. Then we push it to the
43:42 bottom right using bottom zero right
43:45 zero. Finally, we add animate pulse to
43:49 give it a slow breathing motion. And
43:51 delay 700 makes it start slightly later
43:54 than the other animations for a more
43:56 natural feel. And one more div. This
44:00 creates a subtle blurred overlay on top
44:03 of the background for soft separation.
44:10 Now, we're going to render the ripple
44:12 effect behind everything in our hero
44:15 section. This ripple is that soft
44:18 animated ring you may have noticed
44:20 around the content on the live website.
44:23 I'll show you exactly what I mean in a
44:24 minute. Let's head over to the magic UI
44:27 website. As always, I'll leave the link
44:29 in the description.
44:31 In the search bar, type ripple
44:35 and you'll see the exact effect I'm
44:37 referring to.
44:39 To use this in our app, we first need to
44:42 install it. So, go ahead and copy the
44:44 npm install command from the magic UI
44:47 docs and paste it into your terminal.
44:52 Once it's installed, we can import the
44:54 ripple component into our project and
44:57 start using it right away. We'll drop it
44:59 right into our hero section just above
45:02 our main content and give it a class of
45:04 opacity 60
45:07 to make it blend nicely into the
45:09 background without overpowering
45:11 anything. Now, when we save it and head
45:14 back to the browser, we'll see that
45:16 beautiful ripple animation appear. And
45:20 it looks incredibly clean and
45:21 professional. It's a small touch, but it
45:24 adds a lot of polish to our hero
45:26 section.
45:29 Next, let's animate our main content
45:31 block to bring the hero section to life
45:34 with subtle motion. To do that, we'll be
45:36 using Framer Motion, a powerful
45:38 animation library for React. But before
45:41 we can use it, we need to install it.
45:43 So, let's open the terminal and type npm
45:45 install framer motion.
45:52 Once the installation is complete, we
45:54 can now use it. Now, we're going to
45:56 bring our hero section to life with
45:59 animation. To do that, we'll wrap our
46:01 content inside a motion div. This lets
46:05 us fade in and slide the content gently
46:07 into view when the page loads. What this
46:11 does is start the content slightly faded
46:13 out, opacity zero, and pushed 20 pixels
46:17 down, Y20.
46:19 As soon as the component mounts, it
46:22 smoothly fades in and moves up to its
46:24 final position. The transition uses a
46:26 soft ease out animation that feels calm
46:30 and polished. The space Y8 adds spacing
46:34 between each child and text center
46:36 centers everything inside. Inside this
46:39 motion div, the first thing we're
46:41 placing is a subtle badge at the top, a
46:44 kind of soft tag that introduces the
46:47 app. It includes a small icon and some
46:49 text. First, let's make sure we import
46:52 the icon at the top of the file. Now,
46:56 here's the badge. We're using inline
46:58 flex to lay out the icon and text side
47:01 by side with a small gap between them.
47:03 Gap two. The rounded border, soft
47:07 background, and backdrop blur give it a
47:10 calm, modern look. The waves icon has a
47:13 built-in animation, animate wave. And
47:16 the text gets a soft underline that
47:18 animates on hover. A little touch of
47:22 elegance without being too flashy. Right
47:25 below that, we drop our main heading.
47:27 This makes sure the headline scales
47:29 nicely, starting at 4 XL on small
47:32 screens and scaling up to 7 XL on large
47:35 ones. The font plus Jakarta adds a bit
47:38 of personality and friendliness to the
47:40 type face. Inside the H1, we split the
47:43 phrase find peace of mind into two
47:45 spans. We're using gradient text here,
47:49 which creates that soft color shifting
47:51 text look. The first span uses a
47:54 horizontal gradient from primary to
47:57 secondary, and the second span fades
47:59 vertically using the foreground color.
48:02 Both are clipped into the text using BG
48:05 clip text and made transparent with text
48:08 transparent. We even add a light text
48:11 shadow to give it a bit more depth and
48:14 contrast. Lastly, we place a simple
48:17 paragraph under the heading. The max W
48:21 600 pixels keeps the paragraph from
48:24 getting too wide, making it easier to
48:26 read. MX auto centers it. And we use
48:30 text muted foreground to give the text a
48:32 soft calming color. The leading relaxed
48:35 and tracking wide give it good line
48:37 height and spacing, making sure it's
48:39 readable and pleasant on the eyes. Let's
48:42 keep going.
48:45 Now, let's build the emotion slider.
48:49 So, we start by wrapping everything in
48:52 another motion.
48:54 This makes sure the slider content fades
48:57 in and slides up gently just like the
49:00 text above it. We also add some padding
49:03 and max width so it's clean and centered
49:06 on the screen. Inside this block, we
49:09 start with a friendly line of text and
49:11 the list of emotion icons. That little
49:14 paragraph reminds the user that this is
49:16 a safe space. We're using a soft color
49:19 text muted foreground/80
49:24 and smaller font to keep it gentle. Then
49:27 we show five emotional states like down,
49:30 content, and excited. These are stored
49:32 in the emotions array. Each one has a
49:35 value, a label, and a background color.
49:38 We loop through them like this. This
49:40 gives you animated emoji reactions. The
49:43 selected emotion gets slightly larger
49:45 and more visible. Scale 110 and opacity
49:49 100, while the others fade a bit.
49:53 Clicking an emoji updates the emotion
49:55 state. Each label is split into two
49:58 parts. The emoji itself and the word
50:01 like down or peaceful. We split them
50:04 visually so the UI feels tidy. Next up
50:08 is the slider itself. We don't have it
50:11 installed yet. So let's head over to
50:13 shard CN and search for slider. Copy the
50:16 install command. Paste it into the
50:18 terminal. And once it's done, we'll
50:20 import it at the top. Here we use the
50:22 slider component from our UI library.
50:25 and it controls the emotion value. As
50:27 the user drags it, we update the state
50:30 instantly. The background gradient
50:32 behind the slider shifts with the mood.
50:35 Each emotion has a corresponding color
50:38 and that color flows from left to right.
50:41 The background has a soft blur effect
50:44 and fades out toward the end making it
50:47 subtle but visually engaging. Just under
50:50 the slider, we give a gentle prompt. We
50:54 make it pulse slightly to draw attention
50:56 without being loud.
51:02 Finally, we wrap this section with a
51:04 beautiful call to action button. This
51:06 button uses a gradient background and
51:08 has a soft shadow that becomes stronger
51:11 when hovered. Inside, we add a little
51:14 arrow icon from Lucid. It slides
51:17 slightly to the right when you hover,
51:19 creating a subtle sense of motion and
51:22 progress. And just like that, the hero
51:25 section is complete.
51:27 So far, we've built a rich and
51:29 responsive hero section that captures
51:32 emotion through animation and color.
51:35 Now, let's scroll down a bit and build
51:37 the features section where we highlight
51:40 the core benefits of using aura. We'll
51:43 build this inside a new section element
51:46 and animate each feature using framer
51:48 motion. Right below your hero section,
51:51 add this. This opens a new section on
51:53 the page. Relative makes it a position
51:56 container for absolutely positioned
51:58 children later. PI 20 gives its vertical
52:02 padding and PEX 4 gives some horizontal
52:05 breathing space. Overflow hidden will
52:08 help us control any overflowing blur or
52:10 glow effect. Here we center our content
52:13 using MX auto and limit its width with
52:17 max w6x large so it doesn't stretch too
52:20 wide on large screens. This block
52:22 introduces the section title and
52:25 subtitle. We're wrapping it with motion
52:27 div to animate it when it enters the
52:30 viewport. Test center centers all text
52:34 MB16 gives bottom margin for spacing and
52:38 space V4 adds vertical space between
52:40 children. The heading uses a gradient
52:43 applied to the text itself using
52:45 bgclipip text and text transparent. On
52:49 dark mode it adapts by using dark.ext
52:52 primary/90.
52:54 This paragraph introduces what the
52:56 section is about. styled for readability
52:59 with MaxW2
53:01 XL centered using MX Auto and given
53:04 slight emphasis with font medium and
53:07 text large. We're using a responsive
53:09 grid to show each feature. This creates
53:12 a flexible layout. One column on mobile,
53:15 two on small screens, and four on large.
53:18 Gap 4 gives spacing between cuts.
53:24 So we're going to add a new division
53:26 element to prepare for displaying our
53:29 features. This division will house the
53:31 feature items which we'll iterate
53:34 through using a map function. Before
53:37 that we need to create the features
53:40 array itself which will be an array of
53:42 objects. We'll scroll up and place this
53:45 features array right under the existing
53:48 emotions array of objects. The features
53:50 array will contain properties for each
53:53 item. An icon, a title, a description, a
53:57 color, and a delay. The delay property
54:01 is important. It controls how the
54:03 animated division elements appear in
54:06 sequence. The first feature will display
54:09 quickly, while the last one will take a
54:12 bit longer, creating a smooth stacked
54:15 animation when the page loads.
54:21 Within the main division, we use the map
54:24 function to loop through all the items
54:26 in the features array. For each item, we
54:29 create an animated division, assigning a
54:32 unique key, and passing in various
54:34 properties. Each card contains a nested
54:37 division that holds the features icon,
54:40 its title, and its description,
54:42 arranging all the features neatly on the
54:45 left side of the page. Now let's create
54:48 the final piece for our homepage, the
54:50 footer component. We'll create a new
54:53 file inside the components folder called
54:56 footer.tsx.
54:58 This file will define and display the
55:00 footer. We export the footer function.
55:04 Inside it returns the footer component
55:07 which has a class name for styling and
55:09 vertical padding. Within the footer,
55:12 there's another division with classes to
55:14 center its content. arranging items in a
55:17 flexible column with spacing. We also
55:20 include a paragraph of text which will
55:23 serve as the content for the footer.
55:26 Finally, we move back to the layout.ts
55:29 file. We call the footer component right
55:32 after the main children element and
55:34 import it at the top of the file. Once
55:37 imported and saved, if we refresh the
55:40 local host on port 3000, we'll see the
55:43 footer displayed all the way at the
55:45 bottom of the page. Let's start by
55:48 creating a root for our sign-in page.
55:51 Inside your app directory, make a new
55:53 folder called login. And inside that
55:56 folder, create a page. TSX file. In the
56:01 app router structure of Nex.js, any
56:04 page.tsx tsx file becomes a web page
56:08 automatically in this case accessible at
56:11 / login open page.txe
56:15 and start with use client. This tells
56:18 nextjs that this component will run in
56:21 the browser not just on the server.
56:24 That's important because we'll use state
56:26 which only works in the browser. Then
56:29 bring in the necessary react tools and
56:31 UI components. We're pulling in
56:33 components that make our design clean
56:35 and reusable. We also import icons,
56:38 mail, lock to make the inputs visually
56:42 helpful. As you begin building your
56:44 login form, you might notice that the
56:47 input and container components are
56:50 underlined in red. This simply means
56:53 they aren't installed yet, and we'll
56:55 need to bring them in from shard CN.
56:58 Before we fix that, let's prepare the
57:01 files. Inside the component UI folder,
57:05 let's create a new file called
57:07 container.esx.
57:10 Now in this file, let's first declare
57:12 use client. This is important because
57:15 this component will be used in the
57:16 browser and this directive tells nextj
57:19 to render it on the client side. Next,
57:22 we'll import a helper function called CN
57:26 from at /lib/youutils.
57:29 This function helps us merge multiple
57:32 Tailwind CSS classes conditionally and
57:35 cleanly. You'll see how handy it is.
57:37 Now, let's define our component props.
57:40 We're extending the default HTML
57:43 attributes for a div and adding a
57:45 required children prop, which allows us
57:48 to wrap any content inside this
57:50 container. The container component takes
57:53 in children, an optional class name, and
57:56 any other props we pass in. Inside the
57:59 return block, we render a div with some
58:02 styling to center and pad the content
58:04 nicely across screen sizes. The CN
58:08 function helps merge our base styles
58:10 with any extra class we pass in. That's
58:12 all for our container.
58:15 Now, let's install the input component
58:17 from Shard C. Head over to the Shad CN
58:20 website, find the input component and
58:24 copy the command. Paste it into your
58:26 terminal to install it. Once that's
58:28 done, let's move to the login page.
58:31 Inside your login page component, start
58:34 with a simple export export default
58:37 function. Login page ind
58:41 return a div with the following classes.
58:43 Min screen W full flex items center
58:47 justify center BG gradient to be from
58:51 primary / 10 via background to
58:54 secondary/30.
58:56 Inside the card we'll first add a
58:58 heading section. This renders the signin
59:00 title beautifully and responsively.
59:03 Right under that we'll add a paragraph
59:06 textbased text muted foreground font
59:09 medium. This provides a friendly
59:11 subtext. Welcome back. Please sign in to
59:15 continue your journey. Let's now prepare
59:18 for the form itself. Before the form,
59:21 we'll import state hooks for tracking
59:23 user input. Now, when we move back to
59:25 local host port 3000 on the login route,
59:31 this is how everything looks. We have
59:33 the H1 title and the paragraph that says
59:36 welcome back. Over here, we have these
59:39 states, email, and password. These hold
59:42 the values typed into the email and
59:43 password fields. Next, we add a form
59:46 element with a class of space E-6 which
59:49 gives spacing between each form section.
59:52 Inside it, we start with the email
59:54 input. Wrap it in a div with the class
59:57 space E3 to keep spacing consistent.
1:00:01 Now, we add a label that says email,
1:00:03 followed by a div that wraps the input
1:00:06 field and icon. Inside that div, we
1:00:09 position the email icon on the left
1:00:11 using absolute positioning. Then we
1:00:13 place the input component with props. ID
1:00:16 equals email. Type equals email.
1:00:20 Placeholder equals enter your email. The
1:00:23 value and onchange track what the user
1:00:25 types in real time. We repeat the same
1:00:29 structure for the password field with a
1:00:31 label, an icon lock, and an input field
1:00:35 that uses type equals password. The
1:00:38 classes and behavior are nearly
1:00:40 identical. Now, we add the sign in
1:00:42 button. Below the form, we add a footer
1:00:45 that gives users a path to create an
1:00:47 account or reset their password. wrap it
1:00:50 in a div with the class flex items
1:00:53 center justify center gap to text SM.
1:00:57 Then inside it, a simple span that says
1:01:01 don't have an account. A link to
1:01:03 slashsignup/styled
1:01:05 with text primary font semi bold
1:01:08 underline hover text primary/80.
1:01:11 A dot separator, a link to /forgot
1:01:15 password with similar styling.
1:01:18 Everything is responsive and switches
1:01:20 between light and dark mode seamlessly.
1:01:23 Now let's move on to the signup page.
1:01:26 Inside the app directory, create a new
1:01:28 folder named signup and inside that a
1:01:32 page dot tsx file.
1:01:37 Because the signup page is very similar
1:01:39 to the signin page, we'll start by
1:01:42 copying the login page code. Now let's
1:01:45 make our adjustments. First add two new
1:01:48 state hooks, one for username and one
1:01:50 for confirm password. Update the heading
1:01:53 to say sign up
1:01:58 and change the paragraph to something
1:02:00 like let's get you started. Now find the
1:02:02 wrapper div where the name and email
1:02:04 fields are arranged side by side. Update
1:02:08 its class to flex flex co md flex row
1:02:11 gap 4. This means on smaller screens the
1:02:14 inputs will stack vertically but on
1:02:17 medium screens and up they'll sit side
1:02:19 by side. Next, wrap the name input in
1:02:23 its own div with class name equals flex-
1:02:26 one. This gives it equal width with its
1:02:30 sibling input. Then add the label and
1:02:33 input for the name just like we did for
1:02:35 email.
1:02:42 Do the same for the email and confirm
1:02:44 password fields. Finally, update the
1:02:48 button text from sign in to sign up. And
1:02:52 at the bottom, change the footer to say
1:02:55 already have an account. Sign in. Now
1:02:59 everything is rendered beautifully on
1:03:01 the screen, clean, responsive, and easy
1:03:04 to use. At this point, you've built a
1:03:07 fully polished sign in and signup UI
1:03:09 that looks modern and professional. is
1:03:12 responsive across devices, has icons and
1:03:15 clear input labels, tracks form values
1:03:18 with React state, is ready for backend
1:03:21 integration. Let's begin by setting up
1:03:24 the dashboard page, the central place
1:03:26 users will land after logging in. In
1:03:29 your app directory, create a new folder
1:03:32 called dashboard. And inside that,
1:03:34 create a new file named page.tsx.
1:03:39 Now let's open that file and write the
1:03:41 basic scaffold for a client side page.
1:03:44 Use client export default function
1:03:48 dashboard and return a div with text
1:03:51 hello dashboard. Let's walk through this
1:03:53 line by line. Use client this is a
1:03:57 special directive in nextJS 13 that
1:04:00 tells react hey this component will run
1:04:03 in the browser not just on the server.
1:04:06 We add use client because we'll be using
1:04:08 things like use state, use effect, event
1:04:12 listeners, and other interactivity that
1:04:15 only make sense in the browser. If we
1:04:17 forget this, those features simply won't
1:04:20 work, and React will throw errors. So,
1:04:23 get into the habit of adding it only
1:04:26 when you need client side logic. We
1:04:29 export a React component called
1:04:31 dashboard. inside it. For now, we are
1:04:34 returning just a simple div that says
1:04:37 hello dashboard. You should now see this
1:04:40 output when you navigate to / dashboard
1:04:42 in the browser.
1:04:50 This confirms your route is working and
1:04:52 the component is properly wired up. We
1:04:54 literally can't see the text hello
1:04:57 dashboard. So, let's add a little bit of
1:05:00 padding to the div.
1:05:11 That's it. No imports yet, no logic, no
1:05:14 styling, just a clean, simple foundation
1:05:16 to build from. Now, let's take a moment
1:05:19 to understand what this dashboard is
1:05:21 actually for before we write any more
1:05:24 code. Our dashboard is the user's
1:05:26 personal mental wellness space. Here's
1:05:29 what we'll be building in this section
1:05:31 and why it matters. Welcome message.
1:05:35 Personalized greeting and today's date
1:05:38 so users feel grounded.
1:05:41 Quick action buttons let users start a
1:05:44 therapy session, log their mood, or
1:05:46 check in with an AI assistant instantly.
1:05:50 Wellness stats overview. Beautiful cards
1:05:53 showing mood score based on their logs.
1:05:56 Completion rate, how consistent they
1:05:59 are. Total therapy sessions. Number of
1:06:02 activities planned for the day. Mood
1:06:05 modal. A popup where users can quickly
1:06:08 rate how they're feeling. Games for
1:06:10 anxiety relief. Interactive exercises
1:06:14 for managing emotions.
1:06:21 We won't just dump all the code in at
1:06:23 once. Instead, we'll build this
1:06:26 gradually and explain each component,
1:06:28 each hook, and each style exactly when
1:06:31 we need it. That way, you learn why each
1:06:34 import matters. You get a feel for when
1:06:37 to reach for use state, card, button, or
1:06:40 motion. Dave, and you stay in full
1:06:43 control of what's happening in the code.
1:06:46 Now that we've set up the page and
1:06:48 planned the layout, let's start building
1:06:50 the header section of our dashboard. The
1:06:53 goal here is to show a personalized
1:06:55 welcome message and today's date. This
1:06:58 helps users feel grounded when they land
1:07:00 on the page. Let's bring in the bare
1:07:02 essentials first. Open your
1:07:04 app/dashboard/page.tsx
1:07:08 and update the top. Why we're importing
1:07:12 use state and use effect? because we
1:07:14 want to display live up to-date time on
1:07:17 the page. Now let's set up the component
1:07:20 state to track the current time. This
1:07:22 code keeps the current time updated
1:07:25 every second and also helps us show
1:07:28 dynamic real-time dates and optionally
1:07:31 clocks if needed later. Step two, add a
1:07:35 simple header section. Now inside the
1:07:38 return statement, replace the div hello
1:07:40 dashboard with this layout. adds spacing
1:07:43 and a nice font hierarchy shows the
1:07:47 current day in a human readable format
1:07:49 like Saturday, June 21st.
1:07:53 We're going to start by adding a
1:07:55 container element right after our main
1:07:57 div.
1:08:04 Think of this container as a neat box
1:08:06 that will hold all of our pages content,
1:08:09 keeping things organized and responsive.
1:08:15 Next up, we're bringing in some magic
1:08:17 for smooth user experience. Framer
1:08:20 motions motion.de div. This special
1:08:24 component is going to give us those
1:08:26 beautiful fluid animations when the page
1:08:29 loads or refreshes. Before we use it,
1:08:32 remember to import motion at the very
1:08:34 top of your file. You can see how it
1:08:37 works in this snippet. Let's break down
1:08:39 what's happening here. The initial
1:08:42 property sets the starting point of our
1:08:44 animation. We're telling it to start
1:08:47 completely transparent, opacity zero,
1:08:50 and 20 pixels to the left, X -20. Then
1:08:55 animate defines the end state. It will
1:08:58 become fully visible, opacity 1, and
1:09:02 slide into its final horizontal
1:09:04 position, X0.
1:09:06 The transition property dictates how
1:09:09 long this animation takes. In this case,
1:09:12 a quick 0.6 seconds, giving us that
1:09:15 lovely smooth effect. Finally, class
1:09:18 name equals space y-2
1:09:21 is a tailwind CSS class that simply adds
1:09:25 a bit of vertical spacing between any
1:09:27 elements placed inside this motion div,
1:09:30 making sure they don't look cramped.
1:09:33 Now that we have our container and
1:09:35 animation set up, let's build the main
1:09:38 grid layout for our content.
1:09:42 We'll kick things off by adding a div
1:09:44 with a spacey-6 class. This class name
1:09:48 equals space i - 6 is another tailwind
1:09:52 CSS class. It's similar to space Y 2,
1:09:55 but adds a more generous vertical
1:09:57 spacing about 1.5 rem or 24 pixels
1:10:01 between its direct child elements. This
1:10:04 helps create distinct sections on our
1:10:07 page. Inside this div, we're going to
1:10:09 create our responsive grid with another
1:10:11 div. This class name is quite powerful.
1:10:15 The grid part turns this div into a CSS
1:10:18 grid container. Great call one means on
1:10:21 smaller screens our mobile first default
1:10:24 our content will stack in a single
1:10:27 column as the screen size grows MD grid
1:10:31 co 2 will switch it to two columns on
1:10:34 medium-sized screens like tablets and LG
1:10:38 grid co 3 will take it to three columns
1:10:41 on large screens desktops finally gap 4
1:10:45 ensures there's a consistent 16 pixel
1:10:48 space between all our grid items, giving
1:10:52 everything some breathing room. Within
1:10:54 this flexible grid, we're going to use
1:10:56 the card component from Shad CN UI.
1:11:01 If you haven't installed it yet, now's a
1:11:03 good time. We've done this a few times
1:11:06 in previous tutorials, so you should be
1:11:08 familiar with the process. Here's the
1:11:11 code for our card. These Tailwind CSS
1:11:14 classes really bring our card to life.
1:11:17 Border primary /10 adds a subtle border
1:11:21 using a light shade of our primary brand
1:11:24 color. Relative is important because it
1:11:27 sets the positioning context for any
1:11:29 absolutely positioned elements inside
1:11:33 this card. Overflow hidden is a small
1:11:36 but mighty detail that ensures any
1:11:38 content extending beyond the card's
1:11:40 boundaries gets neatly clipped, keeping
1:11:43 things tidy. and group. That's a special
1:11:46 Tailwind class that allows us to apply
1:11:49 styles to elements within this card when
1:11:51 the card itself is hovered, letting us
1:11:54 create cool interactive effects.
1:11:57 Immediately following that, we have a
1:11:59 div that creates a cool visual effect.
1:12:02 This div generates a soft gradient
1:12:04 overlay on the card, its absolute insert
1:12:07 zero, meaning is positioned to cover the
1:12:10 entire area of its relative parent, our
1:12:13 card.
1:12:14 The BG gradient to BR creates a
1:12:17 background gradient that flows from the
1:12:19 top left to the bottom right. The colors
1:12:22 from primary/5 via primary/10 to
1:12:26 transparent define a subtle fade
1:12:29 starting with a very transparent primary
1:12:31 color. Then transitioning to a slightly
1:12:34 more visible primary and finally
1:12:36 becoming completely transparent. It adds
1:12:40 a gentle luminous quality. Then comes
1:12:43 the actual content area of our card. The
1:12:47 P6 here simply adds 24 pixels of padding
1:12:50 on all sides inside the card content,
1:12:54 creating a nice buffer around our
1:12:55 content. Relative again sets a
1:12:58 positioning context, but this time for
1:13:01 anything absolutely positioned within
1:13:03 this content section. Inside this car
1:13:06 content will include this button uses
1:13:08 shard tn UI's default variant for its
1:13:12 base styling. The class name uses a
1:13:14 utility CN to combine various TWIN
1:13:18 classes. Wallful makes it take up the
1:13:21 full available width and P6 gives it
1:13:24 generous padding making it nice and
1:13:26 tall. Group button is another special
1:13:30 Tailwind class creating a specific group
1:13:33 for this button allowing for hover
1:13:35 effects on its internal elements. We're
1:13:37 applying a horizontal background
1:13:39 gradient from a slightly transparent
1:13:41 primary color to a full primary color
1:13:44 which then subtly reverses on hover for
1:13:47 a nice visual flourish. The transition
1:13:50 all duration 200 ensures all these
1:13:53 changes animate smoothly over 0.2 in 2
1:13:56 seconds and group hover. Translate two
1:13:59 pixels makes the button lift slightly
1:14:02 when hovered, adding a subtle
1:14:04 interactive feel. Next, we'll arrange
1:14:07 the divs for our mood tracking and
1:14:09 activity login features. We'll create
1:14:12 another div for these. This sets up a
1:14:14 two column grid with a 12 pixel gap,
1:14:17 perfect for placing two smaller, equally
1:14:20 sized elements side by side. This button
1:14:24 uses shard CN UI's outline variant.
1:14:27 We're making this content a flex flex
1:14:30 coal container, meaning everything
1:14:32 inside will stack vertically. It has a
1:14:34 fixed height of 120 pixels and specific
1:14:38 padding. The group cheat mood class
1:14:41 again enables hover effects,
1:14:44 specifically making the buttons border
1:14:46 primary/50
1:14:47 on hover. We've also included the same
1:14:50 smooth transition. The inner div creates
1:14:52 a small circular icon background this
1:14:55 time in a lovely rose color with the
1:14:57 heart icon perfectly centered and MB2
1:15:01 adds a small bottom margin to separate
1:15:03 it from the text below. A quick note on
1:15:06 icons. If you see any missing icons,
1:15:10 just remember to import them using the
1:15:12 Lucid React components. We've covered
1:15:14 this many times, so it should be second
1:15:17 nature by now. Finally, here's the
1:15:20 button for checking in on activities. As
1:15:23 you can see, this button is structured
1:15:26 and styled very similarly to our track
1:15:28 mood button, but it serves a different
1:15:30 purpose and uses a blue themed icon for
1:15:33 a subtle visual distinction. The
1:15:36 Tailwind CSS classes for layout, sizing,
1:15:39 and hover effects remain consistent.
1:15:42 Once we close off the main card
1:15:44 component, we're ready to create a brand
1:15:46 new section, the overview card section
1:15:48 for displaying wellness metrics. To do
1:15:52 this efficiently, we'll start by
1:15:54 defining an array of objects called
1:15:56 wellness stats. This wellness starts
1:15:59 array is a beautifully structured list
1:16:02 of data with each object representing a
1:16:05 single wellness metric we want to
1:16:07 display. Each object clearly defines a
1:16:09 title like mood score, a value which can
1:16:13 dynamically pull data from daily stats
1:16:15 for things like mood percentage or
1:16:17 session counts, falling back to no data
1:16:20 if unavailable, an icon from Lucid
1:16:23 React, specific color and BG color
1:16:26 tailwind classes for consistent styling,
1:16:29 and a description to give context to the
1:16:31 metric.
1:16:33 This setup makes it incredibly easy for
1:16:35 us to loop through and render these
1:16:37 statistics dynamically. Now, scroll down
1:16:40 to where you see your overview comment
1:16:42 in the code. And let's create a card and
1:16:46 its card header with these classes.
1:16:49 Inside our card header, we'll create a
1:16:51 div to help with alignment. This div
1:16:56 acts as a flex container ensuring that
1:16:59 any elements inside it are item center
1:17:02 vertically centered and justify between
1:17:06 spaced out horizontally which is perfect
1:17:08 for our title and description. We're
1:17:12 going to use card title and card
1:17:14 description here. If you haven't
1:17:16 already, make sure to import these
1:17:18 components at the top of your file.
1:17:29 Also, while you're up there, let's
1:17:32 import format from date fns. This handy
1:17:35 utility will help us display dates in a
1:17:38 nice human readable format.
1:17:47 The card title and card description
1:17:49 components from shade CCN UI give us
1:17:52 semantic structure and default styling
1:17:55 for our cards heading. The format new
1:17:58 date uses the date FN library to take
1:18:01 the current date and format it into
1:18:03 something like June 28th, 2025, making
1:18:07 it easy to read. Right after the card
1:18:10 header, we'll create our card content
1:18:12 section. Inside it, we'll have a div to
1:18:15 set up another grid. This creates a two
1:18:18 column grid with a 12 pixel gap
1:18:21 specifically designed to neatly display
1:18:23 our individual wellness statistics side
1:18:26 by side. Now, inside this div, we'll
1:18:29 loop through our wellness stats array
1:18:31 and display each one on the UI. This is
1:18:35 where that structured wellness stats
1:18:37 data really pays off. Here wellness
1:18:40 start dom iterates over each statistic
1:18:43 creating a div for each one. The key
1:18:45 equals start title is vital for react to
1:18:49 efficiently render lists. The class name
1:18:52 is dynamic p-4
1:18:55 rounded lg gives padding and rounded
1:18:57 corners. Transition all duration 200
1:19:00 hover colon scale dash 1.02 02 makes the
1:19:04 card slightly enlarged by 2% on hover
1:19:08 with a smooth animation and start dobbey
1:19:11 color applies the unique background
1:19:13 color defined for each statistic. Inside
1:19:17 each stat card we have a flex container
1:19:20 for the icon and title dynamically
1:19:23 rendering the icon and applying its
1:19:25 specific color. Then the value is
1:19:28 displayed prominently with large bold
1:19:30 text followed by a smaller muted
1:19:33 description. It's a clean and effective
1:19:35 way to show off all those important
1:19:38 metrics. Moving on, right after this div
1:19:41 containing our wellness stats, we're
1:19:43 going to set up a content grid
1:19:45 specifically for our games. First,
1:19:48 create this div. This establishes a
1:19:50 responsive grid. one column on smaller
1:19:53 screens and then it expands to three
1:19:55 columns on large screens LG and above
1:19:59 with a 24 pixel gap between grid items.
1:20:03 Inside that we'll nest another div. This
1:20:06 div uses LG colon
1:20:09 span-3
1:20:10 to tell it to span all three columns
1:20:13 when the screen is large or bigger. This
1:20:15 is perfect for a heading or a large
1:20:18 component that needs to take up the full
1:20:20 width of the grid. Space Eyes 6 adds 24
1:20:26 pixel vertical spacing between its
1:20:28 children. Now, before we jump into
1:20:30 building the actual game components, our
1:20:33 anxiety games, let's quickly set up the
1:20:36 dialogue for mood tracking. For this,
1:20:38 we'll need to import these components at
1:20:40 the top of your file. You'll also want
1:20:43 to make sure you've installed this from
1:20:44 Shad CN UI. Just copy the command and
1:20:48 paste it into your terminal as we've
1:20:50 done many times before. Scroll all the
1:20:53 way down in your file and let's create a
1:20:55 section for our mood tracking model.
1:21:01 You'll notice we don't have show mood
1:21:03 model and set show mood model states
1:21:05 defined yet. Go ahead and create these
1:21:08 states using state at the top of your
1:21:10 component. The open prop controls the
1:21:12 dialogue's visibility and on open change
1:21:15 is a callback that will update our state
1:21:18 whenever the dialogues open status
1:21:20 changes like when the user closes it by
1:21:23 clicking outside or pressing escape.
1:21:26 Inside the dialogue will add its
1:21:28 content. The dialogue content wraps the
1:21:31 dialog's inner elements. class name
1:21:34 equals SM domax w 425 pixels ensures the
1:21:40 model isn't too wide on small screens
1:21:43 and up dialogue header groups the
1:21:45 dialogue title how are you feeling and
1:21:48 dialogue description move the slider to
1:21:51 track your current mood giving clear
1:21:54 instructions to the user we'll leave a
1:21:57 space inside the dialogue content for
1:22:00 the actual model form which we'll build
1:22:03 next. Next on our list is the activity
1:22:07 logger. You've seen how it looks on the
1:22:10 deployed website. We'll tackle the
1:22:11 implementation for that a little later.
1:22:14 For now, let's focus on setting up the
1:22:16 anxiety relief games. Inside your
1:22:19 components directory, create a new
1:22:21 folder called games. Then inside that
1:22:24 new games folder, create a new file
1:22:26 named anxiety.tsx.
1:22:42 Within anxiety games.tsx,
1:22:44 we'll need to import a bunch of things.
1:22:47 Following our import, we'll define a
1:22:50 constant array called games. This array
1:22:53 will hold the structured data for each
1:22:55 of our anxiety relief games. Just like
1:22:58 our wellness stats, this games array
1:23:00 provides a neat way to organize all the
1:23:02 information about each game. Its unique
1:23:05 ID, a descriptive title, a brief
1:23:08 description, the relevant lucide icon,
1:23:12 specific color, and BG color classes for
1:23:15 visual consistency, and an estimated
1:23:18 duration. Next, we'll define the props
1:23:21 that our anxiety games component will
1:23:23 accept.
1:23:24 This anxiety games props interface
1:23:27 specifies that our component can
1:23:29 optionally receive an on-game played
1:23:32 prop. This prop is a function that if
1:23:35 provided will be called when a game is
1:23:37 launched. It expects the game's name and
1:23:39 description as string arguments and is
1:23:42 designed to handle asynchronous
1:23:44 operations such as logging the game
1:23:46 activity to a database. Now let's
1:23:50 declare our main anxiety games
1:23:52 functional component. In this component,
1:23:55 we have two main states. The selected
1:23:58 game and the show game state. These
1:24:01 states help us track which game has been
1:24:03 chosen and which game should be
1:24:06 currently displayed. Next, we'll
1:24:08 implement a function specifically
1:24:11 designed to handle actions when a game
1:24:13 is clicked. When handle game start is
1:24:16 triggered, it first updates selected
1:24:18 game with the ID of the chosen game and
1:24:22 sets show game to true which will cause
1:24:25 the game model to open. It then checks
1:24:28 if the oname played prop was provided.
1:24:31 If so, it attempts to call that function
1:24:34 to log the activity gracefully handling
1:24:37 any potential errors. To display the
1:24:39 correct game within our model, we'll use
1:24:42 a helper function called render game.
1:24:45 This render game function is
1:24:46 straightforward. It uses a switch
1:24:49 statement to look at the selected game
1:24:51 state and then renders the corresponding
1:24:54 game component. Breathing game, zen
1:24:56 garden, forest game or ocean waves. If
1:25:00 no game is selected, it simply returns
1:25:03 null. Initially, our anxiety games
1:25:05 component will simply return the title
1:25:07 and description of the games, but we're
1:25:10 about to make it much more dynamic. Back
1:25:12 in your dashboard page, tsx, you'll want
1:25:16 to import anxiety games and integrate
1:25:18 it.
1:25:27 Once you do, you'll see the title
1:25:29 anxiety relief activities with its
1:25:32 description rendered on the right side
1:25:35 of the screen. Now, let's return to
1:25:37 anxiety games.tsx
1:25:39 and make it render all the game
1:25:42 activities in a structured way. We'll
1:25:44 start by adding a div that sets up a
1:25:46 grid for our game cards. This creates a
1:25:49 responsive grid showing one column on
1:25:52 small screens and two columns on medium
1:25:54 screens MD and up with a 16 pixel gap
1:25:59 between them. Inside this grid div,
1:26:02 we'll use the map function to loop
1:26:04 through our games array and render each
1:26:06 game as a clickable card. For each game,
1:26:09 we wrap it in a motion div from framer
1:26:12 motion. key equals game ID is crucial
1:26:16 for React efficient rendering of lists,
1:26:19 while hover equals equals scale equals
1:26:22 1.02
1:26:24 makes the card subtly enlarge by 2% when
1:26:27 the user hovers over it. And while tap
1:26:30 equals makes it slightly shrink by 2%
1:26:32 when clicked, providing excellent visual
1:26:35 feedback. Inside each motion dot div,
1:26:38 we'll use a shadakin card component.
1:26:41 Applying conditional styling to
1:26:43 highlight the active game. This card has
1:26:46 a light primary border. On hover is
1:26:50 background will change to a very light
1:26:52 primary color. The transition colors
1:26:54 ensures this is smooth. Cursor pointer
1:26:57 provides visual feedback that is
1:26:59 clickable. The magic happens with the
1:27:02 template literal. um selected game
1:27:05 equals game ID ring 2 ring primary.
1:27:10 This line checks if the current game do
1:27:12 ID matches our selected game state. If
1:27:15 it does, it adds a two pixel thick ring
1:27:18 around the card using our primary color,
1:27:21 visually indicating which game is
1:27:23 active. Inside this card, we'll use card
1:27:26 content to display the game's icon and
1:27:29 details. The card content has 16 pixels
1:27:33 of padding. Inside a flex container lays
1:27:37 out the icon and text. The div with
1:27:39 dynamic background color and color
1:27:42 creates a rounded XL slightly rounded
1:27:45 square background for each game's icon.
1:27:48 The flex one div then holds the game's
1:27:51 title bolded, a smaller muted
1:27:54 description, and a line displaying the
1:27:56 music 2 icon alongside the game's
1:27:59 duration. Once this is rendered, you'll
1:28:02 see all the games beautifully displayed
1:28:04 on the right hand side of your
1:28:06 application. Now, let's add the onclick
1:28:09 event handler to our card component.
1:28:12 This will trigger our handle game start
1:28:14 function when a card is clicked and
1:28:17 you'll immediately see that vibrant ring
1:28:20 appear around the active game. Finally,
1:28:23 let's integrate the dialogue to display
1:28:26 the game itself when it's clicked.
1:28:33 This dialogue will open when show game
1:28:35 is true. Its dialogue content is set to
1:28:38 a maximum width of 600 pixels on small
1:28:42 screens and up. The dialogue title
1:28:45 dynamically displays the title of the
1:28:48 selected game. And the magic happens
1:28:51 with render game which is where our
1:28:54 helper function renders the specific
1:28:56 game component like breathing game right
1:28:59 inside this model. Now for the exciting
1:29:02 part, it's time to create the actual
1:29:04 games. We'll start with the breathing
1:29:07 game. Inside your games folder, let's
1:29:10 create a new file called breathing
1:29:12 game.x.
1:29:17 At the very top of breathing.tx,
1:29:20 remember to add use client to ensure it
1:29:24 runs on the client side. Then import all
1:29:27 the necessary modules. We define total
1:29:30 rounds as a constant, making it easy to
1:29:33 adjust the game's length later.
1:29:36 Inside our breathing game component,
1:29:38 we'll manage several states using
1:29:40 states. These states track the phase of
1:29:43 breathing, inhale, hold, exhale, the
1:29:47 progress within the current phase, 0 to
1:29:49 100, the current round, whether the game
1:29:53 is complete, and if it is paused. The
1:29:55 core game logic lives in a use effect
1:29:58 hook. This use effect is the engine of
1:30:01 our breathing game. It runs whenever the
1:30:04 phase round is complete or is paused
1:30:07 states change. It immediately stops if
1:30:10 the game is complete or paused. Then it
1:30:13 sets up an interval based on the current
1:30:15 phase, inhale, hold, or exhale. Each set
1:30:20 interval incrementally updates the
1:30:22 progress. When progress hits 100, it
1:30:25 either transitions to the next phase,
1:30:27 increments the round, or marks the game
1:30:30 as is complete. If all total rounds are
1:30:34 finished, the return clear interval
1:30:37 timer part is crucial for cleanup. It
1:30:41 ensures that the timer is cleared
1:30:42 whenever the component unmounts or the
1:30:45 effect dependencies change, preventing
1:30:48 memory leaks and unexpected behavior. We
1:30:51 also need a way to reset the game.
1:30:54 The handle reset function simply sets
1:30:58 all our game related states back to
1:31:00 their initial values allowing the user
1:31:04 to start a new game. Now let's look at
1:31:06 the return statement.
1:31:10 This div is the main layout for our
1:31:12 active breathing game. Centering all its
1:31:14 content within a fixed height and with
1:31:17 generous vertical spacing. We use
1:31:19 animate presence mode equals weight to
1:31:22 smoothly transition the breathing phase
1:31:24 text and circle. The inner motion div
1:31:28 uses key equals face. So framer motion
1:31:31 knows when to animate a change. It fades
1:31:34 in and out opacity scale as the phase
1:31:37 changes. The animated breathing circle
1:31:40 itself is built with a relative
1:31:41 container. The inner motion.de div has a
1:31:44 bg primary/10
1:31:46 and rounded full styling and its animate
1:31:49 property dynamically changes its scale
1:31:52 based on the face expanding for inhale
1:31:54 shrinking for exhale holding for hold
1:31:57 simulating the breathing action. This
1:32:00 animation is slow and smooth duration
1:32:04 for ease ease in out. The wind icon is
1:32:08 centered within this circle. Below the
1:32:11 animated circle, an H3 dynamically
1:32:14 displays the current instruction.
1:32:16 Breathe in, hold or breathe out. Then
1:32:19 shen progress bar visually tracks the
1:32:23 progress within the current phase.
1:32:25 Finally, a div displays the current
1:32:28 round out of total rounds.
1:32:31 Below that, a button allows the user to
1:32:34 pause or resume the game, dynamically
1:32:36 changing its text based on the is paused
1:32:40 state. Back in anxiety games,
1:32:44 you'll now need to import breathing game
1:32:46 at the top of the file and then make
1:32:49 sure to return it within the render game
1:32:51 function for the breathing case.
1:32:56 Now when you click on the breathing game
1:32:58 button on your local host, you should
1:33:01 see the game beautifully animating in
1:33:03 the model. Feel free to play around with
1:33:06 the total rounds constant to see how it
1:33:09 changes the game's duration. Our next
1:33:12 calming experience is the Zen Garden
1:33:14 game. Let's create a new file inside
1:33:17 your games folder called Zen Garden.tsx.
1:33:29 Start this file as always with use
1:33:32 client and then import our essential
1:33:35 react and framer motion components.
1:33:37 Next, we'll define an array of items
1:33:40 that our users can place in their
1:33:42 garden. This items array clearly lists
1:33:46 the decorative elements available for
1:33:48 the Zen garden, each with a type for
1:33:51 internal identification and an icon, an
1:33:54 emoji for visual representation. Now,
1:33:58 let's define our Zen Garden functional
1:34:00 component. Inside, we'll manage two
1:34:02 important pieces of state. The placed
1:34:05 item state will be an array holding all
1:34:07 the items that the user has clicked to
1:34:10 place on the canvas. Each item in this
1:34:13 array will not only have its type and
1:34:16 icon, but also its X and Y coordinates
1:34:19 to remember where it was placed. It
1:34:22 starts as an empty array. Selected item
1:34:25 keeps track of which item from our items
1:34:28 array the user has currently chosen to
1:34:30 place. It starts with the first item,
1:34:33 the rock. Here's the function that
1:34:36 handles clicks on our garden canvas.
1:34:43 When handle canvas click fires because
1:34:46 the user clicked on our canvas div, it
1:34:48 first figures out the exact x and y
1:34:51 coordinates of the click relative to the
1:34:53 canvas itself.
1:34:55 Then it updates the placed item state by
1:34:58 taking all the existing items and adding
1:35:01 a new item which is a copy of the
1:35:05 selected item along with it new x and y
1:35:08 coordinates. Now, let's look at the JSX
1:35:10 our component returns. We'll start with
1:35:13 a main container div. This div simply
1:35:16 adds 16 pixels of vertical spacing
1:35:18 between its direct children, keeping our
1:35:21 item selection buttons and the canvas
1:35:24 nicely separated. Next, we'll loop
1:35:27 through our items array to render the
1:35:29 selection buttons for our garden
1:35:31 elements. This div uses flexbox to
1:35:34 justify center horizontally center our
1:35:37 item buttons and adds a 16 pixel gap
1:35:41 between them. Each item in our items
1:35:44 array gets its own motion dot button.
1:35:47 The while hover and while tap framer
1:35:50 motion props give us those satisfying
1:35:52 enlarge on hover and shrink on click
1:35:54 animations.
1:35:56 When a button is unccllicked, it updates
1:35:58 our selected item state. The class name
1:36:01 uses a conditional check. If this item
1:36:04 is the selected item, its background
1:36:06 becomes a slightly darker primary color
1:36:09 BG primary/20.
1:36:11 Otherwise, it's a very light primary
1:36:13 color BG primary/5
1:36:16 giving visual feedback about the current
1:36:18 selection. The emoji icon is displayed
1:36:21 prominently with test 2 XL. Finally, we
1:36:26 have the main canvas area where users
1:36:28 will click to place their garden items.
1:36:31 This segment renders a foundational DOM
1:36:34 element functioning as an interactive
1:36:37 canvas. Its properties include relative
1:36:40 positioning, full width, a fixed height,
1:36:43 a semi-transparent background, rounded
1:36:46 borders, and a pointer cursor for user
1:36:48 interaction with content overflow
1:36:51 hidden.
1:36:53 and on click event handler handle canvas
1:36:57 click is dynamically bound to this
1:37:00 element. Within this primary element, an
1:37:02 array iteration method processes a
1:37:05 collection of placed items. For each
1:37:08 item in this collection, a component
1:37:11 instance likely from a motion animation
1:37:13 library is rendered. This component
1:37:16 instance is uniquely identified by a key
1:37:19 property derived from its index. is
1:37:22 configured with initial and animated
1:37:25 transformation state properties.
1:37:28 Specifying a scaling in visual effect
1:37:30 from a zero scale to a full scale of
1:37:33 one. Inline styling applies absolute
1:37:36 positioning with left and top CSS
1:37:39 attributes precisely determined by the
1:37:41 items coordinate data incorporating a
1:37:44 slight offset. A CSS class is applied to
1:37:48 control the text sizing of the rendered
1:37:50 content. Finally, the icon property from
1:37:53 the current items data object is
1:37:55 directly rendered as the visual content
1:37:58 within each animated component instance.
1:38:02 Now, let's move back to your anxiety
1:38:04 games.tsx
1:38:06 file. You'll need to import Zen Garden
1:38:09 at the top and then make sure to include
1:38:12 it in your render game function for the
1:38:14 garden case.
1:38:24 With that in place, you can now enjoy
1:38:26 your interactive Zen Garden game.
1:38:44 Our next immersive experience is the
1:38:46 forest game. To begin, let's create a
1:38:49 new file for it. We'll import use client
1:38:52 and all other necessary elements. We'll
1:38:56 also define a constant for the
1:38:58 meditation duration, setting it to 5
1:39:00 minutes expressed in seconds. Now, let's
1:39:04 define and export our forest game
1:39:06 component. Inside this component, we'll
1:39:09 manage several states. is playing. A
1:39:12 true or false value to track if the
1:39:15 sounds are currently playing. Volume, a
1:39:17 number from zero to 100, controlling the
1:39:21 audio volume.
1:39:23 Progress tracks the percentage of the
1:39:26 meditation that has been completed. Time
1:39:29 left, the countdown for the meditation
1:39:31 in seconds. Audio elements. This is a
1:39:35 use state hook that creates and holds
1:39:37 references to audio objects for our
1:39:40 nature sounds including birds, wind, and
1:39:42 leaves. Remember, you'll need to create
1:39:45 a sounds folder inside your public
1:39:47 directory and place these MP3 files
1:39:51 there. You can grab these files from my
1:39:54 GitHub repository. We also have a use
1:39:57 effect hook specifically dedicated to
1:40:00 setting up our audio and ensuring proper
1:40:03 cleanup when the component is no longer
1:40:06 in use. This use effect runs just once
1:40:10 when the component first mounts. It
1:40:12 loops through all our audio elements to
1:40:15 set the loop property to true so they
1:40:18 play continuously
1:40:20 and set the initial volume based on our
1:40:22 state. The return statement is a crucial
1:40:25 cleanup function. When the forest game
1:40:28 component is removed from the screen, it
1:40:31 ensures all audio elements are paused
1:40:33 and reset to the beginning, preventing
1:40:36 sounds from playing in the background.
1:40:39 Another use effect handles realtime
1:40:41 volume adjustments. This hook listens
1:40:44 for changes in our volume state.
1:40:47 Whenever the volume slider is adjusted,
1:40:49 it iterates through all the audio
1:40:52 elements and updates their volume
1:40:54 property accordingly. The main timer
1:40:58 logic for our meditation is controlled
1:41:00 by this use effect. This use effect
1:41:02 starts and set interval that runs every
1:41:05 second, but only if the game is playing
1:41:07 and there's time left. It decrements
1:41:10 time left and calculates the progress
1:41:12 percentage. Just like before, the return
1:41:16 can clear interval timer ensures the
1:41:20 timer is stopped when the component
1:41:22 unmounts or these dependencies change.
1:41:25 We need a function to toggle play pause
1:41:28 for our sounds. The toggle play function
1:41:31 simply checks if it's playing. If true,
1:41:34 it pauses all the audio tracks,
1:41:36 otherwise it plays them. It then flips
1:41:39 the eyes playing state which will update
1:41:41 the UI like changing the play pause
1:41:44 button icon and the helper function to
1:41:47 format our time display. Format time
1:41:50 takes a number of seconds and converts
1:41:52 it into a mmss string to ensure seconds
1:41:55 are always two digits. Now let's look at
1:41:58 the JSX our component returns. We'll
1:42:02 start with the main container div. This
1:42:04 div acts as our main layout, centering
1:42:07 its content both vertically and
1:42:09 horizontally within a fixed height of
1:42:12 400 pixels and adding generous vertical
1:42:15 spacing space E8 between its elements.
1:42:19 Inside, we'll place our animated forest
1:42:21 icon. This div creates a captivating
1:42:24 animated pine tree icon. The motion dod
1:42:27 applies a continuous subtle animation.
1:42:31 Scale 1 1.05 05 1 makes the tree gently
1:42:36 pulse, grow, and shrink and rotate. 0 1
1:42:41 1 - 1 0 makes it subtly sway back and
1:42:44 forth. This animation runs over 4
1:42:47 seconds. Duration four repeats infinity
1:42:50 times and uses an ease in out transition
1:42:53 for smoothness. The inner div creates a
1:42:56 blurred glowing background in a green
1:42:58 gradient adding to the forest ambiencece
1:43:01 and the tree pine icon itself is
1:43:03 centered within. Below the animation we
1:43:07 have our control section. This entire
1:43:09 block of code is neatly contained within
1:43:11 a div that has a fixed w-64
1:43:15 width and space y-6
1:43:19 vertical spacing. First we have the
1:43:22 volume control. A div with flex justify
1:43:25 between displays the volume label and
1:43:28 the current volume percent. Below that
1:43:31 another flex container holds a
1:43:33 conditional icon volume X if volume is
1:43:37 zero otherwise volume 2 and our shad CN
1:43:40 UI slider component. This slider is
1:43:43 bound to our volume state allowing users
1:43:46 to smoothly adjust the sound level.
1:43:49 Next, a Shaden UI progress bar visually
1:43:52 represents the meditations completion
1:43:55 percentage.
1:43:57 Finally, we have the play, pause, and
1:44:00 time display section. This div uses flex
1:44:03 items center justify between to lay out
1:44:06 the remaining time, the play, pause
1:44:09 button, and the total meditation
1:44:11 duration. The format time time left
1:44:14 displays how much time is left while
1:44:17 format time meditation duration shows
1:44:20 the total length. The button is styled
1:44:23 as a circular outlined icon. Its onclick
1:44:26 event calls our toggle play function and
1:44:29 its icon dynamically switches between
1:44:31 pause and play based on the is playing
1:44:34 state. Now you need to go back to your
1:44:37 anxiety games.tsx
1:44:39 file. import forest game at the top and
1:44:43 then add it to your render game function
1:44:45 for the forest case.
1:44:57 Once that's done, you can test it on
1:44:59 your local host, adjust the volume, and
1:45:02 enjoy the calming forest sounds. Just a
1:45:05 heads up, the ocean waves game won't be
1:45:08 created in this specific tutorial. I'll
1:45:11 have separate tutorials dedicated to
1:45:13 building ReactJS and NextJS games. So
1:45:17 stay tuned for that.
1:45:22 Now let's create the mood form
1:45:24 component. This will allow users to
1:45:26 track their current mood. Inside your
1:45:29 components directory, create a new
1:45:31 folder called mood. And inside that
1:45:33 create a file named mood fortsx
1:45:38 start mood form.tsx
1:45:40 with use client and then import these
1:45:44 modules. Next we'll define the props
1:45:47 that our mood form component will
1:45:50 accept. This mood form props interface
1:45:53 declares an optional onsuccess prop
1:45:56 which is a function that will be called
1:45:57 if the mood submission is successful.
1:46:00 Now let's define our mood form
1:46:02 functional component. Inside this
1:46:04 component, we'll manage a few states.
1:46:07 Mood score will hold the user's selected
1:46:10 mood initialized to 50. Is loading will
1:46:14 tell us if the form is in the process of
1:46:16 saving data.
1:46:19 And router is our next.js
1:46:22 hook for programmatic navigation. will
1:46:25 define an array of emotions that
1:46:28 correspond to different mood scores. The
1:46:30 emotions array provides the emoji and
1:46:33 descriptive text for various mood
1:46:35 levels. Current emotion is a clever bit
1:46:39 of logic. It finds the emotion whose
1:46:41 value is closest to our mood score
1:46:44 within a threshold of 15 points to
1:46:47 display the most relevant emoji and
1:46:49 description. If no close match is found,
1:46:53 it defaults to the neutral emotion. This
1:46:57 is similar to what we've done on the
1:46:58 dashboard, so we won't spend too much
1:47:00 time on it. Now, let's look at the JSX
1:47:04 our mood form component returns. This
1:47:07 entire div serves as the main container
1:47:09 for our mood form, providing generous
1:47:11 spacey six between its sections and
1:47:14 vertical padding. The emotion display
1:47:16 section simply centers and styles the
1:47:19 current emotion label the large emoji
1:47:22 and it description using text for LL and
1:47:25 text muted foreground. The emotion
1:47:28 slider section is where the user
1:47:30 interacts. A flex justify between div
1:47:33 displays our emotions mapped emoji
1:47:36 markers. Each marker is cursor pointer
1:47:39 and its opacity changes based on how
1:47:42 close its value is to the mood score
1:47:44 visually guiding the user. Clicking an
1:47:46 emoji marker directly sets the mood
1:47:49 score. Below these markers is the shaden
1:47:51 UI slider component. Its value is bound
1:47:55 to mood score and on value change
1:47:57 updates the state as the user drags it.
1:48:00 It ranges from 0 to 100 with step one.
1:48:04 Finally, the submit button button class
1:48:07 name equals W full is styled to take up
1:48:10 the full width. The button text here is
1:48:13 save mood. Now, let's head back to your
1:48:16 dashboard page. TSX. You'll need to
1:48:20 import mood form at the top. Then you'll
1:48:23 need to add a new state for tracking the
1:48:25 saving process.
1:48:30 This is saving mood state will be a
1:48:31 boolean flag that we set to true when we
1:48:34 start saving the mood data and false
1:48:36 when it's done. Next, we'll create the
1:48:39 handle mood submit function. This handle
1:48:42 mood submit function is an asynchronous
1:48:45 operation. It first sets is saving mood
1:48:48 to true. Inside the try block, you'd
1:48:51 place your actual API call like save
1:48:54 mood data to send the mood score to your
1:48:57 back end. If the call is successful, it
1:49:00 then closes the mood model. The catch
1:49:03 block logs any errors and the finally
1:49:05 block ensures saving mood is reset to
1:49:09 false whether the operation succeeded or
1:49:11 failed. Finally, back in the mood form
1:49:15 component you've integrated into your
1:49:16 dashboard, make sure to pass handle mode
1:49:19 submit to its onsubmit prop and also
1:49:22 pass is saving mode to its is loading
1:49:26 prop. This connects your form's
1:49:28 submission to your data saving logic and
1:49:31 updates the buttons disabled state. Now
1:49:34 let's scroll all the way up and
1:49:36 uncomment the set show mood model on
1:49:40 click function.
1:49:45 This action will enable the model to
1:49:48 open on the local host. When we click on
1:49:51 the track mode button, we can now see
1:49:54 our mood model appear. Perfect. Next up,
1:49:59 let's create the activity logger
1:50:00 component to allow users to record their
1:50:03 wellness activities. Inside your
1:50:06 components folder, create a new file
1:50:08 called activity logo.tsx. tsx. Within
1:50:12 this new file, start with your use
1:50:14 client directive and then import the
1:50:18 necessary modules. We'll define an array
1:50:20 of activity types that users can choose
1:50:23 from. This simple array provides ids and
1:50:26 display names for common wellness
1:50:28 activities. Now, let's define the props
1:50:31 for our activity logger component. The
1:50:34 open prop controls the modal's
1:50:36 visibility. On open change is a call
1:50:39 back to update that open state and on
1:50:42 activity logged is a function that will
1:50:44 be called after an activity is
1:50:47 successfully logged. Now we'll export
1:50:50 our activity logger functional component
1:50:53 destructuring its props. Inside the
1:50:56 component we'll manage several states
1:50:59 for our form fields. These states will
1:51:01 hold the is loading status of the form.
1:51:04 the type of activity selected, its name,
1:51:07 duration, and any description the user
1:51:10 provides. Next, we'll create the handle
1:51:12 submit function that runs when the form
1:51:15 is submitted. The handle submit function
1:51:17 first calls a prevent default to stop
1:51:20 the browser from reloading the page. It
1:51:23 then performs basic validation alerting
1:51:26 the user if type or name are missing. It
1:51:28 sets is loading to true inside a set
1:51:32 time out simulating an API call. It
1:51:35 resets all the form fields, shows a
1:51:37 success alert, closes the dialogue, and
1:51:40 triggers the onactivity logged call back
1:51:42 if it's available. Now, let's lay out
1:51:45 the UI using a dialogue. H sets up the
1:51:48 basic structure of our activity logger
1:51:50 model. It uses Shadic CN UI's dialogue
1:51:54 components with open and unopen change
1:51:56 controlling its visibility. The dialogue
1:51:59 header contains a clear dialogue title,
1:52:02 log activity, and a helpful dialogue
1:52:05 description. Inside the dialogue
1:52:08 content, we'll create a form element
1:52:11 linking it to our handle submit
1:52:13 function. This form tag is crucial. on
1:52:16 submit equals handle submit ensures our
1:52:19 JavaScript function runs when the form
1:52:22 is submitted. The class name helps
1:52:24 center the form, sets it as a flex
1:52:27 container, useful for aligning buttons
1:52:29 at the end, and adds some spacing.
1:52:33 Within this form, we'll add our first
1:52:35 input group for activity type. This div
1:52:39 uses space y 2 for spacing. The label
1:52:42 component clearly labels the field
1:52:45 activity type. The shard CN UI select
1:52:50 component creates our dropdown. Its
1:52:52 value is bound to our type state and on
1:52:55 value change updates the type state when
1:52:57 an option is selected. Inside select
1:53:00 content, we map over our activity types
1:53:03 array creating a select item for each
1:53:05 one using its ID as the value and name
1:53:08 for display. Next, we'll add the input
1:53:11 field for the activity name.
1:53:17 This provides a label for name and an
1:53:20 input component where the user can type
1:53:22 in a descriptive name for the activity.
1:53:25 Its value is bound to the name state and
1:53:28 onchange updates it as the user types. A
1:53:31 placeholder provides helpful examples.
1:53:35 Finally, we'll add the save activity
1:53:37 button. This button is explicitly type
1:53:40 equals submit meaning it will trigger
1:53:43 our forms handle submit function when
1:53:46 clicked. It takes W by full for and is
1:53:50 disabled when is loading is true
1:53:53 preventing accidental duplicate
1:53:55 submissions. Now head back to your
1:53:57 dashboard page tsx. You'll need to
1:54:01 import the activity logger component
1:54:03 there.
1:54:07 Over here, let's add the activity logger
1:54:09 state.
1:54:12 Then find where you define the handle AI
1:54:15 checkin function or create it if it's
1:54:18 missing and make sure it sets your state
1:54:21 to open the activity logger.
1:54:27 So that is the function over here.
1:54:34 And with that, when you click the
1:54:35 check-in button on your local host, you
1:54:38 should now see the fully functional
1:54:40 activity log model. Let's now move on to
1:54:44 creating the chat session page for our
1:54:46 AI therapist. Inside your app directory,
1:54:49 create a new folder called therapy.
1:55:01 Then inside therapy create another
1:55:04 folder named session. The square bracket
1:55:08 indicates a dynamic route in next.js.
1:55:11 Finally inside session create a file
1:55:14 called page.tsx.
1:55:17 Start page.tsx
1:55:19 with use client to ensure it's rendered
1:55:22 on the client side. Then import all the
1:55:25 necessary modules. Make sure to quickly
1:55:28 install React Markdown in your terminal
1:55:30 if you haven't already. This library is
1:55:33 crucial because it will help us format
1:55:35 the AI's responses in our UI, converting
1:55:38 markdown syntax into beautifully
1:55:41 rendered HTML.
1:55:44 Now, let's define our main therapy page
1:55:46 component. Inside, we'll define several
1:55:49 state variables to manage our chat
1:55:51 interface. This state will handle the
1:55:53 user's input message, whether the AI is
1:55:56 typing the array of messages in the
1:55:58 chat, a mounted flag important for
1:56:02 client side rendering effects, an
1:56:04 overall is loading state for the chat,
1:56:07 and whether the chat paused.
1:56:10 We'll use a use effect hook to set the
1:56:12 mounted flag once the component has
1:56:14 rendered on the client. This is a common
1:56:17 pattern to ensure client side only logic
1:56:20 or animations are applied after react
1:56:23 has hydrated the component in the
1:56:26 browser.
1:56:27 For autoscrolling to the bottom of the
1:56:29 chat, we'll use a user ref. This
1:56:32 messages end ref will be attached to a
1:56:34 div at the very bottom of our chat
1:56:37 display allowing us to programmatically
1:56:40 scroll to it. Here's our scroll to
1:56:42 bottom function. This function will
1:56:45 scroll the chat area down. The set time
1:56:48 out ensures that any new messages have
1:56:50 been rendered into the DOM before we
1:56:53 attempt to scroll and a use effect to
1:56:55 trigger that scroll. This hook ensures
1:56:58 that the chat automatically scrolls to
1:57:00 the bottom whenever new messages are
1:57:02 added but only after the AI has finished
1:57:05 its typing. So you see the complete
1:57:07 response. Before we render the UI, let's
1:57:11 define a framer motion animation variant
1:57:14 for a glowing effect. This glow
1:57:16 animation variant creates a mesmerizing
1:57:19 pausing glow that will apply to elements
1:57:22 to give them a magical AI feel. Now,
1:57:25 let's return the main structure of our
1:57:27 chat page. It starts with a main
1:57:30 container div and a header section. The
1:57:33 outer div flex one flex flex column
1:57:37 overflow hidden BG white dark BG
1:57:40 background rounded LG border makes our
1:57:43 chat interface take up available space
1:57:46 stacks its content vertically and gives
1:57:48 it a clean borded rounded corner look
1:57:51 with dark mode support the chat header
1:57:54 P4 border B flex item center justify
1:57:57 between has padding a bottom border and
1:58:00 uses flexbox to neatly arrange items
1:58:04 inside. A div holds our AI bot icon, a
1:58:07 W8H8 rounded full div with a light
1:58:11 primary background and a centered bot
1:58:14 icon. Now, let's think about how to get
1:58:17 to this chat page. Back on your
1:58:19 dashboard page tsx, locate the onclick
1:58:23 function for the start a new therapy
1:58:26 button. Let's create a function called
1:58:29 handle start therapy.
1:58:34 That will take us to this chat page.
1:58:37 First, you'll need to import use router
1:58:40 from next/navigation
1:58:43 at the top of your dashboard file. Then
1:58:47 initialize it.
1:58:49 Now define your handle start therapy
1:58:51 function using router.push.
1:58:55 With that in place, clicking your
1:58:57 therapy button on the dashboard will
1:58:59 smoothly navigate you to our new AI
1:59:02 therapist chats page. Back inside
1:59:04 therapy/ session/page.tsx,
1:59:08 we display AI therapist as a bold H2 and
1:59:12 the dynamic count of messages length in
1:59:15 smaller muted text. You'll instantly see
1:59:18 this header on your local host proudly
1:59:21 displaying the bot icon and AI
1:59:24 therapist.
1:59:26 We need to conditionally render the chat
1:59:29 content. When there are no messages,
1:59:31 we'll display a welcoming screen with
1:59:34 suggested questions.
1:59:39 This large block is what your users will
1:59:41 see when they first open the chat before
1:59:44 any messages have been exchanged. The
1:59:48 outermost diff flex one flex items
1:59:51 center justify center P4 ensures the
1:59:54 content is centered on the screen. The
1:59:57 Max W2XL W full spacy 8 div acts as a
2:00:01 content wrapper limiting it maximum
2:00:04 width and providing generous vertical
2:00:06 spacing. Within the AI therapist heading
2:00:09 section text center space E4, we have a
2:00:12 relative inline flex div that houses our
2:00:15 animated AI avatar. The first motion.d
2:00:19 creates a large pulsating blood glow
2:00:22 behind the AI therapist text using our
2:00:25 glow animation variant. The core AI
2:00:28 therapist test itself is within a
2:00:31 relative flex items center gap 2 div.
2:00:35 Notice the relative div around the
2:00:37 sparkles icon. It contains two sparkles
2:00:40 icons, one static and one motion. that
2:00:44 also uses the glow animation making the
2:00:46 sparkles themselves pulse. Below this a
2:00:50 P tag displays the inviting message how
2:00:52 can I assist you today. And now when
2:00:55 there is chat content when
2:00:56 messages.length is not zero will display
2:01:00 the actual message history. This dynamic
2:01:03 section displays our chat messages. The
2:01:07 outer div flex one overflow e auto
2:01:10 scroll smooth makes the message area
2:01:12 take up all available vertical space
2:01:15 adds a scroll bar if content overflows
2:01:18 and ensures smooth scrolling. The inner
2:01:21 max w 3xl mx autod centers the message
2:01:26 content. We use animate presence initial
2:01:29 equals false to handle animations as
2:01:32 messages enter and exit the DOM. Inside
2:01:35 messages do map iterates through our
2:01:38 messages array, rendering each one. Each
2:01:41 message is wrapped in a motion div with
2:01:43 a unique key derived from its time stamp
2:01:46 that fades in and slides up, giving a
2:01:49 smooth animation as new messages appear.
2:01:53 The class name dynamically applies a
2:01:55 slightly different background color. BG
2:01:58 muted/30
2:01:59 for AI messages versus user messages. BG
2:02:03 background. Each individual message div
2:02:06 class name equals flex gap-4
2:02:09 uses flexbox to lay out the avatar and
2:02:12 the message content side by side. The
2:02:15 div for the avatar conditionally renders
2:02:18 either a bot icon for AI messages or a
2:02:22 user icon for your messages with
2:02:24 appropriate styling. The message text
2:02:28 content flex one space y 2 overflow
2:02:31 hidden minage 2 rim displays the sender
2:02:35 label AI therapist or u and can
2:02:38 optionally show a badge if the message
2:02:40 has a metadata technique property eg
2:02:43 indicating a specific therapy technique
2:02:46 used by the AI. The heart of the message
2:02:48 content is react markdown greater than
2:02:51 msg content which takes the raw markdown
2:02:54 in msg content and renders it
2:02:57 beautifully into styled HTML.
2:03:03 Below the messages there is typing and d
2:03:06 block is a conditional rendering that
2:03:08 shows a typing indicator only when the
2:03:11 AI is is typing. This includes a
2:03:14 spinning loader 2 icon. Finally, div ref
2:03:18 equals messages is that special div we
2:03:21 discussed earlier attached to our
2:03:23 messages end ref so that our scroll to
2:03:26 bottom function can easily bring the
2:03:29 latest message into view.
2:03:34 Now let's work on the form for
2:03:36 submitting new chat messages. We'll
2:03:39 start by wrapping it in a div that will
2:03:41 serve as our input area. This div
2:03:44 provides a clear boundary at the bottom
2:03:46 of the chart with a border T top border.
2:03:50 The bg background/50
2:03:53 backdrop blur creates a modern frosted
2:03:56 glass effect by blurring content behind
2:03:59 it, while support-backdrop
2:04:02 filter colon big background/50
2:04:05 ensures graceful fallback for browsers
2:04:08 that don't support the blur effect. P-4
2:04:12 adds padding around the input element.
2:04:15 Inside this div, we'll define our form
2:04:18 element linking it to a handle submit
2:04:21 function which you'll implement to send
2:04:24 messages. The onsubmit equals handle
2:04:27 submit attribute connects our form
2:04:30 submission event to the handle submit
2:04:33 JavaScript function. The class name
2:04:36 helps center the form horizontally,
2:04:38 limits its maximum width, sets it as a
2:04:41 flex container, flex gap 4 for aligning
2:04:45 input and button, and ensures items are
2:04:48 aligned to the items end bottom. It's
2:04:52 also relative for positioning the send
2:04:54 button.
2:04:56 Inside the form, we'll have a div to
2:04:58 wrap our input field.
2:05:07 This div takes up the available
2:05:08 horizontal space. Flex one within the
2:05:12 form is relative for positioning the
2:05:14 send button inside it and acts as a
2:05:17 group for tailwind hover effects. Now
2:05:21 let's add the core of our chat input,
2:05:23 the text area and the send button. This
2:05:27 text area serves as our multi-line chat
2:05:30 input. Its value is bound to the message
2:05:33 state and onchange updates that state as
2:05:36 the user types. The placeholder changes
2:05:39 dynamically based on each chat post. It
2:05:42 has extensive Telwind CSS styling W full
2:05:46 resize nonrounded 2XL border BG
2:05:49 background for basic looks. P3 PR12 for
2:05:53 padding, extra PR12 to make space for
2:05:55 the send button, and mine H-48
2:05:59 pixels, max H-200 pixels, so it starts
2:06:03 at a reasonable height, but can expand
2:06:05 up to 200 pixels before scrolling. Focus
2:06:08 styles provide visual feedback and
2:06:11 transition. All makes style changes
2:06:14 smooth. is disabled if the AI is typing
2:06:18 or the chat is chat paused and its
2:06:21 appearance changes with opacity 50 kza
2:06:24 not allowed. The on key down handler is
2:06:27 a neat trick. If the user presses enter
2:06:30 and not shift plus enter, it prevents a
2:06:34 new line and instead triggers handle
2:06:36 submit. The button acts as our send
2:06:39 button. Its type equals submit making it
2:06:44 part of the form's submission. It's
2:06:47 styled as an icon button with size
2:06:50 equals icon. Its class name positions it
2:06:53 absolutely to the bottom right of the
2:06:55 text areas container giving it h-36px
2:06:59 w-36px
2:07:01 and rounded xl corners. It has a primary
2:07:05 background that darkens on hover with a
2:07:07 subtle shadow. is disabled if the AI is
2:07:10 typing the chat is chat paused or the
2:07:14 message is empty. The group hovers scale
2:07:17 1 05 group focus within scale 105 makes
2:07:23 the button subtly enlarge when the text
2:07:25 area its group parent is hovered or
2:07:28 focused which is a nice touch. The
2:07:31 onclick handler explicitly prevents the
2:07:33 default button behavior and then
2:07:36 manually calls handle submit. The send
2:07:39 icon is displayed inside the button. And
2:07:42 there you have it. With all these pieces
2:07:44 in place, you now have a beautiful and
2:07:46 interactive chat interface. This has
2:07:49 been an incredible journey. And with
2:07:52 this front end complete, we're now ready
2:07:54 to move on to the back end. First things
2:07:57 first, let's create a dedicated folder
2:08:00 for our backend code. In the root
2:08:02 directory of your project, create a new
2:08:05 folder and name it backend. Now, open
2:08:08 your terminal. We need to navigate into
2:08:10 this new backend folder. Type the
2:08:13 following command cd backend. This
2:08:16 command simply means change directory to
2:08:19 backend.
2:08:21 It puts your terminal's current working
2:08:23 location inside the backend folder. So
2:08:26 any commands you run next will apply
2:08:29 there with your terminal inside the
2:08:31 backend directory. Let's initialize our
2:08:33 NodeJS project. Run this command. npm
2:08:37 init y. This command is super handy. npm
2:08:42 init stands for node package manager
2:08:45 initialize. And the y flag tells it to
2:08:48 automatically say yes to all the default
2:08:51 questions. What it does is create a
2:08:54 package.json JSON file in your backend
2:08:57 folder. If you now check your backend
2:08:59 folder, you'll see this new package.json
2:09:02 file. This file is like the manifest for
2:09:05 your NodeJS project.
2:09:08 It contains metadata about your project
2:09:10 like its name, version, and description.
2:09:13 And most importantly, it lists all the
2:09:16 dependencies,
2:09:18 the external libraries and packages your
2:09:20 project relies on. Think of it as a
2:09:23 recipe book for your application. Our
2:09:25 back end will be built using Express.js
2:09:30 which is a fast and opinionated
2:09:33 minimalist web framework for Node.js.
2:09:37 It provides a robust set of features to
2:09:39 develop web and mobile applications. It
2:09:42 simplifies tasks like handling routes,
2:09:45 requests, and responses, making it much
2:09:48 easier to build our server. To install
2:09:51 ExpressJS, use this command. npm install
2:09:55 express. This command downloads the
2:09:58 Express.js package and its dependencies
2:10:02 from the npm registry and adds them to
2:10:05 your Node modules folder, then records
2:10:08 it as a dependency in your package.json.
2:10:12 Now, let's create our very first NodeJS
2:10:15 server. We'll follow the hello world
2:10:17 example from the express.js JS
2:10:20 documentation.
2:10:22 Create a new file called index.ts.
2:10:26 Yes, TS because we're using TypeScript
2:10:29 directly inside your backend folder for
2:10:31 now. We'll move it into a source folder
2:10:33 shortly. We are going to import express
2:10:36 from the Express package. Then we'll
2:10:40 create a constant for our app to
2:10:42 instantiate an Express application.
2:10:45 We'll define the port our server will
2:10:48 listen on. Add middleware to pass JSON
2:10:51 bodies from incoming requests. Define a
2:10:54 route for a get request to the root URL.
2:10:58 You might notice some red wavy lines
2:11:00 under w and rest. Initially this is
2:11:03 because we're using TypeScript and it
2:11:06 wants to know the types of these
2:11:07 variables. We explicitly import request
2:11:11 and response types from the express
2:11:13 package to fix this. making our code
2:11:16 type safe.
2:11:21 And finally, start the server to listen
2:11:24 for incoming requests.
2:11:29 Before we test our server, we're going
2:11:31 to install a super helpful tool called
2:11:34 Nodemon.
2:11:35 What is Nodemon?
2:11:38 Nodemon is a utility that monitors for
2:11:41 any changes in your source code and
2:11:44 automatically restarts your server. This
2:11:47 is incredibly useful during development
2:11:49 as it saves you from manually stopping
2:11:52 and restarting your node server every
2:11:54 time you make a change drastically
2:11:56 speeding up your workflow. Let's install
2:11:59 nodemon. Since it's a development tool,
2:12:02 we'll install it as a dev dependency. We
2:12:05 will type npm install savede dev nodemon
2:12:09 inside our terminal. After installing
2:12:12 open your package dot json file. We need
2:12:16 to edit the scripts section to tell npm
2:12:19 how to use nodemon. Look for the scripts
2:12:22 object and modify it like this.
2:12:26 Now you might recall an earlier
2:12:29 instruction to create index.ts directly
2:12:32 in back end. We need to fix a potential
2:12:35 error that will arise from our package
2:12:38 JSON script. If you were to run npm
2:12:41 rundev right now, you'd get an error
2:12:44 because our script is pointing to src
2:12:47 index. But we don't have a src folder
2:12:50 yet. So let's quickly create one. In
2:12:53 your backend directory, make a new
2:12:55 folder named source. Then drag and drop
2:12:58 your index.ts T file inside this src
2:13:02 folder. One more crucial step before we
2:13:05 run our server. We're using TypeScript.
2:13:08 So we need to install TypeScript itself
2:13:11 into our project. We'll also install it
2:13:14 as a dev dependency using mpm install
2:13:17 savedev TypeScript. After installation,
2:13:20 you'll see a tsconfig.json
2:13:23 file appear in your backend directory.
2:13:26 This is Typescript's configuration file
2:13:29 for now. The default settings are fine.
2:13:32 Now that everything is set up, let's run
2:13:34 our development server. You should see
2:13:37 output in your terminal indicating that
2:13:39 Nodemon is starting the server on port
2:13:42 301.
2:13:44 To test our API, we're going to use a
2:13:46 tool called Echo API. What is Echo API?
2:13:51 Echo API is a comprehensive API
2:13:53 development platform designed for
2:13:55 collaboration. It offers essential
2:13:58 features like API debugging, creating
2:14:01 API specifications, writing and running
2:14:03 tests for your APIs, stress testing,
2:14:07 automatically creating API docs, and
2:14:09 many other exciting features. Go to the
2:14:13 Echo API download page. Download the
2:14:16 version for your operating system and
2:14:18 open it. On the Echo API interface, make
2:14:22 a get request to the endpoint localhost
2:14:25 port 301.
2:14:27 This request will hit the root endpoint
2:14:30 we defined in app.get in our index.ts
2:14:34 file. And you should see the simple
2:14:36 message hello world returned as a
2:14:38 response. Success. Our first node orjs
2:14:42 server is up and running. Let's quickly
2:14:45 create another endpoint to see how easy
2:14:47 it is. In your index.ts file, add this
2:14:51 new app.get route. Now in echo API, make
2:14:56 another get request to localhost port
2:14:59 301 forward/ API/ chat. You should
2:15:03 receive the friendly response. Hi, how
2:15:06 may I help you today? Excellent.
2:15:10 Next, we're going to use ingest for our
2:15:12 AI agent. What is ingest? Ingest is a
2:15:18 powerful developer platform that
2:15:20 provides a reliability layer for
2:15:22 building applications. It particularly
2:15:24 focuses on durable execution, ensuring
2:15:28 your long running functions complete
2:15:30 even if your server restarts,
2:15:32 eventdriven workflows, building complex
2:15:36 processes that respond to specific
2:15:38 events.
2:15:40 Observability giving you insight into
2:15:43 how your functions are running.
2:15:44 Essentially, Injest helps us build
2:15:47 robust, scalable, and observable
2:15:49 back-end processes, which is perfect for
2:15:52 managing our AI agents complex tasks.
2:15:55 Let's quickly navigate to the doc
2:15:57 section on the inguest website. On this
2:16:00 page, we'll learn how to set up inest,
2:16:02 which will eventually lead us to
2:16:04 building our AI agent with it. Under the
2:16:07 quick start section, make sure to select
2:16:09 NodeJS since that's what we are using
2:16:12 and then follow the steps accordingly.
2:16:16 Let's begin by installing inest. After
2:16:19 installation, we need to run the ingest
2:16:22 dev server. This is a local server that
2:16:25 ingest provides for development,
2:16:27 allowing you to test and debug your
2:16:30 ingest functions. Use this command
2:16:38 You'll be prompted to type Y to install
2:16:40 the ingest CLI command line interface.
2:16:44 Once installed, you'll see a URL in your
2:16:47 terminal. Copy this endpoint and paste
2:16:49 it into a new tab in your browser. This
2:16:52 is your Inest dev server dashboard.
2:16:55 We'll discuss more about what this dev
2:16:57 server is used for very soon. Back to
2:17:00 the ingest documentation. The next step
2:17:03 is to create an ingest client. This
2:17:06 client will allow our node application
2:17:08 to interact with the ingest service.
2:17:12 Inside the src folder of your backend
2:17:15 directory, create a new folder called
2:17:17 ingest. Within that, create a new file
2:17:20 named index.ts.
2:17:22 In this new src/ingest/index.ts
2:17:27 ts file. We'll import inest and then
2:17:30 copy the client setup example from the
2:17:33 ingest docs.
2:17:35 We're going to change the ID from the
2:17:37 default my app to AI therapy agent.
2:17:42 This ID is how your application
2:17:44 identifies itself to the ingest service.
2:17:48 Next, we need to set up the ingest HTTP
2:17:51 endpoint within our main express server.
2:17:55 This endpoint is what the ingest service
2:17:58 will communicate with to trigger and
2:18:00 manage your functions. Go back to your
2:18:02 src/index.ts
2:18:05 file. At the top, you'll need to import
2:18:08 serve from ingest/express.
2:18:10 You'll also need to import our ingest
2:18:13 client and functions which we haven't
2:18:15 created yet, but we'll soon from our
2:18:18 srcingest index.ts file. Add this line
2:18:22 to your srcindex.ts ts file typically
2:18:26 after your other app use middleware.
2:18:28 You'll notice we're importing something
2:18:30 called ingest functions. To accommodate
2:18:33 this, let's go ahead and create a
2:18:35 functions.ts file inside your
2:18:38 srcingest/folder.
2:18:40 This functions.ts file will be where we
2:18:43 define all our specific inest functions
2:18:46 like those for our AI agent. Inside
2:18:49 srcingest functions.ts, TS. We'll import
2:18:53 our ingest client and then add a basic
2:18:57 example function from the ingest docs.
2:19:00 We will get back to this in a second.
2:19:02 Now, let's create a logger utility
2:19:04 function. A logger is a software
2:19:06 component that's used to record events,
2:19:10 errors, and other important information
2:19:13 during an application's execution. It
2:19:16 helps developers understand what's
2:19:18 happening within their code, debug
2:19:20 issues, and monitor the application's
2:19:23 health. We'll create a new folder called
2:19:26 utils inside your src directory. And
2:19:29 within utils, create a file named
2:19:31 logger.ts.
2:19:33 We'll use a popular login library called
2:19:35 Winston. First, let's install it.
2:19:42 Now inside srcutils logger.ts
2:19:46 add this code. This code sets up a login
2:19:50 system that creates a new Winston
2:19:52 logger. By default it recordsformational
2:19:55 messages and anything more severe like
2:19:58 warnings or errors. Each log entry will
2:20:00 include a timestamp and be formatted as
2:20:03 a structured JSON object making it easy
2:20:06 to read and analyze. The system is also
2:20:09 configured to send all error messages to
2:20:11 a dedicated error.log file while all
2:20:15 general messages info level and above
2:20:18 are saved in a combined.log
2:20:21 file.
2:20:23 This if block checks if our NodeJS
2:20:26 environment is not production. If we're
2:20:30 in development, it adds a console
2:20:33 transport. This means logs will also be
2:20:36 printed directly to our terminal but
2:20:38 with colorize for better readability and
2:20:41 a simple format which is easier to scan
2:20:44 than JSON in the console. Finally, we'll
2:20:47 export our logger.
2:20:51 Back in our main srcindex.ts
2:20:54 file, let's import our logger at the
2:20:56 top. We'll use it as a middleware which
2:20:59 I'll talk more about later. But for now,
2:21:02 let's refactor our server start logic.
2:21:06 Uncomment the previous app.listen call
2:21:10 and create an optimized start server
2:21:12 function. Inside the try block, we
2:21:14 define our port preferring an
2:21:16 environment variable process nv.port if
2:21:20 available otherwise defaulting to 3001.
2:21:24 Then app.listen Listen starts the server
2:21:27 and our logger.info calls print helpful
2:21:31 messages to the console and files
2:21:34 indicating the server port and the
2:21:36 inguest endpoint in the catch block. If
2:21:40 any error occurs during server startup
2:21:43 logger error will record it and
2:21:46 process.exit one will stop the node yes
2:21:49 process indicating an error. Now when
2:21:52 you run npm rundev you'll see the
2:21:55 importance of our logger instead of just
2:21:58 console.log you'll get nicely formatted
2:22:01 log messages in your terminal and in the
2:22:04 error.log and combined.log files in your
2:22:08 backend directory. Let's do a quick
2:22:10 cleanup. Back in srcingest functions, we
2:22:15 currently have a hello world function.
2:22:17 We'll refine this later for our AI
2:22:20 agent. For now, let's make sure the
2:22:23 imports in src/index.cs
2:22:26 correctly point to it. Okay, so we
2:22:28 imported our main functions and gave
2:22:31 them a new more specific name, ingest
2:22:34 functions. Now within the ingest
2:22:37 endpoint setup section, we will ensure
2:22:39 that all references to those functions
2:22:42 explicitly use this new name inest
2:22:45 functions for clarity and consistency.
2:22:48 This simply means we're using the more
2:22:50 descriptive title we just assigned. When
2:22:53 you check the ingest dev server URL in
2:22:56 your browser, you should now see your AI
2:22:58 therapy agent app synced. If you
2:23:01 navigate to the functions tab in the dev
2:23:04 server, you'll see the hello world
2:23:06 function we just created listed there.
2:23:09 On the runs tab, you'll see details on
2:23:11 any executions of this function. If you
2:23:14 click on a run, you might see an output
2:23:16 like hello undefined from the hello
2:23:19 world example return as event body,
2:23:23 which might not be using event data
2:23:25 correctly yet, but don't worry, we'll
2:23:27 refine this later. Next up, let's set up
2:23:30 our MongoDB database connection. Go to
2:23:33 the MongoDB website. You can sign up
2:23:36 using your Google or GitHub account. If
2:23:39 it's your first time using MongoDB
2:23:41 Atlas, you'll be greeted with a welcome
2:23:43 screen. Accept the privacy policy and
2:23:46 click submit. Next, we're going to
2:23:49 create a new project. Click on new
2:23:52 project. Give it a name of your choice,
2:23:55 something like AI therapist agents, and
2:23:57 then click next. Finally, click create
2:24:01 project. Once the project is created,
2:24:04 let's create a cluster. Choose the free
2:24:06 tier if you don't want to be charged.
2:24:09 Give your cluster a name and proceed to
2:24:12 create a deployment. After that, you'll
2:24:14 need to create a database user. Remember
2:24:17 these credentials and choose a
2:24:19 connection method. We'll select the
2:24:22 drivers option. One of the most
2:24:24 important things on this page is the
2:24:26 connection string URL.
2:24:29 Copy this URL. It will be of use very
2:24:32 soon. Then click done.
2:24:36 Now back in your backend project, let's
2:24:38 create av file in the root of your
2:24:41 backend directory. The same level as
2:24:44 package.json.
2:24:45 Paste your MongoDB connection URL into
2:24:48 this file. Now, back in your srcindex.ts
2:24:51 file, we'll create a function called
2:24:54 connect db.
2:24:58 But before we do that, let's create a
2:25:00 new file inside our src utils folder
2:25:03 named db.es.
2:25:05 This file will encapsulate our database
2:25:07 connection logic. We'll start
2:25:10 src/util/db.ts
2:25:14 by importing mongus.
2:25:16 Mongus is an object data modeling or ODM
2:25:21 library for Node.js.
2:25:23 It provides a way to define the
2:25:25 structure of your application's data,
2:25:27 making it much easier to work with
2:25:29 MongoDB databases. It essentially sits
2:25:32 on top of the raw MongoDB NodeJS driver
2:25:36 and offers features like validating data
2:25:39 based on your defined structure, helping
2:25:41 you build complex database queries, and
2:25:44 allowing you to run custom code before
2:25:47 or after database operations. So in your
2:25:51 srcails dbts file, you'll first import
2:25:54 mongus and your logger utility. Next,
2:25:58 you will define your MongoDB connection
2:26:00 string using the environment variable
2:26:02 process envong
2:26:06 URI. Now, let's create our connect DB
2:26:09 asynchronous function which will handle
2:26:12 connecting to the database. The line
2:26:14 await mongus
2:26:16 connect Mongodb URI is the call command
2:26:21 that attempts to establish a connection
2:26:23 to your MongoDB Atlas cluster using the
2:26:26 connection string you provided. The
2:26:29 await keyword ensures that the program
2:26:31 pauses here until this connection
2:26:33 process is either successful or fails.
2:26:37 If the connection is successful,
2:26:39 logger.info info open parenthesis
2:26:43 connected to MongoDB DB Atlas close
2:26:46 parenthesis. We record anformational
2:26:49 message using our logger confirming the
2:26:52 successful connection. The catch error
2:26:57 block is designed to handle any errors
2:26:59 that Mongus connect might encounter such
2:27:02 as incorrect login details or network
2:27:04 problems. Inside the catch block,
2:27:07 logger.
2:27:08 logs the specific error using our logger
2:27:11 for debugging purposes. Finally,
2:27:14 process.exit one terminates the node.gs
2:27:18 program with an exit code of one which
2:27:21 signals that an unhandled error occurred
2:27:24 and the application could not start
2:27:26 correctly. Next, back in your
2:27:29 src/index.ts
2:27:31 file, let's import connect DB at the
2:27:34 top. Now save all your files and run npm
2:27:38 rundev again. In your terminals console,
2:27:41 you should now see connected to MongoDB
2:27:44 Atlas indicating that we've successfully
2:27:47 established a connection to our
2:27:49 database. One more important step, go
2:27:53 back to your MongoDB Atlas dashboard.
2:27:56 Under the security tab, click on network
2:27:59 access. Then click add IP address and
2:28:02 allow access from anywhere.
2:28:05 While this isn't advisable for
2:28:07 production environments where you should
2:28:09 whitelist specific IP addresses, it will
2:28:12 help save us from future connection
2:28:15 errors during development.
2:28:19 Next, let's define our Mongus models.
2:28:22 These models represent the structure of
2:28:24 our data within MongoDB.
2:28:27 Inside your src folder, create the
2:28:30 following new folders. Models,
2:28:32 controllers, middleware, and types.
2:28:40 Inside the models folder, create a file
2:28:43 named user.ts.
2:28:45 This will define the structure for our
2:28:47 user data. We'll import mongus document
2:28:51 and schema. Then we define our
2:28:53 TypeScript interface for i user. This
2:28:56 interface extends document from mongus
2:29:00 meaning instances of i user will have
2:29:02 all the properties of a mongus document.
2:29:05 This interface ensures type safety for
2:29:07 our user objects specifying that each
2:29:10 user must have a name, email and
2:29:12 password. Next, we define the user
2:29:14 schema. New schema. We create a new
2:29:18 mongus schema explicitly typing it with
2:29:20 our I user interface for strong type
2:29:23 checking name type string required true
2:29:27 name will be a string and is required.
2:29:30 Email will be a string required and
2:29:32 unique meaning no two users can have the
2:29:35 same email. Password will be a string
2:29:37 and is required. Timestamps true. This
2:29:40 is a mongus option that automatically
2:29:42 adds created at and updated at fields to
2:29:46 our documents. which are useful for
2:29:48 tracking when data was created or last
2:29:50 modified. Finally, we export our user
2:29:54 model. This line compiles our user
2:29:56 schema into a model that we can use to
2:29:59 interact with the user collection in
2:30:01 MongoDB. Now, let's create a file called
2:30:04 session.ts
2:30:06 in the models folder. This model will
2:30:09 manage user sessions and authentication
2:30:11 tokens. Import mongus document and
2:30:15 schema. then define our I session
2:30:18 interface. This interface defines the
2:30:21 structure of a session document. User ID
2:30:24 is a special mongus.types.object
2:30:26 ID that will link to our user model.
2:30:29 Next, we define the session schema. This
2:30:31 defines user ID as an object ID that
2:30:35 refers to a document in the user
2:30:36 collection. This is how we establish a
2:30:39 relationship between session and user.
2:30:42 The session token itself required and
2:30:44 unique to prevent token collisions.
2:30:47 Expires at the date and time when the
2:30:50 session should expire. Crucial for
2:30:53 security. Device info, an optional field
2:30:56 for storing information about the user's
2:30:58 device or browser, like a user agent
2:31:01 string. Last active stores the last time
2:31:05 this session was active, defaulting to
2:31:08 the current time. Crucially, we'll add
2:31:10 an index for automatic cleanup of
2:31:13 expired sessions. This session schema
2:31:15 index expires at one expire after
2:31:19 seconds. Zero line tells MongoDB to
2:31:22 automatically delete documents from the
2:31:24 session collection when their expires at
2:31:26 field reaches 0 seconds past its value.
2:31:29 This is a powerful feature called a TTL
2:31:33 index time to leave that helps manage
2:31:36 session cleanup efficiently without
2:31:39 manual intervention. Finally, we export
2:31:42 our session model. Now, let's create our
2:31:45 authentication controller. Inside the
2:31:47 controllers folder, create a file named
2:31:50 ocontroller.ts.
2:31:53 This file will contain functions to
2:31:55 handle user registration, login, and
2:31:58 logout. We'll import our request and
2:32:00 response types from Express and our user
2:32:03 and session models. Then we'll import
2:32:06 bcryptJS.
2:32:08 What is bryptjs used for? BCryptJS is a
2:32:12 library used for hashing passwords.
2:32:14 Hashing is a one-way cryptographic
2:32:16 process that transforms a password into
2:32:20 a fixed length string of characters
2:32:22 called a hash. The crucial part is that
2:32:25 you can't easily reverse a hash to get
2:32:28 the original password back. This is
2:32:31 essential for security. Instead of
2:32:33 storing plain text passwords, which
2:32:35 would be a huge security risk if your
2:32:37 database were breached, you store only
2:32:40 their hashes. Let's install it. We'll
2:32:42 also import JSON web token for creating
2:32:45 JWTs, JSO structures. Let's install that
2:32:49 too. And remember to install the
2:32:51 TypeScript types for these if your
2:32:53 llinter complaints.
2:32:55 Now let's create the register function.
2:32:58 It's an async function because it
2:33:00 performs database operations. This line
2:33:02 destructures the name, email, and
2:33:04 password properties from the incoming
2:33:07 JSON request body. This is a validation
2:33:10 check. If any of the required fields are
2:33:12 missing, it sends a 400 bad request
2:33:16 status with an appropriate error
2:33:18 message. constant existing user equals
2:33:21 await user dotfind one email. This
2:33:25 command queries the database to
2:33:26 ascertain if a user possessing the
2:33:29 specified email address currently
2:33:31 exists. If existing user is found should
2:33:34 an existing user with that email be
2:33:36 located, the system dispatches a 409
2:33:40 conflict status signaling that the email
2:33:43 is presently in use. constant hashed
2:33:46 password equals await brypt. H#ash
2:33:49 password 10. Here brypt gs performs its
2:33:53 function. It processes the plain text
2:33:56 password transforming it into a hash.
2:33:59 The numerical value 10 represents the
2:34:02 salt rounds also known as the cost
2:34:04 factor which dictates the computational
2:34:07 intensity of the hashing operation. A
2:34:10 greater value denotes a slower yet more
2:34:13 cryptographically secure process.
2:34:16 Constant user equals new user with name,
2:34:19 email, password as hashed password. A
2:34:23 new user document is then instantiated
2:34:26 incorporating the provided name, email,
2:34:28 and critically the hashed password.
2:34:31 Await user.save.
2:34:34 This instruction persists the newly
2:34:36 created user document to the MongoDB
2:34:39 database response status 201.json.
2:34:44 Upon a successful registration, the
2:34:46 system returns a 201 created status
2:34:50 accompanied by a JSON response. This
2:34:53 response includes the new user's unique
2:34:55 identifier, name, email, and a
2:34:58 confirmation message. It is imperative
2:35:00 that the hashed password is explicitly
2:35:04 not transmitted back. Catch error. In
2:35:08 the event of any unforeseen error during
2:35:10 this sequence, the error is captured and
2:35:13 the system dispatches a 500 server error
2:35:16 response. Next, let's create the login
2:35:19 function. If not email or not password,
2:35:22 this checks if both email and password
2:35:25 are provided. If missing, it returns a
2:35:28 400 bad request.
2:35:32 constant user equals await user.find one
2:35:35 email. This tries to find a user with
2:35:38 the provided email. If not user, if no
2:35:42 user is found, it sends a 401
2:35:45 unauthorized response with invalid email
2:35:48 or password. The message is kept generic
2:35:51 for security. Constant is password.
2:35:53 valid equals await brypt.compare Compare
2:35:56 password user dot password. Here bryptjs
2:36:01 compares the plain text password with
2:36:04 the stored hashed password securely. If
2:36:07 not is password valid. If passwords
2:36:09 don't match it returns a 401
2:36:12 unauthorized response with invalid email
2:36:15 or password. Constant token equals JWT.
2:36:19 Sign. If credentials are valid, a JSON
2:36:22 web token or JWT is generated. User ID,
2:36:27 user ID is the token's payload, securely
2:36:31 embedding the user's ID. Process env.jwt
2:36:36 secret or your secret key is the secret
2:36:39 key used to sign the token. This must be
2:36:43 strong and kept secret, ideally in an
2:36:46 environment file. Expires in 24 hours.
2:36:50 Means the token expires after one day
2:36:53 requiring reloing.
2:36:55 Session creation constant expires at
2:36:58 equals new date expires at dot set hours
2:37:02 expires at dot get hours plus 24. This
2:37:06 calculates the session expiration for 24
2:37:09 hours later. Constant session equals new
2:37:12 session await session dots save. A new
2:37:16 session document is created and saved.
2:37:19 linking to the user ID, token,
2:37:22 expiration time, and device info from
2:37:24 the request. Response.json.
2:37:28 On successful login, it sends a JSON
2:37:31 response with user details, the token,
2:37:34 and a success message. Catch error. This
2:37:37 catches any unexpected server errors.
2:37:40 Finally, let's create the logout
2:37:42 function. const token recer
2:37:45 authorization replace bearer. This line
2:37:48 attempts to extract the JWT from the
2:37:50 authorization header of the incoming
2:37:52 request. JWTs are typically sent in the
2:37:55 format bearer token string. So replace
2:37:59 beer removes the bearer prefix if token.
2:38:06 It checks if a token was actually found
2:38:08 in the header. Await session delete one
2:38:12 token. class. If a token is present, it
2:38:15 attempts to delete the corresponding
2:38:17 session document from the database. This
2:38:20 effectively invalidates the user's
2:38:22 session. So that token can no longer be
2:38:25 used for authentication.
2:38:27 ResJSON
2:38:29 message logged out successfully.
2:38:33 Regardless of whether a token was found
2:38:35 and deleted, it sends a success message
2:38:38 to the client confirming the logout
2:38:41 action. This is because from the
2:38:43 client's perspective, the user is now
2:38:45 logged out.
2:38:47 Catch error ter
2:38:51 catches any server errors that might
2:38:53 occur during the log out process. Now,
2:38:56 inside your roots folder, let's create a
2:38:59 new file called O.TS.
2:39:02 This file will define the API roots for
2:39:04 our authentication logic. First, we'll
2:39:07 import router from Express. not
2:39:10 expressed directly but the router method
2:39:12 from it and then our register login and
2:39:16 log out functions from our o controller.
2:39:21 Before we continue setting up routes,
2:39:23 let's talk about middleware. We'll
2:39:26 create some essential middleware first.
2:39:29 Middleware functions in Express are like
2:39:31 checkpoints in your application's flow.
2:39:34 They can see and change both the
2:39:36 incoming request and the outgoing
2:39:38 response. They can also decide whether
2:39:41 to continue to the next step or stop the
2:39:44 process. This makes them incredibly
2:39:46 useful for things like checking who a
2:39:49 user is, keeping a record of activities
2:39:52 or dealing with errors. Let's create a
2:39:55 new folder called middleware in your
2:39:57 source directory.
2:39:59 Inside this folder, create two new
2:40:02 files. o.ts
2:40:05 and error handler.ts.
2:40:09 Inside src/ middleware/.ts,
2:40:14 let's import the necessary types and
2:40:16 modules. We need to extend the express
2:40:19 request interface to include a user
2:40:21 property which our middleware will
2:40:24 attach. This declare global block tells
2:40:27 Typescript to extend the existing
2:40:30 express request interface. This way
2:40:34 after our O middleware runs, we can
2:40:37 access recuser which will hold the
2:40:40 authenticated users details without
2:40:42 TypeScript complaining. Now let's create
2:40:45 our O middleware function. This defines
2:40:47 our asynchronous O middleware. Next is a
2:40:51 function that when called passes control
2:40:54 to the next middleware function in the
2:40:56 stack first. This process extracts the
2:40:59 security token from the request. If no
2:41:01 token is found, it immediately sends
2:41:03 back an unauthorized response. The token
2:41:07 is then decrypted and verified using a
2:41:09 secret key. If it's invalid or expired,
2:41:12 an error occurs. Once successfully
2:41:15 decoded, the user's ID from the token is
2:41:18 used to find their record in the
2:41:20 database. If no user matches that ID, an
2:41:23 unauthorized response is sent as the
2:41:26 user account may no longer exist. A
2:41:29 crucial security step then checks if an
2:41:31 active session record still exists for
2:41:34 this user end token. If not, is an
2:41:37 unauthorized response preventing use of
2:41:40 old or invalidated tokens. If everything
2:41:44 is valid, the full user's information is
2:41:47 attached directly to the request, making
2:41:49 it accessible to subsequent parts of the
2:41:52 application. The process then moves on
2:41:54 to the next step in the request handling
2:41:57 chain. Any failures during token
2:42:01 verification or other errors result in
2:42:04 an unauthorized response with a generic
2:42:07 invalid authentication token message.
2:42:11 Next, let's create our error handling
2:42:14 middleware. In the source/m
2:42:16 middleware/error
2:42:18 handler ts file, add this import. We'll
2:42:22 define a custom error class called app
2:42:25 error. This new class app error extends
2:42:28 the standard error class. This allows us
2:42:31 to create custom errors that carry extra
2:42:34 information. It has custom properties
2:42:37 status code status and is operational.
2:42:40 In its constructor, it calls the main
2:42:43 error class to set the error message. It
2:42:46 stores the HTTP status code like 400 or
2:42:50 500. It dynamically sets a status
2:42:54 string, fail for client side errors
2:42:57 which are 400 codes and error for server
2:43:00 side errors which are 500 codes. The
2:43:04 isop operational flag is crucial. It
2:43:07 marks the error as operational meaning
2:43:09 it's an expected error that can be
2:43:12 handled smoothly like invalid input.
2:43:15 This helps distinguish it from
2:43:17 programming errors which are bugs in our
2:43:20 code and might need different handling
2:43:22 like restarting the server. A special
2:43:25 line ensures the stack trace is
2:43:27 correctly captured pointing to where the
2:43:29 app error was created which is helpful
2:43:32 for debugging. Now we'll define our main
2:43:36 error handling middleware.
2:43:39 This function acts as a centralized
2:43:41 error handler. Express recognizes it as
2:43:44 an error handler because it accepts four
2:43:47 arguments. The error itself, the
2:43:49 request, the response and the next
2:43:52 middleware function. If the error is an
2:43:55 instance of our custom app error class,
2:43:58 it means it's an expected operational
2:44:00 error. For these app errors, it sends a
2:44:03 response to the client using the errors
2:44:05 status code and includes the status and
2:44:08 message from our app error object. This
2:44:11 provides specific yet user-friendly
2:44:14 error messages. If the error is not an
2:44:17 app error, is considered an unexpected
2:44:20 error, likely a programming bug or a
2:44:23 system issue. In this situation, our
2:44:26 logger records the full error details
2:44:28 internally for debugging. For unexpected
2:44:32 errors, it sends a generic 500 server
2:44:35 error response to the client. This is a
2:44:38 security best practice as it prevents
2:44:41 sensitive internal application details
2:44:44 from being exposed publicly.
2:44:46 Now that we have our O middleware ready,
2:44:49 let's go back to our src root o.ts file.
2:44:53 First import our o middleware. Then
2:44:56 initialize the express router and define
2:44:58 our authentication routes.
2:45:02 This creates an instance of an express
2:45:04 router. Routers allow us to group
2:45:07 related routes and middleware, making
2:45:09 our application more modular.
2:45:12 Router.post/register.
2:45:15 This defines a post endpoint at
2:45:17 /register. When a request hits this
2:45:19 endpoint, it will be handled by our
2:45:21 register controller function.
2:45:24 Router.post/lo.
2:45:27 Similarly, a post endpoint at /lo
2:45:30 handled by our login controller. router
2:45:33 post log out O log out. This is a post
2:45:38 endp point at /loout.
2:45:41 Notice the O middleware before log out.
2:45:44 This means that before the logout
2:45:46 function is executed, the request will
2:45:48 first pass through our O middleware.
2:45:51 This ensures that only authenticated
2:45:53 users can trigger a logout. This line
2:45:56 sets up a get end point at /me. Its
2:46:00 purpose is to return the details of the
2:46:02 currently logged in user. It uses the O
2:46:06 middleware first. So if the user is
2:46:08 authenticated, the system can then send
2:46:11 back the information in the response.
2:46:14 Now let's bring everything together in
2:46:15 our main src/index.cs
2:46:18 file. First, we need to make sure our
2:46:21 environment variables are loaded. At the
2:46:24 very top of your source/index.ts
2:46:27 ts file import and configure env.
2:46:36 Next, we're going to configure our
2:46:38 middleware. What are middleares? As
2:46:41 discussed earlier, middleware functions
2:46:43 in express are handlers that the system
2:46:47 activates sequentially for every
2:46:49 incoming request. They operate within
2:46:52 the request response cycle, performing
2:46:55 tasks like interpreting data in
2:46:57 requests, managing user authentication,
2:47:00 recording events, setting response
2:47:02 headers, or compressing data. By linking
2:47:05 them together, you can create powerful
2:47:08 processing pipelines for your requests.
2:47:10 We're going to install three widely used
2:47:12 middleware packages. Coors, Helmet, and
2:47:16 Morgan. npm install course, helmet,
2:47:19 Morgan. Now let's import and use this
2:47:22 middleares in your source/index.ts
2:47:26 file typically after the line that
2:47:29 handles JSON body passing. Using app dot
2:47:32 use core enables cross origin resource
2:47:35 sharing or cos for all incoming
2:47:39 requests. In development your front end
2:47:42 and back end often run on different
2:47:44 ports which browsers block by default
2:47:47 due to security. Course allows your
2:47:50 front end to send requests to your back
2:47:52 end. For production, you would typically
2:47:55 configure course to permit requests only
2:47:58 from your specific front-end domain.
2:48:01 Using app do use helmet is a security
2:48:04 middleware that helps fortify your
2:48:06 express applications by setting various
2:48:09 HTTP headers. It provides protection
2:48:12 against common web vulnerabilities like
2:48:15 cross-sight scripting and clickjing.
2:48:19 Using app dot use morganddev activates
2:48:22 an HTTP request logger middleware. It
2:48:25 records details about incoming HTTP
2:48:28 requests to your console. The dev
2:48:31 argument specifies a concise color-coded
2:48:34 format that is easy to read during
2:48:37 development. Finally, right before your
2:48:39 start server call, we'll initiate our
2:48:41 authentication roads and also include
2:48:44 our error handler.
2:48:50 Let's continue defining our mongus
2:48:52 models. Now let's create the activity ts
2:48:55 file in your src models folder. This
2:48:59 model will define the structure for
2:49:00 login user activities. import mongus
2:49:04 document and schema. Then define our I
2:49:08 activity interface. This interface lays
2:49:11 out the required properties for an
2:49:13 activity log entry. User ID. This is a
2:49:17 unique identifier that connects this
2:49:19 activity directly to a specific user
2:49:22 type. A text string indicating the
2:49:24 activities category. For example,
2:49:27 meditation. Name. A simple
2:49:30 understandable name for the activity.
2:49:33 Description. An optional text field for
2:49:36 more details about the activity.
2:49:39 Duration. An optional number
2:49:40 representing how long the activity
2:49:43 lasted. Time stamp. the exact date and
2:49:46 time the activity was recorded. First,
2:49:49 the user ID is defined. This is a
2:49:52 required unique identifier that refers
2:49:56 to the user model. A database index is
2:49:59 also created on this field which
2:50:01 significantly speeds up any searches or
2:50:04 sorting operations based on the user's
2:50:06 ID. Next, the type field is a required
2:50:10 text string. It includes an enome
2:50:13 feature which is very important here.
2:50:15 This restricts the allowed values for
2:50:17 type to a predefined list such as
2:50:20 meditation or exercise. This ensures
2:50:24 that all data stored is consistent and
2:50:26 prevents any invalid activity types from
2:50:30 being entered. The name of the activity
2:50:32 is a required text string. There's an
2:50:35 optional text string available for a
2:50:37 description of the activity. The
2:50:40 duration is an optional number field
2:50:42 with a minimum value validator to ensure
2:50:45 that the duration cannot be a negative
2:50:48 number. The time stamp field
2:50:50 automatically sets to the current date
2:50:52 and time if no value is specifically
2:50:55 provided. Additionally, the overall
2:50:58 entry includes a mongus option that
2:51:00 automatically adds both a created art
2:51:03 and an updated art field. Finally, we'll
2:51:07 add another index to specifically
2:51:09 optimize queries for a user's activities
2:51:12 over time. This creates a compound
2:51:15 index. It means that any database
2:51:17 queries which first filter by the user
2:51:20 ID and then sort the results by time
2:51:23 stamp in descending order showing the
2:51:25 most recent activities first will be
2:51:28 executed very efficiently. After all of
2:51:31 this is set up, we then export the
2:51:34 activity model. Next, let's create the
2:51:36 chat.ts file in your src models folder.
2:51:41 This model will store our AI chat
2:51:43 session messages. Import mongus schema
2:51:47 and document. We'll define two
2:51:49 interfaces. It chat message for
2:51:52 individual messages and Ihat session for
2:51:55 the entire chat session. This iart
2:51:58 message interface defines the structure
2:52:00 of a single message within a chat
2:52:02 session. It includes the role, user or
2:52:05 assistant, the content of the message,
2:52:08 it timestamp, and an optional metadata
2:52:11 object which can store additional
2:52:13 information relevant to AI responses
2:52:16 such as the technique used, a goal or
2:52:19 progress, which can be an array of
2:52:21 missed types. Now, the IAT session
2:52:24 interface. This I chat session interface
2:52:27 defines the structure of a complete chat
2:52:29 session document extending document to
2:52:32 get mongus properties. It holds a unique
2:52:35 session ID and an array of Ihat message
2:52:39 objects. Next, we define the chat
2:52:42 message schema for individual messages.
2:52:45 Ro the role field is a required string
2:52:47 that must be either user or assistant.
2:52:50 This enforces valid message senders. The
2:52:53 message content is a required string.
2:52:55 Time stamp. The time stamp for when the
2:52:58 message was created. Metadata. This
2:53:00 defines the structure of the optional
2:53:02 metadata subdocument. Technique string
2:53:06 go string progress schema types mixed.
2:53:10 An array that can hold elements of any
2:53:12 MongoDB BSON type. This is useful for
2:53:15 flexible data that might not have a
2:53:17 fixed structure. Now we define the chat
2:53:20 session schema for the overall chat
2:53:24 session. Session ID, a unique string
2:53:28 identifier for each chat session. Chat
2:53:30 message schema. This is an array of
2:53:33 subdocuments where each subdocument
2:53:35 adheres to our chat message schema. This
2:53:38 embeds the messages directly within the
2:53:40 chat session document. timestamps, ads
2:53:44 created at and updated at to track when
2:53:48 the chat session was created and last
2:53:50 updated. Finally, we export everything.
2:53:54 Lastly, let's create the mood.ts schema
2:53:57 for tracking user moods. We'll import
2:54:00 mongus schema and document. Then define
2:54:03 our immood interface. This IMOD
2:54:06 interface defines the properties of a
2:54:08 mood entry. Now we'll define the mood
2:54:11 schema. User rate links the mood entry
2:54:14 to a specific user. Score. The mood
2:54:16 score is a required number strictly
2:54:19 constrained to be between zero and 100
2:54:21 using min and max validators. Note an
2:54:24 optional string note about the mood.
2:54:27 Time stamp. The time stamp default to
2:54:29 the current time. Timestamps true. Add
2:54:33 created at and updated at fields. Then
2:54:37 we'll add an index to optimize queries
2:54:39 for a user's mood entries. This index is
2:54:42 similar to the one in activity schema
2:54:45 optimizing queries that filter by user
2:54:47 ID and sort by time stamp in descending
2:54:50 order. Finally, we export the mood
2:54:53 model. Now let's go back to our
2:54:56 controllers folder and create a new file
2:54:58 called activity controller.ts.
2:55:02 This file will contain the logic for
2:55:04 logging user activities. We'll start by
2:55:07 importing the necessary types from
2:55:09 express our activity model and our
2:55:12 logger utility. Now let's define our log
2:55:16 activity function. This is an async
2:55:18 function that takes wreck rest and next
2:55:21 for error handling. We destructure the
2:55:24 activity details from the request body.
2:55:27 Note difficulty and feedback were in
2:55:30 your destructuring but not in your I
2:55:32 activity interface or activity schema.
2:55:35 If you intend to use them, ensure you
2:55:37 update your model accordingly. This is
2:55:39 where the O middleware comes in handy.
2:55:42 If the user is authenticated, our o
2:55:44 middleware would have attached the user
2:55:46 object to rake dot user. We safely
2:55:50 access the chat ID from it. A basic
2:55:53 check to ensure a user is authenticated.
2:55:56 If not, it returns a 401 unauthorized
2:55:59 response. A new activity document is
2:56:02 created using the data from the request
2:56:04 body and the authenticated user ID. The
2:56:08 time stamp is set to the current time.
2:56:11 Await activity. Save. The new activity
2:56:13 document is saved to the MongoDB
2:56:15 database. Created status is returned to
2:56:17 the client along with the success flag
2:56:19 and the saved activity data. If any
2:56:22 error occurs during this process is
2:56:24 caught and passed to our error handler
2:56:27 middleware using next error. Next, let's
2:56:30 create the mood controller.ts
2:56:33 file in your controllers folder. This
2:56:35 will handle the logic for creating mood
2:56:38 entries. We'll import the necessary
2:56:40 types from express, our mood model, and
2:56:43 our logger utility. Now, let's define
2:56:46 our create mood function. This is an
2:56:49 async function designed to create a new
2:56:52 mood entry. We structure score and note
2:56:55 and potentially context and activities
2:56:57 if your iMood and mood schema are
2:57:00 updated to include them from the request
2:57:02 body consterct
2:57:05 user
2:57:07 ID. We retrieve the authenticated user
2:57:10 ID from the rec do user object which is
2:57:12 populated by our or middleware. If user
2:57:16 eyid a quick check to ensure the user is
2:57:18 authenticated returning a 401 if not a
2:57:22 new mood document is created with the
2:57:24 user ID score note and the current time
2:57:28 stamp await mood save. The new mood
2:57:32 entry is saved to the database. A log
2:57:34 message is recorded. A 201 created
2:57:37 status is returned along with the
2:57:39 success status and the saved mood data.
2:57:42 Any errors during this process are
2:57:44 passed to our error handler middleware.
2:57:47 Next, we'll work on the chat controller,
2:57:49 but we'll come back to that file in a
2:57:51 second. Let's move to our ingest folder
2:57:54 and create a new file called AI
2:57:57 functions.ts.
2:57:59 This is where we'll define the functions
2:58:00 for our AI agent.
2:58:03 All right, let's get our AI functions
2:58:06 set up. First, within the AI
2:58:08 functions.ts ts file we need to import
2:58:12 the ingest library. This is our core
2:58:14 library for defining AI functions. So
2:58:18 we'll import ingest. Next we import
2:58:21 Google generative AI. This is the SDK
2:58:24 that allows us to communicate with
2:58:26 Google's Gemini AI models. Before we use
2:58:31 Google Generative AI, we need to make
2:58:33 sure the SDK is installed. Let's quickly
2:58:36 check the Gemini Docs website to confirm
2:58:39 the package name and installation
2:58:41 command. There you'll see the
2:58:43 installation command. Copy this command.
2:58:47 Now switch back to your terminal, paste
2:58:49 the command and press enter to install
2:58:52 the package. This ensures our project
2:58:54 has the necessary library to interact
2:58:56 with Gemini. Once the installation is
2:58:59 complete, return to a functions.ts.
2:59:04 Now we'll initialize our Google
2:59:06 generative AI instance. This instance
2:59:09 requires an API key to authenticate our
2:59:12 requests to the Gemini API. For
2:59:15 security, we'll retrieve this key from
2:59:17 our environment variables. So we'll
2:59:20 create a constant named gen AI which
2:59:22 equals a new Google generative AI
2:59:25 instance with the API key set to
2:59:28 process.env.jemini
2:59:31 API key. To get your Gemini API key,
2:59:34 open your browser and search for get
2:59:37 Gemini API key. Click on the link that
2:59:40 directs you to a studio.google.com/appi
2:59:45 key or a similar Google AI studio API
2:59:49 key management page. On that page, click
2:59:52 on create API key or get API key and
2:59:57 choose your existing project. Once the
3:00:00 API key is generated, copy it to your
3:00:03 clipboard. Now, return to your backend
3:00:05 directory in your project, you'll need
3:00:07 to create av file if you don't already
3:00:10 have one. Open this env file and add the
3:00:14 copied API key like this. Gemini API key
3:00:18 equals your copied API key. Remember to
3:00:22 replace your copied API key with the
3:00:25 actual key you just copied. This keeps
3:00:28 your sensitive API key safely out of
3:00:31 your codebase. With our AI setup
3:00:33 complete, first let's define our initial
3:00:37 AI function process chat message. This
3:00:41 function will be entirely responsible
3:00:43 for both handling and analyzing incoming
3:00:46 chat messages utilizing the Gemini AI.
3:00:50 This function will also be exported. The
3:00:53 ID is process chat message which gives
3:00:56 this function a unique identifier within
3:00:59 the ingest system. The data field
3:01:02 specifies some important metadata for
3:01:05 our function. This includes a display
3:01:08 name process chat message and a list of
3:01:11 steps it will perform. The analyze mood
3:01:14 step specifically indicates that this
3:01:16 function will involve a process of mood
3:01:18 analysis. The async event is the core
3:01:22 asynchronous function that ingest will
3:01:25 automatically trigger when an event that
3:01:28 matches this function's criteria takes
3:01:30 place. When triggered, it receives an
3:01:33 event object which contains data from
3:01:36 the initial trigger and a step object
3:01:39 which is used for running any substeps
3:01:41 within the functions process. It begins
3:01:44 by extracting key information from the
3:01:46 incoming event data. the message itself,
3:01:49 the full conversation history, the
3:01:52 current memory state, the user's goals,
3:01:54 and any system prompts. Importantly, if
3:01:57 the memory or goals are not explicitly
3:01:59 provided, they default to a structured
3:02:02 empty memory or an empty list of goals.
3:02:05 It then logs that it is processing the
3:02:08 chat message, including the message
3:02:10 content and how long the conversation
3:02:13 history is. Next, it runs a crucial
3:02:16 substep called analyze message. Within
3:02:20 this step, it selects the Gemini 2.0
3:02:23 flash AI model. It builds a detailed
3:02:26 prompt for the AI. This prompt instructs
3:02:28 the AI to analyze the therapy message
3:02:31 and provide insights. It explicitly
3:02:33 demands that the AI return only a valid
3:02:37 JSON object with no extra formatting or
3:02:40 text. The prompt includes the user's
3:02:43 message along with the context of their
3:02:45 current memory and goals. It also
3:02:48 clearly defines the required JSON
3:02:50 structure for the AI's output,
3:02:53 specifying fields like emotional state
3:02:55 as a string, themes as an array of
3:02:58 strings, risk level as a number,
3:03:01 recommended approach as a string, and
3:03:03 progress indicators as an array of
3:03:05 strings. The system sends this prompt to
3:03:08 the AI model and waits for its response.
3:03:12 Once the response arrives, the raw text
3:03:14 is extracted and logged internally for
3:03:17 debugging. The extracted text is then
3:03:20 cleaned by removing any code block
3:03:22 indicators or extra spaces, ensuring it
3:03:25 can be correctly interpreted as a
3:03:27 structured JSON object. This clean text
3:03:30 is then passed into a structured
3:03:32 analysis. This successfully passed
3:03:35 analysis is also logged. Finally, this
3:03:38 past analysis is returned from the
3:03:41 analyze message step. Should any error
3:03:44 occur during this specific AI analysis,
3:03:47 the error is logged, but instead of
3:03:50 stopping, the function returns a default
3:03:53 neutral analysis. This ensures the
3:03:55 process can continue gracefully.
3:03:57 Following the analysis, it runs an
3:04:00 update memory substep. In this step, the
3:04:04 session's internal memory is updated
3:04:06 based on the results of the analysis. If
3:04:09 the analysis provided an emotional
3:04:11 state, it's added to the user's profile
3:04:13 in memory. If themes were identified,
3:04:17 they are added to the session's
3:04:19 conversation context. If a risk level
3:04:22 was provided, the user's profile risk
3:04:24 level in memory is updated. The modified
3:04:27 memory object is then returned. Next,
3:04:31 there's a check for high risk. If the
3:04:34 risk level identified in the analysis is
3:04:36 greater than four, it triggers a trigger
3:04:39 risk alert substep.
3:04:41 Within this alert step, a warning is
3:04:44 logged internally indicating that a high
3:04:46 risk level was detected in the chat
3:04:49 message along with the message and the
3:04:52 specific risk level. Then it moves on to
3:04:55 a generate response substep. Here it
3:05:00 again uses the Gemini 2.0 Flash AI
3:05:04 model. It constructs another
3:05:06 comprehensive prompt for the AI. This
3:05:08 prompt incorporates the systems initial
3:05:11 instructions followed by a request to
3:05:14 generate a therapeutic response based on
3:05:16 the message, the analysis, the updated
3:05:19 memory, and the user's goals. It guides
3:05:23 the AI to provide a response that
3:05:26 addresses immediate emotional needs.
3:05:28 uses appropriate therapeutic techniques,
3:05:31 shows empathy and understanding,
3:05:34 maintains professional boundaries, and
3:05:36 considers safety and well-being. The
3:05:39 AI's generated response test is
3:05:42 extracted and logged. This generated
3:05:44 response text is then returned from the
3:05:47 generate response step. If an error
3:05:50 occurs during this specific response
3:05:53 generation, the error is locked, but it
3:05:56 returns a default supportive message
3:05:59 instead of halting the process. Finally,
3:06:03 the entire process chat message function
3:06:06 upon successful execution of all its
3:06:08 steps returns an object containing three
3:06:11 key pieces of information. the AI's
3:06:14 generated response, the full analysis
3:06:16 object, and the updated memory state. In
3:06:20 case any unexpected error occurs
3:06:22 anywhere within the main processing
3:06:24 block of process chat message, a
3:06:27 comprehensive outer catch block handles
3:06:29 it. This block logs the error, including
3:06:32 the original message content, and then
3:06:35 returns a complete default response.
3:06:38 This default response includes a
3:06:40 supportive message, a standard neutral
3:06:43 analysis object, and the original memory
3:06:45 state from the event data, ensuring that
3:06:48 the system always provides a stable and
3:06:51 consistent output even in error
3:06:54 scenarios. Okay, we're now implementing
3:06:57 the analyze therapy session function
3:07:00 which is located in the same AI
3:07:03 functions. TS file. This function is
3:07:06 designed to analyze the content of a
3:07:09 therapy session. This is the analyze
3:07:12 therapy session function. It has a
3:07:14 unique identifier of analyze- theapy-
3:07:18 session. This function is specifically
3:07:21 triggered by an event named therapy/
3:07:25 session.created.
3:07:28 It operates asynchronously receiving an
3:07:30 event object which contains data from
3:07:33 the trigger and a step object used for
3:07:36 running smaller distinct operations dot
3:07:40 created. It operates asynchronously
3:07:42 receiving an event object which contains
3:07:46 data from the trigger and a step object
3:07:49 used for running smaller distinct
3:07:52 operations.
3:07:53 inside its main processing block. It
3:07:56 begins by running a substep called get
3:07:58 session content. This step's sole
3:08:01 purpose is to retrieve the sessions
3:08:03 content which comes from either therapy
3:08:06 notes or a transcript found within the
3:08:08 event data. Next, it executes a crucial
3:08:12 substep named analyze with Gemini. This
3:08:15 step constructs a detailed prompt for
3:08:18 the artificial intelligence. The prompt
3:08:21 instructs the Gemini 2.0 Flash AI model
3:08:25 to analyze the provided session content
3:08:29 and extract insights. It explicitly
3:08:31 requests specific outputs, the key
3:08:34 themes and topics discussed, an analysis
3:08:37 of the emotional state, any potential
3:08:40 areas of concern, recommendations for
3:08:42 follow-up actions, and clear progress
3:08:45 indicators.
3:08:47 It also firmly directs the AI to format
3:08:50 its entire response as a JSON object.
3:08:53 This constructed prompt is then sent to
3:08:55 the AI model. Upon receiving the AI's
3:08:59 response, the raw results are extracted.
3:09:02 The response text is trimmed of any
3:09:05 extra spaces. This text is then
3:09:07 immediately passed into a JSON object.
3:09:10 Crucially, if the AI's text response
3:09:13 happens to be empty, it defaults to
3:09:16 passing an empty JSON object to prevent
3:09:19 any processing errors. The resulting
3:09:21 analysis now in a structured JSON format
3:09:25 is what this analyze with Gemini step
3:09:28 returns. Following the analysis, it runs
3:09:31 a store analysis substep. Within this
3:09:34 step, a message is logged confirming
3:09:37 session analysis stored successfully.
3:09:40 the analysis data itself is returned
3:09:42 from this storage step. Then there's a
3:09:46 conditional check. If the areas of
3:09:48 concern property within the analysis
3:09:51 exists and contains any items indicating
3:09:54 that concerns were identified, it
3:09:56 triggers an alert. This initiates a
3:09:59 substep called trigger concern alert.
3:10:03 Inside this alert step, a warning is
3:10:05 logged internally stating concerning
3:10:08 indicators detected in session analysis.
3:10:11 This log includes the session's unique
3:10:14 identifier from the event data and the
3:10:17 specific concerns found in the analysis.
3:10:20 A note indicates that this is where
3:10:22 further custom logic for handling these
3:10:25 alerts would be implemented. Finally,
3:10:28 after all these operations, the entire
3:10:30 analyze therapy session function returns
3:10:33 an object. This object contains a
3:10:36 message session analysis completed along
3:10:39 with the complete analysis data. In case
3:10:42 any unexpected error occurs anywhere
3:10:44 within the main processing block of
3:10:46 analyze therapy session, a comprehensive
3:10:49 outer catch block handles it. This block
3:10:52 logs the full error details stating
3:10:55 error in therapy session analysis and
3:10:57 then rethrows that error. Rethrowing the
3:11:00 error ensures that it can be caught and
3:11:03 managed by higher level error handling
3:11:05 mechanisms elsewhere in the application
3:11:09 preventing an unhandled crash. So let's
3:11:12 go ahead and export the process chart
3:11:15 function and also export the analyze
3:11:18 therapy session function.
3:11:21 Then we move back to the main functions
3:11:24 file. Right at the top of this file, we
3:11:28 are going to import the artificial
3:11:30 intelligence functions that we just
3:11:32 created. We'll bring in functions as AI
3:11:35 functions from the AI functions file.
3:11:38 Then we get rid of everything else there
3:11:41 and use a special operator to spread or
3:11:44 export everything from the AI function.
3:11:48 Now back in the chat.ts file in it we're
3:11:52 going to import all the necessary
3:11:54 libraries and components. This includes
3:11:57 request and response from express chat
3:12:00 section from chat and Google Gemini AI
3:12:04 from Gemini AI. We'll also import V4
3:12:08 from UUID V4. UIDs are useful for
3:12:12 creating unique keys in databases,
3:12:15 session identifiers and more. Then we
3:12:18 are going to import the logger as well
3:12:21 from the utils function. We'll bring in
3:12:24 ing inest from ingest index and user
3:12:28 from the models. We also import the type
3:12:31 object from mongus. Next we define the
3:12:34 create chat session function. This
3:12:37 function handles creating a new chat
3:12:39 session. It first checks if the user is
3:12:42 authorized. If not, it returns an
3:12:45 unauthorized message. Then it finds the
3:12:48 user in the database. If the user isn't
3:12:51 found, it returns a user not found
3:12:54 message. It then generates a unique
3:12:56 session identifier. A new chat session
3:12:59 is created with this identifier. The
3:13:02 user's ID, the start time, and an active
3:13:05 status, and it's saved to the database.
3:13:08 Finally, a chat session created
3:13:10 successfully message is returned with
3:13:12 the new sessions ID. Any errors during
3:13:15 this process are logged and result in a
3:13:18 server error message. Then we work on
3:13:21 the send message function. This function
3:13:24 handles sending a message within an
3:13:26 existing chat session. It extracts the
3:13:29 session ID, the message, and the user's
3:13:32 ID. It logs the message processing. It
3:13:35 then finds the chat session for that
3:13:37 user. If the session isn't found or if
3:13:40 the user isn't authorized for that
3:13:42 session, it returns an error. It then
3:13:46 creates an inest event for message
3:13:48 processing, including the message
3:13:51 history and the default system prompt
3:13:53 for the AI therapist. This event is sent
3:13:57 to inest. The system then generates an
3:14:00 analysis prompt for the Gemini AI model
3:14:03 asking for insights like emotional state
3:14:05 and themes formatted as a JSON object.
3:14:09 The AI's response is received, cleaned,
3:14:13 and passed into an analysis. This
3:14:15 analysis is logged. Next, a response
3:14:18 prompt is created for the AI,
3:14:21 incorporating the system prompt,
3:14:23 message, analysis, memory, and goals,
3:14:26 guiding the AI to generate a therapeutic
3:14:29 response. The AI's response is received
3:14:32 and logged. The user's message and the
3:14:34 AI's response are then added to the
3:14:37 session's history with the AI's response
3:14:39 also including the analysis and progress
3:14:42 metadata. The updated session is saved
3:14:46 and a success message is logged.
3:14:49 Finally, the system returns the AI's
3:14:51 response, the analysis and progress
3:14:54 metadata. Any errors during this process
3:14:57 are logged and result in a server error
3:15:00 message.
3:15:02 Next is the get session history
3:15:04 function. This function retrieves the
3:15:06 full message history for a given chat
3:15:09 session. It gets the session ID and user
3:15:12 ID. It checks if the user is authorized
3:15:15 and if the session exists for that user.
3:15:18 If not, it returns session not found or
3:15:22 unauthorized.
3:15:24 If successful, it returns the sessions
3:15:26 messages start time and status. Any
3:15:30 errors are logged and result in a server
3:15:32 error message. Next is the get chat
3:15:35 history function. This function
3:15:37 retrieves the message history for a
3:15:39 specific chat session. It gets the
3:15:42 session ID and user ID. It finds the
3:15:45 session and verifies the user's
3:15:47 authorization.
3:15:48 If the session isn't found or the user
3:15:51 is unauthorized, it returns an error.
3:15:54 Otherwise, it returns only the messages
3:15:56 from the session. Any errors are logged
3:15:59 and result in a server error message.
3:16:03 Now that we are done creating all these
3:16:05 functions inside the chat controller, we
3:16:08 are going to move to the route folder
3:16:10 and create a file called activity dot
3:16:13 typescript. In this file, we are going
3:16:16 to import express or
3:16:20 log activity.
3:16:22 Then we are going to start writing our
3:16:24 root folder activity file. So we are
3:16:27 going to initialize the router using the
3:16:30 express router. Then we are going to use
3:16:32 the router and have the router dot use
3:16:36 oorthth. We're going to have the
3:16:38 router.log
3:16:40 which is going to log the activity. And
3:16:43 then we export the first router. Next,
3:16:47 let's create the mood.ts file in the
3:16:50 routes folder. This file will manage all
3:16:53 the web addresses related to user mood.
3:16:56 Similar to the activity file, we import
3:16:59 the router tool. our o middleware for
3:17:02 security and our create mood controller
3:17:04 function. The line router dot use is
3:17:07 important. It secures all mood related
3:17:10 web addresses with authentication. Then
3:17:14 router.post/defes
3:17:16 a post endpoint at the main path of this
3:17:18 router. So when a post request is sent
3:17:22 to / ai/mood,
3:17:24 our create mood controller function will
3:17:26 activate. Finally, we export this
3:17:29 router. We also create the chat.ts file
3:17:33 for the route. Over here, we're
3:17:35 basically going to do a very similar
3:17:37 thing to what we did in activities.
3:17:40 We're going to import express
3:17:43 and also import all the controller
3:17:45 functions from the chat controller file
3:17:48 like create chat section, send message,
3:17:52 get session history, get chat section,
3:17:55 and get chat history. We're going to
3:17:57 import O middleware as well. We're going
3:18:00 to initialize the router and create a
3:18:02 post and get request on this endpoint.
3:18:05 This script sets up the web addresses
3:18:08 for all chat related features. It
3:18:11 imports express along with all the chat
3:18:14 controller functions like creating
3:18:16 sessions, sending messages and getting
3:18:19 history. It also imports the O
3:18:22 middleware for security. A router is
3:18:25 initialized and the O middleware is
3:18:28 applied to all routes defined within
3:18:31 this router. This means every chat
3:18:34 related request will first check for
3:18:36 user authentication. A post request to
3:18:39 slash sessions will create a new chat
3:18:42 session. A get request to slash
3:18:46 sessions/ a specific session ID will
3:18:49 retrieve details for that chat session.
3:18:52 A post request to slash sessions slash a
3:18:56 specific session ID slash messages will
3:18:59 send a new message within that session.
3:19:01 And a get request to slash sessions
3:19:04 slash a specific session ID/history
3:19:08 will retrieve the full message history
3:19:10 for that session. Finally, this
3:19:13 configured router is exported making
3:19:16 these chat functionalities available
3:19:18 through the applications API. All right.
3:19:21 So now that we finished creating the
3:19:22 chat routt, we are going to head back to
3:19:24 the main index.typescript
3:19:27 file, we'll scroll down to where we
3:19:29 configure the applications roots,
3:19:32 specifically where we see the app dot
3:19:34 use root statements. Here we will import
3:19:37 the rest of our newly defined roots.
3:19:40 Then we will integrate them into the
3:19:42 application's main setup. Once that's
3:19:45 done, we can finally begin testing all
3:19:47 these new functionalities using Echo
3:19:50 API. We'll now dive deeper into testing
3:19:53 our chat functionalities, then explore
3:19:56 how Echo API's AI powered documentation
3:19:59 and test case generation features can
3:20:02 make our development workflow even more
3:20:04 efficient. First, as always, let's
3:20:08 ensure our backend server is ready. If
3:20:11 it isn't, open your terminal. Navigate
3:20:14 to the AI therapist agent dev/backend
3:20:18 directory and start the server using npm
3:20:21 start. You should see logs confirming
3:20:24 the server is listening on port 3001 and
3:20:27 the ingest endpoint is available. We'll
3:20:30 open the controller folder and select
3:20:32 the O controller. Copy the register
3:20:35 function and paste it into Eco API's AI
3:20:39 intelligent extraction API documentation
3:20:42 tool. To do this, click the create
3:20:45 button, then AI extract API docs and
3:20:50 paste the function there. Echo API will
3:20:53 automatically extract the API
3:20:55 specification from the code, generating
3:20:58 an endpoint ready for use. After a short
3:21:01 wait, click save. You'll see a post
3:21:04 request with a raw body message. This is
3:21:07 the exact raw body message required to
3:21:10 register a user matching the function we
3:21:12 created. We'll first register a user,
3:21:15 then log in and use that authentication
3:21:18 information to test the app's remaining
3:21:21 features. Click the gear icon next to
3:21:25 the default environment and add our
3:21:27 local host port 3001.
3:21:31 Then save it. This will automatically be
3:21:34 added to every request since our
3:21:36 endpoint isn't yet hosted on a
3:21:39 production server. We'll start with the
3:21:41 registration route. Copy the or register
3:21:44 URL and append it to the local host
3:21:47 endpoint. Next, we'll use Eco API's AI
3:21:50 generate fake data feature. Copy the
3:21:53 object, paste it into the dialogue box
3:21:55 at the bottom right, and click the
3:21:57 rocket icon.
3:22:01 Echo API generates fake data which you
3:22:04 can copy and paste into the body object
3:22:07 to register a new user. Clicking send
3:22:10 now registers a new user.
3:22:14 Let's create an endpoint for logging in.
3:22:17 We follow the same procedure. Click
3:22:19 create.
3:22:24 Copy the login function from the O
3:22:26 controller.
3:22:32 Paste it into the AI extract API docs
3:22:35 and click generate. Echo API
3:22:38 automatically creates the API
3:22:40 specification. After saving, copy the
3:22:43 email used for registration.
3:22:54 paste it into the login objects email
3:22:56 field and add the password.
3:23:05 Clicking send now logs in our user
3:23:08 returning their user ID, name, email,
3:23:12 token, and a success message. We'll
3:23:15 create a post response script to set a
3:23:18 token to the responses token. This
3:23:20 becomes a global variable accessible for
3:23:23 any protected route avoiding manual
3:23:26 token copying for each request.
3:23:29 Next, let's use Echo API's single test
3:23:32 feature. Under the cases tab, the AI
3:23:35 powered test generation can create
3:23:38 various tests including API
3:23:40 specifications and compliance checks.
3:23:43 Click generate test cases. Echo API
3:23:46 provides all the parameters for root
3:23:48 testing. This is a very cool and handy
3:23:51 feature. We won't apply and test it now,
3:23:54 but you can. Echo API also has a neat
3:23:58 one-click complete doc feature. We'll
3:24:00 use this to create full documentation
3:24:02 for our login API.
3:24:12 After a short wait, click save and
3:24:15 share. On this page, clicking the share
3:24:18 icon and opening a new tab reveals Echo
3:24:21 API's clean and beautiful documentation
3:24:24 which is highly readable for developers,
3:24:26 enhancing their experience. Back to our
3:24:29 code, copy the function to log an
3:24:31 activity. paste it into the AI extract
3:24:35 API docs
3:24:41 and generate an API spec.
3:24:47 Once done, we'll have the required
3:24:50 object to generate an activity. We'll
3:24:53 run our post script to get hold of the
3:24:55 token. We'll use the AI generate fake
3:24:58 data feature to create some data. Copy
3:25:02 the object, paste it into the text area,
3:25:04 and click the rocket icon. We copy the
3:25:07 response and use it to replace what's in
3:25:09 our object. Now we have cool data
3:25:12 generated by Echo API. In the headers,
3:25:16 we'll pass the token we just set
3:25:18 globally in the post request. Okay,
3:25:21 we're addressing an undefined variable
3:25:24 error, which suggests our post script
3:25:26 isn't saving the security token
3:25:28 correctly. When we ran the script, it
3:25:31 indicated that a variable named response
3:25:33 was already declared. This was the
3:25:35 problem. So, we've changed that variable
3:25:38 name to rest and run the post script
3:25:43 again. Now, we see a 200 message, which
3:25:46 means the script is working correctly.
3:25:49 Back in the log activity header, we can
3:25:52 confirm the token is now available.
3:25:55 Let's go ahead and run the request. Now
3:25:58 we now have a response from our server.
3:26:01 Echo API has a great feature called
3:26:03 batch update description. We'll use this
3:26:06 for our data. Clicking batch update
3:26:10 value and description and then update
3:26:13 values updates them. Clicking complete
3:26:16 description. Save to sync API body.
3:26:30 We can now save the schema with the
3:26:32 generated values. Let's create our last
3:26:35 endpoint to record a mood. Click create.
3:26:38 Then use the AI extract API docs
3:26:41 feature. paste our create mood function
3:26:44 inside it and generate.
3:26:50 Once complete, we'll test it out.
3:26:54 We provide the expected values, a score,
3:26:57 the note
3:26:59 context and the activity.
3:27:12 Then move to the headers and select
3:27:14 authorization. Since we already have a
3:27:16 post script updating the token globally,
3:27:19 we'll use bearer followed by the token
3:27:21 in curly brackets. send the request and
3:27:25 we see success as true with data
3:27:28 returned. Things are looking good.
3:27:33 A single test isn't always enough.
3:27:35 Sometimes you need a sequence of tests
3:27:37 that depend on each other. On the main
3:27:40 sidebar, let's click on the tests tab.
3:27:43 And let's create a new test case, naming
3:27:46 it creating mode.
3:27:50 Here
3:27:53 we'll add an HTTP request step. We
3:27:57 select the user login API and create
3:27:59 mood API. Okay. We'll click on the add
3:28:02 by copy button. When we then click on
3:28:05 the edit button for the user login API
3:28:08 endpoint, we can confirm that our post
3:28:11 script is still active. Now let's move
3:28:14 back to the mood API. Under the header
3:28:17 section, we'll add an authorization
3:28:20 entry and provide the bearer token using
3:28:23 the global token we set with the post
3:28:26 script. Save that. We realize we forgot
3:28:29 to add a body object. So, let's return
3:28:31 to the edit API model and add a body for
3:28:35 the mode. Score 7 note note contest
3:28:39 context and activities activities. We'll
3:28:43 save it one more time and run the test.
3:28:46 The test fails. The problem is we forgot
3:28:49 to add the URL to the mood endpoint. So
3:28:52 let's go back to the mood API edit model
3:28:55 and add it.
3:28:58 Run the test all over again. And this
3:29:00 time we have a passed test. Now let's
3:29:03 remove the authorization header.
3:29:07 Save it and run the test again. This
3:29:10 time the test fails. This is because the
3:29:13 create mood API is dependent on the user
3:29:16 being logged in and authorized. One cool
3:29:19 addition to Echo API is the AI generate
3:29:22 script feature. To access this, go to
3:29:25 the prerequest tab, add a new task, and
3:29:28 select processing script. From there,
3:29:31 you can use the generate script dialogue
3:29:33 to instantly create a script using AI.
3:29:37 This feature allows users to input
3:29:39 natural language descriptions of their
3:29:41 scenario requirements and receive
3:29:44 readytouse script code. It's especially
3:29:46 useful for quickly generating custom
3:29:49 scripts for tasks like extracting and
3:29:52 setting variables, performing encryption
3:29:54 or decryption, and asserting response
3:29:58 bodies. Next, we have the AI generate
3:30:01 function feature. Under the advanced
3:30:04 tab, go to public resources and click on
3:30:07 functions. When you click the create
3:30:09 button, you can generate functions using
3:30:13 natural language prompts like the
3:30:14 examples provided. The AI generate
3:30:17 function feature enables users to
3:30:20 describe functional requirements in
3:30:22 plain language and receive clean
3:30:24 standalone JavaScript functions
3:30:26 generated by AI with no third party
3:30:29 dependencies. These functions are
3:30:32 designed to be reusable and help
3:30:34 developers rapidly implement specific
3:30:37 logic. This brings us to the end of
3:30:39 testing our API. Try Echo API now. The
3:30:44 link is in the description. All right,
3:30:47 let's continue building our application.
3:30:49 We are going to start by creating new
3:30:51 API routts for the login, register,
3:30:54 session, and chat functionalities.
3:30:57 First, let's navigate to the app
3:31:00 directory. Right click on it and select
3:31:03 new folder. We'll name this folder API.
3:31:07 Now, right click on the newly created
3:31:10 API folder and select new folder. Again,
3:31:14 this one will be named O. Inside the O
3:31:17 folder, we need to create three new
3:31:19 folders. Login, register, and session.
3:31:38 Now within each of these new folders,
3:31:41 login, register, and session, we are
3:31:44 going to create a file named root.ts.
3:31:48 Repeat this for register and session.
3:31:51 Let's start by implementing the login
3:31:53 functionality. Open the root.ts file
3:31:57 inside the login folder. At the top of
3:32:00 the file, we'll add our imports. We'll
3:32:03 need next request and next response from
3:32:06 next server.
3:32:12 Now let's define our post function which
3:32:14 will handle the login request. This will
3:32:17 be an asynchronous function that takes a
3:32:20 next request object as its argument.
3:32:23 Next, we create a constant for the
3:32:25 request body.
3:32:29 We then define a variable for the API
3:32:32 URL, retrieving it from our environment
3:32:34 variables.
3:32:41 If it's not set, it defaults to the
3:32:43 local backend server address, http
3:32:47 localhost port 301.
3:32:58 Within a try catch block, we initiate a
3:33:01 post request to the authentication login
3:33:04 route.
3:33:08 The request method is post
3:33:14 with content type set to application
3:33:17 JSON and the request body is sent as a
3:33:20 JSON string. We then get the data from
3:33:23 the response. If successful, we return
3:33:27 this data with a success status. Any
3:33:30 errors encountered are caught and
3:33:32 returned.
3:33:35 Inside the register folder, we create a
3:33:37 new file called route.ts.
3:33:41 This file will be very similar to the
3:33:43 login setup. We copy the login code,
3:33:46 paste it into the register file, and
3:33:48 simply change the endpoint from login to
3:33:51 register. Keeping all other elements the
3:33:54 same,
3:34:00 we'll create a new root.ts ts file
3:34:03 within a session folder. We'll return to
3:34:06 its specific session retrieval approach
3:34:08 later.
3:34:11 Now let's create the chat folder inside
3:34:13 the API or directory.
3:34:19 Within this we make a session directory.
3:34:28 inside the session directory. We create
3:34:30 another folder named session wrapped
3:34:33 inside a square bracket. This structure
3:34:36 enables us to dynamically render roots
3:34:39 using the chat session ID. Inside this
3:34:42 session ID folder, we create a root.ts
3:34:46 file. Here we import next request and
3:34:49 next response from the next server
3:34:52 library and retrieve the backend API URL
3:34:56 from our environment variables or
3:34:58 default to HTTP localhost port 3001.
3:35:06 Next we define the post request function
3:35:09 for the chat session within a try catch
3:35:12 block. We extract the authorization
3:35:14 header. If no authorization header is
3:35:17 present, we return an error indicating
3:35:20 it's required with a status code of 401.
3:35:25 We then create a variable to hold the
3:35:27 response from fetching the chat session.
3:35:32 A post request is sent to create a new
3:35:35 chat session with the method set to post
3:35:38 content type as application JSON and the
3:35:41 authorization header included. If this
3:35:44 response is not successful, we create an
3:35:47 error variable
3:35:51 and return the error message.
3:35:56 Otherwise, restore the received data
3:36:00 and return it as a JSON response.
3:36:05 Any errors encountered are caught and
3:36:08 potentially rethrown. Inside the session
3:36:10 ID folder, we create a root.ts file.
3:36:15 Then within this session ID folder, we
3:36:18 also create a new folder named history
3:36:21 and another folder named message.
3:36:25 Please note the message folder should be
3:36:28 a direct child of the session ID
3:36:30 directory, not inside the history
3:36:33 directory. All these new folders history
3:36:36 and message will also contain their own
3:36:39 route.ts file. We import all necessary
3:36:42 files and define an asynchronous get
3:36:45 function. This function takes a request
3:36:47 object specifically accessing the
3:36:49 session ID from its parameters within a
3:36:53 try catch block. It extracts the session
3:36:56 ID. It then fetches the chat session
3:36:59 history from our back end using this
3:37:01 session ID. If the fetch is not
3:37:04 successful, an error is thrown.
3:37:07 Otherwise, the data is stored and
3:37:09 returned as a response. Any errors are
3:37:12 caught within the block.
3:37:17 Next, we create a post request to add a
3:37:21 new message
3:37:25 within a try catch block. We extract the
3:37:28 session ID from the parameters and the
3:37:30 message content from the request body.
3:37:34 If no message is provided, we return an
3:37:37 error with status 400. Otherwise, we
3:37:41 send a post request to create this new
3:37:44 message. If the backend response is not
3:37:47 successful, we throw an error. If
3:37:50 successful, we return the data received
3:37:53 from the back end as a JSON response.
3:37:56 Any errors during this are caught.
3:38:02 Finally, in the history folder, we
3:38:05 create root.ts.
3:38:10 Here we import necessary files and
3:38:13 create a function to get the history.
3:38:17 It will have parameters to get the
3:38:19 session ID within a try catch block. It
3:38:22 extracts the session ID from the
3:38:24 parameters.
3:38:26 We then log the chat history for that
3:38:28 session ID. A response variable is
3:38:31 created to fetch the session history
3:38:33 using the session ID. If the response is
3:38:36 not successful, an error is thrown and
3:38:40 an error message indicating failure to
3:38:43 get chat history is returned. If
3:38:46 successful, we format the messages. We
3:38:48 use a mapping function to loop through
3:38:50 all the data received from the back end,
3:38:53 format it and extract the role content
3:38:56 and timestamp. This formatted message is
3:38:59 then returned back to the caller as a JS
3:39:02 N response.
3:39:04 Any errors are caught and handled.
3:39:09 Inside the same API folder within the O
3:39:12 directory, there's a folder named me.
3:39:15 This folder is designed to retrieve user
3:39:17 details, especially the authentication
3:39:20 token. If you haven't created this file,
3:39:23 do so now or follow along with the
3:39:26 GitHub repository. Navigate to the MI
3:39:29 directory and inside you'll find a
3:39:32 route.ts file. Within this file, you
3:39:35 import next request and next response
3:39:39 from next server. Inside the get request
3:39:42 function, a variable gets the API URL
3:39:46 from the backend API URL in the
3:39:48 environment file or it defaults to the
3:39:52 local host port 3001
3:39:55 end point. The token is grabbed using
3:39:58 the request object accessing the header
3:40:01 method and the get function. If there is
3:40:04 no token, a no token provided message is
3:40:07 returned with a status code of 401.
3:40:11 Within the try catch block, a constant
3:40:14 is created to get the user details at
3:40:16 the O /me endpoint. Headers are provided
3:40:22 with authorization set to the token. A
3:40:24 variable named data is created to hold
3:40:27 the data from the responses. This data
3:40:30 object is then returned using the next
3:40:32 response.json.
3:40:35 Any errors caught are handled gracefully
3:40:38 by the next response. What we're doing
3:40:41 now that we've created the next JS API
3:40:44 roots is establishing a utility
3:40:46 function. This function will serve as
3:40:48 the interface to manage the connection
3:40:51 between these API roots and the
3:40:53 application itself. So we create a lib
3:40:56 folder in the root directory. Inside
3:40:58 this lip folder, there's an API folder.
3:41:02 Within it, you'll find
3:41:03 activity.typescript,
3:41:05 o.typescript,
3:41:07 chat.typescript,
3:41:09 and mood.typescript.
3:41:12 Let's start with activity.typescript.
3:41:15 These files are available on the GitHub
3:41:18 repository. So, please clone it and
3:41:20 follow along. I won't rewrite every
3:41:24 single line because these are steps
3:41:26 we've covered throughout the course. In
3:41:28 the activity typescript file, a function
3:41:32 called log activity is exported. This
3:41:35 function is responsible for logging or
3:41:38 saving an activity. It accepts data as a
3:41:43 parameter and is an asynchronous
3:41:45 function that returns a promise. The
3:41:48 promise type accepts a boolean for
3:41:50 success and any data type for the data.
3:41:53 It gets a token from local storage. Then
3:41:56 it sends a post request to the API/
3:41:59 activity endp point using the fetch API.
3:42:03 If there's no response, it returns
3:42:06 failed to log activity. Otherwise, it
3:42:09 returns the response using the
3:42:11 response.json
3:42:13 object. Next, we move to the
3:42:15 O.TypeScript. Typescript file. Here we
3:42:19 have the register user function which
3:42:21 accepts the name, email and password as
3:42:24 arguments. This function sends a post
3:42:27 request to the API off/register
3:42:31 endpoint to register the user. If the
3:42:34 response is not successful, it returns
3:42:36 an error message stating registration
3:42:39 failed. Otherwise, it returns the
3:42:41 registered user using the response.json
3:42:45 object. We also have the login user
3:42:48 function which accepts email and
3:42:50 password as arguments. It sends a post
3:42:54 request to the O.lo
3:42:56 endpoint. If there's no response, it
3:42:59 returns login failed. Otherwise, it
3:43:02 returns the response as JSON object.
3:43:05 Next, we move to the mood.typescript
3:43:08 file. Inside we have an interface called
3:43:11 mood entry which defines a number type
3:43:14 for the score and a string for the note.
3:43:17 The track mood endpoint is responsible
3:43:19 for saving the mood. It accepts data as
3:43:23 an argument which is a promise
3:43:25 indicating a boolean for success and any
3:43:28 data type for the data. It gets a token
3:43:32 from local storage because this endpoint
3:43:35 requires authorization. It then sends a
3:43:38 post request to the API/Mood
3:43:41 endpoint. If the response is not
3:43:43 successful, it returns an error.
3:43:46 Otherwise, it sends the data back to the
3:43:49 caller. Now, in the chats
3:43:52 file, we have the chat message interface
3:43:55 which defines fields for the role,
3:43:57 content as a string, and timestamp as a
3:44:00 date. It also includes metadata which
3:44:03 comprises the technique as a string,
3:44:06 goal as a string, progress as any and
3:44:09 analysis which contains emotional state,
3:44:12 theme, risk level, recommendation
3:44:15 approach and progress indicator. We also
3:44:18 have an interface for chat section
3:44:20 defining the session ID, messages,
3:44:23 creation time and update time. We expose
3:44:26 another interface, the AI response
3:44:29 interface, which will also have a
3:44:31 message, a response analysis and
3:44:34 metadata. Then we create a constant to
3:44:37 get the base API URL. Here we use the
3:44:41 environment variable process.v.next
3:44:44 public API URL or a fallback to the
3:44:48 backend URL. A function is used to get
3:44:51 the headers ensuring we don't recreate
3:44:53 them repeatedly. It sets a constant for
3:44:56 the token from local storage and returns
3:44:59 the content type and authorization. In
3:45:02 the create section function, we send a
3:45:05 post request to the chat section to
3:45:08 create a new chat section. If the
3:45:11 response is not successful, an error is
3:45:13 thrown. Otherwise, the data is returned
3:45:16 back to the caller. We also have the
3:45:18 send chat message function which accepts
3:45:21 a session ID and a message as a string.
3:45:24 This function sends a post request to
3:45:27 sections/
3:45:29 session ID/ messages. If the response is
3:45:32 not successful, an error is thrown
3:45:35 otherwise the data is returned back to
3:45:37 the caller. Any errors encountered are
3:45:40 caught. The get history function also
3:45:42 accepts the session ID. It sends a get
3:45:45 request to the endpoint chat section/
3:45:49 session id/history.
3:45:51 If there is no response, an error is
3:45:53 thrown. Otherwise, the data is returned
3:45:57 to the caller. If the format of the chat
3:46:00 history response is incorrect, an error
3:46:02 is thrown. Finally the data is mapped
3:46:06 extracting the role content timestamp
3:46:09 and metadata and then returned to the
3:46:12 caller or the front end function. We
3:46:14 have the get all chat section function.
3:46:18 Here a constant response variable get
3:46:21 the chat section. We include the headers
3:46:24 using the get o headers function to
3:46:28 ensure we can access the chat section.
3:46:31 Since this route is protected, if there
3:46:34 is no response, an error is thrown
3:46:36 otherwise the data is returned to the
3:46:39 caller. We map the data and create
3:46:41 variables for created at and updated at.
3:46:45 we use the new date object and for data
3:46:48 from the database like session dot
3:46:51 created at if no variable comes from
3:46:54 this side we default to using the date
3:46:56 dot now function from the date object we
3:47:00 return the session spreading its
3:47:02 properties along with created at updated
3:47:06 at messages and timestamp any errors are
3:47:10 handled now that we've set up all our
3:47:12 API utility functions let's Move to the
3:47:15 session context.ts
3:47:18 file inside lib/context.
3:47:21 This file will manage our user session
3:47:23 and authentication state. First we use
3:47:27 use client because this will run on the
3:47:29 client side and we import all necessary
3:47:32 items from react. These are essential
3:47:34 for creating our section context. We
3:47:37 create an interface for the user. We
3:47:40 also import the use router hook. Then we
3:47:44 have the interface for the section
3:47:46 context type.
3:47:48 We define the section provider function
3:47:51 which accepts children. This function
3:47:54 creates state variables for the user and
3:47:57 for loading status. The router is
3:47:59 obtained using use router. Here we have
3:48:03 the check section method which gets a
3:48:05 token from local storage. If there's no
3:48:08 token, the user is set to null. loading
3:48:11 is set to false and the function returns
3:48:14 otherwise user data is retrieved using
3:48:17 the API o/me endpoint passing the
3:48:21 headers if the response is successful
3:48:24 the user state is set to the safe user
3:48:27 data if not successful the user is set
3:48:31 to null and the token item is removed
3:48:33 from local storage the logout function
3:48:36 if a token exists sends a post request
3:48:39 to the AP API o/loout endpoint to log
3:48:43 out the user. Finally, it removes the
3:48:46 token from local storage.
3:48:51 Now, when we scroll down, we'll see a
3:48:54 use effect hook. This hook is
3:48:56 specifically used to initialize the
3:48:58 check session method. Following that, we
3:49:01 have the session context provider. This
3:49:05 provider returns a value containing the
3:49:07 user's data, loading status, whether
3:49:10 they are authenticated, a logout
3:49:12 function, and the check session method.
3:49:15 The session context provider also
3:49:18 includes children props. This is because
3:49:21 we will use it to wrap around other
3:49:23 providers which will eventually be used
3:49:26 within the applications layout. Finally,
3:49:28 we export this context.
3:49:32 Let's go into the component directory
3:49:35 and find the provider.tsxs
3:49:38 file. Inside this file, we're going to
3:49:41 import the section provider as Nest O
3:49:44 section provider from Nest O React.
3:49:48 Additionally, we'll import the section
3:49:50 provider again. This time as custom
3:49:53 section provider from the section
3:49:56 context we just created. Here we'll wrap
3:49:59 both the nest or section provider and
3:50:02 the custom section provider around the
3:50:05 theme provider.
3:50:13 Next, we move to the app directory and
3:50:17 locate the layout file. Since we have
3:50:20 our providers wrapped around the layout,
3:50:22 it means we'll gain access to both the
3:50:24 custom context section and the nest o
3:50:27 provider. Finally, let's change the
3:50:30 title of the application to AI therapy
3:50:33 agent and set it description to your
3:50:36 personal AI therapy companion.
3:50:48 All right, let's connect our backend
3:50:50 authentication to the front end. We'll
3:50:53 start by integrating the user signup
3:50:55 functionality. We start by adding an
3:50:58 error state and a loading state.
3:51:05 We then define a handle submit function
3:51:08 and asynchronous function to manage user
3:51:10 signup. This function prevents the page
3:51:13 from refreshing after submission. It
3:51:16 first clears any existing error message.
3:51:24 If the password doesn't match the
3:51:26 confirmation, it sets an error.
3:51:32 Otherwise, it sets the loading state to
3:51:34 true, which will display a spinner on
3:51:36 the signup button.
3:51:43 Inside the try catch block, we initially
3:51:46 log the user's name, email, and
3:51:48 password. To make this work, we move to
3:51:51 the form component, add an onsubmit
3:51:54 event, and pass our handle submit
3:51:57 function.
3:52:11 We change the buttons type to submit and
3:52:14 disable it when the loading state is
3:52:16 true.
3:52:24 The buttons text will conditionally
3:52:26 render signing up if loading or sign up
3:52:29 otherwise
3:52:39 on our local host at port 3000. On the
3:52:43 signup page, we can inspect the console.
3:52:58 After entering details and clicking sign
3:53:00 up,
3:53:16 we see the logged information. If we
3:53:19 enter a wrong password, the system
3:53:21 should set an error state indicating the
3:53:24 passwords don't match. To display this,
3:53:27 we add a paragraph element right before
3:53:29 the button, which renders the error
3:53:31 message if the error state is present.
3:53:37 Now, inside the try catch block, we call
3:53:40 the register user function from our
3:53:42 o.typescript
3:53:44 file in the lib folder. This registers
3:53:47 the user via the defined API. We provide
3:53:51 the user's name, email, and password as
3:53:54 arguments. Then upon successful
3:53:57 registration, we push the user to the
3:53:59 login page.
3:54:03 In the catch block, any errors from the
3:54:05 back end are caught and set to the error
3:54:08 state and the loading state is finally
3:54:11 set to false. Since the router isn't
3:54:14 configured yet, we import use router
3:54:16 from next navigation and initialize it.
3:54:26 When we test this on local host entering
3:54:28 username, email, password and confirm
3:54:32 password and clicking on sign up button.
3:54:38 We are successfully taken to the login
3:54:40 page.
3:54:43 Currently logging in won't work as the
3:54:46 functionality isn't hooked up. So in the
3:54:49 page tsx file of the login page we add
3:54:55 error and loading states. We import and
3:54:59 configure use router at the top of the
3:55:01 state definitions.
3:55:08 We create a handle submit function which
3:55:10 like in signup prevents default page
3:55:13 refresh. Inside we set loading to true
3:55:17 and clear any error messages. Within a
3:55:20 try catch block we call the login user
3:55:22 function from the O.TypeScript
3:55:25 file passing email and password. The
3:55:29 response from login user includes a
3:55:31 token which we store in local storage.
3:55:34 We then import the use section hook from
3:55:37 the lab context use section hook. Before
3:55:41 using it, we dstructure the checks
3:55:43 section user function from the hook and
3:55:45 call it right after setting the local
3:55:47 storage item.
3:55:52 After a brief delay of 100 milliseconds,
3:55:55 we redirect the user to the dashboard
3:55:58 page and handle any error that may occur
3:56:02 and set loading to false. In the finally
3:56:05 clause, we add the handle submit
3:56:08 function to the onsubmit event.
3:56:15 Right before the button, we add an error
3:56:18 display for any login errors
3:56:23 and conditionally render a text based on
3:56:25 the loading state.
3:56:36 Now when we sign in, we gain access to
3:56:39 the dashboard.
3:56:44 Next, we'll conditionally render a log
3:56:47 out button in the header if the user is
3:56:50 logged in. In the header CSX file, we
3:56:54 import the user section hook from the
3:56:56 context.
3:56:59 We dstructure is authenticated and log
3:57:02 out user from it. We scroll down to
3:57:04 where the theme toggle and signin button
3:57:07 are located. Right after the theme
3:57:09 toggle, we add a condition. If the user
3:57:12 is authenticated, we render a log out
3:57:15 button. Otherwise, we render the sign in
3:57:18 button.
3:57:20 Before the log out button, we add a
3:57:23 start chat button that will take the
3:57:26 user straight to the dashboard. Then we
3:57:30 move to the logout button. Inside the
3:57:33 log out button, icon and text like sign
3:57:36 out. The onclick action for this logout
3:57:40 button will come from the logout user
3:57:43 function provided by the context. We add
3:57:47 a console log to check the s
3:57:49 authenticated and user status.
3:57:58 If the console shows authentication as
3:58:00 false and user as now we log in again.
3:58:12 After refreshing, the user details
3:58:14 appear and the sign out button is
3:58:17 correctly rendered on the navigation bar
3:58:19 confirming authentication is working
3:58:22 perfectly.
3:58:28 Now let's move to the dashboard page.tss
3:58:32 file. Here we'll render the user's name
3:58:35 in the welcome back section. To do this,
3:58:38 we import the use section context and
3:58:41 initialize it. We structure is
3:58:43 authenticated log out user and user from
3:58:47 use section.
3:58:49 Upon refreshing the page, we now see
3:58:51 welcome back test user 3 displaying the
3:58:55 logged in username. Next, we'll connect
3:58:58 the mood form to the back end. We
3:59:00 navigate to the mood directory and open
3:59:03 the mood form.tsss
3:59:06 file.
3:59:10 In the mood component, we import use
3:59:12 section and dstructure user
3:59:15 authentication loading from it.
3:59:30 We then create a handle submit function.
3:59:34 This function first checks if the user
3:59:36 is authenticated. If not, it alerts
3:59:39 authentication is required and redirects
3:59:42 the user back to the login page, then
3:59:44 returns. If authenticated, it enters a
3:59:48 try catch block. Inside, it sets the
3:59:51 loading state to true. It then checks
3:59:53 for the token implicitly. As part of
3:59:57 sending the request, it sends a post
3:59:59 request to the API mood endpoint using
4:00:02 the fetch API method passing in the mood
4:00:05 score. If there is no response, it
4:00:07 throws an error. Any other errors are
4:00:10 also handled.
4:00:13 Then we create a variable named data to
4:00:15 capture the response. We alert the user
4:00:18 that the mood track was successful and
4:00:21 call an onsuccess function. In the catch
4:00:24 block, we alert the user with a failed
4:00:27 message. Finally, in the last clause, we
4:00:30 set the loading state to false. Now,
4:00:33 let's scroll down to the button. We'll
4:00:36 add an on click event called handle
4:00:40 submit and disable the button while it's
4:00:43 loading. This prevents accidental double
4:00:46 submissions. We also conditionally
4:00:49 render the buttons text based on the
4:00:51 loading state. After saving this, we
4:00:54 click the track mood button. Select any
4:00:56 mood and click save mood. The mood track
4:01:00 successfully message appears. Clicking
4:01:02 okay confirms it's saved in the
4:01:04 database. So let's work on the final
4:01:07 piece of our application, the AI
4:01:09 therapist page, which is our chatting
4:01:12 interface. We import chat message, get
4:01:15 all chat section, and chat session. We
4:01:17 also import scroll area from shard CN.
4:01:21 To install this, navigate to the shard
4:01:24 CN website, find the scroll area
4:01:26 component, copy its installation
4:01:29 command, and run it in your terminal. We
4:01:32 initialize parameters using the use
4:01:34 params function and create a state to
4:01:36 hold the params section ID. Inside, we
4:01:40 create a new section state that will
4:01:42 store all our chat sections. Then we
4:01:46 define a handle new section function
4:01:49 which is asynchronous. Its purpose is to
4:01:52 create a new chat section using the
4:01:54 create chart section await function. We
4:01:57 already have a constant for the new
4:02:00 section is created including the session
4:02:03 ID messages and creation and update
4:02:06 dates all initialized to new date
4:02:09 objects. We then update the section
4:02:11 state by spreading the previous sections
4:02:15 and appending the new ones. The session
4:02:18 ID is set to the newly created one and
4:02:20 messages are set to an empty array. The
4:02:23 URL is updated by using
4:02:25 window.history.push
4:02:28 state. We do it this way and set loading
4:02:31 to false. In the catch block, we either
4:02:34 throw or console log any errors. We also
4:02:37 initialize the chat section and load the
4:02:40 chat history. To ensure our chat app is
4:02:43 always ready, whether it's a new session
4:02:46 or an existing one, we'll use a use
4:02:48 effect hook. This hook will run when the
4:02:51 component mounts and whenever the
4:02:53 session ID changes. This use effect
4:02:56 contains our init chat asynchronous
4:02:59 function which runs when the component
4:03:01 mounts and whenever session ID changes.
4:03:05 It first sets is loading to true. If
4:03:07 session ID is not set or is new, the
4:03:10 function logs that is creating a new
4:03:12 session. It then calls create chat
4:03:14 session which would be an API utility to
4:03:17 create a new session on the back end.
4:03:20 Upon success, it updates the local
4:03:23 session ID state and importantly uses
4:03:26 window history push state to update the
4:03:28 browser's URL to / theapy/ new session
4:03:32 ID. This keeps the URL in sync with the
4:03:36 current chat session. It then calls get
4:03:39 chat history session ID to fetch
4:03:42 messages. It ensures the history is an
4:03:45 array and formats the timestamp strings
4:03:48 into date objects which is often
4:03:50 necessary for proper rendering and
4:03:52 manipulation in the front end. If any
4:03:55 errors occur during loading, it logs
4:03:58 them and displays a user-friendly
4:03:59 message to the user. Finally, set is
4:04:03 loading false always runs to hide the
4:04:05 loading indicator to power our sidebar
4:04:08 with a list of all available chat
4:04:10 sessions. We'll use another use effect
4:04:12 hook. This one will fetch all sessions
4:04:15 from the back end. This use effect
4:04:17 defines an async function load sessions.
4:04:20 It calls get all chat sessions, an API
4:04:23 utility to fetch a list of all chat
4:04:25 sessions from the back end and then
4:04:27 update the local sessions state. We've
4:04:30 set messages as a dependency here. This
4:04:34 is a clever trick. By making messages a
4:04:36 dependency, this use effect will rerun
4:04:40 whenever a new message is added or the
4:04:42 message history changes. This helps
4:04:44 ensure that your sidebar session list
4:04:47 stays updated, particularly when a new
4:04:50 session gets its first message, making
4:04:52 it identifiable. Now let's work on the
4:04:55 handle submit function which is
4:04:57 responsible for sending user messages to
4:05:00 the AI and processing the AI's response.
4:05:03 This handle submit function is the heart
4:05:05 of our chat interaction. It starts by
4:05:08 preventing default form submission and
4:05:11 trimming the user's message. It includes
4:05:14 several guard clauses to return early if
4:05:16 the message is empty, the AI is already
4:05:19 typing, the chat is paused, or there's
4:05:22 no session ID. These checks prevent
4:05:25 unnecessary API calls and ensure a
4:05:28 smooth user experience. If all checks
4:05:30 pass, it immediately clears the input
4:05:33 field, set message, and sets set is
4:05:36 typing to true to show a typing
4:05:39 indicator. inside the try block. It
4:05:42 creates a user message object and
4:05:44 optimistically adds it to the messages
4:05:46 state using set messages state. This
4:05:49 makes the user's message appear
4:05:51 instantly improving responsiveness. The
4:05:54 raw API response is then passed. It
4:05:58 gracefully handles cases where the
4:05:59 response might be a stringified JSON. An
4:06:03 assistant message object is created. It
4:06:06 prioritizes content from AI response
4:06:10 response or AI response message and
4:06:14 provides a default fallback if neither
4:06:16 is available. Importantly, it also
4:06:19 includes metadata such as analysis,
4:06:22 technique, goal, and progress or
4:06:25 defaulting to safe values if not
4:06:27 provided by the API. This metadata is
4:06:31 crucial for displaying rich AI responses
4:06:33 on the front end. Finally, the assistant
4:06:36 message is added to the messages state
4:06:39 set is typing false hides the typing
4:06:42 indicator and scroll to bottom ensures
4:06:45 the chat view is updated to the latest
4:06:48 message. The catch block handles any
4:06:50 errors during the API call or processing
4:06:54 logging them and displaying a
4:06:56 userfriendly error message in the chat
4:06:58 itself to enable users to switch between
4:07:01 different chat sessions from the
4:07:04 sidebar. We'll add a handle session
4:07:06 select function. This handle session
4:07:08 select function runs when a user clicks
4:07:11 on a session in the sidebar. It first
4:07:13 checks if the selected session ID is
4:07:16 already the current session to avoid
4:07:18 unnecessary reloads. If not, it sets it
4:07:22 loading to true, fetches the chat
4:07:24 history for that selected session ID,
4:07:27 format the timestamps, updates the
4:07:30 messages state, sets the new session ID
4:07:32 in our component state, and importantly
4:07:35 updates the browser's URL using
4:07:37 window.history.push
4:07:39 state to match the new session. This
4:07:42 ensures direct links to specific
4:07:44 sessions work and navigation history is
4:07:47 preserved. It includes error handling
4:07:50 and a finally block to reset is loading.
4:07:54 Now let's implement the visual part of
4:07:56 our chat sidebar which will display a
4:07:59 list of all chat sessions in your
4:08:01 therapy.page.tsx
4:08:04 file. Right after the second main div in
4:08:06 your return statement, which likely
4:08:09 wraps your main chat interface, add this
4:08:12 div. When you save this, you'll
4:08:14 immediately see a new sidebar appear on
4:08:17 your chat app, ready to display your
4:08:19 chat sessions. This div with W80 flex
4:08:23 flex column border right bg muted/30
4:08:27 defines our sidebar. It has a fixed
4:08:30 width, uses flexbox to stack its content
4:08:33 vertically, and has a right border and a
4:08:36 slightly muted background. The header
4:08:39 P-4
4:08:41 border B contains a H2 for chat sessions
4:08:45 and two buttons to create a new session.
4:08:47 The first button is an icon only ghost
4:08:50 variant using a loader two or plus
4:08:52 circle icon based on it loading. The
4:08:55 second button is a full width outline
4:08:57 variant showing new session with a
4:08:59 message square icon and a loader two
4:09:02 while loading. Both buttons trigger a
4:09:04 handle new session function which you'll
4:09:06 need to define to create a new chat
4:09:09 session. Below the header, the scroll
4:09:12 area component wraps our list of
4:09:15 sessions, allowing the list to be
4:09:17 scrollable if there are many sessions.
4:09:20 Inside the scroll area, we map through
4:09:22 our sessions state populated by our use
4:09:26 effect to render each session as a
4:09:28 clickable div.
4:09:30 Key equal session session aid is used
4:09:33 for efficient rendering. The class name
4:09:35 dynamically applies BG primary/10ext
4:09:39 primary to the active session for visual
4:09:42 highlighting while other sessions use BG
4:09:45 secondary/10.
4:09:47 Cursor pointer hover bg primary/5
4:09:50 transition colors add interactivity on
4:09:53 click handle session select functions
4:09:56 ensures that clicking a session loads
4:09:58 its history inside each session card it
4:10:01 displays a message square icon a snippet
4:10:04 of the first messages content or new
4:10:06 chat and a line clamp two snippets of
4:10:10 the last messages content. Finally it
4:10:13 shows the total session messages.length
4:10:16 length and the session.dated
4:10:19 at time stamp formatted to be human
4:10:22 readable using format distance to now
4:10:25 from date fns which you'll need to
4:10:28 import. There's also a try catch block
4:10:31 around the date formatting for
4:10:33 robustness to complete our chat app.
4:10:36 Let's make sure our handle submit
4:10:38 function is correctly linked to the send
4:10:41 button. We already added type equals
4:10:44 submit and on click handle submit
4:10:46 earlier. So it should be all set. Now
4:10:50 it's time to test it all out.
4:10:54 In the chat input, type something like
4:10:57 how do I manage stress?
4:11:01 Hit enter or click the send button. You
4:11:05 should see your message instantly appear
4:11:07 followed by the AI typing indicator.
4:11:11 After a short delay, you'll get a
4:11:13 response from your AI therapist.
4:11:16 Congratulations if you've gotten this
4:11:18 far. This has been an incredible journey
4:11:21 bringing together the front end and back
4:11:23 end of our AI therapy application.
4:11:27 Everything is working perfectly.
4:11:31 Now, we'll use render to deploy the back
4:11:34 end. Visit the URL provided in the
4:11:37 description. Sign up using your
4:11:39 preferred authentication platform. After
4:11:42 logging in, you'll be taken to this
4:11:44 page. Before hosting the back end on
4:11:46 Render, we'll make some changes. Go back
4:11:49 to your backend directory and open the
4:11:52 package.json
4:11:53 file. Inside this file, in the scripts
4:11:57 section, add a new option called dev
4:12:00 with tsc as its value.
4:12:06 Next, change nodemon to node in the
4:12:08 start script. Change the source
4:12:10 directory to dist and update ts to js.
4:12:23 This prepares our code to run correctly
4:12:25 on render. Then return to your env file.
4:12:29 Add entries for port node in Gemini API
4:12:34 key and JWT secret. On the render page,
4:12:38 click the add new site button. Then
4:12:40 select the web service option. Here
4:12:43 we'll use the public Git repository tab.
4:12:46 Copy your backend repository from the
4:12:49 GitHub link as provided in the
4:12:51 description. Paste it and connect. We'll
4:12:54 configure a few properties for the root
4:12:57 directory.
4:12:59 Type src.
4:13:04 The sbu command will be npm run build.
4:13:11 The g start command as will be npm
4:13:14 start. Select the hobby plan and then
4:13:17 add your environment variables.
4:13:26 Finally, click the deploy your service
4:13:29 button. This process will take some time
4:13:32 to complete and then your backend URL
4:13:35 will be
4:14:00 We'll copy this backend URL to use for
4:14:03 deploying our front end. For deploying
4:14:06 the front end, visit vessel.com.
4:14:09 Log in or register. Then click the add
4:14:13 new project button. I've already pushed
4:14:15 my code to GitHub. If you haven't,
4:14:18 please do so. I'll select my AI
4:14:21 therapist agent repository. Now add your
4:14:25 environment variables. This will be the
4:14:27 backend URL we copied from render. Then
4:14:30 click deploy. This will take a few
4:14:33 seconds.
4:14:38 It looks like the deployment is
4:14:40 complete. Let's scroll up and see our
4:14:42 deployed website. When we click the
4:14:44 visit button, it takes us directly to
4:14:47 our newly deployed website. Everything
4:14:50 works. We can actually log in.
4:14:52 Beautiful. Thanks for watching the
4:14:54 tutorial to this far. If you found this
4:14:57 helpful, please subscribe and share it
4:14:59 with others. Should you encounter any
4:15:02 errors or have ideas for improvements,
4:15:05 feel free to create a new issue in the
4:15:07 project's repository. Your feedback is
4:15:10 highly appreciated.
4:15:12 Until then, see you in the next


---

## Source: how-to-sell-ai-agents-to-local-businesses-with-claude-code-poppy.txt

- Original path: `addintional info to add\how-to-sell-ai-agents-to-local-businesses-with-claude-code-poppy.txt`
- Size: `10728` bytes
- SHA256: `9662372C425BE6461E9D5D597FECE7EF7C69E0BDAD741F9699A00CAE9B741956`

---

How to Sell AI Agents to Local Businesses With Claude Code + Poppy

0:00 Hey guys, so the hottest thing that you
0:01 can sell to local businesses right now
0:02 is their own AI agent. This can live as
0:05 a chat widget on their site and it's
0:06 trained on their services, their
0:07 pricing, their FAQs. It answers leads in
0:10 their voice. It qualifies those leads.
0:12 It books those leads and it runs 24/7.
0:15 So today I'm walking you through that
0:16 exact stack, which is Cloud Code plus a
0:19 tool called Poppy. And by the end of
0:20 this video, you'll learn how to
0:22 implement the entire workflow and help
0:23 local businesses around you. And by the
0:25 way, guys, before we dive into today's
0:27 video, I'd love to invite you all to the
0:28 Creator Network Discord community where
0:30 a bunch of startup founders, designers,
0:32 developers from all over the world and
0:34 we get together every single weekday to
0:36 talk about different tools and topics.
0:37 So if you want to join that chat, link
0:39 is down below. All right, and the first
0:40 place we're going to start at is this
0:42 website called getpoppy.ai. And this is
0:44 a tool that was built by one of my
0:46 favorite YouTubers. But once you log in,
0:48 you're going to get something like this
0:50 where you can just go up here and create
0:51 a new board. And essentially, this is
0:53 like a visual canvas where you can add
0:55 different things, right? I just added
0:56 this like chat widget over here. I can
0:59 move it around. But not only that, I
1:01 can, for example, add different links to
1:02 websites. I can add specific YouTube
1:05 videos, Instagram posts. We can add Loom
1:07 videos, files and media, recordings,
1:10 text, annotations, links. You can even
1:13 create mind maps. So it's basically like
1:15 a content knowledge hub in this like
1:18 Miro type of interface. But let's say
1:20 that we find a local business. In my
1:22 case, it's a business that sells
1:24 accessories and parts for Toyota
1:26 Tacomas. Shout out to Tacoma Beast, a
1:28 great brand. And they sell different
1:30 accessories that have to do with the
1:32 exterior the exterior of the vehicle,
1:34 the interior, the lighting, performance.
1:36 They work together with different
1:37 brands. Down here, if you click on this
1:39 chat widget, it opens up and you can
1:41 track your orders and you can search
1:43 different topics where you can see their
1:45 FAQs. But there's no real way to chat
1:48 with them unless you're back online when
1:50 they're online. So what we can do is we
1:51 can create a new board in Poppy
1:53 dedicated for this brand. And we can
1:55 copy their website URL and paste it in
1:58 here. Paste in their FAQs page. They
2:01 also have a fantastic YouTube channel,
2:03 so we can copy their YouTube channel and
2:05 paste that in here as well. And once we
2:07 add their YouTube channel, it highlights
2:09 their latest videos or their outliers.
2:11 And you can kind of scroll through this
2:12 feed and you can see which ones are
2:14 performing well, which ones aren't. So,
2:16 for example, we can select this one
2:17 that's performing pretty well and add
2:19 that to the to the board. Also, this one
2:21 over here. We can also quick add their
2:23 channel to the board. You can select
2:25 their Instagram account and basically do
2:27 the same thing. We can add We can quick
2:28 add the latest 10 reels or we can select
2:31 specific ones that we like and select
2:33 and add. And slowly but surely our board
2:36 is getting populated with the different
2:37 content. And then once you start adding
2:39 these different things, you can
2:40 basically hold down shift and start
2:43 dragging and selecting different
2:45 categories and grouping them together.
2:47 And for for example, this one can be
2:48 called website. And then once you
2:50 organize the content, what you can do is
2:52 you can open up a new AI chat. And what
2:56 I want to do is I'm just going to place
2:57 it right here at the top. And then we
2:58 want to connect everything to this AI
3:01 chat. And obviously, you can just do it
3:03 with one category, but in my case, I
3:04 just want to do it with all of them. And
3:06 then once we have these connected, I'm
3:07 just going to move that over here. And
3:09 then this is where we can start a
3:10 conversation with all of these pieces of
3:13 content that we brought in. And right
3:14 off the bat, I'm going to set this model
3:15 to Claude Opus 4.7. And then we can
3:17 write something like, "Tell me about
3:19 this brand." All right, perfect. So, it
3:21 gives us a brand overview, what they do,
3:23 product categories, media presence,
3:26 content style and voice, business model
3:28 highlights, and a winning content
3:30 formula. Now, eventually the goal here
3:32 would be to have some type of AI chat
3:34 widget over here, which you can click
3:35 and you can ask it anything, right? This
3:37 AI knows everything about this specific
3:39 brand. So, for example, if you were to
3:41 ask about a specific exterior product
3:44 like like one of the fenders and say,
3:46 "You know, what are the products What
3:48 are the fenders that are under $600?" It
3:51 can give you that right away. So, right
3:53 now you would have to go here, click on
3:55 fenders, and then, for example, move
3:58 this down here to about $600, and then
4:01 we have these like seven options. So,
4:04 what we can do is we can actually get
4:06 this URL, and then we can go into Claude
4:08 code, and we want to open up a new
4:10 folder. This case, I'm going to give it
4:11 the name of the brand, and we can say
4:13 something like, "Can you generate the
4:14 site map of this website and scan the
4:16 contents of all pages and create a PDF
4:19 file with the results?" And basically, I
4:21 tell it also all the pages that it needs
4:23 to scrape. All right, and what it did is
4:24 it it gave me a full PDF document of all
4:28 of the different products, but I also
4:30 need the price and description of every
4:32 single product, so I'm also adding that
4:33 to the chat. And then, once that's done,
4:35 we get an 1,000-page file with the site
4:39 overview with all of the different
4:40 products that we have, their pricing,
4:42 their description. And what I can do is
4:44 I can go back into Poppy, and I can
4:46 select this over here and click on API,
4:48 and I'm going to first click on this
4:50 link over here, and I'm going to copy
4:52 this URL. We're going to want to go back
4:54 into Claude code and paste in the URL.
4:56 And back in Poppy, you can scroll down
4:58 on where it says show more, click on
5:00 that, and this is where you're going to
5:01 see your API key. So, you're going to
5:02 want to copy your API key, and I can say
5:04 something like, "I want to use Poppy API
5:07 to get the content in my Poppy board and
5:09 create an AI chat widget for this
5:11 brand." And then, it's going to ask me
5:12 some follow-up questions. So, where will
5:14 the the widget live? Eventually in
5:15 Shopify, but now let's just place it in
5:17 some type of placeholder HTML page. Do I
5:20 have the Poppy API key? Yes, I do. Plus
5:22 the board ID? Yes, I do. And
5:25 conversation persistence, we want to
5:26 have it per browser session, so that
5:28 every time we open up a new page, it's
5:31 still there. All right, and now we can
5:32 test this out. So, I created like this
5:33 little clone of their website.
5:35 Obviously, still needs, you know,
5:37 fine-tuning when it comes to design, but
5:39 we have our widget over here, and it's
5:41 connected to Poppy via API. It's also
5:44 connected to that doc that we created
5:46 inside of Claude, and I can open this up
5:48 and I'm going to write something super
5:49 specific like what products under the
5:51 category
5:52 uh fenders, bed sides, and fiberglass
5:54 are under $600. Let's go ahead and
5:56 submit this. And then it says, "Based on
5:58 the knowledge base, here are the
6:00 products in the fenders, bed sides, and
6:01 fiberglass category and their prices."
6:04 And we get our 1 2 3 4 5 6 7 products
6:09 that we saw on the website. But, as you
6:10 can see, it works. And then we can ask
6:12 something else like, "What's the best
6:14 YouTube video to learn more about the
6:15 fenders?" And it says that there isn't
6:17 any YouTube video that is specifically
6:19 dedicated to fenders, but there is this
6:21 video that, for example, shows like a
6:23 full rebuild of a Toyota Tacoma, and it
6:26 also shows how fender and body upgrades
6:28 fit into a complete build. And so, once
6:30 we do that, we can say, "Push this to a
6:32 preview link using Vercel." And once you
6:34 have that preview link, you can go ahead
6:36 and open something up like Loom and
6:38 start the journey from scratch. You go
6:39 to their website tacomabeast.com and
6:41 say, "Hey, you have a chat widget,
6:43 right?" You have limited hours. It says
6:46 that you're back in 11 hours.
6:48 Yeah, you can see the FAQ, but you can't
6:50 really search for something specific.
6:52 It's not really an AI-optimized site.
6:54 But, what if we get all of your content
6:56 in one place and we analyze all of your
6:59 categories and all of your products and
7:01 all of your pages? We create this one
7:03 solution where it's AI-driven and it's
7:05 basically where anyone can just chat
7:07 with anything related to your business.
7:09 And for laying down the system for a
7:11 business like tacomabeast, you can
7:13 easily charge like, let's say, 1,000 to
7:15 1.5 thousand for the integration that we
7:18 did just today in this video. And that
7:20 would cover the cost of the Poppy
7:21 account and of the Claude credits. And
7:23 you can upsell them to update their
7:25 content at all times. And the best part
7:27 of this all is that you can own the
7:28 knowledge hub, which is like the Poppy
7:31 account where all the where all the
7:32 content lives, Claude where you're
7:34 actually building, and the knowledge
7:35 updates, which kind of binds everything
7:37 together. And for this over here, you
7:39 can charge some type of recurring
7:40 subscription. And again, if you can get
7:42 multiple people on board, obviously
7:43 this, you know, revenue starts
7:45 increasing and it's just a fun little
7:47 business idea. So yeah, guys, hopefully
7:48 you enjoyed today's video. Really,
7:50 really cool workflow with Poppy AI and
7:52 Claude Code. If you have any comments or
7:54 questions, please let me know down in
7:55 the comments below. And guys, like
7:57 always, thank you all so much for
7:58 watching today's video. Hope to see you
7:59 next time. Goodbye.


---

## Source: my-simple-claude-code-workflow-to-build-apps-fast-no-skills-agents-or-computer-u.txt

- Original path: `addintional info to add\my-simple-claude-code-workflow-to-build-apps-fast-no-skills-agents-or-computer-u.txt`
- Size: `16369` bytes
- SHA256: `522D39D12AC5E1E6174FA15BCD3155F7595F99F86E3602C1D85148644D304EB9`

---

My Simple Claude Code Workflow To Build Apps Fast (No Skills, Agents, or Computer Use)

0:00 Am I the only one that feels like AI
0:01 coding has just gotten way too
0:03 complicated these past couple of days? I
0:05 feel like every other day I see somebody
0:06 talking about how their crazy open claw
0:08 setup is running 50 different agents at
0:10 once and made them 50 billion dollars in
0:12 2 seconds. And another day I see
0:13 somebody posting about their claw code
0:15 setup that is 15 different agents, 30
0:17 different skills, and runs 50 different
0:19 agents at once. And I am just so
0:21 overwhelmed by all of that. And I see
0:23 this as somebody that honestly takes in
0:24 a lot of AI and coding and developer
0:27 social media content. And I'm just like,
0:28 I'm overwhelmed. Like this is crazy.
0:30 Because my workflow is so incredibly
0:32 simple. Like honestly, later on in this
0:34 video when I show you how simple my
0:35 workflow is, you might be like, bro,
0:37 that's it. I thought you were going to
0:37 show me some secret sauce. But there
0:39 really is none. It's so dead simple. But
0:41 I find it really effective and I'm able
0:42 to still push out a ton of code every
0:45 single day. So in this video, I want to
0:46 do two things. Number one is I want to
0:47 talk about what I think a lot of people
0:49 get wrong and do wrong with their AI
0:51 coding setups. And number two, I want to
0:52 walk you through my actual really simple
0:55 AI coding setup to at least prove to you
0:56 that you don't need a really complicated
0:58 AI coding workflow to get a lot of great
1:00 results. Now, for some context about
1:02 myself, I am a content creator on the
1:04 internet. I code for YouTube. But not
1:06 only that, I also have my own startup
1:08 that I run called Yorvi. I am the sole
1:10 developer for this. We have currently
1:12 scaled this to roughly 7 grand a month
1:14 of revenue. And I built this all out
1:16 with a really simple AI coding workflow
1:17 with nothing complex at all. I'll talk
1:19 more about this later on for some
1:20 context to show you about a real feature
1:22 that I built using my really simple AI
1:24 coding workflow. But more on that to
1:26 come later. Now, I want to talk about
1:27 what I think a lot of people kind of get
1:29 wrong or what I fundamentally disagree
1:31 with other people's approaches with AI
1:33 coding. It is actually this meme is the
1:35 big inspiration for this video. If in
1:37 case you're not familiar, this is called
1:38 the midwit meme, right? You have the
1:40 person in the middle of the bell curve.
1:41 The vast majority of people are in and
1:43 they are a really struggling try-hard.
1:44 And then the people on the left and the
1:46 right-hand side, the enlightened awoken
1:47 Jedi and then the bumbling village idiot
1:50 buffoon that is very simple. An example
1:52 of what this meme could be used for is
1:54 for somebody's personal productivity
1:55 stack. The person on the left and the
1:57 person on the right would say, "Just use
1:59 Apple Notes." And then the person in the
2:00 middle would be, "Notion, Obsidian,
2:02 second brain, cron job workflow, data
2:05 ingestion, open claw." That's an example
2:07 of the meme. And I really feel this way
2:09 for AI coding as well. I feel like the
2:10 AI coding version of this would be,
2:12 "Just tell AI to write code." And then
2:14 in the middle it would be, "Agent,
2:15 sub-agent, skills, swarms, batch,
2:18 offline workflows, blah blah blah blah."
2:20 And I don't know where I am from the
2:21 left or the right-hand side. Probably
2:23 more on the left-hand side, the bumbling
2:24 simple village idiot than the
2:26 enlightened Jedi. But my workflow is
2:28 really simple. And another big
2:29 inspiration for this video was actually
2:31 recently this week when Gary Tan
2:33 launched his G-Stack, which is
2:35 essentially a repository full of claw
2:37 code skills and agents that cover
2:39 everything any modern tech company would
2:41 need, like CEO review, design review,
2:43 end review, QA review, ship, retro, blah
2:46 blah blah. So much going on here. And
2:48 I'm sure that it works really, really
2:50 well. But my ideology in terms of these
2:52 really intense, super intense setups is
2:55 how I feel about Neovim.
2:59 Like yes,
3:01 more productive with it. I don't know. A
3:03 little TBD on that one. And essentially,
3:05 the way that I view this is if you were
3:06 to get a top 1% Neovim user and the top
3:09 1% VS Code user, like I'm sure that they
3:11 would both be equally as productive. And
3:13 you don't even though one would have a
3:15 substantially simpler setup with VS Code
3:18 compared to Neovim, for example, or vice
3:19 versa as well. Basically, what I'm
3:21 trying to say is you don't need to be
3:22 really complex, really crazy complicated
3:25 to have really good results. The real
3:27 power is the person that uses the tool,
3:29 not the tool itself, type you
3:31 know? And I think the fundamental
3:33 disagreement or different beliefs that I
3:35 have versus somebody else that has a
3:36 really complicated AI coding workflow is
3:38 I think a lot of the other people that
3:39 have really complex workflows, they're
3:41 almost trying to create an autonomous
3:43 coding junior engineer that'll do
3:45 everything for them. Plans, writes,
3:47 tests, opens up Chrome, logs in,
3:49 browses, tests, screenshots, video
3:52 records, confirmation that everything is
3:53 working correctly. And I'm sure that
3:55 that does work. But for myself
3:56 personally, I look at AI as rather than
3:59 trying to create a clone of myself, just
4:01 as a force and productivity multiplier
4:03 of my own self. Uh cuz I always want to
4:04 be involved in the loop for most of the
4:06 work that I'm doing. Sure, for small
4:08 little bugs like typos or really simple
4:10 bugs, I can probably use something like
4:13 Devin, the AI software engineer. Like
4:14 stuff that I don't really even have to
4:15 test myself. I just take a look at the
4:17 code. I'm like, yep, that works. Thumbs
4:18 up. We're good to go. Once again, this
4:19 is not sponsored by Devin. This is just
4:21 an example of like the AI software
4:23 engineer that became really popular a
4:24 couple years ago. Basically, an example
4:26 of an autonomous AI clone junior
4:29 engineer that'll do the work for you.
4:30 But for the vast majority of my work,
4:32 the minute any work gets even remotely
4:34 complicated, I personally wouldn't even
4:36 trust if AI were to sign off on and
4:37 said, "Yeah, good to go. Thumbs up."
4:39 Like I will still go in and manually
4:41 test it myself and verify it works
4:43 myself with my own human eyes. So I
4:45 really view AI not as a way to clone
4:47 myself, but just as an output and force
4:50 multiplier for my own baseline skill. So
4:52 that's why I personally don't bother
4:54 with like setting up browser use,
4:56 screenshotting, making sure everything
4:57 works, video recording to prove that it
4:59 all works. Like I keep it really, really
5:01 simple. And I also don't do all this
5:02 crazy opinionated agent stuff because
5:05 quite frankly, I feel like I don't
5:06 really need it. So let me show you my
5:07 exact coding workflow. So the way that I
5:09 do all my coding is primarily in this
5:10 tool called Conductor. Once again, not a
5:13 sponsored video by them. But I did make
5:14 a video going in-depth into Conductor in
5:16 this video right here. Oh my god, the
5:18 video flopped. You check it out. It's
5:19 actually a good video though. But
5:20 essentially, what it is is it is a
5:22 really nice claw code wrapper that lets
5:24 you spin up individual work trees really
5:26 easily and have these dedicated agents
5:28 working on multiple tasks at once. So my
5:30 workflow is really, really simple. I
5:32 start off everything with claw code plan
5:34 mode. It writes out my plan. The one
5:36 thing I do with my plan is I tell claw,
5:38 "Write out the plan in a phase-by-phase
5:41 implementation." And the reason I do
5:42 this is because when I actually
5:43 implement the feature and implement the
5:45 plan, I only implement one phase at a
5:47 time per PR. I hate getting gigantic PRs
5:50 where we're merging 5,000 line changes
5:52 at once. It is impossible for me to
5:54 review and actually have a good review
5:56 of the code and a good understanding
5:57 code that is written. So I make things
5:59 really small, really granular to make it
6:01 easier for me to review the code. So
6:03 then I tell it to do phase-by-phase. And
6:05 typically, the way I structure it is I
6:07 try to do all the back-end and all the
6:09 database changes first. [music] And then
6:11 typically, those are like the bigger,
6:12 meatier things that need to get done.
6:14 Then the UI usually comes last because
6:16 it's easier to wrap around the back-end
6:18 functions once the UI is all wired up.
6:20 And then once I get the plan written
6:21 out, I actually commit it into this
6:23 dedicated plan repository just so that
6:25 everything is tracked with version
6:26 control. Then when I actually go to
6:28 implement that plan, I just tell it to
6:30 implement phase one and phase one only.
6:31 Nothing else. Once it's done, I review
6:33 it and it looks good to go. I then tell
6:35 claw, "Okay, update the plan to mark
6:37 that phase as completed," as you can see
6:39 right here, "and to add any code
6:41 pointers or any additional context from
6:43 our conversation into your plan." And
6:46 the reason why I can do this is because
6:47 the phases of work that I'm doing are
6:49 kind of chunked small enough where it
6:51 can be done within one conversation. So
6:54 it has a full context of everything
6:55 that's written out, especially with the
6:57 new 1 million token context Opus 4.6
7:00 model. So then it knows all the context
7:02 that can be dumped into marking this
7:03 phase as completed. And then once you do
7:05 that, I also have one more thing that I
7:07 do before I make my PR. So if you look
7:10 at my codebase, you're going to see so
7:12 many different claw.md files. And the
7:14 reason I do this is because every single
7:16 one of these claw.md files, it is the
7:17 source of truth for one particular
7:19 feature in my app. You can see I have a
7:21 claw.md for how authentication is
7:22 handled, for how the spy V2 feature is
7:25 handled, the content remix is handled,
7:26 the settings and billing page is
7:28 handled. Oh, and just for some context,
7:30 the app that I'm building is called
7:31 Yorvi. It is a social media marketing
7:33 tool to help you make better viral
7:35 content to market your app or business
7:37 on social media. And the way that we do
7:38 that is we have a viral content database
7:40 for you to get inspiration for good
7:42 viral marketing, specifically marketing
7:44 content out there. And then if you find
7:45 content that you like from our database
7:47 or content that you find on the internet
7:49 yourself, you can upload it into our
7:51 content remix tool. And then you can
7:52 then remix that video to fit your brand,
7:55 your niche, your whatever, while still
7:57 maintaining that original video's viral
7:59 format. So we just help you create and
8:01 script out highly viral optimized
8:03 content scripts, specifically scripts to
8:05 market your product on social media. And
8:07 then to give some more context on this
8:08 plan right here, the spy V2 event-driven
8:11 alerts, this is for this feature here
8:13 where we have an account spy tool, which
8:15 is under a work in progress right now,
8:17 which lets you spy on different accounts
8:19 out there that you might have as
8:20 competitors or content inspiration. And
8:22 then we detect if any outliers or really
8:24 high-performing content comes out. And
8:26 if they do, we send you an email alert
8:28 being like, "Hey, you check this video
8:30 out. It's doing really, really well for
8:31 this account. Maybe you want to copy it
8:33 within our existing content remixing
8:35 tool." So then that's what the spy V2
8:37 event-driven alert is all about. It's
8:38 about a better way of creating and
8:41 alerting users about posts that are
8:42 popping off and going viral on certain
8:44 accounts that they're tracking and
8:46 spying on. So with all that in mind, the
8:48 last thing that I do with all these MD
8:50 files is after I update the plan and add
8:52 any context, I then tell claw, "Look at
8:55 all the claw.md files and see which
8:57 claw.md files are referencing this
9:00 feature or this code path and update
9:02 those claw.md files with any relevant
9:04 changes to the changes that we just made
9:06 in this particular phase of our plan."
9:08 And this is really important because the
9:10 claw.md files is what's used for any
9:12 type of future context for future LLM
9:14 and coding work in general. So always
9:16 make sure to keep those claw.md files up
9:18 to date. And that's it. That's my entire
9:20 AI coding workflow. Really only two like
9:23 special things I do in the beginning and
9:24 at the end. But other than that, I just
9:26 tell AI to build what I wanted to build.
9:28 Now, I'm not allergic to building out
9:30 skills or building out agents, you know?
9:31 Probably going through this and talking
9:33 about this, it is probably beneficial
9:34 for me to create a dedicated skill on
9:37 creating plans in this particular
9:39 format, like phase-by-phase, and to
9:41 write that plan into my plans directory.
9:43 And it's probably beneficial for me to
9:44 create a dedicated skill to also say,
9:46 "Hey, look for all the other claw.md
9:48 files and update them if necessary." But
9:51 other than that, it's a pretty simple
9:52 approach. And I think if I were to give
9:53 any advice for anyone trying to build
9:55 out their own AI coding workflow, I
9:57 would say just try to use it as simple
9:59 as possible. Just tell it to do code,
10:01 write code, how you want it to code. And
10:02 then as you get more and more reps in,
10:04 you're going to see certain nuances,
10:06 certain workflows that you find yourself
10:08 repeating over and over and over again
10:09 in every single conversation, then you
10:11 should just create a dedicated skill or
10:13 a dedicated agent to automate that part
10:15 of your AI coding workflow. I'm just not
10:17 a big believer in just like copying
10:18 anyone's stack like this G stack with
10:20 all these crazy skills. I feel like AI
10:22 coding and AI uses in general is so
10:24 personal to every single individual that
10:26 you will find out your own workflow. And
10:28 because it is so easy to create custom
10:30 workflows with AI, you can just tell AI
10:32 to build the skill, build this
10:34 automation for you. And I think that's
10:35 how you're going to get the most gain
10:36 from any AI coding workflow. It's by
10:38 creating and optimizing your own
10:40 personal one, rather than copying what
10:42 someone else is using out there on the
10:43 internet. Obviously, watch videos like
10:45 mine, other creators or like Gary Tan's
10:47 and get inspiration for what other
10:48 people are doing. And then you can test
10:50 it out yourself and see if you like it,
10:51 but I personally, I don't know. I don't
10:53 know if I personally would just like
10:54 copy this entire 20 agent, 20 skill
10:57 directory into your workflow. Like I
10:58 would do it little by little and adapt
11:01 it all to your own personal individual
11:03 workflow as well. But that's all I got
11:04 for today. My once again, my flow is so
11:07 simple. And even then I'm still able to
11:08 build out this app as a solo developer
11:10 and scale it to over 25,000 users. So
11:13 complexity is not a prerequisite for
11:15 good high output with AI coding. But I
11:18 want to hear from you in the comments
11:19 down below if you actually do have a
11:20 really involved coding workflow and
11:22 coding process. Like do you really find
11:24 that much more gain? Am I missing out?
11:26 Am I being a boomer right now? Please
11:28 keep me updated, let me know. I want to
11:29 hear your thoughts in the comments down
11:30 below. That's all I got for today.
11:32 Thanks so much for watching and I'll see
11:33 you in the next one.


---

## Source: VideoTranscriber_This AI Agent creates 1000+ SEO Pages in 52 min (Claude + MCP + Cursor).txt

- Original path: `VideoTranscriber_This AI Agent creates 1000+ SEO Pages in 52 min (Claude + MCP + Cursor).txt`
- Size: `47802` bytes
- SHA256: `FA57B970A112F4BF88B70CE889D4D2BF0546D099104FDB36FCE3DCA719893E6C`

---


Anyone could become a developer with AI.   There's a bunch of tools that you can   cobble together with Cursor, Claude, and   a few others. And we go through how a   non-technical person uh in 3 weeks is   now building apps that are getting   thousands of visits every single month.   I think a lot of people have avoided   Cursor because it's pretty daunting.

 But   the upside of learning a tool like   Cursor is totally worth it. And this is   a comprehensive tutorial meant for   non-technical people with the apps that   they could build to help get thousands   of customers uh for your startup. Uh   watch this to the end uh because the   people that do that I think are going to   be extremely well equipped for for the   future ahead of us.

  [Music]   We got the boring marketer uh on the   pod. He is leading the charge of   automating marketing with AI. So, James,   what are people going to get out of this   episode if they stay to the end? Yeah.   So, over the last 3 weeks, I've gone   deep into Cursor and I want to show you   exactly how I set it up to get things   done.

 and I'm going to give you a super   actionable workflow that uses MCPs and   Claude code so that you can get more   traffic to your website. Cool. Let's   let's rock. All right. So, I'm going to   share my screen and uh we're going to   pull up cursor actually. All right. So,   this looks pretty scary uh to a lot of   people when they first open it up.

 It   was really scary uh for me until I just   started getting in here and and playing   around. So uh what we have here on the   right this is cursor's agent. So this is   kind of like a a way to generate code a   way to do research a way to chat uh in   natural language so that you can build   things so that you can understand sort   of like uh what is possible and the   agent can understand your codebase in   great detail.

 So the way that I started   with cursor   um actually I had a a chat with a friend   of mine named Amir. He kind of showed me   how he was using cursor and I was like   wow this is really cool I got to dig in   and I got to learn more. So I started   with uh cursor's agent. Um but what I   found was that I was running into a lot   of the problems that I had faced using   other like vibe coding platforms.

 I   would have a lot of bugs. I would have   to sit there and go back and forth a ton   and uh you know I was wasting a lot of   time and I heard a lot of people talk   about uh Claude Code and uh I installed   Claude Code and uh what you can see down   here is uh is a terminal um if you can   see that at the bottom of my my cursor   screen and you know you have a terminal   on your uh on your desktop uh But   there's a terminal within cursor.

 And   since I don't really know much about   terminal, I just decided to use this   one. And um to the right I've got my   cursor agent. Uh and down here I've got   my terminal. Above the terminal I've got   a little notepad so that I can like kind   of plan out a project, just brainstorm   and dump some thoughts.

 And on the left   uh that's where all of like the files   that include the code uh live. I'm not   even going to go into those because I   don't even look at them to be honest   with you. Um, so my goal here today is   to show you how I use cursor agent to do   research and then we're going to use uh   claude code to actually execute the plan   and we're going to deploy it and we're   going to see how it looks.

 Okay, so u   let's start up claude code and uh you   can see down at the bottom of the   terminal I'm just typing claude. Um, if   you go to like anything like chat GPT or   go to claude and and you ask, hey, how   do I install claude code in my terminal,   it's really easy. It'll give you like   one line.

 You copy and paste that into   your terminal. You hit enter and then   it'll ask you for your credentials.   It'll give you a link. You click the   link. You go to an anthropic website.   You enter your credentials for Claude.   Boom. You have Claude code in your   terminal. It's really that simple. Um,   if you want to get some insight around   like what you can do with cloud code,   you can just ask it.

 That's like how   I've learned how to use it. A lot of   people are like, "Hey, give me a   tutorial for like how to use cloud   code." The best way to use cloud code is   to ask how to use cloud code. So, um,   you know, that's what I'll do. Uh, so   we'll start up cloud code. You can see   it says welcome to cloud code.

 It gives   me a couple little instructions. Uh,   asks, you know, do do help for help,   status for status. So, if you just click   this uh this slash, you can see a lot of   different uh options here. Um I don't   even mess with any of this to be honest   with you. Um I actually just found out   about this as someone was asking me   about Claude's planning feature.

 Um so,   okay, some people ask me before we get   started like why do you use Claude code   instead of just doing everything in   cursor agent? I've been asked that on X   a ton. And the simple answer is I find   that cloud code is much more successful   at getting me to a working completed   project.

 And the reason is because a I   believe that claude code has a lot more   context on the files that it's building   and my sort of complete file structure   within cursor. And B, it does a really   good job at planning out its tasks. It's   very logical. It's very streamlined. and   you can follow along and understand   exactly what it's doing the whole way.

  Now, throughout those tasks, it's going   to give you updates. You're going to   have these little like check marks so   that you can see exactly what it's   doing. You can ask it to stop at any   time if you want. And then it will   confirm with you if you actually want to   uh to push something live or to create   something.

 Real quick, I need to tell   you about something that's helping me   sleep better at night as an   entrepreneur. I was running multiple   companies with money scattered   everywhere, zero spending visibility and   making growth decisions pretty blind. I   knew there had to be a better way. And   my friend told me about Bracks. So I   switched and now I have mission control   for every dollar.

 Spend management and   visibility, virtual cards for my team,   and earning cash from the same day   Treasury product. I was leaving so much   money on the table, but not anymore. I   have a financial operating system for   our businesses to make decisions so I   can spend smarter and move faster and   it's been a total gamecher.   I'm loving Brex so much I reached out to   them and asked them to sponsor the pod.

  Start sleeping better. Your financial OS   is waiting. Brex is giving SIP listeners   $7,500   in perks at brex.com/sip.   Now, there's two other sort of scary   things that I have set up here that I   just want to clarify with people as   well. Um, after I create a project, I   deploy it on Versell.

 Now, uh, Verscell   is like a complete sort of web app and   website deployment infrastructure. So   it'll host, it'll make sure it's fast,   it'll make sure it's optimized, and it   makes it really easy to do it right from   cloud code. So it's a similar process to   install that in your terminal uh as   installing cloud code.

 Go to an LLM,   say, "Hey, hey, how can I deploy on   Versell with Cloud Code from my   terminal?" It'll give you a little code   snippet. Boom. It'll install uh the   package, and then you can sign up for an   account, link up your credentials. It's   a pretty straightforward process. So,   that's my setup. All right. Are you   ready to get into some fun stuff,   dude? You got me fired up. Absolutely.

  All right. Cool. And, you know, so far,   uh, again, I started this 3 weeks ago   and my goal was to go as deep as   possible as I could into all this so   that I could essentially try to become a   developer. And so far, like yesterday, I   launched a uh a keyword research app. I   uh put the public repo out on X so   people can download the code and use it   and create their own variations.

 So uh   I'm actually like contributing which   feels kind of cool to the development   world uh as a totally non-technical   boring uh marketing guy. All right, so   uh what I want to do I want to show you   one of my favorite Vibe marketing use   cases for how you can like implement   this whole stack.

 And I mentioned MCPs   and I know that you've had a lot of   guests on to talk about MCPs and the   audience is probably a bit familiar with   those at this point. So I'm not going to   go into great detail with that. To set   up an MCP, I just ask Cursor agent how   to do it. Like it's it's literally that   simple. There's no secrets.

 If you've   never set up an MCP before, say, "Hey,   cursor agent, I've never set up an MCP   before. Help me get started." Okay? Then   it'll go and look for MCPs that you can   install. Start with a really really   simple and basic one. Uh you can start   with firecrawl. You can start with   perplexity.

 90% of the MCP uses that I'm   doing are with firecrawl or perplexity.   All right. So, uh let's go. So, um the   goal of what we're going to build today   is I want to build a bunch of pages on   the vibearketer.com   um that are going to go and rank for   search terms. uh that this could be   Google searches. This could be people   searching for information in chat GPT,   whatever.

 Um, so we're going to go and   find keywords that are relevant to my   business. We're going to have Claude   Code build up a page and then we're   going to look at the page. We're going   to see how we like it. Uh, you know,   you're a lot better at design than me. I   suck at design, so maybe you have some   ideas for how we can improve the page.

  We'll work with Claude Code to make some   edits. And uh if we like it, we can spin   up more pages or we can go deeper and   optimize that page a little bit. So the   first thing that uh that I would do is I   would come here and I would just start   vibing with cursor agent using some   MCPS.

 So, uh let's let's just say um use   the firecrawl mcp   to uh scrape   the vibearketer.com   and create a MD. So, this is a markdown   file. This is just a text file that it's   going to create for me. Kind of like a   Google doc with a complete summary.   All right. So, uh, I entered that   prompt. And what's happening is, uh, the   cursor agent is telling me, hey, I'm   going to go and use Firecrawl, uh, to   scrape the website.

 So, it's going to go   and it's going to look at everything on   the site. It's going to look at the   text. It's going to look at the images.   It's going to look at all of that stuff.   So, you can see that it's calling these   tools uh, in the background. It already   scraped the site. It's not a very big   site.

 And now it's creating a   comprehensive markdown summary file. So   it's just consolidating all of that   information into a document. Make sense   so far? Yeah. And the way to think about   Firecrawl is it is it just to think   about it as a scraper? Yeah. It's   basically a a really great scraper.   That's how I use it.

 They've got some   other like features and things that   they're building and deploying, but I   use it as just a scraper.   So um here we go. We've got the results   of using the firecrawl MCP. Um, and   again, the beautiful thing about these   MCPs within cursor is that I can execute   a fire crawl scrape with natural   language.

 I can just say, hey, go use   this and do this with it. And then it   gives me a document that's now within my   development environment. Okay. Now, when   I want to do something with this   information, I can just reference this   document to Claude Code or to cursor   agent and it'll have context on   everything that's on the Vibe Marketer   website.

  All right. So, um, cool. It's got some   uh key statistics. It, uh, it it got my   core offering here, uh, main features,   uh, etc. Okay. So, now that we have some   information uh about the website, um   we're going to go and uh and find some   relevant keywords uh that I can go and   try to create content or web pages   around so that I can rank for those.

 All   right. So, the next thing that I'm going   to do is I'm going to use the Perplexity   MCP. Uh Perplexity, I I know you just   did a video on Perplexity. They're   absolutely on fire. Uh, I love their uh   their API and their MCP. Uh, I use it   for all kinds of research and I'm always   amazed at like what it can do when it   returns me results. So, um, let's see.

  Now, use the perplexity MCP   um to   find relevant   um, programmatic   keyword ideas for my business. Okay.   Now, before I hit enter on that, what's   programmatic keyword ideas? So, keywords   are just things that people search for.   All right, programmatic keyword ideas.   If you think about like Zapier, they're   like a great use case for programmatic   uh SEO or whatever.

 They've got like   tons and tons of web pages for all these   really like uh longtail or specific   search terms like how do I connect uh   Slack to Google Docs or something like   that? And they've got a web page for   each and every one of those search   terms. All right, so maybe they've got a   hundred,000 pages. I don't really know.

  I don't need 100,000 pages, but it'd be   cool if I had a thousand pages. And it'd   be cool if out of those thousand pages,   they each got 20 visitors a month   because they were targeted to keywords.   And it'd be even cooler if I could   execute that entire strategy right here   in this development environment.

 And   then within a few months, I was getting   20,000 visitors a month organically to   my website. That's the goal. That would   be cool. Yes. So, let's uh let's see if   we can make it happen. All right. So, uh   we're going to use the Perplexity MCP to   find relevant programmatic keyword ideas   for my business.

 So, I'm finding keyword   ideas and uh these are also known as as   seed keywords. I haven't actually gone   out and done the keyword research yet.   I'm just trying to get Perplexity to   come up with some concepts and some   ideas for this programmatic approach.   All right.   And one quick thing is I noticed you're   using claude for Opus Max in the agent.

  Is there any thinking behind that? Um I   always like so I'm I'm always trying to   use the best model that I can and for   this purpose here it's probably way too   much. It's probably overkill. Typically   Opus Max is more expensive and uh it's   for like really complex things. Um, but   I just have it here to make sure that I   can get some like good insights and good   results for uh for the viewers and the   listeners.

 That being said, if you're   getting if this is going to help you get   20,000 visitors a month on autopilot, is   it not worth it? Yeah, a few extra bucks   uh to use the best model is totally   worth it. um especially kind of in this   planning phase and you know a lot of   people gloss over this part of vibe   coding or vibe marketing uh the planning   and the research step.

 Everyone wants to   get to like the sexy workflow or the   sexy like output but really like uh the   magic is in knowing what you're actually   like focusing on and putting all these   efforts towards. So, I spend actually a   lot of time just kind of like planning   this stuff out, doing the research,   calling these MCP tools, building these   like strategy documents, which we'll get   a little bit deeper into uh down the   line.

 So, Perplexity is working right   now. Uh let's uh let's see what's   happening.   All right, cool. So, it uh it called the   tool   and uh if you haven't worked with these   tools, sometimes they do take a little   bit of time. Totally natural. Sometimes   they get stuck in like an AI loop and   you have to just like stop stop it and   and try again.

 So, uh looks like it's uh   it's doing its job though.   I mean, even human beings get caught in   a loop sometimes. Oh, yeah. We get   caught in a vibe loop.   We're just we're just in these tools and   using AI and not understanding what's   going on in the real world. At least   that's been me for like the last three   weeks. I've been in a vibe loop.

 All   right. Vibe vortex. Yep. A vibe vortex.   It's so crazy because this is something   that you would spend thousands of   dollars on with an SEO agency. Exactly.   I've I've spent thousands of dollars on   this before in the past. Yeah. Yeah.   It's even starting to generate code for   how we can do this. Okay.

 So, uh, now we   have some relevant programmatic keyword   opportunities and yeah, as you said,   Greg, like to find these, typically it   would either take you an absolute like   ton of time to go into, you know,   whatever like clunky SAS tools are out   there that you have to go through and   dig for these types of keywords.

 Uh not   only that, you have to think about the   strategy and you know which ones are   relevant and and stuff like that. So um   the my favorite one that I see here is   like AI tool comparisons. I think that   that would be a really solid one u with   all the tools that are coming out and   stuff.

 There's a lot of search volume   out there uh for people uh comparing and   contrasting uh these different things.   So, let's uh do AI tool comparisons for   marketing. So, I'm just going to follow   up here. See what it says. It's using   perplexity again. Um so, you know, as as   I've talked about and as you've also   talked about, um you know, the best way   to work with AI, it's not like a one   shot like you have to go back and forth.

  You have to reprompt you know you have   to kind of understand what's coming   back. if that sort of fits uh what   you're looking for. And it takes a   little bit of back and forth and a   little bit of work to get what you want.   It's almost a mistake to one prompt and   accept what the answer is. Yeah. It's   more like a conversation.

 And you know,   people that create these like super   complex prompts that say like use this   prompt to do this. It's like that's not   really how most people or really anyone   that I know of that uses AI really well   is is doing it. Um, so we have this. Uh,   now, um,   I want you to use the data for SEO   MCP to research our keywords and give me   an idea of the potential search volume   of our approach.

  So, it's already found a bunch of like   relevant AI marketing tools. Um, we're   going to go out there and uh and get   some keyword research done. Uh, I have   another MCP here. Um,   let's see that I'm trying to use called   data for SEO. And the way that I like   validate these keywords and I get   specific numbers and metrics from them   is by using that MCP.

 So it's pretty   cheap. I don't have to log into like   overwhelming SAS tools. I can do keyword   research right here with AI assistance.   And really I don't have to be an expert   on, you know, search and and all that   stuff to do this.   All right. So you can see those   head-to-head comparisons, right?   Yeah.   So it went out and it found that uh you   know if we look at like I don't know   HubSpot versus Zapier or Synesthesia   versus Haze Genen or Jasper versus Chat   GBT those things are getting search   volume. So um the head-to-head   comparisons uh 20 tools times 20 tools   uh with 10 different use cases that's   4,000 combinations. Average volume per   keyword 200 to 500 per month. Total   potential uh search traffic 800 to two

  million searches a month. So that's a   ton of traffic. Uh I can get super   dialed in and and specific that's   probably got some pretty broad and   competitive uh stuff in there, but um   I'm just going to like uh develop a plan   so that we can we can actually start   building. All right. So um cool. Uh, now   I want you to create a PRD   that I can use to build my first   programmatic page template based on this   strategy.

  Use the information that you've gathered   to prioritize a tool comparisons,   b relevant tools to the vibearketer.com,   and c a high priority   keyword that we can   create   solid content around.   So PRD is short for product requirement   document. So why you why you doing this   at this stage? So, why I'm doing this   here is because I just want to like get   all the context of the research steps   that we've done into one clear uh list   of actions that we're going to go and   provide cla   right now. So, I'm taking advantage of

  that so that I can just kind of   consolidate and arrive at like a clear   final plan. Yeah. I think if you what   I've noticed is if you don't create a   PRD, the output ends up being worse,   like very diluted. Yeah. So, what's cool   about the PRD is you you can kind of   like drip feed context.   And because of that, because of how   tight the the drip feeding is, you end   up getting better results.

 Yeah,   absolutely. Yeah. It creates a super   structured path uh for like an agent or   an LLM to follow and it's going to   prevent you from having to like, you   know, go and get artifacts and and   different documents and other things   and, you know, go back and reference   those again, have a bunch of other chats   going on. So, uh here we go.

 Um, we've   got a PRD   and, um, let's take a quick look at it.   Um, it has provided us, uh, an overview,   the objectives, um, success metrics. So,   our goal here is 10,000 organic visits a   month within 90 days. That sounds pretty   cool. Uh, it even developed a persona.   Um, it went into user intent analysis.   So it actually looks at keywords and   tries to understand uh if these keywords   have intent behind them and people are   actually interested in the topic and   want to buy something.

 Um so   uh for this uh use case um let's go   ahead and do video and creative tools   tier three. All right. So, what I'm   going to do is I am going to fire up   Claude Code over here. And uh what I'm   going to do is say, "Hey, uh we have a   new project to work on   for the Vibe Marketer   production website.

 Um, so I've got a   folder over here under that cursor vibe   in the upper uh lefthand corner. And I'm   not going to open up all of my different   project folders and stuff like that. I   know what folder my website is in.   There's a bunch of code in there. Again,   I don't even know what all of it does,   but I know that it's all contained   there, and I want Claude to know that   we're working on that specific project.

  So, uh, let's let it know. So, we have a   new project to work on.   Let's fire them up.   So, what it's doing now is it's going   through that folder. It's looking at all   the files. Uh it's understanding like   you know what it's all about, how the   website's designed, how it looks, stuff   like that.

 So, um we're sort of focused   on the right thing together. And then it   says here are some possibilities of what   we can do, but I want to work on this   strategy that uh that we created with   cursor agent and with these MCPS. So,   I'm going to say find the uh   programmatic   SEO   comparison   PRD   file in our environment.   That is our project.

  Okay. And here is that document. And uh   Claude is going to search uh my file   system here. And it already found the   file. Now it's reading through all the   information, the goals, the objectives,   how we want to go about this, the   example keywords, and all of that. So,   it found the PRD.

 And the next thing   that Claude Code does after it   understands our project and what we're   trying to work on now, it's going to map   out a plan. So, it created a to-do list   right here. So, it's going to set up a   project structure. It's going to create   the data structure for the tool   comparisons.

 It's going to build uh page   templates so that if we want to create a   bunch of these, it can do that in a very   consistent way. It's going to create the   initial tool data for chat GPT versus   claude comparison. It's going to build   an interactive comparison table and   pricing calculator. It's going to   implement email capture and community   CTA components, which are the main sort   of calls to action that I currently have   on the vibearketer.com.

 And then it's   going to add an FAQ section with schema   markup. All right, cool. So, um, it's   saying, "I see your project. This is an   excellent strategy to capture traffic   based on the PRD. Should I start   building this or integrate it into your   existing uh, production site?" So, I   want this to be within my production   site.

  And, uh, it should start getting to work   here relatively quickly. So, let's see   what uh, what Cloud Code does next.   And if we take a step back here, you're   literally coding right now. Yes. Right.   Yes. Yeah. Like I am just building and   coding with prompts and I don't really   know what's happening.

 Um, but I'm   following along and like at this point   after 3 weeks of of being in a in a vibe   vortex. Um, I am starting to understand   like how all this fits together and and   how it works and and stuff like that.   When I first logged into all this, I was   like completely overwhelmed. I was like,   I am never going to have figure this   out.

 like but you know it's it's just   that initial like week or so and it's   it's getting momentum and it's going   into this platform and taking some small   actions like every day and uh you know I   I said on X like hey I'm just going to   learn this in public and I'm going to   share like what I'm building and that   helped me develop a little bit of like   accountability around doing it and   getting in there and uh that's what I   did but yeah I'm literally coding right   now uh or Claude Code is actually coding   Um, but uh, yeah, that's that's how my   process has gone so far. And what's the   what's the upside for someone to   actually learn this? Yeah. I mean, it's   it's really limitless to be honest with   you. Like what I'm seeing is that   there's sort of this like convergence   happening uh, between like a VI marketer   like like me and like a developer, like   a full-blown developer. And I think that

  like cursor and claude code and these   tools make the uh ability of like a   developer accessible to anyone who's   willing to get in here and mess around   and tinker and get over that initial   like uncomfortable phase. And um my   friend Amir who I chatted with about   this and he kind of introduced me to   cursor said that like he can see that   cursor could be like an interface for   everything.

 And I'm starting to see that   uh here as well. I mean you can create   content, you can create web pages, you   can do research, you can actually   implement all of that stuff uh yourself,   you know. So, it's not like you're going   into uh an inate in innate in workflow   and you're spending like hours setting   this thing up and it's spitting out like   a Google sheet and then you have to   figure out what the hell do I do with   that? It's like everything that you're   producing here is extremely actionable   that cloud code can go and implement on   your website in an app as a new project   whatever. So it's like a very closed   loop environment uh where you can go   from insight uh to action extremely   quickly. So right now I'm seeing tons of   you know people come up coming up with   NA to end workflows like especially on X   and LinkedIn they're like comment NADN   to get the N workflow. Are you saying

  that cursor in a lot of ways is just a   more powerful version of NAN? If you   think about inad um you know you're   going and doing essentially a lot of   this what you're seeing claude code do   manually. You're you're mapping out the   logic and then um you are figuring out   how to set up a system that executes   your goal.

 So you're selecting these   different sort of like actions that are   going to happen. Hey, I want to use this   to go get this data. Then I'm gonna have   to format that data in the right way.   Then I'm gonna have to pass it over to   this tool and make sure that's set up   right. Then I'm gonna have to figure out   where all this is going.

 Then I'm gonna   have to maintain that system and   understand like where bugs are happening   and all that stuff. It's a very   inefficient   way to build a workflow in my view after   I've really gotten into here and figured   out the power of like cloud code and   cursor. Any innate end workflow can   build a can be a micro app or a micro   tool that you can build with cloud code.

  And what are the benefits of that? Well,   the benefits of that are that you could   have a clean user interface that anyone   can access the power of your tool or   your workflow. Can't really do that   within very easily. Um, you can make   edits very fast uh without having to go   into each individual node and figure out   what the problems are and how to debug   it. It's a lot simpler.

 It's a lot   faster. It's a lot more streamlined. Um,   I did a comparison yesterday. Uh, I   tried to build a keyword research   workflow in in my process was I came   into cloud code. I said, "Hey, build me   an inadn workflow for this keyword   research process." It went and read the   inaden docs, all that stuff.

 It gave me   a file to upload into into naden. By the   way, this is how most of those like   Twitter or X giveaways happen. people   like go into an LLM and they create a   file, they upload it onto Naden, it   doesn't even work and they say, "Hey,   I'm giving this away." That's the dirty   secret about it.

 Um, and then, uh, so I   got that into N in Naden and I tried to   run it and it didn't work. Like it was   all over the place. Um, I had to figure   out how to debug all these different   steps. After about an hour, I was like,   you know what, I'm not doing this. Then   I I went back to Cloud Code and I said,   hey, this process that I want to   accomplish, build it as an app.

 In 30   minutes, I had a fully functioning app.   I published it uh to a production site.   It's live on GitHub. People can go and   download all the code and it works   perfectly. So, it was way easier. And   through the whole process, I'm just   using natural language. I don't have to   know how to use Naden.

 You know, I can   just come in here and talk back and   forth with with cloud code and get to   where I want to go. with the caveat of   you have to get over the hump of   understand like this is pretty jarring   for someone who doesn't understand code   but like once you're in it like like you   said right it took you a couple weeks of   being like okay I understand what's   happening here yeah yeah it takes a   couple weeks to like get comfortable in   here it feels very foreign um you know   this terminal aspect is a little bit   scary uh before I found cloud code I was   just using cursor agent and I wasn't   wasn't even messing with the terminal,   but Claude Code lives in the terminal.   Um, and uh, really claude code turns   your terminal into sort of a chatbased   interface. So, you don't have to know   what it's doing. You just have to know   like what to ask it and uh, and and   things of that nature, you know. And as   you do this, you'll start to understand

  sort of like, okay, this is kind of   cool. Now I get like where these files   are and how a project is structured and   I'm I'm learning a little bit about code   uh just watching Claude. Uh I think this   is kind of like pair programming. You   know, if you're like a beginner and   you're paired up with like a senior   engineer and you're working together   back and forth like I'm learning how to   do this with Claude code as kind of like   my senior engineer and I'm like the   intern just kind of like learning as we   chat and learning as we go. You're not   even the intern. You're like you you're   like up you're you're going to computer   science school next year, you know?   Yeah. Um you're just asking the   questions. Yep. Yep. So, um just to get   an update on uh our to-do list here,   it's already moved through a bunch of   items. Uh right now it's building an   interactive comparison table and pricing   calculator between uh Claude and Chat   GPT. That's kind of cool. I don't know   what that means, but we're going to

  check it out once we uh once we push   this live. Um,   cool. But yeah, like uh just the   learning process um of using this the   development process, whatever you want   to call it, I'm having way more fun in   here than I ever had with any like   nodebased kind of like workflow tool,   you know? Totally.   All right, we are uh we're still working   here.

 The other thing that I want to   point out, um, you know, if you've used   like Vibe coding tools, something else   that I find Claude Code is much better   at, um, it just seems like way more   detailed like uh, with the work. It's   it's going and understanding like the   code base on a on a deeper level in my   opinion.

 Um, I could be wrong, but   that's that's what I gather from just   kind of watching what's happening here.   Um, and then the other thing that's   happened is like every time that I've   used cloud code versus like   off-the-shelf platforms, like you know,   I'm spending an inordinate amount of   time doing debugging uh when I try to   vibe code on your typical tool.

 And uh,   you know, this can essentially oneshot   something for me uh, way way faster with   far fewer errors, right? And like we   talked about, it's not really a one   shot, right? I'm still going back and   forth. I'm I'm pulling up that page. I'm   going to go look at it. I'm going to   debug it.

 I'm going to tweak some   things, you know, stuff like that. So,   um, yeah. All right. Still building, but   we're almost there. We're on the last   task. Okay. So, uh, it's going to   install some little like icons for us.   Uh, while it's working, I just want to   point out another thing that I did, uh,   that people might find, uh, helpful.

 Um,   so,   um, our our friend Jordan built or   designed the first, uh, the   vibearketer.com landing page and it was   in like a landing page builder and I   realized, man, I can't do anything with   it. Like, I can't even access this   builder uh, from cursor and I was like,   how can I get that design in cursor uh,   so that I can work from it and I can   move really fast and make updates to the   site.

 So, I've never really used Figma   before, but I I found the Figma file of   the landing page. I went into dev mode,   which I guess is how web developers are   getting Figma files so that they can   build websites. Um, I didn't want to do   that. So, I installed a plugin called   Anima. And allows me to select each   layer of that Figma design and it   creates code for each layer.

 Um, it uses   Tailwind, which is a type of code. And,   um, I just copy and paste the Tailwind   code from each of those layers, um, into   into cloud code. And, uh, it was able to   use that information to a perfectly   match, uh, the style and the brand. And   I just have never been able to do that   uh, using any other like SAS tools   before.

 Yeah, I think that's cool   because if you're building like an MVP   for anything really, what do you need?   You need a brand that's going to hit   that's going to connect with people.   Yep. And a design and you know, yes, you   can use tools like cursor, vzero, bolt,   lovable, but sometimes you might just   want to hire a designer and designers do   often work in Figma.

 Um, and the ability   to just build it yourself and not have   to rely on a developer, uh, for the   whole solo founder who's trying to   build, you know, the one-man business. I   think that's really interesting. Huge   unlock. And you remember back in the day   how like as marketers, we'd have to go   and bug the engineering team every time   we wanted a landing page or an update or   something like that, even for like the   smallest things, and they would hate us,   you know? Yeah.

 Well, now they're   bugging us because they're like they   need work to do. Yeah, exactly. Or   they're like, "Hey, how can we uh how   can we use some some VI marketing to get   more customers or whatever." Yeah. All   right. So, um it's doing all kinds of   like analysis right now to see if   there's any errors in the page and uh I   think we're getting uh pretty close.

 You   know, the other crazy thing that that I   realized   um within cloud code, and there's been a   lot of like screenshots of this on X,   there's a little cost command. So, you   can you can type slashcost and you can   see how much you're spending in in   tokens on the on the platform. And uh   someone commented the other day like on   one of my tweets like, "Man, how much do   you spend on all these tools and and uh   and tokens and and stuff like that?"   that and I was like, you know, that's   that's a good question. I I actually   don't know. I haven't looked. So, I I   pulled up the cost this morning for for   Cloud Code that that I've spent so far.   And um to build uh like an app uh   yesterday, it cost me like I don't know,   20 bucks. You know, I thought it was   going to be I thought it was going to be   a lot more, but like it's not as bad as   you would think. Um the cool thing about   cloud code here also is you can switch

  the model that it's using. So you can   pick opus or uh you can let it run   default which is sonnet and then it even   uses like 35 haiku and 37 for some tasks   too. So it will help to optimize your   token usage based on the task   difficulty. Um whereas in cursor agent   if I just stayed on like max or whatever   I'd spend a lot of money or u or   whatever.

 Now cursor also has like an   auto mode that will do a similar thing   but again I just get better results with   with cloud code. So it's just my   preference. I mean two ways to think   about that because I know that people in   the comments are going to be like $20 an   app that's crazy. Yeah. Number one if   you wanted to learn how to code like I   went to a university to go learn how to   code.

 A university could cost a couple   hundred thousand dollars minimum. Yeah.   In the US for four years. So, you know,   at at 10 prototypes at $20, that's $200,   right? So, that's one. Number two is if   you're building an MVP and the ROI, like   you think that you're going to make more   than $20, like there's there's real ROI   there. Yeah.

 Yeah. From my perspective,   it's like, okay, if I build a micro tool   and I put it behind an email sign up or   something like that and I spend 20 bucks   to create that tool and I get a hundred   emails from people that are interested   in that, if I get one of those to go and   buy an annual membership to the   vibearketer.

com community, that's $200   in revenue uh with $20 in spend. You   know, that's a huge ROI. That's like 10   to one.   Like no brainer, you know. Um, okay. So,   uh, it looks like,   um, it's completed,   uh, the process here. Now, I'm just   going to do something real quick just to   show people like a thought process. Some   people might be like, well, how the hell   do I access the URL? Like, where is this   thing? Um, cool.

 Where can I find a URL   to check this out? I mean, you just have   to ask. Even if it's a dumb question,   you're not getting judged by by Claude.   It's it's not going to say, "Man, you're   an idiot." Like, at least not not at   this point.   All right, we're going to uh we're going   to actually deploy this page   and the development server and all of   that.

 Um, again, I used I I've seen a   lot of people talking about Versel. A   lot of people use Netlefi. Um, Verscell   looked cool to me. I went to like   chatbt03 and I was like, "Hey, tell me   the step-by-step plan for setting up   Versell with cloud code in cursor so   that I can deploy my projects uh easily   and quickly." And that's it.

 Gives me   some instructions or you can even do   that within cloud code and it'll search   the web and use all its functions to uh   to help you do that as well. So it gives   me a URL. Um, you know, for more   advanced people, uh, you can hook that   up to GitHub and it it automatically,   uh, you know, creates different like uh,   uh, deployments to your your code   repository on GitHub and it gives you   like a URL that you can get to, uh, to   go and visit.

 Let's deploy this to   our Verscell project.   I'm sure that uh   there's some uh developers out there   that uh are like, "What the hell are you   doing? Are you just pushing this live to   production?" Whatever. Um I'm totally   aware that I may not be doing this in   the best way. Uh but I'm learning as I   go and uh you know, I'm always open to   to learn better ways to do it. Cool.

 So,   right now it is deploying my project.   Uh, so that it can be online and we can   go and click around. Crazy. Yep. And if   we like it, I'm just going to go and   deploy a thousand pages today. I'm just   kidding. Maybe.   I mean, you could if you wanted. You   absolutely could. Okay. So, wait, we   have some live URLs.

 We've got some   URLs. Yeah. So, uh, we're going to we're   going to navigate to these here. Okay.   So, this is the production site that I   built. uh in cursor. Um it's much more   than like, you know, a basic landing   page. It's got the uh an email address   and all that hooked up. This is not the   one that we just did.

 Uh but it went   ahead and gave me that link. Um it looks   like it created an AI toolsh page. Wow.   Okay. So, uh can you see this, Greg? Oh,   yeah. All right. So, we've got a tools   hub and uh think of this as kind of the   the front page to your directory. Um,   compare the best AI marketing tools side   by side.

 Real test, community insights,   and actionable recommendations from   2,000 plus marketers. Now, here are some   amazing things. Uh, a like I didn't ask   it to write any of that content.   like it referenced the context in our   landing page in our project and created   that copy and I think that copy is   pretty damn good uh for a first go.

 So   real testing we test each tool for 30   days in real marketing workflows,   community insights, real feedback, vibe   test, our unique scoring system for   marketing specific use cases. I actually   love this and I think we should push   this like generally speaking all over   the place. Yeah.

 Um, so let's scroll   down. So we've got uh popular   comparisons. And if you remember, we   started with uh Claude V versus Chat   GPT. That was the only one we wanted to   do because we wanted to see uh what we   could even come up with. So um view full   comparison. Um so the complete 2025   comparison for marketers. Now couple   things I'm noticing as I look at this   page. Um 2025 it's relevant.

 It's   timely. right now. Which one should I   use today? This is a good signal to   search engines and LLMs that I've got   recent and valuable information. So, we   tested both AI tools for 30 days. Here's   our comprehensive comparison. Here's the   other amazing thing about this is that,   you know, like we've talked about   before, LLMs and search engines are   prioritizing userenerated content and   reviews.

 We're implementing that idea   right here with this community reviews   angle, which is going to make our page   stand out as these crawlers are going   out and looking for relevant   information. So, um, we've got a   comparison table of both of the tools,   pricing, uh, what it's best for for   marketing use cases, our rating. This is   actually correct.

 Long form content,   in-depth market analysis, Claude excels,   uh, which is awesome. Key takeaways,   TLDDR. Um, see what our community says.   Uh we have a pricing calculator like if   I wanted to launch these tools within my   team uh what's that look like uh for me   the vibe test uh it's got you know real   examples from the tests and things like   that community insights and poll results   top community discussions again this is   all like literal gold for ranking in the   search engines um we've got calls to   action throughout the page again I   didn't ask claude code to do that it's   smart enough to know that this page is a   strategy to get more customers for us   and then it has other recommendations.   So, um you can do alternative   comparisons to lead you to the next   page. This has internal linking and   another other a bunch of other valuable   things for uh going and getting traffic.   Then it's got FAQs. Uh still have a

  question. Boom. Even created a uh   example for a free guide here that we   could use as a lead magnet, which I   think is incredible. And this page looks   really good for a first go.   100%. Also,   some of these tools would give you an   affiliate cut. Yep. Right. So, if you   actually launch something like this,   this could just be like passive income   just all day. Absolutely. Absolutely.

  So, one last hack. I know you have to   go. Uh, now that this is live, I would   push this. I would I would go back to   claw code. I would make a few edits if I   wanted to. Like there's a few icons or   image files for the individual tools I   would have it uh put into the page. I   would probably launch 10 other pages   today.

 And then um after it's on   production, I'd go back into cursor. I'd   use the firecrawl mcp. I'd say, "Hey,   crawl this complete website. Find me any   technical SEO errors that you can fix."   So you've worked with agencies. It costs   a lot of money to do a technical SEO   audit and then have them go in and do   all the fixes, right? You can get the   full technical SEO audit, pass it to   Claude Code, it has the instructions, it   has your project, say, "Enter, fix all   the technical SEO issues on your site.

  You have a keyword focused strategy and   pages that are going to go and get you   traffic." I think this is just amazing,   dude. This Thank you for Thank you for   coming on. Thank you for spilling the   sauce. I I also just love how simple you   explain things. I want to plug your Oh,   I guess the Vibe Marketer, right? Yeah.

  Yeah. So the vibearketer.com is our   online community where we're doing   workshops with leading AI companies   getting demos. We're doing tutorials.   We're doing lessons in our classroom.   And most importantly, we're fostering   like an amazing community of AI first   marketers that are helping each other to   uh develop great strategies,   troubleshoot and implement this kind of   stuff every single day.

 So I'll include   the link the vibearketer.com   in in the show notes. Um, you also have   a YouTube channel. I'll include it. It   It's criminal how few subscribers you   have. Um, and if you sign up to the Vibe   Marketer, I think you guys send out a   free email, right? With just just proven   AI workflows and stuff like that.

 So,   yeah, even if you're not ready to join   the community. If you go to the   vibearketer.com, you'll see an email   list. Sign up. We send out our top five   workflows every week and a bunch of   tactical advice for how you can get   going on this kind of thing. Cool. Start   there. Thanks, James. Uh, dude, I I I   love having you on, so I I I I need a   feel in the comment section that that   people love having you on, too.

 Um, so   please please let me know. Please let us   know what you want James to cover next.   The boring marketer. He's he's spilling   sauce for free. He love to see it. I'll   see you next time. Thanks, Greg.



---

