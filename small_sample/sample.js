console.log("hello world");
const arr1 = ["A", "B", "C"];
const arr2 = [...arr1, "D", "E", "D", "E", "D", "E"];
const arr3 = [...arr1, ...arr2];
console.log(arr2); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log(arr3);
constobj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...constobj1, d: 4, e: 5 };
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4, e: 5 }
