console.log('export default function is renamed as "interpolateBasis"');

import interpolateBasis from "./basis"
console.log(interpolateBasis([1,2,3,4])(3));

// how to make use of basis func at the top????

console.log("\n import basis() from ./basis.js and run an example")

import {basis} from "./basis";
console.log(basis(9,2,3,4,5));
