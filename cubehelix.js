import {cubehelix as colorCubehelix} from "d3-color";
import color, {hue} from "./color";

function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = colorCubehelix(start)).h, (end = colorCubehelix(end)).h),
          s = color(start.s, end.s),
          l = color(start.l, end.l),
          opacity = color(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1); // 1 refer to value of y
    // directly use cubehelix(hue) is simplified version of cubehelix.gamma()
}

// export and used as cubehelix
export default cubehelix(hue);

// color here is from interpolate's color, not d3-color's color
export var cubehelixLong = cubehelix(color);
// color replace hue to provide a difficult sub-func to use inside cubehelix()
