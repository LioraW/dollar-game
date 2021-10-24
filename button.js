class Button
{
    constructor(text, x, y, width, height, onClick) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.onClick = onClick;
    } 


    
    // checks is the mouse has been pressed over the button
    mouse_listener()
    {
        if ( mouse_downed &&
            mouseX > this.x && mouseX < this.x+this.width &&
            mouseY > this.y && mouseY < this.y + this.height)
        {
            // reset the mouse_downed and mouse_upped functions
            mouseReset();
            // then call the passed in function
            this.onClick();

        }
    }
    draw_button(){
        fill(255,255,255);
        rect(this.x, this.y, this.width, this.height, 7); //outline
        fill(127,197,250);
        rect(this.x, this.y, this.width, this.height, 7); //shade
        textAlign(CENTER,CENTER);
        fill(0,0,0);
        text(this.text, this.x+(this.width/2), this.y+(this.height/2));
    }
    draw()
    {
        this.mouse_listener();
        this.draw_button();
    }
}

