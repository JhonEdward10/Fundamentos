import { useEffect, useState } from "react"
import axios from 'axios'

const useCountryAPI = () => {

    const [countries, setCountries] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const URL = 'https://restcountries.com/v3.1/region/south%20america'

        axios.get(URL)
        .then(res => {setCountries(res.data)
                    setIsLoading(false)
                })

        .catch(err => console.log(err))

    }, [])
        
  return {countries, isLoading}

}

export default useCountryAPI