import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./posts/postSlice";

const store = configureStore({
  reducer: {
    post: postSlice,
  },
});

export default store;
