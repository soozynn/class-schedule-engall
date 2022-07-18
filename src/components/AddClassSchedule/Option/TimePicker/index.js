import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { HOUR } from "../../../constants";
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
      border: 1px solid var(--color-black);
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
    return MINUTES.map((minute) => {
      return (
        <option value={minute} key={uuidv4()}>
          {minute}
        </option>
      );
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    // save 누를 시 해당 옵션 값들이 다 저장되어야함
  };

  return (
    <form onChange={handleChange}>
      <SelectTime>{showTheHours()}</SelectTime>
      {" : "}
      <SelectTime>{showTheMinutes()}</SelectTime>
      <DayAndNight>
        <button>Am</button>
        <button>Pm</button>
      </DayAndNight>
    </form>
  );
}
