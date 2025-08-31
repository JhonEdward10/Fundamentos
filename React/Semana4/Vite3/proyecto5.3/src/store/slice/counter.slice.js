import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 50,
    reducers: {
        increment: state => {
            return state +1
        },
        decrement: state => {
            return state -1
        },
        setCounterGlobal: (state, action) => {
            return action.payload
        }
    }
})

export const { increment, decrement, setCounterGlobal } = counterSlice.actions;

export default counterSlice.reducer;