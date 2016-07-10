var interpolate = require("d3-interpolate");

console.log("interpolateRound(a, b) interpolates between two numbers a and b, and then rounds");// function(test) {
  var i = interpolate.interpolateRound(10, 42);
  console.log(i(0.0));//10);
  console.log(i(0.1));// 13);
  console.log(i(0.2));// 16);
  console.log(i(0.3));// 20);
  console.log(i(0.4));// 23);
  console.log(i(0.5));// 26);
  console.log(i(0.6));// 29);
  console.log(i(0.7));// 32);
  console.log(i(0.8));// 36);
  console.log(i(0.9));// 39);
  console.log(i(1.0));// 42);

console.log("interpolateRound(a, b) does not pre-round a and b");// function(test) {
  var i = interpolate.interpolateRound(2.6, 3.6);
  console.log(i(0.6));// 3);
