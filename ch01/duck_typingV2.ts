let obj1 = { id: 1, print() {} };
let obj2 = { id: 1, print() {}, select() {} };

obj1 = obj2;
//obj2 = obj1;
