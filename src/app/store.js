import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "../features/like/like-slice";
import watchLaterReducer from "../features/watchLater/watchLater-slice";
import playlistReducer from "../features/playlist/playlist-slice";

export const store = configureStore({
  reducer: {
    likes: likesReducer,
    watchLater: watchLaterReducer,
    playlists: playlistReducer,
    playlist: playlistReducer,
    wholePlaylist: playlistReducer,
  },
});
