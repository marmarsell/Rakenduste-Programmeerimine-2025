import { useState } from "react"
import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(1)

  function incrementChange() {
    setIncrement(parseInt((document.getElementById("increment-selector") as HTMLInputElement) !.value));
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + increment)}>
          count is {count}
        </button>

        <select name="increment" id="increment-selector" defaultValue={1} onChange={() => incrementChange()}>
          <option value="100">+100</option>
          <option value="50">+50</option>
          <option value="25">+25</option>
          <option value="1">+1</option>
          <option value="-1">-1</option>
          <option value="-25">-25</option>
          <option value="-50">-50</option>
          <option value="-100">-100</option>
        </select>

      </div>
    </>
  )
}

export default Counter
