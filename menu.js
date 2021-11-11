class Menu
{
    constructor(name, x, y, font_size = res_font(12), text_fill = [0,0,0], draw_title = "null")
    {
        this.name = name;
        this.x = x;
        this.y = y;
        this.font_size = font_size;
        this.text_fill = text_fill;
        this.buttons = []
    }
    add_button(button)
    {
        this.buttons.push(button);
    }
    draw()
    {   
        textAlign(CENTER,CENTER);
        fill(this.text_fill);
        textSize(this.font_size)
        text(this.name, this.x, this.y);
        for(var i = 0; i < this.buttons.length; i++)
        {
            this.buttons[i].draw();
        }
    }
}
