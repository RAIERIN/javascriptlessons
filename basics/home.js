console.log("hello");

// alert("Hi!");

//variables
var b = "smoothie";
console.log(b);

var someNumber = 45;

console.log(someNumber);

// var age = prompt("What is your age?");

// document.getElementById("someText").innerHTML = age;

// Numbers in Javascript
var num1 = 5.7;
// num1 = num1 + 1;
console.log(5 * 10);
console.log(50 / 5);
//Increment num1 by 1
num1++;
console.log(num1);
// Decrement num1 by 1
num1--;

console.log(num1);

//Divide, multiply * remainder %
console.log(num1 / 6);
console.log(num1 % 6);

//Increment/decrement by 10
num1 += 10;
console.log(num1);

/*Functions
1. Create a function
2. Call the function
*/

//Create
function fun() {
  console.log("this is a function");
}

//Call
fun();

//create a function that takes name and says followed by your name
// Name:"Erin", Return: "Hello erin"

function greeting() {
  var name = prompt("What is your name?");
  var result = "Hello " + name;
  console.log(result);
}

// greeting();

//How do arguements work in functions
// How do we add 2 numbers together in a function
function sumNumbers(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}

sumNumbers(10, 10);

var num = 0;
// While loopes
// while (num<100) {
//     num += 1;
//     console.log(num)
// }

// For loop
for (let i = 0; i < 100; i++) {
  console.log(i);
}

//Data types
let yourAge = 18; //number
let yourName = "asd"; //String
let name = { first: "Erin", last: "Rai" }; // Object
let truth = false; // boolean
let groceries = ["apple", "banana", "oranges"]; // array
let random; //undefined
let nothing = null; //value null

// Strings in Javascript (common methods)
let fruit = "banana";
let moreFruits = "banana\napple"; // new line \n

console.log(fruit.length);
console.log(fruit.indexOf("a")); //found 1 and not found -1
console.log(fruit.slice(2, 6)); //nana print
console.log(fruit.replace("ban", "123")); // replace text
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(frits.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(""));

// Array
let fruits = ["banana", "apple", "orange", "pineapples"];
fruits = new Array("banana", "apple", "orange", "pineapples");

console.log(fruit[2]); //access value at index 2nd

fruits[0] = "peer";
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// array common methods
console.log("to string", fruits.toString());
console.log(frits.join(" * "));
console.log(fruits.pop(), fruits); // remove final element and return removed item
console.log(fruits.push("blackberries"), fruits); //appends
console.log(fruits[4]);
fruits[fruits.length] = "new fruit";
console.log(fruits);
fruits.shift(); // remove first element from a list
fruits.unshift("Kiwi"); //add first element to an array

let vegetables = ["asparagus", "tomato", "broccoli"];
let allGroceries = fruits.concat(vegetables); //combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 2254, 1, 23, 22];
console.log(
  someNumbers.sort(function(a, b) {
    return a - b;
  })
); // sorted in ascending order
console.log(
  someNumbers.sort(function(a, b) {
    return b - a;
  })
); // sorted in descending order

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
  emptyArray.push(num);
}

console.log(emptyArray);

//Objects in Javascript
// dictionaries in Python
let student = {
  first: "Erin",
  last: "Rai",
  age: 25,
  height: 1770,
  studentInfo: function() {
    return this.first + "\n" + this.last;
  }
};
console.log(student.first);
console.log(student.last);
student.first = "noErin"; // change value
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// Conditionals, COntrol flows (if else)
// 18-35 my target demographic
var age = 22;

if (age >= 18 && age <= 34) {
  status = "target demo";
} else {
  status = "not my audience";
}

// Switch statements
// differentiate between weekday vs weekend
// 0 --> sunday
// day 6 --> saturday
// day 4 ---> Thrusday --> weekday
switch (6) {
  case 0:
    text = "Weekend";
    break;
  case 5:
    text = "Weekend";
    break;
  case 6:
    text = "Weekend";
    break;
  default:
    text = "weekday";
}

console.log(text);
