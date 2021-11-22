songs = [
    "GiSt_Adrift.ogg",
    'BVG x møndberg – insomnia_128k.ogg',
    'dryhope x dontcry – Evoke_128k.ogg',
    'Flovry x tender spring - First Heartbreak_128k.ogg',
    'Kainbeats x softy – Cloudy Springs_128k.ogg',
    'Kupla – Valley of Hope_128k.ogg',
    'Loafy Building x Hoffy Beats – Sleepless Wonder_128k.ogg',
    'Mila Coolness – Far Away_128k.ogg',
    'no one\'s perfect x Kanisan – Gentle Wind_128k.ogg',
    'Pandrezz – Deep Down_128k.ogg',
    'Softy x Kaspa. – Contrasts_128k.ogg',
    'Tenno–Daydreaming.ogg',
    'WYS–Snowman.ogg',
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