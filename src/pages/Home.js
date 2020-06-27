import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
// Navigation:
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { NotFound } from '../components/NotFound'
// Pages:
import { Start } from './Start'
import { KitList } from './KitList'
import { NewsList } from './NewsList'
import { Prepping } from './Prepping'
import { WhoInfo } from './WhoInfo'
import { Smhi } from './Smhi'
import { KitDetails } from './KitDetail'
import { Covid19apiAll } from '../components/Covid19apiAll'

export const Home = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Start />
          </Route>
          <Route path="/kits">
            <KitList />
          </Route>
          <Route path="/kit/:kitId">
            <KitDetails />
          </Route>
          <Route path="/news">
            <NewsList />
          </Route>
          <Route path="/prepping">
            <Prepping />
          </Route>
          <Route path="/who">
            <WhoInfo />
          </Route>
          <Route path="/smhi">
            <Smhi />
          </Route>
          <Route path="/worldstat">
            <Covid19apiAll />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  )
}

const AppContainer = styled.main`
  @media (min-width: 668px) {
    max-width: 900px;
    margin: 0px auto;
  }

  @media (min-width: 900px) {
    max-width: auto;
    margin: 0px auto;
  }
`
