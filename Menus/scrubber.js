class Scrubber
{
    constructor(x, y, w, h, color = [255,255,255]){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.unit = this.h / 12;
        this.setting = this.unit * 6;
    }
    plus()
    {
        if(this.setting >= this.w){
            this.setting += this.unit;
        }
    }
    minus()
    {
        if(this.setting <= this.w){
            this.setting -= this.unit;
        }
    }
    draw()
    {
        noStroke();
        fill(255,255,255,80);
        rect(x, y, w, h)
        fill(255,255,255);
        rect(x, y, this.setting, h)
    }
}