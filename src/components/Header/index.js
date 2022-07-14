import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logoSrc from "../../assets/logo.png";

const HeaderContainer = styled.header`
  right: 0px;
  left: 0px;
  height: 70px;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: var(--color-sky-blue);
`;

const Logo = styled.img`
  width: 76px;
  max-width: 100%;
  height: auto;
  margin: 5px 0 0 20px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logoSrc} alt="logo" />
      </Link>
    </HeaderContainer>
  );
}
