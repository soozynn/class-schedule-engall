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
  const [showsWarning, setShowsWarning] = useState(false);
  const [duplicateDay, setDuplicateDay] = useState([]);
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

  const handleCloseWarning = () => {
    setShowsWarning(!showsWarning);
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
    const flatSameDayList = sameDayList.reduce(
      (acc, cur) => [...acc, ...cur],
      []
    );
    const sameSchedule = flatSameDayList.filter((day) =>
      classSchedule.repeat.includes(day)
    );
    const removedDuplication = [...new Set(sameSchedule)];

    if (sameSchedule.length) {
      setShowsWarning(!showsWarning);
      setDuplicateDay(removedDuplication);
      return;
    }

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
      {showsWarning && (
        <Modal handleClickOk={handleCloseWarning}>
          {`${duplicateDay} 에 같은 시간대 스케줄이 존재합니다. 해당 요일은 제외하고 선택해주세요.`}
        </Modal>
      )}
    </>
  );
}
