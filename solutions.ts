// Problem - 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

// Problem - 2
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

// Problem - 3
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): StringOrNumber => {
  if (typeof input === "string") return "String";
  return "Number";
};

// Problem - 4
type TUser = { id: number; name: string; age: number };

const getProperty = <T extends TUser, K extends keyof T>(
  object: T,
  key: K,
): T[K] => {
  return object[key];
};

// Problem - 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

type TBookWithReadStatus = Book & { isRead: boolean };

const toggleReadStatus = (book: Book): TBookWithReadStatus => {
  return { ...book, isRead: true };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

// Problem - 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

// Problem - 7
const getIntersection = (num1: number[], num2: number[]): number[] => {
  return num1.filter((num) => num2.includes(num));
};
