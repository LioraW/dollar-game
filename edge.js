class Edge
{   
    // just takes to nodes and put then into the ends array
    constructor(node1, node2)
    {
        if(node1.get_x() < node2.get_x())
        {
            this.ends = [node1, node2];
        }
        else 
        {
            this.ends = [node2, node1];
        }
            
        node1.add_connection(node2);
        node2.add_connection(node1);

        this.m = (node1.get_y() - node2.get_y()) / (node1.get_x() - node2.get_x());
        this.b = node1.get_y() - this.m * node1.get_x();
    }
    // prints a line with one end being the first node's coords
    // and the other end being the second node's coords
    draw()
    {   
        stroke(0,0,0);
        strokeWeight(1);    
        line(this.ends[0].get_x(), this.ends[0].get_y(), this.ends[1].get_x(), this.ends[1].get_y());
        if(mouseY > (this.m * mouseX + this.b) - 7   && mouseY < (this.m * mouseX + this.b) + 7
        && mouseX > this.ends[0].get_x() - 5 && mouseX < this.ends[1].get_x() + 5
        && !this.ends[0].hover() && !this.ends[1].hover())
        {
            stroke(255,0,0);
            strokeWeight(10);
            line(this.ends[0].get_x(), this.ends[0].get_y(), this.ends[1].get_x(), this.ends[1].get_y());
            stroke(0,0,0);
            strokeWeight(1); 
        } 
    }
}