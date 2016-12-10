/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0, j = 0;
  for (i = 0; i < (arr.length/size); i++) {
    
    var tempArr = arr.slice(j, j+size);
    newArr.push(tempArr);
    j += size;
    if (j >= arr.length) break;
    
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
