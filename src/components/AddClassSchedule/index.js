import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { addSchedule } from "../../actions/scheduleActions";
import Button from "../Button";
import PageTitle from "../PageTitle";
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
  const [classSchedule, setClassSchedule] = useState({
    hour: "00",
    minute: "00",
    meridiem: "Pm",
    repeat: [],
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickSaveButton = () => {
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
        {!classSchedule.repeat.length && <Modal />}
      </ButtonWrapper>
    </>
  );
}
