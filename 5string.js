import number from "./number";


// **How to understand RegExp**?     
// paste RegExp below to [RegExr.com](http://regexr.com/)

// pattern for strings like "-837" or "+.83" or "32.34"
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,

/*
/  /g = pattern match multiple times
[-+] = either - or +
[-+]? = - or + can be omitted
(?:   ) = not to be captured by $1 or $2
\d+  = 1 or more digits
\.?  = . or omitted
*/

// reB is exactly the same to reA
    reB = new RegExp(reA.source, "g");

// zero(b)() returns b
function zero(b) {
  return function() {
    return b;
  };
}

// one(b)(t) returns "b(t)"
// or b(t) convert to string
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}


export default function(a, b) {

    // set bi as first index after the previous/last match
    // [How to use it](http://www.tutorialspoint.com/javascript/regexp_lastindex.htm) on `.lastIndex`
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // [How to use .exec](./5string-test.html)

  // as long as current match of a and b are not null
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {

    // when b's current/first match's first index > index following the last/previous match
    if ((bs = bm.index) > bi) {

  // bs is string between two matched pattern or before the first matched pattern
      bs = b.slice(bi, bs);

      // matched strings are collected inside s
      // if i > 0, s[i] = s[i] + bs
      if (s[i]) s[i] += bs;
      /*s[i] is always undefined */

      // if i < 0, assign bs to s[0]
      else s[++i] = bs;
    }

    // when matched pattern or numbers in a and b are equal
    if ((am = am[0]) === (bm = bm[0])) {

    // store all matched pattern/number of b in s
      if (s[i]) s[i] += bm;
      else s[++i] = bm;

    // if a's number and b's number don't match
    } else {
      s[++i] = null; // set each `s` element to null

      // collect obj {i:0, x: number(am, bm)} in q as [obj, obj, obj...]
      q.push({i: i, x: number(am, bm)});
    }

    // update bi to next starting index after previous match
    bi = reB.lastIndex;
  }

  // store remaining string of b for each matched pattern inside s as [string, string ...]
  // now, bi is the following index of last matched pattern
  // i is accumulated in the while loop already
  if (bi < b.length) {
    // bs is the ending non-matched string
    bs = b.slice(bi);

    // if s[i] is not null,
    if (s[i]) s[i] += bs;
    // if s[i] is null, make s[++i] bs
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  // if s has only one element
  return s.length < 2 ? (q[0]
      // if q[0] is not null, return a func out(t) -> number(am, bm)(t)+""
      ? one(q[0].x)
      // if q[0] is null, return out() -> b
      : zero(b))

      // if s has more than 1 element
      : (b = q.length, function(t) {
          // o is to be q[i]
          // s is [q[i].x(t), ....]
          // s already contains strings in previous index
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);

          // join array elements into one string
          // between or before numbers, there are non-number strings
          return s.join("");
        });
}
