let markHeight = 1.69, markMass = 78;
let jhonHeight = 1.95, jhonMass = 92;

let markBMI = markMass / markHeight ** 2;
let jhonBMI = jhonMass / jhonHeight ** 2;

console.log(markBMI, jhonBMI)

let markHigherBMI = markBMI > jhonBMI;

if (markHigherBMI) console.log("Mark's BMI is higher than jhon's!");
else console.log("Jhon's BMI is higher than Mark's!")