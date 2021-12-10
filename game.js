class Game
{
    userHasWon = false;
    constructor(type) {
        this.paused = false;
        this.tutor_mode = false;
        this.win_state = false;
        this.make_solvable = true;
        this.tutorial_game = new Tutorial();
        this.show_menu = false;
        this.menu = new Menu(game_menu_template);
        this.win_menu = new Menu(solved_graph_template);
        this.type = type;
        this.score = 0;
        this.add_score = false;
        this.highscore = 0;
        this.graph_passed = false;
        this.game_over = false;

        this.custom_number_nodes = 2;
        this.custom_number_edges = 1;
        this.custom_money_range = 10;

        //create graph
        switch (type) {
            case 'easy':
                this.graph = new RandGraph(7, 3, this.make_solvable, 10);
                this.mode = this.load_easy_graph;
                update_highscore(this.score, 0, this.make_solvable);
                this.highscore = get_highscore(0, this.make_solvable);
                break;
            case 'medium':
                this.graph = new RandGraph(12, 4, this.make_solvable, 10);
                this.mode = this.load_medium_graph;
                update_highscore(this.score, 1, this.make_solvable);
                this.highscore = get_highscore(1, this.make_solvable);
                break;
            case 'hard':
                this.graph = new RandGraph(20, 5, this.make_solvable, 10);
                this.mode = this.load_hard_graph;
                update_highscore(this.score, 2, this.make_solvable);
                this.highscore = get_highscore(2, this.make_solvable);
                break;
            case 'random':
                this.graph = new RandGraph(random(3, 20), random(2,4), this.make_solvable, 10);
                this.mode = this.load_random_graph;
                update_highscore(this.score, 3, this.make_solvable);
                this.highscore = get_highscore(3, this.make_solvable);
                break;
            case 'custom':
                this.graph = new RandGraph(this.custom_number_nodes, this.custom_number_edges, this.make_solvable, this.custom_money_range);
                this.mode = this.load_custom_graph;
                break;
            case 'tutor':
                this.graph = new PreGraph(tutorial_graph,12,-1);
                this.mode = this.load_tutor_graph;
                this.tutor_mode = true;
                break;
            default:
                console.log('error: wrong graph type entered in constructor');
                break;
        }

        //Buttons with anonymous functions passed in
        this.undoButton = new ImageButton(undo_icon,(displayWidth/2)*W_undo() + 150, displayHeight*(7/8)*H_undo(), 
                                          undo_icon.width/6, undo_icon.height/6,
            () => {
                this.tutorial_game.set_undo_pressed();
                this.graph.undo();
            });
        // resets the graph to its original state
        this.restartButton = new ImageButton(reset_icon, (displayWidth/2) * W_undo() - 150, displayHeight*(7/8) * H_undo(),
                                             reset_icon.width/5.5, reset_icon.height/5.5,
            () => {
                this.tutorial_game.set_reset_pressed();
                this.graph.reset_graph();
            });

        // this is the "in game" menu button denoted by 3 lines
        this.menuButton = new ImageButton(menu_icon, 40, 40, menu_icon.width/5, menu_icon.height/5,
            () => {
                this.show_menu = !this.show_menu;
            });

        // if you click on this button you declare that the current uncertain graph is indeed winnable
        this.provableButton = new TextButton("Unknown Map", 110, displayHeight*H_undo() - H(55), 200, 50,
            () => {
                this.provableButton.mute_IO(true);
                if(!this.graph.is_solvable()){
                    this.graph_passed = true;
                }else{
                    this.game_over = true;
                }
            }, 30);

        this.provableInfo = new ImageButton(info_icon,
            245, displayHeight*H_undo() - info_icon.height/6, info_icon.width/6, info_icon.height/6,
            () => { } );
        //this.provableInfo.mute_IO(true);
        this.provableInfo.set_hover_action(() => {
            textSize(res_font(30)); stroke(0,0,0); strokeWeight(1); fill(200,200,200); textAlign(LEFT,TOP);
            text('An Unknown map is a\n'+
                 'map which is not\n'+
                 'proven solvable \n' +
                '(see math background for more info).\n'+
                 'Declaring this map\n'+
                 'Unknown will give you\n'+
                 'a point if it is in \n'+
                 'fact unknown, but you\n'+
                 'lose if it is not!', W(10), H(610))
        })

        // repeats the tutorial when clicked
        this.repeat_tutorial = new TextButton("Repeat Tutorial", 850, 550, 170, 40,
            () => {
                this.graph.reset_graph();
                this.step = 1;
            }, 12);

        // button creates new graph to be solved
        this.new_graph = new TextButton('Next Graph',
            displayWidth/2 * W_undo(), displayHeight/2 * H_undo() + 100, 300, 60,
            () => {
                this.mode(); this.add_score = false;
                this.graph_passed = false;
            }, 30);

        // returns player to the main menu
        this.win_main_menu = new TextButton("Main Menu", 
            displayWidth/2 * W_undo(), displayHeight/2 * H_undo() + 200, 300, 60,
            () => {
                this.mode(); scene = scenes.MAIN_MENU; this.add_score = false;
                this.graph_passed = false; this.game_over = false;
            }, 30);
        // tutor button that returns the user to the main menus
    }
    set_score(val){
        this.score = val;
    }
    // when this is called it pauses all the buttons AND makes the graph not listen 
    // to mouse clicks
    pause_components(status){
        this.undoButton.mute_IO(status);
        this.restartButton.mute_IO(status);
        this.repeat_tutorial.mute_IO(status);
        this.graph.set_listening(!status);
        this.menuButton.mute_IO(status);
        this.provableButton.mute_IO(status);
    }

    // these functions create a new graph and the type is obvious from the name of each function
    load_easy_graph(){
        this.graph = new RandGraph(7, 3, this.make_solvable, 10);
        this.tutor_mode = false;
        this.mode = this.load_easy_graph;
        update_highscore(this.score, 0, this.make_solvable);
        this.highscore = get_highscore(0, this.make_solvable);
    }
    load_medium_graph(){
        this.graph = new RandGraph(12, 4, this.make_solvable, 10);
        this.tutor_mode = false;
        this.mode = this.load_medium_graph;
        update_highscore(this.score, 1, this.make_solvable);
        this.highscore = get_highscore(1, this.make_solvable);
    }
    load_hard_graph(){
        this.graph = new RandGraph(20, 5, this.make_solvable, 10);
        this.tutor_mode = false;
        this.mode = this.load_hard_graph;
        update_highscore(this.score, 2, this.make_solvable);
        this.highscore = get_highscore(2, this.make_solvable);
    }
    load_random_graph(){
        this.graph = new RandGraph(random(3, 20), random(2,4), this.make_solvable, 10);
        this.tutor_mode = false;
        this.mode = this.load_random_graph;
        update_highscore(this.score, 3, this.make_solvable);
        this.highscore = get_highscore(3, this.make_solvable)
    }
    load_tutor_graph(){
        this.graph = new PreGraph(tutorial_graph,12,-1);
        this.tutor_mode = true;
        this.mode = this.load_tutor_graph;
    }
    load_custom_graph(){
        this.graph = new RandGraph(this.custom_number_nodes, this.custom_number_edges, this.make_solvable, this.custom_money_range);
        this.tutor_mode = false;
        this.mode = this.load_custom_graph;
    }
    gameLoseDisplay(){
        // background
        fill(50,50,50)
        strokeWeight(5);
        stroke(200,200,200)
        rect(displayWidth/2, displayHeight/2, W(400), H(500), displayHeight/50);

        // image thumbs up
        image(guns_up, displayWidth/2, displayHeight/2 + H(30), W(thumbs_up.width), H(thumbs_up.height));

        // the buttons
        noStroke();
        textSize(res_font(50));
        fill(255,255,255);
        text('GAME OVER', displayWidth/2, displayHeight/3 + H(20));
        this.win_main_menu.draw();
    }

    // display a menu for when the graph is solved
    gameWinDisplay(){
        if(!this.add_score){
            this.score++;
            this.add_score = true;
        }
        // background
        fill(50,50,50)
        strokeWeight(5);
        stroke(200,200,200)
        rect(displayWidth/2, displayHeight/2, W(400), H(500), displayHeight/50);

        // image thumbs up
        image(thumbs_up, displayWidth/2, displayHeight/2 - H(20), W(thumbs_up.width/1.2), H(thumbs_up.height/1.2));

        // the buttons
        noStroke();
        textSize(res_font(50));
        fill(255,255,255);
        text('Graph Passed', displayWidth/2, displayHeight/3 + H(20));
        this.new_graph.draw();
        this.win_main_menu.draw();
    }

    draw()
    {
        textAlign(CENTER);
        textSize(res_font(60));
        fill([255,255,255]);
        stroke(0,0,0);
        strokeWeight(3);
        text("DOLLAR GAME", (displayWidth/2), H(150));
        textSize(res_font(26))
        text("Move Counter: " + this.graph.counter, displayWidth/2, H(960));
        textSize(res_font(30));
        text('SCORE: ' + this.score, W(200), H(50));
        text('HIGHSCORE: ' + this.highscore,  W(1700), H(50))


        this.graph.draw();
        this.undoButton.draw();
        this.restartButton.draw();
        this.menuButton.draw();
        if(!this.make_solvable){
            this.provableButton.draw();
            this.provableInfo.draw();
        }
        
        if (this.graph.is_solved() || this.graph_passed) {
            this.pause_components(true);
            if(!this.tutor_mode){
                this.gameWinDisplay();
            }
            if(!this.win_state){
                win_sound.play();
                this.win_state = true;
            }
        }else {
            this.pause_components(false)
            if(this.win_state){
                win_sound.pause();
                this.win_state = false;
            }
        }

        if(this.show_menu)
        {
            this.pause_components(true);
            fill(50,50,50);
            stroke(200,200,200)
            strokeWeight(5);
            rect(displayWidth/2, displayHeight/2, W(600), H(500), displayHeight/100)
            var btns = this.menu.draw();
            this.show_menu = !( btns[0] || btns[1] );
            strokeWeight(1);
        }
        if(this.game_over){
            this.pause_components(true);
            this.gameLoseDisplay();
        }

        if(this.tutor_mode){
            this.tutorial_game.tutorial(this.graph);
        }
    }
}