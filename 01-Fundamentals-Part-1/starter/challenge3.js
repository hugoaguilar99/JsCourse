const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;

const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 106;

const averageDolphins = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;

const averageKoalas = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

if (averageDolphins > averageKoalas) {
    if (averageDolphins >= 100) console.log('Dolphins are the winners!');
    else console.log("there is no winner, dolphins does not have enough average");
} else if (averageDolphins === averageKoalas) {
    if (averageDolphins >= 100) console.log("it's a draw!");
    else console.log("there is no winner, no one does not have enough average");
} else {
    if (averageDolphins >= 100) console.log('Koalas are the winners!');
    else console.log("there is no winner, Koalas does not have enough average");
}
