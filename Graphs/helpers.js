// these are random helper functions for random situations. 

// this checks to make sure that one pair of coords is not within a
// specified radius of another pair of coords 
function union(setA, setB) {
    var arr_setB = Array.from(setB);
    let _union = new Set(setA)
    for (var i = 0; i < arr_setB.length; i++) {
        _union.add(arr_setB[i])
    }
    return _union
}

function intersection(setA, setB) {
    var arr_setB = Array.from(setB);
    let _intersection = new Set();
    for (var i = 0; i < arr_setB.length; i++) {
        if (setA.has(arr_setB[i])) {
            _intersection.add(arr_setB[i]);
        }
    }
    return _intersection;
}
function has_intersection(setA, setB) {
    var inter = intersection(setA, setB);
    return inter.size > 0;
}
// compresses the sets if any of them have intersections
function compress_sets(sets)
{
    for(var i = 0; i < sets.length; i++)
    {
        for(var j = 0; j < sets.length; j++)
        {
            if(i === j)
            {
                continue;
            }
            if(has_intersection(sets[i], sets[j]))
            {
                sets[i] = union(sets[i], sets[j]); 
                sets.splice(j,1);
            }
        }
        
    }
    return sets;
}