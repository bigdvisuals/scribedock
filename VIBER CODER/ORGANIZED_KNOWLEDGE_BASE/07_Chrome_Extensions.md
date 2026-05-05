# Chrome Extensions

> **Category Description:** Complete Chrome extension development tutorials from beginner to advanced. Covers building with vanilla JS, React + Vite + TypeScript, monetization strategies, and real case studies of profitable extensions.

---

## Table of Contents

- 1. Build a Chrome Extension in 60 seconds
- 2. Create Your First Chrome Extension (That Adds This Button to LinkedIn)
- 3. How I Built It - $20K - Month Chrome Extension
- 4. How to Build a Chrome Extension from scratch using Vite, React and TypeScript
- 5. How to Create Your Chrome Extension Using AI
- 6. YouTube video 8q1 NkDbfzE
- 7. YouTube video B8Ihv3xsWYs
- 8. YouTube video cdLNzQEKlC8
- 9. YouTube video f2mGqlLLqok
- 10. YouTube video fK bm84N7bs
- 11. YouTube video qvlYdw2Gj14
- 12. YouTube video wpGhIoGiDok


---

## 1. Build a Chrome Extension in 60 seconds

**Source File:** `Build a Chrome Extension in 60 seconds (ytranscript.app).txt` | **Size:** 1.3 KB

---

Build a Chrome Extension in 60 seconds
https://www.youtube.com/watch?v=Zt_6UXvoKHM

[00:00] let's build a Chrome extension in 60 seconds here's a quick demo of what we're about to build it replaces all the images on the YouTube homepage with images of Bob Ross first we need a manifest.json file to give Chrome some information like the name of the extension the version telling it to match only on youtube.

[00:18] com and specifying that the Javascript file we're using is called content.js we then create content.js and Define an array of six Bob Ross image links we then grab all of the image elements on the current page that we're on in the browser we iterate through them and we replace every one of them with a random image from our Bob Ross array and that's the end of our Chrome extension let's load this extension into Google Chrome to test it out navigate to Chrome colon double slash extensions select developer mode

[00:51] at the top right hit load unpacked and click the folder that contains your Chrome extension when I click select and we can see it shows up here with the version number the name and it's enabled by default so now let's navigate to youtube.com and watch the magic unfold congratulations you're now a Chrome extension developer add it to your resume


---

## 2. Create Your First Chrome Extension (That Adds This Button to LinkedIn)

**Source File:** `Create Your First Chrome Extension (That Adds This Button to LinkedIn) (ytranscript.app).txt` | **Size:** 8.5 KB

---

Create Your First Chrome Extension (That Adds This Button to LinkedIn)
https://www.youtube.com/watch?v=68khBWxVP3g

[00:00] I have programmed an additional button for my LinkedIn and in this video I explain you what this button can do and how you can do something like this too I have a LinkedIn profile wow but I don't really feel like making superficial small talk with people commenting on other people's posts and so on that's why I thought there is AI for this kind of stuff AI can help me write some blah blah blah to interact with people great but of course I don't want to go on LinkedIn and copy people's posts into jet gbt and ask chat

[00:30] gbt if it can write me a reply and then copy that reply back no I want to automate that and that's why I created a small Chrome extension which adds this button it reads the post and the author and suggests a great reply and because something like this is super useful but also super simple I wanted to show you in this video how to write a browser extension for Chrome and Edge that can do something like this or other great things it's really quick and really fun and you only need a little JavaScript in HTML knowledge here we go

[01:00] to write a Chrome extension you first need a manifest file we stick to the Manifest version 3 standard and assign a name for the extension linked I don't know what to reply AI now there are different types of browser extensions for example you can read or manipulate Network traffic you can display things in the browser sidebar or manipulate the current page this is what we going to do and this is then a so-called content script that we inject into the respective website we specify matches in other words just which page it should be

[01:33] injected into and then the name of the file we want to execute and we now create this file content.js and simply write alert hello world in it we can now test our little extension to do this go to your extension settings in Chrome or Edge there you have to activate the developer mode then you can click on the load unpacked button and here you simply select the folder with the Manifest and the script files and if you now go to LinkedIn the alert appears great hello world works we now write the proper code in our content.js file we want to insert a

[02:08] button in the comment boxes at first you will think that you could simply access all comment boxes with document get Elements by class name they have the class comments comment text editor and then we simply change the background color in the first thing however this doesn't quite work LinkedIn is like many other web apps the HTML is not sent completely from the server to the Cent but only the basic layout and the individual posts are then loaded afterwards dynamically this means that the page can always change and we have

[02:38] to react to these changes and perform our D manipulations if necessary when there are new comment boxes and you can use a mutation Observer to observe such changes on the page this is very easy with new mutation Observer and then we observe changes to the entire document body and we set the settings subtree and childless to true and that should already work we reload the extension and we can see that it works even for new posts that I loaded later that was easy but now we really want to create a button to do this we create a

[03:13] function at suggestion button in which we create a button element give it a label test and create an event listener that reacts to clicks on a click we retrieve a suggestion we first hardcode this and set hello world and then add the suggestion to the ql editor class which is the mble comment field we do two things in our Observer as soon as the comment box has been modified by us we set a corresponding attribute so that we don't change it more often this means that we also filter for elements that do not have this attribute and then we call

[03:44] at suggestion box for the comment box and let's have a look that looks good after click the content of our comment is updated and in the next step we will use the open AI API to be able to use the open myi API you will of course need an openi account you will also need to charge your account but a few bucks are enough and I would really recommend it it's worth it it's a lot of fun to play around with it when you're ready open the open AI playground this is the easiest way to test which prompt works best for your

[04:14] case we take the latest model gbt 40 and write a general system introduction that is always the same you are an assistant that writes replies to LinkedIn post to other persons use the same language as of the text of the post you are receiving in the user prompt please sound like like a human being don't use hashtags use emojis occasionally don't repeat too many of the exact words but simply create a brief and positive reply maybe add something to the discussion be creative you may mention the name of the author if it's the name of a natural

[04:43] person don't mention a name if it's the name of a company or a LinkedIn group you can of course try out all sorts of things here but this prompt worked quite well for me we also set top P to 0.7 and frequency penalty and presence penalty to two of course you can also play around of these settings here in short these setting were good for me so that the answers sound a little different and not too many words were repeated let's try it out with this post by Eddie Osmani we copy the text and in the playground we write please write a reply

[05:13] to this post by Eddie and paste the text and we receive a reply absolutely Eddie understanding the why behind a strategy is crucial blah blah blah and even a smile in the end great that works we now want to use these settings to call the API from our extension you can display code examples directly in the playground for the sake of Simplicity however we will only copy the request body and we won't use the open myi Library which they provide in our script we write a fetch suggestion function that runs asynchronously and is passed a prompt we

[05:46] create a string API key then we get the response via fetch the URL here is um that of open mayi it is a post request and on the body we create a Chason from the request that we still have in the clipboard instead of the prompt we pass the variable prompt here then we set two headers content type is application Jason and authorization isper and our API key you can create an API key in the playground in the API key section we assign a name and select the default project we then copy the key into our code example finally we return the first

[06:20] element of the response from the choices array and then message content and trim that by the way you can find the code for this project even slightly enhanced in a link in the video description and if you don't want to program the extension yourself you can also install it from the Chrome extension store I published it there I've also linked to this but here too you will need an API key from open AI to actually use it now just two more things and then we're done first we need a function that creates the right prompt for us that means it

[06:47] parses the HTML of the LinkedIn post we could also use the LinkedIn API to fetch the post content but that would require another API key it seems simpler to me to just parse the browser's content we call this function create prompt we pass in the respective comment box and here we first want to capture the entire HTML of the post we do this using closest and a class featured update V2 in some cases it's also reusable search uncore uncore result container unfortunately not very descriptive CSS classes from this post

[07:15] element we can then extract the author's name using the right selector and we can also extract the actual text of the post the function simply returns please write a reply to this post by author text and now we just need to bring everything together in our add suggestion button method we actually call fetch suggestion and pass in the result of create prompt as the prompt additionally I'll modify the button and insert a suitable SVG to make it look nicer and let's go to the browser after reload it should work yeah

[07:46] we have a nice button and after a click we get a reply suggestion awesome that's it for this tutorial as mentioned you can find the code linked below it's even more detailed there as I also pars responses to post and not only the post itself feel free to give me feedback on whether you like the video I'd also really appreciate a like or a subscription as it helps me a lot in making such videos thank you see you next time


---

## 3. How I Built It - $20K - Month Chrome Extension

**Source File:** `How I Built It - $20K - Month Chrome Extension (ytranscript.app).txt` | **Size:** 12.3 KB

---

How I Built It: $20K/Month Chrome Extension
https://www.youtube.com/watch?v=ty9ZcimL6VE

[00:00] learned how to build an extension and launched my first extension within like two or three days and today it's at about like 20 to $330,000 Mr how does one guy make over $20,000 a month with a simple browser extension well it's because he's building in the hottest niche in business right now ai s aadi started his journey as an employee working for almost a decade in Corporate America in different startups but now he's a solopreneur making a pretty good living while working on a side project he's passionate about so I spent over an

[00:38] hour talking to him and getting the complete scoop on his $20,000 a month AI business turns out it's actually pretty simple and it's not as saturated as you might think there's still plenty of opportunity you just need to know where to look in this video s shares a master class on building in AI where to find good ideas where to build those ideas and some unique ways to monetize those ideas even if you're a beginner all right let's get into it I'm Pat walls and this is starter story welcome s it's great to have you

