# AI Coding Tools and Platforms - Full Transcripts and Source Material

This file preserves full source text for this topic. The short text above each source is navigation only; the source body is not summarized.

Related archive folder: `99_Archive_Originals`

---

## Source: vibe-coding-tutorial-and-best-practices-cursor-windsurf.txt

- Original path: `addintional info to add\vibe-coding-tutorial-and-best-practices-cursor-windsurf.txt`
- Size: `25861` bytes
- SHA256: `1F149B34504D515B144ADA794553FFE22EE899D32839B58987429E7059558A66`

---

Vibe Coding Tutorial and Best Practices (Cursor / Windsurf)

0:00 I've been Vibe coding like crazy lately
0:02 which basically just means using an AI
0:04 agent to do my coding for me very little
0:07 actual writing of code in fact basically
0:09 none and I'm going to tell you all of
0:11 the things that I learned along the way
0:12 to get the most out of it let's get
0:14 right into it all right so quickly what
0:16 I'm talking about with Vibe coding or
0:19 really agentic coding whatever you want
0:21 to call it is you're using this agent
0:24 based coding in cursor or wind Surf and
0:26 you can see it right here so there's
0:28 agent ask and edit this is not your
0:31 starting to code something you hit Tab
0:33 and it finishes that piece of code for
0:35 you this is I am literally trying to get
0:38 AI to write the entire application end
0:40 to end and so it's a little bit more
0:42 difficult to do and there are definitely
0:44 some limitations now first what is my
0:47 setup either cursor or wind Surf and I
0:50 have almost exclusively been using CLA
0:52 3.7 models mostly focused on the
0:55 thinking version so I'm using CLA 3.7
0:57 Sonet thinking right here now inur
1:00 cursor and wind surf you can set up
1:02 really any model that you want to do
1:04 that you go up to cursor settings and
1:06 here it comes with a predefined list of
1:07 models that you can choose from all
1:09 provided by cursor directly or wind Surf
1:12 and then you can also add models down
1:13 here the way that you add custom models
1:16 is essentially and it's not super clean
1:19 is by overtaking this open AI API key
1:21 here so you turn it on you add your key
1:24 and you can override the base URL you
1:27 can only do that once which means you
1:28 can only really have one non-open AI API
1:32 service but that's okay so here I use
1:35 grock and I put my grock key here grock
1:38 is formatted using the open AI API
1:40 standard so it just works now whatever
1:43 model you choose if you're using it with
1:44 the agent feature you want to make sure
1:46 that it really supports agentic behavior
1:48 and function calling and Tool calling
1:51 really well most models don't Clyde 3.7
1:54 thinking does so what I would recommend
1:56 doing first is getting a very specific
1:58 spec written that just means a very
2:02 detailed explanation of what you want
2:04 built and so I'm actually using grock 3
2:06 for that write a spec for an application
2:07 that will be a Twitter clone be as
2:09 specific as possible we're going to be
2:10 using python for the back end so I'll
2:12 just hit enter and I work with AI
2:15 separately to help me write that spec
2:17 and here you can see it writes out all
2:18 of the not only technical specification
2:20 but also how it operates how it works
2:23 Etc and here you can even see it's
2:25 writing out the database schema so this
2:27 is really complete here the API n points
2:30 and so once it's done you basically take
2:33 all of that and you paste it into cursor
2:36 I'll show you what that looks like so we
2:37 have a brand new cursor window you're
2:39 going to come up to the top right and
2:40 click this toggle AI pane here it's
2:43 going to open up the chat window if you
2:45 have a recent version of cursor the
2:47 agent will be the default I have clad
2:49 3.7 Sonic thinking as my model and
2:53 here's the important part we're going to
2:54 paste our spec in but before doing that
2:57 one other thing I learned and this is a
2:59 especially important as the codebase
3:02 gets larger is to use rules cursor rules
3:05 or wind surf rules both of the idees
3:08 support rules and the rules are
3:10 basically a way to tell AI to tell the
3:14 agent how you want to code what
3:16 technologies you should use what
3:18 workflows you want to use and this was a
3:21 huge Discovery for me because frequently
3:23 I would try to build something and it
3:25 would build it using some technology
3:28 that wasn't already in my step and it
3:30 would break other things if there was a
3:32 bug and I was trying to fix the bug it
3:33 would try to use a different technology
3:36 a good example is I wanted to use a SQL
3:38 database for everything but every time I
3:41 ran into an issue with SQL database the
3:43 agent would try to fix it by switching
3:44 to Json storage in a file and it was
3:46 just super annoying because I would
3:49 think it was working and then nothing
3:50 would be appearing in the database and
3:52 so on and so forth all right so
3:53 switching back to this is my actual
3:56 project I am going to show you where the
3:58 rules are so incursor set you go down to
4:00 rules and you can have user specific
4:03 rules which are rules for any project
4:06 but I like adding it to project rules
4:08 you add a new rule and it essentially
4:10 creates this cursor folder and within
4:12 that a rules folder all of these MDC
4:16 files are the rules and you can
4:18 reference them kind of like a system
4:20 message for the AI to work with thanks
4:23 to the sponsor of this segment MTH
4:26 access the best generative AI for just
4:28 $10 per month this includes the best
4:31 llms like Claude deep seek GPT 40 llama
4:35 models Mistral Gemini grock and
4:38 reasoning models like deep seek R1 and
4:40 03 mini and for that same price it also
4:43 includes the best image generation
4:45 models mid Journey flux Pro recraft
4:48 Dolly stable diffusion all in one place
4:50 and you can create custom amus to help
4:53 you on your projects these are kind of
4:54 like agents and you give them all your
4:56 custom context and they will know what
4:59 you need them to do you can install it
5:01 on any device Apple Android Windows
5:04 Linux you can do oneclick repr prompting
5:07 and so much more so definitely check out
5:09 mamouth they've been a great partner to
5:11 this channel tell them I sent you links
5:13 down below now back to the video so let
5:16 me show you my coding preferences this
5:19 is how it's formatted all natural
5:21 language description you can Auto attach
5:23 different files but I didn't use that
5:25 coding pattern preferences now let me go
5:27 through each of these and tell you why I
5:29 added them because hopefully it's going
5:30 to save you a lot of time by just
5:33 understanding why these things are
5:34 necessary which kind of reflects some of
5:36 the tendencies that these AI coding
5:38 agents have that don't really work all
5:40 that well so always prefer Simple
5:43 Solutions that speaks for itself avoid
5:46 duplication of code whenever possible
5:48 which means checking for other areas of
5:50 the codebase that might already have
5:51 similar code and functionality what I
5:54 found is that when adding new
5:56 functionality or trying to fix old
5:58 functionality it would often duplicate
6:01 code thinking that that code did not
6:03 already exist so now I'm explicitly
6:05 saying make sure you check everywhere
6:07 make sure this code doesn't already
6:09 exist and if it does fix that rather
6:11 than adding new working code another
6:14 thing that I struggled with is the AI
6:17 agents didn't have a good sense of the
6:19 split between Dev test and prod
6:23 environments and this was a huge huge
6:25 learning for me I would make some change
6:28 write some test for it the test would
6:31 affect the dev environment the
6:33 production environment would be trying
6:34 to use local stuff and it was just a
6:36 mess so now I say okay everything you do
6:40 you are going to take into account we
6:42 want separate Dev test and prod
6:44 environments here's another issue you
6:47 are careful to only make changes that
6:49 are requested or you are confident are
6:51 well understood and related to the
6:53 change being requested another issue
6:55 that I ran into is I would ask for a
6:57 change and one little piece of code one
7:00 little piece of functionality and like
7:03 three other things would just break for
7:05 no reason and it was just trying to
7:08 touch other pieces of code so I'm really
7:10 emphasizing to make sure only focus on
7:12 the thing that I'm asking you to focus
7:13 on again next reemphasizing just focus
7:17 on what I'm asking you to focus on don't
7:19 introduce new things so when fixing an
7:21 issue or bug do not introduce a new
7:23 pattern or technology without first
7:25 exhausting all options for the existing
7:27 implementation and if you finally do do
7:29 this make sure to remove the old
7:31 implementation afterwards so we don't
7:34 have duplicate logic again this is
7:36 something I would find something would
7:37 be done one way it would not work
7:40 perfectly I would say fix that and
7:42 rather than fixing it it would just
7:44 rewrite it in a different way completely
7:46 thinking it was new code so hopefully
7:49 that fixes it so keep the code base very
7:51 clean and organized I would often times
7:53 find disorganization in the code avoid
7:55 writing scripts and files if possible
7:57 especially if the script is likely only
7:59 to be run once what I found again is
8:02 that when the agent was testing
8:04 something so let's say one of the API
8:06 endpoints was broken or one of the pages
8:08 was broken it would write a script to
8:10 test it which is fine but then it would
8:12 just leave the script in my code base
8:14 and I would have a bunch of different
8:16 one-off scripts that would likely never
8:18 be used again so I want them either to
8:21 just write the script and execute it in
8:23 line or when it's done with the script
8:25 just delete the file all right next this
8:27 is an obvious one avoid having files
8:28 over 200 300 lines of code refactor at
8:30 that point now that's not usually a good
8:32 hard and fast rule to have but for AI I
8:35 think it's appropriate I would
8:37 frequently find files that were just
8:39 absolutely massive and then I would ask
8:41 it to refactor it and by the time I
8:43 noticed it the refactoring would break
8:45 all the tests and it would just take a
8:47 long time so just get ahead of it as
8:48 soon as it looks like you're about to
8:50 get over that line size go ahead and
8:53 refactor the code I also found that it
8:56 would mock data like crazy stub and mock
8:59 data which basically just means have
9:01 kind of backup fake data but that
9:03 doesn't really work in Dev or production
9:05 environments so let's say I asked it to
9:07 go scrape an article and for whatever
9:10 reason the scraping failed it would
9:12 catch the error and fall back to using
9:14 mock data and think everything worked
9:16 but it didn't work that is not what I
9:18 wanted the behavior to be what I really
9:21 wanted is it to actually scrape the data
9:24 properly and so it would always use mock
9:26 data it was really frustrating so I
9:28 explicitly said said do not use mock
9:31 data for Dev or prod only in test
9:33 environments and I kind of doubled down
9:35 and said it again never add stubbing or
9:37 fake data patterns to code that affects
9:39 the Devon prod environments next I
9:41 actually found it overwriting myv file
9:44 so I had to frequently get new API keys
9:46 so I just said don't do that now another
9:49 rule is my stack and I could probably
9:51 even get more detailed with this but
9:53 this is just what is your technical
9:54 stack because again I would find it
9:57 using for example if the SQL didn't work
10:00 it would just switch to using a Json
10:02 store in a file which was not what I
10:05 wanted so I said python for the back end
10:07 HTML JS for the front end SQL database
10:10 never Json file storage separate
10:12 databases for Dev test and prod again
10:15 just reemphasizing that elastic search
10:17 for search using a hosted version
10:20 because I would talk about elastic
10:21 search and it would think okay you want
10:23 to do that locally sometimes it would do
10:25 it with a hosted version but I only
10:27 wanted it to be hosted and python test
10:30 and I'm going to get to testing in a
10:31 moment next I had my coding workflow
10:33 preferences a little bit of duplicative
10:36 information here but hopefully just kind
10:38 of giving it more guidance so focus on
10:40 areas of code relevant to the task do
10:43 not touch code that is unrelated to the
10:45 task obviously you could see I ran into
10:46 a lot of issues with this write thorough
10:48 test for all major functionality I was
10:51 doing this manually I would just have it
10:52 write some code for me and then say okay
10:54 now write test for it and sometimes I
10:56 would forget so now it should just write
10:58 test for all major functionality avoid
11:00 making major changes to patterns and
11:02 architecture of how a feature Works
11:04 after it has shown to work well unless
11:06 explicitly instructed it should say
11:09 instructed and so again I would say hey
11:11 fix this issue and to fix it it would
11:14 basically throw away the original
11:15 pattern and rewrite it from scratch
11:17 using some other pattern or some other
11:18 Tech and I didn't want that I wanted it
11:20 to just fix what I had already there and
11:23 always think about what other methods
11:25 and areas of code might be affected by
11:27 code changes so those are the rules you
11:29 can add more and just give it as much
11:32 instruction as you see fit because this
11:35 is going to be really helpful as you go
11:37 so now we have that full spec back in
11:40 grock So what I would do is obviously go
11:42 through it work with grock on it or
11:44 whatever other AI you want to use make
11:46 sure it is exactly what you want make
11:48 the appropriate changes copy it all
11:51 paste it into here and you're good to go
11:53 so I'm not going to iterate on this I'm
11:55 just going to take it on one shot I'm
11:56 going to highlight it all I'm going to
11:58 paste it right into the window and say
12:02 build this based on this spec and let's
12:05 see so it's going to go I'm not going to
12:08 watch it let's just assume it's going to
12:09 go I'll show you what it looks like in a
12:10 moment but let me just show you some
12:12 more best practices okay so back to my
12:14 existing code one thing that you're
12:16 going to notice and you should get used
12:18 to is this panel right here this is all
12:23 the context you're giving it this is
12:25 important because at a certain point it
12:28 becomes too much cont context and it
12:30 starts not performing as well so you
12:32 kind of have to be very aware of how
12:35 much context you're giving it how long
12:37 the conversation is before starting a
12:39 new chat and you can see right here in
12:41 dark gray start a new chat for better
12:43 results now this is something you're
12:46 going to have to just figure out by
12:47 playing with it if you start a new chat
12:49 you lose context you can move some of
12:51 the context over to a new chat window
12:53 but that's annoying you want to give it
12:55 as much context as possible but if you
12:57 give it too much context it starts
12:58 performing ing poorly so make sure
13:00 you're playing around with that all
13:02 right so I'm going to start a new chat
13:03 I'm going to click it one more time so
13:06 immediately the first thing it does is
13:08 insert workflow preferences but I want
13:11 all of my rules in there every time so
13:13 I'll click my stack and coding
13:15 preferences and so now it has the
13:17 context of these three rules I don't
13:20 actually know if it does it
13:21 automatically but it seems like I do
13:23 have to manually insert these three
13:26 files which you know fine my next
13:28 suggestion is stay very narrow with your
13:32 requests from the agent meaning fix
13:35 little things add little features and
13:38 test as much as you can have it right
13:40 tests now testing is an entire thing of
13:44 its own what I have found works best is
13:46 endtoend testing so testing where it's
13:49 actually clicking through and attempting
13:50 to do what you as a user would be doing
13:54 rather than unit tests for example and
13:56 keep in mind every single time you write
13:58 something your you're going to run the
13:59 test and if the test pass great and if
14:02 the test don't pass have it fix the test
14:05 but the fixing of the test is
14:07 interesting you have to keep a close eye
14:08 on it because sometimes it'll fix tests
14:10 in a way that affect production the way
14:13 you think it should work where actually
14:14 just addressing a failure of the test is
14:17 really the right way to go so you kind
14:19 of got to just keep an eye on it you
14:21 don't necessarily have to code it
14:23 yourself or manually adjust anything but
14:26 make sure the test pass and then use the
14:28 integration test to confirm or just
14:30 simply go to the app yourself and test
14:32 that functionality yourself and so if
14:34 you look right here we have tons of
14:36 different test test for everything
14:38 another recommendation uh kind of
14:40 jumping all over the place but use a
14:43 popular stack okay if you're using some
14:45 nent technology AI is probably not going
14:48 to do as well because it doesn't have as
14:50 much exposure to whatever that coding
14:52 language is or that stack is and thus
14:55 it's just not going to perform as well
14:56 so I would choose really common stacks
14:59 for me I like python HTML and JavaScript
15:02 on the front end keep it very simple SQL
15:04 for the database elastic search if I'm
15:06 doing search but choose very popular
15:08 technology stacks and you'll just have a
15:10 lot more documentation for AI to go
15:12 research all right let me show you an
15:14 example chat what it actually looks like
15:16 so this is an older feature that I built
15:18 so enforce a maximum tag length of 20
15:20 characters make sure we don't already
15:21 have code for this right test for this
15:23 after implementation obviously I'm like
15:26 reinforcing over and over again how I
15:28 want to it's a code it can't hurt then
15:30 you send and it starts so first it
15:34 thinks okay and you can actually read
15:35 the thought process which is really nice
15:37 then you have tool calling so where you
15:39 see listed directory listed directory
15:41 read files search files it has a bunch
15:43 of tools available to it you can also
15:45 use mCP servers if you want to give it
15:48 external tools that's a whole separate
15:50 issue I actually didn't use that at all
15:52 in any of my code yet but I need to play
15:53 around with that some more so I'll get
15:55 to that eventually but that's for
15:56 another video so you can see here all
15:59 this stuff happens you can actually just
16:00 click through and really dig in and get
16:02 a feel for how the agent operates with
16:04 your codebase so here I'm going to
16:07 scroll down so it GPT right there read
16:09 the file read the file and then it says
16:12 based on my analysis of the code base
16:13 here's what I found tells me what it's
16:15 going to do and then it starts now there
16:18 are three settings for executing things
16:21 you can do completely manually which
16:23 means every time it's actually going to
16:25 make a change or execute something that
16:27 might affect your files It'll ask you
16:29 and you have to manually approve things
16:31 every time for me I do YOLO mode and it
16:34 is literally called YOLO mode that's the
16:37 opposite it just Auto executes
16:38 everything and it's risky for sure
16:41 because it'll push to GitHub it'll
16:43 deploy to production so if you actually
16:45 have a production level code base and
16:48 people are using it I would not
16:49 recommend that but for Vibe coding
16:50 something from scratch go ahead and then
16:53 they also have kind of the in between I
16:54 think it's called Auto and that just
16:56 means it's going to make the
16:57 determination of which ones it does
16:59 automatically and which commands it will
17:01 ask you to approve so it makes some
17:04 changes you can see it's running these
17:06 tests all the tests pass out of all my
17:09 tests one test failed so we need to fix
17:11 the failing test so it looks at why it
17:14 failed and it starts changing the code
17:17 and you can see here more mock
17:18 repository stuff I couldn't stand that
17:20 that really frustrated me like crazy uh
17:23 which is why I mentioned like five
17:25 different times don't use any mocker
17:26 stub data at all in Dev or production so
17:30 continued on all the tests pass great it
17:32 gave me a summary at the very end of all
17:35 the things that changed and then I just
17:36 continued but remember the more you
17:39 continue the more the context window
17:42 just becomes bloated and you want to
17:43 just start a new chat as frequently as
17:45 it makes sense I know that's not a very
17:48 prescriptive rule but you're going to
17:49 have to figure out what is best for you
17:52 so I really became pretty darn dependent
17:54 on the agents to do things for me I
17:56 would even say Okay Commit This code
17:58 right write a good description and
18:00 deploy it to Heroku and it would do that
18:02 and it really didn't have any problems
18:03 the thing is all of this stuff is pretty
18:05 slow now I feel a little bit spoiled at
18:07 this point because I'm saying this stuff
18:09 is slow but it's writing more code than
18:11 I could in a much shorter period of time
18:14 but every command that I would send off
18:16 it would take between two and sometimes
18:19 up to 15 minutes to finish the iteration
18:22 cycle it would test things try things
18:24 run the test the test failed it would
18:26 fix it it would verify things are
18:28 working and so it's a little bit slow in
18:31 that sense one potential solution to
18:33 that is to have different cursor windows
18:35 open and just let it operate on
18:37 different branches and have kind of two
18:39 branches going at the same time and you
18:41 could do that multiple times and so yeah
18:43 you can have a lot of different branches
18:45 that you're working on at the same time
18:46 and then merge them all together at the
18:47 end I occasionally switch back and forth
18:50 between Cloud 3.7 thinking and Cloud 3.7
18:53 regular non-thinking thinking tends to
18:55 work best it's just a little bit slower
18:57 and then occasionally I would just say
18:59 refactor the code I would give it some
19:01 instructions like find the longest files
19:03 and refactor that but make sure to do
19:05 lowrisk refactoring and I would
19:07 explicitly tell it that and so it would
19:09 just make the code a little bit cleaner
19:11 a little bit more organized without
19:13 refactoring patterns for the most part
19:14 which I didn't really care to do cuz
19:16 that would just break too many things
19:18 now I did reach a point at which it was
19:21 really difficult to make any changes I
19:24 would make a change and it would just
19:25 take so many iterations to get it right
19:27 so many iterations to fix a bug and I
19:31 think if I had known all of this stuff
19:32 beforehand I would have been able to get
19:34 a lot further and I got to say it does
19:36 become pretty addicting I'm sitting
19:39 doing something else I will come write a
19:42 command build this feature and walk away
19:44 and just let it work and come back 10
19:47 minutes later to see either it worked or
19:49 it didn't I would iterate walk away come
19:51 back and so it's something you can
19:52 almost do asynchronously something where
19:54 you're doing something else and you can
19:56 just give it command after command now
19:58 one thing that I do wish I had was this
20:00 available on my phone now repet has
20:03 something like this but I don't love its
20:05 coding agent it's just a little bit more
20:07 difficult to use so I really wish that
20:09 there was a fully hosted version that I
20:11 can use on my phone anywhere because
20:13 coding legitimate coding becomes much
20:16 more feasible when you're using an agent
20:18 like this and just typing something out
20:19 on your phone is super easy to do and
20:22 you can watch it and you can iterate on
20:24 it and it doesn't require a full screen
20:26 a keyboard and a mouse so it's kind of
20:29 opening up an entire world of
20:31 possibilities with mobile coding so a
20:33 couple last suggestions commit often
20:36 commit often I cannot suggest that
20:38 enough make sure that every single
20:40 change you make you are committing
20:42 because you can always roll back if it
20:45 gets to a state that is just unfixable
20:48 and another version of that is you can
20:50 actually see the chat history so you can
20:52 roll back to previous chats so if I just
20:55 click this one so I added dark mode I
20:58 scroll to the very top and I can just
21:00 say restore checkpoint and it will roll
21:02 the code back for me so you not only
21:04 have get to do that but you also have
21:07 this built-in versioning through cursor
21:09 or through wind surf itself so those are
21:12 all of the best practices that I've
21:13 learned over uh about 100 or 150 hours
21:17 worth of vibe coding different
21:19 applications a game and it's been a lot
21:22 of fun and I can't wait till these tools
21:24 get better this is the worst that they
21:26 will ever be and so all of these
21:28 problems you're experiencing now or I'm
21:30 experiencing now they're only going to
21:32 get easier to deal with in the future so
21:35 enjoy Vibe code away you really need to
21:38 know very little about coding to build
21:40 something incredible and I encourage you
21:42 to build if you enjoyed this video
21:44 please consider giving a like And
21:46 subscribe and I'll see you in the next
21:47 one


