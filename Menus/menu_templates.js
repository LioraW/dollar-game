const main_menu_template = {
    title: "MAIN MENU",
    buttons: [
        {
            title: "PLAY",
            x: 0, y: 80, w: 500, h: 60,
            onClick: () => { scene = scenes.GAME_MODE }
        },
        {
            title: "HOW TO PLAY",
            x: 0, y: 160, w: 500, h: 60,
            onClick: () => { scene = scenes.HELP }
        },
        {
            title: "OPTIONS",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { scene = scenes.OPTIONS }
        },
        {
            title: "CREDITS",
            x: 0, y: 320, w: 500, h: 60,
            onClick: () => { scene = scenes.CREDITS }
        },
    ],
}
const help_menu_template = {
    title: "HOW TO PLAY",
    buttons: [
        {
            title: "TUTORIAL",
            x: 0, y: 80, w: 500, h: 60,
            onClick: () => { game.load_tutor_graph(); scene = scenes.GAME }
        },
        {
            title: "RULES",
            x: 0, y: 160, w: 500, h: 60,
            onClick: () => { scene = scenes.RULES }
        },
        {
            title: "MATH BACKGROUND",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { scene = scenes.MATH }
        },
        {
            title: "BACK",
            x: 0, y: 320, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU }
        },
    ],
}
const mode_menu_template = {
    title: "MODE",
    buttons: [
        {
            title: "CAMPAIGN",
            x: 0, y: 80, w: 500, h: 60,
            onClick: () => { game.make_solvable = true; scene = scenes.GAME }
        },
        {
            title: "WINNABLE MAPS",
            x: 0, y: 160, w: 500, h: 60,
            onClick: () => { game.make_solvable = true; scene =  scenes.DIFFICULTY }
        },
        {
            title: "UNCERTAIN MAPS",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { game.make_solvable = false; scene =  scenes.DIFFICULTY }
        },
        {
            title: "BACK",
            x: 0, y: 320, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU }
        },
    ],
}
const diff_menu_template = {
    title: "DIFFICULTY MENU",
    buttons: [
        {
            title: "EASY",
            x: 0, y: 80, w: 500, h: 60,
            onClick: () => { game.load_easy_graph(); scene = scenes.GAME }
        },
        {
            title: "NORMAL",
            x: 0, y: 160, w: 500, h: 60,
            onClick: () => { game.load_medium_graph(); scene =  scenes.GAME }
        },
        {
            title: "HARD",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { game.load_hard_graph(); scene =  scenes.GAME }
        },
        {
            title: "RANDOM DIFFICULTY",
            x: 0, y: 320, w: 500, h: 60,
            onClick: () => { game.load_random_graph(); scene =  scenes.GAME }
        },
        {
            title: "CUSTOM",
            x: 0, y: 400, w: 500, h: 60,
            onClick: () => { game.load_custom_graph(); scene = scenes.CUSTOM }
        },
        {
            title: "BACK",
            x: 0, y: 480, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU }
        },
    ],
}
const custom_game_menu = {
    title: "Custom Game",
    buttons: [
        {
            title: "Play Game",
            x: 0, y: 500, w: 500, h: 60,
            onClick: () => { game.load_custom_graph(); scene = scenes.GAME; }
        },
        {
            title: "Back",
            x: 0, y: 600, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU; }
        },
    ],
    scrubbers: [
        {
            title: "Number of Nodes:",
            ref:() => {
                return (game.custom_number_nodes/20); //20 is the max
            },
            increase: () => {
                if(game.custom_number_nodes < 20){
                    game.custom_number_nodes++;
                }
                console.log("Number of nodes: " + game.custom_number_nodes)

            },
            decrease: () => {
                if(game.custom_number_nodes > 3) {
                    game.custom_number_nodes--;
                }
            },
            value: () => {
                return game.custom_number_nodes;
            },
            text_x: 950, text_y: 450, text_size: 36,
            scrub_x: 882, scrub_y: 130, w: 160, h: 40,

        },
        {
            title: "Number of Edges:",
            ref:() => {
                return game.custom_number_edges/5; // 5 is the max
            },
            increase: () => {
                if(game.custom_number_edges < 5){
                    game.custom_number_edges++;
                }

            },
            decrease: () => {
                if(game.custom_number_edges > 2) {
                    game.custom_number_edges--;
                }
            },
            value: () => {
                return game.custom_number_edges;
            },
            text_x: 950, text_y: 575, text_size: 36,
            scrub_x: 882, scrub_y: 250, w: 160, h: 40,

        },
        {
            title: "Money Range:",
            ref:() => {
                return (game.custom_money_range/15); //15 is the max
            },
            increase: () => {
                if(game.custom_money_range < 15){
                    game.custom_money_range++;
                }

            },
            decrease: () => {
                if(game.custom_money_range > 3){
                    game.custom_money_range--;
                }

            },
            value: () => {
                return game.custom_money_range;
            },
            text_x: 950, text_y: 700, text_size: 36,
            scrub_x: 882, scrub_y: 370, w: 160, h: 40,

        }
    ]
}

const options_menu_template = {
    title: "Options",
    buttons: [
        {
            title: "TOGGLE THEME",
            x: 0, y: 80, w: 500, h: 60,
            onClick: () => { console.log("Changing theme"); }
        },
        {
            title: "BACK",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU }
        },
    ],
    scrubbers: [
        {
            title: "Volume:",
            ref:() => {
                return Volume.music/10;
            },
            decrease: () => {
                if(Volume.music > 0){
                    Volume.music--;
                    Volume.change = true;
                }
            },
            increase: () => {
                if(Volume.music < 10){
                    Volume.music++;
                    Volume.change = true;
                }
            },
            text_x: 810, text_y: 519, text_size: 43,
            scrub_x: 982, scrub_y: 139, w: 160, h: 40,

        }
    ]
}
const game_menu_template = {
    title: "menu",
    buttons: [
        {
            title: "Return",
            x: 0, y: 80, w: 500, h: 60,
            onClick: () => { return false; }
        },
        {
            title: "Quit to Main Menu",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU; return false; }
        },
    ],
    scrubbers: [
        {
            title: "Volume:",
            ref:() => {
                return Volume.music/10;
            },
            decrease: () => {
                if(Volume.music > 0){
                    Volume.music--;
                    Volume.change = true;
                }
            },
            increase: () => {
                if(Volume.music < 10){
                    Volume.music++;
                    Volume.change = true;
                }
            },
            text_x: 810, text_y: 519, text_size: 43,
            scrub_x: 982, scrub_y: 139, w: 160, h: 40,

        }
    ]
}
const solved_graph_template = {
    title: "Graph Passed ",
    buttons: [
        {
            title: "Next Graph",
            x: 0, y: 80, w: 500, h: 60,
            onClick: () => { }
        },
        {
            title: "Quit to Main Menu",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU; }
        },
    ]
}
 