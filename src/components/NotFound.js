import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/kitlist_style.css'

export const NotFound = () => {
  return (
    <section className="kits-container">
      <h1>404 - Något är knas!</h1>
      <Link to="/" className="link-text-inline">
        Klicka här och börja om från startsidan
      </Link>
    </section>
  )
}
