import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.button`
  padding: 20px 30px;
  border-radius: 4px;
  border: none;
  background-color: var(--color-blue);
  color: var(--color-white);
  font-size: var(--size-small);

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;
  }
`;

export default function Button({ children, handleClick }) {
  return <Text onClick={handleClick}>{children}</Text>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
