console.log("using default color.js name as function name, however, why it becomes another function")

import color from "./color";
// needs another (3) is due to linear() return a function require an arg
console.log(color(1,2)(3));
// need another () is due to constant() returns a function
console.log(color(2,2)());


// -------------------------
console.log("\n the reason why there is another (2) is due to linear() and exponential() return antoher func using t as arg")

import {gamma, hue} from "./color";

console.log(gamma(10)(4,6)(2));

console.log(hue(4,6)(2));


// if we add `export` to function exponential(a,b,y), then we can import as the following
//import {exponential} from "./color";
//console.log(exponential(4,6,10)(2));