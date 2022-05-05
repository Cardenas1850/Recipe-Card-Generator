let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
    img.src = './assets/images/roasted.jpg';
    document.getElementById('text').innerHTML = "Preheat oven to 450F, and quarter an onion, red pepper, and tomato and roast until charred. In an airfryer at 375F cook 3 diced potatoes. In a skillet cook onions and chorizo till fully cooked";
})

btn2.addEventListener('click', () => {
    img.src = './assets/images/salsa.jpg';
    document.getElementById('text').innerHTML = "Using an immersion blender or a stand-blender throw together the roasted veg with 3 chipotle peppers, 1 tbsp of the adobo sauce, 1tsp kosher salt, 2tsp cracked pepper, and 1tbsp garlic powder.";
})

btn3.addEventListener('click', () => {
    img.src = './assets/images/plated.jpg';
    document.getElementById('text').innerHTML = "Once your potatoes are crirspy add them to your chorizo and onions along with your suace, reserving 1/2 cup to garnish. In a seperate skillet cook 4 eggs sunnyside up. Plate the chorzio and potato mix and top with two eggs and 1/4 cup of the sauce per plate.";
})