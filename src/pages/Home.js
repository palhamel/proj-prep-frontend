import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Navigation:
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
// Pages:
import { Start } from '../pages/Start'
import { Kits } from './Kits'
import { News } from './News'
import { Prepping } from './Prepping'
import { Weather } from './Weather'

export const Home = () => {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Start />
          </Route>
          <Route path="/kits" exact>
            <Kits />
          </Route>
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
      </main>
    </BrowserRouter>
  )
};
