class Menu
{
    constructor(buttonsData)
    {
        this.name = buttonsData.title;
        this.x = displayWidth/2 * W_undo();
        this.y = displayHeight/3 * H_undo();
        this.title_font_size = res_font(100);
        this.text_fill = [200,200,200];

        this.buttonWidth = 500;
        this.buttonHeight = 60;
        this.buttonFontSize = 32;
        this.buttonTextFill = [200,200,200];
        this.buttonColor = [50,50,50];
        this.buttonOutlineColor = [200,200,200];
        this.buttonHoverColor = [50, 50, 50];

        this.buttons = [];
        this.img_buttons = [];
        this.scrubbers = [];
        this.texts = [];
        this.get_buttons(buttonsData.buttons);
        this.get_img_btns(buttonsData.pic_btns);
        this.get_scrubbers(buttonsData.scrubbers);
    }
    get_buttons(buttonsData)
    {
        buttonsData.forEach(buttonPlan => {
            let button = new TextButton(buttonPlan.title, this.x, this.y + buttonPlan.heightOffset,
                this.buttonWidth, this.buttonHeight, buttonPlan.onClick, this.buttonFontSize, this.buttonTextFill,
                this.buttonColor, this.buttonOutlineColor, this.buttonHoverColor);
            this.buttons.push(button);
        });
    }
    get_img_btns(data)
    {
        data.forEach(data => {
            let image = loadImage(data.image)
            let img_button =  new ImageButton(image, data.x, this.y + data.y, 
                data.w, data.h, data.onClick);
            this.img_buttons.push(img_button);
        });
    }
    get_scrubbers(data)
    {
        data.forEach(data => {
            let scrub = new Scrubber(data.scrub_x, data.scrub_y, data.w, data.h);
            this.scrubbers.push(scrub);
            this.texts.push([data.title, data.text_x, data.text_y]);
        });
    }
    draw()
    {   
        textAlign(CENTER,CENTER);
        fill(this.text_fill);
        textSize(this.title_font_size)
        text(this.name, W(this.x), H(this.y));

        var true_returner = []
        this.buttons.forEach(button => {
            true_returner.push(button.draw());
        });
        this.img_buttons.forEach(img_button => {
            img_button.draw();
        });
        this.scrubbers.forEach(scrub => {
            scrub.draw();
        });
        
        return true_returner;
    }
}
