console.log("TAsk-1");
let numbers = [10, 20, 30, 40, 50];
let maparray=numbers.map((e,i)=>{
return e*2
})
console.log(maparray);

console.log("Task-2");
let number = [10, 15, 20, 25, 30, 35, 40];
let filterarray=number.filter((e,i)=>{
    if(e%2==0){
    return e
    }
})
console.log(filterarray);


console.log("Task-3");
let num = [10, 25, 35, 50, 60];
const findnum= num.find((e,i)=>{
if(e>30){
    return e
}
})
console.log(findnum);

console.log("Task-4");
let students = [{ id: 1, name: "Arun", mark: 75 },{ id: 2, name: "Priya", mark: 90 },{ id: 3, name: "Kumar", mark: 65 }];
let findstudent=students.find((e,i)=>{
        return e.id===2
})
console.log(findstudent);


console.log("TAsk-5");
let employees = [{ name: "Arun", salary: 25000 },{ name: "Priya", salary: 45000 },{ name: "Kumar", salary: 30000 },{ name: "Ravi", salary: 50000 }];
const filteremployee=employees.filter((e,i)=>{
    if(e.salary>=30000){
        return e
    }
})
console.log(filteremployee);


console.log("Task-6");
const filtername=employees.filter((e,i)=>{
 return e.name  
})
console.log(filtername);



console.log("Task-7");
let prices = [100, 200, 300, 400];
let cost=prices.reduce((a,c)=>{
    return a+c
},0)
 console.log(cost);

 console.log("Task-8");
 let marks = [75, 80, 35, 90, 65];
 let somemarks=marks.some((e)=>{
    if(e<40)
        return e
 })
console.log(somemarks);
let everymarks=marks.every((e)=>e>=35)
console.log(everymarks);

 
console.log("Task-9");
let skills = ["HTML","CSS","JavaScript","React"];
let forskills=skills.forEach((e,i)=>{
    console.log(e);
    } )

console.log("Task-10");
let student = {name: "Arun",age: 21,course: "JavaScript",city: "Chennai"};
for (let key in student) {
    console.log(key, student[key]);
}