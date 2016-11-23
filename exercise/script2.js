let numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 10];

for (let i=0; i < numbers.length; i+=1){
    console.log(numbers[i]);
}
console.log("--------");
let rowNames = ["Dhurata","Granit","Sashe", "Dragan"];

for (var i = 0; i < rowNames.length; i++) {
    var name = rowNames[i];
    console.log(name.length);
}
console.log("--------");

let rowNameLengths = [];
console.log(rowNameLengths);

for (var i = 0; i < rowNames.length; i++) {
    var name = rowNames[i];
    console.log(name);
    rowNameLengths.push(name.length);
    console.log(rowNameLengths);
}

/**
 * Returns maximum element from a number array. Throws for an empty array
 */
function maxElement(array){
    if (array.length === 0)
        throw new Error ("I don't like empty lists");
    let max = array[0];
    for (var index = 1; index < array.length; index++) {
        var element = array[index];
        max = Math.max(element, max)
    }
    return max;
}


