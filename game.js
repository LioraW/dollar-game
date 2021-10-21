class Game
{
    constructor(node_size, edges_max, provable, money_range) {
        this.currentGraph = new Graph(node_size, edges_max, provable, money_range)
        this.currentGraph.populate_nodes();
        this.currentGraph.populate_edges();
        this.lastMove = this.currentGraph.lastMove; //will be id of the node that was last clicked, for now, make it invalid
        this.startingGraph = this.currentGraph;
        this.gameWon = false;
        this.undo = new Button(
            "undo",
            100,
            300,
            60,
            30,
            () => {//anonymous function to call all the things it needs to do
                print("clicked");
                this.take();
                this.currentGraph.reset_last_move();
            }
        );
    }
    take()
    {
        if (this.currentGraph.lastMove !== -1){
            this.currentGraph.nodes[this.currentGraph.lastMove].give(-1);
        }
    }

    draw()
    {
        this.currentGraph.draw();
        this.undo.draw();
    }

}