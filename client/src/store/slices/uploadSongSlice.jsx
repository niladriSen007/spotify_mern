import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  uploadComponent: null,
}

export const uploadSongSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    showUpload(state){
        state.uploadComponent = true
    },
    hideUpload(state){
        state.uploadComponent = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { showUpload,hideUpload } = uploadSongSlice.actions

export default uploadSongSlice.reducer