import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { WEEK } from "../../constants";
import RepeatDay from "./RepeatDay";
import TimePicker from "./TimePicker";

const OptionContainer = styled.div``;

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

export default function Option() {
  const showRepeatDay = () => {
    return WEEK.map((day) => {
      return <RepeatDay day={day} key={uuidv4()} />;
    });
  };

  return (
    // 여기서 고른 값들을 정렬해서 전역상태에 넣기
    <OptionContainer>
      <StartTimeContainer>
        <OptionText>
          Start Time
          <br />
          (40분 수업)
        </OptionText>
        <TimePicker />
      </StartTimeContainer>
      <RepeatContainer>
        <OptionText>Repeat on</OptionText>
        <RepeatOn>{showRepeatDay()}</RepeatOn>
      </RepeatContainer>
    </OptionContainer>
  );
}
