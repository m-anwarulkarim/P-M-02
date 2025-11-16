// =====================================================
// ⭐ TypeScript Utility Types Explained (With Examples)
// =====================================================

// -----------------------------------------------------
// 1️⃣ Partial<T>
// -----------------------------------------------------
// ⭐ Explanation:
// Partial একটি টাইপের সব প্রপার্টিকে optional করে দেয়।
// Update বা Patch API তে খুব useful।

interface User {
  name: string;
  age: number;
  email: string;
}

const updateUser = (data: Partial<User>) => {
  console.log(data);
};

updateUser({ name: "Anwar" }); // 🔥 Valid
updateUser({}); // 🔥 Valid

// -----------------------------------------------------
// 2️⃣ Required<T>
// -----------------------------------------------------
// ⭐ Explanation:
// Required একটি টাইপের সব প্রপার্টিকে বাধ্যতামূলক (non-optional) করে দেয়।

interface Blog {
  title?: string;
  description?: string;
}

type FullBlog = Required<Blog>;

const blogData: FullBlog = {
  title: "Hello World",
  description: "TypeScript is awesome!",
};

// -----------------------------------------------------
// 3️⃣ Readonly<T>
// -----------------------------------------------------
// ⭐ Explanation:
// কোনো object এর প্রপার্টি আর পরিবর্তন করতে না চাইলে Readonly ব্যবহার করি।

interface Person {
  name: string;
  age: number;
}

const person: Readonly<Person> = {
  name: "Karim",
  age: 25,
};

// person.age = 30; // ⚠️ Error: Cannot assign to 'age' because it is a read-only property

// -----------------------------------------------------
// 4️⃣ Record<K, T>
// -----------------------------------------------------
// ⭐ Explanation:
// Object map তৈরি করার জন্য perfect।
// Key → K
// Value → T

type UserScore = Record<string, number>;

const scores: UserScore = {
  anwar: 95,
  karim: 88,
  siham: 99,
};

// -----------------------------------------------------
// 5️⃣ Pick<T, K>
// -----------------------------------------------------
// ⭐ Explanation:
// কোনো টাইপ থেকে শুধুমাত্র selected properties নিতে চাইলে Pick ব্যবহার করি।

type UserPreview = Pick<User, "name" | "email">;

const previewUser: UserPreview = {
  name: "Anwar",
  email: "anwar@example.com",
};

// -----------------------------------------------------
// 6️⃣ Omit<T, K>
// -----------------------------------------------------
// ⭐ Explanation:
// কোনো টাইপ থেকে নির্দিষ্ট properties বাদ দিতে চাইলে Omit ব্যবহার করি।

type UserWithoutAge = Omit<User, "age">;

const userData: UserWithoutAge = {
  name: "Karim",
  email: "karim@example.com",
};

// -----------------------------------------------------
// 7️⃣ Exclude<T, U>
// -----------------------------------------------------
// ⭐ Explanation:
// Union টাইপ থেকে কিছু value বাদ দিতে ব্যবহার হয়।

type Status = "success" | "failed" | "pending";

type WithoutPending = Exclude<Status, "pending">; // Result → "success" | "failed"

// -----------------------------------------------------
// 8️⃣ Extract<T, U>
// -----------------------------------------------------
// ⭐ Explanation:
// Union টাইপ থেকে matching অংশ রেখে দেয়।

type OnlyActive = Extract<Status, "success" | "pending">; // Result → "success" | "pending"

// -----------------------------------------------------
// 9️⃣ NonNullable<T>
// -----------------------------------------------------
// ⭐ Explanation:
// null এবং undefined বাদ দিয়ে পরিষ্কার টাইপ দেয়।

type Maybe = string | null | undefined;

type Clean = NonNullable<Maybe>; // Result → string

// -----------------------------------------------------
// 🔟 ReturnType<T>
// -----------------------------------------------------
// ⭐ Explanation:
// কোনো function কি return করে তার টাইপ বের করে আনে।

function getUser() {
  return { name: "Anwar", age: 20 };
}

type UserReturnType = ReturnType<typeof getUser>; // { name: string; age: number }

// -----------------------------------------------------
// 1️⃣1️⃣ Parameters<T>
// -----------------------------------------------------
// ⭐ Explanation:
// ফাংশনের parameter গুলোর টাইপ array আকারে দেয়।

function setup(id: number, status: string) {}

type Params = Parameters<typeof setup>; // [number, string]

// =====================================================
// 🎯 Summary (Better Comments Style)
// =====================================================
// ⭐ Optional করতে চাইলে → Partial
// ⭐ Force করে required করতে → Required
// 🔒 পরিবর্তন বন্ধ করতে → Readonly
// 🎯 কিছু properties নিতে → Pick
// ❌ properties বাদ দিতে → Omit
// 🔥 Object map বানাতে → Record
// 🧹 null/undefined বাদ → NonNullable
// 🎁 Union থেকে বাদ → Exclude
// 🎯 Union থেকে নিতে → Extract
// 🔍 Function return type → ReturnType
// 🧩 Function parameters type → Parameters
// =====================================================
