import React from 'react'
import { Home } from './pages/Home'
// Keeping it clean here
// const dotenv = require('dotenv').config()
require('dotenv').config()

export const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

