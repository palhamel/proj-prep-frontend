import React from "react";
import { Link } from "react-router-dom";

// import './backbutton_style.css'

export const ButtonBack = () => {
  return (
    <section >
      <Link to="/kits">
        <div
          className="back-button"
          role="button"
          tabIndex="0"
          aria-pressed="false"
        >
          {" "}
          <p>Tillbaka till listan</p>
        </div>
      </Link>
    </section>
  );
};
