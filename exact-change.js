
function checkCashRegister(price, cash, cid) {
  var diff = cash - price;
  var change = [];
  var total = 0;
  var temp = diff;
  cid.forEach(function(cur) {
    if(cur[0] == "ONE HUNDRED" && temp >= 100) {
      total+=cur[1];
      temp -= cur[1];
    }
    if(cur[0] == "TWENTY" && temp >= 20) {
      total+=cur[1];
      temp -= cur[1]; 
    }
    if(cur[0] == "TEN" && temp >= 10) {
      total+=cur[1];
      temp -= cur[1]; 
    }
    if(cur[0] == "FIVE" && temp >= 5) {
      total+=cur[1];
      temp -= cur[1]; 
    }
    if(cur[0] == "ONE" && temp >= 1) {
      total+=cur[1];
      temp -= cur[1]; 
    }
    if(cur[0] == "QUARTER" && temp >= 0.25) {
      total+=cur[1];
      temp -= cur[1]; 
    }
    if(cur[0] == "DIME" && temp >= 0.10) {
      total+=cur[1];
      temp -= cur[1]; 
    }
    if(cur[0] == "NICKEL" && temp >= 0.05) {
      total+=cur[1];
      temp -= cur[1]; 
    }
    if(cur[0] == "PENNY" && temp >= 0.01) {
      total+=cur[1];
      temp -= cur[1]; 
    }
  });
  if(total == diff) return "Closed";
  if(total < diff) return "Insufficient Funds";
  
  if(diff >= 100 && cid[8][1] !== 0) {
    var temp1 = 0;
    while(cid[8][1] >= 100 && diff >= 100) {
      cid[8][1] -= 100;
      diff = (diff * 1000 -  100 * 1000) / 1000;
      temp1 += 1;
    }
    change.push(["ONE HUNDRED", temp1*100.00]);
  }
  if(diff >= 20 && cid[7][1] !== 0) {
    var temp1 = 0;
    while(cid[7][1] >= 20 && diff >= 20) {
      cid[7][1] -= 20;
      diff = (diff * 1000 -  20 * 1000) / 1000;
      temp1 += 1;
    }
    change.push(["TWENTY", temp1*20.00]);
  }
  if(diff >= 10 && cid[6][1] !== 0) {
    var temp1 = 0;
    while(cid[6][1] >= 10 && diff >= 10) {
      cid[6][1] -= 10;
      diff = (diff * 1000 -  10 * 1000) / 1000;
      temp1 += 1;
    }
    change.push(["TEN", temp1*10.00]);
  }
  if(diff >= 5 && cid[5][1] !== 0) {
    var temp1 = 0;
    while(cid[5][1] >= 5 && diff >= 5) {
      cid[5][1] -= 5;
      diff = (diff * 1000 -  5 * 1000) / 1000;
      temp1 += 1;
    }
    change.push(["FIVE", temp1*5.00]);
  }
  if(diff >= 1 && cid[4][1] !== 0) {
    var temp1 = 0;
    while(cid[4][1] >= 1 && diff >= 1) {
      cid[4][1] -= 1;
      diff = (diff * 1000 -  1 * 1000) / 1000;
      temp1 += 1;
    }
    change.push(["ONE", temp1*1.00]);
  }
  if(diff >= 0.25 && cid[3][1] !== 0) {
    var temp1 = 0;
    while(cid[3][1] >= 0.25 && diff >= 0.25) {
      cid[3][1] -= 0.25;
      diff = (diff * 1000 -  0.25 * 1000) / 1000;
      temp1 += 1;
    }
    change.push(["QUARTER", temp1*0.25]);
  }
  if(diff >= 0.10 && cid[2][1] !== 0) {
    var temp1 = 0;
    while(cid[2][1] >= 0.10 && diff >= 0.10) {
      cid[2][1] -= 0.10;
      diff = (diff * 1000 -  0.10 * 1000) / 1000;
      temp1 += 1;
    }
    change.push(["DIME", temp1*0.10]);
  } 
  if(diff >= 0.05 && cid[1][1] !== 0) {
    var temp1 = 0;
    while(cid[1][1] >= 0.05 && diff >= 0.05) {
      cid[1][1] -= 0.05;
      diff = (diff * 1000 -  0.05 * 1000) / 1000;
      temp1 += 1;
    }
    change.push(["NICKEL", temp1*0.05]);
  }
  
  if(diff >= 0.01 && cid[0][1] !== 0) {
    var temp1 = 0;
    while(cid[0][1] >= 0.01 && diff >= 0.01) {
      cid[0][1] -= 0.01;
      diff = (diff * 1000 -  0.01 * 1000) / 1000;
      temp1 += 1;
    }
    change.push(["PENNY", temp1*0.01]);
  }

  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
