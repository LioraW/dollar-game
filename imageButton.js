class ImageButton extends Button
{
    constructor(image, x, y, width, height, onClick) {
        super("NOTICE: this is a CustomButton!",x, y, width, height, onClick);
        this.image = image;
    }
    draw(){
        imageMode(CENTER);
        this.mouse_listener();
        image(this.image, this.x, this.y, this.width, this.height);
    }
}