[01:16] tell me about who you are in this business that you built my name is s um I'm a software engineer chat GPT extension that I built it's called super power chat GPT it's a browser extension basically that adds a bunch bunch of extra feature to chat PT I started this about a year and a half ago and today it's at about like 20 to $30,000 mrr I'm the only person who's been working on the extension it has been downloaded close to like I think 260 70,000 times weekly active users for the extension is around like 150,000 okay so you built a Chrome

[01:57] extension to over $220,000 a month what do you think is the best strategy for someone to do something similar two ways I'm thinking about this either building for an existing really big platform like Gmail for example or like Roblox Facebook YouTube Twitter they already have all these users all you need to do is to just build the extension and those users will find you Twitter had like hundreds of millions of users and if only like 2,000 people want that features that's like a good amount of like revenue for you to just live off of

[02:32] the other thing I recommend is going after platforms that have like an existing Marketplace but a smaller user base Zoom or Salesforce it's a lot easier to compete in a Marketplace like that they have less number of users but at the same time they have less number of people building for those platforms so that's another good place to build some product let's talk about the opportunity of building plugins in marketplaces what makes this better than launching a traditional SAS that has its own website most people when they want

[03:07] to start a project they just thinking about some s of like a standalone platform like a website that has all of its own back end and front end and everything but competing with like everyone on the Internet is a lot harder than competing with like a limited number of players in a smaller like Marketplace and it also helps a lot with validating the the product like it's a lot easier to build like a simple extension that runs on a user browser that way you can at least know if the idea is going to work out or not and if

[03:37] it's worth like spending more time on it got it so building for an existing Marketplace is a lot faster it's less crowded and it's a lot easier to validate your idea can you tell us how to actually come up with an idea for a Marketplace platform when Chad GPT was launched I already had some idea what features missing and initially when I was building the features I was mainly building the extension for myself and later I tried to go find the places that my users will hang out subreddits are one of them Discord channels are other

[04:11] one SL groups is another one Facebook group is another one I just like join all these groups and I started listening to people and trying to figure out what features other people want to see in chat GPT I think this is probably one of the best way to like come up with idea just go where your potential customers hanging out and see what they are asking for and just try to build that and this was actually one of my probably biggest like growth um hack that I apply to this extension just listening to people what

[04:44] they want trying to implement the feature and then going back and telling them that okay I added this feature you can use this extension and have that feature as part of the chat GPT interface s is the perfect example of a crafty internet Builder he finds his ideas by spending time researching researching in communities researching through his own problems and frustrations and most importantly researching other businesses to see if he could build something better now what if there was an easier way to shortcut

[05:15] all of this research well that's why we made this solo developer Deep dive it breaks down 50 different solo developer business ideas including their business models their customer profiles the platform they built on and a whole bunch of other cool stuff you'd want to know so if you're actually serious about building a profitable side project like sayah head to the first link in the description and I'm going to give you the Deep dive of 50 developer ideas for free and hopefully it helps you find your own idea now let's get back to S

[05:49] okay so we know where to build and what to build but what about how to build it what kind of experiences or coding languages do you need to learn if you know how to build a simple website you'll know how to build like an extension JavaScript HTML CSS that's how I built the very first version it was very very simple only had like two features basically but actually I have never built any browser extension before I learned how to build an extension and launched my first extension within like two or 3 days basically after chat GPT

[06:23] was launched so I'm not saying like every like simple project could work timing is really important here I bu really really early okay so you can find build and launch a product pretty quickly but how do you actually get users or eyeballs on your product I have not done any ads or anything for the extension and all of it happened organically by word of mouth or by me like posting on like different platform like I think the very first place that I posted it was UN Reddit I think it went like to the top of that subreddit that I

[06:58] posted for that day but at the same time like just people who like are on social media started writing reviews about like top like 10 chat GPT extension for example and my extension had those features basically so I didn't write them I didn't pay for them to be written I've never like actually paid anyone to write any article and it was all organic people started finding it started using it they like the idea they like the features and started sharing those ideas with their audience and that helped a lot with growing the um user base wow so

[07:33] you didn't spend any money on marketing yeah clearly being early helped a lot but I think what stands out is that people basically started marketing your plug-in for you because you built a really great product are there any other early opportunities that someone watching this could take advantage of right now and how can you build standout products in those niches AI is really powerful but it's still very early in doctors maybe are not thinking about bringing AI into their job but if you do there are a lot of like opportunities

[08:05] there one of my favorite thing is to talk to my users and every time I talk to any users I try to learn as much as I can about them what they do what's their background and how they use Chad GPT learning about how a lawyer is using Chad GPT to make their job easier or a doctor is using trpt to make their job easier is one of the best way to come up with new ideas and build new product for people who don't directly use AI okay let's talk about monetization we know how to build it and how to get users but how did you actually make your first

[08:41] dollar first for the first 9 months or so the extension was completely free like every feature of the extension was 100% free if you ask me today um I think I should have like monetized the extension earlier but at the same time I do feel like it helped a lot with like growing my user base so I wanted to capture that audience and I started writing a newsletter basically for like the the user base that I had and this is like three or 4 months after I started the extension I also posted my newsletter on some of the website that

[09:15] like you can get a sponsors for I like within like week or two I had like a my first sponsor paying me like a few hundred dollar to just poster ad on the newsletter basically when I first started writing the newsletter it would take me like maybe six or 7 hours every day now it takes like maybe 2 hours or so to write a newsletter wow so you took a pretty unconventional route and started making money from the newsletter first but how did you monetize the actual Chrome extension after like that like first 9 or 10 months I started to

[09:49] think about new features that I can add to the extension and ask people to pay for those extra features basically so I didn't ask anyone to pay for any existing features that the extension had and all of those features stayed free and I tried like different pricing like I experimented like higher price lower price and I like kind of found like a midle grounder that I think was the best way to price the extension so what are the coding languages tools and software you use to build as a solar preneur I spend most of my time inside vs code

[10:23] it's a code editor um that's where I write all of my code for all of my projects when I was bu building the extension I went back to like pure JavaScript with no Frameworks I used AWS uh for all of my backends all of my project basically live on like AWS for like the newsletter I use beehive one of the nice thing about beehive is like their monetization features they actually they have this thing called boost you can just like include some links in your newsletter and make money from it I use passion fruit that's where

[10:58] people find me and reach out to me to a sponsor the newsletter all right before we wrap things up I want to talk a bit about a controversial Topic in the AI space you know you built this product to over $20,000 a month but it's a chat gbt rapper right is there any downside to this and do you worry about this at all open AI can kill this product any day I was scared of that for a very long time and at this point I kind of feel numb to it I don't want to like worry about it today literally if my extension stopped

[11:32] working at some point I'm probably going to try and build other extension for one of these other major platforms that's going to make my my life a lot harder all right s final question what advice would you have to someone just starting out who wants to build their own software business or Plugin inside of a Marketplace try to validate the project as fast as you can just build the very first version and launch it and see if you get some users from it try to do that and the other thing I mentioned this earlier focus on your strength in

[12:04] my case it was building a product sharing it with people for free and like getting my first fewe users from that so those two things are the most important thing in my opinion yo guys I really hope you enjoyed the video and got some hopefully good tips and golden nuggets from s but I want to say something real quick at the end of the day the point of these videos is to show you ideas and show you it's possible but hopefully you take these ideas and go start your own profitable thing and your own successful business while learning this stuff is

[12:38] important taking action is the thing that's actually going to change your life so spend time researching learning finding ideas but then go build that thing as fast as you can if you're still feeling a little lost on this right now well click the first link in the description and you're going to get a free report of solo developer ideas that are actually making money right now so you can get going on your thing much love and I'll see you guys in the next one peace [Music]


---

## 4. How to Build a Chrome Extension from scratch using Vite, React and TypeScript

**Source File:** `How to Build a Chrome Extension from scratch using Vite, React and TypeScript (ytranscript.app).txt` | **Size:** 12.1 KB

---

How to Build a Chrome Extension from scratch using Vite, React and TypeScript
https://www.youtube.com/watch?v=iBL-vYXk9sc

[00:07] Hey everyone, welcome to my first video where I'll be showing you how to create a new Chrome extension project from scratch using Vit, React, and TypeScript. This tutorial is suitable for beginners with some webdev experience, but also for more experienced developers looking to hit the ground running with an idea.

[00:22] This video is based on a Medium blog article that I wrote and published. So, if you're interested in getting the code snippets quickly, then you can head over there. I also have a GitHub repo with this template project as well. You'll find the links to both of these resources in the description. We're going to build a new project using V that has React and TypeScript ready to go out of the box.

[00:46] We're going to modify the project to be recognized as an extension using a manifest file. We're going to create a pop-up extension. We're going to create a side panel extension. We're going to implement hotkeys to control the opening behavior without mouse clicks. We're going to do two types of scripting.

[01:04] We're going to use a background service worker for extension events and content scripts for DOM manipulation from the extension itself. We're going to create a page scoped context menu extension. We're going to create a selection scoped context menu extension. Although this guide will show you how to set up a working project complete with pop-up side panel and context menu examples, this is not intended to show you how to fully develop an idea from scratch.

[01:29] That is up to you. Also, I hit a few gotchas along the way which took time for me to figure out fixes for. I've included them here so it will be a smoother experience for you. Cool. So, let's get started. With V, you build your project with a single command and sequentially select some project options similar to other tools you may have used before. Open a terminal.

[01:53] Navigate to the folder that will serve as the root of your project and run mpm create v at latest. Name your project. Select react. Select typescript. So CD into Chrome extension template and then run mpm install followed by mpm rundev to run the project for the first time. This will start the process of creating your project with the options that we want and it will all just work out of the box leaving us to get on with the creative stuff.

[02:34] Navigate to localhost 5173 in your browser. And there we go. As simple as that. Our project is already operational and has Typescript fully integrated. Another script that comes with V which will be fundamental to this project and what we will be using going forwards is the build script. Simply run mpm run build.

