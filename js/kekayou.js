function setup() {
 createCanvas(windowWidth, windowHeight);
  background(0);
}

  let ellipse1 = 0;
  let ellipse2 = 0;
  let ellipsespeed = 6;
  let ellipsespeed2 = 10;
  let rect1 = 0;
  let rect2 = 0;
  let rect3 = 0;
  let rect4 = 0;
  let rectwer = 2;
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

  ellipse(ellipse1, width * 0.1, 50, 50);
  if ((ellipse1 > width - 25) ||
  (ellipse1 < 0)) {
  ellipsespeed = ellipsespeed * -1;
  }
  ellipse1 += ellipsespeed;

  ellipse(ellipse2, width * 0.3, 100, 100);
  if ((ellipse2 > width - 50) ||
  (ellipse2 < 0)) {
  ellipsespeed2 = ellipsespeed2 * -1;
  }
  ellipse2 += ellipsespeed2;

  rect(height * 1.5, rect1, 120, 320)
  if(rect1 > height - 320 ) {
  rectwer = - 2;
  }
  if(rect1 < 0) {
  rectwer = 2
  }
  rect1 = rect1 + rectwer;

  rect(rect2, width * 0.68, 100, 30)
  if(rect2 > width - 100 ) {
  rectwar = - 1;
  }
  if(rect2 < 0) {
  rectwar = 1
  }
  rect2 = rect2 + rectwar;

  rect(rect3, width * 0.5, 200, 100)
  if(rect3 > width - 200 ) {
  rectwur = - 5;
  }
  if(rect3 < 0) {
  rectwur = 5
  }
  rect3 = rect3 + rectwur;

  // width * 0.19, height * 0.5

  rect(height * 0.2, rect4, 30, 200)
  if(rect4 > height - 200 ) {
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
