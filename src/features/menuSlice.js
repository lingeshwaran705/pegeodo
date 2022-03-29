import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menuSlice",
  initialState: { value: 0 },
  reducers: {
    open: (state) => {
      state.value = 1;
    },
    close: (state) => {
      state.value = 0;
    },
  },
});

export const { open, close } = menuSlice.actions;

export default menuSlice.reducer;
