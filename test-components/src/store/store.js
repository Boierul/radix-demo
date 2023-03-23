import { configureStore } from '@reduxjs/toolkit'
import turbineReducer from './slices/demoSlice.js'

export const store = configureStore({
    reducer: {
        turbine: turbineReducer
    },
})