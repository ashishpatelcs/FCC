/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function mutation(arr) {
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();
  var bigStr = "", smallStr = "";
  if (str1.length > str2.length) { bigStr = str1; smallStr = str2; }
  else { bigStr = str2; smallStr = str1; }
  var pos;
  for(var i = 0; i < smallStr.length; i++) {
    pos = bigStr.indexOf(smallStr[i]);
    if (pos == -1) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
