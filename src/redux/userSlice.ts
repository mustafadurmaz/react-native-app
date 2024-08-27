import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const login = createAsyncThunk(
  "user/login",
  async ({ username, password }: { username: any; password: any }) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();

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
  email: null,
  password: null,
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
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
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

export const { setEmail, setPassword, setLoading } =
  userSlice.actions;

export default userSlice.reducer;
