import { createSlice } from "@reduxjs/toolkit";

export const ratingSlice = createSlice({
  name: "rating",
  initialState: {
    ratings: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getRatingtart: (state) => {
      state.isFetching = true;
      state.ratings=[]
      state.error = false;
    },
    getRatinguccess: (state, action) => {
      state.isFetching = false;
      state.ratings = action.payload;
      
    },
    getRatingFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addRatingSuccess: (state, action) => {
        state.isFetching = false;
        state.ratings.unshift(action.payload);
        state.error = false;
      },
  },
});

export const {
  getRatingtart,
  getRatinguccess,
getRatingFailure,
addRatingSuccess,
 
} = ratingSlice.actions;

export default ratingSlice.reducer;
