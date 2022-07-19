import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { deleteSchedule } from "../../features/schedule/scheduleSlice";
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

export default function ClassTime({ schedule }) {
  const { hour, minute, meridiem } = schedule;

  const extractEndTime = () => {
    let endHour = Number(hour);
    let endMinute = minute;
    let endMeridiem = meridiem;

    if (minute + 40 > 60) {
      endMinute = 60 - minute;
      endHour += 1;
    } else {
      endMinute = Number(minute + 40);
    }

    if (Number(hour) === 11 && minute >= 20) {
      if (meridiem === "Am") {
        endMeridiem = "Pm";
      } else {
        endMeridiem = "Am";
      }
    }

    endHour = endHour === 0 ? "00" : endHour;

    return `${endHour}:${endMinute} ${endMeridiem}`;
  };

  const handleClickDeleteButton = () => {
    // id 이용해서 해당 class 삭제해주기
    // deleteSchedule(id);
  };

  return (
    <ClassTimeContainer>
      <StartTime>
        {hour}:{minute} {meridiem}
        {" -"}
      </StartTime>

      <EndTime>{extractEndTime()}</EndTime>

      <XButton onClick={handleClickDeleteButton} />
    </ClassTimeContainer>
  );
}

ClassTime.propTypes = {
  schedule: PropTypes.string.isRequired,
};
