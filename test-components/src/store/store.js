import { configureStore } from '@reduxjs/toolkit'
import applicationReducer from './slices/demoSlice.js'

export const store = configureStore({
    reducer: {
        application: applicationReducer
    },
})