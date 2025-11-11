// =====================================================
// Object: Optional, Readonly, Literal Type
// =====================================================

/* =====================================================
1️⃣ Optional Property
------------------------------------------------------
Object এ কোনো property optional হলে ? দিয়ে দেখানো হয়
*/

type User = {
  name: string; // বাধ্যতামূলক
  age?: number; // optional
};

const u1: User = {
  name: "Anwar", // age না থাকলেও valid ✅
};

const u2: User = {
  name: "Anwar",
  age: 25, // age থাকলেও valid ✅
};

/* =====================================================
2️⃣ Optional Function Parameter
------------------------------------------------------
Function parameter optional হলে ? দিয়ে ব্যবহার করা যায়
*/

function greet(name: string, message?: string) {
  if (message) {
    console.log(message);
  } else {
    console.log("Hello!"); // fallback
  }
}

greet("Anwar"); // message ছাড়া ✅
greet("Anwar", "Hi bro!"); // message সহ ✅

/* =====================================================
3️⃣ Optional এর আসল অর্থ
------------------------------------------------------
Optional internally:
age?: number  ===  age: number | undefined
*/

/* =====================================================
4️⃣ Optional in Destructuring
------------------------------------------------------
Destructuring এর মধ্যে optional property handle করা যায়
*/

function showUser({ name, nickName }: { name: string; nickName?: string }) {
  console.log("Name:", name);
  console.log("Nick:", nickName ?? "No nickname"); // fallback
}

showUser({ name: "Anwar" }); // ✅ nickName নাই
showUser({ name: "Anwar", nickName: "AK" }); // ✅ nickName আছে

/* =====================================================
5️⃣ Optional Chaining (?.)
------------------------------------------------------
Nested object property access এ error এড়াতে ব্যবহার হয়
*/

const userObj = {
  name: "Anwar",
  address: {
    city: "Dhaka",
  },
};

console.log(userObj?.address?.city); // Dhaka
// যদি address না থাকে → undefined return করবে, error হবে না ✅

/* =====================================================
✅ Optional কোথায় ব্যবহার হয়?
------------------------------------------------------
- object property
- function parameter
- class property
- tuple
- destructuring
- API response
- optional chaining
- union type
- default value
*/

/* =====================================================
Literal Type
------------------------------------------------------
প্রতিটি value দিয়েই টাইপ তৈরি করা যায়
*/

// 1️⃣ সরাসরি literal দিয়ে type
type Direction = "left" | "right";

// 2️⃣ typeof দিয়ে variable value → type
const value = "hello";
type ValueType = typeof value;

// 3️⃣ array/object থেকে type বানানো (const assertion)
const fruits = ["apple", "banana"] as const;
type Fruit = (typeof fruits)[number];

const obj = { name: "Anwar", age: 22 } as const;
type ObjKeys = keyof typeof obj; // "name" | "age"

/* =====================================================
Readonly Property
------------------------------------------------------
Readonly মানে property পরিবর্তন করা যাবে না
*/

type UserReadOnly = {
  readonly id: number; // পরিবর্তন করা যাবে না
  name: string;
};

const readonlyUser: UserReadOnly = {
  id: 101,
  name: "Anwar",
};

readonlyUser.name = "Karim"; // ✅ OK
// readonlyUser.id = 202;     // ❌ Error: Cannot assign to 'id' because it is read-only
