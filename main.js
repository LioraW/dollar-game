function preload()
{
    background_music = loadSound("./songs/" + songs[song.index]);
    fs_icon = loadImage('images/Fullscreen.png');
    efs_icon = loadImage('images/ExitFullscreen.png');
    undo_icon = loadImage('images/undo.png');
    reset_icon = loadImage('images/reset.png');
    menu_icon = loadImage('images/menu.png');
    backdrop = loadImage('images/yourname.jpg');
    clickSound = loadSound('songs/mouseClick.ogg');
    win_sound = loadSound("./songs/Coin_Flip.ogg");
    
    //tutorial images
    step1_img = loadImage('./images/step1.png');
    step2_img = loadImage('./images/step2.png');
    step3_img = loadImage('./images/step3.png');
    step4_img = loadImage('./images/step4.png');
    step5_img = loadImage('./images/step5.png');

    //Custom dollar image
    dollar_img = loadImage('./images/dollarSign.png');
}

function setup()
{
    createCanvas(window.innerWidth,window.innerHeight);
    window.addEventListener('resize', function(){ resizeCanvas(window.innerWidth,window.innerHeight)} );
    frameRate(60);
    angleMode(DEGREES);
    background_music.setVolume(Volume.music/10);
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
    math_page = new TextPage(math_background_text);
    credits_page = new TextPage(credits_text);

    fs_enforce_button = new AnimatedButton(() => { this.enforce_fullscreen(); },
        windowWidth/2 * W_undo(), windowHeight/2 * H_undo(), fs_icon.width * W_undo(), fs_icon.height* H_undo(),
        () => { this.fullscreen_switcher(); }, admin = true);

}
// list of all the scenes and there functions
const scenes = {
    MAIN_MENU:         () => { main_menu.draw(); },
        GAME_MODE:     () => { mode_menu.draw(); },
            DIFFICULTY:() => { diff_menu.draw(); },
            GAME:      () => { game.draw(); },
        HELP:          () => { help_menu.draw(); },
            TUTORIAL:  () => { }, //help menu starts game if tutorial button is pressed
            RULES:     () => { rules_page.draw(); },
            MATH:     () => { math_page.draw(); },
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

    if(Volume.change){
        background_music.setVolume(Volume.music/10)
        Volume.change = false;
    }

    // fullscreen enforcer
    {
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
            if(fullscreen_status === false && background_music.isLoaded())
            {
                background_music.play();
                fullscreen_status = true;
            }
            game.pause_components(true);
        }
    }

    // looping through songs
    {
        if(!background_music.isPlaying() && fullscreen() && !song.updated){
            //print('song being updated: current song index', song.index);
            song.index = update_index(song.index, songs.length);
            background_music = loadSound("./songs/" + songs[song.index]);
            song.updated = true;
            //print('after loading song: current song index', song.index);
        }
        if(song.updated === true && background_music.isLoaded() && fullscreen()){
            //print('song is finished loading current song:', songs[song.index]);
            background_music.play();
            song.updated = false;
        }
    }

    pop();
    mouseReset();
}





