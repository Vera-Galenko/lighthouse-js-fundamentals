const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

iceCreamFlavours.push("root beer");
console.log(iceCreamFlavours);

console.log("Don\nBurks")
console.log("Jeremy" > "Khurram")
console.log("Bob" || " Marley")
"15" === 15
let a = 3;
let b = 4;
b = a;
console.log(b);
const areMultiples  = function (bigNumber, smallNumber) {
    return bigNumber % smallNumber === 0;
  }
  
  console.log(areMultiples(15, 4));

  const seasons = ["spring", "summer", "fall"];
const length = seasons.length;

seasons.push("winter");

console.log(length);
console.log(seasons.length);
const vacationDays = 2 + 3;

if (vacationDays <= 5) {
  console.log("Not enough for a long vacation.");
} else if (vacationDays === 5) {
  console.log("We can take a whole week off, not bad.");
} else {
  console.log("We're gonna have a great time!");
}