import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { ButtonBack } from "../components/ButtonBack";
import { Link } from "react-router-dom";

// import styled from "styled-components";
// import { Button } from "react-bootstrap";

// import "./kits_style.css";
import "./kitlist_style.css";

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
        <h2>Innehåll</h2>
        <div className="kits-container">
          <article className="kit-card effect2" key={kitDetail._id}>
            <p className="kit-name">{kitDetail.name}</p>
            {/* <h4>Innehåll i lådan:</h4> */}
            <p className="kit-description-details">
              Innehåll: {kitDetail.content}
            </p>
            <p className="kit-details">
              För antal personer: {kitDetail.for_persons}
            </p>
            <p className="kit-details">För antal dagar: {kitDetail.for_days}</p>
            <p className="kit-details">
              Ger kalorier/dag: {kitDetail.nutrition_cal}
            </p>
            <h4>Pris: {kitDetail.average_cost},-</h4>
            <a
              className="btn kit-link"
              href={kitDetail.link_product}
              rel="noopener noreferrer"
              target="_blank"
            >
              Köp här hos Crisec
            </a>

            <img
              src="https://criseq.se/wp-content/uploads/2020/05/crisec-5.png"
              alt="Logo"
              width="200"
              margin="0px"
            ></img>

            <img
              src={kitDetail.link_image}
              alt="Logo"
              width="200"
              margin="0px"
            ></img>

            {/* <ButtonBack /> */}

            <Link to="/kits">
              <div role="button" tabIndex="0" aria-pressed="false">
                {" "}
                <p className="kit-details">Tillbaka till listan</p>
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
