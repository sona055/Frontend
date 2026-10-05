console.log("Task-1");
function checkEvenOdd(a){
    if(a%2===0){
        console.log("Even Number"); 
    }
    else{
        console.log( "Odd Number");
        
    }
}
checkEvenOdd(10)



console.log("Task-2");
function findLarges(a,b){
    if(a>b){
        console.log(a);
        
    }
    else{
        console.log(b);
        
    }
}
findLarges(25, 40)



console.log("Task-3");
function checkVote(a){
    if(a>=18){
        console.log( "Eligible to Vote");
    }
    else{
        console.log( "Not Eligible to Vote");
        
    }
}
checkVote(20)



console.log("Task-4");
function getTotal(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
let numbers = [10,20,30,40,50];
console.log(getTotal(numbers));




console.log("Task-5");
function countEven(number){
    let count=0
    for(let i=0;i<number.length;i++){
        if(number[i]%2==0){
            count++
        }
    }
    return count;
}
let number=[10, 15, 20, 25, 30, 35, 40];
console.log(countEven(number));



