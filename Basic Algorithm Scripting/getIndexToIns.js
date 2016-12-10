/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort(function(a, b) { return a - b; });
  //return arr;
  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) return i;
  }
  return i;
}

getIndexToIns([10, 20, 30, 40, 50], 30);
