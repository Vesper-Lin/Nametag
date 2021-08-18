var cnt = 8;
var fontBlack;

// generate a random integer between min (included) and max (included)
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function preload() {
  fontBlack = loadFont("./Inter-Black.ttf");
}

function setup() {
  var color_base = color(100, 92, 92);   // deep gray

  createCanvas(800, 800);

  textFont(fontBlack);
  textSize(133);

  background(color_base);
}

function draw() {
  var color_base = color(100, 92, 92);   // deep gray
  var color_A = color(87, 102, 144);     // mysterious blue
  var color_B = color(248, 131, 121);    // orange
  var color_C = color(255, 127, 80);     // coral
  var color_D = color(251, 76, 115);     // red
  var color_E = color(154, 200, 226);    // light blue
  var color_F = color(248, 233, 64);     // yellow
  var color_G = color(36, 211, 140);     // green
  var color_H = color(231, 153, 176);    // pink
  var color_I = color(4, 147, 251);      // blue
  var color_J = color(209, 164, 122);    // Shang-Chi gold

  for (var i = 0; i < cnt; i += 1) {
    for (var j = 0; j < cnt; j += 1) {
      var x = i * 100;
      var y = j * 100;

      var color_flag = randomInteger(1, 8);
      var shape_flag = randomInteger(1, 2);
      var arc_flag = randomInteger(1, 4);

      switch (color_flag) {
        case 1:
          fill(color_A);
          break;
        case 2:
          fill(color_B);
          break;
        case 3:
          fill(color_C);
          break;
        case 4:
          fill(color_D);
          break;
        case 5:
          fill(color_E);
          break;
        case 6:
          fill(color_F);
          break;
        case 7:
          fill(color_G);
          break;
        case 8:
          fill(color_H);
          break;
      }

      noStroke();

      switch (shape_flag) {
        case 1:
          circle(x + 50, y + 50, 100);
          break;
        case 2:
          switch (arc_flag) {
            case 1:
              arc(x, y, 200, 200, 0, HALF_PI);
              break;
            case 2:
              arc(x + 100, y, 200, 200, HALF_PI, PI);
              break;
            case 3:
              arc(x + 100, y + 100, 200, 200, PI, PI + HALF_PI);
              break;
            case 4:
              arc(x, y + 100, 200, 200, PI + HALF_PI, TWO_PI);
              break;
          }
          break;
      }
    }
  }

  fill(color_base);

  stroke(color_G);
  rect(0, 400, 100);
  rect(700, 400, 100);
  rect(600, 100, 100);
  rect(600, 600, 100);

  stroke(color_G);
  arc(100, 500, 200, 200, PI, PI + HALF_PI);
  arc(700, 400, 200, 200, 0, HALF_PI);
  arc(600, 200, 200, 200, PI + HALF_PI, TWO_PI);
  arc(700, 600, 200, 200, HALF_PI, PI);
  rect(600, 500, 100);
  rect(100, 400, 600, 100);
  rect(600, 400, 100);
  rect(600, 300, 100);
  rect(600, 200, 100);

  noStroke();
  for (var m = 0; m < 229; m += 1) {
    noStroke();
    fill(random(256), random(256), random(256), random(256));
    circle(random(610, 690), random(510, 590), random(10));
  }

  fill(255);
  stroke(color_J);
  strokeWeight(3);
  text("YUXUAN", 100, 498);
  text("L", 614, 300);
  textSize(120);
  text("I", 632, 395);

  noLoop();
}

function keyTyped() {
  if (key === " ") {
    saveCanvas("nametag.png");
  }
}
