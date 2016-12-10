/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function titleCase(str) {
  var str0 = str.split(' ');
  for (var i = 0; i < str0.length; i++) {
    var str1 = str0[i];
    str1 = str1.toLowerCase().split('');
    str1[0] = str1[0].toUpperCase();
    str1 = str1.join('');
    str0[i] = str1;
  }
  str0 = str0.join(' ');
  return str0;
}

titleCase("sHoRt AnD sToUt");
