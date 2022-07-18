import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

import ClassTime from "../ClassTime/index";

const DayContainer = styled.div`
  width: 12vw;
  height: 70vh;
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  text-align: center;
`;

const DayWrapper = styled.p`
  font-size: var(--size-small);
`;

const ClassWrapper = styled.div`
  width: 100%;
  height: 85%;
`;

export default function Day({ day }) {
  const schedule = useSelector((state) => state.schedule);

  return (
    <DayContainer>
      <DayWrapper>{day}</DayWrapper>
      <ClassWrapper>
        {/* {schedule[day] &&
          schedule[day].map((time) => {
            return <ClassTime key={uuidv4()} class={time} />;
          })} */}
      </ClassWrapper>
    </DayContainer>
  );
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
};
