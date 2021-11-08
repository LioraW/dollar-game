// these functions are used to get the correct coordinate coorisponding to a 1080p display
// lets say the typical machine runs 1080p but there are some who dont. to make sure this
// program works on those other machines these function will when called will take the value
// given and convert it to the value coorisponding to that machines display dimensions. 

function W(amount){
    return (displayWidth / (1920)) * amount;
}

function H(amount){
    return (displayHeight / (1080)) * amount;
} 