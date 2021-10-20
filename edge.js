class Edge
{   
    // just takes to nodes and put then into the ends array
    constructor(node1, node2)
    {
        // this ensures that the node with the smaller x value is set at the first end
        if(node1.get_x() < node2.get_x())
        {
            this.ends = [node1, node2];
        }
        else 
        {
            this.ends = [node2, node1];
        }
        // add both nodes to each others connections list
        node1.add_connection(node2);
        node2.add_connection(node1);

        node1.add_edge(this);
        node2.add_edge(this);

        // get the slope and y intercept of the line produced by the 
        // 2 points
        this.m = (node1.get_y() - node2.get_y()) / (node1.get_x() - node2.get_x());
        this.b = node1.get_y() - this.m * node1.get_x();
    }
    // prints a line with one end being the first node's coords
    // and the other end being the second node's coords
    draw()
    {   
        // normally we just draw the edge as a thin black line
        stroke(0,0,0);
        strokeWeight(2);    
        line(this.ends[0].get_x(), this.ends[0].get_y(), this.ends[1].get_x(), this.ends[1].get_y());

        // if the mouse is hovering over the edge then draw a big red line the highlight that edge
        if(mouseY > (this.m * mouseX + this.b) - 10   && mouseY < (this.m * mouseX + this.b) + 10
        && mouseX > this.ends[0].get_x() - 10 && mouseX < this.ends[1].get_x() + 10
        && !this.ends[0].hover() && !this.ends[1].hover())
        {
            stroke(255,0,0);
            strokeWeight(10);
            line(this.ends[0].get_x(), this.ends[0].get_y(), this.ends[1].get_x(), this.ends[1].get_y());
        } 
        stroke(0,0,0);
        strokeWeight(1); 
    }
    glow()
    {
        stroke(0,255,255);
        strokeWeight(10);
        line(this.ends[0].get_x(), this.ends[0].get_y(), this.ends[1].get_x(), this.ends[1].get_y());
        stroke(0,0,0);
        strokeWeight(1); 
    }
}