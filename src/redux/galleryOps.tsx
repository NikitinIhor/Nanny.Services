import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://drive.google.com/file/d/1GXsIq4lyqLdnIcL2WafhYlGFpy8h5oyh";

export const getAllGallery = createAsyncThunk(
  "gallery/getAll",
  async (_, thunkApi) => {
    try {
      const res = await axios.get("/view");
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
