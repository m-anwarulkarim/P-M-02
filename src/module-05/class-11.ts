// =====================================================
//  1️. Union Type
//  2️. Intersection Type
// =====================================================

/* =====================================================
1️. Union Type
------------------------------------------------------
একাধিক টাইপের মধ্যে যেকোনো একটিকে value হিসেবে নিতে পারে।
Union মানে "OR" 
Symbol: |
*/

/* ================= Example 1: Simple Union ================= */
type Student = number | string;
const student: Student = "anwarul karim";
// console.log(student)

/* ================= Example 2: Union with Literal Types ================= */
type Status = "success" | "error" | "loading";

let s: Status;
s = "loading"; // ✅ allowed
s = "error"; // ✅ allowed
// s = "fail";  // ❌ not allowed

/* ================= Example 3: Union with Objects ================= */
type UserObj = { name: string };
type AdminObj = { name: string; role: "admin" };

let person: UserObj | AdminObj;

person = { name: "Anwar" }; // ✅ allowed
person = { name: "Anwar", role: "admin" }; // ✅ allowed
// person = { role: "admin" }; // ❌ not allowed

/* =====================================================
2️. Intersection Type
------------------------------------------------------
একাধিক টাইপকে একসাথে মিক্স করে নতুন টাইপ তৈরি করা হয়।
Intersection মানে "AND" 
Symbol: &
*/

/* ================= Example 1: Intersection with Required Fields ================= */
type User = { name: string };
type AdminInfo = { isAdmin: boolean };

type Admin = User & AdminInfo;

const a: Admin = {
  name: "Siam",
  isAdmin: true,
};
