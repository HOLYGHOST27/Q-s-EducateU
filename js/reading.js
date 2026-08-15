// js/reading.js

const booksData = {
    "The Foot Book": [
        "Left foot, left foot, right foot, right.",
        "Feet in the morning, feet at night.",
        "Left foot, left foot, left foot, right.",
        "Wet foot, dry foot, high foot, low foot.",
        "Front feet, back feet, red feet, black feet.",
        "Left foot, right foot, feet, feet, feet.",
        "How many, many feet you meet?",
        "Slow feet, quick feet, trick feet, sick feet.",
        "Up feet, down feet, here come clown feet.",
        "Small feet, big feet, here come pig feet.",
        "His feet, her feet, fuzzy fur feet.",
        "In the house, and on the street, how many, many feet you meet?",
        "Up in the air feet, over a chair feet.",
        "More and more feet. Twenty-four feet.",
        "Here come more and more and more feet.",
        "Left foot, right foot, feet, feet, feet.",
        "Oh, how many feet you meet!"
    ],

   "Green Eggs and Ham": [
        "I am Sam. I am Sam. Sam I am.",
        "That Sam-I-am! That Sam-I-am! I do not like that Sam-I-am!",
        "Would you like green eggs and ham?",
        "I do not like them, Sam-I-am.",
        "I do not like green eggs and ham.",
        "Would you like them here or there?",
        "I would not like them here or there.",
        "I would not like them anywhere.",
        "I do not like green eggs and ham.",
        "I do not like them, Sam-I-am.",
        "Would you like them in a house?",
        "Would you like them with a mouse?",
        "I do not like them in a house.",
        "I do not like them with a mouse.",
        "I do not like them here or there.",
        "I do not like them anywhere.",
        "I do not like green eggs and ham.",
        "I do not like them, Sam-I-am.",
        "Would you eat them in a box?",
        "Would you eat them with a fox?",
        "Not in a box. Not with a fox.",
        "Not in a house. Not with a mouse.",
        "I would not eat them here or there.",
        "I would not eat them anywhere.",
        "I would not eat green eggs and ham.",
        "I do not like them, Sam-I-am.",
        "Would you? Could you? In a car?",
        "Eat them! Eat them! Here they are.",
        "I would not, could not, in a car.",
        "You may like them. You will see.",
        "You may like them in a tree!",
        "I would not, could not in a tree.",
        "Not in a car! You let me be.",
        "I do not like them in a box.",
        "I do not like them with a fox.",
        "I do not like them in a house.",
        "I do not like them with a mouse.",
        "I do not like them here or there.",
        "I do not like them anywhere.",
        "I do not like green eggs and ham.",
        "I do not like them, Sam-I-am.",
        "A train! A train! A train! A train!",
        "Could you, would you on a train?",
        "Not on a train! Not in a tree!",
        "Not in a car! Sam! Let me be!",
        "I would not, could not, in a box.",
        "I would not, could not, with a fox.",
        "I will not eat them in a house.",
        "I will not eat them here or there.",
        "I will not eat them anywhere.",
        "I do not eat green eggs and ham.",
        "I do not like them, Sam-I-am.",
        "Say! In the dark? Here in the dark!",
        "Would you, could you, in the dark?",
        "I would not, could not, in the dark.",
        "Would you could you in the rain?",
        "I would not, could not in the rain.",
        "Not in the dark. Not on a train.",
        "Not in a car. Not in a tree.",
        "I do not like them, Sam, you see.",
        "Not in a house. Not in a box.",
        "Not with a mouse. Not with a fox.",
        "I will not eat them here or there.",
        "I do not like them anywhere!",
        "You do not like green eggs and ham?",
        "I do not like them, Sam-I-am.",
        "Could you, would you, with a goat?",
        "I would not, could not with a goat!",
        "Would you, could you, on a boat?",
        "I could not, would not, on a boat.",
        "I will not, will not, with a goat.",
        "I will not eat them in the rain.",
        "Not in the dark! Not in a tree!",
        "Not in a car! You let me be!",
        "I do not like them in a box.",
        "I do not like them with a fox.",
        "I will not eat them in a house.",
        "I do not like them with a mouse.",
        "I do not like them here or there.",
        "I do not like them anywhere!",
        "I do not like green eggs and ham!",
        "I do not like them, Sam-I-am.",
        "You do not like them. So you say.",
        "Try them! Try them! And you may.",
        "Try them and you may, I say.",
        "Sam! If you let me be, I will try them. You will see.",
        "(... and he tries them ...)",
        "Say! I like green eggs and ham!",
        "I do! I like them, Sam-I-am!",
        "And I would eat them in a boat.",
        "And I would eat them with a goat...",
        "And I will eat them, in the rain.",
        "And in the dark. And on a train.",
        "And in a car. And in a tree.",
        "They are so good, so good, you see!",
        "So I will eat them in a box.",
        "And I will eat them with a fox.",
        "And I will eat them in a house.",
        "And I will eat them with a mouse.",
        "And I will eat them here and there.",
        "Say! I will eat them anywhere!",
        "I do so like green eggs and ham!",
        "Thank you! Thank you, Sam I am."
        ],

    "Hot Dog": [
        "Dog is hot. Mom's not. Go play, dog.",
        "Dog is hot. Cat is not. Go, away, dog.",
        "Dog is hot. Pig is not. Oh, no, dog.",
        "Dog is hot. Boy is not. Too slow, dog.",
        "Dog is hot. Sheep are not. Shoo, shoo, dog.",
        "Dog is hot. Skunk is not. P.U., dog.",
        "Dog is hot. Girl is not. Silly dog.",
        "Dog is cool in the pool. Chili dog."
    ],

    "If You Give a Mouse a Cookie": [
        "If you give a mouse a cookie,",
        "he's going to ask for a glass of milk.",
        "When you give him the milk,",
        "he'll probably ask you for a straw.",
        "When he's finished, he'll ask for a napkin,",
        "then he'll want to look in a mirror to make sure he doesn't have a milk mustache.",
        "When he looks into the mirror, he might notice his hair needs a trim,",
        "so he'll probably ask for a pair of nail scissors.",
        "When he's finished giving himself a trim,",
        "he'll want a broom to sweep up.",
        "He'll start sweeping,",
        "he might get carried away and sweep every room in the house,",
        "he may even end up washing all the floors as well.",
        "When he's done, he'll probably want to take a nap.",
        "You'll have to fix up a little box for him with a blanket and a pillow.",
        "He'll crawl in, make himself comfortable, and fluff the pillow a few times.",
        "He'll probably ask you to read him a story,",
        "so you'll read to him from one of your books, and he'll ask to see the pictures.",
        "When he looks at the pictures, he'll get so excited he'll want to draw one of his own.",
        "He'll ask for paper and crayons.",
        "He'll draw a picture.",
        "When the picture is finished,",
        "he'll want to sign his name with a pen,",
        "then he'll want to hang his picture on your refrigerator,",
        "which means he'll need Scotch tape.",
        "He'll hang up his drawing and stand back to look at it.",
        "Looking at the refrigerator will remind him that he's thirsty,",
        "so he'll ask for a glass of milk,",
        "and chances are, if he asks for a glass of milk,",
        "he's going to want a cookie to go with it."
    ],

    "Cat in the Hat": [
        "The sun did not shine. It was too wet to play.",
        "So we sat in the house all that cold, cold, wet day.",
        "I sat there with Sally. We sat there, we two.",
        "And I said, \"How I wish we had something to do!\"",
        "Too wet to go out and too cold to play ball.",
        "So we sat in the house. We did nothing at all.",
        "So all we could do was to sit, sit, sit, sit.",
        "And we did not like it, not one little bit.",
        "Bump! And then something went bump!",
        "How that bump made us jump!",
        "We looked! Then we saw him step in on the mat!",
        "We looked! And we saw him! The Cat in the Hat!",
        "And he said to us, \"Why do you sit there like that?\"",
        "\"I know it is wet and the sun is not sunny, but we can have lots of good fun that is funny.\"",
        "\"I know some good games we could play,\" said the cat.",
        "\"I know some new tricks,\" said the Cat in the Hat.",
        "\"A lot of good tricks. I will show them to you. Your mother will not mind at all if I do.\"",
        "Then Sally and I did not know what to say.",
        "Our mother was out of the house for the day.",
        "But our fish said, \"No, no! Make that cat go away!\"",
        "\"Tell the Cat in the Hat you do not want to play.\"",
        "\"He should not be here. He should not be about. He should not be here when your mother is out!\"",
        "\"Now! Now! Have no fear. Have no fear,\" said the cat.",
        "\"My tricks are not bad,\" said the Cat in the Hat.",
        "\"Why, we can have lots of good fun, if you wish, with a game that I call UP-UP-UP with a fish!\"",
        "\"Put me down!\" said the fish. \"This is no fun at all! Put me down!\" said the fish. \"I do not wish to fall!\"",
        "\"Have no fear,\" said the cat. \"I will not let you fall. I will hold you up high as I stand on a ball!\"",
        "\"With a book on one hand and a cup on my hat! But that is not all I can do,\" said the cat.",
        "\"Look at me! Look at me now!\" said the cat.",
        "\"With a cup and a cake on the top of my hat!\"",
        "\"I can hold up two books! I can hold up the fish! And a little toy ship! And some milk on a dish!\"",
        "\"And look! I can hop up and down on the ball! But that is not all! Oh, no, that is not all!\"",
        "\"Look at me! Look at me! Look at me now! It is fun to have fun, but you have to know how.\"",
        "\"I can hold up the cup and the milk and the cake! I can hold up these books and the fish on a rake!\"",
        "\"I can hold the toy ship and a little toy man! And look! With my tail I can hold a red fan!\"",
        "\"I can fan with the fan as I hop on the ball! But that is not all! Oh, no, that is not all!\"",
        "That is what the cat said... Then he fell on his head!",
        "He came down with a bump from up there on the ball.",
        "And Sally and I, we saw all the things fall!",
        "And our fish came down, too! He fell into a pot!",
        "He said, \"Do I like this? Oh, no, I do not. This is not a good game,\" said our fish as he lit.",
        "\"No, I do not like it, not one little bit!\"",
        "\"Now look what you did!\" said the fish to the cat.",
        "\"Look at this house! Look at this! Look at that!\"",
        "\"You sank our toy ship! Sank it deep in the cake! You shook up our house! And you bent our new rake!\"",
        "\"You should not be here when our mother is not. You get out of this house!\" said the fish in the pot.",
        "\"But I like to be here. Oh, I like it a lot!\" said the Cat in the Hat to the fish in the pot.",
        "\"I will not go away. I do not wish to go! And so,\" said the Cat in the Hat, \"so, so...\"",
        "\"I will show you another good game that I know!\"",
        "And then he ran out. And, then, fast as a fox,",
        "The Cat in the Hat came back in with a box.",
        "A big red wood box. It was shut with a hook.",
        "\"Now look at this trick!\" said the cat. \"Take a look!\"",
        "Then he got up on top with the tip of his hat.",
        "\"I call this game Fun-in-a-Box,\" said the cat.",
        "\"In this box are two things I will show to you now. You will like these two things,\" said the cat with a bow.",
        "\"I will pick up the hook. You will see something new. Two things. And I call them Thing One and Thing Two.\"",
        "\"These things will not bite you. They want to have fun.\"",
        "Then out of the box came Thing Two and Thing One!",
        "And they ran to us fast. They said, \"How do you do? Would you like to shake hands with Thing One and Thing Two?\"",
        "And Sally and I did not know what to do, so we had to shake hands with Thing One and Thing Two.",
        "We shook their two hands... But our fish said, \"No, no!\"",
        "\"Those things should not be in this house! Make them go!\"",
        "\"They should not be here when your mother is not! Put them out! Put them out!\" said the fish in the pot.",
        "\"Have no fear, little fish,\" said the Cat in the Hat.",
        "\"These things are good things.\"` And he gave them a pat.",
        "\"They are tame. Oh, so tame! They have come here to play.",
        "They will give you some fun on this wet, wet, wet day.\"",
        "\"Now, here is a game that they like,\" said the cat.",
        "\"They like to fly kites,\" said the Cat in the Hat.",
        "\"No! Not in the house!\" said the fish in the pot.",
        "\"They should not fly kites in a house! They should not!\"",
        "\"Oh, the things they will bump! Oh, the things they will hit!\"",
        "\"I do not like it! Not one little bit!\"",
        "Then Sally and I saw them run down the hall.",
        "We saw those two things bump their kites on the wall!",
        "Bump! Thump! Thump! Bump! Down the wall in the hall.",
        "Thing Two and Thing One! They ran up! They ran down!",
        "On the string of one kite we saw Mother's new gown!",
        "Her gown with the dots that are pink, white, and red!",
        "And then we saw one kite bump on the head of her bed!",
        "Then those things ran about with big bumps, jumps, and kicks and with hops and big thumps and all kinds of bad tricks.",
        "And I said, \"I do not like the way that they play.",
        "If Mother could see this, oh, what would she say?\"",
        "Then our fish said, \"Look! Look!\" And our fish shook with fear.",
        "\"Your mother is on her way home! Do you hear?\"",
        "\"Oh, what will she do to us? What will she say?\"",
        "\"Oh, she will not like it to find us this way!\"",
        "\"So do something fast!\" said the fish. \"Do you hear?\"",
        "\"I saw her! Your mother! Your mother is near!\"",
        "\"So, as fast as you can, think of something to do!\"",
        "\"You have to get rid of Thing One and Thing Two!\"",
        "So, as fast as I could, I went after my net.",
        "And I said, \"With my net I can get them, I bet.\"",
        "\"I bet, with my net, I can get those things yet!\"",
        "Then I let down my net. It came down with a PLOP!",
        "And I had them at last! Those two things had to stop!",
        "Then I said to the cat, \"Now you do as I say.\"",
        "\"You pack up those things and you take them away!\"",
        "\"Oh, dear!\" said the cat. \"You did not like our game...?\"",
        "\"What a shame! What a shame! What a shame!\"",
        "Then he shut up the things in the box with the hook.",
        "And the cat went away with a sad kind of look.",
        "\"That is good,\" said the fish. \"He has gone away. Yes.\"",
        "\"But your mother will come. She will find this big mess!\"",
        "\"And this mess is so big and so deep and so tall, we cannot pick it up. There is no way at all!\"",
        "And then... Who was back in the house? Why, the cat!",
        "\"Have no fear of this mess,\" said the Cat in the Hat.",
        "\"I always pick up all my play things and so...\"",
        "\"I will show you another good trick that I know!\"",
        "Then we saw him pick up all the things that were down!",
        "He picked up the cake, and the rake, and the gown,",
        "And the milk, and the strings, and the books, and the dish,",
        "And the fan, and the cup, and the ship, and the fish!",
        "And he put them away. And then he was gone...",
        "With a tip of his hat.",
        "And then our mother came in and she said to us two,",
        "\"Did you have any fun? Tell me. What did you do?\"",
        "And Sally and I did not know what to say.",
        "Should we tell her the things that went on there that day?",
        "Should we tell her about it? Now, what should we do?",
        "Well... What would you do if your mother asked you?"
    ],

    "Hop on Pop": [
        "Up. Pup. Pop is up.",
        "Cup. Pup. In cup. Pup on cup.",
        "Mouse. House. Mouse on house. House. Mouse. House on mouse.",
        "All. Tall. We all are tall.",
        "All. Small. We all are small.",
        "Ball. We all play ball.",
        "Wall. Up on a wall.",
        "Fall off the wall.",
        "Day. Play. We play all day.",
        "Night. Fight. We fight all night.",
        "He. Me. He is after me.",
        "Him. Jim. Jim is after him.",
        "See. Bee. C-A-B. C-B-three.",
        "Now we see three.",
        "Tree. Fish in a tree.",
        "Fish in a tree? How can that be?",
        "Red. Red. They call me red.",
        "Bed. I am in bed.",
        "Red, Ned, Ted, and Ed in bed.",
        "Pat. They call him Pat.",
        "Sat. Pat sat on hat.",
        "Cat. Sat on cat.",
        "Bat. Pat sat on bat.",
        "No. No. Pat. No. Don't sit on that.",
        "Sad. Dad. Bad. Had.",
        "Dad is sad. Very, very sad. He had a bad day. What a day Dad had!",
        "Thing. Thing. What is that thing?",
        "Sing. That thing can sing.",
        "Song. Long. A long, long song.",
        "Goodbye, thing. You sing too long.",
        "Walk. Walk. We like to walk.",
        "Walk. Talk. We like to talk.",
        "Hop. We like to hop. We like to hop on top of Pop.",
        "STOP! You must not hop on Pop!",
        "Mr. Brown. Mrs. Brown.",
        "Mr. Brown upside down.",
        "Pup up. Brown down.",
        "Pup is down. Where is Brown?",
        "Where is Brown? There is Brown.",
        "Mr. Brown is out of town.",
        "Back. Black. Brown came back.",
        "Brown came back with Mr. Black.",
        "Snack. Snack. Eat a snack.",
        "Eat a snack with Brown and Black.",
        "Jump. Bump. He jumped. He bumped.",
        "Fast. He went past fast.",
        "Went. Tent. Sent. He went into the tent. I sent him out of the tent.",
        "Wet. Get. Two dogs get wet.",
        "Help. Yelp. They yelp for help.",
        "Hill. Will. Will went uphill.",
        "Will Hill still? Will is up hill still.",
        "Father. Mother. Sister. Brother.",
        "That one is my other brother.",
        "My brothers read a little bit. Little words like if and it.",
        "My father can read big words, too. Like Constantinople and Timbuktu.",
        "Say. Say. What does this say?",
        "Ask me tomorrow, but not today."
    ],

    "One fish, two fish, red fish, blue fish": [
        "One fish, two fish, red fish, blue fish.",
        "Black fish, blue fish, old fish, new fish.",
        "This one has a little star.",
        "This one has a little car.",
        "Say, what a lot of fish there are.",
        "Yes, some are red, and some are blue.",
        "Some are old, and some are new.",
        "Some are sad, and some are glad.",
        "And some are very, very bad.",
        "Why are they sad and glad and bad?",
        "I do not know. Go ask your dad.",
        "Some are thin, and some are fat.",
        "The fat one has a yellow hat.",
        "From there to here, from here to there, funny things are everywhere.",
        "Here are some who like to run.",
        "They run for fun in the hot, hot sun.",
        "Oh me! Oh my! Oh me! Oh my! What a lot of funny things go by!",
        "Some have two feet, and some have four.",
        "Some have six feet, and some have more.",
        "Where do they come from? I can't say.",
        "But I bet they have come a long, long way.",
        "We see them come. We see them go.",
        "Some are fast, and some are slow.",
        "Some are high, and some are low.",
        "Not one of them is like another.",
        "Don't ask us why. Go ask your mother.",
        "Say! Look at his fingers! One, two, three...",
        "How many fingers do I see?",
        "One, two, three, four, five, six, seven, eight, nine, ten...",
        "He has eleven!",
        "Eleven! This is something new!",
        "I wish I had eleven, too!",
        "Bump, bump, bump. Did you ever ride a wump?",
        "We have a wump with just one hump.",
        "But we know a man called Mr. Gump.",
        "Mr. Gump has a seven-hump wump.",
        "So if you like to go bump, bump, just jump on the hump of the wump of Gump!",
        "Who am I? My name is Ned.",
        "I do not like my little bed.",
        "This is no good. This is not right.",
        "My feet stick out of bed all night.",
        "And when I pull them in, oh dear, my head sticks out of bed up here!",
        "We like our bike. It is made for three.",
        "Our mike sits up in back, you see.",
        "We like our mike, and this is why:",
        "Mike does all the work when the hills get high.",
        "Hello there, Ned. How do you do?",
        "Tell me, tell me, what is new?",
        "How are things in your little bed?",
        "What is new? Please tell me, Ned.",
        "I do not like this bed at all.",
        "A lot of things have come to call.",
        "A cow, a dog, a cat, a mouse...",
        "Oh! What a bed! Oh! What a house!",
        "Oh dear! Oh dear! I cannot hear.",
        "Will you please come over near?",
        "Will you please look at my ear?",
        "There must be something there, I fear.",
        "Say! Look! A bird was in your ear!",
        "But he is out. So have no fear.",
        "Again your ear can hear, my dear!",
        "My hat is old. My teeth are gold.",
        "I have a bird I like to hold.",
        "My shoe is off. My foot is cold.",
        "My shoe is off. My foot is cold.",
        "I have a bird I like to hold.",
        "My hat is old. My teeth are gold.",
        "And now my story is all told.",
        "We took a look. We saw a Nook.",
        "On his head he had a hook.",
        "On his hook he had a book.",
        "On his book was \"How to Cook\".",
        "We saw him sit and try to cook.",
        "He took a look at the book on the hook.",
        "But a Nook can't read. So a Nook can't cook.",
        "So what good to a Nook is a hook cook book?",
        "The moon was out, and we saw some sheep.",
        "We saw some sheep take a walk in their sleep.",
        "By the light of the moon, by the light of a star,",
        "They walked all night from near to far.",
        "I would never walk. I would take a car.",
        "I do not like this one so well.",
        "All he does is yell, yell, yell.",
        "I will not have this one about.",
        "When he comes in, I put him out.",
        "This one is quiet as a mouse.",
        "I like to have him in the house.",
        "At our house we open cans.",
        "We have to open many cans.",
        "And that is why we have a Zans.",
        "A Zans for cans is very good.",
        "Have you a Zans for cans? You should.",
        "I like to box. How I like to box!",
        "So every day I box a Gox.",
        "In yellow socks I box my Gox.",
        "I box in yellow Gox box socks.",
        "It is fun to sing if you sing with a Ying.",
        "My Ying can sing like anything.",
        "I sing high, and my Ying sings low.",
        "And we are not too bad, you know.",
        "This one, I think, is called a Yink.",
        "He likes to wink. He likes to drink.",
        "He likes to drink and drink and drink.",
        "The thing he likes to drink is ink.",
        "The ink he likes to drink is pink.",
        "He likes to wink and drink pink ink.",
        "So if you have a lot of ink, then you should get a Yink and think.",
        "Hop! Hop! Hop! I am a Yop.",
        "All I like to do is hop.",
        "From finger top to finger top.",
        "I hop from left to right, and then...",
        "Hop! Hop! I hop right back again.",
        "I like to hop all day and night,",
        "From right to left and left to right.",
        "Why do I like to hop, hop, hop?",
        "I do not know. Go ask your pop.",
        "Brush, brush, brush, brush. Comb, comb, comb, comb.",
        "Blue hair is fun to brush and comb.",
        "All girls who like to brush and comb",
        "Should have a pet like this at home.",
        "Who is this pet? Say, he is wet.",
        "You never yet met a pet, I bet,",
        "As wet as they let this wet pet get.",
        "Did you ever fly a kite in bed?",
        "Did you ever walk with ten cats on your head?",
        "Did you ever milk this kind of cat?",
        "Well, if you did, you said all that.",
        "We know it can be done.",
        "See what we found in the park, in the dark?",
        "We will take him home. We will call him Clark.",
        "He will live at our house. He will grow and grow.",
        "Will our mother like this? We don't know.",
        "And now, good night. It is time to sleep.",
        "So we will sleep with our pet, Zeep.",
        "Today is gone. Today was fun.",
        "Tomorrow is another one.",
        "Every day, from here to there, funny things are everywhere."
    ]
};

