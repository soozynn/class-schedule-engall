import { createSlice } from "@reduxjs/toolkit";
// import { scheduleActions } from ""

const initialState = {
  schedule: [],
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    added: (state, action) => {
      state.schedule += action.payload;
    },
    // deleted: (state, action) => {
    //   state.schedule += action.payload;
    // },
    // edit: (state, action) => {
    //   state.schedule += action.payload;
    // },
  },
});
