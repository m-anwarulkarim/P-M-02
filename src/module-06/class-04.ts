//  generic with interface

// Generic Interface যা user define করে
interface User<T> {
  data: T; // data property-র type generic, যেকোনো type হতে পারে
  age: number; //  age
}

// ----------------------------
// Example 1: Single User Object
// ----------------------------
const userResponse: User<{ id: number; name: string }> = {
  data: { id: 1, name: "Anwar" }, // data হলো একটি object যার id ও name আছে
  age: 200, // age
};

// ----------------------------
// Example 2: Array of Posts
// ----------------------------
const postsResponse: User<{ id: number; title: string }[]> = {
  data: [
    { id: 1, title: "Post 1" }, // প্রথম post object
    { id: 2, title: "Post 2" }, // দ্বিতীয় post object
  ],
  age: 200, //  age
};

// ----------------------------------------
//  Generic Interface with Multiple Types
// ----------------------------------------
// Generic Interface for a product
interface Product<T> {
  id: number;
  name: string;
  details: T; // Generic type for additional info
}

// Example 1: Simple details
const product1: Product<{ price: number; inStock: boolean }> = {
  id: 101,
  name: "Laptop",
  details: {
    price: 55000,
    inStock: true,
  },
};

// Example 2: More complex details
const product2: Product<{ price: number; colors: string[]; warranty: string }> =
  {
    id: 102,
    name: "Smartphone",
    details: {
      price: 25000,
      colors: ["black", "white", "blue"],
      warranty: "1 year",
    },
  };
