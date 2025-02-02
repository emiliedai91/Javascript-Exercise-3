let num1 = 3; 
let num2 = 4;

console.log(num1 + num2);  
console.log(num1 - num2);  
console.log(num1 * num2);  
console.log(num1 / num2); 
console.log(num1 % num2);  
console.log("num1 is " + num1);  
console.log("num2 is " + num2);  

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num1 is not greater than num2");
} 

let isSunny = true;
let isWeekend = false; 

if (isSunny == true && isWeekend ==  true) {
  console.log("It's a sunny weekend");
} else if (isWeekend == true || isSunny == true) {
  console.log("It is at least sunny or it's the weekend!");
} else {
  console.log("Life could be better :(");
}

let score = 10;
console.log("score is " + score);
score += 5;
console.log("score is now " + score);

score -= 5;
console.log("score is now " + score);
score *= 5;
console.log("score is now " + score);

let name = prompt("Please enter your name: "); 
console.log("Thank you, " + name);
let age = prompt("Please enter your age: "); 
console.log(name + " is " + age + " years old");



