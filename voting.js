// const stations = [
//     ['Big Bear Donair', 10, 'restaurant'],
//     ['Bright Lights Elementary', 50, 'school'],
//     ['Moose Mountain Community Centre', 45, 'community centre']
//   ];

//   function chooseStations(stations){
//     const goodStations = [];
//     for (const station of stations){
//         const capacity = station[1];
//         const type = station[2];
//         if((capacity >= 20) && (type === 'school' || type === 'community centre')){
//          goodStations.push(station[0]);  
         
//         }
//     }
//     return goodStations;
//   }
  
// console.log(chooseStations(stations));

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

const finalPosition = function(moves) {
    var position = [];
    var x = 0;
    var y = 0; 
    for (var i = 0; i < m0ves.length; i++){ 
        if (moves[i] === 'north'){
             y += 1;
             console.log(x);
        }else if (moves[i] === 'south'){
            y -= 1;} 
        else if ( moves[i] === 'west'){
            x -= 1;
        }else { x += 1;
        } 
    } position.push(x , y);
 };   
    

console.log(finalPosition());


// --------------------------
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

const finalPosition = function(moves) {
    var position = [];
    var x = 0;
    var y = 0; 
    for (var i = 0; i < moves.length; i++){
   
        if (moves[i] === 'north'){
             y += 1;
        }else if (moves[i] === 'south'){
           y -= 1;} 
        else if ( moves[i] === 'west'){
           x -= 1;
        }else { x += 1;
        }   
    } 
    position.push(x, y);
    return position;
 }

 console.log(finalPosition(moves));
    
 

// -------------------------------------





const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

// const finalPosition = (moves) => {
    var position = [];
    var x = 0;
    var y = 0; 
for (var i = 0; i < moves.length; i++){
   
            if (moves[i] === 'north'){
                 y += 1;
            }else if (moves[i] === 'south'){
               y -= 1;} 
            else if ( moves[i] === 'west'){
               x -= 1;
            }else { x += 1;
            } 
            
        } 
//         
// };

position.push(x , y);  
console.log(position);

let name = "";
let yearOfBirth = 1955;
let currentYear = 2020;

function ageCalculator(name, yearOfBirth, currentYear){
    let age = currentYear - yearOfBirth;
    let message = name + " is " + age + " years old."
    return message;
}

console.log(ageCalculator("Miranda", 1983, 2015));



function howManyHundreds(bootles){
    if (bootles % 100 == 0 || bootles % 100 > 0){
        return Math.floor(bootles / 100)
    }else if(bootles % 100 < 0){
        return 0;
    }
} 

console. log(howManyHundreds(542));

function calculateRectangleArea(length, width) { 
    var area = length * width;
    if (length <= 0 || width <= 0){
        area = undefined;
    } else { return area;}
   
}

console.log(calculateRectangleArea(-1, 0));

function calculateTriangleArea(base, height){
    var area = base * height / 2;
    if (base <= 0 || height <= 0){
        area = undefined;
    } else { return area;}
}

console.log(calculateTriangleArea(-1, 0));

function calculateCircleArea(radius){
    var area = Math.PI * (radius * radius)
    if (radius <= 0){
        area = undefined;
    } else { return area;}
}

console.log(calculateCircleArea(20));

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(item){
    var newItem = item * 1.15;
    return Number(newItem.toFixed(2));
})

console.log(totals);

var donutBox = [
    ["glazed", "chocolate glazed", "cinnamon"],
    ["powdered", "sprinkled", "glazed cruller"],
    ["chocolate cruller", "Boston creme", "creme de leche"]
  ];
  
  // here, donutBox.length refers to the number of rows of donuts
  for (var row = 0; row < donutBox.length; row++) {
    console.log(donutBox[row]);
  }

  var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var i = 0; i < numbers.length; i++){
    for (var j = 0; j < numbers[i].length; j++){
        if(numbers[i][j] % 2 === 0){
            numbers[i][j] = "even"
        }else {numbers[i][j] = "odd"}
    }
}
console.log(numbers);
// your code goes here
