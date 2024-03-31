import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/api/apiSlice";
import authReducer from "./slices/state/authSlice";
import boardReducer from "./slices/state/boardSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    boards: boardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
