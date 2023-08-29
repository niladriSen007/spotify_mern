import { configureStore } from '@reduxjs/toolkit'
import useReducer from "./slices/userSlice"
import uploadReducer from './slices/uploadSongSlice'

export const store = configureStore({
  reducer: {
    user:useReducer,
    upload:uploadReducer
  },
})