console.log("Task-1");

let studentName = "Arun";
let age = 25;
let courseCompleted = true;

console.log(studentName);
console.log(age);
console.log(courseCompleted);


console.log("Task-2");

let salary = 15000;

salary = salary + 5000;

console.log(salary);


console.log("Task-3");

let number = 25;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}



console.log("Task-4");

let name = "Arun";
let ages = 25;
let isCompleted = true;
let result;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isCompleted);
console.log(typeof result);


console.log("task-5");  
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log("a =", a);
console.log("b =", b);


let arr = [10, 20, 30, 20, 40, 10, 50];
let results = [];

for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
            found = true;
            break;
        }
    }

    if (found === false) {
        result[result.length] = arr[i];
    }
}

console.log(results);

