//  arrow function , normal function , callback function

//  1. Normal Function Type Annotation

function addNormal(a: number, b: number): number /* ata holo return type*/ {
  return a + b;
}

//  arrow function

const addArrow = (a: number, b: number): number => a + b;

//  obj => function => mathod

const obj = {
  balanse: 0,
  add(value: number): number {
    const totalValue = this.balanse + value;
    return totalValue;
  },
};

// console.log(obj.add(5));

// Callback Function Type
const arry: number[] = [1, 2, 3, 4, 5, 6, 8, 9, 0];

const arr = arry.map((value: number) => {
  return value * value;
});
// console.log(arr.length);
