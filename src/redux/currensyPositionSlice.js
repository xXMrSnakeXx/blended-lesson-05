import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrensyPosition } from "./operations";

const currencyPositionSlice = createSlice({
  name: "position",
  initialState: { rate: null },
  extraReducers: (bilder) => {
    bilder.addCase(fetchCurrensyPosition.fulfilled, (state, action) => {
      if (action.payload === undefined) return;
      state.rate = action.payload;
    });
  },
});
export default currencyPositionSlice.reducer;
