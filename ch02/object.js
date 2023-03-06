"use strict";
let structuredObject = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject",
    },
};
function printObjectType(a) {
    console.log(`a: ${JSON.stringify(a)}`);
}
printObjectType(structuredObject);
//printObjectType("this is a string");
//# sourceMappingURL=object.js.map