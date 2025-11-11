// =====================================================
// ✅ TypeScript এ কত ধরনের টাইপ আছে?
// =====================================================

/*
TypeScript এ fixed number নেই, কারণ নতুন নতুন টাইপ ফিচার যোগ হয়। 
কিন্তু মূল ক্যাটেগরি অনুযায়ী ৮–১০টা বড় টাইপ গ্রুপ মনে রাখলেই পুরো TypeScript বোঝা যায়।

TypeScript এর প্রধান টাইপগুলো:

1️. Primitive Types
------------------------------------------------------
বেসিক টাইপ:
string, number, boolean, null, undefined, symbol, bigint

2️. Object Types
------------------------------------------------------
object, arrays, functions, classes

3️. Literal Types
------------------------------------------------------
Exact value টাইপ হিসেবে ধরা হয়
উদাহরণ:
"hello"
42
true

4️. Union Types
------------------------------------------------------
একাধিক টাইপের মধ্যে যেকোনো একটি value নিতে পারে
উদাহরণ: string | number

5️. Intersection Types
------------------------------------------------------
একাধিক টাইপ একত্রিত করে নতুন টাইপ তৈরি করে
উদাহরণ: TypeA & TypeB

6️. Any, Unknown, Never
------------------------------------------------------
any → সবকিছুই allowed
unknown → safe any
never → কখনো return হয় না

7️. Type Alias & Interface
------------------------------------------------------
type User = { ... }
interface User { ... }

8️. Tuple Types
------------------------------------------------------
Fixed length array যেখানে প্রত্যেক element এর type নির্দিষ্ট
উদাহরণ:
const student: [string, number] = ["Anwar", 100]

9️. Enum Types
------------------------------------------------------
Predefined set of named constants
উদাহরণ:
enum Role { User, Admin }

10. Generics
------------------------------------------------------
Reusable type template
উদাহরণ:
Array<T>
Promise<T>

সংক্ষেপে:
TypeScript এ primitive, object, literal, union, intersection, tuple, enum, generics, এবং special types (any, unknown, never) মিলিয়ে প্রায় ১০ ধরনের টাইপ গ্রুপ কাজে লাগে।
*/
