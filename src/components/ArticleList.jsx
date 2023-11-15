import React from 'react'
import { useArticles } from '../contexts/ArticleContext'
import { Link } from 'react-router-dom'

const ArticleList = () => {
    const { articles } = useArticles()
  return (
    <div className="articles">
        {
            articles.map(article => (
                <div key={article.id}>
                    <Link to={`/newsdetails/${article.id}`} className="article">
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

export default ArticleList