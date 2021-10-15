class Edge
{   
    // just takes to nodes and put then into the ends array
    constructor(node1, node2)
    {
        this.ends = [node1, node2];
    }
    // prints a line with one end being the first node's coords
    // and the other end being the second node's coords
    draw()
    {
        line(this.ends[0].x, this.ends[0].y, this.ends[1].x, this.ends[1].y);
    }
}