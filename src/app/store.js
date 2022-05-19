import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "../features/like/like-slice";
import watchLaterReducer from "../features/watchLater/watchLater-slice";
import playlistReducer from "../features/playlist/playlist-slice";
import deletePlaylistReducer from "../features/playlist/deletePlaylist-slice";

export const store = configureStore({
  reducer: {
    likes: likesReducer,
    watchLater: watchLaterReducer,
    playlists: playlistReducer,
    playlist: playlistReducer,
    wholePlaylist: playlistReducer,
    // playlistVideos: playlistReducer,
    deletePlaylist: deletePlaylistReducer,
    deleteVideos: deletePlaylistReducer,
  },
});