[02:54] Notice that a new folder named dist has been created in the project hierarchy. This folder contains the built code that is now readable by browsers. This means that all React and TypeScript code that we write will be transpiled to HTML and JavaScript. It also means that any assets or files including styling in the public folder will additionally be sent to the disc folder.

[03:16] This last part is important to us right now as the public folder is where we need our manifest JSON file to live. More on that in the next section. The manifest JSON file is critical for all browsers to recognize that a given project is compatible as an extension. It is also where the config lives and APIs required by the browser are listed to function properly.

[03:38] This is the first thing we need to introduce to progress. In the project's public folder, add a new file and name it manifest.json. In this file, add the following code. The naming convention for nodes in this file is in snake case. They must be named precisely. These first three parameters are straightforward.

[04:13] The version and name can be whatever you want. Your preferred version numbering convention can be used and the name of your extension will be unique to your project. The manifest version, however, needs to be three. At the time of recording, this is the most recent version of the manifest file used throughout the web, regardless of browser.

[04:32] It allows Chrome to distinguish which APIs can be used. Save and build. Then in Chrome, open a tab and go to Chrome extensions. This will direct you to the Chrome extensions dashboard. If this is your first time, then you'll have to switch developer mode on. Doing so will display some options for uploading, but notably the load unpacked button.

[04:54] Press this now to show a file explorer. Navigate to the disc folder and press select. You should now see a new addition to the extensions dashboard displaying the name and version number from the manifest file. From here, you can navigate to the extensions menu. The project title is within the list.

[05:10] It's a good idea to pin it for easy access during development as well. Now, select it and you'll see your extension come to life. Okay, so gotcha number one. If you see a popup with errors appear at this stage instead of your extension, then go back over your previous steps and make sure that you have named things exactly as I have.

[05:28] Check that the manifest JSON file is in the public folder and check that you have run mpm run build after making any changes. The side panel is a feature within Chrome that allows for a more persistent user experience. The user can interact with your extension to one side regardless of any clicks within any existing or new tabs.

[05:53] First, we need to make some further amendments to the manifest file. Here we have added the side panel key which like the default pop-up previously references the index html page. We have also added permissions which are an array of string values that relate to the Chrome API. They allow us access to different functionalities based on what we want.

[06:16] For the side panel, we only need the side panel permission. Finally, we have added the host permissions. This is currently set so that our extension will work on any HTTP or HTTPS web page online. You should now be able to interact with the current page and open or swap to different tabs without the side panel closing.

[07:02] You can close it, however, by clicking the small close button in the top right corner of the panel. Okay, gotcha 2. If you've looked in app tsx, you may have noticed VS Code seems to be unhappy with the syntax showing some red squiggly lines. This is really annoying, but this is how you get rid of them. Open the tconfig app JSON file and replace the module resolution value of bundler on line 11 with node.

[07:24] And just like that, the red lines disappear. It may take a second or so for VS Code to catch up, so be patient. Next, let's look at how we can add our own React markup to the project. Head over to app tsx within the source folder. You'll find the V landing page code here. So, let's get rid of it and replace it with something of our own.

[08:12] save build and reload. In the terminal, run mpm install types chrome-d. If you look at the package json file, you will notice that this command has added an entry within the dev dependencies object. A dev dependency is just that, something that we wish to use as part of our development environment, but not as part of production code.

[08:54] Next, create a new folder within source and call it background. Inside this folder, add a new file called index.ts. Add the following to this file. The background script has no idea of the DOM within the viewport. It is only aware of the extension. Then in the V config, add the following to build rollup options input.

[09:59] Finally, in manifest JSON, add the following. Save, build, and reload the extension. You'll now see some more information appear in the extension tile. There's a new service worker link and if you click it, a dev tools window will appear. Navigate to console and see the output from the background script displayed.

[10:57] It is worth spending some time going through the documentation for the commands API, but some quick points that took me some time to discover are to attach a hotkey command to the pop-up, you must have the execute action object in place. You do not need to deal with any listener events in the background. This is not true, however, for the side panel.

[11:15] The naming convention for the key names is in Pascal case and separated with a plus. It must be written exactly as I have or within the documentation. Pay attention to rules around specific keys for Windows, Mac, and Chromebook. Commands must include control or alt, but not control and alt. If you attempt to use a combination which is already used for something else, such as controls or commands, then your combination will never work.

[11:42] Common hotkey combinations will take precedence over anything that we're doing here. It'll be of little surprise at this point we have to add more to the manifest file to get started. So add the following We also need to add a listener to the

[13:04] background script for the side panel to respond. So in source background index.ts add the following. We can utilize this for creating our hotkey command functionality by setting up a listener in the background. It can listen out for the commands that we

[14:08] decide and upon receiving their input open the extension. Save, build, and reload. Then give commandshift O on a Mac or control shift O on Windows a try. Remember, you can open the console for the service worker log output, too. Okay, a really small one. When adding URL strings to the matches array in the manifest file, make sure that each URL is suffixed by a forward slash.

[14:55] Otherwise, you will always throw an error when reloading the extension in the extensions dashboard. All the code we have created up until now has been within the scope of the extension itself. But what if we want to add the ability for our extension to interact with the given DOM within the currently opened tabs page in manifest JSON? Add the following.

[15:51] Also scripting must be added to the permissions array in the V config. Within build rollup options input, add the following. Now create a new folder within source called content. Then add a new file called index.ts. This script is scoped to the DOM of the current page. Within the manifest JSON setup, I have scoped it to only work on my website, but you can have it configured to work on anything you like.

[16:52] I'm creating an H1 element, turning it red. and appending it to the HTML body.

[18:08] Save, build, reload. Then navigate to the configured URL. Another type of extension that you can create is triggered by the user from a right-click context menu. In the manifest file, make sure the context menus is added to the permissions array. Then, inside of your background service worker, add the following code.

[20:19] within the Chrome runtime event listener. After the console log, we use the context menus API to create two new objects which themselves are used in different contexts. The first object is a menu item which will trigger when the user right clicks anywhere on the current page. The second will trigger if the user selects a word on the page and right clicks with it selected.

[21:48] Save build and reload. When the page is right clicked anywhere, notice the page option is displayed. Conversely, when a single word is selected on the page, notice the selection option is displayed. And remember that you can see the output of these selections in the service worker console. And that brings us to the end of this tutorial, but the beginning of your journey.

[22:26] From here, I recommend visiting the Chrome extension API docs for many more details to build out your ideas. I'll leave the link in the description. Thank you so much for watching my first video. I've added my website in the description where you'll find the links to my socials as well as my other blog articles.

[22:43] I have many things coming up in the near future as well, including Chrome extensions that I'm building and releasing myself. So, please like, subscribe, and let me know in the comments if you enjoyed this first video. Have a great day wherever you are, and I'll see you again soon. Bye.


---

## 5. How to Create Your Chrome Extension Using AI

**Source File:** `How to Create Your Chrome Extension Using AI (ytranscript.app).txt` | **Size:** 6.5 KB

---

How to Create Your Chrome Extension Using AI
https://www.youtube.com/watch?v=W-7h6XHXecA

[00:00] hi guys have ever wanted to create your own Chrome extension but didn't know where to start imagine being able to add new features to your browser and get things done quicker by creating Your Own Chrome extension you can take control of your browser and make it work the way you want in this video I'm going to show you how you can use CH GPT to create a fully functioning Chrome extension and whether you're a beginner or have some coding experience this tutorial will guide you through the process step by step so I'm brand from Learners and

[00:29] let's get started [Music] first let's talk about what a Chrome extension is and why you might want to create one a Chrome extension is a small software program that customizes your browsing experience in the Google Chrome web browser it can add new features modify web pages or perform action based on certain events okay we're going to create a Chrome extension in just two steps the first step is to create the files needed for the extension and we're going to use CH GPT to create the files for our extension and with these files

[01:01] we can launch the extension on the Chrome browser so to create the files needed for our extension let's go to chat GPD I'm switching to GPD 4 which has a feature to create files in just one click okay now we need to enter prompt to create our files I've already prepared a prompt to get all the files in just one click you can just copy the prompt from the description below and and then paste it here so here enter what your extension is about and how it should work I want to create a YouTube bookmark extension and with this extension whenever I watch

[01:42] a YouTube video I want to be able to bookmark it or save any specific point and later if I open it I want the video to play from that specific point that I had saved so I'm going to enter all the explanation here and make sure to clearly describe all the features you need and how it should work now here give a name for your extension and once you've typed in the prompt just press enter and there you go CH GPT has started the code for us and it has created the files needed for our extension so let's go ahead and download

[02:15] it open it now if we right click and extract it you can see that we've got the files needed for our extension and once you've got the files let's go to step two which is to upload the extension files to Google Chrome so to upload it just click on the extensions button click manage extensions now here enable developer mode and click load unpacked then select the extension folder we downloaded and click select as you can see our extension is added here but right now it is inactive that is because we have some errors here

[03:09] so let's click here and you can see it's saying we've got these errors on our files now sometimes you might get errors like these and to make our extension work we need to fix the errors don't worry it's very easy we can simply ask chat jpt to resolve these errors and give us the updated file so to do that we can just copy the erors like this go back to char apt and paste them here now let's tell CH JB to solve these errors and provide the updated files now press enter it has fixed the errors and generated the updated file so let's

[03:53] download it and extract the file once we've got the new files we need to replace it in our extension folder so let's copy it now go to the extension folder we've downloaded earlier then paste the updated file and click replace okay now that we updated the new files in our extension let's check if there are any errors resolved go to the extension page now go back and if we click refresh you can see that we are still getting an error and this time it's saying that the icon file could not be loaded now if we check the extension

