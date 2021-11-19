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
    "If you are playing in \"Uncertain Solvability\" mode, then there will be a button marked \"Prime Graph\".\n" +
    "Clicking this button means you are guessing that the graph is unsolvable. The game will tell you if you \n" +
    "are correct or not."
}
const credits_text = {
    title: "CREDITS",
    text: "Copyright 2021 by Joshua John, Liora Wachsstock, Jeremy Dobrzanski, and Rami Hanin\n" +
        "\nMusic by Jeremy Dobrzanski\n" +
        "\nBackground photos credits go to ....\n" +
        "\nThe idea is based on this video: https://www.youtube.com/watch?v=U33dsEcKgeQ"
}
const math_background_text = {
    title: "The Math Behind the Game",
    text: "\n- If all nodes' values add up to zero or more, the graph is solvable. If the graph has a net negative value, \n" +
        "  the graph is unsolvable.\n" +
        "\n- Graphs are an important data structure to understand in both theoretical mathematics and computer science.\n" +
        "   The type of graph the Dollar game users is called an undirected graph - ie edges connect the nodes from both\n" +
        "   directions (if node A points to node B, then node B points to node A).\n" +
        "   Another type of graph is called a directed graph. In a directed graph, the edges only go one way (ie node A \n" +
        "   could point to node B while node B does not point to node A)."
}