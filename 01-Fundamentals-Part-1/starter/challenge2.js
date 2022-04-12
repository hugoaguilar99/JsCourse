/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

let markHeight = 1.69, markMass = 78;
let jhonHeight = 1.95, jhonMass = 92;

let markBMI = markMass / markHeight ** 2;
let jhonBMI = jhonMass / jhonHeight ** 2;

console.log(markBMI, jhonBMI)

let markHigherBMI = markBMI > jhonBMI;

if (markHigherBMI) console.log("Mark's BMI is higher than jhon's!");
else console.log("Jhon's BMI is higher than Mark's!")