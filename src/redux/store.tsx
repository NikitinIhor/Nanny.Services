import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlise";

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});
