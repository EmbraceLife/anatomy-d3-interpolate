var d3 = require("d3-interpolate");


  var i = d3.interpolateRound(10, 42);

  console.log("round value up: "+i(0.0));//10);
  console.log("round value up: "+i(0.1));// 13);


  var i = d3.interpolateRound(2.6, 3.6);

  console.log("a, b are not pre-rounded: "+i(0.6));// 3);
