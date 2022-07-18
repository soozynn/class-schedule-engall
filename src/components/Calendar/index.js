import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import Day from "./Day";

const WeekCalendar = styled.div``;

const WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

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
