import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlise";

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
