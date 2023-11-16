import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Generics/Breadcrumb'
import Blog from '../components/News/Blog'
import Newsletter from '../components/Newsletter'


const News = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Breadcrumb heading="News & Articles" />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default News