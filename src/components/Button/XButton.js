import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const XButtonWrapper = styled.div`
  position: fixed;

  .font-xmark {
    position: absolute;
    top: -2px;
    left: 75px;
    background-color: var(--color-dark-gray);
    padding: 2px 4px;
    border-radius: 45%;
    color: var(--color-light-gray);
  }

  &:hover {
    .font-xmark {
      border: 1px solid var(--color-black);
      color: var(--color-black);
      cursor: pointer;
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
