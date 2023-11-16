import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import ArticleList from './ArticleList'
import Pagination from './Pagination'


const Blog = () => {
  return (
    <section className="blog">
        <div className="container">
            <SectionTitle description="Our News & Articles" />
            <ArticleList />
            <Pagination />
        </div>
    </section>
  )
}

export default Blog