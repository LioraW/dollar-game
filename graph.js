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
        this.lastMove = -1;
    }
    // returns the last move
    get_last_move()
    {
        return this.lastMove;
    }
    // sets that last move
    set_last_move(id)
    {
        this.lastMove = id;
    }
    // returns true if 2 node are related
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
    // returns if two nodes are too close to each other given a radius and nodes
    too_close(node1, node2, radius){
        return node1.get_x() > node2.get_x() - radius && node1.get_x() < node2.get_x() + radius 
        && node1.get_y() > node2.get_y() - radius && node1.get_y() < node2.get_y() + radius;
    }
    // returns if two nodes are too close to each other given a radius and both x,y pains
    too_close(x, y, x1, y1, radius){
        return x > x1 - radius && x < x1 + radius && y > y1 - radius && y < y1 + radius;
    }
    // returns true if to nodes are too far given a specified limit
    too_far(node1, node2, limit)
    {
        return sqrt(sq(node1.get_x() - node2.get_x()) + sq(node1.get_y() - node2.get_y())) > limit;
    }
    // creates the edges
    populate_edges()
    {
        // loop through nodes
        for(var i = 0; i < this.nodes.length; i++)
        {
            // generates a max anount of allowed connections (cond) for this node
            var cond = (int)(random(this.edges_max)) + 1;
            // will check how many connnections the current node has and then will loop the
            // rest of the way till it reaches the allowed amount of connections
            for(var j = this.nodes[i].get_total_con(); j < cond; j++)
            {
                var attempt = 0; // records how many connection attempts have been made
                var ready_con = true; // ready to make a connections
                var rand_index = -1;  // will hold the index of a node that the current node 
                                        // is trying to connect to
                do
                {
                    // if it has made an attempt to connect to every node then give up
                    // and stop trying to connect
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
                || this.are_brothers(this.nodes[i], this.nodes[rand_index]) 
                || this.too_far(this.nodes[i], this.nodes[rand_index], 400));
                // ^^^ basically the condition is that (1) the node we are connecting to does not
                // already have the max amount of connections (2) the node is not trying to connect
                // to itself (3) the node it is trying to connect to is not already a brother (connection)
                // (4) the nodes are not too far from each other.
                
                // if after all that the node is ready then create a new edge with ends being both nodes
                if (ready_con)
                {
                    this.edges.push(new Edge(this.nodes[i], this.nodes[rand_index]))
                } 
            }
        }
    }
    // creates the nodes. this should only be called on initial map creation and map reset
    populate_nodes() // genus = #edges - #nodes + 1 =< total_money =>> absolutely solvable 
    {
        // this creates a node node_size times
        for (var i = 0; i < this.node_size; i++) {
            var ready = true;   // node is ready to be created
            var x = random(250, 1286) + 1; // randomly generating the x and y for each node
            var y = random(200, 664) + 1;
            // we want to make sure that none of the nodes get to close
            // so this loops through all the previous nodes and makes sure
            // the curren node being created is not "too_close" to another
            // node. if it is break the loop and restart the creation of 
            // this node at line 21.
            for (var j = 0; j < this.nodes.length; j++) {
                // check if to close to prev node
                if(this.too_close(x, y, this.nodes[j].get_x(), this.nodes[j].get_y(), 70))
                {
                    i--;
                    ready = false; // not ready for creation if yes
                    print("yo"); // just text to tell me when this happens
                    break;
                }
            }
            // if ready is still true then create the node
            if (ready) {
                this.nodes.push(new Node(i, (int)(random(-this.money_range, this.money_range)), x, y));
            }
        }
    }
    // checks is the mouse has been pressed over the node
    mouse_listener()
    {
        if(mouse_downed)
        {
            for (var i = 0; i < this.nodes.length; i++)
            {
                this.nodes[i].unMarkAsLastMove(); //unmark everyone as last move
                this.nodes[i].mouse_listener(); //call mouse listener for everyone

                if (this.nodes[i].isLastMove)
                {
                    this.lastMove = this.nodes[i].get_id(); //keep last move
                }
            }

            // reset the mouse_downed and mouse_upped functions
            mouseReset();
        }
    }
    // the draw function. literally just loops through the edges and activates there draw functions
    // same for the nodes
    draw()
    {
        for(let i = 0; i < this.edges.length; i++)
        {
            this.edges[i].draw();
        }
        for(let i = 0; i < this.nodes.length; i++)
        {
            this.nodes[i].highlight();
        }
        for(let i = 0; i < this.nodes.length; i++)
        {   
            this.nodes[i].draw();
        }
        //this function now loops through the nodes internally
        this.mouse_listener();

        text('last move:' + this.lastMove, 100, 200);
    }

}