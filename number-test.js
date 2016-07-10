
/*
console.log(" \n Let's test the use of exported function number(a,b)(t). ")

var number = function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
}

console.log(number(1,2)(1));
console.log(number(15,5)(0.3));
console.log(number(15,5)(-0.5));
console.log(number(5,12)(0.9));

console.log('func number(a,b)(t) becomes d3.interpolateNumber(a,b)(t)');
*/


console.log("\n directly import number() and make use of it")
import number from "./number";
console.log(number(5,10)(0.5));


console.log("\n as index.js has also renamed number to interpolateNumber, therefore, we can import interpolateNumber instead of number here.")
import interpolateNumber from "./number"
console.log(interpolateNumber(5,10)(0.5));


console.log("\n get number or interpolateNumber func from d3 library");

var d3 = require("d3");
var i = d3.interpolateNumber(10, 42);
console.log(i(0.0));// 10.0);
  console.log(i(0.1));// 13.2);
  console.log(i(0.2));// 16.4);
  console.log(i(0.3));// 19.6);
  console.log(i(0.4));// 22.8);
  console.log(i(0.5));// 26.0);
  console.log(i(0.6));// 29.2);
  console.log(i(0.7));// 32.4);
  console.log(i(0.8));// 35.6);
  console.log(i(0.9));// 38.8);
  console.log(i(1.0));// 42.0);
  
