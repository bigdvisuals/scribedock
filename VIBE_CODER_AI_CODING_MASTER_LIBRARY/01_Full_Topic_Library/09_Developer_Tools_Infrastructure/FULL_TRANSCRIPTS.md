# Developer Tools and Infrastructure - Full Transcripts and Source Material

This file preserves full source text for this topic. The short text above each source is navigation only; the source body is not summarized.

Related archive folder: `99_Archive_Originals`

---

## Source: 10-build-a-web-app-step-1-mysql-php.txt

- Original path: `addintional info to add\10-build-a-web-app-step-1-mysql-php.txt`
- Size: `22272` bytes
- SHA256: `737A80EC2DC3FEDFF7490D54573199DD3DD0ABC7E6D68A090A5703921FC6AC51`

---

10. Build a Web App - Step 1 - MySQL/PHP

0:06 [Music]
0:12 hello Gary Simon here of designc
0:13 course.com today we're going to create
0:16 our actual MySQL tables and the table
0:20 structures and so basically this is a
0:22 step that we're going to need to have
0:24 done before we actually mess around with
0:26 any type of PHP all right so in in
0:28 making the site basically active so if
0:31 you've never messed around with mySQL
0:33 well basically you do need to have a
0:34 host uh you can set it up locally uh
0:37 I've never done it but I've always just
0:38 used the host and usually basically
0:42 every host out there they offer MySQL
0:44 databases so you'll have to log into
0:46 your host control panel to kind of
0:48 figure out how to do that and I'm going
0:50 to be using PHP my admin to basically
0:53 set up those tables all right so I yeah
0:56 check out designc course.com if you
0:58 haven't yet and subscribe here on
0:59 YouTube all right let's get started all
1:01 right so I'm going to be jumping all
1:03 over the place on this but my goal is to
1:06 basically get the first and second step
1:08 done today uh in terms of making it
1:11 actually work and saving it to a
1:12 database and all that stuff uh so I'm
1:16 going to get out a browser
1:19 here all right so basically uh let's go
1:21 back to the index uh the first step you
1:24 know they they enter their needs uh they
1:27 can offer you know whatever they put put
1:30 in here com separated by comma and click
1:33 on FInd matches so there's a few things
1:35 that have to take place after they click
1:38 that so first I'm going to to switch
1:41 over here I this is going to be the part
1:45 where you're going to need to log into
1:46 your host whoever that is and you're
1:48 going to have to figure out how to
1:50 create a mySQL database so I've already
1:52 created one called barter full and so
1:55 basically when you create one you're you
1:57 know you're given the option of uh
1:59 specifying the name of it of course and
2:01 then attaching a MySQL user to it and
2:04 you can make a custom uh mySQL database
2:08 username and password for accessing this
2:11 so you will need basically uh also the
2:15 MySQL address so if you real quickly
2:21 download the project files and trying to
2:24 get out the right window here uh there's
2:27 a new folder that I've included in it so
2:30 this is called include and it has two
2:34 files basically so this DB as a database
2:38 this is something that we're going to be
2:39 including on the top of every page so
2:41 index.php will include it up here uh
2:45 what this does is it it connects to the
2:47 MySQL server so you're going to need
2:49 four pieces of information you're going
2:50 to need your host name and your uh
2:53 basically your host provider will be
2:55 able to provide that for you in the
2:57 control panel whatever type of system
2:58 they use uh your username that you
3:01 specified along with password and then
3:02 the database name goes here all right so
3:06 the second file is just this class I've
3:07 used for years upon years upon years uh
3:10 and it just makes uh basically taking
3:14 PHP and querying the database make it a
3:18 little bit easier uh so that's something
3:20 I've used forever um so yeah basically
3:24 this stuff down here will actually do
3:26 the connecting stuff from uh up here so
3:30 yeah uh real quickly what I'll do
3:34 is in index.php at the top I'll open up
3:39 the PHP tags and what we want to do is
3:44 just type
3:45 in require
3:48 once
3:50 include and then also the name of our
3:53 first one which is db.
3:57 in.php all right so that basically just
3:59 takes that file and includes it into the
4:03 index.php so we'll do that
4:06 twice and include that MySQL db. class.
4:12 PHP all right and save that now also
4:16 obviously before you upload or whatever
4:18 you're going to need to save the
4:20 credentials in here which I'm going to
4:22 do off screen so that well for obvious
4:26 purposes okay so I just paused and saved
4:29 that file there so we don't have to
4:30 worry about that anymore okay so now
4:32 what we want to do is actually create
4:34 the users table in uh MySQL so PHP
4:38 myadmin this is basically uh a script
4:42 that most nearly all hosting providers
4:46 provide and it allows you to basically
4:48 interact with your and create and modify
4:51 uh MySQL databases so I've already
4:54 created the database this is it right
4:56 here bartile and inside the database of
4:58 course you have your different tables
5:00 for storing information so the first one
5:03 we want to in uh create is going to be
5:06 users okay so
5:09 basically whenever I go to create a
5:12 database I just get out notepad I have
5:14 the name up here and then I have the
5:16 individual fields that I want to create
5:19 so the name of this table is going to be
5:21 users it's going to have each one basic
5:24 basically every table I create has an ID
5:26 a unique ID that auto increments and
5:29 also in email obviously the city the
5:31 state so these three things they enter
5:33 on the second step and then just date
5:36 added this is just a field that uh we
5:39 can specify about you know when they
5:41 actually joined so uh what we want to do
5:44 is create the table name right here and
5:48 that is going to be users number of
5:50 fields is
5:53 five all right so the first field is ID
5:56 and then you have the type now if you
5:58 never mess with MyQ well there's a lot
5:59 of of different data or basically row
6:02 types and so uh int just means integer
6:06 so if it's just going to be numbers
6:08 that's fine the length is how many
6:11 characters that this field can hold so
6:13 11 would be you know I don't know how
6:16 many millions but I yeah so also over
6:19 here you have all this other stuff I I
6:21 always just make it null for the first
6:23 one primary and then AI is autoincrement
6:26 and then over here we could put email
6:29 and that's going to be a
6:32 varar and that can go up to 255 Fields
6:36 I'm not sure how long the longest email
6:37 can be just to be safe I was just put
6:40 255 here uh City same thing I know
6:45 there's some long city names I have no
6:46 clue
6:48 State I I'm not sure if we're going to
6:50 be let me switch back to
6:53 our uh let's see here step two yeah
6:56 we're just saving basically
7:00 yeah the uh two two letter values um of
7:04 the name we're not saving the full state
7:06 name so this only has to be
7:10 two and then down here date added this
7:14 is going to be a
7:15 date time field all right so now we can
7:20 hit save and now it creates the table so
7:24 up here we have all these different tabs
7:26 and uh browse basically means you can
7:29 browse the data that's you know been put
7:31 in but obviously we don't have any yet
7:35 all right so basically let's minimize
7:39 that let me get back out uh the HTML
7:42 editor we're on
7:45 index.php okay
7:47 so basically what we need to do is at
7:50 the
7:51 top let's also mind uh form action right
7:55 here if you specify an actual script uh
7:59 it'll take you it'll submit when a
8:00 person hits the submit button down here
8:03 uh it will submit that data you know
8:05 whatever input Fields you have to that
8:09 specific page but if you leave it blank
8:11 it will just submit to its the same page
8:13 itself and so what you have to do in
8:16 which is what we're going to do so what
8:17 you have to do in that case is look for
8:21 when that form is submitted all right so
8:24 there's a few ways you can do it um I
8:27 usually I just get out uh like for
8:29 example I need I offer this name what
8:32 you could do
8:35 is if is
8:39 set and then post and because our we
8:42 have the method is post right here and
8:45 then inside you could put the name of
8:47 the field so I
8:50 need and I have to probably be a good
8:53 point to put a disclaimer on this I'm a
8:56 much better designer than I am a coder
8:58 but I've done things a certain way for
9:01 so long probably like well over a
9:03 decade uh I'm sure if any of you are
9:05 like really experienced coders and
9:07 probably pick apart different things I'm
9:09 doing wrong but the point of this is is
9:11 just to to make something that functions
9:13 all right so basically if is set that
9:16 means if it's if it exists and it will
9:19 exist if they click the fine matches
9:21 button uh then whatever we specify in
9:25 here will occur all right so just a
9:27 quick example
9:30 we could put Echo and we'll put yay
9:35 submitted all right just like that and
9:37 if we save this I'm going to bring it
9:40 I'm going to pause real quick so I can
9:41 get those files trans okay so I've
9:43 transferred all these new files over to
9:46 butter.com uh and we bring up the
9:50 browser basically uh as you can see we
9:53 don't have that yay submitted thing here
9:55 because it hasn't actually been
9:57 submitted but if we hit f matches we see
10:00 that it says yay submitted so that's
10:03 roughly how that works if you never mess
10:05 with PHP MySQL then yeah that's uh very
10:08 handy thing to know obviously very basic
10:11 so and basically I the first thing we
10:14 need to concern ourselves when it comes
10:16 to people submitting that form is making
10:19 sure that both of the fields are filled
10:21 out so both are required obviously so if
10:24 a person doesn't fill out those fields
10:27 then obviously we don't want to save any
10:28 data or whatever we want to display uh
10:31 some type of message that lets them know
10:33 hey both fields are required so uh the
10:36 field names are I I need and I offer so
10:40 what we want to make sure of is they're
10:42 not empty so instead of just checking to
10:46 see if it was put submitted at all the
10:48 first thing we want to do is
10:52 I instead of is
10:56 set we can put uh if post I need doesn't
11:01 equal that's a sign for that so it's
11:03 exclamation point in
11:05 uh you know uh equal sign uh it doesn't
11:09 equal blank you know and then put also
11:12 and two and signs means
11:19 and I think you use uh empty as well but
11:23 I've always done it like this probably
11:25 not smart whatever I offer doesn't equal
11:28 that
11:39 okay so we can check now if we upload
11:52 this and oops I need to remove that one
11:57 that's why I errored so if we upload Lo
12:02 this and come back
12:06 here basically if we submit
12:10 this then it's still not going to show
12:12 us anything but if we enter just
12:14 something in here randomly yes there's
12:17 stuff in the field so I if we just do
12:20 one we can see it doesn't work
12:24 I yeah just like that so let me come
12:27 down here
12:33 now what we want to do and I shouldn't
12:35 have removed that first one is basically
12:38 put let's see
12:42 here we are going to do the if is set
12:45 post I
12:47 need we are going to keep that one
12:50 shouldn't have got rid of that close
12:52 that up
13:01 now inside of
13:05 here also we yeah we want to change this
13:08 to or so you know they could enter one
13:12 and leave the other one blank uh yeah
13:15 that would be bad so what we want to do
13:17 down here is else so that means okay
13:21 well one of them are basically blank so
13:24 we have to put uh some type of message
13:26 so I'm going to make a variable or call
13:29 it error MSG
13:33 equals you've oops you left one of the
13:38 fields
13:40 blank you know whatever you can make a
13:42 say whatever you want basically and then
13:45 down here what we can do is put
13:48 in an area yeah the div class alert so
13:52 basically inside here we can put PHP if
13:56 is
13:57 set error
14:01 MSG
14:04 Echo error
14:07 MSG all right so actually you know what
14:10 I think I'm going to change how that
14:11 works one second I'm going to copy this
14:14 portion I'm just going to put Echo error
14:16 MSG and then outside of this just above
14:21 the div we're going to put PHP and then
14:23 paste that uh area right here if is that
14:26 error message open up the bra we'll
14:29 close that one right
14:31 here and then put PHP and then close the
14:35 bracket right
14:36 there all right so basically save that
14:41 and we'll re-upload the
14:44 index.php and what we want to do is go
14:47 back to the
14:49 browser all right so we can go ahead
14:52 let's just maybe put one and see what
14:54 happens five matches
15:00 you left one of the fields blank I
15:02 screwed it up obviously because yeah
15:05 okay I'm sorry I think I drank too much
15:08 last night this should be and I should
15:10 have left it there there we
15:13 go
15:14 Jesus oh
15:17 man get out of here stupid I
15:20 accidentally loaded that up all right so
15:22 now it should work correctly sorry about
15:24 that so now we just have one blah blah
15:28 blah there we go now it's going to work
15:30 if they're either both left blank or
15:33 just one is left blank uh we can Al you
15:35 can also style this a little bit better
15:38 obviously that looks terrible I think
15:40 what I'll go ahead and do that real
15:42 quick um let's see here let's go to that
15:46 was called alert all right so let's get
15:49 out our
15:51 CSS come down here um I'll put this over
15:56 here yeah
16:00 alert and I think we can um text align
16:04 Center font weight bold margin I don't
16:08 know let's try like 30 P
16:11 pixels zero now let's go ahead and save
16:15 that in the
16:18 CSS see what this
16:24 does okay well yeah that's not bold
16:26 because of uh where is it at
16:29 let me come down
16:34 here put comma 700 there I think and
16:39 then also
16:43 I background color we'll make it yellow
16:48 and then padding like I don't know 10
16:50 pixels we'll try that and see what
16:55 happens also put in index.php because we
16:58 changed
17:01 that all right so that sticks out quite
17:04 a bit that's fine though all right so I
17:07 okay so now that we have that that's
17:09 good um so let's come back down here to
17:14 our
17:16 index.php okay so both of the fields are
17:19 entered now what do we want to do okay
17:21 well basically you also don't want to
17:25 allow people to proceed if they only
17:28 enter like a a couple characters for
17:31 example like if they put like a or just
17:33 one or B or whatever so there's a
17:36 function that will be able to count
17:39 basically uh how many characters
17:42 are uh in a given VAR variable basically
17:46 so uh what we could do is put um I'll
17:50 just call it character count I need
17:55 equals St
17:57 Len post
18:00 post I
18:02 need all right so
18:05 basically this variable right here will
18:08 contain a number count of how many
18:10 characters a person entered so
18:13 I
18:15 offer equals the same
18:20 thing all right so now what we can do
18:24 that now that we have that we can put a
18:27 another if statement so so
18:29 if let me just copy that real quick so
18:32 I'm not typing out all these I if
18:35 character count I
18:37 need is greater than we'll say
18:42 three
18:44 and then the same thing basically with
18:46 the different variable
18:51 name I offer all
18:56 right and then inside here here is where
18:59 they will Pro will proceed to the next
19:01 step and then we could put an else right
19:04 here and put another error
19:12 message you need to enter more than
19:16 three characters or something like that
19:18 all right so I let's see let's see if
19:21 that works real
19:23 quick probably
19:26 won't all right so
19:30 okay well I did leave on of the fields
19:32 blank so that would fire first all right
19:34 so what if we just do this all right
19:39 good what if I do this and this good all
19:44 right so now if I do
19:45 this there we go nothing happens because
19:48 we don't have anything in
19:52 inside here okay so basically now at
19:55 this point you know you can probably go
19:57 through a lot of other
19:59 uh functions to clean up whatever
20:01 they're trying to enter like if they
20:02 only enter numbers for example you don't
20:04 want them to proceed but you get the
20:06 idea now so that's the whole point I'm
20:07 not really serious about this project in
20:09 terms of barter.com and making it
20:12 successful so anyhow now let's assume
20:15 okay we're here we're happy with the
20:16 data now what do we do okay well
20:20 basically we want to save in a session
20:24 the information from those two Fields
20:28 right here in here for I need and I
20:30 offer and the reason we're going to save
20:31 it in a session is because they uh
20:35 haven't yet entered their email or
20:36 anything so the session variable will
20:39 get sent off uh to the Second Step
20:42 basically so first we have to create
20:45 those session variables so what we want
20:47 to do is put I
20:50 session and we'll just call this I need
20:55 equals and what we can do is
21:01 put post I
21:07 need I
21:10 offer all right right there and then
21:13 once we've saved that then what we can
21:15 do is redirect them to that second step
21:19 all right so what we'll do is
21:23 header
21:25 location and this is also where we're
21:29 going to put in uh an HT access
21:34 file so let's go to file new file we'll
21:38 save this as HT
21:42 access all right so now in here uh I'm
21:45 going to copy and paste a few things
21:47 that I just kind of always included into
21:50 my uh htx file and you can use them if
21:55 you wish uh we want to put
21:59 I'm going to put this over here rewrite
22:01 engine
22:02 on
22:05 and go ahead and put our first rewrite R
22:08 so
22:10 basically when it comes to uh the file
22:13 names you know we could always just put
22:14 you know header redirect step-2 PHP but
22:18 that doesn't look nice I would just
22:20 prefer it to be you know step two well
22:23 the way you do that is you write out
22:26 this rewrite rule so rewrite
22:29 write
22:31 Rule and then what you do is put
22:34 here the actual directory or the name
22:38 that you want it to be so I'll just put
22:40 in uh maybe I'll put final step all
22:44 right and then put a forward slash
22:48 question mark and a number sign or
22:51 dollar sign and then we'll put in the
22:54 actual file name step-2 PHP
22:58 and then just put l right here I can't
23:01 describe everything or explain
23:02 everything it's just how I've done it I
23:04 know it works so I yeah we'll save that
23:08 and we'll see if this
23:10 works uh so let me go ahead to here just
23:14 drag that htx file into the root and if
23:18 we go to and just type in um what was it
23:22 final
23:24 step all right we'll see that it works
23:28 oh and that's showing up because I don't
23:30 have that if step step whatever all
23:33 right so now what we can do uh is come
23:35 over
23:37 here and we can put final Dash step all
23:42 right so I'm going to save that and
23:46 let's see if that works correctly so
23:49 we'll enter some
23:57 data oops
23:59 what am I doing on line 21 I screwed
24:01 something up sorry about that where are
24:04 we at line 21 is right here oops I
24:07 forgot to semicon at the end yeah that
24:10 happens like 50,000 times during the
24:12 course
24:13 of
24:15 project all right so
24:18 now all right so let's just put blah
24:21 blah blah blah blah blah five matches
24:24 good so now we're at final
24:27 step all right so now what we want to do
24:30 is check on final step because you just
24:32 don't want anybody to be able to go to
24:34 final step without having that those
24:36 session variables present so what I'll
24:39 do is come over here we'll go to first
24:44 I'm going to um copy this stuff at the
24:45 top we'll go to step
24:48 two paste that
24:51 again and what you want to do is check
24:56 first and foremost that those session
24:57 variable are present so
25:01 if is set which means that exclamation
25:04 form means it's not
25:08 set I think you could just put session I
25:10 think I'm not sure but I'm just going to
25:12 put I need just to be
25:15 certain and you don't really need to
25:17 open up with brackets if you just have
25:19 one single command so you can just do
25:22 this and then underneath it you can put
25:23 in or beside it it doesn't matter you
25:26 can put in uh
25:29 like an error message if you want I'm
25:31 just going to treat it by um doing a
25:33 header
25:34 location uh index.php it'll just shoot
25:39 them back to that homepage basically all
25:41 right so if it's not set send them
25:46 there save all right so now we'll see
25:50 what
25:55 happens all right so
25:59 why is it doing it well it's because we
26:00 have to uh basically create the session
26:03 first and I have a session include I
26:05 should have included from the start but
26:07 that's no
26:08 problem sorry I had to pause there for a
26:10 second uh so basically let's create a
26:12 new file real quick we're going to save
26:14 it inside the
26:16 includes uh folder we're going to call
26:18 it sess
26:20 session.
26:22 in.php
26:25 and inside of here we're going to put uh
26:28 by opening a PHP tag we're just going to
26:30 put at session
26:33 start because you have to start the
26:35 session in order for it to be carried on
26:38 through the different
26:39 pages and we'll just save that and then
26:44 in
26:53 include we'll uh require once that and
26:57 save that and also same thing here as
27:02 well and we'll let me make sure
27:04 everything's uh uploaded both of those
27:06 files as well as the
27:09 include all right so now we go back to
27:13 our browser here and we just type in you
27:17 know whatever
27:19 here now it keeps us at final step
27:22 because those session variables are now
27:24 carried on or they're there rather all
27:27 right so
27:29 I wow that took a lot longer than I
27:32 thought I we're already at 27 minutes
27:35 basically so uh yeah I think this would
27:37 be a good point to stop just because
27:40 we're done with step one and then
27:42 tomorrow we can pick up with step two
27:44 and actually you know getting this this
27:47 data saved all into a table all right so
27:51 if you haven't yet check out designc
27:52 course.com and subscribe here on YouTube
27:54 all right goodbye
28:02 [Music]


---

## Source: 11-build-a-web-app-step-2-mysql-php.txt

- Original path: `addintional info to add\11-build-a-web-app-step-2-mysql-php.txt`
- Size: `22901` bytes
- SHA256: `BCDD5B9C407DABEB4E24147E41AD561B1064CBCAF21D76966BD5372DB7A54411`

---

11. Build a Web App - Step 2 - MySQL/PHP

0:17 all right so here is step two we have to
0:19 worry about an email submit a city and
0:22 the state so basically the uh email and
0:25 City the state we don't have to worry
0:27 about checking to see if it's ENT it or
0:28 not because it um there's no blank field
0:31 so at the very least they'll be from
0:34 Alabama Alabama if they never uh
0:36 specified anything no big deal uh so all
0:39 right so basically let's go back here to
0:41 our files
0:43 and all right so this is step two uh.
0:47 PHP so what we want to do is much like
0:51 much in the same way as index.php is
0:53 check this data um to see if it's been
0:56 submitted and so what I'm going to do
0:59 real quick is just copy this stuff from
1:02 index.php and just paste it in just to
1:04 save myself a little bit of time and
1:06 then edit it here so I let's check out
1:09 the form variable name I mean the form
1:12 names uh for the input field so we have
1:15 email and City okay so let's see so if
1:20 is set
1:22 City all right so we have that now we
1:25 also have uh City here and email
1:31 and this one right here the else is we
1:34 can change this
1:37 to yeah that's fine you left one of the
1:39 fields blank
1:41 okay yeah we can make it more
1:48 specific and a
1:51 city okay all right
1:55 and we don't have to worry about the
1:57 character count stuff right here here so
2:01 let me just go ahead
2:04 and get rid of all that all right so
2:08 when it comes to an email submit there's
2:11 a couple things that I you can do to
2:15 make sure that the email is in a correct
2:17 format because you don't want to enter
2:19 obviously some incorrect type of emails
2:23 that don't have like at symbols or
2:24 whatever so I basically there's there's
2:28 a number of functions that are written
2:30 that will help you um but I think one
2:32 that works that I've tried
2:35 is right here and I've copied it off
2:38 screen so I'm going to paste it in all
2:40 right so let me get
2:43 this worked structured correctly
2:49 here all right so basically this is
2:51 saying if filter
2:54 VAR email post email which is our
2:56 variable filter validate email this is a
2:59 p PHP function then it will say uh error
3:03 message please enter a valid email now
3:06 the way we've been doing this is we've
3:07 been sticking all of our error message
3:09 at the bottom uh so what I want to do is
3:12 just get rid of that and then just put
3:15 in
3:17 else remove this
3:22 part paste that right there all right so
3:27 now in here is basically where the next
3:30 set of coding will go and basically I
3:34 think that's pretty good
3:37 I for that portion now you could
3:40 probably get real elaborate and check to
3:42 see if the city is an actual City uh
3:45 valid City but uh I'm not going to go
3:46 that crazy uh so so yeah basically this
3:50 is the part where we're going to
3:52 actually insert all of our data into the
3:56 table that we created uh with exception
3:58 to the um I and I offer those are going
4:01 to go into a different table all right
4:03 so the first table insert that we're
4:06 going to do is going to be based on that
4:07 years of data the
4:09 email I let me see if I have it out
4:13 here this stuff so I the the email city
4:17 and state all right so with the help of
4:20 that uh MySQL DB class this is where
4:23 we're going to go ahead and put it in so
4:26 query equals and then the the uh quotes
4:31 and inside here is the actual MySQL
4:33 command insert
4:36 into and the name is
4:39 users and then you put in parentheses
4:43 the actual fields that you want to put
4:47 information into basically so if I go
4:48 over go back here we don't need to put
4:51 we don't have to insert the ID it gets
4:53 added automatically and it also Auto
4:56 increments so the first basically us you
4:59 know which that'll be me obviously when
5:01 we test it there'll be id1 and then
5:04 after that it'll be id2 you know so I we
5:08 want to we don't have to put that so
5:09 we're going we're going to specify the
5:11 email city and state the date added we
5:13 don't uh yeah we have to specify that as
5:15 well um so let me show you real quick so
5:18 this would be
5:20 um what was the first one I have a
5:22 terrible memory let me see over here
5:25 email city state okay so they don't have
5:27 to be in a specific order but I just
5:29 kind of like to do it that way email
5:31 city
5:32 state values and then this is where the
5:35 values correspond with the order in
5:37 which you did so the email will go
5:43 here just like
5:45 that and then post
5:49 City and
5:53 then wait a second
6:01 yeah State okay wanted to make sure I
6:03 got confused for a second all right Post
6:08 State and I just realized we have
6:10 another field that we have to worry
6:12 about here oh oh yeah the the state will
6:14 always be specified so we have to worry
6:16 about that okay cool all right so then
6:18 close up the parentheses on that and put
6:21 a semic coolant at the end along with a
6:23 quote all right so now this is just a
6:26 variable in and of itself it doesn't do
6:28 anything so we have to do is actually
6:31 make the call so DB and then a dash and
6:36 less than sign uh
6:39 query query and that's our query
6:41 variable right here all right so that's
6:45 the actual line with the help of the
6:48 MySQL DB class that will insert the data
6:52 into the actual
6:54 table pretty simple and you know what I
6:57 also kind of just forgot to
7:01 I yeah uh we need a password field so
7:06 usually in this case in order to cut
7:09 back on how many fields that are
7:11 required I will just automatically
7:14 generate a random password for a person
7:17 uh and then just send them that password
7:21 uh the random password and email and
7:22 then so when they log in again they can
7:25 change it to whatever custom password
7:26 they want so the benefit to this of
7:28 course is if we go over here we don't
7:31 have a we don't have a password field
7:33 that's required so yeah I what we have
7:37 to do is make an adjustment real quick
7:39 so after email we could put a password
7:41 field so over here put one after
7:46 email call this
7:48 password and I'm going to make it a
7:51 varar and I think like H I'll put it
7:55 like 15 characters and then save all
7:58 right so now we have a password
8:01 field and I have a function that will
8:04 automatically generate a random password
8:06 that I'm going to
8:07 use all right and so that function it's
8:11 kind of lengthy I I'm just going to
8:13 stick it at the top
8:16 here is function generate password all
8:19 right so the way you use the function is
8:22 uh the name and then uh
8:25 basically anything else uh so what I
8:28 would do is
8:30 come over here just above that insert
8:32 query is I put it just create a variable
8:36 any name you want I'll just call PW gen
8:38 equals
8:40 generate
8:42 password just like that all right so P
8:46 PW gen will just generate uh an eight
8:51 character the length here specified is
8:53 eight password so if you uh yeah you
8:56 want to download these project files
8:58 they'll basically
9:01 uh include this function here so you
9:03 don't have to sit there typing it out
9:05 all right so now what we want to do is
9:07 edit this put in password right
9:09 here and then
9:12 put another field over here and this
9:15 will be PW gen all
9:18 right now also what we're going to want
9:21 to do is you want them to be able to uh
9:25 verify their email so that's kind of
9:29 very important uh especially if you're
9:30 going to do any type of mailings you
9:32 want them to be um like actual double
9:34 opt in so what we'll do is create
9:38 another field man I forgot to create all
9:40 these fields no problem though uh right
9:44 after yeah we could do it after State
9:46 doesn't really matter create another
9:48 field we'll call it
9:51 verified and what we want to do is put
9:54 int just one so one will be yes they
9:57 verified their email zero will be no
9:59 didn't so we'll save by default it's
10:02 going to be zero so uh it only becomes
10:05 one after they verify their email which
10:08 we'll do here soon all right so I we
10:12 need to add that or right no we we don't
10:14 need to add that it'll automatically be
10:15 zero uh when each row is posted okay so
10:19 now what we want to do is down here
10:21 we're going to send an actual email all
10:24 right so basically uh we can do this
10:27 with php's mail function and so I what
10:31 we can do is first let's specify the
10:34 subject so the
10:36 subject this is going to be a variable
10:39 and equals and this is going to be
10:42 whatever I will show up in the subject
10:45 of the email basically that they receive
10:47 so we'll put in
10:52 bful please verify your email
10:57 okay all right and then what we want to
11:00 do is put a message so message equals
11:05 and open that up and because we have
11:08 uh tabs and stuff here we want this to
11:12 come down a little bit and we want it to
11:13 be flush up against here otherwise it'll
11:15 screw up the formatting of the email so
11:17 this is going to be a plain text email
11:19 and so what we want to put
11:21 is I something
11:25 generic please click the following
11:30 link to verify your email
11:35 address okay and then we're going to
11:38 have to put in an actual link so we'll
11:42 go ahead and do that
11:45 HTTP barter.com
11:49 confirm email I guess we can call it and
11:52 we'll mod rewrite that and that will be
11:56 question mark e ID for e email ID
12:00 basically
12:02 equals
12:04 and we basically need a unique
12:07 identifier uh we can't we shouldn't just
12:09 use the actual ID of their insert a row
12:11 so we're just going to use that random
12:14 password generated fi for that so what
12:17 we need to do is specify that variable
12:19 so you end the quote right there and
12:22 then put a period PW gen put another
12:27 period and then open it back up
12:31 just like that and then you could put
12:33 something generic like uh if you did not
12:37 request this uh to be
12:41 well if you did not sign up to
12:46 barter.com please ignore this email
12:49 because obviously people can enter other
12:51 people's emails all right so uh and then
12:54 we'll put thank
12:55 you barter.com yeah whatever all right
13:00 so now let's put the
13:02 ending uh semicolon
13:06 there now we can also put uh a headers
13:10 variable
13:12 from and this is where we can put in the
13:17 actual well we put barter.com
13:20 and then we can
13:25 put
13:27 the yeah actual we put contact at
13:36 bar.com and let's see
13:39 here also do
13:44 slrn and then the actual line that will
13:47 send the mail so that's mail and we want
13:51 to send that
13:53 to the post
13:57 email and then comma
14:01 subject
14:02 message and
14:06 headers and then we can put in right
14:10 here a variable success equals
14:15 1 and then we'll check for that variable
14:18 down
14:19 here uh and so let's go ahead and do
14:22 that real quick so what we're going to
14:24 do is
14:26 basically um right after
14:29 here we'll put
14:32 in oops
14:34 PHP
14:36 if is set so not set
14:41 success then show all this stuff down
14:44 here basically is what that means and so
14:48 that will come yeah right
14:51 here so we'll put
14:54 PHP else
15:01 and then we'll put some HTML in
15:03 there so this is where a person this is
15:07 what a person will see if they
15:08 successfully entered their email and
15:10 that and submitted that information
15:11 basically so what we can do is reuse
15:16 the this stuff right
15:18 here and then paste that
15:26 in and we could put in I
15:35 please check your email to
15:38 confirm no wait please check your email
15:41 to verify your
15:45 account and save that all
15:50 right so with any
15:53 luck uh we'll see if this uh works all
15:56 right so let's uh
16:01 yeah that'll work about emo okay so let
16:03 me go ahead and upload this I'm sure
16:05 there's probably an error
16:10 somewhere I'm not sure what files I did
16:12 edit but we'll see all right
16:17 so all right so it does have that those
16:20 session variables save those session
16:22 variables will expire after a certain
16:25 amount of time I think you can set that
16:26 up uh but I'm not sure what that time is
16:29 is but anyhow um
16:32 so you know before I test this I want to
16:35 fix this thing right here really
16:37 quickly um what am I
16:40 doing the issue with that was if I go
16:43 back into
16:45 index need changed to that so let's go
16:49 step
16:53 two paste that in there we go so now
16:56 that won't show up by default
17:03 okay all right so what happens if I just
17:06 hit submit sorry you need to specify an
17:10 email and a city okay so what happens if
17:15 I just do
17:16 this please enter a valid email perfect
17:19 because that wasn't a valid email so
17:21 I'll put in I contact designc course.com
17:26 City let's put in like Warren and then
17:29 Ohio for that now let's see if it works
17:33 awesome please check your email to
17:35 verify your account wow it worked wait
17:38 and we have to be certain sometimes
17:40 won't if we got the query WR wrong it
17:42 won't enter so if I just click on this
17:45 now there we go oh wait you know what we
17:48 need to make sure this is encrypted I
17:50 kind of forgot about that step so what
17:53 we can do is go ahead over to
17:59 yeah I forgot about that so there's a
18:02 lot of different ways to encrypt the
18:03 password but you can just run it
18:07 through a md5 and so function Bas which
18:11 is a part of PHP so what you can do is
18:13 put uh PW gen
18:16 equals uh
18:18 md5 PW
18:21 gen all right so
18:25 now oh you know also by default I think
18:28 we need to increase the
18:31 size of the password field so if you
18:35 take this click on edit we can change
18:40 the length I forget how many characters
18:42 the md5 is I'm not sure what it is off
18:45 hand but I increased it to 25 basically
18:48 all right so let me go back in here I
18:50 just clicked empty to get rid of all the
18:52 fields we'll try that again so we'll
18:56 upload that
19:01 we go to final step put in
19:07 contact uh the
19:13 city all right so now we'll check
19:17 this now it's an encrypted password so I
19:20 won't be able to see anybody's passwords
19:23 all right so I the verified of course is
19:26 uh by default not there oh and I forgot
19:28 about the data added damn I just keep on
19:30 messing things up uh let's go over here
19:33 real
19:38 quick data
19:43 added and then put a comma and put
19:47 in I think it is now
19:52 so just like that save
19:57 that and real
19:59 quickly come back over here
20:03 empty do this again one more
20:06 time and uh right
20:12 here that's my wife's email uh right
20:17 here all right so let's check this real
20:22 quick yeah oops what I need to do is
20:27 come back
20:29 sorry about
20:32 that get rid of those stupid
20:38 quotes and instead of going through this
20:41 again I'm just going to put in any type
20:43 of
20:46 email check
20:48 this there we go correct all right so
20:53 then I real quick I check my email to
20:55 see if I actually received the email and
20:59 here it is I paused real quick and I
21:00 just got it up and uh now if you click
21:03 on this link it's not going to work cuz
21:05 we haven't created that page so what
21:07 we'll do is create that page real quick
21:12 so let's come back over
21:14 here and I'm just going to go to files
21:17 I'm going to save this file save as on
21:19 our current page and we'll call this
21:22 verify email.
21:26 PHP and let's see here get rid of this
21:30 stuff at the
21:34 top all right and then also get rid
21:37 of let's see here all of this stuff no
21:41 not
21:46 that all
21:47 right and save that all right so
21:51 basically at the top we have to check
21:54 for that variable that Eid variable
21:57 that's in the URL so basically if is
22:02 set and this type whenever you have a a
22:05 variable that's specified in the actual
22:07 URL it's a get not
22:09 post and we'll put
22:13 Eid so that means if it's if it's there
22:17 good and what we want to do now is a
22:20 query query equals
22:24 select I think I'll do for this one
22:28 uh
22:31 account
22:33 from and this is going to be
22:36 users
22:38 where and I'll put
22:41 in
22:42 password equals
22:45 get
22:49 Eid and then we'll put we'll actually do
22:52 the query and that's going to be um oh
22:55 wait we're going to put um so what the
22:59 the purpose of this is is to first of
23:01 all check to see if that Eid actually
23:05 exists as a password because somebody
23:07 can alter that field in that URL and
23:10 just try to go there in the browser so
23:11 you want to check for that so uh what
23:14 you would do
23:15 is uh let's see
23:18 here yeah is put in um I'll just name it
23:23 exists equals DB and this will be result
23:29 query so the result will basically give
23:32 us a count if the count is zero then it
23:34 doesn't so I it doesn't exist that is so
23:38 it would be uh
23:40 if exists doesn't
23:43 equal uh zero I think it would be that
23:48 and then we'll put in another
23:52 query query equals update users
23:56 set I think it's verified let me go back
24:00 and remember verified
24:03 yeah verified equals
24:07 1 where password equals get
24:13 Eid and then result equals DB query
24:21 query success equals
24:24 1 all right I
24:29 I think what we'll do is change this to
24:31 equals
24:34 one and then what you could do is else
24:37 if it
24:39 doesn't maybe just send them back to the
24:41 homepage so header
24:43 location
24:46 index.php all right so we also have to
24:50 uh adjust the HT access for this so that
24:54 it
24:55 is yeah let me see where was that step
24:58 two
25:01 and where were we sending them confirm
25:03 email okay
25:07 so just copy that paste it it's going to
25:11 be
25:12 confirm
25:13 email and this is going to
25:16 be verify mail.php
25:20 okay so let's see if this actually works
25:26 all right so let me come down here
25:29 here I'm just going to take those three
25:31 I'm not sure if I edited that step two
25:33 one or
25:34 not all right so basically let me open
25:38 up that
25:40 email and see if it
25:43 works and actually I just realized
25:46 something it didn't work but I just
25:47 realized it's a bad idea to use the
25:49 password field for the verification so
25:51 we should have a separate field as you
25:54 can tell I didn't do this before we we
25:56 should have a separate field specific
25:58 spefically for the actual uh
26:01 verification code so I'm going to make
26:03 that adjustment really quick so at the
26:06 end of uh State we can put uh a field
26:10 called verify ID the uh it'll be a
26:13 varart and we want it to be 32 and I
26:18 just found out that you know when it
26:19 comes to the m md5 hash it's 32
26:21 characters long so yeah save that let's
26:24 go back to password because I only made
26:26 that 25 so that wouldn't even work work
26:28 correctly I will edit that to
26:32 32 save it all right so then all I have
26:35 to do is make a quick adjustment to the
26:39 index or step 2.
26:42 PHP basically uh we want to
26:49 take
26:52 this and we'll call this verify code let
26:56 generate password
26:58 and we'll put in after yeah after State
27:02 we'll put
27:04 in verify code I think we called
27:08 it and then put that right
27:18 here yeah let me make sure it is verify
27:20 code I can't remember anything or verify
27:23 ID I'll edit
27:26 that ver I coulde all right and then we
27:32 have to make an adjustment real quick
27:35 to this
27:38 portion uh over here to verify email so
27:42 select count from users where verify
27:45 code is to get the
27:47 Eid and then you just set verified one
27:50 where verify
27:53 code is
27:55 that all right and then also come back
27:58 to step two for the email and this is
28:01 going to be changed from verify code
28:04 to or from PW gen verify code okay there
28:09 we go sorry about that uh let me go
28:11 ahead and going to empty everything in
28:14 here and we'll try this again real
28:20 quickly all right so I'm not really
28:23 concerned about this
28:25 stuff email address contact at designc
28:28 course.com
28:33 warrren all right so now what I want to
28:35 do is to make sure this stuff submitted
28:39 correctly the verify code is not there
28:43 what the hell one second and yeah I
28:46 don't even think I uploaded the files
28:48 that's okay so I just emptied that real
28:50 quick I paused the video and I uploaded
28:52 the files this time and so now we have
28:54 the verify code which is right here and
28:57 it's not uh we didn't run through an md5
28:59 because we don't have to so now the uh
29:02 we'll check the email real quick which
29:05 is right here if we click on this we'll
29:08 see nothing shows up uh correctly
29:11 because we have to adjust real quickly
29:15 the uh let me see verify
29:18 email this stuff we need to add a
29:21 forward slash right
29:23 here I think that's the only two that we
29:25 need to do so if I re-upload that real
29:31 quick and we refresh that
29:34 page oops I don't want to go to
29:37 Google ah dang
29:39 it one
29:42 second there's also an image and where
29:45 is it at I
29:47 think nap. PHP for our
29:51 logo forward slash
29:55 there and upload it
30:03 and because we don't have anything here
30:05 it's not showing us a message it's not
30:07 shooting us back to the homepage
30:09 fortunately which means that it should
30:11 have worked so if we go here hit browse
30:13 verifi is now one so that works um so
30:17 real quick just end as we're at 30
30:19 minutes already um let me go back to
30:22 verify email what we want to do is put
30:26 here let me go back to step two grab
30:28 some HTML real
30:31 quick uh you know what I think what we
30:34 would do actually is in verify email if
30:37 it's
30:38 verified we can do
30:41 a a
30:43 header
30:45 location and this would be slash uh I
30:48 guess we could call it Main and what
30:50 that'll do is send them to that main
30:53 area um the main control panel or not
30:55 control panel but where it lists out
30:57 there potential matches um I'm not going
31:00 to get before we do this actually though
31:03 we'll have to automatically just log
31:05 them in and I yeah but I'm not going to
31:08 mess with that now because we're already
31:09 at 30 minutes so tomorrow we'll go ahead
31:12 and do that all right so yeah I
31:15 apologize for being went all around I I
31:18 didn't do this project beforehand I was
31:19 just kind of winging it so that's
31:21 usually the natural process of how it
31:23 goes so all right yeah uh I will see you
31:25 guys tomorrow


---

## Source: 12-build-a-web-app-mysql-php-part-3.txt

- Original path: `addintional info to add\12-build-a-web-app-mysql-php-part-3.txt`
- Size: `16468` bytes
- SHA256: `E82A0A6F0B4AAA213111BD2E55F0AFC74FB98D5D0CD183ED269B2EF6C51AB11A`

---

12. Build a Web App - MySQL/PHP Part 3

0:11 hello gary simon here of
0:12 designcourse.com today we're going to
0:14 continue on by doing a little bit more
0:16 work in mysql and php
0:18 we're going to insert and separate the
0:20 data of for the i wants and the i offers
0:23 session variables we're also going to
0:25 create a function
0:27 for logging in alright so basically if
0:29 you need uh
0:30 access to the project files they're
0:32 available uh
0:33 in the description here in youtube and
0:35 at designcourse.com
0:37 and if you haven't yet subscribe here on
0:38 youtube all right let's get started
0:41 all right so basically where we left off
0:45 is right over here i yep so basically we
0:49 have all this information the user data
0:52 the email
0:52 password city state and the data added
0:55 is all saved in
0:56 the mysql table but the one thing that
0:59 we didn't save yet
1:00 is the two session variables um
1:03 from the home page that i need and that
1:06 i can offer this so that's what we're
1:09 going to focus on now
1:10 so basically you know i really tried to
1:13 think about
1:13 what's the best way to kind of save this
1:16 data so
1:16 you know down here we suggest that
1:18 people basically split
1:21 um their needs or wants with a comma
1:24 and then initially i thought okay what
1:26 we would do is just take that comma
1:29 and we would run the variable through
1:32 something called php explode and that's
1:35 a function
1:36 that will take a string and basically
1:39 create an array
1:40 and separate each one of these uh
1:43 so that we could place it into the
1:45 database
1:46 so the problem with that is is uh
1:49 let's say for example someone needs um
1:54 lawn mowing so they need their lawn
1:56 mowed okay whatever
1:57 whatever so let's say for example
1:58 someone's gonna offer that
2:00 um except they put mowing lawn
2:03 well then we kind of have an issue if
2:05 you're trying to match those two up so
2:07 what i decided to do instead of
2:08 separating by comma i'm just going to
2:10 separate them by a space
2:12 so each word will get entered into its
2:14 own row
2:15 in the mysql table so i'm going to
2:18 create that table
2:19 real quickly and that's over here
2:22 so i'm just going to create two
2:24 different tables the first one is going
2:25 to be once the number of fields will be
2:27 four
2:29 and the first one is going to be id it's
2:31 going to be an integer
2:33 i 11 characters long and then
2:38 just change this stuff real quick auto
2:40 increment
2:42 and then we're going to have the user id
2:44 that as well will be the integer
2:46 an integer uh this is going to be the
2:49 actual
2:50 i'll put let's make it want the actual
2:52 want will go here
2:53 i'll make that varchar and really this
2:55 is just going to be single word i'm just
2:57 going to put 50 just to be i don't know
2:58 if any 50
3:00 long character words but whatever and
3:02 then date added
3:04 and that will be
3:07 uh date time all right
3:11 save and then to save ourselves some
3:13 times we could take this
3:14 up here just copy that go to sql
3:18 tab paste that in we're going to change
3:20 the name of the tables to offers
3:23 and this to offer
3:27 and i think that is all we have to
3:28 change
3:30 and hit go all right so we now have two
3:33 new tables offers and
3:35 once all right so now what we want to do
3:37 is come back to our
3:40 code and
3:44 there it is and basically i i think
3:47 you could do it anywhere inside this
3:48 section i'm just going to put it right
3:50 after
3:51 this insert and i'm going to make a
3:54 comment
3:57 insert wants and offers
4:01 and that will go there so basically
4:04 what we want to do is put in once
4:08 arr as in array equals explode
4:12 and then this is where basically we
4:14 specify whatever it is that we want to
4:17 separate
4:18 the actual string so uh that's just
4:21 gonna be a simple space
4:23 and then i'm going to put in
4:26 session i
4:30 want i think that was the name of it
4:33 i'll make sure here in a second
4:36 and then copy this the same thing for
4:38 the offers
4:40 as well
4:43 i offer and then what we'll do
4:47 is run through those so the way you do
4:49 that is do a four each
4:50 once a r as once
4:56 and that means this will basically loop
4:59 the uh however many you know if they
5:01 entered three different words it'll go
5:03 through this
5:03 three different times and put in the
5:06 actual insert query
5:10 insert into once and that will be
5:14 the user id
5:18 want and date added
5:24 values and then
5:27 we also need to get their user id and
5:30 the user id is generated from the id
5:33 field
5:33 which we didn't put in here it's
5:35 automatically generated i
5:37 so i have to make a couple changes to
5:39 this real quick just to get that
5:40 whatever that insert id up here was so
5:43 basically that would be i don't know why
5:47 i didn't do this i forgot
5:48 to add this uh the last time so all i
5:50 have to do is put result equals
5:53 there and then put ins id
5:57 for insert id equals db insert
6:02 id and then result
6:05 so it's getting the insert id from this
6:08 result right here
6:09 and this again comes from that class
6:12 that i use
6:13 all right so now we have that and so
6:16 right here for the user id is where we
6:18 put that
6:20 variable right here all right so that
6:22 tells us which users are associated with
6:25 whatever wants and offers all right and
6:27 then we can put
6:28 the actual once variable right here and
6:31 that comes from
6:32 this and that will just basically be a
6:36 single word
6:37 and then the actual date added which is
6:42 just now
6:43 like that
6:47 and then result equals db
6:50 query and the query variable
6:54 all right so we'll take that and then
6:57 just
6:58 paste that in
7:03 all right and changes to offers
7:08 change this to
7:11 offers and
7:14 this to offer
7:18 and this two offers there we go so it's
7:21 basically just
7:21 a duplicate thing all right so
7:25 i basically let me come down here get
7:28 rid of some of the space
7:29 that should be all it takes right here
7:31 to insert the individual
7:34 once and offers basically so i'm going
7:35 to save that
7:37 and i'm going to go ahead and upload
7:40 this
7:41 and so i'm going to add this here and
7:44 i'm also
7:44 going to change one thing real quick in
7:48 the verify emails i saw an error last
7:50 time
7:51 i where is that at
7:55 yeah there needs to be a semicolon at
7:57 the end
7:58 and also this main i don't think that's
8:01 working right now so
8:02 i don't think we added that as a rewrite
8:06 so we'll do that real quick change this
8:08 to
8:10 main and then this to main
8:13 dot php
8:16 all right so let's uh save those two
8:18 files
8:20 upload those all right so
8:24 let's go back here i need
8:29 and i'm also going to illustrate one
8:31 issue as well
8:32 while i'll do this i'll just put sex and
8:34 candy
8:36 i think i heard that from a song or
8:37 something and then i can offer
8:40 uh i don't know exercise equipment
8:43 whatever i'm just using as an example
8:46 find matches let's put in an email
8:48 address i
8:50 uh let me think of one that i'm using
8:53 i'll just put
8:54 g simon
8:58 warren alabama whatever all right
9:01 so let's see if this worked
9:05 so let's click on browse oh no that
9:08 didn't work what about the offers i bet
9:09 that didn't work either oh that worked
9:11 i think i may have just screwed up a
9:12 variable name so as you can see for the
9:14 offers at least
9:15 i offered exercise equipment okay so
9:19 each one of these now has this user id
9:21 here
9:22 has the date added has its own unique id
9:24 uh
9:25 let me go see why once didn't work
9:29 so let me go back
9:32 here real quick and that's because it
9:35 the
9:36 the variable wasn't i want it's i need
9:39 there we go so i need we can leave this
9:42 the same
9:43 just as long as that was changed up it
9:46 should work correctly now
9:48 and so let me just go back here
9:52 let me see if i can just refresh this
9:55 and see if
9:56 anything else gets changed here all
9:59 right there we go
10:00 all right so the issue being obviously
10:03 is it's
10:03 saving it doesn't matter what type of
10:05 word it is uh
10:07 so generic words like and and even
10:10 generic words like
10:11 equipment that should not happen
10:15 i we we shouldn't really save those
10:17 generic words because otherwise
10:20 two people might put and in their their
10:22 need and then another person might put
10:24 and in their want and then it's going to
10:25 give them a match but it's not going to
10:27 be relevant so you would definitely want
10:28 to run these through
10:29 something like an str replace which is a
10:31 function with php which will replace
10:33 words so you can basically sanitize that
10:37 string before you go ahead and split it
10:39 up using
10:39 explode and inserting into the database
10:41 i'm not going to mess around with that
10:42 just because it's
10:44 the tutorial and it's on it you know
10:45 there's probably a thousand things i
10:47 could do differently
10:48 but anyhow uh yeah it works just for our
10:50 immediate purposes
10:51 um so now what basically happens is
10:56 let me load up my email and here's the
10:58 email from that second time i refreshed
11:00 it and by the way
11:01 when a person refreshes the browser you
11:03 obviously you should check to see if
11:05 that email exists already so it doesn't
11:06 add two rows
11:07 but i yeah this is basically where it
11:10 takes us when
11:11 after a person's confirmed their email i
11:14 and that comes from again where's that
11:16 redirect just to show you real quick
11:18 just
11:18 everybody understands that comes from
11:20 this line right here so
11:22 header location is just going to
11:24 redirect the browser from the verify
11:25 email.php
11:26 over to maine all right but
11:30 before it really i
11:33 should direct a person over to maine uh
11:36 to this main area where
11:37 it will eventually show the real matches
11:39 uh they need it needs to basically log
11:42 them in so it's not doing that yet and i
11:46 so i have a uh a function basically a
11:50 login function that we're going to add
11:52 to our session.inc.php file that will
11:56 make
11:56 logging people in pretty easy so
12:00 let me get that out real quick
12:03 let's go to include session.inc all we
12:06 have is just a session
12:08 start here and so real quickly before i
12:12 paste that in
12:12 and kind of describe it real quickly i'm
12:14 going to make a
12:16 slight change to this over here instead
12:18 of just counting the row and then
12:19 checking to see
12:20 uh if that actually equals one or not
12:23 we're going to
12:24 select all from users
12:27 where verify code gets that and also
12:29 change the result to fetch
12:31 row so that basically means it's going
12:32 to take every single row that's
12:34 associated with the verify code that
12:36 equals that
12:36 if it does find one and then put them
12:38 into basically
12:40 a variable that we can access and you'll
12:42 see why that's important here so
12:44 what we need to do is change exists from
12:47 exists here and we can put in i think
12:51 just email
12:52 doesn't equal blank so if it
12:56 if if the uh email isn't blank
12:59 then it means it found an actual match
13:02 for the
13:02 verify code and then we can keep this
13:06 the same right here uh this right here
13:09 and then
13:09 what we'll do is just uh underneath this
13:12 we're going to put in
13:14 user login and
13:17 this is where we're going to put the
13:19 exists
13:22 username
13:26 sorry not username we're not using
13:28 usernames here just the email
13:30 and then also
13:33 exists password
13:38 all right and that's all we have to do
13:40 for there we'll save this real quick
13:43 and then come back to session inc and we
13:46 need to
13:46 include our files here real quick let me
13:51 go to
13:51 index and
13:57 copy those two lines
14:02 right and so basically inside of here
14:05 is where we're going to put the add the
14:08 actual function
14:10 and this is going to be user login which
14:12 is what we referenced in the
14:14 verify email file and then we're going
14:16 to put in the
14:17 variables here i can just make this
14:20 email
14:21 and then the second one will be password
14:24 and then inside of here is where we're
14:25 going to
14:27 add a couple things global db
14:31 and then put in our
14:34 variables here for the email so i'm just
14:36 going to put in new email
14:38 equals add slashes
14:41 i email right here and then new
14:45 pw equals i'm just gonna put password
14:48 here for now
14:50 and then a query select
14:53 all from users where
14:57 email equals new email
15:01 and password equals
15:05 new pw
15:08 oops and then i
15:12 limit one just to limit the the results
15:15 to one and then
15:17 uh if i'm just make the
15:20 variable arn min equals db
15:24 fetch row query
15:28 equals false then we want to
15:33 return false that basically says if this
15:38 is not found if the user is not found
15:40 basically then
15:41 it's not going to work it's going to
15:42 return false and then
15:44 um otherwise down here is where we can
15:46 actually set up our session variables
15:48 um where we'll check to see if the user
15:50 is actually logged in through the
15:52 various pages
15:53 that require a login and i
15:56 i don't want to use client id i'll use
15:57 user id
15:59 equals or equals i arr
16:03 admin id which is the id
16:06 field associated with the person's um
16:09 row in the users table
16:12 actually i don't feel like typing this
16:14 all out again just gonna
16:16 do this over here and i'll just put you
16:19 know sometimes it's worth saving some
16:21 session variables to quickly access
16:23 like uh basic user data like email and
16:26 their id
16:26 so i'm just going to limit to those two
16:28 session variables
16:30 and down here at the end just put return
16:33 true
16:35 and that is it go ahead and save this
16:38 and then let's see over here
16:44 all right so basically let me get out
16:47 main.php
16:49 so on main.php we want to add our
16:51 includes as well so
16:52 let me go over here just take these
16:54 three at the top
16:56 come over here at main and
17:02 we'll go ahead and also check for
17:05 the client session variable so
17:08 basically i if
17:11 is set session
17:15 user id
17:18 and then we just redirect them basically
17:21 back to the home page
17:27 all right and so
17:31 if the session's not there redirect them
17:33 back otherwise
17:34 it'll load up this page which obviously
17:37 the information down here isn't yet
17:39 dynamic
17:40 all right so i'm going to save this
17:41 stuff
17:43 and hope it works but you probably won't
17:47 no okay let me go ahead and go to
17:49 include
17:51 and upload that as well and we'll see if
17:54 this works
17:55 and fortunately it does i didn't want to
17:57 embarrass myself again so i paused and
17:59 ran through
18:00 it so um you know
18:03 just to show you real quick that it does
18:05 work
18:07 um let's do that
18:10 check the email
18:14 click on it and it automatically directs
18:17 us back here to main.php
18:20 and just to make sure that this is all
18:22 working correctly
18:23 um uh what we can do
18:27 i mean it definitely is but one thing
18:29 you can do just to check
18:31 real quickly is to on main type php
18:37 temporarily put echo session user id
18:42 just at the top let me re-upload that
18:45 real quick
18:47 and that's in main and then we can
18:50 refresh this page
18:52 and it shows that client user id so we
18:55 are logged in
18:56 all right so i'm going to end it there
18:57 for today and when we create the actual
19:00 login page we know which is over
19:02 uh oh as you can see it's not showing it
19:04 because we're logged in i don't have a
19:06 logout so
19:07 and yeah there's usually just in button
19:09 here we'll make a quick login page and
19:11 that will use that function
19:14 from the the session.inc.php that we
19:18 made
19:19 and then all the obviously as well we
19:21 have
19:22 this stuff to worry about as well all
19:24 right so
19:25 uh yeah check out designcourse.com and
19:28 subscribe here on youtube if you haven't
19:30 yet alright goodbye
19:47 you


---

## Source: 13-build-a-web-app-mysql-php-part-4.txt

- Original path: `addintional info to add\13-build-a-web-app-mysql-php-part-4.txt`
- Size: `20184` bytes
- SHA256: `337E788EBA7EEBC642CB51E0F07760B17851FC69625ED976E83A64121BBA628B`

---

13. Build a Web App - MySQL/PHP Part 4

0:11 hello gary simon of designcourse.com
0:14 today we're going to work with the main
0:16 logged in
0:16 area where it shows people's matches at
0:18 bartiful.com
0:20 so if you need access to the project
0:21 files they're available at
0:22 designcourse.com and as always subscribe
0:24 here
0:25 on youtube if you haven't yet alright
0:26 let's get started alright so where we
0:29 basically left
0:30 off uh yesterday was
0:33 the portion where we directed the user
0:36 to the main.php
0:38 page uh after verifying their email
0:41 uh so basically now uh i've went ahead
0:44 and i emptied the offers and the once
0:47 table
0:48 and i i did that because i'm going to
0:49 add two more rows to this just to make
0:52 things a little bit easier
0:54 uh so those two rows or this two fields
0:56 basically are going to be the
0:58 state and the city and the reason i'm
1:01 doing that is just to make it a little
1:02 bit easier on us when it comes to the
1:04 queries
1:05 and finding the uh the potential matches
1:08 now you can do
1:09 more advanced mysql queries where you
1:11 can look up information from the users
1:13 table like where they're from but just
1:15 to keep things
1:15 easy for this tutorial we're going to
1:18 include
1:19 with each offer and want the location
1:22 information so basically to add those
1:25 two rows i'm going to
1:26 add them right after the offer field
1:29 and the first field name will be
1:33 state actually i'll make it city
1:38 i have no clue how whatever the longest
1:41 city name is
1:42 and then oh i didn't add two of those
1:47 uh yeah add another one after city and
1:50 that will be state
1:52 and that is just two letters i believe
1:57 and save all right so what we need to do
2:00 now
2:01 is go back and edit uh
2:04 the i believe it's step two dot php
2:08 um right here where it enters that
2:10 information in
2:12 uh so we have insert new users we have
2:14 the city in the state
2:16 also i added this right here this kind
2:18 of cleans the data so
2:19 you know it prevents you from being
2:21 hacked basically the these uh
2:22 mysql escape string fields so let me
2:26 find
2:27 the uh city right here
2:31 and then right after uh
2:34 the want we'll go ahead and put in
2:39 let's see here's the city state i forgot
2:42 that i didn't add it to the
2:43 to both tables which i'll have to do
2:50 and just come over here and put
2:54 post city
3:01 post state
3:06 and i'll just copy this stuff
3:15 go back to the phpmyadmin
3:18 and we were on the offers table so we
3:21 have to do
3:22 the same thing for the once table
3:26 so add two fields this time after want
3:31 city state
3:36 100 and
3:41 to save all right
3:45 okay so now we know that when the new
3:48 offers and wants are added it's going to
3:49 include the city and state along with
3:51 each one of those
3:52 all right so now we'll progress to the
3:54 next step
3:56 and that's going to be over at maine.php
4:00 so the way i'm going to go back this is
4:04 oh we have to get rid of this echo we
4:05 don't need that anymore
4:08 is i'm going to do two queries where we
4:10 get
4:11 the once and the offers from the person
4:14 who's currently logged into the session
4:16 user user id so what we'll do is query
4:19 equals
4:20 select want from
4:23 once table where user id
4:27 equals i'll just
4:30 copy this and paste it in real quick
4:35 and do the
4:39 once ar for array equals
4:42 db fetch query
4:46 and then we'll take this and just
4:50 paste that in there change these names
4:53 around a little bit
4:56 offer from offers and then this is going
4:58 to be changed to offers
5:00 arr all right so once ar
5:04 and offers arr basically will hold
5:07 all of the person's wants and offers
5:09 that they entered from that step one
5:11 all right so now this is where we're
5:13 gonna come down
5:15 and we are going to get rid of
5:18 some of these right here so column four
5:20 when we want to keep
5:22 everything inside of column four so
5:25 right there so we're going to delete the
5:28 other two beneath it
5:29 basically right to about there so we're
5:32 keeping row
5:35 and so we're gonna give ourselves some
5:36 space here this is what's going to be
5:38 basically replicated based on if there's
5:42 matches
5:42 so what we'll do here is open up php
5:46 and i'm going to put in i'm going to
5:49 close it down here real quick
5:52 we're going to put in five four each
5:55 we're going to take our once arr
5:59 as once
6:02 all right so that takes that array and
6:04 it's going to open up and basically loop
6:06 through them
6:08 and let me come down here
6:13 all right so i am making a slight change
6:16 to the idea
6:18 just to make things more simple on us uh
6:22 it still makes the app useful though so
6:24 it doesn't really detract from
6:25 you know the the original idea that we
6:27 had so the original idea of course was
6:29 that we were going to show 100
6:31 matches where a person's once equal your
6:34 offers and their offers equal your wants
6:36 uh and then beneath that we would show
6:38 just the 50 what i'm gonna do
6:40 is just make it only fifty percent
6:43 and so the top portion of
6:46 the view let me uh well i'm not going to
6:48 mess around with that
6:49 yet the the top portion where it was 100
6:52 is just going to show
6:53 the 50 that matched there once and then
6:57 beneath that it will show offers in that
7:00 same way
7:00 so you'll see what i mean once we get
7:02 going here so
7:04 basically we have to do a another query
7:06 inside of here because remember what
7:08 we're doing is we're getting
7:10 all of the person who's currently using
7:12 the site logged in
7:13 their session user we're getting their
7:15 their wants and their offers here
7:17 and what we're doing down here is we're
7:19 going to go through
7:20 each of those once uh at the top
7:24 and then what we're doing we're going to
7:25 do is just basically copy this and paste
7:26 it for the offers beneath here so
7:28 once we have this done that's what we'll
7:30 do so what we're doing is going through
7:32 each of these once and now what we're
7:34 going to do is do another query
7:37 from the opposite table so we're
7:39 focusing
7:40 on the things a person wants so we're
7:42 going to look if anybody is offering
7:44 that want
7:44 basically so query equals select
7:48 all from offers where
7:51 and i'm going to make sure that i the
7:53 user id doesn't equal that person's
7:55 current currently logged in user id
7:58 because you don't want to
7:59 be potentially matched up with yourself
8:01 obviously so we're going to put
8:02 doesn't equal and we're going to put in
8:06 session user
8:09 id and
8:12 offer equals once
8:16 want
8:20 and then we're going to do once match
8:22 arr for array
8:23 equals db fetch query
8:28 all right so basically this is looking
8:30 for
8:31 any type of offers that match
8:35 the wants of the person so it's looking
8:38 through the offers table to see
8:40 if someone's offering what you want
8:41 basically and
8:43 it also doesn't equal your user id
8:46 and the reason is like if i say for
8:48 example you're looking
8:49 you're you're you're looking for a
8:51 fender guitar
8:53 and somebody's offering uh
8:57 oh but you're also wanting a you're
9:00 looking for a fender guitar but you're
9:01 offering a gibson guitar so we have that
9:04 guitar keyword in there twice so that's
9:05 why you don't want to use your
9:07 you don't want matched up with yourself
9:09 so basically i
9:11 now what we want to do after this is if
9:14 it finds a match here
9:17 and we'll specify that by if count
9:20 and you can count basically how many
9:22 matches are by doing by using the count
9:24 function
9:25 want match dot arr
9:29 doesn't equal zero
9:33 all right so basically if i found a
9:34 match it's going to do everything inside
9:37 this portion and then we're going to do
9:41 a couple of other queries so that's
9:44 going to be
9:47 one second here yeah we're going to do
9:50 first a for each
9:52 of the once
9:56 let me make sure i'm going to adjust
9:58 this real quick yeah
9:59 want match okay so it's going to be i
10:03 want match arr
10:09 as want match
10:14 all right
10:19 so basically it's saying if i the count
10:22 you know if basically if i found a match
10:24 here and then it says for each
10:26 what we're going to do is we're going to
10:27 loop through however many whether it be
10:30 one
10:30 or two or however many matches there
10:32 were that it found
10:34 so this is going to loop through those
10:35 and what it needs to do is find
10:38 the user information uh of the person
10:42 that matched who's basically offering
10:45 what you want
10:46 so the way we'll do that is
10:49 query equals select all from user oops
10:55 from users where id
10:58 equals want match
11:02 user id
11:07 and limit one
11:11 we just limit limits it to one row user
11:14 info equals
11:15 db fetch row
11:19 since you use fetch row just uh if it's
11:21 one row
11:23 and it is because we're limiting it to
11:24 one and then i what we also need is to
11:27 get
11:28 that users whoever it found a match for
11:31 their wants and their offers because
11:33 we're also listening
11:35 listening listing what they want and
11:37 offer and what they're offering
11:39 so what we'll do is i do a query equals
11:43 select want from once where
11:46 user id equals user info
11:50 id
11:53 and that's going to be there once arr
11:56 equals
11:56 db fetch query
12:02 and then what we need to do in order for
12:03 this to work correctly
12:05 is remember each person's one is on its
12:07 own row
12:08 basically in the table so we need to add
12:11 those
12:12 to a single line where they're or a
12:15 single string rather where they're
12:17 separated by a comma because that's how
12:19 we designed the
12:20 the the interface so basically what we
12:23 have to do
12:24 is do four each there wants arr as
12:28 their once
12:31 and then want ar this is the new
12:34 variable and we're making
12:35 an array so we add those brackets right
12:37 there equals
12:39 there once once
12:43 which their wants is right here this is
12:45 from that array from this query right
12:47 here
12:47 so then what we can do is another new
12:52 field there once equals implode
12:56 now implode remember we used explode
12:58 which separated
13:00 imploding does the opposite thing it'll
13:01 take everything
13:03 and basically we specify inside here
13:07 what it's going to add or separate
13:08 between the individual
13:10 parts of that array and then we'll
13:12 actually put put the actual array right
13:14 here which is want.arr
13:17 all right i know it's a little bit more
13:21 complex and i
13:22 didn't really think about uh this is a
13:24 little bit more complex than uh
13:26 i probably should have chose for a
13:27 project but anyhow no problem uh
13:29 so now what we want to do is duplicate
13:33 basically everything from here
13:37 down because we have to do it to find
13:39 their offers as well so
13:40 query equals offer from offers
13:45 their offers arr
13:50 and then change that right here
14:13 and finally right here
14:18 okay so basically now what we need to do
14:22 i'm going to get rid of
14:28 one of these brackets right here
14:31 and let me come down here
14:36 i'm going to add another one
14:40 right here it doesn't really matter the
14:42 location specifically
14:45 and what we want to do also is
14:48 when it comes to these two variables
14:50 that we created since it's going to be
14:52 potentially
14:52 looping through these it will add to
14:55 that
14:56 variable every time and it will
14:58 duplicate or replicate rather the uh
15:00 the information so what we want to do is
15:03 just before that first bracket closes
15:06 is put unset offer arr
15:11 and then onset want
15:14 arr and that basically just kind of
15:16 wipes the variable out
15:18 or clean so it starts over each time all
15:20 right so then down here
15:22 what we'll do is for there once this is
15:24 where we're going to actually
15:26 echo the information so i
15:29 php echo now we want to make sure that
15:33 the
15:33 um the actual string is
15:36 uppercase so you can do that with sdr2
15:39 upper
15:41 there once
15:49 and then same thing for their offers
15:56 save that all right and i also have a
16:00 function i found
16:01 that allows you to take a date time
16:03 column and i
16:04 or a time stamp rather and it'll
16:07 basically
16:08 echo how however many long like whether
16:10 it's seconds or minutes
16:12 you know uh hours days months years etc
16:16 so what i'm going to do is include that
16:19 at the top here
16:20 just as a function
16:27 the function is a go and the time is a
16:29 time stamp
16:36 save that oh and real quickly i made an
16:39 error here
16:39 on line 39 with the two queries that we
16:42 added
16:43 get rid of those right there
16:47 and then also real quickly i added i
16:50 screwed up one of the
16:52 what do you call uh right there it's
16:55 want not once
16:57 all right so basically now we want to do
17:00 is
17:00 upload the uh
17:05 these files so far
17:09 and let's go ahead and run through
17:11 everything real quickly just to uh
17:14 see what works so far hopefully
17:16 something
17:17 all right so refreshingness i i need
17:21 uh how about i'll just put children
17:24 games
17:25 and then i can offer
17:28 um
17:31 i'll put newborn clothes something like
17:34 that
17:35 all right and i'll put in my email here
17:38 real quick
17:39 or in ohio all right so i'm going to
17:42 check my email
17:44 and i'm just going to click the verify
17:46 link off screen
17:48 all right so basically there are no
17:50 matches
17:51 down here because remember i basically
17:54 got rid of everything so
17:55 if i click on once we have the
17:59 city state and i basically all separated
18:02 out as it should be
18:03 and then the offers as well all right so
18:07 basically what i need to do to to kind
18:09 of simulate this is create
18:11 another user and go through this where
18:13 we can kind of match one of these fields
18:15 up uh so basically let me come down
18:19 here all right so
18:22 i need okay so let's offer something
18:25 that that fictional person wanted so
18:27 they their wants are children
18:30 i want a children that's almost though
18:32 uh and then game so i'll just put games
18:34 over here
18:36 and then i can offer um
18:41 i don't know i'll just put nintendo or
18:43 something
18:45 all right find that i've
18:48 put another email here warren
18:52 ohio all right so now if we come over
18:56 here
18:57 since we're still logged into this
18:59 account the first one if we refresh this
19:02 wow it doesn't work all right oh because
19:05 i just realized i
19:07 should have put games over here so you
19:09 know what that's what i'll do
19:14 find matches and do this again real
19:17 quick
19:22 there we go now it works okay so
19:24 basically i found a person who's
19:26 offering
19:27 games and this is based on what a person
19:31 you know what this person is currently
19:33 logged in specified they want
19:35 games okay so uh now what we can do is
19:38 put in
19:39 get this information working down here
19:41 because that's still just
19:42 static html so let me come over here
19:46 focus on the state portion first
19:50 so we have just the state and a com our
19:53 city and a common than the state
19:55 so what we can do is
19:58 php echo
20:02 and that will be where we get that
20:05 information from
20:06 is select all from offers
20:11 want match arr
20:15 as one match okay so
20:23 and put the comma right here and then
20:26 put another period
20:27 to specify the want match
20:32 state also
20:35 we want these to be uppercase so what we
20:38 can do is the str
20:39 to upper
20:43 and i think by default it already is
20:46 the state uh capitals are already
20:48 capitalized so that's not
20:50 anything to worry about all right and
20:54 it looks good i'm going to upload this
20:57 and i refreshed and that works correctly
21:00 uh
21:01 so now we need to get the actual this
21:04 part down here
21:05 and we have to make an adjustment to a
21:06 query real quickly because
21:08 right now we saved the
21:11 dates as a date time field
21:15 right here um but we need to convert
21:18 that into
21:19 a unix time stamp in order for it to
21:21 work for that ago function that we added
21:23 to the top so
21:24 what we'll do is i guess we can just
21:28 come right here
21:30 actually no we can do it directly from
21:32 the query in mysql so
21:34 let's see where we can do that real
21:37 quickly
21:40 yeah select all right there
21:44 and we'll put in unix
21:48 timestamp date
21:51 added as date
21:54 added and then come down here
22:02 and we'll get rid of this portion and
22:04 just put php
22:06 echo ago which is the function name
22:10 one match date
22:13 added
22:16 and close it up like that
22:22 all right so now we'll go ahead and
22:24 upload this
22:26 let me find that
22:30 and then come over here we're looking at
22:33 this portion
22:35 refresh it posted eight minutes ago
22:39 all right so fairly simple i
22:43 now what we want to do basically is take
22:46 all this stuff
22:48 yeah we should also reword this and
22:50 probably be worth you know
22:52 changing the icon based on how we're
22:53 changing this because what we're doing
22:55 like i mentioned before
22:57 we're showing what people are offering
22:59 what this person
23:01 wants this person up here so um
23:04 let me go ahead and go back here
23:10 oh also i kind of forgot about something
23:12 we're not
23:13 uh we didn't do this query but
23:16 um we didn't specify in it the city and
23:19 the state
23:20 uh so right now it's just kind of
23:22 searching everywhere regardless of the
23:24 location
23:25 so what we can do is add um a couple
23:28 more ands
23:30 i which we're also going to have to
23:31 change to based on the search criteria
23:34 so basically we're going to want to look
23:36 for you know if a person
23:38 specified you know a new city and state
23:42 or a new city or whatever uh or if they
23:44 clicked on ignore location because right
23:46 now
23:46 it's treating it as as if a person
23:49 ignored the location
23:51 so but just for now just for this
23:52 because we're already at 23 minutes
23:54 just for now i'm going to put in
23:58 and state
24:02 equals
24:06 and we have to get the variable name i
24:08 think i will just do
24:09 yeah once
24:17 once and this is going to be state
24:22 oops i forgot that a
24:25 single quote there state
24:30 and
24:33 i'll just copy that real quick
24:39 city equals city
24:43 all right so now it's only going to
24:45 search or show a result based on
24:49 people who match the city in the state
24:55 and it's not because i forgot we're only
24:58 selecting over here
25:00 the want so we just need to come over
25:04 here and put city
25:12 state
25:14 and let me upload that and hope the
25:17 stupid thing works this time
25:19 there we go all right so uh yeah uh what
25:23 we'll do now
25:24 uh yeah instead of just replicating this
25:27 and making it work for
25:28 you know showing what people are wanting
25:31 what
25:31 this person's offering you know the flip
25:33 side of this i
25:34 i think we're just going to end it here
25:36 right now because we're still going to
25:38 want to work with the coding that we're
25:41 going to be that
25:42 eventually what we're that we're going
25:43 to be replicating down here
25:45 we still need to work with this over
25:47 here so that it works
25:48 for uh them ignoring the location or
25:52 specifying an
25:52 enter an entirely different city or
25:55 state
25:56 all right so all right we'll focus on
25:58 that
25:59 tomorrow all right so check out gary's
26:01 uh it's not gary simon
26:03 i'm thinking about my own personal
26:04 domain uh check out designcourse.com if
26:06 you haven't and subscribe here on
26:08 youtube alright see you tomorrow
26:26 you


---

## Source: 14-build-a-web-app-mysql-php-part-5-final.txt

- Original path: `addintional info to add\14-build-a-web-app-mysql-php-part-5-final.txt`
- Size: `11539` bytes
- SHA256: `1BC7B8665AC3C0E7FE3651B26B00F2431B33D80F327BE76F0DFC8DC827CC5574`

---

14. Build a Web App - MySQL/PHP Part 5 (Final)

0:12 Hello, Gary Simon of designcourse.com.
0:14 Today, we're going to put an end to this
0:17 mega tutorial on making a web app and
0:20 specifically because it's been about 2
0:22 weeks now and I just didn't want it to
0:24 go over 2 weeks, but we are going to
0:26 finish the main aspect of it, which is
0:28 the matching system and also making it
0:31 actually
0:32 um search based on location for that
0:35 form at the top. All right, so basically
0:37 if you need access to the project files,
0:38 they will be there this time since this
0:40 is the final uh tutorial. So, they're
0:44 available of course for free at
0:45 designcourse.com and if you haven't yet
0:47 subscribed here on YouTube. All right,
0:48 let's get started. All right, so I I
0:51 just ran through this tutorial and it
0:53 was like 16 minutes long and I realized
0:56 that my microphone wasn't recording. So,
0:59 so I have to do it again. This sucks so
1:01 bad. So, I'm going to be moving faster
1:03 this time just because I want to get
1:05 this whole series finished and I'm going
1:07 to be I just want to be done with it
1:08 anyhow. So, I because I didn't really
1:10 anticipate this taking 2 weeks and so I
1:13 just want to switch gears.
1:14 So, anyhow, to start again, I let's see.
1:18 We're back here in main.php.
1:21 Um we need to get that search form
1:24 working basically. So, let me get out my
1:27 window here and
1:30 I'm just going to um
1:32 Yeah, this is sucks. I
1:35 Let me go ahead and I have to upload
1:37 some files here.
1:41 Actually, let me cancel.
1:43 I'm off screen right now. Um
1:46 I just want to delete all the files that
1:48 I updated just now on uh
1:53 All right, so um basically this is where
1:55 we left off. Just this portion works and
1:57 this up here, the search form doesn't
1:59 work. This doesn't recognize that. So,
2:01 let's go ahead real quickly into that
2:03 section and get that working. So,
2:06 basically what we need to do is check to
2:08 see if that form has been submitted. So,
2:12 we'll come down here and
2:15 we'll put in if
2:18 if is not set
2:21 post state
2:25 then we'll make a query
2:28 or a variable, rather.
2:30 Additional query equals
2:32 and state equals
2:36 Well, let's see. Once state
2:39 and city equals
2:42 once not dash
2:45 uh once
2:47 city.
2:51 Yeah, and that's it. And then we'll put
2:54 else if
2:56 post ignore location which is that
3:00 checkbox doesn't equal one
3:03 then
3:06 the additional query this time
3:09 will equal
3:12 instead of getting it from the wants
3:16 we'll get it from the post.
3:19 Which
3:21 Oops, I forgot a bracket over there.
3:24 All right.
3:26 Okay, so now I will just come over here
3:32 and get rid of this portion at the end,
3:34 those two ands, and just put in
3:36 additional
3:40 query
3:42 and save it.
3:43 All right, so now if I go to
3:46 if I upload this off screen and come
3:49 back here
3:52 All right, so if if you refresh you see
3:54 no errors. That's always that's always a
3:56 good thing.
3:57 Uh now if we type in for example or just
4:00 put choose ignore location, hit update
4:02 results
4:03 you'll see that we get this over here
4:06 and this is messed up coding. This
4:08 should actually be two uh or three
4:10 separate columns and so the reason being
4:13 what we'll do is just fix that real
4:14 quick.
4:16 Uh we have to take off this bracket.
4:20 That's not technically a bracket, but
4:22 basically just put it put a new one down
4:24 here.
4:25 So, you save that and then you combat
4:31 or you fix, rather.
4:34 I'm going like I'm wrong damn windows
4:36 again up here. All right. So, if we
4:38 refresh this
4:40 we'll see now that we have
4:43 Dallas, Texas and
4:45 whatever that birth ta I have no
4:47 whatever. All right, so basically I
4:50 yeah, we have three different matches
4:51 and right now it's not it's basically
4:53 ignoring the location.
4:55 Um so, if we look over here, I
4:58 you'll see it looks kind of crappy
5:00 because we have like two um commas right
5:03 here and that's because I did not scrape
5:07 the commas remove the commas from the
5:11 Yeah, the second step. So, what you
5:13 would want to do ideally or maybe even
5:15 the first step for index.php
5:18 for the sessions where you set that, you
5:20 could do an str_replace and it would
5:22 look like this.
5:25 Replace a comma with nothing and then
5:32 close that up and that's how you would
5:34 get rid of commas and you can also get
5:36 rid of a bunch of other stuff too if you
5:37 wanted to. Um but I'm not going to mess
5:39 with that
5:40 just because this isn't a serious
5:42 project. All right, so I yeah, basically
5:46 now let's also go back and test and make
5:49 sure I make up a city and see
5:52 Yeah, it shouldn't show any results
5:54 basically.
5:55 Um
5:57 So, also uh let's see here. So,
6:00 what we could also do is like if no
6:02 results showed up, you could always just
6:04 go over to
6:06 um let me
6:08 come over here
6:10 go back to our main.php.
6:12 You know, so basically if
6:14 results were found
6:17 all you would have to do is put in
6:20 a variable
6:23 right I think right here would work.
6:25 Found results equals
6:28 one
6:30 and then down here
6:33 if
6:35 is set
6:36 found results
6:38 echo sorry, no results were found.
6:46 All right, and then I
6:49 what you could do, yeah, let's just test
6:51 that to make sure it works
6:53 and we can go back here to
6:56 refresh.
6:59 Oh, come on. Please, seriously?
7:03 All right, I
7:06 Let me go ahead back and yeah, I paused
7:08 that. I realized I should have put if
7:10 not set. So,
7:12 yeah.
7:14 I upload that. Make sure this works,
7:16 otherwise I'm going to look really
7:17 stupid. So, now I
7:20 There we go.
7:21 Now that works. All right, so I
7:24 also you'd want to change this text up
7:25 here cuz it's not really reflecting
7:27 what's happening. Um you could probably
7:29 change this text to um
7:32 people who have what you need and then
7:34 down here would be people who need what
7:36 you have basically. So, let me go over
7:39 here.
7:40 Um I'm not going to worry about that
7:42 changing that text though. Um but what
7:44 we can do now now that that area is
7:47 basically completed for the most part is
7:50 take this all of this stuff
7:54 and then copy it
7:56 get rid of all of this, these three
7:58 blocks of HTML.
8:02 And it should look like that and then
8:04 just paste all that in and then what you
8:06 need to do is just change up
8:09 the array right here. We had two of
8:10 them, wants_arr and then offers_arr.
8:13 I'm going to leave it as wants though
8:15 just to make it easier on us so that we
8:17 don't have to mess around with changing
8:18 so many different things. So, basically
8:21 the everything right here
8:23 can stay the same. Um let's see. All
8:27 right, so this has to change. This has
8:30 to change from offers to wants.
8:33 All right, and
8:35 what else?
8:38 From wants and where want equals wants
8:42 offer.
8:49 All right, and then I all this stays the
8:53 same as well.
8:57 I'm going to change this to found
8:58 results too just because I don't want
9:00 the other one.
9:01 Just like a
9:02 quick way of dealing with that.
9:05 And
9:07 yeah, I think that might actually work.
9:09 So,
9:11 let me
9:13 go back here
9:16 and
9:18 ignore location and now it's showing
9:20 different results based on the offers
9:23 and whatever that I specified for this
9:25 account. So,
9:27 yeah. I Now, basically
9:31 this is where I'm just going to end it.
9:33 Um when it comes to
9:35 the contact this person, you could do
9:37 you can approach that multiple ways. You
9:39 could pull the person's email and just
9:41 make it like an a draft link and it'll
9:43 just go to it'll open up their
9:45 uh their email client, which that's not
9:47 a good way because then people would be
9:49 spamming people left and right when
9:51 people's emails are exposed. Ideally,
9:53 what you would do is use maybe something
9:56 like jQuery to uh
9:58 check on click if one of these are uh
10:01 pressed, it'll bring up maybe like an
10:03 overlay div window where it it blurs out
10:05 the rest of the background. And you
10:06 could do a a Google search on how to do
10:08 that with CSS, basically.
10:10 Um and then inside there you would have
10:12 just a very simple message form where
10:14 you have a message area and a button,
10:16 click send. Uh and then it would send it
10:19 an email to the appropriate email based
10:21 on, you know, each one of these rows. Uh
10:24 the edit my barter thing, that's just I
10:26 ideally that would pop up in a new
10:28 window, though you can do it in an
10:29 entirely new document and mod rewrite it
10:31 maybe to like edit barter up here. And
10:33 then once again, I mean, if you've
10:35 followed along enough of this, I mean,
10:38 you should have a good understanding or
10:39 at least a good starting point to be
10:41 able to figure out how to edit
10:43 information in the actual database. So,
10:46 that's very basic stuff. Um the my
10:48 account, same thing, changing passwords
10:50 and changing uh the email accounts and
10:52 all that stuff. That's very basic. And
10:54 again, if you're
10:56 kind of you get stuck anywhere, just,
10:58 you know, become a self-teacher. I have
10:59 to do just use Google, type in your
11:01 issue specifically, uh and you'll
11:03 probably get a ton of results from sites
11:05 like Stack Overflow, where people have
11:07 asked your question already. And if you
11:08 can't find an answer to question, just
11:10 go to Stack Overflow and post it. Um a
11:12 log out, I mean, that's very simple. All
11:15 All that is just one line of code um to
11:17 kill a session, basically. Um so, yeah.
11:20 Uh
11:21 obviously, there's a lot more that needs
11:23 to be done, but the purpose of this
11:24 course, I think I fulfilled it over 2
11:26 weeks. I really didn't want it to run
11:27 over 2 weeks, and we're at that point.
11:30 But the purpose primarily being just to
11:32 show the full process of making an app,
11:35 so, you know, from coming up with the
11:36 idea, coming up with the domain name,
11:38 the the logo design, the mock-ups in
11:41 Photoshop, the HTML and CSS, and then
11:44 finally the coding portion. So,
11:46 hopefully, um even though we didn't get
11:48 to a finished full product, uh
11:51 hopefully you gained something out of
11:53 it. Uh and you took away, you know,
11:55 something positive. So, yeah. Um I'm
11:57 eager to start getting into other stuff
12:00 now. Um
12:01 I've been tampering with Unity, which is
12:04 a game engine. Uh
12:07 and it they have a free version as well.
12:09 And so, I've been
12:10 taking my newly acquired Blender skills,
12:13 and I've been playing around between uh
12:15 those programs, making 3D environments
12:18 uh that you can actually walk around.
12:19 And so, I'll be I think I'll definitely
12:21 be doing some of those. I'm not sure
12:22 when.
12:23 Uh but yeah, tomorrow I'll have a new
12:25 tutorial. I'm not even sure on what yet,
12:28 but uh yeah, I'll see you then. So,
12:30 I I'll be putting up the files here
12:34 uh for this final project. Not every
12:37 single day I've been adding the actual
12:38 project files, but today I will, just
12:40 because it's the end uh for the for the
12:43 this series. So, all right. Check out
12:45 designcourse.com and subscribe here on
12:47 YouTube. All right, bye.


---

## Source: everything-you-need-to-know-about-web-app-architecture.txt

- Original path: `addintional info to add\everything-you-need-to-know-about-web-app-architecture.txt`
- Size: `12809` bytes
- SHA256: `AFFFBCD5551257B220C400B667C996952D697FCCA1C1A9E3DB7FE0AE3633639E`

---

Everything You NEED to Know About WEB APP Architecture

0:00 one of the most important aspects of
0:01 software development is the architecture
0:03 of your application which is basically
0:05 the blueprint for how the web app is
0:07 structured think about the first decent
0:09 size app you ever built i'd be willing
0:11 to bet that you unknowingly implemented
0:13 the monolithic architecture or basically
0:16 where you put all of the code into a
0:18 single code base tightly coupled
0:19 together but if you want to efficiently
0:21 scale your app from a hundred users to
0:23 100 000 users then maybe you want to
0:25 take a look at microservice architecture
0:27 but that's not all there is to consider
0:29 in terms of architecture i mean how many
0:31 tiers is your application where does
0:33 each component live all on the same
0:35 server each have their own server are
0:37 you going with a server-less
0:38 architecture and if you're on web 2
0:40 you're probably doing client server but
0:41 if you're on web3 then you're doing
0:43 peer-to-peer all of this matters in the
0:46 context of what type of app that you
0:49 want to build so i've broken these down
0:50 put them into levels or buckets that are
0:52 actually comparable and created
0:54 explanations in a way for you to simply
0:56 understand the differences in the types
0:59 of web app architecture but first i'm
1:01 stoked to announce that jetbrain space
1:03 is the sponsor of today's video and i
1:05 may take a wild guess that you've
1:06 already heard of jetbrains they've
1:08 created intellij idea pycharm
1:11 team city and kotlin among many other
1:14 tools for developers and software teams
1:15 alike but today i want to talk to you
1:17 about a specific product created by
1:19 jetbrains jetbrains space space is
1:21 really a one-stop shop for all
1:24 development tools it's a unified
1:25 platform that covers the entire software
1:27 development pipeline everything you need
1:29 in a single tool set source code control
1:32 hosting using git code reviews with
1:34 merge requests and quality gates
1:36 automation jobs for building and
1:37 deploying applications project
1:39 management tools checklist for planning
1:41 and issue tracker and visual boards
1:43 packaging container registries for our
1:44 publishing artifacts the first class
1:46 integration with jetbrains intellij
1:48 based ides and cloud development
1:51 environment for remote development with
1:53 jetbrains ides but it's not only about
1:55 the development aspect it's also about
1:57 the organizational and communication
1:59 tools you have a team directory for
2:00 managing the company's organizational
2:02 structure management of vacations
2:04 absences and locations chats
2:06 collaborative documents blogs meeting
2:08 management personal calendars and to-do
2:10 lists for task management so if you work
2:13 in a team especially if you use any jet
2:15 branch products ides i would heavily
2:18 recommend checking out space because it
2:19 puts everything you need for
2:21 communicating and collaborating with
2:22 your team in one place you can try it
2:24 out for free using my link in the
2:25 description but you can also upgrade to
2:27 space team using my code which is also
2:29 in the description just below the link
2:31 so what is web app architecture to put
2:34 it simply the web app architecture of a
2:35 system describes its major components
2:38 their relationships and how they
2:39 interact with each other it essentially
2:41 serves as a blueprint the layout of it
2:44 all and there are two main ways in which
2:45 it's laid out at least in the
2:47 overarching more broad idea of
2:50 architecture with the main one being
2:52 client server architecture it would be
2:54 irresponsible for me not to start with
2:56 this as it is the fundamental building
2:58 block of the web so let's take the web
3:01 app we typically have the client side or
3:03 front-end the server side or back-end
3:06 the database and everything in between
3:08 and not all web applications are set up
3:10 just like this where you have the client
3:12 side the server side which is the
3:14 business logic in this case and then the
3:16 database all living on their own
3:18 physical machines this is where
3:20 different tiers in software architecture
3:22 comes into play a one-tier application
3:24 will have all of this on a single
3:26 machine a two-tier application can be
3:28 split one of two ways with all of the
3:30 code so the client side and then the
3:32 server side business logic living on one
3:34 machine and the database living on a
3:35 second machine or the client side living
3:37 on one machine and then the server side
3:39 business logic and database living on
3:41 the second machine that's two tier what
3:42 you're looking at now is three tier with
3:44 each individual
3:46 section being in its own machine and
3:48 finally you have interior which is
3:49 anything more than a three-tier
3:51 application this typically takes into
3:53 consideration the single responsibility
3:55 principle where each individual
3:57 component lives on its own machine so if
4:00 you have five or ten different
4:01 components in terms of business logic
4:04 you're gonna have five or ten different
4:05 machines just to cover this and for this
4:08 example we're sticking with a three tier
4:09 application so on the client side as you
4:11 interact with the web application it'll
4:12 send an http request to the server the
4:15 business logic which will then query the
4:17 database if needed which will respond
4:19 with that data which then we will
4:21 transform that data as needed to send an
4:23 http response back to the client and i
4:26 will say for all of the well actually
4:28 that'll be in the comments section
4:29 saying well actually send the http
4:31 request to a web server which then sends
4:32 an os thread to the application server
4:34 then does all of that and back through
4:36 actually you're speculating there
4:37 however by strict definition web server
4:40 is a subset of an application server so
4:42 all of that
4:43 occurs in our server tier right here now
4:45 let's take youtube as a real world
4:47 example when you're on youtube.com and
4:49 you saw this video pop up and you
4:50 clicked on this video you send an http
4:52 request from the client side which is
4:54 what you see to the server side which is
4:57 what you don't see unless something has
4:59 gone terribly wrong in order to access
5:02 the business logic the database and
5:05 everything that you need in order to
5:06 populate the webpage that you're on
5:08 right now which contains the video the
5:10 description all of the metadata the
5:13 comment section the recommendation
5:15 system on your well that side i think
5:18 everything that you see right now it
5:19 accesses all of that information and
5:21 then responds back to the client side
5:24 with that information
5:26 and serves it to you basically every
5:27 website you use youtube facebook twitter
5:30 your banking app is all client server
5:33 architecture however there is something
5:35 that opposes client server architecture
5:38 and that is known as peer-to-peer
5:40 architecture there are a small
5:42 percentage of business businesses that
5:44 use this and i'll give you some examples
5:46 but something that you can really wrap
5:47 your head around is web 3
5:50 the blockchain peer-to-peer architecture
5:52 is the base of blockchain technology it
5:55 is a network of computers also known as
5:57 nodes that are able to communicate with
5:59 each other without the need of a central
6:01 server like that of client server
6:04 architecture so it rules out the
6:05 possibility of single point failure
6:07 which i think i don't know if it was
6:09 earlier this year or in 2021 when
6:11 facebook and everything that facebook
6:13 owned whatsapp instagram went down for a
6:15 day because their servers failed that is
6:17 one of the negatives of client server in
6:20 one of the
6:21 avoidances or solutions that
6:23 peer-to-peer provides peer-to-peer
6:25 technology however is not only used in
6:28 web 3 and blockchain technology it is
6:30 that it actually exists currently with
6:33 some online gaming platforms for example
6:35 blizzard uses peer-to-peer to download
6:37 games between users they use this for
6:39 diablo 3 starcraft 2 and wow but for the
6:43 vast majority of what the internet is
6:45 today it is client server architecture
6:48 so now we have the next level of
6:51 architecture again these are these are
6:53 levels created by myself i just wanted
6:54 to be able to give you architecture that
6:56 is actually comparable to each other and
6:58 not just a bunch thrown in your face
7:00 so this is where monolithic
7:03 microservices and serverless come into
7:06 play in a monolithic architecture all
7:08 the modules will be coded in a single
7:10 codebase tightly coupled together this
7:13 is unlike the microservices architecture
7:15 where every distinct feature of an
7:17 application may have one or more
7:19 dedicated microservices powering this is
7:21 how basically everything used to be
7:23 built because it's i mean it's simple
7:25 it's fast you can easily deploy it
7:28 however there are a lot more negatives
7:30 than there are positives because
7:32 it's not scalable it's not reliable
7:35 there are single points of failure to
7:36 put in perspective every single time you
7:38 add a single line of code you would have
7:40 to redeploy the entire application and
7:43 not only do you have to redeploy it but
7:45 if something breaks
7:46 it breaks the entire application however
7:49 the answer to all of those problems is
7:51 solved with microservice architecture
7:54 this is where you have a collection of
7:56 services that each serve a unique
7:59 responsibility every single service is
8:01 deployed and lives separately from one
8:04 another and to complete the business
8:06 logic they can connect to each other as
8:08 needed or to put it simply
8:10 it's modular so where you have all of
8:13 these different aspects of youtube that
8:15 you can see on your page right now you
8:17 have a software development team that
8:19 works on one service the recommendation
8:22 system and then you have another team
8:23 that works another service the search
8:25 function they have another team that
8:26 works on the comment system so on and so
8:28 forth if they change one line of code
8:30 they're only redeploying their service
8:33 not the entire app and if they break
8:35 something they are breaking only their
8:37 service
8:38 not the entire app and then of course
8:40 with it being modular you can see just
8:42 how scalable it is because each service
8:45 can be scaled independently based on
8:48 traffic and where there is monolithic
8:50 architecture and microservice
8:52 architecture there's also something
8:54 called serverless architecture also
8:56 known as serverless service list
8:58 serverless computing or function as a
9:01 service it's a software design pattern
9:02 where our function which is a part of
9:04 the microservices responsibility is
9:06 hosted by a third party this is your aws
9:08 lambda functions your zur functions that
9:11 never know how to pronounce that in your
9:13 firebase cloud functions did i explain
9:15 oh no sure that's weird did i explain
9:18 that well enough let me give you one
9:19 more example as if you were online
9:21 shopping you have a product catalog you
9:23 have a checkout system and you have a
9:24 shipping process in a monolithic
9:26 application all of those are built and
9:29 deployed as one holistic unit in a
9:31 microservice application each individual
9:34 component is broken down into its own
9:36 service a benefit here is that each
9:39 individual microservice can have its own
9:41 language its own libraries and typically
9:43 have its own database and a serverless
9:45 application in this instance we're going
9:47 to be talking about serverless
9:48 microservices break the microservices
9:51 down even smaller into their own
9:54 individual event-driven functions for
9:56 example the shipping microservice will
9:59 have multiple functions within and once
10:01 an order is marked as ready to ship that
10:03 event could trigger a function that
10:05 validates the customer a successful
10:07 validation could trigger another
10:09 function that generates a shipping label
10:11 and finally creation of that shipping
10:14 label could trigger a final function
10:16 that sends a shipping confirmation email
10:18 to the customer see they're built with
10:20 serverless functions which execute small
10:22 blocks of code with one bucket code
10:25 triggering the next goodbye


---

## Source: 09_Developer_Tools_and_Infrastructure.md

- Original path: `ORGANIZED_KNOWLEDGE_BASE\09_Developer_Tools_and_Infrastructure.md`
- Size: `274158` bytes
- SHA256: `369B0417211FDD1821BCB6F1B3B261EC7AD29B669CB1AE70A42EC2F9359580BA`

---

# Developer Tools and Infrastructure

> **Category Description:** Git and GitHub fundamentals, system design architecture (APIs, databases, caching, CDNs, load balancing), and production infrastructure concepts for building scalable applications.

---

## Table of Contents

- 1. Git & GitHub Tutorial   Visualized Git Course for Beginner & Professional Developers in 2024
- 2. System Design Course – APIs, Databases, Caching, CDNs, Load Balancing & Production Infra


---

## 1. Git & GitHub Tutorial   Visualized Git Course for Beginner & Professional Developers in 2024

**Source File:** `VideoTranscriber_Git & GitHub Tutorial _ Visualized Git Course for Beginner & Professional Developers in 2024.txt` | **Size:** 66.2 KB

---

imagine you're working on a coding   project and you make a mistake that   breaks everything your boss would most   likely fire you if you were even able to   get a job in the first place without git   you'd have no easy way to go back and   undo the changes you're toasted git is   the industry standard most companies   team and open-source projects use git so   naturally every job description mentions   it learning it isn't just a nice to have   it's your get good or get out moment   it's a must for any serious developer   wanting to land the job so hi there and   welcome to a quick non-nonsense git and   GitHub crash course unlike a typical git   tutorial which only scratches the   surface and leaves you pushing straight   to production like many other interns we   go beyond the basics and dive into the   real stuff no one really talks about   like how to fix a broken production on a   Friday by the end of this course you'll   not only know how to track code changes   and collaborate with your team but also

  professionally resolve merge conflicts   fix real life production issues Write   Clean commits so your team doesn't have   to question your life choices recover   from major mistakes with reset revert   and checkout so when something breaks   production and it will you'll know   exactly how to fix it and save the day   use git through a GUI so you don't have   to memorize tons of commands and even   Master Advanced G tricks like   cherry-picking and stashing because   you're here to get good and not just get   by basically with this crash course   you'll become your company's goto get   guy the person everyone turns to when   things go south and there's a lot we'll   cover in this video and I don't expect   you to return to it anytime you need to   refer to a command for that reason I've   put together the ultimate git reference   guide packed with Advanced tips and   tricks real world use cases and commands   to help you level up your git skills you   can download it for free by clicking the

  link in the description and use it as a   companion to this course and your career   let's Dive Right In so what is git and   why is it so popular git is a   distributed Version Control System   sounds fancy right well let's break it   down the Version Control part helps you   track and manage code changes over time   while distributed means that every   developer's computer has a complete copy   of the code base including its entire   history of changes and information about   who changed what and when allowing you   to get blame someone hopefully people   won't blame you but do you really need   it can you code without using it well of   course you can but then your workflow   would look something like this you start   coding your project in a folder named my   project and as you make progress you   worry about losing your work so you   create copies my project V1 V2 V3 and so

  on then your colleague asks you for the   latest version use zip up my project V3   and email it over they made some changes   and sent it back as my project V3 Johns   changes. zip meanwhile you've continued   to work so now you have my project V4   you then need to manually compare John's   changes with your V4 and create a V5   incorporating everyone's work and then a   week later you realize you accidentally   removed a crucial feature in V2 you dig   through your old folders trying to   figure out what changed between versions   now imagine doing this with 10   developers each working on different   features it's a recipe for chaos lost   work and countless hours wasted on   version management system instead of   actual coding git solves all of these   problems and more it tracks every change   automatically allows multiple people to   work on the same project seamlessly and   lets you easily navigate through your

  Project's history no more final version   V2 final really final zip files git does   all of this for you but in a much more   powerful and organized way to get   started you need git installed whether   on Windows Mac or Linux it's just two   clicks away Google download get and get   it for your operating system once get is   installed open up your terminal nowadays   I prefer using a terminal built into my   IDE I'm using webstorm and honestly I   prefer it over vs code because   everything just works seamlessly and   webstorm get support is extraordinary   you can do so many things you'll learn   about in this video everything from   creating branches committing pulling   changes merging and even resolving   conflicts all without ever leaving the   IDE you can view your G history stash   changes and even review pull requests   directly inside webstorm it makes   working with Git smooth and intuitive   after walking you through the essential   git commands in the terminal I'll show

  you how we can perform the same tasks   more intuitively and efficiently using   webstorm if you're interested in trying   it out I've included a link in the   description where you can download   webstorm for free just create an account   click download and go through the   onboarding once it's set up create a new   project and you're ready to start coding   with all of these powerful git features   built in first things first let's check   whether you've installed git properly   run git D- version and you'll get back   the version that is installed on your   device next you need to configure G to   work with your name and email this is   just to track who made the changes in   the project so your colleagues know who   to blame here's the command get config   -- Global user.name and then in single   quotes put in your name once you do that   you can repeat the same command but this   time instead of changing user.name will   change user. email and here you can   enter your email press enter and that's   it you're all set up now let's talk

  about repositories a repo or a   repository is where G tracks everything   in your project think of it like a   folder that stores all the versions of   your code simply put if a folder is   being tracked by git we call it a repo   now let's create a new repository in   your terminal type get in it and press   enter as you can see git has just   initialized in your repository on top of   the success message we can also see a   warning in previous times the default   name of a branch has been Master but   nowadays you'll see main used much more   frequently as the name for the primary   Branch so let's immediately fix it by   configuring the initial Branch name you   can copy this Command right here and at   the end you can just say   main now considering that we have just   changed the initial configuration   settings we have to create a new folder   create a new one called something like   mastering git open it within your editor   and then rerun git in it as you can see

  here and here now we're in the main   branch that means that git has   initialized an empty repository you   won't see any changes yet in your folder   but a hidden dogit folder has been   created inside your directory you don't   need to touch this folder git handles   everything inside from commit history   branches you'll make remote repos and   more most of the time git will already   become pre-initialized by the framework   or library that you use to set up your   project with that's how integrated git   is into every developer's life so now   that we have this main right here what   does that exactly mean well Main is the   default Branch name of your repo created   by git every time you initialize git   this Branch will be automatically   created for you I'll teach you more   about get branches soon but for now know   that a branch is nothing but a parallel   version of your project all right let's   add some files and track changes I'll   create a new file called

  hello.js and you can see how smart   webstorm is it automatically asks me   whether I want to add it to get but for   now I'll cancel that because I want to   explain everything manually let's make   it simply run a console.log that prints   hello get alongside this file let's   create another new file and I'll call it   readme.

md in here we can do something   similar and say hello get and now run   git status git will tell you that you're   currently on the main branch that there   are no commits yet and that there are   two untracked files one of which is a   markdown document so to track   use get add readme.md   after adding a file we need to commit it   committing in git is like taking a   snapshot of your project at a certain   point think of it as creating a whole   new copy of your folder and telling git   to remember when you did it at what time   so in the future if anything happens   you'll time travel to this folder with   the commit name you specify to get and   see what you had in there it's essential   to commit your changes regularly Reg   regular commits help you keep track of   your progress and make it easier to   revert to previous versions if you break   something you can commit by running git

  commit dasm which stands for message and   then in single quoted strings you can   add that message for example add   readme.md   file there we go congrats you just   created a checkpoint in your Project's   history now let's try running git status   again to see what it shows as you can   notice that other file hello.

js is still   there it's not tracked we asked git to   track only the readme file to track this   file or other files that you may create   will have to run a similar command it'd   be too much work to commit each file   individually thankfully we have a   command that commits all the files we've   created or modified that git is not   tracking yet to see this in action let's   create another file   test.

js and let's add a simple conso log   that's simply cons logs a string of test   now to track both files and commit them   in a single commit action we can do that   by running git add dot the dot after git   add tells git to add all files created   modified or deleted to the git tracking   next as usual we can specify the commit   name for this tracked version by using   git commit   DM add hello and test   files there we go so now now we can see   that all of these files are tracked and   since I'm using webstorm it also has a   hidden Ida folder so it added it to   tracking as well which I'm okay with   well done now to see the history of all   commits we've created we can use a new   command git log and there we have it our   git history it contains a commit ID or a   hash automatically created by git the   author we specified when using it config

  a Tim stamp and the commit message we   provided great but how do we switch to   an older commit and restore it let's say   the commit add hello and test files   introduces some buggy code and we want   to restore our project to a previous   version without these files our brain   would immediately suggest deleting those   files entirely or clearing up their code   and if you do that you'll most likely   break your production because other   files depend on those files so instead   of deleting them manually to restore to   the first version where we had only   committed the readme file we can use a   new command first you have to copy the   commit hash yours is going to be   different from mine so make sure to copy   yours I'll get this one first that says   add readme MD file and I'll press copy   then you have to exit this git log by   pressing the Q letter on the keyboard   and then you can use a command get   checkout and then you can provide a hash   of a specific commit or a branch you   want to check out to now press enter

  okay something happened first of all our   two files are gone detached head   experimental changes what's happening   well in git there is a concept of a head   which refers to the pointer pointing to   the latest commit you've created when we   created our second commit our head   shifted from read me commit to the   latest add hello and test files commit   but when we ran get checkout command we   moved the head to the previous older   commit that's why we got this detached   head warning it's a state where the head   pointer no longer points to the latest   Branch commit and the rest of this   message tells you that you can create a   new Branch off of this commit but don't   worry your files are still somewhere   when you use a git checkout command   You're simply viewing the repository   State as it was at the time of a   specific commit like right now we're   viewing a snapshot of your codebase at a   previous moment in time when we only had   a readme.md file the beauty of this is

  that all the logs and files whether   created or modified remain untouched the   get checkout command won't delete any   logs or history so you can safely   explore past states without worry but   what if you actually want to discard   changes made after that commit maybe you   want to quickly roll back to a stable   state after an issue hits production   tidy up messy commits to look more   professional or undo a bad push you   regret making perhaps you've been   experimenting with a refactor that   didn't pan out or you need to recover   from a messy merge conflict thankfully   git provides a few commands that will   help you in these scenarios and I'll   teach you how all of that works very   soon so just keep watching and we'll   dive into these more advanced commands   that are really going to help you well   fix a broken production now to go back   to our current state which is often   called the head State you simply have to   run get checkout Main and there we go   previous head position was at the hash   of this checkout and now you switch the

  branch to main you can see the same   thing happen right here on the bottom   right or the top left depending where   you're branching is   and if you made any changes while in the   detached head State and you want to   discard them you can do the same thing   get checkout dasf that means force and   then get back to main in this case we're   good we're already on Main and that's it   you already know more about G than most   developers do of course we'll dive   deeper into advanced use cases and tips   and tricks soon but now let's talk about   GitHub and how it differs from git git   is a tool you use to track changes   whereas GitHub is a cloud platform that   allows you to store your git   repositories online and collaborate with   others to push your local project to   GitHub you'll need to link your   repository to a remote but what's a   remote well there are two types of   repositories local repository is a   version of a project that exists on your

  own machine laptop or whatever else you   use where you do your developer work   when you initialize a repo using get in   it you create a local repo in your   folder changes you make there are   private until you push them to a remote   repository so a remote repo is a version   of a project stored on a server like   GitHub gitlab or bid bucket it's used to   share code between collaborators and   keep project versions in sync across   different users computers when   collaborating with a team you'll have   two kinds of repost everyone in the team   will have a local repository on their   machine and there will also be this one   common remote repo from which everyone   will sync their local repository   versions now head over to github.com and   create an account if you don't already   have one once you're in press the little   plus icon on the top right and select   new repository enter a repository name

  such as mastering git choose whether you   want to make it public or private leave   the add readme file checkbox   unticked and click create   repository this is a remote repository   here you can see your repository's   origin copy it when you clone a   repository from GitHub git automatically   names the remote repository as origin by   default it's basically an alias for the   remote repositories URL now our goal is   to link our local repository to the   remote origin if you haven't yet   switched the default Master Branch name   to main you can do that by running git   Branch DM Main and this will change the   branch name to main which is a standard   practice nowadays and now we are ready   to link our local repo to a remote   origin you have to run a command get   remote add origin and then you have to   paste the link to the origin that you

  just copied and press enter and a good   thing to know is that you can have   multiple remote repositories you just   have to rearend the command and change   the origin name to something else of   course that's the name of your choice   and then you can also update the new URL   but in most cases you'll be fine with   just one remote repo finally to push   your local commits to GitHub use git   push Das origin Main and remember we   used origin here to refer to the remote   repository instead of typing the full   URL so press enter and there we go this   worked if anything with Git goes wrong   typically it goes wrong at this point   when you're trying to push to a remote   repo so if you don't see what I'm seeing   right here and instead you got some   error typically all of these errors are   very easily resolvable I would just   recommend copying the error message

  pasting it in Google and then fixing it   right there and then but in this case   we're good and now if you go back to   your GitHub repository and reload boom   your code is now online for the world or   your team to see and okay okay you might   have already known this for some of you   that's about as far as you've gone with   Git create a repo push your changes and   call it a day but git has so much more   to offer especially when you're working   within a team so now let's take things   up a notch and dive into branching and   merging this is where get truly shines   branches in git allow you to create   different versions of your project like   making a copy of a project at a specific   moment in   time whatever changes you make in this   copied version won't affect the original   the main project or Branch stays

  untouched while you experiment modify or   add new features in the copied Branch if   everything works out you can later merge   your changes back into the original   project if not no no worries the   original remains safe and unchanged when   working in a team using separate   branches for different features or bug   fixes is essential it allows you and   your team to work independently on   different parts of the code without   causing conflicts or errors ensuring   everyone can focus on their own tasks at   the start you'll have one default branch   called main to create a new Branch run G   branch and then type A Branch   name this will create a new branch and   if you want to switch to this newly   created Branch then run get checkout and   then enter the branch name you want to   check out to and there we go switch to   Branch Branch name now if you want to go

  back to main just run get checkout main   there we go and here's a little Pro tip   there is a shortcut to create a new   branch and immediately move to it to do   that run git checkout with a dasb flag   and then enter a branch name such as   feature branch of course this Branch   name and feature Branch are just dummy   names make sure your branch name is   short and explains which changes will   you be making on that Branch for more   tips on how to properly name your   branches you can download the git   reference guide so let's create and move   to this feature branch in one command   there we go and what I'm about to say   now next is very important so keep it in   mind when you create a new Branch it'll   be based on the branch you're currently   on so if you're on the main branch and   run the command the new Branch will   contain the code from the main branch at

  that point in time however if you're in   a different branch with different code   the new Branch will inherit that code   instead so to ensure you're creating the   new Branch from the correct starting   point you you should either first switch   to the branch you want to base the new   one on or run this command get Branch   then you can enter a new Branch   name and then the next thing can be the   source Branch so if you do it this way   and replace the new Branch name and the   source Branch with the names of actual   branches then it'll create a new Branch   from another specific Branch so if you   run this command you can directly create   and switch to a Branch based on any   other Branch without needing to check   out to it first for now I'll remove that   and let's say that we want to go into   our code and implement this feature   we're working on let's say that in our   case the only feature we want to do is

  to modify the read me so below hello G   I'll say I'm adding this from feature   Das Branch there we go feature   implemented if only it was this easy and   you can see that our IDE in immediately   highlighted this read me file in blue   indicating that it has some changes now   we need to add it commit it and push it   this time instead of saying git add   readme MD let's just use the git add dot   which is a command that you'll use much   more often next we need to commit the   changes with Git commit dasm and then we   have to add a commit message so this is   the perfect time to learn how to write a   proper commit message a quality commit   message is written in the imperative   mood a grammatical mood that sounds like   you're giving a   command like improve mobile   responsiveness or add AB testing when

  writing your commit message make it   answer this question if apply to the   codebase this commit will and then fill   in the blank like this commit will   upgrade the packages or this commit will   fix thread   location and why do we do this well   because it answers the question what   will happen when I merge the branch   containing this commit it will add AB   testing for example be direct and   eliminate filler words for example let's   use modify read me in this case it's   short sweet and in an imperative mood   and press enter there we go we've just   made get aware of our commit now that   you know how to write better commits   let's take a moment and check out our   remote repository what do you think will   it have the latest commit we made Let's   reload it and it's the same it doesn't

  contain our newly created feature branch   do you know why it's because the changes   we made are in the local repository   which has not yet been synced with the   remote repo to see those changes first   you'll have to publish your local branch   and you can do that using the git push   -- set- Upstream   origin and then the name of the branch   in this case feature Dash branch and   press   enter there we go an upstream branch is   a remote branch that your local branch   tracks when you set an upstream Branch   using set Upstream you're essentially   linking your local branch to a branch on   a remote repo through this command you   push a local feature Branch to the or   origin remote repository and then you   set the Upstream Branch for your local   feature Branch to track origin feature

  Branch alternatively you can also use   git push dasu origin feature Das Branch   or the name of your branch of course   both set Upstream and- you establish a   tracking relationship between your local   branch and the remote Branch this way in   the future if you want to push something   from your local branch to your remote   Branch you simply have to run get push   that's it at this moment for us   everything is up toate but as you make   future changes you don't have to rerun   set upstream or dasu you only have to   add it commit it and push it that's it   and if somebody else made changes to   your remote Branch either directly or by   merging some other changes into it you   have to make your local branch up toate   with the remote branch and you do that   by using the git pool command there we   go it's already up to date in this case

  this command fetches changes from the   remote repo and merges them into your   local repo for that Branch there are   also two more advanced and highly   practical commands that help you move   changes between your remote and local   repos and I'll explain those in detail   later on so keep watching now if you go   back to GitHub check this out feature   Branch had recent pushes a few minutes   ago and if you go to   branches you can see your feature Branch   right here so if you click on it you can   see the state of your code base on that   branch and you can see the modify read   me commit that we   made but back on the main branch it   hasn't been modified it simply says   hello get still so once you have made   all of the changes for this branch and   implemented the feature you wanted to   add and tested it you'll want to merge   it back into the main branch to do that   you must open up a pull request a pull

  request lets you share your changes with   your team for review and feedback once   approved and merged your changes become   a part of the main branch keeping the   codebase stable and organized to open up   a PLL request you can click this button   right here compare and pull request or   you can click this pull request tab   right here select new P request request   select the branch you want to merge from   such as the feature branch and then the   branch you want to merge to here you can   see all the changes you implemented in   this case we have added one line of text   if the changes look good you can click   create P request if needed modify the   title and describe what your PR will do   in more detail and then select create   one final time there we go now your team   lead or senior Dev can review your PR   and give you feedback and if everything   looks good and there are no merge   conflicts they can merge it in this case

  reload the browser and let's merge it   ourselves yes we're sure confirm merge   this is where the magic happens your   feature will now seamlessly get merged   into the main branch easy right so if we   go back to code you can see that we're   now on the main branch and we can see   the change from the future Branch so why   does it still say that we have two   branches well no worries once you merge   a PR from a specific Branch GitHub and   git still leave it here for you but they   tell you that you're one commit behind   Main and zero commits ahead which means   that everything this Branch was supposed   to do in this single commit has been   done and it has no additional code that   you might want to merge so it's safe to   say that we can delete it now if you go   back to code you can see that there is   only one branch that's the main branch   and and it contains the newly merged   changes easy right this is how teams   collaborate without breaking each

  other's code by doing this GitHub is   essentially executing a git operation in   the background a command that you can do   on your own by running git merge and   then choose a branch that you want to   merge but I typically prefer doing this   using github's BRS now if we switch back   to our local repo and navigate to the   main branch do you think we'll be able   to see the changes we just merged   well let's try do you remember the   command to switch back to main well it's   get   checkout and then   main there we go we switch to Main and   it says it's up to date with origin main   so if we had to read me wait this   doesn't look good it doesn't contain   this new line that we added right here   and that's because the merged happened   on the remote repository which makes   sense right so how do we bring those   changes into our local repo simple we   need to pull them into this Branch by

  running get   pull there we go it pulled changes from   a remote repo and we can see them right   here in our local one the command we   just ran get pull is just a shorthand   for git pool origin main but by default   GitHub pools from the remote origin from   the same Branch you're currently on so   just get pool is fine so let's repeat   things here is the typical workflow   you'll follow most of the time first   clone the repo second create a new   Branch from the main or another Branch   third make your changes fourth push the   branch to the remote repository sixth   open up a pull request seventh merge the   changes eighth pull the merge changes   into your local main branch and then   repeat from step two you can also find   these steps alongside some additional   explanations within the GID reference   guide so great job learning about

  branching I hope this was intuitive but   next we'll focus on a scary topic which   is resolving merge conflicts something   that not a lot of people teach you but   you and I will dive deep into it   sometimes when two or more developers   edit the same lines of code git gets   confused this is called a merge conflict   when this happens G will ask you to   manually choose which or whose changes   to   keep but why don't the merge conflicts   happen when you're working on your   project alone a merge conflict is a   situation where git is uncertain about   which part to merge but why would get be   unsure to show you what I mean in   practice let me create two branches   first I'll create a branch called Dev   JSM so let me run git Branch Dev D JSM   and PR press enter this will only create

  a branch but not switch to   it now let's immediately create and   switch to another Branch we can do that   with a git checkout dasb and then the   branch name command I'll call this one   Dev Adrien and you can of course use   your own name and press enter now I'll   make some changes to the codebase from   the dev Adrien Branch specifically I'll   go to read me and I'll change hello git   to   welcome to git I'll also add another   line and say this is coming from Dev   Adrien like this now let's add the   modified file to git by using git add   dot we can write a meaningful commit   message by doing git commit DM and let's   try to be descriptive of what we did   it's always easier to track the changes   that way so I'll say modify read me by   changing

  The Heading and adding a new line press   enter and at this point everything is   looking good but the branch is of course   not yet visible on GitHub since it only   exists on our local system to publish   the branch to the remote run git push   dasu origin and then the name of the   branch Dev Adrien and press enter the U   says the branch is an upstream branch   and the origin as you know is the name   of the remote repo if you go back to to   GitHub you can see that Dev Adrian has   recent changes so let's open up a port   request there we go modify read me by   changing the heading and adding a new   line and create a new P request great   the P request is there now for just a   second imagine you're not yourself you   are your friend so let's actually move   to your friend's Branch by running git   checkout and we called it Dev

  JSM remember this Branch was created off   of the main branch at the time when   other you didn't yet add those   additional changes so let's say that   your friend also wants to modify the   read me instead of saying hello git   they're going to say something like heyo   everyone welcome to my git guide and   they'll add an additional line and say   yo Johnny here and they're going to   commit their changes by running git ad   Dot get commit dasm and of course they   don't know how to write quality commit   messages as you do so they're going to   write something like today I woke up and   drank some coffee then I sat at the   table and added a few lines of code   super long but doesn't really tell us   anything right of course we have to push   that Branch by running git push dasu

  origin de- JSM or whatever name of the   branch you ch chose and now our friend   is going to come to GitHub and they'll   want to open up their pquest so let's do   that right away their title is so   descriptive it doesn't even fit in one   line and now we have two PRS currently   opened and even though you opened up   your PR first life sometimes isn't fair   so let's say that whoever is supposed to   review this PR just didn't want to even   see the code that this guy wrote so they   immediately merged it the key takeaway   here is that they merged it before yours   got merged that's great for them but now   if you go to your PR and try to merge it   you'll see something like this this   branch has conflicts that must be   resolved merging is blocked now it is   highly likely that whoever is reviewing   this won't even start reviewing it until   you resolve the conflicts so they'll

  most likely write something like Adrien   please fix these merge conflicts so what   just happened why do you have a merge   conflict and most importantly how can   you resolve it the merge conflict   happened because both Dev Adrien and Dev   JSM made changes to the same file   specifically to the same line in the   same readme.

md file when the reviewer   approved and merged the dev JSM Branch   it created a new commit that made   changes to the same line of code that   Dev Adrien has already modified   therefore when you try try to merge your   branch with the main branch git could   not automatically resolve the conflict   and required you to resolve it manually   in other words git was just not sure   which version of the code to merge since   two different versions existed on two   different branches when git encounters   such a conflict it expects you as the   user to resolve the differences and   decide which version to keep and then   manually update the code to reflect the   changes made in both branches this is a   typical scenario that happens when both   you and your teammate are working on the   same code simultanously on the same code   at the same time resulting in   modifications to the same line of code

  and finally causing a merge conflict it   is something that no matter how much you   try to avoid it always happens so you're   likely to encounter those merge   conflicts from time to time so how can   you resolve them well there is a   standard process that you need to follow   with enough practice it'll become second   nature here is what you have to do first   check out to the main branch by running   git   checkout main next pull the latest   changes from the remote main branch or   in other words the changes that your   friend got merged Before You by running   git pool there we go we can see his   stupid comments right here now your   local main branch and remote main branch   are identical so you can safely check   out to your own Branch get checkout Dev   Adrien stop here and let me ask you a   question when you created a p request   which branch were you attempting to   merge the changes into well of course

  the main branch so what are we trying to   accomplish here if you're not sure let   me show it to you in action run the   command git merge main that's correct   you have just merged the main branch   into your branch although the initial   objective was opposite it was to merge   your branch into the main branch but   that process didn't work due to the   merge conflict so we first must resolve   the issue and to do that we are merging   the main branch into our Branch to   identify the problem the command we just   used get merge and then the branch name   is used to merge that Branch name that   you specified right here such as Main in   our case into the branch we're currently   on and now that you've run this command   you can see see that there merge   conflicts in readme.md   automatic merge failed fix conflicts and   then commit the results most code   editors have some kind of a versioning

  system right here on the left   sidebar by pressing command zero I can   open up web storms one here you'll be   able to see a list of all merage   conflicts in this case we have only one   and it is in the readme.md file let me   show you how to read it arrows pointing   to the left side that say head refer to   the changes coming from your   branch and arrows pointing to the right   side that say main refers to the changes   coming from the main branch due to the   merge command that you executed to   resolve them you can manually choose   what you want to keep or remove by   removing those lines and clearing up the   code that you don't want there but the   usual way is to click the resolve button   on webstorm it looks like this but the   options should be similar across all   code editors typically you have three   options   you can choose whether you want to   accept your code whether you want to   accept their code or whether you want to   do something in between of course   wouldn't life be so simple if you could

  just choose one of those two options but   typically that's not what you want to do   in most cases you'll want to keep some   of your code and some of their code so   we'll have to go with the third option   this interface will differ depending on   the code editor you're using sometimes   it might be in line so you see the red   and green lines there irly within a   single file but I very much like the way   in which webst is doing this on the left   side we can see our changes on the right   side we can see their changes and in the   middle we can see the result so you can   just choose which one you want to merge   in this case they wrote something that's   not so useful so we want to keep ours   and now that gets transferred over to   the middle one welcome to get but let's   say that this code is an important   implementation of some feature within   the their a branch of course in this   case it's just a line of text but I   think you can imagine how Johnny can   really write something useful so let's   say that we also need to merge this and

  at the same time we have also added an   important feature from our own Branch so   we can add it right here as well so the   final result will look something like   this modified heading Johnny's feature   your feature and then the feature that   was previously there let's remove this   stop change from Johnny because we   preferred ours better   all changes have been finished and we   can click apply and there we go here is   our new readme file containing both   Johnny's changes and our changes without   conflicts now let's open up the terminal   run G add dot to add our newly modified   file say git commit DM resolve merge   conflicts and run git push you already   know the drill right now return to   GitHub and check the pr if you scroll   down you'll see that there's no more   merge conflicts because they've been   resolved by a resolve merge conflict

  commit now it would make sense to tag   your reviewer and say something like   merge   conflicts resolved please check then   they'll be able to go through a code   base request some changes if necessary   and finally merge your pull requests to   the main branch now if you go back to   the code you can see that there's here's   a new commit to the read me 3 minutes   ago and our heading has now been cleaned   up it doesn't include Johnny's nonsense   anymore but it does include their   features it includes your features and   it includes features previously added to   main amazing work now you know how to   resolve merge conflicts one of the   scariest things to do as a developer and   I Know It All looks intimidating at   first but with enough practice it'll   become second nature trust me so far   you've learned the basics and some   intermediate git skills that you'll use   in your day-to-day work but let's be

  honest sometimes things can go wrong and   you mistakenly break production that's   when git becomes your best friend only   if you know how to use it to its full   potential of course and this is where   what I call git savior commands come in   handy these commands let you manage   changes undo mistakes and tweak your   commit history think of them as your   backup plan when things get messy you   already tried and tested one such   command which allows you to check out to   a past commit do you know which one is   it yeah it's GI checkout and then a   commit hash but as I've told you that   command doesn't discard or delete   anything it's just a way to view the   history of specific commits there might   be the case where you want to check out   to a particular commit and then delete   everything that comes after it it that's   the job for get reset imagine you want   to remove some commits and revert to a

  previous commit with the possibility of   choosing whether you want to keep or   discard the changes in the working   directory that's a bit hard to   understand right so let me say that   again suppose you made 10 commits and   want to check out the third commit in   history you want to delete all commits   after the third like fourth fifth 6th   10th and so on maybe you even wrote some   bad code in those commits and to keep   things simple you want to remove these   bad commits but still want to keep the   changes that you implemented I hope that   makes sense so delete these commits but   keep all the changes you made from the   fourth to the 10th Commit This is where   we use git reset it allows us to remove   the traces of commits in history but   gives us the changes we made in those 2B   discarded commits so we can decide what   to do we can keep those changes form a   better commit out of them or delete them

  entirely it's up to you let me quickly   add a consal log to this hello.js file   on top of the first one I'll add another   one that says something like consol log   hello GitHub there we go now we have two   then make a commit by running git add   dot get commit DM add GitHub conso   log to hello.

js s next to properly   illustrate how we'll use git reset I'll   add one more conso log this conso log   will say something like hello from and   then put the name of your branch Dev   Adrian in my case since we haven't   switched from before we're still in this   branch and I also want to commit this   imagine this is a bigger feature that   you implemented so I'll run git add dot   git commit dasm and we'll say something   something like add hello console.

log to   hello.js and committed now you committed   you stand up from your desk go for a   walk or go about your day then you come   back and then you start focusing on some   additional functionalities within the   same Branch let's say that additional   functionality is a another console log   but this time this console log will   actually break things so we can say this   is bad code okay and now we can do   another commit of course without knowing   that this commit breaks the code so we   can say get add dotg commit DM and we   can say add another console log now if   you run get log you'll see many commits   keep in mind that git log here includes   all commits that have happened before as   well everything from the latest console   logs to previous ones to resolving our   merge conflicts even John's changes

  right here there's a lot of stuff that's   here everything from when we first   started working on this project now   before I tell you how to remove this bad   code using git reset you must understand   that there are a couple of different   ways to run the git reset command soft   reset simply moves the specified commit   in history but keeps changes staged in a   working directory that means that   whatever changes were made after that   commit will be in stage mode and Stage   changes are those that we add to G   tracking system by running the G ad.   command so before running that they're   untracked and then once you run git add   then you can consider those changes   tracked or staged so if you want to do   that you can run git reset D- soft and   then add a commit hash the second way to   use git reset is called a mixed reset   and for that one you don't have to pass

  any flag as it's the default one mixed   reset moves to the specified commit in   history unstaged the changes and keeps   them in the working directory thus all   changes made after the specified commit   will be in your working directory but   they won't be staged you have to   manually stage them if you want to by   using get add Dot and finally there's a   hard reset it moves to the specified   commit in history and discards all   changes in the working directory and   staging area all those changes made   after the selected commit will be   discarded entirely and you won't see any   Trace you can run that command by   running get   reset Das Dash hard and then add a   commit hash now let's actually go with   the mix res set by copying one of the   commit hashes from here but which one do   we want to copy we can scroll to the top   to see the newest ones and we have this   add another conso log which we know

  breaks her code so we want to avoid this   so instead we can go all the way to add   GitHub console lock to hello.js so let   me copy this commit hash and press Q to   exit get   log next we can run get reset and then   paste this commit hash and press enter   unstated changes after reset hello JS so   take a quick look at the file explorer   you'll see that the hello.

js file is   blue which means that we have some   changes in that file and if you pay   attention to this green line here this   means that these are the two additional   changes which are currently unstaged so   let me put that in other words the   changes for the two commits that we have   added are right now here and are   unstaged and we can verify that by   running git log and you can see that   there are no additional commits after   the add GitHub console log there's no   add hello Dev Adrian and there's no add   bat code we can exit that for a second   and we can also run get status and   you'll see that hello JS has been   modified and specifically it has been   modified with the file changes that came   from the two commits that we have reset   so now it's completely up to you whether   you want to keep those changes modify   them and then again stage and commit   them in this case I will simply remove   them from the code like they never

  happened and we can go to get log and   see that there's no more add buggy code   or ADD conso log and see that those two   additional commits happening after the   GitHub conso log are completely gone all   of your mistakes completely deleted I   hope this makes sense so you can take a   moment and try the other two variations   of the git reset on your own and see how   they differ once you do that we can move   to the next Advanced git command git   revert let's say you've deployed a   feature that broke production and you   want to undo its effects without losing   the commit history you want the locks to   be there   but you want to revert to an old Commit   This is the exact situation where you   want to use get revert it's ideal when   you have nothing to hide and you want to   maintain a clear record of changes that   you did it's almost the opposite of   reset let me show you how it works I'll   add another console log that says

  something like trying out revert okay   and I will commit it by running git   commit DM add revert console log oops I   forgot to do a get ad before that my   mistake let me do get ad Dot and I'll   use the up Arrow two times to get back   to the previous command and commit it   now let's say you want to revert to the   previous version of your codebase that   didn't contain this conso log but you   want to keep it in the   logs you can run get log you can find   the commit hash of the previous commit   without containing the revert conso log   copy it   and then run get   revert paste the commit hash and then we   get something that looks like this which   is somewhat familiar to us it's like a   mini merge conflict it's trying to   figure out what we want to keep and what   we want to remove in this case I'll   manually remove lines of code that we

  don't need so we don't need these ones   and we don't need the trang out revert   because we want to abort or revert that   one you can save it and once you save it   we want to add those changes to staging   by saying get add Dot and then you can   run get revert continue and this command   will successfully finalize the revert as   you can see we're getting there this   message is saying that we will revert   this commit but we just need to provide   it a commit message or we can exit this   window by pressing colon QA and then   exclamation mark and then press enter   there we go so one file has changed   there's there's one insertion and two   deletions and we are back to where we   were similar to get reset right but now   if you check out get log you can see   that a new commit revert add GitHub   conson log to hello has been added to

  our G history as I said similar to reset   but depends whether you want to hide   your tracks or you want to show   everybody that you messed up and you   fixed it later on both have their own   use cases now let me show you g stack   another Super useful git command let's   say you're in the middle of developing a   feature but an urgent bug caused by your   teammate comes up and your boss wants   you to work on it first you haven't   finished your feature and it's not ready   to commit yet but you still have to keep   your active changes somewhere so you can   get back to them later on and you can   start working with this bug soon and   that's exactly what get stash does it   lets you temporarily save your   uncommitted changes both staged and un   staged without actually committing them   let's say that I am in the process of   implementing an important feature and   then I have multiple lines of code which   I don't want to lose that's going to

  look something like   this you can also write some of your own   very important code here so now how do   we save this code so we can use it later   on so we can focus on something else for   the time being it's super useful you   just run get stash as you can see your   important code is now completely gone   and we got a message here saying that   saved working directory on dev Adrien so   now you can go ahead and implement this   urgent fix that your boss requested you   to do you can then run get add get   commit and say save the day of course   this is not a realistic commit message   but in this case since you implemented   the Urgent Fix You indeed did save the   day and you can even push that code if   you want to so I can run get push great   the day is saved but now you want to get   back to implementing that other feature   you were working on before your day was   ruined by a bug to get our code back

  simply run get stash apply and then   enter a stash name but how do we get to   a stash name you can run a command get   stash list to see a list of all stashes   currently we have stash at curly braces   zero so let's do just that get stash   apply stash at curly braces zero and   press enter and you can see that our   code got back right here since the   implemented fix was on similar lines as   our existing code we have yet another   merge conflict but by now you should be   an expert in resolving those so simply   remove the lines around it and keep both   the Urgent fix and and your work in   progress and that's it the day is saved   and you can continue working on your   feature I don't want this to happen but   I'm sure that someday soon you'll   encounter an issue in your code that   requires you to use one of these three

  very handy git commands G stash will   definitely be the first one so when the   time comes you'll know how to use it   great work although commands like get   add commit push merge checkout stash and   others may seem hard to remember even   though they're simple once you get a   hang of them there is an alternative   method as developers we always discover   more efficient techniques for   accomplishing repetitive tasks so let me   introduce you to a completely different   approach for executing these git   commands before I teach you these very   powerful techniques do remember that it   is still super important to understand   the behind the scenes of how these   commands work and that's what you've   learned so far which makes you ready to   utilize the power and simplicity of this   new approach I'm referring to using git   through a GUI a graphical user interface   it doesn't require memorizing commands

  but instead offers a more Visual and   userfriendly approach to Version Control   allowing you to execute G commands   through simple buttons panels and menus   many editors and IDE offer G integration   through   agui but their functionality it is   limited compared to web Storm's features   so I highly recommend downloading   webstorm it's free and packed with   powerful git Integrations but if you're   prefering not to no worries you can   still follow along with the video and   check if your editor supports some of   the features that I'll be showing in   webstorm we can start from scratch by   creating a completely new folder and   create a new readme.md file within   it there we can say something like T   testing git through a GUI a graphical   user interface first things first let's   turn this folder into a git tracked   repository on the top left or the bottom

  right you can click Version Control and   then create a git repository open up the   current   folder and immediately this folder will   be turned into a git repository this is   the same as running the git init command   and immediately you you can see that   right now you're in the main branch I   actually prefer having this on the   bottom right so I'll press command shift   B then I'll search for toolbar and I'll   hide it if you hide the toolbar then its   details will appear at the bottom right   so right now you can see all of the   branch details here now that we have   initialized the get repo let me show you   how we can commit using a GUI you can go   to the bottom right corner and then   simply click commit it'll immediately   lead you to the this menu showing you   all the unversioned files you can select   all of them and then add a commit   message I'll say initialize the   repo and I will commit the

  changes it is as simple as that now if   you click on the main branch once again   you'll see that you also have the   possibility to create a new Branch so   let me show you how to do that you just   press new branch and enter a branch name   let's do something something like new   Dash   branch and it even asks you whether you   want to check out to it immediately for   now I'll untick that and click   create so since we haven't moved to it   immediately how can we move to that   Branch now well you can see this little   popup telling us that a branch New   Branch was created so we can click here   and here you can see the new Branch but   an even easier way to switch to it is to   click at the bottom right or the top   left and then simply select the branch   you want to move to and click check out   and that's it you are on your newly   created Branch I love how webstorm   conveniently organizes these branches

  into recent local and later on will even   have remote so you always know at which   versions of your branches you're working   on but of course that begs the question   how can we push these branches to remote   we usually use the command get push dasu   origin and then the branch name but with   webstorm you can do it in a single click   just click   push click Define remote and you'll have   to enter the URL of your remote origin   to get it I'll create a new repo and   I'll call it webstorm undor   git and click create   repository and I'll simply copy the URL   back in the code I'll paste it click   okay and click push check this out all   of your code has been pushed to the new   branch and now a new origin New Branch   also exists and it even asks you whether

  you want to immediately create a p   request I won't do that yet first I want   to teach you how we can add a few more   commits to our read me so I'll add a new   line and then simply say commit one then   you can either go to this commit icon on   the left side and then select it and   then mod if the commit message and   simply press   commit or let's add another one commit   to you can also go to the bottom right   and simply click commit there which is   going to lead you here and you can add a   commit too this time let's check out the   second option which allows you to   immediately commit and   push it's going to ask you to which   branch you want to push in this case we   want to push it to the new Branch so   let's simply click push and and in a   matter of seconds all of those commits   are right there of course if you   committed some changes earlier like I

  will do in this case commit three add it   and then add commit three and then later   on you want to push them you can go to   the bottom right select push from here   and repeat the same steps it is super   convenient now what about pulling some   changes let's say that somebody else   comes to your repo and inserts an   additional message like a commit 4 right   here and updates the readme how would   you get access to that change directly   within your repo well typically you   would have to run git   pool but by using webstorm you can just   go here and press update project it's   going to ask you whether you want to   merge incoming changes into the current   Branch or whether you want to rebase   which will rewrite the commit history by   rebasing your current Branch onto   another Branch effectively moving it to   a new commit in this case we don't need   to rebase we'll just merge it into our   current Branch so just press okay and in

  a matter of seconds the commit forward   that another person pushed is right here   within our local repository what about   viewing history well let me show you   something really cool look for the git   icon at the bottom   left this one here if you click it and   expand it you'll see a ton of different   git functionalities you can see the   exact changes that were made in in this   repo who created them and when all   within this Nic looking graphical user   interface and within here you can do   everything and more that you can do with   typical get commands all by choosing one   option from a menu that is in English no   obscure commands if I open up the repo   for JS mastery. Pro platform it is super   convenient seeing exactly what is   happening within our projects we can see   what changes were made who made them   when and whether the tests have passed   check this out you can even see the   merges that were happening this makes it

  super easy to go back to previous   versions of your code base if needed in   addition to this if you press here and   then you press console you can see all   the commands that webstorm is running   for you of course you know some of these   base ones but some of these more complex   one well it's going to be easier to do   it using a GUI now how can we use   webstorm to merge one branch into   another   typically we would have to create it and   then run G merge command to merge it   into another branch in this case select   a main branch and press this Arrow right   here it's going to allow you to merge   main into New Branch or vice versa   similarly if you click the arrow on this   Branch you can easily create a new   Branch from this   Branch or you can updated in this case   let's go to Main and let's merge main   into the new branch in in this case it   says it's already up to date so we're

  good but what about pull requests one of   web Storm's coolest features is that it   allows you to do all sorts of tasks   directly within the IDE you don't need   to use GitHub desktop or even GitHub to   perform different actions everything you   need is right there so let's talk about   creating a pull request on the left side   you can find a p requests tab for you it   might be a bit of a different icon in   this case it's a GitHub icon for me   within here you can do everything PR   related so let's open up a new P request   in this case we want to merge the new   Branch into the main branch but before   we do that we have to first create a   remote origin version of the main branch   so let's do that first I'll head over to   main by checking out to it and I'll   simply push it push to origin main it is   as simple as that we can immediately now   use this create p request feature to

  move us to this pool request menu we   want to merge from Branch New Branch or   you can choose origin New Branch to   origin main exactly what we wanted to do   you can add a title of this for request   such as Implement for commits because   that's what we added into the readme   description is not needed and directly   from here you can add reviewers assignes   and labels in this case I'll just click   create for request   and there we go it is right here if you   go to GitHub and click P requests you   can see the new pull request indeed has   been opened the next cool thing is that   you can see exactly the changes that   were implemented for each specific   commit so if you go here you can see   that first at some time they added a   commit one then later on they added   commit two and so on but now we're   interested in all commits so now you can   review the changes that were made for   each file separately

  first we want to dive into the readme.md   file so rightclick it and then it'll   open up a diff a diff or a difference   refers to the changes of a specific file   on two sides of the coin or should I say   on two different branches one is the   branch that we're trying to merge and   the other one is the branch we're trying   to merge the changes to you can view   those things either split like this or   unified in a single editor and based on   the green or red color you can see the   changes that were made in this case I'm   happy with the changes and I'll click   submit and if you're a reviewer you can   immediately add a review directly within   webstorm you don't have to go to GitHub   just by pressing a plus here you can add   a comment something like fix this line   and you can even start a   review there we go finally you can   submit your pull request review and you   can add one final comment looks good to

  me great finally if everything looks   good you can press the three dots next   to the request review button and then   say merge review   merge merge pool request one it'll   Implement four commits that's the title   of the pool request and we can say merge   believe it or not this is it so now on   Main you can simply update the   project and all of these commits will   come directly to your code base   I mean just how convenient and intuitive   and efficient this is at start you might   feel like you are kind of cheating the   system or that you're a bit of a less of   a developer by using this help that   webstorm   provides but don't feel that way any   tool that can make you more efficient is   welcome and what matters is that you   understand what webstorm is doing behind   the scenes and you do because you came   to this point of the video I think that

  in just a couple of minutes I've showed   you all of the primary functionalities   that before using the terminal I spent   more than an hour to explain and we've   accomplished all of that in more in just   a few minutes but there are so many more   things that you can do with webstorm one   of these things is a fetch if you see   this icon on top right you can just   click it and it'll fetch all the latest   changes another thing is how easily you   can delete branches we no longer need   this one since we merged the changes so   you can just press delete there we go   that was it you can also compare   different branches Mark branches as   favorite or even cherry pick from a   specific commit if I go right here to   get at the bottom left and go back to   log we can see all of these different   commits that I added cherry picking is a   very Advanced technique but in webstorm   it is as simple as clicking this cherry   pick icon you click it and it'll allow

  you to pick the changes from this commit   you can press merge and then you can see   which changes you want to accept this is   similar to reverting or resetting to a   specific commit but it gives you even   more power to pick and choose which   features you want to keep and which ones   you want to remove you can also rename   different branches or even revert to   specific commits directly from within   this view typically you would have to   get the commit hash figure out what you   want to do here you just press revert   commit and that's about it we cannot do   it now because we have unate changes but   that's also pretty easy to resolve once   you have webstorm you just go here and   you can easily resolve all the conflicts   and then commit and when a technology is   so good that it feels like Magic based   on how many things is it doing for you   and it's doing them well well it almost   feels like magic for us developers so   whichever complicated feature you want   to use you can use it within webstorm

  with ease these were just a few examples   of how we can use the webstorm GUI to   perform many different git operations   without needing to rely on a single git   command and that's only one of the   reasons why I love webstorm while you   can accomplish some of these tasks in   other editors not all of them are   possible as there's a clear difference   between an editor and an IDE right so go   ahead and explore other options try   breaking some things fixing them   reverting resetting cherry picking you   can only get better at something by   trying it out yourself I'll also leave a   reference on how you can use all of   these features within the G reference in   the description of this video but with   that in mind we covered a lot about git   if you're still with me and you have   successfully completed these git actions   with a solid understanding and even   tested them out yourself congratulations   you can confidently add this skill to   your resume LinkedIn profile or anywhere

  you're applying for a Dev rooll and and   don't worry if you're not feeling fully   confident yet or are concerned about   remembering everything git can be tricky   at first but with practice it'll become   second nature especially once you get   used to these graphical user interfaces   but still it's easy to get stuck and   lose your mind about something   especially when you have to pull some   very obscure commands out of your pocket   so for those situations don't forget to   download the cheat sheet in the   description so you can have a handy   reference   whenever you need it in the future and   great job with sticking till the end of   this essential crash course thank you so   much for watching and I'll see you next   time have a wonderful day


---

## 2. System Design Course – APIs, Databases, Caching, CDNs, Load Balancing & Production Infra

**Source File:** `VideoTranscriber_System Design Course – APIs, Databases, Caching, CDNs, Load Balancing & Production Infra.txt` | **Size:** 120.5 KB

---

Transitioning from a mid-level developer   to a senior engineer requires shifting   your focus from simply writing code to   mastering high-level architectural   design. This video breaks down the   essential road map for building scalable   productionready systems from the ground   up covering everything from API   protocols to database selection.

 You   will learn the core differences between   REST, GraphQL, and gRPC as well as the   strategies for scaling through load   balancing and robust security practices.   Hayek developed this course.   >> Most developers cannot design systems or   features from scratch. They can add to   someone else's architecture with tasks   with clear requirements and already on   mature systems.

 But if you ask them to   design something from the ground up,   most of them usually will freeze. And   actually that is the exact skill that   separates mid-level developers from   seniors because seniors are also able to   make decisions, design tradeoffs, design   the architecture from scratch and make   decisions with rough requirements.

 So   companies are not paying six figures for   people who can just code or follow   instructions but they are paying for   architectural decisions for making the   system performant for optimizing the   data storage and making the decisions   that also affect the customers and the   software that they are building.

 So in   this video I'm going to teach you the   exact concepts that I mastered to be   able to design such systems from scratch   and also get to senior roles. This is   how I passed the system design   interviews without any problems. And   these are the skills that I learned to   get to senior level within the second   year of my career.

 So I'm not teaching   you some theory from books or from   newsletters. This is what actually works   in a real jobs and in real interviews.   So let's jump into my computer to see   what we are going to cover in this   course. First of all, we will start from   the foundations, the core concepts that   you need to understand before anything   else in system design.

 Then we'll get to   API design, which is a big part of   designing systems like how to actually   design APIs that scale and also make   sense for other developers who will be   using it. Then we'll get into databases,   how to choose the right database for   different scenarios and design your data   layer properly.

 Next, we'll get into   caching. How to use caching? How to use   CDNs, load balancing to make your   systems fast and reliable. Then we'll   get into big data processing because   that's a big topic in itself. How to   handle large scale data the right way.   Then we'll get to designing for   productions like how to build systems   that actually work in the real world,   not just on your laptop or on a single   machine.

 And lastly, you can see how I'm   designing the systems for interviews and   handling this step so that you can nail   these interviews and get the offers that   you need for getting to senior roles.   Designing a system to support millions   of users is challenging, but every   complex system starts with something   simple.

 That's why in this lesson, we'll   build a basic setup that supports just   one single user and then we'll gradually   expand it as we go. because starting   small allows us to understand each core   component before adding more complexity.   So let's start with the first step and   build a single server setup. Imagine   that we're setting up a system for a   small user base.

 This means that   everything runs on one single server,   the web application, the database, the   cache, and also the other components.   And this setup allows us to visualize   the core workings without added   complexity. Now let's break down how   this single server setup handles the   user requests. We have some users who   are trying to access our website or our   API on the server.

 They can be either   using the web browser or a mobile app to   access our server. And on the other   hand, we have our server which has the   necessary files to serve to the web   browsers and also the necessary API   endpoints to serve to the mobile app and   it is hosted on this example IP address.   Initially our users don't have this IP   address.

 They have the domain which they   are trying to access. Let's say it's   app.demo.com.   So if they just type this domain name   and hit enter, their web browser for   example will contact the DNS which   stands for domain name system. This is a   provider which maps the domains to the   IP addresses. And in our case, let's say   our domain name is mapped to the IP   address which is the server's IP address   that we have.

 So now this DNS provider   will send the IP address back to the web   browser or to the mobile app to our   clients. And this IP address is our   server's IP address. So now they have   the location where they are trying to   send requests. So with this IP address   in hand, the user's device sends an HTTP   request to our server asking for   specific data.

 And then our server   processes this request and sends back   the requested data. This might be an   HTML page for a browser or a JSON   response for the app depending on the   request type. In this setup, traffic   usually originates from two main   sources. The first one is the web   applications and the second one is the   mobile applications that are trying to   access our server.

 For our web users,   the server handles the business logic,   data storage and also presentation using   HTML, CSS and JavaScript. And for mobile   users, communication typically happens   over HTTP. These mobile apps request   data from the server using API calls.   And JSON is often used for responses   because it's lightweight and easy for   mobile devices to interpret.

 Here is an   example API request that we can receive   for our server. It can be a get request   to our domain/ product/ the ID of that   product. And for this endpoint, we need   to retrieve the details of a product.   And here is an example response that we   might send back to the client. This is a   JSON response which contains the product   ID.

 It contains the name of this   product, some description, the price of   the product and some other metadata that   is useful for the client. And then this   will be used by the mobile app or by the   web browser to display this product on   the screen. And as we continue, our goal   will be to identify areas where a single   server might not be enough for the user   demand.

 For now, this setup is ideal for   small user bases, but it may struggle   under heavy traffic. So, next we'll   explore ways to scale each part of the   system to support more users   effectively. Some key takeaways that we   can have from this is that we need to   start small. We need to begin with a   straightforward single server setup to   understand the essential components of   system architecture.

 Now we also   understand how these requests flow   through your system which is fundamental   for building more scalable systems and   we also recognize the unique demands for   web and mobile applications and how they   interact with your server. And in the   next lessons we'll start looking at   strategies for optimizing and scaling   this setup.

 As our user base grows a   single server isn't enough to handle the   increased demand. And to accommodate   more users, we can separate our web tier   which is handling the web and mobile   traffic and the data tier which is   managing the database. This setup   enables us to scale each server based on   its specific load.

 But when it comes to   choosing the right database, how do we   know which specific database is the best   for our specific application? When it   comes to database selection, there are   two main options. The first option is   relational databases or RDBMS which are   structured in tables and rows. Some   popular examples are PostgresSQL, MySQL,   Oracle database or SQL light.

 On the   other hand, we have non relational or   NoSQL databases. These are suited for   applications that require flexibility   and fast access to large volumes of   unstructured data. Some examples are   Cassandra, MongoDB, Radius or Neo 4G.   Let's start by exploring the relational   databases. These databases use   structured query language or SQL for   finding and manipulating data.

 The data   here is structured in tables which are   the fundamental building blocks of SQL   databases. And these are similar to   spreadsheets. Each table consists of   columns which can be thought as the   fields or attributes of the table. And   it also consists of rows which are   single records within this table. For   example, if you imagine a customers   table, within this table, we can have   columns like ID, name, age and email.

  And for each rows, we can have specific   customers like the ID of 1 2 3 and the   name will be John and the age will be 30   and so on. But what are the advantages   of using an SQL database? First of all,   they support complex join operations   across multiple tables. For example, if   you imagine we have a customers table   and also a products table and now we   want to create a separate table that   will connect the customers and the   products that they have ordered.

 With   SQL you can join these two tables   together into an orders table and this   will hold the information about the   customer ids who have this order and   also the product ids which this customer   has ordered. And this process of   combining two or more tables into one   table are called join operations in SQL.   And the other big advantage is they   provide robust data consistency and   integrity especially for transactions.

  Transactions in SQL are a sequence of   one or more SQL operations that are   performed as a single atomic unit and   each transaction in SQL follows the ACT   acronym. You can think of a transaction   example like a bank transfer. So first   of all all of the transactions are   atomic which means that the entire   transaction is treated as a single unit   which either completely succeeds or   completely fails.

 Each transaction is   also consistent which means that it   transforms the database from one valid   state to another valid state and they   also come with isolation which means   that modifications made by concurrent   transactions are isolated from one   another and they don't interfere with   each other. And lastly, they come with   durability, which means even if the   system fails or the database server   fails, the data will still remain there.

  And now let's have a look at non-   relational databases. Non- relational   databases can be in different forms. For   example, we have document stores like   MongoDB or you can use wide column   stores like Cassandra, key value stores   like Radius and graph stores like Neo4G.   Let's have a look at each of these types   separately and let's start with the   document stores.

 MongoDB is the most   popular example of a document store and   the data here is stored in JSON like   documents which allows us to have   complex data structures within a single   record. Next, we have wide column stores   where data is stored in tables, rows and   dynamic columns. Some examples here are   Cassandra or Cosmos DB.

 The main   advantage of these databases is they can   handle massive scales and are very good   for many right operations. The other   option is graph databases which focus on   storing the entities and their   relationships as graphs. An example of a   graph database is Neo 4G. For example,   in Amazon, they use the Neptune graph   database which helps them to make you   product recommendations based on your   previous orders.

 And the other popular   type is key value stores. Here data is   stored in key value pairs. The biggest   advantage of key value stores is their   simplicity and speed. Since they are   primarily stored in RAM, reading and   writing to these databases is extremely   fast compared to other databases. Some   examples of key value stores are   memcache or radius.

 So that's the main   four types of NoSQL databases. Now let's   have a look at the advantages of these   NoSQL databases. If you have a look at   the same example that we had for the SQL   databases where we have customers and   products and we want to join them in   orders. For example, in MongoDB, you   could have this as a single document.

 So   you could store all of the user data,   also the orders and products in a single   document. And because of this structure,   the NoSQL databases can handle highly   dynamic and large data sets without the   structure imposed by relational   databases. And also they are optimized   for low latency and scalability.

 So when   should you use relational versus   non-reational databases? Here is a quick   comparison of both. If your application   data is well structured with clear   relationships, then you should use SQL   databases. For example, if you have an   e-commerce application tracking   customers and orders, that's a good use   case of using an SQL database.

 Next, if   you need strong consistency and   transactional integrity, for example, if   you have a financial application or   banking system, then you should use the   SQL databases. However, if your app   demands super low latency for quick   responses, then you should go with non-   relational databases or if the data is   unstructured or semistructured like JSON   objects and the relationships aren't   that crucial, then you should also go   with NoSQL databases.

 And lastly, if   your application requires flexible and   scalable storage for massive data   volumes, for example, a recommendation   engine storing user activity data and   key value format, then you should also   go with NoSQL databases. Let's explore   the two primary approaches to scaling,   which are vertical and horizontal ways   of scaling.

 And we'll also see why   horizontal scaling is generally more   suitable for hightra applications. First   we have the vertical scaling or   sometimes it's also called scale up.   This just means that we are adding more   resources to our existing server meaning   RAM, CPU or any other resources that   might help us to handle more traffic.

  And this approach is simple and works   well for applications that have low or   moderate traffic. However, it comes with   its limitations which are firstly   resource limits. There is a hard cap on   how much you can add to a single server   and eventually you will reach a limit on   how much you can upgrade your new   server.

 And the second reason is lack of   redundancy. Meaning if this server goes   down, you don't have any other servers   to serve your users, which means that   your whole application goes down with   your single server. On the other hand,   we have horizontal scaling which is also   sometimes called scale out. In case of   horizontal scaling, we are just adding   more servers to share the load.

 So   instead of having the single server, we   might replicate and have three of that   same server. And now we can share that   load between these servers instead of   handling all of them in a single server.   Generally this is more suitable for   large scale applications as it comes   with higher fault tolerance.

 And higher   fault tolerance means if one of our   servers goes down, we still have two   servers available. So these two servers   can continue serving our users while the   second server recovers from the failure.   And it also comes with better   scalability because you can just add   more servers as needed. Instead of   having three, you might introduce a   fourth one which will handle the new   incoming traffic.

 But how do we   implement the horizontal scaling? In   case of a single server, we know that   all of our client requests went to the   single server whether it's from mobile   app or from the desktop. But what if now   we have three servers to handle all the   load? How do we distribute the client   requests? Let's say our mobile app makes   a request.

 How do we know where this   request should go? Whether it should go   to the server one or server two or to   server three. And seems like we need to   have something in the middle which will   direct the traffic to the appropriate   servers. And that part in the middle is   called a load balancer. We use load   balancers to distribute the traffic   across multiple servers.

 For example,   here we have three servers. Server one,   two, and three. Whenever we have a new   request from the clients, the load   balancer decides where we have the least   load. And then it redirects the traffic   to that server. And it also controls the   fault tolerance, meaning if one of our   server goes down, like the server free,   it will stop sending traffic to the   first server since it's not available   anymore.

 And it will send all of the   traffic to server two and one until the   server three is available again. And it   also can make our app more scalable   because we can introduce a new fourth   server and any other servers that we   want. And this load balancer will ensure   that all of the traffic is distributed   evenly.

 So that's the two main   approaches of scaling which are vertical   and horizontal ways of scaling. In case   of vertical scaling, we are just adding   more resources to our same server. But   in case of horizontal scaling, we are   adding more users to our server base.   And then we use a load balancer which   distributes the traffic across multiple   servers.

 But right now, this load   balancer is kind of a black box for us   because we don't understand how does it   work, how does it take the requests and   how does it distribute the traffic. So   let's explore that in the next lesson   and let's see how this exactly works and   what are the strategies that we use in   load balancing.

 Load balancers   distribute the incoming traffic across   multiple servers while also ensuring   that no single server bears too much   load. But how does it actually happen   and how does the logic work of   distributing the incoming traffic? To   understand load balancers better, let's   explore seven strategies and algorithms   that are commonly used in load   balancing.

 Let's start with round robin,   which is one of the most popular   algorithms. That's mainly because it's   the simplest form of load balancing   where each servers in the pool gets a   request in sequential rotating order   which basically means that the first   request that it receives it directs it   to the first server and the next request   will go to the second server and the   third one will go to the third server.

  And once the last server is reached, in   this case it's the server free, it   redirects it back to the first server   and then again to the second server and   so on. This works well for servers with   similar specifications. Meaning if all   of our free servers have the same   capability, then round robin will be a   good choice here.

 Next option is the   least connections algorithm. It directs   traffic to the server with the fewest   active connections. For example, if we   have 10 active connections on the server   one, we have nine active connections on   the server two and we have 30 active   connections on the server three. If it   receives a new request from the client,   it will direct it to the server two   because it has the least active   connections at the moment.

 So now it   will have one more connection. And this   is particularly useful for applications   where you have sessions of variable   lengths. Meaning that one of your   sessions might last 10 minutes, the   other one might last 1 minute and so on.   And in this case, the load balancer will   take that into account and it will send   the traffic to the least connection   server.

 The third option is least   response time. This algorithm is more   focused on responsiveness of the   servers. Let's say your first server is   highly responsive. The second one is low   responsiveness and the third one is   medium responsiveness. In that case, the   load balancer chooses the lowest   response time and with the fewest active   connections.

 Meaning first it will try   to send as many connections to the high   responsive server as possible. But it   also takes into account the active   connections. Let's say this server   reaches 30 active connections. Then it   will switch to the third server because   this is the medium responsiveness   server. and it will send some traffic,   let's say 20 other requests to the   medium responsiveness server and after   that it will switch to the second server   and it might send another 10 requests to   this first server until it redirects   them back to the first server. This is   effective when the goal is to provide   the fastest response time to requests   and you also have different servers with   different capabilities.   The fourth option is the IP hash   algorithm, which determines which server   receives the request based on the hash   of the client's IP address. This is   useful when you want your clients to   consistently connect to the same server.   Let's say client one makes a request to

  your load balancer. The load balancer   will use the client's IP address and   based on this, it will hash it and send   it to appropriate server. Let's say   server 2. and all of the future requests   of the client one will go to the load   balancer and it will use the same IP   hashing algorithm and based on this IP   address it will again redirect the user   one requests to the server too.

 This is   useful if it's important for a client to   consistently connect to the same   application. If every of your server has   some information about the clients that   are connected to it in that case the IP   hashing is a good choice. Then there are   also weighted algorithms. These are   variants of the above methods that can   be also weighted.

 For example, you can   have a weighted roundroin or weighted   list connections. In this case, servers   are assigned two weights typically based   on their capacity and performance   metrics. For example, if the first   server has 16 gigs of RAM, the second   one has 32 and the third one has 64.   Based on the server RAM and other   metrics, they are assigned two weights   and the load balancer takes that into   account when redirecting the traffic.

  First, it will try to send as many   connections to the first server as   possible because it's more weighted,   meaning it has more performance and then   it will try to send the other traffic to   server two and then the last and small   portion will go to server one. There are   also geographical algorithms which are   location-based algorithms that direct   requests to the server geographically   closest to the user.

 Let's say this   application is for US users. So mostly   users are connecting to this application   from US. But we also have some part of   the users who are connecting from   Europe. And in our pool of servers, we   can have one server that is located in   US East, another server that is located   in US West.

 And the last server can be   located somewhere in Europe for the   small base of users who are located in   Europe. So if a user comes from Europe   and makes a request to this load   balancer, it will redirect this user to   the server in Europe. Or if a user comes   from your US and makes a request to this   load balancer, it will check the   location of this US user based on its IP   address and then it will redirect either   to the US east or US west.

 This type of   load balancing is useful for global   services where latency reduction is   important. And the last most popular   type is consistent hashing. In this   case, we use a hash function to   distribute data across various nodes. We   have a hash function inside of a load   balancer and we usually imagine a hash   space along with this that forms a hash   rink like a circle.

 This hash function   forms a circle where we have the servers   for example the server one 2 and three   which are located in front of this load   balancer. So whenever a new request   comes from a user this hash function   takes the IP address of that user and   then based on that it locates this user   on this hash ring.

 Let's say it locates   it somewhere here and then depending to   which server this point is closest to   for example in this case this is closer   to server 2 it redirects the traffic to   that server. This is a bit more   complicated way of load balancing but it   also ensures that the same client   consistently connects to the same server   like in case of IP hashing.

 We also   talked about that whenever a server goes   down, this load balancer ensures that   traffic is not redirected to that   server. But how does it know in the   first place that this server is not   available? For that, most load balancers   come with health check features which   means that they are consistently   monitoring the servers by sending a   health check requests to all of these   servers and they have the information   about which servers are online.

 Let's   say the first three servers are   available and which ones are offline   which means the fourth server which is   offline. So whenever it detects a   failure in the health check, it knows   that this fourth server is not available   anymore. And based on that information,   if the next request comes from the   client, it won't redirect them to the   fourth server until the health check   again succeeds and it knows that the   fourth server is back online.

 And now   let's see some load balancer examples.   And what are these actually? How do we   implement them? First, we have software   load balancers. For example, NX is   probably the most common type of the   software load balancer. It has other   features and it's also used as a web   server, but it also offers the   functionality of a load balancer.

  Typically, you install this NX on your   server and then configure the servers   that should be load balanced and also   the algorithm. And as you can see, it   also comes with health checks which I   mentioned. So you can set up health   checks among your servers and then this   will consistently monitor your servers   and whenever one of your server goes   down, it won't redirect traffic to that   server.

 Another example of a software   load balancer is AJ Proxy which is an   open-source software that again you can   install on your server and configure as   you want. But apart from software load   balancers, we also have hardware load   balancers. For example, we have the F5   load balancer, which is a widely used   hardware load balancer known for its   high performance and feature set.

 Next,   we have Sitrix, which also comes with   load balancing functionality. And again,   this is a hardware type of load   balancer. But if you don't want to   configure all of that yourself on your   server or as a hardware, then the easier   solutions are cloud-based load   balancers. For example, AWS comes with   elastic load balancing.

 And if you have   your servers also set up in AWS, then   it's pretty easy to configure this with   your servers. And you can also see it in   the benefits that it automatically comes   with security automatic scaling, meaning   that it will automatically add new   servers to the pool if the demand   increases of your application.

 And it   also comes with monitoring, which is the   same as health checks. So you don't have   to set it up yourself. And other   examples similar to AWS are Azure's load   balancer and Google cloud's load   balancing. Now let's talk about the   concept which is called a single point   of failure in system design.

 This is one   part of your whole system that whenever   it fails, it will bring the entire   system down with it. So to put it   simply, it is any component that could   cause the whole system to fail whenever   it stops working. For example, if you   imagine this setup when the clients   connect to our load balancer and then   load balancer distributes them to the   APIs and then we have a single database   which is used for all API servers.

  Database here is one example of a single   point of failure. Whenever this database   goes down, all of these APIs won't be   able to connect to the database and   because of that all of these also won't   function properly and our clients won't   be able to receive any response from the   servers.

 So having single points of   failures in your system is problematic   because they can create vulnerabilities.   The first obvious downside is the   reliability because a single failure   like the failure of this database can   take the entire system down which could   mean business losses because users are   not able to access our platform.

 Maybe   they are also not able to access the   checkout page or any other parts of the   system which can bring losses in the   business. It is also an issue for   scalability because systems that have   single point of failures like this can   often struggle to scale as each   component will add a risk of failing   this single part.

 And the last part it   also brings a security issue because if   you have a single point of failure in   your system like the load balancer   attackers can compromise this point by   sending huge traffic to it and if this   fails the whole system will go down. We   will talk about how to avoid the   database single points of failure in the   databases section.

 But in this section,   we can have a look at how to avoid the   load balancers to become a single point   of failure. Because right now, we have   only one load balancer setup. And if   this load balancer goes down, then all   of our users won't be able to access   this point and they will also not be   able to access to our APIs.

 The first   strategy is adding redundancy to our   system. This means that we can use more   than one load balancer and for example   if the second load balancer goes down   users won't be able to connect to this   load balancer but in that case we can   redirect all of the traffic to the first   one and then this first load balancer   will balance the load between those   servers and we will monitor the health   of this second load balancer and   whenever it's back online and it's again   available we will also redirect 50% of   the traffic to the second load load   balancer. Another strategy is to use   health checks and monitoring for load   balancers themselves. As we saw, load   balancer can do health checks for the   servers and check whenever our servers   are online or offline. We can do the   same strategy for load balancers and we   can check their health continuously and   whenever one of our load balancer goes

  down, we will know that we shouldn't   redirect any traffic to this load   balancer until it is back online. And   the third common type is self-healing   systems which means that we again   monitor the health of our load balancer.   And if at any point we detect that it   goes down, we will replace this with a   new load balancer which is basically an   instance of this same load balancer.

 And   this way we won't cause any   interruptions and our clients will be   able to connect to this new load   balancer. If you're finding this useful   so far, I have a lot more system design   content on my YouTube channel, including   deep dives into specific components and   also case studies designing systems from   scratch.

 Just search for Hikimon on   YouTube or check out the link in the   description. Welcome to this section   where you will learn the fundamental   principles of API design which will   enable you to create efficient, scalable   and also maintainable interfaces between   software systems. Here is what we're   going to cover in this lesson.

 We'll   start from what APIs are and what is   their role in system architecture. Then   we'll cover the three most commonly used   API styles which are REST, GraphQL and   gRPC. We'll discuss the four essential   design principles that make great APIs   and also how application protocols   influence the API design decisions.

  We'll also cover the API design process.   So starting from the design phase to   development phase to deployment. So   we'll see how that process looks like.   So let's start by understanding what is   an API. API stands for application   programming interface which defines how   software components should interact with   each other.

 Let's say on one side you   have the client which is either the   mobile phone or the browser of this user   and on the other side you have the   server which will be responding to the   requests. So API here is just a contract   that defines these terms which are what   requests can be made. So it provides us   with an interface on how to make these   requests meaning what endpoints do we   have what methods can we use and so on.

  Also what responses can we expect from   this server for a specific endpoint? So   first of all it is an abstraction   mechanism because it hides the   implementation details while exposing   the functionality. For example, we can   make a request to save a user data in   this server. But we don't care at all   about how the logic applies behind the   scenes inside of this server.

 So we only   care about the interface that is   provided through this API and we only   use that endpoint and we store the user   without even knowing about the   implementation details and it also sets   the service boundaries because it   defines clear interfaces between systems   and components. So this allows us to   have multiple servers.

 We can have one   server that is responsible for managing   the users. We can have another one that   is responsible for some other records.   let's say for managing the posts and so   on. So this allows different systems to   communicate regardless of their   underlying implementation like client   browsers with servers or servers with   another servers and so on.

 Now let's   focus on the most important API styles   you will encounter during the design   phase. These are RESTful, GraphQL and   gRPC. The most common one out of these   is REST which stands for   representational state transfer. These   type of APIs use resource-based approach   by using the HTTP methods as a protocol.   One of the advantages of REST APIs is   that they are stateless, meaning that   each request contains all of the   information needed to process it and we   don't need any prior requests to be able   to process the current request. And it   uses the standard methods on HTTP   protocol which are get for fetching   data, post for storing data, put or   patch for updating data and delete for   deleting data. So based on its   characteristics, the rest is most   commonly used in web and mobile   applications. Next, we have GraphQL,   which is the second most common API

  style after the REST APIs. GraphQL is a   query language that allows clients to   request exactly what they need. This   means that it comes with a single   endpoint for all of the operations and   we can choose what we are expecting to   receive from this API by providing the   payload in the request and the   operations here are called query   whenever we are retrieving data or   mutation whenever we are updating data.

  So this is the equivalent in put or   patch or post in the restful APIs and   there is also a subscription in   operations which is for realtime   communication. The advantage of graphql   APIs is that it allows us to have   minimal round trips. Let's say we need   some data that in restful APIs we will   need to make three requests to get all   of this data.

 In GraphQL case, we can   make a single request and get all of   these data avoiding the unnecessary two   requests that we will otherwise have to   make in restful. And because of that,   this is the recommended option for   complex UIs. So wherever you have some   complex UIs where on one page you might   need different data, on another page you   might need some other complex nested   data.

 In these cases, GraphQL is the   better choice over restful APIs. And the   last option is gRPC. I would say this is   the least common one out of these three.   GRPC is a high performance RPC framework   which is using protocol buffers for   communication.   The methods in gRPC are defined as RPCs   in the protoiles and it supports   streaming and birectional communication.

  This is an excellent approach for   microservices especially and internal   system communication as it is more   efficient when you're working between   servers compared to GraphQL or compared   to restful APIs. So the difference   between REST GraphQL and gRPC APIs is   kind of clear but let's also clarify the   real difference between REST and GraphQL   APIs on examples.

 So as you saw REST   comes with resource-based endpoints. For   example, here if we take a look at these   requests, you can see that the resource   here is users. So you always expect to   see some users endpoint or some   followers endpoint or let's say posts   endpoint. So it is resource-based. And   sometimes we might need to make multiple   requests for getting the related data.

  As you can see here, we need let's say   the user details, but we also need the   user posts and followers. So in this   case we need to make three requests to   get all of these data and it uses HTTP   methods to define operations. As you can   see these are HTTP endpoints and we are   using the get method specifically and   the response structures are fixed   meaning if you got one response for this   specific user next time you can expect   to have exactly the same response   structure.

 Maybe some data will be   modified but the structure always   remains the same. And it also provides   explicit versioning. So as you can see   it comes with v1 for the v1 API. Then   later if it got a major upgrade then   this will become v2 and so on. And you   can use the headers on the requests to   leverage the http caching on restful   APIs.

 Now if we compare that to graphql   apis it comes with a single endpoint for   all operations. So mostly it is /graphql   or slash some API endpoint that is   commonly used for all operations and in   this case we will use a single request   to get the precise data that we need and   we will use the query language of   GraphQL.

 This is what the query language   looks like. As you can see we start with   a query and then we define what we need.   For example, we need the user with ID 1   2 3. Then we need the name of the user,   the posts and then we define whatever we   need from the posts. Maybe we need only   title and content and nothing more. And   also the followers and what we need from   followers, maybe only names.

 So this   allows us to be more efficient in our   requests compared to restful APIs where   we will need to make free requests for   this same data. This means that client   needs to specify the response structure   and in this case the schema evolution is   without versioning. So here as you saw   it is with v_sub_1, v_sub_2 and so on.

  In this case the schema usually evolves   without versioning. But there is also a   common pattern to start versioning the   fields. For example, you can have   followers v2 and that will be the second   type of followers schema. But you can   also go without versioning. So you can   just start modifying the followers or   posts if you are sure that there are no   other clients using your old API and in   this case you can leverage the   application level caching instead of the   HTTP caching.

 Now let's discuss the   major design principles that will allow   us to create consistent, simple, secure   and also performant APIs. Ultimately the   best API is the one that we can use   without even reading the documentation.   For example, if you saw the previous   endpoints in the users you see that we   have / users/123   and obviously we are expecting to get   the user details of this specific user.

  And if you make a request for example to   that endpoint to fetch user details but   then you find out that it also updates   some followers or something while making   this request then obviously that is a   very bad type of API as we didn't expect   it to do such operations. So first of   all the good API should be consistent   meaning it should use the consistent   naming casing and patterns.

 For example,   if you use camel case in one of the   endpoints, let's say you have user   details and you do this in camel case,   but in another case you do it with a   skinnate case like user/details,   then this is not common and this is not   consistent. The second key principle is   to keep it very simple and focus on core   use cases and intuitive design.

 So you   should minimize complexity and aim for   designs that developers can understand   quickly without even maybe reading the   documentation. And simplicity again   comes down to this which is the best API   is one that developers can use without   even reading the documentation.   Next obviously it has to be secure.

 So   you have to have some sort of   authentication and authorization between   users. Also, if you have inputs, then   you need to make sure that these are   validated and you should also apply rate   limiting. So, these are the most basic   things that you have to do to keep your   APIs secure.

 And the last pillar is   performance. So, you should design for   efficiency with appropriate caching   strategies with pagination. If you have   a large amount of data, let's say   thousands of posts, you don't want to   retrieve all of this whenever they make   a request to get the post. So you should   always have pagination with some limit   and offset.

 Also the payloads meaning   the data that you will send back should   be minimized and also whenever possible   you should reduce the round trips. So if   you have the opportunity to send some   small data along with the request of one   of the endpoints then it's better to do   this if you know that you're going to   use it instead of making another   endpoint for making a request to get the   same data.

 Now each of these APIs use   different protocols and we will learn   more about these in the next lesson. But   basically your protocol choice will   fundamentally shape your API design   options. For example, the features of   HTTP protocol directly enable restful   capabilities. So it makes more sense to   use HTTP along with restful APIs because   it also provides you with status codes   and these are great to be used with   crowd operations that you will have in   restful APIs.

 On the other hand, web   sockets which is another type of   protocol enable realtime data and also   enable birectional APIs. So this can be   used along with realtime APIs wherever   you need some chat application or some   video streaming. This is a good use case   of websocket APIs. In case of graphql   APIs, you again will use the HTTP   protocol instead of websockets or gRPC.

  GRPC on the other hand can be used along   with microservices in your architecture   to make it faster compared to HTTP. So   your protocol choice will affect the API   structure and also the performance and   capabilities. Therefore, you should   choose it based on its limitations and   strengths and the one that makes more   sense in the type of API that you'll be   developing.

 Now, let's discuss the API   design process. It all starts with   understanding the requirements, which is   identifying core use cases and user   stories that you will need to develop.   Also, defining the scope and boundaries   because if it's a huge API, then you   probably won't develop all of the   features at once.

 So you should scope it   to some specific features that you'll be   developing and also what are out of   scope for now. Then you should determine   the performance requirements and   specifically in your API case what will   be the bottlenecks and where you need to   make sure that it's performant and you   should also not overlook the security   constraints.

 So you should implement all   of the basic features like   authentication, authorization, the rate   limiting but maybe some more stuff   depending on the API that you'll   develop. When it comes to design   approaches, there are couple of ways to   go about it. The first one is top-down   approach which is you start with highle   requirements and workflows.

 This is more   common in interviews where they give you   the requirements on what the API will be   about and then you start defining what   the endpoints will be, what the   operations will be and so on. But there   is also the bottom up approach which is   if you have existing data models and   capabilities then you should design the   API based on this.

 So this is more   common when you're working in a company   and they already have their data models   and capabilities of their APIs. So you   should take that into account when   designing the API. And we also have   contract first approach which is you   define the API contract before   implementation meaning what the requests   should look like and what the responses   should look like and this is more   similar to top-down approach and this is   also commonly used in interviews.

 When   it comes to life cycle management of   APIs, it starts with the design phase   where you design the API, discuss the   requirements and the expected outcomes   of the API and only after that you can   start the development and maybe local   testing of your API. After that you   usually deploy and monitor it.

 So you do   some more testing but now on staging or   on production. But then it also comes   the maintenance phase. And this is why   it's important to develop it with   keeping the simplicity in place. So it   will be easier for you to maintain or   for other developers to maintain in the   future.

 And lastly, APIs also go through   deprecation and retirement phase. So   some APIs eventually get deprecated   because there might come up with a new   version of the API that you should use   or let's say you are transitioning from   V1 to V2 API. So that's also the   deprecation phase of the v1 API. So   developing APIs is not only in the   development phase as you might assume   it's not just coding.

 So the big part of   it is designing it and also keeping it   maintainable and also eventually you   might need to retire it at the end. So   let's recap and see what our next steps   are. We learned what APIs are and about   the most dominant free type of API   styles which are restful, GraphQL, and   gRPC.

 We've covered the four key   principles that will guide us when   creating API designs effectively. And   you now also understand how the design   choice of your protocol will influence   the design of your API and also the   whole API design process from start to   finish. But we didn't discuss the   limitations and strengths of these API   protocols.

 So that's why in the next   lesson we will learn all about the API   protocols that we can use with API   design and which one we should choose   based on the requirements of our API.   Choosing the wrong protocol for our API   can lead to performance bottlenecks and   also limitations in functionality.   That's why we need to first understand   these protocols which will allow us to   build APIs that meet our specific user   requirements for latency throughput and   also interaction patterns.

 That's why in   this lesson we'll cover the role of API   protocols in the network stack. The two   fundamental protocols which are HTTP and   HTTPS and also their relationship to   APIs. also another common type of   protocol which is web soocket for   real-time communication. We'll also   cover advanced message queuing protocol   which is commonly used for asynchronous   communication and lastly we'll cover the   gRPC which is Google's remote procedure   call and it is also another common type   of protocol used commonly within   servers. Let's start by understanding   the application protocols in network   stack. Application layer protocols sit   at the top of network stack building on   top of protocols like TCP and UDP which   are at the transport layer. These   protocols at application layer define   the message formats and structures also   the request response patterns and

  management of the connections and error   handling. Now below that we have many   other layers like the network layer or   data link layer or even physical layers.   But when building APIs, we are mostly   concerned with the API layer protocols   which are HTTP, HTTPS, websockets and so   on.

 The most common type of protocol and   also the foundation of web APIs is HTTP   which stands for hypertext transfer   protocol. This is the typical   interaction between client and server   when they are interacting over HTTP. As   you can see, client always sends an   request and they define the method which   can be get, post or other methods and   they define the resource URL which can   be at / API/ products.

 Let's say they   are requesting data for this specific ID   of the product and they also define the   version of the HTTP protocol that they   are using. They also define the host   which is the domain of your server where   the information is accessed and usually   they also authenticate before accessing   any resources.

 So it can be either a   bearer token or a basic authentication   of and so on. So once the request is   authenticated in the server it receives   the response which is in similar format   and it's in HTTP response. So you get   the HTTP version which is again the same   as you requested with and the status   code which can be 200 if it was   successful or it can be 400 if the   client was error or 500 if the error   happened in server and so on.

 You   receive the content type which can be   usually application JSON but it can also   be a static web page or something else.   And there are many other headers that   you can control like controlling cache.   You can use the cache control header or   some other properties. But these are the   main things that you would notice in   HTTP request response cycles.

 Now when   it comes to methods, you have get for   retrieving data, post for creating data   in the server, put or patch for updating   data partially or fully, and delete for   removing data from the server. And when   it comes to status codes which are   received by the server. So you have 200   series which are successful cases you   have 300 for redirection.

 400 means that   client made an error in the request. So   this is an issue from client side or 500   which means that server made an error or   like some error happened in the server   which means that this is the issue in   this server. And these are the common   headers like content type which is   defined by the server usually but also   from the client.

 Authorization for   making a request and authorizing to the   server, accept headers, cache control,   user agent and there are more headers   but these are the common ones. Then we   also have HTTPS which is basically the   same HTTP protocol but with some sort of   TLS or SSL encryption which means that   our data is now protected in transit   when we are making requests.

 So it adds   a security layer through this TLS or SSL   certificates and encryption and it   protects data in the transit and   benefits of HTTPS is obviously your data   is encrypted in the transit. It comes   with data integrity and you also   authenticate users before providing any   data and it also adds SEO benefits and   you have many risks when you are using   HTTP only without any encryption.

 So the   golden standard is to always use HTTPS   in servers. The next type of protocols   are web sockets. While we have HTTP   which is very good at request response   patterns, sometimes HTTP has   limitations. For example, let's say   you're pulling some data. Let's say this   is a user chat. So you have the client   and server.

 On the client side, you have   the user chat and on the server you have   the messages between two users. When one   of the users messages the other, it   sends a request to the server to notify   that a message has been sent. And it   receives a response from the server,   maybe the messages from the other users   if they are any.

 And then next time if   you need to know if you have new   messages, you need to make again another   request to the server and maybe you   don't have any new messages. So you will   receive an empty response with no new   data. So this was basically a   nonnecessary request response cycle and   you might request from some other time   let's say from 1 minute and receive a   response.

 Now you have some messages but   it can be also empty again. So this way   is not ideal for realtime communication.   As you can see, you get increased   latency. You waste some bandwidth with   making requests that are empty and you   also use the server resources without   the need of making requests to the   server.

 And for such cases, we have   websockets which solve this issue. So in   websocket, you have usually a handshake   that is happening within the first   request. And now you have both like   two-side communication between client   and the server. Which means that once   the handshake is been made, the server   can independently decide to push data to   the client.

 Let's say now you have two   new messages on the server. So server   can decide to send these messages to the   client without even client requesting   for it. But client can still request   data. So if client needs some external   data or more data from the server, it   can still make requests. But server is   now also able to independently push data   to the client.

 So this is what unlocks   the real-time data with minimal latency.   As soon as you have some new data in the   server, it pushes the new data to the   client and it also reduces the bandwidth   usage by allowing birectional   communication. In client server model   with HTTP, you would make let's say new   requests per 5 seconds or 10 seconds to   see if there are any new data in the   server.

 But in this scenario, you don't   make any more requests other than the   first one. And now whenever there are   new data, server will push it. And   whenever there are no data to be   requested, then you don't need to make   unnecessary requests to the server. The   next very common type of protocol is   advanced message queuing protocol, which   is an enterprise messaging protocol used   for message queuing and guaranteeing   delivery.

 In this setup, you usually   have the producer which can be either a   web service or payment system or   something like that. And on the other   side, you have the consumer which can be   the processor of the payments or   notification systems and stuff like   that. So producer publishes messages to   the message broker and here is where you   have the advanced message queuing   protocol. You have cues in the middle.

  Let's say one of these cues is for order   processing. So whenever a new order has   been placed, producer publishes a   message to this queue. And then whenever   this consumer is free, it can pull   messages from this queue and start   updating the inventory and data in the   database.

 This allows the consumer to   only pull data from here whenever it has   capacity. And whenever this consumer is   busy with some other tasks, it leaves   the message in the queue and then later   on whenever it has some free capacity,   it will pull the message and start   updating the data. And when it comes to   exchange types, you have direct   one-on-one exchange or fan out or topic   based communication.

 And we will explore   these more when we come to the message   queuing section. The other common type   of protocol is gRPC which works with   protocol buffers. This is a high   performance RPC framework invented by   Google and it uses HTTP2 for transport   meaning the second version of the HTTP.   This means that clients should support   HTTP2 otherwise this can't be used   between client and server but that's why   this is most commonly used between   servers.

 So usually the client is   another server and we have some other   microservices communicating with each   other with this gRPC framework. It   mainly uses protocol buffers and it also   comes with built-in streaming capacities   because it uses HTTP.2.   So these are the most common types of   API protocols. There are many more but   usually in 90% of cases you would see   only these protocols.

 And when choosing   the right one, you should mainly   consider the interaction patterns.   Usually by default you go with HTTP if   it's just a request response cycle. But   if you're building something like   real-time chat or some real-time   communication, then you would need to go   with websockets. The choice also depends   from the performance requirements.

 So if   you have multiple servers, microservices   communicating with each other and there   isn't opportunity to use gRPC for   example then you can go with it to   increase the performance and speed of   the communication. But it also comes   down to client compatibility. For   example, most browsers don't support the   latest version of the HTTP.

 That's why   gRPC isn't that very common for browser   server communication. It also comes down   to the payload size meaning the volume   of the data and encoding security needs   based on the authentication encryption   and so on and also the developer   experience. So the tooling and   documentation and it also comes down to   the developer experience because you're   mostly going to work with this API and   it needs to have good documentation and   tooling for you to fully work with this   type of API protocol. So to recap, we   have explored the role of application   protocols in network stock. The HTTP and   HTTPS which are the most fundamental   types of protocols, web sockets for   real-time communication, AMQP which   stands for advanced message queuing   protocol which allows us to have   asynchronous communication and adding   message cues between the consumer and   producer and also gRPC which stands for

  Google remote procedure call. And the   main advantage of this is that it's high   performance RPC framework which uses   HTTP2 for transport. So we discussed the   application layer which includes these   protocols that we usually use for   building APIs. But we don't know yet   about this transport layer which   includes the TCP and UDP.

 So in the next   lesson we are going to discuss this   layer and understand which of these   transport layers whether TCP or UDP are   the best choice depending on the API   that we are building. Most developers   work with APIs but never think about   what's actually delivering those packets   like how does it happen that the request   is being made from client to server and   how does this request go through the   internet.

 That's where the second layer   comes in in the OSI model, which is the   transport layer that has the TCP and UDP   inside of it. These are both transport   layer protocols, meaning they handle how   data moves from one machine to another   over the network, but both are doing it   very differently. In this lesson, we'll   learn about these transport layer   protocols.

 We'll start with TCP, which   is the reliable but slower version. Then   we'll learn about the UDP which is in   short it's faster and unreliable version   of TCP and we'll compare both of them   and decide which one we need to choose   based on the API requirements. Let's   start with TCP which stands for   transmission control protocol.

 Think of   it like sending a packet with a receipt   tracking and also signature that is   required. So when you send some packets   over the internet you usually don't send   all of it at once. Sometimes the data is   larger. Let's say it's divided in three   chunks. So you need to send them   separately.

 The first chunk, the second   chunk, and also the third chunk. So in   this case, TCP guarantees delivery of   all of these three chunks. If one of   these packets is lost or arrives out of   order, TCP will resend or reorder it.   It's also connection based which means   that before sending any data it performs   a three-way handshake which is   establishing the connection between   client and server.

 It also orders these   packets. Let's say the client receives   the first packet first then the third   packet then the second packet. It makes   sure that it's reordered to first,   second and third. This of course adds   overhead but it ensures that it's   accurate and reliable. That's why APIs   that involve payments authentication or   user data always use TCP.

 On the other   hand, we have UDP which stands for user   datagramgram protocol. It's fast and   efficient. But the downside of this is   that it doesn't guarantee that all of   the packets will arrive. For example, if   you're sending four packets from the   server to the client, one of these   packets might be lost and it won't be   pushed to the client and UDP won't make   sure that this eventually gets   delivered.

 So, there is no delivery   guarantee. There is also no handshake or   connection or any sort of tracking. But   because of these trade-offs, it is   faster transmission and it comes with   less overhead as it doesn't need to make   sure that all of the packets are   delivered or in the correct order. For   example, in video calls, UDP can be the   best protocol because if some   information was cut in the middle or   let's say you're in a call with someone   and their internet connection lacks, you   don't need to receive that old   connection or the old data on what they   said because you are in the call right   now. So UDP is the go-to for video   calls, online games, or live streams   because if one of these packets drops,   it's still fine and you don't need to go   back and resend this packet. You can   just move on and send the next packets.   This is what the three-step handshake   looks like in TCP. As you can see, the   first step is that client sends a

  request to the server. In the second   step, server syncs and acknowledges the   request. And in the first step, the   client acknowledges the server and this   is where the connection is established   between the client and server. And now   they can start sending data back and   forth on top of this TCP protocol.

 So in   short, TCP is the safer and reliable   version of UDP, but it is slower. And on   the other hand, UDP is faster and   lightweight, but it is risky. For   example, if one of the packets in   between the source and destination is   lost, it doesn't resend it. So there is   no guaranteed delivery. But on the other   hand, if in TCP one of the packets is   lost after some time out, it still   resends the first packets.

 And this way   it guarantees that all data will be   delivered compared to UDP where some   data might be lost, but it will still   keep going. And when choosing between   those two, these are the main things   that you need to look for. If you need   the connection to be safe and reliable,   then you need to go with TCP.

 Or if you   need it to be fast, lightweight, but   some data loss might be acceptable, then   you will need to go with UDP. For   example, it is best for using TCP in   bankings, emails, payments, and so on.   And on the other hand, UDP is mostly   used in video streaming, streaming,   gaming, and so on. These are the main   things that you need to know about the   application and transport layers.

 And   these are the only layers that will need   to be used to building APIs. And in the   next lesson, we will learn about restful   APIs and how we usually design APIs in   restful format. Restful APIs let   different parts of a system talk to each   other using the standard HTTP methods.   They are the most common way developers   build and consume APIs today.

 And in   this video, you'll learn how to design   clean REST APIs by following the proven   best practices so that you avoid   creating messy and inconsistent patterns   that make the APIs hard to use and   maintain. We'll start by learning about   the architectural principles and   constraints of restful APIs, about the   resource modeling and URL design.

 Also,   the status codes and the error handling   as well as filtering, sorting, and so   on. and we'll learn the best practices   when using and developing restful APIs.   Let's start from the resource modeling.   Resources are the core concepts in REST.   Let's say you have the business domain   which consists of the products, orders,   and reviews.

 When modeling these to a   restful API, you usually convert this   into nouns and not verbs. Meaning that   the product becomes products, order   becomes orders, and same for the   reviews. These can be collections or   individual items. For example, this   first request which is to / API/   products will return you the collection   of products, not a single product.

 But   on the other hand, you could have slash   products and slashsp specific ID of a   product which will return you the   individual item. And notice that we are   using /roducts when retrieving the   collection of products. And we are not   using something like get products which   will be not a best practice in restful   APIs.

 As I mentioned we are using nouns   here and not verbs. So to fetch orders   for example you don't define the URL as   get orders. You just define it as slash   orders and depending on the method that   we'll use. Let's say it's a get method   then you will retrieve the orders. If   it's a post method then you will create   an order and so on.

 So all the resources   should be clearly identifiable through   the URLs. For instance, this is an   example of getting a collection. This is   an example of getting a specific item.   And also nested resources should be   clear defined. For example, if you want   to retrieve reviews for some specific   product, then we would assume that if   you make a request to SL products/ ID of   that product and then SL reviews, you   would get the reviews for that specific   product.

 But in real world APIs, you   rarely want to return all the results at   once. That's why we usually incorporate   filtering, sorting, and pagination in   APIs. So let's start from the filtering.   For example, if you make a request to   get all the products, you usually add   some query parameter which in this case   you can see it's category.

 So you're   first of all filtering them by category.   And then also with the end sign you add   that they should be in stock. So the in   stock should be true. And this way you   are only returning the items that you're   going to display on the UI and you're   not making some requests that will waste   the bandwidth of this API and also it   will be a huge response for you in the   front end side.

 Next you also have   sorting. In this case again it's   controlled through the query parameters   and query parameters are anything that   start after the question mark in the   URL. So in this case you usually pass   the sort attribute and this can be for   example ascending by price or ascending   by reviews or it can be also the   descending order.

 So based on this you   will get the response from the API in a   sorted order because if you for example   have thousand items in the back end in   the database you don't want to retrieve   all of these in unsorted order to the   front end because let's say the front   end now needs to sort them by the price   ascending.

 This means that it needs to   make request to get all of the products   which are these thousand items that you   have in the database. So that will be   very inefficient. That's why we do the   sorting in the back end instead. So your   back end should support sorting   functionality. This way the front end   can just make a request to your back end   and pass this sort query parameter and   then that way it will get the sorted   products to be displayed on the screen.

  And next we also have pagination. Again   with the query parameter you usually   pass the page which you want to retrieve   and also the limit because if you don't   pass the limit then again it will give   you all of the products starting from   the page two till the end which can be a   lot of items.

 So you also pass some sort   of limit and that limit is whatever   you're going to display on the front end   and then based on that you will get the   response and here let's say you fetched   10 items. So you're going to display   those 10 on the UI and then once they   click on the next page you will make   another request to the page three this   time and you will get the next items   from the server.

 Now usually we use page   for pagination but there is another   common attribute that is offset. So some   APIs use offset instead of the page and   they use this in combination with limit   which basically means if you have   thousand items. So offset will tell the   API from where to start counting this   thousand items and then limit is the   same as you have it here.

 So it's   basically limiting the number of items   that you are getting from this offset to   retrieve to the front end. And the last   option you can also have this cursor   based. So instead of page and limit you   would pass a cursor which will be the   hash of the page you want to retrieve.   So this approach of adding filtering   sorting and pagination comes with   benefits.

 So first of all it saves the   bandwidth of your server. It also   improves the performance both in the   server side and on the front end side   and it also gives the front end more   flexibility because now you can fetch   only the things that you need and not   some unnecessary data from the database.   Now let's come to the HTTP methods that   rest APIs use because they rely on HTTP   protocol and hence they are using the   HTTP methods especially for crowd   operations.

 So these are the most common   types of crowd operations you would see   in REST APIs. First of all we have the   get method which is used for reading   data from the API. So this is for   retrieving resources as you saw like   retrieving the products, retrieving the   reviews and so on. And the URL usually   looks like this.

 You you make a get   request to the / API/ version of the API   slash the resource name. And these type   of requests are both safe and item   ponent. Which basically means if you   make a request to slash products two or   three times, you expect to receive the   exact same output every time unless some   new products obviously have been added   to the database.

 Next, we have the post   method. This is usually when you're   creating a resource in your server. The   common example is again you will make   the request to exact same endpoint as   you have it for the get to create a   collection but in this case instead of   get you are using post method and this   tells the API that you need to create a   resource in the products and not   retrieve them.

 These type of requests   change the state of the server. They are   adding a new item and also they are not   item ponent which means that they are   creating a resource. So the first time   you create a resource you will get the   ID of the first item that you created.   The second time you create it you will   get the ID of the second one and so on.

  Next we have the put and patch methods   which are very similar but they are   updating resources in your API but they   do it a bit differently. The put method   replaces the whole resource whereas the   patch method partially updates the   resource in your API. Now you can see   that the request URL is exactly the same   in both of their cases.

 So it's to SL   products SL ID of a product you want to   modify just in case of the put request   it will take this whole product with the   ID of 1 2 3 and it will basically   replace it with the new one that is   coming from the front end. Whereas in   case of the patch it will again take   this item from the database with ID 1 2   3 but it will update it partially.

 Let's   say you just updated the title from the   front end and you made the request patch   method. So this will only update the   title of this product and it will leave   the other parts other properties   unchanged. And the last crowd operation   is delete and we use delete method in   this case and obviously as the name   tells it deletes the resource from the   database.

 So again the URL is exactly   the same as you have for modifying   items. it's to /roucts/ id of the   resource and in this case you are not   passing anything in the request body. So   you are just making a delete request to   this item and you are removing this from   the database and each of these   operations return you different status   codes depending on how the request went   whether it was successful or not.

 For   that we have status codes and error   handling in restful APIs. So you should   use the appropriate status codes when   working with REST APIs. For example, the   200 series are for successful requests.   For example, 200 is okay. 200 is   resource has been created. 204 is there   is no content here.

 Let's say you made a   request the previous request we were   talking about to /roucts/ some ID of a   product and you successfully retrieved   this item. This means that you also need   to set the status code to 200 because   the request has been successful. In the   other case where you're creating a   product and you're making a post request   to / products, this time you shouldn't   response with the same 200 code because   200 generally means that the status was   okay.

 But in 2011 case, it means that   the resource has been created. And in   this case, since you're creating a new   product, you should obviously response   with the 2011 status code, meaning   resource has been created. We also have   300 series which are for redirection.   Let's say you make a request to a URL   and now this URL has been moved to   somewhere else.

 So it will respond with   a 300 series and it will redirect you to   the new URL. In 400 series, we have the   client errors. So this is whenever your   front end made a bad request or the user   made a bad request. For example, 400 is   a generic bad request. In 401 we have   unauthorized requests meaning the user   is not authenticated to make this   request. For 404 we have not found.

 So   generally when you visit some URL or you   make a request for some specific   resource that doesn't exist, you would   get this 404 status code. So for 400   case, let's say you made a request with   invalid parameters or some wrong JSON   format. In this case, you would get a   generic 400 repair request.

 But if a   user makes a request to some to get some   product which is let's say the product   with this ID and it doesn't exist in the   database after querying it, then you   should respond with the 404 status code,   meaning that the resource has not been   found. And lastly, we have 500 series.   These are things when error happens in   your server.

 So you don't know the exact   reason and it's also not a client error   meaning client requested everything   properly and in this case we throw   unexpected server side errors. You   generally respond with a server error   message and you return the 500 status   code along with it. When it comes to   best practices of restful APIs, first of   all notice that we are using plural   nouns for all of the resources.

 So   instead of slashroduct we are using /   products for retrieving the products   collection. So you should always use the   plural in this case. Also in the crowd   operations we use the proper HTTP   methods. For example when making a   request to delete users we expect to   make a request to users/ ID of a user   and not some post request to/ users/ ID.

  So first of all the HTTP methods needs   to be properly set up and also the URL.   We don't expect some random things like   /delete to delete a resource from the   database. As you saw we also support   filtering sorting and pagination in good   rest APIs. Not only pagination for   example in this case we only have the   page free but we cannot limit the amount   of products that we want to retrieve.

  Whereas in this case we can fully   control what we want to get from the   API. We want to get the items from page   three. We want these number of limit to   be applied on the products. And we also   want to apply some sort like sorting to   sort the price or sort by ratings and so   on.

 And also versionings in the restful   APIs. As you noticed in all of these   requests, they all come with a prefix   which is / API and then slash the ID of   the API which is either v_sub_1, v2, v3   and so on. Because let's say in the   future you migrate your API and you   start using bunch of new features but   you also break something in the previous   version one then if you use the   versioning you won't break it on the   front end because they can use the old   version of your API and still use the   old features and functionalities while   you continue to develop the new version   let's say version three and you support   new features here and you might have   broken something here but they are still   using the old API so this doesn't impact   the end users. So to recap, we learned   about the rest architectural principles   and constraints. Also about the resource   modeling and URL design and how we model

  the business domain into the restful API   domain. Also the status codes, error   handling and the proper methods to be   used with the basic crowd operations.   And lastly, we covered the best   practices for restful APIs that you   should use to keep your APIs consistent   and also predictable for other   developers who are using it.

 Traditional   restful APIs often return too much or   too little data which requires us to do   multiple requests for a single view to   get all the data that we need. GraphQL   solves this issue by giving clients   exactly what they requested for. But   designing GraphQL APIs is different from   designing restful APIs.

 That's why in   this video we'll cover the core concepts   of GraphQL and why it exists. The schema   design and type system of GraphQL   queries and mutations, error handling,   and also best practices for designing   GraphQL APIs. Let's start by   understanding why GraphQL exists in the   first place.

 It was created by Facebook   to solve a very specific pain which is   clients needing to make multiple API   calls and still not getting the exact   data that they needed. For example, if   you imagine we have the Facebook APIs   like user API, posts API, comments and   likes for the Facebook page. Most of the   times client can make requests to all of   these APIs separately and still not get   all the data that it needs which will   require it to do multiple requests to   the same API.

 This of course adds up to   the overall latency of the page because   the page is still not loaded until all   of these requests are made and the data   is fetched. But in case of GraphQL APIs,   you have a single GraphQL endpoint. So   the client specifies the shape of the   response and this one endpoint handles   all of the data interactions.

 It is   still an HTTP request but as you can see   we can specify the exact data that we   need. For example, we need the user with   ID 1 2 3 and we need only the name of   the user also posts and from the posts   we can specify only title. So we don't   need the images for this view. And again   with the comments you can specify the   exact data that you need within the   object so that you are not doing   overfetching of the data.

 Now let's see   the schema design and type system of   GraphQL and how it's different from   restful APIs. The schema in this case is   a contract between the client and   server. In schema, first of all, you   have types which can be for example user   type that you specify and you specify   all the fields that exist on this user   type which are id, name, posts and so on   and as you can see if the type is not a   primitive type like posts then you can   specify another type of post array and   then this post type can be defined   separately. Next we have queries to read   data. So this is the equivalent of doing   get requests in restful API. You specify   the query and the function of this   query. This can be the user query which   fetches the user with specific ID and   also the return type of this query which   in this case is the user type that we   defined above. And graphqls also come   with mutations. You can think of this as

  the equivalent to post, put, patch and   delete methods in restful APIs. So   anytime you are mutating a data in the   database, you are making a mutation   query. Here as you can see we have an   example of create user method which   accepts name and of course many things   in real world and then it returns the   user type that we have defined above.

 So   if you have good schema design in   graphql it should mirror your domain   model and it should be intuitive and   flexible. Next once you defined the   schema design and type system you can   start querying and mutating data with   this GraphQL API. For that we have   queries for fetching data. Again this is   like the get requests in restful APIs   and here you can specify exactly what   you need from the user.

 This is the same   user method that we defined there in the   schema. So here you can also specify the   exact attributes like the name posts and   from posts you need the title only and   this will make a request to your graphql   API and return the exact data that you   requested. Similarly you can also use   the mutations that you defined.

 For   example, if you have a create post   method defined as a mutation, you can   use this to mutate the post. For   example, setting the title and body of   the post and then you also specify what   data you need to retrieve after this   post is created, which is ID and title.   When it comes to error handling in   GraphQL APIs, this is a bit different   than in restful APIs.

 Since GraphQL   always returns 200 okay status for all   responses even if there was an error. In   this case we have to return errors field   in the response which will indicate that   there was an error. So partial data can   still be returned with errors like in   this case we have the user which is null   and then we have the errors field which   indicates that you have the status code   404 message not found and path which is   the user in your schema.

 As you can see   in this case, you can specify the status   code in the errors array. Since we are   returning 200 status codes for all   GraphQL requests that's why we have the   status code specifically mentioned in   the errors so that we know what kind of   error this is, which is user not found.   There are also best practices that we   normally follow when designing GraphQL   APIs.

 First of all, the schemas that we   saw, it's a good practice to keep them   small and modular. Also, we should avoid   deeply nested queries. For example, you   can have a user and then nested post and   then within the post you can have a   comment. So this can be infinitely   nested and to avoid that we usually   implement query limit depths which is   how deep you can go like how many layers   nested you can have in your data.

 So you   specify something like six or seven   layers deep. We also use meaningful   naming for types and fields so that it   also makes from the client side because   they both are going to use the same   schema. And when mutating data, we   always use the input types for   mutations. Before a system can authorize   or restrict anything, it first needs to   know the identity of the requesttor.

  Whether it's a user accessing our   service through a browser or through   mobile app or it's a third-party service   trying to access our system. That's what   authentication does. It verifies that   the user or service trying to access our   system is who they claim to be. But here   is where most software engineers confuse   or mix up concepts.

 They mix up   authentication methods with   authorization frameworks. They treat JWT   as an authentication method when in   reality it's just a token format. They   also confuse the bearer authentication   with JWT. They sometimes call O of 2 an   authentication method when in reality   it's actually an authorization framework   and they mix up single sign on with   authentication methods when it's really   a user experience pattern.

 In this   video, we are going to fix all of that   by covering first of all what   authentication is and then all the major   types of authentication starting from   basic to digest authentication to API   keys, sessions and cookies, bearer   authentication and JWT tokens. What are   access and refresh tokens? Also, we'll   cover O of 2, Open ID connect.

 also   single sign on and identity protocols   and understand what each one actually is   and where this all fits. Let's first   understand what is authentication and   then we'll get into the different   authentication methods. So   authentication really answers one simple   question which is who the user is   whoever is trying to access our system.

  Let's say you have your system like your   API gateway, the layer of APIs, then   your service layer and also the data   storage. Before anyone can make requests   to your API gateway and start accessing   services and data, they first need to be   authenticated. That is where they send a   login request.

 This comes either from a   user or another service. This is where   we confirm their identity if it's valid   and grant access to our system to our   API gateway and all the other services   or if the identity is not confirmed then   we reject it with a 401 unauthorized   response. This is the first step before   they will get into the authorization   which is what they can access and what   they can do once they can sign into your   system but that's a separate discussion   in itself.

 So in this one we are   primarily focusing on the authentication   and different authentication methods   that we can use to verify the user's   identity. Now let's see the different   authentication methods that we have to   verify the identity of the requesttor   and let's start with the basic   authentication methods. These are the   basic of digest authentication API keys   and sessionbased authentication.

 Let's   start with the very first one on the   list which is the basic authentication   flow. This is the simplest form of   authentication. Let's say you're making   a request to the server to access some   resource like API/ users to retrieve the   user data. You will first receive an   unauthorized response because you didn't   provide the credentials.

 So we prompt   the user or the service to provide   credentials before accessing any   resource in the server. So in the   upcoming request to the same resource   they also provide the authorization   header and this header contains the base   64 encoded version of the username and   password for this user. This is where we   verify it on the server side.

 If the   credentials are valid, then we respond   with 200 okay status with the user data   returned in the body or we unauthorize   it again marking these as credentials   invalid. The problem with this method is   that base 64 is easily reversible. So   this is an insecure method unless it is   wrapped with HTTPS protocol and even   then it's rarely used nowadays in   production outside of the internal tools   because you're sending the credentials   with every request and you're sending   the base 64 encoded version which is not   that secure. That's why we also have a   digest authentication which is slightly   better and it uses the MD5 hashing. So   this method works similar to the   authentication with basic version. So   you are let's say trying to access the   same resource like the users. It will

  first respond with 401 unauthorized   prompting you to include the credentials   and then you'll make the same request   but with the hashed response and that   will also contain the MD5 hash version   instead of the plain password and   username. And same process as the   previous one. If the credentials are   invalid, you will receive 401   unauthorized.

 Otherwise, you will   receive the successful response with the   user data in the request body. This is   slightly better than the basic off as it   uses the MD5 hashing, but it's still   outdated and rarely used today because   we have better options as you will see   soon. And if you're wondering how do we   set these options in the authorization,   for instance, if you're making the   request from Postman or if you're doing   this from the code, then you'll include   it as the header in the request.

 This is   where you can set the authentication   type and you will notice the things that   we're discussing here like the basic   authentication which was the first   version or digest authentication which   is the second version and you will see   the other methods available here also   the API key option and Postman calls all   of these authentication types to just   keep it simple on the interface but   that's also one of the reasons why   developers get confused and they think   that all of these are authentication   types when some of them are   authentication methods, some of them are   authorization frameworks. Next, we have   API key authentication. This is where   you generate a unique key for each   client. Then then they send it with each   request to access the resources. So for   the same request as we discussed it   comes to your API server first and it   will include either authorization header

  or X API key and that will include the   API key that you generated for the user.   These API keys are typically stored in a   database with key hash and also the   scopes for the API key. And for   instance, if you ever tried to access   APIs by generating a key on the   dashboard and then it gives you the   keyback which you can attach to the   requests, that is where you already used   the API key of that service to access   the data.

 So if you included that key in   the request then the server will first   do an API key lookup in the permissions   or users table and if it's able to   verify that the API key is valid then we   will authorize the request and send the   successful response with the data in the   response body otherwise the user will   get a 401 unauthorized response and if   the key is missing overall like the   authorization header or XAPI key then we   just return a 400 bad request because   the API key is required to access this   type of system. One issue with API keys   is that if the key ever leaks, then   anyone can use it and start accessing   the resources on your behalf with your   API key and there is no built-in   expiration unless you implement it   yourself. Another thing is that this   might seem similar to JSON web tokens,

  but API keys are just random strings   with no embedded information. While in   JWT, we can store also information as   you will see it shortly. So the server   here has no way to know who owns the key   or what permissions they have without   looking it up in the database. Next, we   have the traditional web approach, which   is the sessionbased authentication.

 This   is where a user logs in with their   credentials and then we create a session   in some sort of session storage. This   session storage can be as simple as just   in memory like just a variable. But the   problem here is that we will lose it   once the server restarts or crashes. The   other option is we can use tools like   radius which is one of the most common   ones in production because it's fast and   it supports expiration for the sessions   or we can use a dedicated database here   like SQL type of database. Another   option which is very rare is to use the   file system of the server that you're   using. The problem with this one is that   it's not scalable and overall radius is   usually the go-to for production because   it's fast and has built-in key   expiration. So with the first request,   we are fetching the session ID and then   we set the session cookie on the client

  side. Then for any other upcoming   requests that contain this cookie, we   look up the session in the session   storage here. And then if the session is   valid, we will get back the user data   and we will send it with authorized   response. Otherwise, if it's not found,   if we can't find the session, then this   user is not authenticated.

 So we send   them an unauthorized response. One   challenge with session based   authentications is that it is stateful,   which means that the server must   remember the sessions. We need to have   some sort of session storage here and it   works great for traditional web apps but   cannot scale as easily for APIs or   distributed systems.

 Now let's look at   token based authentication. We'll cover   better authentication, JWT tokens,   access and refresh tokens and how this   compares to the sessionbased   authentication. Instead of sessions,   modern applications usually use tokens.   So the client sends a token with each   requests. For example, we have a login   with credentials where user will include   their credentials in the authorization   header which will include the type of   authentication which is bearer and also   the token which we will validate on the   server side. One thing developers   confuse here is the bearer token and   JSON web tokens. Bearer token just means   whoever has this token gets access. So   it's a pattern but not a specific   method. And the most common type of beer   token is JWT JSON web token. It's   basically a signed JSON object that

  contains the user ID or email for us to   validate the user also expiration time   and other claims as we need to store   them like roles, permissions and so on.   So what we do on the authentication   server is we validate the credentials   once we receive that authorization   header and it is stateless meaning that   we don't need a database here to look up   and that is why it's also scalable   compared to the sessionbased   authentication before the JWT let's say   revolution a token was just a string   with no information and that token was   sent and then this was looked up in some   sort of database and only then we could   verify that the user has access. The   downside of that was that of course it's   still stateful because we need the   database access or cache which is   required every time the token is used   with JSON web tokens. Now we can encode

  and verify by signing their own claims.   And this is what now allows us to issue   a short-lived JWT tokens that are   stateless, meaning they are   self-contained and they don't depend on   anybody else. They do not need to hit   the database and this reduces the   database's load and it also simplifies   the authentication process for the   server.

 So the first time we will   receive the credentials and validate the   user and if it is valid we will generate   the JSON web token and send it to the   client. From this point forward the   client can make requests and include   this bearer token which is this   authorization header that contains the   bearer authentication with the token and   that token is most cases it is a JSON   web token.

 we verify that signature   locally without needing to hit the   database. And if the token is valid, we   return the requested data. Otherwise, we   return an unauthorized response. Modern   systems also use two types of tokens.   One of them is the access token and the   other one is the refresh tokens. The   reason we need two tokens here is that   access tokens are short-lived and they   are used for API calls to the server   while the refresh tokens are long lived   and they are used to get new access   tokens basically to renew the access   token. Whenever user sends a login   request and signs in, they get both of   these tokens. We generate an access   token that's valid for 15 minutes to 1   hour and we generate a refresh token   that can last for days or even weeks.   Client now will use the access token to

  access the API and make the requests and   it also stores the refresh tokens. One   important note here is that we never   store it in local storage but we store   it in HTTP only cookies. This prevents   us from XSS attacks on the client side.   And after this, user will stay logged in   without re-entering credentials.

 If   their access token expires, they will   get an unauthorized response. And this   is where we will use that refresh token   which we stored to generate a new access   token on the offserver side. We can make   a request with that new token. And this   will successfully return us the data   since we renewed the access token.

 Next,   let's get into OAF2 and open ID connect   which are some of the misunderstood   concepts and let's clarify whether these   are authentication methods or   authorization frameworks and how they   work. Oaf 2 is one of the concepts that   is often misunderstood. It's an   authorization framework and not an   authentication.

 So it answers what can   this app access on behalf of the user.   For instance, if you want to grant an   application access to your Google Drive   to be able to read your files from   there, you would typically connect your   Google Drive for this external   application and you're giving the app   permission to access your data.

 The way   it works is it first will redirect you   to consent screen from the Google of   authentication and it will show you the   permission request and if you allow   access for this application to be able   to read the drive files on your behalf.   Then it will return the authorization   code to this external application or it   can also be your application.

 And the   way it works after that is that you   exchange the code for token and you   return the access token from Google oath   to be able to read the data. That is the   confusing part because you're getting   back an access token for the Google   Drive API and you might think that this   is an authentication method but the   access token just proves that the app   can access your resources.

 But it   doesn't tell the app who you are. It   just proves that the app is allowed to   access certain resources from your   Google Drive. So after this point, the   application will be able to request   files with that token and return the   user files from Google Drive API. Next,   we have open id connect which adds   authentication on top of 2.

 So when you   click on sign in to Google let's say via   your app it will redirect you to the   authorization endpoint and this will   show you the login screen where you   grant access to sign in to Google   through your application. If you enter   your credentials and consent then the   provider will return the authorization   code and after this step your   application will exchange the code for   tokens and return the access token in   combination with the ID token.

 From here   the access token is for OF2   authorization but the ID token is a JSON   web token that contains your identity   which includes your email or username   user ID which means that after this   point your application is able to verify   the signature and extract the user's   identity to send the ID token for   verification to your back end.

 And by   having this ID token, your application   can now create its own session and grant   the access token for that user. This is   a modern solution. It's secure and also   scales well. And that's also why most   applications nowadays use that type of   authentication like sign in with Google,   GitHub, Microsoft, and so on.

 And   lastly, let's cover single sign on and   identity protocols. Single sign on is a   user experience, not an authentication   method, which means that you're able to   login once but access multiple services.   For example, when you want to log to   Google or octa, let's say you want to   get access to your Gmail, to your Google   Drive, to YouTube, to Google calendar,   you can do this by logging in once to   the identity provider.

 Let's say it can   be Google in this case. if you want to   access these services and single sign on   uses identity protocols underneath to   validate these sessions. So once you   sign in with the identity provider let's   say it's Google in this case your global   session is stored in a session storage   and then you get back a single sign on   cookie to your client to be able to   access other resources.

 So let's say you   want to access Gmail for the first time   then once you log in you verify also the   session and now you're able to access   Gmail and for the next request if you   need to access Google Drive for the next   one you don't need to login again   because you have this cookie and the   session stored in the session storage so   we just verify your session and if it's   valid then you get access to Google   Drive as well and similarly to YouTube   to Google calendar and other services as   I mentioned single signon uses identity   protocols underneath and these protocols   are SL which is security assertion   markup language or open ID connect both   of these are identity protocols which   are used in combination with single sign   on in case of SL to be able to access   the app you're redirected to login and   this is where we use SL for   authentication

  this is a common solution ution in   enterprise and legacy systems like   Salesforce, corporate dashboards and so   on. It is an XML based protocol. So once   you want to sign in, you are redirected   to login and then you get back the   sample assertion in XML format and after   that your identity is confirmed for the   user and now you're able to access the   third party application.

 SL is still   widely used but it's an older version   compared to open ID connect. So the next   option is the open ID connect as an   identity protocol. Let's say you want to   access an app and in this case it's   Gmail. You will be redirected to login   to provide your credentials. And once   you provide your credentials, the user   is authenticated.

 And now you get back   the ID token in JSON web token format.   And this is what you will use for   confirming your identity with Gmail.   This is for instance what Google uses   under the hood. and it's a more modern   approach compared to SL, but both of   them are still very secure and relevant.   These are the most common types of   authentication and that is just the   first step for accessing our system.

  After you know who the user is with   authentication, you need to also know   what they can do and what permissions   they have. The authentication is just   the first step before users can access   your service. So this tells you who the   user is and if they are allowed to   access your service.

 That is when they   send a login request and you confirm or   deny their identity. But after that you   also have the authorization step which   tells you what resources exactly this   user can access to. Basically it tells   you what they can do what the user can   do in your system. And that is what we   will cover next in the next video.

  Authorization is the step that happens   after authentication. Once someone is   logging in into our system. So once   their login request is approved which   means that the system now knows who the   user is. The next step is deciding what   they can do which is the step of   authorization.

 It needs to check what   resources or actions that user has   permissions to access and also what are   the denied actions for this user. This   is how we control security and privacy   in the systems. And in this video you'll   learn how applications and systems   manage permissions using the three main   authorization models.

 The first one is   role based access control. Next we have   attribute based access control. Also   access control list which is another way   of managing authorization. Plus you'll   learn how technologies like of2 and gvts   help us to enforce those rules in   practice. So authentication happens   first which tells us who the user is and   if they are allowed to access our   system.

 But on the next step we have   authorization which determines what you   can actually do as a user in this   system. If we take a look at GitHub as   an example and accessing repositories on   GitHub there you have different   permissions for different users. For   example, user A can have write access   only which means they can only push code   to this repo.

 But on the other hand, we   can have user B and here you can grant   only read access which means they can   only read this repository but they   cannot push code to it or they cannot   create pull requests and so on. And on   the other side we can have also admin   users which have full control. So they   can manage all the settings for the   repository.

 They can even decide to   delete this repository and so on. So you   can see that different users can have   different access controls on systems. To   manage these access controls, we have   common authorization models. So the one   that we just looked at is the role based   authentication model which assigns roles   to users something like admin, editor or   readonly access, write only access.

 And   this is the most common approach among   these authorization models. But we also   have attribute-based access control   which is based on the user or resource   attributes. So this is more flexible and   more complex compared to the role-based   authentication. And the other common   approach is to have access control lists   ACL and each resource here has its own   permissions list.

 So you can assign   permission lists to a resource and this   is what will determine what resources   you can access. For example, this is a   common way of managing Google Docs and   we will look at this in more detail now.   And each of these models has its   tradeoffs, pros and cons. So this   depends on the specific system   requirements.

 But real systems often   combine also multiple models together to   have more complex and more secure setup.   So first up we have RO based access   control or RBAC as an an acronym. Here   users are assigned to roles and each   role has a defined set of permissions.   For example, as you saw with the GitHub,   you can have admins and admins usually   have full access to all resources.

 So   they can create, they can read or update   resources. They can even delete   resources and also manage other users in   the roles. And next you have editor   which is usually a bit less than admin.   So they can edit content like creating   or reading content or updating resources   but they cannot delete resources and   they cannot also manage other users.

 And   next you can have viewer users which can   only read data. So they can read the   resources and content but they cannot   update anything or they cannot create   anything in your system. This is the   most common way in authorization models   and this is used in apps that you use   daily like you saw with GitHub or stride   dashboards or CMS tools, team management   tools and so on.

 The next model is   attribute-based access control or ABAC   in short. This access control goes   beyond the roles. So it uses the user   attributes or resource attributes and   environment conditions to define the   access. Some example policy you can see   here. Let's say you want to only allow   access if some conditions are met.

 In   this case, whenever the user department   is set to HR and you can combine this   with multiple conditions like whenever   the resource attribute equals to   internal and so on and only in this case   you allow them access and you either   allow them read access or write access.   So this can also be combined with the   role based authorization.

  But in this case you are checking the   user model or resource model in your   database and based on the attributes you   either allow or deny the access. So here   as you can see we are checking user   attributes like the department the age   or whatever you want to check here. Next   you can also combine it with resource   attributes like confidentiality or the   owner of the resource or classification.

  And this can also be combined with   environment like time of the day,   location, device type, and so on. Since   you're combining these attributes to   either grant or restrict access, this is   more flexible than the role-based   authorization, but it requires good   policy management and generally it's   more complex and you can encounter   conflicts here with the attribute-based   access control.

 The third common type is   the access control lists. Instead of   providing role based access or attribute   based access, you can have access   control list for the specific resource.   Let's say you have a resource like a   document or a JSON file. And here you   can have a permission list on which   users can access this document like user   Alice has only read access or user Bob   has both read and write access and   another user has no access to this   document.

 So as you can see we're   managing two things here. First of all,   which users are allowed to access this   document and second, what are their   permissions? So each of the users has   different permissions on this document.   ACL's are highly specific and also user   centric, which means it's hard to scale   them well in systems with millions of   users or objects unless you manage them   carefully.

 But for example, Google drive   is one example of this where you have   documents like a Google doc and then you   share this Google doc with your   colleagues, right? So you share someone   with read access only and then you share   this doc with someone else but now they   can also edit and add comments to this   document.

 So this is a example of ACL   access control list which is used in   Google Drive and Google documents. This   gives you more control over resources   and documents, but it's also harder to   scale with millions of users, but it's   possible as you can see because Google   Drive is using this for their documents,   Excel sheets and so on.

 So these were   the access control models. But how do   systems enforce those authorizations?   These are where O of 2 and GVt or access   tokens come into play. So first we have   OF2 which is delegated authorization   which is a protocol used when service   wants to access another services   resources on a behalf of a user.

 For   example, if you want to let a third   party app read your GitHub repositories.   Let's say you're deploying your app to   Versel. So you need to give Versel   control over your repository on GitHub.   Instead of giving your username and   password to the third party application   which won't be secure at all because you   don't know what they can do with your   username and password.

 This way you are   giving them full control. Instead,   GitHub gives them the token that   represents the permissions which you   approved to use. So you as a user send a   request with the third party app to   request access to your repositories and   then GitHub gives you the access token   which you should create. So you should   also provide what resources, what   repositories this third party app can   access and also what they can do.

 Can   they create, read, update or can they   delete or whatever the permissions you   set and then GitHub sends them the token   which contains the permissions which   this third party app is allowed to use   and OF2 defines the flow for securely   issuing and validating those tokens. So   you give them the access token and not   your password which represents the   permissions that you approve personally.

  So it can be reading specific repos or   also creating pushing to those   repositories but not deleting those   repositories. And next we have also   token based authorization using GVt or   bearer tokens and permission logic. Once   a user is authenticated, most systems   use a token typically a GV token or this   can be also bear token that carries this   information like user ID, the roles like   admin or editor and also scopes which is   what scopes they are allowed to access   and whenever this token is expiring and   who is the issuer of this token. So   whenever a user makes a request, it   always carries this token information   and reaches to the backend server. This   is where the server will check your   token and validity and it will apply the   appropriate permission logic. So to not   confuse this with authorization models,   there is a key distinction. The token   usually carries the identity and claims

  of your user as you see it here. But   authorization models like role based or   attribute-based this is what defines   what is allowed to access as a user. So   tokens are just mechanisms while these   are authorization models. So in summary   authorization isn't just letting users   in like authentication but it also   controls what they can access once they   are in.

 We learned what authorization   is, what are the three most common   authorization models which are role   based, attribute-based and access   control lists. And also you saw a couple   of real world examples like how GitHub   manages your authorization tokens. And   this should give you an idea on when to   use each model based on the system that   you're building.

 And you also saw some   implementation patterns with O of 2 or   GVT tokens. Each of these models has   their own trade-offs, their own pros and   cons, and real systems often combine   multiple models to stay flexible and   secure. APIs are like doors into your   system. If you leave them unprotected,   then attackers and anyone can walk right   in and do whatever they want with your   user data and overall the system.

 That's   why in today's video, we'll look at   seven proven techniques which will help   you to protect your APIs from unwanted   attacks. The first one we have in the   list is rate limiting which controls how   many requests a client can make in a   given time. For example, you can set a   limit for user A to make let's say 100   requests per some period of time to your   API.

 And if they cross that limit and   let's say make 101 requests, then you   block the next request and allow some   time to pass before they can send their   next request. If you don't set this to   your API, then attackers can overwhelm   your system. They can send like   thousands of requests per minute and   then overwhelm your API which will take   your system down or it can also brute   force your data.

 And these rate limits   can be set per endpoint. For instance,   let's say you have some /comments   endpoint and here they can send a   request to either create a comment or   fetch comments. You can set that limit   for endpoint level. So these comments   endpoint will be set to some strict   number of requests per minute. You can   also set it per user or IP address.

  Let's say in a we have the IP address of   first user and then B for the second, C   for this one and your attacker has some   IP address which corresponds to D. If   you get the 101 request from the D IP   address, then you will know that this   user overused the API. So you will block   it at the user IP level.

 And there is   also overall rate limiting to protect   from DDOS attacks. Since you can set the   rate limit to work per user or per IP   address, that means that this attacker   alone cannot send that many requests.   You will block it with your rate   limiting in the API. But what they can   do is they can spin up some bots and   each bot will have their own limit,   right? Let's say you've set it to 100   per IP address.

 So each of these boats   has 100 and overall they have more than   you would allow or your system could   handle. That's why you have also overall   rate limitings which can be some bigger   number. So whenever all the traffic   coming into your server reaches or   passes this number then you will   temporarily block all requests until you   find out the root cause.

 And of course   these numbers are just examples. So in   reality it's much more than thousand but   that's just an example. The second one   on the list is course which stands for   cross origin resource sharing. This   controls which domain can call your API   from a browser and without proper course   malicious websites could trick users   browsers into making requests on their   behalf.

 For instance, if your API is   only meant to serve your front-end app   which is at app.youdomain.com   yourdommain.com   then only requests from this source   should be allowed. If anyone else sends   you a request like up another domain.com   then you should block this request and   not allow them to use your API for   authenticating or using any of its data.

  The third one is also a common one which   is SQL and NoSQL injections. Injection   attacks can happen when the user input   is directly included in the database   query. For instance, attacker can modify   it and send some queries to read or   delete your data. Here, for example,   this part bypasses the checks entirely   and then attacker can use this query to   start reading data from your database or   modify anything or they can also delete   all the data, all the user data and any   other tables that you have in this   database. So to fix this, we always use   parameterized queries or OM safeguards.   The next technique to use is firewalls.   Uh firewall acts as a gatekeeper   filtering the malicious traffic from the   other normal traffic. So typically you   have it between your API and the   incoming traffic. For example, if you   use the AWS's web application firewall,

  these can block requests with unknown   attack patterns such as suspicious SQL   keywords or strange HTTP methods, which   means it will block any suspicious   requests from attackers, but it will   allow others to bypass the request and   reach to your API. Some APIs are also   private and should only be accessed from   specific networks.

 That's why we have   also VPNs which stand for virtual   private networks. The APIs that are   within the VPN network can only be   accessed by someone who is also within   that same network. Which means that some   APIs are public facing meaning these   APIs will allow any requests from the   internet from your users. But this for   example can be within the VPN network.

  Which means if a user from web tries to   reach your API then this request will be   blocked because the user is not within   the same network. But on the other hand   if you have another user here which is   within the VPN network they can make a   request to these APIs and in this case   they will bypass the checks and their   request will reach to your APIs.

 This is   useful where you have internal tools.   Let's say you have internal admin   dashboard and the API for this admin   panel will only be reachable by   employees connected to the company VPN.   Next, we have CSRF, which stands for   cross-sight request forgery. This tricks   a logged in user's browser into making   unwanted requests to the API.

 Let's say   you as a user are logged in into your   bank system and your bank system uses   cookies for authentication. If the bank   system is not secure and they only use   session cookies, another malicious site   might use your cookie and submit a   hidden transferring money request   through your cookie.

 So to prevent such   attacks, companies also use CSRF tokens   in combination with session cookie. So   the banking system will check if the   session cookie is present, but it will   also check if the CSRF token matches   with the one that they have. And if it   doesn't then it will block this request   from the other unknown source while it   will allow request from your behalf.

 And   the last one we have is XSS or it's also   called cross-sight scripting. This lets   attackers to inject scripts into web   pages served to other users. For   example, if you have a comment section   and this comment gets submitted to your   API. Next, your API will also store it   in a database.

 You can get normal   requests like nice picture or something   like that and this will get to your API.   Your API will store it in the database.   So everything is fine there. But what if   an attacker places a script in this   comment section and within this script   they can try to do many different   things.

 For example, they can try to   fetch the cookie for another user or   they can try to inject something into   your database. And if you allow this   then it will reach to your server and   the information will be written into the   database. Later when the other users   load this comments section on their   screen, they will get also the injected   comment directly into their web page and   the browser will execute this malicious   JavaScript code into the other users   browser.

 What you just watched were the   first two parts of my system design   mastery course. I also have deep dives   into databases, caching, CDNs, and   production infrastructure on my YouTube   channel. Just search Hikimmon on YouTube   or check out the first link in the   description. I also cover full case   studies where I take real systems like   WhatsApp, Spotify, Tiny URL, and more   and design them from scratch using the   exact components you learned about here.

  And if you also want access to the full   system design mastery course where I go   deeper into all of these pillars, then   you'll find more information on that on   my channel.



---

## A. Git and GitHub Crash Course for Beginners 2026

**Source File:** `VideoTranscriber_Git and GitHub Crash Course for Beginners [2026].txt` | **Size:** 79.8 KB

---

This comprehensive course will give you   a rockolid foundation in Git for version   control and GitHub for collaborative   remote storage. You will learn the core   concepts like how Git tracks your work   through the working directory, staging   area and repository. You'll learn the   vital git commands from add and commit   to stash and rebase through clear real   world examples.

 And you'll learn about   collaborative workflows like how to work   with branches, handle merges, and use   powerful features like pull requests on   GitHub. Sumit Saha developed this   course. Today we are diving into   something really exciting. Git and   GitHub. But before we go any further,   let's clear one thing up. Git and GitHub   are not the same thing.

 They are   connected. Yes, but completely   different. Think of it this way. G is   the coffee and GitHub is the coffee shop   where that coffee is served. Fun   analogy, right? Don't worry. In just a   moment, you will see exactly what I   mean.   So, let's start by understanding what   Git actually is and how it works.

 Simply   put, Git is a powerful tool that   constantly keep track of every change   you make to your files. And I mean   literally all the time, day or night,   365 days a year. Git records what   changed, when it changed, who changed   it, and even where it happened. Now what   kind of files are we talking about?   Almost any kind, not just code.

 It could   be an image, a text file, JavaScript,   PHP, Python, or even a video. No matter   what you are working on, G tracks every   single change. Which line was edited,   when it was done, and by whom? Pretty   amazing, isn't it? But here's the best   part. The magic of Git doesn't stop   there.

 The coolest thing about Git is   that it saves different versions of your   files. Imagine you wrote some code and   then made a few changes to it after a   few days. Now you want to make sure the   old version doesn't get lost. That's   exactly where Git comes to the rescue.   It lets you keep multiple versions of   the same file effortlessly and whenever   you want, you can roll back to any   previous version in just a moment.

 Git   is most commonly used in coding   projects, but its power goes far beyond   just code. You can use Git to keep track   of changes and maintain different   versions of almost any file. This means   you never have to worry about losing a   file or accidentally overwriting   something important. Let's look at a   real life example.

 Suppose you are   working on a project. You have spent   hours writing code. Your client loves it   and everything's going great. Then a   month later, the client asks for some   new changes. You make the updates as   requested. But after a few days, the   client comes back and says, "Actually,   the old version was better.

 Now you are   in trouble, right? because you have   already overwritten the original code.   How do you get it back? That's exactly   the kind of problem Kit solves. This is   why Kit is known as a version control   system. It keeps every version of your   files or code safely stored. So you can   go back to any previous state whenever   you need to without losing a thing.

 G   was created by Linus Torvs, the same   brilliant mind behind Linux. And   honestly, what he built is nothing short   of genius. Most tools we programmers use   have a short lifespan, but Git is one of   those rare ones that once you learn it,   stays useful for the rest of your   career.

 The best part, Git isn't hard to   learn at all. It's built around a few   simple commands and concepts. Once you   understand those, the whole system   starts to make perfect sense. Still, for   beginners, Git can feel a little   confusing at first. And that's exactly   why I made this video. Think of it not   just a tutorial but as a complete   learning resource for mastering it.

 Here   we will cover all the essential topics   you will actually use in real world   projects. And if you want to jump to a   specific topic, you can easily find it   from the video timeline. So if you   follow this video closely, I'm sure   you'll easily understand every part of   Git step by step.

 Now let's move on to   another important topic. The difference   between Git and GitHub. Git is a tool   that runs locally on your own computer.   It tracks all the changes you make to   your files and keeps everything   organized. But imagine this, you and   your teammate are working on the same   project. You are coding on your own   computer and your teammate is working   from another one.

 That means you both   have different versions of the same   project, right? And if your team has   more members, there will be even more   versions each saved separately on their   own machines. That's exactly where   GitHub comes in. When the project is   complete, you will need to combine   everyone's work into one single place to   merge all those changes together.

 For   that, you need a central hub where   everyone can upload their updates. You   push your work there, your teammate   pushes theirs, and GitHub brings it all   together. GitHub acts as that central   online server where your team's entire   project lives, making it easy for   everyone to see, edit, and share updates   in one single place without any   confusion.

 But GitHub isn't the only   place where you can host your Git   repositories. There are other popular   platforms too like GitLab and Bitbucket.   These are also widely used and trusted   by developers around the world. Still,   among all of them, GitHub remains the   most popular and widely adopted   platform.

 In today's discussion, we will   focus mainly on GitHub. It's now owned   by Microsoft and is maintained with   great care and attention, especially in   the programming community. And in the   world of open source projects, GitHub's   contribution is truly remarkable. So   without wasting any more time, let's   dive in and explore how Git and GitHub   actually work and see some real world   use cases that will help you understand   their power in action.

 Before you start   working with GitHub, the most important   thing is to understand its core concept,   how it actually works and what its   internal structure or architecture looks   like. G is mainly divided into two major   parts, local and remote. The local part   refers to your own computer where you do   all your work.

 This is where your files,   code, and every change you make are   stored. The remote part on the other   hand lives in the cloud. It's where you   push or upload your local work. In most   cases, when we say remote, we are   usually referring to GitHub. Now, let's   start with how the local part works. In   your computer, the folder where you are   working on your project is called the   working directory.

 This is where all the   action happens. You write code, create   new files, modify existing ones, and   make changes as needed. And when you   feel all right, this version looks good.   I want to save this change. That's when   you move on to the next stage in kids   workflow. So, what do we do next? We   move our work to the stage.

 At first,   this word might sound a bit unfamiliar,   but once you use it a few times, it will   make perfect sense. In simple terms,   when you finish your work in the working   directory, staging means you are saying,   "All right, my changes are ready. They   can move to the next step." This staging   process is the second phase in Git's   workflow.

 Then comes the third phase   where we take the staged files and send   them to the local repository. You can   think of the staging area as a middle   ground, a temporary space where files   sit between your working directory and   the final save in the repository. Once   you have reviewed everything and you are   confident the work is correct, you   commit it.

 Committing means permanently   saving those changes to your local   repository, locking them in as a   recorded version of your project's   history. Now, you might be wondering   what exactly is a repository. Simply   put, a repository is a place where all   the versions of your files and their   complete change history are stored. In   the case of a local repository, it's a   specific folder on your own computer.

  For a remote repository, it lives on a   cloud server like GitHub. You can think   of a repository as a digital cabinet for   your code, a secure place where Git   neatly stores every record of your work   and every change you have ever made.   Inside this repository, Git   automatically creates a few system files   that track everything, your changes,   history, commits and more.

 These files   are managed entirely by Git itself and   the whole system runs based on the data   stored within them. So if we summarize   everything we have learned so far, it   goes like this. First, we work inside   our local working directory. Once we are   done, we stage our changes and then   commit those staged files to the local   repository.

 Up to this point, everything   happens only on our own computer.   Nothing has been sent to the cloud yet.   We need the cloud only when we want to   share our code with others, access it   from another computer or keep it safely   backed up. That's when we push our local   repository to the remote repository. In   other words, we upload it to GitHub.

  Think about it like this. Just as we use   Google Drive or One Drive to store   files, photos or documents, we could   technically keep everything only on our   own device, but we store them in the   cloud so that we can access them from   anywhere. And even if something gets   deleted locally, it stays safe online.

  GitHub works the same way. It's our   cloud backup for code. So you see the   main purpose of this whole process is to   make collaboration and remote access   possible. Having a remote means we can   easily send our code from the local   repository to a cloud server and if   needed pull that same code back to any   other machine and that's the core idea   of git.

 The foundation of the entire   system rests on this simple concept.   Beyond that there's nothing overly   complex. Once you clearly understand   this basic workflow, everything else in   Git will feel much easier to grasp. All   right. Now let's see how to get started   with Git from scratch. The very first   step before working with Git is   installing it on your computer.

 To do   that, just open Google and search for   Git. Click on the official G website   that appears in the search results. Then   go to the download section. There you   will find different versions for three   major operating systems, Windows, Mac   OS, and Linux. Simply choose the one   that matches your system and you will   get clear download instructions right   there.

 Since Git is already installed on   my machine, I won't reinstall it. But if   you are working on Windows, click on the   Windows option and you will see two   download choices. One for 32-bit and   another for 64-bit systems. Just pick   the one that matches your setup.   Download it and run the installer. For   Mac users, when you select the Mac OS   option, you will also find instructions   on how to install Git using Homebrew.

  Just follow those steps and your   installation will be done in no time.   And for those using Linux or other Unix   based systems, you can follow the   installation guide provided on the site   according to your distribution. The   entire process is really simple and   straightforward. Once the installation   is complete, the next step is to open   your terminal or common prompt.

 If you   are using a Mac, simply open the   terminal app. For Windows users, you can   use either common prompt or PowerShell.   Both will work just fine. However, after   installing Git, you will usually get a   separate terminal called G Bash. You can   use that too if you prefer. Many   developers actually like working in Git   bash because it feels very similar to a   Linux terminal and makes running   Gcommerce a lot easier and more   intuitive.

 All right, I'm opening my   terminal now. The first thing we need to   do is make sure G is properly installed.   To check that, we will type a simple   command in the terminal g-   version. Then just press enter. As soon   as you do that, you will see an output   on the terminal showing the version of   Git installed on your machine.

 Keep in   mind the version number might not be the   same for everyone. It depends on when   you installed G and which update you are   using. If G is installed correctly, you   will see something like this version   output. But if it isn't installed,   you'll get an error message instead.   Hopefully, G is now properly set up on   your machine too and you are ready to   start using it.

 Now it's time to get our   hands dirty to do some practical work.   As I mentioned earlier, G can be   implemented in any file or folder.   Right? So first we need to create few   files and folders to work with. Let's   start by navigating to the desktop using   the terminal. I'll type cd desktop and   then press enter.

 Here cd is a terminal   command that stands for change   directory. It simply means we are moving   from one folder to another. Hopefully   you are already familiar with some basic   terminal commands like cd, pwd, touch   and mkdir. If not, no worries. You can   easily learn them using Google or even   charg. They are really simple to   understand.

 Just remember for Windows   users, some of these commands might be   slightly different. And keep in mind   commands like cd, pwd, touch, and mkdir   are general terminal commands, not git   commands. All right. Now that we are   inside the desktop directory, let's   create a new folder where we will keep   all our project files.

 We will name it   gy-en 1. So we will type in the terminal   mkdir. That means creating a directory   gy 1 and press enter. That's it. A new   folder named gy-en 1 has been created   inside the desktop directory. Now we   will move into that folder by typing cd   git - 1 and pressing enter again.   Perfect.

 We are now inside the g one   folder. And this is where our g project   officially begins. So now that we are   inside the g one folder, we will create   two files. For that, type the following   commands in the terminal. Touch 1.xt and   touch 2.txt. Next, we will create   another folder named my folder. To do   that, type mkdir my folder.

 Then use cd   my folder to enter the folder. Inside   this folder, we will create another file   by typing touch3.txt.   Now, let's check everything we have   created in our file system. I will open   the kit one folder in finder on my Mac   by typing this command in the terminal.   Open dot. Here the dot means the current   folder.

 As soon as I press enter, Finder   opens up. Inside the G1 folder, I can   see two files 1.xt and 2.xt and a folder   named my folder which contains the 3.xt   file. Now I'm going to write something   inside each of the files. I opened 1.xt   in a text editor. Wrote one and saved   it. Then I opened 2.xt, wrote two and   saved that as well.

 Finally, I went   inside the my folder directory, opened   three.txt, wrote three and saved it. So   now all three of my files contain some   content. This git one folder is actually   my working directory. As I mentioned   earlier, this is the folder where I'm   doing all my work and where all my files   are stored.

 Now, if I want git to start   monitoring everything inside this git   one folder, I have to tell git this is   my project folder. Track all the changes   here. For that I'll go back to the   terminal. Make sure I am inside the g   one folder and type g init. The word   init means initialize. In other words,   we are telling g to start working inside   this folder from now on.

 Once I run the   command, it shows a message initialized   empty g repository. That means g has now   started tracking this folder. How do we   know that? Let me show you. Since I'm   already inside the g folder, if I type   ls in the terminal and press enter, I   can see all the files and folders inside   it. But if I type ls - la.

 Notice that   now we can also see a hidden directory   named git. The ls-la command lets us   view hidden files and folders in the   system. So we can see a hidden folder   named git inside our project directory.   But who created it? The answer is g   itself. This dogg folder is actually the   core of the entire project.

 It's where   git keeps all its internal data such as   which files have changed, who made the   changes, and what the previous versions   were. In short, everything G does is   stored right here. From now on, G will   be able to track every change I make in   my work. Let's say I made some changes   to the three files I created earlier.

  That means I now have a local   repository. But we can also create a   remote repository directly. I mentioned   this earlier. So let's see how to do it.   First I will open my browser again. Then   I will go to the URL github.com.   If you are new, you will need to create   an account on GitHub first. Since I   already have an account and I'm logged   in, you can see my profile here.

 On the   left side, you can see my repositories,   feeds, and other details. Our goal is to   store our local files on GitHub. For   that we need to create a new repository.   To do that I will check the blue new   icon. Just like we used g in it to   create a local repository here we can   initialize one in the cloud.

 I will give   it a name gy-en journey. And in the   description I will write we are learning   it and GitHub I will keep it public so   everyone can view it. Then I will click   the create repository button. And that's   it. A new repository has been created on   GitHub. Congratulations.   Right now the repository is completely   empty.

 It doesn't have any files inside   it. I want to add some files here. So I   will create one. I click on the create a   new file button. Name it 1.xt and inside   the file I write one. Then I click on   the commit changes button. Now the term   comet basically means save. Comeing is   just like saving a file. Nothing   complicated. Don't worry about this.

 We   will explore comets in detail later. For   now, there's already a default comet   message saying so I will keep that as it   is and click commit changes. Next, I   create another file the same way. This   time naming it 2.xt, writing two inside   it and saving it as well. Now, if I   check my GitHub repository, I can see   two files there. 1.xt 

and 2.xt. At this   point, I have two repositories. one on   the cloud, meaning on GitHub, and   another one locally on my computer. I   initialized the local one myself   earlier. But now I want to bring the   GitHub repository down to my machine by   cloning it. So what should I do? I will   go back to my terminal. Right now I'm   inside the G1 folder, but I want to   clone the remote repository onto my   desktop.

 So in the terminal, I will type   cd dot dot slash. This command takes me   back to the desktop just one level back.   Now I am going to clone the remote   repository the one I just created on   GitHub. For that I need a link which is   basically the repositories URL. So I   will go back to GitHub open that   repository and click on the code button.

  There I can see an HTTPS link. I will   copy that link. Then in the terminal I   typed g clone followed by the link I   just copied and pressed enter. Now   notice g is pulling my github repository   down into my local machine. After a few   moments the cloning process is complete.   Let's verify whether the repository has   been successfully cloned.

 In the   terminal I will type ls. This command   shows the list of folders in my current   location. As you can see, there's now a   new folder named gy-en journey alongside   my previous gy-en 1 folder. Now we will   enter the g journey folder. To do that,   I will type cd g journey. We have now   entered the g journey directory.

 If I   type ls, I can see the contents of the   folder and inside it there are two files   1.xt and 2.xt. And if we want to see the   hidden files, we'll simply type in the   terminal ls- a. Even here you will find   agit folder that proves this is also a   complete git repository cloned from the   cloud.

 Earlier we saw the same thing in   our local repository. Right? So this is   how we can create a git repository in   two ways. One by initializing it locally   and the other by cloning it from GitHub   or any other remote server. No matter   which way we create it to start working   with g initialization is always   required.

 Now let's look at something   new. Suppose I am currently inside the   gourney folder. This is the repository I   just cloned from the remote. Now if I   make any changes to this repository, for   example, I open the file 1.txt in a text   editor. Inside it I keep everything as   it was but add the number one at the end   and save the file.

 Now I want to know   what exactly changed or whether G has   detected the modification. To check that   I will type in the terminal g status and   as soon as I run this command g   immediately tells me modified 1.txt.   That means g has already detected the   change I made in that file. Now let's   say I make a small change in 2.

xt as   well. Just adding a two at the end. Then   I run g status again. This time it shows   modified 2.xt. That means both files   have been changed and g has detected   both modifications. This is exactly how   g continuously keeps an eye on every   change we make. It's like it's always   watching over our project.

 At any point,   we can simply run the g status command   to see which files have been modified or   updated. In a real project, we usually   work with multiple files at the same   time. Right? In that case, g status give   us a clear summary of the overall   situation. What has changed? Which files   are new and which ones are modified.

 So   up to this point we have learned that   git can be initialized in two ways   either locally or from a remote   repository and with g status we can   easily check what changes have been made   in our working directory. Hopefully   everything is clear up to this point. So   far we have only worked inside the   working directory that means we have   created and modified files but we   haven't yet told g to keep those   changes.

 Now we are going to move them   into the staging area. In g terminology,   the process of moving changes from the   working directory to the staging area is   called adding. Simply put, g add means   telling g I want to keep this change. So   let's see how g add works. Right now   inside our g journey folder, we have two   files and both have been modified.

 Now I   will create another folder inside g   journey named my folder. To do that I   will type in the terminal mkdir my   folder. Then I will use cd to enter that   folder. Inside my folder, I will create   a new file called free.txt by typing   touch3.txt.   As soon as I run this command, a new   file named 3.txt is created.

 Then I open   the 3.txt file in my text editor. Inside   it, I write three and save the file.   Now, we have made quite a few changes,   haven't we? Let's see what we did. We   created a new folder, added a new file,   and modified some existing ones. In   other words, our entire project has gone   through multiple changes.

 So now it's   time to move all these changes into the   staging area. To do that, I will first   go back to the repository's root folder.   Meaning I will move one step up. CD dot   dot. Now I'm back in the root directory,   which is the gourney folder. From here,   I'll run the g add command. But before   adding, let's first check which files   have actually been changed.

 So I will   type g status. And look, g is showing   that two text files have been modified   and a new folder has been created. It is   also saying that the old files are   tracked while the new folder is   unttracked. Why is that? Because the old   files came from the remote repository we   cloned earlier.

 So, G already knows   about them. But since my folder is newly   created, G doesn't recognize it yet. If   I want to move everything to the staging   area at once, I have two options. I can   either use the command g add d- all or   the shorter version g add- a. Both   commands do exactly the same thing. So   let's first try with g add d- all.

 In   the terminal I type get add-all.   After running this command I will check   the status again by typing g status. Now   we will see that g has staged   everything. In other words, all the   changes we made are now ready to commit.   We'll talk about commits in detail a bit   later.

 For now, just remember that when   we use g add-all, g takes every change   and prepares it for the next comet. Now,   suppose I want to go back to the   previous state, that is remove   everything from the staging area and   return them to the working directory. To   do that, I'll type in the terminal get   reset. As soon as I run this command,   everything goes back to the way it was   before.

 You can see in the terminal, it   says unstaged changes after reset. Now,   if I check the status again by typing g   status, you will notice that everything   is back to the earlier state just like   before. All right. Now, let's take a   look at how g addy- a works. Just like   before, I will type in the terminal g   add- capital letter a.

 After running   this command, I will check the status   again by typing g status. And you will   see that git has tested everything just   like before. That means all the changes   we made are now ready to commit. So   whether we use g add-all or g add- a do   the same thing. G stages every change.   You can use either one.

 It doesn't make   a difference. Now I will run g reset   again to unstage everything and bring   all changes back to the working   directory. Then I will check the status   once more using get status. Everything   looks good again back to the unstaged   state. Now in this state if I type in   the terminal get add dot.

 What happens   then? At first glance it seems like it's   doing the same thing as g add-all   everything appears to be test but   actually that's not the case. Here's   where the difference lies. Let's see   what that difference really is. I'll run   get reset again to return everything to   the previous state.

 Now all files are   back in the working directory. Next, I   will go inside the my folder directory   by typing cd my folder. Now that I'm   inside my folder, I will type g add dot.   Then to check the status, I will type g   status. And look, g has only staged the   three.xt file that's inside my folder.   The other files in the root folder are   still unstaged.

 This difference is   really important. The options d-all or -   a mean that g will stage every single   change across the entire project. But   using the dot means git will only stage   the changes within the current directory   you are in. Also keep in mind if there   were a subfolder inside my folder using   the dot would still include the files   inside that subfolder too.

 In simple   terms the dot means the current   directory and everything inside it. So   now we have seen three variations of the   g add command d- all- a and dot. The   first two work exactly the same way   while the dot version is a bit more   limited in scope. Now I will run g reset   to bring everything back to the previous   state again.

 Next let's look at another   important concept. I will go back to the   root folder by typing cd dot dot. Then   in the terminal I will type git add-all   so that everything is staged again. Now   we know all our files are ready for   commit. At this point I make some   changes directly in the working   directory. For example, I delete the   file 2.

txt and create a new one named   4.xt writing four inside it. That means   I have deleted one file and added   another new one. Now if I check the   status by typing g status, what do you   see? G shows that under changes to be   committed the previously staged files   are still there. But under changes not   test for commit, it now lists 2.

xt as   deleted and 4.xt as unttracked. So if I   now type g add star and then check again   with g status, you'll see that g has st   the newly created for.txt file, but it   hasn't st the deleted 2.xt file. That's   why it's important to understand that g   add star only stages new or modified   files but not deleted ones.

 The behavior   of the aesthetics is that it stages all   visible changes except for deleted   files. In other words, if a file has   been deleted, it won't be added to the   staging area. That's the key difference   between the star and the dot and the d-   all options. This is how the star works   in g add.

 Now let's return to the   previous state again by typing g reset.   Then check the current situation with g   status. Now if you want to stage only a   specific file say 1.xt which has been   modified you can do that by typing g   add1.txt.   Similarly if you want to stage a file   inside a folder for example the file   inside my folder you can write g add my   folder/3.txt.

  Let's test it. I type g add2.txt.   After running this command, if we check   the status using g status, we'll see   that only 2.xt has been changed. So yes,   we can also stage individual files by   specifying their names. Now let's go   back again by typing g reset. This   returns everything to the previous   unstaged state.

 We can also stage files   by their extension. For example, if we   want to stage all txt files, we will   write g add star.txt.   This command stages all txt files in the   current directory excluding deleted   ones. Note that g only stages the   changes it finds in the root folder. It   won't include deleted files or files   inside subfolders.

 Finally, if we want   to stage everything at once, the best   and simplest practice is to go to the   root directory and type g add dot. After   doing that, all the changes are staged   together. If we now run g status, we'll   see that everything has been staged   successfully. That means all our changes   have been moved from the working   directory to the staging area.

 So far,   we have learned how to move changes from   the working directory to the staging   area using the git add command. Now   let's see how we can save those changes   from the staging area to the local   repository. In g language, this is   called a comet. It means we are   confirming and saving our changes   permanently.

 You can think of it like   getting ready for a party. You don't   just walk straight out the door. First,   you stand in front of a mirror and check   your clothes, shoes, tie, and hair. Then   the stage where you make adjustments.   Maybe you realize this shirt doesn't   look good or let me change this shoes.   That's an intermediate step.

 You haven't   left for the party yet. You are just   making sure everything is in order. If   something's off, you can fix it right   there. Once you are satisfied and   everything looks perfect, that's when   you finally leave for the party. G works   in the same way. Instead of going   straight from the working directory to   the local repository, we first move our   changes to the staging area.

 This is an   intermediate step where we can review,   adjust, or even remove changes before   saving them permanently. We don't commit   directly from the working directory   because the staging area gives us a   chance to verify everything before   finalizing. When you finally commit, it   means you are sure everything is   correct.

 No more mistakes and now the   work can be saved permanently. That's   why this process is called a commit. Now   let's see how to make a commit in   practice. First we will check our   current state using g status. It shows   that the staging area contains some   changes. These are ready but not yet   committed. To commit them, we will write   g commit / m space and a commit message.

  The /m flag lets you add a short message   describing what you changed. For   example, g committ/m I have made some   changes to the files. Now, sometimes an   error may appear the first time you try   to commit. When you install git for the   first time and attempt a commit, you   might see a message like please tell me   who you are.

 Don't worry, this is   completely normal. It's just G's way of   asking for your identity before   recording a comet. It needs to know who   is making the changes and from which   email address. This information is   attached to every commit in the project   history which later helps track who made   which changes.

 Fixing this issue is very   simple. G actually tells us exactly what   to do. Just run the following two   commands. Get config- global user and   pass your email address. Then get   config- global user.name pass your name.   By running these two commands, the   problem is solved. The first command   sets your email address globally and the   second one sets your name globally.

 The   d- global flag means that this   configuration will apply to your entire   computer. So every git commit you make   from this machine will use the same name   and email from now on. If you want to   make the configuration specific to a   single project, you can use the d-local   flag instead of d- global flag.

 That way   the settings will apply only to that   particular repository. In short, when   you use git for the first time, setting   up your user configuration is mandatory.   It's part of the basic Git setup you   need to do before committing. Once it's   configured, G will automatically   recognize your identity for all your   future commits.

 Since I already have Git   configured, I don't need to set it up   again. All right, let's go back to our   main task. We are going to make a comet.   We already know what to type in the   terminal. get commit minus m. I have   made some changes to the files. Perfect.   The commit is done. The terminal now   shows how many files were changed, how   many lines were added and how many lines   were deleted.

 Let's verify everything by   checking the status. G status. As you   can see, everything looks clean now.   Meaning all the changes have been   successfully saved in the local   repository. From now on, whenever you   make new changes to any file, you'll   have to stage and commit them again just   like before. One more thing about   comets, you can always roll back to the   previous state if needed.

 To do that,   type in the terminal get reset head and   a t sign. This command will undo the   last commit and bring everything back to   the working directory. Now, if we type g   status, you'll see that all the files   have returned to the working directory,   ready to be staged again. You can now   modify or commit them as you wish.

 See   how amazing it is. You have complete   control over your work. It's just about   remembering the right commands. We will   explore even more useful features soon.   Now let's move on to the use of g   remove. But before that, let's make a   new commit just like the one we did   earlier.

 So in the terminal, I will type   g add dot then get commit minus m. I   have made some changes to the files.   Perfect. Our commit is done. Now let's   manually delete the 1.xt txt file from   our file system and then go back to the   terminal. I'll type get status. Now you   can see the change. It shows that our   1.txt file has been deleted.

 After that,   if I type get add dot, the deletion will   also be sted, right? So instead of   deleting a file manually and then adding   it again, you can actually do both steps   in a single command. If you want to   delete a file and stage that deletion at   the same time, just type get rm4.txt.   Here we are taking for.

txt as an   example. This means we want to delete   4.txt and automatically move that change   to the staging area. Once we run this   command and then check the status with G   status, you will notice that 4.xt has   been deleted and at the same time   staged. So we no longer have to perform   two separate steps, deleting and adding   manually.

 We can do both at once with   this single shortcut. If we check in   Finder, we'll see that 4.xt has   disappeared. Now let's look at another   example. But before that, we'll roll   back the deleted file. To do this, we   will use the get reset command. However,   when you run a normal G reset, it only   brings back the changes, not the deleted   files.

 Once you execute reset, you'll   see in the terminal the message unstaged   changes after reset. But if you check   your file system, the deleted file   hasn't returned. That's because a normal   reset only brings back the staged   changes, not the actual files. We can   confirm this by running g status. You   will notice only the changes are back.

  Manually deleted files are still   missing. If you want to restore   everything, meaning both the changes and   the deleted files, then you will have to   run get reset- hard. Once you execute   this, both your changes and the deleted   files return to their previous state.   Now let's explore the use of get remove   a bit deeper.

 Suppose you want to remove   a file. Now let's say we edit the 4.xt   file and write four inside it. That   means there's now a change in the   working directory. If I try to delete it   directly using g rm4.txt,   what happens? The file isn't deleted and   g starts showing an error. The following   file has local modifications. This means   it isn't allowing the deletion because   it has detected uncommitted changes in   that file.

 Before you can remove it, you   either have to commit those changes or   confirm that you truly want to discard   them. If you are sure you want to delete   the file anyway, you can force it by   using get rm/f   4.xt.   As soon as you run this command, the   file is forcefully deleted. If you check   your file explorer, you'll see that   4.txt is gone.

 Now, let's look at   another situation. I'll run another hard   reset. Get reset- hard. This brings   everything back again. I'll now modify   the file for.txt by writing hello inside   it. Now, if I type get rm-cached   4.txt, txt. This removes the file from   the staging area but keeps it physically   in your working directory.

 Let's check   it with G status. You'll see that 4.txt   has moved to the unttracked file   section. It's no longer staged, but the   file itself still exists in the system.   That's the difference between the   d-force and d- cache flags. The d-force   flag completely deletes the file while   the d-cashed flag only removes it from   staging.

 keeping the actual file intact   in your working directory. Another   useful command is get rm-r   folder. Here the - r flag stands for   recursive. This means if the folder   contains other subfolders or files, all   of them will be removed recursively. If   you only mention the folder named   without -ash r, then only that folder   will be removed, not its contents.

 All   right, let's try this out. But first I   will reset everything again by typing g   reset- hard. Now that the reset is done,   we'll experiment with our my folder.   Okay, in the terminal I will type g rm-   r my folder. And as you can see the   folder has been deleted from our file   system as well.

 If we now check the   status using g status, we will notice   that my folder is listed as deleted and   has already been staged automatically.   Now I will reset everything again by   typing get reset- hard. Perfect. So far   we have made quite a few comets. Right   now let's learn how to view those   comets.

 Basically viewing comets means   checking the comet log. And doing that   is very simple. In the terminal just   type get log. That's it. Instantly you   will see the full comet history. Here we   can see three comets. Right. Along with   each one, there are details and messages   that clearly describe what was done in   that comet.

 You will also notice some   long random strings. Those are comet   ids. Using these ids, we can go back to   previous versions later on. Don't worry,   we'll learn how to do that soon. For   now, just remember this part. The first   two commits were created when we made   files while setting up our GitHub   repository.

 And the last one was made   when we modified some files recently.   Now if we want to view this log in a   cleaner, more compact format, you can   use this version of the command. Get log   d- on one line. Once you run it, you'll   see a nice short summary of each comet   with just the essential information. The   unique comet ids are also shown in a   shortened format.

 These shortened ids   can also be used to return to any   previous version later on. Now let's   move on to one of Git's most powerful   and important features, branching. At   the moment, our repository has only one   branch. A branch in Git is like a   separate line of development where you   can work independently.

 If you check the   online repository we cloned earlier, you   will see that the default branch is   called main. It used to be known as the   master branch before. This is the   default branch where all work begins. In   recent times, G has shifted from calling   it master to main. But the idea remains   the same.

 The main branch is your   project's central line of development.   To understand the concept of branching   more simply, imagine you are working in   the kitchen of a large restaurant. The   main branch is the main kitchen where   all the dishes are prepared and served   to customers. Now, if your client wants   to try a new dish or recipe, you   wouldn't experiment directly in that   main kitchen because if something goes   wrong, it could ruin everything.

  Instead, you create a separate taste   kitchen where you can safely prepare and   taste the new dish. Once the recipe is   perfected, you bring it back into the   main kitchen to serve it officially. It   works exactly the same way. Instead of   making changes directly in the main   branch, you create a separate   development branch where you test and   commit all your changes.

 Once everything   is stable and verified, you merge that   branch back into the main branch. This   ensures your main project stays safe   while new features can be developed and   tested without breaking anything. In   short, branching in Git provides a   secure and organized intermediate step   that allows you to review, test, and   manage changes before merging them into   the main codebase.

 Now, since I have   already mentioned the word merge, let's   understand what it really means. Merge   simply means combining the changes from   two branches into one. It's an important   concept for understanding how branches   work. In Git, you can create multiple   branches like staging, development,   front end or back end and work on each   of them separately.

 Once all the changes   are finalized and tested, they are   merged back into the main branch. Right   now, our application has only one   branch. To see how many branches we   have, we can type in the terminal get   branch. This command shows the list of   all branches. At the moment, we have   only one, and the branch we are   currently in has a star next to it.

 To   create a new branch, we simply write g   branch followed by the branch name. For   example, let's type g branch   development. Now if we run the same   command again like get branch, we'll see   two branches listed, main and   development. That star next to main   means we are still on the main branch.   When a new branch is created, it takes   the exact state of the branch you were   on at that moment.

 So in this case the   development branch is an exact copy of   the main branch. Remember whenever you   create a new branch it inherits the   current state of the branch you are in.   Now that we have created a new branch   let's switch to it. To move to the   development branch type get checkout   development. We are now inside the   development branch.

 If we check the   current status using g status, we will   see that everything looks clean because   the development branch has been created   with the same content as the main branch   and it was clean before. Now let's go to   our file system and create a new file   named 3.txt. Inside it, we will write   three.

 Then back in the terminal, if we   type g status, we'll see that there's a   new file. To stage it, we type g add   dot. And to commit it, we write get   commit/m   I created 3.txt and entered three there.   Now our commit is done inside the   development branch. Next, let's switch   back to the main branch. To do that, we   type get checkout main.

 Now we have   moved from the development branch back   to the main branch. If you check your   file system now, you will notice that   the 3.txt file is no longer there. Why?   Because the changes made in the   development branch exist only in that   branch. those changes haven't been   merged into the main branch yet. The   moment you switch back to the main   branch, G automatically hides the   changes made in development, showing you   only what exists in that main branch.

  This demonstrates just how much control   G has over your file system. When you   switch branches, G instantly adjusts   which files are visible so that you only   see the changes relevant to that   specific branch. There's no duplication   or conflict in your file system. G   manages everything seamlessly.

 In this   way, you can create hundreds of   branches, each containing its own set of   changes. And G will always show you a   separate isolated view for each one. But   remember, for any change to actually   take effect, you must commit it.   Whatever branch you are working in, the   commit must be made there. Once   committed, G understands that those   changes belong exclusively to that   specific branch.

 That's why when you   switch back to the main branch, the   changes made in the development branch   don't appear there. Now let's say we   make a new change to the for.txt file   while we are on the main branch. Let's   add a four to it. Then if we check the   status by typing g status, we'll see the   new change.

 Let's stage it using g add   dot and commit it with g commit minus m.   I changed four.xt and added additional   four. Now both branches have changes.   The main branch has this new comet and   the development branch still has its   previous one. Since both branches now   contain updates, we will merge the   changes from the development branch into   the main branch.

 But first, let's start   by merging the main branch into the   development branch just to synchronize   everything. So, first we switch to the   development branch by typing geckout   development. Now that we are inside the   development branch, we will run gge   main   merging main into development. After the   merge, you will notice that the changes   made in the main branch have now   appeared inside the development branch   as well.

 For example, the updated   for.txt file is now present in the   development branch alongside the   previous changes. In short, updates of   both branches have been combined and the   development branch now reflects all the   latest modifications. Next, let's switch   back to the main branch by typing git   checkout main.

 Once we are back on the   main branch, we can see that the changes   from the development branch haven't yet   appeared here. So now from the main   branch, we will merge everything from   the development branch by typing gerge   development/m   merging on main with development.   After running this command, you will see   that the 3.

txt file from the development   branch has now appeared in the main   branch as well. That means both branches   changes have been successfully merged   and the merge process is complete.   However, sometimes during a merge,   conflicts may occur. A merge conflict   happens when the same part of the same   file has been changed differently in two   branches.

 For example, if you modified   1.txt in the main branch and someone   else modified the exact same section of   1.xt in the development branch, Git   won't know which version to keep. In   such cases, Git flags the file as having   a conflict and you will have to resolve   it manually by deciding which changes to   keep or by merging both versions   yourself.

 Right now we are on the main   branch. From here we will create a new   branch so that the main branch remains   untouched while we simulate a conflict.   Let's move ahead quickly. I run the   command get branch staging to create a   new branch named staging. This branch   now contains all the latest updates from   main.

 Then I switch to it using get   checkout staging. While working on the   staging branch, I open my file system   and go to the file named 4.xt. At the   end of this file, there was the number   four. I add 44 at the end and save the   file. Now the staging branch has a   change. When I run g status, I can see   that the change is being tracked.

 So I   add and commit it by running g add dot   and then get commit / m changed 44. The   staging branch work is done. Next I   switch back to the development branch by   running g checkout development. When I   open 4.xt here I don't see 44 I added   earlier in the staging. So I write 444   and save the file.

 Then I run g add dot   and commit it with g get commit / m   added 444 on 4.xt. That means the   development branch now has its own   separate change. Now while staying in   the development branch I try to merge   the changes from the staging branch   using git merge staging. But g fails to   merge automatically and shows an error.   Automatic merge failed fix conflicts and   then commit the result.

 This happens   because the same line in 4.xt was   modified in both branches staging and   development. G can't decide which   version should take priority. So it   leaves the decision to us. In this case   the developer working on the development   branch or whoever is managing it has to   manually resolve the conflict.

 When you   open for.txt txt in a text editor. Git   marks the conflicting section clearly   showing which part came from staging and   which part came from development. You   will see both the double four from   staging and the triple four from   development. It's now up to you to   decide whether to keep one, remove one   or combine both changes.

 While staying   on the development branch, you decide   which version to keep. Let's say you   choose to keep the triple 4. You remove   all the conflicting markers. Save the   file and then run get add dot followed   by get commit minus m merge conflict   solved. The commit messages merge   conflict solved.

 Now you switch back to   the staging branch using get checkout   staging. When you open the file system   and check for.txt, it still shows 4,   meaning no change has been applied yet.   At this point, you can choose to merge   changes either into staging or   development since both branches are now   in sync.

 Let's say we decide to resolve   it from staging. We run the command   gerge development. This time g marges   everything smoothly without any conflict   because both sides now contain the same   content. When you check the status using   g status, it shows everything is clean.   Now if we want to bring these merged   changes into the main branch, we switch   to it using get checkout main.

 Once we   are on the main branch and open the file   system, we notice that for.txt doesn't   yet have the latest update. So we merge   the staging branch with git merge   staging. Immediately all the latest   changes flow into the main branch. The   double four from staging and the triple   four from development now combine   perfectly resulting in the final merged   version.

 And that's how the entire   process of merging and resolving merge   conflicts is completed. So far we have   learned how branching works. We have   already seen how to switch from one   branch to another using the checkout   command. Now earlier when we talked   about git log I mentioned that we can   also go back to a previous version using   a comet ID.

 That's what we are going to   see now. And to do that we will again   use the check out command. First let's   check our comet history. We can do that   by running get log d- on one line. Right   now we have nine comets in our log. Now   let's make a small change. I open the   one.xt file and write hello inside it.   Then I stage it by running g add dot and   commit it using g commit/m   update 1.txt file.

 Next, I again run get   log d- on one line. And all the comets   are nicely displayed. Now, I want to   switch back to one of my previous   comets, especially the one named merging   main into development. To do that, I   will simply copy the comet ID of that   comet and type get checkout that come   ID.

 Earlier, when we switched branches,   we used the branch name. But this time,   we are using a comet ID instead.   Remember your comet ID will be different   from mine. After running this command,   the project will move from the main   branch to the exact state it was in at   that previous commit. However, you must   ensure that all your changes on the main   branch are tracked and committed before   doing this.

 If there are many unttracked   or uncommitted files, it won't allow you   to check out to a previous version. Once   you run the command, you'll see that in   the terminal, instead of showing main,   it now says head detached at your comet   ID. That means you have successfully   switched to that particular commit. If   you open 1.

txt now, you will notice the   hello line you added earlier is no   longer there. That confirms you have   returned to the previous version of your   project. But now suppose you want to go   back to your latest date. That means   returning to the main branch. In that   case, you will use the same command as   before. Get checkout main. Perfect.

 Now   you have switched back to the main   branch. Meaning you are back to the most   recent version of your project. So we   have seen how to switch between comets,   how to move from one version to another.   Now let's explore something new. How to   compare one comet with another. If we   want to see the differences between our   current comet and a previous comet, what   lines of code were added? What lines   were deleted? We can do that easily   using g commands.

 Before that, let's   first check our comet history again by   typing glo-   one line. We can see that there are now   10 commits in total. Now we'll compare   the comet update 1.txt file with the   previous one. That means merging main   into development. For that we will need   the commit ids of both. Since we have   already run glog, we can just copy those   two ids.

 Once we have them, we will   write the command g diff doublef then   the first comet id space then the second   comet id. After running this command, G   will show us the exact changes made   between those two comets. The terminal   will display which files were changed.   What was removed in red and what was   added in green.

 Also notice one   important detail in g. We place the most   recent comet ID first and the older one   second. This means it will show   differences from the perspective of the   newer comet. What's newly added or   removed compared to the older one. If   you reverse the order, that means   putting the older comet ID first and the   newer one second.

 G will show the   opposite perspective. Try running the   command both ways a few times. You will   easily understand how the comparison   works. All right, just a quick reminder.   Right now, you can't exit the terminal   view because you are inside the log   window. As I mentioned before, to exit   from there, simply press Q on your   keyboard.

 That will close the log view   immediately. So far everything we have   done has been inside our local   repository. Meaning we have staged   files, made commits and stored   everything locally. But our real goal is   to send those updates to the remote   repository like GitHub. When we send   local changes to a remote repository,   that process is called a push.

 And if   any changes have been made in the remote   repository that we want to bring into a   local repository, we use fetch. When you   run g fetch, the remote changes are   downloaded into your local repositories   memory, but they won't appear in your   working directory yet. To actually   update your working directory and see   those changes in your files, you need to   run git pull.

 So in short, push means   sending local changes to the remote.   Fetch means bringing remote changes into   your local repository but not merging   them yet. And pull means fetching plus   merging. So your working directory   immediately reflects the remote changes.   In other words, gpool is equal to g   fetch plus g marge.

 Let's see an example   of how g push works. We have already   made several changes in our local   repository and now we want to push them   to the remote main branch. Since we are   currently on the main branch, the   command will be get push origin main.   Here origin refers to the remote   repository and main is the branch we   want to push to.

 After running this   command, all your latest comets will be   sent to the remote main branch. If you   check your repository on GitHub, you   will see that everything is updated.   However, only the main branch is pushed.   Other branches aren't uploaded yet. This   means we have only pushed our main   branch to the remote's main.

 Now if we   switch to the staging branch using g   checkout staging and then run g push   origin staging g will create a new   branch named staging in the remote   repository and push all your staging   changes there. When you check github   again you'll see that the staging branch   has been created and updated. Similarly,   if you switch to the development branch   by running gout development and then g   push origin development, the development   branch will also be uploaded to the   remote.

 So now all three branches main,   staging and development are fully synced   with the remote repository. Finally, I   switch back to the main branch again   using g checkout main. By now the   concept of g push should be crystal   clear. Now imagine we have already   pushed our local changes to the remote.   Let's see how fetch works. Suppose we   make a change directly on GitHub.

 For   example, we open the file 3.txt on   GitHub. Type three and commit the   change. Now the remote main branch has a   new update that our local main branch   doesn't yet have. It's behind the remote   version. While staying on the local main   branch, I want to bring in the latest   changes from the remote.

 So I run the   command get fetch. It immediately   fetches the new changes from the remote   repository, but those updates don't yet   appear in your local file system. For   example, you won't see any update in   3.txt until you merge the feted changes.   Once you run get merge, the remote   changes will finally reflect in your   local working directory as well.

 Now,   let's say we edit the remote 3.txt file   again. This time, we add 33 after three   and commit it on GitHub. The remote main   branch is now ahead once more. To bring   in all those updates and merge them into   your local main branch at once, we use   gpool. Gpool automatically performs both   fetch and merge in a single command.

  Which means all the new remote changes   including the latest updates in 3.xt   will immediately appear in your local   files. So that's how gitpool helps you   fetch and merge all remote updates into   your local repository in one go. We have   now learned how to push changes from   local to remote, fetch changes from   remote without merging, and pull changes   from remote while merging them   automatically.

 These three commands,   push, fetch, and pull are among the most   frequently used G operations and are   more than enough for most of our daily   development work. Now, let's move on to   something new. Imagine you are working   on a project. You start developing a new   feature, writing a lot of new code, and   modify several existing files.

 After   some time, you realize that the approach   you took isn't working at all. But by   then, you have already made changes   across 10 to 15 different files. Some   with new code, some heavily modified. In   this situation, you want to discard   everything and go back to the previous   state. Now, think about it.

 Would you   really open each of those 10 to 15 files   manually, remove all the new lines, and   try to restore the old code one by one?   How accurate or even possible would that   be? Probably not at all. In this case,   the simplest answer is it's actually not   possible, almost impossible. And the   complicated answer is you could try   doing it manually, but there's no   guarantee everything will return to its   exact previous state.

 And this is   exactly where the magic of the get   restore command comes in. The get   restore command helps you revert any   files or directory back to its previous   state, that is to the state of the last   comet. It's mainly used to undo local   uncommitted changes or to remove changes   that were added to the staging area   using g add. Let's test it out.

 Suppose   in the 1.xt file, I write new feature.   Remember this repository already had   some committed history. Now I'm just   trying to develop a new feature. But   after writing the new code, I realized   that the change I made in 1.txt adding   new feature was actually a mistake. The   previous version was fine and since this   change isn't ready to be committed, I   want to undo it and go back to the last   committed state.

 To do that, I'll simply   run get restore 1.txt. As soon as you   run this command, the file instantly   reverts to its previous state, the exact   version from the most recent commit. If   you want to restore an entire directory   instead of a single file, just type the   directory name after g restore and it   will bring everything in that folder   back to the last committed version.

 And   if you want to undo all changes across   the entire repository, you can run g   restore dot. This will restore every   file to its last committed state. Now,   if you have already staged some changes   using g add, you can still undo them   using the d-staged flag. For example, g   restore d-staged file name or g restore   d-staged dot.

 This removes the files   from the staging area but keeps the   working directory unchanged. So in   summary, the get restore command helps   you bring any file or directory back to   its previous or last committed state.   It's mainly used to undo local   uncommitted changes before they're ever   committed. Now let's move on and talk   about G stash. Now imagine this.

 You are   working on a new branch developing a big   feature. It's a long process and you   have already finished about half of it.   But the work isn't yet in a state to be   committed. Suddenly another developer   messages you saying there's a new update   on a different branch and you need to   check it out and give feedback.

 Now the   question is how will you switch branches   without losing your unfinished work? Are   you going to throw away all your   progress using the g restore command? Of   course not. There's no reason to go   through that kind of hassle when gives   us a much smarter way to handle this   using the g stash command.

 With git   stash, you can temporarily set aside   your unfinished work. Switch to another   branch to do something else and later   bring all your changes back with a   single command. Let's see how it works   with an example. Suppose in our 1.xt   file, you write another feature. You are   currently on the main branch.

 Now let's   say you need to switch to the   development branch to review a new   feature. So you type git checkout   development.   But git throws an error. Your local   changes to the following files would be   overwritten by checkout 1.txt. Please   commit your changes or stash them before   you switch branches. Aborting.

 This   means because G doesn't allow switching   branches when there are uncommitted   changes, it's protecting your work. But   since your feature isn't ready to be   committed, this is exactly when we use   gash. So you can run g stash. The moment   you execute this command, your   uncommitted changes disappear from your   working directory.

 But don't worry, they   are not lost. It has safely stored them   in a temporary area called the stash.   This lets you freely switch branches   without affecting your unfinished work.   Now let's switch to the development   branch. Get checkout development. You   have now successfully switched branches.   You can review the new feature, make   notes, do whatever you need to.

 Once you   are done, you switch back to your main   branch again. Get checkout main. But now   when you look around, you'll see that   your unfinished feature, the one you   were working on earlier, isn't there.   Don't panic. It's still saved safely in   the stash. To bring it back, you just   need to pop it out of the stash using   the command get stash pop.

 As soon as   you run this, all your stashed changes   reappear in your working directory. The   pop command restores the most recently   stashed work and simultaneously removes   it from the stashed list. If you have   stashed multiple times, G keeps them all   in order. Newest on top, oldest at the   bottom.

 When you pop it, brings back the   most recent one first. But if you want   to reapply the stashed changes without   removing them from the stash list so   that you can reuse them later, you can   use the apply command instead. For   example, get stash apply. This way your   changes are restored but they also   remain safely stored in the stash for   future use.

 So now I run gash again and   then this time I type the command get   stash apply. After running it, you will   notice it behaves almost the same   before. The changes come back just like   when we used pop. All right. Now, let's   understand the difference more clearly.   We already know that G can store   multiple stashes and we can even view a   list of all those stashed changes.

 To   see that list, we type get stash list.   Once you run this command, you will see   a list of all your saved stashes. If you   look closely, you'll notice that each   stashed item is marked with an   identifier like stash zero stash 1 and   so on. You can use these identifiers to   apply or pop specific stashes as well.

  For example, get stash pop stash zero or   get stash apply stash zero. Both   commands will work. The only difference   is how they handle the stash afterward.   Let's walk through this difference step   by step. First, I check my stash list   using get stash list and I see there's   just one stash in the list.

 Since I   already ran g-ash apply once, the stash   item is still there in the list. To   understand this better, let's first   remove that stash manually using the get   stash command. The drop command   basically removes a specific stash from   the stash list. All right. So, in the   terminal, we will simply type get stash   drop.

 Now if we check our stash list we   will see that it's completely empty.   Type in the terminal get stash list. See   the stash list is totally empty. Now   since we previously used g-apply   all the changes are still in our working   directory. We can confirm that by typing   g status. Let's do that g status. And as   you can see the changes we applied are   still there.

 Now let's go ahead and   stash those changes again by typing g   stash. That means we have stored our   changes back into the stash. Next let's   check our stash list again. Type in the   terminal get stash list. What do we have   here? We can see there's just one stash   entry. So now we are going to look at   the difference between pop and apply.

  Now I run get stash pop. The stashed   changes are successfully restored into   my working directory. Then I check the   list again with get stash list and this   time the list is empty. That's because   pop brings your changes back and removes   them from the stash list. It's like   taking them out permanently like cut.

  That's because pop brings your changes   back and removes them from the stash   list. It's like taking them out   permanently. Now let's dash something   again. I run gash and check the list   once more. g-ash list. This time I see   one stash item again. Now I run g/   apply. The command works perfectly. My   files are restored just like before.

 But   when I check the stash list again using   g stash list, boom, the stash is still   there. It didn't disappear. So here's   the key difference. G-pop restores your   changes and removes them from the stash   list while g-apply restores your changes   but keeps them in the stash list for   future use.

 That's exactly what I wanted   to show you. I walked you through both   commands so you can clearly understand   how they behave differently. Hopefully   now the concept is crystal clear. Now   let's talk about get revert. The get   revert command is used to undo the   changes made in a previous commit. But   instead of deleting that old comet, it   creates a new one that reverses those   changes.

 In other words, it cancels out   the effects of a previous comet while   keeping the project history completely   clean and traceable. That's why it's   called revert because it doesn't delete   any comet. Rather, it creates a new   comet that brings back the project to   its previous correct state. Simply put,   get revert means fixing an old mistake   without erasing it.

 For example, imagine   you accidentally added too much salt   while cooking. Instead of throwing the   whole dish away, you adjust the flavor   by adding some extra ingredients to   balance the saltiness. Similarly, get   revert doesn't delete the faulty commit.   It corrects it through a new one. Now,   to revert something, you will need its   comet ID. Let's see an example.

 Suppose   in the file 3.txt, you added the line   hello 3. Then you run g add dot then get   commit minus m hello 3. Now if you check   the log using g log one line you'll see   let's say you realize that the hello 3   comet is introduced a bug and you want   to remove it. Before that copy the comet   ID of hello 3 and then run get revert   that comet ID.

 After running the command   you'll see a prompt asking for a commit   message. You can either type a custom   message or simply keep the default one   and exit it by typing colonw that means   write and quit. Once you do that, the   changes from hello 3 will be undone.   Now, if you check the logs again using g   log one line, you will notice there's a   new commit added specifically for the   revert.

 At this point, you might be   reminded of g reset, right? The main   difference between g reset and g revert   lies here. Get reset can take you back   to a specific comet and discard all   comets after that point without creating   any new comet. On the other hand, get   revert removes the changes from a   specific comet by creating a new one   that reverses it.

 So if your project is   on GitHub or any remote repository,   other contributors can also see the   revert commit ensuring clarity and   preventing confusion. Another key point   is if you check the logs after a reset,   there will be no record of the removed   commits. But when you use revert, you   will clearly see an additional comet   indicating that a revert took place.

  Crystal clear. Now let's talk about g   rebase. Imagine you are starting to work   on a new feature. So you create a new   branch called feature by checking out   from the main branch. You begin   developing the new feature, making   changes bit by bit and committing your   progress as you go. Meanwhile, another   developer adds more updates to the main   branch for production.

 Now you also want   to include those latest updates from the   main branch into your feature branch. So   what can you do? Well, there are several   ways to handle this. As we have seen   before, one option is to merge the main   branch into your feature branch. If you   do that, G will create a new merge comet   and all the latest updates from main   will be merged into your feature branch.

  However, note that merging always   creates an additional commit. You can   see it clearly if you run git log. Some   developers find these extra merge   commits a bit messy and if you continue   merging multiple items, your commit   history can look quite cluttered. In   such cases, a better solution is to use   git rebase.

 When you perform a rebase,   the base of your feature branch changes.   That means if you rebase onto main, all   the new comets from main will be applied   directly into your feature branch. Then   all your feature branch commits will be   reapplied on top of them. So while your   main branches code content remains the   same, the comet history becomes much   cleaner and more linear.

 You can easily   verify this using G log. Now let's   understand this with an example. Let's   say we create a new branch called   feature from main. Get branch feature.   Then we switch to that branch. Get   checkout feature. Now we are inside the   feature branch. Let's open 1.xt and add   the line adding dark mode functionality.

  Then stage it. Get add dot and commit   it. Get commit minus m. Adding dark mode   functionality. Now let's switch back to   the main branch. Get checkout main. We   are now in the main branch. Let's create   a new file called 2.xt and write inside   it adding dark mode UI. Then stage and   commit it.

 Get add dot get commit minus   m adding dark mode UI. Done. That means   our main branch now has a new feature   dark mode UI. Now we want that same dark   mode UI update to appear in our feature   branch as well. So first we switch back   to our feature branch. Get checkout   feature. We are now inside the feature   branch again.

 Our goal is to bring the   latest updates from the main branch into   the feature branch. But this time we   will do it using repace. How do we do   that? To perform a git rebase, you need   to be on the branch you want to rebase   and then specify the branch from which   you want to bring that changes. For   example, if you are currently on the   feature branch and you want to bring in   the changes from the main branch, the   command will be get rebase main.

 That's   it. Once you run this command, the   rebase will be completed smoothly and   the dark mode UI update from the main   branch will now appear in your feature   branch. Here's what actually happens   behind the scenes when you use rebase.   Kit first identifies the most recent   common comet shared between your current   branch that means the feature branch and   the branch you are rebasing onto that   means the main branch.

 Then all the   comets in your feature branch that come   after that common comet are temporarily   set aside. Next, it applies all the new   comets from the main branch into your   feature branch. Finally, it reapplies   the saved comets from the feature branch   on top of those main comets one by one.   The result is a clean linear commit   history much tedier than what you get   with margin.

 You can easily see this   difference by running git log. However,   even though git rebase is very powerful,   it's not recommended to use it on public   repositories or branches where multiple   developers are working together. If you   must use it, you should always inform   your team beforehand. Otherwise, it can   cause serious issues.

 The reason is that   rebase rewrites existing comet history.   even the comet ids change. So if someone   else is working on the same branch, your   rebased comets won't match their local   copies anymore and they won't be able to   pull or sync normally. Therefore, before   using rebase, make sure you fully   understand where you are applying it and   whether it could cause problems for your   collaborators.

 It's perfectly safe to   use rebase on your local or personal   branches where only you are working.   Just avoid rewriting commits that   already exists on a shared remote   branch. Now before we wrap up this   tutorial, let's discuss one last   important topic, the pull request. When   working with G and GitHub, the term pull   request, often shortened as PR, comes up   frequently.

 A pull request is   essentially a request you make to merge   your changes into another branch,   usually the main branch. It's a way of   saying, I have made some changes in my   branch. Please review them, and if   everything looks good, merge them into   the main branch. In other words, you   can't directly make changes to someone   else's repository.

 So when you finish   your work in your own branch, you create   a pull request to ask for permission to   merge your code into the main   repository. That's what we call a pull   request. All right, let's head back to   our Git journey repository on GitHub. By   now, we have already pushed our main   staging and development branches.

 At the   top of the GitHub page, you will notice   several tabs. code issues, pull   requests, and actions. We'll now click   on the pull requests tab. Here we'll see   a big green button labeled new pull   request. This is where you can see I   want to merge the changes from this   branch into another branch. Once you   click new pull request, GitHub will show   you two drop-down menus.

 Base the branch   where you want to merge the changes.   We'll select main here and compare the   branch from which you want to bring the   changes. we'll select development. In   other words, we are saying I have made   some updates in the development branch   and now I want those updates to be   merged into the main branch.

 GitHub will   automatically show a detailed comparison   which files have been modified, which   lines have been added and which ones   have been removed. Everything clearly   visible. If everything looks good,   scroll down and click create pull   request. Then give your pier a title   such as merge development updates into   main and in the description box write   something like this pier adds the latest   updates and fixes from development to   main.

 After that click create pull   request to submit it. Now if you go back   to the pull requests tab you will see   your newly created PR development   domain. Clicking on it you will find   three sections. conversation where you   and your teammates can discuss or commit   on the changes commits which lists all   the commits included in this PR files   changed which shows exactly what changes   were made in which files if everything   looks good after review click the green   merge pull request button at the top and   then confirm by clicking confirm merge   once it's done GitHub will display a   message saying pull request successfully   merged and closed That means all the   updates from the development branch have   now been successfully merged into main.   This is how pull requests make code   management so easier. Every change gets   reviewed first and then merged into   main. As a result, the main branch   always stays stable and the entire team

  can collaborate safely and efficiently.   That's how software companies use Git   and GitHub. This was my complete   tutorial series on Git and GitHub where   I tried to explain all the essential   day-to-day concepts in the most simplest   way possible. I truly believe this   series will be specially helpful for   those who are just getting started.

 If   you have always felt a bit intimidated   or confused about using Git for the   first time, these videos were made   exactly for you. In short, we have   learned how to create a local repository   using Git in it from our working   directory. how to stage files, commit   them to update the local repository and   finally how to push that code to a   remote repository or clone a remote one   to work locally.

 Hopefully, by the end   of this video, you now have a clear   understanding of how git works. And one   more important thing on my logic based   labs Facebook page, I have published a   git cheat sheet which is especially   useful for beginners. It's completely   free. So feel free to grab your copy   right now.

 The link is available in the   video description. If you found this   video helpful, don't forget to give it a   like and subscribe to the channel   because I have got plenty more valuable   topics coming up next. And yes, if you   have any feedback or suggestions about   this video, please share them in the   comment section.

 I read every comment   and try my best to reply every comment   as well. Stay well and I will see you in   the next video.



---

## Source: VideoTranscriber_Git & GitHub Crash Course for Beginners [2026].txt

- Original path: `VideoTranscriber_Git & GitHub Crash Course for Beginners [2026].txt`
- Size: `81732` bytes
- SHA256: `21490610269FE9E0D70E9F47A28157E4B334C94A512FF5B9BAA5B5F52BD15600`

---


This comprehensive course will give you   a rockolid foundation in Git for version   control and GitHub for collaborative   remote storage. You will learn the core   concepts like how Git tracks your work   through the working directory, staging   area and repository. You'll learn the   vital git commands from add and commit   to stash and rebase through clear real   world examples.

 And you'll learn about   collaborative workflows like how to work   with branches, handle merges, and use   powerful features like pull requests on   GitHub. Sumit Saha developed this   course. Today we are diving into   something really exciting. Git and   GitHub. But before we go any further,   let's clear one thing up. Git and GitHub   are not the same thing.

 They are   connected. Yes, but completely   different. Think of it this way. G is   the coffee and GitHub is the coffee shop   where that coffee is served. Fun   analogy, right? Don't worry. In just a   moment, you will see exactly what I   mean.   So, let's start by understanding what   Git actually is and how it works.

 Simply   put, Git is a powerful tool that   constantly keep track of every change   you make to your files. And I mean   literally all the time, day or night,   365 days a year. Git records what   changed, when it changed, who changed   it, and even where it happened. Now what   kind of files are we talking about?   Almost any kind, not just code.

 It could   be an image, a text file, JavaScript,   PHP, Python, or even a video. No matter   what you are working on, G tracks every   single change. Which line was edited,   when it was done, and by whom? Pretty   amazing, isn't it? But here's the best   part. The magic of Git doesn't stop   there.

 The coolest thing about Git is   that it saves different versions of your   files. Imagine you wrote some code and   then made a few changes to it after a   few days. Now you want to make sure the   old version doesn't get lost. That's   exactly where Git comes to the rescue.   It lets you keep multiple versions of   the same file effortlessly and whenever   you want, you can roll back to any   previous version in just a moment.

 Git   is most commonly used in coding   projects, but its power goes far beyond   just code. You can use Git to keep track   of changes and maintain different   versions of almost any file. This means   you never have to worry about losing a   file or accidentally overwriting   something important. Let's look at a   real life example.

 Suppose you are   working on a project. You have spent   hours writing code. Your client loves it   and everything's going great. Then a   month later, the client asks for some   new changes. You make the updates as   requested. But after a few days, the   client comes back and says, "Actually,   the old version was better.

 Now you are   in trouble, right? because you have   already overwritten the original code.   How do you get it back? That's exactly   the kind of problem Kit solves. This is   why Kit is known as a version control   system. It keeps every version of your   files or code safely stored. So you can   go back to any previous state whenever   you need to without losing a thing.

 G   was created by Linus Torvs, the same   brilliant mind behind Linux. And   honestly, what he built is nothing short   of genius. Most tools we programmers use   have a short lifespan, but Git is one of   those rare ones that once you learn it,   stays useful for the rest of your   career.

 The best part, Git isn't hard to   learn at all. It's built around a few   simple commands and concepts. Once you   understand those, the whole system   starts to make perfect sense. Still, for   beginners, Git can feel a little   confusing at first. And that's exactly   why I made this video. Think of it not   just a tutorial but as a complete   learning resource for mastering it.

 Here   we will cover all the essential topics   you will actually use in real world   projects. And if you want to jump to a   specific topic, you can easily find it   from the video timeline. So if you   follow this video closely, I'm sure   you'll easily understand every part of   Git step by step.

 Now let's move on to   another important topic. The difference   between Git and GitHub. Git is a tool   that runs locally on your own computer.   It tracks all the changes you make to   your files and keeps everything   organized. But imagine this, you and   your teammate are working on the same   project. You are coding on your own   computer and your teammate is working   from another one.

 That means you both   have different versions of the same   project, right? And if your team has   more members, there will be even more   versions each saved separately on their   own machines. That's exactly where   GitHub comes in. When the project is   complete, you will need to combine   everyone's work into one single place to   merge all those changes together.

 For   that, you need a central hub where   everyone can upload their updates. You   push your work there, your teammate   pushes theirs, and GitHub brings it all   together. GitHub acts as that central   online server where your team's entire   project lives, making it easy for   everyone to see, edit, and share updates   in one single place without any   confusion.

 But GitHub isn't the only   place where you can host your Git   repositories. There are other popular   platforms too like GitLab and Bitbucket.   These are also widely used and trusted   by developers around the world. Still,   among all of them, GitHub remains the   most popular and widely adopted   platform.

 In today's discussion, we will   focus mainly on GitHub. It's now owned   by Microsoft and is maintained with   great care and attention, especially in   the programming community. And in the   world of open source projects, GitHub's   contribution is truly remarkable. So   without wasting any more time, let's   dive in and explore how Git and GitHub   actually work and see some real world   use cases that will help you understand   their power in action.

 Before you start   working with GitHub, the most important   thing is to understand its core concept,   how it actually works and what its   internal structure or architecture looks   like. G is mainly divided into two major   parts, local and remote. The local part   refers to your own computer where you do   all your work.

 This is where your files,   code, and every change you make are   stored. The remote part on the other   hand lives in the cloud. It's where you   push or upload your local work. In most   cases, when we say remote, we are   usually referring to GitHub. Now, let's   start with how the local part works. In   your computer, the folder where you are   working on your project is called the   working directory.

 This is where all the   action happens. You write code, create   new files, modify existing ones, and   make changes as needed. And when you   feel all right, this version looks good.   I want to save this change. That's when   you move on to the next stage in kids   workflow. So, what do we do next? We   move our work to the stage.

 At first,   this word might sound a bit unfamiliar,   but once you use it a few times, it will   make perfect sense. In simple terms,   when you finish your work in the working   directory, staging means you are saying,   "All right, my changes are ready. They   can move to the next step." This staging   process is the second phase in Git's   workflow.

 Then comes the third phase   where we take the staged files and send   them to the local repository. You can   think of the staging area as a middle   ground, a temporary space where files   sit between your working directory and   the final save in the repository. Once   you have reviewed everything and you are   confident the work is correct, you   commit it.

 Committing means permanently   saving those changes to your local   repository, locking them in as a   recorded version of your project's   history. Now, you might be wondering   what exactly is a repository. Simply   put, a repository is a place where all   the versions of your files and their   complete change history are stored. In   the case of a local repository, it's a   specific folder on your own computer.

  For a remote repository, it lives on a   cloud server like GitHub. You can think   of a repository as a digital cabinet for   your code, a secure place where Git   neatly stores every record of your work   and every change you have ever made.   Inside this repository, Git   automatically creates a few system files   that track everything, your changes,   history, commits and more.

 These files   are managed entirely by Git itself and   the whole system runs based on the data   stored within them. So if we summarize   everything we have learned so far, it   goes like this. First, we work inside   our local working directory. Once we are   done, we stage our changes and then   commit those staged files to the local   repository.

 Up to this point, everything   happens only on our own computer.   Nothing has been sent to the cloud yet.   We need the cloud only when we want to   share our code with others, access it   from another computer or keep it safely   backed up. That's when we push our local   repository to the remote repository. In   other words, we upload it to GitHub.

  Think about it like this. Just as we use   Google Drive or One Drive to store   files, photos or documents, we could   technically keep everything only on our   own device, but we store them in the   cloud so that we can access them from   anywhere. And even if something gets   deleted locally, it stays safe online.

  GitHub works the same way. It's our   cloud backup for code. So you see the   main purpose of this whole process is to   make collaboration and remote access   possible. Having a remote means we can   easily send our code from the local   repository to a cloud server and if   needed pull that same code back to any   other machine and that's the core idea   of git.

 The foundation of the entire   system rests on this simple concept.   Beyond that there's nothing overly   complex. Once you clearly understand   this basic workflow, everything else in   Git will feel much easier to grasp. All   right. Now let's see how to get started   with Git from scratch. The very first   step before working with Git is   installing it on your computer.

 To do   that, just open Google and search for   Git. Click on the official G website   that appears in the search results. Then   go to the download section. There you   will find different versions for three   major operating systems, Windows, Mac   OS, and Linux. Simply choose the one   that matches your system and you will   get clear download instructions right   there.

 Since Git is already installed on   my machine, I won't reinstall it. But if   you are working on Windows, click on the   Windows option and you will see two   download choices. One for 32-bit and   another for 64-bit systems. Just pick   the one that matches your setup.   Download it and run the installer. For   Mac users, when you select the Mac OS   option, you will also find instructions   on how to install Git using Homebrew.

  Just follow those steps and your   installation will be done in no time.   And for those using Linux or other Unix   based systems, you can follow the   installation guide provided on the site   according to your distribution. The   entire process is really simple and   straightforward. Once the installation   is complete, the next step is to open   your terminal or common prompt.

 If you   are using a Mac, simply open the   terminal app. For Windows users, you can   use either common prompt or PowerShell.   Both will work just fine. However, after   installing Git, you will usually get a   separate terminal called G Bash. You can   use that too if you prefer. Many   developers actually like working in Git   bash because it feels very similar to a   Linux terminal and makes running   Gcommerce a lot easier and more   intuitive.

 All right, I'm opening my   terminal now. The first thing we need to   do is make sure G is properly installed.   To check that, we will type a simple   command in the terminal g-   version. Then just press enter. As soon   as you do that, you will see an output   on the terminal showing the version of   Git installed on your machine.

 Keep in   mind the version number might not be the   same for everyone. It depends on when   you installed G and which update you are   using. If G is installed correctly, you   will see something like this version   output. But if it isn't installed,   you'll get an error message instead.   Hopefully, G is now properly set up on   your machine too and you are ready to   start using it.

 Now it's time to get our   hands dirty to do some practical work.   As I mentioned earlier, G can be   implemented in any file or folder.   Right? So first we need to create few   files and folders to work with. Let's   start by navigating to the desktop using   the terminal. I'll type cd desktop and   then press enter.

 Here cd is a terminal   command that stands for change   directory. It simply means we are moving   from one folder to another. Hopefully   you are already familiar with some basic   terminal commands like cd, pwd, touch   and mkdir. If not, no worries. You can   easily learn them using Google or even   charg. They are really simple to   understand.

 Just remember for Windows   users, some of these commands might be   slightly different. And keep in mind   commands like cd, pwd, touch, and mkdir   are general terminal commands, not git   commands. All right. Now that we are   inside the desktop directory, let's   create a new folder where we will keep   all our project files.

 We will name it   gy-en 1. So we will type in the terminal   mkdir. That means creating a directory   gy 1 and press enter. That's it. A new   folder named gy-en 1 has been created   inside the desktop directory. Now we   will move into that folder by typing cd   git - 1 and pressing enter again.   Perfect.

 We are now inside the g one   folder. And this is where our g project   officially begins. So now that we are   inside the g one folder, we will create   two files. For that, type the following   commands in the terminal. Touch 1.xt and   touch 2.txt. Next, we will create   another folder named my folder. To do   that, type mkdir my folder.

 Then use cd   my folder to enter the folder. Inside   this folder, we will create another file   by typing touch3.txt.   Now, let's check everything we have   created in our file system. I will open   the kit one folder in finder on my Mac   by typing this command in the terminal.   Open dot. Here the dot means the current   folder.

 As soon as I press enter, Finder   opens up. Inside the G1 folder, I can   see two files 1.xt and 2.xt and a folder   named my folder which contains the 3.xt   file. Now I'm going to write something   inside each of the files. I opened 1.xt   in a text editor. Wrote one and saved   it. Then I opened 2.xt, wrote two and   saved that as well.

 Finally, I went   inside the my folder directory, opened   three.txt, wrote three and saved it. So   now all three of my files contain some   content. This git one folder is actually   my working directory. As I mentioned   earlier, this is the folder where I'm   doing all my work and where all my files   are stored.

 Now, if I want git to start   monitoring everything inside this git   one folder, I have to tell git this is   my project folder. Track all the changes   here. For that I'll go back to the   terminal. Make sure I am inside the g   one folder and type g init. The word   init means initialize. In other words,   we are telling g to start working inside   this folder from now on.

 Once I run the   command, it shows a message initialized   empty g repository. That means g has now   started tracking this folder. How do we   know that? Let me show you. Since I'm   already inside the g folder, if I type   ls in the terminal and press enter, I   can see all the files and folders inside   it. But if I type ls - la.

 Notice that   now we can also see a hidden directory   named git. The ls-la command lets us   view hidden files and folders in the   system. So we can see a hidden folder   named git inside our project directory.   But who created it? The answer is g   itself. This dogg folder is actually the   core of the entire project.

 It's where   git keeps all its internal data such as   which files have changed, who made the   changes, and what the previous versions   were. In short, everything G does is   stored right here. From now on, G will   be able to track every change I make in   my work. Let's say I made some changes   to the three files I created earlier.

  That means I now have a local   repository. But we can also create a   remote repository directly. I mentioned   this earlier. So let's see how to do it.   First I will open my browser again. Then   I will go to the URL github.com.   If you are new, you will need to create   an account on GitHub first. Since I   already have an account and I'm logged   in, you can see my profile here.

 On the   left side, you can see my repositories,   feeds, and other details. Our goal is to   store our local files on GitHub. For   that we need to create a new repository.   To do that I will check the blue new   icon. Just like we used g in it to   create a local repository here we can   initialize one in the cloud.

 I will give   it a name gy-en journey. And in the   description I will write we are learning   it and GitHub I will keep it public so   everyone can view it. Then I will click   the create repository button. And that's   it. A new repository has been created on   GitHub. Congratulations.   Right now the repository is completely   empty.

 It doesn't have any files inside   it. I want to add some files here. So I   will create one. I click on the create a   new file button. Name it 1.xt and inside   the file I write one. Then I click on   the commit changes button. Now the term   comet basically means save. Comeing is   just like saving a file. Nothing   complicated. Don't worry about this.

 We   will explore comets in detail later. For   now, there's already a default comet   message saying so I will keep that as it   is and click commit changes. Next, I   create another file the same way. This   time naming it 2.xt, writing two inside   it and saving it as well. Now, if I   check my GitHub repository, I can see   two files there. 1.xt 

and 2.xt. At this   point, I have two repositories. one on   the cloud, meaning on GitHub, and   another one locally on my computer. I   initialized the local one myself   earlier. But now I want to bring the   GitHub repository down to my machine by   cloning it. So what should I do? I will   go back to my terminal. Right now I'm   inside the G1 folder, but I want to   clone the remote repository onto my   desktop.

 So in the terminal, I will type   cd dot dot slash. This command takes me   back to the desktop just one level back.   Now I am going to clone the remote   repository the one I just created on   GitHub. For that I need a link which is   basically the repositories URL. So I   will go back to GitHub open that   repository and click on the code button.

  There I can see an HTTPS link. I will   copy that link. Then in the terminal I   typed g clone followed by the link I   just copied and pressed enter. Now   notice g is pulling my github repository   down into my local machine. After a few   moments the cloning process is complete.   Let's verify whether the repository has   been successfully cloned.

 In the   terminal I will type ls. This command   shows the list of folders in my current   location. As you can see, there's now a   new folder named gy-en journey alongside   my previous gy-en 1 folder. Now we will   enter the g journey folder. To do that,   I will type cd g journey. We have now   entered the g journey directory.

 If I   type ls, I can see the contents of the   folder and inside it there are two files   1.xt and 2.xt. And if we want to see the   hidden files, we'll simply type in the   terminal ls- a. Even here you will find   agit folder that proves this is also a   complete git repository cloned from the   cloud.

 Earlier we saw the same thing in   our local repository. Right? So this is   how we can create a git repository in   two ways. One by initializing it locally   and the other by cloning it from GitHub   or any other remote server. No matter   which way we create it to start working   with g initialization is always   required.

 Now let's look at something   new. Suppose I am currently inside the   gourney folder. This is the repository I   just cloned from the remote. Now if I   make any changes to this repository, for   example, I open the file 1.txt in a text   editor. Inside it I keep everything as   it was but add the number one at the end   and save the file.

 Now I want to know   what exactly changed or whether G has   detected the modification. To check that   I will type in the terminal g status and   as soon as I run this command g   immediately tells me modified 1.txt.   That means g has already detected the   change I made in that file. Now let's   say I make a small change in 2.

xt as   well. Just adding a two at the end. Then   I run g status again. This time it shows   modified 2.xt. That means both files   have been changed and g has detected   both modifications. This is exactly how   g continuously keeps an eye on every   change we make. It's like it's always   watching over our project.

 At any point,   we can simply run the g status command   to see which files have been modified or   updated. In a real project, we usually   work with multiple files at the same   time. Right? In that case, g status give   us a clear summary of the overall   situation. What has changed? Which files   are new and which ones are modified.

 So   up to this point we have learned that   git can be initialized in two ways   either locally or from a remote   repository and with g status we can   easily check what changes have been made   in our working directory. Hopefully   everything is clear up to this point. So   far we have only worked inside the   working directory that means we have   created and modified files but we   haven't yet told g to keep those   changes.

 Now we are going to move them   into the staging area. In g terminology,   the process of moving changes from the   working directory to the staging area is   called adding. Simply put, g add means   telling g I want to keep this change. So   let's see how g add works. Right now   inside our g journey folder, we have two   files and both have been modified.

 Now I   will create another folder inside g   journey named my folder. To do that I   will type in the terminal mkdir my   folder. Then I will use cd to enter that   folder. Inside my folder, I will create   a new file called free.txt by typing   touch3.txt.   As soon as I run this command, a new   file named 3.txt is created.

 Then I open   the 3.txt file in my text editor. Inside   it, I write three and save the file.   Now, we have made quite a few changes,   haven't we? Let's see what we did. We   created a new folder, added a new file,   and modified some existing ones. In   other words, our entire project has gone   through multiple changes.

 So now it's   time to move all these changes into the   staging area. To do that, I will first   go back to the repository's root folder.   Meaning I will move one step up. CD dot   dot. Now I'm back in the root directory,   which is the gourney folder. From here,   I'll run the g add command. But before   adding, let's first check which files   have actually been changed.

 So I will   type g status. And look, g is showing   that two text files have been modified   and a new folder has been created. It is   also saying that the old files are   tracked while the new folder is   unttracked. Why is that? Because the old   files came from the remote repository we   cloned earlier.

 So, G already knows   about them. But since my folder is newly   created, G doesn't recognize it yet. If   I want to move everything to the staging   area at once, I have two options. I can   either use the command g add d- all or   the shorter version g add- a. Both   commands do exactly the same thing. So   let's first try with g add d- all.

 In   the terminal I type get add-all.   After running this command I will check   the status again by typing g status. Now   we will see that g has staged   everything. In other words, all the   changes we made are now ready to commit.   We'll talk about commits in detail a bit   later.

 For now, just remember that when   we use g add-all, g takes every change   and prepares it for the next comet. Now,   suppose I want to go back to the   previous state, that is remove   everything from the staging area and   return them to the working directory. To   do that, I'll type in the terminal get   reset. As soon as I run this command,   everything goes back to the way it was   before.

 You can see in the terminal, it   says unstaged changes after reset. Now,   if I check the status again by typing g   status, you will notice that everything   is back to the earlier state just like   before. All right. Now, let's take a   look at how g addy- a works. Just like   before, I will type in the terminal g   add- capital letter a.

 After running   this command, I will check the status   again by typing g status. And you will   see that git has tested everything just   like before. That means all the changes   we made are now ready to commit. So   whether we use g add-all or g add- a do   the same thing. G stages every change.   You can use either one.

 It doesn't make   a difference. Now I will run g reset   again to unstage everything and bring   all changes back to the working   directory. Then I will check the status   once more using get status. Everything   looks good again back to the unstaged   state. Now in this state if I type in   the terminal get add dot.

 What happens   then? At first glance it seems like it's   doing the same thing as g add-all   everything appears to be test but   actually that's not the case. Here's   where the difference lies. Let's see   what that difference really is. I'll run   get reset again to return everything to   the previous state.

 Now all files are   back in the working directory. Next, I   will go inside the my folder directory   by typing cd my folder. Now that I'm   inside my folder, I will type g add dot.   Then to check the status, I will type g   status. And look, g has only staged the   three.xt file that's inside my folder.   The other files in the root folder are   still unstaged.

 This difference is   really important. The options d-all or -   a mean that g will stage every single   change across the entire project. But   using the dot means git will only stage   the changes within the current directory   you are in. Also keep in mind if there   were a subfolder inside my folder using   the dot would still include the files   inside that subfolder too.

 In simple   terms the dot means the current   directory and everything inside it. So   now we have seen three variations of the   g add command d- all- a and dot. The   first two work exactly the same way   while the dot version is a bit more   limited in scope. Now I will run g reset   to bring everything back to the previous   state again.

 Next let's look at another   important concept. I will go back to the   root folder by typing cd dot dot. Then   in the terminal I will type git add-all   so that everything is staged again. Now   we know all our files are ready for   commit. At this point I make some   changes directly in the working   directory. For example, I delete the   file 2.

txt and create a new one named   4.xt writing four inside it. That means   I have deleted one file and added   another new one. Now if I check the   status by typing g status, what do you   see? G shows that under changes to be   committed the previously staged files   are still there. But under changes not   test for commit, it now lists 2.

xt as   deleted and 4.xt as unttracked. So if I   now type g add star and then check again   with g status, you'll see that g has st   the newly created for.txt file, but it   hasn't st the deleted 2.xt file. That's   why it's important to understand that g   add star only stages new or modified   files but not deleted ones.

 The behavior   of the aesthetics is that it stages all   visible changes except for deleted   files. In other words, if a file has   been deleted, it won't be added to the   staging area. That's the key difference   between the star and the dot and the d-   all options. This is how the star works   in g add.

 Now let's return to the   previous state again by typing g reset.   Then check the current situation with g   status. Now if you want to stage only a   specific file say 1.xt which has been   modified you can do that by typing g   add1.txt.   Similarly if you want to stage a file   inside a folder for example the file   inside my folder you can write g add my   folder/3.txt.

  Let's test it. I type g add2.txt.   After running this command, if we check   the status using g status, we'll see   that only 2.xt has been changed. So yes,   we can also stage individual files by   specifying their names. Now let's go   back again by typing g reset. This   returns everything to the previous   unstaged state.

 We can also stage files   by their extension. For example, if we   want to stage all txt files, we will   write g add star.txt.   This command stages all txt files in the   current directory excluding deleted   ones. Note that g only stages the   changes it finds in the root folder. It   won't include deleted files or files   inside subfolders.

 Finally, if we want   to stage everything at once, the best   and simplest practice is to go to the   root directory and type g add dot. After   doing that, all the changes are staged   together. If we now run g status, we'll   see that everything has been staged   successfully. That means all our changes   have been moved from the working   directory to the staging area.

 So far,   we have learned how to move changes from   the working directory to the staging   area using the git add command. Now   let's see how we can save those changes   from the staging area to the local   repository. In g language, this is   called a comet. It means we are   confirming and saving our changes   permanently.

 You can think of it like   getting ready for a party. You don't   just walk straight out the door. First,   you stand in front of a mirror and check   your clothes, shoes, tie, and hair. Then   the stage where you make adjustments.   Maybe you realize this shirt doesn't   look good or let me change this shoes.   That's an intermediate step.

 You haven't   left for the party yet. You are just   making sure everything is in order. If   something's off, you can fix it right   there. Once you are satisfied and   everything looks perfect, that's when   you finally leave for the party. G works   in the same way. Instead of going   straight from the working directory to   the local repository, we first move our   changes to the staging area.

 This is an   intermediate step where we can review,   adjust, or even remove changes before   saving them permanently. We don't commit   directly from the working directory   because the staging area gives us a   chance to verify everything before   finalizing. When you finally commit, it   means you are sure everything is   correct.

 No more mistakes and now the   work can be saved permanently. That's   why this process is called a commit. Now   let's see how to make a commit in   practice. First we will check our   current state using g status. It shows   that the staging area contains some   changes. These are ready but not yet   committed. To commit them, we will write   g commit / m space and a commit message.

  The /m flag lets you add a short message   describing what you changed. For   example, g committ/m I have made some   changes to the files. Now, sometimes an   error may appear the first time you try   to commit. When you install git for the   first time and attempt a commit, you   might see a message like please tell me   who you are.

 Don't worry, this is   completely normal. It's just G's way of   asking for your identity before   recording a comet. It needs to know who   is making the changes and from which   email address. This information is   attached to every commit in the project   history which later helps track who made   which changes.

 Fixing this issue is very   simple. G actually tells us exactly what   to do. Just run the following two   commands. Get config- global user and   pass your email address. Then get   config- global user.name pass your name.   By running these two commands, the   problem is solved. The first command   sets your email address globally and the   second one sets your name globally.

 The   d- global flag means that this   configuration will apply to your entire   computer. So every git commit you make   from this machine will use the same name   and email from now on. If you want to   make the configuration specific to a   single project, you can use the d-local   flag instead of d- global flag.

 That way   the settings will apply only to that   particular repository. In short, when   you use git for the first time, setting   up your user configuration is mandatory.   It's part of the basic Git setup you   need to do before committing. Once it's   configured, G will automatically   recognize your identity for all your   future commits.

 Since I already have Git   configured, I don't need to set it up   again. All right, let's go back to our   main task. We are going to make a comet.   We already know what to type in the   terminal. get commit minus m. I have   made some changes to the files. Perfect.   The commit is done. The terminal now   shows how many files were changed, how   many lines were added and how many lines   were deleted.

 Let's verify everything by   checking the status. G status. As you   can see, everything looks clean now.   Meaning all the changes have been   successfully saved in the local   repository. From now on, whenever you   make new changes to any file, you'll   have to stage and commit them again just   like before. One more thing about   comets, you can always roll back to the   previous state if needed.

 To do that,   type in the terminal get reset head and   a t sign. This command will undo the   last commit and bring everything back to   the working directory. Now, if we type g   status, you'll see that all the files   have returned to the working directory,   ready to be staged again. You can now   modify or commit them as you wish.

 See   how amazing it is. You have complete   control over your work. It's just about   remembering the right commands. We will   explore even more useful features soon.   Now let's move on to the use of g   remove. But before that, let's make a   new commit just like the one we did   earlier.

 So in the terminal, I will type   g add dot then get commit minus m. I   have made some changes to the files.   Perfect. Our commit is done. Now let's   manually delete the 1.xt txt file from   our file system and then go back to the   terminal. I'll type get status. Now you   can see the change. It shows that our   1.txt file has been deleted.

 After that,   if I type get add dot, the deletion will   also be sted, right? So instead of   deleting a file manually and then adding   it again, you can actually do both steps   in a single command. If you want to   delete a file and stage that deletion at   the same time, just type get rm4.txt.   Here we are taking for.

txt as an   example. This means we want to delete   4.txt and automatically move that change   to the staging area. Once we run this   command and then check the status with G   status, you will notice that 4.xt has   been deleted and at the same time   staged. So we no longer have to perform   two separate steps, deleting and adding   manually.

 We can do both at once with   this single shortcut. If we check in   Finder, we'll see that 4.xt has   disappeared. Now let's look at another   example. But before that, we'll roll   back the deleted file. To do this, we   will use the get reset command. However,   when you run a normal G reset, it only   brings back the changes, not the deleted   files.

 Once you execute reset, you'll   see in the terminal the message unstaged   changes after reset. But if you check   your file system, the deleted file   hasn't returned. That's because a normal   reset only brings back the staged   changes, not the actual files. We can   confirm this by running g status. You   will notice only the changes are back.

  Manually deleted files are still   missing. If you want to restore   everything, meaning both the changes and   the deleted files, then you will have to   run get reset- hard. Once you execute   this, both your changes and the deleted   files return to their previous state.   Now let's explore the use of get remove   a bit deeper.

 Suppose you want to remove   a file. Now let's say we edit the 4.xt   file and write four inside it. That   means there's now a change in the   working directory. If I try to delete it   directly using g rm4.txt,   what happens? The file isn't deleted and   g starts showing an error. The following   file has local modifications. This means   it isn't allowing the deletion because   it has detected uncommitted changes in   that file.

 Before you can remove it, you   either have to commit those changes or   confirm that you truly want to discard   them. If you are sure you want to delete   the file anyway, you can force it by   using get rm/f   4.xt.   As soon as you run this command, the   file is forcefully deleted. If you check   your file explorer, you'll see that   4.txt is gone.

 Now, let's look at   another situation. I'll run another hard   reset. Get reset- hard. This brings   everything back again. I'll now modify   the file for.txt by writing hello inside   it. Now, if I type get rm-cached   4.txt, txt. This removes the file from   the staging area but keeps it physically   in your working directory.

 Let's check   it with G status. You'll see that 4.txt   has moved to the unttracked file   section. It's no longer staged, but the   file itself still exists in the system.   That's the difference between the   d-force and d- cache flags. The d-force   flag completely deletes the file while   the d-cashed flag only removes it from   staging.

 keeping the actual file intact   in your working directory. Another   useful command is get rm-r   folder. Here the - r flag stands for   recursive. This means if the folder   contains other subfolders or files, all   of them will be removed recursively. If   you only mention the folder named   without -ash r, then only that folder   will be removed, not its contents.

 All   right, let's try this out. But first I   will reset everything again by typing g   reset- hard. Now that the reset is done,   we'll experiment with our my folder.   Okay, in the terminal I will type g rm-   r my folder. And as you can see the   folder has been deleted from our file   system as well.

 If we now check the   status using g status, we will notice   that my folder is listed as deleted and   has already been staged automatically.   Now I will reset everything again by   typing get reset- hard. Perfect. So far   we have made quite a few comets. Right   now let's learn how to view those   comets.

 Basically viewing comets means   checking the comet log. And doing that   is very simple. In the terminal just   type get log. That's it. Instantly you   will see the full comet history. Here we   can see three comets. Right. Along with   each one, there are details and messages   that clearly describe what was done in   that comet.

 You will also notice some   long random strings. Those are comet   ids. Using these ids, we can go back to   previous versions later on. Don't worry,   we'll learn how to do that soon. For   now, just remember this part. The first   two commits were created when we made   files while setting up our GitHub   repository.

 And the last one was made   when we modified some files recently.   Now if we want to view this log in a   cleaner, more compact format, you can   use this version of the command. Get log   d- on one line. Once you run it, you'll   see a nice short summary of each comet   with just the essential information. The   unique comet ids are also shown in a   shortened format.

 These shortened ids   can also be used to return to any   previous version later on. Now let's   move on to one of Git's most powerful   and important features, branching. At   the moment, our repository has only one   branch. A branch in Git is like a   separate line of development where you   can work independently.

 If you check the   online repository we cloned earlier, you   will see that the default branch is   called main. It used to be known as the   master branch before. This is the   default branch where all work begins. In   recent times, G has shifted from calling   it master to main. But the idea remains   the same.

 The main branch is your   project's central line of development.   To understand the concept of branching   more simply, imagine you are working in   the kitchen of a large restaurant. The   main branch is the main kitchen where   all the dishes are prepared and served   to customers. Now, if your client wants   to try a new dish or recipe, you   wouldn't experiment directly in that   main kitchen because if something goes   wrong, it could ruin everything.

  Instead, you create a separate taste   kitchen where you can safely prepare and   taste the new dish. Once the recipe is   perfected, you bring it back into the   main kitchen to serve it officially. It   works exactly the same way. Instead of   making changes directly in the main   branch, you create a separate   development branch where you test and   commit all your changes.

 Once everything   is stable and verified, you merge that   branch back into the main branch. This   ensures your main project stays safe   while new features can be developed and   tested without breaking anything. In   short, branching in Git provides a   secure and organized intermediate step   that allows you to review, test, and   manage changes before merging them into   the main codebase.

 Now, since I have   already mentioned the word merge, let's   understand what it really means. Merge   simply means combining the changes from   two branches into one. It's an important   concept for understanding how branches   work. In Git, you can create multiple   branches like staging, development,   front end or back end and work on each   of them separately.

 Once all the changes   are finalized and tested, they are   merged back into the main branch. Right   now, our application has only one   branch. To see how many branches we   have, we can type in the terminal get   branch. This command shows the list of   all branches. At the moment, we have   only one, and the branch we are   currently in has a star next to it.

 To   create a new branch, we simply write g   branch followed by the branch name. For   example, let's type g branch   development. Now if we run the same   command again like get branch, we'll see   two branches listed, main and   development. That star next to main   means we are still on the main branch.   When a new branch is created, it takes   the exact state of the branch you were   on at that moment.

 So in this case the   development branch is an exact copy of   the main branch. Remember whenever you   create a new branch it inherits the   current state of the branch you are in.   Now that we have created a new branch   let's switch to it. To move to the   development branch type get checkout   development. We are now inside the   development branch.

 If we check the   current status using g status, we will   see that everything looks clean because   the development branch has been created   with the same content as the main branch   and it was clean before. Now let's go to   our file system and create a new file   named 3.txt. Inside it, we will write   three.

 Then back in the terminal, if we   type g status, we'll see that there's a   new file. To stage it, we type g add   dot. And to commit it, we write get   commit/m   I created 3.txt and entered three there.   Now our commit is done inside the   development branch. Next, let's switch   back to the main branch. To do that, we   type get checkout main.

 Now we have   moved from the development branch back   to the main branch. If you check your   file system now, you will notice that   the 3.txt file is no longer there. Why?   Because the changes made in the   development branch exist only in that   branch. those changes haven't been   merged into the main branch yet. The   moment you switch back to the main   branch, G automatically hides the   changes made in development, showing you   only what exists in that main branch.

  This demonstrates just how much control   G has over your file system. When you   switch branches, G instantly adjusts   which files are visible so that you only   see the changes relevant to that   specific branch. There's no duplication   or conflict in your file system. G   manages everything seamlessly.

 In this   way, you can create hundreds of   branches, each containing its own set of   changes. And G will always show you a   separate isolated view for each one. But   remember, for any change to actually   take effect, you must commit it.   Whatever branch you are working in, the   commit must be made there. Once   committed, G understands that those   changes belong exclusively to that   specific branch.

 That's why when you   switch back to the main branch, the   changes made in the development branch   don't appear there. Now let's say we   make a new change to the for.txt file   while we are on the main branch. Let's   add a four to it. Then if we check the   status by typing g status, we'll see the   new change.

 Let's stage it using g add   dot and commit it with g commit minus m.   I changed four.xt and added additional   four. Now both branches have changes.   The main branch has this new comet and   the development branch still has its   previous one. Since both branches now   contain updates, we will merge the   changes from the development branch into   the main branch.

 But first, let's start   by merging the main branch into the   development branch just to synchronize   everything. So, first we switch to the   development branch by typing geckout   development. Now that we are inside the   development branch, we will run gge   main   merging main into development. After the   merge, you will notice that the changes   made in the main branch have now   appeared inside the development branch   as well.

 For example, the updated   for.txt file is now present in the   development branch alongside the   previous changes. In short, updates of   both branches have been combined and the   development branch now reflects all the   latest modifications. Next, let's switch   back to the main branch by typing git   checkout main.

 Once we are back on the   main branch, we can see that the changes   from the development branch haven't yet   appeared here. So now from the main   branch, we will merge everything from   the development branch by typing gerge   development/m   merging on main with development.   After running this command, you will see   that the 3.

txt file from the development   branch has now appeared in the main   branch as well. That means both branches   changes have been successfully merged   and the merge process is complete.   However, sometimes during a merge,   conflicts may occur. A merge conflict   happens when the same part of the same   file has been changed differently in two   branches.

 For example, if you modified   1.txt in the main branch and someone   else modified the exact same section of   1.xt in the development branch, Git   won't know which version to keep. In   such cases, Git flags the file as having   a conflict and you will have to resolve   it manually by deciding which changes to   keep or by merging both versions   yourself.

 Right now we are on the main   branch. From here we will create a new   branch so that the main branch remains   untouched while we simulate a conflict.   Let's move ahead quickly. I run the   command get branch staging to create a   new branch named staging. This branch   now contains all the latest updates from   main.

 Then I switch to it using get   checkout staging. While working on the   staging branch, I open my file system   and go to the file named 4.xt. At the   end of this file, there was the number   four. I add 44 at the end and save the   file. Now the staging branch has a   change. When I run g status, I can see   that the change is being tracked.

 So I   add and commit it by running g add dot   and then get commit / m changed 44. The   staging branch work is done. Next I   switch back to the development branch by   running g checkout development. When I   open 4.xt here I don't see 44 I added   earlier in the staging. So I write 444   and save the file.

 Then I run g add dot   and commit it with g get commit / m   added 444 on 4.xt. That means the   development branch now has its own   separate change. Now while staying in   the development branch I try to merge   the changes from the staging branch   using git merge staging. But g fails to   merge automatically and shows an error.   Automatic merge failed fix conflicts and   then commit the result.

 This happens   because the same line in 4.xt was   modified in both branches staging and   development. G can't decide which   version should take priority. So it   leaves the decision to us. In this case   the developer working on the development   branch or whoever is managing it has to   manually resolve the conflict.

 When you   open for.txt txt in a text editor. Git   marks the conflicting section clearly   showing which part came from staging and   which part came from development. You   will see both the double four from   staging and the triple four from   development. It's now up to you to   decide whether to keep one, remove one   or combine both changes.

 While staying   on the development branch, you decide   which version to keep. Let's say you   choose to keep the triple 4. You remove   all the conflicting markers. Save the   file and then run get add dot followed   by get commit minus m merge conflict   solved. The commit messages merge   conflict solved.

 Now you switch back to   the staging branch using get checkout   staging. When you open the file system   and check for.txt, it still shows 4,   meaning no change has been applied yet.   At this point, you can choose to merge   changes either into staging or   development since both branches are now   in sync.

 Let's say we decide to resolve   it from staging. We run the command   gerge development. This time g marges   everything smoothly without any conflict   because both sides now contain the same   content. When you check the status using   g status, it shows everything is clean.   Now if we want to bring these merged   changes into the main branch, we switch   to it using get checkout main.

 Once we   are on the main branch and open the file   system, we notice that for.txt doesn't   yet have the latest update. So we merge   the staging branch with git merge   staging. Immediately all the latest   changes flow into the main branch. The   double four from staging and the triple   four from development now combine   perfectly resulting in the final merged   version.

 And that's how the entire   process of merging and resolving merge   conflicts is completed. So far we have   learned how branching works. We have   already seen how to switch from one   branch to another using the checkout   command. Now earlier when we talked   about git log I mentioned that we can   also go back to a previous version using   a comet ID.

 That's what we are going to   see now. And to do that we will again   use the check out command. First let's   check our comet history. We can do that   by running get log d- on one line. Right   now we have nine comets in our log. Now   let's make a small change. I open the   one.xt file and write hello inside it.   Then I stage it by running g add dot and   commit it using g commit/m   update 1.txt file.

 Next, I again run get   log d- on one line. And all the comets   are nicely displayed. Now, I want to   switch back to one of my previous   comets, especially the one named merging   main into development. To do that, I   will simply copy the comet ID of that   comet and type get checkout that come   ID.

 Earlier, when we switched branches,   we used the branch name. But this time,   we are using a comet ID instead.   Remember your comet ID will be different   from mine. After running this command,   the project will move from the main   branch to the exact state it was in at   that previous commit. However, you must   ensure that all your changes on the main   branch are tracked and committed before   doing this.

 If there are many unttracked   or uncommitted files, it won't allow you   to check out to a previous version. Once   you run the command, you'll see that in   the terminal, instead of showing main,   it now says head detached at your comet   ID. That means you have successfully   switched to that particular commit. If   you open 1.

txt now, you will notice the   hello line you added earlier is no   longer there. That confirms you have   returned to the previous version of your   project. But now suppose you want to go   back to your latest date. That means   returning to the main branch. In that   case, you will use the same command as   before. Get checkout main. Perfect.

 Now   you have switched back to the main   branch. Meaning you are back to the most   recent version of your project. So we   have seen how to switch between comets,   how to move from one version to another.   Now let's explore something new. How to   compare one comet with another. If we   want to see the differences between our   current comet and a previous comet, what   lines of code were added? What lines   were deleted? We can do that easily   using g commands.

 Before that, let's   first check our comet history again by   typing glo-   one line. We can see that there are now   10 commits in total. Now we'll compare   the comet update 1.txt file with the   previous one. That means merging main   into development. For that we will need   the commit ids of both. Since we have   already run glog, we can just copy those   two ids.

 Once we have them, we will   write the command g diff doublef then   the first comet id space then the second   comet id. After running this command, G   will show us the exact changes made   between those two comets. The terminal   will display which files were changed.   What was removed in red and what was   added in green.

 Also notice one   important detail in g. We place the most   recent comet ID first and the older one   second. This means it will show   differences from the perspective of the   newer comet. What's newly added or   removed compared to the older one. If   you reverse the order, that means   putting the older comet ID first and the   newer one second.

 G will show the   opposite perspective. Try running the   command both ways a few times. You will   easily understand how the comparison   works. All right, just a quick reminder.   Right now, you can't exit the terminal   view because you are inside the log   window. As I mentioned before, to exit   from there, simply press Q on your   keyboard.

 That will close the log view   immediately. So far everything we have   done has been inside our local   repository. Meaning we have staged   files, made commits and stored   everything locally. But our real goal is   to send those updates to the remote   repository like GitHub. When we send   local changes to a remote repository,   that process is called a push.

 And if   any changes have been made in the remote   repository that we want to bring into a   local repository, we use fetch. When you   run g fetch, the remote changes are   downloaded into your local repositories   memory, but they won't appear in your   working directory yet. To actually   update your working directory and see   those changes in your files, you need to   run git pull.

 So in short, push means   sending local changes to the remote.   Fetch means bringing remote changes into   your local repository but not merging   them yet. And pull means fetching plus   merging. So your working directory   immediately reflects the remote changes.   In other words, gpool is equal to g   fetch plus g marge.

 Let's see an example   of how g push works. We have already   made several changes in our local   repository and now we want to push them   to the remote main branch. Since we are   currently on the main branch, the   command will be get push origin main.   Here origin refers to the remote   repository and main is the branch we   want to push to.

 After running this   command, all your latest comets will be   sent to the remote main branch. If you   check your repository on GitHub, you   will see that everything is updated.   However, only the main branch is pushed.   Other branches aren't uploaded yet. This   means we have only pushed our main   branch to the remote's main.

 Now if we   switch to the staging branch using g   checkout staging and then run g push   origin staging g will create a new   branch named staging in the remote   repository and push all your staging   changes there. When you check github   again you'll see that the staging branch   has been created and updated. Similarly,   if you switch to the development branch   by running gout development and then g   push origin development, the development   branch will also be uploaded to the   remote.

 So now all three branches main,   staging and development are fully synced   with the remote repository. Finally, I   switch back to the main branch again   using g checkout main. By now the   concept of g push should be crystal   clear. Now imagine we have already   pushed our local changes to the remote.   Let's see how fetch works. Suppose we   make a change directly on GitHub.

 For   example, we open the file 3.txt on   GitHub. Type three and commit the   change. Now the remote main branch has a   new update that our local main branch   doesn't yet have. It's behind the remote   version. While staying on the local main   branch, I want to bring in the latest   changes from the remote.

 So I run the   command get fetch. It immediately   fetches the new changes from the remote   repository, but those updates don't yet   appear in your local file system. For   example, you won't see any update in   3.txt until you merge the feted changes.   Once you run get merge, the remote   changes will finally reflect in your   local working directory as well.

 Now,   let's say we edit the remote 3.txt file   again. This time, we add 33 after three   and commit it on GitHub. The remote main   branch is now ahead once more. To bring   in all those updates and merge them into   your local main branch at once, we use   gpool. Gpool automatically performs both   fetch and merge in a single command.

  Which means all the new remote changes   including the latest updates in 3.xt   will immediately appear in your local   files. So that's how gitpool helps you   fetch and merge all remote updates into   your local repository in one go. We have   now learned how to push changes from   local to remote, fetch changes from   remote without merging, and pull changes   from remote while merging them   automatically.

 These three commands,   push, fetch, and pull are among the most   frequently used G operations and are   more than enough for most of our daily   development work. Now, let's move on to   something new. Imagine you are working   on a project. You start developing a new   feature, writing a lot of new code, and   modify several existing files.

 After   some time, you realize that the approach   you took isn't working at all. But by   then, you have already made changes   across 10 to 15 different files. Some   with new code, some heavily modified. In   this situation, you want to discard   everything and go back to the previous   state. Now, think about it.

 Would you   really open each of those 10 to 15 files   manually, remove all the new lines, and   try to restore the old code one by one?   How accurate or even possible would that   be? Probably not at all. In this case,   the simplest answer is it's actually not   possible, almost impossible. And the   complicated answer is you could try   doing it manually, but there's no   guarantee everything will return to its   exact previous state.

 And this is   exactly where the magic of the get   restore command comes in. The get   restore command helps you revert any   files or directory back to its previous   state, that is to the state of the last   comet. It's mainly used to undo local   uncommitted changes or to remove changes   that were added to the staging area   using g add. Let's test it out.

 Suppose   in the 1.xt file, I write new feature.   Remember this repository already had   some committed history. Now I'm just   trying to develop a new feature. But   after writing the new code, I realized   that the change I made in 1.txt adding   new feature was actually a mistake. The   previous version was fine and since this   change isn't ready to be committed, I   want to undo it and go back to the last   committed state.

 To do that, I'll simply   run get restore 1.txt. As soon as you   run this command, the file instantly   reverts to its previous state, the exact   version from the most recent commit. If   you want to restore an entire directory   instead of a single file, just type the   directory name after g restore and it   will bring everything in that folder   back to the last committed version.

 And   if you want to undo all changes across   the entire repository, you can run g   restore dot. This will restore every   file to its last committed state. Now,   if you have already staged some changes   using g add, you can still undo them   using the d-staged flag. For example, g   restore d-staged file name or g restore   d-staged dot.

 This removes the files   from the staging area but keeps the   working directory unchanged. So in   summary, the get restore command helps   you bring any file or directory back to   its previous or last committed state.   It's mainly used to undo local   uncommitted changes before they're ever   committed. Now let's move on and talk   about G stash. Now imagine this.

 You are   working on a new branch developing a big   feature. It's a long process and you   have already finished about half of it.   But the work isn't yet in a state to be   committed. Suddenly another developer   messages you saying there's a new update   on a different branch and you need to   check it out and give feedback.

 Now the   question is how will you switch branches   without losing your unfinished work? Are   you going to throw away all your   progress using the g restore command? Of   course not. There's no reason to go   through that kind of hassle when gives   us a much smarter way to handle this   using the g stash command.

 With git   stash, you can temporarily set aside   your unfinished work. Switch to another   branch to do something else and later   bring all your changes back with a   single command. Let's see how it works   with an example. Suppose in our 1.xt   file, you write another feature. You are   currently on the main branch.

 Now let's   say you need to switch to the   development branch to review a new   feature. So you type git checkout   development.   But git throws an error. Your local   changes to the following files would be   overwritten by checkout 1.txt. Please   commit your changes or stash them before   you switch branches. Aborting.

 This   means because G doesn't allow switching   branches when there are uncommitted   changes, it's protecting your work. But   since your feature isn't ready to be   committed, this is exactly when we use   gash. So you can run g stash. The moment   you execute this command, your   uncommitted changes disappear from your   working directory.

 But don't worry, they   are not lost. It has safely stored them   in a temporary area called the stash.   This lets you freely switch branches   without affecting your unfinished work.   Now let's switch to the development   branch. Get checkout development. You   have now successfully switched branches.   You can review the new feature, make   notes, do whatever you need to.

 Once you   are done, you switch back to your main   branch again. Get checkout main. But now   when you look around, you'll see that   your unfinished feature, the one you   were working on earlier, isn't there.   Don't panic. It's still saved safely in   the stash. To bring it back, you just   need to pop it out of the stash using   the command get stash pop.

 As soon as   you run this, all your stashed changes   reappear in your working directory. The   pop command restores the most recently   stashed work and simultaneously removes   it from the stashed list. If you have   stashed multiple times, G keeps them all   in order. Newest on top, oldest at the   bottom.

 When you pop it, brings back the   most recent one first. But if you want   to reapply the stashed changes without   removing them from the stash list so   that you can reuse them later, you can   use the apply command instead. For   example, get stash apply. This way your   changes are restored but they also   remain safely stored in the stash for   future use.

 So now I run gash again and   then this time I type the command get   stash apply. After running it, you will   notice it behaves almost the same   before. The changes come back just like   when we used pop. All right. Now, let's   understand the difference more clearly.   We already know that G can store   multiple stashes and we can even view a   list of all those stashed changes.

 To   see that list, we type get stash list.   Once you run this command, you will see   a list of all your saved stashes. If you   look closely, you'll notice that each   stashed item is marked with an   identifier like stash zero stash 1 and   so on. You can use these identifiers to   apply or pop specific stashes as well.

  For example, get stash pop stash zero or   get stash apply stash zero. Both   commands will work. The only difference   is how they handle the stash afterward.   Let's walk through this difference step   by step. First, I check my stash list   using get stash list and I see there's   just one stash in the list.

 Since I   already ran g-ash apply once, the stash   item is still there in the list. To   understand this better, let's first   remove that stash manually using the get   stash command. The drop command   basically removes a specific stash from   the stash list. All right. So, in the   terminal, we will simply type get stash   drop.

 Now if we check our stash list we   will see that it's completely empty.   Type in the terminal get stash list. See   the stash list is totally empty. Now   since we previously used g-apply   all the changes are still in our working   directory. We can confirm that by typing   g status. Let's do that g status. And as   you can see the changes we applied are   still there.

 Now let's go ahead and   stash those changes again by typing g   stash. That means we have stored our   changes back into the stash. Next let's   check our stash list again. Type in the   terminal get stash list. What do we have   here? We can see there's just one stash   entry. So now we are going to look at   the difference between pop and apply.

  Now I run get stash pop. The stashed   changes are successfully restored into   my working directory. Then I check the   list again with get stash list and this   time the list is empty. That's because   pop brings your changes back and removes   them from the stash list. It's like   taking them out permanently like cut.

  That's because pop brings your changes   back and removes them from the stash   list. It's like taking them out   permanently. Now let's dash something   again. I run gash and check the list   once more. g-ash list. This time I see   one stash item again. Now I run g/   apply. The command works perfectly. My   files are restored just like before.

 But   when I check the stash list again using   g stash list, boom, the stash is still   there. It didn't disappear. So here's   the key difference. G-pop restores your   changes and removes them from the stash   list while g-apply restores your changes   but keeps them in the stash list for   future use.

 That's exactly what I wanted   to show you. I walked you through both   commands so you can clearly understand   how they behave differently. Hopefully   now the concept is crystal clear. Now   let's talk about get revert. The get   revert command is used to undo the   changes made in a previous commit. But   instead of deleting that old comet, it   creates a new one that reverses those   changes.

 In other words, it cancels out   the effects of a previous comet while   keeping the project history completely   clean and traceable. That's why it's   called revert because it doesn't delete   any comet. Rather, it creates a new   comet that brings back the project to   its previous correct state. Simply put,   get revert means fixing an old mistake   without erasing it.

 For example, imagine   you accidentally added too much salt   while cooking. Instead of throwing the   whole dish away, you adjust the flavor   by adding some extra ingredients to   balance the saltiness. Similarly, get   revert doesn't delete the faulty commit.   It corrects it through a new one. Now,   to revert something, you will need its   comet ID. Let's see an example.

 Suppose   in the file 3.txt, you added the line   hello 3. Then you run g add dot then get   commit minus m hello 3. Now if you check   the log using g log one line you'll see   let's say you realize that the hello 3   comet is introduced a bug and you want   to remove it. Before that copy the comet   ID of hello 3 and then run get revert   that comet ID.

 After running the command   you'll see a prompt asking for a commit   message. You can either type a custom   message or simply keep the default one   and exit it by typing colonw that means   write and quit. Once you do that, the   changes from hello 3 will be undone.   Now, if you check the logs again using g   log one line, you will notice there's a   new commit added specifically for the   revert.

 At this point, you might be   reminded of g reset, right? The main   difference between g reset and g revert   lies here. Get reset can take you back   to a specific comet and discard all   comets after that point without creating   any new comet. On the other hand, get   revert removes the changes from a   specific comet by creating a new one   that reverses it.

 So if your project is   on GitHub or any remote repository,   other contributors can also see the   revert commit ensuring clarity and   preventing confusion. Another key point   is if you check the logs after a reset,   there will be no record of the removed   commits. But when you use revert, you   will clearly see an additional comet   indicating that a revert took place.

  Crystal clear. Now let's talk about g   rebase. Imagine you are starting to work   on a new feature. So you create a new   branch called feature by checking out   from the main branch. You begin   developing the new feature, making   changes bit by bit and committing your   progress as you go. Meanwhile, another   developer adds more updates to the main   branch for production.

 Now you also want   to include those latest updates from the   main branch into your feature branch. So   what can you do? Well, there are several   ways to handle this. As we have seen   before, one option is to merge the main   branch into your feature branch. If you   do that, G will create a new merge comet   and all the latest updates from main   will be merged into your feature branch.

  However, note that merging always   creates an additional commit. You can   see it clearly if you run git log. Some   developers find these extra merge   commits a bit messy and if you continue   merging multiple items, your commit   history can look quite cluttered. In   such cases, a better solution is to use   git rebase.

 When you perform a rebase,   the base of your feature branch changes.   That means if you rebase onto main, all   the new comets from main will be applied   directly into your feature branch. Then   all your feature branch commits will be   reapplied on top of them. So while your   main branches code content remains the   same, the comet history becomes much   cleaner and more linear.

 You can easily   verify this using G log. Now let's   understand this with an example. Let's   say we create a new branch called   feature from main. Get branch feature.   Then we switch to that branch. Get   checkout feature. Now we are inside the   feature branch. Let's open 1.xt and add   the line adding dark mode functionality.

  Then stage it. Get add dot and commit   it. Get commit minus m. Adding dark mode   functionality. Now let's switch back to   the main branch. Get checkout main. We   are now in the main branch. Let's create   a new file called 2.xt and write inside   it adding dark mode UI. Then stage and   commit it.

 Get add dot get commit minus   m adding dark mode UI. Done. That means   our main branch now has a new feature   dark mode UI. Now we want that same dark   mode UI update to appear in our feature   branch as well. So first we switch back   to our feature branch. Get checkout   feature. We are now inside the feature   branch again.

 Our goal is to bring the   latest updates from the main branch into   the feature branch. But this time we   will do it using repace. How do we do   that? To perform a git rebase, you need   to be on the branch you want to rebase   and then specify the branch from which   you want to bring that changes. For   example, if you are currently on the   feature branch and you want to bring in   the changes from the main branch, the   command will be get rebase main.

 That's   it. Once you run this command, the   rebase will be completed smoothly and   the dark mode UI update from the main   branch will now appear in your feature   branch. Here's what actually happens   behind the scenes when you use rebase.   Kit first identifies the most recent   common comet shared between your current   branch that means the feature branch and   the branch you are rebasing onto that   means the main branch.

 Then all the   comets in your feature branch that come   after that common comet are temporarily   set aside. Next, it applies all the new   comets from the main branch into your   feature branch. Finally, it reapplies   the saved comets from the feature branch   on top of those main comets one by one.   The result is a clean linear commit   history much tedier than what you get   with margin.

 You can easily see this   difference by running git log. However,   even though git rebase is very powerful,   it's not recommended to use it on public   repositories or branches where multiple   developers are working together. If you   must use it, you should always inform   your team beforehand. Otherwise, it can   cause serious issues.

 The reason is that   rebase rewrites existing comet history.   even the comet ids change. So if someone   else is working on the same branch, your   rebased comets won't match their local   copies anymore and they won't be able to   pull or sync normally. Therefore, before   using rebase, make sure you fully   understand where you are applying it and   whether it could cause problems for your   collaborators.

 It's perfectly safe to   use rebase on your local or personal   branches where only you are working.   Just avoid rewriting commits that   already exists on a shared remote   branch. Now before we wrap up this   tutorial, let's discuss one last   important topic, the pull request. When   working with G and GitHub, the term pull   request, often shortened as PR, comes up   frequently.

 A pull request is   essentially a request you make to merge   your changes into another branch,   usually the main branch. It's a way of   saying, I have made some changes in my   branch. Please review them, and if   everything looks good, merge them into   the main branch. In other words, you   can't directly make changes to someone   else's repository.

 So when you finish   your work in your own branch, you create   a pull request to ask for permission to   merge your code into the main   repository. That's what we call a pull   request. All right, let's head back to   our Git journey repository on GitHub. By   now, we have already pushed our main   staging and development branches.

 At the   top of the GitHub page, you will notice   several tabs. code issues, pull   requests, and actions. We'll now click   on the pull requests tab. Here we'll see   a big green button labeled new pull   request. This is where you can see I   want to merge the changes from this   branch into another branch. Once you   click new pull request, GitHub will show   you two drop-down menus.

 Base the branch   where you want to merge the changes.   We'll select main here and compare the   branch from which you want to bring the   changes. we'll select development. In   other words, we are saying I have made   some updates in the development branch   and now I want those updates to be   merged into the main branch.

 GitHub will   automatically show a detailed comparison   which files have been modified, which   lines have been added and which ones   have been removed. Everything clearly   visible. If everything looks good,   scroll down and click create pull   request. Then give your pier a title   such as merge development updates into   main and in the description box write   something like this pier adds the latest   updates and fixes from development to   main.

 After that click create pull   request to submit it. Now if you go back   to the pull requests tab you will see   your newly created PR development   domain. Clicking on it you will find   three sections. conversation where you   and your teammates can discuss or commit   on the changes commits which lists all   the commits included in this PR files   changed which shows exactly what changes   were made in which files if everything   looks good after review click the green   merge pull request button at the top and   then confirm by clicking confirm merge   once it's done GitHub will display a   message saying pull request successfully   merged and closed That means all the   updates from the development branch have   now been successfully merged into main.   This is how pull requests make code   management so easier. Every change gets   reviewed first and then merged into   main. As a result, the main branch   always stays stable and the entire team

  can collaborate safely and efficiently.   That's how software companies use Git   and GitHub. This was my complete   tutorial series on Git and GitHub where   I tried to explain all the essential   day-to-day concepts in the most simplest   way possible. I truly believe this   series will be specially helpful for   those who are just getting started.

 If   you have always felt a bit intimidated   or confused about using Git for the   first time, these videos were made   exactly for you. In short, we have   learned how to create a local repository   using Git in it from our working   directory. how to stage files, commit   them to update the local repository and   finally how to push that code to a   remote repository or clone a remote one   to work locally.

 Hopefully, by the end   of this video, you now have a clear   understanding of how git works. And one   more important thing on my logic based   labs Facebook page, I have published a   git cheat sheet which is especially   useful for beginners. It's completely   free. So feel free to grab your copy   right now.

 The link is available in the   video description. If you found this   video helpful, don't forget to give it a   like and subscribe to the channel   because I have got plenty more valuable   topics coming up next. And yes, if you   have any feedback or suggestions about   this video, please share them in the   comment section.

 I read every comment   and try my best to reply every comment   as well. Stay well and I will see you in   the next video.



---

## Source: VideoTranscriber_Git & GitHub Tutorial _ Visualized Git Course for Beginner & Professional Developers in 2024.txt

- Original path: `VideoTranscriber_Git & GitHub Tutorial _ Visualized Git Course for Beginner & Professional Developers in 2024.txt`
- Size: `67785` bytes
- SHA256: `C3E75C55B5F45C8CA4BCC8879B7A6B1885EE9EEF90AD636AB5EA5066228B41F5`

---


imagine you're working on a coding   project and you make a mistake that   breaks everything your boss would most   likely fire you if you were even able to   get a job in the first place without git   you'd have no easy way to go back and   undo the changes you're toasted git is   the industry standard most companies   team and open-source projects use git so   naturally every job description mentions   it learning it isn't just a nice to have   it's your get good or get out moment   it's a must for any serious developer   wanting to land the job so hi there and   welcome to a quick non-nonsense git and   GitHub crash course unlike a typical git   tutorial which only scratches the   surface and leaves you pushing straight   to production like many other interns we   go beyond the basics and dive into the   real stuff no one really talks about   like how to fix a broken production on a   Friday by the end of this course you'll   not only know how to track code changes   and collaborate with your team but also

  professionally resolve merge conflicts   fix real life production issues Write   Clean commits so your team doesn't have   to question your life choices recover   from major mistakes with reset revert   and checkout so when something breaks   production and it will you'll know   exactly how to fix it and save the day   use git through a GUI so you don't have   to memorize tons of commands and even   Master Advanced G tricks like   cherry-picking and stashing because   you're here to get good and not just get   by basically with this crash course   you'll become your company's goto get   guy the person everyone turns to when   things go south and there's a lot we'll   cover in this video and I don't expect   you to return to it anytime you need to   refer to a command for that reason I've   put together the ultimate git reference   guide packed with Advanced tips and   tricks real world use cases and commands   to help you level up your git skills you   can download it for free by clicking the

  link in the description and use it as a   companion to this course and your career   let's Dive Right In so what is git and   why is it so popular git is a   distributed Version Control System   sounds fancy right well let's break it   down the Version Control part helps you   track and manage code changes over time   while distributed means that every   developer's computer has a complete copy   of the code base including its entire   history of changes and information about   who changed what and when allowing you   to get blame someone hopefully people   won't blame you but do you really need   it can you code without using it well of   course you can but then your workflow   would look something like this you start   coding your project in a folder named my   project and as you make progress you   worry about losing your work so you   create copies my project V1 V2 V3 and so

  on then your colleague asks you for the   latest version use zip up my project V3   and email it over they made some changes   and sent it back as my project V3 Johns   changes. zip meanwhile you've continued   to work so now you have my project V4   you then need to manually compare John's   changes with your V4 and create a V5   incorporating everyone's work and then a   week later you realize you accidentally   removed a crucial feature in V2 you dig   through your old folders trying to   figure out what changed between versions   now imagine doing this with 10   developers each working on different   features it's a recipe for chaos lost   work and countless hours wasted on   version management system instead of   actual coding git solves all of these   problems and more it tracks every change   automatically allows multiple people to   work on the same project seamlessly and   lets you easily navigate through your

  Project's history no more final version   V2 final really final zip files git does   all of this for you but in a much more   powerful and organized way to get   started you need git installed whether   on Windows Mac or Linux it's just two   clicks away Google download get and get   it for your operating system once get is   installed open up your terminal nowadays   I prefer using a terminal built into my   IDE I'm using webstorm and honestly I   prefer it over vs code because   everything just works seamlessly and   webstorm get support is extraordinary   you can do so many things you'll learn   about in this video everything from   creating branches committing pulling   changes merging and even resolving   conflicts all without ever leaving the   IDE you can view your G history stash   changes and even review pull requests   directly inside webstorm it makes   working with Git smooth and intuitive   after walking you through the essential   git commands in the terminal I'll show

  you how we can perform the same tasks   more intuitively and efficiently using   webstorm if you're interested in trying   it out I've included a link in the   description where you can download   webstorm for free just create an account   click download and go through the   onboarding once it's set up create a new   project and you're ready to start coding   with all of these powerful git features   built in first things first let's check   whether you've installed git properly   run git D- version and you'll get back   the version that is installed on your   device next you need to configure G to   work with your name and email this is   just to track who made the changes in   the project so your colleagues know who   to blame here's the command get config   -- Global user.name and then in single   quotes put in your name once you do that   you can repeat the same command but this   time instead of changing user.name will   change user. email and here you can   enter your email press enter and that's   it you're all set up now let's talk

  about repositories a repo or a   repository is where G tracks everything   in your project think of it like a   folder that stores all the versions of   your code simply put if a folder is   being tracked by git we call it a repo   now let's create a new repository in   your terminal type get in it and press   enter as you can see git has just   initialized in your repository on top of   the success message we can also see a   warning in previous times the default   name of a branch has been Master but   nowadays you'll see main used much more   frequently as the name for the primary   Branch so let's immediately fix it by   configuring the initial Branch name you   can copy this Command right here and at   the end you can just say   main now considering that we have just   changed the initial configuration   settings we have to create a new folder   create a new one called something like   mastering git open it within your editor   and then rerun git in it as you can see

  here and here now we're in the main   branch that means that git has   initialized an empty repository you   won't see any changes yet in your folder   but a hidden dogit folder has been   created inside your directory you don't   need to touch this folder git handles   everything inside from commit history   branches you'll make remote repos and   more most of the time git will already   become pre-initialized by the framework   or library that you use to set up your   project with that's how integrated git   is into every developer's life so now   that we have this main right here what   does that exactly mean well Main is the   default Branch name of your repo created   by git every time you initialize git   this Branch will be automatically   created for you I'll teach you more   about get branches soon but for now know   that a branch is nothing but a parallel   version of your project all right let's   add some files and track changes I'll   create a new file called

  hello.js and you can see how smart   webstorm is it automatically asks me   whether I want to add it to get but for   now I'll cancel that because I want to   explain everything manually let's make   it simply run a console.log that prints   hello get alongside this file let's   create another new file and I'll call it   readme.

md in here we can do something   similar and say hello get and now run   git status git will tell you that you're   currently on the main branch that there   are no commits yet and that there are   two untracked files one of which is a   markdown document so to track   use get add readme.md   after adding a file we need to commit it   committing in git is like taking a   snapshot of your project at a certain   point think of it as creating a whole   new copy of your folder and telling git   to remember when you did it at what time   so in the future if anything happens   you'll time travel to this folder with   the commit name you specify to get and   see what you had in there it's essential   to commit your changes regularly Reg   regular commits help you keep track of   your progress and make it easier to   revert to previous versions if you break   something you can commit by running git

  commit dasm which stands for message and   then in single quoted strings you can   add that message for example add   readme.md   file there we go congrats you just   created a checkpoint in your Project's   history now let's try running git status   again to see what it shows as you can   notice that other file hello.

js is still   there it's not tracked we asked git to   track only the readme file to track this   file or other files that you may create   will have to run a similar command it'd   be too much work to commit each file   individually thankfully we have a   command that commits all the files we've   created or modified that git is not   tracking yet to see this in action let's   create another file   test.

js and let's add a simple conso log   that's simply cons logs a string of test   now to track both files and commit them   in a single commit action we can do that   by running git add dot the dot after git   add tells git to add all files created   modified or deleted to the git tracking   next as usual we can specify the commit   name for this tracked version by using   git commit   DM add hello and test   files there we go so now now we can see   that all of these files are tracked and   since I'm using webstorm it also has a   hidden Ida folder so it added it to   tracking as well which I'm okay with   well done now to see the history of all   commits we've created we can use a new   command git log and there we have it our   git history it contains a commit ID or a   hash automatically created by git the   author we specified when using it config

  a Tim stamp and the commit message we   provided great but how do we switch to   an older commit and restore it let's say   the commit add hello and test files   introduces some buggy code and we want   to restore our project to a previous   version without these files our brain   would immediately suggest deleting those   files entirely or clearing up their code   and if you do that you'll most likely   break your production because other   files depend on those files so instead   of deleting them manually to restore to   the first version where we had only   committed the readme file we can use a   new command first you have to copy the   commit hash yours is going to be   different from mine so make sure to copy   yours I'll get this one first that says   add readme MD file and I'll press copy   then you have to exit this git log by   pressing the Q letter on the keyboard   and then you can use a command get   checkout and then you can provide a hash   of a specific commit or a branch you   want to check out to now press enter

  okay something happened first of all our   two files are gone detached head   experimental changes what's happening   well in git there is a concept of a head   which refers to the pointer pointing to   the latest commit you've created when we   created our second commit our head   shifted from read me commit to the   latest add hello and test files commit   but when we ran get checkout command we   moved the head to the previous older   commit that's why we got this detached   head warning it's a state where the head   pointer no longer points to the latest   Branch commit and the rest of this   message tells you that you can create a   new Branch off of this commit but don't   worry your files are still somewhere   when you use a git checkout command   You're simply viewing the repository   State as it was at the time of a   specific commit like right now we're   viewing a snapshot of your codebase at a   previous moment in time when we only had   a readme.md file the beauty of this is

  that all the logs and files whether   created or modified remain untouched the   get checkout command won't delete any   logs or history so you can safely   explore past states without worry but   what if you actually want to discard   changes made after that commit maybe you   want to quickly roll back to a stable   state after an issue hits production   tidy up messy commits to look more   professional or undo a bad push you   regret making perhaps you've been   experimenting with a refactor that   didn't pan out or you need to recover   from a messy merge conflict thankfully   git provides a few commands that will   help you in these scenarios and I'll   teach you how all of that works very   soon so just keep watching and we'll   dive into these more advanced commands   that are really going to help you well   fix a broken production now to go back   to our current state which is often   called the head State you simply have to   run get checkout Main and there we go   previous head position was at the hash   of this checkout and now you switch the

  branch to main you can see the same   thing happen right here on the bottom   right or the top left depending where   you're branching is   and if you made any changes while in the   detached head State and you want to   discard them you can do the same thing   get checkout dasf that means force and   then get back to main in this case we're   good we're already on Main and that's it   you already know more about G than most   developers do of course we'll dive   deeper into advanced use cases and tips   and tricks soon but now let's talk about   GitHub and how it differs from git git   is a tool you use to track changes   whereas GitHub is a cloud platform that   allows you to store your git   repositories online and collaborate with   others to push your local project to   GitHub you'll need to link your   repository to a remote but what's a   remote well there are two types of   repositories local repository is a   version of a project that exists on your

  own machine laptop or whatever else you   use where you do your developer work   when you initialize a repo using get in   it you create a local repo in your   folder changes you make there are   private until you push them to a remote   repository so a remote repo is a version   of a project stored on a server like   GitHub gitlab or bid bucket it's used to   share code between collaborators and   keep project versions in sync across   different users computers when   collaborating with a team you'll have   two kinds of repost everyone in the team   will have a local repository on their   machine and there will also be this one   common remote repo from which everyone   will sync their local repository   versions now head over to github.com and   create an account if you don't already   have one once you're in press the little   plus icon on the top right and select   new repository enter a repository name

  such as mastering git choose whether you   want to make it public or private leave   the add readme file checkbox   unticked and click create   repository this is a remote repository   here you can see your repository's   origin copy it when you clone a   repository from GitHub git automatically   names the remote repository as origin by   default it's basically an alias for the   remote repositories URL now our goal is   to link our local repository to the   remote origin if you haven't yet   switched the default Master Branch name   to main you can do that by running git   Branch DM Main and this will change the   branch name to main which is a standard   practice nowadays and now we are ready   to link our local repo to a remote   origin you have to run a command get   remote add origin and then you have to   paste the link to the origin that you

  just copied and press enter and a good   thing to know is that you can have   multiple remote repositories you just   have to rearend the command and change   the origin name to something else of   course that's the name of your choice   and then you can also update the new URL   but in most cases you'll be fine with   just one remote repo finally to push   your local commits to GitHub use git   push Das origin Main and remember we   used origin here to refer to the remote   repository instead of typing the full   URL so press enter and there we go this   worked if anything with Git goes wrong   typically it goes wrong at this point   when you're trying to push to a remote   repo so if you don't see what I'm seeing   right here and instead you got some   error typically all of these errors are   very easily resolvable I would just   recommend copying the error message

  pasting it in Google and then fixing it   right there and then but in this case   we're good and now if you go back to   your GitHub repository and reload boom   your code is now online for the world or   your team to see and okay okay you might   have already known this for some of you   that's about as far as you've gone with   Git create a repo push your changes and   call it a day but git has so much more   to offer especially when you're working   within a team so now let's take things   up a notch and dive into branching and   merging this is where get truly shines   branches in git allow you to create   different versions of your project like   making a copy of a project at a specific   moment in   time whatever changes you make in this   copied version won't affect the original   the main project or Branch stays

  untouched while you experiment modify or   add new features in the copied Branch if   everything works out you can later merge   your changes back into the original   project if not no no worries the   original remains safe and unchanged when   working in a team using separate   branches for different features or bug   fixes is essential it allows you and   your team to work independently on   different parts of the code without   causing conflicts or errors ensuring   everyone can focus on their own tasks at   the start you'll have one default branch   called main to create a new Branch run G   branch and then type A Branch   name this will create a new branch and   if you want to switch to this newly   created Branch then run get checkout and   then enter the branch name you want to   check out to and there we go switch to   Branch Branch name now if you want to go

  back to main just run get checkout main   there we go and here's a little Pro tip   there is a shortcut to create a new   branch and immediately move to it to do   that run git checkout with a dasb flag   and then enter a branch name such as   feature branch of course this Branch   name and feature Branch are just dummy   names make sure your branch name is   short and explains which changes will   you be making on that Branch for more   tips on how to properly name your   branches you can download the git   reference guide so let's create and move   to this feature branch in one command   there we go and what I'm about to say   now next is very important so keep it in   mind when you create a new Branch it'll   be based on the branch you're currently   on so if you're on the main branch and   run the command the new Branch will   contain the code from the main branch at

  that point in time however if you're in   a different branch with different code   the new Branch will inherit that code   instead so to ensure you're creating the   new Branch from the correct starting   point you you should either first switch   to the branch you want to base the new   one on or run this command get Branch   then you can enter a new Branch   name and then the next thing can be the   source Branch so if you do it this way   and replace the new Branch name and the   source Branch with the names of actual   branches then it'll create a new Branch   from another specific Branch so if you   run this command you can directly create   and switch to a Branch based on any   other Branch without needing to check   out to it first for now I'll remove that   and let's say that we want to go into   our code and implement this feature   we're working on let's say that in our   case the only feature we want to do is

  to modify the read me so below hello G   I'll say I'm adding this from feature   Das Branch there we go feature   implemented if only it was this easy and   you can see that our IDE in immediately   highlighted this read me file in blue   indicating that it has some changes now   we need to add it commit it and push it   this time instead of saying git add   readme MD let's just use the git add dot   which is a command that you'll use much   more often next we need to commit the   changes with Git commit dasm and then we   have to add a commit message so this is   the perfect time to learn how to write a   proper commit message a quality commit   message is written in the imperative   mood a grammatical mood that sounds like   you're giving a   command like improve mobile   responsiveness or add AB testing when

  writing your commit message make it   answer this question if apply to the   codebase this commit will and then fill   in the blank like this commit will   upgrade the packages or this commit will   fix thread   location and why do we do this well   because it answers the question what   will happen when I merge the branch   containing this commit it will add AB   testing for example be direct and   eliminate filler words for example let's   use modify read me in this case it's   short sweet and in an imperative mood   and press enter there we go we've just   made get aware of our commit now that   you know how to write better commits   let's take a moment and check out our   remote repository what do you think will   it have the latest commit we made Let's   reload it and it's the same it doesn't

  contain our newly created feature branch   do you know why it's because the changes   we made are in the local repository   which has not yet been synced with the   remote repo to see those changes first   you'll have to publish your local branch   and you can do that using the git push   -- set- Upstream   origin and then the name of the branch   in this case feature Dash branch and   press   enter there we go an upstream branch is   a remote branch that your local branch   tracks when you set an upstream Branch   using set Upstream you're essentially   linking your local branch to a branch on   a remote repo through this command you   push a local feature Branch to the or   origin remote repository and then you   set the Upstream Branch for your local   feature Branch to track origin feature

  Branch alternatively you can also use   git push dasu origin feature Das Branch   or the name of your branch of course   both set Upstream and- you establish a   tracking relationship between your local   branch and the remote Branch this way in   the future if you want to push something   from your local branch to your remote   Branch you simply have to run get push   that's it at this moment for us   everything is up toate but as you make   future changes you don't have to rerun   set upstream or dasu you only have to   add it commit it and push it that's it   and if somebody else made changes to   your remote Branch either directly or by   merging some other changes into it you   have to make your local branch up toate   with the remote branch and you do that   by using the git pool command there we   go it's already up to date in this case

  this command fetches changes from the   remote repo and merges them into your   local repo for that Branch there are   also two more advanced and highly   practical commands that help you move   changes between your remote and local   repos and I'll explain those in detail   later on so keep watching now if you go   back to GitHub check this out feature   Branch had recent pushes a few minutes   ago and if you go to   branches you can see your feature Branch   right here so if you click on it you can   see the state of your code base on that   branch and you can see the modify read   me commit that we   made but back on the main branch it   hasn't been modified it simply says   hello get still so once you have made   all of the changes for this branch and   implemented the feature you wanted to   add and tested it you'll want to merge   it back into the main branch to do that   you must open up a pull request a pull

  request lets you share your changes with   your team for review and feedback once   approved and merged your changes become   a part of the main branch keeping the   codebase stable and organized to open up   a PLL request you can click this button   right here compare and pull request or   you can click this pull request tab   right here select new P request request   select the branch you want to merge from   such as the feature branch and then the   branch you want to merge to here you can   see all the changes you implemented in   this case we have added one line of text   if the changes look good you can click   create P request if needed modify the   title and describe what your PR will do   in more detail and then select create   one final time there we go now your team   lead or senior Dev can review your PR   and give you feedback and if everything   looks good and there are no merge   conflicts they can merge it in this case

  reload the browser and let's merge it   ourselves yes we're sure confirm merge   this is where the magic happens your   feature will now seamlessly get merged   into the main branch easy right so if we   go back to code you can see that we're   now on the main branch and we can see   the change from the future Branch so why   does it still say that we have two   branches well no worries once you merge   a PR from a specific Branch GitHub and   git still leave it here for you but they   tell you that you're one commit behind   Main and zero commits ahead which means   that everything this Branch was supposed   to do in this single commit has been   done and it has no additional code that   you might want to merge so it's safe to   say that we can delete it now if you go   back to code you can see that there is   only one branch that's the main branch   and and it contains the newly merged   changes easy right this is how teams   collaborate without breaking each

  other's code by doing this GitHub is   essentially executing a git operation in   the background a command that you can do   on your own by running git merge and   then choose a branch that you want to   merge but I typically prefer doing this   using github's BRS now if we switch back   to our local repo and navigate to the   main branch do you think we'll be able   to see the changes we just merged   well let's try do you remember the   command to switch back to main well it's   get   checkout and then   main there we go we switch to Main and   it says it's up to date with origin main   so if we had to read me wait this   doesn't look good it doesn't contain   this new line that we added right here   and that's because the merged happened   on the remote repository which makes   sense right so how do we bring those   changes into our local repo simple we   need to pull them into this Branch by

  running get   pull there we go it pulled changes from   a remote repo and we can see them right   here in our local one the command we   just ran get pull is just a shorthand   for git pool origin main but by default   GitHub pools from the remote origin from   the same Branch you're currently on so   just get pool is fine so let's repeat   things here is the typical workflow   you'll follow most of the time first   clone the repo second create a new   Branch from the main or another Branch   third make your changes fourth push the   branch to the remote repository sixth   open up a pull request seventh merge the   changes eighth pull the merge changes   into your local main branch and then   repeat from step two you can also find   these steps alongside some additional   explanations within the GID reference   guide so great job learning about

  branching I hope this was intuitive but   next we'll focus on a scary topic which   is resolving merge conflicts something   that not a lot of people teach you but   you and I will dive deep into it   sometimes when two or more developers   edit the same lines of code git gets   confused this is called a merge conflict   when this happens G will ask you to   manually choose which or whose changes   to   keep but why don't the merge conflicts   happen when you're working on your   project alone a merge conflict is a   situation where git is uncertain about   which part to merge but why would get be   unsure to show you what I mean in   practice let me create two branches   first I'll create a branch called Dev   JSM so let me run git Branch Dev D JSM   and PR press enter this will only create

  a branch but not switch to   it now let's immediately create and   switch to another Branch we can do that   with a git checkout dasb and then the   branch name command I'll call this one   Dev Adrien and you can of course use   your own name and press enter now I'll   make some changes to the codebase from   the dev Adrien Branch specifically I'll   go to read me and I'll change hello git   to   welcome to git I'll also add another   line and say this is coming from Dev   Adrien like this now let's add the   modified file to git by using git add   dot we can write a meaningful commit   message by doing git commit DM and let's   try to be descriptive of what we did   it's always easier to track the changes   that way so I'll say modify read me by   changing

  The Heading and adding a new line press   enter and at this point everything is   looking good but the branch is of course   not yet visible on GitHub since it only   exists on our local system to publish   the branch to the remote run git push   dasu origin and then the name of the   branch Dev Adrien and press enter the U   says the branch is an upstream branch   and the origin as you know is the name   of the remote repo if you go back to to   GitHub you can see that Dev Adrian has   recent changes so let's open up a port   request there we go modify read me by   changing the heading and adding a new   line and create a new P request great   the P request is there now for just a   second imagine you're not yourself you   are your friend so let's actually move   to your friend's Branch by running git   checkout and we called it Dev

  JSM remember this Branch was created off   of the main branch at the time when   other you didn't yet add those   additional changes so let's say that   your friend also wants to modify the   read me instead of saying hello git   they're going to say something like heyo   everyone welcome to my git guide and   they'll add an additional line and say   yo Johnny here and they're going to   commit their changes by running git ad   Dot get commit dasm and of course they   don't know how to write quality commit   messages as you do so they're going to   write something like today I woke up and   drank some coffee then I sat at the   table and added a few lines of code   super long but doesn't really tell us   anything right of course we have to push   that Branch by running git push dasu

  origin de- JSM or whatever name of the   branch you ch chose and now our friend   is going to come to GitHub and they'll   want to open up their pquest so let's do   that right away their title is so   descriptive it doesn't even fit in one   line and now we have two PRS currently   opened and even though you opened up   your PR first life sometimes isn't fair   so let's say that whoever is supposed to   review this PR just didn't want to even   see the code that this guy wrote so they   immediately merged it the key takeaway   here is that they merged it before yours   got merged that's great for them but now   if you go to your PR and try to merge it   you'll see something like this this   branch has conflicts that must be   resolved merging is blocked now it is   highly likely that whoever is reviewing   this won't even start reviewing it until   you resolve the conflicts so they'll

  most likely write something like Adrien   please fix these merge conflicts so what   just happened why do you have a merge   conflict and most importantly how can   you resolve it the merge conflict   happened because both Dev Adrien and Dev   JSM made changes to the same file   specifically to the same line in the   same readme.

md file when the reviewer   approved and merged the dev JSM Branch   it created a new commit that made   changes to the same line of code that   Dev Adrien has already modified   therefore when you try try to merge your   branch with the main branch git could   not automatically resolve the conflict   and required you to resolve it manually   in other words git was just not sure   which version of the code to merge since   two different versions existed on two   different branches when git encounters   such a conflict it expects you as the   user to resolve the differences and   decide which version to keep and then   manually update the code to reflect the   changes made in both branches this is a   typical scenario that happens when both   you and your teammate are working on the   same code simultanously on the same code   at the same time resulting in   modifications to the same line of code

  and finally causing a merge conflict it   is something that no matter how much you   try to avoid it always happens so you're   likely to encounter those merge   conflicts from time to time so how can   you resolve them well there is a   standard process that you need to follow   with enough practice it'll become second   nature here is what you have to do first   check out to the main branch by running   git   checkout main next pull the latest   changes from the remote main branch or   in other words the changes that your   friend got merged Before You by running   git pool there we go we can see his   stupid comments right here now your   local main branch and remote main branch   are identical so you can safely check   out to your own Branch get checkout Dev   Adrien stop here and let me ask you a   question when you created a p request   which branch were you attempting to   merge the changes into well of course

  the main branch so what are we trying to   accomplish here if you're not sure let   me show it to you in action run the   command git merge main that's correct   you have just merged the main branch   into your branch although the initial   objective was opposite it was to merge   your branch into the main branch but   that process didn't work due to the   merge conflict so we first must resolve   the issue and to do that we are merging   the main branch into our Branch to   identify the problem the command we just   used get merge and then the branch name   is used to merge that Branch name that   you specified right here such as Main in   our case into the branch we're currently   on and now that you've run this command   you can see see that there merge   conflicts in readme.md   automatic merge failed fix conflicts and   then commit the results most code   editors have some kind of a versioning

  system right here on the left   sidebar by pressing command zero I can   open up web storms one here you'll be   able to see a list of all merage   conflicts in this case we have only one   and it is in the readme.md file let me   show you how to read it arrows pointing   to the left side that say head refer to   the changes coming from your   branch and arrows pointing to the right   side that say main refers to the changes   coming from the main branch due to the   merge command that you executed to   resolve them you can manually choose   what you want to keep or remove by   removing those lines and clearing up the   code that you don't want there but the   usual way is to click the resolve button   on webstorm it looks like this but the   options should be similar across all   code editors typically you have three   options   you can choose whether you want to   accept your code whether you want to   accept their code or whether you want to   do something in between of course   wouldn't life be so simple if you could

  just choose one of those two options but   typically that's not what you want to do   in most cases you'll want to keep some   of your code and some of their code so   we'll have to go with the third option   this interface will differ depending on   the code editor you're using sometimes   it might be in line so you see the red   and green lines there irly within a   single file but I very much like the way   in which webst is doing this on the left   side we can see our changes on the right   side we can see their changes and in the   middle we can see the result so you can   just choose which one you want to merge   in this case they wrote something that's   not so useful so we want to keep ours   and now that gets transferred over to   the middle one welcome to get but let's   say that this code is an important   implementation of some feature within   the their a branch of course in this   case it's just a line of text but I   think you can imagine how Johnny can   really write something useful so let's   say that we also need to merge this and

  at the same time we have also added an   important feature from our own Branch so   we can add it right here as well so the   final result will look something like   this modified heading Johnny's feature   your feature and then the feature that   was previously there let's remove this   stop change from Johnny because we   preferred ours better   all changes have been finished and we   can click apply and there we go here is   our new readme file containing both   Johnny's changes and our changes without   conflicts now let's open up the terminal   run G add dot to add our newly modified   file say git commit DM resolve merge   conflicts and run git push you already   know the drill right now return to   GitHub and check the pr if you scroll   down you'll see that there's no more   merge conflicts because they've been   resolved by a resolve merge conflict

  commit now it would make sense to tag   your reviewer and say something like   merge   conflicts resolved please check then   they'll be able to go through a code   base request some changes if necessary   and finally merge your pull requests to   the main branch now if you go back to   the code you can see that there's here's   a new commit to the read me 3 minutes   ago and our heading has now been cleaned   up it doesn't include Johnny's nonsense   anymore but it does include their   features it includes your features and   it includes features previously added to   main amazing work now you know how to   resolve merge conflicts one of the   scariest things to do as a developer and   I Know It All looks intimidating at   first but with enough practice it'll   become second nature trust me so far   you've learned the basics and some   intermediate git skills that you'll use   in your day-to-day work but let's be

  honest sometimes things can go wrong and   you mistakenly break production that's   when git becomes your best friend only   if you know how to use it to its full   potential of course and this is where   what I call git savior commands come in   handy these commands let you manage   changes undo mistakes and tweak your   commit history think of them as your   backup plan when things get messy you   already tried and tested one such   command which allows you to check out to   a past commit do you know which one is   it yeah it's GI checkout and then a   commit hash but as I've told you that   command doesn't discard or delete   anything it's just a way to view the   history of specific commits there might   be the case where you want to check out   to a particular commit and then delete   everything that comes after it it that's   the job for get reset imagine you want   to remove some commits and revert to a

  previous commit with the possibility of   choosing whether you want to keep or   discard the changes in the working   directory that's a bit hard to   understand right so let me say that   again suppose you made 10 commits and   want to check out the third commit in   history you want to delete all commits   after the third like fourth fifth 6th   10th and so on maybe you even wrote some   bad code in those commits and to keep   things simple you want to remove these   bad commits but still want to keep the   changes that you implemented I hope that   makes sense so delete these commits but   keep all the changes you made from the   fourth to the 10th Commit This is where   we use git reset it allows us to remove   the traces of commits in history but   gives us the changes we made in those 2B   discarded commits so we can decide what   to do we can keep those changes form a   better commit out of them or delete them

  entirely it's up to you let me quickly   add a consal log to this hello.js file   on top of the first one I'll add another   one that says something like consol log   hello GitHub there we go now we have two   then make a commit by running git add   dot get commit DM add GitHub conso   log to hello.

js s next to properly   illustrate how we'll use git reset I'll   add one more conso log this conso log   will say something like hello from and   then put the name of your branch Dev   Adrian in my case since we haven't   switched from before we're still in this   branch and I also want to commit this   imagine this is a bigger feature that   you implemented so I'll run git add dot   git commit dasm and we'll say something   something like add hello console.

log to   hello.js and committed now you committed   you stand up from your desk go for a   walk or go about your day then you come   back and then you start focusing on some   additional functionalities within the   same Branch let's say that additional   functionality is a another console log   but this time this console log will   actually break things so we can say this   is bad code okay and now we can do   another commit of course without knowing   that this commit breaks the code so we   can say get add dotg commit DM and we   can say add another console log now if   you run get log you'll see many commits   keep in mind that git log here includes   all commits that have happened before as   well everything from the latest console   logs to previous ones to resolving our   merge conflicts even John's changes

  right here there's a lot of stuff that's   here everything from when we first   started working on this project now   before I tell you how to remove this bad   code using git reset you must understand   that there are a couple of different   ways to run the git reset command soft   reset simply moves the specified commit   in history but keeps changes staged in a   working directory that means that   whatever changes were made after that   commit will be in stage mode and Stage   changes are those that we add to G   tracking system by running the G ad.   command so before running that they're   untracked and then once you run git add   then you can consider those changes   tracked or staged so if you want to do   that you can run git reset D- soft and   then add a commit hash the second way to   use git reset is called a mixed reset   and for that one you don't have to pass

  any flag as it's the default one mixed   reset moves to the specified commit in   history unstaged the changes and keeps   them in the working directory thus all   changes made after the specified commit   will be in your working directory but   they won't be staged you have to   manually stage them if you want to by   using get add Dot and finally there's a   hard reset it moves to the specified   commit in history and discards all   changes in the working directory and   staging area all those changes made   after the selected commit will be   discarded entirely and you won't see any   Trace you can run that command by   running get   reset Das Dash hard and then add a   commit hash now let's actually go with   the mix res set by copying one of the   commit hashes from here but which one do   we want to copy we can scroll to the top   to see the newest ones and we have this   add another conso log which we know

  breaks her code so we want to avoid this   so instead we can go all the way to add   GitHub console lock to hello.js so let   me copy this commit hash and press Q to   exit get   log next we can run get reset and then   paste this commit hash and press enter   unstated changes after reset hello JS so   take a quick look at the file explorer   you'll see that the hello.

js file is   blue which means that we have some   changes in that file and if you pay   attention to this green line here this   means that these are the two additional   changes which are currently unstaged so   let me put that in other words the   changes for the two commits that we have   added are right now here and are   unstaged and we can verify that by   running git log and you can see that   there are no additional commits after   the add GitHub console log there's no   add hello Dev Adrian and there's no add   bat code we can exit that for a second   and we can also run get status and   you'll see that hello JS has been   modified and specifically it has been   modified with the file changes that came   from the two commits that we have reset   so now it's completely up to you whether   you want to keep those changes modify   them and then again stage and commit   them in this case I will simply remove   them from the code like they never

  happened and we can go to get log and   see that there's no more add buggy code   or ADD conso log and see that those two   additional commits happening after the   GitHub conso log are completely gone all   of your mistakes completely deleted I   hope this makes sense so you can take a   moment and try the other two variations   of the git reset on your own and see how   they differ once you do that we can move   to the next Advanced git command git   revert let's say you've deployed a   feature that broke production and you   want to undo its effects without losing   the commit history you want the locks to   be there   but you want to revert to an old Commit   This is the exact situation where you   want to use get revert it's ideal when   you have nothing to hide and you want to   maintain a clear record of changes that   you did it's almost the opposite of   reset let me show you how it works I'll   add another console log that says

  something like trying out revert okay   and I will commit it by running git   commit DM add revert console log oops I   forgot to do a get ad before that my   mistake let me do get ad Dot and I'll   use the up Arrow two times to get back   to the previous command and commit it   now let's say you want to revert to the   previous version of your codebase that   didn't contain this conso log but you   want to keep it in the   logs you can run get log you can find   the commit hash of the previous commit   without containing the revert conso log   copy it   and then run get   revert paste the commit hash and then we   get something that looks like this which   is somewhat familiar to us it's like a   mini merge conflict it's trying to   figure out what we want to keep and what   we want to remove in this case I'll   manually remove lines of code that we

  don't need so we don't need these ones   and we don't need the trang out revert   because we want to abort or revert that   one you can save it and once you save it   we want to add those changes to staging   by saying get add Dot and then you can   run get revert continue and this command   will successfully finalize the revert as   you can see we're getting there this   message is saying that we will revert   this commit but we just need to provide   it a commit message or we can exit this   window by pressing colon QA and then   exclamation mark and then press enter   there we go so one file has changed   there's there's one insertion and two   deletions and we are back to where we   were similar to get reset right but now   if you check out get log you can see   that a new commit revert add GitHub   conson log to hello has been added to

  our G history as I said similar to reset   but depends whether you want to hide   your tracks or you want to show   everybody that you messed up and you   fixed it later on both have their own   use cases now let me show you g stack   another Super useful git command let's   say you're in the middle of developing a   feature but an urgent bug caused by your   teammate comes up and your boss wants   you to work on it first you haven't   finished your feature and it's not ready   to commit yet but you still have to keep   your active changes somewhere so you can   get back to them later on and you can   start working with this bug soon and   that's exactly what get stash does it   lets you temporarily save your   uncommitted changes both staged and un   staged without actually committing them   let's say that I am in the process of   implementing an important feature and   then I have multiple lines of code which   I don't want to lose that's going to

  look something like   this you can also write some of your own   very important code here so now how do   we save this code so we can use it later   on so we can focus on something else for   the time being it's super useful you   just run get stash as you can see your   important code is now completely gone   and we got a message here saying that   saved working directory on dev Adrien so   now you can go ahead and implement this   urgent fix that your boss requested you   to do you can then run get add get   commit and say save the day of course   this is not a realistic commit message   but in this case since you implemented   the Urgent Fix You indeed did save the   day and you can even push that code if   you want to so I can run get push great   the day is saved but now you want to get   back to implementing that other feature   you were working on before your day was   ruined by a bug to get our code back

  simply run get stash apply and then   enter a stash name but how do we get to   a stash name you can run a command get   stash list to see a list of all stashes   currently we have stash at curly braces   zero so let's do just that get stash   apply stash at curly braces zero and   press enter and you can see that our   code got back right here since the   implemented fix was on similar lines as   our existing code we have yet another   merge conflict but by now you should be   an expert in resolving those so simply   remove the lines around it and keep both   the Urgent fix and and your work in   progress and that's it the day is saved   and you can continue working on your   feature I don't want this to happen but   I'm sure that someday soon you'll   encounter an issue in your code that   requires you to use one of these three

  very handy git commands G stash will   definitely be the first one so when the   time comes you'll know how to use it   great work although commands like get   add commit push merge checkout stash and   others may seem hard to remember even   though they're simple once you get a   hang of them there is an alternative   method as developers we always discover   more efficient techniques for   accomplishing repetitive tasks so let me   introduce you to a completely different   approach for executing these git   commands before I teach you these very   powerful techniques do remember that it   is still super important to understand   the behind the scenes of how these   commands work and that's what you've   learned so far which makes you ready to   utilize the power and simplicity of this   new approach I'm referring to using git   through a GUI a graphical user interface   it doesn't require memorizing commands

  but instead offers a more Visual and   userfriendly approach to Version Control   allowing you to execute G commands   through simple buttons panels and menus   many editors and IDE offer G integration   through   agui but their functionality it is   limited compared to web Storm's features   so I highly recommend downloading   webstorm it's free and packed with   powerful git Integrations but if you're   prefering not to no worries you can   still follow along with the video and   check if your editor supports some of   the features that I'll be showing in   webstorm we can start from scratch by   creating a completely new folder and   create a new readme.md file within   it there we can say something like T   testing git through a GUI a graphical   user interface first things first let's   turn this folder into a git tracked   repository on the top left or the bottom

  right you can click Version Control and   then create a git repository open up the   current   folder and immediately this folder will   be turned into a git repository this is   the same as running the git init command   and immediately you you can see that   right now you're in the main branch I   actually prefer having this on the   bottom right so I'll press command shift   B then I'll search for toolbar and I'll   hide it if you hide the toolbar then its   details will appear at the bottom right   so right now you can see all of the   branch details here now that we have   initialized the get repo let me show you   how we can commit using a GUI you can go   to the bottom right corner and then   simply click commit it'll immediately   lead you to the this menu showing you   all the unversioned files you can select   all of them and then add a commit   message I'll say initialize the   repo and I will commit the

  changes it is as simple as that now if   you click on the main branch once again   you'll see that you also have the   possibility to create a new Branch so   let me show you how to do that you just   press new branch and enter a branch name   let's do something something like new   Dash   branch and it even asks you whether you   want to check out to it immediately for   now I'll untick that and click   create so since we haven't moved to it   immediately how can we move to that   Branch now well you can see this little   popup telling us that a branch New   Branch was created so we can click here   and here you can see the new Branch but   an even easier way to switch to it is to   click at the bottom right or the top   left and then simply select the branch   you want to move to and click check out   and that's it you are on your newly   created Branch I love how webstorm   conveniently organizes these branches

  into recent local and later on will even   have remote so you always know at which   versions of your branches you're working   on but of course that begs the question   how can we push these branches to remote   we usually use the command get push dasu   origin and then the branch name but with   webstorm you can do it in a single click   just click   push click Define remote and you'll have   to enter the URL of your remote origin   to get it I'll create a new repo and   I'll call it webstorm undor   git and click create   repository and I'll simply copy the URL   back in the code I'll paste it click   okay and click push check this out all   of your code has been pushed to the new   branch and now a new origin New Branch   also exists and it even asks you whether

  you want to immediately create a p   request I won't do that yet first I want   to teach you how we can add a few more   commits to our read me so I'll add a new   line and then simply say commit one then   you can either go to this commit icon on   the left side and then select it and   then mod if the commit message and   simply press   commit or let's add another one commit   to you can also go to the bottom right   and simply click commit there which is   going to lead you here and you can add a   commit too this time let's check out the   second option which allows you to   immediately commit and   push it's going to ask you to which   branch you want to push in this case we   want to push it to the new Branch so   let's simply click push and and in a   matter of seconds all of those commits   are right there of course if you   committed some changes earlier like I

  will do in this case commit three add it   and then add commit three and then later   on you want to push them you can go to   the bottom right select push from here   and repeat the same steps it is super   convenient now what about pulling some   changes let's say that somebody else   comes to your repo and inserts an   additional message like a commit 4 right   here and updates the readme how would   you get access to that change directly   within your repo well typically you   would have to run git   pool but by using webstorm you can just   go here and press update project it's   going to ask you whether you want to   merge incoming changes into the current   Branch or whether you want to rebase   which will rewrite the commit history by   rebasing your current Branch onto   another Branch effectively moving it to   a new commit in this case we don't need   to rebase we'll just merge it into our   current Branch so just press okay and in

  a matter of seconds the commit forward   that another person pushed is right here   within our local repository what about   viewing history well let me show you   something really cool look for the git   icon at the bottom   left this one here if you click it and   expand it you'll see a ton of different   git functionalities you can see the   exact changes that were made in in this   repo who created them and when all   within this Nic looking graphical user   interface and within here you can do   everything and more that you can do with   typical get commands all by choosing one   option from a menu that is in English no   obscure commands if I open up the repo   for JS mastery. Pro platform it is super   convenient seeing exactly what is   happening within our projects we can see   what changes were made who made them   when and whether the tests have passed   check this out you can even see the   merges that were happening this makes it

  super easy to go back to previous   versions of your code base if needed in   addition to this if you press here and   then you press console you can see all   the commands that webstorm is running   for you of course you know some of these   base ones but some of these more complex   one well it's going to be easier to do   it using a GUI now how can we use   webstorm to merge one branch into   another   typically we would have to create it and   then run G merge command to merge it   into another branch in this case select   a main branch and press this Arrow right   here it's going to allow you to merge   main into New Branch or vice versa   similarly if you click the arrow on this   Branch you can easily create a new   Branch from this   Branch or you can updated in this case   let's go to Main and let's merge main   into the new branch in in this case it   says it's already up to date so we're

  good but what about pull requests one of   web Storm's coolest features is that it   allows you to do all sorts of tasks   directly within the IDE you don't need   to use GitHub desktop or even GitHub to   perform different actions everything you   need is right there so let's talk about   creating a pull request on the left side   you can find a p requests tab for you it   might be a bit of a different icon in   this case it's a GitHub icon for me   within here you can do everything PR   related so let's open up a new P request   in this case we want to merge the new   Branch into the main branch but before   we do that we have to first create a   remote origin version of the main branch   so let's do that first I'll head over to   main by checking out to it and I'll   simply push it push to origin main it is   as simple as that we can immediately now   use this create p request feature to

  move us to this pool request menu we   want to merge from Branch New Branch or   you can choose origin New Branch to   origin main exactly what we wanted to do   you can add a title of this for request   such as Implement for commits because   that's what we added into the readme   description is not needed and directly   from here you can add reviewers assignes   and labels in this case I'll just click   create for request   and there we go it is right here if you   go to GitHub and click P requests you   can see the new pull request indeed has   been opened the next cool thing is that   you can see exactly the changes that   were implemented for each specific   commit so if you go here you can see   that first at some time they added a   commit one then later on they added   commit two and so on but now we're   interested in all commits so now you can   review the changes that were made for   each file separately

  first we want to dive into the readme.md   file so rightclick it and then it'll   open up a diff a diff or a difference   refers to the changes of a specific file   on two sides of the coin or should I say   on two different branches one is the   branch that we're trying to merge and   the other one is the branch we're trying   to merge the changes to you can view   those things either split like this or   unified in a single editor and based on   the green or red color you can see the   changes that were made in this case I'm   happy with the changes and I'll click   submit and if you're a reviewer you can   immediately add a review directly within   webstorm you don't have to go to GitHub   just by pressing a plus here you can add   a comment something like fix this line   and you can even start a   review there we go finally you can   submit your pull request review and you   can add one final comment looks good to

  me great finally if everything looks   good you can press the three dots next   to the request review button and then   say merge review   merge merge pool request one it'll   Implement four commits that's the title   of the pool request and we can say merge   believe it or not this is it so now on   Main you can simply update the   project and all of these commits will   come directly to your code base   I mean just how convenient and intuitive   and efficient this is at start you might   feel like you are kind of cheating the   system or that you're a bit of a less of   a developer by using this help that   webstorm   provides but don't feel that way any   tool that can make you more efficient is   welcome and what matters is that you   understand what webstorm is doing behind   the scenes and you do because you came   to this point of the video I think that

  in just a couple of minutes I've showed   you all of the primary functionalities   that before using the terminal I spent   more than an hour to explain and we've   accomplished all of that in more in just   a few minutes but there are so many more   things that you can do with webstorm one   of these things is a fetch if you see   this icon on top right you can just   click it and it'll fetch all the latest   changes another thing is how easily you   can delete branches we no longer need   this one since we merged the changes so   you can just press delete there we go   that was it you can also compare   different branches Mark branches as   favorite or even cherry pick from a   specific commit if I go right here to   get at the bottom left and go back to   log we can see all of these different   commits that I added cherry picking is a   very Advanced technique but in webstorm   it is as simple as clicking this cherry   pick icon you click it and it'll allow

  you to pick the changes from this commit   you can press merge and then you can see   which changes you want to accept this is   similar to reverting or resetting to a   specific commit but it gives you even   more power to pick and choose which   features you want to keep and which ones   you want to remove you can also rename   different branches or even revert to   specific commits directly from within   this view typically you would have to   get the commit hash figure out what you   want to do here you just press revert   commit and that's about it we cannot do   it now because we have unate changes but   that's also pretty easy to resolve once   you have webstorm you just go here and   you can easily resolve all the conflicts   and then commit and when a technology is   so good that it feels like Magic based   on how many things is it doing for you   and it's doing them well well it almost   feels like magic for us developers so   whichever complicated feature you want   to use you can use it within webstorm

  with ease these were just a few examples   of how we can use the webstorm GUI to   perform many different git operations   without needing to rely on a single git   command and that's only one of the   reasons why I love webstorm while you   can accomplish some of these tasks in   other editors not all of them are   possible as there's a clear difference   between an editor and an IDE right so go   ahead and explore other options try   breaking some things fixing them   reverting resetting cherry picking you   can only get better at something by   trying it out yourself I'll also leave a   reference on how you can use all of   these features within the G reference in   the description of this video but with   that in mind we covered a lot about git   if you're still with me and you have   successfully completed these git actions   with a solid understanding and even   tested them out yourself congratulations   you can confidently add this skill to   your resume LinkedIn profile or anywhere

  you're applying for a Dev rooll and and   don't worry if you're not feeling fully   confident yet or are concerned about   remembering everything git can be tricky   at first but with practice it'll become   second nature especially once you get   used to these graphical user interfaces   but still it's easy to get stuck and   lose your mind about something   especially when you have to pull some   very obscure commands out of your pocket   so for those situations don't forget to   download the cheat sheet in the   description so you can have a handy   reference   whenever you need it in the future and   great job with sticking till the end of   this essential crash course thank you so   much for watching and I'll see you next   time have a wonderful day



---

