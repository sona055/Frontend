console.log("Task-1");
let company = "ABC Technologies";
function showEmployee(){
    let employee ="Arun";

    console.log(company);//it acccess the globle variable
    console.log(employee); 
}
// console.log(employee);  It does not print or to be accessed because it is initialize inside the block scope
showEmployee()

console.log("Task-2");
if (true) {
    var age = 25;
    const city = "Chennai";
    console.log(city);//const and let is a block scope it only access inside the block itself
}
console.log(age);//var is the function scope it can't accsess only in function
 
console.log("Task-3");
console.log(a);//it print undefined because the decleration should move at top implicitly
var a=10

//console.log(b);// it move to the tdz
let b=20

greet() //function decleration can be accessed beacuse the function move to the top implicitly
function greet(){
    console.log("Welcome to JavaScript");
}

//greeting() //here greeting is not a function it is a varible so can't be accessed
const greeting=()=>{
    console.log("Welcome to JavaScript");

}


console.log("Task-4");
 function createCounter(){
    let count = 0;
    function innerFun() {
        count++
        console.log(count);
    }
    return innerFun
}
const total=createCounter()
total()
total()
total()

console.log("Task-5");
function add(a,b){
    console.log(a+b);
    
}
function sub(a,b) {
    console.log(a-b);
    
}
function calculate(a,b,callback){
callback(a,b)
}
calculate(20,10,add)
calculate(20,10,sub)