import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../services/keys";

export const fetchMovies = createAsyncThunk(
  "search/searchMovies",
  async (text) => {
    let url = "https://www.omdbapi.com/";
    const response = await axios.get(
      `${url}?s=${text}&apikey=${API_KEY}&page=1`
    );
    if (response.data.Error) {
      return response.data.Error;
    }
    return response.data.Search;
  }
);

export const SearchSlice = createSlice({
  name: "search",
  initialState: {
    movieList: [],
    searchText: "",
    status: "none",
    error: null,
  },
  reducers: {
    storeMovies: (state, { payload }) => {
      state.movieList.push(payload);
    },
    setSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
    setDefaultStatus: (state, {payload}) => {
      state.status = payload.status;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.status = "loading";
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      if (Array.isArray(payload)) {
        state.status = "succeeded";
        state.movieList = payload;
      } else {
        state.status = "failed";
        state.error = payload;
      }
    },
    [fetchMovies.rejected]: (state, { error }) => {
      state.status = "failed";
      state.error = error.message;
    },
  },
});

export const { setSearchText, setDefaultStatus } = SearchSlice.actions;
export const getSearchText = (state) => state.search.searchText;
export const getStatus = (state) => state.search.status;
export const getMovies = (state) => state.search.movieList;
export default SearchSlice.reducer;
