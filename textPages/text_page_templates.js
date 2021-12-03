//for text pages
const rules_text = {
    title: "RULES",
    text: "The graph is composed of many circles (we call these nodes). Each node has a number which represents how many\n" +
    "dollars that node has. A node can have any number of dollars, even negative! All the nodes are connected to at least one\n" +
    "other node by lines (we call these edges). When two nodes are connected we call them “brothers”. \n" +
    "\n*** What do I do with this Graph? ***\n" +
    "Use your mouse to click on a Node. When you click on a Node it will send a dollar to ALL of its brothers, increasing\n" +
    "the value of each of its brothers and decreasing its own value. A node can still send out dollars even if it has\n" +
    "a negative value.\n" +
    "\n*** What is the Goal? ***" +
    "\nThe goal is to make all nodes in the graph have 0 or more dollars. That means none of the nodes can have a value of -1 " +
    "\nor less. Therefore you must strategically move dollars around by clicking on nodes to make all the nodes have a dollar" +
    "\n value of 0 or more. The graph will have more nodes and edges the harder the game mode you chose.\n" +
    "\n*** Other things you can do ***\n" +
    "The game play screen also has an undo button, which allows you to undo one (and only one) move.\n" +
    "The reset button resets the graph to its original state.\n" +
    "If you are playing in \"Adventure\" mode, then there will be a button marked \"Unknown Graph\".\n" +
    "Clicking this button means you are guessing that the graph is unsolvable. If you are correct that the game is \n" +
    "unsolvable, then you will get a point for that graph. If you are incorrect, you lose the game and have to start\n" +
    "a new one."
}
const credits_text = {
    title: "CREDITS",
    text: "Copyright 2021 by Joshua John, Liora Wachsstock, Jeremy Dobrzanski, and Rami Hanin\n" +
        "\nThe idea is based on this video: https://www.youtube.com/watch?v=U33dsEcKgeQ\n" +
        "\nMusic:\n" +
        'GiSt_Adrift by Jeremy Dobrzanski\n' +
        'Insomnia by BVG x mondberg\n' +
        'Jiro Dreams by Dontcry x Glimlip x Sleepermane\n' +
        'First Heartbreak by Flovry x tender spring\n' +
        'Cloudy Springs by Kainbeats x softy\n' +
        'Sleepless Wonder by LoafyBuildingx Hoffy Beats\n' +
        'FarAway by Mila Coolness\n' +
        'GentleWind by noone\'s perfect x Kanisan\n' +
        'Contrasts by Softy x Kaspa\n' +
        'Daydreaming by Tenno\n' +
        'Snowman by WYS\n' +
        "\nBackgrounds: \n" +
        'Island in the Sky by Surendra Rajawat\n' +
        'A Walk Through the Sky by Sylvain Sarrailh\n' +
        'The Exchange by Surendra Rajawat\n' +
        'Ghibli by Surendra Rajawat \n' +
        'Wowa by Surendra Rajawat \n' +
        'River Spirit by Surendra Rajawat \n',
        text_size: 26,
}
const math_background_text = {
    title: "The Math Behind the Game",
    text:
        "\n- If all nodes' values add up to zero or more, the graph is solvable. If the graph has a net negative value, \n" +
        "  the graph is unsolvable.\n" +
        "  For example, the graph on the left is unsolvable because total value of the nodes is negative (-8 + 7 = -1). \n" +
        "  However, the graph on the right is solvable because the total value is non-negative (-8 + 8 = 0).\n" +
        "\n\n- Graphs are an important data structure to understand in both theoretical mathematics and computer science.\n" +
        "   The type of graph the Dollar Game uses is called an undirected graph - i.e., edges connect the nodes from both\n" +
        "   directions (if node A points to node B, then node B points to node A).\n" +
        "   Another type of graph is called a directed graph. In a directed graph, the edges only go one way (i.e., node A \n" +
        "   could point to node B while node B does not point to node A).\n" +
        "\nSee this video for a more in-depth discussion: https://www.youtube.com/watch?v=U33dsEcKgeQ\n",
    graphs: ['example_graph_1', 'example_graph_2']
}