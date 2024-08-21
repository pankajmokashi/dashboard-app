import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openDrawer: (state) => {
      state.isOpen = true;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
