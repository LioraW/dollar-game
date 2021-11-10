class Graph
{
    constructor()
    {
        this.balance = 0;   // overall graph balance
        this.nodes = [];    // array for all nodes
        this.edges = [];    // array for all edges
        this.lastMove = -1;
        this.solved = true;
        this.listening = false;
        this.counter = 0;
    }
    // returns a node by given index
    get_node(index)
    {
        return this.nodes[index];
    }
    // sets the graph listen status (whether it listens to mouse clicks)
    set_listening(status)
    {
        this.listening = status;
    }
    //returns an object with the node id's as keys and the dollar amounts as the values
    get_starting_state() {
        let state = {};
        this.nodes.forEach((node) => state[node.get_id()] = node.get_value());
        console.log(state);
        return state;
    }
    reset_graph() {
        Object.entries(this.starting_state).forEach(([id, value]) => this.nodes[id].set_value(value));
        this.resetCounter();
    }
    //undoes the last move
    undo () {
        if (this.lastMove !== -1) {
            this.nodes[this.lastMove].give(-1);
        }
        this.set_last_move(-1);
        this.addCounter();
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
    get_balance()
    {
        return this.balance;
    }
    // returns genus
    get_genus()
    {
        return this.edges.length - this.nodes.length + 1;
    }
    // returns true is the graph is guaranteed 100% solvabe
    is_solvable()
    {
        return this.get_genus() <= this.get_balance();
    }
    // returns true if the graph is already solved
    is_solved()
    {
        this.solved = true;
        this.nodes.forEach((node) => { if ( node.get_value() < 0 ) { this.solved = false; } } );
        return this.solved;
    }
    // returns true if 2 node are related
    are_brothers(node1, node2)
    {
        let result = false;
        node1.connections.forEach((conn) => {
            if (node2.get_id() === conn.get_id()) {
                result = true;
            }
        });
        return result;
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
    
    // decides which set the nodes should be assigned
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
    // returns true if all the nodes' dollar values are posotive (or zero) or all negative
    same_sign()
    {
        var sign = Math.sign(this.nodes[0].get_value());
        for(var i = 0; i < this.nodes.length; i++)
        {
            if(sign * this.nodes[i].get_value() < 0)
            {
                return false;
            }
        }
        return true;
    }
    // rebalances the graph if all the nodes' values have the same sign
    rebalance()
    {
        if(this.same_sign())
        {
            print('rebalancing');
            for(var i = 0; i < this.nodes.length; i+=2)
            {
                if(Math.abs(this.nodes[i].get_value()) > 0){
                    this.nodes[i].flip_value();
                    this.balance += this.nodes[i].get_value() * 2;
                }else {
                    this.nodes[i].add_value(Math.sign(this.balance) * -1)
                    this.balance += this.nodes[i].get_value();
                }
            }
        }
    }
    // makes the graph 100% solvable
    make_solvable()
    {
        var debt = (-1 * (this.get_balance() - this.get_genus())) + (int)(random(5));
        print(debt)
        for(var i = 0; i < debt; i++)
        {
            var random_index = (int)(random(this.nodes.length))
            this.nodes[random_index].add_value(1);
            this.balance++;
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
                var clicked = this.nodes[i].mouse_listener(); //call mouse listener for everyone
                this.counter += clicked; //call mouse listener for everyone
              
                if (this.nodes[i].isLastMove)
                {
                    this.lastMove = this.nodes[i].get_id(); //keep last move
                }

                if(clicked){
                    // reset the mouse_downed and mouse_upped functions
                    mouseReset();
                    // check if the graph is solved
                    this.solved = this.is_solved();

                }
            }
            
        }
    }
    // the draw function. literally just loops through the edges and activates there draw functions
    // same for the nodes
    draw()
    {
        textSize(30);
        text("Welcome to the Dollar Game!", W(700), H(30));
        
        textSize(20);
        text("Number of Moves: "+this.counter, W(700), H(50));

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
        if(!this.solved && !this.listening){
            this.mouse_listener();
        }
    }

}