//  Access Modifiers: 1.readonly: 2.private 3.protected 4.public
// ===============================================================
// 🌟 Access Modifiers in TypeScript
// ===============================================================

/*
Access Modifier হলো এমন কিছু keyword যেগুলো দিয়ে আমরা control করি—
কোন property বা method কোথা থেকে access করা যাবে।

TypeScript-এ মোট 4 ধরনের Access Modifier আছে:
------------------------------------------------
1) public     → সব জায়গা থেকে access করা যায়  (default)
2) private    → class-এর ভিতরে ছাড়া আর কোথাও access করা যায় না
3) protected  → class + child class থেকে access করা যায়, বাইরে থেকে নয়
4) readonly   → একবার মান সেট করা যায়, পরে পরিবর্তন করা যায় না
*/

// ===============================================================
// 1️⃣ public (Default modifier)
// ===============================================================

class PublicExample {
  public name: string; // public না লিখলেও default public

  constructor(name: string) {
    this.name = name;
  }

  public greet() {
    // method-ও public
    console.log(`Hello ${this.name}`);
  }
}

const p1 = new PublicExample("Anwar");
p1.name; // ✔ বাইরে থেকে পাওয়া যাচ্ছে
p1.greet(); // ✔ method-ও পাওয়া যাচ্ছে

// ===============================================================
// 2️⃣ private (শুধু class-এর ভিতরে access করা যাবে)
// ===============================================================

class PrivateExample {
  private salary: number; // ❌ class-এর বাইরে থেকে access করা যাবে না

  constructor(salary: number) {
    this.salary = salary;
  }

  showSalary() {
    console.log(`Salary is: ${this.salary}`); // ✔ class-এর ভিতরে পাওয়া যাচ্ছে
  }
}

const emp = new PrivateExample(5000);
// emp.salary ❌ Error: salary is private
emp.showSalary(); // ✔ OK

// ===============================================================
// 3️⃣ protected (class + child class থেকে access করা যায়)
// ===============================================================

class Parent {
  protected familySecret: string = "We love TypeScript!";

  showSecret() {
    console.log(`Parent says: ${this.familySecret}`);
  }
}

class Child extends Parent {
  revealSecret() {
    console.log(`Child says: ${this.familySecret}`); // ✔ child থেকে পাওয়া যাচ্ছে
  }
}

const child = new Child();
child.showSecret(); // ✔ method public, so বাইরে থেকে call করা যায়
child.revealSecret(); // ✔ ভিতরের method

// child.familySecret ❌ Error: protected মান বাইরে থেকে পাওয়া যায় না

// ===============================================================
// 4️⃣ readonly (মান পরিবর্তন করা যায় না)
// ===============================================================

class ReadOnlyExample {
  readonly companyName: string = "Programming Hero";

  constructor(public owner: string) {}

  show() {
    console.log(`${this.owner} owns ${this.companyName}`);
  }
}

const comp = new ReadOnlyExample("Jhankar Mahbub");
comp.show();

// comp.companyName = "Another Company"; ❌ Error: readonly property

// ===============================================================
// 🎯 Full Practical Example (সব Modifier একসঙ্গে)
// ===============================================================

class BankAccount {
  public owner: string; // বাইরে থেকে দেখা যাবে
  private balance: number; // বাইরে থেকে দেখা/বদলানো যাবে না
  protected bankCode: string; // child class পাবে, বাইরে নয়
  readonly country: string = "Bangladesh"; // পরিবর্তন করা যাবে না

  constructor(owner: string, balance: number, bankCode: string) {
    this.owner = owner;
    this.balance = balance;
    this.bankCode = bankCode;
  }

  public showBalance() {
    console.log(`Current balance: ${this.balance}`);
  }
}

class StudentAccount extends BankAccount {
  showStudentInfo() {
    console.log(`Bank code is: ${this.bankCode}`); // ✔ protected access
  }
}

const acc = new StudentAccount("Anwar", 10000, "BR-404");

acc.owner; // ✔ public
acc.showBalance();
acc.showStudentInfo();

// acc.balance ❌ private (Error)
// acc.bankCode ❌ protected (Error)
// acc.country = "India"; ❌ readonly (Error)
