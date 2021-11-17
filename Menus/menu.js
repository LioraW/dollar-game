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
        this.get_buttons(buttonsData.buttons);
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
        
        return true_returner;
    }
}
