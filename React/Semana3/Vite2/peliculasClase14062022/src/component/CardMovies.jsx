import React from 'react'

const CardMovies = ({movie, deleteMovie, setObjectUpdate, setIsShowForm, reset}) => {

  const updateMovie = () => {
    setIsShowForm(true)
    
    const obj = {
      duration: movie.duration,
      genre: movie.genre,
      name: movie.name,
      release_date: movie.release_date
  }
    reset(obj)
    setObjectUpdate(movie)
  }


  return (
    <article className='Card-movie'>
        <h2>{`#${movie.id} ${movie.genre} ${movie.name}`}</h2>
        <li><b>Genre: </b>{movie.genre}</li>
        <li><b>Duration: </b>{movie.duration}</li>
        <li><b>Date: </b>{movie.release_date}</li>
        <button onClick={() => deleteMovie(movie.id)}>
            Trash
        </button>
        <button onClick={updateMovie}>
            Update
        </button>
    </article>
  )
}

export default CardMovies