class Game
{
    constructor(type) {
        //create graph
        switch (type) {
            case 'easy':
                this.graph = this.easy_graph(true);
                break;
            case 'medium':
                this.graph = this.medium_graph(true);
                break;
            case 'hard':
                this.graph = this.hard_graph(true);
                break;
            default:
                this.graph = this.random_graph(true);
                break;
        }
        //Change Graph buttons - Solvable
        this.easyGraphButton = new TextButton("Easy", W(150), H(150), W(100), H(20),
            () => {
                this.graph = this.easy_graph(true);
            });
        this.mediumGraphButton = new TextButton("Medium", W(150), H(175), W(100), H(20),
            () => {
                this.graph = this.medium_graph(true);
            });
        this.hardGraphButton = new TextButton("Hard", W(150), H(200), W(100), H(20),
            () => {
                this.graph = this.hard_graph(true);
            });
        this.FlowerGraphButton = new TextButton("Flower", W(150), H(225), W(100), H(20),
            () => {
                this.graph = this.premade_graph(flower_graph);
            });

        //Change Graph buttons - Not Necessarily Solvable
        this.easyGraphButton2 = new TextButton("Easy", displayWidth - W(150), H(150), W(100), H(20),
            () => {
                this.graph = this.easy_graph(false);
            });
        this.mediumGraphButton2 = new TextButton("Medium", displayWidth - W(150), H(200), W(100), H(20),
            () => {
                this.graph = this.medium_graph(false);
            });
        this.hardGraphButton2 = new TextButton("Hard", displayWidth - W(150), H(250), W(100), H(20),
            () => {
                this.graph = this.hard_graph(false);
            });

        //Buttons with anonymous functions passed in
        this.undoButton = new ImageButton(undo_icon, W(150), H(350), W(undo_icon.width/6), H(undo_icon.height/6),
            () => {
                this.graph.undo();
                this.graph.addCounter();
            });
        this.restartButton = new ImageButton(reset_icon, W(150), H(400), W(reset_icon.width/5.5), H(reset_icon.height/5.5),
            () => {
                this.graph.reset_graph();
                this.graph.resetCounter();
            });
        // the exit full screen (efs) button which exits fullscreen when clicked
        this.efsButton = new ImageButton( efs_icon, 
            displayWidth - W(efs_icon.width/6), displayHeight - H(efs_icon.height/6),
            W(efs_icon.width/6), H(efs_icon.height/6), 
            () => { fullscreen_switcher(); } );
    }
    // when this is called it pauses all the buttons AND makes the graph not listen 
    // to mouse clicks
    pause_game(status){
        this.undoButton.pause(!status);
        this.restartButton.pause(!status);
        this.efsButton.pause(!status);
        this.graph.set_listening(!status);
    }

    //generate graph types
    easy_graph(make_solvable){
        return new RandGraph(3, 2, make_solvable, 10);
    }
    medium_graph(make_solvable){
        return new RandGraph(12, 3, make_solvable, 10);
    }
    hard_graph(make_solvable){
        return new RandGraph(20, 4, make_solvable, 10);
    }
    premade_graph(data){
        return new PreGraph(data, 10, 4);
    }
    // resets the graph back to the original state
    random_graph(make_solvable){
        return new RandGraph(random(3, 20), random(2,4), make_solvable, 10);
    }

    // what displays when the game is won
    display_game_win() {
        background(0,0,0,50);
        fill(173, 216, 230);
        rectMode(CENTER);
        rect(displayWidth/2, displayHeight/2, W(300), H(100), 7); //outline
        fill(0,0,0);
        textAlign(CENTER,CENTER);
        textSize(30);
        text("You won!!", displayWidth/2, displayHeight/2)
        textSize(12); //reset size
    }



    draw()
    {
        background(255, 255, 255);

        textAlign(CENTER,CENTER);
        fill(0,0,0);
        textSize(26);
        text("Get Solvable Graphs:", W(150), H(120));
        text("Get Graphs that Are not Necessarily Solvable:", displayWidth - W(300), H(120));
        text("Useful Buttons:", W(125), H(320));
        textSize(12); //reset size

        this.easyGraphButton.draw();
        this.mediumGraphButton.draw();
        this.hardGraphButton.draw();
        this.FlowerGraphButton.draw();

        this.easyGraphButton2.draw();
        this.mediumGraphButton2.draw();
        this.hardGraphButton2.draw();

        this.graph.draw();
        
        this.undoButton.draw();
        this.restartButton.draw();
        if (this.graph.is_solved()) {
            this.undoButton.mute_IO(true);
            this.restartButton.mute_IO(true);
            this.display_game_win();
        }else
        {
            this.undoButton.mute_IO(false);
            this.restartButton.mute_IO(false);
        }
        this.efsButton.draw();
        
    }

}