[04:48] files you can see we have the file called icon Now icon is the image that appears on your extension like this and this one is a random icon the chat GPD has created for extension to fix this issue we need to add our own icon for the extension now if you already have an icon you can replace this file with your own icon but make sure you name it as icon.

[05:09] png if you don't have an icon you can simply search on the internet to find one so I'm going to search for YouTube icons similarly you can search for the icon you want right click on the image and click save image as go to the extensions folder and here we have the old icon to replace the new icon here enter icon.

[05:36] png click save and click yes to replace okay so now we've added the icon and all the errors should be fixed to check it let's go back and if we click retry you can see our extension is active and if we go to this extension icon you can see our extension has been successfully added to Chrome now we can pin the extension to access it easily and if we click on it this is how our extension looks like okay once we got the extension let's check if it's working I'll go to YouTube video and play it hi guys so in today's video I'm going

[06:27] to show you how you can make your own a now I want to bookmark this video at this specific time so let's open the extension and click on save current time time now anytime later if I go to the extension and reopen The Bookmark that I said before so just drag and drop the audio here let's listen to it you can see the video plays from that specific timestamp now we have successfully added the Chrome extension and this is how looks so let's say you want to change the appearance and make it look more attractive we can do that too with the

[07:05] help of chbd just describe how you want the extension to look like you can mention the color scheme and the style of the buttons you want so once you've entered that press enter and chat jpt will generate the file for the new look of our extension so let's download it move it to the extensions folder and click replace all right now that we have replaced the old file let's see how it works so let's click on the extension and there you go we have a new attractive extension so that's it guys this is how you can create a Chrome extension using

[07:56] CH GPD and not just that CH GPD can help you create more incredible things if you want to learn how to create an entire website just by using AI you can check out this video and if you like this video make sure you give it a thumbs up and don't forget to subscribe to website learners for more cool videos like this one thanks for watching I'll see you in the next video Until then take care bye-bye [Music]


---

## 6. YouTube video 8q1 NkDbfzE

**Source File:** `YouTube video 8q1_NkDbfzE (ytranscript.app).txt` | **Size:** 1.5 KB

---

YouTube video 8q1_NkDbfzE
https://www.youtube.com/watch?v=8q1_NkDbfzE

[00:00] hi guys my name is vishwas and welcome to a brand new series on how to develop Chrome extensions in this video I'm going to briefly explain what Chrome extensions are and also let you know the structure of this particular tutorial series now Chrome extensions are basically small programs that add functionality to the Chrome browser and you can even modify the appearance of any web page on the go with the help of Chrome extensions so what are the prerequisites for creating a Chrome extension you ask just the basics of HTML CSS and

[00:37] JavaScript we can also optionally use JavaScript libraries like jQuery for example to make things simpler and in this series I'm going to teach you how to develop debug and deploy Chrome extensions and instead of the regular approach of explaining all the concepts and then creating an extension we will create extensions and parallely learn the essential Concepts so we'll start off by creating a hello world extension after that we will create something known as a browser action extension a page accident action extension and an extension that is

[01:18] neither browser action or page action and finally we will learn how to debug and deploy our Chrome extensions and I'm going to focus on a single concept per video so they are going to be pretty short but it is going to make it much easier for you to understand the different concepts so let's get started


---

## 7. YouTube video B8Ihv3xsWYs

**Source File:** `YouTube video B8Ihv3xsWYs (ytranscript.app).txt` | **Size:** 9 KB

---

YouTube video B8Ihv3xsWYs
https://www.youtube.com/watch?v=B8Ihv3xsWYs

[00:00] we are coat no it's weird I can't no no maybe no singing hey friends I need more coffee we are going to be coating today a Chrome extension why you ask because I've never done it it's a super simple project and it's great for beginners who are learning JavaScript also I really love this project because it's something that you can really customize to whatever kind of Chrome extension you want which is really fun also I need a little moment of breaking can we check out the Tiff and Tech mug like general manager is that me

[00:36] I don't know if that's me we'll take it okay let's get into it let's start coding [Music] okay let's get started on our Chrome extension uh I look a little different because after I filmed the intro I wasn't feeling it and I just had a relaxing day so we're gonna dive into it now for the scrum extension there really is three things we need to do one is create an index HTML file and make some kind of structure to this the second is to create a script so some JavaScript and the third which is unique or not unique just to but in order to make a

[01:14] Chrome extension you need to have a manifest Json file and this is really a file that contains metadata about your Chrome extension to start with let's as you can see on screen here make an index HTML file fun trick for you in case you didn't know it if you click on exclamation mark enter it will make the structure for a index.

[01:33] html file I'm sure a lot of you already knew that but it's a little tip if you didn't all right title let's call this I'm going to call this Toronto because I'm located in Toronto but Call It Whatever City you want because you can with the API get different cities so Toronto concert lineup perfect okay in the body here let's have a div and let's have an H2 tag which will contain our title which will pretty much be the same thing let's call it actually upcoming Toronto concerts and now we need to have an unordered list

[02:10] which is really just going to contain the concerts I guess you could say ID uh and this could really be spiked out further this API we're going to use uses quite a bit of things uh so right now we're just going to grab a list of concerts that are upcoming for certain dates but you could do things such as add into the extension the dates that will be used the URLs to sign up for the conferences there's a ton of things but the point of this tutorial is really to show you how to create a Chrome extension give you a strong foundation

[02:42] so then you can kind of build it out how you want to all right this looks good for now now let's create a okay now let's also add in oops now let's also add in script which will be let's call it script.js and let's make that file right now okay in here we are going to create an async function called Fetch data and this is where we will be fetching the data from our API we will use which Speaking of API let's go to it so I signed up for Rapid API which I'm late to the game on but I'm obsessed with there are so many fun apis to play

[03:22] around with and for this I used the concert here we go concerts so I was going to use Eventbrite for this but when I was looking at the doctor Eventbrite from my understanding and I quickly scrolled through them so I might have missed it but from my understanding with Eventbrite it has to be you can only get back your events that you created it doesn't really make sense so I found this API artist events tracker and I really liked it it was just very simple you can get upcoming events events of artists past events and I really wanted

[03:53] events by location so that's what I did and if you haven't used rapid API before it's super friendly all you need to do is Select which kind of endpoint you want and for this one I said events by location then if I go down you can see the name which is uh the name of where you want the events so for me I'm going to put in Toronto and you can also select the Min date and Max date so for this I'm just going to do for the next upcoming days otherwise it returns a really long list so let's go today until uh let's go Wednesday

[04:29] why aren't you number of pages one and then to test it out I also want to use JavaScript fetch for this but like there's so many it's a really cool like I said I'm kind of late to the game so let me know some really cool apis if you've played around on rapid API that you really like and if you haven't well here is your a little bit of information to go check out rapid API this isn't sponsored by them or anything but I just I'm really excited that I found them okay test endpoint items and then you can see here's what we will

[05:06] simply do is copy code which includes our fetch of the API we're passing in the options up here and let's just add here paste that in then if we go here let's kind of update this a little bit so you can see here right now we're doing Fetch and passing in the options I'm just going to delete this for now just start from scratch though and let's give this a name let's call it res for response and let's await until we get the response of this API then we're going to have something called record which will turn the

[05:43] response into Json perfect now let's just log out that record here and then in order to see it all you need to do is open your index HTML file just on a different screen here me this is not what we wanted where is should be showing a list here well not here but in the console let's see what did we do wrong we have a weight and we're passing in the options yes and then we have the record await fonts Json this is so embarrassing you know what we didn't do and I'm sure you're screaming at me but this is why I'm being real

[06:38] like let's just code together and we were going so quickly here couldn't even call the API okay let's give this another try okay perfect as expected nothing comes up on screen because we haven't passed anything in yet but in our console we can see 25 objects and it includes a bunch of different uh things as I mentioned from performers end date description so it's pretty cool there's a lot of exciting bands coming up I must say okay now let's go back to our code though and now what we need to do is let's simply get the element by ID which we

[07:18] created here which is concerts so we go foreign filled with objects we're going to need to map over that so map and let's go item [Music] item.name and here we go okay as you can see we have the upcoming Toronto artist but it doesn't look good in this way so what I'm going to do is just a bit more um I'm going to go like this and make it list items because right now it's making everything one list item so let's go like this [Music] and we will pass in item.

[08:05] name and then what we need to do is simply join them together again all right this should be more like it let's see okay this right now is just pretty simple straight well very simple stay straightforward uh getting list items unordered list items to come up and you're like okay Tiff like this is not exciting at all but just wait for the magic part of it okay so I hope I really wanted to do something very simple for this example for the purpose that it will show you really how you can put anything in here you want whatever kind

[08:42] of content you want you can make in this Chrome extension and this is really where the magic comes in so we need to create a manifest Json file manifest and as I mentioned this really just contains metadata so we're going to do the name which will be upcoming Toronto concerts and this is the name of the Chrome extension let's do version so the version of it let's do ah this is going to be the first one 1.

[09:16] 00 and description this is an extension to look up [Music] [Music] default pop-up which will be our index [Music] and default title which again let's make it upcoming Toronto concerts next up open a new window and in Chrome here navigate to more tools extensions from here all you need to do is turn on developer mode load unpacked and you can see I was testing this out but let's go to where is it here we go and just select the folder where your

[10:21] extension is and look how cool that is it's so easy to do upcoming Toronto concerts amazing so now if we go back refresh here we go and we can see our upcoming Toronto concerts how cool is that as you can see there's a lot more we can build onto this uh from dates from actually linking out so we can go get tickets for the concert but I didn't want to make this video go on for too long and I really wanted to show you just the implementation of getting a Chrome extension and building it out and how simple it is so leave in the comments if

