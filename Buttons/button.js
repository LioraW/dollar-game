class Button
{
    constructor(x, y, width, height, onClick, admin = false)
    {
        this.x = W(x);
        this.y = H(y);
        this.width = W(width);
        this.height = H(height);   
        this.onClick = onClick;
        this.mute = false;
        this.paused = false;
        this.admin = admin;
        this.hover_action = () => {};
    }
    // returns true if the button is being hovered over
    being_hovered()
    {
        if(mouseX > this.x - this.width / 2 && mouseX < this.x + this.width / 2 &&
            mouseY > this.y - this.height / 2 && mouseY < this.y + this.height / 2){
            this.hover_action();
            return true;
        }
        return false;
    }
    set_hover_action(action){
        this.hover_action = action;
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
        if ( mouse_downed && !this.mute && !this.paused && this.being_hovered() && (fullscreen() || this.admin) )
        {
            
            // reset the mouse_downed and mouse_upped functions
            mouseReset();
            // then call the passed in function
            clickSound.play();
            this.onClick();
            return true;
        }
        return false;
    }
}

