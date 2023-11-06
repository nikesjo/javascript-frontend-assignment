import React from 'react'
import image1 from '../assets/images/news-1.png'
import image2 from '../assets/images/news-2.png'
import image3 from '../assets/images/news-3.png'
import SectionTitle from './Generics/SectionTitle'

const ArticleNews = () => {
  return (
    <section className="article-and-news">
        <div className="container">
            <div className="content">
                <SectionTitle title="Article & News" description="Get Every Single Articles & News" />
                <a className="btn-transparent" href="#">Browse Articles <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <div className="articles-and-news">
                <a className="article" href="#">
                    <div className="date-box">
                        <span>25</span>
                        <p>Mar</p>
                    </div>
                    <img src={image1} alt="" />
                    <p>Business</p>
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </a>
                <a className="article" href="#">
                    <div className="date-box">
                        <span>17</span>
                        <p>Mar</p>
                    </div>
                    <img src={image2} alt="" />
                    <p>Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </a>
                <a className="article" href="#">
                    <div className="date-box">
                        <span>13</span>
                        <p>Mar</p>
                    </div>
                    <img src={image3} alt="" />
                    <p>Business</p>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </a>
            </div>
            <div className="center-content">
                <a className="active" href="#"><i className="fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-solid fa-circle"></i></a>
            </div>
        </div>
    </section>
  )
}

export default ArticleNews