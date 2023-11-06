import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ArticleNews from '../components/ArticleNews'
import Details from '../components/Details'

const NewsDetails = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Breadcrumb heading="News & Articles" />
        <Details />
        <ArticleNews />
      </main>
      <Footer />
    </div>
  )
}

export default NewsDetails