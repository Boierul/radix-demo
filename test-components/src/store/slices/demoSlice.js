import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'A00',
}

export const counterSlice = createSlice({
    name: 'turbine',
    initialState,
    reducers: {
        setTurbineName: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setTurbineName } = counterSlice.actions

export default counterSlice.reducer