import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Blog from '../components/Blog'
import Newsletter from '../components/Newsletter'
import Pagination from '../components/Generics/Pagination'

const News = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Breadcrumb heading="News & Articles" />
        <Blog />
        <Pagination />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default News