// Rest & Spread Operator
// rest and spread যদি না যানা থাকে তাহলে  spreadRest.ts ফাইল থেকে বুঝা যেতে পারে

/*Rest operator দিয়ে  একাধিক value কে একটা array তে সংগ্রহ করা যায়।*/

//1. Spread array
const user1: string[] = ["anwaerul  ", "karim ", "abir "];

const user2: string[] = ["fatema ", "sultana ", "aisha"];

user1.push(...user2);
// console.log(user1);

//  2. Spread object

const obj1 = {
  hoby: "reding book",
};

const obj2 = {
  firstName: "abir",
  lastName: " islam",
  ag: 22,
};
const userInfo = { ...obj1, ...obj2 };
// console.log(userInfo);

// *****************************

// spread Operator

/*Spread operator ঠিক উল্টো কাজ করে —
এটা একটা array বা object কে আলাদা আলাদা value তে “ছড়িয়ে দেয়”। */

const spread = (...freand: string[]) => {
  console.log(freand);
};
const result = spread("hello", " i'm", " anwarul", "karim");
console.log(result);
