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


function preload(){
  choice1 = loadImage("assets/Choice 1.png");
  choice2 = loadImage("assets/Choice 2.png");
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  imageMode(CENTER);
  image(choice1, windowWidth/4, windowHeight* (3/4), choice1.width, choice1.height);
  image (choice2, windowWidth*(3/4), windowHeight* (3/4), choice2.width, choice2.height);
  
  phraseInput = createInput("");
  phraseInput.attribute("placeholder", "Enter a name!");
  phraseInput.parent("phrase");

  analyseButton = createButton(choice1);
  analyseButton.attribute("type", "button");  // note to self: button type instead of submit type
  analyseButton.parent("phrase");

  analyseButton2 = createButton(choice2);
  analyseButton2.attribute("type", "button");
  analyseButton2.parent("phrase");

  result = createP();
  result.parent("container");
}

function draw() {

}
