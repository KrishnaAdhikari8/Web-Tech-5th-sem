//ARITHMETIC OPERATORS 
let a = 10, b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Increment:", ++a);
console.log("Decrement:", --b);


//ASSIGNMENT OPERATORS
let x = 10;

x += 5;  
x -= 2;   
x *= 3;  
x /= 2;  
console.log("Assignment result:", x);


// COMPARISON OPERATORS
console.log("5 == '5':", 5 == "5");   
console.log("5 === '5':", 5 === "5");  
console.log("5 != 3:", 5 != 3);
console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 >= 5:", 5 >= 5);


//LOGICAL OPERATORS 
console.log("true && false:", true && false);
console.log("true || false:", true || false);
console.log("!true:", !true);


//STRING OPERATOR
let str1 = "Hello";
let str2 = "World";
console.log("Concatenation:", str1 + " " + str2);


//TYPE OPERATOR
console.log("Type of str1:", typeof str1);


//TERNARY OPERATOR
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary result:", result);


// BITWISE OPERATORS
console.log("5 & 1:", 5 & 1);
console.log("5 | 1:", 5 | 1);
console.log("5 ^ 1:", 5 ^ 1);
console.log("~5:", ~5);
console.log("5 << 1:", 5 << 1);
console.log("5 >> 1:", 5 >> 1);