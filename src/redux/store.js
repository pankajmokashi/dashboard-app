import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import drawerReducer from "./slices/drawerSlice";
import tabReducer from "./slices/tabSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    drawer: drawerReducer,
    tabs: tabReducer,
  },
});
