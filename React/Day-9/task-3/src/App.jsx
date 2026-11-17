import Student from './components/student'

const App = () => {
   const students = [
    { name: "Arun", age: 21, course: "React" },
    { name: "Priya", age: 22, course: "Java" },
    { name: "Rahul", age: 23, course: "Python" }
  ]

  return (
 <>
 <h2>student details</h2>
 {students.map((e)=>(
<Student
key={e}
name={e.name}
age={e.age}
course={e.course}
/>
 ))}
 </>
  )
}

export default App