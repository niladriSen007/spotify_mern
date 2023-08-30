import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  songId: null,
}

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setSongId(state,action){
        state.songId = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSongId } = songSlice.actions

export default songSlice.reducer