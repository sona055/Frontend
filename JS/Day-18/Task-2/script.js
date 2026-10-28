
const calculateSalary = (salary, callback) => {
    const result = callback(salary);
    return result;
};
const addBonus = (salary) => {
    return salary + 5000;
};
const deductSalary = (salary) => {
    return salary - 2000;
};
const salary = 20000;
console.log("Original Salary:", salary);
console.log(
    "Salary After Bonus:",
    calculateSalary(salary, addBonus)
);
console.log(
    "Salary After Deduction:",
    calculateSalary(salary, deductSalary)
);