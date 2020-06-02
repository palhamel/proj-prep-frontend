import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import av alla delarna
import { Nav } from './components/Nav'
import { Start } from './pages/Start'
import { Kits } from 'pages/Kits'
import { News } from 'pages/News'
import { Prepping } from 'pages/Prepping'
import { Weather } from 'pages/Weather'

export const App = () => {
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
      </main>
    </BrowserRouter>
  )
};
