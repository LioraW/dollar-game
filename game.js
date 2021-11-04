class Game
{
    constructor(node_size, edges_max, provable, money_range) {
        //create graph
        this.graph = new Graph(node_size, edges_max, provable, money_range)
        this.graph.populate_nodes();
        this.graph.populate_edges();
        this.graph.rebalance();
        this.graph.make_solvable();

        //Extra data
        this.starting_state = this.get_starting_state();

        //Buttons with anonymous functions passed in
        this.undoButton = new Button("undo", 50, 300, 100, 50,
            () => { this.undo(); } );
        this.restartButton = new Button ("restart", 50, 350, 100, 50,
            () => { this.reset_game_state(); } );
        this.efsButton = new CustomButton ( efs_icon, 
            displayWidth - (efs_icon.width/6), displayHeight - (efs_icon.height/6),
             efs_icon.width/6, efs_icon.height/6, 
            () => { fullscreen_switcher(); } );
    }
    pause_game(status){
        this.undoButton.pause(!status);
        this.restartButton.pause(!status);
        this.efsButton.pause(!status);
        this.graph.set_listening(!status);
    }

    undo () {
        if (this.graph.lastMove !== -1) {
            this.graph.nodes[this.graph.lastMove].give(-1);
        }
        this.graph.set_last_move(-1);
    }
    //returns an object with the node id's as keys and the dollar amounts as the values
    get_starting_state() {
        let state = {};
        this.graph.nodes.forEach((node) => state[node.get_id()] = node.get_value());
        return state;
    }
    reset_game_state() {
        Object.entries(this.starting_state).forEach(([id, value]) => this.graph.nodes[id].set_value(value))
    }
    display_game_win() {
        background(0,0,0,50);
        fill(173, 216, 230);
        rectMode(CENTER);
        rect(windowWidth/2, windowHeight/2, 300, 100, 7); //outline
        fill(0,0,0);
        textAlign(CENTER,CENTER);
        textSize(30);
        text("You won!!", windowWidth/2, windowHeight/2)
        textSize(12); //reset size
    }

    draw()
    {
        background(255, 255, 255);
        this.graph.draw();
        
        this.undoButton.draw();
        this.restartButton.draw();
        if (this.graph.is_solved()) {
            this.undoButton.mute_IO(true);
            this.restartButton.mute_IO(true);
            this.display_game_win();
        }else
        {
            this.undoButton.mute_IO(false);
            this.restartButton.mute_IO(false);
        }
        this.efsButton.draw_img_btn();
        
    }

}