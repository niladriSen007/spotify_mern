import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  songId: null,
  songUrl:null,
  likeSong:false
}

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setSongId(state,action){
        state.songId = action.payload;
    },
    setSongUrlNew(state,action){
        state.songUrl = action.payload;
    },
    likeSongAddStatus(state,action){
        state.likeSong = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSongId,setSongUrlNew,likeSongAddStatus } = songSlice.actions

export default songSlice.reducer