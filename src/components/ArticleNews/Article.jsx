import React, { useEffect } from 'react'
import { useArticles } from '../../contexts/ArticleContext'
import { Link } from 'react-router-dom'


const Article = () => {   
  const { articles, getArticles } = useArticles()
 
  useEffect(() => {
    getArticles(3)
  }, [])
  
  return (
    <div className="article">
      {
        articles.map((article) => (
          <div key={article.id}>
            <Link to={`/newsdetails/${article.id}`}>
              <div className="article-image">
                <img src={article.imageUrl} />
                <div className="orange-box">
                  <div className="day">{new Date(article.published).getDate()}</div>
                  <div className="month">{new Date(article.published).toLocaleString('default', { month: 'short' })}</div>
                </div>
              </div>
              <p>{article.category}</p>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </Link>
          </div>
        ))
      }
    </div>  
  )
}

export default Article