import { configureStore } from '@reduxjs/toolkit'
import useReducer from "./slices/userSlice"
import uploadReducer from './slices/uploadSongSlice'
import songReducer from './slices/songSlice'

export const store = configureStore({
  reducer: {
    user:useReducer,
    upload:uploadReducer,
    song:songReducer
  },
})