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
      console.log(state.scheduleList);
    },
    deleteSchedule: (state, action) => {
      // filter로 해당 스케줄 삭제
    },
    editSchedule: (state, action) => {},
  },
});

export const scheduleActions = scheduleSlice.actions;
export default scheduleSlice.reducer;
