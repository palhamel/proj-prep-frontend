import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import '../pages/kitlist_style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export const SmhiMessage = () => {
  const apiURL = 'https://opendata-download-warnings.smhi.se/api/version/2/messages.json'
  const [smhi, setSmhi] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setSmhi(json.message))
  }, [apiURL])

  return (
    <main className="kits-container">
      <article className="kit-card-wide effect2">
        <p className="kit-description text-alert">
          <FontAwesomeIcon icon={faExclamationTriangle} size="sm" />
          Uppdaterat: 
          {dayjs(smhi.time_stamp).format('YYYY-MM-DD kl: hh:mm')}
        </p>
        <p className="smhi-message-text">{smhi.text}</p>
      </article>
    </main>
  )
}
