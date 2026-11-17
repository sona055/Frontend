
import { useState } from 'react'

const App = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>

      {show && <h2>Welcome to React</h2>}
    </div>
  )
}

export default App
