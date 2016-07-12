// **Verify understanding of the following code**

// ```javascript
// var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
// ```
var values = [1,2,3,4,5];
var n = values.length - 1;
var t1 = -3, t2 = 4, t3 = 0.3;
var i1 = t1 <= 0 ? (t1 = 0) : t1 >= 1 ? (t1 = 1, n - 1) : Math.floor(t1 * n);
var i2 = t2 <= 0 ? (t2 = 0) : t2 >= 1 ? (t2 = 1, n - 1) : Math.floor(t2 * n);
var i3 = t3 <= 0 ? (t3 = 0) : t3 >= 1 ? (t3 = 1, n - 1) : Math.floor(t3 * n);
console.log(n,i1,i2,i3, Math.floor(0.3*4));



// **Import `export default function`**

import interpolateBasis from "./1basis"

// Equivalent code to the left
// ```javascript
// var array = [1,2,3,4];
// var outer = interpolateBasis(array);
// //outer is `return function(t){}`
// var t = 3;
// console.log(outer(t));
// ```
console.log("test interpolateBasis: " + interpolateBasis([1,2,3,4])(3));




// **Import `export function`**

import {basis} from "./1basis";

console.log("test basis function: " + basis(9,2,3,4,5));
