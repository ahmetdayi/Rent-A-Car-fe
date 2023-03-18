import {createSlice} from "@reduxjs/toolkit";

export const LoginSlice =createSlice({
    name: "token",
    initialState: {
        token : null,
        isLoggedIn:false
    },
    reducers:{
        login(state, action) {
            state.token=action.payload;
            state.isLoggedIn=true;
        },
        logout (state) {
            state.token=null;
            state.isLoggedIn=false;
        }
    },

});

export const loginActions = LoginSlice.actions;
export default LoginSlice;