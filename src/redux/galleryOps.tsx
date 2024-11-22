import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllGallery = createAsyncThunk(
  "gallery/getAll",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(
        "https://nannyservices-9f324-default-rtdb.europe-west1.firebasedatabase.app/babysitters.json"
      );
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
