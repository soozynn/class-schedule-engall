import { createSlice, current } from "@reduxjs/toolkit";

const scheduleSlice = createSlice({
  name: "schedule",
  initialState: [],
  reducers: {
    addSchedule: (state, action) => {
      state.push(action.payload);
    },
    deleteAllSchedule: (state, action) => {
      const scheduleId = action.payload;

      return state.filter((schedule) => schedule.id !== scheduleId);
    },
    editSchedule: (state, action) => {
      // const { id, editSchedule } = action.payload;
      // const schedule = state.find((schedule) => schedule.id === id);
    },
  },
});

export const { addSchedule, deleteAllSchedule, editSchedule } =
  scheduleSlice.actions;
export default scheduleSlice.reducer;