import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PageTitle from "../PageTitle/index";
import Button from "../Button/index";
import Calendar from "../Calendar/index";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 25px;
`;

export default function ClassSchedule() {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/schedule");
  };

  return (
    <>
      <TitleContainer>
        <PageTitle>Class schedule</PageTitle>
        <Button onClick={handleClickButton}>Add Class Schedule</Button>
      </TitleContainer>
      <Calendar />
    </>
  );
}
