import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  isFetching:false,
  error:false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerStart(state){
        state.isFetching = true
    },
    registerSuccess(state,action){
        state.isFetching = false;
        state.currentUser = action.payload
    },
    registerSFailure(state){
        state.isFetching = false;
        state.error = true
    },
    loginStart(state){
        state.isFetching = true
    },
    loginSuccess(state,action){
        state.isFetching = false;
        state.currentUser = action.payload
    },
    loginSFailure(state){
        state.isFetching = false;
        state.error = true
    },
    logoutSuccess(state){
      state.isFetching = false;
      state.error=false;
      state.currentUser = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { registerStart,registerSuccess,registerSFailure,loginStart,loginSuccess,loginSFailure,logoutSuccess } = userSlice.actions

export default userSlice.reducer