class Game
{
    constructor(node_size, edges_max, provable, money_range) {
        this.currentGraph = new Graph(node_size, edges_max, provable, money_range)
        this.currentGraph.populate_nodes();
        this.currentGraph.populate_edges();
        this.lastMove = this.currentGraph.lastMove; //will be id of the node that was last clicked, for now, make it invalid
        this.startingGraph = this.currentGraph;
        this.gameWon = false;
    }
    draw()
    {
        this.currentGraph.draw();
    }

}