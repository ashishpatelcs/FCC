/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function findLongestWord(str) {
  var str0 = str.split(' ');
  var longest = 0;
  for (var i = 0; i < str0.length; i++) {
    if (str0[i].length > longest)
      longest = str0[i].length;
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
