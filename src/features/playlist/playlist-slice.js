import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let encodedToken = "";

const initialState = {
  playlists: [], //create playlist
  playlist: [], //add to playlist
  wholePlaylist: [], //entire playlist
  status: null,
};

export const createPlaylist = createAsyncThunk(
  "playlist/createPlaylist",
  async (newPlaylistName) => {
    try {
      encodedToken = localStorage.getItem("token");
      const res = await axios.post(
        "/api/user/playlists",
        {
          playlist: {
            title: newPlaylistName,
            description: "New playlist created",
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.playlists;
    } catch (error) {
      alert(error);
    }
  }
);

export const addToPlaylist = createAsyncThunk(
  "playlist/addToPlaylist",
  async (list) => {
    const [video, _id] = list;
    try {
      encodedToken = localStorage.getItem("token");
      const res = await axios.post(
        `/api/user/playlists/${_id}`,
        { video },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.playlist;
    } catch (error) {
      alert(error);
    }
  }
);

export const getPlaylist = createAsyncThunk(
  "playlist/getPlaylist",
  async () => {
    try {
      encodedToken = localStorage.getItem("token");
      const res = await axios.get(`/api/user/playlists`, {
        headers: {
          authorization: encodedToken,
        },
      });
      return res.data.playlists;
    } catch (error) {
      alert(error);
    }
  }
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  extraReducers: {
    [createPlaylist.pending]: (state) => {
      state.status = "loading";
    },
    [createPlaylist.fulfilled]: (state, action) => {
      state.playlists = action.payload;
      state.status = "success";
    },
    [createPlaylist.rejected]: (state) => {
      state.status = "failed";
    },

    [addToPlaylist.pending]: (state) => {
      state.status = "loading";
    },
    [addToPlaylist.fulfilled]: (state, action) => {
      state.playlist = action.payload;
      state.status = "success";
    },
    [addToPlaylist.rejected]: (state) => {
      state.status = "failed";
    },

    [getPlaylist.pending]: (state) => {
      state.status = "loading";
    },
    [getPlaylist.fulfilled]: (state, action) => {
      state.wholePlaylist = action.payload;
      state.status = "success";
    },
    [getPlaylist.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default playlistSlice.reducer;
