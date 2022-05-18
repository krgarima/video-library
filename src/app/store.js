import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "../features/like/like-slice";

export const store = configureStore({
  reducer: {
    likes: likesReducer,
  },
});
