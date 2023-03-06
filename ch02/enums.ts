enum DoorState {
  Open = 3,
  Closed = 7,
  Unespecified = 256,
}

function checkDoorState(state: DoorState) {
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
