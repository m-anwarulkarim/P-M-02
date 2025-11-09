// Rest & Spread Operator

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

const spread = (...freand: string[]) => {
  console.log(freand);
};
spread("hello", " i'm", " anwarul", "karim");
