import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let encodedToken = "";

const initialState = {
  watchLater: [],
  status: null,
};

export const addToWatchLater = createAsyncThunk(
  "watchLater/addToWatchLater",
  async (video) => {
    try {
      encodedToken = localStorage.getItem("token");
      const res = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.watchlater;
    } catch (error) {
      alert(error);
    }
  }
);

export const removeFromWatchLater = createAsyncThunk(
  "watchLater/removeFromWatchLater",
  async (videoId) => {
    try {
      encodedToken = localStorage.getItem("token");
      const res = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      return res.data.watchlater;
    } catch (error) {
      alert(error);
    }
  }
);

const watchLaterSlice = createSlice({
  name: "watchLater",
  initialState,
  extraReducers: {
    [addToWatchLater.pending]: (state) => {
      state.status = "loading";
    },
    [addToWatchLater.fulfilled]: (state, action) => {
      state.watchLater = action.payload;
      state.status = "success";
    },
    [addToWatchLater.rejected]: (state) => {
      state.status = "failed";
    },

    [removeFromWatchLater.pending]: (state) => {
      state.status = "loading";
    },
    [removeFromWatchLater.fulfilled]: (state, action) => {
      state.watchLater = action.payload;
      state.status = "success";
    },
    [removeFromWatchLater.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default watchLaterSlice.reducer;
