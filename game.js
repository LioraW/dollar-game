class Game
{
    constructor(type) {
        this.paused = false;
        this.tutor_mode = false;
        this.step = 1;
        this.undo_pressed = false;
        this.reset_pressed = false;
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
                this.graph = new RandGraph(random(3, 20), random(2,4), make_solvable, 10);
                break;
        }
        //Change Graph buttons - Solvable
        this.easyGraphButton = new TextButton("Easy", W(150), H(150), W(100), H(20),
            () => {
                this.graph = new RandGraph(7, 3, true, 10);
            }, 12, [200,200,200], [50,50,50], [200,200,200]);
        this.mediumGraphButton = new TextButton("Medium", W(150), H(175), W(100), H(20),
            () => {
                this.graph = new RandGraph(12, 4, true, 10);
            }, 12, [200,200,200], [50,50,50], [200,200,200]);
        this.hardGraphButton = new TextButton("Hard", W(150), H(200), W(100), H(20),
            () => {
                this.graph = new RandGraph(20, 5, true, 10);
            }, 12, [200,200,200], [50,50,50], [200,200,200]);
        this.FlowerGraphButton = new TextButton("Flower", W(150), H(225), W(100), H(20),
            () => {
                this.graph = new PreGraph(flower_graph, 6, 10);
            }, 12, [200,200,200], [50,50,50], [200,200,200]);

        //Change Graph buttons - Not Necessarily Solvable
        this.easyGraphButton2 = new TextButton("Easy", displayWidth - W(150), H(150), W(100), H(20),
            () => {
                this.graph = new RandGraph(7, 3, false, 10);
            }, 12, [200,200,200], [50,50,50], [200,200,200]);
        this.mediumGraphButton2 = new TextButton("Medium", displayWidth - W(150), H(200), W(100), H(20),
            () => {
                this.graph = new RandGraph(12, 4, false, 10);
            }, 12, [200,200,200], [50,50,50], [200,200,200]);
        this.hardGraphButton2 = new TextButton("Hard", displayWidth - W(150), H(250), W(100), H(20),
            () => {
                this.graph = new RandGraph(20, 5, false, 10);
            }, 12, [200,200,200], [50,50,50], [200,200,200]);

        //Buttons with anonymous functions passed in
        this.undoButton = new ImageButton(undo_icon, W(150), H(350), W(undo_icon.width/6), H(undo_icon.height/6),
            () => {
                this.undo_pressed = true;
                this.graph.undo();
                this.graph.addCounter();
            });
        this.restartButton = new ImageButton(reset_icon, W(150), H(400), W(reset_icon.width/5.5), H(reset_icon.height/5.5),
            () => {
                this.reset_pressed = true;
                this.graph.reset_graph();
                this.graph.resetCounter();
            });

        // the exit full screen (efs) button which exits fullscreen when clicked
        this.efsButton = new ImageButton( efs_icon, 
            displayWidth - W(efs_icon.width/6), displayHeight - H(efs_icon.height/6),
            W(efs_icon.width/6), H(efs_icon.height/6), 
            () => { fullscreen_switcher(); } );

        this.repeat_tutorial = new TextButton("Repeat Tutorial", W(850), H(550), W(170), H(40),
        () => {
            this.graph.reset_graph();
            this.graph.resetCounter();
            this.step = 1;
        }, 12, [200,200,200], [50,50,50], [200,200,200]);

        this.main_menu = new TextButton("Main Menu", W(1075), H(550), W(170), H(40),
        () => {
            this.tutor_mode = false;
        }, 12, [200,200,200], [50,50,50], [200,200,200]);
    }
    // when this is called it pauses all the buttons AND makes the graph not listen 
    // to mouse clicks
    pause_components(status){
        this.undoButton.pause(!status);
        this.restartButton.pause(!status);
        this.efsButton.pause(!status);
        this.graph.set_listening(!status);
    }

    tutorial(){
        switch (this.step) {
            case 1:
                this.step += step1(this.graph);
                break;
            case 2:
                this.step += step2(this.graph);
                break;
            case 3:
                this.step += step3(this.graph);
                break;
            case 4:
                this.step += step4(this.undo_pressed);
                this.undo_pressed = false;
                break;
            case 5:
                this.step += step5(this.reset_pressed);
                this.reset_pressed = false;
                break;
            case 6:
                this.step += step6();
                break;
            case 7:
                this.step += step7(this.graph);
                break;
            case 8:
                this.step += step8();
                this.repeat_tutorial.draw();
                this.main_menu.draw();
                break;
        }
    }

    // what displays when the game is won
    display_game_win() {
        win_sound = loadSound("./songs/winSoundApplause.ogg");
        win_sound.setVolume(0.5);
        background(0,0,0,50);
        fill(173, 216, 230);
        rectMode(CENTER);
        rect(displayWidth/2, displayHeight/2, W(300), H(100), 7); //outline
        fill(0,0,0);
        textAlign(CENTER,CENTER);
        textSize(30);
        text("You won!!", displayWidth/2, displayHeight/2)
        textSize(12); //reset size
        win_sound.play();
    }

    draw()
    {
        textAlign(CENTER,CENTER);
        fill(255,255,255);
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

        if(this.tutor_mode){
            this.tutorial();
        }
    }
}