import React from "react";
// import dayjs from 'dayjs'

// import "./start_style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faUmbrella} from "@fortawesome/free-solid-svg-icons";


export const Start = () => {
  return (
    <div>
      <section className="container-page">
        {/* <time dateTime="" className="date">
          Local Date Here
        </time> */}

        <h2>Förberedd för oväder och strömavbrott! <FontAwesomeIcon icon={faUmbrella} size="md" /> <FontAwesomeIcon icon={faBolt} size="md" /></h2>
        
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
          Oavsett om du är en rutinerad prepper, en nyfiken nybörjare eller bara
          vill vara lite förberedd så har vi ett brett sortiment av smarta
          produkter som gör livet lite lättare om något oväntat händer.
        </p>
      </section>
    </div>
  );
};
