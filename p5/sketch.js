// Major project: Interactive story
// Meeka
// December-January 21st
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let choice1;
let choice2;
let name;
let trueArray = [];
let endingsArray = [];
let state = 1;



function preload(){
  choice1 = loadImage("assets/Choice 1.png");
  choice2 = loadImage("assets/Choice 2.png");
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  background(200);
  imageMode(CENTER);
  image(choice1, windowWidth/4, windowHeight* (3/4), choice1.width, choice1.height);
  image(choice2, windowWidth*(3/4), windowHeight* (3/4), choice2.width, choice2.height);
  let allowHimToExplain = ("Since you are a major idiot, you decide to hear this man out. He explains that he is your father and that he’s also a wizard. He explains his many unbelievable accomplishments, you feel impressed. After all this man is your dad.-So listen here little child- I’m ten.- You snap back. -sorry. listen here you ten year old child. Have you heard of Hogwarts?- He sassily asks. -No but I’m interested- Dad explains everything you need to know. You holds his hand out and you take his hand in yours.- wHAT ThE actUAl HeCK dID yOu JuST dO?!?! - You yell. Your dad is laughing at you and explains the art of apparition. Apparently you just teleported somewhere. You force laughter so your dad doesn't feel awkward. “Follow me, I promise we won’t apparte,” He says. You follow him through what seems to be a deserted neighbourhood, it’s also midnight so that could also be the reason it is deserted. “Now there’s no reason to be afraid my child. This is Hogsmeade. It’s a town just by Hogwarts. There’s candy shops, cafe’s, and England’s best butterbeer!” Dad says joyously. -Where are we going?- You ask out of curiosity. -You’ll see,- He replies. -Now look over there. See that castle?-Yeah, it’s beautiful.-That’s Hogwarts School of Witchcraft and Wizardry. That’s where I’m sending you!- He cheers. -Dad I’m not magic-Suddenly you feel a shiver down your whole body followed by a sudden cold sensation. Your dad stops in his tracks. -Take my hand. We have to go.- Instead of listening, you turn around. The street lights start flickering and then they go out. You hear a window shatter. Suddenly people in dark clocks float around the whole area. Every few moments a green or red light comes from them followed by a scream or shattered glass. -Take my hand, USER INPUT NAME!!- Your dad yells.This seems to have angered the mysterious people in the moonlit sky. Your dad grabs you while they swoop down bellow. Before you can scream, you appear in a long dark alleyway. The sun seems to be rising. Your dad holds you in his arms. You apparently fainted during a chase between your dad and mysterious people. Luckily, he apparated just in time. -Dad what just happened?- You ask as he puts you down. He takes a newspaper from a young man selling them on the street and hands it to you. “This should explain everything,” He whispers. The paper reads: THE DARK MARK APPEARS IN HOGSMEADE The town is left in shackles after what reporters believe to be Death Eaters attack the joyous town. Three wizards have been found dead, two are injured, and one is missing. This has been the first attacks in eleven years. The group hasn’t attacked since the fatal night when James and Lily Potter were murdered by He-Who-Shall-Not-Be-Named. We await for the day Harry Potter returns and saves the wizarding world once again.“Dad who are they talking about?” You ask him. “I can’t talk about it. Hogwarts will teach you everything you will need,” He passes you a letter, “This letter is your ticket to success. Read it and pick up everything it asks for. I must go for now. Here, have some money so you can afford school supplies. Remember platform nine and three quarters. Write to me if you ever need anything, I love you.” Just like that, he hands you a bag of money and teleports away. You open the letter and find that you have been admitted to Hogwarts. It’s time your adventure begins! Chapter 1: Welcome to Hogwarts “All aboard!” A man chants beside platform nine. Your mind keeps going on and on about the events of last week and the Death Eaters. Who were those people and who is this He Who Shall Not Be Named guy? Also Harry Potter? This world is so confusing.You lose track of thought when someone taps you on the shoulder, “Hey there buddy, need help finding your platform? (Yes(1) or No(2))");
  trueArray.push(allowHimToExplain);

  let yes = ("A tall guy with a hogwarts letter in his hand looks down at you. You reply, “Umm yeah. I don’t know where platform nine and three quarters is,”He laughs with you and signals for you to follow. He runs straight through a wall. This frankly isn’t the oddest thing to happen in the past day so you push your cart, close your eyes, and you run right after him into the wall. All of the sudden you’re surrounded by adults with wands in their hands and kids with owls boarding a train with the words Hogwarts Express written across it. “You made it! Most people aren’t as brave as you are their first time coming to the platform. I’m Cedric Diggory by the way.” “I’m USERINPUTHERE Lockhart. Nice to meet you. And thank you,” You reply quietly. “Hey of course! I’m a second year and a Hufflepuff, let me know if you need help with anything. I’ll see you at school!” He heads off and joins some more second years from what it looks like. You decide to head onto the bus and find an empty seat. The bus is filled with people who already seem to know everyone so you go inside an empty and secluded seat. You pull out last week’s week's paper and decide to learn more about the wizarding world. You have learned that Harry Potter is the first and only survivor of the curse ‘Avada kedavra’. You’ve learned that quidditch is a popular sport for seven players on each time. You’ve learned the terms muggle and squib. (newspapers can be read to acquire knowledge about the world) Once you finish the paper you hear a voice, “Hello? Are you even awake in there?” A girl with a vile stare glares down at you. She proceeds to sit down across from you. “I’m Pansy Parkinson. I’m probably going to be a Slytherin, I doubt you’d even know what that means. According from what I can tell about you, you must be a Hufflepuff,” “My dad’s a Ravenclaw but okay,” You whisper back. “Yeah that’s not much better,” She says without hesitation. You roll your eyes but decide to stay quiet. Plus who has time for arguments when you’re on your way to a magical castle. After a long few minutes the train comes to a stop and Pansy immediately leaves. Students slowly start to file out so you decide to follow. You step onto the platform and hear a loud voice calling for all first years. The voice comes from an impossibly tall man. He leads you straight to the castle. Upon entering you are guided into a large hall filled with many children and teenagers who seem to be sorted by color. You see Cedric sitting at the table set with the color yellow. That must be where the Hufflepuffs sit. You see green emblems with snakes all over the hall, green must be Slytherins colors. You remember your dad mentioning Ravenclaw so you recognize them sitting with blue attire. That leaves red as Gryffindor. What seems to be a sorting ceremony begins. Pansy was correct, she was instantly sent to Slytherin along with a blonde boy named Draco Malfoy. The famous Harry Potter gets sent to Gryffindor. Your name is called up so you head to the front of the hall. You sit on a large stool and face the hundreds of people in the hall. You hear the hat begin to think and consider, “Hufflepuff, the loyal. Now someone who’s loyal wouldn’t have left their mother behind. Hmmmm. Or perhaps the cunning Slytherin? No. Not yet wise enough for a Ravenclaw… So that must mean… Gryffindor!” The Gryffindor table erupts in cheering. You smile and walk over towards your new house-mates. You receive high fives from two identical red-heads who appoint you to a seat with the rest of the first years. Everyone seems to be star-struck with the prospect of Harry Potter sitting among them except for you and a few others. Sitting next to this celebrity is an awkward red-headed boy and a girl with thick, bushy hair. After a long night of introductions you remember several names. Ron Weasley and Hermione Granger are the names of Harry’s two friends. Harry himself seems to be a kind boy. You meet a ditsy girl named Lavender Brown. You don’t get much out of her because she seems to have run off to introduce herself to more people. It looks like these are the people you’ll be spending the next seven years with. Let’s see how this plays out. Chapter 2: The Potions Professor with a Secret. It’s potions class and Professor Snape hasn’t given anybody a chance to succeed, that is unless you’re a slytherin. His insults consist of direct remarks about kids intelligence, mumbled slurs against the muggle-born kids, or he just takes away house points. You decide to turn off your focus. You notice that under Professor Snape’s robe is a black long sleeve t-shirt. You realize how uncommon it is for him to roll up his sleeves as well. Class gets dismissed without you noticing, you only wake from your thoughts when a dark voice says, “Too proud to pay attention in class, Mx. Lockhart? Pack up. Ten points from Gryffindor.”You start packing your things up as Snape drifts to his desk. You keep an eye on him as you pack up and you notice him go to scratch his arm. His shirt lifts the slightest to reveal a dark ink on his forearm. You can’t quite make out what it is.(Do you decide to find out(1) or not(2)?");
  trueArray.push(yes);

  let findOut = ("“Hey Professor Snape,” he glares up at you as you talk,” Um, I was wondering if you offered extra assignments or time spaces for students to come in and get help.” “For those of you who earn it, maybe. But after your… performance… in class today, I would say not Mx. Lockhart,” You look down and get a glimpse of a skull and a snake tattoo before he quickly covers it up, “Now get out before you lose more points for your house.” It’s Halloween and you are at the feast, you sit across from Ron Weasley and Harry Potter during dinner. You overhear the two of them complaining about potions class with Snape. “Are you guys talking about Snape?” You hear yourself say. “Yeah, he’s bloody awful!” Ron exclaims. “No kidding,” You whisper back. Your mind is still on the tattoo he covers up. “Hey do you guys know anything about a skull and a snake? Like together?”Ron stops eating and looks up at you. “You don’t mean the dark mark do you?” He asks nervously. Just like that your conversation gets cut off by the screams of the Defence Against the Dark Arts teacher, “TROLL! TROLL IN THE DUNGEONS!” He then proceeds to faint. Chapter 3. All of your fellow Gryffindors are up in their rooms as per the request from the Head Girls and Boys. You are the only one left in the common room and this is the most quiet it’s been down here in quite a while. You feel almost at peace… That is interrupted right away when Harry, Ron, and Hermione enter looking like absolute train wrecks. “What the bloody hell happened to you guys?” You rudely ask.“PROFESSOR SNAPE LET A TROLL INTO THE SCHOOL AND IT ATTACKED HERMIONE SO WE FOUGHT IT AND I TOOK IT DOWN!” Ron blurts out.“We lost house points…” Hermione whispers.“Snape? Are you sure?” Everyone nods in agreement, “Do you guys know anything about a snake tattoo with a skull on it? I saw it on Snape’s arm.” Everyone’s eyes go absolutely wide except yours and Harry’s. “You wouldn’t mean the dark mark, do you?” Hermione half-whispers. “The dark mark?” You whisper as Hermione goes and grabs a book from one of the many shelfs.“Look here,” Hermione points to a picture of the exact tattoo Snape has on his forearm. You read the page. The dark mark is the tattoo that all the Death Eaters get. This must mean that Snape is a part of the Death Eaters.“We have to follow him tonight and find out what he’s up to,” Harry says without a beat.(tag along(1) or stay safe(2))");
  trueArray.push(findOut);

  let tagAlong = ("Seems legit so you all agree to tag along tonight. Night falls and you meet Harry, Ron, and Hermione outside the potions classroom. The three of you await for Snape to enter, because when he does, you will all follow him. With that you see snape rush past without even noticing you guys. Harry gives you all a nod and you slowly make your way down the hall. Snape makes many twists and turns until he gets to the bridge that leads to the Forbidden Forest. He then makes his way across. “Guys we can’t go in there!” Ron exclaims.“Shut up Ron. We’re going,” Harry says as he follows Professor Snape. You guys all tiptoe across the bridge making sure to keep a distance between yourselves and Snape. The silent chase continues as you all walk through the Forbidden Forest. Snape leads you all to a quiet section with dense foliage. Just then you see it, a unicorn. Snape slowly approaches the unicorn. You see him pull out his wand and whisper, “Avada-Kedavra.” Just like that, the unicorn falls to the ground. Hermione lets out a gasp. The air suddenly becomes cold and stiff. Everything goes silent. A hooded-dark figure appears and gets close to professor Snape. They whisper for a sudden second before the figure begins to lower itself on top of the deceased unicorn. Just then a centaur runs up and scares the figure away.(Should you step out of the way(1) or Stand your ground(2)?)");
  trueArray.push(tagAlong);

  let stepOutOfTheWay = ("You step out of the way and Snape rushes past you and towards the bridge. The centaur speaks in a wise tone, “Are you kids okay?” None of you respond. “Let me guide you to Dumbledore. I’ll explain everything” He says. The centaur proceeds to explain that unicorn blood has the ability to help you live forever, as evil as it may be, the hooded figure was taking advantage of that. You, your friends, and the centaur find Dumbledore waiting just inside the castle. “I have come to understand that you have seen somethings tonight that no children should ever see. I deeply apologize and actions will take place in order to bring justice. 10 points will be awarded to each of you for curiosity. Now off to bed,” He says in a soothing tone before vanishing deeper into the castle. True Ending: The next night, you sit at the tables in the great hall. Dumbledore announces to the school that Gilderoy Lockhart (Dad) will be the new potions master and Remus Lupin will be the new Defence Against the Dark Arts teacher.  Peace is temporarily restored in hogwarts and you are deemed a hero.");
  trueArray.push(stepOutOfTheWay);

  let goHome = ("You decide to just walk home instead. You pass the climbing tree, the rusty bench, and all the usual sites. You get down to your street and enter the pink house in the corner. You go inside, she made you dinner. It’s spaghetti. You gladly eat the spaghetti and head to bed. Your story ends with you being a normal kid with a boring and normal life. But you got spaghetti. You love spaghetti.");
  endingsArray.push(goHome);

  let no = ("You tell that guy that you can find it on your own. You wander aimlessly through the train station. After hours of wandering, your dad comes and picks you up to bring you back home to your mother. You failed your father’s wish for you. This is so sad. Luckily, this is the first time mom and dad have seen each other in years. They embrace. Next thing you know, mom explains that she is aware of the wizarding world and will be more than happy to help you get into hogwarts next year. Dad makes the choice to move back in and your small family rejoices in reunion. They plan on officially getting married in city hall later that month. Yay.");
  endingsArray.push(no);

  let not = ("You mind your own business and you head back to the common room. The rest of the year goes on to be pretty normal, if you ignore that Dumbledore, Cedric, Lavender, and Pansy were brutally murdered by some guy named Voldemort. The year comes to an end and dad picks you up from the train station. He brings you home to your mother. He brought you a grilled cheese sandwich.");
  endingsArray.push(not);

  let staySafe = ("Nah that sounds stupid and not safe. Harry, Ron and a reluctant Hermione depart to follow Snape. You tell them that you’ll stay watch up here and make sure that nobody goes out of the common room. 20 minutes pass and Lavender Brown comes storming down, “Oh hello USERINPUTNAME. Was that you making all that noise earlier?”  “Yeah sorry, I, um, dropped some books,” You mumble back. “Right, so listen Neville, Dean, Seamus and I are sneaking out tonight. It’s not that I don’t trust you but… Petrificus Totalus!” You collapse to the ground, paralyzed and in shock. Lavender looks at you and says, “It’s not personal. You’ll be fine by morning!” The next day you find out that Lavender overheard Harry, Ron, and Hermione so she snuck out to warn Dumbledore. He was lucky enough to have had time to send help to the three of them and save them from certain death. Your dad is now the potions teacher which is cool,  but incredibly awkward.");
  endingsArray.push(staySafe);

  let standYourGround = ("Hermione pulls out her wand, “Expelliarmus!” Snape’s wand flies away. All this commotion causes the figure to come back, just then Harry collapses in pain. You can no longer hear anything other than the ringing in your ears. Flashes of green fly all around you, then everything goes black. You died.")
  endingsArray.push(standYourGround);

  name = prompt("Type in a name");
}

