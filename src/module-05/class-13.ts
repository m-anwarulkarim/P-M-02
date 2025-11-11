// =====================================================
// ✅ Nullable, Unknown, Never, এবং typeof Type
// =====================================================

/* ================= Nullable Type ================= */
// কোন ভ্যারিয়েবল null বা undefined হতে পারে
let nullableValue: string | null = "Hello";
nullableValue = null; // ✅ valid
// nullableValue = 42; // ❌ invalid, string বা null ছাড়া অন্য type নেওয়া যাবে না

/* ================= Unknown Type ================= */
// unknown হলো safe any, কোন value হতে পারে কিন্তু আগে check করা দরকার
let value: unknown;

value = 10;
value = "Hello";
value = true;

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ type safe
}

/* ================= Never Type ================= */
// কখনো return হবে না এমন function
function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Something went wrong"); // Program stops here

/* ================= typeof Operator ================= */
// Variable বা expression এর type runtime এ check করার জন্য
const a = "hello";
const b = 42;
const c = true;

console.log(typeof a); // string
console.log(typeof b); // number
console.log(typeof c); // boolean

// Example with unknown
let data: unknown = "Test";

if (typeof data === "string") {
  console.log(data.toUpperCase());
} else {
  console.log("Not a string");
}
