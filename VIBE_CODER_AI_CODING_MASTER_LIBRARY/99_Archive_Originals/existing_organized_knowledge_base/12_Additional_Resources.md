# Additional Resources

> **Category Description:** Supplementary video transcripts and resources that provide additional context on various tech and business topics.

---

## Table of Contents

- 1. YouTube
- 2. YouTube video 0n809nd4Zu4
- 3. YouTube video GGi7Brsf7js

---

## 1. YouTube

**Source File:** `YouTube (ytranscript.app).txt` | **Size:** 37 KB

---

YouTube
https://www.youtube.com/watch?v=-VuZmoc-Sq8

[00:00] This is the ultimate beginner's guide to vibe coding. It's the biggest shift in how software gets built in years, and I'm going to show you everything you need to know. We'll start with what vibe coding is and the tools that do it. Then, we'll build a real app together from scratch.

[00:13] You'll learn how to plan it, prompt it, add logins and payments, publish it, and connect it to GitHub to keep building from there. No coding experience, no technical background needed. Just follow along. By the end, you'll have your own app live on the internet. Not a mock-up, not a demo, a real application anyone can use.

[00:30] Now, I've built and launched a real product this way with paying customers using it right now. So, I'll also tell you where vibe coding shines and where you'll hit walls. Stick around for that part. But first, what is vibe coding and why is everyone talking about it? Vibe coding is building software by simply describing what you want in plain language and letting the AI build it for you.

[00:51] The design, the database, the login system, everything. [music] The term was coined by Andrej Karpathy, one of the world's most respected AI researchers, in early 2025. He described it as just see things, say things, run things, copy-paste things until the software does what you want. You don't write code, you guide the AI.

[01:08] Here's how it works. It's a loop. You describe your app, what it does, who it's for, what it needs, and the AI generates a working application. You test it and then tell the AI what to change. It changes it, and you repeat this until the app does exactly what you want. That's it.

[01:26] Now, this is not the same as just using ChatGPT. Ask ChatGPT to build you an app, and it'll hand you code. Useful code, but you still need to set up a server, configure a database, handle hosting, deal with security. ChatGPT gives you the ingredients, but it doesn't cook the meal. Vibe coding platforms actually cook the meal.

[01:43] You describe the app, and the platform generates it, hosts it, gives it a database and a login system, end to end. One thing to be clear about, though, one sentence doesn't give you a perfect app. The AI isn't magic, yet. You still guide it, test it, and iterate. The skill is in how you communicate, how precisely you describe what you want.

[02:05] We'll spend a lot of time on that because it's what separates great results from frustration. All right, that's what vibe coding is. Now, let me show you what the tool landscape actually looks like. There are over a dozen vibe coding tools out there right now, and more launch every month. I'm going to give you a quick overview of the main categories so you know what's available, and then we'll pick one together and build something.

[02:28] These tools fall in the three categories. The first category is all-in-one app builders. These are platforms like Base44, Lovable, and Bold.new. You describe your app, and they generate everything. The front end, the back end, the database, the hosting. [music] You don't touch code, you don't set up servers, you just describe what you want, and the platform handles the rest.

[02:50] These are the most beginner-friendly option, and they're what most people think of when they hear the term vibe coding. The second category is AI-powered code editors. Tools like Cursor, Windswept, and GitHub Copilot. These still use a traditional code editor. You're looking at actual code files, but AI writes most of the code for you.

[03:08] You can describe what you want in natural language, and the AI fills it in. These are better if you have some coding background, or if you want more control over what's being built. The third category is AI coding agents. Think Replit Agent, Claude Code, or Codex. These are AI systems that can plan, write, and deploy code more autonomously.

[03:29] You give them a goal, and they figure out the steps. They're more powerful, but also more complex to work with. More of a power user tool. For this video, we're going to use Base44. It's one of the most beginner-friendly options out there, and it handles everything in one place. The design, the database, the hosting, all of it.

[03:49] And if the name sounds familiar, well, that's because Wix acquired Base44. So, this isn't some small side project, it's a real platform with serious backing. That means you can follow along no matter your experience level, and by the end, you'll have something real and live on the internet. Let's get started.

[04:05] I've got a link on screen and in the video description that'll take you straight to Base44, where you can start building for free. No credit card needed. Go ahead and open that up so you can follow along with me step by step. When you click on that link, you'll land on this page here or something very similar, and you'll see right away that there's a chat box asking you to describe your app.

[04:23] Now, this isn't actually a real chat box. We need to register an account first. To do that, simply click the build now button. Then go through the process of setting up your Base44 account by following their instructions. I'll meet you on the dashboard. And here on the dashboard, we can see a real chat box that we'll use to build our app.

[04:41] Now, before we go any further, I want to point out that this might look a little bit different by the time you're watching this video. AI moves very quickly, and software updates regularly. So, if the interface doesn't look the exact same, don't worry. Just try to understand the concepts I'm showing you today and apply what you've learned to the interface as it looks when you're following along.

[05:04] Before we start building, I want to show you something that will make a big difference in how your app turns out and save you money in the process. On the upper left side, click the workspace drop-down. And here you can see Base44 uses a credit system. On the free plan, you get five message credits a day.

[05:18] Now, these aren't one-to-one. A simple change might use only a fraction of a credit, but asking the AI to build a whole new feature will use more. The free plan gives you enough to generate your first app and try some changes. But here's the thing, if you jump straight into building with a vague idea, you'll burn through credits fast trying to get what you want.

[05:37] So, instead, we're going to plan first. Base44 has a built-in feature for this called plan mode. When you go to create a new app, you can see this little plan toggle button. Go ahead and click that. Now, we're in plan mode. In plan mode, we can type a simple description of what we want, and Base44 will help us to refine the prompt that the AI will use to build the app.

[05:58] So, I'll simply type movie recommendation app and hit send. Then the AI will ask you some guided questions to help understand what the goal is, who's the audience, what are the core features you want, design preferences, that sort of thing. Here it says, who's this app for and how will it be used? So, I'll say general public.

[06:18] What's the core way recommendations are generated? We'll say based on ratings. And what's the visual vibe you're going for? Let's say dark and cinematic. Just answer the questions it asks you, and when it's done, it'll come up with a plan, and you can click read more to see all the details. You can scroll through, see everything it wrote.

[06:37] And if you want to change anything, you can simply type in the chat in plain language and ask the AI to make updates. The best part is plan mode doesn't use any credits. You're just having a conversation with the AI, getting your ideas organized, and building a detailed blueprint for your app, all for free.

[06:52] Credits only get spent when you click start building. Look at what we've got now. We started with a rough idea, and the AI turned it into a structured plan with clear features, user flows, and design direction. This is what Base44 is going to build from. The more detail you put in here, the better your first result will be, and the fewer credits we'll spend refining it later.

[07:14] Here's a quick tip. If you're not sure what you want to build yet, you can use a tool like Claude or ChatGPT to brainstorm ideas before you even open Base44. Think of it as a conversation with a friend before you sit down to draft the blueprint. But once you know roughly what you want, plan mode is where you'll turn that into something the AI can actually build.

[07:35] All right, our plan looks good. Let's click start building. And right away, Base44 gets started building your app. You can even see the files it's writing in real time in the left sidebar. This process can take a few minutes, so just be patient. And when it's done, you'll see something like this. This is Cinimatch, Base44's first draft of our app.

[07:55] Right at the top, we have a search bar where we can search for specific films. We have tags where we can filter by different film type. As we hover over the different films, there's some nice interactive movement happening here. The image grows bigger, and the movie gets highlighted. At the top, we have different tabs for my ratings, where it looks like if we log in, we can track ratings.

[08:15] Same thing for a watch list where we can save films, and then recommendations for the user based on their preferences. Overall, this is a pretty good start. Base44 created a full front-end application. If you were coding this from scratch, this could take days. But there still are some problems we might want to address.

[08:34] For example, these aren't the actual movie posters. We'd probably want to fix that. There's an option to sign in to get your ratings, but I don't see a way to sign in yet. So, we'll want to add user authentication. And personally, as I'm seeing it, I'm not a huge fan of this serif font here for our headers.

[08:50] I think it would look a lot better if we had sans-serif fonts. So, next, let me show you how to make changes to your app. The first version is never perfect. The real skill in vibe coding is knowing how to guide the AI to make it better. There are a few ways to do that. Let me show you. First, the theme panel.

[09:07] Click the theme icon, that's this palette button at the top of your editor. This is where you set the colors and fonts for your entire app in one place. Pick a primary color, a background, choose your fonts, and those changes apply everywhere, instantly. This is free, and it doesn't use any credits. For example, let's maybe change this primary yellow color here to a different tone, a different hue.

[09:30] We'll set it to maybe this vibrant orange color here. That's pretty nice. And if we click save and apply, we can see that the app colors have been updated everywhere that that yellow color was used previously. Next, visual edit mode. Click edit in the upper left of the toolbar. This lets you select specific elements on screen and adjust them.

[09:51] You could change the color of one button, tweak the spacing on one section, delete something you don't need. It's like the theme panel, but for individual elements instead of the whole app. Also, free to use, no credits. For example, maybe we want to change what this text says. We can click on it and then click the T to change the text content.

[10:10] We'll change it to say, 'Rate what you've watched to get personalized recommendations.' Then if we click X on this toolbar, after a second the app preview updates and the change has been locked in. Between the theme panel and visual edit mode, you can do a lot of design work without needing to touch the AI chat at all.

[10:26] Save your credits for the stuff that actually needs AI, adding features, changing functionality, and fixing logic. One thing to keep in mind as you make changes is that Base 44 keeps a version history of your app. You can access that up here in the left side with this little clock icon. So, if you make a change and something breaks, you can always roll back to a previous version.

[10:43] Like we can click on this older version here and it loads the version that had the yellow color instead. This is like an undo button for your entire app, so it's super handy. For anything that goes beyond visual tweaks like adding new features, changing how something works, fixing a bug, that's where the AI chat comes in and this is where the credits get used.

[11:01] Here's my approach. I just go through the app and talk through what I'm seeing. I use the voice mode to take notes as I go. Those will all show up down here transcribed. So, when I'm done talking through and just thinking out loud, I'll turn off the voice mode and then all of those can be turned into one message with all the different changes requested that I can send all at once.

[11:22] And that way I'm getting five or six changes for the cost of one message instead of burning a credit on each change individually. That's the core of Vibe Coding. You describe what you want and the AI makes it happen. Let me show you. I'll click the microphone icon. Okay, so I like how the app is looking so far, but at the top in the headers, both the CineMatch and the Discover Films, I don't like how those look as serif fonts.

[11:43] I think they would look cleaner and more modern if they were sans-serif fonts. Also, in this top section of the app behind the Discover Films header, I think it would look a lot better if we had some sort of image maybe pulled in from the movies. Something kind of like how Netflix shows the movie recommendation with a nice wide banner behind this with an overlay.

[12:06] Also, with the movie thumbnails below, none of the thumbnail images actually correspond to the real movie poster. I think we should pull in the real movie poster as opposed to using these stock images or maybe these are AI-generated. Either way, we should pull in real images related to the movies. When I'm done, you see I click the microphone icon and it transcribes everything I said.

[12:28] Now we can simply send the prompt and Base 44 will begin making those changes. And after a few minutes, we have the updated app and you can see here at the top it pulled in the movie's backdrop for the hero section. This is great. It also looks like we have a bunch of movie posters now for our thumbnails, although it is missing the thumbnail for The Godfather.

[12:48] So, that tells me a couple things. We need to figure out how to actually get it to pull in those images consistently, harden that logic, or create fallback images somehow. But generally speaking, this is how it works. So, as I'm reviewing the updates it made, I could simply turn on the microphone icon again here and talk through what I'm seeing and then submit those changes back to the AI chat.

[13:10] You can do this over and over until the app is working and looking exactly like you want it to. If you'd rather not use voice mode, you can always of course just type like you normally would in a chat box. And if it's helpful, you can even take screenshots and upload files to help the AI understand what it is you're looking at and what you're thinking about.

[13:26] Now before we go any further, let's check out how this app looks on a phone. In the upper right, there's this breakpoint drop-down that shows the icon of a desktop computer. You can change it to see how this app would look on a tablet or a mobile device. So, let's check that out. And this is looking pretty good.

[13:46] It collapsed the items in the header to these simple icon buttons and it collapsed the multiple movie posters that you have in a row down to just two, so it's easier to view on a phone. Base 44 generates responsive apps by default, so it should adapt to whatever screen size your viewers are using, but it's always worth checking.

[14:02] If something looks off on mobile, add it to your list of changes for the next AI prompt. So far, everything we've done has been on the free plan. You've built an app, customized it, checked how it looks on mobile, and you haven't paid a cent. That's the beauty of Vibe Coding. You can go from an idea to a working prototype without spending anything.

[14:25] But here's the thing. Every Vibe Coding platform has a free tier that lets you try it out and a paid tier that gives you the features you need to actually turn the prototype into a real product. Things like user accounts, payment processing, custom domains, and code export. That's true whether you're using Base 44, Lovable, Bold, or really any other tool.

