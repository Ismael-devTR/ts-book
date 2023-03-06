function nullishCheck(arg: null | undefined | number) {
  console.log(`a: ${arg ?? "Undefined or Null"}`);
}

nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);
