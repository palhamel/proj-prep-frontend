import React, { useState, useEffect } from 'react'
import '../pages/kitlist_style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export const SmhiAlerts = () => {
  const apiURL = 'https://opendata-download-warnings.smhi.se/api/version/2/alerts.json'
  const [smhi, setSmhi] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setSmhi(json.alert))
  }, [apiURL])

  return (
    <main className="kits-container">
      <FontAwesomeIcon icon={faExclamationTriangle} size="4x" />
      <h1>SMHI - aktuella varningar:</h1>
      <p>
        Varningarna delas in i olika klasser beroende på hur allvarligt vädret
        väntas bli. Alla väderfenomen omfattas inte av alla tre nivåerna.
      </p>
      <section className="text-box-focus">
        <p>Vädervarning klass 1</p>
        <h4>
          Väderutveckling väntas som innebär vissa risker för allmänheten och
          störningar för en del samhällsfunktioner.
        </h4>
        <p>Vädervarning klass 2</p>
        <h4>
          Väderutveckling väntas som kan innebära fara för allmänheten, stora
          materiella skador och stora störningar i viktiga samhällsfunktioner.
          Allmänheten uppmanas att följa upp ny information på internet, radio
          eller TV.
        </h4>
        <p>Vädervarning klass 3</p>
        <h4>
          Mycket extremt väder väntas som kan innebära stor
          fara för allmänheten och mycket stora störningar i viktiga
          samhällsfunktioner. Allmänheten uppmanas att följa upp ny information på
          internet, radio eller TV.
        </h4>
      </section>
      {smhi.map((alert) => (
        <article className="kit-card-wide effect2" key={alert.identifier}>
          <p className="kit-description text-alert">
            <FontAwesomeIcon icon={faExclamationTriangle} size="sm" />
            {' '}
            {alert.info.eventCode[3].value}
          </p>
          <p className="kit-description">{alert.info.headline}</p>
          <p className="kit-details">{alert.info.description}</p>
          <section>
            <a
              className="link-text-inline"
              href={alert.info.web}
              target="_blank"
              rel="noopener noreferrer">
              Läs mer - (extern länk, SMHI)
            </a>
          </section>
        </article>
      ))}
    </main>
  )
}