const booksImages = {
    "The Foot Book": "images/TheFootBook.png",
    "Green Eggs and Ham": "images/GreenEggsAndHam.png",
    "Hot Dog": "images/HotDog.png",
    "If You Give a Mouse a Cookie": "images/IfYouGiveAMouseACookie.png",
    "Cat in the Hat": "images/TheCatInTheHat.png",
    "Hop on Pop": "images/HopOnPop.png",
    "One fish, two fish, red fish, blue fish": "images/OneFishTwoFish.png"
};

const specificSentences = {
        // 2-Letter
        "am": `I <span style="text-decoration: underline; font-weight: bold;">am</span> reading a fun book.`,
        "an": `That is <span style="text-decoration: underline; font-weight: bold;">an</span> apple on the desk.`,
        "as": `Run fast <span style="text-decoration: underline; font-weight: bold;">as</span> you can!`,
        "at": `Look <span style="text-decoration: underline; font-weight: bold;">at</span> the cute puppy.`,
        "be": `Always <span style="text-decoration: underline; font-weight: bold;">be</span> kind to your friends.`,
        "by": `The ball rolled <span style="text-decoration: underline; font-weight: bold;">by</span> the chair.`,
        "do": `What should we <span style="text-decoration: underline; font-weight: bold;">do</span> next?`,
        "go": `Let us <span style="text-decoration: underline; font-weight: bold;">go</span> outside to play.`,
        "he": `Can <span style="text-decoration: underline; font-weight: bold;">he</span> catch the red ball?`,
        "hi": `Say <span style="text-decoration: underline; font-weight: bold;">hi</span> to our teacher!`,
        "if": `We can play outside <span style="text-decoration: underline; font-weight: bold;">if</span> it stays sunny.`,
        "in": `The cat is <span style="text-decoration: underline; font-weight: bold;">in</span> the box.`,
        "is": `This <span style="text-decoration: underline; font-weight: bold;">is</span> my favorite story.`,
        "it": `Pick <span style="text-decoration: underline; font-weight: bold;">it</span> up carefully.`,
        "me": `Please pass the crayons to <span style="text-decoration: underline; font-weight: bold;">me</span>.`,
        "my": `This is <span style="text-decoration: underline; font-weight: bold;">my</span> brand new backpack.`,
        "no": `There are <span style="text-decoration: underline; font-weight: bold;">no</span> cookies left in the jar.`,
        "of": `Take one <span style="text-decoration: underline; font-weight: bold;">of</span> these stickers.`,
        "on": `The book is <span style="text-decoration: underline; font-weight: bold;">on</span> the table.`,
        "or": `Do you want milk <span style="text-decoration: underline; font-weight: bold;">or</span> juice?`,
        "so": `I am <span style="text-decoration: underline; font-weight: bold;">so</span> happy to see you!`,
        "to": `We are going <span style="text-decoration: underline; font-weight: bold;">to</span> the park.`,
        "up": `Look <span style="text-decoration: underline; font-weight: bold;">up</span> at the bright stars.`,
        "us": `Can you play with <span style="text-decoration: underline; font-weight: bold;">us</span>?`,
        "we": `<span style="text-decoration: underline; font-weight: bold;">We</span> love learning new words.`,

        // 3-Letter
        "cat": `The sleepy <span style="text-decoration: underline; font-weight: bold;">cat</span> sat in the warm sun.`,
        "dog": `The friendly <span style="text-decoration: underline; font-weight: bold;">dog</span> chased the yellow ball.`,
        "you": `Do <span style="text-decoration: underline; font-weight: bold;">you</span> want to play a game?`,
        "all": `We can <span style="text-decoration: underline; font-weight: bold;">all</span> share our favorite toys.`,
        "and": `The sun came out <span style="text-decoration: underline; font-weight: bold;">and</span> dried the pavement.`,
        "are": `Those <span style="text-decoration: underline; font-weight: bold;">are</span> very pretty flowers.`,
        "big": `An elephant is a very <span style="text-decoration: underline; font-weight: bold;">big</span> animal.`,
        "box": `He opened the cardboard <span style="text-decoration: underline; font-weight: bold;">box</span> very slowly.`,
        "boy": `The young <span style="text-decoration: underline; font-weight: bold;">boy</span> kicked the football far.`,
        "bus": `The yellow <span style="text-decoration: underline; font-weight: bold;">bus</span> stopped right outside.`,
        "can": `<span style="text-decoration: underline; font-weight: bold;">Can</span> you help me lift this?`,
        "car": `A red <span style="text-decoration: underline; font-weight: bold;">car</span> drove down the street.`,
        "cow": `The brown <span style="text-decoration: underline; font-weight: bold;">cow</span> ate fresh green grass.`,
        "cup": `Please hand me that <span style="text-decoration: underline; font-weight: bold;">cup</span> of water.`,
        "dad": `My <span style="text-decoration: underline; font-weight: bold;">dad</span> taught me how to ride.`,
        "day": `Today is a wonderful <span style="text-decoration: underline; font-weight: bold;">day</span> for a walk.`,
        "eat": `It is time to <span style="text-decoration: underline; font-weight: bold;">eat</span> our healthy lunch.`,
        "egg": `The little bird hatched from an <span style="text-decoration: underline; font-weight: bold;">egg</span>.`,
        "fan": `The ceiling <span style="text-decoration: underline; font-weight: bold;">fan</span> keeps the room cool.`,
        "far": `The mountains look very <span style="text-decoration: underline; font-weight: bold;">far</span> away.`,
        "fly": `Watch the tiny bird <span style="text-decoration: underline; font-weight: bold;">fly</span> up high.`,
        "fox": `A quick <span style="text-decoration: underline; font-weight: bold;">fox</span> ran across the path.`,
        "fun": `Building with blocks is so much <span style="text-decoration: underline; font-weight: bold;">fun</span>.`,
        "get": `Can you <span style="text-decoration: underline; font-weight: bold;">get</span> my jacket for me?`,
        "hat": `He wore a blue <span style="text-decoration: underline; font-weight: bold;">hat</span> outside.`,
        "hen": `The brown <span style="text-decoration: underline; font-weight: bold;">hen</span> laid three fresh eggs.`,
        "her": `She shared <span style="text-decoration: underline; font-weight: bold;">her</span> crayons with everyone.`,
        "him": `I gave the workbook back to <span style="text-decoration: underline; font-weight: bold;">him</span>.`,
        "his": `He lost <span style="text-decoration: underline; font-weight: bold;">his</span> favorite baseball glove.`,
        "hit": `He managed to <span style="text-decoration: underline; font-weight: bold;">hit</span> the baseball far.`,
        "hop": `The little bunny loves to <span style="text-decoration: underline; font-weight: bold;">hop</span> around.`,
        "hot": `Be careful, that soup is very <span style="text-decoration: underline; font-weight: bold;">hot</span>!`,
        "its": `The puppy chased <span style="text-decoration: underline; font-weight: bold;">its</span> own tail around.`,
        "let": `Please <span style="text-decoration: underline; font-weight: bold;">let</span> me have a turn now.`,
        "man": `The kind <span style="text-decoration: underline; font-weight: bold;">man</span> opened the heavy door.`,
        "mom": `My <span style="text-decoration: underline; font-weight: bold;">mom</span> read a bedtime story.`,
        "net": `The fisherman threw his <span style="text-decoration: underline; font-weight: bold;">net</span> into deep water.`,
        "new": `She bought a <span style="text-decoration: underline; font-weight: bold;">new</span> pair of shoes.`,
        "not": `That is <span style="text-decoration: underline; font-weight: bold;">not</span> the right answer.`,
        "now": `We need to leave for school <span style="text-decoration: underline; font-weight: bold;">now</span>.`,
        "old": `The castle in town is very <span style="text-decoration: underline; font-weight: bold;">old</span>.`,
        "one": `Please give me just <span style="text-decoration: underline; font-weight: bold;">one</span> piece.`,
        "out": `The cat ran <span style="text-decoration: underline; font-weight: bold;">out</span> the front door.`,
        "owl": `An <span style="text-decoration: underline; font-weight: bold;">owl</span> hooted in the dark night.`,
        "pig": `The pink <span style="text-decoration: underline; font-weight: bold;">pig</span> rolled in the mud.`,
        "pen": `He wrote his name with a blue <span style="text-decoration: underline; font-weight: bold;">pen</span>.`,
        "pot": `Soup is simmering in the <span style="text-decoration: underline; font-weight: bold;">pot</span> on the stove.`,
        "ran": `The athlete <span style="text-decoration: underline; font-weight: bold;">ran</span> across the finish line.`,
        "red": `She picked a bright <span style="text-decoration: underline; font-weight: bold;">red</span> apple.`,
        "run": `Let us <span style="text-decoration: underline; font-weight: bold;">run</span> around the yard.`,
        "sat": `The tired kitten <span style="text-decoration: underline; font-weight: bold;">sat</span> on the rug.`,
        "see": `Can you <span style="text-decoration: underline; font-weight: bold;">see</span> the rainbow outside?`,
        "she": `<span style="text-decoration: underline; font-weight: bold;">She</span> painted a pretty picture.`,
        "sit": `Please <span style="text-decoration: underline; font-weight: bold;">sit</span> down in your chair.`,
        "sun": `The bright <span style="text-decoration: underline; font-weight: bold;">sun</span> warms the backyard.`,
        "ten": `There are <span style="text-decoration: underline; font-weight: bold;">ten</span> crayons in the box.`,
        "the": `<span style="text-decoration: underline; font-weight: bold;">The</span> puppy chased the ball.`,
        "two": `I have <span style="text-decoration: underline; font-weight: bold;">two</span> pet turtles.`,
        "was": `Yesterday <span style="text-decoration: underline; font-weight: bold;">was</span> a rainy afternoon.`,
        "way": `This is the correct <span style="text-decoration: underline; font-weight: bold;">way</span> home.`,
        "who": `<span style="text-decoration: underline; font-weight: bold;">Who</span> left this jacket here?`,
        "why": `<span style="text-decoration: underline; font-weight: bold;">Why</span> is the sky so blue?`,
        "win": `Our team hopes to <span style="text-decoration: underline; font-weight: bold;">win</span> the game.`,
        "yes": `<span style="text-decoration: underline; font-weight: bold;">Yes</span>, I would love some water.`,

        // 4-Letter
        "bear": `The furry <span style="text-decoration: underline; font-weight: bold;">bear</span> walked through trees.`,
        "bird": `A blue <span style="text-decoration: underline; font-weight: bold;">bird</span> sang a sweet song.`,
        "play": `Let us go outside and <span style="text-decoration: underline; font-weight: bold;">play</span> together.`,
        "blue": `The clear sky is bright <span style="text-decoration: underline; font-weight: bold;">blue</span> today.`,
        "book": `I love reading a good <span style="text-decoration: underline; font-weight: bold;">book</span> daily.`,
        "came": `My friend <span style="text-decoration: underline; font-weight: bold;">came</span> over to my house.`,
        "come": `Please <span style="text-decoration: underline; font-weight: bold;">come</span> inside for dinner now.`,
        "down": `The leaves fell <span style="text-decoration: underline; font-weight: bold;">down</span> from trees.`,
        "duck": `A yellow <span style="text-decoration: underline; font-weight: bold;">duck</span> swam in the pond.`,
        "find": `Can you <span style="text-decoration: underline; font-weight: bold;">find</span> your missing shoe?`,
        "four": `She has <span style="text-decoration: underline; font-weight: bold;">four</span> pencils in her case.`,
        "frog": `The green <span style="text-decoration: underline; font-weight: bold;">frog</span> jumped very high.`,
        "good": `That was a very <span style="text-decoration: underline; font-weight: bold;">good</span> story book.`,
        "have": `We <span style="text-decoration: underline; font-weight: bold;">have</span> a spelling test today.`,
        "help": `Can you <span style="text-decoration: underline; font-weight: bold;">help</span> me clean up?`,
        "here": `Put your school backpack <span style="text-decoration: underline; font-weight: bold;">here</span>.`,
        "home": `We walked straight <span style="text-decoration: underline; font-weight: bold;">home</span> after school.`,
        "jump": `The little kids <span style="text-decoration: underline; font-weight: bold;">jump</span> with joy.`,
        "just": `I am <span style="text-decoration: underline; font-weight: bold;">just</span> finishing my homework.`,
        "keep": `Always <span style="text-decoration: underline; font-weight: bold;">keep</span> your workspace tidy.`,
        "know": `Do you <span style="text-decoration: underline; font-weight: bold;">know</span> the right answer?`,
        "like": `I <span style="text-decoration: underline; font-weight: bold;">like</span> painting colorful pictures.`,
        "look": `Please <span style="text-decoration: underline; font-weight: bold;">look</span> at the whiteboard now.`,
        "make": `Let us <span style="text-decoration: underline; font-weight: bold;">make</span> a paper airplane.`,
        "many": `There are <span style="text-decoration: underline; font-weight: bold;">many</span> stars in space.`,
        "milk": `Drinking cold <span style="text-decoration: underline; font-weight: bold;">milk</span> is healthy.`,
        "moon": `The bright <span style="text-decoration: underline; font-weight: bold;">moon</span> shone at night.`,
        "must": `You <span style="text-decoration: underline; font-weight: bold;">must</span> wash your hands first.`,
        "name": `What is your pet dog's <span style="text-decoration: underline; font-weight: bold;">name</span>?`,
        "open": `Please <span style="text-decoration: underline; font-weight: bold;">open</span> your reading books.`,
        "over": `The ball flew <span style="text-decoration: underline; font-weight: bold;">over</span> the fence.`,
        "park": `We played tag at the <span style="text-decoration: underline; font-weight: bold;">park</span>.`,
        "path": `We followed the dirt <span style="text-decoration: underline; font-weight: bold;">path</span> ahead.`,
        "read": `I love to <span style="text-decoration: underline; font-weight: bold;">read</span> exciting stories.`,
        "ride": `Let us <span style="text-decoration: underline; font-weight: bold;">ride</span> our bikes outside.`,
        "said": `The teacher <span style="text-decoration: underline; font-weight: bold;">said</span> to line up.`,
        "same": `We are wearing the <span style="text-decoration: underline; font-weight: bold;">same</span> shirt.`,
        "sing": `The choir will <span style="text-decoration: underline; font-weight: bold;">sing</span> a song.`,
        "some": `Can I have <span style="text-decoration: underline; font-weight: bold;">some</span> water please?`,
        "soon": `We will eat lunch very <span style="text-decoration: underline; font-weight: bold;">soon</span>.`,
        "star": `Every single <span style="text-decoration: underline; font-weight: bold;">star</span> twinkled above.`,
        "stay": `Please <span style="text-decoration: underline; font-weight: bold;">stay</span> inside during rain.`,
        "swim": `The duck can <span style="text-decoration: underline; font-weight: bold;">swim</span> in ponds.`,
        "that": `<span style="text-decoration: underline; font-weight: bold;">That</span> puzzle is quite hard.`,
        "them": `Give the extra markers to <span style="text-decoration: underline; font-weight: bold;">them</span>.`,
        "then": `We played games and <span style="text-decoration: underline; font-weight: bold;">then</span> left.`,
        "they": `<span style="text-decoration: underline; font-weight: bold;">They</span> ran across the playground.`,
        "this": `<span style="text-decoration: underline; font-weight: bold;">This</span> is my favorite pencil.`,
        "time": `What <span style="text-decoration: underline; font-weight: bold;">time</span> does recess start?`,
        "tree": `A tall <span style="text-decoration: underline; font-weight: bold;">tree</span> stood outside.`,
        "walk": `Let us <span style="text-decoration: underline; font-weight: bold;">walk</span> down the trail.`,
        "want": `I <span style="text-decoration: underline; font-weight: bold;">want</span> to read this book.`,
        "warm": `The cozy blanket felt <span style="text-decoration: underline; font-weight: bold;">warm</span>.`,
        "went": `We <span style="text-decoration: underline; font-weight: bold;">went</span> to the zoo yesterday.`,
        "were": `We <span style="text-decoration: underline; font-weight: bold;">were</span> happy to see friends.`,
        "what": `<span style="text-decoration: underline; font-weight: bold;">What</span> game should we play?`,
        "when": `<span style="text-decoration: underline; font-weight: bold;">When</span> does the movie start?`,
        "will": `The sun <span style="text-decoration: underline; font-weight: bold;">will</span> rise up early.`,
        "with": `I went to play <span style="text-decoration: underline; font-weight: bold;">with</span> friends.`,
        "word": `Write each spelling <span style="text-decoration: underline; font-weight: bold;">word</span> clearly.`,
        "work": `We finished our class <span style="text-decoration: underline; font-weight: bold;">work</span> early.`,
        "your": `Is this <span style="text-decoration: underline; font-weight: bold;">your</span> red pencil case?`,

        // 5-Letter
        "apple": `The red <span style="text-decoration: underline; font-weight: bold;">apple</span> was crisp.`,
        "beach": `We built sandcastles at the <span style="text-decoration: underline; font-weight: bold;">beach</span>.`,
        "black": `The kitten had soft <span style="text-decoration: underline; font-weight: bold;">black</span> fur.`,
        "brown": `The puppy has fluffy <span style="text-decoration: underline; font-weight: bold;">brown</span> fur.`,
        "chair": `Please sit down in your <span style="text-decoration: underline; font-weight: bold;">chair</span>.`,
        "child": `Every <span style="text-decoration: underline; font-weight: bold;">child</span> loves a fun story.`,
        "clean": `Keep your school desk <span style="text-decoration: underline; font-weight: bold;">clean</span> daily.`,
        "cloud": `A fluffy white <span style="text-decoration: underline; font-weight: bold;">cloud</span> passed.`,
        "color": `What is your favorite <span style="text-decoration: underline; font-weight: bold;">color</span>?`,
        "dance": `The children love to <span style="text-decoration: underline; font-weight: bold;">dance</span>.`,
        "doors": `Both classroom <span style="text-decoration: underline; font-weight: bold;">doors</span> were open wide.`,
        "dress": `She wore a lovely <span style="text-decoration: underline; font-weight: bold;">dress</span> today.`,
        "drink": `Remember to <span style="text-decoration: underline; font-weight: bold;">drink</span> enough water.`,
        "every": `<span style="text-decoration: underline; font-weight: bold;">Every</span> student got a prize.`,
        "first": `She finished in <span style="text-decoration: underline; font-weight: bold;">first</span> place.`,
        "funny": `The clown told a <span style="text-decoration: underline; font-weight: bold;">funny</span> joke.`,
        "games": `We played fun board <span style="text-decoration: underline; font-weight: bold;">games</span>.`,
        "grass": `The green <span style="text-decoration: underline; font-weight: bold;">grass</span> needs watering.`,
        "green": `The leaves on trees are <span style="text-decoration: underline; font-weight: bold;">green</span>.`,
        "house": `Our family lives in this <span style="text-decoration: underline; font-weight: bold;">house</span>.`,
        "laugh": `Her funny joke made us <span style="text-decoration: underline; font-weight: bold;">laugh</span>.`,
        "learn": `We go to school to <span style="text-decoration: underline; font-weight: bold;">learn</span>.`,
        "light": `Turn on the desk <span style="text-decoration: underline; font-weight: bold;">light</span>.`,
        "lunch": `We ate sandwiches for <span style="text-decoration: underline; font-weight: bold;">lunch</span>.`,
        "mouse": `A tiny grey <span style="text-decoration: underline; font-weight: bold;">mouse</span> scurried.`,
        "night": `The stars shine at <span style="text-decoration: underline; font-weight: bold;">night</span>.`,
        "paper": `Draw on a clean sheet of <span style="text-decoration: underline; font-weight: bold;">paper</span>.`,
        "party": `We had a fun birthday <span style="text-decoration: underline; font-weight: bold;">party</span>.`,
        "plant": `Water your indoor <span style="text-decoration: underline; font-weight: bold;">plant</span> daily.`,
        "plays": `He <span style="text-decoration: underline; font-weight: bold;">plays</span> soccer outside daily.`,
        "quiet": `Please be <span style="text-decoration: underline; font-weight: bold;">quiet</span> in library.`,
        "river": `The fast <span style="text-decoration: underline; font-weight: bold;">river</span> flowed by.`,
        "round": `The basketball is completely <span style="text-decoration: underline; font-weight: bold;">round</span>.`,
        "ruler": `Measure lines using a <span style="text-decoration: underline; font-weight: bold;">ruler</span>.`,
        "share": `Always <span style="text-decoration: underline; font-weight: bold;">share</span> toys with friends.`,
        "shoes": `Tie your running <span style="text-decoration: underline; font-weight: bold;">shoes</span> tightly.`,
        "sleep": `Babies need plenty of <span style="text-decoration: underline; font-weight: bold;">sleep</span>.`,
        "small": `The puppy is very <span style="text-decoration: underline; font-weight: bold;">small</span>.`,
        "smile": `Her happy <span style="text-decoration: underline; font-weight: bold;">smile</span> was lovely.`,
        "sound": `Listen to the quiet <span style="text-decoration: underline; font-weight: bold;">sound</span>.`,
        "space": `Astronauts travel into outer <span style="text-decoration: underline; font-weight: bold;">space</span>.`,
        "spell": `Can you <span style="text-decoration: underline; font-weight: bold;">spell</span> this word?`,
        "stand": `Please <span style="text-decoration: underline; font-weight: bold;">stand</span> up for pledge.`,
        "start": `We will <span style="text-decoration: underline; font-weight: bold;">start</span> reading now.`,
        "stone": `He skipped a flat <span style="text-decoration: underline; font-weight: bold;">stone</span>.`,
        "store": `We bought fruit at <span style="text-decoration: underline; font-weight: bold;">store</span>.`,
        "story": `The teacher read a <span style="text-decoration: underline; font-weight: bold;">story</span>.`,
        "sweet": `The ripe strawberry is <span style="text-decoration: underline; font-weight: bold;">sweet</span>.`,
        "table": `Put your books on <span style="text-decoration: underline; font-weight: bold;">table</span>.`,
        "teach": `Our teacher loves to <span style="text-decoration: underline; font-weight: bold;">teach</span>.`,
        "their": `Students put away <span style="text-decoration: underline; font-weight: bold;">their</span> books.`,
        "there": `<span style="text-decoration: underline; font-weight: bold;">There</span> are books on desk.`,
        "these": `Look at <span style="text-decoration: underline; font-weight: bold;">these</span> shiny stickers.`,
        "thing": `Every <span style="text-decoration: underline; font-weight: bold;">thing</span> is ready now.`,
        "think": `I <span style="text-decoration: underline; font-weight: bold;">think</span> we can win.`,
        "three": `She has <span style="text-decoration: underline; font-weight: bold;">three</span> pet cats.`,
        "tiger": `The wild <span style="text-decoration: underline; font-weight: bold;">tiger</span> prowled.`,
        "tired": `The runner was very <span style="text-decoration: underline; font-weight: bold;">tired</span>.`,
        "today": `<span style="text-decoration: underline; font-weight: bold;">Today</span> is a great day.`,
        "train": `The fast <span style="text-decoration: underline; font-weight: bold;">train</span> passed by.`,
        "truck": `A big red <span style="text-decoration: underline; font-weight: bold;">truck</span> drove.`,
        "under": `The toy rolled <span style="text-decoration: underline; font-weight: bold;">under</span> bed.`,
        "water": `Plants need fresh <span style="text-decoration: underline; font-weight: bold;">water</span> daily.`,
        "white": `The fluffy cloud is <span style="text-decoration: underline; font-weight: bold;">white</span>.`,
        "witch": `The friendly <span style="text-decoration: underline; font-weight: bold;">witch</span> smiled.`,
        "woman": `The kind <span style="text-decoration: underline; font-weight: bold;">woman</span> helped.`,
        "world": `<span style="text-decoration: underline; font-weight: bold;">World</span> geography is fun.`,
        "write": `Practise to <span style="text-decoration: underline; font-weight: bold;">write</span> neatly.`,
        "young": `The <span style="text-decoration: underline; font-weight: bold;">young</span> puppy played.`,

        // 6-Letter
        "animal": `The wild <span style="text-decoration: underline; font-weight: bold;">animal</span> roamed.`,
        "autumn": `Leaves fall down in <span style="text-decoration: underline; font-weight: bold;">autumn</span>.`,
        "banana": `Monkeys love eating a <span style="text-decoration: underline; font-weight: bold;">banana</span>.`,
        "basket": `We put apples in a <span style="text-decoration: underline; font-weight: bold;">basket</span>.`,
        "bottle": `Drink water from a <span style="text-decoration: underline; font-weight: bold;">bottle</span>.`,
        "branch": `A bird sat on a <span style="text-decoration: underline; font-weight: bold;">branch</span>.`,
        "bridge": `There is a river under the <span style="text-decoration: underline; font-weight: bold;">bridge</span>.`,
        "bright": `The sun is very <span style="text-decoration: underline; font-weight: bold;">bright</span> today.`,
        "butter": `Spread some fresh <span style="text-decoration: underline; font-weight: bold;">butter</span> on toast.`,
        "castle": `The old stone <span style="text-decoration: underline; font-weight: bold;">castle</span> stood.`,
        "church": `The village <span style="text-decoration: underline; font-weight: bold;">church</span> bell rang.`,
        "circle": `Draw a round <span style="text-decoration: underline; font-weight: bold;">circle</span> shape.`,
        "clouds": `Dark <span style="text-decoration: underline; font-weight: bold;">clouds</span> bring heavy rain.`,
        "cookie": `Eat a warm chocolate <span style="text-decoration: underline; font-weight: bold;">cookie</span>.`,
        "corner": `Stand quietly in the <span style="text-decoration: underline; font-weight: bold;">corner</span>.`,
        "crayon": `Use a blue <span style="text-decoration: underline; font-weight: bold;">crayon</span> today.`,
        "family": `Our <span style="text-decoration: underline; font-weight: bold;">family</span> went camping.`,
        "flower": `The red <span style="text-decoration: underline; font-weight: bold;">flower</span> bloomed.`,
        "forest": `Tall trees fill forest <span style="text-decoration: underline; font-weight: bold;">forest</span>.`,
        "friend": `Play games with a <span style="text-decoration: underline; font-weight: bold;">friend</span>.`,
        "garden": `Flowers grow in <span style="text-decoration: underline; font-weight: bold;">garden</span> bed.`,
        "kitten": `The playful <span style="text-decoration: underline; font-weight: bold;">kitten</span> jumped.`,
        "lesson": `Pay attention in <span style="text-decoration: underline; font-weight: bold;">lesson</span>.`,
        "market": `Buy fresh food at <span style="text-decoration: underline; font-weight: bold;">market</span>.`,
        "monkey": `The brown <span style="text-decoration: underline; font-weight: bold;">monkey</span> climbed.`,
        "mother": `My loving <span style="text-decoration: underline; font-weight: bold;">mother</span> hugged me.`,
        "pencil": `Write with a yellow <span style="text-decoration: underline; font-weight: bold;">pencil</span>.`,
        "people": `Many <span style="text-decoration: underline; font-weight: bold;">people</span> gathered around.`,
        "planet": `Earth is our home <span style="text-decoration: underline; font-weight: bold;">planet</span>.`,
        "purple": `She painted a <span style="text-decoration: underline; font-weight: bold;">purple</span> flower.`,
        "rabbit": `The white <span style="text-decoration: underline; font-weight: bold;">rabbit</span> hopped.`,
        "school": `We attend <span style="text-decoration: underline; font-weight: bold;">school</span> five days.`,
        "season": `Spring is a lovely <span style="text-decoration: underline; font-weight: bold;">season</span>.`,
        "silver": `The coin was made of <span style="text-decoration: underline; font-weight: bold;">silver</span>.`,
        "sister": `My older <span style="text-decoration: underline; font-weight: bold;">sister</span> reads books.`,
        "spring": `Flowers bloom in <span style="text-decoration: underline; font-weight: bold;">spring</span> time.`,
        "square": `Draw a four-sided <span style="text-decoration: underline; font-weight: bold;">square</span>.`,
        "street": `Cars drive down the <span style="text-decoration: underline; font-weight: bold;">street</span>.`,
        "summer": `We swim during hot <span style="text-decoration: underline; font-weight: bold;">summer</span>.`,
        "ticket": `Hold your train <span style="text-decoration: underline; font-weight: bold;">ticket</span> ready.`,
        "turtle": `The green <span style="text-decoration: underline; font-weight: bold;">turtle</span> swam.`,
        "valley": `The green <span style="text-decoration: underline; font-weight: bold;">valley</span> was wide.`,
        "winter": `Snow falls during cold <span style="text-decoration: underline; font-weight: bold;">winter</span>.`,
        "yellow": `The sunflower is <span style="text-decoration: underline; font-weight: bold;">yellow</span>.`,
    };

