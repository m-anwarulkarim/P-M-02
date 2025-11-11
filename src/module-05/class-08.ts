// ===================================================== 🔏🔏🔏🔏
// Rest & Spread Operator in TypeScript
// =====================================================

/* 
Rest এবং Spread Operator যদি না জানা থাকে, 
spreadRest.ts ফাইল থেকে বিস্তারিত বুঝা যেতে পারে
*/

/* =====================================================
1️. Rest Operator
------------------------------------------------------
Rest operator দিয়ে একাধিক value কে একটি array তে সংগ্রহ করা যায়
*/

/* ================= Example: Function Rest Parameter ================= */
const spread = (...friend: string[]) => {
  console.log(friend); // friend একটি array type হবে
};

spread("hello", "I'm", "Anwarul", "Karim");

/* =====================================================
2️. Spread Operator
------------------------------------------------------
Spread operator ঠিক উল্টো কাজ করে — 
একটি array বা object কে আলাদা value তে ছড়িয়ে দেয়
*/

/* ================= Example 1: Spread Array ================= */
const user1: string[] = ["Anwarul", "Karim", "Abir"];
const user2: string[] = ["Fatema", "Sultana", "Aisha", "A"];

const res = [...user1, ...user2]; // user1 + user2 merge
console.log(res);

/* ================= Example 2: Spread Object ================= */
const obj1 = {
  hobby: "reading book",
};

const obj2 = {
  firstName: "Abir",
  lastName: "Islam",
  age: 22,
};

const userInfo = { ...obj1, ...obj2 }; // obj1 + obj2 merge
console.log(userInfo);
