/* Author: Ashish Patel
   National Institute of Technology, Agartala
   MCA '16 | FCC 16-17
*/

function factorialize(num) {
  if (num == 1 || num === 0) return 1;
  else return num * factorialize(num-1);
}

factorialize(5);
