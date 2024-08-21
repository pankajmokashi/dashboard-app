import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Cloud Accounts",
    desc: "Total: 4, Connected: 2",
    category: "CSPM",
  },
  {
    id: 2,
    name: "Top 5 Namespace Specific alerts",
    desc: "",
    category: "CWPP",
  },
  {
    id: 3,
    name: "Policy Compliance",
    desc: "Compliant: 85%, Non-compliant: 15%",
    category: "CSPM",
  },
  {
    id: 4,
    name: "Workload Alerts",
    desc: "Protected: 75%, Unprotected: 25%",
    category: "CWPP",
  },
  {
    id: 5,
    name: "Image Risk Assessment",
    desc: "Critical: 250, High: 430, Medium: 790",
    category: "Image",
  },
  {
    id: 6,
    name: "Open Tickets",
    desc: "Total: 120, High Priority: 30",
    category: "Ticket",
  },
];

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    removeItems: (state, action) => {
      return state.filter((item) => !action.payload.includes(item.id));
    },
    onSearch: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      if (!searchTerm) {
        return initialState; // Return all data if search term is empty
      }
      return state.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm) ||
          item.desc.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { addItem, removeItem, removeItems, onSearch } = dataSlice.actions;

export default dataSlice.reducer;
