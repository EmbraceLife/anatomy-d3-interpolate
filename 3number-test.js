// ### a,b,t can be numbers or strings
import number from "./number";
console.log("a,b,t are numeric: "+number(5,10)(0.5));

console.log("a is string, others number: "+number("5", 8)(0.5))

console.log("a,b are string, t number: "+number("5", "8")(0.5))

console.log("a,b,t are string: "+number("5", "8")("0.5"))


// import `number` or `interpolateNumber` works
import interpolateNumber from "./number"

console.log("import renamed interporlateNumber: "+interpolateNumber(5,10)(0.5));


// require d3-interpolate to use it

var d3 = require("d3-interpolate");
var i = d3.interpolateNumber(10, 42);
console.log("require d3: "+i(0.0));// 10.0);
console.log(i(0.1));// 13.2);