const sightWordsData = {};
Object.keys(specificSentences).forEach(word => {
    const len = word.length;
    if (!sightWordsData[len]) {
        sightWordsData[len] = [];
    }
    sightWordsData[len].push(word);
});

let currentCardIndex = 0;
let currentWordList = [];
let currentBookFontSize = 14;

// Speech Recognition & Tracking Variables
let recognition = null;
let isListening = false;
let spokenWordIndex = 0;
let currentBookSentences = [];
window.currentBookWords = [];

// Helper sentence generator with underlined target word for all sight words
function generateSentence(word) {
    if (specificSentences[word]) {
        // Automatically adds clean side spacing to your existing HTML spans
        return specificSentences[word].replace(
            /style="text-decoration: underline; font-weight: bold;"/g, 
            'style="text-decoration: underline; font-weight: bold; margin: 0 4px;"'
        );
    }

    // Ultimate fallback just in case a word isn't found
    return `The word is <span style="text-decoration: underline; font-weight: bold; margin: 0 4px;">${word}</span>.`;
}


function initReadingModule() {
    const workspace = document.getElementById('lesson-workspace');
    workspace.innerHTML = `
        <h2 class="section-subtitle">Select Learning Mode:</h2>
        <button class="back-topics-btn" onclick="goHome()">← Back to Dashboard</button>
        <div class="card-grid">
            <div class="subject-card" onclick="renderReadingBooksMenu()">
                <span class="card-icon">📚</span>
                <h3>Reading</h3>
                <p>Classic Books & Sentences</p>
            </div>
            <div class="subject-card" onclick="renderSightWordsMenu()">
                <span class="card-icon">🔤</span>
                <h3>Sight Words</h3>
                <p>Flashcards (2-6 Letters)</p>
            </div>
        </div>
    `;
}