[14:44] The free tier is where you learn and experiment, the paid tier is where you build something real. For Base 44, that's the builder plan at $40 per month. And for that, you get 250 message credits, back-end functions for things like payments and email, custom domain support, and GitHub integration. Basically, everything you need to go from what we've built so far to a real launchable product.

[15:08] To put that in perspective, a few years ago, I paid a developer over $20,000 to build a simple MVP and it took months. You're doing the same thing today for the cost of a single dinner out. Once you're ready to upgrade, click the Base 44 icon in the upper left, then click upgrade your plan. On the next page, follow the prompts to upgrade to the builder plan or higher.

[15:29] You'll get an option to choose between yearly and monthly payments. Personally, I recommend yearly because that'll get you a free domain for a year. You'll also save money over the long term. But if you want to start with a smaller commitment and go with the monthly plan, that's fine, too.

[15:41] Choose whichever works best for you, then follow the prompts to check out. I'll meet you in the following step. Now that we're on builder, the platform really opens up. Let's start with user authentication, the feature that turns this from a demo into a real app. Right now, anyone who opens your app sees the same thing.

[15:57] There's no way for someone to create an account, log in, or have their own personalized experience. Authentication is what changes that. It's the system that lets users sign up, log in, and have their own data. So, one person's information stays separate from everyone else's.

[16:11] It's what makes an app feel like their app, not just a website. And one of the things that makes Vibe Coding platforms different from using something like ChatGPT is that this kind of feature is built in. You don't need to set up a separate authentication service or figure out how to store passwords securely. You just turn it on.

[16:30] In the Base 44 editor, click the dashboard tab in the top toolbar. Then click settings to expand it and then click authentication. Here you can see Base 44 gives you a set of authentication methods you can toggle on. The simplest is email and password. Your users create an account, set a password, and log in.

[16:48] But you can also enable social login with Google, Microsoft, Facebook, and Apple. I'm just going to keep on email and password and Google because those cover the vast majority of users. Authentication methods are available, but we still need to add the pages where users can sign up and log into our app.

[17:05] Let's go back to the chat and do that. I'll click preview and then in the chat we'll say, 'Add sign up and login pages so users can create and manage their own accounts. Also, add a log out button that shows up in the upper right for anyone who is logged in and make it a sign up {slash} login button when they're logged out.

[17:22] ' We'll submit the prompt. And when it's done, you can see that Base 44 just set up a full authentication system. There's a log out button in the upper right. After I click it, we get a login page. I'll go ahead and log in. Now we're logged back in. We have a full authentication system, secure password storage, session management, the login and sign up pages, all from a couple of toggles and a single prompt.

[17:45] If you were doing this with traditional coding, this alone could take days. You can also set up different access levels. Under the dashboard, you can click users and you see my role right here is set to admin. Admin users can see everything and then regular users can only see their own data.

[18:01] Base 44 handles this through something called row-level security. You don't need to understand the technical details right now. Just tell the AI what each type of user should see and it will set it up. I know it might seem like a lot is happening behind the scenes, but the whole point is you don't need to understand all of it right now.

[18:15] The platform handles it. Now that users can log in, let's talk about the thing that turns an app into a business, getting paid. But this section is actually about something bigger than just payments. What we're really doing here is connecting your app to outside services. Payments through Stripe, emails through a service like Resend, text messages through Twilio.

[18:35] These are called third-party integrations, tools that already exist that your app can talk to. You don't have to build a payment system from scratch, you just connect your app to Stripe and Stripe handles the money. That's the power of integrations. So, let's start with the one everyone wants to know about, how to get paid.

[18:54] To add payments, we can just ask the AI. In the chat, I'll say, 'Connect Stripe so we can charge customers a monthly subscription for premium movie recommendations.' We'll submit. It'll come back asking us to allow it to install Stripe or reject the request. Let's click install Stripe. After a few minutes, it comes back and says everything is wired up.

[19:13] It created a premium page to show off the new premium subscription plan. It created a bunch of back-end functions to manage the checkout and subscription and product and it created all the technical stuff we need to manage the product and subscription. It also provided us with instructions for how to test that.

[19:28] So, it says click subscribe and use this demo card. Let's do that here. If we click subscribe now, we get this pop-up saying that we have to do this in the published app. Now we don't actually have to publish the app yet to do this. We just have to go to this URL here. So, I've copied this URL, go to a new tab and this is a preview URL.

[19:45] So, here we'll go premium, subscribe now, and here we've been taken into the Stripe sandbox check out. Let's plug in that demo card and we'll click pay and subscribe. And there we go, the checkout flow is successful. That's it, one prompt to connect payments, one prompt to connect a product, we've got ourselves a working checkout.

[20:05] Base44 sets up Stripe in test mode first so you can try it without moving any real money. Now, if we go back to the dashboard and go to integrations, when you're ready to go live, there's a setup guide here that walks you through connecting your real Stripe account. Now, I'm not going to walk you through every Stripe setting right now.

[20:21] That's its own whole rabbit hole and Base44's docs cover it pretty well. But the point is, you've just added payment processing to your app by simply asking the AI. That's vibe coding. Now, you'd probably want to add some additional business logic here to make sure that your premium customers see something different than the free users.

[20:38] Maybe you'd also want to send a thank you email when somebody signs up. Let's tell this to the Base44 AI chat. I'll use voice mode again. Please ensure that free and paid users see different content. Also, send a confirmation email to new premium subscribers when they sign up. And we'll send it. When it's done, you can see it decided to gate the AI recommendations behind the premium subscription and it also added a confirmation email in the webhook for the Stripe checkout.

[21:04] So, up here now we have a for you tab and we can see that this is now locked as a premium feature. Now, this particular user that we're using in the test environment doesn't have a subscription yet. So, in the background here, I've created a test user that has a subscription. The cool thing is, you can see how different users experience the app by clicking these three dots at the top, clicking act as user, then we can say view as and change to this other test user here.

[21:32] Now, if we click on the for you tab, we can see that the gate has been unlocked and now this user can get custom AI recommendations. In just minutes, we've gone from nothing to an app with user accounts, payments, and custom logic and we haven't written a single line of code. Before we publish this app, let's talk about what to do when things go wrong because things will go wrong.

[21:54] That's completely normal with vibe coding, even with regular coding, actually. So, let me show you how to fix the most common issues so you don't waste time or credits. Apps and their files are super interconnected. Changing one thing can affect another, so you should test after every change, not after 10 changes.

[22:13] Commonly, if something goes wrong and there's an error in your app, Base44 will identify it and you can simply click the resolve AI button. And it says here, this action won't deduct any credits from your account. So, you can simply click that button and the AI will figure it out and it won't cost you anything extra.

[22:28] Just like that, it figured out there was a typo in the import path for this particular element and it fixed it. Remember the version history we talked about earlier? This is where it saves you. If a change breaks something, you can always try rolling back to a previous version. Now, another common issue is that the AI doesn't understand exactly what you want.

[22:43] Here I asked for it to make the header look more cinematic because I wanted it to feel more like Netflix and here it gave the hero a cinematic upgrade. This isn't what I was looking for. Here's the framework you should use in these situations. Use the what I expected versus what happened format. So, for example, say, that doesn't look right.

[23:06] What I expected was that you upgraded the header section to look more minimalist and sleek. What happened was that you updated the hero, not the header/nav. Please revert the change made to the hero and update the header based on my initial request. Let's send that. And here it fixed the issue with the hero and it gave the Cinimatch title a nice big bold look, much more Netflix-like.

[23:29] Okay, now here's the part where the magician reveals his secrets. That change you just saw, that egregious-looking Netflix banner, I actually told it to do that so I could show you what it looks like to fix it. I just have to mention that because I don't want to give you guys the wrong idea thinking that the AI is going to make bad mistakes like that.

[23:47] The examples that you'll encounter with your own real vibe coding will probably look less atrocious than that. They'll be much more subtle issues and that what I expected versus what happened format is super helpful for getting out of them. Base44 also has a feature called discuss mode that's really useful when something's not working and you're not sure why.

[24:07] You can click discuss in the chat and now you can talk to the AI about your app without it making any changes and this only costs 0.3 message credits. You can ask it about what might be going wrong, brainstorm solutions, and think through your options. It's like having a conversation with a teammate before you actually jump in and start fixing things.

[24:26] Because it only costs a fraction of a regular credit, you can go back and forth without burning through your balance. I just implemented a daily movie recommendation feature for this hero section where it rotates through multiple movies, but I'm not totally sold on how it looks. So, let me show you how the discuss mode looks in practice.

[24:41] I'll use voice mode again. Our hero section here seems to be cutting off people's heads in the images. They're showing up tucked away, hidden a bit by the header. Can you figure out why that's happening and fix it? Also, the Schindler's List featured movie doesn't seem to have any images pulled in. It's just dark.

[24:57] Can you look into that as well and put together a plan for fixing it? There's the prompt. Now, we'll send it. After a few minutes, discuss mode comes back with a response showing that it read and reviewed the files and identified potential causes for both issues. It proposed a plan to fix each of them and so now, to fix it, all we have to do is turn off discuss mode and say something like this.

[25:19] Yes, please go ahead and implement those proposed fixes. And there we go. It updated the padding at the top so that people's heads aren't cut off from these splash images here. But it doesn't look like it actually pulled in a fallback image here like it said it was going to. So, this is when we'd want to iterate again, explain what we expected versus what actually happened and then let the AI figure out a way to resolve the issue.

[25:42] The most important debugging skill in vibe coding isn't technical, it's communication. If the AI got it wrong, the fix is almost always a better prompt. Here's a problem you'll run into if you use a tool like Cursor to build an app. You finish building it, you're really excited, you want to show someone, and the app is running on localhost.

[26:01] It only exists on your computer. Your friend can't open it, your investor can't see it. It's like building a house that only you could walk into. With Base44, that's not a problem. Your app can be shared live to a public domain in just four clicks. To publish your app, simply click publish in the upper right, then change app visibility to public, no login, then click publish app.

[26:29] And just like that, you'll get a confirmation saying your app is published and live online. If we copy this URL, open a new tab and paste it in, we're taken right to our beautiful new app, live on the internet, and ready to share. But if you're going to share this with real users, you'll probably want your own domain.

[26:44] This domain is kind of ugly, but since we're on the builder plan, we can get a custom domain really easily. Back in the Base44 editor, we're still using this temporary name, Cinimatch, for our app. So, let's see if we can find a .com for that. We'll click publish in the upper right, then click get domain. It loads the temporary domain in the search field.

[27:05] We'll replace that with Cinimatch and click search. That's not available. That's okay, our app is still young, we have time to change our name if we want. Let's try something else like plotpair.com and it's available. It's $1 for the first year. Let's claim it. This will route us to Ionos where we can add it to our cart and click continue, then simply follow the checkout flow to claim the domain.

[27:29] >> [music] >> After completing that, when you return to your app in Base44, if you click the publish button, you'll see that instead of your temporary domain, you've now got your custom domain loaded in and the next time you publish your app, it'll be pushed to your custom domain. However, we just changed the name of our app.

[27:42] So, let's update that first. We'll simply ask the AI, please update the name Cinimatch to Plot Pair everywhere that Cinimatch appears. After a minute, the name's been changed. We can click publish, copy the custom domain, and then when we visit the new domain, we might see a DNS error.

[28:01] Don't worry, you didn't do anything wrong. DNS changes can take a few minutes to propagate, sometimes up to an hour. So, don't panic if it doesn't work immediately. Eventually, it'll load and just like that, you've got a real app on a real domain. This is not a demo anymore. Now, anyone in the world can open this right now.

[28:20] Base44 also lets you turn your app into a native mobile app for iOS and Android. Here's what you need to know. To publish on Apple's App Store, you'll need an Apple developer account. That costs $99 per year. For Google Play, it's a one-time fee of $25. The process works like this.

[28:36] Base44 packages your web app into a format that App Stores accept. You don't need to learn a new programming language or use a separate tool. The app you've already built is the app that gets published. Now, a couple of things to be aware of. Apple's review process can take some time, sometimes a few days, and they have specific guidelines about what apps can do.

[28:56] So, don't expect it to be instant. Google tends to be faster, but they have their own requirements, too. The result isn't identical to an app built natively in Swift or Kotlin, but for most use cases, especially the kinds of apps you'd build with vibe coding, it works great. I'll link Base44's mobile publishing guide in the description so you can walk through the full process step by step.

[29:19] But the key takeaway is that the same app you built on your laptop is now in someone's pocket. Next, I want to be real with you about where vibe coding is right now. For validating a business idea, building an MVP, creating internal tools, there's honestly nothing faster. I've personally built a SaaS product this way, a marketing platform for audio professionals with paying customers using it right now.

[29:41] These vibe coding platforms aren't just toys. But, there are real limitations. Complex apps with lots of moving parts, apps that need to handle serious traffic, deep customization, you'll hit walls. Then there's security. You'll hear people online call Vibe Coded apps AI slop. And honestly, if you're not careful, they're not wrong.

