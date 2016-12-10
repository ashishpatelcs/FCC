/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(function(val) {
    var bool = Boolean(val);
    return bool;
  });
  return arr;
}

bouncer([false, null, 0, NaN, undefined, ""]);
