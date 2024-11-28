import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  posts: [],
  error: "",
};

export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);

  return response;
});

export const createPost = createAsyncThunk(
  "post/CreatePost",
  async (newPost) => {
    const response = await axios({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      data: newPost,
    });

    return response.data;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Get
    builder.addCase(fetchPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      (state.isLoading = false),
        (state.posts = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      (state.isLoading = false), (state.error = action.error.message);
    });

    //Post
    builder.addCase(createPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      (state.isLoading = false),
        state.posts.push(action.payload),
        (state.error = "");
    });
    builder.addCase(createPost.rejected, (state, action) => {
      (state.isLoading = false), (state.error = action.error.message);
    });
  },
});

export default postSlice.reducer;
