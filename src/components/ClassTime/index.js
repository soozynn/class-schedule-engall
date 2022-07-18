import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import XButton from "../Button/XButton";

const ClassTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  background-color: var(--color-light-gray);
  border-radius: 4px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
    cursor: pointer;
  }
`;

const StartTime = styled.div`
  color: var(--color-dark-gray);
  font-size: var(--size-xsmall);
`;

const EndTime = styled.div`
  color: var(--color-dark-gray);
  font-size: var(--size-xsmall);
`;

export default function ClassTime(props) {
  const { startTime, endTime } = props;

  return (
    <ClassTimeContainer>
      <StartTime>
        {startTime}
        {" -"}
      </StartTime>
      <EndTime>{endTime}</EndTime>
      <XButton />
    </ClassTimeContainer>
  );
}

ClassTime.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
};
