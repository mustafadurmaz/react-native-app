import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebaseConfig';

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string, password: string }) => {
    console.log("email", email);
    console.log("password", password);
    
    try {
      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user:any = userCredential.user;
      // const token = await user.getIdToken();
      const token= user.stsTokenManager.accessToken;

      const userData = {
        token,
        user: user,
      };

      return userData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState = {
  loading: false,
  isAuth: false,
  token: null,
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (
    builder: import("@reduxjs/toolkit").ActionReducerMapBuilder<any>
  ) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      state.isAuth = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuth = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.isAuth = false;
      state.error = action.error.message;
    });
  },
});

export const { setLoading } =
  userSlice.actions;

export default userSlice.reducer;
