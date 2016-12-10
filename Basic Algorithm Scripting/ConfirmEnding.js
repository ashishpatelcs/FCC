/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  startIndex = str.length - target.length;
  endIndex = str.length;
  
  var newStr = str.substring(startIndex, endIndex);
  if (newStr == target) return true;
  return false;
}

confirmEnding("Bastian", "ian");
