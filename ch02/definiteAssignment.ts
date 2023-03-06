var globalString!: string;
setGlobalString("This string is set");
console.log(`globalString = ${globalString} `);

function setGlobalString(value: string) {
  globalString = value;
}
