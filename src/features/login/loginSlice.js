import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn: false,
  user : null
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeLoginStatus :(state,action)=>{
     state.user = action.payload.user
     state.loggedIn = action.payload.loggedIn
      console.log(action.payload.user);
       console.log(action.payload.loggedIn);
       
    }
  },
})

// Action creators are generated for each case reducer function
export const {  changeLoginStatus } = loginSlice.actions

export default loginSlice.reducer

