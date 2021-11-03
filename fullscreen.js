var w = 0;
var h = 0;

function fullscreen_switcher()
{
    let fs = fullscreen();
    fullscreen(!fs);
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
}