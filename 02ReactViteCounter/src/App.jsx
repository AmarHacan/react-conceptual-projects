import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
function addValue() {
  counter==20?null:setCount(counter+1)
}
function removeValue() {
  counter==0?null:setCount(counter-1)
}
function resetValue() {
  setCount(0)
}
  return (
    <>
  <h1>React with vite counter</h1>
  <h2>Counter Value: {counter}</h2> 
    <button onClick={addValue}>Increment Counter</button>
    <br></br>
    <br></br> 
        <button onClick={removeValue}>Decrement Counter</button>
    <br></br>
    <br></br> 
        <button onClick={resetValue}>Reset Counter</button>

     </>
  )
}

export default App