---

## Source: VideoTranscriber_Codex Full Course 2026_ The NEW Best AI Coding Tool.txt

- Original path: `VideoTranscriber_Codex Full Course 2026_ The NEW Best AI Coding Tool.txt`
- Size: `105783` bytes
- SHA256: `736AF4A32C9FC7FC7418227EAEDB96FCF74BC912B37281CAE8A139C2A3728D31`

---


Welcome to the OpenAI codeex complete   guide where we will be learning how to   use OpenAI's new super app to create and   edit designs, do research and create   documents, create and deploy full web   apps, create motion graphic launch   videos, create highquality investor   decks that you can export to Canva, and   even create high quality iOS apps in   Swift.

 What you'll realize in this video   is Codeex is the only unified   all-purpose AI agent tool. One that   combines coding, co-work, browser, and   computer use cases all into one single   interface that we are going to cover in   great detail. So, this video is going to   be divided into two parts. We're going   to first start with the basics and then   we are going to move on to multitasking   and creating many different things in   parallel.

 In part one, we're going to   talk about the basics of prompting.   We're going to talk about permissions,   the different AI models you can use, and   the effort. We're also going to talk   about the main features in the app.   We're going to do a detailed dive into   all of the different things that you can   do on Codeex.

 We're going to talk about   how to stay organized. We're going to   talk about this preview, which makes   Codeex so useful for basically any use   case. You can even comment directly on   the preview to give additional   information to the AI agent. We're also   going to talk about how to create   powerpoints, how to create Excel sheets,   and how to create documents.

 We're going   to talk about skills and plugins. We're   also going to create automations so you   can simply chat with Codeex to create   automations that allow you to just save   so much time. And then we're also going   to talk about computer use, which allows   your agent to literally control your   computer.

 and the OpenAI computer use is   best in the world by far. And so part   one is going to feel very linear and   somewhat slow, but we're really going to   dig into the basics. And part two, we're   going to start to have a lot more fun.   In part two, we are going to create a   design for a mobile app. We're going to   create a mobile app.

 We're going to   build a web app. We're going to build an   investor deck. And we're going to create   a launch video. And we're going to do   these all at the same time. And so we   are going to dive into multitasking with   codecs because every month that goes by   AI agents are working for longer and   longer to the point where AI agents can   take up to an hour or two hours on any   given task.

 So in order to become   effective at using AI, you need to learn   how to multitask. And in this part, I   want to talk about how I multitask with   codecs. And so by the end of this video,   you are going to be ahead of 99% of   people in terms of practically using AI   agents to get work done, whether it's   coding or general use cases and creating   documents and things for work.

 Let's   dive into the video. Okay, so let's   first start off by downloading the   Codeex app. So you can go to any browser   and type in codeex app download. And   here we see chatgpt.com   codec desktop app. We're going to click   on this. The page should look like this.   And here is where you can download this   for MacOss.

 I already have it   downloaded, but just click this and go   through the process of getting it on   your computer. Okay. So, when you   download the Codeex app for the first   time, it'll look a lot like this. You're   going to see this left side panel with   these five options over here, which   we're going to dive deep into later.

  You're not going to see any   conversations over here. And then you're   going to see this kind of chat interface   that looks oddly similar to chat GPT.   And we can actually open up Arc here   real quick. Here is chat GPT. This is   what chat GBT looks like. It's very   similar. You type a chat and you get a   response from chat GPT.

 It's very   similar. So it looks similar from this   perspective, but there's so much more in   this application. It is unbelievable. So   if I were to type something here, let's   say I type something like this. Hello,   please search and tell me the latest   news on OpenAI's new desktop app, list   all the different features just like   chat GPT.

 It has built-in web search, so   it'll automatically search the web and   it will give me a nice response. I can   also type that into codeex and press   enter. Now, notice here that the chat   find OpenAI desktop features showed up   here in the side panel under this chats   column. This is actually brand new to   Codex. They added this chats column.

  This is because we didn't actually   select which location we wanted this   chat to be in. And I'll explain that   right now. What makes Claude Code and   Codeex so powerful is that it is an AI   agent that can basically control your   entire computer. It can create files, it   can edit files, and as we'll get to   later, it can even use computer use,   which means fully controlling the mouse   and keyboard on your computer.

 And so   when you do this, the most useful way to   do it is to give it a specific location   in which it starts out in. And when you   create a project, it's going to open up   your folders on your computer, right?   It's going to open up Finder. And so I   create a project called Codeex Projects.   And you can create anything you want.

  You can call it Riley's codecs or you   could just put them in your documents   folder. It doesn't matter. I keep it   organized. And I'll I'll even create a   new folder. So I'll just say like   Riley's codeex projects. So this is the   folder that I'll create where I will put   all of my other projects beneath it.

 So   I just created this Riley's codeex   projects. Now let's say I wanted to do   some research on all the cool things   about Codeex and the new desktop app.   And I can create a project where all the   documents that I create about this will   be stored in that location. And so what   I'm going to do is I'm going to hit new   folder and I'm going to call this codeex   desktop research and we're going to hit   create.

 We're going to select this   folder and we're going to hit open.   Notice here that a project was created.   We have one project created and it's   called Codex Desktop Research. Now if we   click on this button, we are now   creating a new chat at Codeex Desktop   Research. It's also listed right here.   Codeex Desktop research. So when we   create a chat, it'll show up here.

 So   I'm just going to say, please tell me   about the new Codeex desktop app   features that they released today. And   again, this can search the internet by   default. It can go off and do research.   And notice here, if we were to expand   this, this chat shows up right here. And   it will automatically use AI to name it.

  So find new codecs app features. Now we   can press this button again and we can   actually create a new chat. I can say   what are people saying about the new   codeex app? Figure out a way to look at   blogs and x.com and what are people   saying? What are they excited about? So   these are chats under the same project   and they work at the same time.

 And you   can tell that it's in progress because   of this right here. Right? You can see   that we have this spinny circle right   here. So, we know that we're waiting.   And one of the coolest features of the   Codeex app and other similar apps like   it is it makes it pretty easy to uh   multitask.

 And so, we'll know when it's   done because a blue little dot. There we   go. Right on Q. So, this blue dot popped   up here. Now, we know that we have like   an unread message. So we can click on   this and so here we can find the new   feature and let's say I don't want to   read it like this. I can say please   create a spreadsheet of the new features   that you just told me.

 And so now what   it's going to do is it is going to   create a spreadsheet which is a document   and it's actually going to store this   spreadsheet in this folder right here.   And remember you can always get back to   this folder for this project by clicking   these three dots and hit open in Finder.   And you can see that it opens up right   here and we can click into it and we're   going to be able to see all of the files   that get created.

 No files have been   created so far. And these chats don't   actually get stored here. It's just the   files that they create. Oh, and here we   go. It just created this outputs folder.   We click in this. And so it's created   the folder. It hasn't yet created the   document yet. And if you'll notice here,   it's done.

 And you'll see at the bottom   we have this codec codeex desktop   features.xlsx. XLSX. If we go ahead and   we just click open, look at this. It   opens right here in the side view.   Notice here, if we don't want this side   by side view, we can come up and we can   press this button right here, which will   allow us to full screen it.

 And I could   even remove the side panel. And now   we're operating in this spreadsheet   view. And it is literally full screen.   Yeah, I can view the whole thing. And I   can create a follow-up. And I could say   something like, "Please remove the   source page column." And so now we can   just see that it is working.

 And you can   tell it's working because it says stop.   And we can leave this full screen view.   And we can see that this was entered in   the chat. So this is a fun way to toggle   between like here you can see all of   your agents and the chat and what your   agent is working on. And if you want to   just focus on the thing that you're   working on, again, you can full screen   this.

 And you can remove the side panel   to kind of toggle between the views. And   look here, it's done. You will notice   here that the source column is no longer   here. It removed it. And so we can just   use AI to edit this document pretty   perfectly. And remember, remember when I   said that all of the files that your   agent creates will show up in this   folder and you can open in Finder at   this location and we can open this and   here we can see that this XLS this is   the file that we're working on right   now. So all of it is stored in this file   and so this makes it easy for me to   create chats and reference that file. I   can very easily hit create new chat and   I can say please add anything that I   missed to at and we should be able to   see the file. If we go back to finder,   we can see that this f is called codeex   desktop features. And so we can go   at@codeex desktop features. And so we

  can at@mention that file and say do   research let me know if I miss anything   for new features for codecs. And so   within this chat like within this folder   we can atntion anything that we create   which is really really fun. Okay. I   wanted to take a brief moment to just   recap everything that we've talked about   before we dive into more advanced   topics. Codeex in its simplest form.

  This Codeex application allows you to   chat with an AI agent that can create,   edit, and delete files on your computer.   And the specific parts of the app that   we've talked about, the project location   or file path is right here. The   permissions are right here. It's   basically what your agent is allowed to   do and do you need to approve its   actions. I prefer using full access.

 So   just let it let it cook. And then we   also have the model GPT 5.4 and the   effort level which is extra high that I   use by default. And you can type your   question or answer or whatever you want   to create. You can type it in. When you   type it in, when you choose a file   location, it'll also show up in the side   panel right here.

 And again, your   project location, Codex research, Codex   desktop. research. This chat, whatever   you type in will be named and will be   placed here in the side panel. And if we   go down here, your agent can also create   files, right? So, it can create   this.xlsx   document on your computer. And so, this   is just an agent created file.

 And this   agent created file gets added to this   folder that you created, right? The same   project location, your file created by   an agent. If the chat is within this   project location, that file will   actually show up in this outputs folder   within the codeex desktop research. So   you can see they all get organized in   this clean file layout.

 And then if you   press this open button right here, then   it opens up the file in this clean view.   And remember, you can full screen this   view if you want to. And you can see all   of your files here. So you can actually   have multiple files open, which we'll   get to a lot later. We haven't done this   yet, but you can see the file name right   here.

 And so that's kind of a basic   overview of what we've talked about so   far. Now, let's dig into some more fun   workflows and more fun projects. So now   I want to go over the other options up   here on the top left. The first one   being search. And don't worry, we'll get   to plugins in a second. This is when it   gets really fun.

 But you know how we   have two projects over here? I've   actually created over 30 different   projects in the time that I've been   using codecs. But one thing that you can   do is you can very easily remove them   from the side panel and that doesn't   mean you delete anything because   remember these are all just folders on   your computer and those don't actually   get deleted.

 You just remove them from   the side panel. But this search feature   what I can do is I can search anything.   So I remember I looked for I said to do   research and create a report in the   style of karpathy but I removed the   project. But if I just type in Karpathy,   it can actually it searches all the   chats for the name Karpathy.

 And I can   click on it and now this chat opens up   and you can see here that the name of   the chat is analyze Karpathy voice and   it's in this general agent tasks. So   remember this is just the project   folder. So this code's desktop research,   right? That is the project folder. This   is the general agent tasks folder that I   removed from the side panel.

 But if I   click on this, it'll actually open up   the location. And then all I need to do   is just drag this in here. And boom. Now   all of the chats for this general agent   tasks here shows up here on the left   side panel. Right? That's pretty cool.   And again, I can remove it. And I can   bring it back whenever I want.

 And so in   order to access this search menu, you   can just press commandG and we can just   type in codeex outline and you can open   it without even clicking on it, which is   kind of fun. Here is application that I   was working on earlier that goes through   all the features, but we're going to get   to more advanced applications in just a   second.

 First, I want to talk about   plugins. And so, yeah, many people get   these confused plugins versus skills.   And I will say the line between plugins   and skills is a little blurry. And so, I   actually just asked Codeex to create a   little graphic using my Excaladraw skill   that I created. And I had it create this   image and then I exported it.

 And here   it is. So fun fact, I generated this   with my Excaladraw skill. But let's talk   about the difference between skills and   plugins. So skills are basically a   reusable workflow package for a specific   kind of task. And so you can think of a   skill as a reusable recipe. Whereas a   plug-in is the installable unit that   extends codecs with more capabilities.

  And so you can see here if we click on   plugins, right, it's kind of weird,   right? In the claw app, we can see that   they call it the customize tab. And then   here they have skills and connectors.   OpenAI has plugins and skills. If you   use different tools, they have different   vocabulary for each one.

 So I kind of   just clump these together and I   personally think them of them as skills.   And so skills are just ways to extend   the capability of the model. Right? So   if I wanted to say something to Codeex   and be like, "Hey, check my email and   tell me all of the urgent messages that   they've sent me today.