[30:01] When AI generates your code, it might handle things like API keys or user data in ways that aren't secure. So, always make sure that each user can only see their own data. Never put sensitive keys directly in a prompt, and run Base 44's built-in security audit. Those basics go a long way.

[30:17] None of that means you shouldn't build. It just means you should build smart. And the next thing I want to show you is actually the answer to most of these concerns. If you're not familiar with GitHub, it's where developers store and manage code. Think of it like Google Docs, but for code.

[30:32] It keeps track of every change, lets multiple people collaborate, and it's the standard tool that professional developers use. Base 44 has a GitHub integration. When you turn it on, all the code behind your app, everything Base 44 generated, gets pushed to a GitHub repository, a place that you own and control.

[30:52] Let me show you how to connect it. In Base 44, click the GitHub icon. That's the one next to the three-dot icon in the top toolbar. Then click connect to GitHub. In the pop-up, click connect GitHub, and then you'll get a pop-up window that appears. You can either sign in to an existing GitHub account or create a new one.

[31:07] I'll continue with Google. Then simply follow the prompts to get set up. You'll be directed back to Base 44 and prompted to create a repository. Go ahead and name your repository, then click create. In the upper right, we now have a green dot on the GitHub button, and we can see that it's connected. That's it.

[31:22] Your app's code now lives in GitHub, and from here, the sync works both ways. When you make changes in Base 44 and publish, they show up in GitHub automatically. And if someone pushes code changes to GitHub, Base 44 picks them up. Now, here's where this gets really interesting. Remember at the beginning of this video, I showed you three categories of Vibe Coding tools? All-in-one builders, AI code editors, and AI coding agents.

[31:47] We've been using an all-in-one builder this entire time. But now that your code is in GitHub, you can use the other tools, too. For example, let's say you want to make a change to your app, but you're struggling to get Base 44's chat to do exactly what you mean. You could clone your repository to your computer, open a tool like Claude Code, which is an AI coding agent, and tell it directly something like this.

[32:13] I'm having an issue where the Schindler's List movie doesn't seem to be pulling in any images for the display. Can you evaluate and fix that? It goes in and edits the actual files. You push those changes to GitHub, and Base 44 picks them up automatically. You don't need to do any of this right now. You just built your first app.

[32:32] That's the win for the moment. But, I want you to know that this is here, because the real power of Vibe Coding isn't any single tool. It's that all these tools work together. You use the builder to go from zero to a working product, and when you want more control, you bring in more powerful tools or collaborators without starting over.

[32:50] I'll link Base 44's GitHub setup guide in the description, so you can explore this when you're ready. Vibe Coding isn't going to replace professional software development anytime soon. But, it doesn't need to. For figuring out whether your idea actually works and getting it in front of people, there's nothing faster.

[33:07] All right, you just went from zero to a working app with user accounts, payments, and a custom domain, but just describing what you wanted in normal language. The best way to get better at this is to build another one. Brainstorm a different idea, open Base 44, and see how far you can take it. Use the link on screen, or click the first link in the description below to start Vibe Coding for free.

[33:29] Thanks for watching, and I'll see you in the next one.

---

## 2. YouTube video 0n809nd4Zu4

**Source File:** `YouTube video 0n809nd4Zu4 (ytranscript.app).txt` | **Size:** 52.8 KB

---

YouTube video 0n809nd4Zu4
https://www.youtube.com/watch?v=0n809nd4Zu4

[00:00:00] If you want to create your own Chrome extension, you're in the right place. In this course, Raman will teach you how to create a Chrome extension using the new iteration of the web extensions platform, which is called Manifest v3. Rahman is a great instructor. And he works for pieces that app pieces that app provided a grant that made this course possible, but you don't have to use their extension to follow along share in the comments what type of Chrome extension you want to make. Now the reason I want to teach about this particular

[00:00:32] topic is I've created two web extensions in my career. The first is for a previous company, where my extension generated a significant amount of revenue for the company. And the second for my current company pieces, where our web extensions play a critical part of our product stack, and help developers across the globe boost their productivity.

[00:00:53] I'm going to be using the pieces web extensions and integrations quite a bit in this video. So if you're interested in downloading an AI coding assistant that helps you save and reuse code snippets, convert screenshots to code, and more, go ahead and download pieces in the description. And you can totally follow along.

[00:01:10] So during my journey as a Chrome extension developer, I did often notice that tutorials and StackOverflow answers were using outdated versions of the web extensions platform. My hope for you after you leave this video is that you have a resource to create a modern Chrome extension, and you understand the difference between the newer version of the web extensions platform manifest v3, and older versions.

[00:01:30] Now, before we get started, there's going to be three prerequisites to this course, the first is required, and it's that you have a basic understanding of JavaScript and DOM manipulation. The second is optional. If you want to follow along with this video and code alongside with me, you can go to the description below, I'm gonna have a link to my GitHub repo, go ahead and get cloned that and you'll be able to follow along. The third is also optional.

[00:02:00] If you totally want to follow along, you can go ahead to pieces dot app and install a pieces IDE integration along with the pieces Web Extension, and you'll be able to use pieces exactly the way I do in this video. With that, let's get started. So as I mentioned before, the extension we're going to create as a YouTube bookmarker.

[00:02:17] Basically, anytime you navigate to a YouTube video page, an icon will show up on your YouTube video player to allow you to bookmark a particular timestamp on any video. So let me show you how that's gonna work. If you're on a YouTube video page, you're gonna see this item at the bottom right, you can go ahead and click that.

[00:02:33] And if you navigate to your chrome extension icon at the top, right, I've pinned, so it's showing in the toolbar, you're going to see a new timestamp already had one timestamp for 15 minutes, I added one with an hour 18. I can go ahead and delete this one because I just decided I don't want it.

[00:02:51] And our extension is going to give us that ability to do that. Now if I want to go back to my 15 minute timestamp, you can click the play button. And it goes directly back to that particular timestamp. I can also delete this one too. And when there's no bookmarks to show, it's going to say there's no bookmarks to show.

[00:03:19] Now we're going to add one, just so we have one on this video, and I can show you how storage works. I'm going to navigate to a new video. And in this video, we have no bookmarks. So it says there's no bookmarks to show. But if we go back to our previous video where we saved a bookmark, it's going to load that previous bookmark.

[00:03:36] Now the last thing is if you navigate to a non YouTube video page, it's going to say this is not a YouTube video page in the extension UI. And that's basically all the capabilities of this chrome extension we're going to build out here, there's going to be a lot more you can do on your own afterwards. Now I also want to mention the reason we're working on creating this extension in particular, is because it's going to show you all the major parts of creating a Chrome extension, it's going to show you how to work with a content script to manipulate the DOM.

[00:04:09] It's going to show you how to create a UI for your extension. And it's going to show you how to use service workers as background scripts, which is a major part of the ship from manifest v2 to manifest v3. And to start working on the extension. Once you get cloned my repo, you can go ahead and click on the puzzle piece in your Chrome browser at the top right click Manage extensions. I'm going to go ahead and remove my extension show I can show you how it works.

[00:04:32] And you're going to see this developer mode option at the top right go ahead and toggle that so it's on click Load unpacked, then go to the repo that you get cloned in mind with the boilerplate code. Go ahead and load that. And we're going to see our extension here. If we Click on this puzzle piece and pin it.

[00:05:00] What we're going to see is this basic UI, it's just going to say your bookmarks for this video with no bookmarks, and it's just going to show up everywhere. This is the default messaging in the boilerplate code I supplied and the boilerplate code will also contain all the files you need to follow along.

[00:05:18] The best place to start with creating our extension is the manifest dot JSON file. This file is a JSON file where we can specify what version of the extensions platform we will use, among other information that is going to serve as default for loading in our extensions.

[00:05:33] Also, every extension you would want to create whether it's Safari, Mozilla, or any chromium base extension will need a manifest dot JSON file. And it's probably the single most important file in your extension, because it simply just won't work without it. In our boilerplate code already added the manifest dot json file, so we don't have to spend too long writing it out, I think it would be especially helpful if I just point out some of the things that you should note, in case you're creating your own extension. So let's take a look here, as you'd

[00:06:07] suspect, there's a name, there's a version number and a description. And basically, the version number is going to populate when you loaded in the extension, the name you see is also going to be the name of the extension when you load it in. And the description is pretty self explanatory. It's just a description of what the extension does. Now things get more interesting with the permissions.

[00:06:29] The permissions will be different depending on whatever Chrome extension you're building. For this particular extension, we're going to request two permissions, which is going to be the permission to use the Chrome dot storage API, and the chrome dot tabs API. The chrome dot storage API is to store things in the user's browser for the extension.

[00:06:43] And the second permission, which is a chrome dot tabs API, is what helps us access our browser's tab system. So we can read the tab for the extension. This is basically going to help us identify what browser tab the user is currently using, and grab the URL to see if they are in a YouTube video page for our extension.

[00:07:07] Now, the host permissions just give you the ability to send cause requests to certain host names. Our extension only deals with YouTube pages. So I have a match pattern written here just for YouTube. The service worker, as I mentioned before, there's a big change between extensions, v2, and v3. And one of the big changes is the use of a service worker.

[00:07:22] As you can see here, the other is the ability to use promises. But let's just focus on service workers. For right now. Service workers are just a JavaScript file that runs separately from the main browser thread. This means that your service worker would not have access to content of a webpage, since it is separate from main processes.

[00:07:44] However, your service worker does have capabilities to speak to your extension using the extensions messaging system, which we will see and use in our bookmarking extension. The next thing I want to point out is the content scripts. The content scripts are just files that run in context of the webpages we're on.

[00:08:07] We're going to use this to manipulate the DOM of our webpage that our extension is looking at. And here we're just specifying that our content script is represented by our content script J S file. As you can see, with the J s colon content script dot j s, the last thing I want to point out is the pop up dot HTML file down here, under default pop up, this just specifies which file was served as our UI.

[00:08:33] In our case, we've specified the pop up dot HTML file, and in that file, we specify that the corresponding file that helps it with its interactivity is a pop up.js file. With all that out of the way, let's get to coding the actual extension. We're now finally going to start writing code to make our extension work.

[00:08:53] For us even test the extension, we have to add the button of the YouTube player that will allow us to save bookmarks with timestamps. So in order for us to add a button on the YouTube video player will have to manipulate the DOM of the web page we are on. What that means is we'll have to write our logic in our content script file, which operates in the context of the webpage, as I mentioned before, so let's go ahead and add some code to our content script file.

[00:09:13] We're going to go ahead and add the following variables YouTube, left, controls, and YouTube player one is going to be for accessing the YouTube player one is going to be for accessing the controls. And this is going to allow us to manipulate each of these. But before we continue writing the logic to do DOM manipulation in the context strip, we also have to think about how our extension is even going to know when we've navigated to a new web page.

[00:09:54] And we need to know this so the content script knows to execute logic to add the plus i Call to add bookmarks for our extension. Let's go ahead and go in our background.js file now. And what we want to do here is listen to any updates in our tab system and find the most recent tab or the tab that we're on currently and see if it's a YouTube page.

[00:10:12] So we're going to have a listener, that's going to listen to tabs. And if you remember, we got permissions to access the Chrome tabs API. And we're going to listen for an update to tabs. The parameters were given is a tab ID and a tab. What we're going to do from here is see if there's a tab URL, and if there is a tab Euro.

[00:10:50] Let's see if that Euro includes youtube.com/watch. The way I came up with that is if you look at our YouTube video, every individual video has YouTube slash watch. And we just want to make sure we're on a page that has that specifically as a URL, then what we want to do is set our query parameters.

[00:11:14] And we're going to use query parameters as a unique ID for each video. So we can grab it from storage, you'll see what I mean in a second, and I'll show you. So we're going to do that by using the JavaScript split method. What that means is basically after this question mark query parameter, we're going to grab this value.

[00:11:42] And this is going to be our unique video value this right here after the equal sign. And every video on YouTube has a different value right here. So it's a pretty unique key that will help us store videos uniquely as well in our storage, and it's consistent. So then we're going to add your URL parameters. And this is just an interface to work with URLs URL search params.

[00:12:17] And the final thing we want to do is there's a messaging system that happens between the extension, we're going to send a message to our content script that basically says a new video is loaded. And this is the video ID of that video, and the video ID being that unique video value that we saw in the URL on YouTube.

[00:12:46] And this tab, Id send message usage that I'm doing right here is all directly from documentation. The Send Message takes a tab ID, it takes a unique object. So right now I'm going to type type. And this is a type of event is a new video event. And then a video ID value, which is going to be URL, parameters, dot get v.

[00:13:07] So if we're doing URL dot get D, it's going to grab this right here. And that's basically going to be the code for that send message takes a tab ID, it takes an object and then it can also take a callback function. This object right here doesn't have to be type or video ID, it could also be something random, like I could literally pass this and the content script will have access to random, and then the string random.

[00:13:38] In our case, the only thing that's applicable is the type of the event and then the video ID, which is a content script needs. Now in our content script, we're going to add a listener that is going to listen to any of those incoming messages, we need to be able to listen to that background.js message.

