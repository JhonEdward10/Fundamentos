import React from 'react'

const Card = ({array, title, color}) => {

  return (
    <div>
      <article style={{backgroundColor: `${color}`}} className='card'>
        <h2>{title}</h2>
        <ul>
          <li>{array[0]}</li>
          <li>{array[1]}</li>
          <li>{array[2]}</li>
          <li>{array[3]}</li>
          <li>{array[4]}</li>
        </ul>
      </article>
      
    </div>
  )
}

export default Card
