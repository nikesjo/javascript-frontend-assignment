import React from 'react'
import SectionTitle from './Generics/SectionTitle'

const Blog = () => {
  return (
    <section className="blog">
        <div className="container">
            <SectionTitle description="Our News & Articles" />
            <div>News från api</div>     
        </div>
    </section>
  )
}

export default Blog