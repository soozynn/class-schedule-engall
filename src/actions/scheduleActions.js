import { scheduleActions } from "../reducers/scheduleReducer";

function addSchedule() {
  return async (dispatch) => {
    let data = // 설정 값 받아오기
      dispatch(scheduleActions.addSchedule({ data }));
  };
}

function deleteSchedule() {
  return async (dispatch) => {
    let data = // 삭제할 스케줄 값
      dispatch(scheduleActions.deleteSchedule({ data }));
  };
}

function editSchedule() {
  return async (dispatch) => {
    let data = // 수정할 스케줄 값
      dispatch(scheduleActions.editSchedule({ data }));
  };
}
