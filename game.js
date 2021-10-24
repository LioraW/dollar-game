class Game
{
    constructor(node_size, edges_max, provable, money_range) {
        //create graph
        this.graph = new Graph(node_size, edges_max, provable, money_range)
        this.graph.populate_nodes();
        this.graph.populate_edges();

        //Extra data
        this.starting_state = this.get_starting_state();
        this.gameWon = false;

        //Buttons with anonymous functions passed in
        this.undoButton = new Button("undo", 100, 300, 60, 30,
            () => { this.undo(); } );
        this.restartButton = new Button ("restart", 100, 400, 60, 30,
            () => { this.reset_game_state(); } );
    }

    //button functions
    undo () {
        if (this.graph.lastMove !== -1) {
            this.graph.nodes[this.graph.lastMove].give(-1);
        }
        this.graph.set_last_move(-1);
    }
    //returns an object with the node id's as keys and the dollar amounts as the values
    get_starting_state(){
        let state = {};
        this.graph.nodes.forEach((node) => state[node.get_id()] = node.get_value());
        return state;
    }
    reset_game_state(){
        Object.entries(this.starting_state).forEach(([id, value]) => this.graph.nodes[id].set_value(value))
    }

    draw()
    {
        this.undoButton.draw(); //apparently, buttons need to happen before the graph for the graph to be responsive
        this.restartButton.draw();
        this.graph.draw();

        if (this.graph.is_solved()) {
            fill(173, 216, 230);
            rect(displayWidth/3, displayHeight/3, 300, 100, 7); //outline
            textAlign(CENTER,CENTER);
            fill(0,0,0);
            text("You won!!", displayWidth/3 + 150, displayHeight/3 + 50)
        }

    }

}