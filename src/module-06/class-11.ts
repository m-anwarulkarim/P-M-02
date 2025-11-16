/**
 * =====================================================
 *​‌‍‌  𝗠𝗮𝗽𝗽𝗲𝗱 𝗧𝘆𝗽𝗲𝘀 𝗶𝗻 𝗧𝘆𝗽𝗲𝗦𝗰𝗿𝗶𝗽𝘁​
 * =====================================================
 *
 * Mapped Types হলো TypeScript এর একটি শক্তিশালী feature,
 * যা দিয়ে আমরা একটি existing type এর সব property কে loop করে
 * পরিবর্তন করতে পারি বা নতুন type তৈরি করতে পারি।
 *
 * Conceptually:
 * 1. [K in keyof T] → T type এর সব property কে ধরে loop করে
 * 2. T[K] → সেই property এর value type
 * 3. Optional (?) বা Readonly বা type transformation সহজে করা যায়
 *
 */

// ==========================
// Step 1: মূল interface তৈরি করা
// ==========================
interface Person {
  name: string;
  age: number;
  email: string;
}

// ==========================
// Step 2: সব property optional বানানো
// ==========================
type PartialPerson = {
  [K in keyof Person]?: Person[K]; // ? মানে optional
};

const person1: PartialPerson = {
  name: "Anwar", // age এবং email দিতে হবে না, optional
};

// ==========================
// Step 3: সব property readonly বানানো
// ==========================
type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K]; // readonly মানে পরিবর্তন করা যাবে না
};

const person2: ReadonlyPerson = {
  name: "Karim",
  age: 22,
  email: "karim@example.com",
};

// person2.name = "Rahim"; // ❌ Error, কারণ readonly

// ==========================
// Step 4: Generic Mapped Type
// ==========================
// Generic দিয়ে আমরা যেকোনো interface বা type কে transform করতে পারি
type MyMappedType<T> = {
  readonly [P in keyof T]?: T[P]; // সব property optional & readonly
};

const person3: MyMappedType<Person> = {
  name: "Faisal", // শুধু name দেওয়া হলো, বাকি optional
};

// ==========================
// Step 5: Mapped Type with Type Transformation
// ==========================
// সব property এর value type কে string বানানো
type Stringify<T> = {
  [K in keyof T]: string;
};

const person4: Stringify<Person> = {
  name: "22", // Number type কে string বানানো
  age: "22",
  email: "karim@example.com",
};

// ==========================
// Step 6: TypeScript Built-in Mapped Types
// ==========================
type PartialBuiltIn = Partial<Person>; // সব optional
type ReadonlyBuiltIn = Readonly<Person>; // সব readonly

/**
 * ==========================
 * Summary:
 * ==========================
 * 1️⃣ [K in keyof T] → T type এর সব property loop করা
 * 2️⃣ T[K] → property এর value type
 * 3️⃣ Optional (?) / Readonly / Type Transformation করা যায়
 * 4️⃣ Built-in Utility Types ব্যবহার করলে অনেক কাজ সহজ হয়:
 *      Partial<T>, Readonly<T>, Required<T>, Record<K, T>
 */
