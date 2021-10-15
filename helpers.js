// these are random helper functions for random situations. 

// this checks to make sure that one pair of coords is not within a
// specified radius of another pair of coords 
function too_close(x, y, x1, y1, radius){
    return x > x1 - radius && x < x1 + radius && y > y1 - radius && y < y1 + radius;
}