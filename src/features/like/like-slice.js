import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const encodedToken = localStorage.getItem("token");

const initialState = {
  likes: [],
  status: null,
};

export const addToLikes = createAsyncThunk(
  "likes/addToLikes",
  async (video) => {
    try {
      const res = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.likes;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeFromLiked = createAsyncThunk(
  "likes/removeFromLiked",
  async (videoId) => {
    try {
      const res = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      return res.data.likes;
    } catch (error) {
      console.log(error);
    }
  }
);

const likeSlice = createSlice({
  name: "likes",
  initialState,
  extraReducers: {
    [addToLikes.pending]: (state) => {
      state.status = "loading";
    },
    [addToLikes.fulfilled]: (state, action) => {
      state.likes = action.payload;
      state.status = "success";
    },
    [addToLikes.rejected]: (state) => {
      state.status = "failed";
    },

    [removeFromLiked.pending]: (state) => {
      state.status = "loading";
    },
    [removeFromLiked.fulfilled]: (state, action) => {
      state.likes = action.payload;
      state.status = "success";
    },
    [removeFromLiked.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default likeSlice.reducer;
