import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import CardMovies from './component/CardMovies'
import { useForm } from 'react-hook-form';
import Form from './component/Form'


const URL = 'https://movies-crud-academlo.herokuapp.com/movies/';

function App() {

  const { register, handleSubmit, reset } = useForm();

  const [movies, setMovies] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()


  const getAllMovies = () => {
    axios.get(URL)
    .then(({data}) => setMovies(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllMovies()
  }, [])

  const createNewMovie = newMovie => {  
    axios.post(URL, newMovie)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    .finally(() => getAllMovies())

  }

  const deleteMovie = id => {
    axios.delete(`${URL}${id}/`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => getAllMovies())
  }

  const updatePartialMovie = (id, updateMovie) => {

    axios.patch(`${URL}${id}/`, updateMovie)
    .then(res => {
      console.log(res)
      getAllMovies()
      setObjectUpdate()
      setIsShowForm(false)
    }
    )
    .catch(err => console.log(err))
    .finally(() =>getAllMovies())
    setObjectUpdate
  }


  const showForm = () =>{
    const obj ={
      duration: '',
      genre: '',
      name: '',
      release_date: ''
    } 
    reset(obj)
    setIsShowForm(!isShowForm)
  }

  return (
    <div className="App">
      <div>

        <button onClick={showForm}>
          {isShowForm ? 'Hide Form' : 'Create Movie'}
        </button>

      </div>

      <div>
        {
      
        isShowForm && 
        <Form 
        createNewMovie={createNewMovie}
        updatePartialMovie={updatePartialMovie}
        objectUpdate={objectUpdate}
        handleSubmit={handleSubmit}
        reset={reset}
        register={register}
        />
      }
      </div>

      <div className='Cards-movies'>
        {
          movies?.map(movie => (
            <CardMovies
            key={movie.id}  
            movie={movie}
            deleteMovie={deleteMovie}
            setIsShowForm={setIsShowForm}
            setObjectUpdate={setObjectUpdate}
            reset={reset}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
