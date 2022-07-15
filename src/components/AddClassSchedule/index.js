import React from "react";
import styled from "styled-components";

import Button from "../Button";
import PageTitle from "../PageTitle";

const TitleWrapper = styled.div`
  display: flex;
`;

export default function AddClassSchedule() {
  return (
    <>
      <TitleWrapper>
        <PageTitle>Add class schedule</PageTitle>
      </TitleWrapper>
      <>
        <Button>Save</Button>
      </>
    </>
  );
}
