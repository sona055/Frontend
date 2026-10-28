
let employees = [];

let form = document.getElementById("employeeForm");
let table = document.getElementById("employeeTable");
let message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("empName").value.trim();
    let ageInput = document.getElementById("empAge").value;
    let department = document.getElementById("department").value.trim();
    let salaryInput = document.getElementById("salary").value;

    let age = Number(ageInput);
    let salary = Number(salaryInput);

    if (
        name === "" ||
        ageInput === "" ||
        department === "" ||
        salaryInput === ""
    ) {
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (!Number.isFinite(age) || age <= 0) {
        message.textContent = "Enter a valid positive age.";
        return;
    }

    if (!Number.isFinite(salary) || salary <= 0) {
        message.textContent = "Enter a valid positive salary.";
        return;
    }

    let employee = {
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    employees.push(employee);

    displayEmployees();

    form.reset();
    message.textContent = "Employee registered successfully!";
});

function displayEmployees() {
    table.innerHTML = "";

    employees.forEach(function(employee) {
        table.innerHTML += `
            <tr>
                <td>${escapeHTML(employee.name)}</td>
                <td>${employee.age}</td>
                <td>${escapeHTML(employee.department)}</td>
                <td>${employee.salary}</td>
            </tr>
        `;
    });
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function(char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}
