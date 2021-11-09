class TextBox 
{
    constructor(text, x, y, w, h){
        this.text = text;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw()
    {
        rectMode(CENTER, CENTER);
        textAlign(LEFT);
        fill(100,100,100);
        stroke(200,200,200);
        rect(this.x, this.y, this.w, this.h, 7);
        noStroke();
        fill(255,255,255);
        textSize(16);
        text(this.text, this.x - this.w / 2 + 5, this.y);
        stroke(1);

    }
}