/* // object  1 . Optional , 2 . Readonly , 3 . Literal Type

✅ 1. Optional Property (Object এ)
type User = {
  name: string;      // বাধ্যতামূলক
  age?: number;      // optional property
};

const u1: User = { 
  name: "Anwar"      // age নাই, তবুও valid ✅
};

const u2: User = { 
  name: "Anwar",
  age: 25            // age দিলেও valid ✅
};

✅ 2. Optional Function Parameter
function greet(name: string, message?: string) {
  // message না দিলেও  এটা রান হবে
  if (message) {
    console.log(message);
  } else {
    // না দিলে fallback message
    console.log("Hello!");
  }
}

greet("Anwar");              // ✅ message ছাড়া
greet("Anwar", "Hi bro!");   // ✅ message সহ

✅ 3. Optional আসলে কী ⇢ internally | undefined
type User = {
  age?: number;   
  // এর আসল রূপ:
  // age: number | undefined;
};


মানে age দেওয়া লাগবে না, দিলে অবশ্যই number হতে হবে।

✅ 4. Optional in Destructuring
function showUser({ name, nickName }: { name: string; nickName?: string }) {
  console.log("Name:", name);

  // nickName undefined হলে fallback দেখাবে
  console.log("Nick:", nickName ?? "No nickname");
}

showUser({ name: "Anwar" });                 // ✅ nickName নাই
showUser({ name: "Anwar", nickName: "AK" }); // ✅ nickName আছে

✅ 5. Optional Chaining (?.)
const user = {
  name: "Anwar",
  address: {
    city: "Dhaka"
  }
};

// user.address আছে কিনা জানি না
console.log(user?.address?.city);
// যদি address না থাকে → undefined return করবে, error করবে না ✅


✅ সংক্ষেপে, Optional কোথায় কোথায় ব্যবহার হয়?

✅ object property
✅ function parameter
✅ class property
✅ tuple
✅ destructuring
✅ API response
✅ optional chaining
✅ union এর সাথে
✅ default value এর সাথে

*/

// *********************************************************************************************
// Literal Type: value দিয়েই টাইপ তৈরি করা

/*✅ 1. সরাসরি literal দিয়ে টাইপ বানানো
type D = "left" | "right";

✅ 2. typeof দিয়ে value → type
type T = typeof value;

✅ 3. array/object থেকে type বানানো (const assertion সহ)
type T = typeof array[number];
type T = keyof typeof object;
*/

// *************************************************************************************************
/* ✅ Readonly কী?

TypeScript এ readonly মানে হলো
“এই প্রোপার্টি বা ভ্যালুটা পরিবর্তন করা যাবে না।”

মানে  সেটাকে শুধু read করতে পারবো , কিন্তু rewrite/update করতে পারবে না।

type User = {
  readonly id: number;   // এটা আর পরিবর্তন করা যাবে না
  name: string;
};

const user: User = {
  id: 101,
  name: "Anwar"
};

user.name = "Karim";      // ✅ OK
user.id = 202;            // ❌ Error: Cannot assign to 'id' because it is a read-only property.

*/
