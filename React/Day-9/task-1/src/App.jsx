
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState("Arun")

  return (
    <div>
      <h1>Student Name: {name}</h1>

      <button onClick={() => setName("Kumar")}>
        Change Name
      </button>
    </div>
  )
}

export default App
