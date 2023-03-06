"use strict";
let array = ["123", "456", "789"];
delete array[0];
function checkAndPrintElement(arrElement) {
    if (arrElement === undefined) {
        console.log("invalid array element");
    }
    else {
        console.log(`valid array element ${arrElement}`);
    }
}
for (let i = 0; i < array.length; i++) {
    checkAndPrintElement(array[i]);
}
//# sourceMappingURL=undefined.js.map