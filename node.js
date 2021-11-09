// the node class
class Node{
    // constructor
    constructor(id, dollar, x, y)
    {
        this.id = id;
        this.dollar = dollar;
        this.x = x;
        this.y = y;
        this.connections = [];
        this.edges = [];
        this.isLastMove = false;
        this.just_clicked = false;
        this.sent_dollar = [];
    }
    // returns the id of this node
    get_id()
    {
        return this.id;
    }
    // get the x coordinate of a node
    get_x()
    {
        return this.x;
    }
    // get the y coordinate of a node
    get_y()
    {
        return this.y;
    }
    // get the dollar value of a node
    get_value()
    {
        return this.dollar;
    }
    // set a new dollar value for a node
    set_value(dollar)
    {
        this.dollar = dollar;
    }
    // flips the sign of the dollar value
    flip_value()
    {
        this.dollar *= -1;
    }
    // marks this node as the current latest move
    markAsLastMove()
    {
        this.isLastMove = true;
    }
    // marks this node as not the current latest move
    unMarkAsLastMove()
    {
        this.isLastMove = false;
    }
    // add a specified value to the current dollar amount
    add_value(dollar)
    {
        this.dollar += dollar;
    }
    // The act of give a dollar to all of the nodes connections
    give(amount)
    {
        // Looping through each connection
        for(var i = 0; i < this.connections.length; i++)
        {
            // adding 1 to the connected nodes dollar amount
            this.connections[i].add_value(amount);
            // taking 1 dollar for the nodes self
            this.dollar-=amount;
        }
    }
    // returns a connected node with specified index
    get_con(index)
    {
        return this.connections[index];
    }
    // returns specified edge by index
    get_edge(index)
    {
        return this.edges[index];
    }
    // adding a new connections
    add_connection(node)
    {
        this.connections.push(node);
    }
    // adding a new edge
    add_edge(edge)
    {
        this.edges.push(edge);
    }
    // removing a connected node by specified that nodes id
    remove_connection(id)
    {
        for(var i = 0; i < this.connections.length; i++)
        {
            if(this.connections[i].get_id() === id)
            {
                this.connections.splice(i, 1);
                return i;
            }
        }
        return -1;
    }
    // removes a specified edge by specifying that edges index
    remove_edge(index)
    {
        //this.edges[index].destroy();
        this.edges.splice(index, 1);
    }
    // returns the number of connections
    get_total_con()
    {
        return this.connections.length;
    }
    // returns the total number of edges
    get_total_edges()
    {
        return this.edges.length;
    }
    // checks is the mouse has been pressed over the node
    mouse_listener()
    {
        if(mouse_downed && mouseX > this.x-20 && mouseX < this.x+20 && mouseY > this.y-20 && mouseY < this.y+20)
        {
            this.just_clicked = true;
            // reset the mouse_downed and mouse_upped functions
            //mouseReset();
            // then give a dollar to connections
            this.load_dollars();
            this.give(1);
            this.markAsLastMove();
            return 1;
        }
        return 0;
    }
    // returns true if the current node is being hovered over and false otherwise
    hover()
    {
        return mouseX > this.x - 20 && mouseX < this.x + 20 && mouseY > this.y - 20 && mouseY < this.y + 20;
    }
    // returns true if a set of ordered pairs is touching the node
    touch(x, y)
    {
        return x > this.x - 20 && x < this.x + 20 && y > this.y - 20 && y < this.y + 20;
    }
    // highlights the edges of this node when the node is being hovered over
    highlight()
    {
        if(this.hover())
        {
            this.edges.forEach(edge => { edge.glow(); })
        }
    }
    // sets up animation for the dollar being sent to the other nodes
    load_dollars()
    {
        for(var i = 0; i < this.connections.length; i++)
        {
            this.sent_dollar.push(new Dollar(W(20),this.x, this.y, this.edges[i].get_rise(this.id), this.edges[i].get_run(this.id), this.connections[i]))
        }
    }
    // this deletes all the dollars in the sent_dollar array
    delete_dollars()
    {
        while(this.sent_dollar.length > 0)
        {
            this.sent_dollar.splice(0,1);
        }
    }
    // actaully runs the dollar animation
    send_dollars()
    {
        var dead_count = 0;
        var all_dead = false;
        for(var i = 0; i < this.sent_dollar.length; i++)
        {
            if(!this.sent_dollar[i].check_goal())
            {
                this.sent_dollar[i].draw();
                this.sent_dollar[i].move_x(3);
                this.sent_dollar[i].move_y(3);
            }else
            {
                dead_count += 1;
            }
            if(dead_count >= this.sent_dollar.length)
            {
                all_dead = true;
                break;
            }
        }
        if(all_dead)
        {
            this.delete_dollars();
        }
    }
    // draw function which animates the node
    draw()
    {
        this.send_dollars()
        ellipseMode(RADIUS);
        fill(255,255,255);
        noStroke();
        ellipse(this.x, this.y, W(25), H(25));
        fill(0, 255, 0, 25.5*this.dollar);
        ellipse(this.x, this.y, W(25), H(25));
        fill(255, 0, 0, -25.5*this.dollar);
        ellipse(this.x, this.y, W(25), H(25));

        textAlign(CENTER,CENTER);
        fill(0,0,0);
        text(this.dollar, this.x, this.y);
    }
}