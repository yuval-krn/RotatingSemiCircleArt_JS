let points = [];
let myGraph;
let inRotation = false;
let angle = 0;
function setup(){
  createCanvas(windowWidth, windowHeight);
  myGraph = createGraphics(windowWidth, windowHeight); //much more efficient
  background(7, 5, 43);
  myGraph.background(7,5,43);
  let normal = false;
  for (let x = 25; x <= width; x+=50){
    for(let y = 0; y <= height; y+=50){
      let curr = new Hub(x, y, normal);
      points.push(curr);
      curr.show();
      curr = new Hub(x, y + 25, !normal);
      points.push(curr);
      curr.show();
    }
  }
}

function draw(){
  
  if(angle === 0) image(myGraph, 0, 0);
  else{
    background(7, 5, 43);
  }
  if (mouseIsPressed && angle === 0){
    angle = 0.1
  }
  if(angle != 0){
    rotateEm();
  }
}

function rotateEm(){
  for(let i = 0; i < points.length; i++){
    points[i].rotShow(angle);
  }
  angle += 0.05;
  if (angle > TWO_PI)
    angle = 0;
}

//can be switched out with rotateEm() in draw() to provide alternate functionality
function doTransform(){
  for(let i = 0; i < points.length; i++){
    d = dist(mouseX, mouseY, points[i].x, points[i].y);
    if (d < 200){
      rHold = random(160, 180);
      gHold = random(50, 150);
      bHold = random(75, 125);
      points[i].upShow(rHold, gHold, bHold);
    }
  }
}