function renderReadingBooksMenu() {
    const workspace = document.getElementById('lesson-workspace');
    let booksHTML = Object.keys(booksData).map(book => {
        let imgPath = booksImages[book] || '';
        return `
            <button class="option-btn" onclick="loadBookContent('${book}')" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 20px; height: auto; min-height: 260px;">
                <span style="font-weight: bold; margin-bottom: 12px; text-align: center; font-size: 1.1rem;">${book}</span>
                ${imgPath ? `<img src="${imgPath}" alt="${book}" style="width: 120px; height: 160px; object-fit: cover; border-radius: 6px; box-shadow: 0 4px 8px rgba(0,0,0,0.15);">` : ''}
            </button>
        `;
    }).join('');

    workspace.innerHTML = `
        <button class="back-btn" onclick="initReadingModule()">← Back to Modes</button>
        <h2 class="section-subtitle">Select a Book to Read:</h2>
        <div class="grid-options" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">
            ${booksHTML}
        </div>
    `;
}

function loadBookContent(bookTitle) {
    const workspace = document.getElementById('lesson-workspace');
    currentBookSentences = booksData[bookTitle];
    
    window.currentBookWords = currentBookSentences.join(" ").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").split(/\s+/);
    spokenWordIndex = 0;

    let wordCounter = 0;
    let paragraphsHTML = currentBookSentences.map(sentence => {
        let formattedSentence = sentence.split(" ").map(word => {
            let spanId = `book-word-${wordCounter++}`;
            return `<span id="${spanId}" class="book-word" onclick="jumpToWord(${wordCounter - 1})" style="margin-right: 4px; cursor: pointer; transition: background 0.2s; padding: 2px 4px; border-radius: 4px;">${word}</span>`;
        }).join(" ");
        return `<p class="book-paragraph" style="margin: 15px 0; font-size: ${currentBookFontSize}px; text-align: center; line-height: 1.6;">${formattedSentence}</p>`;
    }).join('');

    workspace.innerHTML = `
        <button class="back-btn" onclick="stopSpeechRecognition(); renderReadingBooksMenu();">← Back to Books</button>
        <h2 class="section-subtitle">${bookTitle}</h2>
        
        <div style="display: flex; justify-content: center; align-items: center; gap: 12px; margin-top: 15px; flex-wrap: wrap;">
            <button class="control-btn" onclick="changeBookFontSize(-2)" style="padding: 6px 12px; font-weight: bold; cursor: pointer;"> Zoom Out</button>
            <span id="fontSizeIndicator" style="font-weight: bold; font-size: 1rem;">${currentBookFontSize}px</span>
            <button class="control-btn" onclick="changeBookFontSize(2)" style="padding: 6px 12px; font-weight: bold; cursor: pointer;"> Zoom In</button>
            <button id="micReadBtn" class="control-btn" onclick="toggleSpeechRecognition()" style="padding: 6px 14px; font-weight: bold; cursor: pointer; background: #10b981; color: white; border: none; border-radius: 6px;">🎙️ Start Reading</button>
            <button class="control-btn" onclick="restartReading()" style="padding: 6px 14px; font-weight: bold; cursor: pointer; background: #f59e0b; color: white; border: none; border-radius: 6px;">🔄 Restart</button>
        </div>

        <div style="text-align: center; font-size: 1.1rem; font-weight: bold; color: #1e3a8a; margin-top: 10px;">💡 Tip: Click any word to start reading from that exact spot!</div>

        <div id="bookContentContainer" style="background: #ffffff; padding: 25px; border-radius: 12px; margin-top: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); text-align: center; max-height: 50vh; overflow-y: auto;">
            ${paragraphsHTML}
        </div>
    `;
}

