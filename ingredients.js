const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(i < ingredients.length){
    console.log(ingredients[i]);
    i++
}

// Write a for loop that prints out the contents of ingredients:
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
for(let i = 0; i < ingredients.length; i++){
    console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var reversed = ingredients.reverse();
for(let i = 0; i < reversed.length; i++){
    console.log(reversed[i]);
}

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
for(let i = 0; i < ingredients.length; i++){
    var reversed = ingredients.reverse();
    console.log(reversed[i]);
}