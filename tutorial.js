class Tutorial {
    constructor() {
        this.x = 0;
    }
    showTextBox(step_plan){
        let textBox = new TextBox(step_plan.text, step_plan.x, step_plan.y, step_plan.w, step_plan.h, step_plan.fontSize);
        textBox.draw();
    }

    step1(graph) {
        image(step1_img, displayWidth / 2, displayHeight / 2, W(step1_img.width), H(step1_img.height));

        this.showTextBox(tutorial_template.step1);

        if (graph.get_node(3).isLastMove) {
            return 1;
        }
        return 0;
    }


    step2(graph) {
        image(step2_img, displayWidth / 2, displayHeight / 2, W(step2_img.width), H(step2_img.height));
        this.showTextBox(tutorial_template.step2);

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
        this.showTextBox(tutorial_template.step3);

        if (graph.get_node(1).isLastMove) {
            return 1;
        }
        return 0;
    }

    step4(button) {
        image(step4_img, displayWidth / 2, displayHeight / 2, W(step4_img.width), H(step4_img.height));
        this.showTextBox(tutorial_template.step4);

        if (button) {
            return 1;
        }
        return 0;
    }

    step5(button) {
        image(step5_img, displayWidth / 2, displayHeight / 2, W(step5_img.width), H(step5_img.height));
        this.showTextBox(tutorial_template.step5);

        if (button) {
            return 1;
        }
        return 0;
    }

    step6() {
        background(0, 0, 0, 153);
        this.showTextBox(tutorial_template.step6);

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
        this.showTextBox(tutorial_template.step8);
        return 0;
    }
}