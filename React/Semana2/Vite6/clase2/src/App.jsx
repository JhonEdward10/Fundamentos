import { useState } from 'react'
import './App.css'
import nino from './assets/memes/nino.jpg'

function App() {

  const [isBoolean, setIsBoolean] = useState(true)

  //Ciclo de Vida de un Componente
    //Nacer
      //Es Cuando se renderiza por primera vez
        //Es Cuando se actualiza (setState)
          //Es Cuando ya no se renderiza


  return (
    <div className='App'>
      <button onClick={() => setIsBoolean(!isBoolean)}>Change Component</button>
      { 
      isBoolean ?
      <h1>Soy el primer Componente</h1>
      :
      <h2>Soy el segundo Componente</h2>
      }
    </div>
  )
}

export default App


//_________________________________________________________________________________________


// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [isBoolean, setIsBoolean] = useState(false)

//   const clickButton = () => setIsBoolean(!isBoolean)


//   return (
//     <div className={isBoolean ? 'dark_mode' : 'ligth_mode'}>
//       <h1>Input</h1>
//       <input type={isBoolean ? 'password' : 'text'}/>
//       <button onClick={clickButton}>{isBoolean ? 'Show' : 'Hide'} Password</button>
//     </div>
//   )
// }

// export default App


//_______________________________________________________________________________________________

// import { useState } from 'react'
// import './App.css'
// import nino from './assets/memes/nino.jpg'

// function App() {

//   const [isBoolean, setIsBoolean] = useState(false)

//   const clickButton = () => setIsBoolean(!isBoolean)


//   return (
//     <div className='App'>
//       <button onClick={clickButton}>{isBoolean ? 'Hide' : 'Show'} Image</button>
//       { 
//       isBoolean && <img src={nino} alt="" />
//     }
//     </div>
//   )
// }

// export default App


//_____________________________________________________________________________________________________


// function App() {

//   const [isCount, setIsCount] = useState(0)

//   const plusOne = () =>{

//     let newIsCount = isCount;

//     console.log(newIsCount, 'Antes');

//     newIsCount = isCount +1;
//     setIsCount(isCount +1)

//     console.log(newIsCount, 'Despues');
//   }

