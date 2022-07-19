import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: var(--size-medium);
  z-index: 999;
  transition: all 0.3s;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 2em;
  border-radius: 5%;
  background: var(--color-white);
  text-align: center;
  transform: translate(-50%, -50%);

  * {
    margin: 30px;
  }
`;

const CloseButton = styled.button`
  width: 500px;
  border-radius: 4px;
  border: none;
  color: var(--color-dark-gray);
  line-height: 50px;
  text-align: center;
  font-size: 80%;

  &:hover {
    border: 1px solid var(--color-black);
    color: var(--color-black);
    cursor: pointer;
  }
`;

export default function Modal(props) {
  const { onClick, children } = props;

  return (
    <ModalBackground>
      <ModalContainer>
        <span>{children}</span>
        <CloseButton onClick={onClick}>확인</CloseButton>
      </ModalContainer>
    </ModalBackground>
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
