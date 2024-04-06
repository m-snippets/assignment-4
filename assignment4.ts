// Declare a variable named greeting with the string value "Hello, World!" and print it.

let greeting = "Hello WOrld";
console.log(greeting);

// Define two variables with integer values and calculate their sum, difference, product, and quotient.

let a: number = 5;
let b: number = 4;
let sum = a + b;
let difference = a - b;
let peoduct = a * b;
let quotient = a / b;

//Swap the values of two variables without using a third variable.
let x = 7;
let y = 1;
console.log(" value of a is" + x + " and value of b is " + y);

x = x + y;
y = x - y;
x = x - y;
console.log("now the value of x is " + x + "  and value of b is " + y);

// This applies to TypeScript. Create a string variable and try changing its type.
//let message: string = 8; // error Type 'number' is not assignable to type 'string'.ts(2322)

// Use the modulus operator to find the remainder of two numbers.
let g = 2;
let h = 4;

console.log("this is the mod " + (h % g));

// Increment a variable's value by 1 using two different methods.
let counter = 0;
counter + 1;
counter++;
++counter;

// Given three boolean variables, write expressions for AND, OR, and NOT gates.
let k: boolean = true;
let l: boolean = false;
let m: boolean = true;

if (k || l) console.log("true");
else console.log("false");
if (k && l) console.log("true");
else console.log("false");

if (k && l && m) console.log("true"); 
else console.log("false");

console.log(!k);

if (k || m) console.log("true");
else console.log("false");

if (m || l) console.log("true");
else console.log("false");

if (k && m) console.log("true");
else console.log("false");

if (m && l) console.log("true");
else console.log("false");

console.log(!l);

console.log(!m);

// Show examples of using compound assignment operators.

let num = 10; // Use +=, -=, *=, and /=
console.log((num += 10));
console.log((num -= 10));
console.log((num *= 10));
console.log((num /= 10));

// Write a program to check if a number is even or odd.
let num1 = 4;
if (num1 % 2 == 0) console.log("the number is even");
else console.log("the number is odd");

// Check if a person is eligible to vote.
let age = 17;
if (age >= 18) console.log("the person is eligible to vote");
else console.log("the person is not eligible to vote");

// Assign a grade based on a numerical score.
let score = 50;
let grade: string;
grade =
	score >= 90
		? "your grade is A"
		: score >= 80
		? "your grade is B"
		: score >= 70
		? "your grade is C"
		: score >= 60
		? "your garde is D"
		: "your grade is F";
console.log(grade);
// Find the maximum of three numbers.
let p = 5;
let j = 8;
let B = 6;
let maximum = 0;
for (let i = 1; i < 3; i++) if (maximum < p) maximum = p;
if (maximum < j) maximum = j;
if (maximum < B) maximum = B;

console.log("the largest is " + maximum);

// Check if a given year is a leap year.

let year: number = 2024;
let isLeapyear: boolean =
	year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0);

console.log(
	`${year} is ${isLeapyear ? "a leap year " : "is not a leap year "}`
);

// Write a program that converts temperature from Fahrenheit to Celsius.
let Celsius;
let Fahrenheit = 50;
Celsius = ((Fahrenheit - 32) * 5) / 9;
console.log("the temprature in degree celsius is " + Celsius);

// Check if a number is positive, negative, or zero.
let number = 50;
if (number > 0) console.log(`${number} is a positive number`);
else if (number < 0) console.log(`${number} is negative`);
else console.log("the number is 0");

// Write a program that prints the multiplication table of a given number up to 10.
let F = 4;
console.log(`${F} x 1 = ${F * 1}`);
console.log(`${F} x 2 = ${F * 2}`);
console.log(`${F} x 3 = ${F * 3}`);
console.log(`${F} x 4 = ${F * 4}`);
console.log(`${F} x 5 = ${F * 5}`);
console.log(`${F} x 6 = ${F * 6}`);
console.log(`${F} x 7 = ${F * 7}`);
console.log(`${F} x 8 = ${F * 8}`);
console.log(`${F} x 9 = ${F * 9}`);
console.log(`${F} x 10 = ${F * 10}`);
