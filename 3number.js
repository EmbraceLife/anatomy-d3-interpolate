// ### Practical use of `interpolateNumber`
// 1. between number a and b;
// 2. when t = 0, out = a; when t = 1, out = b;
// 3. out = interpolateNumber(a,b)(t);
// 4. out is a value between a and b



export default function(a, b) {

// a, b, t can be number-string like "10", "0.4"
  return a = +a, b -= a, function(t) {

    return a + b * t;
  };
}
