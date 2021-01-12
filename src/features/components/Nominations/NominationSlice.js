import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const fetchList = createAsyncThunk(
  "nominations/getNominatedMovies",
  async () => {
    const response = JSON.parse(localStorage.getItem("nominatedList"));
    if (!response) {
      return [];
    } else {
      return response;
    }
  }
);

function updateStorage(item) {
  localStorage.setItem("nominatedList", JSON.stringify(item));
}

export const NominationSlice = createSlice({
  name: "nominations",
  initialState: {
    list: [],
    status: "unset",
    error: null,
  },
  reducers: {
    storeList: (state, { payload }) => {
      state.list.push(payload);
      updateStorage(state.list);
    },
    addItem: (state, { payload }) => {
      let item = _.find(state.list, (movie) => movie.Title === payload.Title);
      if (!item) {
        state.list.push(payload);
        updateStorage(state.list);
      }
    },
    removeItem: (state, { payload }) => {
      state.list = _.filter(
        state.list,
        (movie) => movie.Title !== payload.Title
      );
      updateStorage(state.list);
    },
  },
  extraReducers: {
    [fetchList.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchList.fulfilled]: (state, { payload }) => {
      state.status = "succeeded";
      state.list = payload;
    },
    [fetchList.rejected]: (state, { error }) => {
      state.status = "failed";
      state.error = error.message;
    },
  },
});

export const getList = state => state.nomination.list;

export const { addItem, removeItem } = NominationSlice.actions;

export default NominationSlice.reducer;
