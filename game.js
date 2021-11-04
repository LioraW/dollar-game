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

        //Buttons with anonymous functions passed in
        this.undoButton = new Button("undo", 50, 300, 100, 50,
            () => { this.graph.undo(); } );
        this.restartButton = new Button ("restart", 50, 350, 100, 50,
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
        this.undoButton.draw(); //apparently, buttons need to happen before the graph for the button to be responsive
        this.restartButton.draw();
        this.graph.draw();

        if (this.graph.is_solved()) {
            this.display_game_win();
        }

    }

}