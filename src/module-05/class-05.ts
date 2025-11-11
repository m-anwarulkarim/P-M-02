// =====================================================
// Non-Primitive Types in TypeScript
// =====================================================

/* 
✅ Non-Primitive Types কি?

Non-primitive types মানে যেসব ডেটা structure value হিসেবে simple না, বরং multiple value ধারণ করতে পারে এবং mutable হয়।

TypeScript বা JavaScript এ মূল non-primitive types:
1️. Object
2️. Array
3️. Function

এগুলোকে modify করা যায়, Primitive type গুলো immutable, Non-primitive type গুলো mutable।
*/

/* ================= Example: Array ================= */
let numbers: number[] = [1, 2, 3];
// একই টাইপের একাধিক ডেটা রাখতে ব্যবহার হয়

/* ================= Example: Object ================= */
let person: {
  name: string;
  age: number;
} = {
  name: "Anwar",
  age: 25,
};
// key-value pair হিসেবে ডেটা স্টোর করা হয়

/* ================= Example: Function ================= */
let greet: () => void = () => console.log("Hello!");
// function ও একটি reference type

/* ================= Example: Class / Interface ================= */
// Custom structured type বানাতে Class বা Interface ব্যবহার হয়

/* ================= বৈশিষ্ট্য (Characteristics) ================= */
// 1. Mutable: ডেটা পরিবর্তনযোগ্য
// 2. Reference stored: copy করলে মূল ডেটার reference চলে যায়

/* ================= সংক্ষেপে ================= */
// Primitive type সরাসরি value ধরে রাখে
// Non-Primitive type reference ধরে রাখে
