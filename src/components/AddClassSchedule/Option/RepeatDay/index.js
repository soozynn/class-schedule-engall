import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RepeatDayButton = styled.button`
  margin: 3px;
  padding: 10px 20px;
  background-color: var(--color-white);
  border-radius: 4px;
  border: 1px solid var(--color-dark-gray);
  text-align: center;

  &:hover {
    color: var(--color-black);
    cursor: pointer;
  }

  &.active {
    background-color: var(--color-dark-gray);
    color: var(--color-black);
  }
`;

export default function RepeatDay(props) {
  const { day, onClick, classSchedule } = props;

  const findRepeatDay = () => {
    return classSchedule.repeat.includes(day);
  };

  return (
    <RepeatDayButton
      onClick={onClick}
      className={findRepeatDay() ? "active" : null}
    >
      {day}
    </RepeatDayButton>
  );
}

RepeatDay.propTypes = {
  day: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classSchedule: PropTypes.shape({
    id: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    minute: PropTypes.string.isRequired,
    meridiem: PropTypes.string.isRequired,
    repeat: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
