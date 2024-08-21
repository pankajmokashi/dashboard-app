import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tabs",
  initialState: {
    activeTab: "CSPM",
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = tabSlice.actions;
export default tabSlice.reducer;
