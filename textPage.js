class TextPage {
    constructor(textPageData) {
        this.title = textPageData.title;
        this.text = textPageData.text;
        this.x = displayWidth/2;
        this.y = displayHeight/3;
        this.title_font_size = res_font(100);
        this.text_fill = [200,200,200];
        this.text_font_size = res_font(32)
    }
    draw(){
        textSize(this.title_font_size);
        fill(this.text_fill);
        text(this.title, this.x, this.y);

        textSize(this.text_font_size);
        text(this.text, this.x, this.y + H(80));
    }
}