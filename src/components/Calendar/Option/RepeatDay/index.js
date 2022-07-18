import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RepeatDayWrapper = styled.button`
  margin: 3px;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid var(--color-black);
  text-align: center;
  background: none;

  &:hover {
    color: var(--color-black);
    cursor: pointer;
  }
`;

export default function RepeatDay({ day }) {
  return <RepeatDayWrapper disabled>{day}</RepeatDayWrapper>;
}

RepeatDay.propTypes = {
  day: PropTypes.string.isRequired,
};
