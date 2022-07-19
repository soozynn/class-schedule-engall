import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { WEEK } from "../../constants";
import RepeatDay from "./RepeatDay";
import TimePicker from "./TimePicker";

const OptionContainer = styled.div`
  background-color: var(--color-white);
`;

const StartTimeContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const RepeatContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const OptionText = styled.span`
  margin: var(--size-small);
  font-weight: bold;
`;

const RepeatOn = styled.div`
  display: flex;
  color: var(--color-dark-gray);
`;

export default function Option(props) {
  const { classSchedule, setClassSchedule } = props;

  const handleClickRepeatButton = (e) => {
    if (classSchedule.repeat.includes(e.target.innerText)) {
      const repeat = classSchedule.repeat.filter(
        (item) => item !== e.target.innerText
      );

      setClassSchedule((prevState) => ({
        ...prevState,
        repeat,
      }));
    } else {
      setClassSchedule((prevState) => ({
        ...prevState,
        repeat: [...prevState.repeat, e.target.innerText],
      }));
    }
  };

  return (
    <OptionContainer>
      <StartTimeContainer>
        <OptionText>Start Time</OptionText>
        <TimePicker
          classSchedule={classSchedule}
          setClassSchedule={setClassSchedule}
        />
      </StartTimeContainer>
      <RepeatContainer>
        <OptionText>Repeat on</OptionText>
        <RepeatOn>
          {WEEK.map((day) => {
            return (
              <RepeatDay
                key={uuidv4()}
                day={day}
                onClick={handleClickRepeatButton}
                classSchedule={classSchedule}
              />
            );
          })}
        </RepeatOn>
      </RepeatContainer>
    </OptionContainer>
  );
}

Option.propTypes = {
  classSchedule: PropTypes.shape({
    id: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    minute: PropTypes.string.isRequired,
    meridiem: PropTypes.string.isRequired,
    repeat: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  setClassSchedule: PropTypes.func.isRequired,
};
