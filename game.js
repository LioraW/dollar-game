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
        this.easyGraphButton = new Button("Easy", 50, 150, 100, 50,
            () => {
                this.graph = this.easy_graph(true);
            });
        this.mediumGraphButton = new Button("Medium", 50, 200, 100, 50,
            () => {
                this.graph = this.medium_graph(true);
            });
        this.hardGraphButton = new Button("Hard", 50, 250, 100, 50,
            () => {
                this.graph = this.hard_graph(true);
            });

        //Change Graph buttons - Not Necessarily Solvable
        this.easyGraphButton2 = new Button("Easy", displayWidth - 150, 150, 100, 50,
            () => {
                this.graph = this.easy_graph(false);
            });
        this.mediumGraphButton2 = new Button("Medium", displayWidth - 150, 200, 100, 50,
            () => {
                this.graph = this.medium_graph(false);
            });
        this.hardGraphButton2 = new Button("Hard", displayWidth - 150, 250, 100, 50,
            () => {
                this.graph = this.hard_graph(false);
            });

        //Buttons with anonymous functions passed in
        this.undoButton = new Button("undo", 50, 350, 100, 50,
            () => {
                this.graph.undo();
            });
        this.restartButton = new Button("restart", 50, 400, 100, 50,
            () => {
                this.graph.reset_graph();
            });
        // the exit full screen (efs) button which exits fullscreen when clicked
        this.efsButton = new CustomButton ( efs_icon, 
            displayWidth - (efs_icon.width/6), displayHeight - (efs_icon.height/6),
            efs_icon.width/6, efs_icon.height/6, 
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
        return new Graph(7, 2, make_solvable, 10);
    }
    medium_graph(make_solvable){
        return new Graph(12, 3, make_solvable, 10);
    }
    hard_graph(make_solvable){
        return new Graph(20, 4, make_solvable, 10);
    }
    // undo move function
    undo () {
        if (this.graph.lastMove !== -1) {
            this.graph.nodes[this.graph.lastMove].give(-1);
        }
        this.graph.set_last_move(-1);
    }

    // resets the graph back to the original state
    random_graph(make_solvable){
        return new Graph (random(3, 20), random(2,4), make_solvable, 10);
    }
    // what displays when the game is won
    display_game_win() {
        background(0,0,0,50);
        fill(173, 216, 230);
        rectMode(CENTER);
        rect(windowWidth/2, windowHeight/2, 300, 100, 7); //outline
        fill(0,0,0);
        textAlign(CENTER,CENTER);
        textSize(30);
        text("You won!!", windowWidth/2, windowHeight/2)
        textSize(12); //reset size
    }



    draw()
    {
        background(255, 255, 255);

        textAlign(CENTER,CENTER);
        fill(0,0,0);
        textSize(26);
        text("Get Solvable Graphs:", 150, 120);
        text("Get Graphs that Are not Necessarily Solvable:", displayWidth - 300, 120);
        text("Useful Buttons:", 125, 320);
        textSize(12); //reset size

        this.easyGraphButton.draw();
        this.mediumGraphButton.draw();
        this.hardGraphButton.draw();

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
        this.efsButton.draw_img_btn();
        
    }

}