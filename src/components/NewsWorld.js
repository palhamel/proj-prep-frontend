import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
// import { Link } from "react-router-dom";
import '../pages/kitlist_style.css'
import { newsApiKey } from '../apiKeys'

// List all posts from API:
export const NewsWorld = () => {
  // URL to API as const:
  const apiURL = `https://newsapi.org/v2/everything?q=COVID&sortBy=publishedAt&apiKey=${newsApiKey}&pageSize=5&page=1&sources=bbc-news&language=en`
  const [news, setNews] = useState([])

  // Checking API via Fetch and then map the info:
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setNews(json.articles))
  }, [apiURL])
  // console.log("News API:", news);

  return (
    <div className="kits-container">
      <h2>Nyheter från BBC News om Covid</h2>
      {news.map((news) => (
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
    </div>
  )
}
