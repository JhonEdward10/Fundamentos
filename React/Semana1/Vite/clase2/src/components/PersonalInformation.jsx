import React from 'react'

const PersonalInformation = ({me, title}) => {

  return (

    <ul className="personalinformation">
        <h2>{title}</h2>
        <li><b>Nombre: </b>{me.name}</li>
        <li><b>Edad: </b>{me.age}</li>
        <li><b>Pelicula Favorita: </b>{me.favoriteMovie}</li>
        <li><b>Musica Favorita: </b>{me.favoriteMusic}</li>
    </ul>
  )
}

export default PersonalInformation
