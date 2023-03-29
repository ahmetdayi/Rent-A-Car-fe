import {createSlice} from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: "token",
    initialState: {
        token: null,
        isLoggedIn: false,
        customerId: null

    },
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.customerId = action.payload.customerId
            state.isLoggedIn = true;
        },
        logout(state) {
            state.token = null;
            state.isLoggedIn = false;
            state.customerId=null;
        },
    },

});

export const loginActions = LoginSlice.actions;
export default LoginSlice;