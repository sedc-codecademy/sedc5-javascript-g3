console.log("the maximum is " + maxElement([1, 2, 3, 4]))

function longestName(names){
    if (names.length === 0)
        throw new Error ("I don't like empty lists");
    let maxIndex = 0;
    for (var index = 1; index < names.length; index++) {
        var element = names[index];
        if (element.length > names[maxIndex].length) {
            maxIndex = index;
        }
    }
    return names[maxIndex];
}