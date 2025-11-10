/*✅ TypeScript এর প্রধান টাইপগুলো
 1. Primitive Types

এসব হলো বেসিক টাইপ।
string ,number ,boolean ,null ,undefined, symbol ,bigint

*/
// *************************************************

let a = "hello";
a = a + "world";
// console.log(a);

let obj1 = { name: "anwar" };
let obj2 = obj1;
obj2.name = "karim";

// console.log(obj2.name);
type Func1 = (value: number) => number;

const func1: Func1 = (value) => {
  return value;
};
const hello = func1(58);
// console.log(hello);
// ************************
const reference = [55, 562, 898, 128];

type L = "hello" | "anwar";

const letarle: L = "anwar";
// ****************
type Optional = {
  a: number;
  b?: "i'm ";
  c: "anwar";
};

const optional: Optional = {
  a: 232,
  b: "i'm ",
  c: "anwar",
};

let direction: "up" | "down";
direction = "down"; //🔏

// callBack function 🔏

type Arr = number[];
const arr: Arr = [3, 3];

const student2 = [1, 2, 4.6, 6];
const student3 = [2, 4, 4];

// console.log(student2.push(...student3));

const nums = {
  name: "anwarul",
  lastName: "karim",
};
const more = {
  sub: " it",
  role: 4,
};
// const addNums = nums
const user1: string[] = ["anwaerul  ", "karim ", "abir "];

const user2: string[] = ["fatema ", "sultana ", "aisha", "a"]; //🔏

const res = [...user1, ...user2];
// console.log(res);

const arr2 = [21, 32, 12, [12, 12]];

const [, , ,] = arr2;
// console.log(av); 🔏 nested array kivabe distactir kore

let value: string | number;
value = 10;
value = "jshdu";
// console.log(value);

type Person = {
  name: string;
} & {
  age: 2;
};

let p : Person = {
    age: 2,
    name : ""
}