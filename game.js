class Game
{
    constructor(type) {
        //create graph
        switch(type){
            case 'easy':
                this.graph = this.easy_graph(true);
                break;
            case 'medium':
                this.graph = this.medium_graph(true);
                break;
            case 'hard':
                this.graph = this.hard_graph(true);
                break;
            default:
                this.graph = this.random_graph(true);
                break;
        }
        //Change Graph buttons - Solvable
        this.easyGraphButton = new Button("Easy", 50, 150, 100, 50,
            () => { this.graph = this.easy_graph(true); });
        this.mediumGraphButton = new Button("Medium", 50, 200, 100, 50,
            () => { this.graph = this.medium_graph(true); });
        this.hardGraphButton = new Button("Hard", 50, 250, 100, 50,
            () => { this.graph = this.hard_graph(true); });

        //Change Graph buttons - Not Necessarily Solvable
        this.easyGraphButton2 = new Button("Easy", displayWidth - 150, 150, 100, 50,
            () => { this.graph = this.easy_graph(false); });
        this.mediumGraphButton2 = new Button("Medium", displayWidth - 150, 200, 100, 50,
            () => { this.graph = this.medium_graph(false); });
        this.hardGraphButton2 = new Button("Hard", displayWidth - 150, 250, 100, 50,
            () => { this.graph = this.hard_graph(false); });

        //Buttons with anonymous functions passed in
        this.undoButton = new Button("undo", 50, 350, 100, 50,
            () => { this.graph.undo(); } );
        this.restartButton = new Button ("restart", 50, 400, 100, 50,
            () => { this.graph.reset_graph(); } );


    }
    //generate graph types
    easy_graph(make_solvable){
        return new Graph(7, 2, make_solvable, 10);
    }
    medium_graph(make_solvable){
        return new Graph(12, 3, make_solvable, 10);
    }
    hard_graph(make_solvable){
        return new Graph(20, 4, make_solvable, 10);
    }
    random_graph(make_solvable){
        return new Graph (random(3, 20), random(2,4), make_solvable, 10);
    }

    display_game_win() {
        fill(173, 216, 230);
        rect(displayWidth/3, displayHeight/3, 300, 100, 7); //outline
        textAlign(CENTER,CENTER);
        fill(0,0,0);
        textSize(30);
        text("You won!!", displayWidth/3 + 150, displayHeight/3 + 50)
        textSize(12); //reset size
    }

    draw()
    {

        textAlign(CENTER,CENTER);
        fill(0,0,0);
        textSize(26);
        text("Get Solvable Graphs:", 150, 120);
        text("Get Graphs that Are not Necessarily Solvable:", displayWidth - 300, 120);
        text("Useful Buttons:", 125, 320);
        textSize(12); //reset size

        this.easyGraphButton.draw();
        this.mediumGraphButton.draw();
        this.hardGraphButton.draw();
        this.undoButton.draw();
        this.restartButton.draw();

        this.easyGraphButton2.draw();
        this.mediumGraphButton2.draw();
        this.hardGraphButton2.draw();

        this.graph.draw();

        if (this.graph.is_solved()) {
            this.display_game_win();
        }

    }

}