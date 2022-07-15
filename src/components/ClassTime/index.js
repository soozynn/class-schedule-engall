import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import XButton from "./XButton";

const ClassTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  background-color: var(--color-light-gray);
  border-radius: 4px;
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
