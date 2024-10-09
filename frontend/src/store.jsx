import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.jsx";
import useReducer from "./slices/userSlice.jsx";
import photoReducer from "./slices/photoSlice.jsx"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: useReducer,
    photo: photoReducer,
  },
});
