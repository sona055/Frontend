console.log("Task-1");
let arr = ["apple", "orange", "grapes", "guava", "papaya"]
console.log(arr);
console.log(arr[4]);
console.log(arr[0]);
console.log(arr[1]);

console.log("Task-2");
let colors = ["Red", "Blue", "Green", "Yellow"];
colors[1] = "black"
console.log(colors);

console.log("Task-3");
let students = ["Arun", "Kumar", "Priya", "Ravi", "Divya"]
for (let a = 0; a < students.length; a++) {
    console.log(students[a]);
}

console.log("Task-4");
let totalMarks = 0
let marks = [80, 70, 90, 60, 85];
for (let b = 0; b < marks.length; b++) {
    totalMarks += marks[b]
}
console.log(totalMarks);

console.log("Task-5");
let mul = 0
let numbers = [2, 4, 6, 8, 10];
for (let c = 0; c < numbers.length; c++) {
    mul = numbers[c] * 2
    console.log(mul);
}

console.log("Task-6");
let data = ["name", "age", "course", "city"]
console.log(data[0], data[2]);

console.log("Task-7");
let obj = { name: "Arun", salary: 25000, role: "Developer" }
obj.salary = 30000
console.log(obj);

console.log("Task-8");
let product = { name: "Laptop", price: 50000 };
product.brand = "Dell"
console.log(product);

console.log("Task-9");
let car = { brand: "Toyota", model: "Fortuner", year: 2025 };
for (let key in car) {
    console.log(key, car[key]);
}
console.log("Task-10");
let student = [{name: "Arun",mark: 80},{name: "Priya",mark: 90},{name: "Kumar", mark: 75}];
for(let f=0;f<student.length;f++){
    console.log(student[f].name+"-"+student[f].mark);
    
}

