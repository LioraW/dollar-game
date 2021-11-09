class ImageButton extends Button
{
    constructor(image, x, y, width, height, onClick, hover_color = [255,255,255]) {
        super(x, y, width, height, onClick);
        this.image = image;
        this.hover_color = hover_color;
    }
    // if the button is being hovered over we will first caclulate the brightness
    // of the glow and then return that glow color
    draw_hover()
    {
        if(this.being_hovered())
        {
            return this.hover_color;
        }
        // otherwise remain black
        return [200,200,200];
    }
    draw(){
        
        imageMode(CENTER);
        rectMode(CENTER,CENTER);
        this.mouse_listener();
        fill(this.draw_hover());
        rect(this.x, this.y, this.width + 10, this.height + 10, 7);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}