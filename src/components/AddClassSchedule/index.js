import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
    hour: "00",
    minute: "00",
    meridiem: "Pm",
    repeat: [],
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setShowsModal(!showsModal);
  };

  const handleClickSaveButton = () => {
    if (!classSchedule.repeat.length) {
      return setShowsModal(!showsModal);
    }

    /* 동일한 시간대 & 겹치는 시간대 스케줄 존재할 시 중복 스케줄 있다는 알림 모달 띄우기 */
    // if ()
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
