// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = "23";

if(x === 23) console.log(23);

const calcAge = birthYear => 2037-birthYear;

console.log(calcAge(1991));  
*/

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [32, -1, -9, -13, 'error', 4, 15, 19, 12, 11, 5, 0];

// 1) Understanding the problem
    // - What is the temp amplitude? Answer: difference between highest and lowest temp
    // -How to compute max and min temperatures
    // - What's a sensor error

// 2) Breaking up into sub-problems
    // - How to ignore errors?
    // - Find max value in temp array
    // - Find min value in temp array
    // - Substract min from max (amplitude) and return it
/*
const calcAmplitude = function (arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 'error') newArr.push(arr[i]);
    }
    newArr.sort((a,b)=>b-a)
    return newArr[0] - newArr[newArr.length -1];
}
*/

// PROBLEM 2:

//function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionability twice? No! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
/*
const calcAmplitudeWithTwoArrays = function (arr, arr2) {
    const arr3 = arr.concat(arr2);
    const newArr = [];
    for (let i = 0; i < arr3.length; i++) {
        if(arr3[i] !== 'error') newArr.push(arr3[i]);
    }
    newArr.sort((a,b)=>b-a)
    return newArr[0] - newArr[newArr.length -1];
}

console.log(calcAmplitudeWithTwoArrays(temperatures, temperatures2));

*/
/*
const meassureKelvin = function() {
    const meassurement = {
        type: "temp",
        unit: 'celsius',
        value: prompt('Degrees celsius:')
    };

    console.table(meassurement);
    // console.log(meassurement.value);
    // console.warn(meassurement.value);
    // console.error(meassurement.value);

    const kelvin = Number(meassurement.value) + 273;
    return kelvin
}

console.log(meassureKelvin())
*/
/*
// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
  
    let max = 0;
    let min = 0;
  
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== 'number') continue;
  
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };
  const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
  // A) IDENTIFY
  console.log(amplitudeBug);
  */
  