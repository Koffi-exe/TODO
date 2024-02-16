import { configureStore } from "@reduxjs/toolkit";
import todoReducers from '../reducers/todoSlice'

const store = configureStore({
    reducer:todoReducers
})

export default store;