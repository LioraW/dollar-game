class Game
{
    userHasWon = false;
    constructor(type) {
        this.paused = false;
        this.tutor_mode = false;
        this.step = 1;
        this.undo_pressed = false;
        this.reset_pressed = false;
        this.win_state = false;
        this.make_solvable = false;
        this.tutorial_game = new Tutorial();
        this.show_menu = false;
        this.menu = new Menu(game_menu_template);
        this.solvability_decleration = false;

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
        this.undoButton = new ImageButton(undo_icon, 150, 350, undo_icon.width/6, undo_icon.height/6,
            () => {
                this.undo_pressed = true;
                this.graph.undo();
            });
        this.restartButton = new ImageButton(reset_icon, 150, 400, reset_icon.width/5.5, reset_icon.height/5.5,
            () => {
                this.reset_pressed = true;
                this.graph.reset_graph();
            });
        this.menuButton = new ImageButton(menu_icon, 40, 40, menu_icon.width/5, menu_icon.height/5,
            () => {
                this.show_menu = !this.show_menu;
            });
        this.provableButton = new TextButton("Prime Map", 150, 500, 200, 50,
            () => {
                this.provableButton.mute_IO(true);
                this.solvability_decleration = true;
            }, 30, [200,200,200], [50,50,50], [200,200,200], [50, 50, 50])

        // the exit full screen (efs) button which exits fullscreen when clicked
        this.efsButton = new ImageButton( efs_icon, 
            displayWidth*W_undo() - efs_icon.width/6, displayHeight*H_undo() - efs_icon.height/6,
            efs_icon.width/6, efs_icon.height/6, 
            () => { fullscreen_switcher(); } );

        this.repeat_tutorial = new TextButton("Repeat Tutorial", 850, 550, 170, 40,
            () => {
                this.graph.reset_graph();
                this.step = 1;
            }, 12, [200,200,200], [50,50,50], [200,200,200]);

        this.main_menu = new TextButton("Main Menu", 1075, 550, 170, 40,
            () => {
                scene = scenes.MAIN_MENU;
            }, 12, [200,200,200], [50,50,50], [200,200,200]);
    }
    // when this is called it pauses all the buttons AND makes the graph not listen 
    // to mouse clicks
    pause_components(status){
    }

    tutorial(){
        switch (this.step) {
            case 1:
                this.step += this.tutorial_game.step1(this.graph);
                break;
            case 2:
                this.step += this.tutorial_game.step2(this.graph);
                break;
            case 3:
                this.step += this.tutorial_game.step3(this.graph);
                break;
            case 4:
                this.step += this.tutorial_game.step4(this.undo_pressed);
                this.undo_pressed = false;
                break;
            case 5:
                this.step += this.tutorial_game.step5(this.reset_pressed);
                this.reset_pressed = false;
                break;
            case 6:
                this.step += this.tutorial_game.step6();
                break;
            case 7:
                this.step += this.tutorial_game.step7(this.graph);
                break;
            case 8:
                this.step += this.tutorial_game.step8();
                this.repeat_tutorial.draw();
                this.main_menu.draw();
                break;
        }
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
        this.userHasWon = true;
        textSize(12); //reset size
    }

    draw()
    {
        this.graph.draw();
        this.undoButton.draw();
        this.restartButton.draw();
        this.menuButton.draw();
        if(!this.make_solvable){
            this.provableButton.draw();
        }

        if (this.graph.is_solved()) {
            this.undoButton.mute_IO(true);
            this.restartButton.mute_IO(true);
            this.display_game_win();
            if(!this.win_state){
                win_sound.play();
                this.win_state = true;
            }
        }else
        {
            this.undoButton.mute_IO(false);
            this.restartButton.mute_IO(false);
            if(this.win_state){
                win_sound.pause();
                this.win_state = false;
            }
        }
        this.efsButton.draw();

        if(this.show_menu)
        {
            var btns = this.menu.draw();
            this.show_menu = !( btns[0] || btns[2] );
        }

        if(this.tutor_mode){
            this.tutorial();
        }
    }
}