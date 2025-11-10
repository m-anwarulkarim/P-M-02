// Non-Primitive Type
/* 
১️⃣ Non-Primitive Type কী?

Non-Primitive Type হলো সেই ধরনের ডেটা যা reference type হিসেবে ব্যবহৃত হয়। অর্থাৎ, ডেটার ভ্যালু সরাসরি স্টোর হয় না, বরং মেমোরিতে তার reference বা ঠিকানা রাখা হয়।

উদাহরণ:

Array – একই টাইপ বা বিভিন্ন টাইপের একাধিক ডেটা রাখার জন্য।

let numbers: number[] = [1, 2, 3];


Object – key-value pair হিসেবে ডেটা স্টোর করার জন্য।

let person: {
name: string, 
age: number
} = {
 name: "Anwar",
  age: 25
 };


Function – ফাংশনও একটি reference type।

let greet: () => void = () => console.log("Hello!");


Class / Interface – custom structured type বানাতে ব্যবহার হয়।

বৈশিষ্ট্য:

Mutable: ডেটা পরিবর্তনযোগ্য।

Reference stored: copy করলে মূল ডেটার reference চলে যায়।

সংক্ষেপে:
Primitive type সরাসরি ভ্যালু রাখে, Non-Primitive type reference ধরে রাখে।

*/
