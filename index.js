const cowsay = require("cowsay")
const myInformation = require('./information.js');
const myName = myInformation[0];
const myCampus = myInformation[1];



console.log(cowsay.say({
	text :` I am ${myName}, from ${myCampus}`,
	e : "oO",
	T : "U "
}));




