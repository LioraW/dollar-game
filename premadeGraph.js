class PreGraph extends Graph
{
    constructor(data, scalar, money_range)
    {
        super();
        this.data = data; // the data that contains the "blueprints" to create the graph
        this.scalar = scalar // scales the whole graph to this size. the bigger the number
                            // bigger the graph
        this.money_range = money_range; // range of money

        this.build();

        if(!this.data[1].hasOwnProperty('value')){ //check if the data has a dollar value
            this.rebalance();
            this.make_solvable();
        }
            this.starting_state = this.get_starting_state();
    }

    // creates the nodes and edges of a predefined graph
    build()
    {
        this.data.forEach((nodePlan, i) => {
            let randDollar = (nodePlan.hasOwnProperty('value')) ? nodePlan.value : (int)(random(-this.money_range, this.money_range));

            this.nodes.push(new Node(i, randDollar,
                W(nodePlan.X) * this.scalar + displayWidth/2,
                H(-nodePlan.Y) * this.scalar + displayHeight/2));

        });

        this.data.forEach((nodePlan, i) => {
            nodePlan.connections.forEach((connectionId) => {
                if (!this.are_brothers(this.nodes[i], this.nodes[connectionId])){
                    this.edges.push(new Edge(this.nodes[i], this.nodes[connectionId]));
                }
            });
        });
        this.nodes.forEach(node => { node.get_value(); });
        this.solved = this.is_solved();
    }
}