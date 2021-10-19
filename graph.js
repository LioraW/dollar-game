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
    are_brothers(node1, node2)
    {
        for(var i = 0; i < node1.get_total_con(); i++)
        {
            if (node2.get_id() === node1.get_con(i).get_id())
            {
                return true;
            }
        }
        return false;
    }
    // creates the edges
    populate_edges()
    {
        for(var i = 0; i < this.nodes.length; i++)
        {
            var cond = (int)(random(this.edges_max)) + 1;
            for(var j = this.nodes[i].get_total_con(); j < cond; j++)
            {
                var attempt = 0;
                var ready_con = true;
                var rand_index = -1;
                do
                {
                    if(attempt >= this.nodes.length)
                    {
                        ready_con = false;
                        // print('exhaust');
                        break;
                    }
                    rand_index = (int)(random(this.nodes.length));
                    // print(i + "th node going for " + j + "th con at " + rand_index + " (which has " + this.nodes[rand_index].get_total_con() + " cons) with lim" + cond);
                    // print('brother: ',  this.are_brothers(this.nodes[i], this.nodes[rand_index]));
                    // print('self:', i === rand_index);
                    attempt++;

                } while(this.nodes[rand_index].get_total_con() >= this.edges_max || i === rand_index 
                || this.are_brothers(this.nodes[i], this.nodes[rand_index]));
                
                if (ready_con)
                {
                    this.edges.push(new Edge(this.nodes[i], this.nodes[rand_index]))
                } 
            }
        }
        print(this.edges);
    }
    // creates the nodes. this should only be called on initial map creation and map reset
    populate_nodes() // genus = #edges - #nodes + 1 =< total_money =>> absolutely solvable 
    {
        // this creates a node node_size times
        for(var i = 0; i < this.node_size; i++)
        {
            var ready = true;   // node is ready to be created
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
                this.nodes.push(new Node(i, (int)(random(-this.money_range,this.money_range)), x, y));
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
            this.nodes[i].mouse_listener();
        }
    }

}