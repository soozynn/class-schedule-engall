import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Title = styled.div`
  color: var(--color-black);
  font-size: var(--size-medium);
`;

export default function PageTitle({ children }) {
  return (
    <>
      <Title>{children}</Title>
    </>
  );
}

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
