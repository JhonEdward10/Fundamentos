
import './App.css'
import CardUser from './component/CardUser'

function App() {

  return (
    <div className='App'>
      <CardUser 
      />

      <CardUser
      />

      <CardUser 
      />
      <CardUser  
      />
      <CardUser  
      />
      <CardUser 
      />
      <CardUser  
      />
      <CardUser  
      />
      <CardUser  
      />
    </div>
  )
}

export default App








      {/* <h1>Nombre:
        {user.name?.title}
        {user.name?.first}
        {user.name?.last}
      </h1>
      <h1>Email:
        {user.email}
      </h1>
      <h1>Country:
        {user.location?.country}
      </h1> */}



















// import { useEffect, useState } from 'react'
// import './App.css'

// const colors = [ '#A7168A', '#40AA16', '#C0F24E', '#2FC797', '#B982F7', '#0ABCE2', '#A6087F', '#D53D52', '#0FE9F8', '#EBF34C']


// function App() {
//   const [count, setCount] = useState(0);
//   const [isBoolean, setIsBoolean] = useState(true)
//   const [randomColor, setRandomColor] = useState('');



//   useEffect(() =>{
//     const color = colors[Math.floor(Math.random() * colors.length)]
//     setRandomColor(color)
//   }, [count, isBoolean])
  
// const plusOne = () => setCount(count +1);

// const clickBoton = () => setIsBoolean(!isBoolean)

// const objectStyle = {
//   backgroundColor: randomColor
// }

//   return (
//     <div className="App" style={objectStyle}>
//       <h1>Count 1:{count}</h1>
//       <button onClick={plusOne} >+1</button>

//       <div>
//         <input type={isBoolean ? 'password' : 'text'} />
//         <button onClick={clickBoton} >{isBoolean ? 'Show' : 'Hide'} Password</button>
//       </div>

//     </div>
//   )
// }

// export default App

