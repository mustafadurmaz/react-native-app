import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    console.log("email", email);
    console.log("password", password);

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user: any = userCredential.user;
      // const token = await user.getIdToken();
      const token = user.stsTokenManager.accessToken;

      const userData = {
        token,
        user: user,
      };

      await AsyncStorage.setItem("userToken", token);

      return userData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

// Kullanıcı otomatik giriş işlemleri

export const autoLogin = createAsyncThunk("user/autoLogin", async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");

    if (token) {
      return token;
    } else {
      throw new Error("Token not found");
    }
  } catch (error) {
    throw error;
  }
});

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

    builder.addCase(autoLogin.pending, (state, action) => {
      state.loading = true;
      state.isAuth = false;
    });
    builder.addCase(autoLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuth = true;
      state.token = action.payload;
    });
    builder.addCase(autoLogin.rejected, (state, action) => {
      state.loading = false;
      state.isAuth = false;
      state.error = action.error.message;
    });
  },
});

export const { setLoading } = userSlice.actions;

export default userSlice.reducer;
