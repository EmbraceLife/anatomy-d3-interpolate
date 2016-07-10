console.log("\n import basis() from ./basis.js and run an example")

import {basis} from "./basis";
console.log(basis(9,2,3,4,5));

console.log("\n test interpolateBasisClosed()");
import interpolateBasisClosed from "./basisClosed";
console.log(interpolateBasisClosed([1,2,3,4,5])(3));