function changeBookFontSize(amount) {
    currentBookFontSize = Math.max(10, Math.min(40, currentBookFontSize + amount));
    const indicator = document.getElementById('fontSizeIndicator');
    if (indicator) {
        indicator.innerText = `${currentBookFontSize}px`;
    }
    const paragraphs = document.querySelectorAll('.book-paragraph');
    paragraphs.forEach(p => {
        p.style.fontSize = `${currentBookFontSize}px`;
    });
}

function restartReading() {
    stopSpeechRecognition();
    spokenWordIndex = 0;

    const allWords = document.querySelectorAll('.book-word');
    allWords.forEach(el => {
        el.style.backgroundColor = 'transparent';
    });
}

function jumpToWord(index) {
    spokenWordIndex = index;

    const totalWords = window.currentBookWords.length;
    for (let i = 0; i < totalWords; i++) {
        let el = document.getElementById(`book-word-${i}`);
        if (el) {
            if (i < index) {
                el.style.backgroundColor = '#fef08a';
            } else if (i === index) {
                el.style.backgroundColor = '#6ee7b7';
            } else {
                el.style.backgroundColor = 'transparent';
            }
        }
    }
}

function toggleSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Speech recognition is not supported in this browser. Try using Google Chrome.");
        return;
    }

    const micBtn = document.getElementById('micReadBtn');

    if (isListening) {
        stopSpeechRecognition();
        if (micBtn) {
            micBtn.innerText = "🎙️ Start Reading";
            micBtn.style.background = "#10b981";
        }
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        isListening = true;
        if (micBtn) {
            micBtn.innerText = "🛑 Stop Listening";
            micBtn.style.background = "#ef4444";
        }
    };

    recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        processSpokenTranscript(transcript.toLowerCase());
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
    };

    recognition.onend = () => {
        if (isListening) {
            try { recognition.start(); } catch (e) { } 
        }
    };

    recognition.start();
}

