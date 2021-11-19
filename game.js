class Game
{
    userHasWon = false;
    constructor(type) {
        this.paused = false;
        this.tutor_mode = false;
        this.win_state = false;
        this.make_solvable = false;
        this.tutorial_game = new Tutorial();

        //create graph
        switch (type) {
            case 'easy':
                this.graph = new RandGraph(7, 3, true, 10);
                break;
            case 'medium':
                this.graph = new RandGraph(12, 4, true, 10);
                break;
            case 'hard':
                this.graph = new RandGraph(20, 5, true, 10);
                break;
            case 'tutor':
                this.graph = new PreGraph(tutorial_graph,12,-1);
                this.tutor_mode = true;
                break;
            default:
                this.graph = new RandGraph(random(3, 20), random(2,4), this.make_solvable, 10);
                break;
        }
        //Buttons with anonymous functions passed in
        this.undoButton = new ImageButton(undo_icon,(displayWidth/2) + 150, displayHeight*(7/8), W(undo_icon.width/6), H(undo_icon.height/6),
            () => {
                this.tutorial_game.set_undo_pressed();
                this.graph.undo();
            });
        this.restartButton = new ImageButton(reset_icon, (displayWidth/2) - 150, displayHeight*(7/8), W(reset_icon.width/5.5), H(reset_icon.height/5.5),
            () => {
                this.tutorial_game.set_reset_pressed();
                this.graph.reset_graph();
            });
        this.mainMenuButton = new TextButton("Main Menu", displayWidth/2, displayHeight*(7/8), W(150), H(50),
            () => { scene = scenes.MAIN_MENU }, res_font(16));

        this.gameWinDisplay = new TextButton("You Won!! Great Job!", displayWidth/2, displayHeight/2, W(500), H(100),
            () => { }, res_font(32));

        // the exit full screen (efs) button which exits fullscreen when clicked
        this.efsButton = new ImageButton( efs_icon, 
            displayWidth - W(efs_icon.width/6), displayHeight - H(efs_icon.height/6),
            W(efs_icon.width/6), H(efs_icon.height/6), 
            () => { fullscreen_switcher(); } );


    }
    // when this is called it pauses all the buttons AND makes the graph not listen 
    // to mouse clicks
    pause_components(status){
    }

    load_easy_graph(){
        this.graph = new RandGraph(7, 3, this.make_solvable, 10);
        this.tutor_mode = false;
    }
    load_medium_graph(){
        this.graph = new RandGraph(12, 4, this.make_solvable, 10);
        this.tutor_mode = false;
    }
    load_hard_graph(){
        this.graph = new RandGraph(20, 5, this.make_solvable, 10);
        this.tutor_mode = false;
    }
    load_random_graph(){
        this.graph = new RandGraph(random(3, 20), random(2,4), this.make_solvable, 10);
        this.tutor_mode = false;
    }
    load_tutor_graph(){
        this.graph = new PreGraph(tutorial_graph,12,-1);
        this.tutor_mode = true;
    }

    draw()
    {
        textSize(30);
        fill([200,200,200]);
        text("DOLLAR GAME", (displayWidth/2) - 150, H(100));
        textSize(16)
        text("Moves Counter: " + this.graph.counter, displayWidth/2, displayHeight*(12/13));
        textSize(14);

        this.graph.draw();
        this.undoButton.draw();
        this.restartButton.draw();
        this.mainMenuButton.draw();

        if (this.graph.is_solved()) {
            this.undoButton.mute_IO(true);
            this.restartButton.mute_IO(true);
            this.gameWinDisplay.draw();
            if(!this.win_state){
                win_sound.play();
                this.win_state = true;
            }
        }else {
            this.undoButton.mute_IO(false);
            this.restartButton.mute_IO(false);
            if(this.win_state){
                win_sound.pause();
                this.win_state = false;
            }
        }
        this.efsButton.draw();

        if(this.tutor_mode){
            this.tutorial_game.tutorial(this.graph);
        }
    }
}