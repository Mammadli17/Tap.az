import { configureStore } from "@reduxjs/toolkit";
import { getData } from "./slices/GetData";


export const store = configureStore({
  reducer: {
    GetData:getData
  },
});

export type AppDispatch = typeof store.dispatch;
export type StateType = ReturnType<typeof store.getState>;