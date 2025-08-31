import { useState } from 'react'
import './App.css'


function App() {

  const [counter, setCounter] = useState(0);

  console.log('Me renderice');


  const minusOne = () =>{
    setCounter(counter -1)
    if(counter <= 0){
      setCounter(0)
    }
  }

  const plusOne = () => {
    setCounter (counter +1)
    if(counter >= 10){
      setCounter(0)
    }
    };
  

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={plusOne} className='boton'>+1</button>
      <button onClick={minusOne} className='boton'>-1</button>

 
    </div>
  )
  }

export default App;
