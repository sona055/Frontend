
import { useState } from 'react'

const App = () => {
  const [signal, setSignal] = useState("red")

  let message = ""

  if (signal === "red") {
    message = "Stop"
  }
  else if (signal === "yellow") {
    message = "Ready"
  }
  else if (signal === "green") {
    message = "Go"
  }

  return (
    <div>
      <h1>Traffic Signal</h1>

      <button onClick={() => setSignal("red")}>Red</button>
      <button onClick={() => setSignal("yellow")}>Yellow</button>
      <button onClick={() => setSignal("green")}>Green</button>

      <h2>{message}</h2>
    </div>
  )
}

export default App
