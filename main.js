

function preload()
{
    background_music = loadSound("./songs/A Sweet Smile 8 Bit.ogg");
    thwomp = loadSound("./songs/Super Mario 64 Thwomp Sound_128k.ogg")
    fs_icon = loadImage('images/Fullscreen.png');
    efs_icon = loadImage('images/ExitFullscreen.png');
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
    background_music.pause();

    game = new Game(5, 3, false, 10);
    fs_enforce_button = new CustomButton(() => { this.enforce_fullscreen(); },
        windowWidth/2, windowHeight/2, fs_icon.width, fs_icon.height,
        () => { this.fullscreen_switcher(); })

}

function draw() 
{
    push();
    
    game.draw();

    if(!fullscreen()){
        print("small");
        fs_enforce_button.draw_func_btn();

        if(fullscreen_status === true)
        {
            background_music.pause();
            fullscreen_status = false;
        }
        game.pause_game(false);
    }
    if(fullscreen()){
        print("big");

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

    reset_screen_changed();
    mouseReset();
}





