import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

import ClassTime from "../../ClassTime/index";

const DayContainer = styled.div`
  width: 12vw;
  height: 70vh;
  background-color: var(--color-white);
  border: 1px solid var(--color-light-gray);
  border-collapse: collapse;
  text-align: center;

  &:not(:first-child, :last-child) {
    border-left: none;
    border-right: none;
  }

  &:first-child {
    border-right: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-left: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const DayWrapper = styled.div`
  border-bottom: 1px solid var(--color-light-gray);
`;

const DayText = styled.p`
  font-size: var(--size-small);
`;

const ClassWrapper = styled.div`
  width: 100%;
  height: 85%;
`;

export default function Day({ day }) {
  const scheduleList = useSelector((state) => state.schedule);
  // const sortingSchedule = (a, b) => {
  //   a.meridiem.localeCompare(b.meridiem);
  // };

  return (
    <DayContainer>
      <DayWrapper>
        <DayText>{day}</DayText>
      </DayWrapper>

      <ClassWrapper>
        {scheduleList
          .filter((schedule) => schedule.repeat.includes(day))
          .sort((a, b) =>
            // a.hour - b.hour &&
            // a.minute > b.minute &&
            a.meridiem.localeCompare(b.meridiem)
          )
          .map((filteredSchedule) => {
            return <ClassTime key={uuidv4()} schedule={filteredSchedule} />;
          })}
      </ClassWrapper>
    </DayContainer>
  );
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
};
