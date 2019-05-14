const generateAccountNumber = require('./fpe-generator');

// Test for uniqueness of each number
var set = new Set();
let i = 0;

while (i < 9000000) {
    var accountNumber = generateAccountNumber('880812341000000', '880812349999999', i);
    if (set.has(accountNumber)) {
        break;
        console.log("---BROKEN---");
    }
    set.add(accountNumber);
    i += 1;
    console.log(`${i}: ${accountNumber}`);
}