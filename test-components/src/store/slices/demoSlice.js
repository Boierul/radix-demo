import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    trubineID: 'A00',
    projectID: 'P00'
}

export const counterSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        setTurbineName: (state, action) => {
            state.trubineID = action.payload
        },
        setProjectName: (state, action) => {
            state.projectID = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setTurbineName, setProjectName } = counterSlice.actions

export default counterSlice.reducer

