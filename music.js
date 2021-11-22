var songs = [
    "Coin_Flip.mp3",
    'BVGxmondberg_insomnia.mp3',
    'DontcryxGlimlipxSleepermane_JiroDreams.mp3',
    'Flovryxtenderspring_FirstHeartbreak.mp3',
    'Kainbeatsxsofty_CloudySprings.mp3',
    'LoafyBuildingxHoffyBeats_SleeplessWonder.mp3',
    'MilaCoolness_FarAway.mp3',
    'noone\'sperfectxKanisan_GentleWind.mp3',
    'SoftyxKaspa_Contrasts.mp3',
    'Tenno_Daydreaming.mp3',
    'WYS_Snowman.mp3',
]
var Volume = {
    music: 6, 
    change: false,
}
var song = {
    index: 0,
    updated: false,
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function update_index(index, max){
    print('the max is', max);
    if(index < max - 1){
        print('adding')
        return ++index;
    }else{
        return 0;
    }
}