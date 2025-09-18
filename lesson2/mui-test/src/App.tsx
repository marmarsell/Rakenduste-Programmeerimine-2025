import * as React from 'react'
import Button from "@mui/material/Button"
import './App.css'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)} variant='contained'>Count is {count}</Button>
      </div>
    </>
  )
}

export default App
