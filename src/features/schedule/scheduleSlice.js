import { createSlice } from "@reduxjs/toolkit";

const scheduleSlice = createSlice({
  name: "schedule",
  initialState: [],
  reducers: {
    addSchedule: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
      console.log(state);
    },
    deleteSchedule: (state, action) => {
      // const scheduleList = state.filter(
      //   (schedule) => schedule.id !== action.payload.id
      // );
      // return { ...state, scheduleList: [...scheduleList] };
    },
    editSchedule: (state, action) => {
      // const scheduleList = state.scheduleList.map((schedule) => {
      //   if (schedule.id === action.payload.id) {
      //     schedule = action.payload;
      //   }
      //   return schedule;
      // });
      // return { ...state, scheduleList: [...scheduleList] };
    },
  },
});

export const { addSchedule, deleteSchedule, editSchedule } =
  scheduleSlice.actions;
export default scheduleSlice.reducer;
