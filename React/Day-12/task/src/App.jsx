
import { useState } from "react";

const App = () => {

  const [page, setPage] = useState("register");

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [currentUser, setCurrentUser] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Register user
  const handleRegister = (e) => {
    e.preventDefault();

    const exists = users.some(
      (user) => user.username === form.username
    );

    if (exists) {
      setMessage("Username already exists!");
      return;
    }

    const updatedUsers = [...users, form];

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setForm({
      name: "",
      email: "",
      username: "",
      password: ""
    });

    setMessage("Registration successful! Please login.");
    setPage("login");
  };

  // Login validation
  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) =>
        user.username === form.username &&
        user.password === form.password
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      setMessage("");
      setPage("dashboard");
    } else {
      setMessage("Invalid username or password!");
    }
  };

  // Logout
  const handleLogout = () => {
    setCurrentUser(null);
    setForm({
      name: "",
      email: "",
      username: "",
      password: ""
    });
    setMessage("");
    setPage("login");
  };

  return (
    <div>

      {page === "register" && (
        <>
          <h2>Registration</h2>

          <form onSubmit={handleRegister}>
            <input
              name="name"
              placeholder="Enter Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <br /><br />

            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <br /><br />

            <input
              name="username"
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
              required
            />

            <br /><br />

            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <br /><br />

            <button type="submit">Register</button>
          </form>

          <p>
            Already registered?
            <button onClick={() => {
              setMessage("");
              setPage("login");
            }}>
              Login
            </button>
          </p>
        </>
      )}

      {page === "login" && (
        <>
          <h2>Login</h2>

          <form onSubmit={handleLogin}>
            <input
              name="username"
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
              required
            />

            <br /><br />

            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <br /><br />

            <button type="submit">Login</button>
          </form>

          <p>
            New user?
            <button onClick={() => {
              setMessage("");
              setForm({
                name: "",
                email: "",
                username: "",
                password: ""
              });
              setPage("register");
            }}>
              Register
            </button>
          </p>
        </>
      )}

      {page === "dashboard" && currentUser && (
        <>
          <h2>Welcome to Dashboard!</h2>

          <h3>User Details</h3>

          <p>Name: {currentUser.name}</p>
          <p>Email: {currentUser.email}</p>
          <p>Username: {currentUser.username}</p>

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      )}

      <p>{message}</p>

    </div>
  );
};

export default App;
