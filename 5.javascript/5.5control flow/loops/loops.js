// for loop : Used when you know how many times you want to repeat something.
for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}

// for... in loop : Used to loop through the keys/properties of an object.
const person = {
    name : "krishna",
    age : 21 ,
    city : "kathmandu"
};
 for (let key in person){
    console.log(key,":",person[key]);
 }

// for...of loop : Used to loop through the values of iterable items like arrays or strings.

const fruits = ['banana','apple','orange','mango']
for(let fruit in fruits){
    console.log(fruit)
}

// while loop : Runs while a condition is true.

let i = 0 
while(i<5){
    console.log(i);
    i++;
}

// do...while loop : Executes the code at least once, then checks the condition.
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);