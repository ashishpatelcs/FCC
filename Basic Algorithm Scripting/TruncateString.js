/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newStr = "";
  if (num >= str.length) {
    return str;
  }
  else if (num <= 3) {
    newStr = str.slice(0, num);
    newStr += "...";
  }
  else {
    num = num - 3;
    newStr = str.slice(0, num);
    newStr += "...";
  }
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
