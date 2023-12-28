// // The statements in the setup() function
// // execute once when the program begins
// function setup() {
//   createCanvas(720, 400);
//   stroke(255);
// }

// // The statements in draw() are executed until the
// // program is stopped. Each statement is executed in
// // sequence and after the last line is read, the first
// // line is executed again.
// let x = 0;
// let y = 0;
// function draw() {
//   background(200);
//   fill("yellow");
//   text("r", x + 20, y + 20);
//   text("a", x + 40, y + 40);
//   text("i", x + 60, y + 60);
//   text("n", x + 80, y + 80);
//   text("b", x + 100, y + 100);
//   text("o", x + 120, y + 120);
//   text("t", x + 140, y + 140);
//   text("s", x + 160, y + 160);
//   stroke(0);
//   strokeWeight(5);
//   point(x, y);
//   describe("A black dot moves randomly on a gray square.");
// }
// function mouseMoved(event) {
//   //   background(200);

//   x = 100 * noise(0.005 * frameCount);
//   y = 100 * noise(0.005 * frameCount + 10000);

//   describe("A black dot moves randomly on a gray square for the mouse move.");
// }
// let angle = 70;
// let x, y;
// function setup() {
//   createCanvas(400, 300, WEBGL);
// }
// function draw() {
//   background(175);
//   rectMode(CENTER);
//   noStroke();
//   fill(0, 0, 255);
//   translate(x, y);
//   rotateX(angle);
//   rotateY(angle * 0.3);
//   rotateZ(angle * 1.2);
//   // rect(0, 0, 150, 150);

//   box(50, 50, 100, 1000, 1000);

//   angle += 0.07;
// }

// function mouseMoved() {
//   x = mouseX;
//   y = mouseY;
// }

let octahedron;

function preload() {
  octahedron = loadModel("./assets/3dmodels/smart.obj");
}
let x = 0,
  y = 0;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  describe("Vertically rotating 3-d octahedron.");
}

function draw() {
  background(200);
  scale(100);

  // rotateX(0.01 * x);
  // rotateY(0.01 * y);
  let z = x + y;
  z = z / 2;
  // rotateX();
  // rotateY();
  // rotateZ();
  // rotateX(0.01 * z);
  // rotateZ(0.01 * z);
  // translate(x * 0.001, y * 0.001, 0);
  rotateZ(3.15); // minimum angle that needs to be setup to be setup as perfect
  // first we have to find the minx and miny angle that needs to be rotated
  // rotateX(0.9);
  rotateX(y / 700);
  rotateY((x / 1696) * -1);
  // rotateY(--valuetobefindedhere);
  model(octahedron);
}

function mouseMoved() {
  x = mouseX;
  y = mouseY;
  // console.log(x, y);
}
// 1527 720

// 0 to 720 - 0.9 to 0
