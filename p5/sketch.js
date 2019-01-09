// Major Project
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let name = "userinput";  //userinput
let choice1;
let choice2;
let phraseInput, analyseButton, analyseButton2;
let result;
let canvas;


function preload(){
}


function setup(){
  let canvas = createCanvas(600, 600);
  canvas.position(600, 100);

  phraseInput = createInput("");
  phraseInput.attribute("placeholder", "Enter a name!");
  // phraseInput.parent("phrase");

  analyseButton = createButton(choice1);
  analyseButton.attribute("type", "button");  // note to self: button type instead of submit type
  // analyseButton.parent("phrase");

  analyseButton2 = createButton(choice2);
  analyseButton2.attribute("type", "button");
  // analyseButton2.parent("phrase");

  result = createP();
  // result.parent("container");
}

function draw() {
  background(26, 78, 90);
  imageMode(CENTER);
  let choice1 = createImg("assets/Choice 1.png");
  let choice2 = createImg("assets/Choice 2.png");
  let body = createImg("assets/body.png");

  body.size(100, 100);
  choice1.position(350, 350);
  choice2.position(650, 300);
  body.position(825, 697);
}