[11:01] we should continue building this out and what the UI should look like or what other functionality we should include thank you all for watching I hope you found this very helpful and leave in the comments some Chrome extension ideas that you have that you might end up making and if you haven't already hit that subscribe button I'll see you all soon thanks everyone [Music]


---

## 8. YouTube video cdLNzQEKlC8

**Source File:** `YouTube video cdLNzQEKlC8 (ytranscript.app).txt` | **Size:** 11.5 KB

---

YouTube video cdLNzQEKlC8
https://www.youtube.com/watch?v=cdLNzQEKlC8

[00:00] So, I decided to make and publish my own Google Chrome extension. My goal is to publish a simple extension that solves a problem that is in many people's lives. Well, the Gmail website has about 1.8 billion users and the average person sends 25 to 40 emails per day. So, my idea is to make an AI powered email writer that will be built into Gmail to help speed up this process.

[00:18] I mean, how hard can it be? All right, so how do you make a Google Chrome extension? I've never really made a Chrome extension before, so I found some helpful resources. Get started. Okay, first of all, it says you need a manifest.json. It looks like this was the file that provided the structure for the pop-up.

[00:38] And it also has a hello.html, which I'm also going to take from here. So, I very skillfully copied and pasted into my own code. After doing all the setup, and we can just click load unpack, I located the folder and put that into the extensions page, but I got a very understandable error. Failed to load extension.

[00:53] could not load icon hello extension.png. It's fine though since I'm lucky that Google images exist. Well, that is fine because I'm just going to use this. Somehow I misread an underscore as a dash and I couldn't figure out the problem for five straight minutes. Oh, and we do have it. And why is it not in my side panel? Oh, it's right here.

[01:14] Oh, and it's actually working. We got our first Chrome extension working. Now, looking back, I don't know why I was so excited because all I did was follow a two-step guide. But now, let's get to the serious part of designing our actual Chrome extension that will be eventually published onto the web store.

[01:28] As I mentioned earlier, I'm going to be making AI email writer. It's quite complicated, so I don't think I can make this with raw HTML and JavaScript, but I also wasn't quite sure if I could use my favorite framework, React.js with Chrome extensions. Wait, you can use ReactJS to make your >> Well, that just made it a lot easier since I'm pretty confident with React.

[01:47] So, I went ahead to make a logo first. I pulled out Adobe Illustrator and cooked up a quick prototype which was kind of inspired by the original Gmail icon. And why not call our Chrome extension mail pilot. That's a beautiful name. I imported a logo and oh, it's actually working now. Look, that's our icon.

[02:01] It's pretty beautiful, isn't it? So, the goal is to inject a logo icon to be right between here. And then when that is clicked, a side panel should show up on the right side where I can rewrite my email using AI. I guess my logic is flawless, but I genuinely had no idea where to start.

[02:20] So, I hit up my dearest friend, Perplexity AI. How do I First of all, we need this permission called scripting. And we also need to make this complicated function that injects the compose button. Following what Plexity said, I created some new files called content script and background both in Typescript.

[02:36] I also had to make some changes in the manifest.json file, which again is a backbone of every Chrome extension. We also need content scripts and we also need this thing called host permissions. Okay, I went ahead and did some copy and pasting code, but here we have two functions. And for the moment of truth, wait, it's actually injected.

[02:56] But why is it here? It's supposed to be here. Honestly, I was really happy when the email writer button was even injected at all because that makes our next step a lot easier, which is finding the right location for it to be in, which is supposed to be the Gmail toolbar. But that's a lot easier said than done. Okay.

[03:11] Well, it just disappeared [music] completely. Okay, I did some more research. Apparently, we need this thing called web accessible resources. And when I reloaded the page, it was back at its original spot. Except our beautiful logo was there. So, at least that's something I've achieved in the past hour.

[03:25] Oh my god, it's back here again. I made some more tweaks like correcting the HTML location of the toolbar. And oh, it's down here, but it's at the very end. Having the button there at all was a huge win for me. So, I just ignore the placement and continue by trying to make it toggle the side panel.

[03:41] Okay, so it's here, but I'm trying to open the side panel, but it's not really opening it. I scan through all the code again, but couldn't find any issues. So, yep, we're back to Perplexity. Okay, so make sure all these exist. We have permissions. We have all these. Let's check if we have this. I realized that I completely forgot to add my background script in my manifest.

[04:01] json file. And of course, we don't have the background, which is really stupid since I probably checked through that file 10 different times. It actually opened the side panel. That's actually so cool. You can close it. You can open it. Wait, just kidding. It works. I'm just playing. I'm just playing.

[04:18] Now that the general structure of the extension is working, it's time to work on the front end, or in other words, the physical attractiveness of the side panel. It should have the tone here, the tone of the email. And on the right, there should be a box for a translation. And if that is ticked, there should be an option here to figure out what language is translating to. For example, Chinese.

[04:42] And below that should be a button to rewrite the [music] email. And when that is clicked, the new email, which the subject should be here, and the body should be here, is the AI rewritten email. And on the very bottom right, there should be a button that if you click it, applies it to your email, so you don't have to copy everything over.

[05:02] It looks like I thought of that design really quickly, but in reality, I've been thinking about it the entire day, so it's really not that impressive. And now I'm going to try to remake this in pure TypeScript XML. And this is where we're starting. That's a great start. I got started with the tone and translation boxes.

[05:18] And that looks pretty nice. A few hours later, the UI was starting to take shape. So, I switched up the plans and went ahead to set up the AI. I want to make a Deepseek thing. For obvious reasons, I'm going to blur this part, but okay. But with this key, we should be able to access DeepSseek [music] for a very cheap price.

[05:34] However, an API key is kind of useless without a server. So, I created a backend for mail pilot with ExpressJS. And do you want to see my DeepSeek key? Well, 3 2 1. Yep. Obviously, it's blurred out. What do you think? I had some fun making prompts for this AI because I'll be advertising this DeepSseek agent as a professionally trained bot emails to be clear more professional.

[05:57] After setting up the backend route, I want to use curl to test out if it works, which is used in command lines or scripts to transfer data. I opened up curl and pasted a command for perplexity. Well, that did not work clearly. And that was probably the simplest fix in the history of error since basically I just misspelled this word. And there we go.

[06:16] we get a successful return from DeepSseek. I topped up 10 USD to the DeepSseek API key and I figured that this may get expensive if a lot of people use my extension. So, I added an IP rate limit. So, for now, it's going to be 50 per day. But for our extension to actually be able to rewrite the email, it first needs to know what's in the email.

[06:34] But first of all, how do you get the subject and body of an email? I wrote some quick code basing it off of the template that Perplexi gave me. And here we should get the email subject and body in the console and I got a few errors. Oh, I am so stupid. I'm not quite sure how I spelled HTML wrong because those are the four most distinct letters in the alphabet.

[07:01] I then refresh the extension, but it seems like nothing got printed in the console. So, we have the subject, but there's nothing in the body for some reason. But how does it know the length? 66. Somehow, our email had exactly 66 characters in the Chrome extension also knew, but it wasn't printing the text properly. Oh, it's here.

[07:18] It's in this terminal, not this terminal. Anyways, now we can finally incorporate AI in our extension by using the endpoint we previously made. All right. And now we're using this route in our front end. The Deepseek AI actually returned the rewritten email and logged it into the console. But there was this weird error.

[07:36] I'm surprised that worked out first try, but for some reason, we're getting this error. I was thinking of ignoring it, but don't worry because what does this error mean? Perplexity gave me some reasons, but I already had those incorporated in my own code, so I wasn't quite sure what the problem was.

[07:50] Well, I mean, it works, so I'm not going to question this error. I'm just going to ignore it for now. So, now let's add these parts where it actually rewrites our email. This meant that I wanted the SCI panel to display what the rewritten email was so that the user can see what they're adding to their email.

[08:05] All right, I'll be honest. This like 100 lines of code is vibe coded cuz I kind of got lazy. But let's see if it works. It doesn't look bad, but it sure does look like some vibe coded slop. So, I decided to try to add a typing animation to make the page look a bit more dynamic.

[08:20] But I'm going to vibe code that because I have no idea how to do that animation. But when clicking the rewrite button, it kept giving me the same error as last time. Oh, there's an error here. It says error sending rewrite request object object. I continued by completely ignoring the error once again, and I went ahead to add the animation.

[08:35] Wow, that is way too slow. What is this? And now for the apply button on the bottom. It should basically move this into here automatically. Once again, the coding gods blessed me because it somehow worked on its first try. That's actually very surprising how that that worked. The next day, I came back to my desk setup and thought of a fix that might solve the previously unresolved error.

[09:00] Okay, I think the error is here because apparently I can't really use asynchronous functions. So, all I did was delete this line of code and everything actually worked perfectly. Oh, it's working. Am I actually Einstein? Wait, wait. Any errors? No errors. I'm actually Einstein. At this point, the Chrome extension was pretty much done.

[09:18] But don't click off the video yet because I also published this extension onto the Chrome web store for all of you to use for free. Okay, so go to the Chrome developer dashboard. I followed the instructions, but then after 2 days, I was confronted with a rejection email, which was completely expected.

[09:32] And the reason is purple potassium. What is this? Despite the CIA code name, it was actually a really simple fix since I had an unused permission I forgot to delete. And 2 days later, I searched for my extension on the web store. And no way, it's actually on Google. I even made a quick website for the extension using React.

[09:50] And just for reference, the website turned from this into this, which I'm actually really happy about. If you've made it this far into the video, you're probably curious to try the Chrome extension for yourself. Just check the pin comment. You'll find the link there. I'd really appreciate it if you could give Mail Pilot an honest rating and maybe share with a few friends who might find it helpful.


