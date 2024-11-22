import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllGallery } from "./galleryOps";
import { store } from "./store";

export type RootState = ReturnType<typeof store.getState>;

interface GalleryItem {
  id: string;
  name: string;
  avatar_url: string;
  birthday: string;
  experience: string;
  reviews: Array<{ reviewer: string; rating: number; comment: string }>;
  education: string;
  kids_age: string;
  price_per_hour: number;
  location: string;
  about: string;
  characters: string[];
  rating: number;
}

interface GalleryState {
  galleryArr: GalleryItem[];
  loading: boolean;
  error: boolean;
}

const initialState: GalleryState = {
  galleryArr: [],
  loading: false,
  error: false,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllGallery.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        getAllGallery.fulfilled,
        (state, action: PayloadAction<GalleryItem[]>) => {
          state.loading = false;
          state.galleryArr = action.payload;
          state.error = false;
        }
      )
      .addCase(getAllGallery.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectLoading = (state: RootState) => state.gallery.loading;
export const selectError = (state: RootState) => state.gallery.error;
export const selectGallery = (state: RootState) => state.gallery.galleryArr;

export default gallerySlice.reducer;
