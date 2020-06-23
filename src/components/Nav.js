import React from 'react'
import { Link } from 'react-router-dom'
// import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import bgImage from '../images/bg_img-1440x400.png'
import logo from '../images/Prepper_Stash_vit.png'

import './nav_style.css'
// import { GlobalStyle } from "lib/Global";

export const Nav = () => {
  return (
    <Container>
      <ContainerRight>
        <img className="logo-image" src={logo} alt="Logo" />
        {/* <Logo /> */}
        {/*         <HeaderText>
          <Link to="/">LOGO</Link>
        </HeaderText> */}
      </ContainerRight>

      <ContainerLeft>
        <SloganTextContainer>
          <p className="slogan-text">
            "Change the way you live, closer to nature."
          </p>
        </SloganTextContainer>
        <HeaderText>
          <Link className="nav-text" to="/"> Start </Link>
          <Link className="nav-text" to="/prepping"> Prepping </Link>
          <Link className="nav-text" to="/kits"> Krislådor </Link>
          <Link className="nav-text" to="/news"> Nyheter </Link>
          <Link className="nav-text" to="/smhi"> SMHI </Link>
          <Link className="nav-text" to="/who"> WHO </Link>
        </HeaderText>
      </ContainerLeft>
    </Container>
  )
};

// styled-components:
const Container = styled.section`
  display: flex;
  flex-direction: column
  justify-content: space-between;
  /* align-items: center;
  align-content: center; */
  background-image: url(${bgImage});
  background-size: 700px 300px;
  padding: 10px;
  margin: 0px;
  height: 100px;
  width: 700px;
  @media (min-width: 668px) {
    height: 150px;
    /* align-items: flex-start; */
    align-content: center;
    width: auto;
  }
  @media (min-width: 900px) {
    height: 200px;
    background-size: 100% 100%;
    padding-top: 50px;
  }
`

const ContainerRight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: auto;
  margin: 30px 0px 0px 0px;
  padding: 0px 0px 0px 20px;
  @media (min-width: 668px) {
    /* margin-left: auto; */
    /* width: 700px; */
  }
  @media (min-width: 900px) {
    /* margin-left: 50px;
    width: 700px; */
  }
`

const ContainerLeft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* height: 120px; */
  width: auto;
  @media (min-width: 668px) {
    margin-left: 30px;
    /* width: 700px; */
  }
  @media (min-width: 900px) {
    /* margin-right: 40px;
    margin-top: 50px; */
  }
`

const HeaderText = styled.section`
  margin: 0px 0px 5px 0px;
  @media (min-width: 668px) {
    font-size: 34px;
  },
`

const SloganTextContainer = styled.section`
  margin: 20px 0px 0px 20px;
  width: 250px;
  color: white;
  /* visibility: hidden; */
  /* height: 20px; */

  @media (min-width: 668px) {
    visibility: visible;
    /* padding-left: 30px;
    padding-bottom: 30px; */
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 60px 0px;
    width: 350px;
    height: 40px;
  }
  @media (min-width: 900px) {
    visibility: visible;
    margin: 0px 0px 30px 0px;
    padding: 0px 0px 80px 0px;


    /* padding-left: 30px; */
    /* height: 80px; */
  }
`
