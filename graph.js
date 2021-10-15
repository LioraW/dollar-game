class Graph
{
    constructor(node_size, edges_max, provable, money_range)
    {
        this.node_size = node_size; // how many nodes there are
        this.edges_max = edges_max; // the max amount of connections a node can have
        this.provable = provable;   // whether this graph must be provable
        this.money_range = money_range; // the range of balances per vertex
        this.balance = 0;   // overall graph balance
        this.nodes = [];    // array for all nodes
        this.edges = [];    // array for all edges
        this.x_coord = [];  // array of x_coords
        this.y_coord = [];  // array of y_coords
    }
    // creates the map. this should only be called on initial map creation and map reset
    create() // genus = #edges - #nodes + 1 =< total_money =>> absolutely solvable 
    {
        // this creates a node node_size times
        for(var i = 0; i < this.node_size; i++)
        {
            var ready = true;   // node is ready to be created
            var dollar = 10;    // just dummy dollar value variable for now
            var x =  random(250, 1286) + 1; // randomly generating the x and y for each node
            var y = random(200, 664) + 1;
            // we want to make sure that none of the nodes get to close
            // so this loops through all the previous nodes and makes sure
            // the curren node being created is not "too_close" to another
            // node. if it is break the loop and restart the creation of 
            // this node at line 21.
            for(var j = 0; j < this.nodes.length; j++)
            {
                // check if to close to prev node
                if(too_close(x, y, this.nodes[j].get_x(), this.nodes[j].get_y(), 70))
                {
                    i--;
                    ready = false; // not ready for creation if yes
                    print("yo"); // just text to tell me when this happens
                    break;
                }
            }
            // if ready is still true then create the node
            if(ready){
                this.nodes[i] = new Node(i, dollar, x, y);
            } 
        }
    }
    // the draw function. literally just loops through the edges and activates there draw functions
    // same for the nodes
    draw()
    {
        for(var i = 0; i < this.edges.length; i++)
        {
            this.edges[i].draw();
        }
        for(var i = 0; i < this.nodes.length; i++)
        {
            this.nodes[i].draw();
        }
    }

}