import React from "react";
import { StyledLink, Wrapper } from "./Header.styled";

const Header = () => {
  return (
    <Wrapper>
      <StyledLink to="/"> Home</StyledLink>
      <StyledLink to="/convert"> Convert</StyledLink>
    </Wrapper>
  );
};

export default Header;
