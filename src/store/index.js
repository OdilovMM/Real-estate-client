import { configureStore } from "@reduxjs/toolkit";
import root from "./root";

const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devTools: true,
});

export default store;
