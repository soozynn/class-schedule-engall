import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { addSchedule } from "../../features/schedule/scheduleSlice";
import Button from "../Button/index";
import PageTitle from "../PageTitle/index";
import Option from "./Option/index";
import Modal from "../Modal/index";

const TitleWrapper = styled.div`
  display: flex;
  margin: 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 25px;
`;

export default function AddClassSchedule() {
  const [showsModal, setShowsModal] = useState(false);
  const [classSchedule, setClassSchedule] = useState({
    id: uuidv4(),
    hour: "01",
    minute: "00",
    meridiem: "Pm",
    repeat: [],
  });
  const scheduleList = useSelector((state) => state.schedule.schedule);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setShowsModal(!showsModal);
  };

  const handleClickSaveButton = () => {
    if (!classSchedule.repeat.length) {
      return setShowsModal(!showsModal);
    }

    const sameTimeList = scheduleList.filter(
      (schedule) =>
        schedule.hour === classSchedule.hour &&
        schedule.minute === classSchedule.minute &&
        schedule.meridiem === classSchedule.meridiem
    );

    const sameDayList = sameTimeList.map((schedule) => schedule.repeat);
    console.log(sameDayList);

    // const intersection = sameTimeList.filter((element) =>
    //   classSchedule.repeat.includes(element)
    // );

    // const sameScheduleObj = {};

    // for (let i = 0; i < sameTimeList.length; i++) {
    //   console.log(i, sameScheduleObj);
    //   if (!sameScheduleObj[sameTimeList[i]]) {
    //     const schedule = sameTimeList[i].repeat;
    //     sameScheduleObj[schedule] = i;
    //   }
    // }
    // console.log(sameScheduleObj);
    // for (let j = 0; j < classSchedule.repeat.length; j++) {
    //   if (sameScheduleObj[classSchedule.repeat[j]]) {
    //     console.log("중복발생");
    //     return (
    //       <Modal handleClickOk={handleCloseModal}>
    //         {`이번 주 ${sameTimeList[j]}에 동일한 시간대 스케줄이 존재합니다. 해당 요일은 제외해주세요.`}
    //       </Modal>
    //     );
    //   }
    // }
    dispatch(addSchedule(classSchedule));
    navigate("/");
  };

  return (
    <>
      <TitleWrapper>
        <PageTitle>Add class schedule</PageTitle>
      </TitleWrapper>

      <Option
        classSchedule={classSchedule}
        setClassSchedule={setClassSchedule}
      />

      <ButtonWrapper>
        <Button onClick={handleClickSaveButton}>Save</Button>
      </ButtonWrapper>

      {showsModal && (
        <Modal handleClickOk={handleCloseModal}>요일을 선택해주세요.</Modal>
      )}
    </>
  );
}
