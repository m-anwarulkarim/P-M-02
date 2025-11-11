// =====================================================
// Destructuring in TypeScript (Array & Object)
// =====================================================

/* 
Object Destructuring:
Object এর মধ্যে nested property কে সহজে বের করার জন্য destructuring ব্যবহার করা হয়।
*/

const user = {
  name: "Anwarul Karim",
  age: 22,
  contact: {
    email: "anwarul@example.com",
    phone: {
      primary: "+8801712300000",
      secondary: "+88017777777",
    },
  },
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

// Nested Object Destructuring
const {
  contact: {
    phone: { primary }, // contact এর মধ্যে phone, phone এর মধ্যে primary
  },
} = user;

console.log(primary); // +8801712345678

/* 
Array Destructuring:
Array এর মধ্যে নির্দিষ্ট index এর value বের করার জন্য ব্যবহার হয়
*/

const fruits = ["Apple", "Banana", "Grapes", "Watermelon", "Orange"];

// প্রথম তিনটি item skip করে চতুর্থ item বের করা
const [, , , watermelon] = fruits;

console.log(watermelon); // Watermelon

/* 
Nested Array Destructuring:
যখন array এর মধ্যে array থাকে
*/

const students = [
  ["Anwarul", [85, 90, 88]], // name + scores array
  ["Samiul", [78, 82, 80]],
  ["Rafi", [92, 89, 94]],
];

// দ্বিতীয় student কে destructure করা
const [, samiul] = students;

console.log(samiul); // ["Samiul", [78, 82, 80]]
