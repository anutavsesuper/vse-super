function setup() {
 createCanvas(windowWidth, windowHeight);
  background(0);
}

  let ellipse1 = 0;
  let ellipse2 = 0;
  let ellipsespeed = 15;
  let ellipsespeed2 = 10;
  let rect1 = 0;
  let rect2 = 0;
  let rect3 = 0;
  let rect4 = 0;
  let rectwer = 8;
  let rectwar = 1;
  let rectwur = 5;
  let rectwor = 1;

function draw() {
  let b = map(mouseX, 0, width, 255, 0);
  fill(0, b, 0);
   noStroke();

  rect(0, 0, windowWidth, windowHeight)
  var c = map(mouseX, 10, width, 20, 175);
  var d = map(mouseX, 8, width, 20, 300);
  fill(0, c, 0);
  ellipse(50, 50, d, d);
  ellipse(400, 300, c, c);

  ellipse(ellipse1, 200, 20, 20);
  if ((ellipse1 > width) ||
  (ellipse1 < 0)) {
  ellipsespeed = ellipsespeed * -1;
  }
  ellipse1 += ellipsespeed;

  ellipse(ellipse2, 500, 70, 70);
  if ((ellipse2 > width) ||
  (ellipse2 < 0)) {
  ellipsespeed2 = ellipsespeed2 * -1;
  }
  ellipse2 += ellipsespeed2;

  rect(535, rect1, 30, 500)
  if(rect1 > 100 ) {
  rectwer = - 1;
  }
  if(rect1 < 0) {
  rectwer = 1
  }
  rect1 = rect1 + rectwer;

  rect(rect2, 550, 100, 10)
  if(rect2 > 500 ) {
  rectwar = - 1;
  }
  if(rect2 < 0) {
  rectwar = 1
  }
  rect2 = rect2 + rectwar;

  rect(rect3, 325, 50, 50)
  if(rect3 > 550 ) {
  rectwur = - 5;
  }
  if(rect3 < 0) {
  rectwur = 5
  }
  rect3 = rect3 + rectwur;

  rect(20, rect4, 20, 200)
  if(rect4 > 400 ) {
  rectwor = - 1;
  }
  if(rect4 < 0) {
  rectwor = 1
  }
  rect4 = rect4 + rectwor;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
