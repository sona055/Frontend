

import { useState, useEffect } from 'react';

const App = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    username: ""
  });

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

  }, []);

  const handleChange = (event) => {

    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    setError("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.username.trim()
    ) {
      setError("Please fill all the fields");
      return;
    }

    try {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(form)
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const newUser = await response.json();

      setUsers((prevUsers) => [
        ...prevUsers,
        newUser
      ]);

      setForm({
        name: "",
        email: "",
        phone: "",
        username: ""
      });

    } catch (error) {
      setError(error.message);
    }

  };

  return (

    <div>

      <h1>User Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h2>Registered Users</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : (

        <table border="1" cellPadding="10">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Username</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>

  );

};

export default App;

