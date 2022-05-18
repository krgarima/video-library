import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "../features/like/like-slice";
import watchLaterReducer from "../features/watchLater/watchLater-slice";

export const store = configureStore({
  reducer: {
    likes: likesReducer,
    watchLater: watchLaterReducer,
  },
});
