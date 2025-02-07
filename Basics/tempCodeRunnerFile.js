const obj1 = { a: 1, b: 2 };
const obj2 = { b: 4, c: 5 };

const retrn = Object.assign({},obj2, obj1);


console.log(obj2);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(retrn === obj1);
// Expected output: true