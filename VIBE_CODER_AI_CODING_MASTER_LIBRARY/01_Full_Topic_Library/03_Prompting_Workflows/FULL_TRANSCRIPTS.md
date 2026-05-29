# Prompting and Workflows - Full Transcripts and Source Material

This file preserves full source text for this topic. The short text above each source is navigation only; the source body is not summarized.

Related archive folder: `99_Archive_Originals`

---

## Source: a-3-step-ai-coding-workflow-for-solo-founders-ryan-carson-5x-founder.txt

- Original path: `addintional info to add\a-3-step-ai-coding-workflow-for-solo-founders-ryan-carson-5x-founder.txt`
- Size: `38563` bytes
- SHA256: `14BA1B301439D7807669D3DDA7FAC28FBB906799C470555332C8343B2A8C96E3`

---

A 3-step AI coding workflow for solo founders | Ryan Carson (5x founder)

0:00 I think the biggest mistake that I do
0:02 that everyone does is they try to rush
0:04 through the context where you just don't
0:07 have the patience to tell the AI what it
0:08 actually needs to know to solve your
0:10 problem. And I think if we all just slow
0:11 down a tiny bit and do these two steps,
0:13 it speeds everything up. Nobody really
0:15 knows how to do this stuff. The only way
0:17 you're really going to figure it out is
0:18 by getting in here and getting your
0:20 hands dirty and see what works. That's a
0:23 place where so many engineers and
0:25 product managers get stuck in a loop
0:26 like who's going to take this PR and
0:28 actually break it down in the right
0:30 steps. So even just this is such a
0:32 timesaver for people building products
0:35 building this new startup I literally
0:37 feel like I'm able to do all of it. Am I
0:39 able to do it as well as a dedicated
0:42 product manager? No. Am I able to think
0:44 as deeply as CTO? No. But I am able for
0:47 sure to build this company. This is the
0:50 way people I'm telling you. Pay
0:52 [Music]
0:54 attention. Welcome to How I AI. I'm
0:58 Claire, product leader and AI obsessive
1:00 here on a mission to help you build
1:01 better with these new tools. 2025 is
1:04 definitely the year of the vibe coder,
1:06 but you can't always vibe your way to a
1:09 scalable execution strategy. In this
1:11 episode, Ryan Carson, a five-time
1:14 founder with 20 years experience, shows
1:16 us how he brings PRDs, task lists, and
1:19 some advanced prompting techniques to
1:21 Cursor to make sure he's not just
1:23 vibing, he's building the right things.
1:25 Let's get to it. Today's episode is
1:27 brought to you by ChatPD. I know that
1:30 many of you are tuning in to How I AI to
1:32 learn practical ways you can apply AI
1:34 and make it easier to build. That's
1:36 exactly why I built ChatPD. Chat PRD is
1:40 an AI co-pilot that helps you write
1:42 great product docs, automate tedious
1:44 coordination work, and get strategic
1:46 coaching from an expert AI CPO. And it's
1:49 loved by everyone from the fastest
1:51 growing AI startups to large enterprises
1:53 with hundreds of PMs. Whether you're
1:56 trying to vibe code a prototype, teach a
1:58 firsttime PM the ropes, or scale
2:00 efficiently in a large organization,
2:02 Chat PRD helps you do better work fast.
2:05 And we're integrated with the tools you
2:07 love. Vzero.dev, Dev, Google Drive,
2:09 Slack, Linear, Confluence, and more. So
2:12 you don't have to change your workflow
2:13 to accelerate with AI. Try ChatPRD free
2:17 at
2:19 chaturd.ai/howi ai. And let's make
2:22 product fun again. Hey Ryan, it's nice
2:25 to have you here. Thanks. It's exciting
2:27 to be here. I listen to every episode so
2:29 far and I'm honored to be here myself. I
2:32 can't wait. So I'm going to start with
2:33 an easy question, which is what are the
2:35 last three things you built with AI? I
2:37 don't know if you call constantly using
2:39 chat GBT with your kids, building
2:41 something in AI, but I feel like I feel
2:44 like I'm the constant AI coach in our
2:46 family and I'm always delighted actually
2:47 with what our kids are doing. And
2:50 because of that, um, my amazing
2:52 14-year-old kiddo Devon, he said, "Dad,
2:54 like you know, I've been thinking about
2:56 this game." And I said, "Well, like
2:58 let's build it." And so we're building a
3:00 a primitive little sidescroller and he's
3:02 like the creative director. So Oh, it's
3:04 so fun. So that's sort of thing one and
3:06 thing two. I would say thing three is
3:09 the startup I'm building which is just
3:10 this huge amount of work where I'm
3:13 coding. But then there's just all sorts
3:14 of little quick things I vibe code you
3:16 know all the time. So all day every day
3:19 all day every day chat should be te vibe
3:21 coding. I'm going to make us all
3:23 t-shirts and hate.
3:26 Okay. So one of the things that I think
3:27 you do really well compared to other
3:30 vibe coders is you bring some structure
3:33 to the process. you're you're quite wise
3:35 about how you use cursor and so I'd love
3:38 for you to pull up your screen and show
3:40 us how you get cursor to follow a plan.
3:43 Let's do it. So the reason why uh I do
3:48 this is because I've been coding and
3:50 coding coding with AI and you just learn
3:54 as you do this that you really have to
3:56 get good
3:57 about context what you're showing the AI
4:00 what you're asking AI to do and you end
4:02 up cutting back uh all all the things
4:04 you're doing to a manageable amount of
4:06 things uh that the AI can actually do.
4:08 So, the process I'm going to show you,
4:10 I'm in Cursor now. Uh, in case you're
4:12 listening to the show, you can download
4:14 it for free at cursor.com. Uh, it's
4:16 basically a VS Code fork, right? So, if
4:18 you ever use VS Code, it's a great tool.
4:20 So, what I've done here is open up a a
4:23 basic project that I vibe coded
4:24 yesterday just to kind of show you
4:27 what's going on. This is a a stupid
4:29 little CRM tool for a yacht club because
4:32 I thought that would be kind of funny.
4:34 So, so there's that. So, all right. So
4:37 say that you want to make a change in
4:38 here and it's a bigger change than just
4:40 a small uh you know a quick hey will you
4:43 change this thing say it's larger all
4:45 right so you would probably want to
4:47 create a product requirement doc right
4:48 like prd and and if you're watching the
4:50 show and you don't know about cla's chat
4:52 prds absolutely check it out because
4:54 it's amazing but if you need a lighter
4:56 lift then here's what I do so I've
4:59 created three files over here in my
5:02 cursor rules folder and I'll walk you
5:06 through what they do and how they work.
5:07 I've also open sourced these and so we
5:09 can throw those uh a link in the show
5:11 notes for you all to grab that. So the
5:14 first one is a simple uh instruction for
5:16 the AI to create a product requirement
5:18 docs. Again, Claire knows everything
5:20 about this and lives this and breathes
5:22 this, but to a lot of people that don't
5:24 know about PRDs, right, it's it's how
5:26 you describe a feature that you're
5:28 wanting to build. And so this rule
5:31 explains to the AI how to write a PRD
5:34 for the user. So the way you use this is
5:38 is very simple, right? So I'm gonna go
5:39 over and I want to pause really quickly
5:41 because I love your initial prompt which
5:44 says this is a PRD that's suitable for a
5:48 junior developer to understand and
5:50 implement this feature. That's such an
5:52 interesting little call out. Yeah, that
5:54 well spotted because again the as you
5:57 code and code and code with AIs, you you
5:59 start to realize that they're like a
6:02 genius PhD student, right? But but they
6:06 they can't seem to connect these really
6:10 simple obvious things that you and I
6:12 know. And so saying junior developer is
6:15 kind of a way to instruct the AI, let's
6:16 keep this at the at a certain level.
6:18 Yep. You know, we've got some process,
6:20 we've got some clarifying questions.
6:22 You'll see this in action. I'll actually
6:24 run it. Great. So, let's do that. Great.
6:26 So, I'm going to atlude this file which
6:28 puts it in the context window and then
6:31 I'm going to give it a simple
6:32 instruction which I've pre-written which
6:33 is I'd like to add a report that shows
6:36 me all the boat names of members and how
6:38 many emails they've been sent. This is a
6:40 big deal if you're in a yacht in a yacht
6:42 club. You have a lot more fun use cases
6:46 to provide coding. I I try, you know.
6:49 So, let's see what happens. And so I'm
6:50 going to go and hit go. We're in agent
6:53 mode. For those of you who are astute,
6:56 you'll notice I'm using Claude uh 37
6:58 Sonnet in Max mode. I actually tend to
7:02 use uh Gemini 2.5 Pro. And it's funny, I
7:04 didn't notice that had selected that,
7:06 but
7:08 I'm now a default 03 girl. Ooh. Ooh.
7:11 We'll have to talk. Yeah. And then when
7:12 03 gets stalled out, I go to 37. Right.
7:14 Right. It's funny. I'm pretty much
7:16 default uh Gemini 2.5 Pro. I love the
7:19 max mode. It is sort of expensive. I
7:22 probably spend maybe three 400 bucks a
7:24 month. Uh uh but you know, worth it.
7:27 Think that's okay. Okay. So, what we've
7:28 got here is the AI came back and gave us
7:31 some clarifying questions on the PRD. Uh
7:33 I'm going to answer a couple of these
7:35 just to to show you how this works. So,
7:37 if you're listening along, the AI has
7:39 said, "Okay, great. I'll help you create
7:40 a PRD." Uh have a couple questions for
7:42 you. Uh the first one is, "What is the
7:44 problem this reporter is is trying to
7:46 solve?" Well, we are uh what problem is
7:48 this? We're trying to give visibility
7:51 into how many emails people are getting,
7:55 right? All right. So, that's thing one.
7:57 Let's go. Let's answer the second one.
7:58 Who specifically will be using the
7:59 report? All right. We'll say admins.
8:01 Where should this report be accessible?
8:03 Uh you pick. And so there's a couple I I
8:07 would say there's probably too many
8:08 questions in here, but one of these
8:10 things again that I want everyone
8:12 watching to kind of get used to is
8:13 you'll notice in this PRD rule file,
8:17 I've done something specific here where
8:18 I've said I want these questions to be
8:22 dot notation where it's 2.1 and
8:24 2.2 because you end up otherwise the AI
8:27 would just give you a bunch of questions
8:29 and it would it would put more than one
8:31 question in a bullet point and it
8:33 becomes hard to use. So, you kind of get
8:34 used to this specificity, right? So, I'm
8:37 just going to uh and say the rest. Make
8:40 your best judgment. I do the exact same
8:42 prompt. I say you pick whatever you
8:45 think is best. Yeah, cuz I'm kind of
8:47 lazy, right? So, all right. So, let's do
8:49 that. So, it's going to fire up and
8:51 start creating this PRD. Now, what I've
8:54 chosen is is, you know, over here I've
8:57 got a task folder. You put PRD in there.
9:00 And then we're going to generate a list
9:01 of tasks in a minute. So, it says,
9:03 "Okay, great." Uh, I'll now create it.
9:05 And it's generating it. So, that will
9:07 happen in a minute. I'm going to
9:09 actually nip over uh to my browser
9:12 because I do want to show you a couple
9:14 other interesting things. Um, so, first
9:17 of all, this is my amazing Yacht Club
9:19 member of the app that we just coded.
9:21 Now, we're going to pop this in the
9:23 link, but this is uh the uh repo that
9:27 has these prompts in it. We'll give
9:28 those to you. But there's this really
9:29 cool open source tool called Taskmaster.
9:32 This is open source. It's completely
9:34 free and it's like a hyped up version of
9:36 what I'm showing you. So it's it runs in
9:39 as a command line interface tool. It's
9:41 great. It it's actually was too much for
9:43 me. I I wanted less uh less power, less
9:46 control or less power, more control. So
9:49 this is a a great alternative to that.
9:51 So I'm going to head back into cursor.
9:54 Just to kind of recap where we are so
9:56 far. So you have a cursor rules files
9:58 that gives uh rules and instructions for
10:01 generating a PRD. You generate the PRD
10:04 in agent mode using whatever your
10:06 preferred model is. That puts that PRD
10:09 markdown file in a tasks folder that
10:12 you've put in in your repo. And now
10:15 we're going to look at that PRD and show
10:18 how you work through it to build
10:20 something. Exactly. Okay. You're a good
10:22 student. So here is our PRD. It's pretty
10:25 straightforward if you've ever looked at
10:26 a PRD. Um, I'm going to show you. So,
10:29 you've got functional requirements, uh,
10:31 non- goals, design considerations, etc.
10:33 Right? And let's back up like what are
10:36 we doing here? What we're doing is
10:39 making it clear, uh, to the large
10:41 language model what we want done. I
10:43 think the biggest mistake that I do that
10:46 everyone does is they try to rush
10:48 through the context where you just don't
10:51 have the patience to tell the AI what it
10:53 actually needs to know to solve your
10:55 problem. And I think if we all just slow
10:57 down a tiny bit and do these two steps,
10:59 it speeds everything up, right? So,
11:02 we've got a PRD. It's not rocket science
11:04 here. Uh now, next, what we want to do
11:06 is generate tasks for this. So, let's go
11:10 and generate the task based on off this
11:12 PRD. So I if you're listening I'm back
11:14 in cursor and I'm uh I'm including the
11:18 the file that generates the task. It's
11:20 called generate tasks and I'm going to
11:23 say uh please generate tasks task for
11:26 and then I'm going to tag the PRD. Got
11:28 it. So this is another rule probably
11:31 similar to your generate PRD one that
11:33 explains what a task is and how to do it
11:35 well and then you're giving it the
11:37 context of the PRD itself. Exactly. So
11:38 let's have a quick look at the generate
11:40 task list. So, the goal is to guide an
11:43 AI assistant in creating a detailed
11:44 step-by-step task list list. This is
11:47 what it what I want the list to look
11:49 like. This is the process. You'll see
11:52 it's going to ask me a couple questions
11:54 and it's going to pump out uh tasks in
11:57 this format as a markdown file. I have
11:59 to ask, how did you create these rules?
12:02 These the it's a lovely prompt. It's
12:04 well structured. It's clear. How did you
12:06 get good at writing these instructions
12:08 prompts? the same way you did.
12:11 Basically, I tried a couple things. They
12:13 didn't work. I got more specific and
12:16 then of course, you know, I had a very
12:18 intelligent LM write this for me and
12:20 then I edit it. You know, you again, you
12:23 sort of learn some of the tricks of the
12:24 trade. Like, I want this task list to be
12:27 in markdown and I want I want there to
12:29 be check boxes so we can check them off.
12:32 I mean, silly stuff like that. So, the
12:35 biggest thing I want people to walk away
12:36 from the show is, you know what, nobody
12:39 really knows how to do this stuff. The
12:40 only way you're really going to figure
12:42 it out is by getting in here and getting
12:44 your hands dirty and see what works. Um,
12:47 and then stick with a model that you
12:49 consistently like. Like, I'm getting to
12:51 know Gemini 2.5 Pro really well, like
12:53 what it's good at, what it's not good
12:55 at. So, let's see what it's good at. All
12:58 right. So, I just said, "Please generate
13:00 task for this PRD." I tagged the file.
13:03 Uh we're using a reasoning model. So
13:05 we're seeing uh the thinking tokens kind
13:07 of whiz by and all this thinking might
13:10 cost you a little bit more, but you get
13:12 a little bit more visibility. You learn
13:13 more and looks like it's doing a good
13:16 job. Amen. Yeah. I I feel like for the
13:18 extra 5 cents, like this is absolutely
13:22 worth it. Um, so in in this instruction,
13:25 it it the instruction is give me some
13:28 basic tasks and then ask me if they're
13:31 okay and then tell me to go to proceed.
13:33 So you'll see it says ready to generate
13:35 the subtasks. Uh, respond with go to
13:37 proceed. You know, as I'm looking at
13:39 this side by side, what I really like
13:41 about your generate tasks instructions
13:43 is you've given it a very explicit
13:46 process. It's you get this file, you do
13:48 step one, you get this next step next
13:51 file. And it's not quite an agent, but
13:54 it really brings in this like agentic
13:56 thinking of where are the decision
13:58 points, where are the user interaction
14:00 points um but in sort of more this
14:02 linear um step-by-step chat mode.
14:05 Exactly. And I have beenounding the
14:07 cursor team non-stop like why don't you
14:10 just build this into the core developer
14:12 experience of the app? I don't
14:13 understand why this isn't just the way
14:15 you use cursor and they keep saying
14:16 we're doing it. So, you know, and and
14:18 for those listening, that
14:20 delightful is when cursor cursor is done
14:23 generating. Isn't that the best? I love
14:25 that. I love it. This episode is brought
14:27 to you by notion. Notion is now your do
14:31 everything AI tool for work. With new AI
14:35 meeting notes, enterprise search, and
14:37 research mode, everyone on your team
14:39 gets a notetaker, researcher, doc
14:41 drafter, brainstormer. Your new AI team
14:44 is here right where your team already
14:47 works. I've been a longtime Notion user
14:50 and have been using the new Notion AI
14:52 features for the last few weeks. I can't
14:54 imagine working without them. AI meeting
14:57 notes are a gamecher. The summaries are
14:59 accurate and extracting action items is
15:02 super useful for standups, team
15:04 meetings, one-on- ones, customer
15:06 interviews, and yes, podcast prep.
15:08 Notion's AI meeting notes are now an
15:10 essential part of my team's workflow.
15:13 The fastest growing companies like
15:15 OpenAI, Ramp, Verscell, and Cursor all
15:18 use Notion to get more done. Try all of
15:22 Notion's new AI features for free by
15:25 signing up with your work email at
15:30 notion.com/howi aai. So, we're going to
15:33 accept those changes. We're going to hop
15:34 over here and let's just kind of see
15:35 what it did, right? So, oh wow, I know.
15:38 It's fun, isn't it? So, what you've got
15:41 up here is the relevant files. Now, this
15:43 is a trick I learned from a friend on X
15:46 where my thinking here is that this
15:48 should help the LLM just remember what
15:50 files are we really focusing on. Even
15:53 though I will specifically tag these in
15:55 the context, uh I I think it's helpful.
15:58 One of the things I want uh briefly
15:59 touch, I probably anthropomorphize LMS
16:03 probably too much, but but because
16:05 they're trained on human output on the
16:07 web, you know, my belief is we need to
16:10 give LM like the right context and be as
16:14 helpful as we can so they can actually
16:15 solve our problems, right? I I
16:18 completely agree. I'm also very polite
16:20 to to the LLMs. It's how I get people to
16:22 people to do work. It's how I'm going to
16:24 get the agents to do work, right? So why
16:26 wouldn't you, you know, be treat an
16:28 agent like you would treat a human? I
16:29 that's the way I So I agree. All right.
16:32 So then we've got, you know, pretty
16:33 detailed list of tasks, right? We've got
16:35 1 2 3 four with subtasks. Some we've
16:38 even got sub subtasks here. And then
16:40 we're going to start iterating on this.
16:42 So here's how it works. I've got another
16:44 rule called task list, which probably
16:48 need to rename because that doesn't
16:49 really make sense. But this is the
16:51 instructions for iterating through uh
16:55 these tasks. So I'll kind of walk you
16:56 through that. So this is task list
16:59 management. These are guidelines for
17:00 managing task lists in markdown files to
17:03 track progress. The task completion we
17:05 have a uh we want to do one subtask at a
17:08 time. Like this is really important that
17:10 the the doesn't start trying to do all
17:12 the tasks. uh when you finish a subtask
17:15 immediately mark it as complete and then
17:18 you'll see I say stop after each subtask
17:21 uh and wait for the user's go ahead and
17:23 then it's just a little bit more uh
17:25 clear clarity here if people see me
17:27 shaking my head it's because I am
17:29 realizing now I'm using cursor like such
17:32 an amateur this is I doubt that this is
17:35 so good I'm just floating through the
17:37 ether saying you know 03 take me away
17:41 and maybe I'm I'm overconfident in my
17:44 product management skills and so I'm
17:46 putting this all into the chat but this
17:48 is this is the way people I'm telling
17:51 you pay attention I appreciate that I
17:53 mean I think the answer is yes to both
17:56 of us I mean sometimes you do just need
17:57 to roll and see what happens but I'm
17:59 learning over and over that if I don't
18:01 follow this process I end up down some
18:03 rabbit hole and I have to revert right
18:06 so let's let's go ahead and continue
18:08 here what I'm doing now is I'm tagging
18:10 the task list rule which tells the AI I
18:12 how to act and then I'm going to say
18:14 let's start and then I'm going to tag
18:16 the uh the tasks the task list which is
18:20 uh so we got a prd we got a task list
18:23 and now we have a set of rules that
18:25 knows how to work through a task list
18:27 and actually get work done it does
18:30 exactly so all right so let's start it's
18:34 going to think about it and it's looking
18:37 through this big list of tasks right now
18:40 and so what it's saying is okay let's
18:41 start with the first subtask define
18:43 Prisma scheme email campaign. I'll start
18:46 by reading the existing Prisma uh
18:48 campaign. Okay, existing blah blah blah,
18:50 you know, so it's just thinking it
18:51 through and boom, it has checked off
18:55 1.1. H with a delightful noise. I have a
18:58 question. Are you are you hooking it all
19:01 into git? How are you doing sort of the
19:05 the change management here? Yep. So what
19:07 I tend to do is I will commit after I
19:10 after I finish either one of the bullet
19:13 one of the one of the parent tasks if I
19:16 if I feel like the app is in a state
19:17 that it's workable. Yep. And I will
19:20 commit at that point. Got it. If I don't
19:22 I won't commit until all of these tasks
19:25 are done. Oh wow. Um which you know is
19:28 probably you know half a day of work. it
19:32 you you know you kind of get used to
19:34 like oh all right if I had to revert now
19:37 you know how bad would it be? Yep. And
19:39 and I try to think about well what would
19:41 I need to undo? So it said uh all right
19:45 shall I proceed with subtask 1.2 and I'm
19:48 going to say uh yes. Sometimes I'm
19:51 really lazy and I just say
19:54 why as in the letter Y. So it's just
19:57 going to keep working. Now, we don't
19:59 need to go through this whole thing, but
20:01 I just wanted to show all of your
20:03 amazing listeners and audience this is a
20:06 pretty easy process to follow and I've
20:10 built huge features with this. I mean,
20:13 you know, 10,000 lines of code reliably
20:16 and almost never had trouble. I still
20:19 feel like this human in the loop part is
20:20 really important where after each task
20:23 you are kind of checking what's
20:25 happening. I've noticed that it often
20:28 does introduce some small problem or
20:30 there's a llinter um you know error and
20:33 then you got to go fix it. So, and you
20:36 know, this is great to get the actual
20:37 engineering work done. But if I just
20:40 take a step back for product managers
20:42 out there that don't know where to get
20:44 started with cursor, even if you just
20:47 did the prd task list part, I'm looking
20:51 at this task list right now and it's got
20:53 and basically like epics and tasks in
20:55 it. And that's a place where so many
20:58 engineers and product managers get stuck
21:00 in a loop like who's going to take this
21:01 PRD and actually break it down in the
21:03 right steps that are going to work in
21:05 our codebase. So even just this is such
21:07 a timesaver for people building products
21:10 I think. So now you can overengineer
21:14 this process. You know this is literally
21:15 a markdown file. Um it's somewhat handc
21:18 cranked. you know, I thought, oh, maybe
21:20 I'll use, you know, Asana's MCP, you
21:23 know, server and create a sauna task.
21:25 And yeah, I was like, no, like it's
21:27 actually easier for me just to see a
21:28 markdown file and know what's happening
21:31 and I can even add tasks to it. So, my
21:34 encouragement to everybody is just start
21:35 small, start simple and get good at that
21:39 and get comfortable at that and then you
21:40 can, you know, uh, graduate from there.
21:43 So, and and 30 chime noises later, we
21:45 are going to have a report about your
21:47 yacht club. That's right. Emails. I
21:50 mean, speaking of MCPs, are you using
21:52 MCPS at all in your cursor experience?
21:55 How is that fitting into your workflow?
21:56 I am. So, I'm going to um show you a
21:59 couple of those now. Um I wasn't using
22:02 many at the beginning and then the first
22:04 MCP I started using was for Postgres um
22:08 because it's really useful to ask the
22:11 AI, hey can you go see if I if this data
22:14 is actually in the database. Um so I
22:16 started that and then I've gone down the
22:17 rabbit hole. So I'm going to show you a
22:19 couple uh MCP servers that I think are
22:21 really useful. So let me go and share my
22:23 screen. Okay. So what you are seeing now
22:26 is on the left I've got browser base.
22:27 That's the actual backend. I've got a
22:29 free account. So, I just want to try
22:31 this out and see how well it works. I'm
22:32 going to show you uh the fun that you
22:34 can do with an MCP here. So, on the
22:37 right, I've got cursor and I'm in my
22:39 cursor settings. I'm going to go to MCP
22:41 and you'll see down here I've got a
22:44 browserbased MCP. Yep. Which I've set
22:46 up. I've got stage hand as well, which
22:48 is really fun. So, let me show you uh
22:51 how this works. So, we're going to go
22:54 back into start a new chats, turn it on
22:58 agent mode, and I'm going to say um
23:02 navigate to chat PRD and take a screen
23:06 grab. Now, let's see if the MCP gods
23:10 uh
23:13 cooperate because I did this this
23:15 morning and it I I was like, "Wow, this
23:19 is super cool." Okay. So, what we should
23:22 see over here in a
23:23 minute, let me refresh this to see. It
23:26 did. Oh my god, this is so
23:28 cool. Okay. So, in the in the cloud. Oo.
23:34 So, what I'm doing is controlling a
23:36 headless browser in the cloud from
23:39 cursor.
23:41 The future is now. It's in It's bonkers.
23:45 Well, it's like, okay, what use is this?
23:47 Like, that's kind of cool. I mean, let's
23:49 actually do something kind of fun. So,
23:50 I'll say uh
23:53 navigate to pricing. Okay. So, we should
23:58 actually see the cursor move over here
24:01 in this headless browser in the cloud.
24:04 You're just showing off at this point. I
24:06 Well, I just learned this this morning
24:07 and and Okay. And I was thinking, "Oh my
24:09 god, this is so neat. Let's see if it if
24:11 it actually
24:13 works." Yep, there it goes. Whoa.
24:17 So again, well besides kind of a parlor
24:20 trick like what actual use is this? I
24:23 think it's going to unlock a huge amount
24:25 of front end testing for me. Yeah.
24:28 Right. So as you know like it's really
24:30 cluji right now trying to uh to squash
24:34 bugs on the front end when you're like
24:36 taking a screen grab and you're pasting
24:37 into cursor and you're like no I mean
24:39 over there and yep. Um, so now we have
24:42 this this ability to start automating
24:45 some of this behavior, you know, right
24:46 inside cursor. So that was kind of a fun
24:48 trick I thought I would show you. Now,
24:51 if you're watching this, you're like,
24:53 what it really what we're doing here is
24:56 uh I'll go back to the MCP uh part of
24:59 cursor. What we're doing is is
25:02 basically giving cursor the ability to
25:05 interact with other apps, right? And so
25:08 we're saying, okay, browser base is
25:09 pretty cool. You can have this browser
25:12 in the cloud you can do things with. I
25:14 want to be able to tell the AI what to
25:16 do. I don't want to have to know how to
25:17 call the APIs and do all that stuff. So
25:20 that is uh what I thought was a lot of
25:21 fun. So, and can you walk us through
25:23 just a couple of the use cases, the ones
25:24 we're seeing here? So, browser base lets
25:27 you basically browse the web and and do
25:30 a couple things through through the text
25:32 window and cursor. What are some of
25:34 these other ones that you find useful?
25:36 Um, so Postgres is probably the one I
25:38 use the most. Um, so this for the
25:41 startup I'm building, I'm using Postgres
25:43 on on uh for the database in Versel. And
25:46 there's just a lot of times where I just
25:47 want to be able to tell the AI, you
25:49 know, is this value in this row in the
25:52 database? Like I don't want to have to
25:54 actually write SQL to do that. Yeah. And
25:56 so you can go right into the chat window
25:59 and just say, hey, you know, use the
26:00 Postgres tool and tell me uh if this is
26:03 in the database or not, which is really
26:04 cool. Prisma is I'm using for this uh
26:07 play project which is fun. Same with
26:09 SQLite. So the one I use every day is is
26:12 Postgres.
26:14 And one of the things that I love about
26:16 AI especially in the sort of dev tools
26:18 stack is it just reduces toil. And one
26:22 of the pieces I feel like is um toil for
26:25 engineers is how many tabs you have to
26:27 have open to orchestrate working across
26:29 your task list. Right? You have you have
26:31 to have your project management software
26:33 open so you know like what task I'm
26:35 working on and what's next. You have to
26:36 have your browser open so you can do
26:38 some work. Your querying your database
26:41 and all this puts it in a single
26:42 interface that you can seamlessly switch
26:44 through in natural language. Amen. So I
26:46 do want to show you one tiny quick other
26:48 tool and I know we're almost out of
26:49 time. No, let's do it. Um so you you're
26:52 probably hearing over and over
26:54 everyone's listening or watching me
26:55 preaching about context. Um it it is
26:58 just so much more important than I think
27:00 we understand. And again, if we
27:01 anthropomorphize, it's like, well, how
27:03 would you expect anybody to do anything
27:05 unless you give them the right book or
27:07 the right piece of paper, right? And so,
27:09 I've started to use a tool called Repo
27:11 Prompt. Again, I don't have any
27:13 financial uh uh reason to say this. I
27:15 don't own any of this company, but it's
27:17 this really great tool for Mac. And I
27:19 just want to show you how to use it
27:20 really quick. The question is why? Like,
27:22 why wouldn't I just use Cursor? Well,
27:24 the the thing about cursor is there's
27:26 all this magic happening in the
27:28 background with the context where you
27:31 don't know for sure what is in the
27:33 context unless you tag it, right? Which
27:36 is fine, but they they sort of magic
27:38 that away and sometimes you really
27:40 really want to control the context. So,
27:42 what I've done is I've open repo prompt.
27:44 I've got the the site on the left and on
27:46 the right I've got the UI and I've
27:48 opened up the how I AI uh project which
27:51 is that simple uh yacht email app. Okay.
27:54 So say that I want to throw a lot of
27:58 these into uh a prompt to do something.
28:01 So if I select the whole repo, let's go
28:05 over to compose down here. You can see
28:08 how many tokens that is. All right, so
28:10 that's 395,000 tokens. Okay, that's way
28:12 that's way too many. So, let's go ahead
28:15 and reduce that. So, all right, I know I
28:19 want some stuff in the app
28:21 folder. All right, why is it so big?
28:23 Now, we're at, you know,
28:25 324,000. Still too big. So, I think it's
28:28 probably in generated. So, you get rid
28:30 of that. Okay, good. Now, we're at
28:31 12,000 tokens. So, the point is you if
28:34 you know what context you want, repo
28:36 prompt is a really powerful way to do
28:38 that. So, I'm going to go ahead and
28:39 select components lib. Uh let's open up
28:42 the schema for Prisma, you know, and
28:45 scripts. All right. Now, what? So, I go
28:49 up here and I put in a prompt. How can I
28:51 improve the maintain maintainability of
28:53 this code? And then you can do some
28:55 other neat things like I want to include
28:57 a stored prompt and I'm going to use the
29:00 architect version. Now, what is that?
29:03 Well, that is a prompt that repo prompt
29:06 has written already with a bunch of kind
29:09 of power moves in it, right? It's it
29:12 should act like a an architect versus a
29:15 dev. So now I go down to copy and I'm
29:18 going to say I want to include the save
29:19 prompts. I want to include the files and
29:21 I want to include the user instructions.
29:22 And I'm going to click
29:24 copy. Now what? Well, I'll show you. So
29:27 let's go over uh to 03. Now, I could I
29:32 could go over to cursor, but I don't
29:33 know exactly what cursor is going to do
29:35 to my context. Instead, I'm going to
29:37 paste it in here. Now, what is this?
29:40 What you've got, let's start at the
29:42 bottom. It's basically putting
29:43 everything in XML tags, right? So,
29:46 you've got user instructions. So, that
29:47 was the prompt I put in. Then, the meta
29:50 prompt is uh telling it how to to
29:54 execute the prompt and and the files
29:57 that it's including. Let's go up here.
29:58 So, file contents. This is kind of the
30:00 key. So each file is
30:02 included and it's it's demarked
30:07 specifically like this. So it says the
30:09 file with the actual path and it's so it
30:14 basically it's very specific. It's
30:15 saying to the AI this is exactly the
30:18 context you need. It's super clear and
30:20 then you can execute some sort of prompt
30:22 on that. I do this for like heavy
30:24 lifting stuff where I used to do this
30:27 all the time with 01 Pro where I would
30:29 go into repo prompt. I would select
30:31 exactly the right context and then I
30:32 would go into 01 pro and say think super
30:35 hard about this. I've given you exactly
30:37 the right context and you get amazing
30:38 answers because of that. Yeah. And these
30:40 these new models have such big context
30:43 windows, but I'm not copying and pasting
30:46 12,000 tokens into the chat window,
30:49 right? But this tool just does it for
30:51 you really.
30:53 Interesting. And then you're getting
30:55 less of a black box here. Less of a
30:57 black box. Yeah. And you know, and I
31:00 have a feeling that this stuff will
31:01 probably go away. I think, you know, the
31:04 context windows are going to get bigger.
31:06 Tools like cursor are going to get
31:07 better at managing context, you know,
31:09 but right now you have to do all this
31:11 stuff. Like you you can't just wave your
31:13 wand and and hope the LM is going to
31:16 write all the right stuff for you. That
31:18 that's what I've been doing. So now now
31:19 I have a now I have a better process um
31:22 to to follow here. Okay. Anything else
31:24 really important in your stack you need
31:26 to tell us about um the most important
31:28 thing um uh is this. So let me share my
31:31 screen. So this is TSTO's live set from
31:35 New York City. So this is how I actually
31:38 code. I just turn on some EDM and and
31:41 late at night, you know, code after
31:43 everyone goes to bed listening to
31:45 amazing EDM. And uh that is an important
31:47 part of my stack. So if I could ask for
31:49 an additional cursor feature, it would
31:51 be AI generated streaming EDM matched to
31:56 the generation pace of your tokens that
31:58 ends with a drop instead of that cursor.
32:02 I would pay extra money for that. You
32:04 you heard it here first. Get get all
32:06 this task management context window
32:08 stuff. Forget about that. I want the
32:10 fun. Okay, we'll spend three minutes on
32:12 lightning round questions. One, you're a
32:15 builder. You're a founder. It's clear
32:16 how this technology is changing the
32:19 building part of things. How is it in
32:21 your mind changing the company and the
32:23 founder side of things? Wow. It's a
32:26 complete rewrite. So I've been fortunate
32:28 to start three companies and and see
32:31 them acquired and and one of them you
32:32 know we had about 110 employees and I
32:35 had a CTO and a VP of Venge and you know
32:37 product managers and and you know
32:41 building this new startup I literally
32:44 feel like I'm able to do all of it now
32:47 am I able to do it as well as a
32:49 dedicated product manager? No. Am I able
32:52 to think as deeply as a CTO? No. But I
32:55 am able for sure to build this company
32:58 by myself. And I mean, you're doing this
33:01 with chat purity. I mean, it's it's
33:03 bonkers to me that it's actually
33:05 possible. So, I I just can't wait for
33:07 the future. I could not agree more.
33:09 Okay. And then, of course, you showed us
33:11 how you're a very thoughtful and
33:14 organized product manager and manager of
33:18 your AI, but you know, it sometime
33:20 doesn't listen. So, what do you do?
33:24 What's your what's your tactic for
33:25 really getting it back on track? So, I'm
33:29 just too nice. I I just say please think
33:34 harder about this. Like, I know you can
33:37 do this. Um, you know, think again about
33:41 it. And I'm just not a mean person. So,
33:43 as much as I want to say, you know, god
33:44 damn it, you know, I don't I I have a
33:48 hypothesis that this is this is actually
33:49 a parenting thing because I do the same
33:51 thing. I say, "I believe you can do
33:54 this. I believe in you." I I believe you
33:57 can. I believe you can. Well, that's
33:59 amazing. Ryan, where can we find you and
34:01 how can we be helpful? Um, I am on X all
34:04 the time. So,
34:06 x.comarson. Um, and if you want to know
34:08 a little bit more, just head to
34:09 rycarson.com and that is me. Great.
34:12 Well, thank you so much. It's been a
34:14 blast. Thank you.
34:16 Thanks so much for watching. If you
34:18 enjoyed this show, please like and
34:20 subscribe here on YouTube, or even
34:22 better, leave us a comment with your
34:23 thoughts. You can also find this podcast
34:26 on Apple Podcasts, Spotify, or your
34:29 favorite podcast app. Please consider
34:31 leaving us a rating and review, which
34:33 will help others find the show. You can
34:35 see all our episodes and learn more
34:38 about the show at
34:40 howiipod.com. See you next time.


---

## Source: full-walkthrough-workflow-for-ai-coding-matt-pocock.txt

- Original path: `addintional info to add\full-walkthrough-workflow-for-ai-coding-matt-pocock.txt`
- Size: `109038` bytes
- SHA256: `089AD29FC1EE597553D6A82BBAC680E6B4D70E80EF982EC206826ED805585D5B`

---

Full Walkthrough: Workflow for AI Coding — Matt Pocock

0:07 [music]
0:15 >> Yeah, we're good.
0:17 Okay, folks.
0:18 We're at capacity.
0:20 Let's kick off. I don't want you waiting
0:22 here for 25 more minutes before we some
0:24 arbitrary deadline.
0:26 So,
0:27 welcome.
0:28 My name's Matt,
0:30 I'm a teacher, and I suppose now I teach
0:32 AI.
0:33 Um
0:35 We have a link up here, if you've not
0:37 already been to this, which is has the
0:38 exercises for the um stuff we're going
0:41 to do today.
0:41 This is going to be around 2 hours, so
0:43 we might just sort of kick off 2 hours
0:45 from now. Is that all right, Mike?
0:47 Yeah, perfect.
0:49 Um and
0:51 the theory behind this talk, or at least
0:52 the thesis under which I've been
0:53 operating for the last kind of 6 months
0:55 or so, is that
0:59 we all think that AI is a new paradigm,
1:01 right? AI is obviously changing a lot of
1:03 things. You guys are obviously
1:04 interested in this, and that's why
1:05 you've come to this talk.
1:07 And
1:09 I feel that
1:12 when we talk about AI being a new
1:14 paradigm, we forget that actually
1:17 software engineering fundamentals, the
1:19 stuff that's really crucial to working
1:21 with humans, also works super well with
1:24 AI.
1:25 And this is what my keynote is on
1:27 tomorrow, really. I'm going to sort of
1:28 be fleshing that out a lot more.
1:30 And in this workshop, I'm hopefully
1:32 going to be able to direct your
1:33 attention to those things, and
1:35 uh hopefully show you
1:38 that I'm right. But we'll see.
1:40 Um can I get a quick heads-up first? How
1:43 many of you guys um are coding have ever
1:46 coded with AI? Raise your hand if you've
1:48 ever coded with AI. Perfect. Okay. Uh
1:51 keep your hand raised.
1:53 Uh
1:54 let's all uh share those armpits with
1:56 the world. Um
1:58 how many of you code every day with AI?
2:01 Cool. Okay. Uh right, keep your hand
2:04 raised if you've ever been frustrated
2:05 with AI.
2:07 Okay, very good.
2:09 You can put your hands down.
2:11 Thank you for that show of obedience. I
2:12 really appreciate that. And we are also
2:14 being live-streamed to the Gilgood room
2:16 as well. I've not
2:17 uh
2:18 Did we send someone up to the Gilgood
2:19 room to just check they're okay?
2:21 Don't know.
2:22 But I see you,
2:24 and there is a way that you can
2:25 participate, which is we have the um a
2:28 Q&A. We're going to be doing kind of
2:30 have a sort of hatred of Q&As cuz
2:31 they're not very democratic. They're
2:33 mostly the sort of
2:34 um most talkative people get to um
2:37 get to participate and share. And so,
2:40 we're going to be going through this um
2:42 Q&A here. So, why do we have to wait
2:43 till 3:45? The room is packed, the doors
2:45 are closed. 100% agree.
2:47 And so, if you want to uh ask a
2:49 question, we're going to be I would like
2:50 you to pile into this async, and then we
2:53 can vote on each other's questions, and
2:54 hopefully get the best questions
2:56 surfaced so the for the entire room to
2:58 enjoy.
3:00 So, I want to talk about first the kind
3:02 of weird constraints that LLMs have.
3:06 And
3:07 those weird constraints are sort of what
3:09 we have to base a lot of our work
3:11 around.
3:12 Now,
3:14 there's a guy called Dex Hardy who runs
3:16 a company called Human Layer, and he
3:17 came up with this idea, which is that
3:21 when you're working with LLMs, they have
3:23 a smart zone
3:25 and a dumb zone.
3:27 When you're first kind of like
3:29 working with an LLM, and it's like
3:31 you've just started a new conversation,
3:33 you start from nothing, that's when the
3:35 LLM is going to do its best work.
3:37 Because in that situation, the attention
3:38 relationships are the least strained.
3:40 Every time you add a token to an LLM,
3:43 it's kind of like you're adding a team
3:44 to a football league. You think of the
3:46 number of matches that get added every
3:49 time you add a team to a football
3:50 league, it just goes
3:52 it scales quadratically. And that's
3:54 because you have attention relationships
3:55 going from essentially each token to the
3:57 other that are positional and the sort
4:00 of meaning of the individual token.
4:02 And so, this means that by around sort
4:04 of 40% or around I would say around 100K
4:07 is kind of my new marker for this. Cuz
4:09 it doesn't matter whether you're using 1
4:11 million
4:12 uh context window or 200K,
4:15 it's always going to be about this.
4:17 It starts to just get dumber.
4:20 So, as you continually keep adding stuff
4:22 to the same context window, it just gets
4:24 dumber and dumber until it's making kind
4:26 of stupid decisions. Raise your hand if
4:27 that feels familiar to you.
4:30 Yeah, cool.
4:31 So, this means that we kind of want to
4:33 size our tasks in a way that sticks
4:37 within the smart zone.
4:38 Right? We don't want the AI to bite off
4:41 more than it can chew. This goes back to
4:43 old advice like Martin Fowler in
4:45 refactoring. Uh like uh the pragmatic
4:48 programmer talks about this. Don't bite
4:49 off more than you can chew. Keep your
4:51 tasks small so that you as a developer,
4:54 a human developer, don't freak out and
4:56 don't start acting and going into the
4:58 dumb zone.
5:01 But
5:02 how do you tackle big tasks? How do you
5:04 take a large task like I don't know,
5:07 cloning a company or something, or just
5:09 doing something crazy,
5:11 and how do you break it into small tasks
5:13 so they all fit into the dumb zone?
5:16 One way, of course, you could do is I
5:17 mean, kind of what the AI companies
5:19 maybe want you to do, or the natural way
5:21 of doing it is just keep going and going
5:22 and going, you end up in the dumb zone,
5:24 charging you tons of tokens per request.
5:26 You then compact back down.
5:28 We'll talk about compacting properly in
5:29 a minute. And you keep going, keep
5:31 going, keep going, compact back down,
5:33 keep going, keep going, keep going.
5:35 And I think that's doesn't really work
5:37 very well because the more sediment I
5:39 we'll talk about that in a minute.
5:41 So, the theory here is then, and this is
5:43 what I was doing for a while,
5:45 is I would use these kind of
5:47 um multi-phase plans.
5:49 Where I would say, "Okay, we have this
5:51 sort of number four thing here, this
5:53 large large task. Let's break it down
5:55 into small sections so that we can then
5:57 kind of chunk it up and do each little
6:00 bit of work in the smart zone." Raise
6:02 your hand if you've ever used a
6:03 multi-phase plan before.
6:05 Yeah, really common practice, right?
6:07 This is kind of how we've been doing it.
6:09 Certainly, this is how I was doing it up
6:11 until December last year, really.
6:14 And any developer worth their salt will
6:16 look at this and go, "This is a loop."
6:19 Right? This is a loop. We've just got
6:21 phase one, phase two, phase three, phase
6:23 four. Why don't we just have phase N?
6:27 Right?
6:29 Phase N. Where we essentially just say,
6:31 "Okay,
6:32 we have, let's say, a plan operating in
6:34 the background, and then we just loop
6:35 over the top of it, and we go through
6:37 until it's complete."
6:38 And this is where um
6:40 Raise your hand if you've heard of Ralph
6:41 Wiggum as a software practice.
6:44 Okay, cool. Raise your hand if you've
6:45 not heard of Ralph Wiggum as a software
6:46 practice, actually. That's more like it.
6:48 Okay. So, there's this idea called Ralph
6:49 Wiggum, uh which is kind of um
6:52 sort of based on this,
6:54 which is essentially
6:56 all you need to do is sort of specify
6:58 the end of the journey,
7:00 where you just say, "Okay, we create a
7:01 PRD, a product requirements document, to
7:03 say, 'Whoa, okay, let's describe where
7:05 we're going.'" And then we just say to
7:07 the AI, "Just make a small change. Make
7:10 a small change that gets us closer and
7:11 closer to that."
7:13 And
7:14 Ralph works okay, but I prefer a little
7:15 bit more structure.
7:17 So, that's kind of where we got to in
7:19 terms of thinking about the smart zone,
7:21 and that's
7:22 kind of where I want you to first start
7:25 thinking about here.
7:27 Another weird constraint of LLMs is LLMs
7:29 are kind of like the guy from Memento,
7:31 right? They just continually forget.
7:32 They could just keep resetting back to
7:34 the base state.
7:36 Let me pull up this diagram.
7:38 I sort of I
7:39 I I really should use slides, but I just
7:41 prefer just like randomly scrolling
7:43 around a
7:44 uh infinite uh TL draw canvas. Thank
7:46 you, Steve.
7:48 Um
7:49 So, let's say another concept I want you
7:52 to have is that every session with an
7:53 LLM kind of goes through the same
7:55 stages.
7:56 You have, first of all, the system
7:57 prompt here. This gray box here is
8:00 essentially the stuff that's always in
8:02 your context. You want this to be as
8:04 small as possible. Cuz if you have a ton
8:07 of stuff in here, if you have 250K
8:09 tokens, like I have seen people put in
8:11 there, then that you're just going to go
8:13 straight into the dumb zone without even
8:15 being able to do anything.
8:17 So, you want this to be tiny.
8:19 >> [snorts]
8:19 >> You then go into a kind of exploratory
8:21 phase. This blue sort of where the
8:23 coding agent is going out and exploring
8:25 the code base.
8:26 Then you go into implementation.
8:28 And then you go into testing.
8:30 And sort of making sure that it works,
8:32 running your feedback loops and things
8:33 like this.
8:34 Raise your hand if that feels familiar
8:36 based on what you've done. Yeah. Sort of
8:38 the like the the main cornerstones of
8:40 any session.
8:42 And when you clear the context, you go
8:44 right back to the system prompt.
8:46 Oof, you go right back there. So, you
8:48 delete everything that's come before.
8:51 And
8:53 raise your hand if you've heard of
8:54 compacting, as well.
8:56 Yeah, okay. There are some people who've
8:57 not heard of compacting. So, let's just
8:58 quickly show what that means.
9:00 For instance,
9:02 I've just been having a little chat with
9:03 my LLM.
9:06 Uh
9:07 I want to make sure we sort of, you
9:09 know, just cover the basics so we're all
9:10 sort of on the same wavelength here.
9:12 I've just been having a chat with my
9:13 LLM.
9:14 I've been talking about a thing that I
9:16 want to build. How's the font size?
9:17 Should I bump it up?
9:19 Folks in the back?
9:20 Bump. Bump.
9:22 Bump. Bump. Bump. Oh.
9:24 I'm using Claude Code for this session,
9:25 but you don't need to use Claude Code.
9:27 Uh
9:28 in fact, it's often nice not to use
9:29 Claude Code.
9:30 Um
9:32 so, I've been having a chat with the
9:33 LLM, just sort of planning out what I'm
9:34 going to do next. It's asking me a bunch
9:35 of questions, and I can
9:38 I highly recommend you do this.
9:40 There's this tiny little status line
9:42 here that tells me how many tokens I'm
9:44 using, the exact number of tokens I'm
9:46 using. Um I have a article on my website
9:49 AI Hero if you want to copy this. This
9:52 is
9:53 Oh, wow, that is that shakes, doesn't
9:54 it? Um
9:56 this is essential information on every
9:59 coding session cuz you need to know
10:00 exactly how many tokens you're using so
10:02 that you know how close you are to the
10:03 dumb zone.
10:05 Absolutely essential.
10:06 And so let's watch it.
10:08 So I've got two options. I can either
10:09 clear
10:11 wrong and go back to nothing or I can
10:14 compact.
10:15 And when I compact then it's going to
10:18 squeeze all of that conversation, which
10:19 admittedly isn't very much, into a much
10:22 smaller space.
10:24 And this in diagram terms kind of looks
10:26 like this.
10:27 Where you take all of the information
10:28 from the session and you essentially
10:30 create a history out of it, a written
10:32 record of what happened.
10:36 And devs love compacting for some
10:37 reason, but I hate it.
10:40 I much prefer my AI to behave like
10:43 uh the guy from Memento because this
10:45 state
10:46 is always the same. Always the same
10:48 every time you do it. You clear and you
10:50 go back to the beginning. And so if
10:51 you're able to do that and you're able
10:53 to optimize for that then you're in a
10:54 great spot.
10:56 So that's kind of the two things I want
10:58 you to think about with LLMs, the two
10:59 constraints that we're working with.
11:01 They have a smart zone and a dumb zone
11:03 and they're like the guy from Memento.
11:06 So let's take a look at the first
11:08 exercise.
11:09 And I'm while I'm doing this, the way I
11:11 want this to work is I'm going to sort
11:13 of show you how um I'm going to be sort
11:15 of walking through it up here and I want
11:17 you folks to be kind of like tapping
11:19 away and doing things as well. So that
11:21 was just a little lecture bit. Let's now
11:23 actually get and do some coding.
11:25 For anyone who arrived late or anyone in
11:27 the Gilgud room uh go to this link
11:32 this link up here
11:35 to see the exercises and clone the repo.
11:38 You absolutely do not have to, you can
11:39 just watch me do it if you fancy it.
11:41 But let's go there myself and let's see
11:42 what exercises await us.
11:45 So essentially I've built a um this is
11:47 from my course.
11:49 This is a uh a course management
11:52 platform essentially, a kind of CMS for
11:55 instructors, for students, and this is
11:56 what we're going to be building a
11:57 feature in. So I'm going to take you
12:00 from essentially the idea for the
12:02 feature all the way up to building a PRD
12:04 for the feature, all the way up to
12:06 implementing the feature.
12:08 And hopefully you can take inspiration
12:09 from this process and use it in your own
12:11 work.
12:12 So
12:14 uh let's kick off. So
12:17 we're going to start by using a a skill
12:19 which is very close to my heart.
12:21 It's the grill me skill.
12:23 And this grill me skill is wonderfully
12:27 small wonderfully tiny and it helps
12:30 prevent one of I think the main issues
12:32 when you're working with an AI, which is
12:34 misalignments.
12:37 The uh
12:39 the sort of silent idea that I'm talking
12:41 against here, that I'm arguing against,
12:43 is the specs to code movement. Has
12:45 anyone heard of the specs to code
12:46 movement? Raise your hand. It's not
12:48 really a movement I suppose, it's just
12:49 sort of people saying specs to code.
12:51 Um
12:53 what it is is people say, "Okay, you can
12:55 write a program or you want to build an
12:57 app the best way to build that app is to
13:00 take some specifications
13:02 so to write some sort of like document
13:05 and then turn that document into code."
13:09 So they just turn it into code. How do
13:10 you do that? You pass it to AI. If
13:12 there's something wrong with the
13:13 resulting code, you don't look at the
13:15 code, you look back at the specs. You
13:17 change the specs and you sort of just
13:19 keep going like this. This is kind of
13:21 like vibe coding by another name where
13:22 you're essentially ignoring the code.
13:25 You don't need to worry about the code.
13:27 You just sort of keep editing the specs
13:28 and eventually you just keep going. And
13:30 I tried this. I really tried it. And it
13:32 sucks. It doesn't work.
13:34 Because you need to keep a handle on the
13:36 code. You need to understand what's in
13:38 it. You need to shape it because the
13:40 code is your battleground. And so
13:44 this is again is where we're going.
13:45 Let's let's get some exercises.
13:47 So
13:48 what I'd like you to do is go to this
13:49 page, the the grill me skill.
13:51 And inside the repo here
13:54 we have a slack message
13:56 from our pal. Uh where is it? It's in
13:59 the root of the repo and it's under
14:03 bur bur bur bur
14:04 Oh, where is it?
14:06 Mhm mhm client brief.md.
14:09 It's a slack message from Sarah Chen.
14:11 For some reason the Claude always
14:12 chooses Sarah Chen as the name. I don't
14:13 know why.
14:14 Um it's saying that in cadence, our um
14:18 course platform, our retention numbers
14:20 are not great. Students sign up to a few
14:22 lessons then they drop off. I'd love to
14:24 add some gamification to the platform.
14:26 And so when you're presented with an
14:28 idea like this, you need to find some
14:30 way of turning it into reality. Let's
14:31 say Sarah Chen is your client, you're on
14:33 a tight budget, you need to get this
14:34 done fast. How do you go and do it?
14:37 Um
14:38 raise your hand if you would um
14:40 enter plan mode when you're doing this.
14:43 Anyone a big user of plan mode? Yep.
14:45 Um let's actually shout out quickly any
14:47 other ideas about what you would do with
14:49 this or any Raise your hand if you
14:51 what what would be your first port of
14:52 call?
14:54 Yep. Ask for more info.
14:55 Sorry? Ask for more
14:57 info to verify what is the purpose and
14:59 where our current standing is. Yes,
15:00 exactly. Let's imagine that Sarah Chen's
15:02 gone on holiday, you have no idea,
15:03 right? Uh she's just posted this thing,
15:05 you need to action it before you go.
15:07 Well, my first port of call is I go for
15:10 this particular skill. I'm going to
15:11 clear my context.
15:15 I'm going to
15:16 uh get rid of
15:18 you, you don't need to be there.
15:20 And I'm going to say
15:22 um I'm going to invoke a skill
15:25 which is the grill me skill. Let's
15:27 quickly check.
15:28 Raise your hands if you don't know what
15:29 this is.
15:31 Cool.
15:32 Oh, sorry sorry. Let me be more
15:33 specific. Raise your hands if you don't
15:36 know what I'm doing here when I
15:38 uh do a forward slash and then type
15:40 something.
15:41 Anyone Everyone kind of understand what
15:43 that is?
15:44 I'm invoking a skill. I'm invoking the
15:45 grill me skill.
15:47 And what I'm going to do is I'm going to
15:49 say grill me and I'm going to pass in
15:51 the client brief.
15:54 So now
15:55 the LLM really has only a couple of
15:58 things here. It just has the skill and
16:00 it has the description of what I want to
16:01 do.
16:04 And this is virtually how I start every
16:06 piece of work with AI.
16:08 And while it's exploring the code base
16:11 I'm just going to show you what the
16:12 grill me skill does.
16:14 So this is inside the repo so you can
16:15 check it out.
16:17 It's extremely short.
16:19 "Interview me relentlessly about every
16:21 aspect of this plan until we reach a
16:22 shared understanding. Walk down each
16:24 branch of the decision tree resolving
16:26 dependencies one by one. For each
16:28 question provide your recommended
16:29 answer.
16:30 Ask the questions one at a time uh blah
16:33 blah blah."
16:34 What this does and what I noticed when I
16:36 was working with AI, especially in plan
16:38 mode actually
16:40 is it would
16:42 really eagerly try to produce a plan for
16:44 me.
16:45 It would say, "Okay, I think I've got
16:46 enough. I'm just going to poof plan
16:48 plan."
16:49 And what I found was that
16:53 I was really trying to find the words
16:55 for this, for for what I wanted instead
16:57 of that.
16:58 And Frederick P. Brooks in The Design of
17:01 Design, he has a great quote uh talking
17:03 about the design concept.
17:05 When you're working on something new
17:07 with someone
17:08 when you're uh all trying to build
17:10 something together
17:12 then there's this shared idea that's
17:14 shared between all participants and that
17:16 is the design concept. And that's what I
17:18 realized I needed with Claude. I needed
17:22 I needed to reach a shared
17:24 understanding. need an asset, I didn't
17:26 need a plan, I needed to be on the same
17:28 wavelength as the AI, as my agent. And
17:31 this is an extremely effective way of
17:33 doing it. So hopefully
17:35 Here we go. Nice. It has done its
17:37 exploration first of all.
17:39 It's invoked a sub agent which spent
17:42 97 93.7k tokens
17:45 on Opus.
17:47 Um
17:48 and it's asked me the first question.
17:50 Cool.
17:51 We can see that even though the sub
17:53 agent burned a a ton of tokens I haven't
17:55 actually um
17:57 uh increased my token usage that much.
17:59 Raise your hand if you don't know what
18:01 sub agents are. It's important question.
18:04 Everyone kind of clear what sub agents
18:05 are? Okay, I'll give a brief definition.
18:07 Which is that this this sub agents thing
18:10 here, this explore sub agent it has
18:12 essentially gone and called another LLM
18:14 which has an isolated context window.
18:18 And then that LLM has reported a summary
18:20 back. So a sub agent is kind of like a
18:22 delegation. You're delegating a task to
18:24 a sub agent. It goes eagerly does all
18:26 the thing, explores a ton of stuff and
18:28 then just drip feeds the important stuff
18:30 back up to the orchestrator agent.
18:33 To the parent agent. So okay. So
18:35 hopefully you guys have seen the same
18:36 thing. It's done an explore.
18:38 And we now have our first question.
18:41 Points economy. What actions earn points
18:43 and how much? Ooh, okay.
18:45 At this point you can ask it by the way
18:47 questions to um deepen your
18:49 understanding of the repo. I obviously
18:50 know this repo really well cuz I wrote
18:52 it, but you might not um
18:54 know what's going on.
18:55 So let's say my recommendation, keep it
18:58 simple, two point sources to start.
19:00 What's so nice about this is that not
19:02 only does it give us a question that
19:04 kind of aligns us here, we get a
19:06 recommendation too. And often what I'll
19:08 find is the AI's recommendations are
19:09 really good.
19:11 And so I'll just say
19:12 skip video watch events, they're noisy
19:14 and gameable. I agree.
19:16 Sarah's asked we'll keep the lessons in
19:17 the bread and butter.
19:20 Yeah.
19:21 Looks good, pal.
19:24 >> [snorts]
19:25 >> Now what I usually do is I usually
19:26 dictate to the AI. I'm usually actually
19:28 chatting to the AI instead of uh typing
19:31 here, but uh this is a relatively new
19:33 laptop and I couldn't get my dictation
19:35 software working on it um because
19:37 Windows is crap. Um
19:40 So, should points be retroactive? There
19:43 are existing lesson progress records
19:45 with completion at timestamps. This is a
19:47 really nasty question, right? Should we
19:49 actually go back and backfill all of the
19:51 lesson progress events? This is a kind
19:53 of question that you need to be aligned
19:55 on if you're going to fulfill the
19:57 feature properly. This is not something
19:58 I considered and Sarah Chen certainly
19:59 didn't consider.
20:01 Do I want it to be retroactive? Hmm.
20:04 Let's actually do a vote inside here.
20:07 Should we go back and backfill all the
20:08 records? Raise your hand if you think we
20:09 should backfill all the records.
20:13 Raise your hand if you think we
20:14 shouldn't backfill all the records.
20:17 There are a lot of fence-sitters in the
20:19 room. I'm going to say
20:22 you know, this is the kind of discussion
20:23 you're sort of having with the AI.
20:24 You're getting further aligned. Yes, I'm
20:25 just going to go with his recommendation
20:27 cuz I'm lazy.
20:31 Notice too how I'm able to keep in the
20:33 loop here with AI. I'm not you know,
20:35 it's it's pinging me these questions
20:36 pretty quickly.
20:39 I'm not having to go off and check
20:40 Twitter or something.
20:42 Levels. What's the progression curve?
20:44 Yeah, that looks about right. For
20:46 instance, yes, okay.
20:47 So hopefully you should be able to go
20:49 and um
20:50 kind of work through this with the AI.
20:52 >> [clears throat]
20:52 >> And essentially
20:54 try to reach an alignment. And this
20:56 grill me skill, this can last a long
20:58 time. This can I've had it ask me 40
21:00 questions. I've had it ask me 80
21:02 questions. I've had some people that
21:03 asks 100 questions too. Literally you're
21:06 sat there for an hour chatting to the
21:08 AI.
21:09 And what you end up with is essentially
21:11 this conversation history
21:13 that works really nicely and works
21:15 really nicely as an asset of the design
21:17 concept that you're creating.
21:19 This can also function like this. You
21:21 can
21:22 have a meeting with someone who's a
21:24 maybe a domain expert. Maybe I have a
21:25 meeting with Sarah. I feed that meeting
21:28 transcript into
21:30 I don't know, Gemini meetings or
21:32 whatever you guys are using. You take
21:34 that, you feed it into a grilling
21:36 session and you grill through the
21:37 assumptions that you didn't have.
21:39 So this ends up being a really nice kind
21:41 of
21:41 um
21:43 a really nice way of just taking inputs
21:45 from the world and then just turning and
21:47 validating them.
21:49 So okay.
21:51 Let's see. I really want to get to the
21:53 end of this, but I also don't want to
21:54 just like be sat here talking to the AI
21:56 in front of you for uh
21:58 a thousand days. So I'm just going to
21:59 say yes.
22:03 Let's see what happens.
22:05 So I'll tell you what, um while you guys
22:07 sort of have a little fiddle with this
22:08 locally, let's start a little Q&A
22:10 session now.
22:11 And
22:13 let's see. How's this going to work?
22:15 Can we keep the door closed or turn up
22:16 the microphone? It's quite noisy.
22:19 Uh
22:20 let's see. Mike, can we uh
22:22 door closed. Oh it has been closed. Mark
22:24 has answered. Beautiful.
22:26 So what I'd like you to do
22:28 is there any air con? Yeah, there is
22:30 some air con, I think.
22:32 There is some air con.
22:34 You guys aren't being lit here. I'm
22:35 being fro I'm being fried alive here.
22:38 Uh so what I'd like you to do is go on
22:40 to the Slido, which you can join here.
22:42 Have a if if you're not taking the
22:44 exercise, go on to the Slido, have a
22:46 little fiddle and vote on some good
22:47 questions. I'm just going to chat to the
22:49 AI for a second
22:51 uh until we reach a stopping point. So
22:53 do streaks earn points?
22:56 Um
22:57 streaks are standalone.
23:06 Let's see what else it comes up with.
23:13 Where does gamification UI live?
23:15 Let's have it in the dashboard.
23:19 I'm just going to scan these and blast
23:20 through them basically.
23:21 So how are we doing with our Slido?
23:24 Okay.
23:26 Have I tried Spec Kit, Open Spec or
23:28 Taskmaster instead of the Grill Me
23:30 skill? Do I find them more verbose or a
23:32 structured alternative? This is a great
23:33 question. So there are a ton of
23:35 different frameworks out there that
23:36 allow you to um sort of build up this
23:39 planning process for you. I personally
23:42 believe you at at this stage, when
23:44 there's no clear winner, when there's no
23:46 kind of like one true way and when
23:48 things are changing all the time, you
23:50 need to own as much of your planning
23:52 stack as you possibly can.
23:54 What I've noticed and a lot of my
23:56 students
23:57 is
23:59 they tend to overuse a certain stack.
24:03 They get into trouble
24:05 and they because they don't own the
24:06 stack and they don't have observability
24:08 over the whole thing, they just go
24:10 this isn't working. This sucks. Whereas
24:13 if
24:14 um
24:14 if you have control over the whole
24:16 thing, then at least you know how to fix
24:19 it or potentially know how to fix it.
24:21 So I'm even though I'm sort of giving
24:24 you uh a stack basically, I believe in
24:28 inversion of control and you should be
24:29 in control of the stack.
24:32 So bur bur bur.
24:33 Can I press zero, please?
24:38 Sorry?
24:40 Sorry, that was a lot of sort of
24:41 mumbling. Can I
24:48 Thank you.
24:50 I'm so sorry.
24:50 >> [laughter]
24:51 >> What you didn't want to give Claude good
24:53 feedback? What is what is wrong with
24:54 you?
24:57 Uh okay, cool.
24:59 Uh many of the questions asked by the
25:01 Grill Me skill are not necessarily
25:02 appropriate for a developer, rather a
25:03 PO. In larger teams, who should use it?
25:05 Yeah.
25:06 Um
25:07 Raise your hand if um
25:10 you've ever done pair programming.
25:12 Anyone ever done pair programming?
25:13 Right. I keep Put your hands down and
25:16 raise your hand again if you've ever
25:17 done a pair programming session with an
25:18 AI.
25:20 Right.
25:21 How did it go? Was it good? You enjoy
25:23 it? I think pair programming sessions
25:25 with AI is a great idea because you've
25:27 got a third person in the room who will
25:28 relentlessly quiz you and ask you
25:30 questions. It should If you don't know
25:32 the answer, it should be you, the domain
25:33 expert and the AI in the same room. If
25:36 you're have a question about
25:37 implementation, it should be you, a
25:39 fellow developer and the AI in the same
25:41 room, you know. You can be sort of
25:42 working through these questions in your
25:44 team. And I think actually
25:47 we're going to look at implementation in
25:48 a bit and we're going to see how you can
25:50 make implementation so much faster.
25:52 And but I think the really crucial
25:54 decisions, the ones you need humans for
25:57 you actually need a lot of humans and it
25:59 doesn't really matter how many humans
26:00 are in there. You can actually throw a
26:02 bunch like a kind of like mob
26:04 programming with AI essentially.
26:07 Uh what's my favorite meta prompting
26:08 tool? I think I kind of answered that.
26:10 Uh there's no air con. Let's just live
26:12 with it. Uh
26:14 how do I use the conversation as an
26:15 asset after the Grill Me session? Well,
26:18 we're going to get there.
26:20 Um okay, so I really want to
26:24 I want to speed this up sort of
26:25 artificially.
26:28 Just what
26:29 I This is the thing. So someone just
26:31 said okay, Ralph loop this. But this is
26:33 crucial because I can't loop over this,
26:36 right? I can't um
26:39 I think of there is being two types of
26:41 tasks in the AI age.
26:43 Where you have human in the loop tasks,
26:46 where a human needs to sit there and do
26:48 it.
26:49 Which is this.
26:50 We are the human in the loop, with
26:51 multiple humans in the loop. And there
26:53 are AFK tasks. There are tasks where the
26:55 human can be away from the keyboard and
26:57 it doesn't matter. Implementation, as
26:59 we'll see, can be turned into an AFK
27:01 task. But planning, this alignment
27:04 phase, has to be human in the loop. Has
27:07 to be.
27:09 So I've got to do it, unfortunately.
27:11 Um
27:12 I don't know.
27:13 Uh
27:14 give me a long list of all your
27:18 recommendations.
27:20 I'm running a workshop right now.
27:24 So I artificially
27:26 need you to
27:28 pull more weight.
27:31 So let's see what it does.
27:33 Uh let's answer a couple more questions
27:34 while it's doing its thing.
27:37 What is my opinion on PMs or other
27:39 non-dev roles vibe coding task?
27:42 Hmm.
27:45 Um I'm going to return to this later, I
27:48 think. I'm going to leave this
27:48 unanswered.
27:51 A bit of mystery.
27:53 I notice I'm not using the ask user
27:55 questions UI for Grill Me. Why? Um
27:57 there's a specific uh
27:59 UI that you can bring up in Claude Code.
28:01 I'll answer this just quickly.
28:03 Uh ask me a question using the ask user
28:08 question tool.
28:10 >> [snorts]
28:10 >> And this UI um is just sort of broken in
28:13 Claude and I really hate it.
28:17 You notice I'm using Claude, but I don't
28:19 like Claude very much. Like you you
28:20 really are free with this method to
28:22 choose any um system you like. And this
28:24 is what the UI looks like.
28:26 It's very pleasing when you first
28:27 encounter it, but then you realize it is
28:28 actually broken in a ton of different
28:29 ways.
28:32 All right, what did it come back with?
28:33 Oh blimey.
28:35 Oh no.
28:37 So
28:40 while this is doing its thing, let me do
28:41 some teaching in the meantime.
28:43 The plan here is that we take our Grill
28:46 Me skill
28:47 and we need to essentially find some way
28:49 of turning it into
28:51 a destination.
28:53 We need to go down to the
28:56 uh
28:57 We essentially need to
28:58 we're figuring out the shape of this.
29:01 That's what we're doing. We're figuring
29:02 out the shape of the tasks during the
29:03 grilling session.
29:05 And in order to
29:08 turn it into a bunch of actionable
29:10 actions for the AI
29:12 we essentially need to figure out the
29:13 destination. We need to know where we're
29:15 going. We need to know the shape of this
29:16 entire thing.
29:18 So I think of there is being two
29:20 essential documents that we need.
29:22 We need a document that
29:24 documents the destination.
29:27 Oh no.
29:29 It's so not bright enough. There we go.
29:33 Still not brighter. There we go.
29:35 We need something to document the
29:36 destination.
29:38 And we need something to document the
29:39 journey.
29:41 In other words, we need something a
29:42 document that's going to
29:44 figure out what this even looks like in
29:46 all of its user stories and figure out a
29:48 definition of done
29:50 and then we need to figure out what the
29:51 split looks like.
29:53 So, that's where we're going to go to
29:54 next.
29:55 So, once we finish with the grilling
29:57 session,
29:59 yeah, it looks great. Fantastic. I love
30:01 it. It answered
30:02 it answered 22 of its own questions.
30:04 There you go. That's quite
30:05 representative of what a grilling
30:06 session looks like.
30:09 So, at this point now,
30:12 I have used 25k tokens and all of that
30:16 or loads of that stuff is gold. I want
30:18 to keep that around. I've I've got 25k
30:22 great tokens there.
30:24 And what I want to do is kind of
30:25 summarize it in some kind of destination
30:27 documents.
30:28 So, this is um the next exercise
30:31 where we're going to
30:35 uh we're going to write a product
30:37 requirements document.
30:39 And the the product requirements
30:40 documents or the PRD
30:43 is essentially
30:44 that's its function. It's the
30:46 destination documents. And it's sort of
30:48 doesn't matter what shape it is. I've
30:51 got a shape that I prefer and I quite
30:53 like.
30:54 But, you can just choose your own shape
30:56 or whatever your company uses.
31:00 And all we're really doing is I'm not
31:03 too worried about that.
31:05 All we're really doing is summarizing
31:07 the design concept that we have so far.
31:10 And
31:12 the So, let let's try this.
31:15 So, I'm going to initiate this. I'm
31:16 going to say
31:17 zoom all the way to the bottom.
31:19 All I'm going to do is just say write a
31:20 PRD.
31:23 And we can take a look at that skill
31:24 now.
31:26 Write a PRD.
31:29 So, this skill
31:31 it does a few things.
31:34 It first asks the user for a long
31:35 detailed description of the problem. You
31:36 can use write a PRD without grilling
31:38 first, but I just like to grill first
31:40 and then write the PRD afterwards.
31:42 Then you can um get it to install the
31:45 repo which we've kind of already done.
31:47 Then we get it to
31:49 interview the user relentlessly so we
31:50 have a kind of grilling session again
31:52 and then we start um putting together a
31:55 PRD template. So, this is available in
31:57 the repo if you want to check it out.
31:59 And essentially this is what it looks
32:00 like. We've got some problem statements,
32:02 the problem the user is facing, the
32:04 solution to the problem and a set of
32:06 user stories. And these user stories
32:08 sort of define what this is. You know,
32:10 as
32:11 you you guys have probably seen things
32:12 like this if you've been a developer at
32:13 all. Um you know, there are cucumber is
32:16 a language you can use to write these in
32:17 or we just sort of
32:18 um
32:20 uh write them ourselves essentially.
32:22 Then we have a list of implementation
32:23 decisions that were made and list of
32:25 crucially testing decisions, too.
32:28 So,
32:31 I'm going to run this. Okay. And so,
32:33 it's finished its thing.
32:35 Ah!
32:37 Windows, let me close the thing. Thank
32:39 you.
32:40 I don't know why I bought a Windows
32:41 laptop. I think I just
32:43 I like the challenge. Um
32:46 >> [clears throat]
32:46 >> So, the first thing that it's going to
32:47 give me
32:49 are a set of proposed modules it wants
32:51 to modify.
32:54 Now, there's a deep reason why I'm
32:55 thinking about this. So, this is
32:58 at this stage
33:00 we have an idea, we have sort of specked
33:02 out the idea, we've reached a sort of
33:05 understanding of what we're trying to do
33:07 and then we need to start thinking about
33:09 the code
33:10 because at this point we need to
33:13 this is not specs to code. This is not
33:15 where we're ignoring the code. We
33:17 actually keep the code in mind
33:18 throughout the whole process.
33:20 And
33:21 the way I like to do this is I like to
33:23 just sort of think about a set of
33:24 proposed modules to modify. We're going
33:26 to return to this this idea of
33:28 continually designing your system and
33:31 keeping your system in mind.
33:33 So, it's it's saying recommend tests for
33:34 the gamification service is the only
33:36 deep module with meaningful logic. These
33:38 modules look right. Yeah.
33:41 Looks good.
33:44 And it's going to hang out a PRD.
33:48 Now, for ease of setup
33:50 I've got it so that it creates a set of
33:52 issues locally.
33:54 So, it's just going to create
33:55 essentially a PRD inside this issues
33:57 directory.
33:59 But, the way I usually do it
34:01 and you can check this out yourself is
34:04 you can go to my um essentially what I
34:05 consider my work repo
34:07 which is GitHub um dot com forward slash
34:10 Matt Pocock forward slash course video
34:13 manager up here.
34:15 And in here, this is essentially a app
34:17 that I create um that I use all the time
34:20 to record my videos and things like
34:21 this. I think I've recorded like
34:24 I pulled out the stats. I think I've
34:25 recorded like a thousand videos in here
34:27 or something nuts.
34:28 Um and you can see here that it's got
34:30 744 closed issues.
34:32 And this is essentially all of the uh
34:35 PRDs and all of the implementation
34:37 issues that I've put into here. So, this
34:39 is how I usually like to do it.
34:40 >> [clears throat]
34:42 >> So, that's what I'm doing with the There
34:45 we go. Yeah, I'm just going to say yes
34:47 and uh
34:49 and get that issue out.
34:51 Let's see. It is inside here.
34:53 So, we've got the problem statements.
34:55 People signing up for courses.
34:57 Uh the solution, the user stories, uh 18
35:00 user stories looks nice, some
35:02 implementation decisions, level
35:03 thresholds, etc. This is enough
35:05 information. We've kind of clarified
35:07 where we're going and what we're doing.
35:09 So, that's what we do. We essentially
35:11 have a grilling session and we've
35:12 created an asset out of it. Now, raise
35:14 your hand.
35:16 Should I be reviewing this document?
35:19 Raise your hand if you think I should be
35:20 reviewing the documents.
35:23 Yeah, I don't I don't look at these.
35:24 I don't look at these.
35:26 The reason I don't look at these is
35:27 because what am I testing at this point?
35:30 What am I Like when I read it,
35:33 what am I testing? What am I What are
35:34 the failure modes I'm trying to test
35:35 for?
35:36 I know that LLMs are great at
35:37 summarization
35:39 cuz they are. They're really good at
35:40 summarization.
35:41 I have reached the same wavelength as
35:44 the LLM, right? Using the grill me
35:45 skill, we have a shared design concept.
35:48 So, if I have a shared design concept,
35:49 all I'm doing
35:51 is I'm just essentially checking the
35:53 LLM's ability to summarize.
35:56 So, I don't tend to read these.
36:00 Let's have Let's have a Q&A cuz I can
36:02 feel you guys are itching for it. And I
36:03 think we might have like
36:05 I don't know, just a 5-minute comfort
36:07 break just to uh rest my voice and so
36:08 you can catch up with the exercises for
36:09 a minute if that's all right. So, let's
36:11 have a little Q&A sesh.
36:14 Uh
36:15 If I don't like Claude Code, which one
36:16 do I actually like? Um
36:19 uh
36:20 Have you ever heard the phrase um
36:23 uh democracy is the worst way to run a
36:24 country apart from all the other ways?
36:27 That's how I feel about Claude Code.
36:30 Uh we've answered that one.
36:33 Uh
36:34 What's your thoughts on developers
36:36 needing to very deeply understand
36:37 TypeScript now that fix the TS make no
36:40 mistakes exist? I don't understand the
36:42 phrasing of this,
36:43 but I think I understand meaning,
36:46 which is that
36:48 I believe that code is very important
36:50 and this is kind of going to feed
36:52 through the whole session and that bad
36:54 code bases make bad agents. If you have
36:57 a garbage code base, you're going to get
36:59 garbage out of the agent that's working
37:01 in that code base. We'll talk more about
37:02 that in a bit.
37:03 And so, I think understanding these
37:05 tools very deeply, understanding code
37:07 deeply is going to make you a much much
37:10 better developer and get more out of AI.
37:14 Uh and that answers that question, too.
37:16 Sweet.
37:19 Uh
37:20 Get out of there. There you are.
37:24 Now that we have 1 million tokens
37:25 available, do we ever actually want to
37:27 take advantage of that?
37:30 I've noticed that the dumb zone has
37:31 become less dumb lately. Okay, great
37:33 question. This goes back to our kind of
37:35 initial idea on the dumb zone.
37:41 Uh
37:43 I am I recorded my Claude Code course
37:46 using a 200k context window and on the
37:48 day that I launched the course they
37:50 announced the 1 million context window.
37:53 My take on this is that what Claude Code
37:54 did is they essentially just did this.
37:56 Wee!
37:58 They shipped a lot more dumb zone to you
38:01 essentially. Now, this is good for tasks
38:03 where you want to retrieve things from a
38:05 large context window. If you want to
38:07 pass five copies of War and Peace or
38:09 something to it and you want to find out
38:11 all the things that uh
38:14 uh I can't remember a character from War
38:15 and Peace. Uh
38:17 Why did I start with that?
38:18 It's good for retrieval.
38:19 It's less good for coding.
38:21 So, I consider that it is about 100k at
38:26 the moment is the smart zone. The smart
38:28 zone will get bigger and that will be a
38:31 really nice improvement.
38:33 So, folks, we're going to take it like a
38:34 5-minute comfort break if that's all
38:36 right just for my voice and to maybe you
38:38 can have a little move around or
38:39 something or grab a drink. I can just
38:41 notice some sleepy eyes and I want to
38:42 make sure that we're awake for the next
38:44 bit if that's all right. So, we'll take
38:45 5 minutes and I will see you back here
38:49 then. All right?
38:51 So, we have
38:53 our PRD
38:55 which I'm not going to read, our kind of
38:56 destination document. Let's quickly scan
38:58 for any good questions before we zoom
39:00 ahead.
39:02 And
39:05 Rediscovering the role of software
39:06 engineering today's world, top three
39:08 disciplines you recommend.
39:10 Um
39:11 Taekwondo is good, I've heard. I've no
39:13 I've no idea how to answer this
39:14 question. Um
39:16 thank you for asking it though. Um Top
39:18 three disciplines I recommend.
39:20 I mean
39:21 Sorry? Plumbing. Plumbing is a good one.
39:23 Yeah, yeah, yeah. I don't know if that's
39:25 a discipline. I the plumbers I've hired
39:26 are not usually very disciplined.
39:28 Um
39:30 Right.
39:32 So, okay. We now have our destination,
39:34 okay? Um
39:37 Perfect.
39:38 So, how do we actually get to our
39:40 destination? How do we We have a sort of
39:42 vague PRD? How do we split it so that we
39:46 don't put things into the dumb zone?
39:48 In other words, we have our number four,
39:50 how do we split it into this kind of
39:52 multi-phase plan? Well, probably what
39:54 you would do at this point is you would
39:55 say, "Okay, Claude, give me a
39:57 multi-phase plan that gets me to this
39:59 destination, right?" That sort of makes
40:00 sense. This is what we've been doing
40:01 before.
40:03 But I have um
40:04 a sort of better way of doing it now,
40:05 which is that
40:08 I like
40:10 creating a Kanban board out of this.
40:13 Raise your hand if you don't know what a
40:15 Kanban board is.
40:17 Mm, cool. Okay. A Kanban board is
40:19 essentially just a set of tickets that
40:21 you put on the wall that have blocking
40:23 relationships to each other. So, we're
40:25 going to see what it kind of looks like
40:26 here. This is how we've worked um
40:29 as developers for a long time, really
40:31 since Agile came around. And what it
40:34 does, we can see it here,
40:36 it has proposed that we split this setup
40:39 into
40:41 um five different tasks here.
40:43 We have the first one, which is the
40:44 schema and the gamification service.
40:47 Yeah, well, that looks pretty good. This
40:48 is blocked by nothing.
40:50 And we can even see here that it's a
40:52 it's given it a type of AFK, too. You
40:54 remember I talked about human in the
40:55 loop and AFK earlier? This is an AFK
40:57 task. This is something we can just pass
40:59 off to an agent to do its thing.
41:01 Streak tracking, okay, that looks good.
41:04 Uh
41:05 then wire points and streaks into
41:07 lessons quiz completion. This is blocked
41:08 by one and two.
41:10 Retroactive backfill. This is blocked
41:11 only by one.
41:13 And then this one here is blocked by all
41:15 of the tasks. Cool.
41:19 Hmm.
41:20 Now, I consider this you could say, "Why
41:23 don't we just make this sort of
41:24 generation of the issues, why don't we
41:26 just hand that over to the AI? Why do I
41:28 need to be involved here, right?" Cuz
41:30 it's given us quite a good selection of
41:31 tools here. Why do I need to review this
41:34 and sort of
41:35 figure out what's next?
41:37 Now, my take here is that this is really
41:39 cheap to do, like very quick to do once
41:42 I've done the PR, and I can immediately
41:43 see some issues here.
41:47 There's a really, really important
41:49 technique when you're kind of figuring
41:51 out what the shape of this journey
41:53 should look like.
41:55 And
41:57 it sort of comes to this very classic
42:00 idea, uh which comes from the Pragmatic
42:02 Programmer called traceable bullets or
42:04 vertical slices.
42:07 And traceable bullets really transformed
42:09 the way I think about actually
42:11 getting AI to pick its own tasks.
42:14 Systems have layers, right?
42:17 There are layers in your system.
42:19 These might be different deployable
42:20 units. You might have a database that
42:22 lives somewhere. You might have an API
42:23 that lives maybe close to the database
42:25 but in a separate bit. You might have a
42:27 front end that lives somewhere totally
42:28 different like a CDN.
42:30 Or within these deployable units, you
42:32 might have different layers within
42:34 those. In for instance, the code base
42:36 that we're working in, we have a ton of
42:38 different services. Service. We have a
42:41 quiz service, a team service, a user
42:43 service, coupon service, core service.
42:45 And these services have dependencies on
42:47 each other. So, they're kind of like
42:48 individual layers.
42:50 Well,
42:51 what I noticed is that AI loves to code
42:55 horizontally.
42:57 So, it loves to code layer by layer.
43:00 So, in other words, in phase one, it
43:01 will do all of the database stuff, all
43:03 of the schema, all of the you know, all
43:05 the stuff related to that unit. Then it
43:08 will go into phase two and do all of the
43:10 API stuff. Then it will add the front
43:12 end on top of that.
43:14 Does Can anyone tell me what's wrong
43:16 with that picture? Why is that not a
43:18 good thing to do? Raise your hand if you
43:20 have an answer.
43:21 Yeah.
43:21 >> have that whole feedback loop.
43:23 Exactly. You don't get feedback on your
43:26 work until you've
43:28 really started or completed phase three.
43:32 So,
43:33 what you really need to do is you you're
43:34 not until you get to phase three, you're
43:36 not actually testing that all the layers
43:38 work together.
43:41 You haven't got an integrated system
43:42 that you can test against.
43:44 And so,
43:45 instead you need to think about vertical
43:47 layers. You need to think about thin
43:49 slices of functionality that cross all
43:52 of the layers that you need to.
43:54 And this is a much better way to work,
43:57 much better way for the AI to work, too,
43:59 because it means at the end of phase one
44:00 or during phase one it can get feedback
44:02 on its entire flow.
44:04 So, what this means to me
44:07 is inside the PRD to issues skill up
44:11 here,
44:12 I have got break a PRD into
44:15 independently grabbable issues using
44:17 vertical slices traceable bullets
44:18 written as local markdown files.
44:19 [snorts]
44:21 We first locate the PRD.
44:23 Uh again, explore the code base if this
44:25 is a fresh session. We draft vertical
44:27 slices.
44:28 So, we break the PRD into traceable
44:30 issues. A traceable bullet, by the way,
44:32 is uh
44:34 essentially when you're like an
44:35 anti-aircraft gunner. It's quite a
44:37 violent idea, actually. Uh
44:39 and you're looking up in the sky and
44:40 it's night. If you're just shooting
44:42 normal bullets, you have no idea what
44:44 you're firing at, right? You could just
44:45 be you know, you you see the plane but
44:47 you don't see where your bullets are
44:48 going.
44:48 Traceable bullets is they attach a tiny
44:50 bit of phosphorescence or phosphor or
44:52 something to make it glow as it goes.
44:55 So, this means that every sixth bullet
44:57 or something you actually see a line in
44:58 the sky. So, you have feedback on where
45:01 you're aiming. So, this is what this is
45:03 the idea here is that we increase our
45:05 level of feedback and we get near
45:07 instant feedback on what we're building.
45:09 Cuz without that the AI is kind of
45:11 coding blind until it reaches the later
45:12 phases.
45:14 We got some vertical slice rules. We
45:15 quiz the user.
45:17 And then we create the issue files. So,
45:20 what I see here
45:21 is that even though
45:23 I've I've told it to do vertical slices,
45:26 it's proposing to
45:29 create the gamification service
45:32 first on its own. That's just one slice
45:34 there. And that to me feels like a
45:36 horizontal slice. What I want to see in
45:38 the first vertical slice especially is I
45:40 want to see the schema changes or some
45:42 schema changes. I want to see some new
45:45 service being created and I want a
45:46 minimal representation of that on the
45:48 front end. So, I want it to go through
45:50 the vertical slices, not just the
45:52 horizontal. Does that make sense?
45:54 Okay. So, I'm going to give the AI
45:57 a rollicking.
45:58 Uh bad boy. No, I'm not.
46:01 I'm not going to waste tokens just being
46:04 just naming. Um
46:06 So, the first slice is too horizontal.
46:10 I'll just start with that and see if it
46:11 picks it up.
46:12 Does that make sense as a concept?
46:14 And I think having that um
46:17 what I really like about going back to
46:18 those old books is that we're really
46:21 trying to in this day and age like get
46:24 uh
46:25 verbalize best software practices in
46:27 English.
46:29 And these books, 20-year-old books, have
46:31 already done that. And it's an absolute
46:33 gold mine if you want to throw that into
46:34 prompts. But even with that, it's not
46:36 going to um not going to do a perfect
46:38 job each time.
46:39 So,
46:40 award points for lesson completion
46:42 visible on dashboard. Yes, that's a
46:44 beautiful vertical slice because it's
46:47 definitely a big chunk of stuff. It's
46:48 doing a lot of stories there, but we're
46:51 going to see something visible at the
46:52 end and the AI will then just be able to
46:54 add to that. You see why that's
46:56 preferable to the first one. Cool.
46:58 Uh looks great.
47:01 So, we're getting closer now. Anyone
47:03 following at home as well, you know, not
47:05 at home but you get the idea.
47:06 Um will hopefully see the same thing,
47:09 too, and start developing the same
47:10 instincts.
47:11 Let's open up for questions just while
47:13 I'm still creating these GitHub issues.
47:16 Uh ba ba ba ba Oh, not GitHub issues. Uh
47:18 local issues.
47:20 When will I stop using Windows? Never.
47:22 What is your Okay, we'll get to that
47:24 later.
47:25 How does AI um decide when to stop
47:27 grilling? Cuz AI can ask incessantly,
47:30 can we have a smarter way to decide the
47:31 stop point? Yeah, it does tend to really
47:34 um
47:34 those grilling sessions can be super
47:35 intense. And the thing about these
47:37 skills is you can tune them if you want
47:39 to. If you feel like the AI is just
47:41 absolutely hammering you, hammering you,
47:42 hammering you, then you can just
47:44 tell it to just pull back a little bit
47:46 or get it to do, you know, stop points
47:48 and that kind of thing. So, if that's a
47:49 failure mode that you run into a lot,
47:51 then you just, you know, change the
47:52 skill.
47:55 Uh do I still use uh be extremely
47:57 concise, sacrifice grammar for the sake
47:58 of concision? Um there was a tip that I
48:00 gave folks um
48:03 5 months ago, which is that
48:05 to basically increase the readability of
48:07 your plans. So, when you're using plan
48:09 mode,
48:10 then you can put it in your Claude.md
48:13 and you can say, "Okay, yeah, approve
48:15 that."
48:17 Let's open up Claude.md.
48:21 Uh do I have a Claude.md? Maybe I don't.
48:23 I I really don't use Claude.md very
48:24 much. I'm just going to put a dummy
48:26 inside here.
48:28 Um when
48:30 No.
48:31 When talking to me,
48:33 uh sacrifice grammar for the sake of
48:34 concision.
48:40 And this um prompt was uh really useful
48:43 to me when I was reading the plans
48:45 because it meant that the plans would
48:46 come out and they would be very concise,
48:48 really nice, easy to read, often very
48:50 concise. But I've
48:53 since dropped this idea in preference to
48:56 a grilling session because what I
48:57 noticed with it just I didn't want to
48:59 read the plans. I wanted to get on the
49:01 same wavelength as the LLM. I wanted it
49:03 to ask aggressive questions to me. And
49:04 when I stopped reading the plans, I
49:06 stopped needing them to be concise.
49:08 So, I think of the plans really in the
49:09 destination document as uh the end
49:12 state. And I don't need that end state
49:13 to be concise.
49:15 Hopefully that answers your question.
49:19 Uh
49:20 What do I think will be the outcome of
49:22 the Mexican standoff of future roles of
49:23 PMs and other roles converging? Uh I've
49:25 no idea. I'm not a pundit. I've no idea.
49:29 Uh okay.
49:31 So, we should
49:33 uh after a couple of approvals,
49:37 uh end up with a set of issues.
49:39 Now,
49:40 these issues that we're creating,
49:42 they're designed to be independently
49:44 grabbable,
49:45 which means that this Kanban board ends
49:48 up looking kind of like this.
49:51 Where you have
49:53 essentially a set of tickets with a
49:55 whole load of independent relationships.
49:57 So, this one needs to be done before
49:58 this one. This one needs to be done
50:00 before this one.
50:01 And this one, let's say we got another
50:03 one over here.
50:05 This one needs to be done before this
50:05 one.
50:06 This means that you can start to
50:09 parallelize.
50:10 You can start to get agents working at
50:13 the same time on these tasks. Because
50:15 yeah, this one needs to be done first.
50:18 And then
50:19 these two
50:21 can be grabbed at the same time by
50:24 independent agents.
50:26 Raise your hand if you've done any kind
50:27 of parallelization work with agents.
50:30 Okay, cool. So, this allows you
50:33 um to turn those plans into to optimally
50:35 kind of like into a directed acyclic
50:38 graphs essentially, where you just are
50:40 able to um
50:42 essentially have three phases here.
50:45 Where you have
50:46 phase one.
50:48 Uh let me grab move that.
50:51 Uh
50:52 above this line here,
50:55 you do this one.
50:56 Then phase two, you do the two below it.
50:58 And then phase three, you do this third
51:00 one and add it onto that.
51:02 And when you think about there could be
51:04 This could This is a relatively simple
51:06 plan, but you could have many different
51:08 plans operating all at once. It means
51:10 that you can do really nice
51:11 parallelization. And we'll talk more
51:12 about that in a bit. But that's why I
51:14 prefer a Kanban board set up like this
51:18 to a sequential plan. Because a
51:20 sequential plan can really only be
51:21 picked up by one agent.
51:24 So, this
51:26 Where did it go? Over here.
51:29 Yeah, this plan here
51:31 This is really only one loop, right?
51:33 Only one agent can work on these because
51:36 we have numbered phases and they're not
51:38 parallelizable. Does that make sense?
51:40 Cool.
51:42 So, we've got our issues. Ah, come on.
51:44 Stop asking me for I know it's creating
51:46 them on GitHub. I really don't want
51:47 that.
51:49 Oh, no.
51:51 You fool.
51:53 Create them in issues instead.
51:57 No.
51:58 That's not precise enough.
52:00 Uh you fool.
52:01 Create them in local markdown files
52:05 instead, referencing the local version.
52:11 Sorry about this.
52:15 So, once we get to this point,
52:17 we [clears throat] have a bunch of
52:18 issues locally
52:20 that we can start um looping over and
52:24 implementing. And it's at this point
52:26 that the human leaves the loop.
52:28 So, so far
52:31 Let me pull up a a proper overview of
52:33 this kind of flow that we're exploring
52:35 here.
52:37 So far
52:40 we have taken an idea.
52:43 I'll zoom this in a bit for the folks at
52:44 the back.
52:46 And we've grilled ourselves about the
52:49 idea.
52:51 We can skip over research and prototype,
52:52 but we turn that into a PRD, into a
52:54 destination document.
52:56 We then turn that PRD into a Kanban
52:59 board. And all of those steps
53:01 are human reviewed.
53:03 And now
53:05 the implementation stage, we step back.
53:08 And we let an agent um work through that
53:10 Kanban board or multiple agents work
53:12 through the Kanban board.
53:15 Now, what this means is that yeah, we
53:17 spent a lot of time planning here, but
53:19 it means that we've queued up a lot of
53:20 work for the agent. We can think of this
53:23 as kind of like the day shift and the
53:24 night shift. This is the day shift for
53:26 the human, right? Planning everything,
53:28 getting all the all the stuff ready. And
53:30 then once we kick it over to the night
53:32 shift, the AI can just work AFK. But
53:35 what does that look like?
53:37 Well,
53:39 so I'm just going to Oh, yeah. Just
53:40 allow it. It's perfect.
53:42 So, this looks like
53:44 if we head to the next exercise,
53:47 which is
53:51 uh in fact, the last exercise here,
53:52 running your AFK agent.
53:55 Now,
53:57 I've called this uh Ralph really cuz it
53:59 is a it is essentially a Ralph loop.
54:02 And this prompt here, I want to walk
54:04 through this really closely.
54:06 The first thing it's doing here is we're
54:08 essentially going to run Claude
54:10 and we're going to basically try to
54:11 encourage it to work um
54:14 completely AFK.
54:16 I'll show you what the sort of script
54:17 for this looks like in a minute.
54:19 But you say, "Okay, local issue files
54:21 from issues are provided at the start of
54:22 context."
54:24 The way we do that is if you look inside
54:26 once.sh here inside the repo,
54:29 we have
54:31 uh it's essentially just a bash script,
54:34 where we grab all of the issues,
54:36 um [clears throat] which are inside
54:38 markdown files, and we cat them into a
54:40 local variable. So, that issues variable
54:42 contains all of the issues that are in
54:45 our entire backlog.
54:47 Then we grab the last five commits. I'll
54:50 explain why in a minute.
54:52 And then we grab the prompt and we just
54:54 run Claude code with permission mode
54:56 accept edits.
54:57 And then just essentially just pass it
55:00 all of the information.
55:02 This is what the implementer looks like.
55:04 So, that's what a very very simple
55:05 version of this sort of loop looks like.
55:08 And of course, this is not a loop. This
55:09 is just running it once.
55:12 The loop
55:13 is in the AFK version up here,
55:15 which is uh a fair bit more complicated.
55:18 And the crucial part here is we're
55:20 running it in Docker sandbox as well.
55:22 So, I I don't want you to install Docker
55:25 on your laptops because we're just going
55:26 to be like, "You need to download a
55:28 special image and we're going to tank
55:29 the conference Wi-Fi if we do that." So,
55:31 I'm I am going to demo this to you, but
55:33 you um
55:34 won't need to run this yourself, but
55:35 I'll talk through this in a minute. But
55:37 essentially, this once loop here,
55:41 and ba ba ba ba boom.
55:44 We're just essentially running one
55:46 version of the thing that we're going to
55:48 loop again and again and again. So, this
55:50 is kind of like the human in the loop
55:51 version. And this is essential. Running
55:54 this again and again is essential
55:55 because you're going to see what the
55:56 agent does and see how it ends up
55:58 working. And any tuning that you need to
56:01 add to the prompt, then you can do that.
56:03 Let's go to the prompt.
56:06 Um
56:09 So, local issue files are being passed
56:11 in.
56:12 You're going to work on the AFK issues
56:13 only. That makes sense.
56:15 If all AFK tasks are complete, output
56:17 this no more tasks thing.
56:19 And then the next thing, pick the next
56:21 task.
56:23 So,
56:26 what we're doing here is we're
56:27 essentially running a backlog or
56:30 curating a backlog that our AFK agent is
56:32 going to pick up. That's the purpose of
56:34 all of these um setups in the beginning.
56:38 In this uh
56:39 all the way to this Kanban board here,
56:41 we're just essentially creating a
56:43 backlog of tasks for the night shift to
56:45 pick up.
56:46 And the night shift, this sort of Ralph
56:49 prompt here, it's got its own idea about
56:52 what a good task looks like to next pick
56:54 up.
56:56 I'm I did talk about parallelization. I
56:58 will show you this later, but this is
56:59 essentially a sequential loop here.
57:01 We're just going to run one coding agent
57:03 at a time. This is a good way to just
57:04 sort of um get your feet wet
57:06 essentially.
57:08 So, it's prioritizing critical bug
57:10 fixes, development infrastructure, then
57:12 trace bullets,
57:14 then polishing quick wins and refactors.
57:17 And then we just have a very simple kind
57:19 of instruction on how to complete the
57:20 task.
57:21 So, we explore the repo.
57:23 Use TDD to complete the task. I'll get
57:25 to that later.
57:27 And
57:28 we then run some feedback loops. So,
57:30 let's let's just try this and let's just
57:31 see what happens.
57:33 So, good. It's created the issue files.
57:34 We should be good to go. I'm going to
57:36 cancel out of this.
57:38 I'll clear and I'm going to run
57:40 uh
57:41 Where is it? Ralph
57:43 once.sh. And you can feel free if you're
57:45 following along to do the same thing.
57:48 So, we can see it's just running Claude
57:50 inside here
57:51 with the prompt and with all of the
57:53 issues that have been passed in.
57:56 And while it's doing its thing,
57:59 you probably have some questions about
58:01 this setup and about the decisions that
58:03 I've made to essentially
58:05 delegate all of my coding to AI, right?
58:08 So, let's let's do a quick Q&A while
58:10 it's getting its feet under it.
58:14 Uh okay. Ba ba ba ba ba.
58:17 I'm going to just
58:19 remove those.
58:23 How do you retain negative decisions,
58:25 things that you decided against, and
58:26 rationales when persisting the results
58:28 from the grill me session? Uh great
58:30 question.
58:31 There's a very simple answer, which is
58:33 the in the PRD uh write a PRD section,
58:37 there is a stuff at the bottom, a
58:39 section of the things that are out of
58:40 scope. So, the things we're not going to
58:42 tackle in this PRD, which is very
58:44 important for giving a definition of
58:45 done.
58:47 Feel free to ping on the Slido if you've
58:48 got any more questions.
58:51 Uh what's my front end workflow? Okay,
58:53 it's a great question. I'm going to I'm
58:55 going to answer that in a minute, I
58:56 think.
58:58 How to deal with agents producing more
59:00 code that we can review? How to properly
59:02 parallelize and use multiple agents
59:05 separate way. Okay, that's That's two
59:06 questions there.
59:08 Um
59:09 Raise your hand
59:10 if you feel like you're doing more code
59:12 review now than you used to.
59:16 Yeah, definitely.
59:18 Um
59:18 I don't think there's a way to avoid
59:20 this.
59:22 If we delegate all of our coding to
59:25 agents,
59:27 you notice that the implementation here
59:29 is really the only AFK bit. We then also
59:32 need to QA the work and code review the
59:34 work, right?
59:36 And if we are
59:38 running these loops where it's
59:39 essentially going to implement four
59:40 issues in one,
59:42 it's hard to pair that with the dictum
59:45 that you should keep pull requests small
59:47 and self-contained, right? Like small
59:49 self-contained pull requests means
59:52 you're needing to do fewer loops or
59:55 shorter loops or something.
59:57 Or maybe you do like a big stack of PRs,
59:58 but that seems horrible as well. That's
1:00:00 still just more separated code to
1:00:02 review. I don't honestly know what the
1:00:04 answer to this yet.
1:00:06 I think we just need to be ready to be
1:00:07 doing more code review, essentially.
1:00:10 Which is not fun. That's not fun thing
1:00:11 to say. That's not like I don't know. I
1:00:13 don't feel good saying that, but I do
1:00:15 think it's probably the
1:00:17 the way things are going.
1:00:18 It's a great question.
1:00:21 Uh
1:00:23 Can we grab a couple of questions from
1:00:25 the room as well? Let's not We won't do
1:00:27 the mic, but uh raise your hand if
1:00:28 you've got a question for me
1:00:29 immediately.
1:00:31 Yeah.
1:00:32 So, the approach is very linear from an
1:00:34 idea to uh QA code review. Of course,
1:00:38 the real world is a lot more messy. So,
1:00:40 you have all these ideas that are in
1:00:42 parallel and
1:00:43 nobody has the full picture. And
1:00:46 uh while you're working on something,
1:00:47 something else comes in as
1:00:49 a bug. Yeah. How do you deal with the
1:00:50 messiness? How do you tighten that
1:00:52 feedback loop? Great question. So, the
1:00:54 question was
1:00:55 if this all looks great if you're a solo
1:00:57 developer, but actually how do you
1:00:58 implement this in a team? How do you
1:01:00 gather team feedback on this?
1:01:02 And my answer to that is that if you
1:01:04 have an idea up there
1:01:06 and
1:01:07 essentially the sort of journey from the
1:01:10 idea to the destination
1:01:12 is something you need to figure out with
1:01:13 the team, right? So, all of this stuff
1:01:16 up here, this is kind of like team
1:01:17 stuff, you know what I mean? This So, if
1:01:20 you have an idea and you do a grilling
1:01:22 session on it and you have a question
1:01:23 that you don't know how to answer, then
1:01:25 you need to loop in your team as we
1:01:27 described before. Then you might need to
1:01:29 go, "Okay, like we just need to build a
1:01:30 prototype of this. We need to actually
1:01:32 hash this out. We need something that
1:01:33 the domain experts can fiddle with."
1:01:36 Or okay, we might need to integrate a a
1:01:38 third-party library into this. We might
1:01:39 need to do some research. We might need
1:01:41 to actually kind of like um
1:01:44 ping this back and forth and find a
1:01:45 third-party service that we can get the
1:01:46 most out of. We might need to go back
1:01:49 with the information that we gathered
1:01:50 there to the idea phase. So, all the way
1:01:53 up to the sort of PRD in the journey,
1:01:55 that's something you need to involve
1:01:56 your team with. That's something where
1:01:58 these assets are going to be shared over
1:02:01 and you're going to have requests for
1:02:02 comments on them and that that loop is
1:02:05 going to just keep grinding and grinding
1:02:07 until you figure out where you're going.
1:02:09 Once you figure out where you're going,
1:02:11 then you can start doing the Kanban
1:02:12 board implementation. But this is
1:02:14 essentially super arguable and the
1:02:16 you'll be bouncing back and forth
1:02:17 between the phases. Does that make
1:02:18 sense? Yeah.
1:02:20 Would you not need a
1:02:21 PRD for your prototype?
1:02:23 Say again, sorry. Would you not want to
1:02:24 have a PRD for your prototype? The
1:02:26 question was, do you want to go through
1:02:27 this whole session just to sort of
1:02:29 create a prototype? You don't need a PRD
1:02:31 for your prototype as well. Let's just
1:02:33 quickly talk about prototypes for a
1:02:34 second.
1:02:35 Um there was a question about how do you
1:02:36 make this work for front end?
1:02:39 Like how do you cuz front end is like
1:02:41 really sensitive to human eyes. You need
1:02:43 human eyes looking at the front end all
1:02:45 the time to make sure that it looks
1:02:47 good.
1:02:48 AI doesn't really have any eyes. It can
1:02:51 look at code,
1:02:52 but it front end is multimodal.
1:02:55 And so my experiences with trying to
1:02:58 plug AI into um let's say agent browser
1:03:02 or Playwright MCP to give it
1:03:04 You can give it tools to allow it to
1:03:06 look through a front end and sort of
1:03:07 look at images, but in my experience the
1:03:10 um it's not very good at that yet and it
1:03:12 can't create a nice front end in a
1:03:15 mature code base. It can sort of spit
1:03:17 one out. But what it can do is you say,
1:03:20 "Okay, uh I want some ideas on how uh
1:03:22 this front end might look. Give me three
1:03:24 prototypes um that I can click between
1:03:27 in a throwaway uh
1:03:29 throwaway route that I can decide which
1:03:31 one looks best." And you take the asset
1:03:33 of that prototype and you then feed it
1:03:35 back into the grilling session or you
1:03:37 get feedback on it, blah blah blah blah
1:03:38 blah.
1:03:39 Answer your question kind of thing?
1:03:41 The prototype is just, you know, it's
1:03:42 messy. It's supposed to give you
1:03:44 feedback earlier on the process.
1:03:46 So, that's a great way of working with
1:03:47 front end code, great way of looking at
1:03:48 software architecture in general. Let's
1:03:50 go one more question here. Yes.
1:03:52 >> [clears throat]
1:03:52 >> In your system, how do you integrate
1:03:54 respecting an architecture and design
1:03:57 with API contracts and fitting with your
1:03:59 larger system?
1:04:01 Uh security constraints, all kinds of
1:04:03 constraints like that.
1:04:04 Yeah.
1:04:05 There's a lot in that question. The
1:04:07 question was, how do you conform with
1:04:08 existing architecture? How do you do um
1:04:12 how do you make it conform to the code
1:04:13 standards
1:04:14 like of your code base or Yeah, the
1:04:17 architecture design APIs, Yeah. security
1:04:19 rules that constrain your design. Yeah.
1:04:23 I'm going to answer that in a bit.
1:04:25 That's okay.
1:04:26 So, hopefully we have started to get
1:04:28 some stuff cook cooking. Uh it's just
1:04:32 pinging on the explore phase here.
1:04:36 Hmm, tempted to just start running it
1:04:38 AFK.
1:04:40 Maybe I will, maybe I won't.
1:04:43 Um
1:04:44 What it's essentially doing is it's
1:04:45 exploring the repo. It's going to then
1:04:47 start implementing based on what we
1:04:48 wanted.
1:04:49 Let's actually have one more question
1:04:50 just while it's running. Yeah.
1:04:52 Why not AI
1:04:54 QA everything
1:04:58 Yeah.
1:04:59 So, the question was, why do you not get
1:05:02 AI to QA?
1:05:05 AI to QA.
1:05:06 I just got uh jargon overload for a
1:05:08 second. Um why do you not get AI to uh
1:05:11 test its own code? Now, of course, you
1:05:13 absolutely can. And I think while it's
1:05:16 doing while it's cooking here,
1:05:18 okay, it's got a clear picture of the
1:05:19 code base. It's assessing the issues.
1:05:22 It's doing issue 02 as the next task.
1:05:24 I'm again going to show you that in a
1:05:25 bit, I think. The sort of uh cuz you
1:05:28 definitely should do an automated review
1:05:31 step as part of implementation.
1:05:33 So, you have your implementation, you
1:05:35 should then, because tokens are pretty
1:05:37 cheap and AI is actually really good at
1:05:38 reviewing stuff, you should get it to
1:05:40 review its own code before you then QA
1:05:42 it.
1:05:43 I found that that catches a ton of
1:05:44 different bugs
1:05:46 and
1:05:47 the way that works is I will just do a
1:05:50 little diagram is if you have, let's
1:05:52 say, an implementation that sort of like
1:05:54 used up a bunch of tokens in the smart
1:05:56 zone,
1:05:57 if you get it to sort of try to
1:06:00 do its reviewing, it's going to be doing
1:06:01 the reviewing in the dumb zone.
1:06:05 And so, the reviewer will be dumber than
1:06:06 the thing that actually implemented it.
1:06:08 If we imagine this is the
1:06:11 uh let's be consistent. That's the
1:06:12 review.
1:06:13 That's the implementation.
1:06:15 Whereas if you clear the context,
1:06:19 then
1:06:21 you're essentially going to be able to
1:06:22 just review in the smart zone, which is
1:06:24 where you want to be.
1:06:27 Let's see how our implementation is
1:06:28 doing.
1:06:29 Okay, good. It's generating a migration.
1:06:31 That looks pretty nice.
1:06:32 We're getting some code spitting out.
1:06:37 And
1:06:38 while I'm sort of like Aha, here we go.
1:06:42 TDD.
1:06:43 Let's talk about TDD and then I think
1:06:45 we'll have a little another little
1:06:46 break.
1:06:48 TDD I found is absolutely essential for
1:06:51 getting the most out of agents. Uh raise
1:06:53 your hand if uh you know what TDD is.
1:06:56 Cool. Okay. TDD is test-driven
1:06:58 development. What it's essentially doing
1:07:00 is it's doing a something called red
1:07:03 green refactor. And if you look in the
1:07:05 code base, you'll be able to find a um a
1:07:07 skill which really describes how to do
1:07:10 red green refactor and teaches the AI
1:07:12 how to do it.
1:07:13 So, what it's doing is it's writing a
1:07:15 failing test first. So, it's saying,
1:07:18 "Okay, I've broken down the idea of what
1:07:20 I'm doing and I'm just going to write a
1:07:22 single test that fails and then I need
1:07:25 to make the implementation pass."
1:07:27 I have found that
1:07:30 first of all, this adds tests to the
1:07:31 code base and these this tends to add
1:07:33 good tests to the code base. And so,
1:07:35 we've got this kind of gamification
1:07:37 service.
1:07:38 It looks like it's
1:07:39 using some existing stuff to create a
1:07:41 test database. Test fails because the
1:07:43 module doesn't exist yet. Okay, we've
1:07:45 confirmed red. And then it goes and
1:07:48 hopefully runs it and it passes.
1:07:51 I found that uh raise your hand if
1:07:54 you've ever had AI write bad tests.
1:07:58 Yeah.
1:07:59 It tends to try to cheat at the tests
1:08:01 because it's sort of doing it in layers.
1:08:03 It will do the entire implementation and
1:08:05 then it will do the entire test layer
1:08:07 just below it.
1:08:08 Uh
1:08:09 I'm just going to say yes, you're
1:08:10 allowed to use NPX V test.
1:08:12 And using this technique, it generally
1:08:15 is a lot harder to
1:08:18 cheat because it's
1:08:20 sort of instrumenting the code before
1:08:22 it's then writing the code. So, I find
1:08:24 that TDD is so so good for places where
1:08:28 you can pull it off. In fact, it's so
1:08:29 good that I sort of warped my whole uh
1:08:32 technique around getting TDD to work
1:08:34 better.
1:08:35 I can see some dripping eyes. It is so
1:08:37 hot in here.
1:08:38 You can't imagine how hot it is up here.
1:08:40 Let's take another 5-minute comfort
1:08:41 break. Let's come back at quarter to, I
1:08:45 think. Have a nice generous one.
1:08:47 And we'll be back in about 6 7 minutes
1:08:50 and I'll talk about how
1:08:52 uh I think about modules, think about
1:08:54 constructing a code base to make this
1:08:55 possible.
1:08:57 I've just been sort of fiddling with the
1:08:58 AI here and we have ended up with some
1:09:00 with a commit.
1:09:02 So, we have something to test. Issue
1:09:04 number two is complete. Here's what was
1:09:06 done.
1:09:07 This is kind of what it looks like when
1:09:09 a Ralph loop completes is you end up
1:09:10 with a little summary.
1:09:12 Um and we have now something we can QA.
1:09:15 Because we did the feedback loops
1:09:17 because we did the trace bullets because
1:09:19 we were uh said, "Okay, give us
1:09:21 something reviewable at the end of
1:09:22 this." We can immediately go and QA it.
1:09:24 Now, there's nothing uh less exciting
1:09:26 than watching someone else QA something.
1:09:29 But, hopefully we can have a little
1:09:30 play.
1:09:31 Let's just check that it uh works at
1:09:33 all.
1:09:34 In fact, before I go there, I just want
1:09:36 to sort of work through what just
1:09:38 happened.
1:09:39 Which is we see that it's created some
1:09:42 stuff on the dashboard.
1:09:45 And it then ran the feedback loops. So,
1:09:47 it then ran the tests and the types.
1:09:51 Now, TDD is obviously really important.
1:09:53 And it's really important because these
1:09:55 feedback loops are essential to AI,
1:09:58 essential to get AI to produce anything
1:10:01 reasonable.
1:10:02 Because without this, AI is totally
1:10:04 coding blind, right?
1:10:06 You have to have to um
1:10:09 If if your code base doesn't have
1:10:10 feedback loops, you're never ever ever
1:10:13 going to get decent AI decent output out
1:10:15 of AI. And often what you'll find is
1:10:18 that the quality of your feedback loops
1:10:21 influences how good your AI can code,
1:10:24 essentially. That is the ceiling. So, if
1:10:26 you're getting bad outputs from your AI,
1:10:28 you often need to increase the quality
1:10:30 of your feedback loops.
1:10:32 We'll talk about how to do that in a
1:10:33 minute.
1:10:35 Now, so it ran NPM run test, NPM run
1:10:39 type check. It got one type error, and
1:10:41 it needed to fix it with a nice bit of
1:10:43 TypeScript magic. Very good. Yeah, type
1:10:45 of level threshold number. Okay.
1:10:48 Uh you see why I stopped teaching
1:10:50 TypeScript cuz just AI knows everything
1:10:51 now.
1:10:52 Um
1:10:54 So, and it ran the tests, and it passed,
1:10:57 and it's looking good. So, we now end up
1:10:58 with 284 tests in this repo. Pretty
1:11:01 good.
1:11:03 I I do find uh front end really hard to
1:11:06 test here. We're essentially just
1:11:07 testing the service. So, we've created a
1:11:09 gamification service, if we look up
1:11:11 here.
1:11:13 And then we have a test for that
1:11:14 service. You can see that the service
1:11:16 and the test itself.
1:11:17 Now, if I was doing code review here, I
1:11:19 would then go to I would first go to
1:11:21 review the tests, make sure the tests
1:11:23 were testing reasonable things,
1:11:25 and then go and kind of review the code
1:11:28 itself just to make sure that it's it's
1:11:30 not doing anything too crazy, right?
1:11:32 The essential thing is I need to
1:11:33 actually um look at the dashboard.
1:11:36 I'm going to log in as a student.
1:11:40 Oh, if it'll let me. Maybe it won't let
1:11:42 me.
1:11:43 Come on, son. There we go.
1:11:45 Let's log in as Emma Wilson.
1:11:47 Head into courses.
1:11:49 Uh let's say I've got an introduction to
1:11:50 TypeScript.
1:11:52 Continue learning.
1:11:54 Uh yes, I completed this lesson.
1:11:57 And something went wrong. I imagine it's
1:11:59 because I don't have
1:12:02 Uh SQLite error. I don't have the right
1:12:05 table. So, I need a table point events.
1:12:08 Point events is a strange table name.
1:12:09 I'm not sure quite what it was thinking
1:12:10 there.
1:12:11 Uh let's suspend. Let's run uh NPM DB
1:12:15 migrate.
1:12:17 Push, I think.
1:12:19 I can't remember which one it was.
1:12:21 But, you kind of get the idea, right? I
1:12:23 I'm not going to subject you to uh
1:12:24 watching me do QA because it's so dull.
1:12:27 Um but at this point, I would
1:12:29 essentially go back in. I would um
1:12:31 Let me open the project back up.
1:12:35 Uh and I would
1:12:36 This This is a crucial moment, um and
1:12:39 it's so important to um
1:12:41 QA it manually here because QA Oh, dear,
1:12:45 oh dear. What's going wrong? There we
1:12:46 go.
1:12:47 QA is how I then um impose my
1:12:51 uh
1:12:52 opinions back onto the code base, how I
1:12:54 impose my taste.
1:12:56 What you'll often find is that um there
1:12:58 are teams out there who are trying to
1:12:59 automate everything, like every part of
1:13:02 this process. And they will tend to
1:13:06 uh if you try to like automate the sort
1:13:08 of creation of the idea, automate
1:13:11 uh the QA, automate the research,
1:13:12 automate the prototype, you end up with
1:13:15 uh apps that I feel just lack taste
1:13:19 and are bad.
1:13:21 Maybe they just don't work, or they they
1:13:23 don't even work as intended, or there's
1:13:25 just no
1:13:26 You need a human touch when you're
1:13:28 building this stuff because without
1:13:29 that, you just end up with slop.
1:13:32 And we are not producing slop here.
1:13:33 We're trying to produce high-quality
1:13:34 stuff, and so that's what the QA is for.
1:13:37 Mhm.
1:13:39 So, I'm going to do two things in this
1:13:41 final section.
1:13:43 Which is I'm going to first tell you how
1:13:45 to
1:13:46 There's probably a question in your mind
1:13:48 here, which is let's say I have a code
1:13:50 base that I'm working on.
1:13:52 And it's a bad code base. It's a code
1:13:54 base that's like really complicated, uh
1:13:57 that AI just never does good work in,
1:13:59 and maybe actually most humans that go
1:14:01 into that code base don't do good work.
1:14:03 How what How do I improve that code
1:14:05 base?
1:14:06 And the second thing is I'll show you my
1:14:07 setup for parallelization.
1:14:10 So, let's go with um
1:14:12 bad code first.
1:14:14 Now,
1:14:16 where is it? Where's the diagram? Here
1:14:17 it is.
1:14:19 In his book, um The Philosophy of
1:14:21 Software Design,
1:14:23 John Ousterhout talks about
1:14:25 the ideal type of module.
1:14:28 And let's imagine that you have a code
1:14:30 base that looks like this. Each of these
1:14:32 uh blocks here are individual files.
1:14:35 And these files
1:14:36 export things from them. You know, they
1:14:38 have um things that you pull from the
1:14:40 files that you then use in other things.
1:14:42 And so, you might have these weird
1:14:43 dependencies where this file over here
1:14:45 might rely on this file, or might rely
1:14:47 on that file, for instance.
1:14:49 Now, if these files are small and they
1:14:51 don't kind of ex- like
1:14:54 export many things, then John Ousterhout
1:14:56 would call these shallow modules,
1:14:58 essentially. Where they're not very um
1:15:02 They kind of look like uh this, if I No,
1:15:05 actually no. I can't can't make a good
1:15:06 diagram of it.
1:15:07 They're essentially lots and lots of
1:15:09 small chunks. Now, this is hard for the
1:15:11 AI to navigate
1:15:13 cuz it doesn't really understand the
1:15:14 dependencies between everything. It
1:15:15 can't work out where everything is. You
1:15:17 know, it has to sort of manually track
1:15:19 through the entire graph and go, "Okay,
1:15:20 this relies on this. This one relies on
1:15:22 this one. This one relies on this one."
1:15:26 And it's then also hard to test this, as
1:15:28 well, because where do you draw your
1:15:29 test boundaries here?
1:15:31 Do you test each module individually?
1:15:35 Like just literally draw a test boundary
1:15:36 No, don't do that.
1:15:38 Around this one?
1:15:40 And then maybe another test boundary
1:15:41 around the next one, and then the next
1:15:43 one?
1:15:45 Or should you sort of do big groups of
1:15:48 it? Should you say, "Okay, we're going
1:15:49 to test all of these related modules
1:15:51 together, and just sort of, you know,
1:15:53 hope and pray that they work."
1:15:57 Now,
1:15:58 >> [sighs]
1:15:58 >> this means that if I think that bad
1:16:00 tests mostly look like that, where the
1:16:04 AI essentially tries to sort of wrap
1:16:06 every tiny function in its own test
1:16:08 boundary, and then just sort of test
1:16:10 that those individually work. But, what
1:16:12 that does is it means that when, let's
1:16:15 say, this module over here calls those
1:16:17 two,
1:16:19 so it depends on both of these, then
1:16:21 this module might miss order the
1:16:23 functions, or there might be sort of
1:16:24 stuff inside that poor module that's
1:16:27 worth testing on its own. And if you
1:16:29 then wrap this in a test boundary, what
1:16:31 do you do? Do you mock the other two
1:16:32 modules? How does that work?
1:16:36 So, actually figuring out how to um
1:16:40 build a code base that is easy to test
1:16:43 is essential here. Because if our code
1:16:46 base is easy to test, then our code our
1:16:48 feedback loops are going to be better,
1:16:50 and the AI is going to do better work in
1:16:52 our code base. Does that make sense?
1:16:54 So, what does a good code base looks
1:16:55 like look like?
1:16:57 Well, not like that.
1:17:00 It looks like this.
1:17:02 Where you have
1:17:05 what John Ousterhout calls deep modules.
1:17:07 Modules that have a little interface on
1:17:09 there that expose a small, simple
1:17:11 interface that have a lot of
1:17:13 functionality inside them.
1:17:16 Now,
1:17:18 what this means is that these are easy
1:17:20 to test cuz you just Let's say that
1:17:22 there's a dependency between this one
1:17:23 and this one.
1:17:25 My arrow working? Yeah, there we go.
1:17:28 Then,
1:17:30 what you do is you just wrap a big test
1:17:32 boundary around that one module, around
1:17:34 this one up here,
1:17:35 and you're going to catch a lot of good
1:17:37 stuff.
1:17:40 Because there's lots of functionality
1:17:41 that you're testing, and really the
1:17:43 caller, the person calling the module,
1:17:45 is going to have a simple interface to
1:17:47 work from. So, it's not not too tricky.
1:17:50 That makes sense? Deep modules versus
1:17:51 shallow modules. This is good.
1:17:54 This shallow version is bad. And what I
1:17:56 find is that unaided
1:17:59 um or if you don't
1:18:02 uh
1:18:04 if you don't watch AI carefully, it's
1:18:05 going to produce a code base that looks
1:18:07 like this.
1:18:08 So, you need to be really, really
1:18:09 careful when you're directing it.
1:18:11 And that's why, too,
1:18:13 is that if we look inside the PRD,
1:18:16 uh where is the PRD gone? It's inside
1:18:18 the issues. It's inside the gamification
1:18:20 system.
1:18:21 Uh not found. Of course, it's not. Here
1:18:23 it is.
1:18:25 Then I have
1:18:27 uh inside here
1:18:29 data model the modules.
1:18:31 So, it's specifically saying, "Okay,
1:18:33 this gamification service is a new deep
1:18:36 module, which we're going to test
1:18:37 around.
1:18:38 It's going to have this particular
1:18:40 interface.
1:18:42 And it's going to have um Okay, we're
1:18:44 modifying the progress service, too.
1:18:46 We're modifying the lesson route. We're
1:18:47 modifying the dashboard route, etc. So,
1:18:50 it's I'm being really specific about the
1:18:51 modules that I'm editing, and I'm making
1:18:53 sure that I keep that module map in my
1:18:56 mind at all times, throughout the
1:18:57 planning, and then throughout the
1:18:59 implementation. Does that make sense?
1:19:01 Very, very useful.
1:19:03 It's useful for one other reason, too.
1:19:04 Not only does it make your app more
1:19:05 testable,
1:19:07 but you get to do a little mental trick.
1:19:11 And I'm going to refill my water while
1:19:13 you wait for what that is.
1:19:17 Uh let me
1:19:20 Let me get a question from you guys. So,
1:19:21 raise your hands if you feel like
1:19:26 Uh if you feel like you're working
1:19:28 harder than ever before with AI.
1:19:32 Yeah.
1:19:33 Uh raise your hands if you feel like you
1:19:36 know your code base less well
1:19:38 than you used to.
1:19:40 Yeah.
1:19:43 This is a real thing. Um
1:19:45 because we're moving fast, because we're
1:19:46 delegating more things, we end up losing
1:19:49 a sense of our code base. And if we lose
1:19:52 the sense of our code base, we're not
1:19:54 going to be able to improve it, and
1:19:56 we're essentially delegating the shape
1:19:57 of it to AI.
1:19:59 I [snorts] don't think that's good. But
1:20:00 then how do we
1:20:03 how do we make it so that we can move
1:20:04 fast while still keeping enough space in
1:20:06 our brains?
1:20:08 I think that this is a way to do it.
1:20:10 Because what you're doing here is not
1:20:12 only are you thinking about creating big
1:20:15 shapes in your code base, big services.
1:20:19 What I think you should do is
1:20:21 design the interface for these modules,
1:20:24 but then delegate the implementation.
1:20:27 In other words, these modules can become
1:20:28 like gray boxes, where you just need to
1:20:31 know the shape of them, you need to know
1:20:33 what they do, and it's sort of how they
1:20:34 behave, but you can delegate the
1:20:36 implementation of those modules. I found
1:20:38 this is really nice. I don't necessarily
1:20:40 need to code review everything inside
1:20:42 that module. I don't necessarily need to
1:20:43 know everything of what it's doing. I
1:20:45 just need to know that it behaves a
1:20:47 certain way under certain conditions,
1:20:49 and that it does its thing. So, it's
1:20:50 kind of like
1:20:52 okay, I've got a big overview of my code
1:20:54 base, and I understand kind of the
1:20:55 shapes inside it, understand what the
1:20:57 interfaces all do, but
1:20:59 I can delegate what's inside.
1:21:01 I found that has been a really nice way
1:21:03 to retain my sense of the code base
1:21:06 while preserving my sanity.
1:21:08 Make sense?
1:21:12 And so, you might ask, how do I take a
1:21:14 code base
1:21:16 that looks like this
1:21:17 and then turn it into a code base that
1:21:19 looks like this? How do I deepen the
1:21:21 modules?
1:21:23 Well, we have Hopefully, it's in here.
1:21:25 Pretty sure it is. We have a skill.
1:21:28 And that skill is called improve code
1:21:30 base architecture.
1:21:32 Nice and direct.
1:21:35 Uh let's run it.
1:21:37 What this skill is going to do is it's
1:21:38 essentially just going to do it a scan
1:21:40 of our code base and looking for what's
1:21:42 available here. And feel free to run
1:21:43 this yourself if you're um
1:21:45 uh
1:21:46 running the exercises.
1:21:48 And it's exploring the architecture,
1:21:50 exploring um
1:21:51 essentially how to work within this code
1:21:53 base, and it's going to attempt to
1:21:57 uh find places to deepen the modules.
1:22:00 Pretty simple. One really cool um thing
1:22:04 that it found here is part of my uh part
1:22:07 of my course video manager app is a
1:22:09 video editor. A video editor built in
1:22:11 the browser, which is really hardcore.
1:22:13 Uh it's a decent bit of engineering. And
1:22:16 I wanted a way that I could wrap the
1:22:18 entire front end all the way to the back
1:22:21 end in like a single big module, so that
1:22:23 I could test the fact that I press
1:22:24 something on the front end and it goes
1:22:26 all the way to the back end. And so, I
1:22:28 found a way essentially by using a kind
1:22:30 of discriminated union between the two
1:22:32 types here by sort of I was able to use
1:22:35 this uh skill to essentially have a huge
1:22:39 great big module that just tested from
1:22:41 the outside, it was testable from the
1:22:43 outside, this video editor
1:22:44 infrastructure. And it meant that AI
1:22:46 could see the entire flow, could act on
1:22:49 the entire flow, and test on the entire
1:22:50 flow. And honestly, it was just night
1:22:53 and day in terms of the uh ability of AI
1:22:56 to actually make changes, cuz AI working
1:22:58 on a video editor is pretty brutal if
1:23:00 you don't give it good tests. So, that
1:23:02 is
1:23:03 Honestly, I
1:23:04 If you take one thing away from today,
1:23:05 just try running this skill
1:23:07 on your repo and see what happens.
1:23:09 Let's go to Slido. Let's ask a
1:23:11 check a couple of questions as well this
1:23:13 is running.
1:23:15 So, let's see. Have you tried Claude's
1:23:17 auto mode with Claude enable auto mode?
1:23:19 That way you can avoid many of the
1:23:20 obvious permission checks. We'll talk
1:23:21 about permission checks in a second.
1:23:23 Do I keep the markdown plans and issues
1:23:26 for later reference?
1:23:28 Okay.
1:23:29 This is a great question.
1:23:31 So,
1:23:34 let's say
1:23:35 that you uh have a great idea, you turn
1:23:38 it into a PRD,
1:23:40 raise and you then implement that PRD,
1:23:43 and the PRD is essentially done.
1:23:45 Raise your hand if you keep that
1:23:47 information in the repo, so you turn it
1:23:49 into a markdown file. Raise your hand if
1:23:50 you want to keep that around.
1:23:53 Cool. Okay. And raise your hand if you
1:23:55 if you don't want to keep it around. If
1:23:57 you want to get rid of it as soon as
1:23:58 possible. Yeah, this is I think an
1:24:02 a question that doesn't have a clear
1:24:03 answer.
1:24:05 What I'm really scared of
1:24:08 with any documentation decision is that
1:24:11 let's say that we have a PRD for this
1:24:13 gamification system, we keep it in the
1:24:14 repo.
1:24:15 We go on, go on, go on. Let's say a
1:24:17 month later, we want some edits to the
1:24:19 gamification system.
1:24:21 And we go in with Claude, and it finds
1:24:23 this old PRD and says, yes, I found the
1:24:25 original documentation for the PRD
1:24:27 system.
1:24:28 Well, it turns out that the actual code
1:24:29 has changed so much from the original
1:24:31 PRD that it's almost unrecognizable. The
1:24:33 names of things have changed, the um
1:24:35 file structure has changed, even the
1:24:37 requirements may have changed. We might
1:24:38 have actually tested it with users. This
1:24:40 is doc rot, where the documentation for
1:24:43 something is rotting away in your repo
1:24:46 and influencing Claude badly. Or Claude,
1:24:49 agents badly.
1:24:50 So, I tend to not keep it around. I tend
1:24:53 to get rid of it. And for me, because my
1:24:56 setup uses GitHub issues, I just mark it
1:24:58 as closed. It can fetch it if it wants
1:25:00 to, but it's got a visual indicator that
1:25:02 it's done. So, I tend to prefer
1:25:05 ditching these.
1:25:07 Thoughts on the BEADS framework from
1:25:08 Steve. Uh I've not tested it, but it
1:25:10 seems like sort of um another way to
1:25:13 manage Kanban boards and issues. Seems
1:25:15 uh very good, but I've not tried it.
1:25:18 Um
1:25:20 >> [clears throat]
1:25:22 >> Uh let me just quickly check the uh
1:25:24 setup here.
1:25:26 Let's take a couple of questions from
1:25:27 the room. Anybody got any questions at
1:25:29 this point about anything that we've
1:25:30 covered so far, especially this last
1:25:32 bit? Yes.
1:25:33 I thought it was
1:25:35 interesting your answer about like the
1:25:36 markdown files that you delete because
1:25:38 they
1:25:39 create like doc rot.
1:25:41 How about migrations? Like with
1:25:43 migration files, would you also squash
1:25:45 them after that?
1:25:47 Like database migrations? Yeah.
1:25:51 I don't know.
1:25:53 I hope that answers your question. I'm
1:25:54 so sorry. No, no. I think database
1:25:56 migrations are a different thing because
1:25:57 you have a sort of running record of
1:25:59 exactly what changed, and it's more
1:26:00 deterministic. And I think
1:26:04 Yeah, it's an interesting analogy. I'm
1:26:06 not sure. Let's talk about it
1:26:07 afterwards.
1:26:08 That's a good way of saying I've no
1:26:10 idea.
1:26:11 Yeah. Yeah. So, you mentioned that you
1:26:12 don't delete the PRD. You mentioned you
1:26:14 don't review the PRD once it's done.
1:26:16 Sorry, guys. Um I'm just trying to
1:26:17 listen to this guy's question. Have you
1:26:18 considered
1:26:19 uh using a deep think like ChatGPT or
1:26:21 something
1:26:25 to tell it, "Look at this PRD and tell
1:26:26 me if it
1:26:29 It takes about an hour.
1:26:30 Yeah, the question
1:26:32 The question here is um
1:26:35 should I um in the sort of early
1:26:37 planning stage be trying to optimize the
1:26:39 plan?
1:26:40 This is something I actually see a lot
1:26:41 of people doing, and it's a really good
1:26:43 um
1:26:44 idea. So, when you
1:26:49 Let's go back to the phases.
1:26:51 So, let's say that you have all of these
1:26:52 phases here.
1:26:55 And you
1:26:56 uh you get to the point where you've
1:26:58 sort of figured out everything with the
1:26:59 LLM, you understand where you're going,
1:27:01 you've created this sort of uh journey
1:27:03 destination documents here. How do you
1:27:05 then
1:27:06 uh
1:27:08 Like should you then try to optimize and
1:27:10 optimize and optimize that PRD until
1:27:12 it's the perfect PRD you can possibly
1:27:13 imagine?
1:27:14 I don't think there's a lot of value in
1:27:16 that.
1:27:17 Because I think the journey is really
1:27:20 just sort of a hint of where you want to
1:27:21 go, and the place that you need to be
1:27:24 putting the work is in QA.
1:27:26 And you can sort of do that AFK, I
1:27:28 suppose, but in my experience, you're
1:27:29 not going to get a lot of juice out of
1:27:31 it. Like it's the
1:27:33 The thing that really matters is getting
1:27:34 alignment with the AI, which is you do
1:27:37 in the grilling session initially.
1:27:40 Let's have one more question. Anyone got
1:27:41 any more? Yeah. How do you get in in
1:27:43 your workflow to get it to code the way
1:27:46 you want it to code it so by the time
1:27:48 you get to code review, it's at least
1:27:49 familiar, it uses the libraries you
1:27:51 wanted to use, Yeah. Um we had this
1:27:53 question before, actually, which was
1:27:54 like uh how do you uh enforce your
1:27:57 coding standards on the agents,
1:27:59 essentially? How do you get it to code
1:28:01 how you want it to code?
1:28:02 Now, there's essentially two different
1:28:04 ways of doing it.
1:28:05 Um you've got
1:28:08 I don't know. Come on. Push.
1:28:11 And you've got pull.
1:28:14 What do I mean mean by push and pull?
1:28:17 Um
1:28:18 Push is where you push instructions to
1:28:20 the LLM.
1:28:22 So, you say, okay, if you put something
1:28:24 in Claude.md,
1:28:25 uh talk like a pirate, that instruction
1:28:27 is always going to be sent to the agent,
1:28:30 right? So, that is a push, actually.
1:28:32 You're pushing tokens to it.
1:28:33 Pull is where you give the agent an
1:28:37 opportunity to pull more information.
1:28:40 And
1:28:42 that's for instance like skills. So, a
1:28:44 skill is something that can sit in the
1:28:45 repo, and it has a little description
1:28:47 header that says, okay, agent, you may
1:28:50 pull this when you want to.
1:28:52 My thinking, my current thinking about
1:28:55 code review and about coding standards
1:28:57 looks like this.
1:28:59 When you have an implementer,
1:29:03 What's going on? There we go.
1:29:04 Implementer.
1:29:06 I'm going to make this less red in a
1:29:07 second.
1:29:09 Um then
1:29:11 you want the coding standards to be
1:29:13 available via pull. If it has a
1:29:15 question, you want it to be able to sort
1:29:17 of answer it.
1:29:18 But if you then have an automated
1:29:20 reviewer afterwards, then you want it to
1:29:23 push. You want to push that information
1:29:25 to the reviewer. You want to say, "These
1:29:27 are our coding standards. Um make sure
1:29:29 that this code um follows them."
1:29:31 So if you have skills for instance, then
1:29:33 you want to push that stuff to the
1:29:35 reviewer so the reviewer has both the
1:29:38 code that's written and the coding
1:29:39 standards to compare to.
1:29:42 Hopefully that answers your question. I
1:29:43 can show you an automated version of
1:29:44 this as well actually.
1:29:46 Um
1:29:47 Yeah, let's do that now just while it's
1:29:48 fresh in my mind.
1:29:50 I recently um spent
1:29:53 uh
1:29:54 maybe a week or so
1:29:56 uh building this thing called
1:29:57 Sandcastle.
1:29:58 And Sandcastle is a
1:30:01 I was sort of unhappy with the options
1:30:03 out there for
1:30:04 um running agents AFK.
1:30:07 And what this does is it's essentially a
1:30:09 TypeScript library for running these
1:30:11 loops. So you have
1:30:13 uh a run function
1:30:15 that creates a work tree, um sandboxes
1:30:18 it in a Docker container,
1:30:20 and then allows you to run a prompt
1:30:22 inside that.
1:30:23 And in that work tree then, it's just a
1:30:25 Git branch and you have that code and
1:30:27 you can then merge it later.
1:30:29 If I open up
1:30:32 um
1:30:33 there are some really really nice ways
1:30:35 of viewing this and it essentially
1:30:37 allows you to run these kind of
1:30:38 automated loops and allows you to
1:30:41 parallelize across multiple different
1:30:43 agents really simply.
1:30:45 So I'll go into my Sandcastle file, go
1:30:47 into main.ts here.
1:30:49 And let's just walk through this.
1:30:51 So this is kind of like I showed you um
1:30:54 a sort of version of the Ralph loop
1:30:56 earlier. This is where we take it from
1:30:58 sequential into parallel.
1:31:01 We have here first of all a planner
1:31:04 that takes in it's has a plan prompt
1:31:06 here that looks at the backlog and
1:31:08 chooses a certain number of issues to
1:31:11 work on in parallel. Remember I showed
1:31:13 you that Kanban board where it had all
1:31:14 the blocking relationships? It works out
1:31:16 all the phases. So this one will say
1:31:18 okay, uh let's say we have
1:31:21 uh you can ignore all this glue code
1:31:22 here. This is essentially
1:31:24 just a set of issues, GitHub issues with
1:31:27 a title and with a a branch for you to
1:31:30 work on.
1:31:32 And then for each issue, we create a
1:31:35 sandbox
1:31:38 and then we run an implementer in that
1:31:40 sandbox
1:31:41 passing in the issue number, issue
1:31:42 title, and the branch. This is like the
1:31:43 loop that we ran just before.
1:31:46 Then
1:31:47 if it created some commits, we then
1:31:49 review those commits.
1:31:51 This is essentially the loop.
1:31:53 What do we do with those commits?
1:31:55 We pass those into a
1:31:58 merger agent.
1:32:01 Which takes in a merge prompt, takes in
1:32:03 the branches that were created, takes in
1:32:04 the issues, and it just merges them in.
1:32:06 If there are any issues with the merge,
1:32:08 you know, with the types and tests and
1:32:09 that kind of thing, it solves them.
1:32:11 And this has been my uh flow for quite a
1:32:13 while now for working on most projects.
1:32:15 It works super super well. And uh yeah,
1:32:19 I recommend you check out Sandcastle if
1:32:20 you want to sort of learn more.
1:32:23 And to answer your question properly is
1:32:25 that in the reviewer
1:32:27 uh I would push the coding standards.
1:32:30 In the implementer, I would allow it to
1:32:31 pull.
1:32:33 And I'm actually using uh Sonnet for
1:32:34 implementation and Opus for um
1:32:38 reviewing cuz I consider reviewing sort
1:32:40 of I need I need the smarts then.
1:32:44 Any question Actually, let me uh before
1:32:46 we do more questions, let's go back
1:32:48 here.
1:32:49 Okay, where are we at?
1:32:51 Okay.
1:32:53 We sort of zooming everywhere in this uh
1:32:55 talk because I'm kind of having to run
1:32:56 things in parallel. So let's go back to
1:32:58 the improve code base architecture. It
1:33:01 has finally finished running and it's
1:33:02 found a bunch of architectural
1:33:04 improvement candidates.
1:33:06 So it's got essentially a cluster of
1:33:08 different modules that are all kind of
1:33:10 related that could probably be tested as
1:33:12 a unit.
1:33:13 Got number one, the quiz scoring
1:33:14 service. There's some reordering logic
1:33:16 extraction as well.
1:33:19 It has arguments for why they're coupled
1:33:21 and it has a dependency category as
1:33:23 well. So local substitutable in SQL
1:33:25 light within memory test DB.
1:33:28 Quiz scoring service just currently has
1:33:30 zero tests. This is the biggest gap. So
1:33:31 this is what it looks like when we come
1:33:33 back of
1:33:34 uh improve code base architecture.
1:33:37 Okay.
1:33:39 So
1:33:41 we have nominally kind of 17 minutes
1:33:43 left.
1:33:44 I don't know about you guys, but I'm
1:33:45 knackered.
1:33:46 >> [laughter]
1:33:47 >> Um I want to
1:33:49 >> [clears throat]
1:33:50 >> Let me let me kind of sum up for you.
1:33:53 Cuz I think we're sort of
1:33:54 reaching the end of our stamina. I'm
1:33:55 going to be available for the full time
1:33:56 if you want to um come and ask me
1:33:58 questions. Um I might do one more check
1:34:00 of the slide over, but let's kind of sum
1:34:01 up where we've got to.
1:34:04 So
1:34:06 this is essentially the flow.
1:34:09 Where throughout this whole process,
1:34:12 we're bearing in mind the shape of our
1:34:13 code base.
1:34:15 This is not a spec to code compiler.
1:34:17 This is not an AI that's sort of just
1:34:19 like churning out code. We are being
1:34:21 very intentional with the kind of
1:34:23 modules and the shape of the code base
1:34:24 that we want. We are making sure that we
1:34:26 are as aligned as possible by using the
1:34:28 grilling session, by really hammering
1:34:31 out our idea. We're not over indexing
1:34:33 into the PRD, we're not trying to read
1:34:35 every part of it. We're not thinking too
1:34:36 much about it even. We're then just
1:34:38 turning that into a set of
1:34:39 parallelizable issues which can be
1:34:41 worked on by agents in parallel.
1:34:44 We implement it
1:34:45 and we QA and code review the hell out
1:34:47 of it and then keep going back to that
1:34:48 implementation. One thing I didn't
1:34:50 really mention is that in the QA phase
1:34:53 what the QA phase is for is creating
1:34:55 more issues for that Kanban board.
1:34:57 So while it's implementing even, you can
1:34:59 be QAing the stuff and going back,
1:35:01 adding more issues. And the Kanban board
1:35:02 just allows you to add blocking issues
1:35:04 kind of um sort of infinitely really.
1:35:07 And then once that's all done, once
1:35:08 you've got code that you're happy with,
1:35:10 once you've got work that you're happy
1:35:11 with, then you can share it with your
1:35:12 team and you can get a full review.
1:35:15 So this is kind of like once you get
1:35:16 here, this is kind of one developer or
1:35:18 maybe a couple of developers sort of um
1:35:20 managing this and then it's kind of up
1:35:21 to you to figure out how to merge it
1:35:22 back in.
1:35:25 >> [sighs]
1:35:27 >> Of course
1:35:29 all of this can be customized by you.
1:35:31 This is just something that I have found
1:35:32 works. I'm not trying to like sell you
1:35:35 on a kind of approach here. What I
1:35:37 recommend if you take one thing away
1:35:39 from this session is that you should
1:35:41 head back, you should head to Amazon and
1:35:43 just buy a ton of those old books
1:35:44 because
1:35:46 I mean, I just found it so enlightening
1:35:47 reading them. Uh
1:35:50 you know,
1:35:51 pre-AI writing is always like a a really
1:35:53 fun to read anyway.
1:35:54 And
1:35:56 I just on every single page I found that
1:35:58 there was something useful and something
1:35:59 interesting to to read.
1:36:02 So thank you so much. Thank you for
1:36:03 putting up with the heat. Um hopefully
1:36:05 your body temperatures will reset soon.
1:36:07 Uh
1:36:08 thank you very much.
1:36:10 >> [applause]
1:36:23 [music]


---

## Source: how-i-build-apps-so-fast-updated-ai-coding-workflow.txt

- Original path: `addintional info to add\how-i-build-apps-so-fast-updated-ai-coding-workflow.txt`
- Size: `24552` bytes
- SHA256: `0D8965B0C8ED569DBF09A72BDC2E798336D75C5433088D5A05FA2E8406BDB10F`

---

How I Build Apps So Fast (UPDATED AI coding workflow)

0:00 It's been a few months since I've talked
0:01 about my coding workflow, but so much
0:02 has changed that I figured it was time
0:04 for an update. In this video, we're
0:05 going to go over all the new stuff I've
0:07 added to my coding workflow, why I'm
0:08 paying for both Claude Code and Cursor,
0:10 how I'm doing automated testing on both
0:12 iOS and web, and a few features that
0:14 have completely changed how I work. If
0:16 you're new here, welcome to the video.
0:17 My name is Chris, and I build
0:18 productivity apps, and today we're going
0:19 to be going over my coding workflow. A
0:21 quick heads-up, this is more of an
0:23 advanced workflow video, and I really
0:24 wanted to focus on what's new with my
0:26 workflow. If you want the basics on how
0:28 I use plan mode, debug mode, how I use
0:30 dictation, I will leave a link in the
0:31 description to my other videos. Today is
0:33 about the newer, less obvious stuff.
0:35 Real quick, let's talk about the models
0:36 that I'm using before we dive in. I'm
0:38 using Opus 4.7 in Claude Code, and
0:40 specifically, I run everything in max
0:43 mode, and I'm using GPT 5.5 extra high
0:45 in Cursor. Both of these are the latest
0:48 models at the time of reporting. 70% of
0:49 my coding is in Claude Code, and the
0:51 other 30% is in Cursor, and I'll cover
0:53 when and how I switch later in the
0:54 video, but first, let's go over some of
0:56 the cool new stuff that I want to show
0:57 you guys. The biggest unlock I've had
0:59 over the last few months is getting
1:00 Claude Code and Cursor to use my app and
1:03 help me automate testing. Usually, the
1:05 way that I, and I'm pretty sure a lot of
1:07 you guys test, is you have Claude Code
1:09 implement a fix, and then you have to
1:10 run the simulator, and then check and
1:12 make sure everything works. On iOS
1:14 specifically, I found something new
1:15 called Xcode Build MCP. It's a free MCP
1:18 tool made by the people at Sentry, and
1:20 it lets Claude Code and Cursor basically
1:22 do 90% of what you can do in Xcode. When
1:24 you give Claude Code this MCP, it can
1:27 build the app, it can run the simulator,
1:28 it can take screenshots, it can tap on
1:30 things on the screen, and it can pull
1:32 all of the logs. So, now whenever I'm
1:33 fixing a bug, I just have to tell Claude
1:35 Code, "Can you make this change?" and
1:37 then verify it works in the simulator
1:39 using Xcode Build MCP. And when it's
1:41 done, if everything's working properly,
1:43 you should just see the simulator open,
1:44 and Claude Code will take control of the
1:46 simulator and start tapping and testing
1:48 for you. And it has the ability to take
1:50 screenshots and access the logs, so no
1:52 more copy and pasting logs from Xcode
1:54 into Claude Code, or dragging
1:56 screenshots into Claude Code, it is all
1:58 handled for you. And because of this, I
1:59 can actually keep Xcode completely
2:01 closed when I'm building iOS apps. I can
2:03 just have Claude code open and it'll do
2:05 everything Xcode can do. There are still
2:07 a few things that Xcode build MCP can't
2:09 do. It's like maybe 10% of things, and
2:11 that includes changing Xcode specific
2:13 settings where it's easier to just open
2:15 up Xcode and change it directly, or
2:16 testing anything that requires complex
2:18 multi-gestures. So in my daily planning
2:20 app Ellie, I have this ability to
2:22 reorder a list. Unfortunately, Xcode
2:24 build MCP does not have the ability to
2:26 test this for me, so I have to manually
2:28 do that part myself. But it does have
2:30 access to the log, so once I'm done
2:31 manually testing that myself, I can have
2:33 it read the logs directly, and at least
2:35 that part is automated. But outside of
2:37 the multi-touch gesture stuff, 90% of
2:40 everything I need is handled by this
2:41 MCP, and again, I just don't have Xcode
2:43 open most of the time. On the web, it's
2:44 actually much easier for Claude code.
2:46 I'm specifically using something called
2:48 Claude with Chrome. It's kind of the
2:49 same idea, but instead of giving Claude
2:51 code a simulator, you can actually give
2:52 it an instance of Google Chrome. And the
2:54 way you run this is first, you install
2:56 the Claude Chrome plugin, and then you
2:58 run Claude {dash} {dash} Chrome, and
3:00 then you'll see that Claude has the
3:01 ability to control Google Chrome. So now
3:03 I can test my app, take screenshots, and
3:06 even read the console. So no more
3:07 pasting logs between Chrome and Claude
3:09 code anymore. And if you're using
3:10 Cursor, it's even easier because they
3:11 have a built-in browser that does all of
3:14 this stuff for you. Previously, my
3:15 workflow was I told Claude code
3:16 something's broken, it goes and fixes
3:18 it, then I manually have to go verify
3:21 that the thing is fixed, and then if
3:22 it's not, I have to take screenshots, I
3:24 have to paste console then I have to go
3:25 back to Claude code and say, "Hey, it's
3:27 still broken. Can you try fixing it
3:28 again?" And then we repeat this process
3:30 over and over again until the issue is
3:32 fixed. But now with the Xcode build MCP
3:34 and Claude with Chrome, I just have to
3:35 tell it, "Hey, can you fix the problem?"
3:38 and then go verify it by using Xcode
3:40 build MCP or Claude with Chrome, and
3:42 keep going until you fix it. And I let
3:44 Claude code run for like 20-30 minutes,
3:46 and then by the time I get back, the
3:47 issue is fixed. [music] This is
3:49 game-changing because it makes context
3:50 switching much easier because I can let
3:52 Claude code run for a longer period of
3:55 time without intervention. While we're
3:56 talking about automating things, the
3:57 second biggest unlock I found is using
4:00 MCPs and CLIs way more than I was a
4:03 couple months ago. When I made my last
4:05 Claude code workflow video, I was barely
4:06 using MCPs. I think I was just using the
4:08 Superbase MCP. But now I am fully
4:11 addicted to using MCPs and CLIs, and I
4:13 genuinely cannot imagine working without
4:15 them now. Let me show you what this
4:16 looks like in practice with a production
4:18 application of mine. If a user emails me
4:20 and says, "Hey Chris, the app keeps
4:22 crashing when I open the settings page."
4:23 The old me would spend an hour digging
4:26 through logs. I would have to go into
4:28 Sentry, which is what I'm using to look
4:30 at crashes in the apps. I would have to
4:32 go into my database, look at the user's
4:34 data to figure out is there something
4:36 that got corrupted? Is there something
4:37 weird going on? And then sometimes I
4:38 would have to go into Axiom to go look
4:40 at server logs. I would have to go to a
4:42 bunch of different services to piece
4:44 together what happened at the time of
4:46 crash. But now because I've hooked up
4:47 all of these services as MCPs or CLIs, I
4:50 can just ask Claude code, "Hey, this
4:53 specific user, here's their email, they
4:55 reported a crash in the settings page.
4:57 Can you go figure out what happened?"
4:59 And then I tell it, "Feel free to check
5:00 out Sentry, Axiom, or Superbase or
5:02 Firebase using the CLIs or MCPs you have
5:04 available to debug [music] this." And
5:06 now what it's going to do is it's going
5:07 to use the Superbase MCP to pull up that
5:10 user's account info. It's going to check
5:12 if the settings look weird. It's going
5:13 to pull Sentry to see if there's any
5:15 crashes for this specific user. And
5:18 within Sentry it's also going to check
5:19 what specific iOS version is the user
5:21 using? Is there anything weird that
5:22 sticks out with their specific device?
5:24 Like are they on an older operating
5:25 system or something? And if you
5:26 configure Sentry correctly like I did,
5:28 it'll even show you where in the code
5:30 the crash actually occurred. And if for
5:32 some reason it needs the back end logs,
5:34 it has the ability to pull Axiom, which
5:35 is what I'm using for all of the logging
5:37 as well. Hooking up these tools directly
5:39 into Claude code cursor has been
5:41 game-changing for my workflow because
5:42 now I don't have to go into all of these
5:45 services and try to piece everything
5:46 together, which would have me like 45
5:48 minutes. Instead, I can just have Claude
5:49 code do it and it will figure all of
5:51 this out in like 3 minutes. Almost every
5:53 major developer service has some sort of
5:55 MCP or CLI available and there's really
5:57 no reason not to use it. Now, quick tip,
5:59 if you're trying to figure out, should I
6:00 use the MCP or the CLI? My default is to
6:04 actually use the CLI whenever possible.
6:06 The reason is after talking to some
6:07 engineers who know way more than I do,
6:09 they told me that in most cases the CLI
6:11 is a bit more efficient in terms of the
6:13 context window, so it eats a lot less
6:15 tokens than the MCP servers. And in
6:17 general, I feel like the agents just
6:19 know how to use the CLIs a little bit
6:21 better than the MCPs. But honestly, you
6:23 can't go wrong. If you use either, you
6:24 should be good. Next thing I want to
6:25 highlight in my workflow is what am I
6:27 using to do code reviews? I get this
6:29 question a lot on my channel and I have
6:30 recently started using a service called
6:32 Greptile and a huge shoutout to them for
6:34 actually sponsoring this video. But even
6:36 if they weren't sponsoring, this is the
6:37 tool that I would be using anyway.
6:39 Greptile is an AI code review service,
6:41 so every time I open a pull request on
6:43 any of my apps, Greptile will review the
6:45 pull request and try to surface issues,
6:48 which is huge for me because as a solo
6:50 developer, I don't really have anyone
6:51 reviewing my code and I'm shipping a ton
6:54 of PRs every single day. I was
6:55 previously using Cursor's BugBot, but
6:57 I've switched over to Greptile and I
6:58 don't know how they pulled this off, but
7:00 it is really good at reviewing code. I
7:03 ran BugBot and Greptile simultaneously
7:06 on like 60 PRs over the last month and a
7:08 half and Greptile has been noticeably
7:10 better. If you want proof of what this
7:12 looks like in practice, I recently
7:13 open-sourced my AI agent, so you can go
7:15 check out the code, but I have Greptile
7:17 set up on the repo. So, if you go to the
7:19 pull request tab, you can see Greptile
7:21 running and reviewing each of the pull
7:23 requests and you can see Greptile in
7:25 action just by looking at the comments.
7:27 I'm pretty sure on like 95% of the pull
7:29 requests I've opened, it has caught at
7:31 least one [music] valid thing. The setup
7:33 is dead simple. You sign up for
7:34 Greptile, you link the repos you want it
7:36 enabled on, you toggle it on, and then
7:38 from that point every PR that you open
7:40 will get automatically reviewed. [music]
7:41 And here's my specific workflow, which
7:43 has been a huge unlock for me. When I'm
7:45 shipping a feature, I open a pull
7:46 request and then Greptile's going to
7:48 review it. Then I tell Cloud Code, "Can
7:50 you wait for Greptile to finish
7:51 reviewing and then go through every
7:53 comment, fix anything that's real, and
7:55 keep looping until Greptile gives you a
7:57 five out of five?" Greptile actually
7:59 grades your PR with a score, and so I
8:00 basically have Cloud Code just looping
8:02 and iterating until it hits a five out
8:05 of five. And that's when I know that the
8:06 PR is ready to ship. I'll leave a link
8:08 in the description if you want to check
8:09 Greptile out. 14 days to try it, no
8:11 credit card required. I think the
8:12 service is like $30 a month and it is
8:14 well worth it for the peace of mind that
8:16 it gives me, especially as a solo
8:17 developer who has no one to review the
8:19 pull request for them. That's the newest
8:21 tool that I've added to my workflow and
8:22 I've been seriously impressed by what
8:24 it's been able to catch. The next
8:25 feature I want to talk about is
8:26 something that I thought everybody knew
8:28 about, but people have been pretty
8:29 surprised when I bring it up, and it's
8:30 called remote control. Basically, it's a
8:32 way for you to continue a session that
8:34 you have running on Cloud Code on your
8:37 phone or desktop, but I primarily am
8:39 using it on my phone, which is huge for
8:40 me because I'm constantly having to
8:42 leave the house and run errands every
8:43 time I'm in the middle of some sort of
8:45 coding session with Cloud Code. The way
8:46 it works is if you have Cloud Code
8:48 running on your computer, you can type
8:50 {slash} remote control and it lets you
8:52 continue the exact same session on your
8:55 phone. So, if you open the Cloud app,
8:56 you'll go to code, you'll see that
8:58 session appear there and you can
9:00 continue it like nothing happened and it
9:01 will sync between the two devices.
9:03 Again, huge if I'm in the middle of a
9:05 coding session and then I have to go to
9:06 the grocery for some reason, I can then
9:08 continue the session while I'm on the
9:09 go. Probably a little unhealthy, but I
9:11 will own up to that. I actually had the
9:12 opportunity to talk to Boris himself,
9:14 who's the one who created Cloud Code,
9:16 and I asked him, "What is the coolest
9:17 feature and the biggest workflow hack
9:19 that you have?" And this is the one that
9:20 he mentioned. He also gave me another
9:22 tip that you can actually run {slash}
9:23 config and then you can have it set
9:25 where every time you start Cloud Code,
9:28 it's going to automatically start a
9:30 remote control session. So, now I have
9:32 this running as well. You're probably
9:33 wondering, "Is there something for
9:34 Cursor?" There are Cursor Cloud agents
9:36 and they work really great. I still use
9:38 them for certain things, but the reason
9:40 I prefer Claude Code's remote control is
9:42 because Claude Code has access to all of
9:45 the MCPs and CLIs I have on my device.
9:47 But, when you're using Cursor's cloud
9:49 agents, you really only have access to a
9:51 handful of remote MCPs. Now, there are
9:53 some workarounds to get specific CLIs
9:55 and some other local only MCPs working,
9:57 but it is such a hassle to set up, and
9:59 I've just been too lazy to do it, to be
10:01 honest. Now, in terms of what I'm using
10:02 to run Claude Code, I'm actually using
10:04 an app called C Mux. And then Cursor is
10:06 obviously just Cursor. But, if you saw
10:07 my other videos, I used to run Claude
10:09 Code directly in the Cursor terminal. I
10:11 have recently switched over to C Mux,
10:13 and here are a few reasons why. The
10:15 first is that C Mux has a really nice
10:17 sidebar, so I'm able to see all of my
10:19 projects on the left, and then I can
10:21 open up as many windows as I want in the
10:22 right, and it's really intuitive to do
10:24 this. But, it makes juggling multiple
10:26 projects, which I'm constantly doing,
10:28 really easy. The second reason is it has
10:29 built-in notifications. So, when a
10:31 specific Claude Code instance needs my
10:33 attention, C Mux will ping me, and then
10:35 when I click it, it'll automatically
10:37 open to the relevant window. And it
10:38 actually even highlights which window
10:40 needs my attention. And this is really
10:42 important if you're like me, and you're
10:43 running like 10 Claude Code instances at
10:45 once at all times. Now, the third
10:46 reason, and arguably the most important
10:48 reason I'm using C Mux, is it is
10:50 incredibly lightweight when it comes to
10:53 memory on my device. I've noticed that
10:55 when I'm using Claude Code inside of
10:57 Cursor, this thing is consuming RAM, and
11:01 my computer gets really slow. And I have
11:03 a very, very powerful computer. I got
11:05 like
11:06 >> [music]
11:06 >> 64 gigs of RAM, and this is an M4 Max,
11:09 but it still struggles when I have like
11:12 five instances of Claude Code running
11:14 inside of Cursor. I rarely have that
11:16 problem when I'm running like 20
11:18 instances of Claude Code inside of C
11:20 Mux. It does just fine. The memory
11:21 footprint is really light. Now, in terms
11:23 of Claude Code itself, the model I'm
11:25 using is Opus 4.7, and I'm specifically
11:28 running it on Max mode, which is the
11:29 highest thinking mode that you can set
11:31 it at. I'm on the $200 a month max plan
11:33 and I've had zero issues with the rate
11:35 limit so far. Another tip, whenever you
11:37 start a new Claude Code session, it is
11:39 going to default to medium thinking. I
11:41 got kind of annoyed having to set it to
11:43 max every single time and I realized
11:45 there's actually a flag that you can set
11:47 and when you set this, every new session
11:49 is automatically going to start with max
11:51 thinking enabled. So, I have that set
11:53 right now. Honestly though, you could
11:54 get away with extra high or even medium
11:56 in most cases, but I set it to max just
11:58 because I have the $200 a month plan. On
12:00 that note, a lot of people keep telling
12:02 me, I feel like Claude Code just doesn't
12:03 get it, it's just not that smart. In
12:05 most cases, I usually tell them, can you
12:07 check what model you're using and what
12:08 thinking mode? And over half the time,
12:10 they have it set to Sonnet and medium
12:13 thinking. And I tell them, okay, well,
12:14 that's why. That is not that great of a
12:16 settings. I mean, it's probably good for
12:17 most coding tasks, but in my case,
12:20 almost all the tasks that I run, I have
12:22 to run them in Opus and max mode to get
12:24 the best results. Another setting I have
12:26 turned on is that I'm using Claude Code
12:28 in what's called no flicker mode. So, I
12:29 think this is a beta thing at the time
12:32 of recording, but they have this new
12:33 rendering mode where it'll render a
12:35 little differently in the terminal
12:36 compared to if you have this off. You
12:38 don't lose anything out in terms of
12:39 functionality, but there are a few key
12:41 differences. Like, for example, when I
12:43 scroll through a conversation, the text
12:46 input bar stays pinned to the bottom.
12:48 There's this little button that appears
12:49 where I can click it to scroll to the
12:50 bottom. It's also just a little bit
12:52 smoother when it comes to scrolling,
12:53 too. But, the biggest thing that it
12:55 gives you is you can click directly in
12:57 the text input field and the cursor will
12:59 jump to that position. It's really
13:01 annoying on the default Claude Code
13:03 experience where you have to keep
13:04 tapping [music]
13:05 to move your cursor because for some
13:06 reason clicking does nothing. There's a
13:08 few other small quality of life
13:10 improvements that come when you use no
13:11 flicker mode, but these are the two I
13:12 wanted to highlight. You can probably go
13:14 online and check the full list and then
13:15 I would just enable this and it does
13:17 feel like a meaningful step up in terms
13:19 of experience. So, this is the flag you
13:20 need to set. When you do it, no flicker
13:22 mode will be turned on. I mentioned in
13:23 the beginning of the video that I'm also
13:25 using Cursor for about 30% of my tasks.
13:27 so why am I doing that? Claude code
13:29 seems completely fine. Well, there are
13:31 some cases where Opus 4.7, even with max
13:33 thinking, just does not get the task.
13:36 And specifically, this happens with very
13:38 complex bugs with a lot of edge cases.
13:40 For those bugs, that's when I switch to
13:42 cursor, and I specifically use GPT 5.5
13:45 extra high with the 1 million context
13:48 window. Probably the most controversial
13:49 thing I'll say in the video, but in my
13:51 experience, GPT 5.5 extra high 1 million
13:54 context window is better than Opus 4.7
13:57 max thinking at majority of tasks,
14:00 especially if the task is very complex.
14:03 I'll give you an example. In my daily
14:04 planning app, I have this feature called
14:06 recurring tasks. It is a very
14:08 complicated feature. It touches like 50
14:10 parts of the code base across multiple
14:12 repos. It's a very complex system. And
14:14 when something breaks in the system, I
14:16 have to consider like a dozen different
14:17 edge cases. Every time I use Opus 4.7
14:20 for this, it fixes the bug, but then two
14:22 or three other things break in the
14:23 process. But I found that GPT 5.5 with
14:26 extra high usually is able to think
14:29 through these edge cases and solve it in
14:31 one or two goes. You're probably
14:32 wondering, why don't I just use GPT 5.5
14:34 extra high for everything then? The
14:36 answer is cost. It is a ridiculously
14:38 expensive model to run. I'm on the $200
14:41 month cursor ultra plan, and I've
14:42 noticed that all the credits get
14:44 evaporated after a few days of using
14:46 this model. But it's also a massive
14:47 overkill for like 90% of the tasks that
14:49 I'm working on. So, my rule of thumb is
14:51 I try to use Opus 4.7 and Claude code
14:54 for the task. But if it's struggling to
14:55 get it, or I have a hypothesis that it's
14:57 not going to get it, then I switch to
14:59 GPT 5.5 extra high with the 1 million
15:02 context window. And yes, I have the $200
15:04 month max plan and the $200 month ultra
15:07 cursor plan. So, that's $400 a month in
15:10 AI tooling, but because I make a living
15:12 building apps, that cost is totally
15:14 worth [music] it, to be honest. I'll
15:15 probably get a couple comments asking,
15:16 why don't I just use Codex instead of
15:18 cursor? I do actually have the the a
15:20 Codex plan just to test things out, but
15:22 in my experience, I just enjoy the
15:24 cursor experience a lot more where I
15:26 prefer to use it whenever possible. But,
15:28 I will say Codex has an extremely good
15:30 Mac app, and I heard there's rumors that
15:32 they're going to release an iOS [music]
15:33 app, so I'll be constantly testing it,
15:35 and if anything changes, you guys will
15:37 be the first to know. So, a quick recap
15:38 here. Here are the things that I would
15:39 steal. The first is use Xcode Build MCP
15:42 if you're building an iOS app, so you
15:44 don't have to use Xcode anymore. And if
15:45 you're building on web, use Claude with
15:47 Chrome or Cursor's web browser to do
15:49 your testing. If you have not tried to
15:51 automate the testing workflow, please do
15:53 it because it's one of those things that
15:55 doesn't click until you do it. But, now
15:56 that I've done it, I actually just
15:57 cannot go back. [music] Second, try to
15:59 use MCPs and CLIs wherever possible. It
16:01 has been game-changing in terms of
16:03 production debugging. If you haven't
16:04 done it before, it is also
16:05 game-changing. I feel like I've been
16:07 using that word 100 times in this video,
16:08 but really, these things are actually
16:10 kind of game-changing for my workflow.
16:12 Third, get some sort of AI code review
16:14 system in place like Greptile. It is
16:16 massive for me as a solo developer. I
16:18 don't have anyone to review my PRs, and
16:19 it really helps me sleep at night. Last,
16:21 spend some time looking at the Claude
16:23 code configurations. If you type {slash}
16:24 config, you should see a list of
16:26 settings. Go through all of them and
16:28 really customize Claude code to work
16:29 with your workflow. And if you haven't
16:31 tried remote control and coded on your
16:33 phone before, please do it. I will warn
16:34 you, it is kind of addicting and
16:36 probably a little unhealthy, but it has
16:37 been massive in terms of being able to
16:40 continue sessions while I'm on the go
16:42 and just not disrupting my workflow.
16:43 That's basically all the new stuff. If
16:45 you want the basics of my workflow,
16:46 again, I will leave a link in the
16:47 description to my two videos on Claude
16:50 code and Cursor. But, if you like this
16:51 content, check out my Instagram and
16:52 TikTok. I post almost every other day
16:54 about building productivity apps. And
16:55 obviously, if you like this content,
16:56 don't forget to subscribe. Thank you
16:58 guys so much for watching, and I will
16:59 see you guys in the next video.
17:01 >> [music]


---

## Source: impeccable-gpt-image-2-the-claude-code-workflow-that-designs-builds-your-site.txt

- Original path: `addintional info to add\impeccable-gpt-image-2-the-claude-code-workflow-that-designs-builds-your-site.txt`
- Size: `10342` bytes
- SHA256: `42D2FD2D26A0855AC7C5BE3B4D1B2E95D3709A41A41C3DA7699D8DE1E4417380`

---

Impeccable + GPT Image 2: The Claude Code Workflow That Designs & Builds Your Site

0:00 Hey guys, so yesterday I stumbled across
0:02 this tweet by Paul Backhaus, who is the
0:04 founder, the creator of Impeccable. And
0:06 if you don't know what Impeccable is,
0:08 it's this really great design skill that
0:09 you can apply to Cloud Code or to Codex.
0:12 It has 23 different commands. And I have
0:14 a great video on setting that up if you
0:15 want to check that out. But going back
0:17 to the tweet, he created this like Tokyo
0:19 event page with this really unique brand
0:22 style to it. All AI generated images, as
0:25 you can tell, but very, very unique
0:27 style applied to the whole site. Like
0:29 really, really nice details, like for
0:31 example, this tree at the footer or like
0:33 these circles that you see everywhere.
0:35 And basically, the process is pretty
0:37 simple. You start with the shape
0:39 command, which basically creates a brand
0:41 toolkit for you, identity palette, type,
0:43 icon language, applications, etc. And
0:45 then there's a visualize step, which is
0:47 the high-fi reference. So, it creates
0:48 like another design for you before
0:50 actually building it out. And then the
0:51 last step, which is ship, is the live
0:53 build. So, it actually then uses the
0:55 Impeccable skill to build out the site
0:57 based on these previous steps. So, you
1:00 can go ahead and click on open the live
1:01 site, and you can see that this is the
1:03 live site. I'm just scrolling through
1:04 it. See the the different images that
1:06 it's using. And this whole thing really
1:08 is a four-step process. And we're going
1:10 to take our time in today's video to
1:12 kind of go through these four steps and
1:13 build something ourselves. But guys,
1:15 before we dive into today's topic, I'd
1:17 love to invite you all to my Discord
1:18 community, the Creator Network. We get
1:20 together every single weekday to talk
1:22 about different tools and topics. So, if
1:23 you guys are interested in talking about
1:25 these types of stuff, feel free to join.
1:26 Link is down below. So, for the first
1:28 step, it says from a blank file to
1:30 design feature. So, three commands, one
1:32 arc. Impeccable teach writes a brief one
1:36 once per project. Impeccable shape
1:38 drafts a reference you can look at, and
1:40 Impeccable craft codes towards what you
1:42 can see. So, words then pictures then
1:44 code. That's the whole, you know, deal
1:46 here. So, the first command that we're
1:47 going to be using, I guess, is teach.
1:49 And that's where we're going to teach
1:50 Impeccable about what, you know, who
1:53 your product is for. But before we do
1:55 anything, I think it's important to just
1:56 get started with Impeccable. So, let's
1:58 go ahead and go to the get started
2:00 getting started uh tab over here and go
2:03 to step one install and copy this. And
2:06 then you want to open up your Claude
2:07 desktop app and you want to open up a
2:10 new folder. You can open a folder and
2:13 create a new one like this. Uh name it
2:15 whatever you want and then we can just
2:17 paste this in here and click on enter.
2:19 You can obviously just open it up open
2:22 up your terminal and run that command in
2:24 here as well if you don't want to waste
2:26 tokens. And all right, perfect. It says
2:27 that it's installed. So, the first thing
2:29 that we want to do here is we want to
2:30 write Impeccable
2:32 and then teach. And so, it's asking us a
2:34 list of different questions. And it says
2:36 that once we answer, it's going to
2:38 synthesize this into a design context
2:40 block and write it into this markdown
2:42 file so future design work in this
2:45 project stays anchored to it. And so,
2:46 these are some like really good examples
2:48 of what you can add. So, for
2:50 anti-references, we have purple
2:51 gradients, glass glassmorphism, hype,
2:55 voice, calm, clinical, no hype, and
2:57 users, SREs on call, reading fast,
2:59 often, and dark. These are pretty
3:00 interesting things to add to these
3:03 questions or to the to your answers. And
3:04 so, I basically added all of my
3:06 different answers here and I'm going to
3:07 go ahead and submit this. And this is
3:09 what I wrote in case you guys want to
3:10 check it out. All right. And it gives us
3:12 like this paragraph that shows that
3:13 there's like a conflict between
3:15 playfulness and extra-large fonts, which
3:16 is something I didn't want, but it gave
3:18 us some type of suggestion. And then it
3:20 says, you know, whenever you're ready,
3:21 you can just run this prompt and we'll
3:24 build out your site. But, before I do
3:25 that, I just want to write Impeccable
3:28 and I want to say space shape. And this
3:31 is where we want to do this specific
3:34 these these next two steps, right? Like
3:36 we want to shape the brand toolkit and
3:37 we want to visualize a landing page just
3:40 creating an image based on this brand
3:42 toolkit. So, I'm just going to copy this
3:44 part of this text over here and shape a
3:47 brand toolkit use Open AI GPT image 2 to
3:53 generate
3:55 the toolkit. And in order to do that,
3:58 you need to go to open ai.com/api
4:01 and hit log in to the API platform and
4:03 create a new secret key like this. And
4:05 before I write my key, it says, "Do you
4:07 have a brand name in mind or should I
4:08 pick?" I'm going to say that it should
4:10 pick and I'm going to specify that it
4:12 has to be GPT image 2. All right, and it
4:14 stopped generating and gave me this
4:15 really bad result because it used GPT
4:18 image 1 and it didn't use GPT image 2
4:20 because I didn't verify my organization
4:23 in this link. And that's a very
4:25 important step for you to do in order
4:26 for this to work. And the application
4:28 process was pretty much very simple. You
4:30 have to scan your ID and scan your face
4:33 and it took like maybe 2 minutes. And it
4:35 says that it's under review and I'm
4:37 going to get, you know, I'm going to see
4:39 it appearing in the next few days, but
4:40 actually it appeared in like 10 minutes.
4:42 All right, and we get this, which looks
4:44 pretty interesting. It's like it gives
4:46 us this editorial layout, but it's still
4:48 pretty playful with the colors, I guess.
4:50 I really like like this kind of like
4:52 city vibe over here. I don't know what
4:54 this is really, but it looks pretty
4:55 interesting. But this is pretty good for
4:57 a start, right? I like these colors. I
4:59 like
5:00 I like that it's minimal black and
5:01 white, but it has like these main color
5:04 highlights and it gave it a name plot.
5:06 So, plot your channel YouTube growth for
5:08 founders plot.so. And so, now the next
5:11 step here is to visualize. So, high
5:12 reference high-fi reference the
5:14 destination before the first line of
5:16 CSS. Craft code towards a concrete
5:18 image, not an abstract brief. So, we
5:21 want to basically get this and turn it
5:24 into an image of how our landing page
5:26 can look like. And then I'm going to
5:27 say, "Use the attached design as a
5:29 reference." So, it's basically I'm
5:31 giving it that landing page design that
5:32 it shows on the site. All right, and
5:34 this is what we get for landing page,
5:35 right? We have the hero section with
5:37 this new illustration over here on the
5:39 side. We have this section over here. We
5:41 have the founders with like consistent
5:43 imagery and with this like illustration
5:45 style, which looks pretty interesting.
5:46 Very interesting that it also gives us
5:48 these shapes, but you can go ahead and
5:50 tweak whatever you want. If you don't
5:51 like the shapes, you can take them away.
5:53 You can add like, I don't know, graphs
5:54 or like gradients if you wanted to. And
5:56 then it says two natural steps from here
5:58 when you want them. And this one it says
6:00 impeccable craft landing page. So, we're
6:01 going to do that. And we're going to
6:03 turn this comp into real coded HTML
6:05 using this markdown file and this image
6:09 as a source of truth. So, let's go ahead
6:10 and paste this in here, send this. All
6:13 right, it says that the landing page is
6:15 built. But if I like
6:17 uh make it larger, as you can see, it it
6:20 kind of created the graphics from
6:21 scratch and we don't want that. We want
6:23 the graphics or we want the images to be
6:25 created in uh GPT images too and then
6:29 added here to the design. So, that's
6:31 what we're going to do. All right, it
6:32 says now it's generating nine editorial
6:34 illustrations
6:36 via the GPT images too and then swapping
6:38 them into the page in place of the
6:40 inline SVG. Exactly what we wanted. But
6:42 yeah, guys, once it's done, we have
6:44 something like this where we have the
6:46 hero image on the right. All right, and
6:47 once we're done, we get our design
6:49 looking like this. And it's kind of like
6:52 in terms of the layout, it's kind of
6:53 off. I do love the images that ChatGPT
6:56 created or GPT image 2 created, but
6:58 something's kind of off with the layout
7:00 here, I'd say. And it looks pretty AI
7:02 generated. So, what I can do is I can
7:05 again hit that new skill, impeccable,
7:08 and then write polish our entire design.
7:12 And then eventually after we polish our
7:14 design, we get a bit more of a nicer,
7:17 you know, outcome.
7:19 Instead of having those different texts
7:21 in the hero section, we have now have
7:22 just two colors and one font. So, we
7:25 have YouTube growth for founders. Like I
7:27 said, I have another video on impeccable
7:29 if you guys want to like learn more
7:30 about how to do the other things, other
7:32 the the other refinements that
7:34 impeccable offers, like animations or
7:36 like colorize or delight. But you can
7:38 basically go here and continue designing
7:40 your site with Claude, animating your
7:43 site, improving the layout, making
7:45 certain sections quieter, and so on and
7:47 so forth. So, yeah, guys, hope you
7:48 enjoyed today's video. If you have any
7:50 comments and questions, please let me
7:51 know down in the comments below. And
7:52 like always, thank you all so much for
7:54 watching. Hope to see you next time.
7:55 Goodbye.


---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\algorithmic-art\LICENSE.txt`
- Size: `11345` bytes
- SHA256: `BC6B3AF2F331CBC7FB0DA1344EFB2CBE5877A31498B4D70DBC7000F3405A1362`

---


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2026 Anthropic, PBC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\brand-guidelines\LICENSE.txt`
- Size: `11345` bytes
- SHA256: `BC6B3AF2F331CBC7FB0DA1344EFB2CBE5877A31498B4D70DBC7000F3405A1362`

---


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2026 Anthropic, PBC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


---

## Source: ArsenalSC-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\ArsenalSC-OFL.txt`
- Size: `4373` bytes
- SHA256: `8DDD61B18BA2C0D0DBE4A691CF5F1A0673F473D02FA0546E67EE88C006AEFF6E`

---

Copyright 2012 The Arsenal Project Authors (andrij.design@gmail.com)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: BigShoulders-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\BigShoulders-OFL.txt`
- Size: `4397` bytes
- SHA256: `FBC746AABF0EB1847DFD92E2EFC4596D79FA897D60B8E64062A22F585508FB3F`

---

Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Boldonse-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\Boldonse-OFL.txt`
- Size: `4390` bytes
- SHA256: `45CC82AB4032273C0924025FFCF8F0665A68E1A5955E3F7247E5DAF1DEEB1326`

---

Copyright 2024 The Boldonse Project Authors (https://github.com/googlefonts/boldonse)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: BricolageGrotesque-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\BricolageGrotesque-OFL.txt`
- Size: `4403` bytes
- SHA256: `0E4F4EB8534BC66A76ACA13DD19C1F9731B2008866B29CCFF182B764649DF9B4`

---

Copyright 2022 The Bricolage Grotesque Project Authors (https://github.com/ateliertriay/bricolage)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: CrimsonPro-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\CrimsonPro-OFL.txt`
- Size: `4394` bytes
- SHA256: `35680D14547B6748B6F362A052A46D22764CE5ECCF96E18B74F567BB2EE58114`

---

Copyright 2018 The Crimson Pro Project Authors (https://github.com/Fonthausen/CrimsonPro)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: DMMono-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\DMMono-OFL.txt`
- Size: `4392` bytes
- SHA256: `BFE7842FCB88323E2981E24710C25202677385A8C75FB6A87217B275A0247AE3`

---

Copyright 2020 The DM Mono Project Authors (https://www.github.com/googlefonts/dm-mono)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: EricaOne-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\EricaOne-OFL.txt`
- Size: `4410` bytes
- SHA256: `E0DE629968B52255548D5FAFCF30B24FF9EDAE0EDA362380755A75816404D0FA`

---

Copyright (c) 2011 by LatinoType Limitada (luciano@latinotype.com), 
with Reserved Font Names "Erica One"

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: GeistMono-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\GeistMono-OFL.txt`
- Size: `4388` bytes
- SHA256: `6A873C900F584109B13AE0AAF81D6E3CF0A68751A216B03F7B6C68D547057BB4`

---

Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font.git)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Gloock-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\Gloock-OFL.txt`
- Size: `4381` bytes
- SHA256: `C0A3F3125AC491EF3D1F09F401BE4834C646562F647E44F2BCBC49F0466C656D`

---

Copyright 2022 The Gloock Project Authors (https://github.com/duartp/gloock)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: IBMPlexMono-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\IBMPlexMono-OFL.txt`
- Size: `4363` bytes
- SHA256: `5294CE778857E1EB02E830B6AB06435537D38F43055327E73D03A2D4D57D5123`

---

Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: InstrumentSans-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\InstrumentSans-OFL.txt`
- Size: `4403` bytes
- SHA256: `BF4DC6D13A8CCCD4807133C77A1EE9619A16B92CB23322258725AB6731C2F6E5`

---

Copyright 2022 The Instrument Sans Project Authors (https://github.com/Instrument/instrument-sans)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Italiana-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\Italiana-OFL.txt`
- Size: `4394` bytes
- SHA256: `8373B11312ACE78C4CEC2E8F9F6AA9F2330601107DAC7BCF899C6F2DBD40C5A5`

---

Copyright (c) 2011, Santiago Orozco (hi@typemade.mx), with Reserved Font Name "Italiana".

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: JetBrainsMono-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\JetBrainsMono-OFL.txt`
- Size: `4399` bytes
- SHA256: `A76ABF002C49097D146E86740A3105A5D00450B1592E820A1109A8C5680CD697`

---

Copyright 2020 The JetBrains Mono Project Authors (https://github.com/JetBrains/JetBrainsMono)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Jura-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\Jura-OFL.txt`
- Size: `4380` bytes
- SHA256: `EAF9BDB675F6D87E5FEB88199AB3EA581D3BD2082F426E384FA9C394576D7260`

---

Copyright 2019 The Jura Project Authors (https://github.com/ossobuffo/jura)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: LibreBaskerville-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\LibreBaskerville-OFL.txt`
- Size: `4449` bytes
- SHA256: `55959EEF5B0C3B2E3C1C7631B8FF0F9447D75DE20F29CFA7DB5BCFB026763343`

---

Copyright 2012 The Libre Baskerville Project Authors (https://github.com/impallari/Libre-Baskerville) with Reserved Font Name Libre Baskerville.

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Lora-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\Lora-OFL.txt`
- Size: `4423` bytes
- SHA256: `62E37A82D3F1EF2A70712885FA8B3144B65FD144D8E748D6196B690A354D792C`

---

Copyright 2011 The Lora Project Authors (https://github.com/cyrealtype/Lora-Cyrillic), with Reserved Font Name "Lora".

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: NationalPark-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\NationalPark-OFL.txt`
- Size: `4399` bytes
- SHA256: `81C6C71D83B5B45D7344F96DF12BB4A2477A5B092A9144757EE1D0F50F855175`

---

Copyright 2025 The National Park Project Authors (https://github.com/benhoepner/National-Park)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: NothingYouCouldDo-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\NothingYouCouldDo-OFL.txt`
- Size: `4363` bytes
- SHA256: `7C2A6970584DDAD04919816163746F83B378078015899B18468B40F05E9CE128`

---

Copyright (c) 2010, Kimberly Geswein (kimberlygeswein.com)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Outfit-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\Outfit-OFL.txt`
- Size: `4389` bytes
- SHA256: `1945B62CD76DA9A3051A1660DDE72AFAA64FFC2666D30E7A78356D651653BA2F`

---

Copyright 2021 The Outfit Project Authors (https://github.com/Outfitio/Outfit-Fonts)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: PixelifySans-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\PixelifySans-OFL.txt`
- Size: `4395` bytes
- SHA256: `7F54D1D9F1AE1BA9F2722F978145F90324FEA34CA3C2304B3A29CFA96AC6037E`

---

Copyright 2021 The Pixelify Sans Project Authors (https://github.com/eifetx/Pixelify-Sans)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: PoiretOne-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\PoiretOne-OFL.txt`
- Size: `4366` bytes
- SHA256: `2EAF541F7EB8B512E4C757A5212060ABF5B6EDFEF230E9D7640BF736B315C33A`

---

Copyright (c) 2011, Denis Masharov (denis.masharov@gmail.com)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: RedHatMono-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\RedHatMono-OFL.txt`
- Size: `4394` bytes
- SHA256: `435FBFB7E66988B2A06686A4CB966FAEC733F35D8FE100A1601573C27F3E0BB8`

---

Copyright 2024 The Red Hat Project Authors (https://github.com/RedHatOfficial/RedHatFont)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Silkscreen-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\Silkscreen-OFL.txt`
- Size: `4394` bytes
- SHA256: `6B849745119BBE85EC01FD080C9CD50234DA9F52AC6E48B55D1A424A0C4D7CA9`

---

Copyright 2001 The Silkscreen Project Authors (https://github.com/googlefonts/silkscreen)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: SmoochSans-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\SmoochSans-OFL.txt`
- Size: `4396` bytes
- SHA256: `74C9C4EB88E891483E1B7BC54780B452CBF4F4DF66D4E71881D7569AA2130749`

---

Copyright 2016 The Smooch Sans Project Authors (https://github.com/googlefonts/smooch-sans)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Tektur-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\Tektur-OFL.txt`
- Size: `4385` bytes
- SHA256: `3F1466CB5438F31782EEB6E895F3A655BC4D090E24263E331F555357D1CB734E`

---

Copyright 2023 The Tektur Project Authors (https://www.github.com/hyvyys/Tektur)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: WorkSans-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\WorkSans-OFL.txt`
- Size: `4397` bytes
- SHA256: `ACE8C22A3326318B54E67C3691857929634205533F454A70EF5A3473DDB2E2BA`

---

Copyright 2019 The Work Sans Project Authors (https://github.com/weiweihuanghuang/Work-Sans)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: YoungSerif-OFL.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\canvas-fonts\YoungSerif-OFL.txt`
- Size: `4398` bytes
- SHA256: `CDCB8039606B40A027A6D24586EC62D5FE29C701343D82A048C829CB28A3DD28`

---

Copyright 2023 The Young Serif Project Authors (https://github.com/noirblancrouge/YoungSerif)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\canvas-design\LICENSE.txt`
- Size: `11345` bytes
- SHA256: `BC6B3AF2F331CBC7FB0DA1344EFB2CBE5877A31498B4D70DBC7000F3405A1362`

---


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2026 Anthropic, PBC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\claude-api\LICENSE.txt`
- Size: `11345` bytes
- SHA256: `BC6B3AF2F331CBC7FB0DA1344EFB2CBE5877A31498B4D70DBC7000F3405A1362`

---


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2026 Anthropic, PBC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\docx\LICENSE.txt`
- Size: `1467` bytes
- SHA256: `79F6D8F5B427252FA3B1C11ECDBDB6BF610B944F7530B4DE78F770F38741CFAA`

---

© 2025 Anthropic, PBC. All rights reserved.

LICENSE: Use of these materials (including all code, prompts, assets, files,
and other components of this Skill) is governed by your agreement with
Anthropic regarding use of Anthropic's services. If no separate agreement
exists, use is governed by Anthropic's Consumer Terms of Service or
Commercial Terms of Service, as applicable:
https://www.anthropic.com/legal/consumer-terms
https://www.anthropic.com/legal/commercial-terms
Your applicable agreement is referred to as the "Agreement." "Services" are
as defined in the Agreement.

ADDITIONAL RESTRICTIONS: Notwithstanding anything in the Agreement to the
contrary, users may not:

- Extract these materials from the Services or retain copies of these
  materials outside the Services
- Reproduce or copy these materials, except for temporary copies created
  automatically during authorized use of the Services
- Create derivative works based on these materials
- Distribute, sublicense, or transfer these materials to any third party
- Make, offer to sell, sell, or import any inventions embodied in these
  materials
- Reverse engineer, decompile, or disassemble these materials

The receipt, viewing, or possession of these materials does not convey or
imply any license or right beyond those expressly granted above.

Anthropic retains all right, title, and interest in these materials,
including all copyrights, patents, and other intellectual property rights.



---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\frontend-design\LICENSE.txt`
- Size: `10174` bytes
- SHA256: `0D542E0C8804E39AA7F37EB00DA5A762149DC682D7829451287E11B938E94594`

---


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS



---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\internal-comms\LICENSE.txt`
- Size: `11345` bytes
- SHA256: `BC6B3AF2F331CBC7FB0DA1344EFB2CBE5877A31498B4D70DBC7000F3405A1362`

---


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2026 Anthropic, PBC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\pdf\LICENSE.txt`
- Size: `1467` bytes
- SHA256: `79F6D8F5B427252FA3B1C11ECDBDB6BF610B944F7530B4DE78F770F38741CFAA`

---

© 2025 Anthropic, PBC. All rights reserved.

LICENSE: Use of these materials (including all code, prompts, assets, files,
and other components of this Skill) is governed by your agreement with
Anthropic regarding use of Anthropic's services. If no separate agreement
exists, use is governed by Anthropic's Consumer Terms of Service or
Commercial Terms of Service, as applicable:
https://www.anthropic.com/legal/consumer-terms
https://www.anthropic.com/legal/commercial-terms
Your applicable agreement is referred to as the "Agreement." "Services" are
as defined in the Agreement.

ADDITIONAL RESTRICTIONS: Notwithstanding anything in the Agreement to the
contrary, users may not:

- Extract these materials from the Services or retain copies of these
  materials outside the Services
- Reproduce or copy these materials, except for temporary copies created
  automatically during authorized use of the Services
- Create derivative works based on these materials
- Distribute, sublicense, or transfer these materials to any third party
- Make, offer to sell, sell, or import any inventions embodied in these
  materials
- Reverse engineer, decompile, or disassemble these materials

The receipt, viewing, or possession of these materials does not convey or
imply any license or right beyond those expressly granted above.

Anthropic retains all right, title, and interest in these materials,
including all copyrights, patents, and other intellectual property rights.



---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\pptx\LICENSE.txt`
- Size: `1467` bytes
- SHA256: `79F6D8F5B427252FA3B1C11ECDBDB6BF610B944F7530B4DE78F770F38741CFAA`

---

© 2025 Anthropic, PBC. All rights reserved.

LICENSE: Use of these materials (including all code, prompts, assets, files,
and other components of this Skill) is governed by your agreement with
Anthropic regarding use of Anthropic's services. If no separate agreement
exists, use is governed by Anthropic's Consumer Terms of Service or
Commercial Terms of Service, as applicable:
https://www.anthropic.com/legal/consumer-terms
https://www.anthropic.com/legal/commercial-terms
Your applicable agreement is referred to as the "Agreement." "Services" are
as defined in the Agreement.

ADDITIONAL RESTRICTIONS: Notwithstanding anything in the Agreement to the
contrary, users may not:

- Extract these materials from the Services or retain copies of these
  materials outside the Services
- Reproduce or copy these materials, except for temporary copies created
  automatically during authorized use of the Services
- Create derivative works based on these materials
- Distribute, sublicense, or transfer these materials to any third party
- Make, offer to sell, sell, or import any inventions embodied in these
  materials
- Reverse engineer, decompile, or disassemble these materials

The receipt, viewing, or possession of these materials does not convey or
imply any license or right beyond those expressly granted above.

Anthropic retains all right, title, and interest in these materials,
including all copyrights, patents, and other intellectual property rights.



---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\skill-creator\LICENSE.txt`
- Size: `11345` bytes
- SHA256: `BC6B3AF2F331CBC7FB0DA1344EFB2CBE5877A31498B4D70DBC7000F3405A1362`

---


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2026 Anthropic, PBC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\slack-gif-creator\LICENSE.txt`
- Size: `11345` bytes
- SHA256: `BC6B3AF2F331CBC7FB0DA1344EFB2CBE5877A31498B4D70DBC7000F3405A1362`

---


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2026 Anthropic, PBC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


---

## Source: requirements.txt

- Original path: `addintional info to add\skills-main\skills\slack-gif-creator\requirements.txt`
- Size: `66` bytes
- SHA256: `EDC7108A0C6B56183566C71EE96830F6DC791E3B41952112D9CB56B33A6BD757`

---

pillow>=10.0.0
imageio>=2.31.0
imageio-ffmpeg>=0.4.9
numpy>=1.24.0


---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\theme-factory\LICENSE.txt`
- Size: `11345` bytes
- SHA256: `BC6B3AF2F331CBC7FB0DA1344EFB2CBE5877A31498B4D70DBC7000F3405A1362`

---


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2026 Anthropic, PBC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\webapp-testing\LICENSE.txt`
- Size: `11345` bytes
- SHA256: `BC6B3AF2F331CBC7FB0DA1344EFB2CBE5877A31498B4D70DBC7000F3405A1362`

---


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2026 Anthropic, PBC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\web-artifacts-builder\LICENSE.txt`
- Size: `11345` bytes
- SHA256: `BC6B3AF2F331CBC7FB0DA1344EFB2CBE5877A31498B4D70DBC7000F3405A1362`

---


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2026 Anthropic, PBC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


---

## Source: LICENSE.txt

- Original path: `addintional info to add\skills-main\skills\xlsx\LICENSE.txt`
- Size: `1467` bytes
- SHA256: `79F6D8F5B427252FA3B1C11ECDBDB6BF610B944F7530B4DE78F770F38741CFAA`

---

© 2025 Anthropic, PBC. All rights reserved.

LICENSE: Use of these materials (including all code, prompts, assets, files,
and other components of this Skill) is governed by your agreement with
Anthropic regarding use of Anthropic's services. If no separate agreement
exists, use is governed by Anthropic's Consumer Terms of Service or
Commercial Terms of Service, as applicable:
https://www.anthropic.com/legal/consumer-terms
https://www.anthropic.com/legal/commercial-terms
Your applicable agreement is referred to as the "Agreement." "Services" are
as defined in the Agreement.

ADDITIONAL RESTRICTIONS: Notwithstanding anything in the Agreement to the
contrary, users may not:

- Extract these materials from the Services or retain copies of these
  materials outside the Services
- Reproduce or copy these materials, except for temporary copies created
  automatically during authorized use of the Services
- Create derivative works based on these materials
- Distribute, sublicense, or transfer these materials to any third party
- Make, offer to sell, sell, or import any inventions embodied in these
  materials
- Reverse engineer, decompile, or disassemble these materials

The receipt, viewing, or possession of these materials does not convey or
imply any license or right beyond those expressly granted above.

Anthropic retains all right, title, and interest in these materials,
including all copyrights, patents, and other intellectual property rights.



---

## Source: llms.txt

- Original path: `addintional info to add\taste-skill-main\skills\llms.txt`
- Size: `1846` bytes
- SHA256: `C34DC218FE2940A3944967ADD63E4220E43975F5B15B31B8A280E73055484301`

---

taste-skill: The default design skill (v2 experimental). Read the brief, infer the design language, tune three dials (VARIANCE / MOTION / DENSITY), and ship landing pages, portfolios, and redesigns that do not look templated. Brief inference, design-system map, em-dash ban, GSAP code skeletons, hard-rules pre-flight check. Actively iterating toward v2.0.0 stable.
taste-skill-v1: The original v1 of taste-skill, preserved for projects depending on its exact behavior. The current default is `design-taste-frontend` (v2 experimental).
gpt-taste: Elite Awwwards-level frontend design and GSAP motion skill for premium, deterministic, anti-slop UI generation.
image-to-code-skill: Image-first frontend skill for generating premium website references, deeply analyzing them, and implementing code to match.
imagegen-frontend-web: Image-generation-only skill for creating premium website design reference images. Does not write code.
imagegen-frontend-mobile: Image-generation-only skill for creating premium mobile app screen concepts and flows. Does not write code.
brandkit: Image-generation-only skill for creating premium brand-kit overview images with logo concepts, identity systems, color palettes, typography, and mockups. Does not write code.
redesign-skill: For upgrading existing projects by auditing and fixing design problems.
soft-skill: Focuses on an expensive, soft UI look with premium fonts, whitespace, depth, and smooth animations.
output-skill: Prevents AI from being lazy, skipping code blocks, or using placeholder comments.
minimalist-skill: Enforces clean, editorial-style interfaces (Notion/Linear style) with strict monochrome palettes.
brutalist-skill: Raw mechanical interfaces, Swiss typography, extreme scale contrast. (Beta)
stitch-skill: Google Stitch-compatible semantic design rules for premium AI UI generation.



---

## Source: the-best-local-agentic-coding-workflow-complete-guide.txt

- Original path: `addintional info to add\the-best-local-agentic-coding-workflow-complete-guide.txt`
- Size: `70360` bytes
- SHA256: `D5A0ADD7FF17F6368D006C593FF6D5DC79FEAABAB4D11A01193A172F29ACF64E`

---

The Best Local Agentic Coding Workflow (Complete Guide)

0:00 AI pricing is outrageous. Nearly all the
0:02 monthly plans are completely gutted,
0:04 which means you're stuck paying
0:05 outrageous API pricing, which is why I
0:07 decided to go down the rabbit hole of
0:09 what it would look like to set up a
0:10 local AI that runs entirely on my
0:12 system, completely private, incredibly
0:14 fast, and it's going to do everything,
0:16 not just chat. It's going to have full
0:18 autocomplete, so it's going to
0:19 autocomplete anything that I want, and
0:21 it has full agent mode where I can set
0:23 up inside of VS Code my own agents I
0:25 want to work with, and I can even use
0:26 tools like the pie command line tool or
0:28 any other open code style agent run with
0:30 this. And in this video, I'm going to
0:31 show you how to set all of this up. And
0:33 I'm not just going to show you how to
0:34 set it up by telling you what to do. I'm
0:36 actually going to be explaining how
0:37 every single concept works. So, it
0:39 doesn't matter when you watch this
0:40 video, if you watch it right when it
0:41 comes out or a year from now, I'm going
0:43 to teach you the concepts you need to
0:44 understand, so it doesn't matter what
0:46 model you work with and what type of
0:48 provider you work with, you can know how
0:49 to set everything up perfectly for your
0:51 exact situation and your exact hardware.
0:53 And this will actually work no matter
0:54 how powerful or weak your hardware is.
0:56 I'm going to show you all the different
0:57 things you can configure. This is
0:58 essentially a local AI masterclass.
1:02 >> [music]
1:04 >> Welcome back to Web Dev Simplified. My
1:06 name's Kyle, and my job is to simplify
1:07 the web for you. And before we start
1:09 diving into setting up our local AI
1:10 models and finding which models we want
1:12 to use, we first need to understand how
1:14 these models actually run, so we know
1:16 how we can set them up most efficiently
1:18 on our system. So, a model is mostly
1:20 composed of a few different things that
1:22 we need to keep in mind for when we're
1:24 setting it up. We have this model, and
1:26 almost every model, if you look at them,
1:27 is going to have a some number of
1:29 parameters. You can see this is 862
1:31 billion parameters. This is 1 billion
1:33 parameters, and this has 128 billion
1:35 parameters. So, different models have
1:37 more or less parameters, so that's one
1:39 thing we care about.
1:40 And another thing that we're going to be
1:41 caring about for our models is going to
1:43 be the context size. So, we have
1:45 parameters, and we have our context. And
1:48 the context is just essentially how much
1:49 information can you fit inside your
1:51 model at one time. Newer and newer
1:53 models tend to have larger and larger
1:55 maximum context windows, which means
1:57 they can hold more information in them,
1:59 which means they forget things less
2:00 frequently and are overall better at
2:01 larger running tasks. So, when you
2:04 decide to get a model, you need to first
2:06 find out how many parameters that model
2:07 has and what type of context you want to
2:09 put inside that model because that'll
2:11 determine how large the model is. For
2:13 example, this model with a 862 billion
2:16 parameters, that is the absolutely
2:17 massive model that you are not going to
2:19 be able to run anywhere on your local
2:21 hardware. It's just way, way too big.
2:23 You need to have a much smaller model
2:25 that to run it on your hardware
2:26 properly. Now, all of these models,
2:27 they're going to be running on your GPU,
2:29 your graphics card inside your computer.
2:32 So, let's just say that we have this box
2:33 right here and this box represents our
2:35 GPU. And our GPU has a lots of different
2:37 statistics inside of it like how fast it
2:39 runs and so on, but the most important
2:41 statistic for you to take account of is
2:43 the VRAM. That is the video RAM or the
2:45 RAM that's inside your graphics card.
2:47 It's essentially how much memory your
2:48 graphics card has dedicated to it. Now,
2:51 if you're on a Mac computer, they have
2:53 what's called unified memory on their
2:55 newer models and that means that they
2:56 share the same memory between their
2:58 graphics card and their processor and
3:00 all the rest of the computer. So, that
3:01 means you can often get higher RAM
3:03 numbers while a cheaper price. While
3:05 with a dedicated machine where you have
3:07 a dedicated graphics card and dedicated
3:09 RAM, you're generally going to have a
3:10 smaller amount of VRAM to work with
3:12 because it's dedicated just to the
3:13 graphics card, but it'll often be
3:15 slightly faster. But for the most part,
3:17 the most important thing is how much RAM
3:18 you have because when you take a model
3:20 and you try to load that model on your
3:21 computer, what it does is it takes this
3:23 entire model, all the parameters,
3:24 everything and it tries to shove it
3:26 directly into your graphics card on your
3:27 computer inside of that RAM. So, let's
3:30 say that you have a GPU that has 16 GB
3:33 of RAM inside of it. That means that you
3:35 can only fit a model that can fit within
3:36 this 16 GB of RAM and then includes all
3:39 the additional context and everything
3:40 that model needs to run based on your
3:42 code base or whatever else you're trying
3:43 to do. Now, let's say for example that
3:45 you have some model that you're loading
3:46 and it actually is larger than 16 GB. It
3:48 goes past your GPU's limit. What happens
3:51 is it'll fill your GPU as much as
3:53 possible, so it'll fill that 16 GB, and
3:56 then it's going to go off to the rest of
3:58 your computer where you have your normal
3:59 default RAM, and it's going to fill in
4:02 the overflow inside this section as
4:04 well. So, it's going to take all that
4:06 extra overflow and put it directly
4:07 inside your RAM here. And this is why we
4:09 have really expensive graphics cards and
4:11 RAM right now because all the AI
4:13 processes, they need graphics cards and
4:15 they need RAM. So, essentially it's
4:17 being raised up in price because all the
4:19 AI model producers are trying to get as
4:21 much graphics cards and RAM as they can
4:23 to support their models. Cuz the bigger
4:25 models need bigger graphics card RAM,
4:27 and they need bigger computer RAM to be
4:28 able to store all of that really complex
4:30 information. So, really the key takeaway
4:32 is when you're trying to look at what
4:33 model is going to work for you, you need
4:35 to take into account how much RAM your
4:36 graphics card has, as well as how much
4:38 RAM your computer overall has. These are
4:41 the two different things that you really
4:42 need to focus on. And again, if you're
4:43 on a system with unified RAM like a Mac
4:45 computer, that's going to be the same
4:47 number. You're going to not have this
4:48 computer RAM over here. Everything is
4:50 going to be RAM that can be used for the
4:51 graphics card, so it's most likely going
4:53 to mean that you have more space on your
4:55 graphics card, but it's shared between
4:56 your computer. So, once you hit the
4:57 limit, there's no overflow. That's just
4:59 the maximum you can do. Now, if you're
5:00 on a Windows machine and you're unsure
5:02 how much RAM you have inside your
5:03 graphics card, you can just pull up the
5:05 task manager, go to this performance
5:06 section, and where it says dedicated GPU
5:08 memory, you can see mine has 16 GB
5:10 memory. I have a quite new graphics card
5:12 that's a little bit higher end. Yours
5:13 would say whatever number it is. And
5:15 then you have your actual memory here.
5:16 This is your system computer where all
5:18 that overflow space is going to go. And
5:20 I have some pretty high-end specs cuz I
5:22 use my computer for video editing, so it
5:24 needs some higher-end specs. But I'll
5:25 show you how this will work on lower-end
5:26 specs as well. So, now let's figure out
5:28 how do we get this set up now that we
5:30 understand kind of how this model works
5:32 on our computer.
5:33 The best and easiest way to get started
5:35 first, I recommend, is going to be LM
5:37 Studio because it has a really good user
5:38 interface that makes it really easy to
5:40 understand all these more complex things
5:42 about RAM and so on. Everything is
5:43 explained really well inside of here.
5:45 So, I would recommend downloading LM
5:46 Studio. And once you have that
5:48 downloaded, a really good place to find
5:50 models is going to be Hugging Face. But,
5:52 the nice thing about LM Studio is they
5:53 have their own model browser inside of
5:55 it. Now, when you first download LM
5:56 Studio, it's probably going to look
5:57 something like this on your screen, and
5:59 you're not going to be able to do
6:00 anything. When you try to click this up
6:01 here to select a model, yours is going
6:03 to be blank cuz you don't have any
6:04 models at all loaded on your computer.
6:06 So, what you need to do is you need to
6:07 go to this tab over here on the left
6:09 where it's the actual model tab right
6:10 here. If you click on that, it's going
6:11 to open up a search for you where you
6:13 can search for all the different models
6:14 that you possibly could want. Now, if
6:15 you know model is a good fit for you,
6:17 you can just immediately search for it
6:18 here. So, for example, I know Qwen has
6:20 relatively good coding-related models.
6:22 So, I can search for Qwen, and I can see
6:24 kind of the most recent Qwen models that
6:25 are available right now. And you can see
6:27 it tells me what the model name is. And
6:29 that 27B, that's how many parameters
6:31 there are. This one's 35B for 35
6:32 billion. And this one's 9B for 9
6:34 billion. And if you look over here on
6:36 the right-hand side, it actually tells
6:37 me an estimate of how much space that's
6:39 going to take up in my RAM of my actual
6:41 graphics card. So, you can see here,
6:43 this Qwen 3.6 model with 27 billion
6:46 parameters is estimated to take up about
6:48 17.48
6:49 GB of RAM on my computer. Now, my
6:52 graphics card doesn't have that much
6:53 RAM, so it would have to overflow onto
6:55 my normal system RAM. If you had more
6:58 RAM than 17, whatever GB, you could load
7:00 the entire model. But, if you take a
7:02 look, we also have a 9 billion parameter
7:04 version of a Qwen 3.5 model, and you can
7:06 see that one is significantly smaller.
7:08 It only takes 6.55 GB, which means I can
7:11 load the entire thing on my graphics
7:12 card, no problem. And generally, the
7:14 smaller the model, the less good it's
7:16 going to be at just general tasks that
7:18 you give it, but the faster it's going
7:20 to run cuz you can load the entire thing
7:21 in your graphics card. Ideally, if you
7:23 can load the entire model on your
7:25 graphics card, it is going to be way,
7:26 way, way faster. But, later in this
7:28 video, I'm going to show you how you can
7:29 get around that with certain models that
7:31 are available.
7:32 Another thing that's really important to
7:33 understand is you'll notice there's
7:34 multiple types of this model with this
7:36 like Q4, Q6, Q8, and so on. This stands
7:39 for quantization. Essentially, what that
7:41 means is that they've taken the full
7:43 large size of this model and they've
7:45 essentially paired it down to be smaller
7:47 by essentially rounding certain numbers
7:48 that would normally be longer. They've
7:50 rounded them to like whole numbers or
7:51 smaller decimal place numbers,
7:53 essentially shrinking the size of the
7:54 model. That does slightly decrease the
7:57 performance that you get out of the
7:58 model, but the benefit is you can see
8:00 the size drastically decrease. As you
8:01 can see from Q8 to Q4, that's
8:03 essentially halving the size of the
8:05 model. And a really good place to start
8:07 is going to be models that are labeled
8:08 as Q4. That's essentially four levels of
8:11 quantization. 16 is like the base level,
8:14 so four, that's 16 / 4. That's
8:17 essentially four levels of quantization
8:19 from that base level 16 model. Now,
8:21 another thing that's important when
8:22 you're looking at models to try to
8:23 download is to figure out what
8:24 capabilities that model has. And these
8:26 are going to be listed right here if
8:27 you're in LM Studio. You can see that
8:28 this model has vision, tool use, and
8:30 reasoning capability. Vision just means
8:32 that it can process images. You can give
8:34 it an image and it can read that image
8:35 and look at it. Tool use just means that
8:37 it can call tools properly inside of
8:39 like agentic coding workflows, and
8:41 reasoning means that the model is a
8:42 thinking model. And this generally means
8:44 that it'll spend time thinking and
8:45 working through things. Generally, it'll
8:47 be a little bit slower, but it'll
8:48 generally give you better output. And if
8:50 you're doing agentic coding, you
8:51 definitely want to make sure that tool
8:52 use is enabled in your model, and
8:54 generally you want to have reasoning as
8:56 well cuz it's going to give you much
8:57 better output cuz it'll spend time
8:58 thinking through what needs to be done,
9:00 which is great for more complicated
9:02 tasks. Unfortunately, these reasoning
9:04 models generally tend to be larger, but
9:05 that is okay cuz I can actually show you
9:07 how you can get this to work a little
9:08 quicker. So, essentially, once you find
9:10 a model you want inside of LM Studio,
9:11 you can just click on that model and you
9:13 can click download, and that's going to
9:14 download that model in the background.
9:16 And once you've done that, then you can
9:17 go over to this third panel right here,
9:19 which is where all of your different
9:20 models are, and you can see all the
9:21 models you have downloaded. Now, I have
9:23 quite a few different models downloaded
9:24 from various different testing purposes,
9:26 but the ideal thing is to try to find a
9:28 model that's going to be best suited for
9:30 what you want to do inside your coding
9:32 workflow, and then try to find one
9:33 that's small enough to fit within what
9:35 you're trying to do. And if you don't
9:37 see the models that you want inside this
9:38 list right here, you can actually go to
9:40 Hugging Face to find a much larger list
9:42 of models. So, here I am on the Hugging
9:44 Face site, and one really nice thing
9:45 that you can do is you can sort by
9:47 trending. That'll generally give you
9:48 some of the more popular models at the
9:49 top. And if you want to make sure it has
9:51 reasoning, you can just toggle this
9:52 inference available, and that'll only
9:53 show you models that have that reasoning
9:55 capability inside them. You can also
9:57 fine-tune like how many parameters the
9:58 model has, so you can hopefully get one
10:00 that fits within your graphics card. But
10:02 from here, this can help you find some
10:03 of the more popular models. Or just
10:05 Googling and asking like, "Hey, what are
10:06 some popular models for coding agents
10:08 that are open source and local?" That'll
10:10 give you really good ideas. Once you
10:11 find a model that you want to work with,
10:13 you're going to click on that model, and
10:14 you can see over here where it says use
10:16 this model. Click on that, and if you
10:17 scroll down, you'll see the section at
10:18 the very bottom that says browse
10:20 quantizations. This is going to give you
10:22 the smaller versions of those models,
10:23 cuz these are way too large to work with
10:25 locally. So, when you click on that,
10:27 it's then going to give you a massive
10:28 list of all the quantizations. Now,
10:30 Unsloth is really great at creating
10:32 high-performing quantizations that are
10:33 small, yet still quite powerful. So, I
10:35 generally recommend going with them, but
10:37 really whichever one is going to be at
10:38 the top here is probably the best bet if
10:40 you're sorting by trending. So, if we
10:42 click on that, now if we scroll down,
10:43 you can see there's a massive list over
10:45 here that essentially tells you the
10:46 exact size of this model and how much
10:49 quantization is done. So, you can see
10:50 here 16-bit, that's just the raw as is,
10:53 no changes made at all. That's the full
10:55 model. 8-bit is essentially half the
10:57 size of the full model, cuz we've done
10:58 like one level of quantization. And
11:00 generally, 4-bit is kind of a good happy
11:03 sweet spot. That's essentially that four
11:05 levels of quantization that I talked
11:06 about, where it can shrink your model
11:07 down drastically. But you can even
11:09 sometimes get away with 3-bit or even
11:11 2-bit quantization for some of these
11:12 larger models to make sure that they
11:13 properly fit on your graphics card. Now,
11:15 let's say for example that I wanted to
11:17 download this 3-bit model. I could just
11:19 click on this model, and again, there's
11:20 this use this model button. Scroll down,
11:22 and you can find Hopefully, if you click
11:24 view all, maybe Here it is, LM Studio.
11:27 Click on that, and just say you want to
11:28 open this in LM Studio. And essentially,
11:29 what that's going to do is open up your
11:31 LM Studio, and it's going to give you a
11:32 link to download that exact model. So,
11:34 let's just try that out. We'll click on
11:36 that open LM Studio. And you can see
11:38 here immediately it's brought me to the
11:39 page where I can click download and
11:40 it'll download that model. So, this is
11:42 how you can fine-tune exactly what
11:43 models you get access to inside your
11:45 system. So, then once you have a list of
11:47 all your different models that you want
11:48 available on here, that means they're
11:50 downloaded on your computer, but they're
11:51 currently not loaded up and able to be
11:53 used. So, let's talk about how we can
11:55 make that model usable. We can just go
11:57 into this chat window here and you can
11:58 see at the top it says select model to
12:00 load. And from here I can choose any
12:02 model I want. Now, I 100% recommend at
12:05 the bottom here where it says manually
12:06 choose model load parameters, toggle
12:08 that on cuz that's going to allow you to
12:09 fine-tune exactly the parameters of your
12:12 model that you're choosing to be able to
12:13 use. So, let's say that I wanted to use
12:15 this model GPT-OSS-20B.
12:18 This is a model that is quite large.
12:19 It's got that 20 billion parameters. As
12:21 you can see here, it's around 11 GB for
12:23 the quantization that I have downloaded.
12:25 And since I have 16 GB of RAM in my
12:27 graphics card, I should be able to fit
12:29 this entire model on my graphics card.
12:31 So, when I click on this, you'll see I
12:33 get a massive list of all these
12:34 different options. This is what I talked
12:36 about when I said that you wanted to
12:37 have that enable advanced options.
12:39 That's what gives you access to all
12:40 these options. For the most part, I
12:42 wouldn't worry about very many of them.
12:43 Just make sure that this GPU offload, if
12:46 you can fit the entire model on your
12:47 graphics card, max this out to the very
12:49 top. That just makes sure that the
12:50 entire model loads on your graphics card
12:53 and not on your CPU or system RAM. This
12:55 is going to give you the most amount of
12:56 speed possible. Next, you can modify
12:59 your context length. And you'll notice
13:01 as I increase this context length, this
13:03 model up here for the total amount of
13:04 space it takes up is going to increase
13:06 as you can see. Now, this isn't 100%
13:08 accurate. If I max out this context
13:10 length, it's probably going to take up
13:11 more space than I have on my graphics
13:13 card. So, I'd recommend trying to set
13:14 this in a good middle ground. Now, if
13:16 you're just doing basic chat, you don't
13:17 really need that big of a context, so we
13:19 can just leave it down here somewhere
13:20 like maybe 5 or 10,000. And then I can
13:22 click that I want to load this model.
13:24 So, just make sure that GPU offload is
13:25 maxed out if you can fit it, and then
13:27 set the context to somewhere that works
13:29 for you. And you can play around with
13:30 this however you need to make sure it
13:31 fits within your computer. So, when I
13:33 click load model, that's going to load
13:35 up the model. You can see that it's
13:36 giving me that bar saying that the model
13:37 is loading. And once it's finished
13:39 loading, I can actually chat with this
13:40 model. For example, I can come in here
13:41 and say, "Hi, who are you?"
13:44 And now it's going to hopefully respond
13:45 to me. Of course, it doesn't look like
13:47 it's responding. That's cuz sometimes
13:48 when you start a new chat, you need to
13:49 choose what model you want for that
13:51 chat. So, let's choose that one that
13:52 we've already loaded. And now I can
13:54 click this, send it along, and you can
13:55 see it's responding incredibly quickly,
13:57 124 tokens per second. And that's
13:59 because this entire model fits directly
14:01 inside my graphics card. If I actually
14:02 pull this over and I show you the stats
14:04 for this, you can see this dedicated GPU
14:06 memory, it's nearly maxed out. I
14:08 essentially have as much model as I can
14:10 load it into my graphics card, but
14:12 there's nothing spilling out. You can
14:13 see, like I said, it's pretty much maxed
14:15 out, which is kind of where you want to
14:16 be. You want to be generally towards the
14:17 top, but not entirely maxed out.
14:19 Otherwise, as your context fills up,
14:21 it'll spill over into your system
14:22 memory, and that's going to slow you
14:24 down drastically. So, with everything
14:26 fitting in my graphics card, we have an
14:27 incredibly quick model that's working
14:29 and able to do whatever we want with it.
14:30 And since this is a reasoning model with
14:32 thinking capabilities, I can modify, for
14:34 example, how much thinking I want the
14:36 model to do for various responses. And
14:37 you can see down here I get my full how
14:39 much of my context is being used. Now, I
14:41 want to show you what would happen if,
14:43 for example, you load too much of a
14:44 model that you can't actually fit on
14:46 your entire graphics card. So, let's
14:47 come back here. We can click this eject
14:49 button. That essentially unloads that
14:51 model. And if we take a look at my
14:52 system memory, you can see it's dropped
14:54 back down to a normal level cuz this
14:56 isn't being loaded at all. And now let's
14:58 go ahead. We're going to select that
14:59 exact same model, but I'm going to max
15:00 out the context as large as possible.
15:02 This is most likely going to overflow
15:04 how much space I have available. So, if
15:06 we take a look at this chart, you'll see
15:07 as it's loading, it's slowly increasing.
15:09 And as it loads more, it's probably
15:10 going to max me out. You can see here,
15:12 I'm essentially maxed out. And my system
15:14 memory, you can see has made a huge
15:15 spike cuz it's having to put a lot of
15:17 additional information in that system
15:19 memory. This is going to slow down the
15:21 actual model. So, if we say give me some
15:23 more information,
15:26 this is probably going to be much slower
15:27 response. As you can see, it took longer
15:29 to think, and you can see that the
15:30 amount of tokens coming out are at a
15:31 much, much slower rate. And if I finally
15:34 let this finish, you're going to see
15:35 that the tokens per second is probably
15:37 going to be somewhere like 20 or 30
15:38 tokens per second instead of that
15:40 100-plus that we were getting on this
15:41 one. So, that's kind of the big
15:43 difference between if you can fit it all
15:44 in your graphics card or not. Ideally,
15:46 you want to fit as much into your
15:47 graphics card as you can because
15:49 otherwise, you're going to get rather
15:50 slow responses. You can see this is
15:51 still responding. I'll come back to you
15:53 once it's done. So, as you can see, we
15:55 got here about 24 tokens per second as
15:57 opposed to that 120-plus tokens per
15:59 second. So, a massive decrease in speed,
16:01 about a six-times decrease just because
16:04 a small amount of the model had to go
16:05 over to my system memory as opposed to
16:07 directly on my graphics card. Now, this
16:09 is a bit of a downside because it means
16:11 we can only run smaller models, and
16:13 smaller models are not nearly as smart
16:15 as the large massive models that you get
16:17 with like Claude or ChatGPT. But, I'm
16:19 going to show you a little bit of a
16:20 trick that we can do to load these
16:22 larger models while still having
16:24 relatively good performance and
16:26 offloading a lot of it to our system RAM
16:28 in our computer. So, what you want to do
16:30 is you want to find a model that
16:31 supports what's called MOE. MOE just
16:34 stands for mixture of experts, and
16:36 essentially, it's kind of a fancy way of
16:38 saying that you have a really big model,
16:40 but only parts of that model are going
16:41 to be working at a particular time, and
16:43 other parts are maybe not going to be
16:45 working at a time. So, that means that
16:47 you can kind of put the really
16:48 hard-working stuff on your graphics card
16:50 and the less hard-working stuff on your
16:51 system RAM. That's kind of a very
16:52 high-level overview, not 100% accurate,
16:54 but that's kind of how you can think
16:55 about it. And most of the time with
16:57 these models, if we take a look at our
16:58 models, they're going to be labeled
17:00 something along the lines of whatever
17:01 the model name is with the parameters.
17:03 Actually, it's probably going to be
17:04 easier to see from here. So, you can see
17:06 this model right here, it says 35
17:08 billion parameters, and then it's got a
17:09 second number, A3B. That means there are
17:12 3 billion active parameters. So, you're
17:14 going to see these naming conventions
17:15 where it's like A plus another number or
17:17 it's going to be like 35X
17:20 and then 25 or something. So, the first
17:22 number is how big the model is and the
17:23 second number is going to be how many
17:25 active parameters are. You can see some
17:27 of the other models may have naming
17:28 conventions like that and this is very
17:30 common, something you're going to see
17:31 inside of that hugging face model. And a
17:33 way that you're going to know if you
17:34 have this mixture of element or of
17:36 experts model is when you choose one of
17:38 those types of models in LM Studio,
17:40 you'll actually see some options at the
17:41 very bottom. And this option called
17:43 number of layers for which to force MOE
17:46 weights onto the CPU. This essentially
17:48 pushes those weights that are less
17:49 important over to your normal computer
17:52 and it's going to keep the much more
17:53 important stuff on your actual graphics
17:55 card. For example, this model is quite
17:57 large. You can see if I max out the
17:59 context window of this, which I've done
18:01 here, and if I try to keep the entire
18:02 thing on my GPU by maxing out that GPU
18:05 offload, you can see that this model is
18:06 26.63 GB. That's the estimated amount of
18:09 space it's going to take up. Now, this
18:10 is not nearly 100% accurate, but you can
18:12 see it's going to take up a lot of space
18:14 on my GPU cuz it's a very large model.
18:16 But, what I've done if I said that
18:17 essentially I want to take 30 of those
18:20 40 layers that are these MOE layers, and
18:22 I want to move them to the CPU. This
18:24 means that I can use this model by
18:25 keeping the really fast stuff loaded in
18:27 my GPU while keeping the slower stuff
18:29 loaded on the CPU. So, if you're working
18:31 with one of these MOE models, what you
18:33 want to do if possible is max out this
18:35 GPU offload as much as possible. Set
18:37 your context wherever you want. I've
18:39 maxed mine out because this is like my
18:40 agentic coding workflow. So, I want to
18:42 have a larger context, but max out that
18:44 GPU offload and then experiment with
18:46 this number right here. See how low you
18:48 can get it while still having good
18:50 performance. Obviously, the lower the
18:51 better cuz that means it's going to load
18:52 all of it into your graphics card, but
18:54 if your graphics card doesn't have
18:55 enough space, slowly increase this until
18:57 you find a good balance. And for me,
18:59 that balance was about 3 to 4. So, 30
19:01 out of 40 was exactly what I want. And
19:03 when I click load on this model, and if
19:05 we take a look as that model is loading,
19:06 you can see that it's bumping up. And
19:08 while it said it was going to take like
19:09 20-something GB, you can see instead
19:11 it's actually just pretty much touching
19:13 the maximum amount of space that I have
19:14 inside my graphics card. I may even have
19:16 it pushed a little bit too far, but you
19:18 can see it's essentially touching that
19:20 maximum point inside my graphics card.
19:22 And this is going to give you the best
19:23 performance possible while using these
19:25 larger models. So, let's go ahead and
19:27 actually try to create a chat with this.
19:28 So, we're just going to create a chat
19:29 that says, "Hi, who are you?" Click
19:32 enter on that and you can see it's not
19:34 super super fast. It's still quite a bit
19:36 slower, but this is light years faster
19:39 than what we would get if to run this
19:40 model directly all on the graphics card
19:42 without this MoE stuff. So, you can see
19:44 here we got about 43 tokens per second,
19:47 which like I said isn't blazing fast,
19:48 but it's still quite good. If we were to
19:50 now take this exact same model, let's
19:52 just eject it to unload it, and now we
19:54 try to reload that particular model. And
19:56 what I want to do is I want to come down
19:57 here and we're just going to change this
19:59 MoE, bring it all the way down to zero.
20:00 Essentially just running this and
20:02 loading as much as possible into our
20:03 graphics card. You'll probably
20:04 immediately notice as this loads my
20:06 video is going to start lagging really
20:07 bad because I'm maxing out my graphics
20:09 card space as much as possible. You can
20:11 see here it's touching the very very
20:12 tippy top and it's just going to put
20:14 more and more stuff in my system memory
20:16 cuz it can't fit it all on my graphics
20:17 card. And once this is loaded, we'll see
20:19 that it is way way slower than what we
20:21 had before. So, it's still trying to
20:23 load because there's so much stuff that
20:24 it's having a hard time fitting it on my
20:26 computer. And let's just get our message
20:28 typed out. Give me a brief
20:32 sentence of what this is about. Let's
20:36 actually change that to paragraph.
20:38 There we go. And now it just finished
20:39 loading and you can see it's going to be
20:41 much much slower. So, it's processing
20:43 the prompt and you can see here like it
20:45 is painfully slow. Like this is maybe
20:47 like one token per second generously.
20:50 So, very very very slow and that's the
20:52 difference between the MoE. Essentially,
20:54 we're taking the less important stuff,
20:55 offloading it off the graphics card, and
20:57 keeping the really important stuff on
20:59 the graphics card. That's the entire
21:00 thing behind that MoE section. Let's
21:02 just stop this as this is taking forever
21:04 and I'm going to unload this so that my
21:05 graphics card doesn't have to work so
21:07 hard. So, that's everything related to
21:08 setting up essentially the chat portion
21:10 of our models and loading the models on
21:12 our computer, which is going to be
21:13 really useful for when we want to set up
21:15 autocomplete and agentic workflows.
21:17 These MoE models are the best possible
21:19 models for trying to get the most amount
21:21 of power out of the least amount of
21:22 hardware, and you don't need super super
21:24 powerful hardware to run all these
21:26 models. The ones I've been showing you
21:27 right now have been some of the Sultan
21:29 larger models, but you can see like this
21:30 model right here only takes up 1 GB of
21:33 space for your VRAM, and any graphics
21:35 card, even incredibly old ones, are
21:37 going to be able to run a model like
21:38 this one. So, if you have more limited
21:40 hardware, you just have to scale down
21:41 what particular models you choose, but
21:43 if you have access to some of these MoE
21:45 models at a high quantization, which
21:47 again reduces the size while also
21:49 slightly reducing the quality of the
21:51 model, that means you can actually run
21:53 some decently large models on even
21:55 relatively blackluster hardware. Now,
21:57 most often you're probably not going to
21:58 be interacting in a chat-based way. If
22:00 you are, everything works pretty easily,
22:02 but what you want to do is you want to
22:03 set up autocomplete, and you want to set
22:04 up agentic coding. Those are the things
22:06 that you care about the most. So, to do
22:08 that, if you see this little developer
22:09 button right here, this is where we can
22:11 actually load up models to use directly
22:13 inside of other programs on our
22:15 computer. And if you don't see this
22:16 developer tab, that means that you
22:18 needed to make sure when you installed
22:19 LM Studio, you clicked like the show
22:21 developer settings. So, if you don't see
22:22 this, just go down to your settings
22:24 here, and where it says developer, just
22:25 make sure to toggle that developer mode
22:27 on, so you should be able to see all
22:28 these different developer settings. Now,
22:29 this is where we can actually load
22:30 multiple models onto our computer. Right
22:32 now, there are no models being loaded,
22:34 but if I wanted to load a model, I could
22:36 just click load model here. I could
22:37 choose one of those models like that 3.6
22:39 model that we were just looking at.
22:41 Again, make sure everything is set up
22:42 like I want it to be, and I can just
22:44 again, make sure it's all set up. I have
22:45 this remember setting, so it's just
22:47 saving exactly what I used up for all my
22:49 other times. I can click load model, and
22:50 that's going to load that entire model
22:52 directly onto my computer, but it's not
22:54 being used for anything yet, but it is
22:56 taking up space on my computer. And I
22:57 can actually load multiple models if I
22:59 want. I'm going to be loading a second
23:01 model, which is this very small model
23:03 right here, this 940 MB model. I'm going
23:05 to be loading that one as well. Again,
23:07 keeping all these default settings that
23:09 I have, making sure that it's all on my
23:11 GPU. So, there we go.
23:13 And give that a quick load button right
23:15 there. So, that's going to load up that
23:16 full model as well. Now, if we take a
23:18 look, that's essentially maxed out my
23:20 entire GPU memory, and that's mostly
23:22 because I'm also recording video. You
23:23 may also see some stuttering in the
23:25 video because I'm trying to record video
23:26 and do all this AI stuff. So, what I'm
23:28 actually going to do is I'm going to
23:29 take this one model right here, this
23:31 larger one, I'm just going to scale back
23:32 this context pretty heavily. So, let's
23:34 say that we want our context to be
23:35 71,000 instead. I can use that scroll
23:37 bar on the side over here. And if I just
23:39 hide my camera real quick, so you can
23:41 see the button below, I can just click
23:43 this button called reload. That's going
23:44 to reload my model with all these new
23:46 configurations set inside of it. So, now
23:48 it's going to have a smaller context
23:49 window, which should hopefully mean that
23:51 it's going to be able to take up less
23:52 space on my GPU, which means that my
23:54 video hopefully won't be so laggy for
23:55 you. Again, that's because I'm doing
23:57 video editing or video recording at the
23:59 same time I'm trying to do this. And
24:00 generally, you obviously wouldn't be
24:01 doing that, so you would get even better
24:03 results that I'm getting if you have the
24:04 exact same or similar hardware. And
24:06 again, just to show that working, if we
24:07 come over here, you can see that again,
24:08 the amount of GPU memory is much lower
24:10 than it was before because of the fact
24:12 that I reduced that context size. So,
24:14 the larger your context is, the more
24:16 memory it takes up, and sometimes it can
24:17 drastically increase the size of your
24:19 model, sometimes even doubling what the
24:20 size of your model is just by increasing
24:22 that context too far. Now, the only last
24:24 thing that we need to do is just make
24:25 sure up here where it says status
24:26 running, make sure that's checked. If
24:28 this is unchecked, it means your server
24:29 is not running. So, just make sure your
24:30 server is running, so the other programs
24:32 you want to interact with are able to
24:33 actually reach this particular program.
24:35 And you want to make sure you have this
24:36 URL handy right here. This is the URL
24:38 that this is going to connect to. And if
24:40 we actually look down here, you can see
24:41 we have all the different like OpenAI
24:43 compatible endpoints, which means
24:45 anything that works with OpenAI is going
24:46 to work perfectly fine with LM Studio.
24:48 And everything I'm going to show you
24:49 works perfectly with LM Studio and these
24:52 API endpoints right here. Now, I'm going
24:53 to show you how to set this up inside of
24:55 VS Code for the autocomplete as well as
24:57 the agentic mode. And then I'm also
24:59 going to show you how to set this up in
25:00 the terminal with Pi as well. And the
25:02 nice thing is is once you understand how
25:03 all this connects, it doesn't matter
25:05 what you decide to hook up, it's all
25:06 going to work pretty much exactly the
25:08 same way. It just might have slightly
25:09 different configuration names, but all
25:11 the important data is going to be the
25:12 same. So, Continue is an extension
25:14 inside of VS Code, just make sure that
25:16 you install this extension, and it's
25:17 going to allow you to use AI agents
25:19 inside of VS Code. And I'm also going to
25:21 show you how to use the built-in GitHub
25:23 Copilot portion of a this to use your AI
25:25 as well. But if you want auto complete,
25:27 Continue is the only way to get that.
25:29 There are other extensions that do the
25:30 same, but I found that this one works
25:31 quite well. Then what you want to do is
25:33 you want to click on the section that
25:34 says Continue in your sidebar, and you
25:36 can see here we now have access to all
25:38 of our model stuff. Mine is already
25:39 configured, but I'm going to show you
25:41 how to configure it yourself. So, you
25:42 can see the settings icon right here.
25:44 That's going to open up your settings
25:45 section, and this is where you can
25:46 toggle around and play around with some
25:48 default settings. So, you can scroll
25:49 through all your different user settings
25:51 for like font size and so on. For the
25:53 most part, I don't want to mess around
25:54 with this too much. But I'm going to
25:55 show you the things that are the most
25:56 important to set up with your auto
25:57 complete. So, the first thing when it
25:59 comes to auto complete, I would
26:00 recommend making this auto complete
26:02 timeout quite a bit longer than the
26:03 default. I have mine set to 1,000
26:05 milliseconds, which is 1 second. This is
26:07 just because sometimes there's a little
26:08 bit of a delay between your auto
26:09 complete finishing and when it gets to
26:10 Continue. It's not actually going to be
26:12 super delayed like a whole second, it'll
26:14 still be relatively instantaneous. But
26:16 this just makes sure that it most of the
26:17 time works properly. Also, this debounce
26:19 you can set to whatever you want.
26:20 Essentially, that means that after you
26:21 stop typing, it's going to wait 100
26:23 milliseconds before it tries to do
26:25 anything. You can change it to 50, or
26:26 you can change it higher depending on
26:28 what you want for your particular use
26:29 case. This is just how quickly that auto
26:31 complete kicks in. Once you have that,
26:33 the next thing that we need to make sure
26:34 we have set up, this is going to be more
26:35 for agentic use cases, but I want to
26:37 mention it cuz we're in the settings, is
26:39 in this tool section, make sure that all
26:41 the tools you want your agent to be able
26:42 to use are set to automatic. For
26:44 example, reading a file, creating a
26:45 file, these things should pretty much
26:47 all be set to automatic. You can see
26:48 there's very few things I have set to
26:49 ask first. For for running a terminal
26:51 command, I have that set to ask first
26:53 cuz I don't want to do that
26:54 automatically. Creating rules, I have
26:56 set to excluded. Fetching URLs, I have
26:58 set to ask first. Request rule, I set to
27:00 excluded, but everything else is set to
27:02 automatic. That just means that it's
27:03 going to work properly. By default,
27:05 things like edit and create file is set
27:07 to ask first. And if you want to work in
27:08 an agentic workflow, that just doesn't
27:10 work well. So, setting it to automatic
27:12 is a great way to do that. Now, next you
27:14 can see this model section. Yours is
27:15 probably going to have some default
27:16 models or it's going to have some blank
27:18 stuff inside of here that's just going
27:19 to say like, "Hey, set up this
27:21 particular model." Mine's already set
27:22 up, but I'm going to show you how you
27:23 can go through the setup process. First,
27:25 you can just click on this plus icon
27:26 right here to add a new model. Click on
27:28 the provider that you want. In our case,
27:30 we're using LM Studio, so we'll just
27:31 search for LM Studio. There we go. You
27:34 can click on that. And then just going
27:35 to make sure that you install it. And
27:36 then here is where we can select what
27:38 model we have. Now, unfortunately, it's
27:40 not going to work super great with some
27:41 of the models you download off of like
27:43 Hugging Face and so on. For example, if
27:45 I try to search for
27:47 Quinn 3
27:48 .6, you can see there's nothing that
27:51 even shows up for this Quinn 3.6. So,
27:53 it's just not working super great. But
27:55 the nice thing is you can just choose a
27:56 model. It doesn't matter what it is.
27:57 Let's say we're going to choose this
27:58 Quinn one right here. You can click
28:00 connect, and then it's going to open up
28:01 your configuration file for you to
28:03 actually work with. So, let's zoom this
28:04 out so it's a little bit easier to see.
28:06 It's going to give you all this default
28:07 configuration, and yours is going to
28:08 include that one model that you just
28:10 created. But what we want to do is we
28:12 want to be able to add all of our own.
28:13 So, you can see down here, that's the
28:14 model that was automatically created.
28:16 And all these other ones are ones that I
28:17 have set up myself. We'll just comment
28:19 them out for now so we can show you how
28:20 to set them up. So, the first thing that
28:22 you want to do is you want to set up
28:23 autocomplete. So, to do that, we can
28:24 come in to here. We can specify the name
28:26 of our model. And the name of your model
28:28 is whatever you want. This is just the
28:29 name you give it. So, you can just call
28:30 it an autocomplete if you want. And it's
28:32 as simple as that. Next, what we want to
28:34 do is we want to specify the provider.
28:36 The provider is going to be LM Studio.
28:38 You can see that's what it is here.
28:39 That's just because that's where it's
28:40 coming from. We're coming from LM
28:42 Studio, so that's what we set the
28:43 provider.
28:44 Our model, that is the name of our model
28:46 directly from LM Studio. So, if we open
28:48 LM Studio up, you can see where our
28:50 model is. You can see it has a name
28:52 right here. If we click this copy
28:53 button, it'll actually copy the name of
28:55 our model. And we're using this Qwen 2.5
28:57 Coder 1.5 Billion model for our
28:59 autocomplete, and that's because
29:00 generally you want a very small model
29:02 for your autocomplete. You can see this
29:03 one is only 1 GB, and that's because the
29:05 smaller the model, the quicker it's
29:06 going to work, and we want an incredibly
29:08 quick model for autocomplete, otherwise
29:09 it just won't feel great. And this is a
29:11 great option. Again, if you have a more
29:13 powerful computer, you can use a larger
29:14 model for this because your computer is
29:16 going to be able to handle it better.
29:17 But I wanted a relatively small model
29:19 while my Agentic model is taking up most
29:21 of my GPU. So, again, copy over whatever
29:23 that model name is directly. Don't
29:25 modify it at all. And then finally, we
29:27 have the API base. Again, if we go back
29:30 into here, you can see our URL right
29:32 here, and all of these are at the /v1
29:34 URL. So, we can just copy over that
29:36 exact URL, add /v1 to the end of it, and
29:40 that's going to give us the exact model
29:41 URLs that we want. And now we can use
29:43 this model anywhere that we want. But to
29:45 make sure it works with autocomplete, we
29:47 need to set the role. So, here we can
29:49 specify our roles as an array. This is
29:51 just a YAML file. And if you come in
29:53 here with autocomplete all one word,
29:54 that's going to set this model up as
29:56 your autocomplete model. So, now what we
29:58 can do is go back into that Continue
30:00 extension, and you can see here in this
30:02 autocomplete section, that's the model
30:04 right there we labeled as having
30:05 autocomplete capabilities. It's just
30:07 matching this name right here, whatever
30:08 we set there. Now you can see it showing
30:10 up right here as our autocomplete list.
30:12 And now if we try to modify some code,
30:14 we should hopefully be able to get some
30:15 autocomplete responses. So, if we come
30:17 into here, and let's just say I type in
30:19 some random code,
30:20 you can see it doesn't quite look like
30:22 it's working. To give it a little bit of
30:23 a nudge, we can hold down control alt
30:25 space, and that's going to force it to
30:27 do autocomplete. You can see now we
30:29 finally got an autocomplete. Sometimes
30:31 it's a little bit buggy where it doesn't
30:32 quite show up right away, but other
30:34 times it works pretty much right away
30:35 exactly like you would want it to. So,
30:37 let's just try to come down here and see
30:38 what the autocomplete gives us. You can
30:39 see it's starting to give us different
30:41 information, and if we start typing, you
30:42 can see it's giving us more information
30:44 as well. We can also see this working
30:45 inside of our LM Studio as well. So,
30:47 I've just gone ahead and put LM Studio
30:49 over here. And if we clear out our
30:50 developer logs, we can actually see
30:52 these being directly called to our API.
30:54 So, if we just start typing something
30:55 out, you can see immediately it's giving
30:57 calls out to here. It's generating all
30:58 that information as quickly as possible,
31:00 and it's sending it over to VS Code
31:01 where it's being used. And again, you
31:03 can see that I'm getting that exact
31:04 information. I can click tab to
31:05 auto-complete this, and it's going to
31:07 fill out all that information. So, this
31:09 is really useful that it has this
31:10 ability. And if you don't have it
31:12 working properly, you can always check
31:13 these developer logs and see if there's
31:14 any errors or anything going on inside
31:16 there, cuz that's going to tell you if
31:17 something's going on. Also, if we expand
31:19 this so the logs are a little easier to
31:21 see, you can actually see exactly how
31:22 long things are taking. So, here the
31:24 total time was 259 milliseconds. If this
31:26 is taking like 2-3 seconds, that may be
31:29 why it's not showing up because your
31:31 timeout is set to 1,000 milliseconds,
31:33 and your total time is taking 3,000
31:35 milliseconds, it's never going to show
31:36 up. So, you most likely in that case
31:38 need to choose a smaller model that's
31:40 going to be able to run quicker on your
31:41 computer, cuz again, you want
31:42 auto-complete to be relatively quick.
31:44 Now that we have auto-complete set up,
31:45 the next thing that I want to focus on
31:47 is how do we actually set up the chat
31:49 mode as well as the mode for our
31:50 different agentic coding that we want to
31:53 work on. So, in that exact same
31:54 configuration file, we can modify what
31:56 we want to do up here. So, in our case,
31:58 I'm going to just going to copy what I
31:59 had before and show you exactly what it
32:02 looks like, and then I'll just tell you
32:03 what every single line of it means, cuz
32:04 that'll be a little bit easier than just
32:06 watching me manually type it out. So,
32:08 again, name doesn't matter what you call
32:09 it, it is whatever you want. Provider is
32:12 going to be LM Studio. This model name,
32:14 again, comes directly from LM Studio.
32:16 Just copy that over. API base is exactly
32:18 the same for all of them. The only thing
32:20 you need to do for the one that is going
32:22 to be handling all of your different
32:23 agentic workflow is to make sure that if
32:25 it has tool-based usage, set the
32:27 capabilities to tool use. And if it has
32:30 vision, so it can see things, set the
32:31 capabilities to image input. Now,
32:33 there's other configurations you can do.
32:35 If I actually pull over the
32:37 documentation, you can see there's other
32:38 things that I can figure inside of here,
32:40 and you can modify those as you want.
32:41 But, this is kind of the base level to
32:42 get you started with working with this.
32:44 And just make sure where you have chat,
32:46 that is going to be using this exact
32:47 model that you set up. So, let me make
32:49 sure I save that. And now inside of
32:50 here, I can select that for chat, as
32:52 well as for edit. I'm going to come down
32:54 here where it says apply, and select
32:55 that model as well. Now that original
32:57 default model that it gave us, we can
32:59 delete that so it doesn't accidentally
33:00 use that model for anything. And now
33:02 we've set up essentially our auto
33:03 complete model and our agent {slash}
33:05 chat based model. With that done, we've
33:07 essentially set up continue exactly like
33:08 we want. Now, if we go back here, you
33:10 can see we can choose our model that we
33:12 want to use. And since this one doesn't
33:13 have a chat based role, it doesn't even
33:15 show up in the list. And now I can do
33:16 whatever I want. For example, if I'm in
33:18 agent mode, it's going to be able to use
33:19 all of my different tools that are
33:21 associated with it. Chat mode can't use
33:23 any tools at all, but if I wanted I
33:24 could just come into chat mode, click
33:25 hi, and it's going to generate this data
33:28 for me. It's going to go through think
33:29 on everything that it needs to do. You
33:31 can see here it's doing a bunch of
33:32 different stuff based on different
33:33 system prompts that it has set up, and
33:34 it's giving me back a response. Or I can
33:36 change into agent mode, and I can make
33:38 it do something inside of my project.
33:39 For example, let's make it do something
33:41 really simple. I can say create a file
33:43 called test.ts
33:45 that
33:47 just has
33:48 console.log
33:50 test in it. There we go. Let's just go
33:52 ahead and see if it can do that. And
33:54 again, if we looked at our LM Studio, we
33:56 would see that inside of there, it's
33:58 showing all the different API outputs
33:59 that are being given to this. So, you
34:01 can make sure that everything is working
34:02 exactly as you expect. And there we go.
34:04 You can see that this test file has been
34:05 created. If I come over here, you can
34:07 see there's that test.ts file, and it's
34:09 giving me everything that I want inside
34:10 of it. So, it is working and hooked up,
34:12 and it'll the modify and edit the code
34:13 inside my project. Now, I find that this
34:15 continue section for doing the agentic
34:17 coding is fine, but it seems to be a
34:19 little bit buggier and not always work
34:20 like I want it to. So, instead I'm going
34:22 to show you how to set up inside of
34:23 GitHub Copilot as well. But, to do that,
34:25 you need to make sure you have the
34:26 insider version of VS Code installed.
34:28 Essentially, that's like the beta
34:30 version. And then I can show you how to
34:31 set it up in here cuz it's currently
34:33 only available in the beta version. By
34:34 the time this video comes out, it may be
34:36 available on all the different versions,
34:37 but right now it's only inside the beta
34:39 version. So, let's just expand this
34:41 over. This is that chat window for
34:43 Copilot. You don't even need a Copilot
34:44 subscription to use this because what we
34:46 can do is we can set up a local model.
34:48 So, this model drop-down right here,
34:50 this is where you want to select that,
34:51 and right here there's going to be this
34:52 gear icon. Click on that, and it's going
34:54 to open up a section where you can
34:55 configure your models. You can see
34:57 here's all the ones that are inside of
34:58 Copilot that I have included with my
35:00 subscription, but you can also see here
35:01 are some that I set up. And to set these
35:03 up, you click add models and choose open
35:05 AI compatible. Then you can call this
35:07 whatever you want. We're just going to
35:08 call this LM Studio. Doesn't matter. And
35:11 then from here, enter a value for your
35:13 API key. Put whatever you want, it
35:14 doesn't matter. I'm just going to put
35:15 key because there is no API key since
35:17 this is a free model on my computer. And
35:19 then what that's going to do is it's
35:20 going to open up right here. If I just
35:22 close all this out, a section that's
35:24 going to have a name, whatever we called
35:26 it, LM Studio. The vendor is going to be
35:27 automatically set up for us. API key is
35:29 again something we don't care about, it
35:31 doesn't matter, doesn't really care. And
35:33 then finally, we have a section for all
35:34 of our different models right here. And
35:36 this is where we configure what our
35:37 models look like. Now, I have already
35:39 set this up myself, so you can see here
35:41 is an example of some of the different
35:42 models I've set up. The ID, that is
35:44 whatever comes directly from your LM
35:46 Studio. So, you copy that from LM Studio
35:48 just like we did before. Name is
35:50 whatever you want it to be. This is your
35:51 human-readable name that shows up. The
35:54 URL right here is just going to be your
35:56 exact URL just like this. No other
35:58 changes needed. And then you can specify
35:59 what this thing has for capabilities.
36:01 So, if it can call tools, set tool
36:03 calling to true. If it has vision, set
36:04 that to true. And then you can specify
36:06 your maximum input tokens and your
36:08 maximum output tokens. Now, for the
36:10 maximum input tokens, copy that directly
36:12 from LM Studio. So, inside of LM Studio,
36:14 there's the URL up here that we talked
36:16 about, but if you wanted to get those
36:18 tokens, all you need to do is click on
36:19 your model, and over here, wherever your
36:20 context length is, make sure you just
36:22 copy whatever you have that set to, and
36:24 then paste that down directly into here
36:26 for your model. So, in our case, I'm
36:28 going to copy this entire thing. I'm
36:30 going to paste this model down right
36:31 here cuz this is the model we're using.
36:33 This is the exact name from here. This
36:34 is the name I'm giving it as like an
36:36 extra name. We'll just call this Quinn 3
36:38 .6 for testing purposes. And you can see
36:40 here that maximum input tokens is
36:42 exactly that input token from my page.
36:45 That way it knows how many different
36:46 tokens and so on it has inside the
36:48 context. Now, once you have that all set
36:49 up, you now can use your model directly
36:52 inside of your agent. So, we can click
36:54 on this. And now from this drop-down, I
36:56 can just go to other models or you can
36:58 see it's actually listed right here. I
36:59 can click Actually, is that the right
37:01 one? No, that's not the right one. The
37:02 correct one
37:03 Actually, the correct one is not showing
37:04 up. That's because when you change that
37:06 model file, you just need to make sure
37:07 that you developer reload window. So,
37:09 that's going to reload your window. You
37:11 could also just close VS Code, reopen
37:12 it. And now when I open this up, I click
37:14 on other models, I should at the very
37:15 bottom see all my models. And the one I
37:17 just added was this 3.6 name just like
37:20 that. So, when I click on this, that's
37:21 going to give me all of my model
37:23 information. And I can do whatever I
37:24 want. For example, I could just type in
37:26 hi, click enter, and that's going to go
37:28 through and do some thinking related
37:29 stuff. Often times these agentic tasks
37:32 are going to take quite a bit longer
37:33 because they send along a very long
37:35 system prompt. So, it takes a long time
37:37 to process that system prompt, which
37:38 gets added to the front of essentially
37:40 every single request you can make. So,
37:42 that's why you can see that this took a
37:43 little bit longer to get started. But
37:44 you can see it's using Quinn 3.6 as my
37:46 model, which is that local model that I
37:48 set up. Now, this I find is a much
37:50 better experience for the most part than
37:52 that continue extension. But the
37:53 downside, at least currently the way
37:55 that this is set up, is that you cannot
37:57 actually use this model without being
37:58 connected to the internet cuz it still
38:00 communicates with GitHub when you use
38:02 anything through their GitHub Copilot
38:04 related stuff. So, that's why I want to
38:05 show you how you can set this up with
38:07 something like Pi where you could do
38:08 like Open Coder or things like that with
38:10 these agent harnesses. They're going to
38:12 be much better for running your code in
38:13 a terminal-based interface, which I
38:15 think actually works really well for
38:16 this type of coding. So, to get started
38:18 with Pi, you can just go to pi.dev,
38:20 scroll down, and you're going to see a
38:21 command that you can copy, and that's
38:22 going to install this pie command for
38:24 you. It's going to work perfectly. And
38:26 then what we can do inside of your
38:27 terminal, you can just run pie
38:29 just like that, and that's going to open
38:31 up your pie command just like this. Now,
38:32 if you have like certain skills and
38:33 stuff installed, those are going to show
38:35 up, but what you care about is models.
38:36 So, if you type in {slash} model just
38:38 like this, this is going to be where you
38:39 can select all of your different models
38:41 that you want to be able to use, but in
38:42 our case, we won't have any. Like when
38:44 you first install this, this list is
38:46 going to be completely blank for you,
38:47 even though mine has some cuz I've
38:48 already installed them. Now, in order to
38:50 modify what our models are going to look
38:51 like, we need to go to the file where
38:53 they are stored. And if we look inside
38:55 of the page here for the documentation
38:57 of pie, you can see that they are stored
38:58 at this particular location. It may be
39:00 slightly different depending on what
39:01 your operating system is, but this is
39:03 the location where our models file is
39:05 going to be stored. And then what we can
39:06 do is we can just open up that models
39:08 file by searching for that here in VS
39:10 Code. Now, you can see here I have all
39:12 my different model-related stuff. Now,
39:13 in our case, to set up our very first
39:15 model, you can see the key here is going
39:17 to be whatever we want it to be the name
39:18 of our model. In our case, this is LM
39:20 Studio where everything's coming from,
39:21 so we're going to specify LM Studio as
39:23 our provider. Our base URL is that exact
39:25 same URL we've used for everything. Just
39:27 make sure it has {slash} V1 at the end
39:28 of it. And for the API, set it to OpenAI
39:31 completions. That's going to be the one
39:33 that's going to work for your
39:34 agent-based mode. Again, that's all
39:36 coming from LM Studio. API key could be
39:38 anything you want because it doesn't
39:40 actually need one. And then finally,
39:41 here we have an array with all of our
39:42 different models that we want to use.
39:44 Now, in our case, let's take a look at
39:46 the models in depth. You can see ID,
39:48 this is just going to be the ID copied
39:50 directly from LM Studio. Your context
39:52 window is going to be again directly
39:53 from LM Studio. Copy that over and paste
39:55 it in. And then if you have a model that
39:57 is a reasoning model, set reasoning to
39:59 true. And if it can take in images, make
40:01 sure your input is set to text and image
40:03 just like this. That's going to make
40:05 sure that it can do reasoning as well as
40:06 text and image-based manipulation. And
40:09 you can set up as many different models
40:10 you want. For example, this one does not
40:12 have reasoning capabilities, and this
40:13 one down here I have nothing else set up
40:15 because it's just a very small model.
40:16 But for the most part, this is the model
40:18 that I'm going to be using for all my
40:19 agentic workflows. Once you have that
40:21 set up, you can ask it to do whatever
40:23 you want. For example, you can say,
40:25 "Describe
40:27 this codebase." And now it's going to go
40:29 through and it's going to do all of that
40:30 for me. Down here you can see my exact
40:32 context window that's being used and
40:33 everything else. And this, since we're
40:35 using a larger model on a system that's
40:36 a little bit underpowered for some of
40:38 these larger models, it's not going to
40:39 be blazingly fast. For example, if I
40:41 were to use like Claude Sonnet, it's
40:42 going to be faster than it's going to be
40:44 if I use this local model. And the
40:46 Claude model is probably going to be
40:47 slightly better. But this is going to be
40:50 much better at running locally,
40:51 completely for free, offline. It's got a
40:53 lot of benefits to it. Just to give a
40:55 little bit of a comparison here, this is
40:57 actually a Sudoku app that I had it
40:58 generate entirely by coded. And if we
41:00 just pull over what the Sudoku app
41:02 actually looks like, you can see this is
41:03 the output that came from that Qwen 3.6
41:06 model that we loaded up. I just gave it
41:07 a quick prompt that said, "Hey, create
41:08 me a Sudoku app that has pencil marking
41:10 inside of it, easy, medium, and hard, as
41:12 well as a solution checker for me." And
41:14 you can see here it has all of that. I
41:16 have the ability to do different pencil
41:17 marking in the corners. I have the
41:18 ability to type in whatever number that
41:20 I want. And it's going to do error
41:21 checking. So if I were to like put a six
41:23 here, you can see it's showing me all of
41:24 my different errors. And I can even just
41:26 click show solution to see the solution.
41:28 Or I can just press the hint button a
41:29 bunch of times to give me a hint for
41:30 what the next numbers need to be. So
41:32 this is a great essentially example of
41:34 what can be done with a single one-shot
41:36 prompt. And to generate this, it took
41:37 about 9 minutes on my hardware. Now if
41:40 you have more powerful hardware, it'll
41:41 be much quicker. If you have less
41:42 powerful, it'll be much slower. But this
41:44 is essentially 9 minutes of work. And I
41:46 gave the exact same prompt to the Sonnet
41:49 4.6 model, and it also took around 9
41:52 minutes to do the exact same thing. And
41:53 I'm going to show you the output from
41:54 that one. Now here is the exact one that
41:56 Sonnet produced. So you can see here,
41:58 very similar. It's got kind of the same
41:59 features. For example, it's got some
42:01 different error checking and so on. Like
42:02 if I click check, it's going to tell me
42:04 where my different errors are. I can
42:05 generate easy, medium, and hard. And
42:07 this one actually did like center pencil
42:09 marking, which is something I asked for
42:10 that the other one didn't give me. But
42:12 you can see the results are relatively
42:13 comparable, and this Claude Sonnet
42:15 version also took the exact same time to
42:17 generate as the Quen version just
42:19 because it did more thinking. So, it
42:21 spent more time thinking, but overall it
42:22 gave me the exact same time for the
42:24 actual output. Now, when I tested these
42:26 models inside of a code base for doing
42:28 bug fixes, that's when you notice the
42:30 biggest time difference between them.
42:31 Now, here's an example of the app that I
42:33 had to fix a bug in. So, this is a
42:35 really simple video editor that I vibe
42:36 coded for editing shorts a lot quicker
42:38 because I just want to like cut out the
42:40 beginning and ends of video clips. But
42:41 you can see inside of this one, I
42:43 essentially have the ability to kind of
42:44 drag around where this is going to be
42:46 cropped and so on. And I have the
42:47 ability to play the audio that's the
42:49 full audio, so it includes all the stuff
42:50 that's cropped out, or just the cropped
42:52 out section. And there was a bug in my
42:54 code where this very first scene, didn't
42:56 matter what I toggle on this button, it
42:57 would play the full audio clip from the
42:59 beginning no matter what. I gave the
43:01 exact same prompt to both the Claude
43:03 Sonnet 4.6 model and the local Quen
43:05 model, and I said to fix this bug. They
43:07 both fixed it in exactly the same way.
43:09 The code was literally identical between
43:10 the two cuz it was a a relatively small
43:12 change that needed to be made, but it's
43:13 a large code base. I mean, this is a
43:15 full video editor. It's a rather large
43:16 code base to do all this code, but it
43:18 took a little bit longer in the Quen
43:20 model than the Sonnet model. Sonnet
43:21 model took about 45 seconds to fix the
43:23 bug, while the Quen model took about 2
43:25 and 1/2 minutes. So, a pretty
43:26 significant difference in time, but that
43:28 was because it spent a lot of time
43:29 reading through all the code, and that's
43:31 where the slower model is going to
43:32 struggle more versus a larger model that
43:34 can read through that much quicker. Now,
43:36 again, it doesn't matter what type of
43:37 hardware you're using, whether you're
43:38 using incredibly fast hardware or you're
43:40 using relatively older and slower
43:42 hardware, you're going to be able to
43:43 find a model that you can use on your
43:45 own. And based on the different
43:46 parameters and things that I talked
43:47 about, you can fine-tune that model to
43:48 fit exactly in the parameters that you
43:50 have for your hardware. Now, with how
43:51 expensive these different cloud models
43:53 are, it's going to be more and more
43:54 important that you actually understand
43:56 how to set up your own local models,
43:57 which is what this video is about, so
43:59 you don't need to constantly watch a new
44:00 tutorial every month when a new model
44:02 comes out. You know the skills to be
44:03 able to set this up on your own. And if
44:05 you're worried about the cost of
44:06 actually getting into this, again, a lot
44:08 of this with these smaller lower-end
44:09 models will work on your lower-end
44:11 hardware. And if you already are
44:12 subscribed to maybe a cloud plan for a
44:14 hundred or two hundred dollars a month,
44:16 you could just cancel that plan for a
44:17 couple months and have enough money to
44:19 buy some really beefy hardware that's
44:20 better than what I'm currently using cuz
44:22 my hardware is meant for video editing
44:24 and not for AI. So, you can buy
44:25 AI-focused hardware, which is much more
44:27 powerful for much much less money than
44:29 what I paid for my hardware. Now, I
44:30 really hope you enjoyed this AI-focused
44:32 video. If you want to see more AI videos
44:35 from me, please let me know down in the
44:36 comments what kind of AI topics you want
44:37 me to cover cuz I don't always want to
44:39 be talking about like new models and
44:40 things like that. I actually want to
44:41 give you tutorials with real knowledge
44:43 that are actually going to help you as a
44:44 developer and not just hype up random
44:46 different AI-related things. So, please
44:47 let me know in the comments what kind of
44:49 AI-related stuff you'd want to see or
44:50 even non-AI related stuff. I just want
44:52 to know what you would want to see from
44:53 me. With that said, thank you very much
44:55 for watching and have a good day.


---

## Source: the-full-ai-development-workflow-not-just-code.txt

- Original path: `addintional info to add\the-full-ai-development-workflow-not-just-code.txt`
- Size: `17129` bytes
- SHA256: `7B22A3467B0A758D6926D928CC5473A622309D2D88656BCED48B57789054945F`

---

The Full AI Development Workflow (Not Just Code)

0:00 There's so much noise around AI coding
0:01 right now. Everyone's got their own
0:03 system and everyone's pushing the latest
0:04 tools. And if you're just trying to
0:06 figure out how to build real software
0:07 with AI, it's genuinely overwhelming.
0:10 It's so easy to get lost in the latest
0:11 tools and frameworks that we sometimes
0:13 forget to take a step back and see the
0:14 full picture. That's what this [music]
0:16 video is all about. We're going to walk
0:18 through the entire software development
0:19 life cycle stage by stage. I'll show you
0:21 exactly where AI fits into every [music]
0:23 single step, not just coding, but every
0:25 part of the process. By the end of the
0:27 video, you'll know how to build software
0:28 with AI like a senior engineer, even if
0:31 you're just [music] starting out. So,
0:32 let's get into it.
0:33 So, here are the seven stages of
0:35 software development that you're going
0:36 to be using. It doesn't really matter
0:38 what tools you're using or whether
0:40 you're using AI or not. You're going to
0:42 go through some kind of requirements
0:43 phase where you think about what are you
0:44 going to build and why. The design phase
0:47 is where you think about the technical
0:48 design, how should you implement the
0:50 work. Then you do some kind of planning.
0:53 You break the work down into a number of
0:55 smaller tasks.
0:56 You write the code. You review the code.
0:59 You deploy that code into production.
1:01 And then finally, you want to monitor
1:02 your systems over time to ensure that
1:05 they're healthy.
1:06 This is the same workflow used at
1:08 Google, Amazon, pretty much every
1:10 software development company. So, AI
1:12 doesn't really change this workflow, but
1:14 it does accelerate many parts of it. And
1:17 it also increases the quality of the
1:18 work we can do at every stage. AI is in
1:21 every single stage of this process. So,
1:23 from the requirements where we're doing
1:25 research to writing the PRDs,
1:27 I use AI agents to write PRDs and help
1:30 me prototype solutions. So, that when it
1:33 comes to implementing the design, I'm
1:35 very clear about what I need to build.
1:37 When it comes to the architecture
1:38 trade-offs as well, you can ask AI to
1:41 help you with the decisions. You can ask
1:43 it to help you write the documents. You
1:45 can ask it to help you build diagrams,
1:47 etc.
1:48 When it comes to planning, again, I use
1:51 AI agents to decompose work into tasks.
1:54 Previously, this would have been done by
1:56 a senior engineer or a tech lead. But
1:58 what I found is that AI agents actually
2:00 produce better task breakdowns than most
2:03 people do because they give a lot of
2:04 attention, they give a lot of detail in
2:06 every single task.
2:08 And this is really really useful to
2:09 know. Finally, we write the code. We use
2:12 our Claude code or whatever agent we're
2:13 using to implement the code. And then we
2:16 do some kind of review loop. So,
2:18 when you generate code the first time
2:20 with Claude code, chances are there's a
2:23 bunch of mistakes, there's a bunch of
2:24 errors or bugs in there that you haven't
2:26 noticed.
2:27 So, typically you want to do some kind
2:29 of review stage whether that's an LLM
2:31 reviewing its own work or whether some
2:32 other system externally that reviews the
2:34 code. You always want to have some level
2:36 of review. Then we deploy our code and
2:38 then we obviously monitor it as well.
2:40 So, the key thing here is that AI is
2:42 used at every single step, planning,
2:44 designing, breaking things down,
2:46 building, reviewing, and then finally
2:47 shipping. You might be thinking this
2:49 seems like a lot of process for
2:51 developing software. And that would be
2:53 true. You don't need to apply all of
2:55 these steps every single time. What
2:58 matters is that you understand the steps
3:00 because then you can make a decision
3:01 about which ones apply to what you're
3:03 doing and that's very different from
3:04 just skipping them because you don't
3:05 know they exist.
3:07 So, if you're fixing a small bug, you
3:08 don't need a PRD, you don't need a
3:10 technical design doc, you just fix the
3:12 bug.
3:13 But if you're building something more
3:14 complex like adding authentication or
3:16 redesigning your data model,
3:18 building a new feature from scratch,
3:20 then you probably want to spend a lot
3:21 more time on the planning, the
3:24 requirements, etc.
3:26 But the thing that applies no matter
3:27 what you're building, the clearer your
3:29 instructions are to an AI model, the
3:31 better the output you're going to get.
3:32 Even for a bug fix, a well-framed prompt
3:35 beats a vague description. So, while you
3:37 may skip some of these steps, the
3:39 underlying principle still holds. Think
3:42 about what you're doing carefully before
3:43 you ask an agent to do it. So, the first
3:45 step of the process is the requirement
3:47 stage which is where we figure out what
3:48 we're going to build. So,
3:50 this is what are we building, why are we
3:52 building it, who is it for, and then
3:54 what's in scope and what's out of scope.
3:56 As an example, on a recent freelance
3:58 project, I spent 3 days doing research,
4:01 planning, and design of the system
4:03 before I did any coding. The project
4:05 went really, really well because the
4:07 time spent figuring out the requirements
4:09 and really deeply understanding them led
4:11 to much better solutions later on.
4:15 One good thing about using AI in this
4:16 stage is you can actually build lots of
4:18 prototypes. You can use vibe coding to
4:20 generate a quick prototype of your
4:22 system because AI makes it quick and
4:24 easy to do this now. So, this is still
4:26 planning. You're just trying to figure
4:27 out what you're going to build. It's not
4:29 uncommon for developers in large tech
4:31 companies like Amazon or Google to spend
4:33 a disproportionate amount of time on the
4:36 actual technical design. For example, it
4:38 may take a week to design a feature. And
4:41 the reason is that you want to make sure
4:43 that you've got the right requirements
4:45 in place and you're building it the
4:46 right way because once you deploy your
4:48 software to production, it's very
4:49 difficult to change things. If you
4:51 choose the wrong database, it's going to
4:53 be very difficult for you to, you know,
4:55 make that change to switch to a
4:56 different database if customers are
4:59 already using that database. So, the
5:01 time you spend here is really, really
5:04 valuable. AI can help you here a lot as
5:05 well. So, you can use AI to help you
5:07 come up with a technical design. This is
5:09 largely what I think about as the spec.
5:12 When we talk about spec-driven
5:13 development, this is largely what I
5:15 think about. This is telling the AI
5:18 agent how to build the thing it needs to
5:20 build. This is all of the technical
5:22 detail about what libraries to use, what
5:25 frameworks to use, what security
5:27 considerations should be made, um all of
5:30 the technical details for the
5:31 implementation essentially. Then, the
5:33 next step is now we know what we're
5:35 building, we know why we're building it,
5:36 we need to break the work down into
5:38 smaller tasks. So, you generally
5:39 wouldn't just go to an AI agent and say
5:41 build me a um payments application. You
5:45 you want to break it down into smaller
5:46 parts. There are many reasons for that.
5:48 The first one is that the AI is just
5:51 going to do a really terrible job if you
5:52 ask it to do so much code in one go.
5:55 It's going to be focusing on so many
5:56 different things. It's going to get a
5:58 bit lost. So, you want to break the work
6:00 down into smaller parts so that you can
6:01 test it and you can make sure it's
6:03 correct at every single step.
6:05 We would do the same thing if we were
6:07 writing code by hand.
6:09 So, as an example, if we were building a
6:12 feature, we might have four tasks. The
6:14 first task might be to add email
6:15 validation to the sign-up form.
6:18 The second task might be to add the API
6:20 endpoint. The third task might be to
6:23 implement rate limiting for that
6:24 endpoint. And then finally, we might
6:26 write some tests. So, each of these
6:28 individual work items can be done by a
6:32 separate agent. It's very easy to verify
6:34 that the work is correct because the
6:36 task is relatively small in scope.
6:39 I've seen a lot of people manage these
6:41 tasks in spectrum and development
6:43 workflows using markdown files. I don't
6:45 think that's a very good idea. I tend to
6:47 keep tasks in linear or a task
6:49 management system or some kind of
6:51 project management system
6:53 because if you think about it,
6:55 you don't really want to be storing your
6:56 tasks in markdown files. Although, you
6:58 can hand those to an agent. It's very
7:01 easy to get lost. There's no way to
7:02 track status easily. You're better off
7:05 using a traditional system like linear
7:08 to manage your tasks and you can connect
7:09 an MCP to linear. It's very easy to
7:12 delegate the task to an agent directly
7:14 from linear. And when you do that, you
7:16 have a way of tracking what's in
7:18 progress, what the status of each bit of
7:20 work is. Imagine you're working on a
7:22 hundred different tasks. If you're using
7:25 markdown files to manage your task
7:27 planning, it's going to be a complete
7:28 mess.
7:29 I would recommend using a proper task
7:31 management system even when you're using
7:33 agents to write the code. Just a final
7:35 thing on this, I actually use AI to
7:37 break requirements down. So, I used to
7:40 write requirements by hand. And if you
7:41 work in a software team, you'll find a
7:43 senior engineer will typically decompose
7:45 a bit of work into a number of smaller
7:47 tasks.
7:48 Now, we can just use an AI agent to give
7:50 it the spec and ask it to break down the
7:52 work into tasks. This does a lot of the
7:54 heavy lifting for us, and it saves us a
7:55 ton of time.
7:57 Often, those tasks are very well
7:58 described and very clear as well. All
8:00 right, so when it comes to building,
8:02 context is everything. So, you you don't
8:04 want to say to an AI agent, "Build me an
8:06 authentication feature." because the
8:08 agent will have to guess about what you
8:09 want. This is where we hand off the
8:12 design or the spec to an agent. We want
8:14 to make sure that the agent has all of
8:16 the information it needs to succeed. And
8:18 there are a couple of questions you can
8:20 ask when it comes to this. So,
8:23 give it the background on what you're
8:24 building.
8:25 Make sure that the agent is clear about
8:27 your technical design decisions. Have
8:29 you specified the task clearly enough?
8:33 Are there patterns or conventions to
8:34 follow? And then, are there things to
8:37 avoid? So, are there any things that the
8:38 agent should not do?
8:40 If you follow that checklist and you
8:42 give that information to an agent, it
8:44 doesn't really matter what particular
8:45 format or spec framework you're using.
8:48 The AI agent has enough information to
8:50 execute the task correctly. Perhaps the
8:53 most important principle that I think
8:54 about with AI coding agents in
8:56 particular is that you should never
8:58 accept the first pass. And the reason
9:00 why, if you ask Claude code to go and
9:02 write some code, it's probably going to
9:04 be working code. But then, if you go and
9:06 ask Claude code to review the code a
9:08 second time,
9:10 it will probably find a bunch of errors,
9:12 a bunch of mistakes, a bunch of things
9:14 that could be improved, essentially.
9:16 And this is the same way with human
9:18 developers as well. So, when I write
9:19 code, chances are the first thing I
9:22 write is going to be working, but maybe
9:23 not optimal. And I will go through
9:26 multiple iterations to ensure the
9:27 quality is high. And we want to do the
9:29 same thing even when we're using AI
9:31 coding agents.
9:33 Never blindly accept their first output
9:35 because the agent is focused on making
9:37 things work, it's not necessarily
9:40 focused on making it perfect. So, you
9:42 can build the code, then you can ask
9:44 agents to self-review. You can do this
9:47 with a sub-agent, or you could do it
9:49 with some automated tooling. But, the
9:51 idea is to find errors in the code, and
9:54 then give that feedback to the LLM so
9:56 that it can self-correct and self-review
9:58 and self-improve. You could also do a
10:00 human review as well. So, this is
10:03 obviously a fundamental thing. Once the
10:04 AI agent has written some code, you can
10:06 give feedback. And this is the cycle.
10:09 So, basically, you implement the task,
10:11 you review the code and iterate on it
10:13 until it's correct. Some common things
10:15 you want to look out for so are edge
10:17 cases and error handling, security
10:19 vulnerabilities, missing input
10:21 validation, uh performance issues.
10:24 What I tend to do is just ask the agent
10:26 very simple questions. Go and look at
10:28 the code you just wrote and find any
10:29 errors or potential issues in the code.
10:32 Something like that. You don't need a
10:33 very complex prompt, but nine times out
10:35 of 10, the agent will find a bunch of
10:37 issues.
10:38 When you do this, your code will
10:39 drastically improve. Another way you can
10:41 use AI in this step of the process, in
10:43 the review step, is to build review
10:46 steps into your CI/CD process. So, on
10:49 GitHub, when you open a pull request,
10:51 you could have an AI agent automatically
10:53 triggered that will review the code and
10:55 then give feedback on the PR. There are
10:57 many different open-source tools, and I
10:58 will cover these in a different video.
11:00 But, there are many different tools you
11:02 can use to get code review that that you
11:04 can then give back to an agent to
11:06 improve the code. So, the key thing here
11:07 is that never accept the first output,
11:10 always iterate, always review the code,
11:12 and always try and improve it. So, after
11:14 we've done all that, we can now push our
11:16 code to production. This is the fun bit.
11:18 This is why we write code in the first
11:20 place.
11:21 One thing I like to think about with
11:23 deployment is that you can use AI to
11:24 help you here as well. So, I was
11:26 recently deploying a system to Google
11:29 Cloud, and I hadn't used it in a while.
11:31 I was getting stuck at multiple
11:32 different places. If you've ever used a
11:34 cloud provider, you know how messy and
11:36 how difficult they are. But, you can use
11:38 AI agents to help you debug. So, for
11:40 example, I was using an AI agent to use
11:42 the Google Cloud CLI
11:44 to help me diagnose permissions errors,
11:47 to actually go and fix them as well. So,
11:49 you can use AI agents not only to write
11:51 your code and to test your code and to
11:53 plan your work. You can also use it to
11:55 help you deploy your software as well.
11:58 AI can also write Terraform code as a
12:00 great example. It can, uh, you know, run
12:02 Git commands. It can do all kinds of
12:04 things that can help you with the
12:05 deployment process. Do the thinking and
12:07 then move fast. So, use AI agents for
12:11 everything you do. You can apply them to
12:13 design. AI agents can help you with
12:15 diagrams, in writing, in technical
12:17 design. It can help you with writing
12:20 code. It can help you testing the code,
12:23 and it can also help you with the
12:24 deployment and even the operational side
12:26 as well.
12:27 Our job now is to figure out how to
12:29 adopt AI in every single step of the
12:31 process to raise the bar of quality and
12:34 to help us go faster. So, I hope that
12:36 was a useful breakdown of the end-to-end
12:38 workflow. I often find myself getting
12:40 lost with all of these new tools and all
12:42 of the different approaches that people
12:43 are taking to build software with AI
12:45 agents.
12:46 And I think it helps to sometimes remind
12:48 ourselves of the fundamentals that
12:50 nothing has really changed in terms of
12:52 the development process. The only thing
12:54 that has changed is we're handing off
12:55 more of the work to AI agents. We can
12:58 move faster than we could before. And AI
13:01 can help us in every single step of the
13:03 process.
13:04 Beyond that, nothing has fundamentally
13:06 changed. So, if you're feeling lost or
13:08 confused, it's always useful to go back
13:10 to basics. I hope you found the video
13:12 useful. If you do have any questions or
13:14 comments, if you disagree with anything,
13:16 let me know in the comments. I'd love to
13:17 hear it.
13:18 Thank you for watching, and I'll see you
13:19 in the next video. Take care.


---

## Source: the-true-power-of-ai-coding-build-your-own-workflows-full-guide.txt

- Original path: `addintional info to add\the-true-power-of-ai-coding-build-your-own-workflows-full-guide.txt`
- Size: `33149` bytes
- SHA256: `E52574059CD67F4CD55E43688CA26FCD5344A3358EC8AE954915F902ED6C6E2B`

---

The True Power of AI Coding - Build Your OWN Workflows (Full Guide)

0:00 No matter what you are building, if
0:02 you're working with AI coding
0:03 assistants, it is a lot more than just
0:05 prompts. It's all about creating
0:07 systems, workflows that can evolve to
0:10 fit your needs. I know it's tempting to
0:12 just wing it. But if you want to build
0:14 anything substantial, you do need
0:16 structure. There's a reason why we have
0:18 so many strategies around context
0:20 engineering like the PRP framework or
0:23 BMAD, the GitHub spec kit. There's a
0:25 million of them out there. And that's
0:27 actually the problem as well. It's easy
0:29 to get lost in the sauce, so to speak,
0:31 with all these different strategies and
0:33 how they apply to you. Now, the solution
0:35 to this problem is what I'm going to be
0:36 covering with you in this video. We're
0:38 going to be scrapping the notion of
0:40 existing frameworks like PRP and BMAD,
0:43 and we're going to be building our own.
0:45 I'll show you how it works. Because if
0:46 we can understand the philosophy and
0:48 strategies that go into all these
0:50 existing frameworks, not only can we use
0:52 them better because we actually
0:54 understand them, but also we can tweak
0:56 them to our needs and even build our own
0:58 workflows and systems. This is where the
1:00 power really comes into your hand. And
1:03 this diagram that you're looking at here
1:05 is everything I'm going to cover with
1:07 you in this video. It sums it up really
1:09 nicely because I want to keep things
1:11 simple and fundamental here. I want to
1:13 give you a process that you can apply
1:15 that'll take you super far with AI
1:17 coding assistance no matter what you are
1:19 making. So the primary mental model that
1:21 guides most of my coding is the
1:23 three-step process of planning, then
1:26 implementing and then validating. That's
1:28 we're going to build a workflow around.
1:30 And so I'll just go through at a really
1:31 high level everything that we're
1:33 covering here. Then we'll get into
1:34 detail and I'll show you a real example
1:36 as well. And so first of all, I always
1:38 start with planning. And I have a
1:41 multi-step process for this. I start
1:43 with vibe planning. That's what I like
1:45 to call it. We're basically just
1:46 exploring very free form the different
1:48 ideas that we want to implement for a
1:50 new project or the codebase for an
1:52 existing project. And then from there,
1:54 we create our initial requirements for
1:56 that new feature or new project. And
1:58 then we prepare all of the context so
2:00 the AI coding assistant has what it
2:02 needs to get the job done. And slash
2:04 commands are great for this. We're going
2:05 to be covering slash commands and sub
2:07 aents and other components of AI coding
2:09 in this video as well. And then once we
2:11 have all of the context we need, we want
2:13 to then execute on it to actually
2:15 produce our code. And creating a
2:17 predefined workflow through slash
2:19 commands is fantastic for this as well.
2:22 So we can define how we want to manage
2:24 tasks and research our codebase, those
2:26 kinds of things. And once we have the
2:28 code outputed, it is time for
2:30 validation. And we want to leverage AI
2:32 coding assistants to validate their own
2:35 work and then put ourselves in the
2:37 process as well. making sure that we can
2:39 really be the project manager for the AI
2:42 coding assistant. And then the last
2:44 thing that I'll be covering throughout
2:45 this video here is the different
2:48 concepts for AI coding assistance and
2:50 how they apply to different parts of our
2:52 workflow like global rules and sub aents
2:54 and slash commands. For example, we
2:56 don't actually want to use sub aents in
2:58 the implementation phase. So I'll talk
3:00 about how that works, really the
3:01 philosophy behind it. This will also
3:03 help you understand how these different
3:05 strategies work like PRP and BMAD. Now,
3:08 what I'll be building live here is not
3:10 the focus of this video. So, I thought I
3:13 would take this as an opportunity to do
3:14 something fun and different, showing you
3:16 something that I'm working on personally
3:18 because I've been overhauling my
3:20 productivity workflows recently,
3:21 switching to an app called Obsidian. It
3:24 is a free and local knowledge management
3:27 platform. You can kind of think of it
3:28 like Notion except there's also a ton of
3:30 open source plugins to extend it. I'm
3:32 working on some myself. I will probably
3:35 be creating a lot more content around
3:37 Obsidian in the future because you can
3:39 also use it as your second brain. It's
3:41 super cool and there's a lot of AI
3:43 integrations that I have been working on
3:45 including what I'm going to showcase in
3:47 this video. So, we have the co-pilot
3:49 chat on the right hand side. This is
3:52 connected to, you can see it right here
3:53 in the bottom right the Dynamis Obsidian
3:55 agent. I have my own AI agent that I
3:58 have running in Docker on my computer
4:00 and that is what Obsidian is connected
4:01 to. It's super cool. So, I can say tell
4:03 me about and then I can reference files
4:05 within Obsidian like the one that you're
4:06 looking at right here. I can send this
4:08 in and it's going to my custom agent.
4:10 This connection here is what we're going
4:12 to be building out in this video just as
4:14 an example for the custom workflows that
4:16 we're creating here. It's super cool.
4:17 Take a look at that. All right. Now,
4:20 let's dive into the process and we'll
4:21 start with the planning phase here,
4:23 which honestly is the most important
4:25 phase by far because if you're not
4:27 curating your context correctly for the
4:29 AI coding assistant, it will fall on its
4:32 face. And by the way, everything in this
4:34 video is going to be rather brief. I
4:36 just want to start with the basics here.
4:38 If you really want to dive deep into
4:40 mastering AI coding assistance with me,
4:43 definitely come be a part of the
4:44 half-day workshop that I'm hosting on
4:46 September 27th. This is where we really
4:48 dive deep. All of my strategies in one
4:51 place for getting the most out of AI
4:53 coding assistance. So, hope to see you
4:55 there. Link below. Definitely check it
4:57 out. I am going to be pouring so much
4:59 value into that workshop. And so, right
5:01 now, you kind of get a taste actually of
5:03 a lot of what we're going to be covering
5:04 here. I want to help you build your own
5:06 AI coding workflows so you can
5:07 understand the philosophy and strategies
5:10 that go into all these different
5:11 frameworks. And so, with that, we can
5:13 start with the planning phase. Now, the
5:15 first thing I always do to start the
5:17 planning phase is vibe planning. Now,
5:19 hear me out on this. If you've seen my
5:21 AI coding content in the past, you know
5:23 that I'm not a fan of vibe coding, but
5:26 that's different because that's when we
5:27 get into the actual implementation. We
5:29 definitely want a lot of structure and
5:31 validation there. But when we're in the
5:33 planning phase initially, all we're
5:35 doing is exploring ideas, architecture,
5:38 concepts, figuring out our tech stack.
5:40 We're doing that with our AI coding
5:43 assistant as our research companion. And
5:45 I purposefully do not want this to be
5:48 structured because I want a more
5:49 freeformed mindset as I'm working in
5:52 this initial phase. And so for new
5:54 projects, this means researching online
5:56 resources, previous projects that you've
5:59 implemented. I actually love to do this
6:00 where I'll create an examples folder in
6:02 my codebase and take existing projects
6:05 and put it there and research that with
6:07 my coding assistant. And then for
6:09 existing projects, it's generally
6:11 researching and analyzing the existing
6:13 codebase to see where our new feature is
6:15 going to fit in. And of course, this
6:16 isn't an exhaustive list. It's really
6:18 whatever you want to do to have a
6:20 conversation with your AI coding
6:22 assistant so you're both on the same
6:23 page of what needs to be fully planned
6:26 and implemented. And so once you have
6:28 that conversation with the coding
6:29 assistant, within that same context
6:32 window, I'll have it help me create what
6:34 I like to call an initial MD. This is
6:36 the first file that we create for our
6:39 planning. Just a simple markdown
6:41 document. The goal is to produce a
6:43 markdown doc with a detailed feature
6:46 request, otherwise known as a PRD. This
6:48 is the kind of document that's more high
6:51 level, the kind of thing you could give
6:52 to another human to describe what you're
6:54 looking to build. So, at this point,
6:56 we're not super specific to prompting
6:58 strategies for the coding assistant yet.
7:01 And so, for a new project, generally,
7:03 you want this to be very high level. a
7:05 simple MVP for the application you want
7:07 to build, including a lot of references
7:09 to the supporting documentation and
7:11 examples that you found in the vibe
7:13 planning stage. And then for the
7:15 existing project, it's pretty similar,
7:17 but it's going to be a lot more focused
7:19 and detailed that specific feature you
7:22 want to build into the existing
7:23 codebase, including a lot of references
7:25 to what I like to call integration
7:27 points. The files that have to be
7:29 edited, maybe the files you want to
7:31 reference for architecture. Again, all
7:34 of those things that you discover with
7:35 the coding assistant in the vibe
7:37 planning stage. So once we have this
7:39 initial MD, that's when we want to take
7:42 our requirements and turn it into a
7:46 full-fledged prompt for the AI coding
7:48 assistant. And this is really where the
7:50 strategies around context engineering
7:52 come into play. You've probably seen
7:54 this diagram on my channel before, but I
7:56 recreated it from scratch in Excaladraw.
7:58 Hope you're proud of me. I put way too
8:00 much effort into making this. It's kind
8:01 of silly, but anyway, we have RAG,
8:04 providing external documentation to our
8:06 coding assistant, memory, like our
8:08 conversation history. We have task
8:10 management. This is super important for
8:12 the planning phase, and we'll talk about
8:14 this in a little bit. And then, of
8:15 course, we have prompt engineering,
8:16 which is a lot about how do we take our
8:18 initial request and craft it in a way
8:20 where we have a plan of attack for the
8:23 coding assistant. And so, the goal in
8:25 this stage, we are producing a second
8:28 markdown document. So, we take our
8:30 initial MD and we produce a detailed set
8:34 of goals, tasks, and resources for the
8:36 AI coding assistant. Basically giving it
8:38 everything it needs to get the job done
8:40 effectively. So, we're taking our PRD,
8:43 turning it into a full-fledged
8:45 implementation prompt. And by the way,
8:47 this is exactly what the PRP framework
8:49 accomplishes that I cover on my channel.
8:51 And so I'm starting from the basics
8:53 here, but it's kind of cool how like it
8:54 naturally progresses into kind of a
8:56 light bulb moment where it's like, "Oh
8:57 yeah, PRP, that totally makes sense
8:59 because that's exactly what we're
9:00 doing." When you generate a PRP, you're
9:02 taking your initial requirements and
9:04 turning it into a much more structured
9:07 document for the coding assistant that
9:08 has things like the task list that you
9:11 want to knock out, your desired codebase
9:13 structure, your success criteria, all
9:15 the documentation examples that you
9:17 wanted to reference. That is what we're
9:18 creating with our planning document. And
9:21 there are a lot of tools to help us get
9:23 the job done here. I'll show you Archon
9:25 in a little bit with our live example,
9:27 the PRP framework, of course, even
9:29 simple web search tools that we have
9:31 with things like cloud code. That is a
9:33 part of the rag that we have for context
9:36 engineering and archon is also for rag
9:38 by the way and also our task management.
9:40 And then a lot of other tools coming out
9:42 like the GitHub spec kit is rather new,
9:44 really cool, provides a lot of commands
9:46 to help us do a very similar thing that
9:48 we're doing here with the vibe planning
9:50 and then you know creating our initial
9:52 requirements and creating the plan.
9:53 GitHub spec kit does a lot of that. And
9:55 so again, understanding the philosophies
9:57 here that go behind these different
9:59 strategies. All right, let's get into
10:00 the codebase now because I want to show
10:02 you how this works in action. Now, for
10:04 brevity sake, I already had the
10:06 conversation complete, but I'll walk you
10:07 through my general process, how I'm
10:10 applying the principles to start to
10:12 create this AI coding workflow that I'll
10:14 showcase here. That is just an example
10:16 of the kind of thing that you can build.
10:18 And so, first of all, we're starting
10:20 with a brand new conversation with cloud
10:22 code. And this works no matter your
10:23 coding assistant, of course. And the
10:25 first thing I do whenever I start a new
10:28 conversation working in an existing
10:30 codebase like I'm doing for this
10:32 Obsidian integration is I will run a
10:34 primer slash command. And so we're
10:36 starting to get into slash commands
10:37 here. Slash commands are simply prompts
10:40 that you want to turn into reusable
10:42 workflows which very much goes with the
10:44 theme that we have here. creating a
10:46 system for AI coding both with mental
10:48 models and also with literal workflows
10:51 that we have created as these markdown
10:53 slashcomands here. And so what the
10:56 primer does is it lists out instructions
10:58 for files to read to quickly catch the
11:01 AI coding assistant up to speed on our
11:03 project when we're starting a new
11:04 conversation. And so that way it kind of
11:07 feels like our coding assistant has been
11:09 working with us on this project for a
11:10 while now, but it is actually a fresh
11:12 conversation. And so it does a bunch of
11:14 research through the key files in my
11:16 codebase. And then at this point I'm
11:18 ready to move to the vibe planning and
11:20 slash commands are pretty important for
11:22 most stages of our workflow here. Really
11:26 every single stage. And so I have this
11:28 part of the diagram here talking about
11:30 this for the planning stage. This is
11:32 where we want to set up our global
11:34 rules, the key instructions for our
11:35 coding assistant. And then we use sub
11:37 aents and slash commands to automate
11:40 parts to create those workflows for
11:42 parts of our planning stage. And we do a
11:44 lot of that for validation and
11:46 implementation as well. Except we don't
11:48 use sub agents for implementation. I'll
11:50 talk about that in a second here. So
11:52 yeah, we're in the VI planning stage
11:53 now. And this is where, like I said, we
11:56 don't have structured prompts. It's
11:58 super basic here. I just describe at a
11:59 high level what I want to build because
12:01 I want my AI agent to be able to connect
12:03 to my Obsidian vault. I give an example
12:05 that I pulled from a past project that I
12:07 want it to reference. This is just the
12:10 high level. Let's start to get into the
12:12 code. Then once we do this exploration
12:14 and we're confident in its understanding
12:17 and you can kind of elaborate more and
12:19 and fix up some of its understanding,
12:21 you make sure you're on the same page
12:22 with it. Then you will go and create the
12:25 initial MD. And so you on the same page,
12:28 you did your planning. Now we start to
12:30 add in our structure. And so in this
12:32 case, I'm calling my initial MD OpenAI
12:35 API compatibility. It's just a markdown
12:37 document with that initial request that
12:39 we have for our AI coding assistant. So
12:41 we have the feature that we want at a
12:42 high level, the endpoints that we want
12:44 to build, some examples of how we want
12:46 to interact with our agent. It's not
12:49 super super planned out at this point,
12:51 but this is our initial request that
12:53 we're then going to turn into the full
12:56 plan. That's the key here is at this
12:58 point we're just creating our initial
13:00 MD. And so we have that built out. And
13:03 now at this point that is the end of our
13:05 first conversation. We want to move now
13:08 to another fresh conversation because we
13:11 want to move on to the next stage of our
13:12 workflow. Taking that request and
13:15 turning it into the full plan with all
13:17 of the context engineering. And so I've
13:19 created yet another slash command for
13:22 this part of the workflow. So I'm
13:24 calling it create plan.md. And again,
13:26 this is just an example of what your
13:28 planning workflow can look like. You can
13:30 build this however you want. Just
13:32 generally, you'd want to kind of follow
13:34 the principles that I have covered in
13:36 this diagram. And so, I walk you through
13:38 this three-step process. And now, I'm
13:40 just building slashcomands and sub aents
13:42 around this general flow, doing some
13:44 things that are kind of more specific to
13:46 my project as well. And so, you can
13:47 build these kind of flows to however
13:49 works best for what you are creating.
13:51 And so for my create plan, basically I'm
13:55 just telling it to take the requirements
13:57 document, that's what we just finished
13:59 creating, and then go through a few
14:01 different phases. So read and understand
14:03 the requirements. We have a research
14:05 phase where I wanted to use web
14:06 searching for rag and also archon if it
14:09 is available. And then I also have this
14:12 codebase analyst sub agent. So I created
14:14 a sub agent that it calls upon to do a
14:17 lot of that extensive research. And not
14:19 to get too deep into sub agents right
14:21 now, but they're very powerful because
14:22 they have their own context window. So
14:24 they can do a ton of research and then
14:26 output a summary of that without it
14:28 polluting our primary conversation. So
14:30 we keep our context window concise and
14:32 focused. And so this sub agent just does
14:35 a lot of research around our existing
14:37 codebase to figure out exactly what our
14:40 plan should look like. So we need to
14:42 create you know that implementation plan
14:44 task by task our desired codebase
14:46 structure the documentation we want to
14:48 reference and the codebase analyst and
14:50 this whole slash command helps us create
14:52 that and so I'll go back into the
14:54 conversation and kind of show you what
14:56 that looks like. So first of all I ran
14:58 the create plan here with the
15:01 requirements document passed in as my
15:03 argument in the command and it starts by
15:05 calling the codebase analyst sub aent.
15:07 So it does a ton of research. It figures
15:09 out exactly how we're going to be
15:11 integrating this new feature in our
15:13 codebase. It does some rag searches with
15:16 archon. It does some codebase example
15:18 searches and then it produces our plan.
15:22 And so this is kind of taking that
15:24 initial MD to the next level with all of
15:26 that context engineering. And so these
15:28 things I've been speaking to, we'll find
15:30 those here. Like here is our step by
15:32 step all the tasks that we want to
15:33 implement. And it gets really granular
15:35 here which is always good. If you want
15:36 to be specific with AI coding
15:39 assistance, that's exactly what this
15:41 plan gives us. We have the different
15:43 files that we need to modify, the ones
15:45 that we need to create, existing
15:47 patterns to follow, everything that it
15:50 needs to get the job done. Super cool.
15:52 And we have the success criteria as
15:54 well. Maybe I could add like a desired
15:55 codebase structure, but it's more about
15:57 editing existing files. So I think like
15:59 for what I'm building here, this plan is
16:01 absolutely perfect. So now that we have
16:03 the plan created, that is the end of
16:06 what I've gotten to so far. So now with
16:09 that comprehensive plan, well, first of
16:11 all, I'd recommend validating it,
16:13 actually making some adjustments with
16:15 the help of the coding assistant if
16:16 necessary. But once you're confident in
16:18 the plan, then it is time to move on to
16:21 implementation. Now, for implementation,
16:23 the most important thing is to have a
16:26 workflow that guides the coding
16:27 assistant on how to knock out the tasks
16:30 one by one. And the task management here
16:33 is the most important thing, especially
16:36 if you're trying to do quite a bit in
16:38 one request. If the coding assistant
16:40 tries to do too much at once, that's
16:42 when you have a lot of hallucinations.
16:43 And so tasks are your way to have a
16:46 larger request, but still have it be
16:47 very focused and granular on one little
16:50 thing each time. Like if we go back to
16:52 our planning document, you could see
16:54 that like we have very granular tasks
16:57 that we're having a knockout one by one.
16:59 And so we're going to create another
17:01 slash command to define this workflow.
17:04 And exactly what your slash command
17:06 looks like depends entirely on what
17:08 you're doing for your task management.
17:11 And so in my case, I'm using archon for
17:13 task management. And so my workflow
17:16 speaks a lot to how exactly I want to
17:18 use archon. Now it's not the case that
17:20 you have to use archon. That's the point
17:22 here is this is just an example of my
17:24 workflow. So it's creating all these
17:26 tasks here for this OpenAI API
17:28 compatible implementation. But you could
17:30 be using Cloud Taskmaster or another
17:32 Markdown document to manage your tasks.
17:34 However you want to do it, even just the
17:36 internal task management tools that we
17:38 have within these coding assistants like
17:40 Cloud Code. The important thing is just
17:42 to create a workflow around the task
17:45 management. And so when I go to my
17:47 execute plan here, I'll just show you
17:49 really quickly at a high level what this
17:51 looks like. And this might end up
17:52 looking a lot different for your
17:53 workflow, but I want to read my plan
17:56 that I've created. This could be a PRP
17:57 if we're using the PRP framework or, you
18:00 know, it could be the project brief if
18:01 we're using the BMAD method. And then I
18:03 want to set up the project in Archon if
18:05 it isn't already. Create all these
18:07 tasks. I want to analyze the code. And
18:10 then I have this cycle here where I need
18:13 to mark a task as to-do or doing. And
18:17 then it'll go through that task and then
18:18 move it to review and then move on to
18:20 the next task. And it'll do that in a
18:22 cycle until everything is done. And then
18:24 it'll move on to validation. And we
18:26 actually have a sub agent to help with
18:28 validation as well. So it'll execute
18:30 this guy to within its own context
18:32 window, create a bunch of tests, and
18:34 make sure that our code is good, and
18:36 then report back to our primary coding
18:37 assistant if there's anything that needs
18:39 to be fixed up. And so yeah, generally
18:42 my process around validation is while
18:44 the coding assistant is running, I will
18:46 validate to make sure that it's using my
18:48 MCP servers properly, that it's editing
18:51 the right files and looking in the right
18:53 places, I generally watch it at least
18:56 kind of closely to test these things.
18:58 And then once we have the code outputed,
19:00 this is where our plan should also speak
19:02 to how the AI coding assistant can
19:04 validate its own work. And then we want
19:06 to be a part of this process as well.
19:09 Performing a code review because we
19:10 don't want to vibe code. We want to
19:11 actually look at and understand the code
19:13 that is being produced and then running
19:15 any kind of manual tests that we want to
19:16 like actually talking to the agent in
19:18 Obsidian like we'll see at the end of
19:20 this video here. And sub aents can be
19:23 great for validation because again we
19:25 want isolated context windows to not
19:27 pollute our primary conversation so that
19:29 we can have a sub agent run a bunch of
19:32 different tests to make sure that
19:33 everything is rock solid. And one last
19:36 thing for validation. There's another
19:38 agent that I love using to review my
19:40 work. You can think of it as another
19:42 validation sub aent and that is Code
19:44 Rabbit. an AI powered code review
19:47 platform and they are sponsoring this
19:49 video but I do use them every single day
19:51 for my work and it's free for open
19:54 source projects so naturally I've
19:56 integrated code rabbit with archon every
19:59 single pull request that is made to the
20:01 archon GitHub repository is
20:03 automatically reviewed by the code
20:05 rabbit agent it analyzes my codebase
20:07 deeply and my poll request it
20:09 understands how it affects things and
20:11 outlines that here it gives me a
20:13 beautiful sequence diagram for every PR
20:15 it suggests reviewers and of course we
20:17 have the allimportant actual code review
20:19 here with the changes that it recommends
20:21 and I will literally take these and give
20:23 them to claude code or whatever AI
20:25 coding assistant I'm using. So, it's
20:27 become a crucial part of my development
20:29 workflow, and I'm just very thankful to
20:31 have Code Rabbit for Archon, especially
20:34 with all the poll requests that we're
20:35 managing every single week. And they
20:38 have a CLI tool now, so you can use Code
20:40 Rabbit not just to review your PRs in
20:42 GitHub, but now you can also use it as
20:44 one of your agents reviewing things
20:46 locally when you're developing on your
20:48 machine. Code Rabbit also offers free
20:50 trials for their paid tiers and is free
20:53 for open- source software like Archon
20:55 like I mentioned earlier. And the
20:57 reviews with the CLI and IDE tools are
20:59 free with rate limits that apply of
21:01 course. And so if you've been feeling
21:03 overwhelmed with the amount of code that
21:05 you've been creating with AI tools, this
21:08 is your ticket to maintain quality
21:09 without slowing down. I'll have a link
21:11 to Code Rabbit in the description. I
21:13 would definitely recommend trying them
21:15 out. So on to implementation in action.
21:18 And this is pretty simple overall
21:20 because we did so much of the work up
21:21 front in the planning stage. So now
21:24 thanks to the plan that we've generated
21:26 that has all the components of context
21:28 engineering. All we have to do is
21:30 execute our predefined workflow passing
21:33 in the plan that we have created. So
21:35 again we have the execute plan/comand
21:38 where we take in our requirements. We
21:39 break it down into all those tasks. And
21:41 in this case I'm doing everything in
21:43 archon. And so I went through this
21:45 implementation already. So, we have all
21:47 the tasks in done. It knocked it out
21:50 100%. Is actually really incredible. And
21:52 so, I'll go back to the terminal here
21:53 and show you uh the conversation that we
21:55 have. And so, it's partially cut off
21:57 because there's a lot of work that it
21:58 did here. But, yeah, we just sent it in
22:00 to implement literally everything. And
22:03 it goes for a while here. There's a lot
22:05 that it's taking care of, but I have
22:06 quite a bit of trust in the coding
22:09 assistant because of all the context
22:11 that I gave it and how things are split
22:13 up between the different tasks. And you
22:15 can see that was doing a lot of the task
22:16 management with archon here as it is
22:19 changing things. So it's interled
22:20 managing tasks making changes and then
22:23 going through that cycle. And then at
22:25 the very end here we have validation.
22:27 And validation is kind of mixed into
22:29 implementation as well. And that is
22:31 where we invoke our specialized
22:33 validator sub aent. And so it went for
22:36 quite a while here. Actually probably
22:38 longer than I really needed it to go. It
22:40 did a lot of validating with unit
22:42 testing and other things to make sure
22:43 that our code is rock solid. And the
22:45 important thing that I want to call out
22:47 here is that for the validation that's
22:49 when we go back to using sub aents. So
22:52 planning and validation we use sub aents
22:55 but I on purpose did not use any sub
22:58 aents during the implementation. And the
23:00 reason for that is when we're actually
23:03 making the code changes doing the
23:05 implementation, we want everything to
23:07 remain in the primary context window for
23:10 cloud code or whatever our AI coding
23:12 assistant is. If we have different sub
23:15 aents implement different parts of our
23:17 codebase, they're not really
23:18 communicating with each other and memory
23:20 is not shared between them. So you start
23:22 to have conflicting changes and
23:23 overlapping changes. It becomes a mess
23:26 when you use sub aents for the actual
23:27 code creation. And so generally I always
23:30 use sub agents for the research upfront
23:33 and then also having a validator
23:35 specialist so I can give a very specific
23:37 system prompt to this agent for how to
23:38 validate my code. So that's the really
23:41 important distinction I want to make
23:42 there. Otherwise for slash commands I'm
23:44 using them in every single part of the
23:46 implementation like you saw. And then
23:48 global rules. I haven't covered too much
23:50 in this video, but really this is what
23:52 you'd set up in your planning phase
23:53 initially. When you're trying to just
23:55 think at a high level like what are the
23:56 instructions that I want my coding
23:58 assistant to follow literally no matter
23:59 what I'm doing, starting the project
24:01 from scratch, adding in a new feature,
24:03 doing a bug fix, there are a lot of
24:04 those kind of golden rules that you want
24:06 to put within your claw.md whatever that
24:10 file is called for your coding
24:11 assistant. And then of course the last
24:13 step here is our own review. You
24:15 definitely want to perform a code review
24:17 on everything that was outputed by your
24:19 coding assistant. Otherwise, you're
24:20 still just reverting back to Vive
24:22 coding. So, perform a review and then
24:24 run manual tests as well. Like I have my
24:27 agent API running again in Docker. I
24:29 have the connection already set up in
24:31 Obsidian. So, I'll just show you this
24:32 really quick. I'll go into my chat
24:33 window here and I'll say summarize. And
24:35 then I'll just reference this whole
24:37 diagram that we've been going through
24:38 throughout this video. So, I'll send
24:40 this to send to my agent. It's
24:41 communicating to literally what we just
24:43 built using the OpenAI API compatible
24:46 endpoints. And there we go. We have a
24:47 summary of the full workflow based on
24:51 our diagram here. Absolutely beautiful.
24:53 The implementation is flawless. And now
24:55 we have this workflow that we can use
24:57 for other things as well. I mean the
24:58 whole planning slash commands and primer
25:01 that I had and the sub agents for
25:02 validating and executing and my whole
25:04 process for task management in archon
25:06 like it's not actually that specific to
25:09 this specific implementation. Like I can
25:11 take this and reuse it for anything that
25:14 I want to build. And that is the main
25:16 thing that I'm trying to describe to you
25:18 in this video is how you can create
25:21 these combinations of rules and sub
25:23 agents and slash commands and even just
25:25 like a mental model of how you plan then
25:27 implement and validate and like that
25:29 becomes your process that you can reuse
25:31 for anything. you've now built a system
25:33 for working with AI coding assistants.
25:36 And even when you start to incorporate
25:37 other things like the PRP framework or
25:39 the GitHub spec kit, you're still
25:41 following that same mental model, just
25:42 using those approaches to basically
25:45 augment what you have and you can tweak
25:46 it to your needs. So that's everything
25:49 that I've got for you today. If you
25:50 appreciated this video and you're
25:52 looking forward to more things around AI
25:55 coding and building out these kinds of
25:56 workflows, I would really appreciate a
25:58 like and a subscribe. And with that, I
26:00 will see you in the next


---

## Source: ArsenalSC-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\ArsenalSC-OFL.txt`
- Size: `4373` bytes
- SHA256: `8DDD61B18BA2C0D0DBE4A691CF5F1A0673F473D02FA0546E67EE88C006AEFF6E`

---

Copyright 2012 The Arsenal Project Authors (andrij.design@gmail.com)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: BigShoulders-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\BigShoulders-OFL.txt`
- Size: `4397` bytes
- SHA256: `FBC746AABF0EB1847DFD92E2EFC4596D79FA897D60B8E64062A22F585508FB3F`

---

Copyright 2019 The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Boldonse-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\Boldonse-OFL.txt`
- Size: `4390` bytes
- SHA256: `45CC82AB4032273C0924025FFCF8F0665A68E1A5955E3F7247E5DAF1DEEB1326`

---

Copyright 2024 The Boldonse Project Authors (https://github.com/googlefonts/boldonse)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: BricolageGrotesque-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\BricolageGrotesque-OFL.txt`
- Size: `4403` bytes
- SHA256: `0E4F4EB8534BC66A76ACA13DD19C1F9731B2008866B29CCFF182B764649DF9B4`

---

Copyright 2022 The Bricolage Grotesque Project Authors (https://github.com/ateliertriay/bricolage)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: CrimsonPro-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\CrimsonPro-OFL.txt`
- Size: `4394` bytes
- SHA256: `35680D14547B6748B6F362A052A46D22764CE5ECCF96E18B74F567BB2EE58114`

---

Copyright 2018 The Crimson Pro Project Authors (https://github.com/Fonthausen/CrimsonPro)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: DMMono-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\DMMono-OFL.txt`
- Size: `4392` bytes
- SHA256: `BFE7842FCB88323E2981E24710C25202677385A8C75FB6A87217B275A0247AE3`

---

Copyright 2020 The DM Mono Project Authors (https://www.github.com/googlefonts/dm-mono)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: EricaOne-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\EricaOne-OFL.txt`
- Size: `4410` bytes
- SHA256: `E0DE629968B52255548D5FAFCF30B24FF9EDAE0EDA362380755A75816404D0FA`

---

Copyright (c) 2011 by LatinoType Limitada (luciano@latinotype.com), 
with Reserved Font Names "Erica One"

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: GeistMono-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\GeistMono-OFL.txt`
- Size: `4388` bytes
- SHA256: `6A873C900F584109B13AE0AAF81D6E3CF0A68751A216B03F7B6C68D547057BB4`

---

Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font.git)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Gloock-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\Gloock-OFL.txt`
- Size: `4381` bytes
- SHA256: `C0A3F3125AC491EF3D1F09F401BE4834C646562F647E44F2BCBC49F0466C656D`

---

Copyright 2022 The Gloock Project Authors (https://github.com/duartp/gloock)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: IBMPlexMono-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\IBMPlexMono-OFL.txt`
- Size: `4363` bytes
- SHA256: `5294CE778857E1EB02E830B6AB06435537D38F43055327E73D03A2D4D57D5123`

---

Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: InstrumentSans-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\InstrumentSans-OFL.txt`
- Size: `4403` bytes
- SHA256: `BF4DC6D13A8CCCD4807133C77A1EE9619A16B92CB23322258725AB6731C2F6E5`

---

Copyright 2022 The Instrument Sans Project Authors (https://github.com/Instrument/instrument-sans)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Italiana-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\Italiana-OFL.txt`
- Size: `4394` bytes
- SHA256: `8373B11312ACE78C4CEC2E8F9F6AA9F2330601107DAC7BCF899C6F2DBD40C5A5`

---

Copyright (c) 2011, Santiago Orozco (hi@typemade.mx), with Reserved Font Name "Italiana".

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: JetBrainsMono-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\JetBrainsMono-OFL.txt`
- Size: `4399` bytes
- SHA256: `A76ABF002C49097D146E86740A3105A5D00450B1592E820A1109A8C5680CD697`

---

Copyright 2020 The JetBrains Mono Project Authors (https://github.com/JetBrains/JetBrainsMono)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Jura-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\Jura-OFL.txt`
- Size: `4380` bytes
- SHA256: `EAF9BDB675F6D87E5FEB88199AB3EA581D3BD2082F426E384FA9C394576D7260`

---

Copyright 2019 The Jura Project Authors (https://github.com/ossobuffo/jura)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: LibreBaskerville-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\LibreBaskerville-OFL.txt`
- Size: `4449` bytes
- SHA256: `55959EEF5B0C3B2E3C1C7631B8FF0F9447D75DE20F29CFA7DB5BCFB026763343`

---

Copyright 2012 The Libre Baskerville Project Authors (https://github.com/impallari/Libre-Baskerville) with Reserved Font Name Libre Baskerville.

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Lora-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\Lora-OFL.txt`
- Size: `4423` bytes
- SHA256: `62E37A82D3F1EF2A70712885FA8B3144B65FD144D8E748D6196B690A354D792C`

---

Copyright 2011 The Lora Project Authors (https://github.com/cyrealtype/Lora-Cyrillic), with Reserved Font Name "Lora".

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: NationalPark-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\NationalPark-OFL.txt`
- Size: `4399` bytes
- SHA256: `81C6C71D83B5B45D7344F96DF12BB4A2477A5B092A9144757EE1D0F50F855175`

---

Copyright 2025 The National Park Project Authors (https://github.com/benhoepner/National-Park)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: NothingYouCouldDo-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\NothingYouCouldDo-OFL.txt`
- Size: `4363` bytes
- SHA256: `7C2A6970584DDAD04919816163746F83B378078015899B18468B40F05E9CE128`

---

Copyright (c) 2010, Kimberly Geswein (kimberlygeswein.com)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Outfit-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\Outfit-OFL.txt`
- Size: `4389` bytes
- SHA256: `1945B62CD76DA9A3051A1660DDE72AFAA64FFC2666D30E7A78356D651653BA2F`

---

Copyright 2021 The Outfit Project Authors (https://github.com/Outfitio/Outfit-Fonts)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: PixelifySans-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\PixelifySans-OFL.txt`
- Size: `4395` bytes
- SHA256: `7F54D1D9F1AE1BA9F2722F978145F90324FEA34CA3C2304B3A29CFA96AC6037E`

---

Copyright 2021 The Pixelify Sans Project Authors (https://github.com/eifetx/Pixelify-Sans)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: PoiretOne-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\PoiretOne-OFL.txt`
- Size: `4366` bytes
- SHA256: `2EAF541F7EB8B512E4C757A5212060ABF5B6EDFEF230E9D7640BF736B315C33A`

---

Copyright (c) 2011, Denis Masharov (denis.masharov@gmail.com)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: RedHatMono-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\RedHatMono-OFL.txt`
- Size: `4394` bytes
- SHA256: `435FBFB7E66988B2A06686A4CB966FAEC733F35D8FE100A1601573C27F3E0BB8`

---

Copyright 2024 The Red Hat Project Authors (https://github.com/RedHatOfficial/RedHatFont)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Silkscreen-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\Silkscreen-OFL.txt`
- Size: `4394` bytes
- SHA256: `6B849745119BBE85EC01FD080C9CD50234DA9F52AC6E48B55D1A424A0C4D7CA9`

---

Copyright 2001 The Silkscreen Project Authors (https://github.com/googlefonts/silkscreen)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: SmoochSans-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\SmoochSans-OFL.txt`
- Size: `4396` bytes
- SHA256: `74C9C4EB88E891483E1B7BC54780B452CBF4F4DF66D4E71881D7569AA2130749`

---

Copyright 2016 The Smooch Sans Project Authors (https://github.com/googlefonts/smooch-sans)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: Tektur-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\Tektur-OFL.txt`
- Size: `4385` bytes
- SHA256: `3F1466CB5438F31782EEB6E895F3A655BC4D090E24263E331F555357D1CB734E`

---

Copyright 2023 The Tektur Project Authors (https://www.github.com/hyvyys/Tektur)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: WorkSans-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\WorkSans-OFL.txt`
- Size: `4397` bytes
- SHA256: `ACE8C22A3326318B54E67C3691857929634205533F454A70EF5A3473DDB2E2BA`

---

Copyright 2019 The Work Sans Project Authors (https://github.com/weiweihuanghuang/Work-Sans)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: YoungSerif-OFL.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\canvas-fonts\YoungSerif-OFL.txt`
- Size: `4398` bytes
- SHA256: `CDCB8039606B40A027A6D24586EC62D5FE29C701343D82A048C829CB28A3DD28`

---

Copyright 2023 The Young Serif Project Authors (https://github.com/noirblancrouge/YoungSerif)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.



---

## Source: LICENSE.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\LICENSE.txt`
- Size: `11357` bytes
- SHA256: `58D1E17FFE5109A7AE296CAAFCADFDBE6A7D176F0BC4AB01E12A689B0499D8BD`

---


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


---

## Source: requirements.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\scripts\requirements.txt`
- Size: `444` bytes
- SHA256: `09402D2D274248E18BB5FD0A0267FD7CBF99B7A2440E73E87F054AA8F259F9DA`

---

# UI Styling Skill Dependencies
# Python 3.10+ required

# No Python package dependencies - uses only standard library

# Testing dependencies (dev)
pytest>=8.0.0
pytest-cov>=4.1.0
pytest-mock>=3.12.0

# Note: This skill works with shadcn/ui and Tailwind CSS
# Requires Node.js and package managers:
#   - Node.js 18+: https://nodejs.org/
#   - npm (comes with Node.js)
#
# shadcn/ui CLI is installed per-project:
#   npx shadcn-ui@latest init



---

## Source: requirements.txt

- Original path: `addintional info to add\ui-ux-pro-max-skill-main\ui-ux-pro-max-skill-main\.claude\skills\ui-styling\scripts\tests\requirements.txt`
- Size: `52` bytes
- SHA256: `80846C98EE02A7E9651EC4EEE6709F840B785646B469AAD5284AB7AB9B344F17`

---

pytest>=7.4.0
pytest-cov>=4.1.0
pytest-mock>=3.11.1



---

## Source: updated-essential-ai-skills-for-2026.txt

- Original path: `addintional info to add\updated-essential-ai-skills-for-2026.txt`
- Size: `20139` bytes
- SHA256: `61A525DD02D4BAF19279266D758DE19C61C09A51780BB331909D3A6A2DEFCB74`

---

Updated Essential AI Skills For 2026

0:00 So, it's only been 5 months since I gave
0:02 you my 2026 essential AI skills road
0:04 map. But oh my goodness, things have
0:06 changed so much since the beginning of
0:08 this year. So, I feel like I got to give
0:09 you an updated version. So, this video
0:11 is it. The updated essential AI skills
0:13 road map. And I'm going to structure
0:14 like a progression from the most basic
0:17 skills to intermediate to advanced. And
0:19 pay attention cuz at the end of this
0:20 video, there will be a little quiz to
0:22 make sure that you retain all of this
0:23 information. Now, without further ado,
0:25 let's go. A portion of this video is
0:26 sponsored by Balt.
0:32 Level one, securing the basics. I think
0:34 these are skills that every single
0:35 modern person that like participates in
0:37 society should have about AI. And the
0:40 first of these might actually surprise
0:41 you cuz this is a tech AI learning
0:43 channel. But the first skill I'm going
0:45 to mention is investing. Yes, because in
0:48 my opinion in 2026, if you are investing
0:50 your money, I think you really need to
0:52 have an AI thesis. You see, the age-old
0:54 wisdom of just investing into the S&P
0:56 500 uh or whatever index it is that
0:58 you're investing in does not account for
0:59 the fact that you are having massive
1:01 exposure to AI whether you know that or
1:03 not because many of those companies in
1:05 these funds are either AI companies or
1:07 heavily integrated and invested in AI.
1:09 So I think it's really important for you
1:11 to make a decision of how much AI
1:13 exposure you want to have with your
1:14 investments in relation to your current
1:16 like career and your life in general.
1:18 For me, for example, I am massively
1:20 exposed to AI through my career. Plus, I
1:22 have like a very unstable career because
1:24 I'm a YouTuber and entrepreneur. So, my
1:25 investment philosophy reflects this. I
1:27 try to use my knowledge about AI to
1:29 invest in things that I believe in. But
1:30 I also hedge against AI to an
1:32 appropriate amount. Anyways, I'm not
1:33 going to go into more detail about this
1:35 because this is not a personal finance
1:36 investment channel. And this is #not
1:38 financial advice. I just think it's
1:40 really important for you, for everybody
1:41 these days to think about AI when you
1:43 are investing. I'll also leave a little
1:45 prompt in description at a very meta
1:46 level. you can put it into an AI chatbot
1:48 to help you figure out what your
1:49 investment thesis should be based upon
1:51 your specific life situation. Now, let's
1:53 move on to the next AI skill that I
1:54 think everybody should know in 2026,
1:56 which is prompting. Prompting is the way
1:58 that you interact with AI, like any type
2:00 of AI. So, knowing how to prompt well
2:02 lays the foundation for everything that
2:04 you do with AI. It is so important. I've
2:06 talked about prompting a lot on this
2:07 channel. So, I'm going to put on screen
2:09 now two basic frameworks that you should
2:11 definitely know if you don't already,
2:12 and you can check out this video over
2:13 here where I go through the basics of
2:15 prompting in much more detail. Now,
2:16 let's move on to the last skill of the
2:18 basics category that I think everybody
2:20 should know in 2026, and that is
2:22 mastering a core set of tools. You see,
2:25 in the AI world, there's like tools
2:27 popping up all over the place. Like,
2:28 there's like 10 releases per day,
2:30 probably more at this point. This can
2:31 get really overwhelming if you're just
2:32 trying to chase the hype of tools. Now,
2:34 what I find to be much more productive
2:35 and sustainable is to master a core set
2:38 of tools and just master them really,
2:40 really well. If you want to be an AI
2:41 minimalist and you only want to have
2:42 like one AI tool in your arsenal, then I
2:44 would recommend that you pick from the
2:46 category of a general AI chatbot. This
2:48 is like your Claude, Chacheti, Gemini,
2:50 Rasa, Po, etc., etc. I'm going to put on
2:52 screen examples of chat bots that you
2:54 can choose from. Honestly, even these
2:55 like general chat bots are so powerful
2:57 these days. You can ask it questions
2:59 like plan on my itinerary to go to
3:00 France in 2 weeks. Generate images,
3:02 audios, videos, animations, even like
3:04 prototype entire apps. So, if you've
3:06 mastered the skill of prompting, just
3:08 using one of these chatbots well will
3:09 get you very far. Now, if you do want to
3:11 be a little bit more fancy, you can also
3:13 check out a little bit more specialized
3:14 AI tools. Like most people probably
3:16 benefit from having a specialized news
3:17 and research AI tool like Perplexity,
3:19 for example. You can look at the news
3:20 that you're interested in and be able to
3:22 do more extensive research. And for
3:24 learning new things, which I think
3:25 everybody should be learning new things,
3:26 you can also check out a product like
3:27 Notebook LM. Now, if you want to harness
3:29 the power of AI even more, then I would
3:31 also recommend checking out one or two
3:32 AI tools that is also specific to your
3:35 job. For example, if you're a software
3:36 engineer, then you probably also want to
3:37 master an AI coding tool. And if you're
3:39 a marketing person, maybe you can also
3:41 check out a tool that's specialized for
3:43 say content and SEO like Jasper or
3:45 Surfer SEO for example. I'm going to put
3:47 a prompt in the description which you
3:48 can copy paste to your favorite AI
3:50 chatbot and it will ask you some
3:52 questions and it will help you figure
3:53 out what are some tools that you can
3:54 check out in for your specific job if
3:56 you wish. All right, so those are the
3:57 basic skills I think everybody needs to
3:59 know in 2026 just to like survive and
4:01 keep up with society. But if you are
4:03 someone who's interested in harnessing
4:04 the power of AI more and integrating
4:06 that into your own life and workflows
4:08 more, then you want to move on to the
4:10 intermediate skills. And this is the
4:12 transition into thinking about what are
4:13 called AI agents.
4:20 AI agents are software systems that use
4:22 AI to pursue goals and complete tasks on
4:24 behalf of users. You see, previously
4:26 you're just using AI tools for to like
4:28 do something very specific or to give
4:29 you suggestions for things like hey like
4:31 chatbt can you like write me a paragraph
4:33 about cars or like can you plan my
4:35 itinerary? This is like one request and
4:37 you get one response back. But with an
4:39 AI agent you can give it like an
4:40 overarching goal like hey I got this new
4:42 office. I show some pictures of your new
4:43 office. Help me decorate this office. By
4:45 the way I literally did this with an AI
4:47 agent called Manace. It brainstormed
4:48 different aesthetics with me. Ended up
4:50 going with the light academia vibes.
4:52 Then it was able to take our exact
4:53 office and decorate it so it has this
4:55 aesthetic and even link those specific
4:57 products like the rug, the lamp, the
4:59 curtains. You see, that's the power of
5:00 agents, agentic workflows. You can give
5:02 it an overarching goal and it can break
5:04 down the steps that he needs to do and
5:06 then go and execute these steps. I hope
5:08 you can see how this is much more
5:09 powerful than just like chatting with a
5:10 tool. So Madison's example of an agent,
5:12 a web-based agent that can do stuff for
5:14 you. And it's a really great entry point
5:15 into learning about how to prompt and
5:18 work with agents. But what puts you at
5:19 the next level and is very popular these
5:21 days is what are called local AI agents.
5:24 A local AI agent is firstly an AI agent
5:26 that takes action to complete tasks on
5:28 its own and is also local which means
5:30 it's an agent that lives and runs on
5:31 your specific machine like your
5:33 computer. And this is very very
5:35 powerful. It allows you to build out
5:36 custom automations and workflows just
5:38 for you. For example, I have an agent
5:40 workflow that pose for my calendars, my
5:41 Gmail, my investments, Slack and notion
5:44 to put together a personal daily digest
5:46 to me straight to my Apple notes. I also
5:48 have a AI workflow that updates AI news,
5:50 uh, tracks AI topics, deep dives into
5:52 them, and helps me draft up scripts for
5:54 my YouTube videos. Of course, I still
5:56 spend a lot of time researching more
5:57 into these scripts and perfecting them,
5:59 and I still have to like film them
6:00 myself. Hello, I'm Tina. I'm still real,
6:02 but overall, it saved me so much time,
6:04 and I'm able to increase the quality of
6:06 my videos so much by this. Uh, another
6:08 example, just to make it three, also
6:09 have an investments dashboard that pulls
6:11 in like custom news and curated
6:12 suggestions for my specific investments,
6:14 too. There are, of course, so many other
6:16 workflows that you can do. I'm going to
6:17 put on screen now some other examples.
6:18 All you have to do is learn how to use a
6:20 local AI agent like Coowork, OpenClaw,
6:22 Hermes, for example. I'm sure as the
6:24 weeks and the months go on, there's
6:25 going to be a lot more products in this
6:27 local AI agent category as well. But all
6:28 you got to do is start off by choosing
6:30 one of them depending on two factors.
6:31 The first one is how technical you are.
6:33 Some products are geared towards people
6:34 who are non-technical and don't know how
6:36 to code and others are more towards
6:38 people who do know how to code. And the
6:39 second factor is if you want to go with
6:40 open source or closed source AI. Claude,
6:42 Chacha PT, Gemini are considered closed
6:44 source AI while models like Kimmy, Mini
6:46 Max, Llama are considered open source. I
6:48 am not going to go into too much more
6:50 details about what open source is
6:51 because I made an entire video about
6:53 this which you can check out over here.
6:54 But basically, it boils down to
6:55 capability, cost, and privacy. Closed
6:57 source models tend to be more capable
6:59 and more powerful, although that gap is
7:01 closing. While open source models are
7:03 much lower cost or free to run, and
7:04 private if you choose to run them
7:05 yourself, so you don't have to be like
7:07 sending your entire bank account
7:08 information to Anthropic or OpenAI, for
7:10 example. Anyways, I'm going to put a
7:12 prompt in the description as well to
7:13 help you figure out which local AI agent
7:15 that you should start with given your
7:17 specific skill set and your needs. You
7:19 can just stick that into your favorite
7:20 AI chatbot and it should help you out.
7:22 And that leads us to the next level, the
7:24 advanced level. Bolt is my go-to for
7:26 creating really fast AI powered
7:28 functional web apps. You can go from
7:30 idea to a deployed productionready app
7:32 just by describing what you want in
7:34 plain English. And now it has a
7:35 connector layer that lets your project
7:37 pulling capabilities like shaders,
7:39 notion, GitHub, and more through MCPS.
7:41 I'm building a new landing page for my
7:43 Lonely Octopus AI agents boot camp. And
7:44 I want it to look actually good, not
7:46 just functional like it is now. So I use
7:48 B to build out the full landing page,
7:49 and it pulls in shaders directly. Here's
7:51 an animated purple hero background. And
7:53 there's no manual setup, no going to
7:54 shaders and copying embed codes. It's
7:56 just there. I can tweak it
7:58 conversationally if I want the animation
8:00 slower or a different shade of purple. I
8:02 just describe it and bulk can adjust it.
8:03 That prompt tweak loop is what makes
8:05 this so powerful compared to just
8:06 grabbing a static shader somewhere else.
8:08 You're building and refining in one
8:10 place. To set it up, you just go to
8:12 personal settings, find a connectors
8:13 panel, and toggle shaders on for your
8:15 project. That's it. You can now build in
8:17 Bolt for free. The link is in the
8:19 description. Thank you so much B for
8:20 sponsoring this portion of the video.
8:22 Now, back to the video.
8:28 The difference between intermediate and
8:29 advanced skills is that for
8:30 intermediate, you're kind of like doing
8:32 things on your own, right? like for your
8:33 personal workflows, maybe for some
8:35 business workflows, but they're still
8:36 more or less for yourself. But for
8:38 people who are interested in AI from a
8:40 commercial perspective or even as a
8:42 career, then it's important to learn the
8:44 advanced skills. And I got to say, these
8:46 advanced AI skills unlock so many
8:48 opportunities. These are skills that are
8:50 in such high demand and knowing these
8:51 gives you such an unfair advantage. And
8:53 that is when you might transition to the
8:55 next skill, which is actually building
8:57 your own AI agents. So, if you're
8:59 considering building commercial
9:00 pipelines where other people are going
9:02 to be using it, potentially you might
9:04 even have clients who are going to be
9:05 using it, you need these to be stable,
9:07 reliable, and lower in cost. For
9:09 example, us as a company, Lonely
9:10 Octopus, we also have B2B clients, and
9:12 for them, we build a different types of
9:14 agentic workflows and products. For
9:15 example, for a private equity company,
9:17 we built a custom reporting pipeline. It
9:19 pulls data from their tools like CRM,
9:20 analytics, spreadsheets, and also from
9:22 their custom database on a schedule and
9:25 then assembles it into a formatted
9:26 report. Private equity companies seem to
9:28 have to do a lot of reporting. So, this
9:30 has saved them so much time. They're
9:32 able just to send off these automated
9:33 reports with their KPIs, client updates,
9:36 and board summaries. We've also helped
9:37 companies build onboarding agents where
9:39 they can onboard new hires and clients
9:40 that go through a series of steps that
9:42 is custom for their company. It tracks
9:44 their progress and they can customize it
9:45 to however they like. These are just a
9:47 couple examples. We have so many
9:48 requests from people to help them build
9:51 these different AI agents. So, if you're
9:53 someone interested in like freelancing
9:54 or even like working in the AI field,
9:57 just know that learning how to build
9:58 your own AI agents is a very very in
10:00 demand skill set. Kind of related to
10:02 this, building MCPs, which allow AI
10:04 agents to plug into third party apps and
10:07 different data sources, is also really
10:09 really in demand as a skill. By the way,
10:11 I just want to say I called this like
10:13 months ago when I made my MCP video. So,
10:15 you know, anyways, if you learn how to
10:18 do this, this is also a skill set that's
10:20 very in high demand. Not going to go
10:21 into way too much detail about this. I
10:23 have so many different videos covering
10:25 how to build AI agents about MCP and we
10:28 actually run an entire 4-week boot camp
10:30 where we teach people how to build AI
10:32 agents. So, I'm going to link all of
10:33 these resources into the description of
10:35 the video which you can check out if you
10:36 want to dive deeper into it. And just to
10:38 end off this section, I'm going to show
10:39 some different tools, both non-technical
10:41 and technical coding tools that you can
10:43 learn in order to build AI agents.
10:45 Moving on to the final AI skill, and
10:47 that is AI coding. AI coding, otherwise
10:50 known as agentic engineering, is using
10:52 an AI agent in order to write code and
10:55 build software. Some of the examples of
10:56 things that me and my team have built
10:58 include this internal tool that helps us
11:00 create slides, documents, or resources
11:02 using our style and our branding. And
11:04 we're also creating a learning app,
11:06 which I hope I can share more details
11:07 with you about soon. This
11:09 generator and accounting software. Now,
11:11 there are pros and cons to AI coding.
11:13 The pro is that if you learn AI coding,
11:15 this is like boss level unlock. Not only
11:17 are you able to build like big complex
11:19 production grade products, you'll be
11:21 able to do this at like a fraction of
11:22 the cost and time. Like we're talking
11:24 about like more than 10 times cost and
11:26 time savings. I honestly cannot even
11:28 explain like how big of a deal this is.
11:31 If there is one domain that AI has
11:32 already like completely transformed,
11:35 then that would be coding. Like the
11:36 difference between someone who knows how
11:37 to do like AI coding and doesn't know AI
11:39 coding, it is just so vast. If you want
11:41 to truly unlock AI and the power of AI,
11:44 you really got to know how to do AI
11:46 coding. Now, the con of this is that you
11:48 low-key do already need to know how to
11:50 code. I will use this by explaining it's
11:52 kind of like putting lipstick on a pig,
11:54 you know? Like, if your coding sucks and
11:55 you don't know how to code, it's like
11:57 putting lipstick on a pig. It doesn't
11:58 actually matter how good the AI coding
12:00 tool it is that you're using and like
12:02 how fancy your setup is, it's just not
12:04 it's not it's not going to work. You're
12:06 not going to get far. Like, you're going
12:07 to run into a lot of issues along the
12:08 way. And coding is one of those things
12:10 that does take some effort in order to
12:12 learn. like all the other skills that we
12:13 talked about earlier, these are things
12:15 that you can master in the span of days
12:17 to weeks. But to actually properly learn
12:19 coding and then AI coding, you do need
12:21 to be spending at least like a couple
12:22 months, maybe like 2 to 3 months to
12:24 properly master things. I actually made
12:26 a video about how to learn to code in
12:27 the age of AI if you want to check it
12:28 out, uh, which I'll link over here. But
12:30 yes, it does take some effort and
12:31 commitment to actually learn how to code
12:33 and be able to harness the power of AI
12:35 coding. Now, I don't think everybody has
12:36 to do this. I think you can get like
12:38 really far along in AI without learning
12:41 how to code and doing like AI coding,
12:42 right? That's why this is like the most
12:44 advanced last skill. You would be
12:45 totally fine like building simpler
12:46 workflows, prototypes, and things like
12:48 that without knowing how to code. I
12:50 would only recommend making the
12:51 commitment to learn how to code if you
12:52 don't know how to already and then
12:54 learning AI coding if you're someone
12:55 who's genuinely interested in really
12:56 digging deep into AI and harnessing its
12:59 powers. Plus, you can also reduce your
13:00 own costs a lot more because you can
13:02 stop paying for like subscriptions for
13:03 different products and you can just like
13:05 AI code your own clones of them, which
13:07 is what I do. Stuff like note-taking,
13:08 accounting or budgeting softwares, for
13:10 example. So, I have not yet made a full
13:12 video on AI coding. It is in the
13:13 pipeline. I have heard your request. I
13:16 promise it is coming. Give me a little
13:18 bit more time. And when it is out, I
13:20 will link it over here so you can check
13:21 out. And that's it. We're at the end of
13:23 this video. Wow. These are the essential
13:26 AI skills from the most basic,
13:27 intermediate to advanced. Now, as
13:29 promised, I will show on screen a little
13:31 quiz. Please answer these questions and
13:33 put them into the comments to help you
13:35 retain the information we have just
13:36 covered because science says this is the
13:38 best way for learning. And thank you so
13:40 much. Have fun learning AI and I will
13:41 see you guys in the next video or live


---

## Source: 20 - Practical skills to be a Graphic designer Ep19 45 [Beginners Guide to Graphic De.txt

- Original path: `addintional info to add\youtube-playlist-playlist-transcripts\20 - Practical skills to be a Graphic designer Ep19 45 [Beginners Guide to Graphic De.txt`
- Size: `4655` bytes
- SHA256: `7D9016A5E4A82DC6A2F5DDB505A2AA5BD581C044A98579876648EF3057E141B6`

---

Title: Practical skills to be a Graphic designer? Ep19/45 [Beginners Guide to Graphic Design]
URL: https://www.youtube.com/watch?v=0qRT3JI7OsY&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=20&pp=iAQB
Channel: YouTube playlist
Video ID: 0qRT3JI7OsY
Transcript language: English
Downloaded at: 2026-05-25T21:22:58.797Z

0:00 Hello and welcome to this beginner's guide series to graphic design.
0:04 From what graphic design is, skills to be a graphic designer, design theory, education you need,
0:10 equipment you need to the graphic design portfolio and interview advice.
0:15 This series is for anyone at any level.
0:18 So if you're interested in graphic design and considering becoming a graphic designer
0:22 join me as I discuss a series of graphic design topics.
0:34 Graphic design is a very creative and specialised job.
0:37 There are lots of skills and qualities you will need in order to become a
0:41 designer and become a good designer. In this video I'm going to discuss the
0:45 practical skills required. Now the practical skills can be taught and
0:50 acquired through practice and determination and are the typical skills
0:54 that are encouraged and acquired in art school.
0:57 These can be considered the foundation skills as you will need to practice and
1:01 harness these from the start. So the first is: Verbal communication.
1:07 Even though graphic design is visual communication you will often have to
1:10 communicate your ideas verbally to discuss and sell them to others.
1:15 The greater your ability to communicate and articulate your ideas the better.
1:21 Drawing and sketching. It's been said that rough layouts sell an idea better than polished ones.
1:28 To be able to draw and sketch will be able to communicate your ideas visually .
1:33 All design should really start on paper. Sketching is a great method to
1:38 render your imagination fast and bring your initial ideas out of your mind to
1:43 rule out anything you feel may or may not work. Sketches can become a
1:47 discussion point. When you have something visual in front of you it makes it
1:52 easier to talk about that idea with others such as clients or senior
1:56 designers. Every time I'm at a meeting I always sketch initial thought out and
2:01 show clients. This helps engage them and see their reactions. Every designer
2:06 should be able to draw and sketch to some degree.
2:10 Research. Graphic design is about problem solving and coming up with new and exciting
2:15 ideas. The best way to discover and come up with such ideas is through research
2:20 and expanding your knowledge. You will need to be able to research. Often you
2:25 may be tackled with a brief on a subject matter you know nothing about. The more
2:30 time you spend researching the more you will learn and become inspired which
2:34 will ultimately reflect in your work.
2:37 This will lead to you having more original ideas and creating more
2:40 interesting work. Software skills. Today a lot of design is done using software
2:46 tools like Photoshop, Illustrator, InDesign and after fact to name a few.
2:52 The more proficient you are at these programs the easy it will be and the
2:56 faster it will be to deliver your design. You will need a certain degree of
3:00 software skills to bring your imagination to life. Time management.
3:05 Depending on the project you often face tight deadlines to complete work.
3:11 That might mean on occasions having to work fast and under pressure.
3:15 You will need to be able to manage your time effectively to implement the design
3:19 process. You will need to be able to adapt to various timelines in order
3:24 complete and deliver your work. Attention to detail. The integrity and success of
3:30 your design can often lie in the details. To achieve high standards you
3:35 will need to pay close attention. This is one of the strongest practical skills
3:40 you can have because after all beauty is in the detail. So those are some of the
3:45 key practical skills you will need to be a graphic designer.
3:49 If you'd like to take a closer look at the list discussed in this video you can
3:53 find out more in the description or in the PDF document that accompanies this series.
3:57 Download link is in the description.
4:00 Well I hope you enjoyed this video if you did hit the like button on my facebook page.
4:05 If you would like to see more videos like this in future hit the subscribe button
4:09 and you can also follow me on twitter at TastyTuts.
4:13 So in the next video I'm going to discuss some of the psychological skills
4:17 you will need to be a graphic designer.
4:19 So see you in the next video!


---

## Source: 21 - Psychological skills to be a Graphic designer Ep20 45 [Beginners Guide to Graphi.txt

- Original path: `addintional info to add\youtube-playlist-playlist-transcripts\21 - Psychological skills to be a Graphic designer Ep20 45 [Beginners Guide to Graphi.txt`
- Size: `6505` bytes
- SHA256: `297EE4492663F242FBC25AC7F1E0949A3CB806A71E4DDC373718B39644540B88`

---

Title: Psychological skills to be a Graphic designer? Ep20/45 [Beginners Guide to Graphic Design]
URL: https://www.youtube.com/watch?v=oaNzjtx9jjo&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=21&pp=iAQB
Channel: YouTube playlist
Video ID: oaNzjtx9jjo
Transcript language: English
Downloaded at: 2026-05-25T21:22:58.797Z

0:00 Hello and welcome to this beginner's guide series to graphic design.
0:04 From what graphic design is, skills to be a graphic designer, design theory, education you need,
0:10 equipment you need to the graphic design portfolio and interview advice.
0:14 This series is for anyone at any level.
0:18 So if you're interested in graphic design and considering becoming a graphic designer
0:22 join me as I discuss a series of graphic design topics.
0:34 Graphic design is a very creative and specialized job
0:37 there are lots of skills and qualities you will need in order to become
0:41 a designer and become a good designer. In this video I'm going to talk about:
0:46 Psychological skills. Now the psychological skills can give you an
0:51 edge as a designer and help you stand out.
0:54 These are skills that can in no way be tort in a classroom.
0:58 These are skills that make you unique and can only come from within.
1:02 If you wish to acquire them
1:04 or become stronger in them it will be down to your own will,
1:07 thinking and personal development.
1:10 So first is: Objectiveness. You will need to be objective.
1:15 You will need to be able to think practically, realistically and look at
1:18 things from a non personal standpoint. This might mean putting your personal
1:22 biases, tastes and emotions aside for the best of a project. Just because you like
1:29 something does not necessarily mean it's the best solution or answer to it brief.
1:34 Good design is design that works well that is easily understood, has a solid
1:40 justification behind it and most importantly solves and answers the brief.
1:44 Always try and find reason and meaning for your work. If there is room for it to
1:50 look fantastic as well then that's a bonus.
1:53 Creative disciplines and judgment.
1:56 You will need good judgment to know if an idea is strong enough to answer the brief.
2:00 You will need discipline to edit and streamline an idea
2:04 this may mean simplifying an ambitious idea to meet a tight deadline or particular budget.
2:09 You may have to simplify a layout or creative execution
2:12 and to make it less busy more balanced and striking.
2:16 Confidence.
2:18 To live a creative life we must lose our fear of being wrong. To succeed you will need confidence.
2:25 Confidence in yourself, confidence in your ability and in your
2:28 ideas to apply yourself to present and talk about your work and compete in the industry.
2:35 Receive criticism.
2:37 Now this is a big one I have seen a lot of designers react bad to criticism and
2:43 it has not helped them. When it comes to receiving criticism you need to be objective.
2:49 Do not seek praise, seek criticism. You will need to embrace
2:54 criticism do not take it personally be happy to learn from your mistakes and
2:59 listen to others for it is criticism that will make you more experienced and
3:04 a broader designer. Remember it's better to be criticised that ignored.
3:10 Everyone these days seems to be a critic.
3:12 It's easier to criticize then to create. The good thing about criticism is that
3:17 you can take it or leave it.
3:19 If someone says something about your work you do not agree with that no harm done
3:23 you can forget about it. Tho if someone says something you believed to be
3:27 correct and agree with then you can learn from it.
3:30 Coping with failure. If you failed it means you tried. The person who does not
3:37 make mistakes is unlikely to make anything. You have to be philosophical here.
3:43 Almost everything you do, you should sider a learning experience and we
3:48 never stop learning.
3:49 Like most designers it will take you years to master your craft. If things do
3:54 not work out the way you hoped first then don't be discouraged and give up
3:58 learn from it and become better next time.
4:01 Determination. Now what can sometimes separate designers success is their
4:06 determination. To never give up to keep working hard to keep learning and push
4:12 for that better job. It can take years of hard work to build and develop your career.
4:17 It can be very hard to learn the skills necessary to create your work and succeed.
4:21 You may have to stay late to get something finished,
4:25 you may have to work the weekend, you may have to learn software
4:28 to get the job done,
4:30 you may have to work with people you don't like or agree with and do things
4:34 you do not want to do. If you are determined you will go far.
4:38 Team player.
4:40 You may often have to work with other creative professionals or early on in
4:43 your career you may have to work for others in more senior roles than you.
4:48 You will need to be able to work in a team and take instructions from others even
4:52 if it's not what you like or agree with. If you can work well in a team, have a
4:57 good attitude, be liked and helpful it will help you become successful.
5:02 Patients.
5:04 The last quality here is patience. To produce anything creative takes time try not to
5:09 rush it if you do not have to. Allow your creativity to blossom. Patients can be
5:14 rewarding. If you take the time to pursue your creativity you just might discover
5:20 things you get not anticipate. Keep in mind that your life is a creative
5:24 journey some people reach their desired destinations quicker than others.
5:29 Just do your thing, believe in yourself and take your time. If you stay true to
5:34 yourself you will reach your goal eventually. So those are some of the key
5:39 psychological skills you will need to be a graphic designer.
5:43 If you'd like to take a closer look at the list discussed in this video you can
5:47 find out more in the description or in the PDF document that accompanies this
5:51 video series download link is in the description.
5:56 Well I hope you enjoyed this video if you did hit the like button on my facebook page.
6:01 If you would like to see more videos like this in future hit the subscribe button
6:05 and you can also follow me on twitter at TastyTuts.
6:09 So in the next video I'm going to discuss talent qualities
6:13 that will give you the edge as a graphic designer.
6:16 So see you in the next video!


---

## Source: 38 - ‘Apply your skills’ How do I begin as a Graphic Designer Ep37 45.txt

- Original path: `addintional info to add\youtube-playlist-playlist-transcripts\38 - ‘Apply your skills’ How do I begin as a Graphic Designer Ep37 45.txt`
- Size: `7154` bytes
- SHA256: `2AA56959F13AB6C045897623C9CFAD4FADCDDFFD2F68DBDD2FD33CD1D242D4A9`

---

Title: ‘Apply your skills’ How do I begin as a Graphic Designer? Ep37/45
URL: https://www.youtube.com/watch?v=SST4W6dzwRQ&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=38&pp=iAQB
Channel: YouTube playlist
Video ID: SST4W6dzwRQ
Transcript language: English
Downloaded at: 2026-05-25T21:22:58.797Z

0:00 - Hello, and welcome to this
0:01 beginner's guide series to graphic design.
0:04 From what graphic design is,
0:06 skills to be a graphic designer, design theory,
0:09 education you need, equipment you need,
0:11 to the graphic design portfolio and interview advice.
0:15 This series is for anyone at any level,
0:17 so if you're interested in graphic design
0:20 and considering becoming a graphic designer,
0:22 then join me as I discuss this series
0:24 of graphic design topics.
0:26 (upbeat music)
0:34 So you're thinking about getting into graphic design,
0:37 and you're wondering how to begin.
0:39 To start, I would suggest you undertake six key steps,
0:43 and I would recommend you do them in the following order.
0:46 Step one, learn and research.
0:49 Step two, collect.
0:50 Step three, be inspired.
0:53 Step four, practice.
0:54 Step five, seek education.
0:56 And step six, apply your skills.
0:59 Now these steps can be taken at any stage in your life.
1:02 If young, still in school,
1:03 and looking to get into graphic design,
1:05 you can follow these steps.
1:07 If you're older, perhaps you're thinking
1:08 about a career change, you can also follow these steps.
1:11 In this video, I'm going to talk about step six,
1:14 apply your skills.
1:16 So after completing all the previous steps,
1:19 one through to five,
1:20 you should be ready to take the last step.
1:22 By step six, you should now be ready to apply your skills
1:26 and start looking for jobs in the design industry.
1:29 You should not have a portfolio that represents your skills
1:32 and a CV to represent your experience
1:35 and potential to get your first job.
1:37 So at this point, you have a choice
1:40 with which direction you want to go in.
1:42 Do you want to work full-time, part-time,
1:44 or work freelance for yourself or through agents?
1:47 Now graduates and newcomers to the industry
1:50 typically seek to work full-time.
1:52 Full-time offers a more stable position,
1:55 where income is regular
1:57 and there is a chance to learn from senior designers
1:59 and build the experience necessary to progress a career.
2:03 At the start of your career, building experience
2:05 and gaining industry knowledge is crucial.
2:08 So fro this reason, if you're a graduate or newcomer,
2:11 I would recommend you seek a full-time role.
2:14 Upon graduating, I worked full-time for a number of years.
2:18 Not only did I learn a lot from senior designers,
2:20 but I learned a lot about how the industry works.
2:22 If you can find a design agency
2:25 and apply to work there as a designer,
2:27 you can get your first step on the ladder.
2:29 And at this point, that's what you really want.
2:31 From that point on, you will be paid to be a designer
2:35 and you will have the opportunity to learn.
2:37 If you're graduating,
2:39 then you will have a degree and a portfolio of work.
2:42 Having that degree and portfolio will help you.
2:45 Depending on the job you're applying for
2:46 and your level of experience,
2:48 you may be looking to apply
2:50 for junior to middle-weight roles.
2:52 Now if you're not a graduate,
2:54 perhaps you're looking for that career change,
2:56 you may not have a degree or higher education,
2:59 but don't let that stop you.
3:01 This may only prevent you from getting more senior roles
3:04 in the industry at the start,
3:05 but if you have some qualifications
3:07 from some evening classes, workshops,
3:10 along with some work examples,
3:12 this could get you an internship
3:14 or into a junior role in the industry.
3:17 To get that full-time role,
3:18 you may have to attend multiple interviews
3:21 and be able to talk confidently about your work.
3:24 Sell yourself and compete against others.
3:27 Now the other option is to go freelance
3:30 for yourself or with agents.
3:32 This is a little more risky than full-time,
3:35 as work is not as stable.
3:36 Working freelance, you will have the challenge
3:39 of finding your own clients
3:40 and potentially organizing
3:42 your own financial administration.
3:44 This can be a big burden,
3:46 especially when you should be spending
3:48 that time learning and being creative.
3:51 However, there are benefits to being freelance.
3:54 The pay is higher, and if you use agents,
3:57 they will find work for you.
3:58 Though as a freelancer, you also don't get the time
4:02 at an agency to learn from other senior designers.
4:05 As a freelancer, you're expected to have senior skills,
4:08 with lots of experience to be able
4:10 to do a job proficiently and swiftly.
4:13 After all, that's why they are paying you
4:15 more than a full-time designer.
4:17 For this reason, it's common for designers
4:19 to become freelance later in their career,
4:22 when they become a lot more experienced
4:24 and acquire contacts.
4:26 I would recommend you spend a few years full-time
4:28 to develop your skills, learn about the industry,
4:31 make contacts, and become the best you can.
4:34 After a few years, you may find yourself ready
4:37 to go it alone and go freelance.
4:39 To go freelance with agents,
4:41 you will have to attend multiple interviews
4:43 with various recruitment agencies
4:45 to showcase your work and yourself.
4:48 They will build a profile of you, of your creative skills,
4:51 and your personal qualities and level of experience.
4:54 Once they have a profile of you,
4:55 they can then offer you to various clients
4:57 they have on their books.
4:59 To go freelance yourself is a lot harder.
5:02 You will have to do all the work yourself.
5:04 Find clients, and do all your self-administration.
5:07 So whichever path you choose,
5:09 from the moment you get your first job,
5:11 you will have to apply all the things you have learned.
5:14 You will gain vital experience, build a reputation,
5:17 and gain contacts which will take you further
5:20 into your career as a graphic designer.
5:22 In some ways, this is the beginning.
5:24 You will be about to embark on a new adventure,
5:27 where you will need
5:28 to quickly learn a whole new set of skills
5:30 that you were probably not taught in school or university.
5:34 So that's the sixth and final step
5:36 on how to begin as a graphic designer.
5:38 Well I hope you enjoyed this video.
5:41 If you did, hit the Like button on my Facebook page.
5:44 If you'd like to see more videos like this in the future,
5:46 hit the Subscribe button.
5:48 And you can also find me on Twitter at tastytuts.
5:51 So at this point, you're applying your skills
5:53 and looking for a job.
5:55 Today, there is an abundance of ways
5:57 you can find a graphic design job,
5:59 both on the internet and offline.
6:01 In the next video, I'm going to discuss
6:03 and talk about ways you can find a graphic design job,
6:07 so see you in the next video.
6:09 (upbeat music)


---

## Source: 03_AI_Prompting_and_Workflows.md

- Original path: `ORGANIZED_KNOWLEDGE_BASE\03_AI_Prompting_and_Workflows.md`
- Size: `88274` bytes
- SHA256: `FCA54F1A7AED36A6CC46E6A16E14093747B7B39BA8D7B285660063D6DA40CB4A`

---

# AI Prompting and Workflows

> **Category Description:** Prompt engineering techniques specifically for AI-assisted coding. Covers 37+ tips for effective prompting, essential developer prompts, building custom workflows, and strategies for reading and understanding code with AI.

---

## Table of Contents

- 1. AI Coding 101  Ultimate Prompt Guide (37 tips)
- 2. Essential AI prompts for developers
- 3. The True Power of AI Coding - Build Your OWN Workflows (Full Guide)
- 4. BEST WAY to read and understand code


---

## 1. AI Coding 101  Ultimate Prompt Guide (37 tips)

**Source File:** `VideoTranscriber_AI Coding 101_ Ultimate Prompt Guide (37 tips).txt` | **Size:** 25.1 KB

---

when you're coding with AI the way you   word your prompts can be the difference   between building a full stack   application in under an hour and   troubleshooting for multiple hours and   making absolutely no progress I've spent   over a thousand hours coding with AI and   I've learned a lot of things along the   way so I will share those lessons with   you today as well as some specific   prompts that you can use so when it   comes to writing new code my first tip   is to use a specific list of   Technologies or approaches that you want   the AI to use this is going to ensure   that it's going to be easy for you to   iterate on the code after the initial   version is created and make sure that   all of the tools and Technologies you're   using actually make sense and work   together well additionally when you use   specific Technologies it signals to the   AI that you at least sort of know what   you're doing so the average output   quality tends to be higher now when it   comes to choosing the specific   technologies that you're going to use I   would lean heavily towards really   popular languages and Frameworks because

  AI is much more familiar with those so   the code that it writes is going to be   higher quality also you'll have a larger   Community to help answer questions and   you'll have many more clear examples   available online that you can reference   so use things like JavaScript and Python   and some common databases like postgress   for example if you're not sure of the   specific Technologies I have a link in   the description to The Prompt guide that   will show all of the prompts in this   video as well as a glossery of   technologies that you can reference when   when crafting your prompts my next tip   for writing new code is to design a   solution and then ask the AI to build it   don't just give it a totally open-ended   prompt for example if we have a website   that shows a list of products and we   want to add a search feature we could   ask the AI to just implement it but that   doesn't give enough specific detail on   what should actually be done do we want   the search to search just by product

  title should it be description should we   have a bunch of different filters in   there you see as you start to think   about how the feature should actually be   implemented there's a lot more detail   that comes out that you should really   think through before you have the AI   implemented because if you build it and   let's say you were assuming that it   should use the description but it's not   searching by that and then you just keep   saying well it doesn't work it doesn't   work you'll just get stuck in an   infinite Loop but if you think ahead of   time how you want that feature to work   and you spell it out for the AI it's   much more likely to do exactly what you   want this also makes it less ambiguous   for the AI so it's more likely to write   good code now since we're thinking   through how the features should work and   what we want the AI to do one great way   to organize your prompt is to break   things down and give it a list of things   that it needs to do so instead of that   open-ended build a search feature we   should say you know build a search   feature and then it should work with

  titles and descriptions number two we   should have the ability to filter by   different product types number three we   should add a sorting capability if you   give it a list of tasks then it can   focus on each one of those and Implement   everything kind of integrated all   together instead of you then iterating   on it step by step which brings me to   the next point which is that you really   need to find the right balance of scope   of work to give to the AI because if you   give it just very small Snippets of work   to do then you're going to spend a lot   of time iterating and not making a lot   of progress on your app like you could   ask it to you know move an icon here or   add some padding there but like you'll   just end up spending so much time uh   that you could otherwise be building you   know entire features with on the flip   side of course if you ask for it to   build an entire application you can't   expect that it's going to do that all in

  one go so there's very much a balance to   strike between the amount of work you   give it being too little or too large   and knowing the right amount really just   comes with experience so I strongly   recommend that you go and actually try   to build apps using Ai and then you'll   run into situations where you're asking   for too much or you're spending so much   time you know in the little details so   definitely look to find the right   balance all right my next tip is to use   examples in your prompt let's say we are   building a function to format dates well   it's going to be much easier for you to   give it examples of what you want want   your dates to look like than to describe   every possible Edge case of how it   should work AI tends to do pretty well   when it sees examples like that and the   other thing you can do with examples is   give it sample code that already works   so if you have a certain library that   you're trying to integrate with or a   tool that you're integrating with you   can just find code online that already

  works and copy paste it and have the AI   start from there I found that to really   accelerate and make it much more likely   to succeed in the first go and speaking   of documentation a lot of the AI coding   tools have a feature that allows you to   immediately reference some official   documentation or search the web using   these tools can really speed up your   work because you don't have to go find   the documentation or the specific thing   on the web and it can also improve the   quality of the solution that the AI   creates when building something new   another thing you should try to do is   make sure that the code that the AI   wrote is both secure and performs well   and you can do this either in the   original prompt that you make to the AI   or you can do it as an immediate   followup after it successfully   implements the feature and you can   simply ask if there are any security   vulnerabilities that this introduces and   whether the approach that it took is the   most efficient one and it can also help   to be proactive about this and consult

  the AI to see if there are any   considerations or best practices when   working with a particular piece of   software or a particular feature that   you're trying to to develop now when it   comes to testing you have two options   you can either do the same thing that we   were talking about with security and   performance and ask it as a follow-up or   you could actually take a test driven   development approach where the AI writes   the test first and then implements the   feature to make sure that it satisfies   all of those tests that way you can even   make sure that it handles all of the   edge cases before it starts writing any   of the code this works particularly well   if you're using AI agents because you   can have them iteratively write the   tests build the feature run the test to   make sure that the feature passes all of   them and doesn't break any other ones   and then if any of them fail you can   have the AI agent iterate on the code   until all of them actually pass and on   the documentation front it always helps   to have your code be well documented   whether that's comments in the functions

  that you write or a nicely formatted   readme you can also have the AI write   documentation for your end users so they   can figure out how the software actually   Works since the AI has access to your   code it can write very effective   documentation that very precisely   describes what should be happening my   final tip for writing new code is to be   careful with how you name things the old   adage goes there are only two hard   things in computer science cach   invalidation and naming things and it's   more true now than ever because AI uses   the names of your files of your   functions of your classes to figure out   what is is actually happening in your   code and it's going to follow the   patterns of your naming when it   generates new code so if you have a   function that's intended to process csvs   you should call it something like CSV   parser rather than data parser because   then if you want to add parsing for   different data formats uh the AI is

  going to just try to jam everything into   that function instead of writing a new   one so it's good to try to stay on top   of the naming and keep it up to date   which really brings us to the next   section of this video which is what do   you do when you're working with existing   code and trying to modify it well to   continue the naming example you want to   continuously update the naming and   organization of your code base as the   code expands and one way you can do this   is to ask it to refactor and simplify   your code so this is a really handy   prompt that I like to use is to ask the   AI to refactor a particular file and   I'll typically tell it the specific   names of the things that I want to   extract out into a new file and this   will keep your files very focused and   keep your codebase nicely organized   which is very important because at its   core coding with AI really has a lot to   do with managing context and this is   really the golden rule of coding with AI

  and if you take anything away from this   video it would be this you have to   properly manage and balance the context   that you give to the AI because if if   you don't give it enough context to work   with AI is going to assume things about   your code that might not be accurate and   then the new code that it writes   fundamentally doesn't work with your   existing code and you end up in that   super messy Loop of trying to get it to   fix itself and then it doesn't know what   to do because now you have code with one   set of assumptions and code with another   set and it's all co-existing and it just   becomes a really big mess so if you can   give it relevant files to use in its   context when it's writing some new code   that's the best way to get new code that   actually works with your existing code   now on the other side of this is when   you got too much context if you got a   file and it includes your entire piece   of software and it's 5,000 lines long

  the AI is going to get confused it's   going to start deleting portions of your   code it's going to create duplicate   functions because it can't really find   the relevant pieces of code that it   needs to consider and this becomes   equally problematic because it just   can't write code that works with your   existing software and a lot of people   fall into this trap and It's Perfectly   Natural especially when you're getting   started and you don't know how to   properly organize your code base so   naming things and continuously   refactoring right that's what we were   talking about earlier becomes even more   important because it allows you to tag   the relevant files and pass that context   to your subsequent AI requests the other   thing to keep in mind mind is that as   you're having that conversation about   the code and having AI generate new code   you are expanding the context because   every message in your conversation gets   passed to the AI and it goes through all   of that when it generates new code for   you so if you've had a conversation

  that's been going on for like half an   hour AI is much more likely to get   confused and start you know referencing   old pieces of code that don't exist   anymore or just failing to do what you   ask get to do and this is a tricky thing   because you want to make sure that you   have the relevant context but the longer   your conversation goes the more context   there is and AI will start to get   confused so you got to really balance   when you have too much context and too   little context so one powerful tool at   your disposal is to start a new   conversation and one common way that I   like to think about it is if you're   building a new feature that doesn't   directly have to do with with everything   you've built up to this point that's   when you should start a new chat and   then just tag the relevant files you   could even reference some parts of your   previous conversation but it's much   better to have a fresh start when you're   building something new ultimately it is   going to be a balance and experience

  will guide you in terms of when it's   good to continue a conversation versus   start a new one my next tip about   iterating with code is to tell the AI   what works well and what you want to be   changed so often my my flow will go   something like this I'll ask the AI to   implement a feature I'll use a list to   tell it what it needs to do and it'll   often make some mistakes like it'll make   good progress towards what I want but it   won't be perfect and so I like to tell   it what did work and then what I still   want to be changed because this focuses   its attention on fixing those things and   makes sure that the things that it   already implemented correctly don't   become broken another thing I like to do   when working with existing code is to   ask it to find edge cases or potential   bugs in the code that I'm working with   this is a good thing to add to your   repertoire because it's going to make   sure that you build quality software   that's bug-free so typically if you   build a feature you go through the

  iterations everything seems to work now   you should just go ahead and ask are   there any edge cases that we're not   currently handling you know do you see   any issues in the code this will help   you handle those additional cases and   build a higher quality product speaking   of reviewing the code after you've built   the feature another thing you can do is   directly ask the AI to review the code   and this is something I like to do after   I make some major changes and of course   you always want to review the code   yourself you do want to see that things   are implemented in the way that you   expect them to work and that the AI   isn't doing something unnecessary or   insecure so always review the code   yourself but you can use AI to   essentially get a head start on that   process by reviewing the code and then   you can walk through those results uh it   can be really helpful another thing I   like to do is just ask the AI what the   current code does and how it works   because this will usually highlight for

  me certain things that I might be   missing and give me some context about   the rest of the code base and how this   code fits into it it's much faster to   get started like this than trying to   read things line by line especially when   you're working with a large piece of   code and obviously this is going to be   super helpful if you're not 100%   comfortable with code just yet in trying   to understand how it all works and then   it'll actually help you learn how to   code in the process moving on to the   troubleshooting section inevitably   things will go wrong and there will be   issues and there will be bugs and the AI   won't Implement everything perfectly the   first time around so what do you do in   those cases well there are several   prompts and techniques that you can use   to really accelerate your   troubleshooting the first thing I like   to do is to be very specific about what   is going wrong and what is going right   it's similar to that prompt that we were   talking about earlier where you're   iterating on a particular feature well   in the case of troubleshooting when

  you're working out a particular bug you   really want to say like this piece is   working but this other piece is not and   then you really want to dive into which   cases things work and where they fail   and give it as much detail as you can   often times you can also share   screenshots with tools that accept those   and that can actually help the AI   understand what you're saying because if   you're using words like you know it's   not centered or it's sticking all the   way to the top it might not really know   the context in which you're talking   about but if you share a screenshot it's   going to help it understand and make the   right change also when it comes to   troubleshooting I find it's super   helpful if you can just share the errors   that you're getting with the AI so just   copy paste the entire error   um and then it'll likely be able to   figure out where the problem is you can   actually take this approach one step   further and use what I call the beaver   method and ask the AI to write a bunch

  of logs in your code that will help you   then troubleshoot and what you do is you   create all of those logs and then you   try to run the program and you copy   paste all of that back to the AI and   it'll be able to figure out at what part   of your process did something break so   because you're using logs instead of   just waiting for an error it gives it a   lot more detail and context into what's   going on and I found that to be a really   useful method in troubleshooting often   times after just a couple of iterations   using this approach uh it'll be able to   fix the issue but sometimes even after   doing a bunch of troubleshooting you   still end up kind of stuck and not sure   where to go next and so the first line   of attack in that case is to ask the AI   to describe what the code is currently   doing this goes back to that prompt we   were talking about when modifying code   because if you can understand what the   code is doing it can help you understand   why there is an issue in it perhaps

  there is a specific case that you hadn't   accounted for and the AI explaining that   could help you actually see that problem   and then think through how you would   actually like to solve it instead of   just relying on the AI and assuming that   it'll figure out the best way to handle   it but sometimes even after you read it   it still doesn't make sense and you're   still having an issue so what do you do   then well I have one secret weapon for   you it is one word and that word is   radical for whatever reason I have found   this word to be super effective in   breaking through these troubleshooting   loops and specifically what I mean is   you ask it to try something radically   different try a radically different   approach and I've been really surprised   by the number of times in which this   prompt is the thing that gets me through   the issue because it really forces the   AI to think differently and instead of   trying to like adjust little details it

  just backs all the way up and tries a   really different approach but sometimes   even that doesn't work so what do you do   when you've been there for multiple   hours you've tried pasting the logs   you've tried radically different   solution what do you do you're you're   stuck right well that's where you got to   actually know how to code you got to   understand what the code is doing so   that you can look into the code and find   the problem maybe there's just a   conceptual issue with the way you've   been approaching the particular problem   and there's just no possible way that   you can make it work there may be   fundamental constraints that you haven't   considered or limitations with the   technologies that you're using so my   final tip for troubleshooting is that   you need to know when to pause and when   to go look at the code and there's again   very much a balance to this similar to   you know some of the other prompts we   were talking about you have to know when

  you've hit that point at which it really   doesn't make sense to keep asking the AI   to fix it now you don't want to do that   right away because oftentimes AI can   work through a lot of issues and if you   just keep pasting the prompts or you   tell it to take a different approach it   can be much faster to get through the   problems that way than digging deep into   the code and fully understanding it so   you can definitely save time by having   AI try to troubleshoot itself in the   ways that we've been talking about but   at some point you do want to be able to   go into the code and figure out what's   happening and of course that brings us   to our last section which is about   learning how to code you can use AI to   help you learn and so all of these   things we've been talking about you   don't absolutely need to know code to be   able to do but when you run into those   issues where you get complet completely   stuck that's when it becomes suddenly   absolutely necessary to know code and   how it works so I'll share some prompts

  and tips with you in terms of what you   should ask when you're trying to learn   how to code and the first thing is you   want to ask the AI to keep things simple   and you want to tell it that you're a   new developer and that you're learning   how to code if you don't do that and you   just ask about how this function works   or what not it'll just assume that you   have a developer understanding of the   situation but if you tell it that you're   a new developer and you specifically ask   it to keep it simple it can really help   it fine-tune that response to make sure   that you can actually learn and   understand from what it's saying now   that's useful for explaining code at a   high level like when you're looking at a   piece of code and you're asking for a   description but the thing that I also   like to do is ask it to explain code   line by line and you can have it either   just explain it in a chat or you could   have it add comments to your code so   that you can follow along and that will   help you understand the syntax of what's   happening and then be able to learn as

  you do that over and over you're going   to start to see a lot of patterns in the   code and then you'll be able to follow   those and you'll first know how to read   it and then when you run into issues you   might notice hey this doesn't look like   the same kind of syntax or approach that   we used in the past when doing this kind   of thing so then you can tell the AI and   that's really the process of learning   right you're you're seeing these   patterns you're starting to understand   how they all fit together and if you ask   it to explain things line by line you   will start to have a deeper   understanding of how the code actually   works but learning the code isn't just   limited to the code itself like we've   been talking about it can really help to   use specific vocabulary specific   Technologies Concepts when you're   formulating all these prompts so you can   actually use AI to learn those and you   can just specifically ask it to explain   a particular concept and how it relates   maybe to the code that you're looking at

  or maybe even just outside the code you   know ask it to explain how a full stack   application works or ask it to explain   different data types in your table for   example just having those conversations   with the AI about various components and   Technologies can raise your overall   awareness of how software works and how   all the pieces fit together another   thing I like to do is ask the AI how it   would build something so let's say we   want to build a chat app I would ask how   do we do that you know what are the   Architectural Components for building a   chat app what are the things that we   need to consider um and you'll soon   realize there are different ways of   implementing chat like you could have a   central server or you could have   peer-to-peer communication and again   these things you know people don't tend   to think about until you get into the   weeds of coding and then it suddenly   becomes super important and it goes all   the way back to building our software   and being specific about the features   that we want to implement and how we

  want them to be implemented so it all   kind of Loops back in on itself you know   you learn how to code you understand the   code then you can give good prompts so   you can build better code right and the   cycle continues another thing you can do   when learning is ask the AI to show you   some examples and we did this in the   previous video where we were talking   about software Basics and we had to   generate you know some examples in   JavaScript showing functions showing   different data types so that can be a   really powerful technique to use as well   and as you're working through those   examples or working on a particular   piece of code another thing that helps   is to tell the AI what you do understand   versus what is unclear because then   it'll be able to connect the things that   are unclear it'll focus on explaining   those and it'll connect them to the   things that you do already understand so   it just creates a more complete picture   of whatever it is you're exploring my   last tip is to focus Less on the   specific syntax of a language and focus

  more on the bigger picture and how   various software components fit together   and that's where it really helps to   actually understand what a full stack   application actually looks like and what   are the different layers of it which is   exactly what we're covering in the next   video in the AI coding 101 series how   full stack applications actually work I   hope to see you there thanks for   watching take care


---

## 2. Essential AI prompts for developers

**Source File:** `VideoTranscriber_Essential AI prompts for developers.txt` | **Size:** 8.2 KB

---

In this video, I'm going to give you 4 prompts and prompt strategies that you can use as a developer to get the AI to work really hard for you. Now, even if you're not a developer, I think you'll like this video. You can use these strategies no matter what you're doing. Just a quick note, do make sure that you like and subscribe.

It means the world to us, your comments and your likes; we read every single one. OK, let's go #4 is called the Q&A strategy prompt. This is where you get the AI to prompt you so that you can prompt the AI. It sounds weird, but check it out. I've got a small dashboard project here that is rapidly growing and currently all of the files are just kind of in here together, right? There's there's this main app file, there's a db file, there's a service file, there's a pug template here.

It's, it's like a junk drawer. So I'm going to ask the AI to propose a folder structure for this project that's going to help me organize this thing correctly. I'm also going to mention my workspace when I do that, and this passes information about my current project along with this prompt.

 But instead of just stopping there, what I'm going to do here is I'm going to ask the AI to ask me some yes/no questions to help it provide a better recommendation. OK, let's see what it's asking for here and answer each one of these. I'm just going to provide the question number and a simple answer to do that. So yes, we do want restful API, yes for auth, no, not using micro services.

Yeah, static files, right? And I can just keep doing this. Now notice at number six, it starts to veer away from simple yes or no. And and by #10 it's just not even a yes or no question at all. But that's OK. This is the nature of AI. We'll just work with it and provide very short answers, and then we get a nice recommendation for how to structure this project.

The magic of the Q&A prompt is that it helps you put all of the details in the prompt that you would have put there in the beginning if only you'd thought of them. So don't try and write the perfect prompt the first time. Use the Q&A strategy to help the model prompt you to give it the best prompt #3 is called Pros and Cons and you can probably guess where this is going.

In programming there is rarely a single right way to do anything, despite the blog post that you read last week telling you otherwise. I've implemented a bit of the model's suggestions on how to structure my project now, and you can see I've got here an API folder, view, db, but for the db Connection class here I've written the connection, but I'm not 100% sure if this is really the best way to do this for this app.

So I'm going to ask the model for suggestions on different ways I could implement this space connection logic, and I'm going to ask it for the pros and cons of each suggestion. I'm also going to mention the file directly so that the prompt sends the code that I want the model to review here. OK, so let's see.

The first recommendation is a singleton. Cons are that it can be inflexible with other data sources. OK, I don't have other data sources. Number two is how I'm doing it right now and the cons are yikes -  possible leaks that sounds bad. Number s3 could lead to resource exhaustion. I don't know what that is, but it sounds really bad.

 Number 4 isn't really a new suggestion as much as just use async await in your current code, which is not a bad thing to do and #5 is ORM which I'm not going to be using. OK, so let's pick the singleton and I'm going to ask it to rewrite this code in that pattern and then I could just ask how I would use this in the app. OK, so it looks like we just import it and then call the get instance and then and then query it. Nice.

Easy peasy. Remember, there's no one right way to do anything in programming, so use a pros and cons prompt and have the model give you several options so you can pick the best one for you. Hey folks, quick interruption, hope you don't mind. If you like the content in this video, make sure you subscribe to the GitHub Insider Newsletter where you're going to find tons more of This stuff.

Every month delivered right to your inbox. Link in video description. Go ahead and do that. Now back to the video. Number 2 is one of my favorites, and it's called Stepwise Chain of Thought. Chain of Thought just means that you ask the model to break things up into steps and go one step at a time. For instance, this code file could stand to be refactored, cleaned up, but there's a lot of work to be done here.

So let's ask the AI to help us refactor it. So we get back a kind of verbose response. Here it is moving one step at a time, but it's trying to do the entire refactor in in one shot. It's just too many changes for us to validate at one time. Let's try this again. So this time I'm going to tell the AI to move one step at a time, but to wait for the keyword "next" before proceeding.

This magic keyword is what's going to make the AI only do one thing at a time. First, it wants us to stop using var, which, sure, fine. I'm not going to touch that yet because I want to refactor the db connection variable itself. And if we do next here, it does that. OK, perfect. And then we can click on the apply and editor button here and it will try to merge the changes from what it's suggested with what we currently have.

And you do have to be careful when you do this check that everything is right. I mean, look here, it left this function out of the refactor entirely. So we need to fix that up. Now, wometimes when you do this, you'll want to ask questions about a particular step, get clarification, like it wants me to add a vehicle interface here.

But I'm thinking this would be better as a separate model class. So let me ask about that. Yeah, See, it kind of agrees with me, and you have to be careful about this because the AI will almost always agree with you if you insist that something is the right way to do something. But when you do that, you get out of the flow of waiting for next.

So to fix that, I'm going to go back into the chat and just delete that item from the history so that I can then proceed with next. Although apparently it refuses to move on until I make the vehicle parameter an object. Fine, fine, I can take a hint. All right, number one, last one, it's called the Roll Prompt.

And this is where we're going to depart from our vehicle dashboard and learn a new trick. Literally. AI's love to be given a role to play in a conversation. And you can basically tell them what they're good at and then just they're magically good at that thing. It's incredible. So I'm going to ask the model to play the role of a teacher.

I'm going to tell it that they are excellent at making complex topics simple and I like to learn by doing. So I'm going to tell the AI that it's good at doing that too. And what are we going to learn today class? Regular Expressions! And then I'm going to combine this with the Stepwise Chain of Thought prompt and tell it to go one step at a time and wait before moving on to the next concept.

And if I get the answer wrong, I don't want it to just give me the right answer. I want it to nudge me in the right direction so that I can figure it out myself. OK, here we go. All right, looks like we're going to learn the basics of Regex. Let's see. Match the word cat. You can match characters just by putting them in a sequence.

OK, so it's literally just cat. Yes. All right, let's see if I can do another match. Any three letter word that starts with C and ends with T, and the dot is used to match any single character. I guess that's just C dot T. Holy crap, I'm an expert. OK, one more, one more match cat or caught but not cut use square brackets.

So like this. Oh, I got that one wrong. I like how the model calls this a misunderstanding like like maybe this is both of our faults. Oh, I see brackets match individual characters. OK, so if we put the A and the O in the brackets, yes. All right, I feel like a regex pro already. And you can use this to create custom curriculum to learn anything at all.

AI's love to role play. OK, so Q&A prompt, pros and cons, stepwise chain of thought and the role prompt. Remember these prompts and work smarter and not harder with your AI. Working harder is the AI's job. See you in the next video. And as always, happy smart coding.


---

## 3. The True Power of AI Coding - Build Your OWN Workflows (Full Guide)

**Source File:** `VideoTranscriber_The True Power of AI Coding - Build Your OWN Workflows (Full Guide).txt` | **Size:** 29.8 KB

---

No matter what you are building, if   you're working with AI coding   assistants, it is a lot more than just   prompts. It's all about creating   systems, workflows that can evolve to   fit your needs. I know it's tempting to   just wing it. But if you want to build   anything substantial, you do need   structure.

 There's a reason why we have   so many strategies around context   engineering like the PRP framework or   BMAD, the GitHub spec kit. There's a   million of them out there. And that's   actually the problem as well. It's easy   to get lost in the sauce, so to speak,   with all these different strategies and   how they apply to you.

 Now, the solution   to this problem is what I'm going to be   covering with you in this video. We're   going to be scrapping the notion of   existing frameworks like PRP and BMAD,   and we're going to be building our own.   I'll show you how it works. Because if   we can understand the philosophy and   strategies that go into all these   existing frameworks, not only can we use   them better because we actually   understand them, but also we can tweak   them to our needs and even build our own   workflows and systems.

 This is where the   power really comes into your hand. And   this diagram that you're looking at here   is everything I'm going to cover with   you in this video. It sums it up really   nicely because I want to keep things   simple and fundamental here. I want to   give you a process that you can apply   that'll take you super far with AI   coding assistance no matter what you are   making.

 So the primary mental model that   guides most of my coding is the   three-step process of planning, then   implementing and then validating. That's   we're going to build a workflow around.   And so I'll just go through at a really   high level everything that we're   covering here. Then we'll get into   detail and I'll show you a real example   as well.

 And so first of all, I always   start with planning. And I have a   multi-step process for this. I start   with vibe planning. That's what I like   to call it. We're basically just   exploring very free form the different   ideas that we want to implement for a   new project or the codebase for an   existing project. And then from there,   we create our initial requirements for   that new feature or new project.

 And   then we prepare all of the context so   the AI coding assistant has what it   needs to get the job done. And slash   commands are great for this. We're going   to be covering slash commands and sub   aents and other components of AI coding   in this video as well. And then once we   have all of the context we need, we want   to then execute on it to actually   produce our code.

 And creating a   predefined workflow through slash   commands is fantastic for this as well.   So we can define how we want to manage   tasks and research our codebase, those   kinds of things. And once we have the   code outputed, it is time for   validation. And we want to leverage AI   coding assistants to validate their own   work and then put ourselves in the   process as well.

 making sure that we can   really be the project manager for the AI   coding assistant. And then the last   thing that I'll be covering throughout   this video here is the different   concepts for AI coding assistance and   how they apply to different parts of our   workflow like global rules and sub aents   and slash commands.

 For example, we   don't actually want to use sub aents in   the implementation phase. So I'll talk   about how that works, really the   philosophy behind it. This will also   help you understand how these different   strategies work like PRP and BMAD. Now,   what I'll be building live here is not   the focus of this video.

 So, I thought I   would take this as an opportunity to do   something fun and different, showing you   something that I'm working on personally   because I've been overhauling my   productivity workflows recently,   switching to an app called Obsidian. It   is a free and local knowledge management   platform.

 You can kind of think of it   like Notion except there's also a ton of   open source plugins to extend it. I'm   working on some myself. I will probably   be creating a lot more content around   Obsidian in the future because you can   also use it as your second brain. It's   super cool and there's a lot of AI   integrations that I have been working on   including what I'm going to showcase in   this video.

 So, we have the co-pilot   chat on the right hand side. This is   connected to, you can see it right here   in the bottom right the Dynamis Obsidian   agent. I have my own AI agent that I   have running in Docker on my computer   and that is what Obsidian is connected   to. It's super cool. So, I can say tell   me about and then I can reference files   within Obsidian like the one that you're   looking at right here.

 I can send this   in and it's going to my custom agent.   This connection here is what we're going   to be building out in this video just as   an example for the custom workflows that   we're creating here. It's super cool.   Take a look at that. All right. Now,   let's dive into the process and we'll   start with the planning phase here,   which honestly is the most important   phase by far because if you're not   curating your context correctly for the   AI coding assistant, it will fall on its   face. And by the way, everything in this   video is going to be rather brief. I   just want to start with the basics here.   If you really want to dive deep into   mastering AI coding assistance with me,   definitely come be a part of the   half-day workshop that I'm hosting on   September 27th. This is where we really   dive deep. All of my strategies in one   place for getting the most out of AI   coding assistance. So, hope to see you   there. Link below. Definitely check it   out. I am going to be pouring so much   value into that workshop. And so, right   now, you kind of get a taste actually of   a lot of what we're going to be covering   here. I want to help you build your own

  AI coding workflows so you can   understand the philosophy and strategies   that go into all these different   frameworks. And so, with that, we can   start with the planning phase. Now, the   first thing I always do to start the   planning phase is vibe planning. Now,   hear me out on this. If you've seen my   AI coding content in the past, you know   that I'm not a fan of vibe coding, but   that's different because that's when we   get into the actual implementation.

 We   definitely want a lot of structure and   validation there. But when we're in the   planning phase initially, all we're   doing is exploring ideas, architecture,   concepts, figuring out our tech stack.   We're doing that with our AI coding   assistant as our research companion. And   I purposefully do not want this to be   structured because I want a more   freeformed mindset as I'm working in   this initial phase.

 And so for new   projects, this means researching online   resources, previous projects that you've   implemented. I actually love to do this   where I'll create an examples folder in   my codebase and take existing projects   and put it there and research that with   my coding assistant. And then for   existing projects, it's generally   researching and analyzing the existing   codebase to see where our new feature is   going to fit in.

 And of course, this   isn't an exhaustive list. It's really   whatever you want to do to have a   conversation with your AI coding   assistant so you're both on the same   page of what needs to be fully planned   and implemented. And so once you have   that conversation with the coding   assistant, within that same context   window, I'll have it help me create what   I like to call an initial MD.

 This is   the first file that we create for our   planning. Just a simple markdown   document. The goal is to produce a   markdown doc with a detailed feature   request, otherwise known as a PRD. This   is the kind of document that's more high   level, the kind of thing you could give   to another human to describe what you're   looking to build.

 So, at this point,   we're not super specific to prompting   strategies for the coding assistant yet.   And so, for a new project, generally,   you want this to be very high level. a   simple MVP for the application you want   to build, including a lot of references   to the supporting documentation and   examples that you found in the vibe   planning stage.

 And then for the   existing project, it's pretty similar,   but it's going to be a lot more focused   and detailed that specific feature you   want to build into the existing   codebase, including a lot of references   to what I like to call integration   points. The files that have to be   edited, maybe the files you want to   reference for architecture.

 Again, all   of those things that you discover with   the coding assistant in the vibe   planning stage. So once we have this   initial MD, that's when we want to take   our requirements and turn it into a   full-fledged prompt for the AI coding   assistant. And this is really where the   strategies around context engineering   come into play.

 You've probably seen   this diagram on my channel before, but I   recreated it from scratch in Excaladraw.   Hope you're proud of me. I put way too   much effort into making this. It's kind   of silly, but anyway, we have RAG,   providing external documentation to our   coding assistant, memory, like our   conversation history.

 We have task   management. This is super important for   the planning phase, and we'll talk about   this in a little bit. And then, of   course, we have prompt engineering,   which is a lot about how do we take our   initial request and craft it in a way   where we have a plan of attack for the   coding assistant.

 And so, the goal in   this stage, we are producing a second   markdown document. So, we take our   initial MD and we produce a detailed set   of goals, tasks, and resources for the   AI coding assistant. Basically giving it   everything it needs to get the job done   effectively. So, we're taking our PRD,   turning it into a full-fledged   implementation prompt.

 And by the way,   this is exactly what the PRP framework   accomplishes that I cover on my channel.   And so I'm starting from the basics   here, but it's kind of cool how like it   naturally progresses into kind of a   light bulb moment where it's like, "Oh   yeah, PRP, that totally makes sense   because that's exactly what we're   doing.

" When you generate a PRP, you're   taking your initial requirements and   turning it into a much more structured   document for the coding assistant that   has things like the task list that you   want to knock out, your desired codebase   structure, your success criteria, all   the documentation examples that you   wanted to reference.

 That is what we're   creating with our planning document. And   there are a lot of tools to help us get   the job done here. I'll show you Archon   in a little bit with our live example,   the PRP framework, of course, even   simple web search tools that we have   with things like cloud code. That is a   part of the rag that we have for context   engineering and archon is also for rag   by the way and also our task management.

  And then a lot of other tools coming out   like the GitHub spec kit is rather new,   really cool, provides a lot of commands   to help us do a very similar thing that   we're doing here with the vibe planning   and then you know creating our initial   requirements and creating the plan.   GitHub spec kit does a lot of that.

 And   so again, understanding the philosophies   here that go behind these different   strategies. All right, let's get into   the codebase now because I want to show   you how this works in action. Now, for   brevity sake, I already had the   conversation complete, but I'll walk you   through my general process, how I'm   applying the principles to start to   create this AI coding workflow that I'll   showcase here.

 That is just an example   of the kind of thing that you can build.   And so, first of all, we're starting   with a brand new conversation with cloud   code. And this works no matter your   coding assistant, of course. And the   first thing I do whenever I start a new   conversation working in an existing   codebase like I'm doing for this   Obsidian integration is I will run a   primer slash command.

 And so we're   starting to get into slash commands   here. Slash commands are simply prompts   that you want to turn into reusable   workflows which very much goes with the   theme that we have here. creating a   system for AI coding both with mental   models and also with literal workflows   that we have created as these markdown   slashcomands here.

 And so what the   primer does is it lists out instructions   for files to read to quickly catch the   AI coding assistant up to speed on our   project when we're starting a new   conversation. And so that way it kind of   feels like our coding assistant has been   working with us on this project for a   while now, but it is actually a fresh   conversation.

 And so it does a bunch of   research through the key files in my   codebase. And then at this point I'm   ready to move to the vibe planning and   slash commands are pretty important for   most stages of our workflow here. Really   every single stage. And so I have this   part of the diagram here talking about   this for the planning stage.

 This is   where we want to set up our global   rules, the key instructions for our   coding assistant. And then we use sub   aents and slash commands to automate   parts to create those workflows for   parts of our planning stage. And we do a   lot of that for validation and   implementation as well. Except we don't   use sub agents for implementation.

 I'll   talk about that in a second here. So   yeah, we're in the VI planning stage   now. And this is where, like I said, we   don't have structured prompts. It's   super basic here. I just describe at a   high level what I want to build because   I want my AI agent to be able to connect   to my Obsidian vault.

 I give an example   that I pulled from a past project that I   want it to reference. This is just the   high level. Let's start to get into the   code. Then once we do this exploration   and we're confident in its understanding   and you can kind of elaborate more and   and fix up some of its understanding,   you make sure you're on the same page   with it.

 Then you will go and create the   initial MD. And so you on the same page,   you did your planning. Now we start to   add in our structure. And so in this   case, I'm calling my initial MD OpenAI   API compatibility. It's just a markdown   document with that initial request that   we have for our AI coding assistant. So   we have the feature that we want at a   high level, the endpoints that we want   to build, some examples of how we want   to interact with our agent.

 It's not   super super planned out at this point,   but this is our initial request that   we're then going to turn into the full   plan. That's the key here is at this   point we're just creating our initial   MD. And so we have that built out. And   now at this point that is the end of our   first conversation.

 We want to move now   to another fresh conversation because we   want to move on to the next stage of our   workflow. Taking that request and   turning it into the full plan with all   of the context engineering. And so I've   created yet another slash command for   this part of the workflow. So I'm   calling it create plan.md.

 And again,   this is just an example of what your   planning workflow can look like. You can   build this however you want. Just   generally, you'd want to kind of follow   the principles that I have covered in   this diagram. And so, I walk you through   this three-step process. And now, I'm   just building slashcomands and sub aents   around this general flow, doing some   things that are kind of more specific to   my project as well.

 And so, you can   build these kind of flows to however   works best for what you are creating.   And so for my create plan, basically I'm   just telling it to take the requirements   document, that's what we just finished   creating, and then go through a few   different phases. So read and understand   the requirements.

 We have a research   phase where I wanted to use web   searching for rag and also archon if it   is available. And then I also have this   codebase analyst sub agent. So I created   a sub agent that it calls upon to do a   lot of that extensive research. And not   to get too deep into sub agents right   now, but they're very powerful because   they have their own context window.

 So   they can do a ton of research and then   output a summary of that without it   polluting our primary conversation. So   we keep our context window concise and   focused. And so this sub agent just does   a lot of research around our existing   codebase to figure out exactly what our   plan should look like.

 So we need to   create you know that implementation plan   task by task our desired codebase   structure the documentation we want to   reference and the codebase analyst and   this whole slash command helps us create   that and so I'll go back into the   conversation and kind of show you what   that looks like.

 So first of all I ran   the create plan here with the   requirements document passed in as my   argument in the command and it starts by   calling the codebase analyst sub aent.   So it does a ton of research. It figures   out exactly how we're going to be   integrating this new feature in our   codebase. It does some rag searches with   archon.

 It does some codebase example   searches and then it produces our plan.   And so this is kind of taking that   initial MD to the next level with all of   that context engineering. And so these   things I've been speaking to, we'll find   those here. Like here is our step by   step all the tasks that we want to   implement.

 And it gets really granular   here which is always good. If you want   to be specific with AI coding   assistance, that's exactly what this   plan gives us. We have the different   files that we need to modify, the ones   that we need to create, existing   patterns to follow, everything that it   needs to get the job done. Super cool.   And we have the success criteria as   well.

 Maybe I could add like a desired   codebase structure, but it's more about   editing existing files. So I think like   for what I'm building here, this plan is   absolutely perfect. So now that we have   the plan created, that is the end of   what I've gotten to so far. So now with   that comprehensive plan, well, first of   all, I'd recommend validating it,   actually making some adjustments with   the help of the coding assistant if   necessary.

 But once you're confident in   the plan, then it is time to move on to   implementation. Now, for implementation,   the most important thing is to have a   workflow that guides the coding   assistant on how to knock out the tasks   one by one. And the task management here   is the most important thing, especially   if you're trying to do quite a bit in   one request.

 If the coding assistant   tries to do too much at once, that's   when you have a lot of hallucinations.   And so tasks are your way to have a   larger request, but still have it be   very focused and granular on one little   thing each time. Like if we go back to   our planning document, you could see   that like we have very granular tasks   that we're having a knockout one by one.

  And so we're going to create another   slash command to define this workflow.   And exactly what your slash command   looks like depends entirely on what   you're doing for your task management.   And so in my case, I'm using archon for   task management. And so my workflow   speaks a lot to how exactly I want to   use archon.

 Now it's not the case that   you have to use archon. That's the point   here is this is just an example of my   workflow. So it's creating all these   tasks here for this OpenAI API   compatible implementation. But you could   be using Cloud Taskmaster or another   Markdown document to manage your tasks.   However you want to do it, even just the   internal task management tools that we   have within these coding assistants like   Cloud Code.

 The important thing is just   to create a workflow around the task   management. And so when I go to my   execute plan here, I'll just show you   really quickly at a high level what this   looks like. And this might end up   looking a lot different for your   workflow, but I want to read my plan   that I've created. This could be a PRP   if we're using the PRP framework or, you   know, it could be the project brief if   we're using the BMAD method.

 And then I   want to set up the project in Archon if   it isn't already. Create all these   tasks. I want to analyze the code. And   then I have this cycle here where I need   to mark a task as to-do or doing. And   then it'll go through that task and then   move it to review and then move on to   the next task.

 And it'll do that in a   cycle until everything is done. And then   it'll move on to validation. And we   actually have a sub agent to help with   validation as well. So it'll execute   this guy to within its own context   window, create a bunch of tests, and   make sure that our code is good, and   then report back to our primary coding   assistant if there's anything that needs   to be fixed up.

 And so yeah, generally   my process around validation is while   the coding assistant is running, I will   validate to make sure that it's using my   MCP servers properly, that it's editing   the right files and looking in the right   places, I generally watch it at least   kind of closely to test these things.   And then once we have the code outputed,   this is where our plan should also speak   to how the AI coding assistant can   validate its own work.

 And then we want   to be a part of this process as well.   Performing a code review because we   don't want to vibe code. We want to   actually look at and understand the code   that is being produced and then running   any kind of manual tests that we want to   like actually talking to the agent in   Obsidian like we'll see at the end of   this video here.

 And sub aents can be   great for validation because again we   want isolated context windows to not   pollute our primary conversation so that   we can have a sub agent run a bunch of   different tests to make sure that   everything is rock solid. And one last   thing for validation. There's another   agent that I love using to review my   work.

 You can think of it as another   validation sub aent and that is Code   Rabbit. an AI powered code review   platform and they are sponsoring this   video but I do use them every single day   for my work and it's free for open   source projects so naturally I've   integrated code rabbit with archon every   single pull request that is made to the   archon GitHub repository is   automatically reviewed by the code   rabbit agent it analyzes my codebase   deeply and my poll request it   understands how it affects things and   outlines that here it gives me a   beautiful sequence diagram for every PR   it suggests reviewers and of course we   have the allimportant actual code review   here with the changes that it recommends   and I will literally take these and give   them to claude code or whatever AI   coding assistant I'm using. So, it's   become a crucial part of my development   workflow, and I'm just very thankful to   have Code Rabbit for Archon, especially   with all the poll requests that we're   managing every single week. And they   have a CLI tool now, so you can use Code

  Rabbit not just to review your PRs in   GitHub, but now you can also use it as   one of your agents reviewing things   locally when you're developing on your   machine. Code Rabbit also offers free   trials for their paid tiers and is free   for open- source software like Archon   like I mentioned earlier.

 And the   reviews with the CLI and IDE tools are   free with rate limits that apply of   course. And so if you've been feeling   overwhelmed with the amount of code that   you've been creating with AI tools, this   is your ticket to maintain quality   without slowing down. I'll have a link   to Code Rabbit in the description.

 I   would definitely recommend trying them   out. So on to implementation in action.   And this is pretty simple overall   because we did so much of the work up   front in the planning stage. So now   thanks to the plan that we've generated   that has all the components of context   engineering. All we have to do is   execute our predefined workflow passing   in the plan that we have created.

 So   again we have the execute plan/comand   where we take in our requirements. We   break it down into all those tasks. And   in this case I'm doing everything in   archon. And so I went through this   implementation already. So, we have all   the tasks in done. It knocked it out   100%. Is actually really incredible.

 And   so, I'll go back to the terminal here   and show you uh the conversation that we   have. And so, it's partially cut off   because there's a lot of work that it   did here. But, yeah, we just sent it in   to implement literally everything. And   it goes for a while here. There's a lot   that it's taking care of, but I have   quite a bit of trust in the coding   assistant because of all the context   that I gave it and how things are split   up between the different tasks.

 And you   can see that was doing a lot of the task   management with archon here as it is   changing things. So it's interled   managing tasks making changes and then   going through that cycle. And then at   the very end here we have validation.   And validation is kind of mixed into   implementation as well. And that is   where we invoke our specialized   validator sub aent.

 And so it went for   quite a while here. Actually probably   longer than I really needed it to go. It   did a lot of validating with unit   testing and other things to make sure   that our code is rock solid. And the   important thing that I want to call out   here is that for the validation that's   when we go back to using sub aents.

 So   planning and validation we use sub aents   but I on purpose did not use any sub   aents during the implementation. And the   reason for that is when we're actually   making the code changes doing the   implementation, we want everything to   remain in the primary context window for   cloud code or whatever our AI coding   assistant is.

 If we have different sub   aents implement different parts of our   codebase, they're not really   communicating with each other and memory   is not shared between them. So you start   to have conflicting changes and   overlapping changes. It becomes a mess   when you use sub aents for the actual   code creation. And so generally I always   use sub agents for the research upfront   and then also having a validator   specialist so I can give a very specific   system prompt to this agent for how to   validate my code.

 So that's the really   important distinction I want to make   there. Otherwise for slash commands I'm   using them in every single part of the   implementation like you saw. And then   global rules. I haven't covered too much   in this video, but really this is what   you'd set up in your planning phase   initially.

 When you're trying to just   think at a high level like what are the   instructions that I want my coding   assistant to follow literally no matter   what I'm doing, starting the project   from scratch, adding in a new feature,   doing a bug fix, there are a lot of   those kind of golden rules that you want   to put within your claw.

md whatever that   file is called for your coding   assistant. And then of course the last   step here is our own review. You   definitely want to perform a code review   on everything that was outputed by your   coding assistant. Otherwise, you're   still just reverting back to Vive   coding. So, perform a review and then   run manual tests as well.

 Like I have my   agent API running again in Docker. I   have the connection already set up in   Obsidian. So, I'll just show you this   really quick. I'll go into my chat   window here and I'll say summarize. And   then I'll just reference this whole   diagram that we've been going through   throughout this video. So, I'll send   this to send to my agent.

 It's   communicating to literally what we just   built using the OpenAI API compatible   endpoints. And there we go. We have a   summary of the full workflow based on   our diagram here. Absolutely beautiful.   The implementation is flawless. And now   we have this workflow that we can use   for other things as well.

 I mean the   whole planning slash commands and primer   that I had and the sub agents for   validating and executing and my whole   process for task management in archon   like it's not actually that specific to   this specific implementation. Like I can   take this and reuse it for anything that   I want to build.

 And that is the main   thing that I'm trying to describe to you   in this video is how you can create   these combinations of rules and sub   agents and slash commands and even just   like a mental model of how you plan then   implement and validate and like that   becomes your process that you can reuse   for anything.

 you've now built a system   for working with AI coding assistants.   And even when you start to incorporate   other things like the PRP framework or   the GitHub spec kit, you're still   following that same mental model, just   using those approaches to basically   augment what you have and you can tweak   it to your needs.

 So that's everything   that I've got for you today. If you   appreciated this video and you're   looking forward to more things around AI   coding and building out these kinds of   workflows, I would really appreciate a   like and a subscribe. And with that, I   will see you in the next


---

## 4. BEST WAY to read and understand code

**Source File:** `VideoTranscriber_BEST WAY to read and understand code.txt` | **Size:** 21.9 KB

---

one of the hardest things to do as a   beginner in programming is read other   people's code and the annoying thing is   reading other people's code is so so   vital to programming like that is   literally how you get better you don't   start off as a beginner just being   absolutely phenomenal by just writing   your own code the way that you want to   write code you need to write other   people's code to get better so here we   are today sitting down to make this   video because I want to tell you guys   what the secret to reading code is or at   least what I think my secret to reading   code is   it's coffee imagine that   uh it's a Sunday kill me and this by no   means applies just to see blast Blast by   the way we're going to be looking at C   plus code just as an example here today   but this applies to everything and that   is would now be a good time to put in   the sponsorship mention no I'll do it   later anyway enough fluff execute the   code run the code stop just reading the   card as if it was some kind of book that   you picked up and you just flipping   through the pages as if it's paper

  you're just reading it   don't do that load it up in an IDE load   it up in some kind of like execution   environment that has a debugger and just   run it just run it put breakpoints in   use the debugging like code flow   commands like step into step over all of   that stuff to just kind of go through   the code as it's running I mean you can   think about it this way when you run the   code you're actually getting the   computer to do what the program is meant   to do right so you the computer is   actively literally doing what the   program is doing like the program has   programmed the computer to do something   you're literally watching it do stuff   you're watching it happen so if you can   just kind of like be like whoa slow down   there Cowboy let's just hit the brakes   for a second I'm gonna tell you when you   can do the next thing and I want to   watch you do it that's literally what   you're doing when you run your code   through a debugger like that's literally   what's happening and at that point you   can of course examine the entire state   of your memory you can see what the   variables are set to you can see which   functions are being called you can see   how you ended up in a certain function   by putting a breakpoint in there   assuming the program hits it you can

  easily see where the entry point of the   program is and what it does in the   beginning and it's even a much better   way to trace back and find where certain   areas of code are actually written all   of these examples that I just mentioned   we're going to take a look at today here   in this video but first don't click away   don't skip because this is going to be   useful it's going to be important this   video is sponsored by brilliant.

org and   the reason why I didn't want you to skip   is because I just want you to know that   currently brilliant.org have a 30-day   free trial free trial 30 days everything   I'm about to say you can experience for   free for 30 days so just check it out   link below brilliant is an amazing   website filled with lots and lots of   really really good high quality courses   on various stem topics there are   specifically two areas that interest me   and that I think can help you and that   is their computer science courses they   have some really really good   introductory computer science courses   that can help you if you're just kind of   starting your programming Journey you   want to ease into it in a really easy to   understand visual way but then also   their mouth courses oh what do I say   about their math courses their mouth   courses are brilliant I actually said   that naturally it just happens to be the   name of the platform as well math in and   of itself can be quite a complicated the   topic and believe me when I say the   brilliant presents it in just such a   beautiful easy to understand way because   all of their courses present information   visually and interactively yeah that's   right they have widgets that you can   play with they have like UI controls you

  can slide around so that you can see the   impact that different numbers have on a   graph for example how do integrals work   well look it's here you can play with it   so I just think it's a really good   effective way to learn but also the way   their courses are divided are really   bite size so it's really easy to get   through quickly if you don't have much   time and they'll actively quiz you   they'll ask you questions all along the   way to make sure that you're paying   attention and retaining the information   and all of these features added up   together just make a fantastically   effective learning platform for math and   computer science and they also have   other stem topics as well so go ahead   and check them out as I mentioned 30-day   free trial brilliant.org the churner as   always the first 200 subscribers will   get 20 off an annual membership link   will be in the description below thank   you brilliant for sponsoring this video   alright so back to talking about reading   code I have three examples for you okay   my first example I was doing a code   review a while back this is of like a   ray Tracer I want to use this just as an   example to show that when you have a   function here that calls an object   somewhat indirectly so in other words if

  we take a look at this actual code there   are plenty of different objects here   right we have like just the Base Class   object and then we have all these other   classes like mesh which mamesh is an   object we have a sphere which is an   object we have a plane which is an   object if we just go back to this piece   of code that we're interested in and we   want to see what on Earth intersect   object actually does if I try and go to   the definition you can see how many   definitions there are like it can be   really difficult to see if any of them   are even in use if I'm rendering a scene   like which one which function here   applies to what I'm actually visually   seeing because presumably I want to find   out how what I'm seeing is working how   it's actually happening so what I can do   is instead of like instead of like   trying to go through all of that and   find that code if I just put a   breakpoint on this line of code and just   run this program when we hit this line   of code our debugger will pause the   program of course and then I can do a   few things first of all immediately you   can see the Glorious context I'm   presented with in the call stack right   like I can immediately kind of see how I

  got there from invoking Main to the   actual main function itself into scene   render into scene launch workers   renderer cast Ray and then render a   trace like I suddenly have so much more   context imagine trying to piece this   together just in your head like it's a   complete nightmare if you've never seen   the code base before and this kind of   thing is the trick that I use all the   time when I'm reading other people's   code for those code review videos that   you're seeing on my channel but it   doesn't stop there if I now want to see   which specific intersect object function   is actually being called I can just use   the step into button over here or press   f11 when I press that you can see it   steps me into sphere intersect object so   I know that I'm rendering spheres and   this seems to be the exact kind of math   that's happening I can kind of read   through that and learn from it but again   it gets better because check this out   all of this kind of context here like   for example if I'm just reading this   code like position minus Ray origin like   l dot dot product redirection what's L   like these kind of parameters can be   difficult to kind of digest right but

  check this out I can hover over Ray drop   this down see what the actual numbers   are go through this line by line like   obviously see the result of all of these   variables see which branches are hit and   by the way this is exactly why I would   not write this like that I always drop   these down if it's a one line if   statement with no curly brackets drop it   down like this because then you can   actually see which branch is being hit I   mean in this case obviously we'll know   if it hits this because we'll return   from the function but I'm talking about   like all if statements like this for   example no real way to tell if that's   hit without actually kind of stepping   through it anyway if I keep going you   can see that was in fact hit right   because I'm over here now I'm going to   return from the function so D2 was in   fact greater than R2 and again I can   look at the numbers I can see exactly   what's happening and that of course can   help you tremendously when you're   actually reading and trying to   understand the code now if we just hit   F5 to run this again there's another   trick that you can use in this specific   circumstance because if you press f11   what it might actually do is if there's   like a huge chain here it might actually   step you into the get function now for

  whatever reason it didn't I think get I   think because get is actually not it's   part of the standard Library this is   like probably what even is I so I you   can see auto I objects begin we can see   that I is a unique pointer again the   debugger helping us there not too   difficult to work that out from kind of   looking at object vector and saying that   it's a vector of unique pointers but   anyway if you want to avoid stepping   into functions you're not interested in   you can actually right click and then go   to this step into specific menu option   where you can see it presents us with a   few different functions we can step into   now here we can step into this   d-reference operator that's on the   iterator class which will return the   object itself we can go into unique   point to get or we can go into this   indirect call it's an indirect call   because it's a virtual function so if we   click on this guy it takes us exactly   into where we are in this case we're   intersecting a plane so that helps a lot   now whilst we're in this project I want   to show you guys one more thing the way   that this guy wrote this which I pointed   out in my code review which was a little   bit weird is basically if we're in a   debug build we do this on one thread and   if we're in a release build we dispatch

  a whole bunch of worker threads to kind   of do this multi-threaded so I'll switch   over to release just because I want to   show you a multi-threaded example once I   hit this breakpoint you can see that   because it is a multi-threaded example   the context has kind of changed this   call stack is now showing that we're not   coming from the main function we're   coming from this thread invoke which   runs this render worker but what I can   actually do to again learn more about   the program understand the program more   and the code is I can go to debug   windows and then parallel Stacks which   is over here and if I do that it'll open   up this useful window which shows all of   my running threads so the call Stacks   for all of the threads because they're   all suspended obviously and it'll show   exactly what they're doing like their   call stack right so you can see for   example the main thread is just sleeping   it's sleeping inside this launch workers   function and in fact I can double click   on that if I want to take a look at that   line of code exactly so I can see okay   sleep for 10 milliseconds okay now I   know how this program has decided to   wait for all of the threads to kind of   finish but you can see the rest of the   threads in the entire program here like   we can see that this guy this guy over

  here is doing render retrace and it's   inside the intersect object function   again I can double click on it if I want   to go to that we have like this function   which is like inside acceleration   structure we've got another thread here   I mean all these threads are basically   doing Trace or they're inside cast array   but you kind of get the point it's a   really powerful and easy way to see how   this kind of program is actually coming   together the architecture of the program   now actually example 1.5 because I just   thought of this one more useful way that   you can use that parallel Stacks window   as well is if we go to Hazel this is   going to be Hazel's runtime if I run   Hazel's runtime and specifically   dichotomy a game that we made for last   let him dare which is a game Jam for   those of you who don't know you can see   this is the actual like game being   played if I just with this game running   just hit pause it's going to suspend all   the threads obviously and it's going to   show me the call stack of this so I can   actually kind of get some information on   how on Earth this is running right and   what everything's doing and if I go into   debug Windows parallel Stacks I can also   get some information on how all of the   different threads inside Hazel are

  actually working together in that   particular moment so you can see for   example that the main thread is just   inside render thread block until render   Complete because it's just waiting on   the render thread to finish the render   thread over here looks like it's inside   some Vulcan command pool basically it's   trying to upload data to the GPU into a   storage buffer and then we have like the   audio thread which is just sleeping I   can easily kind of see the architecture   of Hazel as well all the way down to   Maine to see how this application kind   of comes together really really useful   stuff that helps you understand how this   code is actually written and how this   program works and hopefully you can see   that if you contrast this to just you   know reading the code just with your   eyes how big of a difference there   really is and how much easier it is to   understand how this works okay the   second example is this this actually   happened the other day I was doing a   code review and I wanted to demonstrate   that unique pointer basically did the   same thing as new and delete it just   kind of automates it it makes it a   little bit more foolproof so we have   this entity class we have us making a   unique pointer I basically kind of want   to just to prove that in the beginning   when we kind of call make unique well   what does it do let's take a look at his

  definition I'll hit F12 in Visual Studio   it brings me to the code now it's   standard Staples Library code so   yeah it's a little bit hard to read as   it is and again for beginner good luck   mate poor young China is struggling with   this to all the young churners out there   I salute you this is not alcohol   anyway so you can see very clearly that   the make unique function over here it   takes in our arguments in case we have   any for the Constructor it calls new on   the type that we make unique with so in   this case that would of course be the   entity type it calls new entity and it   passes along any of the arguments that   we have into that Constructor if there   are any very easy to read not a problem   no need to run the code to see that   however I want to show it calling delete   because I know it calls delete right the   unique pointer just calls new and delete   for you right so how do I show that well   back in uh you know the unique pointer   class inside this memory header file   here it is memory there's a nice   intimidating header file if I like you

  know if I try and find like the   destructive unique point I'm going to   cheat and use visual assist here alt M   uh and then if I put in like a little   squiggly line here I know that's going   to be the destructor and oh look here's   the unique point of Destructor yeah   that's your call to lead right   um well I mean it calls if my pair dot   my Val to my pair dot get first and then   this looks like the it like get gets   that and then uses like the call   Operator or something on it like what is   going on and again like you know as a   beginner looking at this code like well   I guess I can go to get first that   returns this or what class am I in now   no I mean like a compressed pair of   course I am like what is what is even   happening and why is it calling that   like uh well how does this work well I'm   going back to our code let's execute   this and see how it works so what I'm   going to do is I'm going to create a   Destructor inside entity right and then   I'm just going to put a breakpoint like   right here you could write some code   here like a print line or something you

  could put debug break there's many   different ways to do this I can just put   a breakpoint over here on the opening   parentheses of course make sure you're   in debug as always hit F5 it's going to   compile our code and then we've of   course hit the breakpoint presumably at   the end of this let's have a look at the   call stack because because guess what   how do we call the destructor we call   delete on that object right so if we go   to the call stack and we look at this   you can see that this is us invoking   main right over here then we go into the   unique pointer Destructor we were just   there right so I was right here it is   the unique pointed Destructor we looked   at but then after that we go into like   this SCD default delete operator and   look you can see here that it is in fact   that call Operator that I was talking   about let's double click on that and   take a look at this delete pointer so it   does in fact call delete normally as you   would expect we pass in the pointer   we're trying to delete it goes into the   call Operator this is in the default   delete struct and what it will do is   call delete and you can see just how   easy it was for us to find this exact

  code by just using the tools we have   available to us we run the code we put a   breakpoint into where we know it will   eventually end up and then we trace it   back using the call stack really really   effective now as a side note this might   beg the question of like why is it so   complicated why does this not just   delete Point normally the reason why is   because unique pointer is a little bit   more flexible you can actually provide a   custom deleter if you want if you don't   want it to call delete you have like   some special shutdown procedure for   whatever reason it needs to call that   you can pass that in like as a template   argument and it will kind of go through   that process for you that's why it's not   necessarily assumed that this will   happen but rather this is just a default   deleter so there are there are reasons   technically why it's this complicated   but of course if you're new and you have   no idea how anything works it is really   hard to track that down okay and finally   last example example number three is   going to be a quick one Unreal Engine   five nothing quick about this am I right   but anyway suppose you're trying to read   through the code of Unreal Engine 5. now   this is really really difficult to do to   the point where I would probably begin   with the documentation to kind of go

  through the actual technical   documentation of how this is architected   rather than trying to read the code per   se but here we are we're in a solution   with 122 projects which is quite a lot   what do we do uh we could start kind of   I guess going through this and trying to   read it maybe I can do a search here for   like I don't know the word main or   something to try and find the main   function like how on Earth do you even   begin with this well I'll tell you how   just hit F10 on your keyboard or go to   debug and then either step into f11 or   step over doesn't really matter I'm just   going to hit F10 I of course have   already compiled Unreal Engine 5 because   if I hadn't then this process would take   hours all right and then when it finally   runs we will see this so I had no files   open before right it was completely   blank it's automatically by itself open   this launch windows.cpp file right and   look at this we're at the beginning of   win main the entry point of the whole   program I can now just go through this   normally by like hitting F10 we can see   here that it's going into the launch

  Windows startup function again f11 will   take us into here I can go through this   line by line and actually get a sense of   how Unreal Engine starts up all of the   initialization code I can kind of go   through I can obviously use the same   techniques I used from example one where   I can see what the variables are set to   I can place a breakpoint inside a   function that I'm interested in and then   when the engine on the program   eventually hit it's that function I can   trace it back see the call stack gives   you like at the very least with   something as big as Unreal Engine some   kind of starting point where we can kind   of see what on Earth it does in its   initialization and how it like you know   eventually goes into guided main etc etc   etc hope you guys enjoyed the video if   you did a like would be much appreciated   I really hope this advice was able to   help some people because I just remember   back in the day I really used to   struggle with this and if someone had   just said this I would probably be out   and about reading other people's code a   lot more instead of constantly trying to   write my own instead because reading   foreign code was just too difficult   little Sidetrack by the way the way that   I used to read code as a beginner was I   literally remember printing out pages of

  code I printed out pages of code this   was back like in high school I was   really into programming in fact I was so   into it that I printed hours code put   into a display folder took it with me to   camp in like well like you're 11 or   something I was like 16 at the time and   read it like with a flashlight like with   a torch I read it in my tent at night   like paper Java code on paper yeah I uh   yeah I definitely should have just ran   the code




---

## Source: VideoTranscriber_AI Coding 101_ Ultimate Prompt Guide (37 tips).txt

- Original path: `VideoTranscriber_AI Coding 101_ Ultimate Prompt Guide (37 tips).txt`
- Size: `25728` bytes
- SHA256: `09E83F436AA69E021696A794CA8B0A05C15A8C9C17074B3C170056834BB6FEF8`

---


when you're coding with AI the way you   word your prompts can be the difference   between building a full stack   application in under an hour and   troubleshooting for multiple hours and   making absolutely no progress I've spent   over a thousand hours coding with AI and   I've learned a lot of things along the   way so I will share those lessons with   you today as well as some specific   prompts that you can use so when it   comes to writing new code my first tip   is to use a specific list of   Technologies or approaches that you want   the AI to use this is going to ensure   that it's going to be easy for you to   iterate on the code after the initial   version is created and make sure that   all of the tools and Technologies you're   using actually make sense and work   together well additionally when you use   specific Technologies it signals to the   AI that you at least sort of know what   you're doing so the average output   quality tends to be higher now when it   comes to choosing the specific   technologies that you're going to use I   would lean heavily towards really   popular languages and Frameworks because

  AI is much more familiar with those so   the code that it writes is going to be   higher quality also you'll have a larger   Community to help answer questions and   you'll have many more clear examples   available online that you can reference   so use things like JavaScript and Python   and some common databases like postgress   for example if you're not sure of the   specific Technologies I have a link in   the description to The Prompt guide that   will show all of the prompts in this   video as well as a glossery of   technologies that you can reference when   when crafting your prompts my next tip   for writing new code is to design a   solution and then ask the AI to build it   don't just give it a totally open-ended   prompt for example if we have a website   that shows a list of products and we   want to add a search feature we could   ask the AI to just implement it but that   doesn't give enough specific detail on   what should actually be done do we want   the search to search just by product

  title should it be description should we   have a bunch of different filters in   there you see as you start to think   about how the feature should actually be   implemented there's a lot more detail   that comes out that you should really   think through before you have the AI   implemented because if you build it and   let's say you were assuming that it   should use the description but it's not   searching by that and then you just keep   saying well it doesn't work it doesn't   work you'll just get stuck in an   infinite Loop but if you think ahead of   time how you want that feature to work   and you spell it out for the AI it's   much more likely to do exactly what you   want this also makes it less ambiguous   for the AI so it's more likely to write   good code now since we're thinking   through how the features should work and   what we want the AI to do one great way   to organize your prompt is to break   things down and give it a list of things   that it needs to do so instead of that   open-ended build a search feature we   should say you know build a search   feature and then it should work with

  titles and descriptions number two we   should have the ability to filter by   different product types number three we   should add a sorting capability if you   give it a list of tasks then it can   focus on each one of those and Implement   everything kind of integrated all   together instead of you then iterating   on it step by step which brings me to   the next point which is that you really   need to find the right balance of scope   of work to give to the AI because if you   give it just very small Snippets of work   to do then you're going to spend a lot   of time iterating and not making a lot   of progress on your app like you could   ask it to you know move an icon here or   add some padding there but like you'll   just end up spending so much time uh   that you could otherwise be building you   know entire features with on the flip   side of course if you ask for it to   build an entire application you can't   expect that it's going to do that all in

  one go so there's very much a balance to   strike between the amount of work you   give it being too little or too large   and knowing the right amount really just   comes with experience so I strongly   recommend that you go and actually try   to build apps using Ai and then you'll   run into situations where you're asking   for too much or you're spending so much   time you know in the little details so   definitely look to find the right   balance all right my next tip is to use   examples in your prompt let's say we are   building a function to format dates well   it's going to be much easier for you to   give it examples of what you want want   your dates to look like than to describe   every possible Edge case of how it   should work AI tends to do pretty well   when it sees examples like that and the   other thing you can do with examples is   give it sample code that already works   so if you have a certain library that   you're trying to integrate with or a   tool that you're integrating with you   can just find code online that already

  works and copy paste it and have the AI   start from there I found that to really   accelerate and make it much more likely   to succeed in the first go and speaking   of documentation a lot of the AI coding   tools have a feature that allows you to   immediately reference some official   documentation or search the web using   these tools can really speed up your   work because you don't have to go find   the documentation or the specific thing   on the web and it can also improve the   quality of the solution that the AI   creates when building something new   another thing you should try to do is   make sure that the code that the AI   wrote is both secure and performs well   and you can do this either in the   original prompt that you make to the AI   or you can do it as an immediate   followup after it successfully   implements the feature and you can   simply ask if there are any security   vulnerabilities that this introduces and   whether the approach that it took is the   most efficient one and it can also help   to be proactive about this and consult

  the AI to see if there are any   considerations or best practices when   working with a particular piece of   software or a particular feature that   you're trying to to develop now when it   comes to testing you have two options   you can either do the same thing that we   were talking about with security and   performance and ask it as a follow-up or   you could actually take a test driven   development approach where the AI writes   the test first and then implements the   feature to make sure that it satisfies   all of those tests that way you can even   make sure that it handles all of the   edge cases before it starts writing any   of the code this works particularly well   if you're using AI agents because you   can have them iteratively write the   tests build the feature run the test to   make sure that the feature passes all of   them and doesn't break any other ones   and then if any of them fail you can   have the AI agent iterate on the code   until all of them actually pass and on   the documentation front it always helps   to have your code be well documented   whether that's comments in the functions

  that you write or a nicely formatted   readme you can also have the AI write   documentation for your end users so they   can figure out how the software actually   Works since the AI has access to your   code it can write very effective   documentation that very precisely   describes what should be happening my   final tip for writing new code is to be   careful with how you name things the old   adage goes there are only two hard   things in computer science cach   invalidation and naming things and it's   more true now than ever because AI uses   the names of your files of your   functions of your classes to figure out   what is is actually happening in your   code and it's going to follow the   patterns of your naming when it   generates new code so if you have a   function that's intended to process csvs   you should call it something like CSV   parser rather than data parser because   then if you want to add parsing for   different data formats uh the AI is

  going to just try to jam everything into   that function instead of writing a new   one so it's good to try to stay on top   of the naming and keep it up to date   which really brings us to the next   section of this video which is what do   you do when you're working with existing   code and trying to modify it well to   continue the naming example you want to   continuously update the naming and   organization of your code base as the   code expands and one way you can do this   is to ask it to refactor and simplify   your code so this is a really handy   prompt that I like to use is to ask the   AI to refactor a particular file and   I'll typically tell it the specific   names of the things that I want to   extract out into a new file and this   will keep your files very focused and   keep your codebase nicely organized   which is very important because at its   core coding with AI really has a lot to   do with managing context and this is   really the golden rule of coding with AI

  and if you take anything away from this   video it would be this you have to   properly manage and balance the context   that you give to the AI because if if   you don't give it enough context to work   with AI is going to assume things about   your code that might not be accurate and   then the new code that it writes   fundamentally doesn't work with your   existing code and you end up in that   super messy Loop of trying to get it to   fix itself and then it doesn't know what   to do because now you have code with one   set of assumptions and code with another   set and it's all co-existing and it just   becomes a really big mess so if you can   give it relevant files to use in its   context when it's writing some new code   that's the best way to get new code that   actually works with your existing code   now on the other side of this is when   you got too much context if you got a   file and it includes your entire piece   of software and it's 5,000 lines long

  the AI is going to get confused it's   going to start deleting portions of your   code it's going to create duplicate   functions because it can't really find   the relevant pieces of code that it   needs to consider and this becomes   equally problematic because it just   can't write code that works with your   existing software and a lot of people   fall into this trap and It's Perfectly   Natural especially when you're getting   started and you don't know how to   properly organize your code base so   naming things and continuously   refactoring right that's what we were   talking about earlier becomes even more   important because it allows you to tag   the relevant files and pass that context   to your subsequent AI requests the other   thing to keep in mind mind is that as   you're having that conversation about   the code and having AI generate new code   you are expanding the context because   every message in your conversation gets   passed to the AI and it goes through all   of that when it generates new code for   you so if you've had a conversation

  that's been going on for like half an   hour AI is much more likely to get   confused and start you know referencing   old pieces of code that don't exist   anymore or just failing to do what you   ask get to do and this is a tricky thing   because you want to make sure that you   have the relevant context but the longer   your conversation goes the more context   there is and AI will start to get   confused so you got to really balance   when you have too much context and too   little context so one powerful tool at   your disposal is to start a new   conversation and one common way that I   like to think about it is if you're   building a new feature that doesn't   directly have to do with with everything   you've built up to this point that's   when you should start a new chat and   then just tag the relevant files you   could even reference some parts of your   previous conversation but it's much   better to have a fresh start when you're   building something new ultimately it is   going to be a balance and experience

  will guide you in terms of when it's   good to continue a conversation versus   start a new one my next tip about   iterating with code is to tell the AI   what works well and what you want to be   changed so often my my flow will go   something like this I'll ask the AI to   implement a feature I'll use a list to   tell it what it needs to do and it'll   often make some mistakes like it'll make   good progress towards what I want but it   won't be perfect and so I like to tell   it what did work and then what I still   want to be changed because this focuses   its attention on fixing those things and   makes sure that the things that it   already implemented correctly don't   become broken another thing I like to do   when working with existing code is to   ask it to find edge cases or potential   bugs in the code that I'm working with   this is a good thing to add to your   repertoire because it's going to make   sure that you build quality software   that's bug-free so typically if you   build a feature you go through the

  iterations everything seems to work now   you should just go ahead and ask are   there any edge cases that we're not   currently handling you know do you see   any issues in the code this will help   you handle those additional cases and   build a higher quality product speaking   of reviewing the code after you've built   the feature another thing you can do is   directly ask the AI to review the code   and this is something I like to do after   I make some major changes and of course   you always want to review the code   yourself you do want to see that things   are implemented in the way that you   expect them to work and that the AI   isn't doing something unnecessary or   insecure so always review the code   yourself but you can use AI to   essentially get a head start on that   process by reviewing the code and then   you can walk through those results uh it   can be really helpful another thing I   like to do is just ask the AI what the   current code does and how it works   because this will usually highlight for

  me certain things that I might be   missing and give me some context about   the rest of the code base and how this   code fits into it it's much faster to   get started like this than trying to   read things line by line especially when   you're working with a large piece of   code and obviously this is going to be   super helpful if you're not 100%   comfortable with code just yet in trying   to understand how it all works and then   it'll actually help you learn how to   code in the process moving on to the   troubleshooting section inevitably   things will go wrong and there will be   issues and there will be bugs and the AI   won't Implement everything perfectly the   first time around so what do you do in   those cases well there are several   prompts and techniques that you can use   to really accelerate your   troubleshooting the first thing I like   to do is to be very specific about what   is going wrong and what is going right   it's similar to that prompt that we were   talking about earlier where you're   iterating on a particular feature well   in the case of troubleshooting when

  you're working out a particular bug you   really want to say like this piece is   working but this other piece is not and   then you really want to dive into which   cases things work and where they fail   and give it as much detail as you can   often times you can also share   screenshots with tools that accept those   and that can actually help the AI   understand what you're saying because if   you're using words like you know it's   not centered or it's sticking all the   way to the top it might not really know   the context in which you're talking   about but if you share a screenshot it's   going to help it understand and make the   right change also when it comes to   troubleshooting I find it's super   helpful if you can just share the errors   that you're getting with the AI so just   copy paste the entire error   um and then it'll likely be able to   figure out where the problem is you can   actually take this approach one step   further and use what I call the beaver   method and ask the AI to write a bunch

  of logs in your code that will help you   then troubleshoot and what you do is you   create all of those logs and then you   try to run the program and you copy   paste all of that back to the AI and   it'll be able to figure out at what part   of your process did something break so   because you're using logs instead of   just waiting for an error it gives it a   lot more detail and context into what's   going on and I found that to be a really   useful method in troubleshooting often   times after just a couple of iterations   using this approach uh it'll be able to   fix the issue but sometimes even after   doing a bunch of troubleshooting you   still end up kind of stuck and not sure   where to go next and so the first line   of attack in that case is to ask the AI   to describe what the code is currently   doing this goes back to that prompt we   were talking about when modifying code   because if you can understand what the   code is doing it can help you understand   why there is an issue in it perhaps

  there is a specific case that you hadn't   accounted for and the AI explaining that   could help you actually see that problem   and then think through how you would   actually like to solve it instead of   just relying on the AI and assuming that   it'll figure out the best way to handle   it but sometimes even after you read it   it still doesn't make sense and you're   still having an issue so what do you do   then well I have one secret weapon for   you it is one word and that word is   radical for whatever reason I have found   this word to be super effective in   breaking through these troubleshooting   loops and specifically what I mean is   you ask it to try something radically   different try a radically different   approach and I've been really surprised   by the number of times in which this   prompt is the thing that gets me through   the issue because it really forces the   AI to think differently and instead of   trying to like adjust little details it

  just backs all the way up and tries a   really different approach but sometimes   even that doesn't work so what do you do   when you've been there for multiple   hours you've tried pasting the logs   you've tried radically different   solution what do you do you're you're   stuck right well that's where you got to   actually know how to code you got to   understand what the code is doing so   that you can look into the code and find   the problem maybe there's just a   conceptual issue with the way you've   been approaching the particular problem   and there's just no possible way that   you can make it work there may be   fundamental constraints that you haven't   considered or limitations with the   technologies that you're using so my   final tip for troubleshooting is that   you need to know when to pause and when   to go look at the code and there's again   very much a balance to this similar to   you know some of the other prompts we   were talking about you have to know when

  you've hit that point at which it really   doesn't make sense to keep asking the AI   to fix it now you don't want to do that   right away because oftentimes AI can   work through a lot of issues and if you   just keep pasting the prompts or you   tell it to take a different approach it   can be much faster to get through the   problems that way than digging deep into   the code and fully understanding it so   you can definitely save time by having   AI try to troubleshoot itself in the   ways that we've been talking about but   at some point you do want to be able to   go into the code and figure out what's   happening and of course that brings us   to our last section which is about   learning how to code you can use AI to   help you learn and so all of these   things we've been talking about you   don't absolutely need to know code to be   able to do but when you run into those   issues where you get complet completely   stuck that's when it becomes suddenly   absolutely necessary to know code and   how it works so I'll share some prompts

  and tips with you in terms of what you   should ask when you're trying to learn   how to code and the first thing is you   want to ask the AI to keep things simple   and you want to tell it that you're a   new developer and that you're learning   how to code if you don't do that and you   just ask about how this function works   or what not it'll just assume that you   have a developer understanding of the   situation but if you tell it that you're   a new developer and you specifically ask   it to keep it simple it can really help   it fine-tune that response to make sure   that you can actually learn and   understand from what it's saying now   that's useful for explaining code at a   high level like when you're looking at a   piece of code and you're asking for a   description but the thing that I also   like to do is ask it to explain code   line by line and you can have it either   just explain it in a chat or you could   have it add comments to your code so   that you can follow along and that will   help you understand the syntax of what's   happening and then be able to learn as

  you do that over and over you're going   to start to see a lot of patterns in the   code and then you'll be able to follow   those and you'll first know how to read   it and then when you run into issues you   might notice hey this doesn't look like   the same kind of syntax or approach that   we used in the past when doing this kind   of thing so then you can tell the AI and   that's really the process of learning   right you're you're seeing these   patterns you're starting to understand   how they all fit together and if you ask   it to explain things line by line you   will start to have a deeper   understanding of how the code actually   works but learning the code isn't just   limited to the code itself like we've   been talking about it can really help to   use specific vocabulary specific   Technologies Concepts when you're   formulating all these prompts so you can   actually use AI to learn those and you   can just specifically ask it to explain   a particular concept and how it relates   maybe to the code that you're looking at

  or maybe even just outside the code you   know ask it to explain how a full stack   application works or ask it to explain   different data types in your table for   example just having those conversations   with the AI about various components and   Technologies can raise your overall   awareness of how software works and how   all the pieces fit together another   thing I like to do is ask the AI how it   would build something so let's say we   want to build a chat app I would ask how   do we do that you know what are the   Architectural Components for building a   chat app what are the things that we   need to consider um and you'll soon   realize there are different ways of   implementing chat like you could have a   central server or you could have   peer-to-peer communication and again   these things you know people don't tend   to think about until you get into the   weeds of coding and then it suddenly   becomes super important and it goes all   the way back to building our software   and being specific about the features   that we want to implement and how we

  want them to be implemented so it all   kind of Loops back in on itself you know   you learn how to code you understand the   code then you can give good prompts so   you can build better code right and the   cycle continues another thing you can do   when learning is ask the AI to show you   some examples and we did this in the   previous video where we were talking   about software Basics and we had to   generate you know some examples in   JavaScript showing functions showing   different data types so that can be a   really powerful technique to use as well   and as you're working through those   examples or working on a particular   piece of code another thing that helps   is to tell the AI what you do understand   versus what is unclear because then   it'll be able to connect the things that   are unclear it'll focus on explaining   those and it'll connect them to the   things that you do already understand so   it just creates a more complete picture   of whatever it is you're exploring my   last tip is to focus Less on the   specific syntax of a language and focus

  more on the bigger picture and how   various software components fit together   and that's where it really helps to   actually understand what a full stack   application actually looks like and what   are the different layers of it which is   exactly what we're covering in the next   video in the AI coding 101 series how   full stack applications actually work I   hope to see you there thanks for   watching take care



---

## Source: VideoTranscriber_BEST WAY to read and understand code.txt

- Original path: `VideoTranscriber_BEST WAY to read and understand code.txt`
- Size: `22392` bytes
- SHA256: `600902CFE3EBB0FB7073AF163F12C48C3752601631521BF32FF319C931E63B85`

---


one of the hardest things to do as a   beginner in programming is read other   people's code and the annoying thing is   reading other people's code is so so   vital to programming like that is   literally how you get better you don't   start off as a beginner just being   absolutely phenomenal by just writing   your own code the way that you want to   write code you need to write other   people's code to get better so here we   are today sitting down to make this   video because I want to tell you guys   what the secret to reading code is or at   least what I think my secret to reading   code is   it's coffee imagine that   uh it's a Sunday kill me and this by no   means applies just to see blast Blast by   the way we're going to be looking at C   plus code just as an example here today   but this applies to everything and that   is would now be a good time to put in   the sponsorship mention no I'll do it   later anyway enough fluff execute the   code run the code stop just reading the   card as if it was some kind of book that   you picked up and you just flipping   through the pages as if it's paper

  you're just reading it   don't do that load it up in an IDE load   it up in some kind of like execution   environment that has a debugger and just   run it just run it put breakpoints in   use the debugging like code flow   commands like step into step over all of   that stuff to just kind of go through   the code as it's running I mean you can   think about it this way when you run the   code you're actually getting the   computer to do what the program is meant   to do right so you the computer is   actively literally doing what the   program is doing like the program has   programmed the computer to do something   you're literally watching it do stuff   you're watching it happen so if you can   just kind of like be like whoa slow down   there Cowboy let's just hit the brakes   for a second I'm gonna tell you when you   can do the next thing and I want to   watch you do it that's literally what   you're doing when you run your code   through a debugger like that's literally   what's happening and at that point you   can of course examine the entire state   of your memory you can see what the   variables are set to you can see which   functions are being called you can see   how you ended up in a certain function   by putting a breakpoint in there   assuming the program hits it you can

  easily see where the entry point of the   program is and what it does in the   beginning and it's even a much better   way to trace back and find where certain   areas of code are actually written all   of these examples that I just mentioned   we're going to take a look at today here   in this video but first don't click away   don't skip because this is going to be   useful it's going to be important this   video is sponsored by brilliant.

org and   the reason why I didn't want you to skip   is because I just want you to know that   currently brilliant.org have a 30-day   free trial free trial 30 days everything   I'm about to say you can experience for   free for 30 days so just check it out   link below brilliant is an amazing   website filled with lots and lots of   really really good high quality courses   on various stem topics there are   specifically two areas that interest me   and that I think can help you and that   is their computer science courses they   have some really really good   introductory computer science courses   that can help you if you're just kind of   starting your programming Journey you   want to ease into it in a really easy to   understand visual way but then also   their mouth courses oh what do I say   about their math courses their mouth   courses are brilliant I actually said   that naturally it just happens to be the   name of the platform as well math in and   of itself can be quite a complicated the   topic and believe me when I say the   brilliant presents it in just such a   beautiful easy to understand way because   all of their courses present information   visually and interactively yeah that's   right they have widgets that you can   play with they have like UI controls you

  can slide around so that you can see the   impact that different numbers have on a   graph for example how do integrals work   well look it's here you can play with it   so I just think it's a really good   effective way to learn but also the way   their courses are divided are really   bite size so it's really easy to get   through quickly if you don't have much   time and they'll actively quiz you   they'll ask you questions all along the   way to make sure that you're paying   attention and retaining the information   and all of these features added up   together just make a fantastically   effective learning platform for math and   computer science and they also have   other stem topics as well so go ahead   and check them out as I mentioned 30-day   free trial brilliant.org the churner as   always the first 200 subscribers will   get 20 off an annual membership link   will be in the description below thank   you brilliant for sponsoring this video   alright so back to talking about reading   code I have three examples for you okay   my first example I was doing a code   review a while back this is of like a   ray Tracer I want to use this just as an   example to show that when you have a   function here that calls an object   somewhat indirectly so in other words if

  we take a look at this actual code there   are plenty of different objects here   right we have like just the Base Class   object and then we have all these other   classes like mesh which mamesh is an   object we have a sphere which is an   object we have a plane which is an   object if we just go back to this piece   of code that we're interested in and we   want to see what on Earth intersect   object actually does if I try and go to   the definition you can see how many   definitions there are like it can be   really difficult to see if any of them   are even in use if I'm rendering a scene   like which one which function here   applies to what I'm actually visually   seeing because presumably I want to find   out how what I'm seeing is working how   it's actually happening so what I can do   is instead of like instead of like   trying to go through all of that and   find that code if I just put a   breakpoint on this line of code and just   run this program when we hit this line   of code our debugger will pause the   program of course and then I can do a   few things first of all immediately you   can see the Glorious context I'm   presented with in the call stack right   like I can immediately kind of see how I

  got there from invoking Main to the   actual main function itself into scene   render into scene launch workers   renderer cast Ray and then render a   trace like I suddenly have so much more   context imagine trying to piece this   together just in your head like it's a   complete nightmare if you've never seen   the code base before and this kind of   thing is the trick that I use all the   time when I'm reading other people's   code for those code review videos that   you're seeing on my channel but it   doesn't stop there if I now want to see   which specific intersect object function   is actually being called I can just use   the step into button over here or press   f11 when I press that you can see it   steps me into sphere intersect object so   I know that I'm rendering spheres and   this seems to be the exact kind of math   that's happening I can kind of read   through that and learn from it but again   it gets better because check this out   all of this kind of context here like   for example if I'm just reading this   code like position minus Ray origin like   l dot dot product redirection what's L   like these kind of parameters can be   difficult to kind of digest right but

  check this out I can hover over Ray drop   this down see what the actual numbers   are go through this line by line like   obviously see the result of all of these   variables see which branches are hit and   by the way this is exactly why I would   not write this like that I always drop   these down if it's a one line if   statement with no curly brackets drop it   down like this because then you can   actually see which branch is being hit I   mean in this case obviously we'll know   if it hits this because we'll return   from the function but I'm talking about   like all if statements like this for   example no real way to tell if that's   hit without actually kind of stepping   through it anyway if I keep going you   can see that was in fact hit right   because I'm over here now I'm going to   return from the function so D2 was in   fact greater than R2 and again I can   look at the numbers I can see exactly   what's happening and that of course can   help you tremendously when you're   actually reading and trying to   understand the code now if we just hit   F5 to run this again there's another   trick that you can use in this specific   circumstance because if you press f11   what it might actually do is if there's   like a huge chain here it might actually   step you into the get function now for

  whatever reason it didn't I think get I   think because get is actually not it's   part of the standard Library this is   like probably what even is I so I you   can see auto I objects begin we can see   that I is a unique pointer again the   debugger helping us there not too   difficult to work that out from kind of   looking at object vector and saying that   it's a vector of unique pointers but   anyway if you want to avoid stepping   into functions you're not interested in   you can actually right click and then go   to this step into specific menu option   where you can see it presents us with a   few different functions we can step into   now here we can step into this   d-reference operator that's on the   iterator class which will return the   object itself we can go into unique   point to get or we can go into this   indirect call it's an indirect call   because it's a virtual function so if we   click on this guy it takes us exactly   into where we are in this case we're   intersecting a plane so that helps a lot   now whilst we're in this project I want   to show you guys one more thing the way   that this guy wrote this which I pointed   out in my code review which was a little   bit weird is basically if we're in a   debug build we do this on one thread and   if we're in a release build we dispatch

  a whole bunch of worker threads to kind   of do this multi-threaded so I'll switch   over to release just because I want to   show you a multi-threaded example once I   hit this breakpoint you can see that   because it is a multi-threaded example   the context has kind of changed this   call stack is now showing that we're not   coming from the main function we're   coming from this thread invoke which   runs this render worker but what I can   actually do to again learn more about   the program understand the program more   and the code is I can go to debug   windows and then parallel Stacks which   is over here and if I do that it'll open   up this useful window which shows all of   my running threads so the call Stacks   for all of the threads because they're   all suspended obviously and it'll show   exactly what they're doing like their   call stack right so you can see for   example the main thread is just sleeping   it's sleeping inside this launch workers   function and in fact I can double click   on that if I want to take a look at that   line of code exactly so I can see okay   sleep for 10 milliseconds okay now I   know how this program has decided to   wait for all of the threads to kind of   finish but you can see the rest of the   threads in the entire program here like   we can see that this guy this guy over

  here is doing render retrace and it's   inside the intersect object function   again I can double click on it if I want   to go to that we have like this function   which is like inside acceleration   structure we've got another thread here   I mean all these threads are basically   doing Trace or they're inside cast array   but you kind of get the point it's a   really powerful and easy way to see how   this kind of program is actually coming   together the architecture of the program   now actually example 1.5 because I just   thought of this one more useful way that   you can use that parallel Stacks window   as well is if we go to Hazel this is   going to be Hazel's runtime if I run   Hazel's runtime and specifically   dichotomy a game that we made for last   let him dare which is a game Jam for   those of you who don't know you can see   this is the actual like game being   played if I just with this game running   just hit pause it's going to suspend all   the threads obviously and it's going to   show me the call stack of this so I can   actually kind of get some information on   how on Earth this is running right and   what everything's doing and if I go into   debug Windows parallel Stacks I can also   get some information on how all of the   different threads inside Hazel are

  actually working together in that   particular moment so you can see for   example that the main thread is just   inside render thread block until render   Complete because it's just waiting on   the render thread to finish the render   thread over here looks like it's inside   some Vulcan command pool basically it's   trying to upload data to the GPU into a   storage buffer and then we have like the   audio thread which is just sleeping I   can easily kind of see the architecture   of Hazel as well all the way down to   Maine to see how this application kind   of comes together really really useful   stuff that helps you understand how this   code is actually written and how this   program works and hopefully you can see   that if you contrast this to just you   know reading the code just with your   eyes how big of a difference there   really is and how much easier it is to   understand how this works okay the   second example is this this actually   happened the other day I was doing a   code review and I wanted to demonstrate   that unique pointer basically did the   same thing as new and delete it just   kind of automates it it makes it a   little bit more foolproof so we have   this entity class we have us making a   unique pointer I basically kind of want   to just to prove that in the beginning   when we kind of call make unique well   what does it do let's take a look at his

  definition I'll hit F12 in Visual Studio   it brings me to the code now it's   standard Staples Library code so   yeah it's a little bit hard to read as   it is and again for beginner good luck   mate poor young China is struggling with   this to all the young churners out there   I salute you this is not alcohol   anyway so you can see very clearly that   the make unique function over here it   takes in our arguments in case we have   any for the Constructor it calls new on   the type that we make unique with so in   this case that would of course be the   entity type it calls new entity and it   passes along any of the arguments that   we have into that Constructor if there   are any very easy to read not a problem   no need to run the code to see that   however I want to show it calling delete   because I know it calls delete right the   unique pointer just calls new and delete   for you right so how do I show that well   back in uh you know the unique pointer   class inside this memory header file   here it is memory there's a nice   intimidating header file if I like you

  know if I try and find like the   destructive unique point I'm going to   cheat and use visual assist here alt M   uh and then if I put in like a little   squiggly line here I know that's going   to be the destructor and oh look here's   the unique point of Destructor yeah   that's your call to lead right   um well I mean it calls if my pair dot   my Val to my pair dot get first and then   this looks like the it like get gets   that and then uses like the call   Operator or something on it like what is   going on and again like you know as a   beginner looking at this code like well   I guess I can go to get first that   returns this or what class am I in now   no I mean like a compressed pair of   course I am like what is what is even   happening and why is it calling that   like uh well how does this work well I'm   going back to our code let's execute   this and see how it works so what I'm   going to do is I'm going to create a   Destructor inside entity right and then   I'm just going to put a breakpoint like   right here you could write some code   here like a print line or something you

  could put debug break there's many   different ways to do this I can just put   a breakpoint over here on the opening   parentheses of course make sure you're   in debug as always hit F5 it's going to   compile our code and then we've of   course hit the breakpoint presumably at   the end of this let's have a look at the   call stack because because guess what   how do we call the destructor we call   delete on that object right so if we go   to the call stack and we look at this   you can see that this is us invoking   main right over here then we go into the   unique pointer Destructor we were just   there right so I was right here it is   the unique pointed Destructor we looked   at but then after that we go into like   this SCD default delete operator and   look you can see here that it is in fact   that call Operator that I was talking   about let's double click on that and   take a look at this delete pointer so it   does in fact call delete normally as you   would expect we pass in the pointer   we're trying to delete it goes into the   call Operator this is in the default   delete struct and what it will do is   call delete and you can see just how   easy it was for us to find this exact

  code by just using the tools we have   available to us we run the code we put a   breakpoint into where we know it will   eventually end up and then we trace it   back using the call stack really really   effective now as a side note this might   beg the question of like why is it so   complicated why does this not just   delete Point normally the reason why is   because unique pointer is a little bit   more flexible you can actually provide a   custom deleter if you want if you don't   want it to call delete you have like   some special shutdown procedure for   whatever reason it needs to call that   you can pass that in like as a template   argument and it will kind of go through   that process for you that's why it's not   necessarily assumed that this will   happen but rather this is just a default   deleter so there are there are reasons   technically why it's this complicated   but of course if you're new and you have   no idea how anything works it is really   hard to track that down okay and finally   last example example number three is   going to be a quick one Unreal Engine   five nothing quick about this am I right   but anyway suppose you're trying to read   through the code of Unreal Engine 5. now   this is really really difficult to do to   the point where I would probably begin   with the documentation to kind of go

  through the actual technical   documentation of how this is architected   rather than trying to read the code per   se but here we are we're in a solution   with 122 projects which is quite a lot   what do we do uh we could start kind of   I guess going through this and trying to   read it maybe I can do a search here for   like I don't know the word main or   something to try and find the main   function like how on Earth do you even   begin with this well I'll tell you how   just hit F10 on your keyboard or go to   debug and then either step into f11 or   step over doesn't really matter I'm just   going to hit F10 I of course have   already compiled Unreal Engine 5 because   if I hadn't then this process would take   hours all right and then when it finally   runs we will see this so I had no files   open before right it was completely   blank it's automatically by itself open   this launch windows.cpp file right and   look at this we're at the beginning of   win main the entry point of the whole   program I can now just go through this   normally by like hitting F10 we can see   here that it's going into the launch

  Windows startup function again f11 will   take us into here I can go through this   line by line and actually get a sense of   how Unreal Engine starts up all of the   initialization code I can kind of go   through I can obviously use the same   techniques I used from example one where   I can see what the variables are set to   I can place a breakpoint inside a   function that I'm interested in and then   when the engine on the program   eventually hit it's that function I can   trace it back see the call stack gives   you like at the very least with   something as big as Unreal Engine some   kind of starting point where we can kind   of see what on Earth it does in its   initialization and how it like you know   eventually goes into guided main etc etc   etc hope you guys enjoyed the video if   you did a like would be much appreciated   I really hope this advice was able to   help some people because I just remember   back in the day I really used to   struggle with this and if someone had   just said this I would probably be out   and about reading other people's code a   lot more instead of constantly trying to   write my own instead because reading   foreign code was just too difficult   little Sidetrack by the way the way that   I used to read code as a beginner was I   literally remember printing out pages of

  code I printed out pages of code this   was back like in high school I was   really into programming in fact I was so   into it that I printed hours code put   into a display folder took it with me to   camp in like well like you're 11 or   something I was like 16 at the time and   read it like with a flashlight like with   a torch I read it in my tent at night   like paper Java code on paper yeah I uh   yeah I definitely should have just ran   the code



---

## Source: VideoTranscriber_Essential AI prompts for developers.txt

- Original path: `VideoTranscriber_Essential AI prompts for developers.txt`
- Size: `8384` bytes
- SHA256: `AB38AC56D4B97F442E8370E48374BC16FC75B3A2C3818870BDE62D72547C0B5B`

---


In this video, I'm going to give you 4 prompts and prompt strategies that you can use as a developer to get the AI to work really hard for you. Now, even if you're not a developer, I think you'll like this video. You can use these strategies no matter what you're doing. Just a quick note, do make sure that you like and subscribe.

It means the world to us, your comments and your likes; we read every single one. OK, let's go #4 is called the Q&A strategy prompt. This is where you get the AI to prompt you so that you can prompt the AI. It sounds weird, but check it out. I've got a small dashboard project here that is rapidly growing and currently all of the files are just kind of in here together, right? There's there's this main app file, there's a db file, there's a service file, there's a pug template here.

It's, it's like a junk drawer. So I'm going to ask the AI to propose a folder structure for this project that's going to help me organize this thing correctly. I'm also going to mention my workspace when I do that, and this passes information about my current project along with this prompt.

 But instead of just stopping there, what I'm going to do here is I'm going to ask the AI to ask me some yes/no questions to help it provide a better recommendation. OK, let's see what it's asking for here and answer each one of these. I'm just going to provide the question number and a simple answer to do that. So yes, we do want restful API, yes for auth, no, not using micro services.

Yeah, static files, right? And I can just keep doing this. Now notice at number six, it starts to veer away from simple yes or no. And and by #10 it's just not even a yes or no question at all. But that's OK. This is the nature of AI. We'll just work with it and provide very short answers, and then we get a nice recommendation for how to structure this project.

The magic of the Q&A prompt is that it helps you put all of the details in the prompt that you would have put there in the beginning if only you'd thought of them. So don't try and write the perfect prompt the first time. Use the Q&A strategy to help the model prompt you to give it the best prompt #3 is called Pros and Cons and you can probably guess where this is going.

In programming there is rarely a single right way to do anything, despite the blog post that you read last week telling you otherwise. I've implemented a bit of the model's suggestions on how to structure my project now, and you can see I've got here an API folder, view, db, but for the db Connection class here I've written the connection, but I'm not 100% sure if this is really the best way to do this for this app.

So I'm going to ask the model for suggestions on different ways I could implement this space connection logic, and I'm going to ask it for the pros and cons of each suggestion. I'm also going to mention the file directly so that the prompt sends the code that I want the model to review here. OK, so let's see.

The first recommendation is a singleton. Cons are that it can be inflexible with other data sources. OK, I don't have other data sources. Number two is how I'm doing it right now and the cons are yikes -  possible leaks that sounds bad. Number s3 could lead to resource exhaustion. I don't know what that is, but it sounds really bad.

 Number 4 isn't really a new suggestion as much as just use async await in your current code, which is not a bad thing to do and #5 is ORM which I'm not going to be using. OK, so let's pick the singleton and I'm going to ask it to rewrite this code in that pattern and then I could just ask how I would use this in the app. OK, so it looks like we just import it and then call the get instance and then and then query it. Nice.

Easy peasy. Remember, there's no one right way to do anything in programming, so use a pros and cons prompt and have the model give you several options so you can pick the best one for you. Hey folks, quick interruption, hope you don't mind. If you like the content in this video, make sure you subscribe to the GitHub Insider Newsletter where you're going to find tons more of This stuff.

Every month delivered right to your inbox. Link in video description. Go ahead and do that. Now back to the video. Number 2 is one of my favorites, and it's called Stepwise Chain of Thought. Chain of Thought just means that you ask the model to break things up into steps and go one step at a time. For instance, this code file could stand to be refactored, cleaned up, but there's a lot of work to be done here.

So let's ask the AI to help us refactor it. So we get back a kind of verbose response. Here it is moving one step at a time, but it's trying to do the entire refactor in in one shot. It's just too many changes for us to validate at one time. Let's try this again. So this time I'm going to tell the AI to move one step at a time, but to wait for the keyword "next" before proceeding.

This magic keyword is what's going to make the AI only do one thing at a time. First, it wants us to stop using var, which, sure, fine. I'm not going to touch that yet because I want to refactor the db connection variable itself. And if we do next here, it does that. OK, perfect. And then we can click on the apply and editor button here and it will try to merge the changes from what it's suggested with what we currently have.

And you do have to be careful when you do this check that everything is right. I mean, look here, it left this function out of the refactor entirely. So we need to fix that up. Now, wometimes when you do this, you'll want to ask questions about a particular step, get clarification, like it wants me to add a vehicle interface here.

But I'm thinking this would be better as a separate model class. So let me ask about that. Yeah, See, it kind of agrees with me, and you have to be careful about this because the AI will almost always agree with you if you insist that something is the right way to do something. But when you do that, you get out of the flow of waiting for next.

So to fix that, I'm going to go back into the chat and just delete that item from the history so that I can then proceed with next. Although apparently it refuses to move on until I make the vehicle parameter an object. Fine, fine, I can take a hint. All right, number one, last one, it's called the Roll Prompt.

And this is where we're going to depart from our vehicle dashboard and learn a new trick. Literally. AI's love to be given a role to play in a conversation. And you can basically tell them what they're good at and then just they're magically good at that thing. It's incredible. So I'm going to ask the model to play the role of a teacher.

I'm going to tell it that they are excellent at making complex topics simple and I like to learn by doing. So I'm going to tell the AI that it's good at doing that too. And what are we going to learn today class? Regular Expressions! And then I'm going to combine this with the Stepwise Chain of Thought prompt and tell it to go one step at a time and wait before moving on to the next concept.

And if I get the answer wrong, I don't want it to just give me the right answer. I want it to nudge me in the right direction so that I can figure it out myself. OK, here we go. All right, looks like we're going to learn the basics of Regex. Let's see. Match the word cat. You can match characters just by putting them in a sequence.

OK, so it's literally just cat. Yes. All right, let's see if I can do another match. Any three letter word that starts with C and ends with T, and the dot is used to match any single character. I guess that's just C dot T. Holy crap, I'm an expert. OK, one more, one more match cat or caught but not cut use square brackets.

So like this. Oh, I got that one wrong. I like how the model calls this a misunderstanding like like maybe this is both of our faults. Oh, I see brackets match individual characters. OK, so if we put the A and the O in the brackets, yes. All right, I feel like a regex pro already. And you can use this to create custom curriculum to learn anything at all.

AI's love to role play. OK, so Q&A prompt, pros and cons, stepwise chain of thought and the role prompt. Remember these prompts and work smarter and not harder with your AI. Working harder is the AI's job. See you in the next video. And as always, happy smart coding.



---

## Source: VideoTranscriber_The True Power of AI Coding - Build Your OWN Workflows (Full Guide).txt

- Original path: `VideoTranscriber_The True Power of AI Coding - Build Your OWN Workflows (Full Guide).txt`
- Size: `30501` bytes
- SHA256: `8A2B7F1B42F732787B67BCEFAE40A9264B33C7194ED69DC31996416BB5BC660A`

---


No matter what you are building, if   you're working with AI coding   assistants, it is a lot more than just   prompts. It's all about creating   systems, workflows that can evolve to   fit your needs. I know it's tempting to   just wing it. But if you want to build   anything substantial, you do need   structure.

 There's a reason why we have   so many strategies around context   engineering like the PRP framework or   BMAD, the GitHub spec kit. There's a   million of them out there. And that's   actually the problem as well. It's easy   to get lost in the sauce, so to speak,   with all these different strategies and   how they apply to you.

 Now, the solution   to this problem is what I'm going to be   covering with you in this video. We're   going to be scrapping the notion of   existing frameworks like PRP and BMAD,   and we're going to be building our own.   I'll show you how it works. Because if   we can understand the philosophy and   strategies that go into all these   existing frameworks, not only can we use   them better because we actually   understand them, but also we can tweak   them to our needs and even build our own   workflows and systems.

 This is where the   power really comes into your hand. And   this diagram that you're looking at here   is everything I'm going to cover with   you in this video. It sums it up really   nicely because I want to keep things   simple and fundamental here. I want to   give you a process that you can apply   that'll take you super far with AI   coding assistance no matter what you are   making.

 So the primary mental model that   guides most of my coding is the   three-step process of planning, then   implementing and then validating. That's   we're going to build a workflow around.   And so I'll just go through at a really   high level everything that we're   covering here. Then we'll get into   detail and I'll show you a real example   as well.

 And so first of all, I always   start with planning. And I have a   multi-step process for this. I start   with vibe planning. That's what I like   to call it. We're basically just   exploring very free form the different   ideas that we want to implement for a   new project or the codebase for an   existing project. And then from there,   we create our initial requirements for   that new feature or new project.

 And   then we prepare all of the context so   the AI coding assistant has what it   needs to get the job done. And slash   commands are great for this. We're going   to be covering slash commands and sub   aents and other components of AI coding   in this video as well. And then once we   have all of the context we need, we want   to then execute on it to actually   produce our code.

 And creating a   predefined workflow through slash   commands is fantastic for this as well.   So we can define how we want to manage   tasks and research our codebase, those   kinds of things. And once we have the   code outputed, it is time for   validation. And we want to leverage AI   coding assistants to validate their own   work and then put ourselves in the   process as well.

 making sure that we can   really be the project manager for the AI   coding assistant. And then the last   thing that I'll be covering throughout   this video here is the different   concepts for AI coding assistance and   how they apply to different parts of our   workflow like global rules and sub aents   and slash commands.

 For example, we   don't actually want to use sub aents in   the implementation phase. So I'll talk   about how that works, really the   philosophy behind it. This will also   help you understand how these different   strategies work like PRP and BMAD. Now,   what I'll be building live here is not   the focus of this video.

 So, I thought I   would take this as an opportunity to do   something fun and different, showing you   something that I'm working on personally   because I've been overhauling my   productivity workflows recently,   switching to an app called Obsidian. It   is a free and local knowledge management   platform.

 You can kind of think of it   like Notion except there's also a ton of   open source plugins to extend it. I'm   working on some myself. I will probably   be creating a lot more content around   Obsidian in the future because you can   also use it as your second brain. It's   super cool and there's a lot of AI   integrations that I have been working on   including what I'm going to showcase in   this video.

 So, we have the co-pilot   chat on the right hand side. This is   connected to, you can see it right here   in the bottom right the Dynamis Obsidian   agent. I have my own AI agent that I   have running in Docker on my computer   and that is what Obsidian is connected   to. It's super cool. So, I can say tell   me about and then I can reference files   within Obsidian like the one that you're   looking at right here.

 I can send this   in and it's going to my custom agent.   This connection here is what we're going   to be building out in this video just as   an example for the custom workflows that   we're creating here. It's super cool.   Take a look at that. All right. Now,   let's dive into the process and we'll   start with the planning phase here,   which honestly is the most important   phase by far because if you're not   curating your context correctly for the   AI coding assistant, it will fall on its   face. And by the way, everything in this   video is going to be rather brief. I   just want to start with the basics here.   If you really want to dive deep into   mastering AI coding assistance with me,   definitely come be a part of the   half-day workshop that I'm hosting on   September 27th. This is where we really   dive deep. All of my strategies in one   place for getting the most out of AI   coding assistance. So, hope to see you   there. Link below. Definitely check it   out. I am going to be pouring so much   value into that workshop. And so, right   now, you kind of get a taste actually of   a lot of what we're going to be covering   here. I want to help you build your own

  AI coding workflows so you can   understand the philosophy and strategies   that go into all these different   frameworks. And so, with that, we can   start with the planning phase. Now, the   first thing I always do to start the   planning phase is vibe planning. Now,   hear me out on this. If you've seen my   AI coding content in the past, you know   that I'm not a fan of vibe coding, but   that's different because that's when we   get into the actual implementation.

 We   definitely want a lot of structure and   validation there. But when we're in the   planning phase initially, all we're   doing is exploring ideas, architecture,   concepts, figuring out our tech stack.   We're doing that with our AI coding   assistant as our research companion. And   I purposefully do not want this to be   structured because I want a more   freeformed mindset as I'm working in   this initial phase.

 And so for new   projects, this means researching online   resources, previous projects that you've   implemented. I actually love to do this   where I'll create an examples folder in   my codebase and take existing projects   and put it there and research that with   my coding assistant. And then for   existing projects, it's generally   researching and analyzing the existing   codebase to see where our new feature is   going to fit in.

 And of course, this   isn't an exhaustive list. It's really   whatever you want to do to have a   conversation with your AI coding   assistant so you're both on the same   page of what needs to be fully planned   and implemented. And so once you have   that conversation with the coding   assistant, within that same context   window, I'll have it help me create what   I like to call an initial MD.

 This is   the first file that we create for our   planning. Just a simple markdown   document. The goal is to produce a   markdown doc with a detailed feature   request, otherwise known as a PRD. This   is the kind of document that's more high   level, the kind of thing you could give   to another human to describe what you're   looking to build.

 So, at this point,   we're not super specific to prompting   strategies for the coding assistant yet.   And so, for a new project, generally,   you want this to be very high level. a   simple MVP for the application you want   to build, including a lot of references   to the supporting documentation and   examples that you found in the vibe   planning stage.

 And then for the   existing project, it's pretty similar,   but it's going to be a lot more focused   and detailed that specific feature you   want to build into the existing   codebase, including a lot of references   to what I like to call integration   points. The files that have to be   edited, maybe the files you want to   reference for architecture.

 Again, all   of those things that you discover with   the coding assistant in the vibe   planning stage. So once we have this   initial MD, that's when we want to take   our requirements and turn it into a   full-fledged prompt for the AI coding   assistant. And this is really where the   strategies around context engineering   come into play.

 You've probably seen   this diagram on my channel before, but I   recreated it from scratch in Excaladraw.   Hope you're proud of me. I put way too   much effort into making this. It's kind   of silly, but anyway, we have RAG,   providing external documentation to our   coding assistant, memory, like our   conversation history.

 We have task   management. This is super important for   the planning phase, and we'll talk about   this in a little bit. And then, of   course, we have prompt engineering,   which is a lot about how do we take our   initial request and craft it in a way   where we have a plan of attack for the   coding assistant.

 And so, the goal in   this stage, we are producing a second   markdown document. So, we take our   initial MD and we produce a detailed set   of goals, tasks, and resources for the   AI coding assistant. Basically giving it   everything it needs to get the job done   effectively. So, we're taking our PRD,   turning it into a full-fledged   implementation prompt.

 And by the way,   this is exactly what the PRP framework   accomplishes that I cover on my channel.   And so I'm starting from the basics   here, but it's kind of cool how like it   naturally progresses into kind of a   light bulb moment where it's like, "Oh   yeah, PRP, that totally makes sense   because that's exactly what we're   doing.

" When you generate a PRP, you're   taking your initial requirements and   turning it into a much more structured   document for the coding assistant that   has things like the task list that you   want to knock out, your desired codebase   structure, your success criteria, all   the documentation examples that you   wanted to reference.

 That is what we're   creating with our planning document. And   there are a lot of tools to help us get   the job done here. I'll show you Archon   in a little bit with our live example,   the PRP framework, of course, even   simple web search tools that we have   with things like cloud code. That is a   part of the rag that we have for context   engineering and archon is also for rag   by the way and also our task management.

  And then a lot of other tools coming out   like the GitHub spec kit is rather new,   really cool, provides a lot of commands   to help us do a very similar thing that   we're doing here with the vibe planning   and then you know creating our initial   requirements and creating the plan.   GitHub spec kit does a lot of that.

 And   so again, understanding the philosophies   here that go behind these different   strategies. All right, let's get into   the codebase now because I want to show   you how this works in action. Now, for   brevity sake, I already had the   conversation complete, but I'll walk you   through my general process, how I'm   applying the principles to start to   create this AI coding workflow that I'll   showcase here.

 That is just an example   of the kind of thing that you can build.   And so, first of all, we're starting   with a brand new conversation with cloud   code. And this works no matter your   coding assistant, of course. And the   first thing I do whenever I start a new   conversation working in an existing   codebase like I'm doing for this   Obsidian integration is I will run a   primer slash command.

 And so we're   starting to get into slash commands   here. Slash commands are simply prompts   that you want to turn into reusable   workflows which very much goes with the   theme that we have here. creating a   system for AI coding both with mental   models and also with literal workflows   that we have created as these markdown   slashcomands here.

 And so what the   primer does is it lists out instructions   for files to read to quickly catch the   AI coding assistant up to speed on our   project when we're starting a new   conversation. And so that way it kind of   feels like our coding assistant has been   working with us on this project for a   while now, but it is actually a fresh   conversation.

 And so it does a bunch of   research through the key files in my   codebase. And then at this point I'm   ready to move to the vibe planning and   slash commands are pretty important for   most stages of our workflow here. Really   every single stage. And so I have this   part of the diagram here talking about   this for the planning stage.

 This is   where we want to set up our global   rules, the key instructions for our   coding assistant. And then we use sub   aents and slash commands to automate   parts to create those workflows for   parts of our planning stage. And we do a   lot of that for validation and   implementation as well. Except we don't   use sub agents for implementation.

 I'll   talk about that in a second here. So   yeah, we're in the VI planning stage   now. And this is where, like I said, we   don't have structured prompts. It's   super basic here. I just describe at a   high level what I want to build because   I want my AI agent to be able to connect   to my Obsidian vault.

 I give an example   that I pulled from a past project that I   want it to reference. This is just the   high level. Let's start to get into the   code. Then once we do this exploration   and we're confident in its understanding   and you can kind of elaborate more and   and fix up some of its understanding,   you make sure you're on the same page   with it.

 Then you will go and create the   initial MD. And so you on the same page,   you did your planning. Now we start to   add in our structure. And so in this   case, I'm calling my initial MD OpenAI   API compatibility. It's just a markdown   document with that initial request that   we have for our AI coding assistant. So   we have the feature that we want at a   high level, the endpoints that we want   to build, some examples of how we want   to interact with our agent.

 It's not   super super planned out at this point,   but this is our initial request that   we're then going to turn into the full   plan. That's the key here is at this   point we're just creating our initial   MD. And so we have that built out. And   now at this point that is the end of our   first conversation.

 We want to move now   to another fresh conversation because we   want to move on to the next stage of our   workflow. Taking that request and   turning it into the full plan with all   of the context engineering. And so I've   created yet another slash command for   this part of the workflow. So I'm   calling it create plan.md.

 And again,   this is just an example of what your   planning workflow can look like. You can   build this however you want. Just   generally, you'd want to kind of follow   the principles that I have covered in   this diagram. And so, I walk you through   this three-step process. And now, I'm   just building slashcomands and sub aents   around this general flow, doing some   things that are kind of more specific to   my project as well.

 And so, you can   build these kind of flows to however   works best for what you are creating.   And so for my create plan, basically I'm   just telling it to take the requirements   document, that's what we just finished   creating, and then go through a few   different phases. So read and understand   the requirements.

 We have a research   phase where I wanted to use web   searching for rag and also archon if it   is available. And then I also have this   codebase analyst sub agent. So I created   a sub agent that it calls upon to do a   lot of that extensive research. And not   to get too deep into sub agents right   now, but they're very powerful because   they have their own context window.

 So   they can do a ton of research and then   output a summary of that without it   polluting our primary conversation. So   we keep our context window concise and   focused. And so this sub agent just does   a lot of research around our existing   codebase to figure out exactly what our   plan should look like.

 So we need to   create you know that implementation plan   task by task our desired codebase   structure the documentation we want to   reference and the codebase analyst and   this whole slash command helps us create   that and so I'll go back into the   conversation and kind of show you what   that looks like.

 So first of all I ran   the create plan here with the   requirements document passed in as my   argument in the command and it starts by   calling the codebase analyst sub aent.   So it does a ton of research. It figures   out exactly how we're going to be   integrating this new feature in our   codebase. It does some rag searches with   archon.

 It does some codebase example   searches and then it produces our plan.   And so this is kind of taking that   initial MD to the next level with all of   that context engineering. And so these   things I've been speaking to, we'll find   those here. Like here is our step by   step all the tasks that we want to   implement.

 And it gets really granular   here which is always good. If you want   to be specific with AI coding   assistance, that's exactly what this   plan gives us. We have the different   files that we need to modify, the ones   that we need to create, existing   patterns to follow, everything that it   needs to get the job done. Super cool.   And we have the success criteria as   well.

 Maybe I could add like a desired   codebase structure, but it's more about   editing existing files. So I think like   for what I'm building here, this plan is   absolutely perfect. So now that we have   the plan created, that is the end of   what I've gotten to so far. So now with   that comprehensive plan, well, first of   all, I'd recommend validating it,   actually making some adjustments with   the help of the coding assistant if   necessary.

 But once you're confident in   the plan, then it is time to move on to   implementation. Now, for implementation,   the most important thing is to have a   workflow that guides the coding   assistant on how to knock out the tasks   one by one. And the task management here   is the most important thing, especially   if you're trying to do quite a bit in   one request.

 If the coding assistant   tries to do too much at once, that's   when you have a lot of hallucinations.   And so tasks are your way to have a   larger request, but still have it be   very focused and granular on one little   thing each time. Like if we go back to   our planning document, you could see   that like we have very granular tasks   that we're having a knockout one by one.

  And so we're going to create another   slash command to define this workflow.   And exactly what your slash command   looks like depends entirely on what   you're doing for your task management.   And so in my case, I'm using archon for   task management. And so my workflow   speaks a lot to how exactly I want to   use archon.

 Now it's not the case that   you have to use archon. That's the point   here is this is just an example of my   workflow. So it's creating all these   tasks here for this OpenAI API   compatible implementation. But you could   be using Cloud Taskmaster or another   Markdown document to manage your tasks.   However you want to do it, even just the   internal task management tools that we   have within these coding assistants like   Cloud Code.

 The important thing is just   to create a workflow around the task   management. And so when I go to my   execute plan here, I'll just show you   really quickly at a high level what this   looks like. And this might end up   looking a lot different for your   workflow, but I want to read my plan   that I've created. This could be a PRP   if we're using the PRP framework or, you   know, it could be the project brief if   we're using the BMAD method.

 And then I   want to set up the project in Archon if   it isn't already. Create all these   tasks. I want to analyze the code. And   then I have this cycle here where I need   to mark a task as to-do or doing. And   then it'll go through that task and then   move it to review and then move on to   the next task.

 And it'll do that in a   cycle until everything is done. And then   it'll move on to validation. And we   actually have a sub agent to help with   validation as well. So it'll execute   this guy to within its own context   window, create a bunch of tests, and   make sure that our code is good, and   then report back to our primary coding   assistant if there's anything that needs   to be fixed up.

 And so yeah, generally   my process around validation is while   the coding assistant is running, I will   validate to make sure that it's using my   MCP servers properly, that it's editing   the right files and looking in the right   places, I generally watch it at least   kind of closely to test these things.   And then once we have the code outputed,   this is where our plan should also speak   to how the AI coding assistant can   validate its own work.

 And then we want   to be a part of this process as well.   Performing a code review because we   don't want to vibe code. We want to   actually look at and understand the code   that is being produced and then running   any kind of manual tests that we want to   like actually talking to the agent in   Obsidian like we'll see at the end of   this video here.

 And sub aents can be   great for validation because again we   want isolated context windows to not   pollute our primary conversation so that   we can have a sub agent run a bunch of   different tests to make sure that   everything is rock solid. And one last   thing for validation. There's another   agent that I love using to review my   work.

 You can think of it as another   validation sub aent and that is Code   Rabbit. an AI powered code review   platform and they are sponsoring this   video but I do use them every single day   for my work and it's free for open   source projects so naturally I've   integrated code rabbit with archon every   single pull request that is made to the   archon GitHub repository is   automatically reviewed by the code   rabbit agent it analyzes my codebase   deeply and my poll request it   understands how it affects things and   outlines that here it gives me a   beautiful sequence diagram for every PR   it suggests reviewers and of course we   have the allimportant actual code review   here with the changes that it recommends   and I will literally take these and give   them to claude code or whatever AI   coding assistant I'm using. So, it's   become a crucial part of my development   workflow, and I'm just very thankful to   have Code Rabbit for Archon, especially   with all the poll requests that we're   managing every single week. And they   have a CLI tool now, so you can use Code

  Rabbit not just to review your PRs in   GitHub, but now you can also use it as   one of your agents reviewing things   locally when you're developing on your   machine. Code Rabbit also offers free   trials for their paid tiers and is free   for open- source software like Archon   like I mentioned earlier.

 And the   reviews with the CLI and IDE tools are   free with rate limits that apply of   course. And so if you've been feeling   overwhelmed with the amount of code that   you've been creating with AI tools, this   is your ticket to maintain quality   without slowing down. I'll have a link   to Code Rabbit in the description.

 I   would definitely recommend trying them   out. So on to implementation in action.   And this is pretty simple overall   because we did so much of the work up   front in the planning stage. So now   thanks to the plan that we've generated   that has all the components of context   engineering. All we have to do is   execute our predefined workflow passing   in the plan that we have created.

 So   again we have the execute plan/comand   where we take in our requirements. We   break it down into all those tasks. And   in this case I'm doing everything in   archon. And so I went through this   implementation already. So, we have all   the tasks in done. It knocked it out   100%. Is actually really incredible.

 And   so, I'll go back to the terminal here   and show you uh the conversation that we   have. And so, it's partially cut off   because there's a lot of work that it   did here. But, yeah, we just sent it in   to implement literally everything. And   it goes for a while here. There's a lot   that it's taking care of, but I have   quite a bit of trust in the coding   assistant because of all the context   that I gave it and how things are split   up between the different tasks.

 And you   can see that was doing a lot of the task   management with archon here as it is   changing things. So it's interled   managing tasks making changes and then   going through that cycle. And then at   the very end here we have validation.   And validation is kind of mixed into   implementation as well. And that is   where we invoke our specialized   validator sub aent.

 And so it went for   quite a while here. Actually probably   longer than I really needed it to go. It   did a lot of validating with unit   testing and other things to make sure   that our code is rock solid. And the   important thing that I want to call out   here is that for the validation that's   when we go back to using sub aents.

 So   planning and validation we use sub aents   but I on purpose did not use any sub   aents during the implementation. And the   reason for that is when we're actually   making the code changes doing the   implementation, we want everything to   remain in the primary context window for   cloud code or whatever our AI coding   assistant is.

 If we have different sub   aents implement different parts of our   codebase, they're not really   communicating with each other and memory   is not shared between them. So you start   to have conflicting changes and   overlapping changes. It becomes a mess   when you use sub aents for the actual   code creation. And so generally I always   use sub agents for the research upfront   and then also having a validator   specialist so I can give a very specific   system prompt to this agent for how to   validate my code.

 So that's the really   important distinction I want to make   there. Otherwise for slash commands I'm   using them in every single part of the   implementation like you saw. And then   global rules. I haven't covered too much   in this video, but really this is what   you'd set up in your planning phase   initially.

 When you're trying to just   think at a high level like what are the   instructions that I want my coding   assistant to follow literally no matter   what I'm doing, starting the project   from scratch, adding in a new feature,   doing a bug fix, there are a lot of   those kind of golden rules that you want   to put within your claw.

md whatever that   file is called for your coding   assistant. And then of course the last   step here is our own review. You   definitely want to perform a code review   on everything that was outputed by your   coding assistant. Otherwise, you're   still just reverting back to Vive   coding. So, perform a review and then   run manual tests as well.

 Like I have my   agent API running again in Docker. I   have the connection already set up in   Obsidian. So, I'll just show you this   really quick. I'll go into my chat   window here and I'll say summarize. And   then I'll just reference this whole   diagram that we've been going through   throughout this video. So, I'll send   this to send to my agent.

 It's   communicating to literally what we just   built using the OpenAI API compatible   endpoints. And there we go. We have a   summary of the full workflow based on   our diagram here. Absolutely beautiful.   The implementation is flawless. And now   we have this workflow that we can use   for other things as well.

 I mean the   whole planning slash commands and primer   that I had and the sub agents for   validating and executing and my whole   process for task management in archon   like it's not actually that specific to   this specific implementation. Like I can   take this and reuse it for anything that   I want to build.

 And that is the main   thing that I'm trying to describe to you   in this video is how you can create   these combinations of rules and sub   agents and slash commands and even just   like a mental model of how you plan then   implement and validate and like that   becomes your process that you can reuse   for anything.

 you've now built a system   for working with AI coding assistants.   And even when you start to incorporate   other things like the PRP framework or   the GitHub spec kit, you're still   following that same mental model, just   using those approaches to basically   augment what you have and you can tweak   it to your needs.

 So that's everything   that I've got for you today. If you   appreciated this video and you're   looking forward to more things around AI   coding and building out these kinds of   workflows, I would really appreciate a   like and a subscribe. And with that, I   will see you in the next



---

