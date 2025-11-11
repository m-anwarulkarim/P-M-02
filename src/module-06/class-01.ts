// =====================================================
// 1. Type Assertion
// =====================================================

/* 
✅ Type Assertion কি?

TypeScript কে বলা হয় যে, "আমি এই ভ্যারিয়েবলের টাইপ জানি। তুমি চিন্তা কোরো না।"

Type Assertion ব্যবহার করলে TypeScript বিশ্বাস করে যে value আসলে যে type বলেছি সেটাই।
*/

/* ================= Basic Example ================= */

let data: any = "Hello";

let length = (data as string).length;

/* 
data এর টাইপ any, তাই TS জানে না এটি string কিনা।
(data as string) দিয়ে TypeScript কে বলা হলো, এটা string।
*/

/* ================= Function Example ================= */

const checkStudentInfo = (value: any): any => {
  if (typeof value === "string") {
    console.log(`Student name is ${value}`);
  } else if (typeof value === "number") {
    if (value >= 80) {
      return `Grade: A+`;
    }
  } else {
    return "Invalid input type!";
  }
};

checkStudentInfo("Anwarul");
console.log(checkStudentInfo(85));

/* ================= Wrong Assertion ================= */

/* 
TypeScript বিশ্বাস করে, কিন্তু runtime এ error আসতে পারে
*/

let value: any = 123;

// console.log((value as string).toUpperCase()); // Runtime error

/* ================= কখন ব্যবহার করবেন ================= */

/*
1. আমি আসল টাইপ নিশ্চিত
2. TypeScript ভুল বুঝে টাইপ infer করেছে
3. DOM বা third-party data নিয়ে কাজ করা (API response dynamically আসে)
*/
