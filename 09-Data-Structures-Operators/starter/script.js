'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order : function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievery({
      starterIndex = 1, 
      mainIndex = 1, 
      time = '20:00', 
      address 
    }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
      console.log(`Here is your delicius pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
restaurant.orderDelievery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelievery({
  address: 'Via del sole, 21',
  starterIndex: 1,
})
*/
/*
let a = 111;
let b = 999;
const obj = {a:23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b);
*/

/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);

let [main, secondary] =restaurant.categories;
console.log(main, secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];

console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2,0);

console.log(starter, mainCourse);

const nested = [2, 5, [5, 6]];
//const [i,j] = nested
//console.log(i,j)
const [i, , [j, k]] = nested;
console.log(i, j ,k);

const [p = 1 ,q = 1,r = 1] = [8,9];
console.log(p,q,r);
*/
/*
const {name, openingHours, categories}= restaurant;
console.log(name , openingHours, categories);

const {name: restaurantName, openingHours:hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

const {menu = [], starterMenu: starters = []}= restaurant;
console.log(menu, starters);

const {
  fri: {open: o, close: c},
} = openingHours;
console.log(o, c);
*/
/*
const arr = [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);


const str = 'Jonas';
const letters = [...str, ' ', 'S. '];
console.log(letters);
console.log(...str);
*/
/*
const ingredients = [
  prompt('Let\'s make pasta! Ingredient 1?'),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

restaurant.orderPasta(...ingredients);
*/
/*
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }

console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/
/*
const arr = [1,2, ...[3,4]];

const [a,b,...others] = [1,2,3,4,5];
console.log(a,b, others);

const [pizza, , rosotto, ...otherFood ] =[...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza,rosotto, otherFood);

const {sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/
/*
console.log('------ OR -------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 ||'' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests:10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------ AND -------');
console.log(0 && 'Jonas');
console.log(3 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if(restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
/*
restaurant.numGuests = 0
const guests1 = restaurant.numGuests ? restaurant.numGuests:10;
console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

//Nullish: null and undefined (NOT 0 OR '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMUS>'
// rest2.owner = rest2.owner && '<ANONYMUS>'

rest1.owner &&= '<ANONYMUS>';
rest2.owner &&= '<ANONYMUS>';


console.log(rest1);
console.log(rest2);

*/
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for(const [i,el] of menu.entries()){
  console.log(`${i+1}: ${el} `);
}



// console.log([...menu.entries()])
*/
/*
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}


console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? "Method does not exist");

const users = [{name: 'Jonas', email: 'email@fake.com'}];
// const users = []
console.log(users[0]?.name ?? 'User array empty');
if(users.length > 0) console.log(users[0].name);
else console.log('User array emptys');
*/
/*
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;

for(const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, {open, close}] of entries){
  console.log(`on ${key} we oen at ${open} and close at ${close}`);
}
*/
/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissoto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Rissoto');
ordersSet.clear;
console.log(ordersSet);

for(const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique =[...new Set(staff)]
console.log(staffUnique);

console.log(new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissoto',
  'Pasta',
  'Pizza',
]).size);

console.log(new Set('jonasschemedtmann'));
*/
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :c');

  console.log(rest.get('name'));
  console.log(rest.get(true));
  console.log(rest.get(1));

  const time = 8;

  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

  console.log(rest.has('categories'));
  rest.delete(2);
  //rest.clear;
  const arr = [1, 2];
  rest.set(arr, 'Test');

  rest.set(document.querySelector('h1'), 'Headding');

  console.log(rest);
  console.log(rest.size);

  console.log(rest.get(arr));

  */
/*
  const question = new Map([
    ['question', 'What is the best programming languaje in the world'],
    [1, 'c'],
    [2, 'Jave'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!'],
  ]);

  console.log(question);

  console.log(Object.entries(openingHours));
  const hourMap = new Map(Object.entries(openingHours));
  console.log(hourMap);

  for(const [key, value] of question){
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  }
  const answer = Number(prompt('Your answer'));
  console.log(answer);

  console.log(question.get(answer === question.get('correct')));

  console.log(...question);
  console.log(question.entries());
  console.log(question.keys());
  console.log(question.values());
  */

/*
const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat= function(seat) {
  //b and e are middle seats
  const s = seat.slice(-1)
  if(s === 'B' || s === 'E'){
    console.log(`The seat ${seat} is in the middle`);
  }else{
    console.log(`The seat ${seat} isn't in the middle`);
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/
// /door/g
/*
console.log('A+very+nice+string'.split('+'));
console.log('Jonas Smith'.split(' '));

const [firstName, lastName] = 'Jonas Smith'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase() ].join(' ');
console.log(newName);

const capitalizedName = function(name){
  const names = name.split(' ');

  const namesUpper = [];
  for(const n of names){
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
}

capitalizedName('jessica ann smith davis');
capitalizedName('jonas smith');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, "+"));

const masCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log( masCreditCard(5235667456757));
console.log( masCreditCard(5242534524525));

const message2 = 'Bad wheather... All departues Delayed... ';

console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`there are ${n} planes on line ${'>-< '.repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/
const flight =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const flightSeparated = flight.split('+')
for(const f of flightSeparated){
  const finalFlight = f.split(';');
  console.log(`${finalFlight[0].startsWith('_Delayed') ? '🔴' : ''}${finalFlight[0].split('_').join(' ')} from ${finalFlight[1].slice(0, 3).toUpperCase()} to ${finalFlight[2].slice(0, 3).toUpperCase()} (${finalFlight[3].replace(':', 'h')})`.padStart(35, ' '));
}

console.log(flight.replaceAll('+', '\n'));