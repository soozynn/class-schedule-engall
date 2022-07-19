import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedule: [],
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addSchedule: (state, action) => {
      state.schedule.push(action.payload);
    },
    deleteAllSchedule: (state, action) => {
      const scheduleId = action.payload;

      state.schedule = state.schedule.filter(
        (schedule) => schedule.id !== scheduleId
      );
    },
    deleteOnlySchedule: (state, action) => {
      // const scheduleId = action.payload;
      // state.schedule = state.schedule.filter(
      //   (schedule) => schedule.id !== scheduleId
      // );
    },
  },
});

export const { addSchedule, deleteAllSchedule, deleteOnlySchedule } =
  scheduleSlice.actions;
export default scheduleSlice.reducer;
