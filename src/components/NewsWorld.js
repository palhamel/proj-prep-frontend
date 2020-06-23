import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import '../pages/kitlist_style.css'
import { newsApiKey } from '../apiKeys'

export const NewsWorld = () => {
  const apiURL = `https://newsapi.org/v2/everything?q=COVID&sortBy=publishedAt&apiKey=${newsApiKey}&pageSize=5&page=1&sources=bbc-news&language=en`
  const [newsWorld, setNews] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setNews(json.articles))
  }, [apiURL])

  return (
    <main className="kits-container">
      <h2>Nyheter från BBC News om Covid</h2>
      {newsWorld.map((news) => (
        <article className="kit-card effect2" key={news.publishedAt}>
          <p className="kit-details">
            {dayjs(news.publishedAt).format('YYYY-MM-DD, HH:MM')}
          </p>
          <p className="kit-description text-highlight">{news.title}</p>
          <section>
            <a
              className="link-text-inline"
              href={news.url}
              target="_blank"
              rel="noopener noreferrer">
              Läs mer - (BBC News)
            </a>
          </section>
        </article>
      ))}
    </main>
  )
}
