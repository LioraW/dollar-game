let displayTimeout = false;
document.addEventListener('contextmenu', event => event.preventDefault());

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  window.addEventListener('resize', function(){ resizeCanvas(window.innerWidth,window.innerHeight)} );
  frameRate(60);
  angleMode(DEGREES);
}

{
    var keyInput = [];  
    // key typed  
    {
    var keyFull = [];
    }
    keyPressed = function () {keyInput[keyCode] = true;};
    keyReleased = function () {keyInput[keyCode] = false;};
  
    keyTyped = function () {
        keyFull[keyCode] = true;
    };
} // key functions

function draw() {
    push();
    background(255, 255, 255);
    fill(255,0,0);
    text(mouseX, 200,200);
    rect(mouseX,40,40,40);
    translate(width/2, height/2);
    scale(1);
    pop();
}

