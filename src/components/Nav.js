import React from 'react';
import styled from 'styled-components';
// import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <AppContainer>
      <h1><NavLink to="/">Logo here</NavLink></h1>

      <ul>
        <li>
          <NavLink to="/kits">Kits</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/prepping">Prepping</NavLink>
        </li>
        <li>
          <NavLink to="/weather">Weather</NavLink>
        </li>
      </ul>
    </AppContainer>
  );
};

// styled-components:
const AppContainer = styled.main`
  @media (min-width: 668px) {
  width: 600px;
  margin: 40px auto;
  },
`;
