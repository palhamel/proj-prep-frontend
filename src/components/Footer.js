import React from 'react'
import styled from 'styled-components'

import { SocialFollow } from './SocialFollow'

export const Footer = () => {
  return (
    <FooterContainer>
      <SocialFollow />
      <FooterText>Probably the best Prepper Stash website in the world. Well there can be only one..</FooterText>
    </FooterContainer>
  )
}

export const FooterContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid #EBEEEF;
  padding-top: 1px;
  margin-top: 100px;
`

export const FooterText = styled.h3`
  font-weight: 100;
  font-size: 10px;
  color: #46539e;
  opacity: 40%;
  margin-bottom: 20px;
`
