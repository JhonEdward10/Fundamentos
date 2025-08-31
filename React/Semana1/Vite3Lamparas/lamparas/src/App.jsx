import { useState } from 'react';
import './App.css'
import Card from './component/Card'

function App() {

  const [isActive, setIsActive] = useState('Activo');

  const changedState = () => setIsActive('Inactivo');
  const changedState1 = () => setIsActive('Activo');


  return (
    <div className="App">
      <Card 
      changedState={changedState}
      changedState1={changedState1}
      isActive={isActive}
      name={'Jhon Edward'}
      />
      <Card 
      changedState={changedState}
      changedState1={changedState1}
      isActive={isActive}
      name={'Carlos'}
      />
      <Card 
      changedState={changedState}
      changedState1={changedState1}
      isActive={isActive}
      name={'Troy'}
      />
      
    </div>
  )
}

export default App
