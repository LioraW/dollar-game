class Game
{
    constructor(node_size, edges_max, provable, money_range) {
        this.currentGraph = new Graph(node_size, edges_max, provable, money_range)
        this.currentGraph.populate_nodes();
        this.currentGraph.populate_edges();
        this.startingGraph = this.currentGraph; //needs a copy constructor, this won't work
        this.gameWon = false;
        this.undo = new Button("undo", 100, 300, 60, 30, () => {
                console.log("clicked!")
                if (this.currentGraph.lastMove !== -1){
                    this.currentGraph.nodes[this.currentGraph.lastMove].give(-1);
                }
                this.currentGraph.set_last_move(-1);}
         );
    }

    draw()
    {
        this.undo.draw(); //apparently, buttons need to happen before the graph for the graph to be responsive
        this.currentGraph.draw();

    }

}