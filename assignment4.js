"use strict";
// Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "Hello WOrld";
console.log(greeting);
// Define two variables with integer values and calculate their sum, difference, product, and quotient.
let a = 5;
let b = 4;
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
let k = true;
let l = false;
let m = true;
if (k || l)
    console.log("true");
else
    console.log("false");
if (k && l)
    console.log("true");
else
    console.log("false");
console.log(!k);
if (k || m)
    console.log("true");
else
    console.log("false");
if (m || l)
    console.log("true");
else
    console.log("false");
if (k && m)
    console.log("true");
else
    console.log("false");
if (m && l)
    console.log("true");
else
    console.log("false");
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
if (num1 % 2 == 0)
    console.log("the number is even");
else
    console.log("the number is odd");
// Check if a person is eligible to vote.
let age = 17;
if (age >= 18)
    console.log("the person is eligible to vote");
else
    console.log("the person is not eligible to vote");
// Assign a grade based on a numerical score.
let score = 50;
if (score >= 90)
    console.log("the grade is A");
if (score >= 80 && score <= 89)
    console.log("the grade is B");
if (score >= 70 && score <= 79)
    console.log("the garde is C");
if (score >= 60 && score <= 69)
    console.log("the garde is D");
if (score >= 50 && score <= 59)
    console.log("the garde is E");
if (score < 50)
    console.log("the garde is F");
// Find the maximum of three numbers.
let p = 5;
let j = 8;
let B = 6;
let maximum = 0;
for (let i = 1; i < 3; i++)
    if (maximum < p)
        maximum = p;
if (maximum < j)
    maximum = j;
if (maximum < B)
    maximum = B;
console.log('the largest is ' + maximum);
