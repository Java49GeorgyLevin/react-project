import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { counterReducer } from "./counterSlice";
import { userNameReduser } from "./usernameSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        username: userNameReduser
    }
    
})