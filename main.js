function preload()
{
    //background_music = loadSound("./songs/A Sweet Smile 8 Bit.ogg");
    background_music = loadSound("./songs/GiSt_Adrift.ogg");
    thwomp = loadSound("./songs/Super Mario 64 Thwomp Sound_128k.ogg")
    fs_icon = loadImage('images/Fullscreen.png');
    efs_icon = loadImage('images/ExitFullscreen.png');
    undo_icon = loadImage('images/undo.png');
    reset_icon = loadImage('images/reset.png');
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
    background_music.setVolume(0.3);
    background_music.loop();
    background_music.pause();

    this.step1_text = new TextBox(  "Click on the node to\n"+
                                    "give a dollar to its\n" + 
                                    "brother. This node\n" +
                                    "has 1 brother so it\n" +
                                    "only loses 1 dollar", W(530), H(750), W(185), H(150), res_font(20));
    this.step2_text = new TextBox(  "Next click on this\n" +
                                    "node twice to give a\n" + 
                                    "dollar to each of its\n"+
                                    "brothers. It has 3\n" +
                                    "brothers and we're\n" +
                                    "giving twice so it will\n" +
                                    "lose 6 dollars", W(1130), H(750), W(185), H(190), res_font(20));
    this.step3_text = new TextBox(  "Lets try clicking on\n" + 
                                    "this node to see what\n" + 
                                    "happens", W(530), H(500), W(200), H(95), res_font(20));
    this.step4_text = new TextBox(  "Actually lets undo\n" + 
                                    "that move by pressing\n"+
                                    "the undo button", W(300), H(350), W(215), H(85), res_font(20));
    this.step5_text = new TextBox(  "We can also reset the\n" +
                                    "graph to its original\n" +
                                    "form by pressing the\n" + 
                                    "reset button here", W(350), H(400), W(215), H(105), res_font(20));
    this.step6_text = new TextBox(  "Wonderful! Now use all\n" +
                                    "these tools to make\n" +
                                    "all the nodes have a\n" +
                                    "dollar value of 0 or\n" +
                                    "more. [Click to Continue]", 
                                    displayWidth/2, displayHeight/2, W(240), H(150), res_font(20));
    this.step8_text = new TextBox(  "Congratulations! You solved the graph! Now\n" +
                                    "you know the basics. You can use these\n" +
                                    "skills to solve even harder graphs. See how many\n" +
                                    "you can do with out stopping and show off your\n" + 
                                    "highscore!", 
                                    displayWidth/2, displayHeight/2 - H(100), W(455), H(140), res_font(20));

    game = new Game('easy');
    fs_enforce_button = new AnimatedButton(() => { this.enforce_fullscreen(); },
        windowWidth/2, windowHeight/2, fs_icon.width, fs_icon.height,
        () => { this.fullscreen_switcher(); })

        print("Goob's got no life and has a flat chest and also is very very faaaaatttt");
}

function draw() 
{
    //print(displayWidth, displayHeight);
    push();
    imageMode(CENTER);
    image(backdrop, displayWidth/2, displayHeight/2, W(backdrop.width), H(backdrop.height));
    
    game.draw();

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

    

    mouseReset();
    translate(width/2, height/2);
    scale(1);
    pop();
    mouseReset();
}





