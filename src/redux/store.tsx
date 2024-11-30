import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import galleryReducer from "./gallery/gallerySlise";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["gallery", "auth"],
};

const persistedReducer = persistReducer(persistConfig, galleryReducer);

export const store = configureStore({
  reducer: {
    gallery: persistedReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: ["auth.error"],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
