import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { ButtonBack } from "../components/ButtonBack";
import { Link } from "react-router-dom";

// import styled from "styled-components";
// import { Button } from "react-bootstrap";

// import "./kits_style.css";
import "./kitlist_style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const KitDetails = () => {
  const { kitId } = useParams();
  // console.log(kidId)
  const KIT_API_URL = `http://localhost:8080/kit/${kitId}`;

  const [kitDetail, setDetail] = useState([]);

  useEffect(() => {
    fetch(KIT_API_URL)
      .then((res) => res.json())
      .then((json) => setDetail(json));
  }, [KIT_API_URL]);
  console.log(kitDetail);

  return (
    <div>
      <section className="container-page">
        <h2>Produktbeskrivning</h2>
        <div className="kits-container">
          <article className="kit-card-wide effect2" key={kitDetail._id}>
            <p className="kit-name">{kitDetail.name}</p>
            {/* <h4>Innehåll i lådan:</h4> */}
            <h4>Innehåll</h4>
            <p className="kit-description-details">{kitDetail.content}</p>

            <section className="kit-details-wrapper">
              <div className="kit-details-left">
                <p className="kit-details">
                  För antal personer: {kitDetail.for_persons}
                </p>
                <p className="kit-details">
                  För antal dagar: {kitDetail.for_days}
                </p>
                <p className="kit-details">
                  Ger kalorier/dag: {kitDetail.nutrition_cal}
                </p>
                <h4>Pris: {kitDetail.average_cost},-</h4>
                <p></p>
                <a
                  className="btn kit-link"
                  href={kitDetail.link_product}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Köp produkten här
                </a>
                <div className="kit-details-article">
                  <p className="kit-details-notes">
                    Artikel nr: {kitDetail.article_nr}
                  </p>
                  <p className="kit-details-notes">Varumärke: {kitDetail.brand}</p>
                </div>
              </div>

              <div className="kit-details-right">
                <img
                  src={kitDetail.link_image}
                  alt="Logo"
                  width="250"
                  margin="0px"
                />
                {/* <img
                  src="https://criseq.se/wp-content/uploads/2020/05/crisec-5.png"
                  alt="Logo"
                  width="200"
                  margin="0px"
                /> */}
              </div>
            </section>

            {/* <ButtonBack /> */}

            <Link to="/kits" className="kit-details kit-link">
              <div role="button" tabIndex="0" aria-pressed="false">
                {" "}
                <p><FontAwesomeIcon icon={faArrowLeft} size="sm" />Tillbaka till listan</p>
              </div>
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};
// styled-components:
// Kit Card component here

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${(props) => (props.primary ? "palevioletred" : "white")};
//   color: ${(props) => (props.primary ? "black" : "palevioletred")};
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;
