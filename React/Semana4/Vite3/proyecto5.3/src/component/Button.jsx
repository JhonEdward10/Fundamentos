import React from 'react'
import { useSelector } from 'react-redux'

const Button = () => {

    const contador = useSelector(state => state.counter)
    
return (
    <>
    <h2>{`Soy un button con el estado ${contador}`}</h2>
    <hr />
    <button>Soy un Button</button>
    </>
  )
}

export default Button