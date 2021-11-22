class Scrubber
{
    constructor(x, y, w, h, ref, color = [255,255,255]){
        this.x = W(x);
        this.y = H(y);
        this.w = W(w);
        this.h = H(h);
        this.color = color;
        this.ref = ref;
    }
    draw()
    {
        var setting = this.ref();
        noStroke();
        rectMode(CORNER);
        fill(255,255,255,80);
        rect(this.x, this.y, this.w, this.h)
        fill(255,255,255);
        rect(this.x, this.y, setting * this.w, this.h)
    }
}