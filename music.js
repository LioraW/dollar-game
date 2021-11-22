songs = [
    "GiSt_Adrift.ogg",
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
song = {
    index: 0,
    updated: false,
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