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
      // 해당 배열에서 해당 요일만 제거
    },
  },
});

export const { addSchedule, deleteAllSchedule, deleteOnlySchedule } =
  scheduleSlice.actions;
export default scheduleSlice.reducer;
