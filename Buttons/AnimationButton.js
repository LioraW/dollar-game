class AnimatedButton extends Button
{
    constructor(drawing, x, y, width, height, onClick, admin = false) {
        super(x, y, width, height, onClick, admin);
        this.drawing = drawing;
    }
    draw(){
        imageMode(CENTER);
        this.drawing();
        return this.mouse_listener();
    }
}