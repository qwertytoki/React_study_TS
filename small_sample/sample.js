// spread property

console.log("hello world");
const arr1 = ["A", "B", "C"];
const arr2 = [...arr1, "D", "E", "D", "E", "D", "E"];
const arr3 = [...arr1, ...arr2];
console.log(arr2); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log(arr3);
constobj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...constobj1, d: 4, e: 5 };
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4, e: 5 }

// short hand of property
const foo = 644459;
const obj = { foo, bar: 45 };
console.log(obj);

// async
// const wakeup = (ms) => {
//   setTimeout(() => {
//     console.log("woke up!");
//   }, ms);
// };
// const greet = () => {
//   console.log("good night!");
//   wakeup(2000);
//   console.log("good morning!");
// };
// greet();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const greet = async () => {
  console.log("お や す み ");
  try {
    await sleep(2000);
    console.log("起 き た ");
    console.log("お は よ う ! ");
  } catch (err) {
    console.error("睡 眠 例 外 で す : ", err);
  }
};
greet();
