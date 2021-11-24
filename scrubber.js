class Scrubber
{
    constructor(scrub_x, scrub_y, w, h, ref, decrease, increase, value, color = [255,255,255], text_size = 26){
        //scrubber or number display
        this.scrub_x = W(scrub_x);
        this.scrub_y = H(scrub_y);
        this.w = W(w);
        this.h = H(h);
        this.color = color;
        this.text_size = text_size;

        //scrubber functions
        this.ref = ref;
        this.value = value;

        //Minus and plus buttons
        this.minus_x = scrub_x - 35; //the W() and H() are taken care of in the image button class
        this.plus_x = scrub_x + 195;
        this.buttons_y = scrub_y + 18;

        let minus_image = loadImage('images/minus.png');
        let plus_image = loadImage('images/plus.png');

        this.minus = new ImageButton(minus_image, this.minus_x, this.buttons_y, 40, 40, decrease);
        this.plus = new ImageButton(plus_image, this.plus_x, this.buttons_y, 40, 40, increase);

    }
    draw_bar() {
        let setting = this.ref();
        noStroke();
        rectMode(CORNER);
        fill(255,255,255,80);
        rect(this.scrub_x, this.scrub_y, this.w, this.h)
        fill(255,255,255);
        rect(this.scrub_x, this.scrub_y, setting * this.w, this.h)
    }
    draw_value(){
        fill([0,0,0]);
        textSize(this.text_size);
        text(this.value(), W((this.minus_x + this.plus_x)/2), this.scrub_y + H(20));
    }

    draw()
    {
        this.minus.draw();
        this.draw_bar();
        this.draw_value();
        this.plus.draw();
    }
}