---

## 9. YouTube video f2mGqlLLqok

**Source File:** `YouTube video f2mGqlLLqok (ytranscript.app).txt` | **Size:** 7.7 KB

---

YouTube video f2mGqlLLqok
https://www.youtube.com/watch?v=f2mGqlLLqok

[00:00] We've all felt it. You land on a website and within seconds you just know it's premium. It's not just one specific thing you can point to. It's a feeling. That sense of quality, trust, and authority. But what if I told you that feeling [music] isn't an accident and instead is a deliberate result of applied psychology.

[00:16] Recently, I made a video explaining the what. But today, we're going deeper. I'm going to reveal the three core psychological principles that separate cheap feeling websites from premium ones. show you how the world's top brands use them and give you a framework to apply them to your own site.

[00:32] The first and most important principle is all about first impressions. Studies have shown that it takes a fraction of a second, about 50 milliseconds, for a user to form an opinion about your website. And that opinion determines whether someone will stay or whether they'll leave. This is driven by a cognitive bias called the halo effect.

[00:50] Now, the halo effect is our brain's tendency to let our initial impression of something color our judgment of everything that follows. If the first thing a visitor sees on your site looks professional, clean, and high quality, then their brain automatically assumes that your products, your services, and your company as a whole are equally high quality.

[01:08] And that is why the top part of your homepage, the hero section, that part you see without scrolling, is the most important real estate on your entire website. a cheap-l looking header, a cluttered layout, or quality imagery in that first view. It creates a negative halo. Even if the rest of your site's brilliant, the visitor is now looking at it through a lens of skepticism.

[01:30] Premium brands are masters of the positive halo. They don't just design a homepage. They engineer that first impression. Principle number two is about making things easy. The truth is that our brains are inherently lazy. They're designed to conserve energy. And when they're faced with something that's confusing or hard to understand, the brain has to work harder. This is called cognitive load.

[01:52] A website that creates a high cognitive load feels stressful and unprofessional. A website that is simple, clear, and intuitive creates what psychologists call cognitive fluency. It's easy to process. Our brains interpret things that are easy to process as being better, more trustworthy, and of a higher quality. Think about it.

[02:12] A cheap-looking website is often a chaotic mess of competing elements. Your brain doesn't know where to look and it feels overwhelmed. A premium website on the other hand is a masterclass in clarity. It uses whites space generously to give content room to breathe. It has clear visual hierarchy guiding your eye exactly where it needs to go.

[02:33] The navigation is simple and predictable. But there's a very important distinction that you need to understand. And this isn't just about aesthetics. It's about psychology. And by reducing the mental effort required to use a site, premium brands make you feel calm. They make you feel in control.

[02:50] And they make you feel confident in their professionalism. The third principle is where the real magic happens. And it's about those tiny details. I'm talking about micro interactions. These are the small, often quite subtle animations and feedback loops that happen when you interact with a site.

[03:07] A button that subtly changes color when you hover over it. a form field that gives you a gentle confirmation when you fill it out correctly, a smooth transition as you scroll down the page. These might seem insignificant, but they have a huge psychological impact because of something called the peak end rule.

[03:23] This rule states that people don't remember an experience as an average of every single moment. They remember its most intense points, the peaks, and how it ended. Micro interactions are designed to create small peaks of positive emotion that satisfying click, a smooth animation, a helpful piece of feedback.

[03:44] These are the moments that spark joy for the user. Cheap websites are static and lifeless. They do the absolute bare minimum, sometimes even less, to be honest. Premium websites feel alive because they're full of these thoughtful little details. They signal that the creator cared. They cared about the users's experience enough to obsess over the smallest moments.

[04:06] And when these moments are sprinkled throughout your website, they add up to create a powerful overall feeling of quality and craftsmanship. All right, so let's look at how the best brands in the world apply these principles. First, Apple. They are the masters of the halo effect. You land on their site and you're greeted with a stunning fullcreen product shot and a single bold headline.

[04:30] It's minimalist, it's confident, and it immediately signals premium. Their cognitive load is near zero. It's impossible to be confused on Apple's website. And their micro interactions, from the way the pages scroll to the way the menus open, are famously smooth and satisfying. Now, let's look at a luxury fashion brand like Hermes or Beta Venita.

[04:49] They use extreme white space to create a feeling of exclusivity and calm. This isn't empty space. It's a psychological cue that says, 'We are so confident, we don't need to shout.' They reduce the cognitive load to an absolute minimum, focusing your attention only on their beautiful products.

[05:06] Finally, look at a top tier software company like Stripe or like Figma. Their sites create a powerful halo effect of innovation and trustworthiness. They use clear, logical layouts to reduce cognitive load and make their complex products feel simple and approachable. All of these brands understand that their website isn't just a brochure.

[05:27] In reality, it's more of a a psychological experience. So, how do you actually apply all of this? Here's a simple three-step framework that you can use to make your website feel more premium as soon as today. Step one, engineer your first impression. Don't just design your homepage. Obsess over the top half of it.

[05:45] Ask yourself, what is the single feeling that I want a visitor to have in the first 50 milliseconds? Is it calm? Is it confidence? Is it excitement? Build your entire hero section around creating a powerful positive halo effect. Then step two, declare war on cognitive load. Go through every single page of your site and ask, 'What can I remove? How can I simplify my navigation?' Increase your white space.

[06:13] Create a visual hierarchy with one primary goal for each section. Make clarity your number one priority. Remember, what feels simple to you might still be confusing to a first-time visitor. Step three, hunt for micro interaction opportunities. Look for every single place that you can add a small moment of delight on your website.

[06:35] How do your buttons feel when a user hovers over them? What happens when a page loads? How does your site respond as you scroll? These details aren't extras. They are the very essence of a premium experience, and they show that you care. The psychology of a premium website isn't based on using tricks or manipulation or any of that.

[06:55] It's based on respect. It's all about respecting the visitors time by being clear and simple. It's about respecting their intelligence by providing a thoughtful, well-crafted experience. And it's about respecting their emotional response by creating moments of delight. If you want to learn more about how you can do this yourself, click here to watch the next video where I walk you through exactly how to build a website so premium that people will be begging you to buy no matter what you


---

## 10. YouTube video fK bm84N7bs

**Source File:** `YouTube video fK_bm84N7bs (ytranscript.app).txt` | **Size:** 10.1 KB

---

YouTube video fK_bm84N7bs
https://www.youtube.com/watch?v=fK_bm84N7bs

[00:04] Hey everyone, I'm Roman. Codex is your AI teammate that you can pay with everywhere you code. Whether it's on your computer with Codex CLI or the ID extension or Codex cloud that you can send tasks to anytime from the web or your mobile phone. But one superpower we really wanted to zoom in today is its multimodal capabilities.

[00:21] But it's even more magical when the model can have vision understanding but also the ability to check visually its own work. Today I'm joined by Channing who helped train the model to tell us more. Hi, I'm Channing from the research team for Codex. One of the big things we've been focusing on is trying to give the model more tools to leverage its multimodal capability to just be a better software engineer.

[00:43] In the same way that I might check my own work and make sure that things visually look the way I expect them to, we want to have the model be able to do that in a tight iteration. >> That's awesome. Why don't we kind of go through an example to see how it works? >> Sure. We have one the last like one of the demo apps we showed at a previous dev day.

[00:58] It has one screen to kind of discover destination and one assistant where I can just type in some place. Voila. Harris, what would you like to know about? >> So pretty awesome, right? But I think we can do better with codeex now. We have the ability to kind of take it to the next level.

[01:14] So I thought why don't we kind of whiteboard together how we could make like this home screen more engaging. >> Sure. You could have like a globe in 3D. >> Okay. >> And as the user kind of spins the globe, they could see the pens to explore. They could also navigate left and right. >> Sure.

[01:30] And the extra details for each of the cities, too. Right. >> Right. Like Tokyo. Mhm. And like all of the details that might be like useful for the destination. >> Sure. >> I think that that sounds like a good place to start, right? >> We should be able to just take a quick photo of the uh the app as we sketch it up here. We'll just go into chat GPT.

[01:49] >> Yeah. Add a codeex task. Put in the photo and then you should be able to just describe what you want. >> Redesigned the home screen of Wonderlust to show a 3D spinning globe on the left. Details on the destination on the right. The user should be able to fluidly navigate across the globe. When they click on the pen, they should see the destination.

[02:08] And you can also map the left and right arrows of the keyboard. Boom. I'll just send that prom codeex. >> Perfect. I think it should be able to do that. >> Perfect. Also, while we're sending that task off, we could add an extra screen to the app. Maybe we call it something like the travel log. Okay. >> Kind of like dashboard of their stats and all that.

[02:26] >> Uh, we could do like a full checklist if you wanted to get all the contents. >> Oh, great. I love this. Continents checklist. >> Could do like bottles of wine drunk personally. >> That's a great one. Okay. Bottles of wine. >> Sure. >> Uh maybe photos taken as well. >> Okay. >> Maybe we'll come up with a pie chart or whatever makes sense.

[02:43] >> All right. Add one more screen to the app called travel log. It's like a dashboard of fun and interesting stats for the user. Make sure the app is responsive on mobile and make sure the design is also consistent with everything else. All right. And I just send this to Codex >> and we'll let it work. >> So while this is working, I was thinking like could you uh maybe walk us through an example or two that you've already uh use Codex multimodel capabilities for? >> Sure. Love to.

[03:11] >> Let's do it. Uh how I would start usually is I would make a change. I'd ask Codex to do it. It would, you know, most of the time do the right thing. Sometimes better than I expected it to. Sometimes I want to make some tweaks and I would take a screenshot and maybe send that back into the app.