[00:14:01] So to do that, we're going to end up writing the following code to add that listener, so we're going to say on message add listener. And this is going to accept three parameters. So an object a sender, and a response. And the response is, when a message is being sent to the content script, we can also send a response back where the message is coming from.

[00:14:30] So I'm going to destructure those values we're getting and if you remember, the way I'm deconstructing Type value video ID is basically we're given a video ID right here. Later on, we're going to grab a value as well, and I'm just destructuring. So each of these are its own variable.

[00:14:55] So it's a If type is equal to new, so if the type of event is new video loaded, which we're getting from the background.js file, we want to be able to set current video, which will be a global variable in the content script as the video ID, and then we want to call a function to handle any actions with new video. So we're going to call a new video loaded function.

[00:15:32] And let's go ahead and set current video as a top level variable. And that's just going to be an empty string. But it's going to be set as the string set from the background at js file, once the message is received on this end, so let's go ahead and actually see if this works at all. I'm gonna go ahead and just console dot log your parameters.

[00:16:06] I'm gonna give this a reload. Open this, let's inspect it. And we ever URL search parameters. So we know we're getting our URL search parameters now. Great. So so far, things look good. Now, what we want to do from here is create that new video loaded function. And after we create this function and all the functionality surrounding it, we should see the YouTube player button on the YouTube video. So let's go ahead and do that.

[00:16:43] So what we're going to do is create this function that we have right here called New Video loaded. And what we probably want to do is check if a bookmark button already exists, I know the class name that this item has, it's called Bookmark button because I wrote the CSS code that's going to style this whole extension.

[00:17:11] So you could just copy this part right here. But this is just some native Dom, slash JavaScript methods that we can use. It's actually MB by class name. And it's going to return an HTML collection. So what we're going to do is grab the first element that matches this class name, bookmark button. And it's just going to exist on every single YouTube video page.

[00:17:43] So if we want to test that, we could just say console dot log bookmark exists. And let's reload this page and inspect it. Actually, let's reload our extension as well. reload this page inspect, we're probably going to get undefined this is exactly what I expected. Because we don't have any logic surrounding the Bookmark button yet.

[00:18:10] And also, we're not even setting a bookmark button right now. So if the Bookmark button did exist, we would get true, it does exist, but we're getting undefined right now. So what we want to do if we're getting that undefined or false value that a bookmark button does not exist, is add some logic to say, hey, let's add this bookmark button to any YouTube player. So we're going to create an image element.

[00:18:45] That is going to be the image we click on for bookmark buttons. As part is in, we're going to add a couple of attributes. The first thing we're going to want to do is pull the image that we're using, which is our assets slash bookmark. PNG, you already have this if you're following along with the boilerplate code. The second thing we want to do is add a class.

[00:19:20] And the way we're going to add this class is basically make it pretty dynamic here. So we're gonna add a YouTube button class with a space and then we're going to add a bookmark button class in quotes. And this is again, just some styling I have that you don't need to worry about right now. And the last thing we want to do is basically on hover, we want to make a title show.

[00:20:03] So we're just gonna say the title is click to bookmark, current timestamp. And this is just a UI thing. You'll see this in a bit. Next, what we want to show is a way to grab the YouTube controls. So these are the YouTube controls over here, we want to be able to grab these left controls, so we can add a bookmark button right here. So let's go ahead and find out how to do that.

[00:20:35] I already know how to grab this. So I'm going to show you how this works. You can inspect elements right here and find what elements they exactly are. But basically, we're going to use native JavaScript methods like we have done previously to grab those controls and insert our button. If I do document dot get elements by class name.

[00:20:52] And I grab YouTube left controls, we should get an element back, which is going to be this div class over here. And you can see that it gives us all the left controls over here, where we're going to add our button. And the second thing we're going to want to do is grab the YouTube player as well. And that's one of the global variables we set in our content script.

[00:21:25] And we can also do that by writing document dot get elements by class name. And then there's this video stream class. And we're going to grab the one at the zero with index. And it grabs a whole YouTube component right there. So now we know the two elements in the DOM we need to manipulate.

[00:21:55] But let's set those elements. First, we're going to do exactly what we saw in our content over there. Document get, actually, I'm just gonna go back and copy these way easier, so don't make a mistake. And then the second one is going to be YouTube player. Go back and copy that. Okay, so after this, what we're going to want to do is add that bookmark button and we grabbed the controls, you saw that row in the player, we want to add it to that row.

[00:22:38] So we're going to type out YouTube left controls to get those left controls we stored in a variable. And to use this native JavaScript method we can use called append child, which is going to append this bookmark element inside that row. And then the second thing we're going to want to do is probably add a listener to listen to any clicks on our icon.

[00:23:08] So there's a correction I want to make to this portion of the video, before we continue, it's going to be very important in order for your extension to work functionally. And it's only one line of code, but it's going to make such a big difference. I'm also going to explain an important concept of Chrome extensions that I neglected while I was writing this, which is that in our manifest json file, we have a match pattern for our content script.

[00:23:38] And basically the match pattern, we currently have checks if any youtube.com video is loaded. And if it is, we're injecting our content script into the context of that web page. So basically, what that means is, anytime a youtube.com page shows up, we're running a bunch of logic using our content script. But the problem right now is that our background.

[00:23:56] js file is telling us when a new video is loaded. And the event listener we're using is on updated, which is just checking if this URL is updated. If you refresh this page, the URL is not updated. So this button actually isn't going to show up. And if you continue coding without this fix right here, you're gonna see some edge cases that you might not like.

[00:24:21] So let's go ahead and fix this, we're going to do a super simple fix. It's not the best fix in the world, but it will fix the problem here. We're just going to call a new video loaded anytime our content script matches youtube.com. And what this is going to do is call this new video loaded function anytime we hit that match pattern.

[00:24:47] The downside of this is now if the background script sees it as a new video using the on updated event listener, and there's a condition that content script is injected, we're going to hit this or call this new video loaded function twice, you can fix this pretty easily by just adding a conditional make sure that doesn't happen.

[00:25:06] But to make sure everyone is able to follow along with this correction, I will not be doing that here. And we'll just only be inserting this one line of code calling the new video loaded function. Luckily, the only thing our new video loaded function is doing is adding the Bookmark button to the YouTube player.

[00:25:24] So there's going to be no negative implications to calling it twice. Since we have a condition that checks if the button is already on the player. It's just not the most efficient implementation, which is fine for the sake of this tutorial. With that, let's continue with the rest of the video. There we go, we have the button right there.

[00:25:42] But right now, if we click the button, it's not doing anything. And there's a reason for that. The reason is that we don't have any event listener listening to click on this particular byte. Let's go ahead and add the code for that. So what we're going to do is add an event listener to listen to a click for the button.

[00:26:11] And we're literally going to use the add event listener method, listen for a click, and then call a function called add new bookmark event handler. And this is a function we have not coded yet. So to make this function work, we're going to have to do the following. We're probably going to have to figure out the timestamp of the video at which point someone presses the button.

[00:26:40] This is basically going to help us figure out what our bookmark should be saved as in storage according to its timestamp. So how are we going to do that? How are we going to figure out the YouTube video timestamp. Again, YouTube makes this pretty accessible, it can be found as an attribute. So what we're going to want to do is grab the YouTube player.

[00:27:03] And we already have a global variable that has it. But I'm just going to grab it again. So we can see how to do this in the console, I'm going to create a YouTube player variable in our console. Okay, now we have it saved. And then on YouTube player, there's going to be a property called current time. And it's going to give us the current time in seconds.

[00:27:23] And in order for us to save our bookmark, according to hours, minutes seconds, we're probably going to also have to create a function that converts seconds into a standard time of how it's displayed in YouTube. So let's go ahead and start with all those things.

[00:27:49] We're gonna go ahead and add the function, add new bookmark event handler. And we're going to use the exact property we saw in our console, YouTube player dot current time, which is going to give us the current time. And we're going to say okay, now, this is only called when a new bookmark is made. So let's create a new bookmark variable.

[00:28:21] And this is going to be an object that has the time of the bookmark and a description. And the description is just going to end up being the title that's going to be displayed in the Chrome extension. So it's going to be a dynamic description and skins a bookmark at current time.

[00:28:43] However, the problem is that this is in seconds, as we said before, so we're going to have to convert this. So we're going to use a function called get time. I'm just going to insert it using pieces. So I'm going to do is go over to this time function here. Insert snippet. And there it is. So now I'm able to convert my seconds into time.

[00:29:02] And then the last thing I want to do here is sync it to Chrome Storage. And what this is going to do is set Chrome storage with each bookmark. So basically, each video, according to its video identification number that we're grabbing from the URL will also map back to a set up bookmarks in Chrome Storage.

[00:29:28] So to do that, we're going to do Chrome storage sync. And again, if you're interested in this, you can look in documentation to find out what this function takes. Current video, it's important to remember that things need to be stored in JSON in Chrome Storage. So I'm going to do JSON stringify.

[00:29:47] All my current video bookmarks, so I'm actually going to add it A variable up here that's going to store all current video bookmarks in an array. And I'm going to spread that. So we can add a new bookmark to those set of current video bookmarks. And then the last thing I want to do here is sort bookmarks by their save timestamp in our Chrome Storage.

[00:30:29] So we're going to sort by time, and this is just coming from this right here, every bookmark is going to have a time and a description. So we're going to look at that and sort accordingly. Great. Now, if we reload our extension, we're going to see if it works as expected. And the way to see that is basically console dot log, this new bookmark, let's do it. Great.

[00:30:52] That time it worked, we just had to give it another reload. And we got a time in seconds and a description. Now the final thing I want to do is complete this file before we go to the UI. And we want to make this fully functional to fetch all bookmarks when a new video is loaded.

[00:31:13] To do this, we're going to grab asynchronously, all bookmarks from Chrome storage, which means I'm going to write a promise that resolves once we retrieve all bookmarks. So that code is going to look like this. I'm going to create it at the top here. And I'm going to say const fetch bookmarks. And I want to return a promise. So we can resolve this asynchronously.

[00:31:52] And within that promise, I'm going to fetch from Chrome Storage. So I'm going to do a Chrome storage sync and we did a set before to set Chrome Storage, we're going to get this time our current video it takes an object. And we're going to resolve to find any bookmarks when indexing using our current video.

[00:32:23] So basically look in storage to see if our current video has any bookmarks, or if it exists in storage. That's what's happening right here. If it does exist, we're going to JSON dot parse it because we JSON dot Stringify before, if it doesn't, what we want to do is return an empty array. And this should work.

[00:32:59] And we're really only going to add these in two places, which will be in our new video loaded function. So we're going to make this async. And we're gonna add a fetch bookmarks. So actually, we're just going to add this to our current video bookmarks variable. And call a weight fetch bookmarks. async await is going to resolve this promise.

[00:33:35] And then the second place we want to add this is to our add new bookmarks event handler. To basically handle this case, and make sure we're always using the most up to date set of bookmarks when destructuring. So we're gonna do current video bookmarks equals the weight, veg bookmarks.

[00:33:54] And also make this async. Awesome. So for right now, we finished everything we need for our content script file, obviously, things aren't going to show in the UI. And we could check that out right here. And as you can see, there's nothing in the UI because everything we've been doing so far has been manipulating the DOM right here to add the icon.

[00:34:22] Add some logic to get us ready to create a UI for our extension. Let's go ahead and start making some UI components show starting out with some bookmarks from clicking that addition button in the YouTube player that we added. Now, the first thing we need to figure out on any given page is if it's a YouTube video page or not, if it is, we're going on one of fetch any bookmarks we may have from Chrome Storage.

[00:34:51] And if it's not, we'll just want to display some messaging saying it's not a YouTube page. If you open the Chrome extension on a page that is not YouTube. So to do this, we're going to add a utility function that's going to allow us to decipher that logic. So we're actually going to grab our utility function to find the active tab that the user is on through Google Chrome documentation.

[00:35:14] I'm going to go ahead and use this example right here, which helps us retrieved a currently focused tab from the Chrome documentation. And since I have the google chrome pieces extension over every codeblock, whether it's in documentation or Stack Overflow, I'm able to directly save on pieces with this icon that shows up at the top right of any code block, I'm going to go ahead and save it.

[00:35:37] And then I'm going to go back to my VS code and refresh my pieces tree, I can go ahead and insert this snippet, which is the newest one, and I'm just going to rename this snippet to active tab Chrome. Amazing and pieces automatically classified this as JavaScript, because it was able to decipher that from some machine learning. I'm gonna go ahead and delete this background.js comment.

[00:36:09] And awesome, we now have a function that grabs the current tab. But also, I want to make sure I'm exporting this function. So I'm going to add export. And then what I want to do is open up the pop up.js file. And over here, we're going to want to import that function at the very top. So we can use it here.

[00:36:26] So I'm going to import Get active tab URL from utils dot j, s, and I actually don't think the documentation called it this. So I'm going to go ahead and change the function name, so it matches. So go to utils.js. Change that thought, awesome. Now, the event we want to listen to when opening the pop up.js file is the DOM content loaded event, which is right here.

