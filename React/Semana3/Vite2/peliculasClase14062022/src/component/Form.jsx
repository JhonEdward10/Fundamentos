import React from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'

const Form = ({createNewMovie, updatePartialMovie, objectUpdate, handleSubmit, reset, register}) => {
    
    
    const defaultValueForm = {
        duration: '',
        genre: '',
        name: '',
        release_date: ''
    }

    const submit = data => {
        if(objectUpdate.id !== undefined){
            updatePartialMovie(objectUpdate.id, data)
            reset(defaultValueForm)

        }else{
            createNewMovie(data)
        }
        reset(defaultValueForm);
    }

  return (

		<form onSubmit={handleSubmit(submit)}>
			<div>
				<label htmlFor='name'>Name</label>
				<input type='text' id='name' {...register("name")} />
			</div>
            <div>
				<label htmlFor='genre'>Genre</label>
				<input type='text' id='genre' {...register("genre")} />
			</div>
			<div>
				<label htmlFor='duration'>Duration</label>
				<input type='duration' id='duration' {...register("duration")} />
			</div>
            <div>
				<label htmlFor='date'>Release Date</label>
				<input type='date' id='date' {...register("release_date")} />
			</div>
            <button>Submit</button>
		</form>
        )

}

export default Form