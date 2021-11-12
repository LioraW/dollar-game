class Menu
{
    constructor(buttonsData)
    {
        this.name = buttonsData.title;
        this.x = displayWidth/2;
        this.y = displayHeight/3;
        this.title_font_size = res_font(100);
        this.text_fill = [200,200,200];

        this.buttonWidth = W(500);
        this.buttonHeight = H(60);
        this.buttonFontSize = res_font(32);
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
            let button = new TextButton(buttonPlan.title, this.x, this.y + H(buttonPlan.heightOffset),
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
        text(this.name, this.x, this.y);

        this.buttons.forEach(button => {
            button.draw();
        });

    }
}
