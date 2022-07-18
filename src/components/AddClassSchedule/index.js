import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../Button";
import PageTitle from "../PageTitle";
import Option from "../Calendar/Option";

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
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/");
  };

  return (
    <>
      <TitleWrapper>
        <PageTitle>Add class schedule</PageTitle>
      </TitleWrapper>
      <Option />
      <ButtonWrapper>
        <Button handleClick={handleClickButton}>Save</Button>
      </ButtonWrapper>
    </>
  );
}
