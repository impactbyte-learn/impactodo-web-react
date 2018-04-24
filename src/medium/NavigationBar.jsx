import React from "react";
import styled from "styled-components";

import NavLink from "../small/NavLink";

const StyledNavigationBar = styled.h1`
  font-weight: bold;
  color: #800000;
  margin: 0.5em 1em;
`;

const NavigationBar = props => {
  return (
    <StyledNavigationBar {...props}>
      <NavLink />
    </StyledNavigationBar>
  );
};

export default NavigationBar;