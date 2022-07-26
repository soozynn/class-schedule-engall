import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { deleteAllSchedule } from "../../features/schedule/scheduleSlice";
import XButton from "../Button/XButton";
import Modal from "../Modal";
import { useDispatch } from "react-redux";

const ClassTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  margin: 15px;
  padding: 10px 20px;
  background-color: var(--color-light-gray);
  border: 1px solid ${(props) => props.color};
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
  const { color, schedule } = props;
  const { hour, minute, meridiem, id } = schedule;

  const [showsModal, setShowsModal] = useState(false);
  const [showsEditModal, setIsShowsEditModal] = useState(false);
  const dispatch = useDispatch();

  const extractEndTime = () => {
    let endHour = Number(hour);
    let endMinute;
    let endMeridiem = meridiem;

    if (Number(minute) + 40 >= 60) {
      endMinute = 40 - (60 - Number(minute));
      endHour += 1;
    } else {
      endMinute = Number(minute) + 40;
    }

    if (Number(hour) === 11 && Number(minute) >= 20) {
      if (meridiem === "Am") {
        endMeridiem = "Pm";
      } else {
        endMeridiem = "Am";
      }
    }

    endHour = endHour < 10 ? `0${endHour}` : endHour;
    endMinute = endMinute < 10 ? `0${endMinute}` : endMinute;

    return `${endHour}:${endMinute} ${endMeridiem}`;
  };

  const handleClickClass = () => {
    setIsShowsEditModal(!showsEditModal);
  };

  const deleteSchedule = () => {
    dispatch(deleteAllSchedule(id));
    setShowsModal(!showsModal);
  };

  const handleClickDeleteButton = () => {
    setShowsModal(!showsModal);
  };

  return (
    <ClassTimeContainer color={color} onClick={handleClickClass}>
      <StartTime>
        {hour}:{minute} {meridiem}
        {" -"}
      </StartTime>

      <EndTime>{extractEndTime()}</EndTime>

      <XButton onClick={handleClickDeleteButton} />

      {showsModal && (
        <Modal
          handleClickOk={deleteSchedule}
          handleClickCancel={handleClickDeleteButton}
          showsModal={showsModal}
        >
          해당 스케줄을 정말 삭제하시겠습니까?
        </Modal>
      )}
    </ClassTimeContainer>
  );
}

ClassTime.propTypes = {
  schedule: PropTypes.shape({
    hour: PropTypes.string.isRequired,
    minute: PropTypes.string.isRequired,
    meridiem: PropTypes.string.isRequired,
    repeat: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
  }),
};
