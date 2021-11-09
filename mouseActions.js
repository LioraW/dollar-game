let mouse_downed = false;
let mouse_upped = false;

// the exact frame the mouse is pressed down mouse_downed is set true
function mousePressed()
{
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
        
    }
    //mouseClickSound.play();
    mouse_downed = true;
    return false;
}
// the exact frame the mouse is released mouse_downed is set false
function mouseReleased()
{
    mouse_upped = true;
    return false;
}
// this function should be called every frame to ensure that the mouse_downed and mouse_upped 
// are only true for the frame in which there were set true
function mouseReset()
{
    mouse_upped = false;
    mouse_downed = false;
}
function touchStarted() {
    getAudioContext().resume();
}