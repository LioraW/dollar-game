class TextPage {
    constructor(textPageData) {
        this.title = textPageData.title;
        this.text = textPageData.text;
        this.x = displayWidth/16;
        this.y = displayHeight/8;
        this.offset = 40;
        this.title_font_size = res_font(80);
        this.text_fill = [255,255,255];

        if (textPageData.hasOwnProperty('text_size')){
            this.text_font_size = res_font(textPageData.text_size);
        } else {
            this.text_font_size = res_font(32);
        }

        this.example_graphs = [];
        if (textPageData.hasOwnProperty('graphs')){
            textPageData.graphs.forEach(graphTemplate => {
                //only way to get this to work is to hard code it
                if (graphTemplate === 'example_graph_1'){
                    this.example_graphs.push(new PreGraph(example_graph_1, 12, -1));
                } else if (graphTemplate === 'example_graph_2')
                this.example_graphs.push(new PreGraph(example_graph_2, 12, -1));
            })
        }

        this.mainMenuButton = new TextButton("Main Menu",
            displayWidth*(7/8)*W_undo(), this.y * H_undo() - H(100), 175, 50,
            () => { scene = scenes.MAIN_MENU;}, 20, );

        console.log(this.example_graphs)
    }
    draw(){
        textSize(this.title_font_size);
        fill(this.text_fill);
        stroke(0,0,0);
        strokeWeight(2);
        text(this.title, this.x, this.y);
        textSize(this.text_font_size);
        text(this.text, this.x, this.y + H(this.offset));
        this.mainMenuButton.draw();

        this.example_graphs.forEach(graph => { graph.draw(); });


    }
}