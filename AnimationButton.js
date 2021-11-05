class AnimatedButton extends Button
{
    constructor(drawing, x, y, width, height, onClick) {
        super(x, y, width, height, onClick);
        this.drawing = drawing;
    }
    draw(){
        imageMode(CENTER);
        this.mouse_listener();
        this.drawing();
    }
}