[00:37:04] This event is a native window event that fires when an HTML document has initially been loaded. It's essentially when we want to load all our bookmarks and show them. So we're going to type the following to do so what we're going to do is grab our active tab function first. And we're going to look at the user's current active tab, which we already have the function for from in the utiles. It's an async function. So we're going to async await this.

[00:37:30] And then after that, we're going to grab the query parameters to help us identify the video. If you remember, each YouTube video has a unique identifier. After the question mark, where the query parameter, we're going to grab that, we're going to use a URL search params to be able to get the unique identifier for each video.

[00:37:59] And to get the unique identifier, we're going to create it current video variable and do URL parameters dot get V. And this is just based off of what the YouTube video URLs look like. Now, our active tab URL should have youtube.com/watch Because any specific YouTube video always has this in its URL.

[00:38:24] And we want to make sure we're watching a YouTube video when our Chrome Extension has any logic with bookmarks. And we want to make sure this current video variable is truthy meaning is get actually returned something other than undefined or any falsie value. And then what we want to do is we want to get any current video bookmarks from Chrome storage.

[00:39:00] If you remember, we're setting Chrome storage with the current video as a key and then all the bookmarks as a value that is JSON ified. And in order for us to retrieve those bookmarks, we need to use a Chrome Storage API to get them. So to do that, we're going to grab the video bookmarks using Chrome storage sync get.

[00:39:19] And we're going to get it with the current video unique identifier, which is the YouTube videos unique identifier in the URL. And then, we are going to set a current video bookmarks variable which is going to contain all those JSON ified current videos. And in order for us to pass this to any function or write some custom logic to show bookmarks, we're going to have to JSON dot parse any bookmarks that are saved in Chrome Storage since it's in JSON, and we can't really work with that.

[00:40:00] But if there are no bookmarks or chrome searches and return anything, we're just going to want to return an empty array. Now, we're going to have to pass this over to the view bookmarks function, which is basically going to help us view any bookmarks in our extension, that Chrome Storage dot get returns.

[00:40:21] But before that, I'm just going to put a comment right here. So we remember, we want to handle this else condition, which basically is for the scenario where we're not on a youtube.com video page, or current video returns a falsie value. So what we're going to want to do is add a message that says this is not a YouTube video page.

[00:40:47] And let's just go back to chrome to look at what that might look like. So this is our UI Currently, we have this container class right here that encapsulates and will eventually encapsulate all the bookmarks we have, it has this container class name in it, what we're going to want to do is get that class name.

[00:41:09] So we're just going to do this in the console before we actually do in code just to make sure it works. The class was called container. And that's just from the CSS in the boilerplate, so you don't have to worry about it, or the HTML or other.

[00:41:27] So when we wrote this document that get elements by class name container, and then grab the first element in the HTML collection, we get this element right here, which is containing all these other elements within it. And what we want to do here is basically specify in the HTML on pages that are not youtube.com. So this is actually a YouTube video page.

[00:42:00] We don't want to display this message. But I just want to show how this is going to look, we're going to want to put a new div class that says, This is not a YouTube video page. And let's just see if that works. Will this change the extension the way we want it to? Container is not.

[00:42:24] So what we need to do over here is actually encapsulate this in a variable. We're gonna set this equal to container. And now let's try that. And change the extension to show that this is not a YouTube video page. So the way we're going to do this dynamically in our code is basically put all the code we just put in our console to test this out within our else conditions.

[00:42:50] So every time we're not on a YouTube video page, or this returns a falsie value, we want to show that this is not a YouTube video page when we try to open up the Chrome extension in those scenarios. So we're gonna say const container equals document dot get elements by class name, right there. Grab that container class, first element.

[00:43:17] And then set the inner HTML, set that equal to div class equals title, title, just add some styling, that's going to make it look slightly nicer. There's nothing super special about the styling I have. And since we tested it, there shouldn't be really any surprises here, it should pretty much work as expected. So let's go ahead and give this extension a reload.

[00:43:47] It shouldn't show the message for this page. It doesn't. But if we go to a non YouTube page, it's gonna say this is not a YouTube video page. Amazing. So let's go back to our code. And we're going to want to write this view bookmarks function. So if it does meet the conditions of being on a youtube.

[00:44:03] com/watch page, and as you can see, that's from any page that has a video page, it has youtube.com/watch on it. And your URL params dot get the return something so it's a truthy value, we're going to want to view the bookmarks associated with that video.

[00:44:27] So let's go ahead and call the view bookmarks function and pass it all the current video bookmarks. And we're gonna go ahead and write the logic that's going to help us populate the UI with all the bookmarks we grabbed from Chrome Storage. So to do that, we're going to pass it current bookmarks. And we're going to set a default argument of an empty array just in case nothing is passed to it.

[00:44:59] It's just going To return or show no bookmarks, and we're going to grab a bookmark element. Again, this is just from the HTML that I have given you. So it's not anything you need to worry about. If you want to try this out on your own, you could try it out in the console. Just to save some time here, I'm just going to write the code here. And you can go ahead and copy it.

[00:45:28] But again, it's just knowing how to work with the DOM and inspecting the elements to figure out how to do this. What I'm doing right here is basically saying, Okay, if there are any bookmarks, let's just set it to nothing.

[00:45:43] So we're not displaying anything, we're going to reset the whole thing, since we're calling this function to view bookmarks. And we're going to have new bookmarks being passed in, which is the current bookmarks. And we're gonna say if the current bookmarks length is greater than zero, meaning if there are current bookmarks, and it's just not an empty array.

[00:46:08] Let's go ahead and iterate over all those bookmarks, and show them in our UI. So to do that, we're going to iterate over every bookmark in a loop. And then, we're going to grab the bookmark through indexing, so current bookmarks. With whatever iteration we are in the loop.

[00:46:29] And then what we're going to have to do from here is call another function, add new bookmark, which is going to add a new bookmark row to our pop up, I'm going to go ahead and remove this comment. And we're going to add a new bookmark, we're going to pass it the bookmark element up here, which is going to populate all our bookmarks, well, it's going to be where we add each of our rows.

[00:46:59] And I'm going to pass it each specific bookmark. So we're going to add one bookmark at a time and call this function every time we're adding a bookmark. But before that, what we want to do is if there are no bookmarks to show meaning, current bookmarks is just an empty array. We're going to want a message that says there are no bookmarks here.

[00:47:20] So we're going to set a message using italics. Saying no bookmarks. To show before we move on and add individual bookmarks to our pop up, let's go ahead and check if this condition works. Where there's no bookmarks to show and since we haven't added any bookmarks to this YouTube video that I'm looking at right now, it should work, I want to go ahead and reload my extension. Yep, there it is no bookmarks to show.

[00:47:59] Amazing. So now we're going to want to finally handle the case where we have bookmarks to show and this is going to allow us to start seeing bookmarks in our UI. So the first thing we're going to do is go to our add new bookmark function. And it's going to accept bookmark bookmarks element, and it's going to accept a bookmark.

[00:48:31] And then what we're going to do from here is we're going to create two elements. So one element is going to be for the title, which is going to display in the UI of each bookmark. And then one element is going to be the whole bookmark element that will contain the title will contain the delete button and will contain the play button.

[00:48:49] So let's go ahead and create the bookmark title element. And then after this one, we're also going to create the new bookmark element, which will encapsulate all these other elements that are part of a bookmark row. From here, for bookmark title element, we're going to want to display what the bookmark is and give it a title. So we actually already created the title.

[00:49:29] The title is the description of the bookmark. If you remember in our bookmark object, there's a timestamp and a description. So we're gonna set our text content to the description, which is bookmark dot description. And then our class name is going to be bookmark title element dot class name, and that will be set equal to bookmark title and this is just going to add some In CSS, that is already in our boilerplate code.

[00:50:03] Now for the general component that is going to encapsulate all the play button, the title, a delete button, anything else you might want to add, we're going to do a couple things, the first thing we're going to do is give it an ID of bookmark element, or bookmark with the bookmark time, and this is going to guarantee a unique ID for each element that is a row.

[00:50:28] So if you save any bookmark, what's gonna happen is there's going to be a row associated with each bookmark, which is our new bookmark element. And there's going to be an ID set for that row, which will be the bookmark along with the time and they'll help us uniquely identify any specific row in the UI.

[00:50:53] And that's later we're going to be used to delete elements when we're deleting a specific bookmark. And then we're going to set a class name, which was is going to help with some styling, that's going to be set to a bookmark class. And then we're going to set an attribute which is going to help us with playing a video.

[00:51:12] Because basically, we're going to want to know the timestamp of any specific bookmark. So when we play the video, we know where to set the video player at what time we want to send it out and the attribute of the bookmark element will help us find that. And the final things we want to do here is, since we know the new bookmark element is encapsulating all these other things, we want to append child bookmark title element, so it displays within the new bookmark element.

[00:51:50] And then we have this bookmarks element that is passed in. And we're going to append our new bookmark element, which is this element that's encapsulating all the other things. Inside that since it's a container. So now if we go back to our UI, and we give this a reload, just in case, let's just go to a new video.

[00:52:13] And if I press plus, in this video, we see a new row, it says bookmark out one hour, 54 minutes. And we could add another row if we want. And it gives us that same row, we're going to handle the case of the deletion, there's an ADD, it's just going to set at zero seconds. Bookmark it 000. Awesome. So that works.

[00:52:41] So now let's go back work on some additional functionality. Right now, we have no functionality associated with each bookmark yet, so we can't play any particular timestamped bookmark, we can't delete a bookmark. And the next thing we want to add is the play button.

[00:53:09] So to do this, we're going to add a play button to each bookmark that will go directly to this timestamp that we have saved for each video. To start off, we're going to have to add a function that is going to add an icon for a play button, listen for a click and call a function or event listener that will perform the logic to set a video at a particular timestamp.

[00:53:30] The function will end up looking something like what we're going to code right here in a second. And we're going to keep it super generic because it's going to be used for both our delete and play functionality. So the functions are going to take a source attribute an event listener. And it control parent element.

[00:53:50] And when we say control elements in our code, it means the play button, the delete button, we're just calling those control elements. So we're going to create a control element. And this is just one particular functionality, we're going to call a singular control element. So in this specific case, we're going to have a play button.

[00:54:27] But again, this is a generic function. So think of this as like a play button, a delete button we want this singular control element will be one of those. And then those control elements will be linked to a image in our assets folder. So if we want to play button, what we're going to link to is assets slash play dot PNG, and our schema super are predictable for this.

[00:55:01] So all we're going to do is assets plus SRC plus dot png. And there's definitely a better way of doing this, you can go back and work on the code after this video. But we're just going to keep it super simple for right now. We're going to give it a title that is the same as our source attribute, or what we pass in this source. So what's going to get passed in here is play, edit, delete, whatever.

[00:55:34] And the title will be set to that. So in this particular case, for play, it will be set as play, we're going to add a event listener. And that event listener will listen for a click. And we're going to pass it a function that is going to be performed on that clique. And the last thing we want to do is there's going to be a container for all control elements. And we're passing that in into this function.

[00:56:03] And we're calling it control parent element. So we're going to append this singular control element to the parent element. And the next thing we're going to want to do is add the function call that will add a play button, a title and our event listener to each individual bookmark.

[00:56:23] So in the add new bookmark function that we coded earlier, we're going to add a couple lines of code here. And these couple lines of code are going to add those control elements. So we're going to go ahead and create the element that's going to hold all our buttons, we're going to call it the controls element.

[00:56:39] And it's going to be a div just like these other ones, we're going to keep it super simple. And then what we want to do is give this some styling. We're going to add the class name, but controls, and you're just gonna have to trust me on this it exists. Then what we want to do is set our attributes using a set bookmark attributes function that we created, we're going to pass in play, the event listener is going to be called on Play. And we're going to code that later.

[00:57:26] And then we're going to pass in the controls element, which is going to be the parent element. And the last thing we want to do is append this to our new bookmark element. And what we should see now is, this play button is going to show up in our extension. So let's check this out. Let's give this a refresh over here.

[00:57:57] There we go. We have the play button in our extension. But what we're going to notice is it's actually not going to work. Let's go ahead and play this video. And we're going to try to get it back to 26 minutes, 51 seconds, it doesn't work. And the reason it doesn't work is we still need to code the On Play Event listener. So let's go ahead and do that.

[00:58:23] What we're going to do is we're going to target the timestamp attribute that we set earlier. So again, you could check this out in your console or inspect, if you want to get a visualization of how this is gonna work. But I'm gonna go ahead and type this for the sake of time. And we're gonna get that timestamp we set earlier.

[00:58:47] And then the second thing we're gonna want to do is grab the active tab, and that's just using the active tab function. This is an async await function. So we're going to have to async await it. And I'm going to add async to make this async function. So we've actually run into a problem now, we need to send the content script and message to manipulate the YouTube player to set it at the timestamp that the bookmark is placed on.

