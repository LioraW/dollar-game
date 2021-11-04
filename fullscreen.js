var w = 0;
var h = 0;
var screen_shrunk = false;
var screen_grew = false;
var fullscreen_status = false;


function reset_screen_changed()
{
    screen_shrunk = false;
    screen_grew = false;
}

function fullscreen_switcher()
{
    let fs = fullscreen();
    fullscreen(!fs);
    if(fs){
        print("shrink");
        screen_shrunk = true;
    }else{
        print("grow");
        screen_grew = true;
    }
}

function enforce_fullscreen()
{
    background(0,0,0,50);
    
    fill(255,255,255,200 - w * 2);
    noStroke();
    rect(windowWidth/2, windowHeight/2, fs_icon.width + w, fs_icon.height + h);
    strokeWeight(0);

    w += 1.5;
    h += 1.5 * fs_icon.height / fs_icon.width;
    if(w > 100){
        w = 0;
        h = 0;
    }
    
    imageMode(CENTER);
    image(fs_icon, windowWidth/2, windowHeight/2, fs_icon.width, fs_icon.height);
    fill(0,0,0);
    textSize(24);
    text("Click to Enter\n Fullscreen", windowWidth/2, windowHeight/2);
    textSize(12);
}