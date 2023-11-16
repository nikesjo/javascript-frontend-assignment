import React, { useEffect } from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Posts from './Posts'
import { useArticles } from '../../contexts/ArticleContext'
import { Link, useParams } from 'react-router-dom'

const Details = () => {
  const { article, getArticle, clearArticle } = useArticles()
  const {id} = useParams()

  useEffect(() => {
    getArticle(id)
    
    return () => clearArticle()
  }, [])

  return (
    <section className="news-details">
      <div className="container">
          <div className="content">
            <div className="left-side">
              {
                article ? 
                (
                  <div className="article">
                    <SectionTitle description={article.title} />
                    <div className="article-details">{article.published}<i className="fa-solid fa-circle"></i>{article.category}<i className="fa-solid fa-circle"></i>{article.author}</div>
                    <img src={article.imageUrl} />
                    <article>
                      <p>{article.content}</p>
                      <p>
                        Nunc viverra imperdiet enim. Fusce est. 
                        Vivamus a tellus.Pellentesque habitant morbi tristique senectus et netus et malesuada 
                        fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. 
                        In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, 
                        pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
                        purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra 
                        imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus 
                        et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                      </p>
                      <p>
                        Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                        Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. 
                        Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                      </p>
                      <div className="quote">
                        <i className="fa-sharp fa-solid fa-quote-left"></i>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. 
                        Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo 
                        magna eros quis urna.
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. 
                        Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo 
                        magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant 
                        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      </p>
                    </article>
                    <div className="categories">
                      <Link to='/'>Digitalization</Link>
                      <Link to='/'>School</Link>
                      <Link to='/'>IT</Link>
                      <Link to='/'>Design</Link>
                      <Link to='/'>Work</Link>
                      <Link to='/'>Tech</Link>
                    </div>
                  </div>
                )
                :
                (
                  <div>Laddar...</div>
                )
              }
            </div>
            <div className="right-side">
              <form id="searchBox" method="post">
                <i className="fa-regular fa-magnifying-glass"></i>
                <input className="form-input" type="search" id="search" name="search" title="Search" placeholder="Type to search..." tabIndex="1" />
              </form>
              <div className="recent-posts">
                <h3>Recent Posts</h3>
                <Posts title="How To Blow Through Capital At An Incredible Rate" date="Jan 14, 2020" />
                <Posts title="Design Studios That Everyone Should Know About? " date="Jan 14, 2020" />
                <Posts title="How did we get 1M+ visitors in 30 days without anything!" date="Jan 14, 2020" />
                <Posts title="Figma On Figma: How We Built Our Website Design System" date="Jan 14, 2020" />
              </div>
              <div className="categories">
                <h3>Categories</h3>
                <div className="category">
                  <Link to='/'>Technology - <span>20 Posts</span></Link>
                  <Link to='/'>Freelancing - <span>07 Posts</span></Link>
                  <Link to='/'>Writing - <span>16 Posts</span></Link>
                  <Link to='/'>Marketing - <span>11 Posts</span></Link>
                  <Link to='/'>Business - <span>35 Posts</span></Link>
                  <Link to='/'>Education - <span>14 Posts</span></Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Details