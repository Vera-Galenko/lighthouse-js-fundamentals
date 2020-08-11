// var x = 1;

// // while loop with a stop condition
// while (x < 21) {
//     if (x % 3 === 0 && x % 5 === 0) {
//         console.log("JuliaJames");
//     }else if (x % 5 === 0) {
//         console.log("James");
//     }else if (x % 3 === 0) {
//         console.log("Julia");
//     }
//     else {
//         console.log(x);
//     }
//     // increment x at the end of each loop
//     x = x + 1 ; 
// }
let age = 13;
const whichSchool = function (age) {
    if (age < 13) {
        console.log("Elementary School");
    } else if (age >= 13 && age <= 18) {
        console.log("Secondary School");
    } else {
        console.log("Lighthouse Labs");
    }
}
whichSchool(age);