function stopSpeechRecognition() {
    isListening = false;
    if (recognition) {
        recognition.stop();
        recognition = null;
    }
}

function processSpokenTranscript(transcript) {
    const spokenWords = transcript.trim().split(/\s+/);
    if (spokenWords.length === 0) return;

    let latestWord = spokenWords[spokenWords.length - 1];

    if (window.currentBookWords && spokenWordIndex < window.currentBookWords.length) {
        let targetWord = window.currentBookWords[spokenWordIndex].toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");

        if (latestWord.includes(targetWord) || targetWord.includes(latestWord)) {
            let el = document.getElementById(`book-word-${spokenWordIndex}`);
            if (el) {
                el.style.backgroundColor = '#fef08a';
            }
            spokenWordIndex++;
        }
    }
}

function renderSightWordsMenu() {
    const workspace = document.getElementById('lesson-workspace');
    
    // Build buttons dynamically based on which length keys exist in sightWordsData
    let lengthButtonsHTML = Object.keys(sightWordsData).sort().map(len => {
        return `<button class="option-btn" onclick="startFlashcards(${len})">${len}-Letter Words (${sightWordsData[len].length})</button>`;
    }).join('');

    workspace.innerHTML = `
        <button class="back-btn" onclick="initReadingModule()">← Back to Modes</button>
        <h2 class="section-subtitle">Select Sight Word Length:</h2>
        <div class="grid-options" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
            ${lengthButtonsHTML}
        </div>
    `;
}

