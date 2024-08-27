import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const login = createAsyncThunk(
    "user/login",
    async ({username, password}: {username: string, password: string}) => {

        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, username, password);
            const user = userCredential.user;
            const token = await user.getIdToken();
            
            const userData={
                token,
                user:user
            }

            return userData;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);



const initialState = {
    email: null,
    password: null,
    loading: false,
    isAuth: false,
    users:{
        userEmail:"test@test.com",
        userPassword:"123456"
    },
    extraReducers: (builder: import("@reduxjs/toolkit").ActionReducerMapBuilder<any>) => {
        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuth = true;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.isAuth = false;
        });
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