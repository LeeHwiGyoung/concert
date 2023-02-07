import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email : "",
  password : "",
  loginErrMsg : "false",
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeEmail } = loginSlice.actions //reducer의 actions을 export

export default loginSlice.reducer