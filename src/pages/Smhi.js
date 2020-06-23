import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'
import { SmhiMessage } from '../components/SmhiMessage'
import { SmhiAlerts } from '../components/SmhiAlerts'
import './kitlist_style.css'

export const Smhi = () => {
  return (
    <main>
      <section className="container-page">
        <h2>SMHI<FontAwesomeIcon icon={faCloudSunRain} size="1x" /></h2>
        <p>
          Vädret i Sverige övervakas dagligen av Sveriges meteorologiska och
          hydrologiska institut, SMHI. En av SMHI:s viktigaste uppgifter är att
          varna för oväder för att skydda liv och egendom.
        </p>
        <section className="kits-container">
          {/* <WeatherComp /> */}
          <SmhiMessage />
          <SmhiAlerts />
        </section>
      </section>
    </main>
  )
}
