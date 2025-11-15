// =====================================================
// ✅ TypeScript এর প্রধান টাইপগুলো
// =====================================================

/* =====================================================
1️⃣ Primitive Types
------------------------------------------------------
string, number, boolean, null, undefined, symbol, bigint
*/

/* ================= Example: String ================= */
let a = "hello";
a = a + " world"; // string concatenation
console.log(a); // hello world

/* ================= Example: Object Reference ================= */
let obj1 = { name: "anwar" };
let obj2 = obj1;
obj2.name = "karim"; // reference update
console.log(obj2.name); // karim

/* ================= Example: Function Type ================= */
type Func1 = (value: number) => number;

const func1: Func1 = (value) => {
  return value;
};

const hello = func1(58);
console.log(hello); // 58

/* =====================================================
2️⃣ Literal Type
------------------------------------------------------
Specific value দিয়ে টাইপ তৈরি করা যায়
*/
type L = "hello" | "anwar";
const letarle: L = "anwar";

/* =====================================================
3️⃣ Optional Property
------------------------------------------------------
Object property optional হলে ? দিয়ে ব্যবহার করা হয়
*/
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

/* =====================================================
4️⃣ Union Type
------------------------------------------------------
একাধিক টাইপের মধ্যে যেকোনো একটি হতে পারে
*/
let direction: "up" | "down";
direction = "down";

/* =====================================================
5️⃣ Array & Spread Operator
------------------------------------------------------
Rest/Spread দিয়ে array merge করা যায়
*/
type Arr = number[];
const arr: Arr = [3, 3];

const student2 = [1, 2, 4.6, 6];
const student3 = [2, 4, 4];

student2.push(...student3); // spread operator
console.log(student2); // [1,2,4.6,6,2,4,4]

const user1: string[] = ["Anwarul", "Karim", "Abir"];
const user2: string[] = ["Fatema", "Sultana", "Aisha", "A"];
const res = [...user1, ...user2]; // merge array
console.log(res);

/* =====================================================
6️⃣ Nested Array Destructuring
------------------------------------------------------
Array এর মধ্যে array হলে destructuring
*/
const arr2 = [21, 32, 12, [12, 12]];
const [, , , nested] = arr2;
console.log(nested); // [12,12]

const data: [number, [number, number], [number, [number, number]]] = [
  1,
  [2, 3],
  [4, [5, 6]],
];

const [x, [y, z], [pVal, [q, r]]] = data;

console.log(x, y, z); // 1 2 3
console.log(pVal, q, r); // 4 5 6

/* =====================================================
7️⃣ Union (String | Number)
------------------------------------------------------
Variable multiple type নিতে পারে
*/
let value: string | number;
value = 10;
value = "jshdu";
console.log(value);

/* =====================================================
8️⃣ Intersection Type
------------------------------------------------------
একাধিক type একত্রিত করে নতুন type বানানো
*/
type Person = {
  name: string;
} & {
  age: 2;
};

let p: Person = {
  age: 2,
  name: "",
};