[03:23] Some of the other people who are doing, you know, front end development full-time as opposed to as a side thing, they're uh using the Playright MCP. So actually giving the tool in the same way that the cloud has the ability to open a browser and look at the web app they're running in their loop they're able to have the model take a look at the the application as they're working on it and check its own work.

[03:44] >> So that's when you use Codex CLI locally for instance that you can use that and CEDX cloud would do the same here for the task we just sent. >> Exactly. And then in the cloud we give it a set of tools that are hopefully expressive and flexible so it can accomplish its goals and then if you do the same thing through the MCP it can do the same.

[03:59] >> Yeah. It's really amazing how we can harness those like aentic coding capabilities, right? Whether it's in a cloud container or like locally with these tools. Do you have like an example for instance that you tinkered with and be curious to see? >> Yeah. So, a lot of times uh you're trying to like win someone over and one of the best ways to do that is to present a lot of data and it would be you know great to work through stuff on a whiteboard and you know build up graphs and stuff but it's hard to to present the data that way. Um, and so

[04:23] actually a use case a lot of people have been doing recently is they have codecs like turn over the data or like dive deep into a very complicated codebase and present some visualizations or break things down and build just like sometimes a throwaway web application. And so it's just like a single page that they can, you know, they don't even need to keep the artifact around, but you might share the screenshot with someone.

[04:42] >> That's such a fascinating use case. >> And so I actually before we started this, I uh gave the model uh a bunch of open data. So New York City actually publishes like taxi cab information. So information about rides around the city. And so I actually loaded that just the data into a container and let the model train on that to try to build a dashboard.

[05:01] And so it actually turned out some pretty interesting stuff, you know, at least different theming >> and different ways to get a structure and present the data. >> Mhm. It allows you to add basically exactly as much fidelity as you want. So like when we were over at the whiteboard, you can do like a very thin sketch and like have the model fill in the details.

[05:16] If you wanted to take a screenshot of a very specific like I want my component to look this way, you can feed that in and it'll it'll try its best to accomplish that. >> Yeah. You can go all the way from like a napkin sketch like to a Figma mo application. >> Mhm. >> I don't have to check this out. I don't have to run it local.

[05:30] I can just like take a look at the top level what design I like and then I can iterate from there. >> Why don't we go back now and check uh the two tasks that we sent from the whiteboard? >> So I guess this first one is uh where we asked it to do the 3D globe and it looks like it did that for us. Oh wow. >> So looking through the log, yeah, it pulled in 3JS, so it's actually like animating this, building it all out.

[05:50] It has a texture for like how the globe should look. >> I mean, it looks promising to me, but I'm really curious to see if the animations actually work. Do you want to check out that PR locally? >> Let's uh Yeah. So, we create a PR. >> Yep. >> And then we should be able to just in the terminal check it out and then start the dev server.

[06:09] >> Oh my god. >> All right. >> That's incredible. Oh, the globe is is spinning exactly like we said. It even decided to put a tool tip on top >> to tell how to explore. >> Uh, that's amazing. And if you click on one, >> damn, it works. And it even has the button to open the assistant. >> Why don't we now check the travel lock screen that we wanted to add and see what Codex came up with.

[06:33] >> So, it gave us a couple options to look at. >> Well, that one is really good. Oh, >> it really matches the design of the app. What about the mobile view? Uh, >> so we asked to make sure that things were responsive and so you can see it actually took two screenshots here. It took one at like the full desktop resolution or like a common desktop resolution and the other is a a common mobile view.

[06:52] And what's nice is it took like the full screen. >> Yeah. >> Even if it's not in that, you know, above the fold section, you can still see if there's an error or some, you know, overlap. >> And I'm sure that can apply to anything, right? If I were to say make sure it works in uh dark mode, it would take as many screenshots as I want.

[07:09] >> Yeah. Internally, people have done exactly that. They've run their component through like light mode, dark mode, responsive, different sizes. Like they have uh our design team has like different stops. They want to make sure everything looks good at and so you can actually like make that part of your prompt that you want to see all these things and make sure you check it before it gets PR.

[07:25] >> What are some other things that you are excited about uh multimodality and maybe like things that you're thinking about? >> Yeah, one of the first tools we gave it is a browser tool and so it's ability to to look at a website and a web application. I think there's a lot of other multimodal software development tasks where being able to check your own work in a tight iterative loop will be an important thing.

[07:45] So I I think we're trying to look at how to do uh like mobile engineering I mean even desktop applications. Web was really kind of a a proof of concept to make sure we got the loop working. >> Thanks Jenny. >> No problem. This was a quick tour of multimodal capabilities in codecs. We know models perform better when they can check their own work.

[08:03] And previously we could only do that with backend code. But now by harnessing the multimodal and agentic capabilities of GP5 codeex, we've also unlocked that for front-end coding. And we hope this gives you some ideas for how you can pair with Codex as a creative partner. To get started, go to chajgpd.com/codex.

[08:22] Thanks for watching.


---

## 11. YouTube video qvlYdw2Gj14

**Source File:** `YouTube video qvlYdw2Gj14 (ytranscript.app).txt` | **Size:** 11.9 KB

---

YouTube video qvlYdw2Gj14
https://www.youtube.com/watch?v=qvlYdw2Gj14

[00:00] Every night I try to look, but your heart is all my tears. They fall like you. Hello [music] everyone, it's Steph. I have a project. It's a silly one, but I have a project in mind that is a Chrome extension. But before I tackle it, I was thinking that it probably makes sense for me to learn how to build a Chrome extension.

[00:29] So that is what we are going to be doing today. If you've seen any of my previous videos, you might have seen me use Scrumba to learn. I found Scribba through [music] my number one most trusted source, Reddit. I was trying to learn React at the time and a lot of people were recommending the course on Scrumba.

[00:42] So I checked it out and I've been using Scribba since and it's actually the only one I've been able to stick to. I have a very bad tendency of starting things [music] and never finishing them, but that actually hasn't been the case with Scribbot. I've used it for a couple months. I am working through the courses quite slowly because [music] life has been kicking my ass recently, but it's been working really well and I thought I'd share with you guys and I feel super duper lucky because I'm actually partnering with

[01:05] them for this video. I've said this before and I will always always continue to say this. Check free resources before spending money. [music] There are so so so many amazing free resources out there and Scribba has a free version as well. But if you like me [music] need a way to hold yourself accountable and sometimes that might mean spending a few dollars, I think Scribba is very worth it.

[01:21] It is also something that's just worked for me and everyone learns differently. So, please keep that in mind. But for today, I'll be using Scoobug to learn how to build a Chrome extension. And if I have time, and the rest of the evening, I will be hopefully starting out my personal project.

[01:34] All right, let's get to it. Hey, and welcome to this section where we are going to do a [music] section, which is >> [music] >> Okay, so I've reached my first challenge. And how this works is there are series of lessons and [music] each lesson has like zero to two challenges depending on the lesson. And you actually here, let me show you.

[02:20] So, you [music] actually go in and interact with the screen. [music] So, I did this challenge, but I'm just going to do it again. So, this is the lesson. And once you reach the [music] challenge, you actually like go ahead and do it. So, this is the first one. I like it because it's very step by [music] step, and you tackle it not all at once, but in smaller pieces.

[02:54] Okay, so the sample project we're going to be building through Scribba is called Leads Tracker. The example our instructor gave [music] was if you're trying to find potential customers for whatever product you're selling on your search for potential customers, you probably come across many, many people who might be interested in your product but might not be, but you want some way to store the people who are interested.

[03:15] So, what this [music] leads tracker does is you can either type in a URL, for example, LinkedIn profile, or if you press save tab, it just grabs a URL and then saves it. So, it seems like a relatively simple Chrome extension, but I [music] bet it's going to end up being a lot more complicated than I think it's going to be.

[03:32] But how this works is I'm just going to go through the lessons, and through [music] each lesson, there are different challenges that essentially build on itself. So, by the end of this entire lesson, we'll have this hopefully working Chrome extension. begin dot add eventlister like that inside of the add event listener function or method which is also called Okay, I'm taking a boiled egg break.

[04:16] I've been learning for a couple hours and getting kind of hangry. I actually have dinner plans with my friends, but one of them is really busy at work, [music] so we're having a really late dinner. I'm so hungry. But I made these Mayak [music] eggs. They're the Korean marinated drug eggs. So, I'm going to have a single boiled [music] egg as a snack.

[04:35] So far, I've learned quite a few concepts. I've learned about event listeners, [music] template strings, inner HTML, and the manifest manifest. JSON file. [music] And we're at the deployment step. I think the leads tracker is fully built out yet, but the instructor was saying we're just going to learn how to actually deploy it so we can see it in action and then add more functionality as we go throughout the lesson.

[05:05] Yeah, it's been it's been a great lesson so far. And actually, I feel like building a Chrome extension was a lot easier than I thought. I don't know why I thought it'd be so much more complicated than just building a regular website, but I haven't gotten to the deployment step yet, so I'm not too sure.

[05:17] But I do think it's actually a little bit simpler than I thought. So, anyways, this looks [music] kind of gross, but trust me, it tastes so good. If you feel a bit of baby [music] going to attempt to deploy now. So [music] I downloaded the files as a zip file and I'm going to follow what the instructor says. Let's see.

[05:49] >> Let's just jump into this. The first thing you need to do is head over to chrome dash slash. >> So we go to chrome col// extensions. So now I can see all my extensions and I turn developer mode. >> Opening up the file chooser [music] that we done. >> I downloaded all of this as a zip file. Unzipping it.

