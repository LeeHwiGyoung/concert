import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    headerHeight : 0,
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderHeight: (state, action) => {
        state.headerHeight = action.payload
    },
    getHeaderHeight: (state) => {
        return state.headerHeight;
    },
  }
})

// Action creators are generated for each case reducer function
export const { setHeaderHeight, getHeaderHeight} = headerSlice.actions //reducer의 actions을 export

export default headerSlice.reducer