[00:59:14] So in this file, we're going to have to add that message. Let's go ahead and send a message to the content script. And this is going to follow the same pattern of how we did it with our background script. Missing comma there. We're going to have type of play. That's going to be our event type. And then the value is going to be bookmark time.

[00:59:50] And then in our content script, we're going to have to be able to read this message. So what we're going to do is add a condition to our On message listener here, and we're going to say if the type is play. Let's set the YouTube player time equal to the value that's passed in. So basically, let's just take a look at this for a second.

[01:00:20] If it's sending a message of type play, and the value is the bookmark time, then what we want to do is take that value and set it to the YouTube Players Current Time, which will make it the time of the bookmark. And let's go ahead and see if this works. I'm going to go ahead and reload my extension.

[01:00:37] And let's go ahead and go to the extension, we have a bookmark at 26 minutes, 51 seconds, it's currently at 48 minutes, 30 seconds. Let's hit that play button. It goes back to 26 minutes, 51 seconds. And now if we also hit this addition button anywhere in the video, we should get a new bookmark, we have two hours, 21 minutes, 22 seconds.

[01:01:07] Now let's go forward. Let's press play here. And it goes back to that time. Awesome. So now our Play button works. The last functionality we want to build is the ability to delete a bookmark, which will be super similar to what we did for the play button. The first thing we're going to want to do is go to our POP up.js file.

[01:01:25] And we're going to add the delete button to our controls element with the code in our add new bookmark function to set bookmark attributes. So let's go ahead and do that we're going to pass in delete our on delete event listener, and then the parent controls element.

[01:01:44] And since we set the undelete function as the event listener, we need to code some operations that are going to take care of our deletion. So we already know we're going to use this active tab that we used over here. So let's go ahead and already create this an async function ahead of time. Let's grab the user's active tab.

[01:02:13] And then what we're going to want to do is grab the timestamp attribute that we set earlier. And it's going to be the same code from up here. So I'm just going to copy and paste there we go. Then what we're going to also want to do is grab the element that we want to delete. So if you remember, I created a specific ID linked to timestamps, what we're going to want to do is grab elements by the ID so we can delete them.

[01:02:58] So bookmark. Plus the bookmark time will give us the element we want to delete. And then what we're going to do is delete that element by going to the parent node, and then removing the child which will be the element we want to delete. And then the final thing we're going to want to do here is send a message to our content script.

[01:03:26] Saying we want to perform a deletion type of delete, and then the value is going to be bookmark time. And there's one final thing we want to do here, this Send Message function from the Chrome's tabs API actually takes a callback function optionally. And we're going to pass one in which is going to be our view bookmarks function.

[01:03:51] And that's just going to refresh our bookmarks, so any deletions show up immediately, then in our content script, we're going to add another condition, which is basically you're going to ingest that Delete message. So we're going to say else if type equals Delete. The current video bookmarks will be equal to current video bookmarks.

[01:04:26] Filter, and we're going to filter by time. So the time is not equal to the value being passed in because that's a value we're deleting. And then the final thing we want to do is sync Chrome Storage. So if this page reloads, this deleted bookmark does not show up. We're going to JSON fi, error bookmarks and If that should work, the last thing we want to do is add a way to send the updated bookmarks back to our POP up.

[01:05:03] js file in order to display the most recent bookmarks, and we'll do the following. To do that, we're going to send a response of current video bookmarks. So now we can go ahead and try out deleting a bookmark with a reload of our extension, and it should start working.

[01:05:22] So I'm going to go back to our Chrome browser, reload our extension. And if we go ahead and delete a bookmark, we're gonna see that they're deleted. If we go ahead and add a bookmark, we're gonna see there's a new bookmark. It's at a different timestamp the YouTube players a different time.

[01:05:47] So if we play, it goes back to the timestamp of the bookmark. We want to delete again, it's going to delete. The last thing we're going to want to do is distribute our extension. However, I'm not going to quite go over that in this video, because Google gives great documentation that serves as a step by step guide on how to go about publishing your chrome extension to the Google web store for anyone to download.

[01:06:12] And with that, the videos over you know everything you have to do in order to create a modern web extension using manifest v3, and I'll see you next time.

---

## 3. YouTube video GGi7Brsf7js

**Source File:** `YouTube video GGi7Brsf7js (ytranscript.app).txt` | **Size:** 33.2 KB

---

YouTube video GGi7Brsf7js
https://www.youtube.com/watch?v=GGi7Brsf7js

[00:00] are you ready to use your coding skills to build something simple useful and fun that you can publish to the Chrome web store for anyone to use while this tutorial will show you how to build your very own Chrome extension we're going to be using Veet typescript and react and this is what we're going to be building this is a Chrome extension that you can click on in the top corner of your browser and it will open up this little pop-up this has a Color Picker in it and you can select a color and click this button and our extension will change the

[00:27] background color of the web page that you're on fairly simple but you'll learn a lot about Chrome extensions by building this now this video is going to be a step-by-step tutorial for building this Chrome extension and like all these tutorials on my channel we're going to take an iterative approach to building this so we're going to start small we're going to build the simplest Chrome extension possible we're going to load it up in our browser test it out and then go back to the code and add a bit more functionality then we can load that

[00:53] test it out and so on around this Loop each time the Chrome extension we build will get a little bit more complicated and you'll learn A New Concept each time we go around and this iterative approach is good for learning because there'll be lots of points in this tutorial where you have a working extension that you can play around with in your own browser you can use the chapters along the play bar of this video if you want to skip ahead to the next section and the chapters are going to look like this first we're just going to build a very

[01:20] basic Chrome extension that doesn't do anything and then we're going to add an icon and some other metadata next we're going to put a script in there that runs some JavaScript when the Chrome extension is clicked on and then we're going to add a basic pop-ups a little bit of UI and then lastly we're going to dive in and use Veet and typescripts to really build out the UI and the functionality of our Chrome extension before we get started writing code let me teach you a little bit about how Chrome extensions work

[01:48] Chrome extensions are built using JavaScript HTML and CSS so it's all the same stuff that you use to build websites and front-end web applications when you click on extension in the toolbar of chrome you often get a little pop-up that appears well that pop-up is your HTML file and just like the HTML web page the markup for that file can pull in CSS styles to control how it looks and it can run JavaScript in the context of that pop-up and what do you mean by context well this is the second thing that you need to know about Chrome

[02:17] extensions Chrome extensions run JavaScript and there's three different contexts your JavaScript can be run in and the context controls what functionality is available to that script and also what permissions you need to be allowed to run that script in the first place so the first context is the pop-up so if you have an HTML file for your Chrome extension pop-up then that has a script tag on it and that loads in some JavaScript then that JavaScript will be executed in the context of that pop-up if you try to access the Dom in that

[02:47] JavaScript it's then the document object you get back will be the Dom of the UI for that pop-up so not the web page that the user is on but the web page that's in the little pop-up View so if I have some JavaScript that changes the background color of a page and if I run that in my pop-up then it will change the background color of the pop-up so that's the first context the second context is the service worker a service worker is a Javascript file that sits outside the context of the pays that you're visiting and it lets you respond

[03:15] to events and intercept Network quests and that sort of thing you can think of a service worker a bit like a background process to your web application it sits in its own context in the background running code that's attached from the UI service workers are not exclusively a Chrome extension thing all web pages can have service workers and in Chrome extensions the service worker makes up the second separated context or execution environment of your JavaScript lastly the third context is the page that the user is looking at so using a

[03:46] Chrome extension it is possible to execute JavaScript in the context of whatever web page you've got open at the time and in a Chrome extension line these are called content scripts so when a Content script accesses the Dom it's reading the actual page that the user is browsing at the time so if you change the background color of a body node in a Content script that will actually change the background color of the web page in the browser and not the pop-up UI like it was before when you defined your Chrome extension

[04:14] you can specify which websites you want to run content scripts on and the user that installs your Chrome extension they can see those sites and they can grant your extension permission to run those content Scripts right that's how Chrome extensions execute JavaScript let's just look quickly how you can load up a Chrome extension that you've built for testing purposes yourself so if you click on the jigsaw piece in Chrome like this and go to manage extensions that will take you to this chrome slash extensions page here and

[04:45] this is where you can manage all of your Chrome extensions in one place this extensions page also gives us the option to load a Chrome extension that we've developed locally on our machine so if you use this button here called load unpacked this button lets you select a folder from your machine that contains the code for a Chrome extension and then load it up in your browser for testing now you'll be doing this at multiple points in this tutorial so I want you to be familiar with that first off before we go any further

[05:13] okay now let's start building the Chrome extension so dive into Visual Studio code and open up a new empty folder in the explore window and let's get started okay so the first step is to just create a manifest file and we're going to use that to create a very very basic Bare Bones Chrome extension in Google Chrome just to see what the Manifest file does so if I go in here and create a new file called manifest.

[05:35] json and then if you go on see internet this is called the Manifest file format page I'll put a link in the description and this tells you the schema of that manifest file in Google so you can see that the Manifest file's got a bunch of stuff you can put in it but there's actually only three properties that are required so if we add these three properties into our manifest file then we've got everything we need to create the basic most simple Chrome extension possible so go back into visual studio and we're going to put into this

[06:04] manifest file we're going to put the version version three the name of it I call it my extension and the version of the extension so this is 1.0.8 now that's actually all that we need if we go back into Chrome and go into our extensions page and do load unpacked and I'm just going to select that folder that my manifest file is in and then you can see it's actually created the extension so this my extension here this is from my manifest file that version number is again from my manifest file and if I open up the jigsaw pieces here

[06:38] you can see that my extension is in the list of extensions that are installed so it's actually created a Chrome extension for us there um just using these three lines of code in the Manifest file so that's the first iteration there you go you can have your very own Chrome extension just with three lines of code not very exciting doesn't really do anything so let's iterate on this again and put some more stuff into it if I look in this manifest file format schema you can see we've got this icons property so this icons

[07:05] property if I click on that this is going to tell us how to add an icon into our Chrome extension manifest file so we add an icons node and then we put in Keys into that Json object each one says where you can find the icon for that size we don't need all of these they're all optional so if I just go into here and I'll create the icon PNG here so I've got icon32.

[07:27] png that's just a little train to code icon now if I go into the Manifest file and add in an icons node and I'll just say the 32 pixel version is called icon32.png so save that go back into the Chrome extensions tab in Google and if I click this little refresh button here that's going to reload the Chrome extension from the Manifest file so if I do that and open up my extensions you can see that my extension now has this icon onto it so now I've got a Chrome extension with a name a version number and an icon that came from the

[08:02] local folder that the Manifest file is in great now let's add some action functionality to this so remember we talked about the three types of context that Chrome extensions can have they can have scripts that run inside the pop-up they can have content scripts that run on the page and they can have background scripts they're just running their own separate context and respond to events so I think the simplest scripts to put in here will be a background script so if I go into my manifest file and add a new node in here called background

[08:30] and I'll say I've got a service worker and it's going to be called serviceworker.js and that's going to be a type module so uh if I go and actually create that serviceworker.js so I'll create a new file and it's going to be called service dashworker.js and in there we can use the Chrome API now this is the first time we've been using the Chrome API and it's essentially a set of functions that you can call from inside one of the Chrome contexts and the way we do that is we call Chrome and then dot action then dot

[09:02] on clicked and then we're going to add an event listener to this so that means that when we click our Chrome extension in the little jigsaw tab that's going to fire this event listener here and it's going to pass in an instance of the tab that they currently had open so in here we're going to do some more Chrome stuff we're going to call Chrome dot scripting I'm going to execute a script so again this chrome dot scripting we can say what tab we want to execute it on so we're passing the ID of the tab that we had and there's a number of ways

[09:30] you can execute a script you can pass in a file to a Javascript file but what we're going to do is put it in line so we'll put in the funk property into here and we're just going to say so an alert that says hello from my extension cool so now I've got an event listener that listens to the on collect event so when you click the extension and inside that is going to do some Chrome scripting and it's going to execute a script in the context of this tab that says hello from my extension so if we go back to the Manifest files a couple of

[10:02] things we need to do the first thing we need to do is enable this actions API here if we did this now it would say that we don't know what Chrome action is so you need to go into manifest file and add a new file in here a new node in here called action and we can leave it empty for now but that basically allows us to use that chrome.

[10:17] action API the other thing we need is we're going to need a permission to run the script if you look in this service worker this is using the Chrome dot scripting API which is some functionality that Chrome extensions give you that can execute scripts and that needs special permissions so we're going to need to go back into the Manifest file and add in a permissions node so this will be an array and we're going to put an array and we're going to put in an item of scripting so that's saying our Chrome extension needs the

[10:45] permission to be able to execute Scripts we also need a node called host permissions host permissions is going to say these are the hosts or these are the URLs that our scripts can run on so if we just put HTTP and https like this then we can say that our scripts can run on any URL when it's open in Chrome so that should be enough to now run our background service worker so if we go back into the extensions Tab and I'm just going to click this reload icon here there's a problem with that I think I've missed out comma one second

