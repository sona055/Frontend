
const App = () => {

  const student = {
    name: "Arun",
    age: 21,
    department: "Computer Science",
    city: "Chennai"
  }

  return (
    <div>
      <h1>Student Details</h1>

      <h3>Student Name: {student.name}</h3>
      <h3>Age: {student.age}</h3>
      <h3>Department: {student.department}</h3>
      <h3>City: {student.city}</h3>

    </div>
  )
}

export default App
