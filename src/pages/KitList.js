import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './kitlist_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'

export const KitList = () => {
  const apiURL = 'http://localhost:8080/kits'
  const [kits, setKits] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setKits(json))
  }, [apiURL])
  console.log(kits)

  return (
    <main>
      <section className="container-page">
        <h2>
          Krislådor
          <FontAwesomeIcon icon={faArchive} size="1x" />
        </h2>
        <p>
          Att ha en krislåda hemma för sin hemberedskap är viktigt för att kunna
          möta eventuella krissituationer eller andra störningar som kan uppstå.
          Det kan vara allt
          <span className="text-highlight">
            från strömavbrott till att vattnet slutar rinna ur kranen
          </span>
          eller att det blivit förorenat.
        </p>
        <section className="text-box-focus">
          <h1>
            Allt du behöver för att klara dig:
          </h1>
        </section>
        <article className="kits-container">
          {kits.map((kit) => (
            <article className="kit-card-wide effect2" key={kit._id}>
              <p className="kit-name">{kit.name}</p>
              <p className="kit-description">{kit.description}</p>
              <section>
                <p className="kit-details">
                  För antal personer:
                  {kit.for_persons}
                </p>
                <p className="kit-details">
                  För antal dagar: {kit.for_days}
                </p>
                <p className="kit-details">
                  Typ: {kit.category}
                </p>
                <p className="kit-details">
                  Pris: {kit.average_cost} ,- </p>
              </section>
              <Link className="btn kit-link" to={`kit/${kit._id}`}>
                Läs mer om innehåll
              </Link>
            </article>
          ))}
        </article>
      </section>
    </main>
  )
}
