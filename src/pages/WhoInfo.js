import React from "react";
import { Link } from "react-router-dom";

import { NewsWho } from "../components/NewsWho";
import { CovidStats } from "../components/CovidStats";
// import { Covid19apiAll } from "../components/Covid19apiAll";
// import { Covid19api } from "../components/Covid19api";

import "./kitlist_style.css";

export const WhoInfo = () => {
  return (
    <div>
      <section className="container-page">
        <h2>WHO</h2>
        <div className="kits-container">
          <p>
            Världshälsoorganisationen, WHO, är FN:s fackorgan för hälsofrågor.
            Enligt WHO:s konstitution är målet att alla människor ska uppnå
            högsta möjliga hälsa, där hälsa definieras som ett tillstånd av
            fullständigt fysiskt, psykiskt och socialt välbefinnande
          </p>
          <p>
            <span className="text-highlight">
              Efter fågelinfluensan H5N1 utbrott 2005 införde WHO en
              bedömingslista i sex faser över en sjukdoms spridningsrisk.{" "}
            </span>
          </p>
          <p>
            Den 30 januari 2020, deklarerade WHO coronavirusutbrottet 2019–2020
            som internationellt hälsonödläge.
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
  );
};
