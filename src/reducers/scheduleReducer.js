import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scheduleList: [],
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addSchedule: (state, action) => {
      state.scheduleList += action.payload.data;
    },
    deleteSchedule: (state, action) => {},
    editSchedule: (state, action) => {},
  },
});

export const scheduleActions = scheduleSlice.actions;
export default scheduleSlice.reducer;
