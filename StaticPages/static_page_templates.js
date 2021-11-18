//for text pages
const rules_text = {
    title: "RULES",
    text: ["The graph is composed of many circles (we call these nodes). Each node has a number which represents how many\n" +
    " dollars that node has. A node can have any number of dollars, even negative! All the nodes are connected to each\n" +
    " other by lines (we call these edges). When two nodes are connected we call them “brothers”. \n" +
    "Here’s a simple example:\n\n",
        "Here we can see we have 3 nodes:\n" + "Node 1 has $-1.00\n" + "Node 2 has $-4.00\n" + "Node 3 has $8.00\n" +
        "We can also have the 2 pairs of brothers:\n" + "Node 1 and Node 2\n" + "Node 2 and Node 3\n" +
        "Notice However that Node 1 and Node 3 are not brothers because they do not have an edge (a line) connecting them.\n\n" +
        "What do I do with this Graph?\n" +
        "Use your mouse to click on a Node. When you click on a Node it will send a dollar to ALL of its brothers.\n" +
        "So If you click on Node 2 you will end of with the following:" ],
    images: ['rules_image_1', 'rules_image_2'],

}
const credits_text = {
    title: "CREDITS",
    text: ["Here is who gets credit for the game. .fdjsfdskfjdskljfslkdf dsklaj sdklfjkasldjfsk lfkldss klfdsajklfsdajf kldsjfkldsfjdskfjdsla.\n" +
        "fdsajffdsslafjkdsljfkdsljfksldfk ljfkslda fds.\n" +
        "fsdfjkalfjdsklfjskld .fdss\n" +
        "fdas"]
}
const proof_text = {
    title: "PROOF",
    text: ["Here is how you figure out if it's solvable or not"]
}