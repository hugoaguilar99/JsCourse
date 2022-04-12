
const markHeight = 1.69, markMass = 78;
const jhonHeight = 1.95, jhonMass = 92;

const markBMI = markMass / markHeight ** 2;
const jhonBMI = jhonMass / jhonHeight ** 2;

console.log(markBMI, jhonBMI)

var markHigherBMI = markBMI > jhonBMI;

console.log(markHigherBMI);
