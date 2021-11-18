class TextPage {
    constructor(textPageData) {
        this.title = textPageData.title;
        this.text = textPageData.text; //an array of strings, to be separated by zero or more images
        this.images = []; //an array of images
        this.x = displayWidth/10;
        this.y = displayHeight/5;
        this.offset = 80;
        this.title_font_size = res_font(100);
        this.text_fill = [200,200,200];
        this.text_font_size = res_font(32)

        if (textPageData.hasOwnProperty('images')){
            this.loadImages(textPageData.images);
        }
    }
    loadImages(imageNames){
        //I can't think of any other solution other than hard coding the names into the class...
        imageNames.forEach(name => {
            switch(name){
                case 'rules_image_1':
                    this.images += rules_image_1;
                    break;
                case 'rules_image_2':
                    this.images += rules_image_2;
                    break;
                default:
                    break;
            }
        });
    }
    resetOffset(){
            this.offset = 80;
    }
    draw(){
        this.resetOffset();
        textSize(this.title_font_size);
        fill(this.text_fill);

        text(this.title, this.x, this.y);

        textSize(this.text_font_size);
        for (let i = 0; i < this.text.length; i++){
            text(this.text[i], this.x, this.y + H(this.offset));
            if (this.images.length < i){
                image(this.images[i], this.x, this.y + H(this.offset), W(this.images[i].width), H(this.images[i].height));
                this.offset += this.images[i].height;
            }
            this.offset += 160;
        }

    }
}