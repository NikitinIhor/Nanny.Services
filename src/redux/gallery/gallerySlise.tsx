import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllGallery } from "../gallery/galleryOps";
import { store } from "../store";

export type RootState = ReturnType<typeof store.getState>;

interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

interface GalleryItem {
  index: number;
  name: string;
  avatar_url: string;
  location: string;
  rating: number;
  price_per_hour: number;
  birthday: string;
  experience: string;
  kids_age: string;
  characters: string[];
  education: string;
  about: string;
  reviews: Review[];
}

interface GalleryState {
  galleryArr: GalleryItem[];
  favouriteArr: GalleryItem[];
  displayedItems: GalleryItem[];
  loading: boolean;
  error: boolean;
  itemsToDisplay: number;
  limit: number;
}

const initialState: GalleryState = {
  galleryArr: [],
  favouriteArr: [],
  displayedItems: [],
  loading: false,
  error: false,
  itemsToDisplay: 3,
  limit: 0,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    loadMoreItems: (state) => {
      const nextItems = state.galleryArr.slice(
        state.itemsToDisplay,
        state.itemsToDisplay + 3
      );
      state.displayedItems = [...state.displayedItems, ...nextItems];
      state.itemsToDisplay += 3;
    },
    addToFavouriteArr: (state, action: PayloadAction<string>) => {
      const itemToAdd = state.galleryArr.find(
        (el) => el.name === action.payload
      );

      if (itemToAdd) {
        const isAddedItem = state.favouriteArr.some(
          (el) => el.name === itemToAdd.name
        );

        if (!isAddedItem) {
          state.favouriteArr.push(itemToAdd);
        }
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllGallery.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        getAllGallery.fulfilled,
        (
          state,
          action: PayloadAction<{ limit: number; data: GalleryItem[] }>
        ) => {
          state.loading = false;
          state.galleryArr = action.payload.data;
          state.displayedItems = action.payload.data.slice(0, 3);
          state.limit = action.payload.limit;
          state.error = false;
        }
      )
      .addCase(getAllGallery.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { loadMoreItems, addToFavouriteArr } = gallerySlice.actions;

export const selectLoading = (state: RootState) => state.gallery.loading;
export const selectError = (state: RootState) => state.gallery.error;
export const selectGallery = (state: RootState) => state.gallery.displayedItems;
export const selectLimit = (state: RootState) => state.gallery.limit;
export const selectFavouriteArr = (state: RootState) =>
  state.gallery.favouriteArr;

export default gallerySlice.reducer;
