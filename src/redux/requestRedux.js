import { createSlice } from "@reduxjs/toolkit";

export const requestSlice = createSlice({
  name: "request",
  initialState: {
    requests: false,
    isFetchingReq: false,
    requestErr: false,
  },
  reducers: {
    //GET ALL
    getRequestStart: (state) => {
      state.isFetchingReq = true;
      state.requestErr = false;
    },
    getRequestSuccess: (state, action) => {
      state.isFetchingReq = false;
      state.Requests = action.payload;
    },
    getRequestFailure: (state) => {
      state.isFetchingReq = false;
      state.requestErr = true;
    },
    //DELETE
    deleteRequestStart: (state) => {
      state.isFetchingReq = true;
      state.requestErr = false;
    },
    deleteRequestSuccess: (state, action) => {
      state.isFetchingReq = false;
      state.requests.splice(
        state.requests.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteRequestFailure: (state) => {
      state.isFetchingReq = false;
      state.requestErr = true;
    },
    //UPDATE
    updateRequestStart: (state) => {
      state.isFetchingReq = true;
      state.requestErr = false;
    },
    updateRequestSuccess: (state, action) => {
      state.isFetchingReq = false;
      state.requests[
        state.requests.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.request;
    },
    updateRequestFailure: (state) => {
      state.isFetchingReq = false;
      state.requestErr = true;
    },
    //UPDATE
    addRequestStart: (state) => {
      state.isFetchingReq = true;
      state.requestErr = false;
      state.requests = false;
    },
    addRequestSuccess: (state, action) => {
      state.isFetchingReq = false;
      state.requests = action.payload;
    },
    addRequestFailure: (state) => {
      state.isFetchingReq = false;
      state.requestErr = true;
      state.requests = false;
    },
  },
});

export const {
  getRequestStart,
  getRequestSuccess,
  getRequestFailure,
  deleteRequestStart,
  deleteRequestSuccess,
  deleteRequestFailure,
  updateRequestStart,
  updateRequestSuccess,
  updateRequestFailure,
  addRequestStart,
  addRequestSuccess,
  addRequestFailure,
} = requestSlice.actions;

export default requestSlice.reducer;