[11:18] [Music] I have Mr comma up here there we go cool so I'm gonna click this reload button did you see it gave us an error though it's actually quite useful to have the error album really I sort of skipped over that but anyway so a quick reload that's reloaded it and you can see now we've got this service worker in here you can actually click on this service worker and you can get Dev tools for the service worker itself so if the service worker crashes or if you do any console logging you can see it by clicking the service worker in the

[11:46] extensions tab so that's quite nice and then what we can do is let's just go to a web page so we go to example.com which isn't a real web page but it's at least loads up in Chrome add an example.com we can open our extensions Tab and actually click on my extension and what that will do is it will fire that on clicked event handler and it will show an alert hello for my extension so this alert has happened because we clicked extension and it's done that execute script using the Chrome scripting API and it's shown that

[12:18] alert on this page here example.com so that's the second iteration of our Chrome extension we've got an icon we've got some metadata in there and we've got a script that executes when you click on it we can do this again if you want just to show you there you go hello from my extension cool right the next iteration of this is we're going to actually add a pop-up at the minute when we click on our Chrome extension it just runs some scripts but wouldn't it be nice if we actually showed like a little pop-up window to

[12:46] the user there so the way we can do that is let's first actually just take out everything from our service worker because we're not going to need that again and I'm going to create a new file called index.html and this HTML file is going to be the HTML that's shown inside the Chrome pop-up window and the way you can just boilerplate an HTML file in Visual Studio code is type exclamation mark and then enter and that will give us the basics of an HTML file so we can go ahead and give it a better name so we change this document to be

[13:17] extension title and then we're just going to put like a tag in here that just says hello cool so we've got an HTML file that's going to show as a pop-up then what we need to do is go into the Manifest file and tell the Manifest about that so in this actions object we'll say default pop-up is index.

[13:33] html so this actions object was blank before but now we've added in this default pop-up node that points to our index.html and all these files by the way are just in the root of our project here so we've got the icon the HTML file and the service worker and the Manifest so that should be enough to then show our HTML file as a pop-up so we go back into extensions and we click the reload on here reloaded and then we'll go back to example.

[14:00] com and now when I click this it will show us a pop-up there we go just says hello so that pop-up is coming from the HTML file that we've called index.html so that's quite nice each time you click on it it will open it up there we go cool so this index.html file at the minute it just has a header tag in it but I want to show you that you can actually put scripts and things inside that so what we're going to do is let's open up the index file and in here I'm just going to add a button call it my button and I say click

[14:34] me and then we're going to add a scripts tag you can't actually put inline scripts inside HTML pop-ups but you can load in script files and they'll run in the context of the pop-up so if I do a script tag in it here and just say index.js and I need to create that index.js script file so I'll just create a new file called index.

[14:53] js and in here we're going to put a function so let's just create a function that says function say hello and what that'll do is it will need to find we're going to have to call another Chrome API here we're gonna have to call chrome.tabs so if I do a new tab and then do await chrome.tabs.query and pass in active.

[15:13] true so what that's going to do is it's going to query the active tabs in your Chrome browser window and it's going to pull out the tab that's currently active so when we're browsing on example.com that'll be the tab that's got example.com in it then we can call the scripts kpi again so we call Chrome dot scripting.

[15:31] execute script and the target for this script will be that tab so we're going to pass in the tab ID of the target tab that we got from the active tabs and then just like before we'll just put a function in here that does hello from my extension finish this up and then when this script file is loaded up we're going to do some Dom stuff in it here we're just going to say document.

[15:54] getelementbyid my button add event listener click say hello so if you remember from before when we do document inside a index.html pop-up that document is going to be the document of this here so it's going to give us this Dom so what we're saying inside index.js is load up this Dom and find the button with ID my button and add a click event handler onto it the um handles the click me event and when it does that it's going to execute this function called say hello so let's uh load this back up in Chrome go to extensions Tab and just click

[16:31] reload now when we go to example domain and open up our Chrome extension you can see I've got this button on here so that's the button inside the Chrome extension we're going to click on that and it's going to execute that JavaScript which is going to say hello for my extension but this time the script has come from the index.

[16:49] html pop-up so that's quite a good Chrome extension so far this is a Chrome extension that's got a pop-up it's got some metadata and it's got a little button that just runs some script on the active tab if I had a different tab active so if I went to a different web page then it will run this script in the context of that web page and where we've just got alert here we can actually access the Dom so if we wanted to do Dom inside here with the document dot body then inside this function this document node would point

[17:21] to the document node of the page that you're on so document.body here wouldn't be the same as this document it would be the body of let's say we're on example.com it'll be the body of this page so that's kind of cool that lets you like inject stuff into the actual page that the user is browsing that's that third context that we spoke about earlier cool okay so here we have a very simple Chrome extension it's got a pop-up that shows this index HTML page and it also has a Javascript file that's loaded by the index.html page pop-up when the

[17:53] pop-up is opened the JavaScript is executing some code in the context of the active tab we also have the Manifest file that defines the properties of the Chrome extension so this is great and it works but as you build out your Chrome extension you might find that you end up with many many many of these scripts and these files and perhaps different HTML templates as well and eventually this kind of code can get a bit messy and it can become a bit unmanageable especially during development so next I'm going to

[18:21] show you how to recreate this same Chrome extension but using Veet and typescript and react Veet is a fun and build tool that makes it super easy to develop and test web applications locally and typescript is just generally all round good for Rapid stereoscope development because it gives you static type checking and it's just generally much nicer and more user-friendly than working in JavaScript so to create this Chrome extension in V we just go into the terminal in a new directory and create a new Vita application with npm create Veet at

[18:53] latest and then we could do npm one Dev here and then so if I open up this localhost file here it's localized URL then you can see this is our V application and this is just a standard V application that comes when we do npm1 create Veet at latest so we cancel that and then we're also going to do an npm run build so when you are ready to put your V application into production you run npm1 build and the build script will bundle everything up and it'll create

[19:57] you an output folder so this output file is called dis and when we create our Chrome extension it's this dist folder here that we're going to be putting into Google Chrome as that extensions folder so when we do load unpacked it's going to be this disk folder that we load unpacked so let's go into Visual Studio code right so in here we have the code for a new Vita application that was created for us and if you see here that's the disk folder so this disk folder is the one that we're going to add into Google Chrome and this is going to be our

[20:27] Chrome extension so at the minute the disk folder has just got an index HTML file and it's got an image in it we can recreate this disk folder at any time by going back into the terminal and just doing npm run build so as we're adding stuff into this V application we'll be doing npm one build we'll be creating that this folder and then we'll be loading that into Google Chrome so there's a bunch of stuff in here that isn't particularly useful for us right now but the first thing we're going to do is we're going to create a manifest

[20:58] Json so if you remember you need a manifest Json for every Chrome extension that's the one file that you absolutely need so if we go into this public folder here in V anything inside this special public folder will just be copied straight to the dist folder so this veets.svg that it came with that's being copied into this vs GG into the disk folder here so in this public folder this is where we're going to be adding our manifest Json file so we go into there and we'll create a new Json file called manifest Json and

[21:27] we'll say manifest version 3 again and the version of my Chrome extension is going to be 1.8.0 and the name will be my VTE extension so if I go in here and do npm1 build then building this is going to copy that manifest Json file just as it is into the dist folder so now we've got manifest Json in the dist folder and that's now enough to load up this Vita application as a Chrome extension using this manifest file so if we go back into the extensions tab we'll remove our previous extension and we do load unpacked and we're going

[22:02] to navigate to that dist folder and I'm going to select the dist folder as my Chrome extension and you can see now it's extension loaded and it's called My Veet extension we can open up the jigsaw and we should see that the VTE extension is in here as my VTE extension so we've actually got an extension Now using Veet doesn't do anything but again we'll get on to that in the next iteration so if we go into this manifest file and we give it a pop-up we're going to say action default pop-up is going to be index.html now that index.html is going

[22:34] to point to the HTML file that V creates for us and puts in our dist folder so that's all very good we're also going to need the scripting permissions like before and we're going to need the permissions to do the host so this means that you can run content scripts on any URL when you do this in real like for production you probably want to put real URLs in here because the extension that we're building today can work on any URL but you probably will be wanting to build extensions that only work on certain pages and your users might be a little

[23:02] bit alarmed if they install the Chrome extension that can change any web page they visit but I'm just doing this for demos purposes because it's easier Let's uh put our icon back in here as well so icon 32 is going to be in there so if I put icon 32 into this public folder then when we do an NPR V npm1 build it will copy the icon and the Manifest into the dist folder so we can try now actually let's do npm one build and as that finishes you'll see the icon appear in this disk folder there we go then we can go back into the Chrome

[23:38] extensions tab reload it uh okay I've got an error because there is a comma missing there we go reload that still not right because ah yes okay so this is one thing to know whereas previously I was just changing the Manifest and then reloading it in Chrome now because it's in this public folder I need to change the Manifest save it and then run npm run build to copy the saved version of that manifested to the output so if I do that the Manifest in the output should now have that comma I just added it back in we can go into

[24:14] extensions Tab and we can reload this and the Vita extension should now have that icon on it my VTE extension with the trains code icon we can open this up and you can see it opens a pop-up that's got the Veet app inside it this is running exactly the same way that it was running in this tab here this one this was running locally on localhost and this one is running inside a Chrome extension there we go so it's the same route application but we've bundled it inside that pop-up window we've basically told the Chrome extension to use the output

[24:46] of the V bundle as its pop-up window so that's kind of cool so let's uh make this actually do something then so if we go into Source app.tsx this is the main application and we'll change the title here to just be my extension save that and what we can do is we can replace what happens when you click this button the default Vita application just sort of increments a counter that's not very exciting so if I go in here and I change this set count to be an on click function and then I need to go and create the enclip function I'll just say

[25:18] click me and create the on click function up here inside our app component and the on click function is going to do a similar thing as we were doing before where it alerts something on the page so inside that on click we're going to call the Chrome API so we're going to let the tab equals Chrome dot tabs Dot active true now typescript doesn't actually recognize this because the Chrome API is a kind of extra package now you can access it but typescript just doesn't know about it so in order to make typescript know about this we need to go

[25:54] back into the console and we need to install a package called types forward slash Chrome so that's going to tell typescript about the Chrome API so if you do that then next time we build this Vita application we should have removed the warning about types Chrome so if we wait a little second there we go so that disappears so that now knows about this chrome API and we can have autocomplete on tabs and query and everything like that and this is another reason why typescript's awesome and why the support for typescript is growing every time

[26:26] so let's go into here and we'll do another thing we'll do Chrome dot scripting and execute script and just like we were doing before we're passing the target of the tab ID um we'll say there's gonna be a function in here this guy's just showing alert pop-up saying hello from my extension cool now let's just uh delete that unused import at the top here and then we can build this so we go into the console and we'll do npm one build again and then when we load it up in Google Chrome so I'll reload the extension here

[27:10] go into any web page and open up our Chrome extension now when I click this click me button it will fire that script and it will fire and say hello from my extension like it was doing in the previous iteration so that's happening from that on click Handler that we put inside the app.tsx component great now let's make it do something a little bit more exciting than just saying hello let's make it actually change the background color of the page so in order to do that we're going to need to uh do document dot body dot

[27:40] style and then background color and we'll just set that to Red for now so if I just build that what that's going to do is this document node here this is going to be the document node of the tab that they're currently on so if we go to example.com that'll be the document node of example.

[27:57] com once that's built which I think it has once that's built we can go into the extensions Tab and reload it and now when I click this button it should change the background color of the page to Red let's try it out there we go so that's changed the background color to Red so we're getting there this is good we're interacting with the Dom of the example tab for my right Chrome extension cool so now we want to do is make it so they can actually pick the background color using a little color pop-up so let's uh create a color constant in here

[28:37] and we're just going to do use States and we're going to store the color into a state file we'll just import you stay at the top and I'm going to create an HTML input here type is color there so I've created an input where the type is color that's the built-in HTML5 Color Picker and then when you change that it's going to call the set color function which is uh in our you state at the top here and it's going to set the color to the carbon color that you'd selected and the value is going to be the current value from our state

[29:16] okay and the only thing we need to do now is where we're setting background color to Red we need to set background color to the color that's in our state now this isn't as simple as it might seem at first there's actually going to be a little bit of complexity where we have to switch context here so let me explain what's going to go on here if we uh replace this with color that's not going to work the reason that's not going to work is because this function is executing inside the context of the tab that they're currently on and

[29:43] the rest of this code is executing in the context of the pop-up so where we're doing this color variable here that variable is being stored inside the code inside the pop-up and this document is happening inside the page and so you can't access variables from the component inside the Dom so what we're going to have to do is we're going to have to pass in this color variable when we're doing execute script so the way you can do that is we can use this args function here so we're going to pass in this color variable into the

[30:14] args of our script now typescript doesn't know about this args because it needs to be strongly tied so the way we can do that in typescript is we'll just tell it about it by putting some generic type parameters in here so we'll say that we're going to be using a string array so our arguments function is going to be a string array and then it can be whatever so our string is just going to be the color and then that should be enough to go into here and set the color so the function color will coming in here and that will

