// Fractal Triangle
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let startingPoints = [{x: 300, y: 100}, {x:100, y: 500}, {x: 500, y:400}];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  serp(startingPoints, 6);
}

function serp(points, depth){
  let theColor = ["pink", "green", "mauve", "blue", "brown", "red", "yellow"];
  fill(theColor[depth]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].x);
  if (depth > 0){
    serp([points[0], midPoint(points[0], points[1]), midPoint(points[0], points[1])], depth - 1);
    serp([points[1], midPoint(points[0], points[1]), midPoint(points[1], points[2])], depth - 1);
    serp([points[2], midPoint(points[0], points[2]), midPoint(points[2], points[1])], depth - 1);
  }
}

function midPoint(point1, point2){
  let x = (point1.x + point2.x)/2;
  let y = (point1.y + point2.y)/2;
  return {x: x, y: y};
}
