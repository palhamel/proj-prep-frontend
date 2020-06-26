import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './kitlist_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'

export const KitList = () => {
  // const apiURL = 'http://localhost:8080/kits'
  const apiURL = 'https://proj-final-prep-backend.herokuapp.com/kits'
  const [kits, setKits] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setKits(json))
  }, [apiURL])

  return (
    <main>
      <section className="container-page">
        <h2>
          Krislåda
          <FontAwesomeIcon icon={faArchive} size="1x" />
        </h2>
        <p>
          Att ha en
          <a
            className="link-text-inline"
            href="https://www.raddningstjansten.com/sidor/hem--fritid/krisberedskap/klara-dig-sjalv-vid-en-kris/krislada---checklista.html"
            rel="noopener noreferrer"
            target="_blank">
            krislåda
          </a> 
          hemma för sin hemberedskap är viktigt för att kunna
          möta eventuella krissituationer eller andra störningar som kan uppstå.
          Det kan vara allt
          <span className="text-highlight">
            från strömavbrott till att vattnet slutar rinna ur kranen
          </span>
          eller att det blivit förorenat.
        </p>
        <p>Förutsättningar och behov ser olika ut, exempelvis om man bor på landet eller i en stad, i hus eller lägenhet. Även om det finns vissa grundläggande saker som är bra att ha för de allra flesta, exempelvis mat som tål rumstemperatur och är lätt att tillaga, så måste alla utgå ifrån egna förutsättningar och behov. Finns det husdjur? Behöver någon daglig medicinering eller finns det småbarn i hushållet? Man kan gå ihop om vissa saker och låna av varandra.</p>
        <p>
          Det minsta lilla man gjort för en bättre
          <a
            className="link-text-inline"
            href="https://www.rodakorset.se/vad-vi-gor/kris-och-katastrof/krisberedskap/gor-en-krisplan/"
            rel="noopener noreferrer"
            target="_blank">
            hemberedskap 
          </a> 
          kommer att vara värdefullt den dagen något händer. Ju fler som har packat en krislåda desto bättre kommer din kommun och landet som helhet att klara en kris och desto större möjligheter har vi att hjälpa andra.</p>
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
