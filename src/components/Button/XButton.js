import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const XButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: var(--color-dark-gray);
  border-radius: 50%;

  .font-xmark {
    color: var(--color-light-gray);
  }

  &:hover {
    cursor: pointer;

    .font-xmark {
      color: var(--color-black);
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
