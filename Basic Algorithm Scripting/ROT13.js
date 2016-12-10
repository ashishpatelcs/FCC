/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function rot13(str) { // LBH QVQ VG!
  str = str.split('');
  var temp = "";
  var newArr = [];
  for(var i = 0; i < str.length; i++) {
    if (str[i].match(/[A-Z]/)) {
      var code = str[i].charCodeAt(0);
    code = ((code - 52) % 26 ) + 65;
    
    newArr.push(code);
    }
    else
      newArr.push(str[i]);
  }
  var newStr = [];
  for (i = 0; i < newArr.length; i++) {
    if (str[i].match(/[A-Z]/)) {
      temp = String.fromCharCode(newArr[i]);
    newStr.push(temp);
    }
    else
      newStr.push(str[i]);
  }
  newStr = newStr.join('');
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
