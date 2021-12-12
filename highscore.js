highscore = {
    normal: [0,0,0,0],
    adventure: [0,0,0,0],
}
function get_highscore(difficulty, normal){
    if(normal){
        return highscore.normal[difficulty];
    }else{
        return highscore.adventure[difficulty];
    }
}

function update_highscore(current_score, difficulty, normal){
    print(current_score,highscore.normal[difficulty])
    if(normal && current_score > highscore.normal[difficulty]){
        print("updating")
        highscore.normal[difficulty] = current_score;
    }else if (current_score > highscore.adventure[difficulty]){
        highscore.adventure[difficulty] = current_score;
    }
}