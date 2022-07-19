import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const XButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .font-xmark {
    // 고정된 버튼 위치 만들기
    position: absolute;
    bottom: 60px;
    left: 65px;
    background-color: var(--color-dark-gray);
    border-radius: 50%;
    color: var(--color-light-gray);
    z-index: 1;
  }

  &:hover {
    cursor: pointer;

    .font-xmark {
      background-color: var(--color-black);
    }
  }
`;

export default function XButton() {
  return (
    <XButtonWrapper>
      <FontAwesomeIcon icon={faXmark} className="font-xmark" />
    </XButtonWrapper>
  );
}
