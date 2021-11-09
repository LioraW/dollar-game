let x = 0;
function step1(graph){
    image(step1_img, displayWidth/2, displayHeight/2, W(step1_img.width), H(step1_img.height));
    step1_text.draw();

    if(graph.get_node(3).isLastMove)
    {
        return 1;
    }
    return 0;
}  
function step2(graph){
    image(step2_img, displayWidth/2, displayHeight/2, W(step2_img.width), H(step2_img.height));
    step2_text.draw();

    if(graph.get_node(4).just_clicked)
    {
        x++;
        graph.get_node(4).just_clicked = false;
    }
    if(x === 2){
        x = 0;
        return 1;
    }
    return 0;
}
function step3(graph){
    image(step3_img, displayWidth/2, displayHeight/2, W(step3_img.width), H(step3_img.height));
    step3_text.draw();

    if(graph.get_node(1).isLastMove)
    {
        return 1;
    }
    return 0;
}
function step4(button){
    image(step4_img, displayWidth/2, displayHeight/2, W(step4_img.width), H(step4_img.height));
    step4_text.draw();

    if(button)
    {
        return 1;
    }
    return 0;
}
function step5(button){
    image(step5_img, displayWidth/2, displayHeight/2, W(step5_img.width), H(step5_img.height));
    step5_text.draw();

    if(button)
    {
        return 1;
    }
    return 0;
}
function step5(button){
    image(step5_img, displayWidth/2, displayHeight/2, W(step5_img.width), H(step5_img.height));
    step5_text.draw();

    if(button)
    {
        return 1;
    }
    return 0;
}
function step6(){
    background(0,0,0,153);
    step6_text.draw();

    if(mouse_downed)
    {
        mouseReset();
        return 1;
    }
    return 0;
}
function step7(graph){
    if(graph.is_solved()){
        return 1;
    }
    return 0;
}
function step8(){
    background(0,0,0,153);
    step8_text.draw();
    return 0;
}