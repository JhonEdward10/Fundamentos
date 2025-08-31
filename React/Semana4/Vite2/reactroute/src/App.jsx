import { useState } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import NameUser from './component/NameUser'

function App() {

  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <nav>
        <ul>
          <li><Link className='home' to='/'>Home</Link></li>
          <li><Link to='/about'>About me</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/country/republic'>Ir a usuario Pais</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home saludar='Hola' />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/country/:name" element={<NameUser />} />
      </Routes>

      <footer>CopyRight, Todos los derechos reservados</footer>
    </div>
  )
}

export default App
