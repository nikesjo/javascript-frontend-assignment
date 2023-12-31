import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Generics/Breadcrumb'
import ArticleNews from '../components/ArticleNews/ArticleNews'
import Details from '../components/NewsDetails/Details'

const NewsDetails = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="news">
        <Breadcrumb heading="News & Articles" />
        <Details />
        <ArticleNews />
      </main>
      <Footer />
    </div>
  )
}

export default NewsDetails