
import { useState } from 'react';

const App = () => {

  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayName(name);
  };

  return (
    <div>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Student Name:</label>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter student name"
        />

        <button type="submit">Submit</button>

      </form>

      <h3>Entered Student Name: {displayName}</h3>

    </div>
  );
};

export default App;
