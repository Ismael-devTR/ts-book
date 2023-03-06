"use strict";
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 3] = "Open";
    DoorState[DoorState["Closed"] = 7] = "Closed";
    DoorState[DoorState["Unespecified"] = 256] = "Unespecified";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    switch (state) {
        case DoorState.Open:
            console.log("Door is Open");
            break;
        case DoorState.Closed:
            console.log("Door is Closed");
            break;
    }
}
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
//# sourceMappingURL=enums.js.map