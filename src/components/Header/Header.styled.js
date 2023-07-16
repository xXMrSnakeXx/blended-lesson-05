import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightblue;
`;

export const StyledLink = styled(NavLink)`
  margin-left: 25px;
  text-decoration: none;
  color: white;
  font-size: 24px;
  &.active {
    color: darkblue;
  }
`;
