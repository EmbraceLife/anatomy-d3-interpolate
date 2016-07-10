import {color} from "d3-color";
import rgb from "./rgb";
import array from "./array";
import date from "./date";
import number from "./number";
import object from "./object";
import string from "./string";
import constant from "./constant";

export default function(a, b) {
// set var t and c
  var t = typeof b, c;
    
// if b is null or t is type boolean, 
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? number
      : t === "string" ? ((c = color(b)) ? (b = c, rgb) : string)
      : b instanceof color ? rgb
      : b instanceof Date ? date
      : Array.isArray(b) ? array
      : isNaN(b) ? object
         // (a,b) is 2 function args
      : number)(a, b);
}

