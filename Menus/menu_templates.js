

const main_menu_template = {
    title: "MAIN MENU",
    buttons: [
        {
            title: "PLAY",
            x: 0, y: 80, w: 500, h: 60,
            onClick: () => { scene = scenes.GAME_MODE },
            onHover: () => { }
        },
        {
            title: "HOW TO PLAY",
            x: 0, y: 160, w: 500, h: 60,
            onClick: () => { scene = scenes.HELP },
            onHover: () => { }
        },
        {
            title: "OPTIONS",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { scene = scenes.OPTIONS },
            onHover: () => { }
        },
        {
            title: "CREDITS",
            x: 0, y: 320, w: 500, h: 60,
            onClick: () => { scene = scenes.CREDITS },
            onHover: () => { }
        },
    ],
    pic_btns: [],
    scrubbers: []
}
const help_menu_template = {
    title: "HOW TO PLAY",
    buttons: [
        {
            title: "TUTORIAL",
            x: 0, y: 80, w: 500, h: 60,
            onClick: () => { game.load_tutor_graph(); scene = scenes.GAME },
            onHover: () => { }
        },
        {
            title: "RULES",
            x: 0, y: 160, w: 500, h: 60,
            onClick: () => { scene = scenes.RULES },
            onHover: () => { }
        },
        {
            title: "MATH BACKGROUND",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { scene = scenes.MATH },
            onHover: () => { }
        },
        {
            title: "BACK",
            x: 0, y: 320, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU },
            onHover: () => { }
        },
    ],
    pic_btns: [],
    scrubbers: []
}
const mode_menu_template = {
    title: "MODE",
    buttons: [
        {
            title: "CAMPAIGN",
            x: 0, y: 80, w: 500, h: 60,
            onClick: () => { game.make_solvable = true; scene = scenes.GAME },
            onHover: () => { }
        },
        {
            title: "WINNABLE MAPS",
            x: 0, y: 160, w: 500, h: 60,
            onClick: () => { game.make_solvable = true; scene =  scenes.DIFFICULTY },
            onHover: () => { 
                textSize(res_font(30)); stroke(0,0,0); strokeWeight(1); fill(200,200,200); textAlign(LEFT);
                text('Get points by solving graphs.\n'+
                     'every graph in this mode is\n'+
                     '100% solvable', W(1350), H(500)) }
        },
        {
            title: "UNCERTAIN MAPS",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { game.make_solvable = false; scene =  scenes.DIFFICULTY },
            onHover: () => { 
                textSize(res_font(30)); stroke(0,0,0); strokeWeight(1); fill(200,200,200); textAlign(LEFT);
                text('Get points by solving graphs\n'+
                     'and determining a graph unknown\n'+
                     'a graph is unkown when it\n'+
                     'cannot be proven solvable\n'+
                     'Therefore NOT every graph in\n'+
                     'this mode is solvable', W(1350), H(500)) }
        },
        {
            title: "BACK",
            x: 0, y: 320, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU },
            onHover: () => { }
        },
    ],
    pic_btns: [],
    scrubbers: []
}
const diff_menu_template = {
    title: "DIFFICULTY MENU",
    buttons: [
        {
            title: "EASY",
            x: 0, y: 80, w: 500, h: 60,
            onClick: () => { game.load_easy_graph(); scene = scenes.GAME },
            onHover: () => { 
                textSize(res_font(30)); stroke(0,0,0); strokeWeight(1); fill(200,200,200); textAlign(LEFT);
                hs = (game.make_solvable ? highscore.normal[0] : highscore.adventure[0]);
                text('CURRENT HIGHSCORE: '+ hs, W(1350), H(440))}
        },
        {
            title: "NORMAL",
            x: 0, y: 160, w: 500, h: 60,
            onClick: () => { game.load_medium_graph(); scene =  scenes.GAME },
            onHover: () => { 
                textSize(res_font(30)); stroke(0,0,0); strokeWeight(1); fill(200,200,200); textAlign(LEFT);
                hs = (game.make_solvable ? highscore.normal[1] : highscore.adventure[1]);
                text('CURRENT HIGHSCORE: '+ hs, W(1350), H(520))}
        },
        {
            title: "HARD",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { game.load_hard_graph(); scene =  scenes.GAME },
            onHover: () => { 
                textSize(res_font(30)); stroke(0,0,0); strokeWeight(1); fill(200,200,200); textAlign(LEFT);
                hs = (game.make_solvable ? highscore.normal[2] : highscore.adventure[2]);
                text('CURRENT HIGHSCORE: '+ hs, W(1350), H(600))}
        },
        {
            title: "RANDOM DIFFICULTY",
            x: 0, y: 320, w: 500, h: 60,
            onClick: () => { game.load_random_graph(); scene =  scenes.GAME },
            onHover: () => { 
                textSize(res_font(30)); stroke(0,0,0); strokeWeight(1); fill(200,200,200); textAlign(LEFT);
                hs = (game.make_solvable ? highscore.normal[3] : highscore.adventure[3]);
                text('CURRENT HIGHSCORE: '+ hs, W(1350), H(680))}
        },
        {
            title: "CUSTOM",
            x: 0, y: 400, w: 500, h: 60,
            onClick: () => { },
            onHover: () => { }
        },
        {
            title: "BACK",
            x: 0, y: 480, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU },
            onHover: () => { }
        },
    ],
    pic_btns: [],
    scrubbers: []
}
const options_menu_template = {
    title: "Options",
    buttons: [
        {
            title: "TOGGLE THEME",
            x: 0, y: 80, w: 500, h: 60,
            onClick: () => { console.log("Changing theme"); },
            onHover: () => { }
        },
        {
            title: "BACK",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU },
            onHover: () => { }
        },
    ],
    pic_btns: [
        {
            title: "Plus",
            image: 'images/plus.png',
            x: 1174, y: 160, w: 40, h: 40,
            onClick: () => { 
                if(Volume.music < 10){
                    Volume.music++;
                    Volume.change = true;
                } 
            },
            onHover: () => { }
        },
        {
            title: "Minus",
            image: 'images/minus.png',
            x: 950, y: 160, w: 40, h:40,
            onClick: () => { 
                if(Volume.music > 0){
                    Volume.music--;
                    Volume.change = true;
                }
            },
            onHover: () => { }
        }
    ],
    scrubbers: [
        {
            title: "Volume:",
            ref:() => {
                return Volume.music/10;
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
            onClick: () => { return false; },
            onHover: () => { }
        },
        {
            title: "Quit to Main Menu",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU; return false; },
            onHover: () => { }
        },
    ],
    pic_btns: [
        {
            title: "Plus",
            image: 'images/plus.png',
            x: 1174, y: 160, w: 40, h: 40,
            onClick: () => { 
                if(Volume.music < 10){
                    Volume.music++;
                    Volume.change = true;
                } 
            },
            onHover: () => { }
        },
        {
            title: "Minus",
            image: 'images/minus.png',
            x: 950, y: 160, w: 40, h:40,
            onClick: () => { 
                if(Volume.music > 0){
                    Volume.music--;
                    Volume.change = true;
                }
            },
            onHover: () => { }
        }
    ],
    scrubbers: [
        {
            title: "Volume:",
            ref:() => {
                return Volume.music/10;
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
            onClick: () => { },
            onHover: () => { }
        },
        {
            title: "Quit to Main Menu",
            x: 0, y: 240, w: 500, h: 60,
            onClick: () => { scene = scenes.MAIN_MENU; },
            onHover: () => { }
        },
    ],
    pic_btns: [],
    scrubbers: []
}
 