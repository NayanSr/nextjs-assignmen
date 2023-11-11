import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import cpBuilderReducer from "../redux/pcBuilder/pcBuilderSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    pc: cpBuilderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
