// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const temperatures = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

// 1) Understanding the problem
    //Create a function called printForecast
    //Uses an array
    //logs an string

// 2) Breaking up into sub-problems
    //create a function
    //log in console an string

const printForecast = function(arr) {
    let finalString = '...';
    for(let i = 0 ; i < arr.length ; i++){
        finalString +=` ${arr[i]}°C in ${i+1} days ...`
    }
    return finalString
}
console.log(printForecast(temperatures)); 
console.log(printForecast(temperatures2)); 