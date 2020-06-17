import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

import bgImage from "../images/bg_img-1440x400.png";
import logo from "../images/Prepper_Stash_vit.png";

import "../components/nav_style.css";

export const Nav = () => {
  return (
    <Container>
      <ContainerRight>
        <img className="logo-image" src={logo} alt="Logo" />
        {/* <Logo /> */}
        <HeaderText>{/* <Link to="/">LOGO</Link> */}</HeaderText>
      </ContainerRight>

      <ContainerLeft>
        <HeaderText>
          <Link to="/">Start </Link>
          <Link to="/prepping">Prepping </Link>
          <Link to="/kits">Kits </Link>
          <Link to="/news">Nyheter </Link>
          <Link to="/smhi">SMHI </Link>
          <Link to="/who">WHO </Link>
        </HeaderText>
      </ContainerLeft>
    </Container>
  );
};

// styled-components:
const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${bgImage});
  /* background: #708A53; */
  /* background-size: 600px, 300px; */
  padding: 20px;
  margin: 0;
  height: 80px;
  @media (min-width: 668px) {
    height: 200px;
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

const HeaderText = styled.section`
  margin: 0px 0px 5px 0px;
  @media (min-width: 668px) {
    font-size: 34px;
  },
`;
