import React from 'react'

const Card = ({name, isActive, changedState, changedState1}) => {

 
  return (
      <article className='card'>
          <h2>{name}</h2>
          <p>Estado: <b>{isActive}</b></p>
          <button onClick={changedState}>Desabilitar</button>
          <button onClick={changedState1}>Habilitar</button>
      </article>
  )
}

export default Card
