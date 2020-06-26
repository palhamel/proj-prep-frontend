import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import './kitlist_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const KitDetails = () => {
  const { kitId } = useParams()
  // const KIT_API_URL = `http://localhost:8080/kit/${kitId}`
  const KIT_API_URL = `https://proj-final-prep-backend.herokuapp.com/kit/${kitId}`
  const [kitDetail, setDetail] = useState([])

  useEffect(() => {
    fetch(KIT_API_URL)
      .then((res) => res.json())
      .then((json) => setDetail(json))
  }, [KIT_API_URL])

  return (
    <main>
      <section className="container-page">
        <h2>Produktbeskrivning</h2>
        <section className="kits-container">
          <article className="kit-card-wide effect2" key={kitDetail._id}>
            <p className="kit-name">{kitDetail.name}</p>
            <h4>Innehåll:</h4>
            <p className="kit-description-details">{kitDetail.content}</p>
            <section className="kit-details-wrapper">
              <div className="kit-details-left">
                <p className="kit-details">
                  För antal personer:
                  {' '}
                  {kitDetail.for_persons}
                </p>
                <p className="kit-details">
                  För antal dagar:
                  {' '}
                  {kitDetail.for_days}
                </p>
                <p className="kit-details">
                  Ger kalorier/dag:
                  {' '}
                  {kitDetail.nutrition_cal}
                </p>
                <h4> Pris: {kitDetail.average_cost} ,- </h4>
                <p />
                <a
                  className="btn kit-link"
                  href={kitDetail.link_product}
                  rel="noopener noreferrer"
                  target="_blank">
                  Köp produkten här
                </a>
                <aside className="kit-details-article">
                  <p className="kit-details-notes">
                    Artikel nr:
                    {' '}
                    {kitDetail.article_nr}
                  </p>
                  <p className="kit-details-notes">
                    Varumärke:
                    {kitDetail.brand}
                  </p>
                </aside>
              </div>

              <aside className="kit-details-right">
                <img
                  src={kitDetail.link_image}
                  className="kit-details-image"
                  alt="Logo"
                  width="250"
                  margin="0px" />
              </aside>
            </section>
            <Link to="/kits" className="kit-details kit-link">
              <p>
                <FontAwesomeIcon icon={faArrowLeft} size="sm" />
                Tillbaka till listan
              </p>

            </Link>
          </article>
        </section>
      </section>
    </main>
  )
}
