// function magicalWell(a, b, number) {
//     if (number === 0)
//         return 0;

//     let roundGain = a * b; 
//     let totalGain = roundGain + magicalWell(a + 1, b + 1, number - 1);
//     return totalGain;
// }

function magicalWell(a, b, number) {
    let sum = 0;
    for (var index = 0; index < number; index++) {
        sum += a * b;
        a += 1;
        b += 1;
    }
    return sum;
}

/*
function showMagical(a, b, number, expected) {
    let result = magicalWell(a, b, number);
    if (result === expected) {
        return `<span style="color:green">magicalWell(${a},${b},${number}) is correctly ${result}</span><br />`;
    } else {
        return `<span style="color:red">magicalWell(${a},${b},${number}) is ${result} and should be ${expected}</span><br />`;
    }
}


var result = document.getElementById("result");
result.innerHTML += showMagical(1, 2, 1, 2);
result.innerHTML += showMagical(3, 2, 1, 6);
result.innerHTML += showMagical(10, 1, 1, 10);
result.innerHTML += showMagical(1, 2, 2, 8);
result.innerHTML += showMagical(4, 5, 3, 92);
result.innerHTML += showMagical(4, 5, 0, 0);
result.innerHTML += showMagical(0, 0, 1, 0);
result.innerHTML += showMagical(0, 0, 2, 1);
result.innerHTML += showMagical(0, 0, 3, 5);
result.innerHTML += showMagical(0, 0, 4, 14);
*/



/** 
 * n=3 a=4 b=5
 * 
 * n=2 a=5 b=6 sum = 20
 * 
 * n=1 a=6 b=7 sum = 20 + 30 = 50
 * 
 * n=0 a=7 b=8 sum = 50 +42 = 92
*/

