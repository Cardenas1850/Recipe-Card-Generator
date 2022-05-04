let ovenTemp = '450F';
let airFryTemp = '375F';

let ovenRoastedVeg = ['1 onion', '1 red pepper', '1 tomato'];
let saute = ['1/2 pound chorizo', '1 Diced Onion'];
let airFry = '3 diced potatoes';
let eggs = ['2 eggs sunnyside up']

let sauceSpices = ['Kosher Salt', 'Black Pepper', 'garlic powder', '3 chipotle peppers']

let blendedSauce = ovenRoastedVeg + sauceSpices
let cookingSteps = ['Preheat oven to ' + ovenTemp + '. ' + 'In a saute pan cook ' + saute + ' until chorizo is fully cooked and onions are translucent. ' + ' In the airfryer at ' + airFryTemp + ' cook ' + airFry + ' until crisp.'];

const breakfastMix = JSON.stringify(cookingSteps);

console.log(breakfastMix);
console.log(typeof breakfastMix);