/*
'use strict'; //Help to find errors.

let hasDriversLicense = false;
const passtest = true;

if (passtest) hasDriverLicense = true; // missing an 's' on the variable.
if (hasDriversLicense) console.log('i can drive :D');

const interface = 'Audio' //reserved word.

*/
// functions
/*
function logger() {
    console.log('My name is victor');

}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    //console.log(oranges, apples);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/
/*
//normal function
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
const age1 = calcAge1(1991);
console.log(age1);

//anonimus function
calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge1(1991);
console.log(age2);

//arrow function

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);
*/

/*
const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirment = 65 - age;
    return `${firstName} retires in ${retirment} years`;
}
console.log(yearsUntilRetirment(1991, 'Jonas'));
console.log(yearsUntilRetirment(1980, 'Bob'));
*/

/*

//using a function inside another function.

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const timeTillRetirment = function (age) {
    return 65 - age;
}

const yearsUntilRetirment = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirment = timeTillRetirment(age);
    if (retirment > 0) return `${firstName} retires in ${retirment} years`;
    else return `${firstName} it's already retired`
}

console.log(yearsUntilRetirment(1991, 'Jonas'));
console.log(yearsUntilRetirment(1950, 'Bob'));

*/

// ARRAYS
/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends)



console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends);

const Jonas = ['Jonas', 'Smith', 2037 - 1991, 'teacher', friends];

console.log(Jonas)
*/
/*
const years = new Array(1990, 1967, 2010, 2018);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
*/

// Array Methods
/*
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay'); //Add new value
friends.unshift('Jhon'); // Add at the beginning
console.log(friends);


friends.pop(); // Delete last value
friends.shift; // delete first value

console.log(friends.indexOf('Steven'));
console.log(friends.includes('steven'))

if (friends.includes('Peter')) {
    console.log('You have a friend called steven');
}
*/

//OBJECTS
/*
const jonasArray = [
    'jonas',
    'Smith',
    2037 - 1991,
    'teacher',             //Array
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    age: 2037 - 1991,
    job: 'teacher',        //Object
    friends: ['Michael', 'Peter', 'Stevem']
};
*/


/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Stevem']
};
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt("what do you want to know about jonas? choose between firstName, lastName, age, job, friends");



if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log('Wrong request');
}

jonas.location = 'portugal';
jonas['twitter'] = "@WeepyCreature35";

console.log(jonas);

//Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

*/

//OBJECTS METHODS
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Stevem'],
    hasDriversLicemse: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    summary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and he has ${this.hasDriversLicemse ? "a" : 'no'} drivers license`;
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);

console.log(jonas.summary())
*/

//LOOPS
/*
//keep running while condition is TRUE
for (let i = 0; i < 10; i++) {
    console.log(`lifting weights repetition ${i + 1}`)
}
*/
/*
const jonasArray = [
    'jonas',
    'Smith',
    2037 - 1991,
    'teacher',             //Array
    ['Michael', 'Peter', 'Steven']
];
const types = [];
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') {
        continue; // skip this iteration and continues to the next one
    } else {
        console.log(jonasArray[i], typeof jonasArray[i]);
    }
}

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') {
        break; // break the loop
    } else {
        console.log(jonasArray[i], typeof jonasArray[i]);
    }
}
*/
/*
const jonasArray = [
    'jonas',
    'Smith',
    2037 - 1991,
    'teacher',             //Array
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]); // print the array backwards
}
*/
/*
for (let i = 1; i < 4; i++) {
    console.log(`Starting Excersice ${i}`);
    for (let j = 1; j < 6; j++) {
        console.log(`excercise ${i}: Lifting weight repetition ${j}`);
    }
}
*/

// While loop
/*
let i = 0;
while (i < 10) {
    console.log(`lifting weights repetition ${i}`)
    i++
}
*/
/*
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to end');
}
*/