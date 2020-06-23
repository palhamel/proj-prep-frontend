import React from 'react'

import './kitlist_style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

import { NewsText } from '../components/NewsText'
import { NewsWorld } from '../components/NewsWorld'

export const NewsList = () => {
  return (
    <main>
      <section className="container-page">
        <h2>
          Nyheter
          <FontAwesomeIcon icon={faNewspaper} size="1x" />
        </h2>
        <p>
          I en krissituation är det oerhört viktigt att rätt information når
          ut. Strömavbrott och telestörningar kan innebära att du inte når de
          nyhetsflöden och informationskällor du är van vid. Vid den sortens
          störningar är vanliga radiosändningar en säker källa till
          information.
        </p>
        <article className="kits-container">
          <p>
            <span className="text-alert">
              Att vara källkritisk innebär att värdera den information man tar
              del av.
            </span>
            Det betyder dels att förstå att vissa källor har högre trovärdighet
            än andra, dels att vara medveten om att avsändare av information har
            ett syfte. Varför finns informationen?
            <span className="text-alert">
              Vem tjänar på att informationen sprids?
            </span>
            Har den utformats för att få människor att agera på ett visst sätt?
          </p>
          <p>
            I allmänhet litar vi på våra vänner.
            Att dela information som inte är sann i sociala medier sprider
            inte bara osanningen vidare, det ger dessutom informationen tyngd
            genom att det är en vän som vidarebefordrar den.
            Det är lättare att vara kritisk mot information som sprids av
            okända.
          </p>
          <section>
            <NewsText />
            <NewsWorld />
          </section>
        </article>
      </section>
    </main>
  )
}
