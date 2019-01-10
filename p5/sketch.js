// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let choice1;
let choice2;

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
}

function draw() {

}
