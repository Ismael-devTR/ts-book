"use strict";
function addWithTypeGuard(arg1, arg2) {
    if (typeof arg1 === "string" && typeof arg2 === "string") {
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        return arg1 + arg2;
    }
    console.log("default return treat both string");
    return arg1.toString() + arg2.toString();
}
console.log(`"1","2" = ${addWithTypeGuard("1", "2")}`);
console.log(`1,"2" = ${addWithTypeGuard(1, "2")}`);
console.log(`1, 2 = ${addWithTypeGuard(1, 2)}`);
//# sourceMappingURL=typeGuards.js.map