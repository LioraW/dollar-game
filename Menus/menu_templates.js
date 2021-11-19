var Volume = {
    music: 1,
    change: false,
}

const main_menu_template = {
    title: "MAIN MENU",
    buttons: [
        {
            title: "PLAY",
            heightOffset: 80,
            onClick: () => { scene = scenes.GAME_MODE }
        },
        {
            title: "HOW TO PLAY",
            heightOffset: 160,
            onClick: () => { scene = scenes.HELP }
        },
        {
            title: "OPTIONS",
            heightOffset: 240,
            onClick: () => { scene = scenes.OPTIONS }
        },
        {
            title: "CREDITS",
            heightOffset: 320,
            onClick: () => { scene = scenes.CREDITS }
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
            heightOffset: 80,
            onClick: () => { game.load_tutor_graph(); scene = scenes.GAME }
        },
        {
            title: "RULES",
            heightOffset: 160,
            onClick: () => { scene = scenes.RULES }
        },
        {
            title: "MATH BACKGROUND",
            heightOffset: 240,
            onClick: () => { scene = scenes.MATH }
        },
        {
            title: "BACK",
            heightOffset: 320,
            onClick: () => { scene = scenes.MAIN_MENU }
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
            heightOffset: 80,
            onClick: () => { scene = scenes.GAME }
        },
        {
            title: "WINNABLE MAPS",
            heightOffset: 160,
            onClick: () => { game.make_solvable = true; scene =  scenes.DIFFICULTY }
        },
        {
            title: "UNCERTAIN MAPS",
            heightOffset: 240,
            onClick: () => { game.make_solvable = false; scene =  scenes.DIFFICULTY }
        },
        {
            title: "BACK",
            heightOffset: 320,
            onClick: () => { scene = scenes.MAIN_MENU }
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
            heightOffset: 80,
            onClick: () => { game.load_easy_graph(); scene = scenes.GAME }
        },
        {
            title: "NORMAL",
            heightOffset: 160,
            onClick: () => { game.load_medium_graph(); scene =  scenes.GAME }
        },
        {
            title: "HARD",
            heightOffset: 240,
            onClick: () => { game.load_hard_graph(); scene =  scenes.GAME }
        },
        {
            title: "RANDOM DIFFICULTY",
            heightOffset: 320,
            onClick: () => { game.load_random_graph(); scene =  scenes.GAME }
        },
        {
            title: "CUSTOM",
            heightOffset: 400,
            onClick: () => { }
        },
        {
            title: "BACK",
            heightOffset: 400,
            onClick: () => { scene = scenes.MAIN_MENU }
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
            heightOffset: 80,
            onClick: () => { console.log("Changing theme"); }
        },
        {
            title: "BACK",
            heightOffset: 240,
            onClick: () => { scene = scenes.MAIN_MENU }
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
            }
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
            }
        }
    ],
    scrubbers: [
        {
            title: "Volume:",
            ref:() => {
                return Volume.music/10;
            },
            text_x: 810, text_y: 519, text_size: 43,
            scrub_x: 790, scrub_y: 41, w: 120, h: 30,

        }
    ]
}
const game_menu_template = {
    title: "menu",
    buttons: [
        {
            title: "Return",
            heightOffset: 80,
            onClick: () => { return false; }
        },
        {
            title: "Quit to Main Menu",
            heightOffset: 240,
            onClick: () => { scene = scenes.MAIN_MENU; return false; }
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
            }
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
            }
        }
    ],
    scrubbers: [
        {
            title: "Volume:",
            ref:() => {
                return Volume.music/10;
            },
            text_x: 810, text_y: 519, text_size: 43,
            scrub_x: 790, scrub_y: 41, w: 120, h: 30,

        }
    ]
}
