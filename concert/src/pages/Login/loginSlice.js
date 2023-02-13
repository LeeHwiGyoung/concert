import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email : "",
  password : "",
  loginErrMsg : false,
  currentUser : "",
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    inputEmail: (state, action) => {
      state.email = action.payload
    },
    inputPassword: (state ,action) => {
        state.password = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { inputEmail, inputPassword  , setCurrentUser} = loginSlice.actions //reducer의 actions을 export

export default loginSlice.reducer