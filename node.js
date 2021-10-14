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
    // add a specified value to the current dollar amount
    add_value(dollar)
    {
        this.dollar += dollar;
    }
    // the act of give a dollar to all of the nodes connections
    give()
    {
        // looping through each connection
        for(var i = 0; i < this.connections.length; i++)
        {
            // adding 1 to the connected nodes dollar amount
            this.connections[i].add_value(1);
            // taking 1 dollar for the nodes self
            this.dollar--;
        }
    }
    // adding a new connections
    add_connection(node)
    {
        this.connections.push(node);
    }
    // checks is the mouse has been pressed over the node
    mouse_listener()
    {
        if(mouse_downed && mouseX > this.x-20 && mouseX < this.x+20 && mouseY > this.y-20 && mouseY < this.y+20)
        {
            // reset the mouse_downed and mouse_upped functions
            mouseReset();
            // then give a dollar to connections
            this.give()
        }
    }
    // draw function which animates the node
    draw()
    {
        for(var i = 0; i < this.connections.length; i++)
        {
            line(this.x, this.y, this.connections[i].get_x(), this.connections[i].get_y())
        }

        ellipseMode(RADIUS);
        fill(255,255,255);
        ellipse(this.x, this.y, 20, 20);
        fill(0, 255, 0, 25.5*this.dollar);
        ellipse(this.x, this.y, 20, 20);
        fill(255, 0, 0, -25.5*this.dollar);
        ellipse(this.x, this.y, 20, 20);
        textAlign(CENTER,CENTER);
        fill(0,0,0);
        text(this.dollar, this.x, this.y);
    }
}