// A. Q + A

//1. How do we assign a value to a variable?
// We assign a value to a variable using the let, constant, and var keywords. Then defining a variable
//  name and using the equals operator to assign the value to the variable.

//2. How do we change the value of a variable?
// We can reassign the new value of a variable.

//3. How do we assign an existing variable to a new variable?
//We need to use the assignment operator. 

//4. Remind me, what are declare, assign, and define?
// Declare is creating a variable. Assign mean that the assignment ( = ) operator is used to assign a value to a variable.
//  Define is creating the human readible variable name.


//5. What is pseudocoding and why should you do it?
//  It helps you create algorithms in a format that is easier to read than code syntax. 

//6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?. 
// it depends on the problem. If the problem is trivial, then it approaches 100%. If the problem is heroically difficult - then almost 0%



// B. Strings

// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
let firstVariable;

// Assign it the value of the string "Hello World"
// firstVariable = "Hello World";

// Change the value of this variable to some number
// firstVariable = 17;

// Store the value of firstVariable in a new variable called secondVariable
// let secondVariable = firstVariable;

// Change the value of secondVariableto any string.
// secondVariable = "Love";

// What is the value of firstVariable?
// Love

// Create a variable called yourNameand set it equal to your name as a string.
//  Then, write an expression that takes the string "Hello, my name is "
//  and the variable your Name so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

// name = "Sam";
// console.log("Hello, my name is " + name)


// C. Booleans

// Using the provided variable definitions, replace the blanks so that all log statements print true 
// in the console. Answers should be all be valid JS syntax and not weird things that don't make sense 
// but happen to print trueto the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// // // FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit
  
let animal = "cow";
if ("cow" === "cow") {
    console.log("mooooo");
}else{
    console.log("Hey! You're not a cow.")
}

// E. Driver's Ed

// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16,
//  a message should print "Sorry, you're too young."

let age = 10;
if (age >=16 || age < 16) {
    console.log("Here are the keys!");
}else{
    console.log("Sorry, you're too young.")
}