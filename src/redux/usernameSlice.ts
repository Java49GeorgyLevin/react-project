import { createSlice } from "@reduxjs/toolkit";
const ADMIN: string = 'admin';

const initialState = {
    userName: '',
    checkAdmin: false
}

const userNameSlice = createSlice ({
    initialState,
    name: 'username',
    reducers: {
        login: (state, data) => {
            state.userName = data.payload;
            state.checkAdmin = state.userName.includes(ADMIN)
        },
        logout: (state) => {
            state.userName = initialState.userName
        }
    }
})

export const userNameActions = userNameSlice.actions;
export const userNameReduser = userNameSlice.reducer;