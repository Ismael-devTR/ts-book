"use strict";
function nullishCheck(arg) {
    console.log(`a: ${arg !== null && arg !== void 0 ? arg : "Undefined or Null"}`);
}
nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);
//# sourceMappingURL=nullishCoalescing.js.map