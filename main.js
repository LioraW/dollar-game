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

function preload()
{
    background_music = loadSound("./songs/A Sweet Smile 8 Bit.ogg");
    thwomp = loadSound("./songs/Super Mario 64 Thwomp Sound_128k.ogg")
    fs_icon = loadImage('images/Fullscreen.png');
    print('this is', fs_icon.height);
}

function setup()
{
    createCanvas(window.innerWidth,window.innerHeight);
    window.addEventListener('resize', function(){ resizeCanvas(window.innerWidth,window.innerHeight)} );
    frameRate(60);
    angleMode(DEGREES);
    background_music.setVolume(0.1);
    background_music.loop();

    game = new Game(5, 3, false, 10);
    fs_enforce_button = new CustomButton(() => { this.enforce_fullscreen(); },
        windowWidth/2, windowHeight/2, fs_icon.width, fs_icon.height,
        () => { this.fullscreen_switcher(); })

}

function draw() 
{
    push();
    
    game.draw();

    text(displayWidth + " " + displayHeight, 100, 100);
    if(!fullscreen()){
        fs_enforce_button.draw();
        game.pause_game(false);
    }else{
        game.pause_game(true);
    }

    mouseReset();
    translate(width/2, height/2);
    scale(1);
    pop();
}





