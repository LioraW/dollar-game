class TextPage {
    constructor(textPageData) {
        this.title = textPageData.title;
        this.text = textPageData.text;
        this.x = displayWidth/16;
        this.y = displayHeight/6;
        this.offset = 80;
        this.title_font_size = res_font(100);
        this.text_fill = [200,200,200];
        this.text_font_size = res_font(32)
        this.mainMenuButton = new TextButton("Main Menu",
            displayWidth*(7/8)*W_undo(), this.y * H_undo() - H(100), 175, 50,
            () => { scene = scenes.MAIN_MENU;}, 20, [200,200,200], [50,50,50],
            [200,200,200], [50, 50, 50]);

    }
    draw(){
        textSize(this.title_font_size);
        fill(this.text_fill);
        text(this.title, this.x, this.y);

        textSize(this.text_font_size);
        text(this.text, this.x, this.y + H(this.offset));
        this.mainMenuButton.draw();

    }
}