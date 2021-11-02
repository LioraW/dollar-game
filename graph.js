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
        this.lastMove = -1;
        this.solved = true;
        this.counter = 0;
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

    resetCounter()
    {
        this.counter = 0;
    }

    addCounter()
    {
        this.counter++;
    }
    // returns the balance of the graph
    get_ballance()
    {
        return this.balance;
    }
    // returns genus
    get_genus()
    {
        return this.edges.length - this.nodes.length + 1;
    }
    is_solvable()
    {
        return this.get_genus() <= this.get_ballance();
    }
    is_solved()
    {
        for(var i = 0; i < this.nodes.length; i++)
        {
            if(this.nodes[i].get_value() < 0)
            {
                return false;
            }
        }
        return true;
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
    
    // desides which set the nodes should be assigned
    set_assign(node1, node2, sets)
    {
        if(!sets.length){
            return 0
        }
        for(var i = 0; i < sets.length; i++)
        {
            if (sets[i].has(node1) || sets[i].has(node2))
            {
                return i;
            }
        }
        return sets.length;
    }
    // creates the edges
    populate_edges()
    {
        var sets = [];
        var set_i = -1;
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
                        break;
                    }
                    rand_index = (int)(random(this.nodes.length));
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
                    // befor we connect we need to add these two nodes to a set. 
                    // if one of them is already in a the array of existing sets then
                    // add both of them into the set (one is obviously already in so it gets ignored)
                    
                    // this finds the appropriate index of the set that the two nodes should be added to
                    var temp_i = this.set_assign(this.nodes[i].get_id(), this.nodes[rand_index].get_id(), sets)
                    // if the returned index is an index which has not been made yet then create it
                    if(temp_i > sets.length - 1) 
                    {
                        sets[temp_i] = new Set();
                    }
                    // then add both nodes into the set
                    sets[temp_i].add(this.nodes[i].get_id());
                    sets[temp_i].add(this.nodes[rand_index].get_id());
                    // then check for any intersetctions in the sets and if there are any combine those sets
                    sets = compress_sets(sets);

                    this.edges.push(new Edge(this.nodes[i], this.nodes[rand_index]))
                } 
            }
        }
        // any single nodes (nodes with no connections)
        for(var i = 0; i < this.nodes.length; i++)
        {
            // checks if a node has less than one connection
            if(this.nodes[i].get_total_con() < 1)
            {
                sets[sets.length] = new Set();
                sets[sets.length - 1].add(this.nodes[i].get_id())
            }
        }
        // now we'll work on combining the mutualing exclusive branches
        while(sets.length > 1)
        {
            // setting 2 random indexes 
            var random_i = -1;
            var random_j = -1;

            // we create a 2D array where each array is just a set converted to an array
            // the reason for this is so that we can traverse the sets' information
            var arrays = [];
            for(var i = 0; i < sets.length; i++){
                arrays[i] = Array.from(sets[i]);
            }
            
            // will traverse all the nodes in serch for a node that has only
            // one connection (available space).
            for(var i = 0; i < arrays[0].length; i++)
            {
                // taverse first set
                if (this.nodes[arrays[0][i]].get_total_edges() < 2)
                {
                    // if one is found record the index
                    random_i = arrays[0][i];
                    break;
                } 
            }
            // same algorithm but this time we are trying to find an available 
            // node in the second set
            for(var i = 0; i < arrays[1].length; i++)
            {
                if (this.nodes[arrays[1][i]].get_total_edges() < 2)
                {
                    // if one is found record the index
                    random_j = arrays[1][i];
                    break;
                } 
            }
            // if the random indexes are still -1 then that means we have not found suitable
            // nodes to link the two graphs.
            if(random_i === -1)
            {
                // first choose a random node from the list
                random_i = (int)(random(arrays[0]))
                // this is where the 'surgery' takes place. 
                // if the node already has too many connections we must delete one of its
                // connections thus making it suitable for connection
                if(this.nodes[random_i].get_total_con() >= this.edges_max)
                {
                    this.nodes[random_i].get_edge(this.edges_max - 1).set_destroy(true);
                    var borther_i = this.nodes[random_i].get_con(this.edges_max - 1).get_id();
                    var brother_e = this.nodes[borther_i].remove_connection(this.nodes[random_i].get_id());
                    this.nodes[borther_i].remove_edge(brother_e);
                    this.nodes[random_i].remove_connection(this.nodes[borther_i].get_id());
                    this.nodes[random_i].remove_edge(this.edges_max - 1);
                }
            }
            // same thing is happening here but for the second random node for the other set
            if(random_j === -1)
            {
                random_j = (int)(random(arrays[1]))
                if(this.nodes[random_j].get_total_con() >= this.edges_max)
                {
                    this.nodes[random_j].get_edge(this.edges_max - 1).set_destroy(true);
                    var borther_j = this.nodes[random_j].get_con(this.edges_max - 1).get_id();
                    var brother_e = this.nodes[borther_j].remove_connection(this.nodes[random_j].get_id());
                    this.nodes[borther_j].remove_edge(brother_e);
                    this.nodes[random_j].remove_connection(this.nodes[borther_j].get_id());
                    this.nodes[random_j].remove_edge(this.edges_max - 1);
                }
            }
                // once we have 2 suitable nodes we create a new edge connecting them
                // so now the 2 seperated graphs are linked together
                this.edges.push(new Edge(this.nodes[random_i], this.nodes[random_j]))
                // we must also add the index of the second node to the set of the first
                sets[0].add(random_j);
                // then compress the sets again
                sets = compress_sets(sets);
        }
        for(var i = 0; i < this.edges.length; i++)
        {
            // the edges were only marked for destruction. here we actually destroy them
            // if their destroy attribute is 'true'
            if(this.edges[i].get_destroy())
            {
                this.edges.splice(i,1);
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
                if(this.too_close(x, y, this.nodes[j].get_x(), this.nodes[j].get_y(), 100))
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
                this.balance += this.nodes[i].get_value();
            }
        }
        this.solved = this.is_solved();
    }
    // checks is the mouse has been pressed over the node
    mouse_listener()
    {
        if(mouse_downed)
        {
            this.solved = this.is_solved();
            for (var i = 0; i < this.nodes.length; i++)
            {
                this.nodes[i].unMarkAsLastMove(); //unmark everyone as last move
                this.counter += this.nodes[i].mouse_listener(); //call mouse listener for everyone
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
        text("moves made"+this.counter, 40, 40);
        text(this.get_genus(), 100, 500);
        text(this.get_ballance(), 100, 520);
        text(this.solved, 100, 540);

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