function draw() {
  textSize(15);
  if (state === 2){
    let thisMessage = trueArray.shift();
    text(thisMessage, windowWidth, windowHeight/3, 600, 600);
  }
  if (state === 3){

  }
}

function keyPressed() {
  makeChoice();
}

function makeChoice() {
  let theMessage;
  if (key === "1" || keyCode === "97" && state === 2){
    console.log("here!");
    let thisMessage = trueArray.shift();
    text(thisMessage, windowWidth, windowHeight/3, 600, 600);
    let state === 2;
  }
  if (keyCode === "50" || keyCode === "98"){

  }
  if (key === "r" || key === "R" && state === 1) {
    let theMessage = "You are ten. Your birthday is in one week. You are out for a walk through the old neighbourhood park. You walk past the usual sites, the rusty bench, the climbing tree, and the old hill. You see the same old familiar faces doing the exact same things over and over again. But today something feels off. Since you are a complete idiot, you keep walking. You keep walking down the path. Your phone buzzes and it’s a text from your mom, Dory Lockhart. hey hun. it’s your turn to clean the dishes tonight. xoxo - mum . it’s a shame your father left her. she’s an incredibly sweet woman. you dont know why your mother refuses to talk about him. you decide not to reflect on your life and you keep walking.  the same old path, but this time with a shiver up your spine. the people you used recognize seem to disappear. you need to find an advantage point and fast. you look to your right and you see the old hill. you go up the hill and you see a grungy old boot. but that’s not why you came here.  so you turn around. there is literally no one left. it’s just you. so you look at the boot. there’s a bright letter beside the boot. it’s addressed to you, strangely. upon opening it, it bursts into the air howling at you. " +  name + " grAb tHat stInky boOT nOw! rigHt noW!! grab the boot 1 or go home 2";
    text(theMessage, windowWidth/3 , 50, 600, 600);
    let state = 2;

  }
}

function nextPage() {

}

function displayPage(){

}

function reset(){

}
