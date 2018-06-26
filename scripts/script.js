console.log('JavaScript Sourced');

function functionName() {

}

// for (var i = 1; i < 100; i++) {
//     if (i % 5 == 0 && i % 3 == 0) {
//         console.log("Fizz Buzz");
//     } else {
//         if (i % 5 == 0) {
//             console.log("Fizz");
//         } else {
//             if (i % 3 == 0) {
//                 console.log("Buzz");
//             } else console.log(i);
//         }
//     }
// }

// var arr = [34, 234, 567, 4];
// console.log(arr);
// var newArr = arr.reverse();
// console.log(newArr);

var myString = "Hello world!";

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += myString[i];
    }
    return newString;
}

reverseString(myString);



function primeFactors(n) {
    var factors = [],
        divisor = 2;
    while (n > 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}

var myName = "Jason";
alert("My name is " + myName);
var name = "Ruby";
var age = 47;
alert("My name is " + myName + " " + name + " and I am " + age + " years old.")