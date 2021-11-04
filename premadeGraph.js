class PreGraph extends Graph
{
    constructor(data, money_range, scalar)
    {
        super();
        this.data = data; // the data that contains the "blueprints" to create the graph
        this.money_range = money_range; // randge of money
        this.scalar = scalar // scales the whole graph to this size. the bigger the number
                            // bigger the graph

        this.build();

        this.rebalance();
        this.make_solvable();
        this.starting_state = this.get_starting_state();
    }

    // creates the nodes and edges of a predefined graph
    build()
    {
        for(var i = 0; i < this.data.length; i++)
        {
            this.nodes.push(new Node(i, (int)(random(-this.money_range, this.money_range)),
                                this.data[i][0] * this.scalar + displayWidth/2,
                                -this.data[i][1] * this.scalar + displayHeight/2));
            this.balance += this.nodes[i].get_value();
        }
        this.solved = this.is_solved();
        for(var i = 0; i < this.data.length; i++)
        {
            for(var j = 0; j < this.data[i][2].length; j++)
            {
                var cons = this.data[i][2];
                if(!this.are_brothers(this.nodes[i], this.nodes[cons[j]])){
                    this.edges.push(new Edge(this.nodes[i], this.nodes[cons[j]]));
                }
            }
        }
    }
}