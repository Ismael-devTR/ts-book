"use strict";
var objectA = {
    nestedProperty: {
        name: "Nested property name",
    },
};
function printNestedObject(obj) {
    console.log(`obj.nestedProperty.name = ${obj.nestedProperty.name}`);
}
printNestedObject(objectA);
//# sourceMappingURL=optionalChaining.js.map