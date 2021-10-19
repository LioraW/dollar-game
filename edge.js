class Edge
{   
    // just takes to nodes and put then into the ends array
    constructor(node1, node2)
    {
        this.ends = [node1, node2];
        node1.add_connection(node2);
        node2.add_connection(node1);
    }
    // prints a line with one end being the first node's coords
    // and the other end being the second node's coords
    draw()
    {   
        
        line(this.ends[0].get_x(), this.ends[0].get_y(), this.ends[1].get_x(), this.ends[1].get_y());
    }
}