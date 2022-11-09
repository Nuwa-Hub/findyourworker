import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    cities: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getcitiestart: (state) => {
      state.isFetching = true;
      state.cities=[]
      state.error = false;
    },
    getcitiesuccess: (state, action) => {
      state.isFetching = false;
      state.cities = action.payload;
      console.log(action.payload)
    },
    getcitiesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

  },
});

export const {
  getcitiestart,
  getcitiesuccess,
getcitiesFailure,
 
} = dataSlice.actions;

export default dataSlice.reducer;
