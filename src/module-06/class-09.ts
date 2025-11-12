/* 
as const হলো TypeScript-এর একটা type assertion modifier, যেটা দিয়ে আমরা একটা value কে সম্পূর্ণভাবে constant (অপরিবর্তনীয়) করে দেই — মানে তার type আর “widened” হয় না।


*/

// ১. Enum কীভাবে কাজ করে?

// enum সাধারণত নির্দিষ্ট কিছু মানের তালিকা তৈরির জন্য ব্যবহৃত হয়।
enum UserRoleEnum {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const checkAccessByEnum = (role: UserRoleEnum) => {
  if (role === UserRoleEnum.Admin) return "🔑 Full Access Granted!";
  if (role === UserRoleEnum.Editor) return "🛠️ Limited Access Granted!";
  return " View Only Access!";
};

// console.log(checkAccessByEnum(UserRoleEnum.Admin));
/*
==>: Enum-এর কিছু অসুবিধা আছে 
1.TypeScript যখন compile হয়, তখন enum থেকে JavaScript কোড তৈরি হয়, তাই bundle size একটু বাড়ে।
2.কখনো কখনো enum-এর behavior জটিল হয়, যেমন reverse mapping।
3.Modern TypeScript-এ একই কাজ const object + as const দিয়েও করা যায় — কম কোডে, বেশি টাইপ সেফটি সহ।

*/

const UserRoleAsConst = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;
// এটা একটা object, যার তিনটা key আছে: Admin, Editor, Viewer

// প্রতিটার value হলো একই নামের string

const checkAccessByAsConst = (role: keyof typeof UserRoleAsConst) => {
  if (role === UserRoleAsConst.Admin) return "🔑 Full Access Granted!";
  if (role === UserRoleAsConst.Editor) return "🛠️ Limited Access Granted!";
  return " View Only Access!";
};

// console.log(checkAccessByAsConst("Admin"));

//  atake jokhon avabe lekhbo

const UserRoleAsConst1 = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWR",
} as const;

const checkAccessByAsConst1 = (
  role: (typeof UserRoleAsConst1)[keyof typeof UserRoleAsConst1]
) => {
  if (role === UserRoleAsConst1.Admin) return " Full Access Granted!";
  if (role === UserRoleAsConst1.Editor) return " Limited Access Granted!";
  return " View Only Access!";
};

console.log(checkAccessByAsConst1("ADMIN"));
