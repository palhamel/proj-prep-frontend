import React, { useState, useEffect } from 'react'
import '../pages/kitlist_style.css'

export const Covid19apiAll = () => {
  const apiURL = 'https://api.covid19api.com/summary'
  const [covidStats, setCovidStats] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setCovidStats(json.Countries))
  }, [apiURL])

  return (
    <main>
      <section className="container-page">
        <h2>Covid-19 statistik</h2>
        <section className="kits-container">
          <p>Data från alla länder som idag rapporterar till WHO. Uppdateras löpande.</p>
          <h4>Källa: api.covid19api.com</h4>
          <h1>Senaste statistiken</h1>

          {covidStats.map((worldStats) => (
            <article className="kit-card effect2" key={worldStats.CountryCode}>
              <p className="kit-description text-highlight">
                {worldStats.Country}
              </p>
              <p className="kit-details">
                New deaths:
                {' '}
                {worldStats.NewDeaths}
              </p>
              <p className="kit-details">
                Total deaths:
                {' '}
                {worldStats.TotalDeaths}
              </p>
              <p className="kit-details">
                Total cases:
                {' '}
                {worldStats.TotalConfirmed}
              </p>
              <p className="kit-details">
                Recovery cases:
                {' '}
                {worldStats.TotalRecovered}
              </p>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}
