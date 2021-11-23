class Scrubber
{
    constructor(title, x, y, w, h, ref, lower = ()=>{}, raise = ()=>{}, color = [255,255,255]){
        this.title = title;
        this.x = W(x);
        this.y = H(y);
        this.w = W(w);
        this.h = H(h);
        this.color = color;
        this.ref = ref;
        this.lower = lower;
        this.raise = raise;
        this.plus = new ImageButton('images/plus.png', this.x + this.w, this.y, 40, 40, this.raise);
        this.minus = new ImageButton('images/minus.png', this.x, this.y, 40, 40, this.lower);
    }
    draw()
    {
       // this.minus.draw();
        let setting = this.ref();
        noStroke();
        rectMode(CORNER);
        fill(255,255,255,80);
        rect(this.x, this.y, this.w, this.h)
        fill(255,255,255);
        rect(this.x, this.y, setting * this.w, this.h)
       // text(this.title, this.x, this.y);
        //this.plus.draw();
    }
}