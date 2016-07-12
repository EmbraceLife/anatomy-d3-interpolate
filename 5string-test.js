// ### How to use interpolateString


// **How to use .exec()?**
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;

// out is array, array[0] is what we want
var out = reA.exec("23.45px .432km");
console.log(out); // ['23.45', index: 0, input: '23.45px .432km']
out = reA.exec("23.45px .432km");
console.log(out); // ['.432', index: 8, input: '23.45px .432km']
out = reA.exec("23.45px .432km");
console.log(out); // null
out = reA.exec("23.45px .432km");
console.log(out); // ['23.45', index: 0, input: '23.45px .432km']

var interpolate = require("d3-interpolate");

console.log("1st: "+interpolate.interpolateNumber("10", 50)(0.2));
console.log("2nd: "+interpolate.interpolateNumber("20", 10)(0.2));
console.log("3rd: "+interpolate.interpolateNumber("30", 100)(0.2));
console.log(interpolate.interpolateString(" 10/20 30", "50/10 100 ")(0.2));// "18/18 44 ");

console.log("1st: "+interpolate.interpolateNumber("10", 50)(0.4));
console.log("2nd: "+interpolate.interpolateNumber("20", 10)(0.4));
console.log("3rd: "+interpolate.interpolateNumber("30", 100)(0.4));
console.log(interpolate.interpolateString(" 10/20 30", "50/10 100 ")(0.4));// "26/16 58 ");



// a {toString: function() { return "2px"; }}
// b {toString: function() { return "12px"; }}
console.log(interpolate.interpolateString({toString: function() { return "2px"; }}, {toString: function() { return "12px"; }})(0.25));// "4.5px");


// **a " 10/20 30" vs b "50/10 foo "**
console.log(interpolate.interpolateString(" 10/20 30", "50/10 foo ")(0.2));// "18/18 foo ");
console.log(interpolate.interpolateString(" 10/20 30", "50/10 foo ")(0.4));// "26/16 foo ");



// a " 10/20 foo", b "50/10 100 "
  console.log(interpolate.interpolateString(" 10/20 foo", "50/10 100 ")(0.2));//, "18/18 100 ");
  console.log(interpolate.interpolateString(" 10/20 bar", "50/10 100 ")(0.4));//, "26/16 100 ");

// a " 10/20 100 20", b "50/10 100, 20 "
  console.log(interpolate.interpolateString(" 10/20 100 20", "50/10 100, 20 ")(0.2));//, "18/18 100, 20 ");

// a "1.", b "2."
console.log(interpolate.interpolateString("1.", "2.")(0.5));//, "1.5");


// a "1e+3", b "1e+4"
console.log(interpolate.interpolateString("1e+3", "1e+4")(0.5));// , "5500");

// a "1e-3", b "1e-4"
console.log(interpolate.interpolateString("1e-3", "1e-4")(0.5));// "0.00055");

// a "1.e-3", b "1.e-4"
console.log(interpolate.interpolateString("1.e-3", "1.e-4")(0.5));// "0.00055");

// a -1.e-3, b -1.e-4
 console.log(interpolate.interpolateString("-1.e-3", "-1.e-4")(0.5));// "-0.00055");


 console.log(interpolate.interpolateString("+1.e-3", "+1.e-4")(0.5), "0.00055");

  console.log(interpolate.interpolateString(".1e-2", ".1e-3")(0.5), "0.00055");

// a "foo", b "bar"
console.log(interpolate.interpolateString("foo", "bar")(0.5), "bar");

// a "foo", b ""
  console.log(interpolate.interpolateString("foo", "")(0.5));//, "");
  console.log(interpolate.interpolateString("", "bar")(0.5));//, "bar");
  console.log(interpolate.interpolateString("", "")(0.5));//, "");

// a "top: 1000px", b "top: 10000px"
console.log(interpolate.interpolateString("top: 1000px;", "top: 1e3px;")(0.5));//, "top: 1000px;");
console.log(interpolate.interpolateString("top: 1e3px;", "top: 10000vect;")(0.5));//, "top: 1000px;");
