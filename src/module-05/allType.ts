/*

✅ TypeScript এ মোট কত ধরনের টাইপ আছে?

TypeScript এ “fixed number” নেই, কারণ নতুন নতুন টাইপ ফিচার যোগ হয়।
কিন্তু মূল ক্যাটেগরি অনুযায়ী ৮–১০টা বড় টাইপ গ্রুপ মনে রাখলেই পুরো TypeScript বুঝে ফেলা যায়।

✅ TypeScript এর প্রধান টাইপগুলো
 1. Primitive Types

এসব হলো বেসিক টাইপ।
string ,number ,boolean ,null ,undefined, symbol ,bigint

 2. Object Types

object ,arrays ,functions ,classes

 3. Literal Types

"hello"

42

true
(Exact value টাইপ হিসেবে ধরা হয়)

 4. Union Types

string | number

 5. Intersection Types

TypeA & TypeB

 6. Any, Unknown, Never

any (সবকিছুই allowed)

unknown (safe any)

never (কখনো return হয় না)

 7. Type Alias & Interface

type User = { ... }

interface User { ... }

 8. Tuple Types

const student : [string, number] = ["anwar", 100]

 9. Enum Types

enum Role { User, Admin }

 10. Generics

Array<T>

Promise<T>

 সংক্ষেপে এক লাইন

TypeScript এ primitive, object, literal, union, intersection, tuple, enum, generics, এবং special types (any, unknown, never) মিলিয়ে প্রায় ১০ ধরনের টাইপ গ্রুপ কাজে লাগে।

*/
