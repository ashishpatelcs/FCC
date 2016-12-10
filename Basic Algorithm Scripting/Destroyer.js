/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function destroyer(arr) {
  // Remove all the values
  var newArr = [];
  var args = Array.from(arguments);
  newArr = arr.filter(function(val) {
    for (var i = 1; i < args.length; i++) {
      var comp = args[i];
      if (val == comp) return false;
    }
    return true;
  });
  return newArr;
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
