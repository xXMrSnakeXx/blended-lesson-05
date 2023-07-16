import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "c34efdc8ec4d43dfa0a3980567efbefd";

axios.defaults.baseURL = "https://api.opencagedata.com/geocode/v1/json";

export const fetchCurrensyPosition = createAsyncThunk(
  "fetch/position",
  async (credential, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedRate = state.rate;
    if (persistedRate === null) {
      try {
        const { data } = await axios.get(
          `?q=${credential.lat}+${credential.long}&key=${API_KEY}`
        );
        return data.results[0].annotations.currency.iso_code;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