" Right? It   couldn't do that right as you downloaded   Codeex. you need to give it the skill of   email. And so I've done that already,   right? I've given it the email skill. Uh   one thing that I can give it is my   Google calendar skill. I haven't done   that yet in codeex. So let me show you   this. So this is actually a plugin.

  Sorry, Google calendar plugin. And so I   can give it the plugin. And so we can   hit install Google calendar. And this   will automatically take me to my browser   where I can sign into my email. And I   can hit continue. And we can hit select   all continue. And now once we get the   verification, Google calendar is ready.

  Google calendar is now connected. That   means the calendar is now plugged in.   Now if I go, let's say we go to uh let's   go to general agent task because that's   what I want to do right now. And we're   just going to press this button right   here. Now we can say please list out the   events for this week for me.

 And I can   press slash. You actually wouldn't have   to do this. You don't have to type in   everything. The agent is smart enough to   just do it. And you'll see here that   Google Calendar shows up right here. And   so I can say, "Please list out the   events for me. List them out here in the   chat." And we can run this.

 And look at   this. So all of my events are listed out   right here. So this is my entire   calendar listed out right here. And so   I'm going to say, "Please, can you send   me a weekly recap in email? Just email   it to myself because I I've set up my   Gmail integration." And I can hit   slashgmail   and um please send me this recap to my   email.

 And so that's all we're doing is   we are sending this to my email. So,   it's using the Gmail skill connected   Gmail address. And it's going to send me   the email. I found the email address is   my email right here. Sending the recap   there with the week and conflict note   included. And so, it's done. It said, I   sent the recap to your email with the   subject weekly calendar recap.

 If I go   to my email application, I can see here,   check this out. Here's the email that I   got. And I use superhuman for email. And   here it says weekly. It was sent from   me. And here's this weekly recap. Now,   one thing that we're going to talk   about, and I'll talk about more about   this later, is automations.

 I can just   say, "Please, can you make this task an   automation for every Friday at 4:00 p.m.   for the previous week?" Okay, look, I'm   turning this into a weekly automation.   Blah blah blah blah blah. Here it says   created weekly calendar recap Fridays at   4 pm. And so if I click on this right   here, I can see this weekly calendar   recap.

 We can see that the status is   active. The next run is tomorrow at 4   p.m. Right now it's currently Thursday   at 4 p.m. And it's never run before. So   it doesn't list the last run. And that's   what we got. And what you'll notice   here, if we actually go up to   automations, we now see a one by   automations. We can click on this. And   here we see the automations.

 Look at   this. And you can actually test this   automation just by hitting play, which   will automatically play it. Or we can   edit the automation. And it is very easy   to just edit it. And we can add to it.   And I can say make sure to use the Gmail   skill if you want to. You actually don't   need to do that. It's basically implied.

  And it's that easy to create an   automation. You just ask codeex to   create an automation. And so if you're   ever confused about what a plug-in can   do, just create a new chat. So what   we're going to do is we're going to go   to general agent tasks. We're going to   create a new chat. And I'm just going to   type in at Figma. And this is a plugin.

  And I'm going to say, please tell me   what actions I can do with this plugin.   I've never used it. Describe to me what   I can do or what you can do, your   abilities with this plug-in. List all.   So now Figma, we will learn about the   Figma plugin. And here it listed all of   the things that it can do.

 A very quick   side note, you see this carrot here   after working for 18 seconds. You can   actually click this and this will show   kind of its thinking behind the scenes.   Figma plugins gives me three broad kinds   of abilities. It can inspect existing   Figma files. It can generate new visual   artifacts and connect Figma to your   codebase.

 And so we can just test this   out right now. So I have Figma open   right here. And I guess I'm just going   to create a new design. And let's go   ahead and call this cuz I don't see the   ability for it to create a new design.   Uh so I'm going to rename this. And I'm   just going to say I created this new   Figma board called Riley new design.

 Can   you please put hello world on that   design to see if that works? So now   we're going to test out this Figma   integration. And so look at this. It   says Figma is running locally. I'm   switching to the text tool and placing a   simple hello world on the canvas. And so   now it says hello world is now on the   Riley new design canvas.

 Let's go ahead   and go over there. And look at this. We   have hello world. And I've been typing a   lot in this video. And so I'm going to   show you how I normally interact with AI   agents, which is just with my voice   using a tool called Whisper Flow. And uh   that's literally you can look it up on   Google. You can download it.

 They have a   generous free plan. But all you have to   do is hold the Fn key and I can speak my   idea. So now I want you to go to Figma.   Actually, I don't want you to ignore the   hello world. That was just to test. Now   that I know that it works, I want you to   make a mockup design on Figma for my new   shoe company called New Shoe. N O S H O.

  This is a new futuristic shoe, and I   want you to create a landing page for   it. So do that on Figma. If you need to   get an image of this new shoe, generate   it using your built-in image generation   tool. And take a look at this. It just   generated new shoe. And it generated an   image right here in the chat as you can   see here.

 And now it says looked at   codec. So it's actually seeing the   computer use is actually checking to see   if it generated it. So now I'm using   Figma, Figma/generate   design for Figma landing page workflow   and image genen for the product art. And   so it generated this without a   background. Notice here if I were to   copy this image and I were to like open   it up, you can see here it's saved to my   clipboard without a background.

 And this   is a pretty cool shoe. So, I'm not going   to lie. This Figma integration is a it's   pretty much made for you to have a Figma   board and convert the Figma board into   code rather than like telling it to   generate code and then put it onto   Figma. And so, there's actually a tool   made specifically for that which is   called paper, which a I've talked to a   lot of designers and a lot of designers   are switching to this, but what this   allows you to do is you can create a new   file here. And I'm just going to call   this codeex test. And what I'm going to   do is I'm just going to press new. I can   say slashpaper. And I have this skill   that I've created previously called   paper desk uh deck style. Um but what we   can do is we can actually go to plugins   and we can hit manage. And here we have   MCPS. And here we have this paper MCP.   And so if you are ever using a tool on   their website, they might say like use   the new paper MCP or use the new Figma

  MCP or use the new notion MCP. You can   literally just go to claw uh claude   code. This works in cloud code or codeex   and say, "Hey, I want to be able to use   this MCP. Can you please create a skill   that wraps this MCP?" And that'll tell   it that it can create a skill with that   MCP so that you can use it really   easily.

 So, what I'm going to do is I   can go to this new chat here and I can   hit slashpaper or I can say use the   paper MCP to create a landing page for   my new company, New Shoe. And remember,   we've created those files for new shoe.   Let's see if they're in here. Yep, new   shoe hero. And we can type at new shoe   png.

 Use the one without a background   and create a landing page on the open   paper board. Use the paper tool that   we've created. And since I've already   created this, you're going to see and I   in my opinion, this is the best way to   get AI to make designs for you. Check   this out. So, we can open up paper. Oh,   this is really cool as well.

 So if we   open up this general tasks here and we   rightclick on this chat and we say open   in mini window, we can actually open   this chat in a mini window and we can   minimize codecs. So now we can have   whatever application we want to have   open here on the side. And here it says,   okay, the board is empty.

 So I'm going   to build a fresh desktop artboard. I'm   checking both the hero files locally.   Okay, design is set. I'm building this.   Look at this. So, it'll just generate a   landing page design and we can just have   this open. We have the chat open on the   side. And I love this animation when   it's when it's editing.

 And we'll just   let it cook. Okay. You see here it   created this top board or top bar.   Technology performance launch. You can   see move like the roads has been   written. New shoe blends featherweight   knit. All right. So, these buttons are a   little overlapping. Remember, the AI   might fix this. it might just realize it   messes up and it'll actually just fix   this.

 Oh, this is a great opportunity to   talk about a new feature. So, one thing   that a lot of AI tools have is message   queuing, which basically like if I were   to type a prompt while it's working   right now and say like, "Please fix it."   On a lot of AI tools, what it'll do is   it'll wait for the AI to be done before   entering the prompt.

 But Codeex has   steering built in like steer like like   your a steering wheel. And what you can   do is is I can paste that screenshot and   just say, "Oh, by the way, there's some   overlap here. You might want to fix this   while you're working." And so when you   press enter, by default, it'll be queued   up.

 But if you click steer, it'll   actually enter it while it's working. So   you don't even have to wait for it to be   done. You can kind of steer it while you   work. And so you can see here once it's   done with its latest activity or tool   call, your prompt gets entered. And so   now in the middle of your conversation,   it says that I saw the overlap.

 I'd   already started moving the CTA and stats   down, but I'm rechecking the hero and   adjusting the copy. And it'll hopefully   make the fix on this specific run. And   look at this. So it's already starting   to fix it. And here we go. And I could   say something like create four more   variations.

 I want you to make slight   modifications on each. I'm not going to   go through this whole process, but the   point I'm trying to make here is paper   is a software tool that was designed   specifically to connect to your AI   agents like Codeex, like Claude Code,   and there will be way more tools just   like this.

 I think there's a massive   opportunity to create tools that connect   to other agents that people already use.   And you can see here, Figma has a really   bad integration in my opinion compared   to paper. Paper's just way more fun. And   look at this. It just created this new   variation and it is going to copy over   everything. And that's how easy it is.

  You just get AI to create multiple   variations. Look at this. Number two,   number three, and number four, right?   Making them with different background   colors. It's working on them in   parallel. And this tool paper was made   specifically to be an integration into   your existing tools. And this is going   to be a massive trend going forward.

 And   so plugins are kind of pre-made for you   a lot of the time. They're just built   into codecs. And this list is going to   get a thousand times bigger. This tool   is going to become so popular that every   software platform in the world is going   to be begging OpenAI to create an   official plugin for them so you show up   at the top of the list.

 the value of   showing up at the top of this list for   like GitHub, linear, all of these tools,   even showing up at this part right here   like Neon, Postgress, like this is so   valuable to show up here on this list.   And so there's going to be more and more   of these integrations, but it's   important to realize how to create your   own skill.

 So let's go ahead and create   our own skill. So, if we go to our   general agent tasks and we open up a new   task, one of the things that I was   constantly doing over and over again was   go into YouTube and I would go to this   site called like YouTube transcript   extractor and I wanted a way to very   easily like pull a transcript from a   video.

 And then I wanted to be able to   do it for all of the videos of a given   channel or or I wanted to be able to   search YouTube and pull the transcripts   from a certain search term. And so I I   looked it up. I said, "Hey, I want to be   able to use an API." And so an API, for   those of you who are untechnical, you   can think of this as just like a way to   use code to access certain information   from other people's software.

 And so   when you're vibe coding, a lot of you   guys who follow me uh have vibe coded   before, and if you wanted to add an AI   chat to an application, you needed the   OpenAI API, which you also needed an   OpenAI API key. And this would basically   grant you access to add the OpenAI   technology into your app.

 And so this is   what I'll do all the time. Like if I if   I'm running into an annoying process   that I'm doing over and over again, I'll   just look up and see if there's an API   for it. So it's like I want to be able   to use an API to pull YouTube   transcripts. Can you suggest the top   five for me? And look at this.

 It just   created a list of different ones that we   can use. Here are the top five. Super   Data, Transcript API, YouTube   Transcript.io and Scrape Creators. So,   I'm going to go ahead and I'm going to   check out Super Data. And I have used   this before. What we can do is we can   sign in.

 And once you sign in and put in   your credit card, you can get an API   key. I think I might even be on the free   plan. And so, I get a certain amount of   transcripts per month. I think you get a   100 free per month. So, I'm not on my   personal Super Data account. I don't   think I'm using that many of them. So I   can copy this API key and we can go back   to codeex and say, "Okay, please can you   create a skill that allows me to ask you   to summarize the latest 10 videos from a   certain YouTube channel and you can   always use this API to just immediately   pull them. So you can go to their   YouTube channel, you can search their   YouTube channel, get their latest five   videos and pull the transcripts and then   summarize them. I want you to create a   skill. So, you're going to need to look   and research how to use Supa data and   figure out how to use it well and   quickly and create a skill so that I can   always ask you for this information.   Here is my API key. I'm going to include   my API key. I'm going to paste it at the   end. I don't want to show it on camera.

  But one thing before I want to do that   is you can type in skill creator and   this will indicate that it should use   the skill creator. It'll help it   understand what it needs to do. And this   skill makes it really good at creating   skills. And so here is the key. I'm   going to paste it, but I'm going to do   it off camera.

 Okay, so I entered my   prompt. It's now running. I'm just have   this covering up my key. And it's going   to use the skill creator and it is going   to create the skill. And then once your   codeex is done working and it's created   the skill, again, you go to plugins, you   click on skills, and you'll see it right   here.

 And so it created the skill called   YouTube researcher. And so in order to   use a skill, you actually need to create   a new session. So this is the session   that we created the skill in. Once we're   done, right, we can just hit this new   chat button and we can just type in   YouTube researcher. And so please can   you look at Riley Brown latest 10   YouTube videos, pull the transcripts and   summarize them in a document.

 And   please, I want you to inform me which of   these videos did well and which of these   videos did not do as well. And this   should be kind of an analysis of what   people are interested in. That's what I   want you to look in. And then also do a   hook analysis. So based on like the   intro of my video, I want you to say   which intros did well, which intros did   not do well.

 And in this report, I want   the YouTube thumbnails in there as well.   So Super Data can also pull the YouTube   thumbnail, which is really cool. Okay,   so it is done. And you can see here we   see this report. If I click open, we now   have this Riley Brown YouTube report.   And look at this. So this is using this   skill right here, which is the /doccks   word docs skill.

 This is I think this   comes built into codeex. And it looked   at the full transcripts. And here at the   bottom, we see the hook winner. So   Claude is taking over. Big market shift,   high urgency. These intros did the best.   Claude code leak. Openclaw blender   skills. Claude Code can design now. Why   specialized agents are superior.

 That's   pretty good. The hooks that didn't do   well is build a sync web app and mobile   app in 16 minutes. That video did not do   as well. The 35 fundamentals you need to   vibe code your first app. So it looks   like vibe coding did not do as well.   Building a mobile app with OpenAI codeex   and seven openclaw skills that can 10x   your output. Very interesting.

 And so it   even told me what to double down on. So   this is pretty cool. So it took all of   that YouTube data and turned it into a   document. I'm gonna say, okay, on the   last day of every month, I want you to   do this for the videos for that month.   Can you create this automation that uses   the slash YouTube researcher skill and   the slashword   doc to create a report just like this   for the videos for that month? make it   slightly more brief and in the table   make them ordered by view count.

 And so   now we're running this. We can exit full   screen mode and that's exactly what   we're going to do here. So what we did   here is we basically created a YouTube   researcher skill and this required an   external API and we just did research on   codeex to find the super data API and   then what we did is we got an API key.

  We gave this API key to codeex and we   said create a skill with the super data   API use this key and then this created   this skill. So this process created this   skill and then we said to use it. I said   use the super data API to look up my   YouTube pull all my latest transcripts   and then create a doc, right? And so we   created a doc and then we kind of paired   these together, right? We used these in   tandem with one another.

 We used this   and we created this automation, right?   So, we created an automation. We said   every single end of the month, at the   end of every single month, I want you to   create a report that searches YouTube   and prepares it in a word doc and send   it to me. And that's exactly what we   did.

 And so, if we go back to codeex,   let's see if it's done. Yes, it's done.   And you see here it says created monthly   YouTube report. So, I can click on this   and here, okay, I didn't realize this.   You can reference skills in the uh   monthly report. So that's useful to   know. And you'll notice here in the   automations tab, we now have a two.

 So   we have two automations that are set up.   A monthly YouTube report and a weekly   calendar recap. Okay. So we've covered a   lot here in part one. We've talked about   a lot of the basics, how the app works,   how to create skills. We've talked about   plugins, automations, we've created a   couple, and we're kind of moving slowly   through this process.

 In part two, we're   going to be doing a role play. And we're   going to be creating six different   things at once. And what I really want   to show in this section is a how to do   like we're actually going to create a   web app. We're going to create a mobile   app. So, we're going to learn about vibe   coding in this process.

 But I also want   to focus on multitasking. As I said   earlier in the video, these agents are   taking longer and longer to complete   tasks. So if you want to be efficient in   this new AI world, you need to learn how   to set like send instructions to an   agent, trust the agent to do really good   work and then move to a new agent chat   so that you can start working on   something else.

 And all of the best   engineers and uh the best operators who   use AI are very effective multitaskers   and they're able to like just focus on   one agent chat, put all of your effort   into a prompt and then once you press   enter to just check out of that task and   move to a new one. So it's not even like   multitasking, you're like serialing.

  Each prompt that you type in is the   task. And so we're going to create six   different things in this role play. So,   in this role play, my name is Riley   Brown, which is my actual name, but I   want to create an iOS app. So, my main   priority is to create an iOS app, but   creating the app isn't enough, right? We   actually have to do some marketing.

 And   so, that's why I'm going to be creating   some Expost automations. We also need a   highquality launch video. We're going to   do a launch video. I want to raise a   little bit of money. I want to raise a   million bucks for this app. So, we're   going to create an investor deck. We're   also going to release this launch video   before this app is out, right? So, we're   we want to go launch video then iOS app,   which means that we need to create some   sort of website or landing page that we   can allow people to sign up for a weight   list. You want to be able to collect   data. And before we create our iOS app,   we are going to create an iOS app   design. And that's what we're going to   do. So, we're going to kind of move   through these together. You know, we're   not going to work on all six at once,   but we're going to be working on many   things at once the whole time until we   create a system around this app that   could be a fully operating business and   we're going to create some automations   as well. So, in order to get started,   what I'm going to do is I'm going to go   to Codeex and we're going to create a

  new project. So, this new project, um,   we're going to go into Riley Brown.   We're going to go into Codeex projects.   Actually, we're going to create a whole   new folder here. And I'm just going to   call this my new business. And what I'm   going to do is I'm just going to open up   this folder and I'm going to hit new   chat.

 I'm going to say I have a plan   create a markdown file of my plan. Then   what I'm going to do is I'm going to go   to this little thing here and just going   to take a screenshot this put this   image. I'm creating a mobile app right   now and a landing page as well as some   other assets. I want to create a design   for this.

 I just want you to outline   what I've put in this in a simple   markdown file. whatever you see here.   I'm also going to make a launch video   with a remotion skill. I'm going to make   What else am I doing? Oh, an investor   deck. I also want to make an investor   deck. So, please just make a simple   bulleted list that I can check off as I   go along of all of these items.

 So,   there should be six each one of the ones   that are listed here. And then, please   at the top put my app idea. So, my app   idea is as follows. And I put a little   info here. The app is going to be called   Chorus. It's going to be a place where   people can learn about AI agents. People   can learn about the best agent   platforms.

 People can learn about how   agents work. Oops, we can stop it here.   People People can also learn about the   best skills. So, it's going to be a   skills library that I'm going to curate   that people can copy and paste into any   agent and it will just work. So,   basically just put this in a very simple   one-pager doc. Don't add anything.

 So,   we're kind of just creating a plan here   in this my new business. Now, while   that's going to run, what I'm going to   do is I'm going to create a new chat and   I'm going to say I want to use the   slashmo design skill. Now, this mobile   divi design skill is a custom skill that   I made and I actually extracted it from   anthropics new design tool.

 So, if you   go to claw.ai/design,   they just released a new design tool   that's like supposed to be like Figma.   And all I did, I had it create a mobile   app design. As you can see here, there's   this like design and I want to be able   to use a skill just like this. So then I   just asked the agent. I said, "Hey, can   you tell me exactly how this design app   worked?" And it just literally worked   for me.

 Like I it just outputed   everything. So, I just copied all of   these documents here. And then I copied   the files that this new claw design   skill gives you. And then I gave it to   Codeex and I literally said the   following here. I literally said this. I   said, "I want you to create a mobile   design skill. This is how Claude does   it. I want you to mimic this.

