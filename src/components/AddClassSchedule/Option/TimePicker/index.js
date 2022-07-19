import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { AM_HOUR } from "../../../constants";
import { PM_HOUR } from "../../../constants";
import { MINUTES } from "../../../constants";

const SelectTime = styled.select`
  margin: 5px;
  padding: 10px;
  border: 1px solid var(--color-dark-gray);
  border-radius: 4px;
`;

const DayAndNight = styled.span`
  margin-left: 10px;

  > * {
    margin: 2px;
    padding: 9px 20px;
    background-color: var(--color-white);
    border-radius: 4px;
    border: 1px solid var(--color-dark-gray);
    color: var(--color-dark-gray);

    &:hover {
      color: var(--color-black);
      cursor: pointer;
    }

    &.active {
      background-color: var(--color-dark-gray);
      color: var(--color-black);
    }
  }
`;

export default function TimePicker({ classSchedule, setClassSchedule }) {
  const handleChangeHour = (e) => {
    setClassSchedule((prevState) => ({
      ...prevState,
      hour: e.target.value,
    }));
  };

  const handleChangeMinute = (e) => {
    setClassSchedule((prevState) => ({
      ...prevState,
      minute: e.target.value,
    }));
  };

  const handleClickButton = (e) => {
    setClassSchedule((prevState) => ({
      ...prevState,
      meridiem: e.target.innerText,
    }));
  };

  return (
    <>
      <SelectTime value={classSchedule.hour} onChange={handleChangeHour}>
        {classSchedule.meridiem === "Am"
          ? AM_HOUR.map((hour) => {
              return (
                <option value={hour} name="hour" key={uuidv4()}>
                  {hour}
                </option>
              );
            })
          : PM_HOUR.map((hour) => {
              return (
                <option value={hour} name="hour" key={uuidv4()}>
                  {hour}
                </option>
              );
            })}
      </SelectTime>

      {" : "}

      <SelectTime value={classSchedule.minute} onChange={handleChangeMinute}>
        {MINUTES.map((minute) => {
          return (
            <option value={minute} name="minute" key={uuidv4()}>
              {minute}
            </option>
          );
        })}
      </SelectTime>

      <DayAndNight>
        <button
          type="button"
          className={classSchedule.meridiem === "Am" ? "active" : null}
          onClick={handleClickButton}
        >
          Am
        </button>
        <button
          type="button"
          className={classSchedule.meridiem === "Pm" ? "active" : null}
          onClick={handleClickButton}
        >
          Pm
        </button>
      </DayAndNight>
    </>
  );
}
