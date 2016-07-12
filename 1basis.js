

// export but not bundle
export function basis(t1, v0, v1, v2, v3) {
    /* 5 args, all numeric */

  var t2 = t1 * t1, t3 = t2 * t1;
   /* t1 derives t2 and t3 */

  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
    /* return a single numeric value */
}

// export and bundle into `d3-interpolate.interpolateBasis`
// - renamed at `index.js` [here](./index.html)
export default function(values) {
    /* arg `values` is an array */
    /* according to returned value in the end,
       `values` has to be numeric array */

  var n = values.length - 1;
  /* `n` is index of last element of `values` */

  return function(t) {
      /* return func with arg `t` */

      // define index `i` of array `values`
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
      /* i has 3 values under 3 conditions:
            1. t <= 0, i = t = 0;
            2. t >= 1, i = n - 1;
            3. otherwise, i = Math.floor(t*n); */

        v1 = values[i],
        /* v1 is the ith element */

        v2 = values[i + 1],
        /* v2 is the i+1th element*/

        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        /* 1. if i > 0, v0 is (i-1)th element;
           2. otherwise, v0 is 2*v1 - v2;
           */

        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        /* 1. if i < n - 1, v3 = (i+2)th element;
           2. otherwise, v3 = 2*v2 - v1; */

    return basis((t - i / n) * n, v0, v1, v2, v3);
    /* return a single value;
       produced by `basis` function
       all the variables have to be numeric    */
  };
}
