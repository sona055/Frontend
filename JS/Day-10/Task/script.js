console.log("Task-1")
let salary = 20000;
salary=25000
console.log(salary);

console.log("Task-2");
const country = "India";
console.log("My Country is "+ country);
console.log(`My Country is ${country}`);

console.log("Task-3");
let name = "Arun";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old`)

console.log("Task-4");
let price = 500;
let quantity = 4;
console.log(`Total is ${price*quantity}`);

console.log("Task-5");
function greet(name="Guest"){
console.log(`welcome ${name}`);

}
greet("arun")
greet()


console.log("Task-6");
const colors = ["Red", "Green", "Blue"];
const [a,b,c]=colors
console.log(a,b,c);

console.log("Task-7");

const student = {names: "Arun",ages: 20,city: "Chennai"};
const { names,ages,city } = student;
console.log(`
${name}
${ages}
${city}`);

console.log("Task-8");
const numbers = [10, 20, 30];
const number=[40,50];
console.log(...numbers,...number);

console.log("Task-9");
function rest(...numbers){
    console.log(numbers);
    
}
rest(10, 20, 30, 40)


console.log("Task-10");
const arrow=(a,b)=>{
    
    return a+b
}
console.log(arrow(10,20))
