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
  name = prompt("Type in a name");
}

function draw() {
  textSize(15);

}

function makeChoice() {
  if (keyCode === "49" || keyCode === "97"){

  }
  if (keyCode === "50" || keyCode === "98"){

  }
  if (keyCode === "82") {
    text("You are ten. Your birthday is in one week. You are out for a walk through the old neighbourhood park. You walk past the usual sites, the rusty bench, the climbing tree, and the old hill. You see the same old familiar faces doing the exact same things over and over again. But today something feels off. Since you are a complete idiot, you keep walking. You keep walking down the path. Your phone buzzes and it’s a text from your mom, Dory Lockhart.
          hey hun. it’s your turn to clean the dishes tonight. xoxo - mum . it’s a shame your father left her. she’s an incredibly sweet woman. you dont know why your mother refuses to talk about him. you decide not to reflect on your life and you keep walking.  the same old path, but this time with a shiver up your spine. the people you used recognize seem to disappear. you need to find an advantage point and fast. you look to your right and you see the old hill.
          you go up the hill and you see a grungy old boot. but that’s not why you came here.  so you turn around. there is literally no one left. it’s just you. so you look at the boot. there’s a bright letter beside the boot. it’s addressed to you, strangely. upon opening it, it bursts into the air howling at you. user input here grAb tHat stInky boOT nOw! rigHt noW!! grab the boot or go home", 223, 264, 300, 300);
  }
}

function nextPage() {

}

function displayPage(){

}

function reset(){

}
