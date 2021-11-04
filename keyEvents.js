{
    var keyInput = [];
    var keyDowned = [];
    // key typed  
    {
    var keyFull = [];
    }

    keyPressed = function () {
        keyInput[keyCode] = true;

        if(keyCode === 80){
            background_music.pause();
        }
    };
    keyReleased = function () {
        keyInput[keyCode] = false;
    };
  
    keyTyped = function () {
        keyFull[keyCode] = true;
    };
} // key functions