class Menu
{
    constructor(buttonsData)
    {
        this.name = buttonsData.title;       // title of the menu
        this.x = displayWidth/2 * W_undo();  // centering of the menu
        this.y = displayHeight/3 * H_undo();
        this.title_font_size = res_font(100);
        this.text_fill = [200,200,200]; 


        this.buttonWidth = 500;
        this.buttonHeight = 60;
        this.buttonFontSize = res_font(32);

        // list of buttons scrubbers and texts that the menu will hold
        this.buttons = [];
        this.img_buttons = [];
        this.scrubbers = [];
        this.texts = [];

        // fetching all the button, scrubs, texts data and creating the buttons, scrubs and texts
        this.get_buttons(buttonsData.buttons);

        if (buttonsData.hasOwnProperty('pic_btns')){
            this.get_img_btns(buttonsData.pic_btns);
            console.log("has pic_btns!");
        }
        if(buttonsData.hasOwnProperty('scrubbers')){
            this.get_scrubbers(buttonsData.scrubbers);
        }
    }
    // populates the buttons
    get_buttons(buttonsData)
    {
        // loop the all the objects features and construct the buttons
        buttonsData.forEach(buttonPlan => {
            let button = new TextButton(buttonPlan.title, this.x + buttonPlan.x, this.y + buttonPlan.y,
                buttonPlan.w, buttonPlan.h, buttonPlan.onClick, this.buttonFontSize);
            this.buttons.push(button);
        });
    }
    // populates the image buttons
    get_img_btns(data)
    {
        data.forEach(data => {
            let image = loadImage(data.image)
            let img_button =  new ImageButton(image, data.x, this.y + data.y, 
                data.w, data.h, data.onClick);
            this.img_buttons.push(img_button);
        });
    }
    // populates the scrubbers and their appropriate texts
    get_scrubbers(data)
    {
        data.forEach(scrubber => {
            //only use the value if the scrubber has a function to return a value
            let value = () => {};
            if (scrubber.hasOwnProperty('value')){
                    value = scrubber.value;
            }
            //create the scrubber
            let scrub = new Scrubber( scrubber.scrub_x, this.y + scrubber.scrub_y, scrubber.w, scrubber.h,
                                    scrubber.ref, scrubber.decrease, scrubber.increase, value);
            this.scrubbers.push(scrub);
            this.texts.push([scrubber.title, W(scrubber.text_x), H(scrubber.text_y), res_font(scrubber.text_size)]);
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
        this.texts.forEach(txt => {
            fill(255,255,255);
            textSize(txt[3]);
            text(txt[0], txt[1], txt[2]);
        });
        
        return true_returner;
    }
}
