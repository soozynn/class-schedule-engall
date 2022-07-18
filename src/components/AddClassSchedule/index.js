import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../Button";
import PageTitle from "../PageTitle";
import Option from "./Option/index";

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
  // const [scheduleValue, setScheduleValue] = useState();
  const navigate = useNavigate();

  const handleClickSaveButton = () => {
    console.log("저장");
    // 버튼 클릭 시 값들 정렬하여 dispatch로 전역에 저장

    navigate("/");
  };

  return (
    <>
      <TitleWrapper>
        <PageTitle>Add class schedule</PageTitle>
      </TitleWrapper>
      <Option />
      <ButtonWrapper>
        <Button onClick={handleClickSaveButton}>Save</Button>
      </ButtonWrapper>
    </>
  );
}
