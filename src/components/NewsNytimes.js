import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import '../pages/kitlist_style.css'
// import { newsApiKeyNyTimes } from '../apiKeys'

const apiKey = process.env.REACT_APP_API_KEY_NYT

export const NewsNytimes = () => {
  // const apiURL = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${newsApiKeyNyTimes}`
  const apiURL = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`
  const [newsNy, setNews] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setNews(json.results))
  }, [apiURL])
  console.log(newsNy)

  return (
    <main className="kits-container">
      <h2>NY Times, world news:</h2>
      {newsNy.slice(0, 5).map((news) => (
        <article className="kit-card effect2" key={news.published_date}>
          <p className="kit-details">
            {dayjs(news.published_date).format('YYYY-MM-DD')}
          </p>
          <p className="kit-description text-highlight">{news.title}</p>
          <section>
            <a
              className="link-text-inline"
              href={news.url}
              target="_blank"
              rel="noopener noreferrer">
              Läs mer - (NY Times)
            </a>
          </section>
        </article>
      ))}
    </main>
  )
}
