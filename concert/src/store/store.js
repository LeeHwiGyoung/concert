import { configureStore } from "@reduxjs/toolkit";
import  loginReducer  from "../pages/Login/loginSlice"
import authReducer from "./authSlice"
import headerReducer from "../components/headerSlice"
export const store = configureStore({
    reducer : {
        login: loginReducer,
        auth : authReducer,
        header : headerReducer,
    },
})