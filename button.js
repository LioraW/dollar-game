class Button
{
    constructor(text, x, y, width, height, onClick, color = [127,197,250]) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.onClick = onClick;
        this.color = color; //an array of [R, G, B]
        this.mute = false;
        this.paused = false;
    }

    // controls whether the a button is muted(not active)
    mute_IO(mute){
        this.mute = mute;
    }
    // controls whether a button is paused(same as not active)
    pause(status){
        this.paused = status;
    }
    // checks is the mouse has been pressed over the button
    mouse_listener()
    {
        if ( mouse_downed && !this.mute && !this.paused &&
            mouseX > this.x - this.width/2 && mouseX < this.x + this.width/2 &&
            mouseY > this.y - this.height/2 && mouseY < this.y + this.height/2)
        {
            // reset the mouse_downed and mouse_upped functions
            mouseReset();
            // then call the passed in function
            this.onClick();
        }
    }
    draw_button(){
        fill(255,255,255);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height, 7); //outline
        fill(this.color);
        rect(this.x, this.y, this.width, this.height, 7); //shade
        textAlign(CENTER,CENTER);
        strokeWeight(0);
        fill(0,0,0);
        text(this.text, this.x, this.y);
        strokeWeight(1);
    }
    draw()
    {
        this.mouse_listener();
        this.draw_button();
    }
}

