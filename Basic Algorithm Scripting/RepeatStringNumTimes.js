/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  var newStr = "";
  if (num <= 0) return "";
  else {
    for (var i = 0; i < num; i++)
      newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
