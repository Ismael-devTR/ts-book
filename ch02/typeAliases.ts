type stringOrnumber = string | number;

function addWithTypeAlias(agr1: stringOrnumber, arg2: stringOrnumber) {
  return agr1.toString() + arg2.toString();
}
