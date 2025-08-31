import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Card from './component/Card';
import { decrement, increment, setCounterGlobal } from './store/slice/counter.slice';

function App() {

  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const minusOne = () => dispatch(decrement())
  const reset = () => dispatch(setCounterGlobal(10))
  const plusOne = () => dispatch(increment())

  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={plusOne}>+1</button>
    </div>
  )
}

export default App
