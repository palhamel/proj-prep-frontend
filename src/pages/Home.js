import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components';

// Navigation:
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
// Pages:
import { Start } from '../pages/Start'
import { KitList } from './KitList'
import { News } from './News'
import { Prepping } from './Prepping'
import { Weather } from './Weather'

import { KitDetails } from './KitDetail'

export const Home = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Start />
          </Route>
          <Route path="/kits" exact>
            <KitList />
          </Route>
          <Route path="/kits/:kitId" exact>
            <KitDetails />
          </Route>
          {/* <Route path="/kits/:kitId" exact>
            <KitDetails />
          </Route> */}
          <Route path="/news" exact>
            <News />
          </Route>
          <Route path="/prepping" exact>
            <Prepping />
          </Route>
          <Route path="/weather" exact>
            <Weather />
          </Route>
        </Switch>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  )
};

// styled-components:
const AppContainer = styled.main`
  @media (min-width: 668px) {
  width: 600px;
  margin: 40px auto;
  },
`;

