function preload()
{
    //background_music = loadSound("./songs/A Sweet Smile 8 Bit.ogg");
    background_music = loadSound("./songs/GiSt_Adrift.ogg");
    fs_icon = loadImage('images/Fullscreen.png');
    efs_icon = loadImage('images/ExitFullscreen.png');
    undo_icon = loadImage('images/undo.png');
    reset_icon = loadImage('images/reset.png');
    menu_icon = loadImage('images/menu.png');
    plus_icon = loadImage('images/plus.png');
    minus_icon = loadImage('images/minus.png');
    backdrop = loadImage('images/yourname.jpg');
    clickSound = loadSound('songs/mouseClick.ogg');
    win_sound = loadSound("./songs/winSound.wav");
    
    //tutorial images
    step1_img = loadImage('./images/step1.png');
    step2_img = loadImage('./images/step2.png');
    step3_img = loadImage('./images/step3.png');
    step4_img = loadImage('./images/step4.png');
    step5_img = loadImage('./images/step5.png');
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
    win_sound.setVolume(1);
    win_sound.pause();

    game = new Game('easy');

    main_menu = new Menu(main_menu_template);
    mode_menu = new Menu(mode_menu_template);
    diff_menu = new Menu(diff_menu_template);
    help_menu = new Menu(help_menu_template);
    options_menu = new Menu(options_menu_template);

    rules_page = new TextPage(rules_text);
    proof_page = new TextPage(proof_text);
    credits_page = new TextPage(credits_text);

    fs_enforce_button = new AnimatedButton(() => { this.enforce_fullscreen(); },
        windowWidth/2 * W_undo(), windowHeight/2 * H_undo(), fs_icon.width * W_undo(), fs_icon.height* H_undo(),
        () => { this.fullscreen_switcher(); }, admin = true);

}

const scenes = {
    MAIN_MENU:         () => { main_menu.draw(); },
        GAME_MODE:     () => { mode_menu.draw(); },
            DIFFICULTY:() => { diff_menu.draw(); },
            GAME:      () => { game.draw(); },
        HELP:          () => { help_menu.draw(); },
            TUTORIAL:  () => { }, //help menu starts game if tutorial button is pressed
            RULES:     () => { rules_page.draw(); },
            PROOF:     () => { proof_page.draw(); },
        OPTIONS:       () => { options_menu.draw(); },
            MUSIC:     () => { }, //no idea what to do here
        CREDITS:       () => { credits_page.draw(); },
}
let scene = scenes.MAIN_MENU;

function draw() 
{
    push();
    imageMode(CENTER);
    image(backdrop, displayWidth/2, displayHeight/2, W(backdrop.width), H(backdrop.height));
    
    scene();

    if(!fullscreen()){
        fs_enforce_button.draw();

        if(fullscreen_status === true)
        {
            background_music.pause();
            fullscreen_status = false;
        }
        game.pause_components(false);
    }
    if(fullscreen()){
        if(fullscreen_status === false)
        {
            background_music.play();
            fullscreen_status = true;
        }
        game.pause_components(true);
    }

    pop();
    mouseReset();
}





