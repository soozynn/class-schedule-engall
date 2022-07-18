import { scheduleActions } from "../reducers/scheduleReducer";

export function addSchedule(schedule) {
  return (dispatch) => {
    console.log(schedule);
    dispatch(scheduleActions.addSchedule(schedule));
  };
}

export function deleteSchedule(schedule) {
  return (dispatch) => {
    dispatch(scheduleActions.deleteSchedule(schedule));
  };
}

export function editSchedule(schedule) {
  return (dispatch) => {
    dispatch(scheduleActions.editSchedule(schedule));
  };
}
