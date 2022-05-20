import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let encodedToken = "";

const initialState = {
  historyVideos: [],
  status: null,
};

export const addToHistory = createAsyncThunk(
  "history/addToHistory",
  async (video) => {
    try {
      encodedToken = localStorage.getItem("token");
      const res = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.history;
    } catch (error) {
      alert(error);
    }
  }
);

export const removeFromHistory = createAsyncThunk(
  "history/removeFromHistory",
  async (videoId) => {
    try {
      encodedToken = localStorage.getItem("token");
      const res = await axios.delete(`/api/user/history/${videoId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      return res.data.history;
    } catch (error) {
      alert(error);
    }
  }
);

export const clearHistory = createAsyncThunk(
  "history/removeFromHistory",
  async () => {
    try {
      encodedToken = localStorage.getItem("token");
      const res = await axios.delete(`/api/user/history/all`, {
        headers: {
          authorization: encodedToken,
        },
      });
      return res.data.history;
    } catch (error) {
      alert(error);
    }
  }
);

const historySlice = createSlice({
  name: "history",
  initialState,
  extraReducers: {
    [addToHistory.pending]: (state) => {
      state.status = "loading";
    },
    [addToHistory.fulfilled]: (state, action) => {
      state.historyVideos = action.payload;
      state.status = "success";
    },
    [addToHistory.rejected]: (state) => {
      state.status = "failed";
    },

    [removeFromHistory.pending]: (state) => {
      state.status = "loading";
    },
    [removeFromHistory.fulfilled]: (state, action) => {
      state.historyVideos = action.payload;
      state.status = "success";
    },
    [removeFromHistory.rejected]: (state) => {
      state.status = "failed";
    },

    [clearHistory.pending]: (state) => {
      state.status = "loading";
    },
    [clearHistory.fulfilled]: (state, action) => {
      state.historyVideos = action.payload;
      state.status = "success";
    },
    [clearHistory.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default historySlice.reducer;
