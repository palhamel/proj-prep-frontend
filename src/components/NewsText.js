import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import '../pages/kitlist_style.css'

export const NewsText = () => {
  const apiURL = 'https://api.texttv.nu/api/get/108-115?app=apiexempelsidan'
  const [newsText, setNews] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setNews(json))
  }, [apiURL])

  return (
    <main className="kits-container">
      <h2>SVT Text-TV:</h2>
      {newsText.map((news) => (
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
    </main>
  )
}
