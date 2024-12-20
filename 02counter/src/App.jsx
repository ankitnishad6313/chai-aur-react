import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const increaseValue = () => {
    if(counter < 20){
      setCounter(counter + 1); // increase by 1
      // setCounter(prevCounter => prevCounter +1 )
      // setCounter(prevCounter => prevCounter +1 )
      // setCounter(prevCounter => prevCounter +1 )
      // setCounter(prevCounter => prevCounter +1 )
    } else{
      alert('Maximum value Reached')
    }   
  }
  const decreaseValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }else{
      alert('Minimum value Reached')
    } 
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={increaseValue}>Increase Value {counter}</button> 
      <br /><br />
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
