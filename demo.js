// // console.log("hello");

// // arrays
// // arrays are 0 indexed

// // students.push("Jimaa");
// // const badStudent = students.shift();
// // console.log(badStudent);
// // console.log(students);
// // students.unshift("Khaled");
// // console.log(students);
// // push pop shift unshift

// // loops for, while
// // 3      //2
// const students = ["Kishi", "Asli", "Nezir", "Sakarie"];

// console.log(students.length);

// for (let i = 0; i < students.length; i++) {
//   students[i] = "Hello " + students[i];
// }
// // 4

// // for (let i = 0; i < students.length; i++) {
// //   console.log(students[i]);
// // }

// let i = 0;

// while (i < students.length) {
//   console.log(students[i]);
//   i++;
// }

// objects

// const car = {
//   brand: "BMW",
//   year: 2019,
//   color: "black",
//   isWorking: true,
//   passengers: ["Kishi", "Asli", "Nezir", "Sakarie"],
//   wheels: {
//     front: 2,
//     back: 1,
//   },
// };

/// console.log(entries);

const reconstructedCar = {};

// for (let i = 0; i < entries.length; i++) {
//   const key = entries[i][0];
//   const value = entries[i][1];
//   reconstructedCar[key] = value;
// }

// console.log(reconstructedCar);

// for (const [key, value] of Object.entries(car)) {
//   console.log(key, value);
// }

// for (const key in car) {
//   console.log(car[key]);
// }

// console.log(Object.keys(car));

// const objectKeys = Object.keys(car);

// for (let i = 0; i < objectKeys.length; i++) {
//   console.log(objectKeys[i], car[objectKeys[i]]);
//   // console.log(objectKeys[i]);
// }

// car.brand = "BMW";
// const brand = "BMW";

// const neededKey = "wheels";
// // console.log(car[brand]);
// console.log(car[neededKey]);

// console.log(car["brand"]);

// const cars = [
//   {
//     brand: "BMW",
//     year: 2019,
//     color: "black",
//     isWorking: true,
//     passengers: [, "Asli", "Nezir", "Sakarie"],
//     wheels: {
//       front: 2,
//       back: 1,
//     },
//   },
//   {
//     brand: "Mercedes",
//     year: 2019,
//     color: "Red",
//     isWorking: false,
//     passengers: ["Omid", "Nezir"],
//     wheels: {
//       front: 2,
//       back: 1,
//     },
//   },
// ];

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   if (car.brand === "Mercedes") {
//     car.isWorking = true;
//     console.log("Mercedes is found", car);
//   }
// }

// console.log(cars);

// let myVar = "Foo";

// function second() {
//   function first() {
//     console.log("inside First()");
//     console.log("My var", myVar);
//   }
//   let myVar = "Bar";
//   first();
// }

// second();

// Write a function that takes in an array of
//  strings and returns a new array that contains
//   the length of each string in the original array,
// sorted in ascending order. please use map

// const strings = ["Kishi", "Asli", "Nezir", "Sakarie"];
// //                   5           4      5         7

// const sortStringsLength = (arrOfString) => {
//   // we have to change it to a length of each string
//   const stringLengths = arrOfString.map((string) => {
//     return string.length;
//   });
//   return stringLengths.sort();
// };

// console.log(sortStringsLength(strings));

// forEach; simply looping over the array and using each element for a specific purpose
// returns undifined

// map; usually used if we want to mutate and create a new version of the current array
// returns a new array
// const names = ["Halit", "Ammar", "Kishi", "Omar"];

// const hello = names.forEach((name, index, array) => {
//   if (name === "Ammar") {
//     // console.log(array[index - 1]);
//   }
//   return "hello " + name;
//   // console.log(name, index, array);
// });
// console.log(hello, "this is the value of hello");
// ## Instructions

// reduce

// const sumEvenNumbers = function (arrOfNumbers) {
//   const reduceValue = arrOfNumbers.reduce((acc, current) => {
//     if (current % 2 === 0) {
//       return acc + current;
//     }
//     return acc;
//   }, 0);
//   return reduceValue;
// };
// const answer = sumEvenNumbers(numbers);
// console.log(answer);
// 1. Create a function called `sumEvenNumbers` that accepts an array and returns a number

// 2. Using .reduce sum only the even elements of the numbers.

// 1. Create a function called `stringConcat` that accepts an array and returns a string
// 2. Using .reduce concat the number into 1 string.

// [1,5,7324,534]
// "157324534"

// const numbers = [1, 2, 5, 26, 34, 26, 34, 262, 123, 6, 213];
// const stringConcat = function (arrOfNumbers) {
//   const concatString = numbers.reduce((acc, current) => {
//     return acc + current.toString();
//   }, "");

//   console.log(concatString);
// };
// // stringConcat(numbers);

// console.log("34" + 5);

// destructuring
// spread operator

// const number = "45";

// const test = [...number];
// console.log(test);

// const numbers = [
//   [1, 2],
//   [3, 4],
// ];
// const [a, b] = numbers;
// console.log(a, b);
const car = {
  brand: "BMW",
  year: 2019,
  color: "black",
  isWorking: false,
  address: {
    city: "Berlin",
    street: "Kurfürstendamm",
    number: 1,
  },
};

// const checkIfCarIsWorking = ({ isWorking, address: { city } }) => {
//   console.log(city);
//   if (isWorking === undefined) {
//     console.log("You passed the wrong object!");
//   }
//   if (isWorking === true) {
//     console.log("CAR IS WORKING FINE!");
//   } else {
//     console.log("CAR IS NOT WORKING FINE!");
//   }
// };

const addMultipleElements = (a, b, ...restOfTheNumbers) => {
  let sum = a + b;
  console.log(restOfTheNumbers);
  if (restOfTheNumbers.length > 0) {
    for (let i = 0; i < restOfTheNumbers.length; i++) {
      sum += restOfTheNumbers[i];
    }
  }
  return sum;
};

const sum = addMultipleElements(1);
console.log(sum);
// checkIfCarIsWorking(car);
// const {
//   address: { city, number },
//   color,
//   brand,
// } = car;

// console.log(city, number, color, brand);
// const modifiedNumbers = [...numbers];
// console.log({ modifiedNumbers, numbers }, "Before modification ");

// modifiedNumbers[0] = 100;

// console.log({ modifiedNumbers, numbers }, "after modification");
