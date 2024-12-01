import { createSlice } from "@reduxjs/toolkit";
import { filterGallery } from "../gallery/galleryOps";

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

interface Filters {
  name: string;
  price_per_hour: { min: number; max: number };
  rating: { min: number; max: number };
  sortBy:
    | "A to Z"
    | "Z to A"
    | "Less than 10$"
    | "Greater than 10$"
    | "Popular"
    | "Not popular"
    | "Show all";
}

interface FilterState {
  gallery: GalleryItem[];
  filtredGallery: GalleryItem[];
  filters: Filters;
  loading: boolean;
  error: boolean;
}
const initialState: FilterState = {
  gallery: [],
  filtredGallery: [],
  filters: {
    name: "",
    price_per_hour: { min: 0, max: 100 },
    rating: { min: 0, max: 5 },
    sortBy: "Show all",
  },
  loading: false,
  error: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state: FilterState, action) {
      state.filters.sortBy = action.payload.sortBy;

      let filteredData = [...state.gallery];

      filteredData = filteredData.filter((item) => {
        const isPrice =
          item.price_per_hour >= state.filters.price_per_hour.min &&
          item.price_per_hour <= state.filters.price_per_hour.max;
        const isRating =
          item.rating >= state.filters.rating.min &&
          item.rating <= state.filters.rating.max;

        return isPrice && isRating;
      });

      switch (state.filters.sortBy) {
        case "A to Z":
          filteredData.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Z to A":
          filteredData.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "Greater than 10$":
          filteredData.sort((a, b) => a.price_per_hour - b.price_per_hour);
          break;
        case "Less than 10$":
          filteredData.sort((a, b) => b.price_per_hour - a.price_per_hour);
          break;
        case "Popular":
          filteredData.sort((a, b) => a.rating - b.rating);
          break;
        case "Not popular":
          filteredData.sort((a, b) => b.rating - a.rating);
          break;
        case "Show all":
          break;
        default:
          break;
      }

      state.filtredGallery = filteredData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterGallery.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(filterGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.gallery = action.payload;
        state.filtredGallery = action.payload;
        state.error = false;
      })
      .addCase(filterGallery.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
