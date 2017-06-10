
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  arr2.forEach(function(ci) {
    var found = 0, flag = 0;
    var temp = ci;
    arr1.forEach(function(ni) {
      if(ci[1] == ni[1]) {
        ni[0] += ci[0];
        found = 1;
        flag = 1;
      }
      else found = 0;
      
    });  
    if (!flag) {
      if(!found) 
        arr1.push(temp);
    }
  });
  
  arr1.sort(function(a, b) {
    if(a[1] > b[1]) return 1;
    if(a[1] < b[1]) return -1;
    return 0;
  });
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
