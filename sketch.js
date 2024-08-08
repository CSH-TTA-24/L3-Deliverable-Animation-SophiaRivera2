let r;
let g;
let b; 
let speed = 0.2;


let xPos;
let yPos = 25; 


function setup() {
  createCanvas(500, 500);
  background(0);

  xPos = random(0, 500);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255); 
}

// function draw() {
//   background(0, 20);

//   fill(r, g, b);
//   ellipse(250, yPos, 50, 50);

//   xPos += 3;

//   if (xPos > 525) {
//     xPos = -25;
//   }
// }
function draw() {
  background(0, 20 );

  fill(r, g, b)
ellipse(250 , yPos, 50, 50);

  yPos += 3;

  if(yPos > 525) {
    yPos = -25;


  }}
   function mouseClicked() {
  background(0);
  yPos = 25;

  r = random(0, 255);
  g= random(0, 255);
  b= random(0, 255);


  
}
