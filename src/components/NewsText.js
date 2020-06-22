import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
// import { Link } from "react-router-dom";
import '../pages/kitlist_style.css'

// List all posts from API:
export const NewsText = () => {
  // URL to API as const:
  const apiURL = 'http://api.texttv.nu/api/get/108-112?app=apiexempelsidan'
  const [news, setNews] = useState([])

  // Checking API via Fetch and then map the info:
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setNews(json))
  }, [apiURL])
  // console.log(news);

  return (
    <div className="kits-container">
      <h2>Nyheter från SVT Text-TV:</h2>
      {news.map((news) => (
        <article className="kit-card effect2" key={news.id}>
          <p className="kit-details">
            {dayjs.unix(news.date_updated_unix).format('YYYY-MM-DD')}
          </p>
          <p className="kit-description text-highlight">{news.title}</p>
          <section>
            <a
              className="link-text-inline"
              href={news.permalink}
              target="_blank"
              rel="noopener noreferrer">
              Läs mer - (SVT Text)
            </a>
          </section>
        </article>
      ))}
    </div>
  )
}
