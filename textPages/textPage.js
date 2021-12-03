class TextPage {
    constructor(textPageData) {
        this.title = textPageData.title;
        this.text = textPageData.text;
        this.x = displayWidth/16;
        this.y = displayHeight/8;
        this.offset = 40;
        this.title_font_size = res_font(80);
        this.text_fill = [255,255,255];
        this.text_font_size = res_font(32)
        this.mainMenuButton = new TextButton("Main Menu",
            1700, 70, 175, 50,
            () => { scene = scenes.MAIN_MENU;}, 20, [200,200,200], [50,50,50],
            [200,200,200], [50, 50, 50]);

    }
    draw(){
        textSize(this.title_font_size);
        fill(this.text_fill);
        stroke(0,0,0);
        strokeWeight(2);
        text(this.title, this.x, this.y);

        textSize(this.text_font_size);
        text(this.text, this.x, this.y + H(this.offset));
        this.mainMenuButton.draw();

    }
}