function startFlashcards(length) {
    currentWordList = sightWordsData[length];
    currentCardIndex = 0;
    renderFlashcardWorkspace(length);
}

function renderFlashcardWorkspace(length) {
    const workspace = document.getElementById('lesson-workspace');
    workspace.innerHTML = `
        <button class="back-btn" onclick="renderSightWordsMenu()">← Back to Categories</button>
        <h2 class="section-subtitle">${length}-Letter Sight Words Flashcards</h2>
        
        <div class="flashcard-container" onclick="flipCardElement()" style="perspective: 1000px; width: 100%; max-width: 500px; height: 250px; margin: 30px auto; cursor: pointer;">
            <div class="flashcard" id="cardElement" style="width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transition: transform 0.6s; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <div class="card-face card-front" id="cardFrontWord" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; align-items: center; justify-content: center; background: #ffffff; border: 3px solid var(--primary-color); border-radius: 16px; font-size: 3rem; font-weight: bold; color: var(--primary-color);">
                </div>
                <div class="card-face card-back" id="cardBackSentence" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; align-items: center; justify-content: center; background: #f0fdf4; border: 3px solid #10b981; border-radius: 16px; transform: rotateY(180deg); font-size: 1.4rem; padding: 20px; box-sizing: border-box; text-align: center; color: #065f46;">
                </div>
            </div>
        </div>

        <div class="card-controls" style="display: flex; justify-content: center; gap: 20px; align-items: center; margin-top: 20px;">
            <button class="control-btn" onclick="prevCard()" style="padding: 10px 20px; font-weight: bold; cursor: pointer;">Previous</button>
            <span class="progress-indicator" id="cardProgress" style="font-weight: bold; font-size: 1.1rem;">1 / ${currentWordList.length}</span>
            <button class="control-btn" onclick="nextCard()" style="padding: 10px 20px; font-weight: bold; cursor: pointer;">Next</button>
        </div>
    `;
    updateCardContent();
}

function updateCardContent() {
    const word = currentWordList[currentCardIndex];
    document.getElementById('cardFrontWord').innerText = word;
    document.getElementById('cardBackSentence').innerHTML = generateSentence(word);
    document.getElementById('cardProgress').innerText = `${currentCardIndex + 1} / ${currentWordList.length}`;
    document.getElementById('cardElement').classList.remove('flipped');
}

function flipCardElement() {
    document.getElementById('cardElement').classList.toggle('flipped');
}

function nextCard() {
    event.stopPropagation();
    currentCardIndex = (currentCardIndex < currentWordList.length - 1) ? currentCardIndex + 1 : 0;
    updateCardContent();
}

function prevCard() {
    event.stopPropagation();
    currentCardIndex = (currentCardIndex > 0) ? currentCardIndex - 1 : currentWordList.length - 1;
    updateCardContent();
}