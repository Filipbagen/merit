var today = new Date();
var hourNow = today.getHours();
var greeting;


if (hourNow > 18) { // Kl 18
    greeting = 'Godkväll';
} else if (hourNow > 12) { // Kl  12
    greeting = 'God eftermiddag';
} else if (hourNow > 0) {   // Kl 00.00
    greeting = 'Godmorgon ';
} else {
    greeting = 'Välkommen!'
}

document.write('<h3>' + greeting + '</h3>');
