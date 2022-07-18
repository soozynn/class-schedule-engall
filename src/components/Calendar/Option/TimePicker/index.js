import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { HOUR } from "../../../constants";

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
    border-radius: 4px;
    border: 1px solid var(--color-dark-gray);
    color: var(--color-dark-gray);

    &:hover {
      color: var(--color-black);
      cursor: pointer;
    }
  }
`;

export default function TimePicker() {
  const showTheHours = () => {
    return HOUR.map((hour) => {
      return (
        <option value={hour} key={uuidv4()}>
          {hour}
        </option>
      );
    });
  };

  const showTheMinutes = () => {
    return HOUR.map((hour) => {
      return (
        <option value={hour} key={uuidv4()}>
          {hour}
        </option>
      );
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <SelectTime onChange={handleChange}>{showTheHours()}</SelectTime>
      {" : "}
      <SelectTime onChange={handleChange}>{showTheMinutes()}</SelectTime>
      <DayAndNight>
        <span>Am</span>
        <span>Pm</span>
      </DayAndNight>
    </>
  );
}
