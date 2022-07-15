import React from "react";
import styled from "styled-components";

import PageTitle from "../PageTitle/index";
import Button from "../Button/index";
import ClassTime from "../ClassTime";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 25px;
`;

export default function ClassSchedule() {
  return (
    <>
      <TitleContainer>
        <PageTitle>Class schedule</PageTitle>
        <Button>Add Class Schedule</Button>
      </TitleContainer>
      <ClassTime />
    </>
  );
}
