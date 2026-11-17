
import { useState } from 'react';

const App = () => {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmittedData({ ...student });
  };

  return (
    <div>

      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>

      {submittedData && (
        <div>
          <h2>Submitted Student Details</h2>

          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>

        </div>
      )}

    </div>
  );
};

export default App;
