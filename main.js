function preload()
{
    background_music = loadSound("./songs/A Sweet Smile 8 Bit.ogg");
    thwomp = loadSound("./songs/Super Mario 64 Thwomp Sound_128k.ogg")
    fs_icon = loadImage('images/Fullscreen.png');
    efs_icon = loadImage('images/ExitFullscreen.png');
    undo_icon = loadImage('images/undo.png');
    reset_icon = loadImage('images/reset.png');
}

function setup()
{
    createCanvas(window.innerWidth,window.innerHeight);
    window.addEventListener('resize', function(){ resizeCanvas(window.innerWidth,window.innerHeight)} );
    frameRate(60);
    angleMode(DEGREES);
    background_music.setVolume(0.1);
    background_music.loop();
    background_music.pause();

    dummy = new Graph();

    game = new Game('hard');
    fs_enforce_button = new AnimatedButton(() => { this.enforce_fullscreen(); },
        windowWidth/2, windowHeight/2, fs_icon.width, fs_icon.height,
        () => { this.fullscreen_switcher(); })

        print("Goob's got no life and has a flat chest and also is very very faaaaatttt");
}

function draw() 
{
    push();
    
    game.draw();

    if(!fullscreen()){
        fs_enforce_button.draw();

        if(fullscreen_status === true)
        {
            background_music.pause();
            fullscreen_status = false;
        }
        game.pause_game(false);
    }
    if(fullscreen()){
        if(fullscreen_status === false)
        {
            background_music.play();
            fullscreen_status = true;
        }
        game.pause_game(true);
    }

    

    mouseReset();
    translate(width/2, height/2);
    scale(1);
    pop();
    mouseReset();
}





