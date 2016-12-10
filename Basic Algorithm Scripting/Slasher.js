/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArr = [];
  if (howMany >= arr.length) return [];
  else if (howMany == arr.length) return arr;
  else {
    newArr = arr.slice(howMany, arr.length);
  }
  return newArr;
}

slasher([1, 2, 3], 2);
