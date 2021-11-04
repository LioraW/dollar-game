class Game
{
    constructor(node_size, edges_max, solvable, money_range) {
        //create graph
        this.graph = new Graph(node_size, edges_max, solvable, money_range)

        //Buttons with anonymous functions passed in
        this.undoButton = new Button("undo", 50, 300, 100, 50,
            () => { this.graph.undo(); } );
        this.restartButton = new Button ("restart", 50, 350, 100, 50,
            () => { this.graph.reset_graph(); } );
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