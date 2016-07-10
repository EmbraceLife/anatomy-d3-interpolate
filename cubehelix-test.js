// --------------------------------
// run cubehelix directly from ./cubehelix.js file

import cubehelix, {cubehelixLong}  from "./cubehelix";
console.log(cubehelix("steelblue", "brown")(0));

// the reason why cubehelix(a,b) has 2 args, is due to hue(a,b) in ./color.js

var color = require("d3-color");
console.log(color.rgb("steelblue") + "");

// --------------------------------
// run cubehelix from .d3-interpolate folder, not yet bundled?? 
console.log("\n take two color name strings as args");
var color = require("d3-color"),
//    interpolate = require("../");
    interpolate = require("d3");

console.log(interpolate.interpolateCubehelix("steelblue", "brown")(0));
console.log(color.rgb("steelblue") + "");
 

// --------------------------------
console.log("\n take one color name string and color.rgb or color.hcl as arg");
console.log(interpolate.interpolateCubehelix("steelblue", color.hcl("brown"))(1));
console.log(color.rgb("brown") + "");

console.log(interpolate.interpolateCubehelix("steelblue", color.rgb("brown"))(1));
console.log(color.rgb("brown") + "");


// --------------------------------

console.log("interpolateCubehelix(a, b) a as named string, b as #f00 code; or a as rgba string and b as rgba string");// function(test) {

console.log(interpolate.interpolateCubehelix("steelblue", "#f00")(0.2));
//"rgb(88, 100, 218)"

console.log(interpolate.interpolateCubehelix("rgba(70, 130, 180, 1)", "rgba(255, 0, 0, 0.2)")(0.2));// "rgba(88, 100, 218, 0.84)");



// ----------------------------------

console.log("interpolateCubehelix.gamma(3)(a, b) returns the expected values");// function(test) {
console.log(interpolate.interpolateCubehelix.gamma(3)("steelblue", "#f00")(0.2));// "rgb(96, 107, 228)");
  

console.log("following code and result proves cubehelix(hue) is a simplified version of cubehelix.gamma(y)");
console.log(interpolate.interpolateCubehelix.gamma(1)("steelblue", "#f00")(0.2));// "rgb(96, 107, 228)");



// ----------------------------------

console.log("interpolateCubehelix.gamma(g) coerces the specified gamma to a number");// function(test) {

console.log(interpolate.interpolateCubehelix.gamma({valueOf: function() { return 3; }})("steelblue", "#f00")(0.2));// "rgb(96, 107, 228)");



console.log("interpolateCubehelix(a, b) is equivalent to interpolateCubehelix.gamma(1)(a, b)");// function(test) {

var i0 = interpolate.interpolateCubehelix.gamma(1)("purple", "orange"),
    i1 = interpolate.interpolateCubehelix("purple", "orange");

console.log(i1(0.7));
console.log(i0(0.7));
  



/*
tape("interpolateCubehelix(a, b) uses the shortest path when interpolating hue difference greater than 180°", function(test) {
  var i = interpolate.interpolateCubehelix("purple", "orange");
  test.equal(i(0.0), "rgb(128, 0, 128)");
  test.equal(i(0.2), "rgb(208, 1, 127)");
  test.equal(i(0.4), "rgb(255, 17, 93)");
  test.equal(i(0.6), "rgb(255, 52, 43)");
  test.equal(i(0.8), "rgb(255, 105, 5)");
  test.equal(i(1.0), "rgb(255, 165, 0)");
  test.end();
});

tape("interpolateCubehelix(a, b) uses a’s hue when b’s hue is undefined", function(test) {
  test.equal(interpolate.interpolateCubehelix("#f60", color.cubehelix(NaN, NaN, 0))(0.5), "rgb(162, 41, 0)");
  test.equal(interpolate.interpolateCubehelix("#6f0", color.cubehelix(NaN, NaN, 0))(0.5), "rgb(3, 173, 0)");
  test.end();
});

tape("interpolateCubehelix(a, b) uses b’s hue when a’s hue is undefined", function(test) {
  test.equal(interpolate.interpolateCubehelix(color.cubehelix(NaN, NaN, 0), "#f60")(0.5), "rgb(162, 41, 0)");
  test.equal(interpolate.interpolateCubehelix(color.cubehelix(NaN, NaN, 0), "#6f0")(0.5), "rgb(3, 173, 0)");
  test.end();
});

tape("interpolateCubehelix(a, b) uses a’s chroma when b’s chroma is undefined", function(test) {
  test.equal(interpolate.interpolateCubehelix("#ccc", color.cubehelix(NaN, NaN, 0))(0.5), "rgb(102, 102, 102)");
  test.equal(interpolate.interpolateCubehelix("#f00", color.cubehelix(NaN, NaN, 0))(0.5), "rgb(147, 0, 0)");
  test.end();
});

tape("interpolateCubehelix(a, b) uses b’s chroma when a’s chroma is undefined", function(test) {
  test.equal(interpolate.interpolateCubehelix(color.cubehelix(NaN, NaN, 0), "#ccc")(0.5), "rgb(102, 102, 102)");
  test.equal(interpolate.interpolateCubehelix(color.cubehelix(NaN, NaN, 0), "#f00")(0.5), "rgb(147, 0, 0)");
  test.end();
});

tape("interpolateCubehelix(a, b) uses b’s luminance when a’s luminance is undefined", function(test) {
  test.equal(interpolate.interpolateCubehelix(null, color.cubehelix(20, 1.5, 0.5))(0.5), "rgb(248, 93, 0)");
  test.end();
});

tape("interpolateCubehelix(a, b) uses a’s luminance when b’s luminance is undefined", function(test) {
  test.equal(interpolate.interpolateCubehelix(color.cubehelix(20, 1.5, 0.5), null)(0.5), "rgb(248, 93, 0)");
  test.end();
});
*/
