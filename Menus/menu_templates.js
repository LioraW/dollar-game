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
            onClick: () => { scene = scenes.GAME_MODE }
        },
        {
            title: "CREDITS",
            heightOffset: 320,
            onClick: () => { scene = scenes.GAME_MODE }
        },
    ]
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
            onClick: () => { game.load_tutor_graph(); scene = scenes.GAME }
        },
        {
            title: "PROOF",
            heightOffset: 240,
            onClick: () => { game.load_tutor_graph(); scene = scenes.GAME }
        },

    ]
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
    ]
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
            onCLick: () => { game.load_random_graph(); scene =  scenes.GAME }
        }
    ]
}