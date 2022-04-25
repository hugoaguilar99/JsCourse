'use strict';
/*
const bookings = []

const createrBooking = function(flightNum, numPassengers = 1, price = 199*numPassengers) {

    // numPassengers = numPassengers || 1;
    // price = price || 199;



    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}
createrBooking('adad');

createrBooking('LH123', 2, 800);
createrBooking('LH123', 2);
createrBooking('LH123', 5);

createrBooking('LH123', undefined, 800);
*/
/*
const flight = 'LH123';
const jonas = {
    name: 'Jonas Smith',
    passport: 1213242334
}
const checkIn = function(flightNumm, passenger){
    flightNumm = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 1213242334){
        alert('checked in');
    }else alert('Wrong passport');
}
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//same doing ...
const flightNum = flight;
const passenger = jonas;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*10000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/
/*
const oneWord  = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return[first.toUpperCase(), ...others].join(' ');
}

//Higher order function
const transformer = function(str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);

    console.log(`transformed by: ${fn.name}`);
}

transformer('Javascript is the best', oneWord);


//JS uses callbacks all the time
const high5 = function(){
    console.log("Wave");
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5)

*/
/*
const greet = function(greeting) {
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}
const greet2 = greeting =>  name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');

greeterHey('Victor');
greeterHey('Jonas');

greet('Hello')('Victor');

greet2('Hello')('Victor');

*/
/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    },
    
}
lufthansa.book(239, 'Jonas Smith');
lufthansa.book(635, 'Victor Aguilar');

console.log(lufthansa);

const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

    
}
const book = lufthansa.book;

book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 235, 'Mary Cooper');
console.log(swiss);

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);


const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(234, 'Steven Williams');

const bookEW23 = book.bind(euroWings, 23);

bookEW23('Victor Aguilar');
bookEW23('Martha cooper');

lufthansa.planes = 300;

lufthansa.buyPlane = function() { 
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

const addTax = (rate, value) => value + value *rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

const addTaxRate = function(rate){
    return function(value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

*/
/*
const runOnce = function() {
    console.log('This will never run again');
}
runOnce();

(function() {
    console.log('This will never run again');
})();


(() => console.log('This will never run again'))();
*/
/*
const secureBooking = function() {
    let passengerCount  = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();

console.dir(booker);
*/

let f;

const g = function() {
    const a = 23;
    f = function(){
        console.log(a*2);
    }
}

const h = function () {
    const b = 777;
    f = function() {
        console.log(b*2);
    }
}

g();
f();
h();
f();

console.dir(f)

const boardPassengers = function(n, wait) {
    const perGroup = n/3;

    setTimeout(() => {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait*1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3);

