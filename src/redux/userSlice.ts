import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    password: null,
    loading: false,
    isAuth: false,
    users:{
        userEmail:"test@test.com",
        userPassword:"123456"
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setLogin: (state) => {
            if(state.users.userEmail === state.email && state.users.userPassword === state.password){
                state.isAuth = true;
                console.log("Login success");
                
            }  else {
                state.isAuth = false;
                console.log("Login failed");
            }
        },
    },
}); 

export const { setEmail, setPassword, setLoading, setLogin } = userSlice.actions;

export default userSlice.reducer;