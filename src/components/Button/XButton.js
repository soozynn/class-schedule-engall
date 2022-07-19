import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const XButtonWrapper = styled.div`
  position: relative;

  .font-xmark {
    position: absolute;
    top: -40px;
    left: 100px;
    background-color: var(--color-dark-gray);
    padding: 2px 4px;
    border-radius: 45%;
    color: var(--color-light-gray);
    z-index: 10;
  }

  &:hover {
    .font-xmark {
      border: 1px solid var(--color-red);
      color: var(--color-red);
      cursor: pointer;
    }
  }
`;

export default function XButton({ onClick }) {
  return (
    <XButtonWrapper onClick={onClick}>
      <FontAwesomeIcon icon={faXmark} className="font-xmark" />
    </XButtonWrapper>
  );
}

XButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