[30:43] be that color that gets passed in here so there we have it let's uh build this and try it out so I'll do an npm run build and just wait for that to build and this should create the Color Picker on the screen it should execute the script it should pass that color variable through to the context of the page and then we'll see what happens let's go refresh this so it goes back to being normal color reload or Chrome extension go to example.

[31:08] com open up our Chrome extension and you'll see that we have this Color Picker now so if I select a color on this Color Picker Let's uh let's select a nice blue sort of Bluey purple when I do this click me it's going to take that color which is the bluey purple and it's going to pass it through that execute script as an argument and it's going to set it in the background color on the page there we go it's blue let's just make this another color let's make this green and again each time we do this we're setting the color variable in our state

[31:43] inside our react component and then we're passing it through to the background color of the page so there we go we've got a Chrome extension that lets you change the background color of any page that you're on so let's just try it on different page Zone if I go to train to code.com and so should you the background color of my page now is this kind of light gray color so if I open up my Chrome extension my VTE extension and let's say I want the background color of this page to be a sort of fuchsia color when I do click me you can see it's

[32:17] changing the background color of train to code.com so you can do it on any web page you want basically it will inject the script and it will pass the background color through and it will run it on the active tab which in this case is train to cone.com and in this case it was example.com this has been a quick tutorial on building Chrome extensions but if you want to go deeper into V then check out my V course which is linked in the description below and why not watch this next video about how to run typescript

[32:42] in vs code including how to get the debugger working which is something that I know you'll find extremely useful so until next time my name is James Charles and this is train to code on YouTube [Music]

00:00:00 My name is Evan and I scaled an app called Locked to $14,000 per month in only a few months. Meet Evan. He just launched a mobile app and 4 months later it's doing $14,000 a month. But here's what makes this story different. He didn't launch with a huge audience or run paid ads. He only had one strategy and it worked from day one. The big advantage here is that it feels way more authentic. >> Most founders spend months trying to figure out how to get their first user, but Evan figured it out fast. This would

00:00:31 be my playbook if I wanted to nail starting [music] out on a new app. So, I brought him on the channel to walk through his entire playbook and in this episode we'll dive into the one growth channel that helped him grow very very fast, how he got thousands of users from a single piece of content, and the step-by-step strategy he use if he had to start over tomorrow with a brand new app. If you're thinking about building an app in 2026, this is the episode that you must watch. All right, let's dive in. I'm Pat Walls and this is Starter

00:01:04 Story. All right, real quick before we dive in. Evan is about to break down his exact distribution strategy that took his app to $14,000 a month. And this is actually something that we have studied a lot here at Starter Story. So, I put together a full playbook on how the best founders grow and market their apps. The link is right down there in the description, but I'll be talking a little bit more about that later. For now, let's get into the episode. Evan, welcome my man to the channel. Tell me about who you are, what you build, and

00:01:32 what's your story. Hey, my name is Evan and I scaled an app called Locked to $14,000 per month in only a few months. Today I'm excited to talk about the strategies in place that I'm using to scale Locked. Well, I'm excited to talk about how you grew this app to $14,000 a month and growing. It's amazing. But before we do, what is this app? What's the business model? And if you could walk through some of your dashboards and metrics to show that this thing is legit, would you be able to do that? Sure. Locked is a gamified health

00:02:02 fitness app and the whole point of it is to help our users stay on task while gamifying the whole experience. From the start of the onboarding you have to choose your character to get started. [music] There are leaderboards, motivational features, and even badges and levels to keep people on task and stay motivated. For our paywall, we charge $40 a year or $7 a week and the yearly option includes a 3-day free trial. On top of that, if they X out of this paywall or escape, it will take them to [music] a transaction

00:02:33 abandon paywall, which is basically just a discounted offer for only $20 a year. All right, well thank you for sharing that. Thanks for sharing all the numbers. How do you get to this point where you have an app that's doing over $14,000 a month? What's your background? Sure. So, I've been obsessed with entrepreneurship ever since I was a kid. At 9 years old, my friends would all play Roblox, but instead I decided to develop the Roblox games. I didn't make money from those games, but that marked the start of my journey. After that, I

00:03:00 tested a bunch of business models. Drop shipping, reselling, clipping, vending machines. They all failed until eventually my older brother Zach suggested I get into the app space. My first app was Problem Pal. It peaked at about $2,000 per month and I recently sold that. Next, I built Clear AI in a few weeks, but it didn't really go anywhere. Then a friend told me about how he was struggling to stay on task and motivated. So, that sparked an idea. I didn't want another boring habit tracker, so I gamified the whole

00:03:30 experience with leaderboards, XP, badges, and even characters. So, let's dive into that a little bit. Can you just walk me through how did you build it and how long did it take? Our designs took us about 2 weeks. We went in a Figma file, did everything from scratch, and once that was done, we began transferring it over to Xcode. To do this, we used YouTube tutorials, some of our own knowledge, and also of course we used Cloud Code to help us. From start to finish, idea to live in the App Store, it took about a month and a half.

00:04:00 A month and a half to build an app is amazing. That's I guess how things are going these days. What I wanted to bring you on is to talk about growth. You grew it to over 14,000 per month in revenue. How did you do that? What was the growth strategy or tactic and how did you get all these users? Yeah, sure. I partner with influencers to promote my app. Going into this channel, I realized my RPM was around 2 to 3 dollars, so I knew I had to close creators at a CPM lower than that. Typically, it would be between the dollar and dollar 50 range.

00:04:32 The big advantage here is that most influencers already have trust with their audience. When they recommend an app, it feels way more authentic than a traditional ad, which usually leads to much stronger results. Would you be able to like show me one of the influencers you worked with and the type of content that was created and share how much revenue and installs this content led to? So, here if we click on Jeremiah's video, which was basically explaining how to stay locked in and on task. [music] Right here, he shows app within

00:05:00 the first 15 seconds. That's always something that you should require influencers to do. This piece of content worked for multiple [music] reasons. Number one, Jeremiah Jones has great engagement and his videos are filled with high quality comments. That's how I know he has an amazing audience, which is arguably the most important factor. Number two, his content focuses on staying locked in and on task, which perfectly aligns with Locked. Number three, it was a seamless integration with the app. It made sense to add it

00:05:28 and it fit in perfectly. Could you share like any of the numbers? Like just give a sense of how many views did this piece of content get? And like how many installs did it lead to or revenue impact? I think [music] the audience would be curious about how this actually leads to installs and revenue. You can see that he posted the video right around February 6th, which is when we had a huge spike. As you can see, we were doing about $300 a day and then just spiked up $728, $600, $700, $678, $600, even almost $1,000. So, I would

00:06:01 say across this video probably generated around $3,000 and about 1,800 downloads at approximately 1 million views across all platforms. [music] We pay them something like $800 with a 600,000 minimum view clause. And if they hit the minimum view clause, awesome, they're done and we can move on to an even bigger deal considering that it converted. But if not, they have the option to post a few more videos, hit that MVC, and still get paid [music] out. >> What Evan is showing us right now is that distribution is everything. He

00:06:30 figured out how to work with influencers and this is one of the strategies I'm seeing [music] work over and over and over. Organic short form on TikTok, Instagram, and YouTube Shorts. If you watch this channel, you'll notice that many of the founders we bring on [music] have talked at length about this exact strategy. That's why we put together the organic short form playbook inside [music] Starter Story Build. It is a step-by-step system for finding viral ideas, reverse engineering what's working on short form, and getting

00:06:58 millions of views on your app. [music] We break down the exact content formats that make money and we give you real-world examples you can try for free with your app. [music] If you want to get this resource right now, just head to the first link in the description to grab it. It is 100% free. I'm excited to see you all put this into action. >> [music] >> All right, let's get back to the episode. Okay, cool. I mean, thanks for showing that example. If you were to start over with a new app right now, how would you get started right now in 2026?

00:07:24 What would be your step-by-step to find influencers, book them, and make sure that they lead to actual sales and revenue for your app? For the first step, you have to find creators in your niche. You look up something related to your niche on Instagram or TikTok. Then you scroll through the videos, click on their accounts, and send each creator the same message every time. Which should always start with paid promo, question mark. The second step is getting them on a call. Step three, you want to close them on a profitable deal.

00:07:51 So, once you have them on a call, keep in mind that you need to close them on a profitable deal. This is achieved by closing them on a CPM lower than your RPM. Step number four is structuring the deal. Now that you have them on a call, you should offer them one of four deals. First deal is a flat rate where you pay them $500 for a reel or $1,200 for four [music] reels. You should only use this deal when working with creators that consistently get a lot of views and are confident that they'll be able to match

00:08:18 your target CPM without a minimum view clause or something of that nature. The second deal is a CPM deal where you offer a dollar per every thousand views or two dollars for every thousand views. >> [music] >> And you should always have a cap. For example, if the creator were to get 10 million views, but your cap was $500, [music] then you only have to pay them $500. The third deal is a minimum view clause deal where you offer something like $500 with a 500,000 minimum view clause. This is the deal I almost always

00:08:48 go with and it helps keep the CPM under your RPM. The fourth and final deal is a bonus deal where you say, "Look, we'll pay you $500 for a video and if it gets a million views, then we'll pay you an additional $500." And then the fifth and final step is of course launching the partnership. Next, you want to send them the video requirements and a contract and give them [music] a 1-week deadline to get the first video out. If they perform well and generate a lot of revenue, then keep working with them. Okay, cool. Influencer playbook, that

00:09:16 was amazing. Thank you for sharing all that. Would you be able to give me a demo of this app? How does it work? What does it do? Yeah, when you enter the app, you are on the main screen. Of course, you have your level, your XP, and you can scroll through, add custom tasks. We also give users some basic tasks to start. Check one off, you get 100 XP. Then you have all the different levels along with your progress on one tab. You have every single user on here, all time ranking, last 7 days, and [music] today's rankings. And of course, your

00:09:46 profile and finally a motivational screen where where you're basically just getting yelled at by Jeremiah. Thanks for sharing that. Super cool app. Let's talk about tech stack. What is this app built on? How do you do development? What comprises this app that's doing $14,000 a month? Sure. So, of course, first [music] for designing, we use Figma. Second, we use Cloud Code to help us out with development. We use the $200 a month subscription. Then, there is Superwall, which helps you AB test your paywalls. That takes 1% of your

00:10:26 earnings. And finally, there is Superbase for our database, which is, again, free. Thanks for sharing. Last question that we ask all founders who come on Starter Story, what would be your advice to younger Evan, or to anyone watching this who are inspired by what you do? Sure. I would tell myself to worry less about school and put more time into building my business. From a young age, you were sci-op'd into thinking there's only one path. Go to school, get good grades, go to a good college, then get a stable job, and

00:10:55 you'll be happy. Most people are very hive-minded and follow that [music] path without even questioning it. If you can see through that early, you gain a huge advantage. Well, thanks. That's great advice, Evan. Congratulations to what you built, especially at such a young age and still in school, crushing it. I can't imagine where it's going to be even in even a couple months or a couple years. So, thanks for coming on, sharing all this. And uh we'll hope to have you back on the channel when you're at 100K a month.

00:11:22 Yeah, thank you so much. >> Producer Gus, what do you think about this one? What I thought was cool was like how simple the app is. Gamify, you know, XP, like totally matches probably a demographic that I like just don't [music] know. He's this young kid who knows what he likes or what his friends like. So simple. Like stupidly simple. Yeah. It's funny cuz we had a few habit trackers on the channel that are actually crushing it. I sometimes am skeptical of doing that as a business idea because it's, you know, there's so

00:11:52 many of them. What I think is a little secret on habit trackers is iOS. Like a cool app that will do well on social media, or [music] a habit tracker like Sebastian's that we had chatted with a few months ago, uh that ranks well in ASO, so in iOS uh App Store optimization. Yeah, and then the other thing, obviously, is what he said at the end. He's like, We're we're we're sci-op'd into like just going to school and stuff. >> [laughter] >> I thought that was awesome. And I just love that that that that's his point of

00:12:23 view. Yeah. [music] I think some people may watch this and, you know, sometimes when you see someone who's young doing so well, it can be like a little bit form of like, "Oh, like I'm not far [music] enough along." When we were kids, we didn't have access. There wasn't even a way to build a business like this before. This is just how the world has changed. Now, you don't need you don't need permission to build anything anymore. You can open up a vibe coding tool, and you can build a business. You can put it out on the

00:12:47 World Wide Web, and anyone >> [music] >> can subscribe to it. So, you know, we had chatted with him. Yeah, he is young, but he let us know that he had been starting businesses for years. Right? He's years into the game, and it may feel like, "Oh, he's so young." But actually, he told us about all the different business ideas that he tried that failed. Thank you guys for watching this episode. I hope you enjoyed it. If you want to start an iPhone app or an iOS app like Evan did, I'll put a link in the description where you can learn

00:13:13 how to do that, how to go from an idea to a shipped app. That'll be right down there in the description. Get started. It's all free. All right, guys. Thank you guys for watching. We'll see you in the next one. Peace.
