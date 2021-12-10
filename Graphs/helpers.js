// these are random helper functions for random situations. 

// this checks to make sure that one pair of coords is not within a
// specified radius of another pair of coords 
function union(setA, setB) {
    let arr_setB = Array.from(setB);
    let _union = new Set(setA)
    arr_setB.forEach(item => _union.add(item));
    return _union
}

function intersection(setA, setB) {
    let arr_setB = Array.from(setB);
    let _intersection = new Set();
    arr_setB.forEach(item => {
        if (setA.has(item)){
            _intersection.add(item);
        }
    });
    return _intersection;
}
function has_intersection(setA, setB) {
    return intersection(setA, setB).size > 0;
}
// compresses the sets if any of them have intersections
function compress_sets(sets)
{
    for(let i = 0; i < sets.length; i++)
    {
        for(let j = 0; j < sets.length; j++)
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