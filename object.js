import value from "./value";

export default function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

    // loop every key of b, assign each key to k
  for (k in b) {
      // if this k is found in a 
    if (k in a) {
      i[k] = value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
      // as i[k] is value(a[k], b[k]), which return another function with arg t, that's why below has (t)
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

