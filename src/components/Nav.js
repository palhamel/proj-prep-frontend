import React from 'react';
import styled from 'styled-components';
// import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import bgImage from '../images/bg_img-750x750.png'

export const Nav = () => {
  return (
    <Container>
      <ContainerRight>
        <HeaderText><NavLink to="/">LOGO</NavLink></HeaderText>
      </ContainerRight>

      <ContainerLeft>
        <LinkText>
          <NavLink to="/kits"> Kits </NavLink>
          <NavLink to="/news"> News </NavLink>
          <NavLink to="/prepping"> Prepping </NavLink>
          <NavLink to="/weather"> Weather </NavLink>
        </LinkText>
      </ContainerLeft>

    </Container>
  );
};

// styled-components:
const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: #CBFF94; */
  background-image: url(${bgImage});
  background-size: auto;
  padding: 20px;
  margin: 0;
  height: 80px;
  @media (min-width: 668px) {
    height: 120px;
  },
`;
const ContainerRight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const ContainerLeft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* height: 120px; */
  width: auto;
`;

const HeaderText = styled.p`
  font-size: 28px;
  font-weight: 800;
  color: #efebe9;
  margin: 0px 0px 5px 0px;
  @media (min-width: 668px) {
    font-size: 34px;
  },
`;

const LinkText = styled.a`
  font-size: 18px;
  font-weight: 800;
  color: white;
  margin: 0;
  text-decoration: none;

  .active {
  color: rgb(189, 218, 0);
}
`;