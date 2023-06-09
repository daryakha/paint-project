// Verbindung zum Server herstellen
const socket = io();

// Setup-Funktion
function setup() {
  createCanvas(700, 440);
  background(255);
  frameRate(90);

  // Event-Handler für neue Linien vom Server
  socket.on("line", (data) => {
    // Zeichne die Linie
    line(data.x, data.y, data.px, data.py);
  });

  // Event-Handler für das Löschen der Zeichnungen vom Server
  socket.on("clear", () => {
    // Lösche die Zeichnung
    background(255);
  });

  // Event-Handler für vorhandene Zeichnungen beim Verbinden zum Server
  socket.on("drawings", (data) => {
    // Zeichne vorhandene Linien
    for (const lineData of data) {
      line(lineData.x, lineData.y, lineData.px, lineData.py);
    }
  });
}

function draw() {
  // tool box
  push();
  strokeWeight(2);
  // border shows what color is picked
  line(46, 0, 46, 400);
  line(45, 395, 263, 395);
  line(264, 395, 264, 440);
  pop();

  push();
  noStroke();

  fill("white");
  rect(0, 0, 45, 440); //vertical
  rect(0, 396, 263, 49); //horizontal

  // color picker setup
  fill("red");
  rect(0, 0, 40, 40);
  fill("orange");
  rect(0, 40, 40, 40);
  fill("yellow");
  rect(0, 80, 40, 40);
  fill("green");
  rect(0, 120, 40, 40);
  fill("lightblue");
  rect(0, 160, 40, 40);
  fill("blue");
  rect(0, 200, 40, 40);
  fill("purple");
  rect(0, 240, 40, 40);
  fill("pink");
  rect(0, 280, 40, 40);
  fill("magenta");
  rect(0, 320, 40, 40);
  fill("white");
  rect(0, 360, 40, 40);
  fill("black");
  rect(0, 400, 40, 40);

  // clear button
  rect(45, 405, 75, 30, 10);
  fill("white");
  textSize(25);
  text("clear", 55, 428);

  // brush width picker setup
  fill("black");
  rect(130, 400, 25, 40); //thick
  rect(165, 400, 10, 40); //medium
  rect(185, 400, 1, 40); //narrow

  textSize(15);
  text("line width", 195, 425);

  pop();

  // condition line drawing
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  // condition clear canvas
  if (
    mouseX > 45 &&
    mouseX < 120 &&
    mouseY > 405 &&
    mouseY < 435 &&
    mouseIsPressed
  ) {
    background(255);
  }

  // conditions brush color
  if (mouseX < 40 && mouseY < 40 && mouseIsPressed) {
    stroke("red");
  }
  if (mouseX < 40 && mouseY > 40 && mouseY < 80 && mouseIsPressed) {
    stroke("orange");
  }
  if (mouseX < 40 && mouseY > 80 && mouseY < 120 && mouseIsPressed) {
    stroke("yellow");
  }
  if (mouseX < 40 && mouseY > 120 && mouseY < 160 && mouseIsPressed) {
    stroke("green");
  }
  if (mouseX < 40 && mouseY > 160 && mouseY < 200 && mouseIsPressed) {
    stroke("lightblue");
  }
  if (mouseX < 40 && mouseY > 200 && mouseY < 240 && mouseIsPressed) {
    stroke("blue");
  }
  if (mouseX < 40 && mouseY > 240 && mouseY < 280 && mouseIsPressed) {
    stroke("purple");
  }
  if (mouseX < 40 && mouseY > 280 && mouseY < 320 && mouseIsPressed) {
    stroke("pink");
  }
  if (mouseX < 40 && mouseY > 320 && mouseY < 360 && mouseIsPressed) {
    stroke("magenta");
  }
  if (mouseX < 40 && mouseY > 360 && mouseY < 400 && mouseIsPressed) {
    stroke("white");
  }
  if (mouseX < 40 && mouseY > 400 && mouseY < 440 && mouseIsPressed) {
    stroke("black");
  }

  // conditions line width
  if (mouseX > 130 && mouseX < 170 && mouseY > 400 && mouseIsPressed) {
    strokeWeight(25);
  }
  if (mouseX > 165 && mouseX < 175 && mouseY > 400 && mouseIsPressed) {
    strokeWeight(10);
  }
  if (mouseX > 180 && mouseX < 191 && mouseY > 400 && mouseIsPressed) {
    strokeWeight(1);
  }
}
