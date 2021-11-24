class Tutorial {
    constructor() {
        this.x = 0;
        this.fontSize = 20;
        this.step = 1;
        this.undo_pressed = false;
        this.reset_pressed = false;

        this.repeat_tutorial = new TextButton("Repeat Tutorial", 810, 550, 250, 60,
            () => { this.step = 1 }, 25);

        this.main_menu = new TextButton("Main Menu", 1115, 550, 250, 60,
            () => { this.step = 1; scene = scenes.MAIN_MENU }, 25);
    }
    set_undo_pressed(){
        this.undo_pressed = !this.undo_pressed;
    }
    set_reset_pressed(){
        this.reset_pressed = !this.reset_pressed;
    }
    tutorial(graph){
        switch (this.step) {
            case 1:
                graph.reset_graph(); //act as tutorial reset-er
                this.step += this.step1(graph);
                break;
            case 2:
                this.step += this.step2(graph);
                break;
            case 3:
                this.step += this.step3(graph);
                break;
            case 4:
                this.step += this.step4();
                this.undo_pressed = false;
                break;
            case 5:
                this.step += this.step5();
                this.reset_pressed = false;
                break;
            case 6:
                this.step += this.step6();
                break;
            case 7:
                this.step += this.step7(graph);
                break;
            case 8:
                this.step += this.step8();
                this.repeat_tutorial.draw();
                this.main_menu.draw();
                break;
        }
    }

    showTextBox(step_plan, font_size){
        let textBox = new TextBox(step_plan.text, step_plan.x, step_plan.y,
            step_plan.w, step_plan.h, font_size);
        textBox.draw();
    }

    step1(graph) {
        image(step1_img, displayWidth / 2, displayHeight / 2, W(step1_img.width), H(step1_img.height));

        this.showTextBox(tutorial_template.step1, this.fontSize);

        if (graph.get_node(3).isLastMove) {
            return 1;
        }
        return 0;
    }

    step2(graph) {
        image(step2_img, displayWidth / 2, displayHeight / 2, W(step2_img.width), H(step2_img.height));
        this.showTextBox(tutorial_template.step2, this.fontSize);

        if (graph.get_node(4).just_clicked) {
            this.x++;
            graph.get_node(4).just_clicked = false;
        }
        if (this.x === 2) {
            this.x = 0;
            return 1;
        }
        return 0;
    }

    step3(graph) {
        image(step3_img, displayWidth / 2, displayHeight / 2, W(step3_img.width), H(step3_img.height));
        this.showTextBox(tutorial_template.step3, this.fontSize);

        if (graph.get_node(1).isLastMove) {
            return 1;
        }
        return 0;
    }

    step4() {
        image(step4_img, displayWidth / 2, displayHeight / 2, W(step4_img.width), H(step4_img.height));
        this.showTextBox(tutorial_template.step4, this.fontSize);

        if (this.undo_pressed) {
            return 1;
        }
        return 0;
    }

    step5() {
        image(step5_img, displayWidth / 2, displayHeight / 2, W(step5_img.width), H(step5_img.height));
        this.showTextBox(tutorial_template.step5, this.fontSize);

        if (this.reset_pressed) {
            return 1;
        }
        return 0;
    }

    step6() {
        background(0, 0, 0, 153);
        this.showTextBox(tutorial_template.step6, this.fontSize);

        if (mouse_downed) {
            mouseReset();
            return 1;
        }
        return 0;
    }

    step7(graph) {
        if (graph.is_solved()) {
            return 1;
        }
        return 0;
    }

    step8() {
        background(0, 0, 0, 153);
        this.showTextBox(tutorial_template.step8, 31);
        return 0;
    }
}