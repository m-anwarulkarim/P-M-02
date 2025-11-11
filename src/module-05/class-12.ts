// =====================================================
//  1️. Ternary Operator
//  2️. Nullish Coalescing (??)
//  3️. Optional Chaining (?.)
// =====================================================

/* =====================================================
1️. Ternary Operator
------------------------------------------------------
ছোট if-else shortcut। 

Format:
condition ? true হলে যা হবে : false হলে যা হবে
*/

/* ================= Example 1: Simple Ternary ================= */
const age = 20;
const msg = age >= 18 ? "Adult" : "Child";
console.log(msg); // Adult

/* ================= Example 2: Nested Ternary (Avoid if possible) ================= */
const mark = 85;
const grade = mark >= 80 ? "A+" : mark >= 70 ? "A" : mark >= 60 ? "B" : "F";

console.log(grade); // A+

/* =====================================================
2️. Nullish Coalescing (??)
------------------------------------------------------
Default value operator। 
শুধুমাত্র তখনই fallback দিবে যখন value null বা undefined হবে।
Falsy values (0, "", false) এ কাজ করবে না।
*/

/* ================= Example ================= */
let name: string | null = null;
console.log(name ?? "Guest"); // Guest

/* =====================================================
3. Optional Chaining (?.)
------------------------------------------------------
Nested property access করার সময় যদি কিছু undefined হয়, 
error ছাড়াই undefined return করবে।
*/

/* ================= Example 1: Object ================= */
const user = {
  name: "Anwar",
  address: {
    city: "Dhaka",
  },
};

console.log(user.address?.city); // Dhaka
// console.log(user.contact?.email); // undefined (no error)

/* ================= Example 2: Function ================= */
const obj = {
  sayHi() {
    return "Hello";
  },
};

console.log(obj.sayHi?.()); // Hello
// console.log(obj.sayBye?.()); // undefined

/* ================= Example 3: Array ================= */
const data = {
  items: null,
};

console.log(data.items?.[0]); // undefined (no error)
