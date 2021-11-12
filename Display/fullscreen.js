var w = 0;
var h = 0;
var fullscreen_status = false;


// this switches from fullsceen to non fullscreen on call
function fullscreen_switcher()
{
    let fs = fullscreen();
    fullscreen(!fs);
}
// this function displays an animation and png for the fullscreen enforcer button
function enforce_fullscreen()
{
    background(0,0,0,100);
    rectMode(CENTER,CENTER);
    // fill of the white rectangle
    fill(255,255,255,200 - w * 2);
    noStroke();
    rect(windowWidth/2, windowHeight/2, fs_icon.width + w, fs_icon.height + h, 10);
    strokeWeight(0);

    // width and height of the rect being updated
    w += 1.5;
    h += 1.5 * fs_icon.height / fs_icon.width;
    // reset the width and height when the reach a cetain length
    if(w > 100){
        w = 0;
        h = 0;
    }
    
    // display the image in center image mode
    imageMode(CENTER);
    image(fs_icon, windowWidth/2, windowHeight/2, fs_icon.width, fs_icon.height);
    // dislpay some text in the middle of the animation that tells the user to click
    // the button
    fill(0,0,0);
    textSize(24);
    textAlign(CENTER);
    text("Click to Enter\n Fullscreen", windowWidth/2, windowHeight/2);
    textSize(12);
}