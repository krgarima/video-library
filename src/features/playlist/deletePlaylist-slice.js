import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let encodedToken = "";

const initialState = {
  deletePlaylists: [],
  deleteVideos: [],
  status: null,
};

export const deletePlaylist = createAsyncThunk(
  "playlist/deletePlaylist",
  async (playlistId) => {
    try {
      encodedToken = localStorage.getItem("token");
      const res = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      return res.data.playlists;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteVideo = createAsyncThunk(
  "playlist/deleteVideo",
  async (list) => {
    const [playlistId, videoId] = list;
    try {
      encodedToken = localStorage.getItem("token");
      const res = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.playlist;
    } catch (error) {
      console.log(error);
    }
  }
);

const deletePlaylistSlice = createSlice({
  name: "deletePlaylist",
  initialState,
  extraReducers: {
    [deletePlaylist.pending]: (state) => {
      state.status = "loading";
    },
    [deletePlaylist.fulfilled]: (state, action) => {
      state.deletePlaylists = action.payload;
      state.status = "success";
    },
    [deletePlaylist.rejected]: (state) => {
      state.status = "failed";
    },

    [deleteVideo.pending]: (state) => {
      state.status = "loading";
    },
    [deleteVideo.fulfilled]: (state, action) => {
      state.deleteVideos = action.payload;
      state.status = "success";
    },
    [deleteVideo.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default deletePlaylistSlice.reducer;
