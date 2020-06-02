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
    <main>
      Get started in src/app.js!
      <Nav />
      <Start />
      <Kits />
      <News />
      <Prepping />
      <Weather />
    </main>
  )
}
