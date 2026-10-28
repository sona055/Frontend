
const USERS_KEY = "registeredUsers";
const SESSION_KEY = "loggedInUser";
function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");
        const users = getUsers();
        const existingUser = users.find(function (user) {
            return user.email === email;
        });
        if (existingUser) {
            message.textContent = "Email already registered!";
            return;
        }
        const newUser = {
            name: name,
            email: email,
            password: password
        };
        users.push(newUser);
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        alert("Registration successful! Please login.");
        window.location.href = "login.html";
    });
}
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("loginEmail").value.trim().toLowerCase();
        const password = document.getElementById("loginPassword").value;
        const message = document.getElementById("message");
        const users = getUsers();
        const validUser = users.find(function (user) {
            return user.email === email && user.password === password;
        });

        if (validUser) {
            localStorage.setItem(SESSION_KEY, JSON.stringify({
                name: validUser.name,
                email: validUser.email
            }));

            window.location.href = "dashboard.html";
        } else {
            message.textContent = "Invalid email or password!";
        }
    });
}
const welcome = document.getElementById("welcome");

if (welcome) {
    const session = localStorage.getItem(SESSION_KEY);

    if (!session) {
        window.location.href = "login.html";
    } else {
        const user = JSON.parse(session);

        welcome.textContent = "Welcome, " + user.name + "!";
        document.getElementById("userEmail").textContent =
            "Email: " + user.email;
    }
}
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem(SESSION_KEY);
        window.location.href = "login.html";
    });
}
