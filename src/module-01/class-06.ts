/*
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
  // message দিলে এটা রান হবে
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

✅ 6. Optional with Function Return
function findUser(id: number): string | undefined {
  if (id === 1) return "Anwar";
  // অন্য id হলে কিছু পাবে না
  return undefined;   // optional result
}

console.log(findUser(1)); // "Anwar"
console.log(findUser(2)); // undefined

✅ 7. Optional in API Response (Real-life Example)
type ApiResponse = {
  success: boolean;
  data?: { id: number; name: string }; 
  // data আসতেও পারে, নাও আসতে পারে
};

const res1: ApiResponse = {
  success: true,
  data: { id: 1, name: "Anwar" }
};

const res2: ApiResponse = {
  success: false
  // data নাই, তবুও valid ✅
};

✅ 8. Optional in Class
class User {
  name: string;
  age?: number;   // optional class property

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

const a = new User("Anwar");
const b = new User("Anwar", 25);

✅ 9. Optional with Tuple
let userInfo: [string, number?];

userInfo = ["Anwar"];       // age নাই
userInfo = ["Anwar", 25];   // age আছে

✅ 10. Optional + Default Value
function say(msg?: string) {
  const text = msg ?? "Default text";  
  // msg না থাকলে default ব্যবহার করবে
  console.log(text);
}

say();            // Default text
say("Hi bro");    // Hi bro

✅ 11. Optional + Union Type
type Status = {
  mode?: "online" | "offline" | "busy";
};

let s1: Status = {};                 // mode নাই
let s2: Status = { mode: "online" }; // আছে

✅ 12. Optional Index Signature
type Dictionary = {
  [key: string]: string | undefined; // optional values
};

const words: Dictionary = {
  hello: "হ্যালো",
  bye: undefined   // optional meaning
};

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

// **********************************
// Literal Type: value দিয়েই টাইপ তৈরি করা

/*✅ 1. সরাসরি literal দিয়ে টাইপ বানানো
type D = "left" | "right";

✅ 2. typeof দিয়ে value → type
type T = typeof value;

✅ 3. array/object থেকে type বানানো (const assertion সহ)
type T = typeof array[number];
type T = keyof typeof object;
*/

/* ✅ Readonly কী?

TypeScript এ readonly মানে হলো
“এই প্রোপার্টি বা ভ্যালুটা পরিবর্তন করা যাবে না।”

মানে তুমি সেটাকে শুধু read করতে পারো, কিন্তু rewrite/update করতে পারবে না।

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
