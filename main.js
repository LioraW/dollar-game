// document.addEventListener('contextmenu', event => event.preventDefault());

function preload()
{
    //background_music = loadSound("./songs/Mario Bros -Remix(Chill Trap)_128k.ogg");
    //thwomp = loadSound("./songs/Super Mario 64 Thwomp Sound_128k.ogg")
}

function setup()
{
    createCanvas(window.innerWidth,window.innerHeight);
    window.addEventListener('resize', function(){ resizeCanvas(window.innerWidth,window.innerHeight)} );
    frameRate(60);
    angleMode(DEGREES);
    //background_music.setVolume(0.02);
    //background_music.loop()

    game = new Game(20, 4, false, 10);

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

function draw() 
{
    push();
    background(255, 255, 255);
    fill(255,0,0);
    
    game.draw();

    text(displayWidth + " " + displayHeight, 100, 100);

    mouseReset();
    translate(width/2, height/2);
    scale(1);
    pop();
}





