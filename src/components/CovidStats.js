import React, { useState, useEffect } from 'react'
import '../pages/kitlist_style.css'

export const CovidStats = () => {
  const apiURL = 'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats'
  const [covidStats, setCovidStats] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setCovidStats(json.data))
  }, [apiURL])

  return (
    <main className="kits-container">
      <h1>Covid-19</h1>
      <p>Aktuella globalt bekräftade fall:</p>
      <article className="kit-card-wide effect2">
        <p className="kit-details">
        Currently infected:
          {covidStats.currently_infected}
        </p>
        <p className="kit-details">
        Recovery cases:
          {covidStats.recovery_cases}
        </p>
        <p className="kit-details">
        Total cases:
          {covidStats.total_cases}
        </p>
        <p className="kit-details">
        Death cases:
          {covidStats.death_cases}
        </p>
      </article>
    </main>
  )
}
