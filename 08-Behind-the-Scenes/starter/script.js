'use strict';

/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge(){
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const firstName = 'Steven'
            const str = `oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b){
                return a + b;
            }
            output = 'NEW OUTPUT!';
        }
        //console.log(str);
        console.log(millenial);
        //console.log(add(2,4));
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age);
//printAge();
*/

// console.log(me);
// console.log(job);
// console.log(year);

/*
var me = 'jonas';
let job = 'teacher';
const year = 1991;

console.log(addDec1(2,4));
//console.log(addExpr(2,4));
//console.log(addArrow(2,4));

function addDec1(a,b){
    return a + b;
}

const addExpr = function (a,b){
    return a + b;
}

var addArrow = (a,b) => a + b;

if(!numProducts) deleteShoppingCart()

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All Products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/
/*
console.log(this);

const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    console.log(this);
}
calcAge(1991)

const calcAgeArrow = (birthYear) => console.log(this);

calcAgeArrow(1991);

const jonas = {
    year : 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    }
}
jonas.calcAge();

const matilda = {
    year: 2017
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

/*
var firstName = 'matilda';

const jonas = {
    firstName:  'Jonas',
    year : 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);

        // const self = this;
        // const isMillenial = function(){
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }
        

        const isMillenial = () =>{
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial()
    },

    greet: function() { 
        console.log(`hey ${this.firstName}`);
    },
}
jonas.calcAge();

const addExpr = function (a,b){
    console.log(arguments);
    return a + b;
}
addExpr(2,1);

var addArrow = (a,b) => {
    
    console.log(arguments);
    return a + b;

}
addArrow(2, 3);

*/
/*
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
    name: 'Victor',
    age: 30,
}
const friend = me;
friend.age = 27;

console.log('friend' , friend);
console.log('me', me);

*/

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {}

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';


jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jhon');


console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
