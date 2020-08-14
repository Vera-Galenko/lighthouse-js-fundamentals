//  const amounts = [61.00, 52.25, 112.99, 5.00]; 

// let total = 0;

// for (let i = 0; i < amounts.length; i++) {
//   total += amounts[i];
// }
// console.log('Order total is: ' + total);


// // let total = 0;
// // for (let amount of amounts) {
// //     total += amount;
// // }
// // console.log('Order total is: ' + total);

// let reverseMe = "Vera";
// function reverseString(reverseMe) {
//     var reversed = "";
//     for (var i = reverseMe.length - 1; i >= 0; i--){
//         reversed += reverseMe[i];
//     }
//     return reversed;
// }

// console.log(reverseString(reverseMe));
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
  // Let's build a huge string equivalent to the triangle
  var triangle = "";

  //Let's start from the topmost line
  var lineNumber = 1;

  for(lineNumber=1; lineNumber<=length; lineNumber++){
      // We will not print one line at a time.
      // Rather, we will make a huge string that will comprise the whole triangle
      triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));

var fun = "";

var laugh = function(word){
 
  for( var i = 0; i < word; i++ ){
      fun += "ha";
  } 
  fun += "!"
  return fun;
}/* finish the function expression */

console.log(laugh(3));