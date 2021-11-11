class TextButton extends Button
{
    constructor(text, x, y, width, height, onClick, font = res_font(12), text_fill = [0,0,0],
        color = [127,197,250], outline_color = [0,0,0], hover_color = [255,255,0])
    {
        super(x, y, width, height, onClick);
        this.text = text;
        this.font = font;
        this.text_fill = text_fill;
        this.color = color; //an array of [R, G, B]
        this.hover_color = hover_color; //an array of [R, G, B] but for the hover affect
        this.outline_color = outline_color;
        this.edge_brightness_switch = 0;
        this.edge_brightness = 100;
    }
    // if the button is being hovered over we will first caclulate the brightness
    // of the glow and then return that glow color
    draw_hover()
    {
        if(this.being_hovered())
        {
            // this checks whether we should be decrease or increasing the glow intensity
            if(this.edge_brightness_switch){
                this.edge_brightness+=8;
            }else{
                this.edge_brightness-=8;
            }

            // if the glow intensity is below 100 start increasing
            // if its above 255 start decreasing
            if(this.edge_brightness < 100){ this.edge_brightness_switch = 1; }
            else if(this.edge_brightness > 255){ this.edge_brightness_switch = 0; }
            
            // return the glow color
            return [this.hover_color[0], this.hover_color[1], this.hover_color[2], this.edge_brightness];
        }
        // otherwise remain black
        return this.outline_color;
    }
    draw_button(){
        fill(255,255,255);
        rectMode(CENTER);

        fill(this.color);
        strokeWeight(4)
        stroke(this.outline_color);
        rect(this.x, this.y, this.width, this.height, 7); //shade

        stroke(this.draw_hover());
        noFill();
        rect(this.x, this.y, this.width, this.height, 7); //glow out line
        
        textAlign(CENTER,CENTER);
        strokeWeight(0);
        fill(this.text_fill);
        textSize(this.font);
        text(this.text, this.x, this.y);
        textSize(res_font(12));
        stroke(0,0,0);
        strokeWeight(1);
    }
    draw()
    {   
        this.mouse_listener();
        this.draw_button();
    }
}