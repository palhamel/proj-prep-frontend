import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'

import { NewsWho } from '../components/NewsWho'
import { CovidStats } from '../components/CovidStats'
// import { Covid19apiAll } from "../components/Covid19apiAll";
// import { Covid19api } from "../components/Covid19api";

import './kitlist_style.css'

export const WhoInfo = () => {
  return (
    <div>
      <section className="container-page">
        <h2>
          WHO 
          <FontAwesomeIcon icon={faGlobeEurope} size="1x" />
        </h2>
        <div className="kits-container">
          <p>
            Världshälsoorganisationen, WHO, är FN:s fackorgan för hälsofrågor.
            Enligt WHO:s konstitution är målet att alla människor ska uppnå
            högsta möjliga hälsa, där hälsa definieras som ett tillstånd av
            fullständigt fysiskt, psykiskt och socialt välbefinnande. Efter
            fågelinfluensan H5N1 utbrott 2005 införde WHO en bedömingslista i
            sex faser över en sjukdoms spridningsrisk.
          </p>
          <p>
            På
            <a
              className="link-text-inline"
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen"
              rel="noopener noreferrer"
              target="_blank">
              WHO:s hemsida
            </a>
            finns ytterligare information om coronaviruset och det
            internationella samarbetet för att begränsa utbrottet och dess
            verkningar.
            <a
              className="link-text-inline"
              href="https://www.folkhalsomyndigheten.se/"
              rel="noopener noreferrer"
              target="_blank">
              Folkhälsomyndigheten
            </a>
            följer utvecklingen kontinuerligt och uppdaterar sin hemsida
            löpande.
          </p>

          {/* <p>
            Hello.site{" "}
            <a className="link-text-inline" href="http://www.google.com">
              Google
            </a>
            ? It's a good website!
          </p> */}
          <p>
            UD har öppnat ett särskilt nummer för frågor kring coronaviruset och
            resande: 08-405 92 00. För akuta konsulära nödsituationer ringer man
            som vanligt UD:s konsulära nödjour på: 08-405 50 05.
          </p>
          {/* <p>
            <span className="text-highlight">
              Efter fågelinfluensan H5N1 utbrott 2005 införde WHO en
              bedömingslista i sex faser över en sjukdoms spridningsrisk.{" "}
            </span>
          </p> */}
          <p>
            <span className="text-alert">
              Den 30 januari 2020, deklarerade WHO coronavirusutbrottet
              2019–2020 som internationellt hälsonödläge.
            </span>
          </p>
          <CovidStats />
          {/* <Covid19api /> */}
          {/* <Covid19apiAll /> */}

          <Link className="kit-link" to="/worldstat">
            <div className="btn">Statistik - Alla länder</div>
          </Link>
          <NewsWho />
        </div>
      </section>
    </div>
  )
}
