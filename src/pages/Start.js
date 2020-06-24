import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faUmbrella } from '@fortawesome/free-solid-svg-icons'

export const Start = () => {
  return (
    <main>
      <section className="container-page">
        <h2>
          Förberedd för oväder och strömavbrott!
          <FontAwesomeIcon icon={faUmbrella} size="1x" />
          {' '}
          <FontAwesomeIcon icon={faBolt} size="1x" />
        </h2>

        <p>
          Människan blir mer och mer utsatt och sårbar i samhället, den moderna
          infrastrukturen och teknikens framfart gör oss mer och mer beroende.
        </p>
        <p>
          <span className="text-highlight">
            Vad händer när vi blir strömlösa, insnöade eller översvämmade?
          </span>

        </p>

        <section className="text-box-focus">
          <h1>
            En bra början kan vara att se till att det finns ett alternativt
            sätt att laga mat hemma.
          </h1>
        </section>
        <p>
          Naturligtvis kan man aldrig vara helt förberedd på en kris eftersom vi inte säkert kan veta 
          hur och när den kommer att uppstå eller vilka följder den får. Däremot går det att förbereda sig. 
        </p>
        <p>
          Både individ och samhälle ska alltså vara förberedda på oväntade, större händelser.
        </p>
      </section>
    </main>
  )
}
