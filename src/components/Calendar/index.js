import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import Day from "./Day";
import { WEEK } from "../constants";

const WeekCalendar = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Calendar() {
  const showWeekCalendar = () => {
    return WEEK.map((day) => {
      return <Day day={day} key={uuidv4()} />;
    });
  };

  return (
    <>
      <WeekCalendar>{showWeekCalendar()}</WeekCalendar>
    </>
  );
}
