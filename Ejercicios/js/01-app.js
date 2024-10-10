//typeof
const num = 20;
console.log("1 " *typeof num);
//NaN
const variable = 4 * "holi";
console.log("2 " + variable);
console.log("3 " + typeof variable);
//Infinity
const division = 4 / 0;
console.log("4 " + division);
console.log("5 "+ typeof division);
//isNaN
const numberstring = "30";
const string = "20 años";
console.log("6 " + isNaN(variable));
console.log("7 " + isNaN(division));
console.log("8 " + isNaN("12"));
console.log("9 " + isNaN(12));
console.log("10 " + isNaN(numberstring));
console.log("11 " + isNaN(string));
console.log("12 " + isNaN(NaN));
//toString
const number = 100.354;
console.log("13 " + number);
console.log("14 " + number.toString());
console.log("15 " + typeof number);
console.log("16 " + typeof number.toString());
//toFixed
console.log("17 " + number.toFixed(2));