[06:06] I will title this load unpack. I'm heading over [singing] to leads tracker and selecting. Okay. And I think it's here. Wow, look at that. But our instructor was talking about an issue though. So apparently if I close out of it, it doesn't actually persist. So, if I close out of it, I open it back up.

[06:28] Yeah, it's not there anymore. Okay, I'm guessing that's what the rest of the lesson is going to cover. So, how to like actually store it. This is really cool already cuz I can actually see it in action. So, I guess a Chrome extension, as long as you have the HTML file and then you have the manifest.

[06:43] json [music] file and then you upload it and then you load unpacked or whatever that thing is [music] in Chrome extensions, then I guess you'll be able to see it. Wow, guys. We did it. [music] Okay, we'll scrub with it. I didn't really do it. Okay, I'm like a little over halfway, but I'm going to try to finish this lesson by tonight and also get [music] my own personal project set up on my machine cuz I think the project setup's going to take [music] some time through Scribba.

[07:12] It's all in the Scribba interface, but I want to actually like have a project set up on my machine as well. So, okay, that is the plan, but pretty happy with the progress. >> [music] >> So, I'm at a decent stopping point and it's dinner time. I'm so hungry. I'm going to pause for now, go to dinner, and then come back.

[07:49] I'm trying to decide, though. I'm either going to finish this lesson or go ahead and start building out my own personal project, which is super exciting. But I can't decide what. But that's a little problem. I'm going to eat cuz I am so hungry. I will meet you guys at dinner and then get back to it. [music] >> I am so tired.

[08:16] I just got home from dinner and I think I'm food co-playing, but I did want to get a little bit further tonight. So, h [music] I'm trying to decide if I want to finish out the scribble lesson or if I want to go ahead [music] and get started on my own project. I'm leaning towards that because I think it'd be really cool to actually get my project set up and [music] running.

[08:37] I feel like if I don't do it now, I'm just going to procrastinate it. the project I have in mind. It's another [music] silly one and I think I'm actually gonna keep it a surprise until my next video because I also want to document the development process of that project. But I think I learned enough to actually like set up and create a Chrome extension.

[08:54] So, I'm going to do that for the rest of the night. I also think that the example Scrimmer project is almost done. I'm 72% of the way through this lesson. I think pretty much all I have to do now is add the save tabs button and also the delete button. So right now this application [music] only takes in the input.

[09:15] So you actually have to manually type in the URL or copy and paste it in and then save input. But the example project in the beginning of the scribble lesson, it showed a save tab option and also [music] a clear or delete option. So the save tab just grabs current tab you're on and then saves [music] the URL and you can use the delete button to delete the tabs essentially.

[09:37] So the rest of the lesson will cover that. But I do think at this point [music] I have learned enough to create my own Chrome extension. So I think I'm just going to go ahead and get my project set up and [music] deploy a very simple Chrome extension and later on I'll actually build out the entire project. But for now, I'm just going to get a Chrome extension [music] set up so I have a personal project that I can continue to work on.

[10:02] And if I run into any issues along the way, I will refer back to the Scrumble lesson. Okay, here we go. [music] >> [music] >> I forgot to link my JavaScript file to my HD. HTML document. So, I was just clicking around and really trying to figure out why it wasn't working. Yeah, I forgot to link it. That was kind of silly.

[11:05] [music] Although, this is a very cute dancing cat. This is not my actual [music] project. I just want to see if I can actually get a Chrome extension working. So, I quickly set up this button where if I click it, the cat starts dancing. And I'm going to see if I can actually create a Chrome extension out of this.

[11:29] >> I forgot to do manifest file. I'm just going to take what they have right now minus the icon. Chrome extensions load unpacked extension loaded. Okay, let's see. Okay, it's still called leads tracker. Okay, that did not work. Oh. >> Oh, it's right there. Nice. [laughter] Oh my god. Nice. There's our cat. >> There he is.

[12:06] This is obviously a very simple Chrome extension. It's literally just a button and a cat dancing. But I'm just glad I have something up and running. I thought that starting out with Scribbon made this feel a lot more approachable. I really didn't realize that a Chrome extension can literally just be HTML, CSS, and JavaScript and you can just download the files and then upload them and boom, you have a Chrome extension.

[12:30] Like, that's kind of crazy and I had no idea that's how it worked. And I thought that Scribba did a really good job walking me through the process and also teaching me quite a few JavaScript concepts along the way. So, that was really helpful. But obviously I am going to have to do a lot more with this project, but I think I'm going to save that for a future video.

[12:47] I'm keeping the project idea surprise in case I decide that this is actually not a good idea that I don't want to pursue as a personal project. But for now, we will be leaving it as a button and a dancing cat. And if you're interested in trying out Scrimpa, I have a link in the description. A lot of the material on Scribbler is free and I highly recommend checking it out because the instructors are amazing.

[13:11] I think this platform is really cool because you actually get to get your hands dirty and interact with the code that's on the screen. So, I highly recommend. But of course, with anything, what works for me might not work for you. This is just something that I have found really helpful that is working for me.

[13:27] It is about bedtime for me. So, slightly shorter vlog today. I'm signing off for the night. I will be back very soon, hopefully with a Chrome extension project that is a little bit more exciting than the dancing cat. But until then, happy coding, good luck with your projects, and I will see you soon. Bye. >> [music]


---

## 12. YouTube video wpGhIoGiDok

**Source File:** `YouTube video wpGhIoGiDok (ytranscript.app).txt` | **Size:** 6.1 KB

---

YouTube video wpGhIoGiDok
https://www.youtube.com/watch?v=wpGhIoGiDok

[00:00] I love the web I just love some parts more than others not every website is a masterpiece of design functionality you know some can be clunky some confusing some are almost perfect but they lack that certain special something that could really take them to the next level did you know that you can use extensions to fix all of that it's true whether you're an expert developer or just someone who's always looking to make life a little bit easier Chrome extensions can be a huge upgrade to the time you spend online today to we're

[00:30] going to explore just a few of the near endless ways that you can use them to transform your browsing experience let's talk about how you can unun those Clunkers clarify that confusion and find that missing special something all with Chrome [Music] extensions take this form for example it's got a million Fields the font is Tiny and it takes forever to fill out it's bad enough having to do it once but can you imagine having to use these forms all the time it'd be great if there was some way to streamline this entire process guess what there is

[01:04] extensions like lightning autofill extend and improve Chrome's builtin autofill functionality Beyond saved credit cards and addresses you can autofill any input or drop down they do this by injecting their own custom scripts via the content script section of their manifest Json file beyond the scripts they Supply you can build your own extensions that lets users declare their own custom values custom scripting means that they can supply templated values so in many autofill values don't have to be static they can intelligently

[01:33] detect and react to the contents of the page and with the Chrome storage API autofilled extensions can automatically pull in data that you save after the first setup once you can figure what where and when to autofill Chrome can remember it forever or at least until you tell it to forget it and one of my favorite apis has got to be the Chrome storage Sync API with it extensions can directly integrate that save data with Chrome's data and profile syncing infrastructure so saving and extension settings on one device means it's

[02:02] automatically available on All Chrome devices that account's logged into you know if there's one thing that breaks my concentration more than long endless forms it's got to be ugly websites I don't know about you but I live in dark mode unfortunately many websites still haven't embraced the dark side at least where their CSS is concerned luckily extensions give us a ton of options to fix this whether it be injecting our own static CSS file with content scripts dynamically adding something with the Chrome scripting insert CSS API or any

[02:32] other number of options extensions let you instantly add a Sleek if friendly Dark theme to any website that's just the beginning though a more advanced option would be doing what extensions like dark reader does with more complex scripting and inpage style detection extensions can automatically generate custom scripting and styles for each and every website you visit saving your eyes from adjusting to blinding White Pages customizing CSS isn't just for custom theming though Beyond colors a lot of developers use the same apis to adjust

[03:02] fonts to their liking all across the web but if that sounds interesting can I make a suggestion extensions also have the criminally underused Chrome font settings API this one lets you replace an entire font family with your own choosing anywhere in the browser so if you're ever having to struggle with a website not designed for your local you can make Chrome load a beautiful well-designed font that actually complement your language neurodiverse folks can swap in hard to polish fonts for the ones that best suit them

[03:30] with extensions like Advanced font settings you can try it out right now to see what I mean maybe you're like me though and you're more of an audiobooks count as a book sort of person if so I'd rather listen to a lot of websites than actually read them I love extensions like read aloud that can read back any website you're on it's built using the Chrome TTS API which lets extensions read out any string with the default voice for whatever operating system the users on don't like what that voice sounds like no problem you can config it

[04:00] to use any number of supported voices not only that but the separate Chrome TTS engine API lets you build and declare your very own custom voice with that API extensions get events for each and every utterance that Chrome is trying to synthesize for the user it's some really deep customization but enough about content what about trying to improve productivity with extensions like stay focused you can monitor and track your own browsing habits you can even set limits on what you want to allow yourself to spend time on in case there

[04:30] really can be too much of a good thing they have some really neat functionality built on top of the Chrome action apis in order to give you a live countdown of how much time you have left on pages before you get blocked and if you want to block sites in your own extension then Chrome declarative net request or DNR let you do just that as I'm sure you can guess this lets you block declarative static list of sites that you know you're never going to want to load any content from but that's not all DNR also lets you declare add and remove

[04:58] Dynamic roles that you generate at runtime that means that it really is just that much easier to block the latest distraction while you're trying to get some work done as you can see Chrome extensions are like magic wands for the browser they can transform even the most frustrating websites into userfriendly experiences there are thousands of extensions out there each offering their own unique feature and functionality so explore the Chrome web store experiment and discover the extension that best suits your needs

[05:23] really is just the tip of the iceberg the fact is with extensions you can make the browser your browser try out some new extensions today and until next time happy browsing [Music]

