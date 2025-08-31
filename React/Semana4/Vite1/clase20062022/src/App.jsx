import { useState } from 'react'
import useLocation from './hooks/useLocation'
import Residents from './component/Resident'
import InputSearch from './component/InputSearch'

function App() {

  const [inputSearch, setInputSearch] = useState()

  const location = useLocation(inputSearch)


  return (

    <div className="App">
      <h1>#{location?.id}</h1>
      <InputSearch
        setInputSearch={setInputSearch}
      />
      <div className='card-container'>
        {
          location?.residents.map(url => (
            <Residents 
              key={url}
              url={url}
            />
          )
          )
        }
      </div>
    </div>
  )
}

export default App
