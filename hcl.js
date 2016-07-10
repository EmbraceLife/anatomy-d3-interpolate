import {hcl as colorHcl} from "d3-color";
//hcl(h, c, l, opacity)
// Hcl is class with properties h,c,l,opacity
import color, {hue} from "./color";

function hcl(hue) {
  return function(start, end) {
    var h = hue((start = colorHcl(start)).h, (end = colorHcl(end)).h),
        c = color(start.c, end.c),
        l = color(start.l, end.l),
        opacity = color(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

export default hcl(hue);
// hcl(hue) returns a func with args (start, end), then returns another func with arg t
export var hclLong = hcl(color);

// default func also renamed as interpolateHcl
// hclLong as interpolateHclLong