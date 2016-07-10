var d3 = require("d3");
var i = d3.interpolateNumber(10, 20);
console.log(i(0.0)); // 10
console.log(i(0.2)); // 12
console.log(i(0.5)); // 15
console.log(i(1.0)); // 20

var interColor = d3.interpolateLab("steelblue", "brown")(0.5); // "rgb(142, 92, 109)"
console.log(interColor);

var i = d3.interpolate({colors: ["red", "blue"]}, {colors: ["white", "black"]});
console.log(i(0.0)); // {colors: ["rgb(255, 0, 0)", "rgb(0, 0, 255)"]}
console.log(i(0.5)); // {colors: ["rgb(255, 128, 128)", "rgb(0, 0, 128)"]}
console.log(i(1.0)); // {colors: ["rgb(255, 255, 255)", "rgb(0, 0, 0)"]}
