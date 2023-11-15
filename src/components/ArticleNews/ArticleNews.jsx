import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import Article from './Article'
import { Link } from 'react-router-dom'

const ArticleNews = () => {
  return (
    <section className="article-and-news">
        <div className="container">
            <div className="content">
                <SectionTitle title="Article & News" description="Get Every Single Articles & News" />
                <Button type="transparent" text="Browse Articles" url='/news' />
            </div>
            <div className="articles-and-news">
                <Article />
            </div>
            <div className="center-content">
                <Link to='/' className="active"><i className="fa-solid fa-circle"></i></Link>
                <Link to='/'><i className="fa-solid fa-circle"></i></Link>
                <Link to='/'><i className="fa-solid fa-circle"></i></Link>
                <Link to='/'><i className="fa-solid fa-circle"></i></Link>
                <Link to='/'><i className="fa-solid fa-circle"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default ArticleNews