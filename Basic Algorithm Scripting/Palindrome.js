/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function palindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, '');
  str = str.toLowerCase();
  var str0 = str.split('').reverse().join('');
  if(str == str0) return true;
  else return false;
}

palindrome("A man, a plan, a canal. Panama");
