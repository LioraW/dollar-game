const tutorial_template = {
    step1: {
        text: "Click on the node to\n give a dollar to its\n brother. This node\n has 1 brother so it\n only loses 1 dollar.",
        x: W(530),
        y: H(750),
        w: W(185),
        h: H(150),
        fontSize: res_font(20)
    },
    step2: {
        text: "Next click on this\n" + "node twice to give a\n" + "dollar to each of its\n"+ "brothers. It has 3\n" +
            "brothers and we're\n" + "giving twice so it will\n" + "lose 6 dollars",
        x: W(1130),
        y: H(750),
        w: W(185),
        h: H(190),
        fontSize: res_font(20)
    },
    step3: {
        text: "Lets try clicking on\n" + "this node to see what\n" + "happens",
        x: W(530),
        y: H(500),
        w: W(200),
        h: H(95),
        fontSize: res_font(20)
    },
    step4: {
        text: "Actually lets undo\n" + "that move by pressing\n"+ "the undo button",
        x: W(300),
        y: H(350),
        w: W(215),
        h: H(85),
        fontSize: res_font(20)
    },
    step5: {
        text: "We can also reset the\n" + "graph to its original\n" + "form by pressing the\n" + "reset button here",
        x: W(350),
        y: H(400),
        w: W(215),
        h: H(105),
        fontSize: res_font(20)
    },
    step6: {
        text: "Wonderful! Now use all\n" + "these tools to make\n" + "all the nodes have a\n" +
            "dollar value of 0 or\n" + "more. [Click to Continue]",
        x: displayWidth/2,
        y: displayHeight/2,
        w: W(240),
        h: H(150),
        fontSize: res_font(20)
    },
    step8: {
        text: "Congratulations! You solved the graph! Now\n" + "you know the basics. You can use these\n" +
            "skills to solve even harder graphs. See how many\n" + "you can do with out stopping and show off your\n" +
            "highscore!",
        x: displayWidth/2,
        y: displayHeight/2 - H(100),
        w: W(455),
        h: H(140),
        fontSize: res_font(20)
    }

}