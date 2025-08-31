import { configureStore } from '@reduxjs/toolkit'
import counter  from './slice/counter.slice'

export default configureStore({
  reducer: {
    counter
	}
})

