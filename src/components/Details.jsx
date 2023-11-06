import React from 'react'
import SectionTitle from './Generics/SectionTitle'
import Posts from './Posts'

const Details = () => {
  return (
    <section className="news-details">
      <div className="container">
          <div className="content">
            <div className="left-side">
              <SectionTitle description="Article name" />
              component
            </div>
            <div className="right-side">
              component
              <form id="searchBox" method="post">
                <i class="fa-regular fa-magnifying-glass"></i>
                <input className="form-input" type="search" id="search" name="search" title="Search" placeholder="Type to search..." tabIndex="1" />
              </form>
              <div className="recent-posts">
                <h3>Recent Posts</h3>
                <hr></hr>
                <Posts title="How To Blow Through Capital At An Incredible Rate" date="Jan 14, 2020" />
                <Posts title="Design Studios That Everyone Should Know About? " date="Jan 14, 2020" />
                <Posts title="How did we get 1M+ visitors in 30 days without anything!" date="Jan 14, 2020" />
                <Posts title="Figma On Figma: How We Built Our Website Design System" date="Jan 14, 2020" />
              </div>
              <div className="categories">
                <h3>Categories</h3>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Details