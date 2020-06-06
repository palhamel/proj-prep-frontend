import React from 'react';
import styled from 'styled-components'

import { SocialFollow } from './SocialFollow'

export const Footer = () => {
  return (
    <Container>
      <FooterText>Probably the best website in the world</FooterText>
      <SocialFollow />
    </Container>
  )
}

export const Container = styled.div`
  text-align: center;
  border-bottom: 1px solid #EBEEEF;
  padding-top: 1px;
  margin: 10px;
`;
 
export const FooterText = styled.h3`
  font-weight: 100;
  font-size: 10px;
  color: #46539e;
  opacity: 40%;
`;