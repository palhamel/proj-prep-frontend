import React from "react";

import "./kitlist_style.css";

import { NewsText } from "../components/NewsText";
import { NewsWorld } from "../components/NewsWorld";

// List all posts from API:
export const NewsList = () => {
  return (
    <div>
      <section className="container-page">
        <h2>Nyheter</h2>
        <div className="kits-container">
          <p>
            I en krissituation är det oerhört viktigt att rätt information når
            ut. Strömavbrott och telestörningar kan innebära att du inte når de
            nyhetsflöden och informationskällor du är van vid. Vid den sortens
            störningar är vanliga radiosändningar en säker källa till
            information.
          </p>
          <p>
            <span className="text-highlight">
              Att vara källkritisk innebär att värdera den information man tar
              del av.{" "}
            </span>
            Det betyder dels att förstå att vissa källor har högre trovärdighet
            än andra, dels att vara medveten om att avsändare av information har
            ett syfte. Varför finns informationen?{" "}
            <span className="text-highlight">
              Vem tjänar på att informationen sprids?
            </span>
            Har den utformats för att få människor att agera på ett visst sätt?
          </p>
          <p>
            I allmänhet litar vi på våra vänner.{" "}
            <span className="text-highlight">
              Att dela information som inte är sann i sociala medier sprider
              inte bara osanningen vidare, det ger dessutom informationen tyngd
              genom att det är en vän som vidarebefordrar den.
            </span>{" "}
            Det är lättare att vara kritisk mot information som sprids av
            okända.
          </p>
          <NewsText />
          <NewsWorld />
        </div>
      </section>
    </div>
  );
};
