class Scene {
    constructor() {
        this.scene = this.MAIN_MENU;
        this.game = new Game('easy')
        this.main_menu = new Menu(main_menu_template);
        this.mode_menu = new Menu(mode_menu_template);
        this.diff_menu = new Menu(diff_menu_template);
    }
    setScene (scene) {
        this.scene = scene;
    }
    MAIN_MENU () { this.main_menu.draw() };
    GAME_MODE () { this.mode_menu.draw() };
    DIFFICULTY() { this.diff_menu.draw() };
    GAME      () { this.game.draw() };
    HELP      () { };
    TUTORIAL  () { };
    RULES     () { };
    PROOF     () { };
    OPTIONS   () { };
    MUSIC     () { };
    CREDITS   () { };

    draw() {
        this.scene();
    }


}