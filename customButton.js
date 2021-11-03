class CustomButton extends Button
{
    constructor(drawing, x, y, width, height, onClick) {
        super("NOTICE: this is a CustomButton!",x, y, width, height, onClick);
        this.drawing = drawing;
    }
    draw(){
        this.mouse_listener();
        this.drawing();
    }
}