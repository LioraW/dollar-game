class CustomButton extends Button
{
    constructor(drawing, x, y, width, height, onClick) {
        super("NOTICE: this is a CustomButton!",x, y, width, height, onClick);
        this.drawing = drawing;
    }
    draw_img_btn(){
        imageMode(CENTER);
        this.mouse_listener();
        image(this.drawing, this.x, this.y, this.width, this.height);
    }
    draw_func_btn(){
        imageMode(CENTER);
        this.mouse_listener();
        this.drawing();
    }
}