" And then   I just pasted literally everything it   gave me here with all of the files and   it just created this mobile design skill   and it works really well. I'll show you.   So, we can go back to this. I want you   to use a mobile design skill and I want   you to create the screens for this app   in very basic Apple style design.

 We   will add some flare in a little bit. I   just want to get all the screens   functionally correct. And so what I'm   going to do here is I'm going to go   ahead and run this. Um I'm going to go   back to this chorus app plan. We can   open this here in the side view. So you   can see here we have this right here.

 So   this app is going to be called chorus.   So I can just copy this and we can just   paste this app idea. And now we're   creating the mobile app design. And so   what we need to do is we're going to   create the design first. Then we're   going to create an iPhone app. We're   going to create a web app.

 Investor deck   launch video and expost automation. So   we're working on this right now. And by   the way, I will post the mobile app   design skill on the actual app that   we're creating. I'm going to put this on   test flight and I'll put I'll put it on   a website somewhere below the video. So,   you'll be able to get this mobile app   design skill.

 You'll be able to just   copy the link and paste it into Codeex   and use the skill for 100% for free. And   okay, so while these screens are   loading, we can actually get our mobile   app set up. And so, I'm going to go   through this process relatively slowly   so that you can understand how to build   an iOS app with codec.

 So, I'm going to   say I want you to create a new project   called Chorus. This is going to be a   Swift mobile app. And what I want you to   do right now is just make it say hello   world. This is Chorus in simple text in   the middle. Basically, what we're doing   is we're just getting our project set   up. We're not going to do anything else.

  Just put this text on a mobile app and   open the Xcode project when you're done   so that uh I can run it from Xcode. And   so, we're going to run this. In order to   use this, you're going to need two   things. And you can search on codeex how   to do this. You're going to need Xcode.   And I will pull it up here.

 If you just   type in download Xcode, this is Apple's   This is Apple's developer platform. And   Codeex can actually connect to Xcode.   And once you download this, you're also   going to need to download iOS simulator   if you want to run it on a little device   on your phone. So that's those are the   two things that I have downloaded.

 And   you're going to need the iOS simulator   for this. And you can figure out how to   download this. Just ask AI. You do need   a Mac for this. And you will probably   need like 20 GB of spare storage on your   computer. So the chorus screens are   still being built, but the create chorus   Hello app is done.

 And so it actually   opened up Xcode on my computer. Now what   I'm going to do is I'm going to change   this to one of the simulators. We're   going to use an iPhone 17. and we're   going to hit this play button. This   should open a simulator. Here it is. And   here is the app that we're going to be   working on.

 So, I'm going to move this   right here. Here is going to be the   mobile app that we are working on. And   this is really cool. And as you can see   here, hello. This is Chorus. This is the   app. It is completely white. Just have   this black text here in the middle.   There's no app functionality. We just   now have the project open.

 And now we   can talk to codeex and we can actually   edit this app however we want. We can   build any features we want literally any   features simply by five coding and   you'll see we'll add some more features   later. Now uh here is an app uh where we   see that the build chorus screens is   done. We can click on this. Okay.

 So I   actually just went to have lunch for   about 25 minutes and we're back and all   my agents are done. So obviously we have   the Xcode project set up and here we   have the build chorus screens. So now   that it's done and it gave us this   prototype link. So my skill gives you a   prototype link and take a look at that.

  So we have this app screen. It's very   basic, but we can switch screens here or   we can switch tabs. So we have this like   learn tab and maybe you can do like   agents 101. I think this is actually a   decent start. I like the hierarchy. So   like the learn the different platforms.   This is like a good we can organize this   or actually create real categories   later.

 But this is ultimately what I   want the app to look like. And saved is   good. It separates the learning and the   platforms and the skills here. As you   can see here, we have multiple saved. I   like this design. So if we go to this   chorus app and what we can do is we can   say please integrate and you can   actually go up here and what you can do   is you can actually click on this toggle   files. So here we have the output.

 Oh,   this is cool. Yeah. So now we can see we   have this mobile design. So we can just   say please integrate the screens in the   my new business folder in the mobile app   and just make this app have all of these   screens. We will populate it with real   data later and build out the experience   and polish the design.

 So implement it   now. So we've created these screens   right here and this just give us kind of   like a nice little outline like okay we   can make some edits to this but I think   this is good enough to just implement   and so we can go to our plan and we   could say okay mark the iPhone app as   done and then make the building the   iPhone app as working in the works and   then also put web app and landing page   in the works because now we need to   create a landing page.

 Okay, so that   just sent through. Now what we can do is   we're going to create a new chat and   we're going to say I want to create a   very basic web app landing page that can   collect data from interested users for   our app. I just want to create the shell   and basically just have a page with a   title that says chorus app.

 And then I   want a field that users can fill out uh   in order to put in their email and and   their information. except we're going to   use an external tool for this. And so   what I'm going to do is I'm going to go   to ARC and what I'm going to do is I'm   going to go to tally.so. So tally is a   tool that I use to collect form   submissions.

 So here are all the form   submissions that I've created in the   past. Here's a brand new form that we're   going to create. And so I'm just going   to say I'm going to say weight list. Um   and we're going to use a template. Let's   just use a template. And we can just do   this right here. And we can do last   name, first name, email address.

 Yeah,   let's use this template and we'll keep   this really basic. We'll just say sign   up for chorus. We can always edit this   later, but I think this is good. How do   we Yeah, I think this is good. Let's How   do we make this not Okay, there we go.   Done. Your registration is complete. We   will reach out in a few days.

 Okay,   that's good. So now what we're going to   do is we're going to publish this   registration template. Now, we're going   to go to I believe it is share and we   can do this standard embed right here.   And so, we can click embed the code   link. And so, we can copy this code. As   you can see here, it's saved to my   clipboard.

 Um, or we can say get the   code. Yeah, I think we can just copy all   of this and we can go back to codeex. I   am using tally.so.   Can you please put this form in the   site? We will design it after, right?   Because right now we are using tally to   collect people's email addresses, right?   So then we can reach out to them once we   actually launch the app.

 So like right   after this video in theory, I could put   this up on the internet and I'll show   you exactly how to do that. And we're   creating just a website that embeds this   code which allows people to type that   in. Then we're going to design out the   rest of the website. And here we   actually have this app is done.

 Oh, and   by the way, for this tally app, I said   make this a React app and run it   locally. React is just like a good   framework for design, I actually really   don't even know what it is. I just know   that every app I've created has been a   React app. And here we can see that it's   done.

 So, if we click on this, it should   open up the app here on the side. Let's   see if this works. Okay, wait. Uh, while   this finishes up, what we can do is we   can go to Xcode. This does appear that   it is done. And we can run this again on   the simulator. And here it succeeded.   And here we have the app running on   Swift learn platform skills and saved.

  So this is indeed a Swift application   and we have these pages. I wonder do we   want these fixed at the top? Um we will   need to make some decisions here. Oh,   okay. So this is running locally. This   just opened up in my computer right   here. We can see that this is working   really well. And so I like this style.

  For whatever reason, Codeex likes to use   this style by default. I'm going to have   it use a style that looks a lot more   like this. We're going to keep it very   basic. And okay, so what I want to do is   I'm going to go to this chorus mobile   app, right? Because here we're working   on the chorus app.

 And again, you can   rename these chats to keep them more   organized. So in fact, I'm going to show   you. You can just rightclick and I'm   just going to say mobile mobile app. We   can rename this to web app. We can   create chorus project plan. Um yeah, we   can rename this to plan and we can even   pin the plan to the top right now.

 Build   chorus screens and so we can rename this   screen design. So that way we can stay   fully organized while we work. Hi, I   want to make some changes. So firstly   the name of each page like for instance   learn that should be pinned to the top   and when I scroll that should not scroll   down and so that should be pinned to the   top.

 Right now when I scroll the title   of the app goes down with it and it just   looks janky. And then as I scroll up the   the tags at the top those should scroll   and every and as items go beneath the   top bar I want it to kind of fade out   and this should be consistent on every   page. Right now when I scroll down on   platforms it'll just look a lot better.

  And then also the bottom little bar   thing that has the four tabs. I really   like the design. Keep it everything.   just move it down a little bit. And then   have as you scroll down, have the items   fade out. So the list as I scroll down   should not appear to be beneath the   bottom bar.

 It should fade out as it   gets like halfway through the bar. I've   seen a lot of apps have this design or   like right as it reaches the bar. It   should like have this light little fade   out similar to the how you're going to   do the top as well. And yeah, we're   going to run it. Okay. So once your   mobile app agent is done building, every   single time you actually need to hit   play and this actually rebuilds the app   on the device.

 So now we want to test   it. Let's see how this looks. We have   this nice blur here at the bottom. We   have a blur here at the top. Look at   this. This is pretty cool. We can switch   platforms and we're going to replace   this with all the different platforms up   here. This is going to be pretty cool.   This is looking really good actually.

  I'm actually enjoying this. Um, research   build. Here are going to be the skills   for different avatars. This is nice   actually. And then saved. We can save   them. And that's pretty cool. These   actually do get saved. This is very,   very cool. Okay, so we're working on   this app. It looks pretty good.

 We need   to figure out a database, right? We want   to figure out how users are going to be   able to sign in. Actually, we don't even   need to worry about that. It's like how   do I update this with the right app   icons, etc., etc. And ideally, how do I   do it from here? So, we can just ask   codec.

 So, I'm just going to ask it a   long prompt here. What I want to be able   to do is I want to be able to update the   app so that the different platforms and   the platform types are kind of stored in   a database. And I'm thinking, what is   the easiest way to like store this   information in this app so that I can   have you edit it with AI? like I could   just ask you right now to edit things or   add things to this app that's secure so   users won't be able to edit it and um   like what database should we use and   yeah I want to be able to just like add   a ton of things to this give you   documents so you can add it so that it   stays organized and over time it could   scale up to like thousands of skills in   theory in in a couple years or something   and uh we're going to allow users to   sign in so what would be the best   database system to set up so that you   can use like I could just ask you to add   things to this app and we can just   create it basically with AI that would   work with with clerk which is what we   use for my company right now. And so   this is just another thing to learn when   using agents, right? If you don't know

  what to do, you can just ask it, right?   It'll tell you the options and you just   need to say, "Okay, let's do it. Let's   solve it. Let's try and figure this   out." Okay, while that's working, let's   go ahead and um please generate 10   possible app icons for our app here. So,   I'm going to just screenshot it so it   knows which app we're talking about   because it is located in the folder   we're working working on the app now.

 I   want 10 icons, no background that fits   this same style of this app. Ideally,   something close to like the those icons   at the top row. generate 10 images all   without a background. I want 10 options   for app icons to choose from. These are   iOS app icons. And as I said earlier,   the Codeex app actually has the built-in   ability to use image generation.

 So, it   will actually decide what prompts to use   and it'll generate 10 images. Another   thing that I want to do is I want to   begin thinking about our launch video.   And so if we go to plugins and we type   in remotion, we see that there's this   remotion plugin. This is how you can   create motion graphics from prompts,   we're going to use this.

 I've already   installed it. Um you see here it says   remove from codeex. If you haven't   installed it, you'll see add to codeex.   And then you can basically give it full   access to do its thing. So if we come   back here and we can say for the mobile   app that we are working on right now   that is the best place for people to   learn about agents and download skills   and save things and learn about agents   and make become better and more   productive and make more money with AI   agents. I want to create a launch video.

  So please just come up with a list of   considerations for this like what should   we consider? Let's plan out the video   where we are going to be using the and   remember you can type slash actually   when it's in a plugin you go at remotion   skill don't make the video yet I just   want you to think about the skill and   think about the considerations that I   should consider when making this video   so now we can run that let's go back to   the mobile app here's what it says so as   of April 17th the best fit for this   would be clerk superbase postgress y   clerk already covers your off and clerk   Okay, Postgress is the right shape for   this. Okay, so we should use Postgress.   Okay, so give me the link to get started   with Superbase. And is there a Superbase   skill I could download that many people   use? If so, download that skill. Let's

  use it. Let me know where I need to sign   in. So I noticed that in plugins they   didn't have a Superbase plugin but   Superbase are what most of the vibe   coding platforms use for a database. In   fact lovable uses Superbase and   Superbase is actually a more valuable   company than Lovable. It's like an   incredibly valuable company.

 They're   recently $10 billion and it's just AI's   favorite database at this point. And so   we're going to use it. And since it   doesn't have a built-in plugin, I'm just   having codeex search the internet and   find a skill that we can use for   Superbase. And while that is searching   for that skill, we're going to go to   this plan remotion launch video that's   now done.

 And so based on the chorus   plan, and we have the swift, the   strongest launch video is AI is not the   future. And it gave us this plan. It   gave us some ideas, but I actually kind   of want to make it more like the   anthropic videos, which are do a really   good job of showing off the product. But   the first thing that we want to do is   just test and see if this remotion skill   works.

 And remember, remotion is what   we're using to create a motion graphics   video. And so what I'm going to do is   I'm just going to say, please use this   skill to create a test video that just   says then it should show a mockup. It   should it should flash between three   more scenes that show these different   screens.

 And so what I'm going to do is   I'm just going to screenshot this screen   and this screen and this screen right   here just to give it some additional   context so it knows what screens to use.   I want you to make a mockup of these so   it looks exactly like an iPhone and have   it animate on the screen and just have   these four scenes.

 The purpose of and   keep it as a white background. The   purpose of this is to just really uh I I   really want to just focus on seeing if   this skill works properly. And please   look into this skill to figure out how   you can run this locally. So I can just   click the local link and it opens up   here in the side window.

 Um and I can   see the video along with the different   tracks and sequences. And if you get   confused by that last part and I talk   about tracks and sequences, I'll explain   exactly what that means. I actually have   a good deal of experience using the   remotion skill. I used to use it in   Claude Code.

 I've used it in the Vibe   Code app and it's a pretty easy skill to   use. I'll show you. So, here it gave me   this link. We're back to creating a   mobile app. Remember, I'm sorry if we're   moving around, but remember this will   take like some of these will take like   five or 6 minutes. So, we want to be   able to multitask.

 So, again, we're   back. We're looking at how to use   Superbase. And remember, I actually   don't use Superbase that often. So, I'm   learning this as I go. And that's part   of what I'm trying to show you here is   you can learn how to do things as you do   it. That is part of the fun of using   AIS.

 It will just tell you how to do   things. You can just figure it out. So,   I'm just going to create a new project.   New project name is going to be and then   we'll type a strong password. Enable   data API and create new project. I'm   going to say okay, I created a new   project. Send me the URL region and tell   me when it exists.

 Okay, so we can hit   save. I need to give it a URL region.   It's it's loading up. That's pretty   cool. And if you take a look here, if we   click connect, I noticed here that we   have an MCP. We can choose codeex   and we can give it a feature groups only   enable the subset of the features.   All right. So, we can just copy this   prompt.

 So this should allow you to   connect. If you can connect, create the   full DB and add everything. If not, let   me know what else you need. Okay, so the   Remotion launch video is done. And so   notice here it gives us this localhost   3031. We click on it and a timeline   opens up right here. And you can just   edit this video. Take a look at this.

  You can just see a video. We have our   app. This is a mockup of all the screens   in our app showing up right here on our   screen. And we're just using the   Remotion plugin. I didn't do anything   crazy. You just enable the Remotion   plugin. You type at Remotion and boom,   you're using it. Now, check this out.

  Please, can you I'm just going to go on   a tangent here and just kind of uh talk   about it. And so, by the way, this is   how this works. So, you have like each   second each second has 30 frames. So,   this is 30 frames per second. And so you   can always reference the frames. So   that's how I kind of talk to AI as I'm   going through this.

 So this would be on   2 seconds 20 frame or 220. You can   mention the exact time that you want to   make a change. Like one thing I notice   here is like there's this learn text   here. But we don't need to make changes   to this cuz we're just we just wanted to   test this to see if this works. And it   does work.

 And so I'm just going to say   make an outline for the phones like   black. Make it look a little bit better.   Um, just like right now, you just show   the screen. I want a little black border   around the edge to make it look more   like an iPhone. Now, before the first   screen comes on the phone, I want text   on the screen.

 The text on the screen   should read, it should read, "Agents are   taking over the world." Then there   should be a little toggle that says   learn, and it should be in the off   position. then have a mouse and this   should be black like computer mouse come   on the screen and then toggle it to on.   As soon as that happens the the first   phone screen should come on the screen   and then it should scroll down on the   phone and look through all of the   different things that you can learn.

 And   I want you to have five different things   that you can learn that shows up like   agents 101, building your first agent,   learning about skills, and then come up   with two more. are based on what's   popular with codecs and then we'll build   the next scene after that. So that is   what I want first here, right? I'm going   to add something that comes up before it   says welcome to chorus.

 I actually don't   want the welcome to chorus. And remember   we can use steer. So like we should   never see the welcome to chorus phone   screen. I I don't want to see that. It   should immediately after the screen I   said to show the the app and scrolling   down on the agents page. So remember   while it's loading we can press enter   and you can see that this actually   steered the conversation.

 Let's go back   to our mobile app. Let's take a look and   see what the database what we're doing.   Okay. The the superbase MCP is set up   place locally. I added the Superbase   server and enabled remote MCP client   support. Okay. Then blah blah blah blah   blah. I could not apply the database   directly from this live agent process   because the current session still does   not expose the newly added MCP server to   the layer.

 So um what we need to do is   we actually need to create a new chat   here. It actually says if you restart   codecs now and come back to this project   I can do the actual DB apply next. So   we're going to come down here. We're   just going to quit codec. We are going   to quit I believe. Yeah, we're going to   quit codeex and we're going to reopen   it.

 And then I'm going to just say,   okay, I restarted it. Please do it.   Okay, so it looks like the Xcode is   done. So we can actually run this. And   it says that it created all of these   different tables in the database. So it   says it should be stored in Superbase.   So if we open our simulator, we do see   that the there is data in here.

 So let's   hope that this is actually stored in   Superbase. So we can go to Arc. Okay, so   we definitely see some requests here.   What we can do, let's go ahead and go to   table editor. Nice. Look at all these   tables. So, if we were to go to like   skill categories for example. Very cool.   So, we have different icons.

 So, we can   set the icon here. This is cool. So, we   have the different skill platforms,   saved items,   skills. So, we have category, research,   GTM, build ops. Okay. We have competitor   scan, landing critic. Let's see if these   are in here. Let's go to simulator. So,   if we go to platform, so we can edit   those skills.

 Yeah, we have competitor   scan landing critic. We can copy this.   Let's see if that actually copied. Yep,   this copied to my clipboard. That's   pretty cool. This is starting to look   pretty good. Can we? So, I think the   saved just happens locally because we   haven't added authentication yet, but   this does look like it's being stored in   the database. So, that's pretty cool.

  So, we have database set up. Now, I want   you to go to my YouTube account, Riley   Brown, and find videos where I talk   about agents. find my three like find   like my five videos on AI agents   specifically to come up with the learn   the stuff on the learn tab. I want five   lessons and this means you're going to   be in my own voice.

 I want you to fill   them in and these should be more   general. I should not be specifically   talking about specific agent tools. I   want you to actually create a curriculum   based on the stuff I've talked about,   but do additional research to fill in   the gaps to create highquality lessons.   And remember earlier we created that   skill which is called I believe it's   YouTube researcher for transcript   pulling.

 So let's go back to the reotion   launch video. Let's see how this did. If   we refresh the page here and we hit   play, agents are taking over the world.   Notice here that the mouse missed it   right here, I believe.   View, show guides. No, show rulers.   Okay, so this is a little hack with the   reotion skill. So notice here that this   mouse goes, we want this mouse to go   here.

 So this would be like 1,000 on the   x axis and 1,610.   So 1,000 xaxis   610 yaxis and it's currently at uh like   1,040.   So like if you can you can turn on these   grid lines to give the agent very   specific instructions and so 140 xaxis   and it is on 540.   The arrow completely missed the screen.   The the toggle and the it should be   about at this location.

 The arrow ended   up like the mouse when clicking ended up   at this location. So I don't want it   here. I want it at the location above.   And so let's see. So this is actually   looking pretty good. So agents are   taking over the world. You click learn.   And now this screen pops up. So let's go   right at the 3 second mark.

 Then right   at the 3se secondond mark, I want the   camera to zoom in on learning about   skills. And then it should zoom in on   the component that has learning about   skills. And then it should kind of   transition to like almost like a   document view. It should not be a phone   screen. It should be and then it should   it should show some information about   skills and just show like 10 popular   skills. Do some research.

 Show 10   popular skills and each one should have   some information. And so this should be   more of like a full screen view that   shows the different things that you can   learn within that. And it should just it   should just take the viewer through the   fact that you can learn about agent   skills. Okay, we're going to run that.

  And now if we go back to our web app, we   can see that it is done. And notice here   if we actually open this in a separate   browser, right? If we were to open this   up in Arc, let's just paste this in Arc.   You can see that the tally is indeed   working. And so what I'm going to do is   I want you to please   make this look like the iOS app we're   building.

 Keep the design very simple   and make the design have the same exact   font. Uh have like no components, very   little like subtext. I just want this to   be very very simple. I just want the   design to look exactly like it. And then   have like information about the app on   this website. You know, you're not the   best designer.

 So, I want you to like   make sure that this is designed pretty   well and like keep it simple. It should   look like the app. Get rid of this   background gradient. Change the font to   match the application. Okay. So, we're   currently working on a launch video, a   mobile app, and a web app at the same   time.

 So, here I'm just going to refresh   this. The Remotion is done. Let's go   ahead.   So, we can click learn. There we go.   That's not bad.   Okay. So this zoom when it zooms I want   it to zoom even more. So like it should   zoom all the way and then it should kind   of transition. And then notice here the   transitions are like kind of like fade   out. It looks this is disgusting.

  Okay. So what we're going to do here is   I'm going to screenshot this. I'm just   going to paste this here. Okay. Um and   then the transition should be like   harsher cuts. I do not like this fade   out transition. Like make it a faster   transition and just make it more   professional. And then also the the   screenshot I gave you, this is hideous.

  What I want you to do instead of this is   I just want you to have skills at the   top. Like just put the word skills at   the top and then have like colored cards   that look premium amazing. And then have   them rotating through like a wheel like   almost like a a wheel animation through   the like the screen.

 I'll draw something   out for you real quick. I I'll kind of   share what I I want you to create. I   want this to be amazing. What I'm going   to do here is I'm I'm gonna want this to   be like Yeah, I want it to be something   like this. So, we'll give it kind of   this sketch right here. I want it to   look something like this. Okay.

 So, it   turns out I forgot Codeex is just not   the best at web design. So, what we're   going to do is we're actually just going   to use Opus. So, I'm just going to type   in Claude here in the terminal. So this   is a good a good use case in my opinion   if you're someone who has a Claude   subscription but you want to use Codex   because I think Codex is a better   interface but Claude is better at   design.

 So you can use Claude directly   in here and you notice here remember if   we go back to our uh the beginning of   the video whenever we create this   project it already like we created this   project at my new business. And so when   we go into the terminal right if you   know how to use cloud code you kind of   have you have this set up already.

 If   you don't have Claude Code, search on   the internet how to set up Claude Code.   It'll take you 5 minutes. You can figure   it out. And you can run Claude Code from   this app right here, uh, from the   terminal. And if you don't want to have   to approve anything, you can go like   this.   You can go claude space dash dangerously   dash skip dash permissions   and this will run it on bypath   permissions mode which is the same as   the full access mode but anyway we are   working on the landing page here and   what I like to do is I like to give it   context um right because claude doesn't   have the same context as if you were   chatting here it knows we're in this my   business uh my new business, but it   doesn't know anything else. It's just in   this folder. It doesn't know if it's

  working on the chorus plan or the chorus   video. We are using tally and I want to   make sure that we create a really good   landing page. I want you to completely   forget the styling of this page that you   have here. I want you to make this a   landing page for the following   application. It is the chorus app.

 And   so, you're going to look at the code of   the chorus app in this folder right   here. and you are going to analyze how   it's styled. It's very simple. It's   white. Look at the font and make the app   ma or make this landing page match it.   And it should have the tally embed.   That's all I want. Minimal text.

 Really   make it convert. Make it great. Okay,   we'll run that. And we can actually see   cloud code working on this in real time.   We can very easily just like minimize it   almost all the way and cloud code will   just continue working on this. Okay, so   the mobile app is done. Let's go ahead   and open up Xcode.

 And what we need to   do is it analyzed my YouTube, right?   Remember what we asked it to do? We were   having it research my YouTube and it uh   created five lessons based on my YouTube   transcript. So what is an agent? Narrow   beats general build the loop workspace   memory skills team and handoff. So I've   made videos on this before.

 So did   research and it created these lessons.   So what is an agent? Okay.   Okay. These are way too short. Make them   longer, please. Okay, so Claude Code   just went to town on the web app. Oh,   wow. This looks a lot better. So, we can   actually open this up in an external   browser to see it full screen or we can   just go like this.

 And you'll notice   here you can press get early access. Oh,   and it goes down here. And this is where   you put your information. For whatever   reason, this inapp browser is not   showing the tally form. Let's see if it   shows up here. Wait, so we can refresh   this. Get early access. Boom. We can put   this here.

 For whatever reason, these   icons are a little bit different, but   learn agents in one place. A simple   iPhone app for learning agent   fundamentals, comparing the right   platforms, and sharing reusable skills.   One thing I can add here and wow CEX is   not nearly as good at design it feels   like. So please add like works with   codeex claw code open claw uh Hermes and   Gemini please see if you can pull those   logos and put them in the files so they   show up. Okay, so that's pretty good.

  Let's go ahead and check on the mobile   app. So, if we go to Xcode, we hit play.   Let's see what this looks like. Where is   my simulator? There it is. Okay, so this   is looking pretty good. What is an   agent? It is very textheavy, but at   least we have some more. This is a   little bit longer.

 We do have the   database set up. Now, what I want to do   is I want to have platforms. So, for the   platforms, I want to have it be just a   list of platforms. No tags or categories   going horizontally across. I just want a   list of platforms. This will be my   curated list of 10 to 20. The ones that   I want you to have right now, I want to   have Claude Code, Codeex, Cursor,   OpenClaw, Hermes, Manis, Perplexity,   Computer, and that's good for now.

 For   the icon, see if you can grab the icon   for each of these. Like figure out how   to do that. If you can't do it, that's   okay. I can get you the PGs manually,   but see if you can do it and get it all   of this info in the database so it works   properly. But yeah, we don't need tags   for this because there's never going to   be over 20.

 Okay, we fired off that   prompt. Let's go check on our reotion.   So remember, we can full screen this.   This is looking pretty cool. Um, let's   go ahead and try to   play this.   Okay, this is looking good. This is Oh,   it's just a little choppy. And then it   kind Okay, so we have like good four   seconds are pretty good here. So, it   goes here. We click learn.

 It kind of   shows that you can learn these. And here   it has some skills going by. The skills   are rotating still slightly too fast. I   just want them to be a little bit slower   so I can read them. And then immediately   after this screen, the way I want it to   end is I want the YouTube researcher   skill to animate up to the top and then   I want text to come in to describe the   skills.

 I want to show a copy animation   as if I was pressing the copy button and   then it should say copied to clipboard.   And then we are going to show the codeex   app opening up and and so what we can do   is we can say this is going to be a hard   one. So I'm going to paste this in. Then   it should show um a text input area just   like uh the one of the screenshot that I   showed you for the codeex app and then   have typing in that box and it should   say can you please add this skill and   then show somehow that that document was   pasted in the text input area and it   should show up above where you're   typing. So this should look like a   computer basically. Okay, so this is   going to be a hard one. We're going to   have to edit this a little bit more but   that's okay. Okay, so we are kind of   working through all of these. We're   making our way through our iPhone app.   This will take a little bit. One thing I   want to cover is forking a chat. So, we   can actually come to mobile app here.   And what we can do, actually, I'm going

  to fork this chat as soon as this is   done. So, one sec. I'm going to wait for   this to finish. Then, we're actually   going to fork this chat. And we are   going to create our we are going to   start working on our investor deck. So,   please mark investor deck as working.   And so, I'm going to wait for the mobile   app to finish. Okay.

 So, the mobile app   is done. And so, what I want to do here   is I'm actually going to fork the chat.   And you can do this by coming over here   and right clicking or, you know,   two-finger click. And what we're going   to do is we're just going to hit fork   into local. If you're not technical,   don't worry about fork into new work   tree.

 That doesn't matter for the sake   of this video. just do fork into local   and this is going to create a new chat   and what I'm going to do is I'm going to   rename this to investor deck and what   I'm going to do please analyze the   features and assets from this   application and I want you to create an   investor slide deck in the same style   you know like we have all of those icons   for uh that we've created earlier for   codeex cursor open clock etc that are in   the app right now.

 So, include those   like all the styling stuff in this new   investor deck. And I believe we have a   skill that's built in. I think it's just   called PowerPoint. And so, we can   reference that. I want you to search the   internet for a bit, find out what   investors are currently looking for in   April of 2026, like what are they   looking for in a PowerPoint deck or or   in a deck that you send them.

 And please   create it like that in that style. So,   find some examples online and copy the   style. Do not rely on your own styling   ability. Okay, so we're going to send   this off. Now, we are working on this   investor deck. So, remember, so we   created the iOS app design. We're still   working on the iPhone app.

 We're working   on the web app landing page, which is   almost done. We are working on the   investor deck and launch video. Okay, so   the investor deck is done. And I love   the way it looks in codecs. Like, look   at this. You can create an investor deck   just like this. I will say it's not the   best at designing PowerPoints yet.

 So,   what we need to do is we're going to   open up the terminal here and we're   going to type in Claude Dane juristly   skip permissions and we're going to say,   "Hey there, Claude. I need you to take a   look at this PowerPoint and I need you   to make it look better. I want you to   refine it.

 I want there to be less text,   some more graphics. Check and see how   what are best practices for you to do   it. I want you to just really make this   like a refined deck. There's just seems   to be too much text on this deck. It's   not super readable. It's just not my   favorite deck right now. Uh so please   make it so much better.

 Don't add any   slides or change the material. Just make   it better. Make it more refined. Less   text, more visuals that like put things   into perspective, you know, like charts,   anything like that. That could be good.   Make it better. uh we are working on.   And so it's useful to give it the files   cuz remember this chat has all the   context.

 All this chat knows is we're in   this my new business folder. It's always   good. Um I actually don't even know   where this is located. I guess we could   just   click on this. Oh, you can open it in   Canva.   Um   I'm just going to give it this file path   right here. Um what happens if we click   Canva?   Here it is on Canva. Wow. Wow. This is   actually very cool.

 I did not realize   you can do that that easily. Just open   it up straight in Canva. That's pretty   cool. Okay, so Claude Code, we just had   Claude Code go to town on this slide   deck. It does look a little bit better.   It doesn't look a ton better. I don't   think it's that much better at design   than Codeex models.

 It's just a little   bit more refined. We have some more   visuals   um here. Yeah, like this is a really   good slide like value compounds over   time. We have a learning graph, a saved   workspace, execution memory. Um this is   pretty cool. So we have this slide deck.   I didn't really give it enough   information, so I'm going to do that   now.

 And so here I'm coming up with kind   of like this fictional plan of how I'm   going to leverage my audience, right, to   build a massive curation of really   useful skills for existing tools like   OpenAI, Codeex, etc. We're going to   build a lightweight agent through   iMessage. People will pay monthly   through access for these different   agents that are super lightweight that   people can test.

 They're less of a   commitment than say codeex or cloud   code. I just kind of want to change the   narrative because it's kind of bringing   up like clock and off superbase. Like I   need to mention that. We don't need to   mention anything about the   authentication and talk more about the   narrative and why this is a big   opportunity and look up like how much   money is in this market.

 Like focus more   on the story, less on the tech. So we   fired off that prompt. Let's check on   our mobile app here. Oh yeah, while the   other one was loading, I forgot to   record it, but I uploaded one of these   app icons. If you remember, we generated   a ton of these app icons earlier. I   forgot about it and so I uploaded it   here to the mobile app.

 So, it added an   app icon. And so, what I'm going to do   now is I'm actually going to plug in my   actual phone. I'm going to show you real   quick how to run. So, when you're using   your phone or when you're using Xcode,   you can use the simulator or you can run   it on your actual phone. So, on Xcode,   you see here we have the device we we   chose. iPhone 17.

 This these are   simulators. You can see that this says   iOS simulators, but I can also select my   phone. And so I'm going to select my   phone. I'm going to hit play. I have my   phone out open right here. It should   open the latest version of the app. It   is. And so now I'm just screen sharing   my phone to the computer.

 This is on my   actual phone right now. And we're going   to take a look at the app. This page   looks pretty good. We have basics. Oh,   there's haptics in the app now. I can   actually feel the app there. There's   haptics here. We can select platforms.   Here we see cloud codecs. And here we   have the about platforms page.

 We have   this kind of nice overview where we can   learn about the platform   anthropics cla.   So we have this YouTube researcher   skill. I believe I can copy this to my   clipboard. It has a pretty cool   animation. We can save this. This is   actually coming out to be pretty cool.   Um, yeah, this is looking really good.

  This is my favorite page. I love the the   actual icons. Um, I'm actually going to   make this app. I'm going to put this on   the app store. I'm going to make it   really good. But this is looking very   good. Now, what I'm actually going to do   is I'm going to say I want users to   actually be able to sign in. Oh, wait.

  There's this profile icon. Oh, okay. So,   this is not real data. Um, and I want   the user to actually be able to sign in   with Google. And so what is the easiest   way to do that with uh with that we're   using superbase? Ignore clerk. We don't   need to use clerk. What is the easiest   way? Are you able to add authentication   right now? Um, using the MCP with Google   signin.

 And then this will log all the   users that sign in into the actual app.   And I want their actual data to show up   in the profile. And I basically want   this app fully ready to go. Obviously,   there's no payments in the app. I want   you to add authentication so users can   sign in. And so, we can run that. And if   we go back to our launch video, this is   the one that we might not finish today.

  I'm going to go ahead and close out of   my iPhone real quick. Uh, if we hit play   here.   Okay, that's pretty cool. It misses a   little bit on the learn. That's okay.   What is this gradient? That's okay.   Okay. I forgot I made a massive edit   last time. Oh, that looks pretty good.   So, you could please use this skill.

 You   can paste it into codeex.   Um, and now what I'm going to do is I'm   going to just do that again basically.   So, I'm going to let's open up Claude   and we're going to I'm going to say   after the welcome to codeex screen, I   actually want to go back to the phone   screen that shows the skills, show a   different skill and show copying a   different skill, maybe like a mobile app   designer skill.

 And then we're going to   paste it into Claude code, which looks   like this. And then I'm gonna go ahead   and go to Claude. And I'm just gonna   open up a new normal chat like this.   And um I'm just going to copy this just   like this. And what I'm going to do is   I'm actually going to be using Claude   again because it is better at design.

  Claude d- dangerously   get permissions. I'm going to paste that   image in here. And I'm also just going   to paste this. Uh we are working on the   reotion video. Use the remotion skill.   Really think deep. We're adding two   scenes at the end of this to kind of   close out the video to show that you can   add skills to your agents.

 And so now   we're focusing on claude code instead of   the subtitle above. So instead of it   saying Riley returns, so instead of it   saying Riley returns, it should just say   Claude code and it should show the same   thing. I want you to add this skill and   then it should paste in a skill in the   UI like the image.

 So like we've already   done this once with codeex, we're doing   it again. So we're going back to the   same app from earlier, copying the   prompt and then pasting it into cloud   code. So please think deep, make this   look good. Okay, this is really fun. I I   actually haven't done this until today   where I use Cloud Code inside the Codeex   app for like designheavy tasks.

 It ends   up looking a lot better. And obviously   these can take a lot longer, right? like   a launch video. Like I mean we've only   put in a total of like 10 minutes of   like focused effort in the launch video.   If you spend a few hours on this, you   could actually make this pretty good.   This is not terrible.

 Okay, Claude has   literally just went ham for 7 minutes   and 24 seconds and it cooked on this   slide deck. I was like cur curation is   the wedge. Agents are the business. Most   startups pray for distribution. We start   with it. And obviously some of these   things don't fit, but the fact that you   can like literally export it into Canva   immediately and make edits, that's   pretty insane. Curate, test, monetize.

 I   don't like this like top bar. In fact,   I'm just going to do that. Oh yeah, one   really useful thing I use a tool called   CleanShot Pro. And what it does is it   allows you to like immediately just like   make really good like I can just kind of   go like this very easily just select   which part that I want.

 Like I actually   don't want any of this up here. So, I'm   going to give this to Claude. I'm going   to say, "Please don't have the top bar.   Uh, we don't need it." The big black   thing that says 1.5 million followers.   Simplify that. I don't like that   component. Just change that. Um, let's   just go through and make some changes   here.

 Yeah, the top bar on all the   pages, by the way, not just that one. I   don't want the top bar. Um, this one   looks good. This one looks good. Yeah,   this is looking pretty pretty solid   here. Oh, I like this one. Every   consumer is about to decide which agents   to trust. Nobody is guiding them. Yeah,   I'm I like this.

 I'm just going to copy   this right here. We're going to go back   to Claude code on this first slide. Make   the text the main text at the top. Every   consumer uh and then just change what's   going on in the be uh on the bottom part   like it says fragmented, technical, and   unbranded. Please come up with something   else.

 Maybe show the phone on the the   right with the the the the app design.   show that there on the right and show   that there's like a course or something   there or something. That's pretty good.   Where are we on the mobile app? Oh,   yeah. Let me see here. Oh, yeah. We just   tried to add authentication. Let's go   ahead and go to Xcode.

 We're going to do   is we're going to run this on Riley's   iPhone. So, I'm going to go ahead and   open up Riley's iPhone here. Um, this is   going to open up. Let's take a look. Um,   we tried to add authentication. Add your   Superbase publishable keys. Okay, so   we're not quite ready for adding   authentication.

 The easiest path is   Superbase native Google Oath Flow. It's   asking it what do I need to do to make   this work? I'm not signed in yet or I   can't sign in. So again, we're just   asking the agent what we need to do to   set this up. Actually, we're not going   to do Google. I want to just set up What   were some of the providers? Was Apple   one of them? Let's do Apple.

 Actually,   let's just do email. We don't need to do   Google, just do email for now. Okay, so   the mobile app is done. Let's see if   this works here. What we're going to do   is we're going to go to Xcode and we're   going to hit play. Build succeeded. So,   it decided that doing email and password   was actually the easiest way to do it.

  So, that's what we're going to do. I'm   going to put in my email and password.   I'm going to pause the video for this.   And here we're just going to sign in.   Ah, I have to do create account first.   Create an account. Okay, wait. It   worked. It worked. It worked. I had to   go into Superbase and I had to turn off   um confirm email.

 I can turn that on   later, but all I want to do is be able   to sign in. And it looks like that I am   indeed signed in here. Um I can see that   it Let's see if I hit save. Let's save a   few things here on platforms. We'll save   Cloud Code. If we go back to our   profile, uh, we have one platform saved,   two tracks saved, no skills saved.

 So, I   can save some skills. One, two, three.   One, two, three. Now, let's go back to   my profile. All of these things are now   saved in the app. So, I am signed in. It   doesn't show the account that I'm signed   in with, which I will want it to do.   That's one thing we'll ask. Okay. So, I   am signed in.

 Once I sign in, I want it   to be clearer that I'm signed in, like   show like my email up at the top. Um,   but this is pretty cool. We are signed   in and this is working. We have a full   working authentication set up. Uh, we   can go to the tables and yeah, this is   pretty cool. So, I think this app is   ready for test flight.

 So, I'm actually   going to add this later. I want to get   this ready for test flight. Please do   everything to prep for this. I'm going   to do it on the not a number account. So   yeah, we're going to be sending this app   to the app store here. Let's take a   look. A trusted curator for the AI agent   era. That's pretty good.

 And so we can   see this full screen or what we can do   is we can open this in Canva. So we're   going to open up this new version in   Canva and it will show up right here and   we can actually manually make edits to   it. And so we can do like the last 5 10%   here. Like we might want to get rid of   this.

 You know, maybe we'd want to   change these colors just a little bit.   But yeah, it exports pretty well. Nice   animation. That's kind of sick. It looks   a lot better in Canva. And so yeah, like   we can get rid of these here. Then we   can also add some like offset   could like background. We can put it   over here.

 So this is looking a little   bit better. We can make some mon uh   yeah, you know, this slide it's fine. We   could add some icons, but you know what?   This is a decent start   to an investor deck. So I'm going to go   ahead and go back to the plan. I   finished the investor deck. I also   finished the iOS app um because this   mobile app I think is looking pretty   good.

 You know, we still need to send it   to the app store. And so while the   mobile app is loading, what I want to do   is I want to be able to put this on the   internet. So I want to be able to   actually put this on the internet and we   can give it a domain later. But what I'm   going to do now is I'm going to say   please can you deploy this to at   Verscell and give me the public uh link.

  So we are actually putting this website   on the internet, right? So this is how   people will can get early access. They   can come to the website and we can   actually grab this link right here. Let   me show you in a browser. So the actual   and while this is loading, I want to add   a song to our launch video.

 So I'm just   going to drag this song that I have.   It's called Chasing Horizons in my   folder. I'm going to say, "Please add   this song at 50%   volume in the launch video. Keep   everything else the same." Okay, so   we've created a build here on App Store   Connect. Now, please put it on test   flight. I'm done.

 Okay, while that's   loading, I'm running one final prompt on   Claude Code. I want to add Oh, yeah.   Here's the music, by the way.   So it shows copying. I can paste it   here.   It's pretty good.   Some repetition shows me copying this.   Boom. Now after this, I want it to   actually use the skill. So we're using   the skill.

 And then I want you to create   a little canvas that shows all like five   frames of a calorie tracking app that   look really good on the same background   as that cloud code is. But remember,   change the font here. You didn't really   choose the right font for the claude   code. And yeah, have a new app like have   a like a a laptop screen popup.

 Just   basically like a computer screen pop up   that shows the different canvases of an   iPhone mockup. Okay, we're getting   there. We're almost there, guys. Okay,   this web app looks done. Okay. Yep, this   is done. Deploy to Verscell. Give me   link. And we can't mark this as complete   until we've tested it.

 So, I'm going to   go in and try and submit an email on the   website, right? I need to go to this   link. If we open up Arc here, we need to   be able to type in the info here. And   then remember this last thing is I want   to be able to set up expost automation.   So, we're just going to set that up.   This is one of my favorite skills that   I've ever used.

 For this, we're going to   use Titefully. So, Typefully is how I   control six different Twitter accounts   to and uh combine over like 275,000   followers across all of my accounts. And   I just need to come in here and what I   need to do is I need to grab my API key,   right? Because I can just go here and I   can create new posts from Vibe Coding   Explain.

 This account has 50,000   followers and we can use AI to draft   tweets from Typefully. And so here, what   we need to do is we need to go to   settings. Then we need to go to API and   then we need to create a new API key. So   I'm going to create one and copy it. Now   we're going to come here. I'm going to   say please can you search typefully and   I want you to create a skill that allows   me to fully control it with their new   API. Their new API is V3.

 It gives me   full control. When you search it, you   might find V2. I want V3. I want full   control over Typefully. And um I want   you to just test it right away. Test it   with the Riley Brown account and use   fruit emojis in your test so I know   which ones are yours. In the message   below, I'm going to paste my API key.

  Use that. Figure this out. Test it.   Let's see if this works. Create the   skill. All right. So, we're creating a   skill so we can have AI and we can set   up automations to automatically use this   API to schedule tweets. So, here I'm   going to enter this. Now, off camera,   I'm going to paste my API key.

 I do not   want that out there in the wild. Okay.   So, we just got the web app link. And I   know this is not centered, right? I know   we're just we made this really quickly.   We could easily center this. It says   made with tally. Um, I'm just going to   put in an email address.   All right. So, we're going to hit   register. All right. So, done.

 So, now   let's check to see if that worked. We're   going to go back to Tally. And here we   see the registration form template. One   submission. We see the one submission   here. And we see that it works. So this   is actually on the internet, right? This   is chorus-ba-2   verscell app. So this is on the   internet.

 We can give it a custom   domain. I just haven't bought a domain   yet for this, but you can actually sign   up for early access right now. So we can   go back to our plan and we can say cool.   I finished the web app and landing page   weight list sign up. All right. And look   at this. We actually have our app. We   can open our app here.

 This is actually   in test flight. You can see that this is   a real build. This is not the chorus   app. This one is the app that we   downloaded to our phone, right? That we   downloaded from Xcode. This one, this   one is actually a test flight link. Now   I can say Riley at um actually I forget   what email at. Okay, there we go.

 We are   signed in to our account. We have this   app. It is literally on the app store.   It's a pretty barebones app, you know.   It's it it is a pretty simple app, but   we have some good information here that   we're going to add to. Right, we just   created the barebones. We have it set up   to a backend so I can constantly add   things to this to make it a really   useful app.

 One thing I do want to add   is an AI chat, but it has haptics and it   feels pretty good. So, we are done with   our app. Fully done with our app. Let's   check on our launch video. Let's see if   Opus is done. Okay, this is actually   looking pretty good. But I think the   typefully one is done. I was wrong. It   is V2, but it said that it was able to   create a draft autonomously.

 So, we did   create the skill that controls   Typefully, which allows me to draft   tweets. So, if I go back to Typefully   here, it said that it created one on   Riley Brown. Let's see. There you go.   So, it is able to create drafts for me.   And so, now I can say, "Please do   research." and come up with three drafts   every single morning to post on X.

  Please create that automation now and   use the slash I think it should have   created a skill typefully control skill   and we can run it. So we just created   the automation. So we are done with   this. I just finished the expost video   automation. So, all we have left is the   launch video.

 We need to go to the uh   Remotion screen here. Let's see if Cloud   Code is still working. It looks like   it's done. Let's take a look. Let's   watch the video. Let's see if it's good.   Okay. So, we're adding the skill. Very   good. We're going to do it again.   Boom.   Okay, that's a little bit long. That's   okay.   Okay, we got this app laptop opening up   and it created the designs for the app.

  That's pretty sick.   And then   boom.   There you go. It's kind of sick.   Obviously, there's a lot more we can do.   We were multitasking, but I think this   is actually a good first draft. We can   continue to edit it. I will say Claude   Code is significantly better at   designing. Codeex just wants to use   these like really clunky design styles.

  I cannot wait for them to get a model   specifically for design. I think that'll   be really great. But we're good. And as   you can see here, automations just   turned to three. If we go to, we can see   that it created these morning drafts   here. And here is the morning draft that   it created.

 And we have three   automations ready to go. So that's what   we've done today. This was a long one.   Yeah, we covered a lot. I'm just going   to just so we finished finished the   launch video. Okay. Yeah. And so there   you go. We are done. And all I wanted to   illustrate in part two of this video was   that you can multitask to create really   cool things.

 If you ever get stuck, just   ask the agent. If you ever want a skill,   just ask the agent if you can create a   skill. Maybe you'll need an API key to a   tool you already use, maybe not, but you   can just ask the agent to create a skill   and you can download it. And they have a   lot of plugins. They're going to   continue to add a ton more plugins.

 So,   you're going to basically be able to all   of the tools that you already use. And   um it's only going to get easier from   here. I highly recommend to just take   everything that you do in your job or in   your business and try and figure out how   you can automate as much as you can. You   know, if you have a software company,   try and create a launch video every   week.

 You can just launch on Instagram   or on Twitter every week. Uh you can   create Instagram videos. You can create   graphics. There's a ton of things that   you can just do and experiment with and   figure out how to use Canva with codecs.   There's so much that you can do on these   AI powered super apps and they're only   going to get better.

 Anyway, thank you   guys so much for watching. Please hit   subscribe and like this video. It helps   me out a ton. I will put the app that we   created, right? We have the app that we   created. By the time you see this video,   it should be on the app store. You'll be   able to use it for free. I'm going to   load it up.

 I'm just going to keep this   as my notes for all of the useful tools   that I use. So, I'm actually going to   put all of the useful skills and all the   platforms that I'm testing out on this   mobile app and it'll be on the app   store. So, check that out if you want.   Anyway, thank you guys for watching.



---

