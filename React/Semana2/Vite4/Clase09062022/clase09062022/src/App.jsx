import { useState } from 'react'
import './App.css'
import Form from './component/Form'
import FormControled from './component/FormControled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        {/* <Form /> */}
        <FormControled />
    </div>
  )
}

export default App
