import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/images/article-image-1.png'
import image2 from '../assets/images/article-image-2.png'
import image3 from '../assets/images/article-image-3.png'
import image4 from '../assets/images/article-image-4.png'
import SectionTitle from './Generics/SectionTitle'

const ProjectCaseStudies = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <SectionTitle title="Project & Case Studies" description="Let´s Looks Our Global Projects" />
            <div className="project-and-cases">
                <Link className="project" to="/">
                    <img src={image1} alt="A mans hans reading a business paper" />
                    <h3>Grow your business</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </Link>
                <Link className="project" to="/">
                    <img src={image2} alt="Pink Apple products on a desk" />
                    <h3>Why your client needs a responsive website</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </Link>
                <Link className="project" to="/">
                    <img src={image3} alt="Desk with office supplies" />
                    <h3>Educate your employees to get better results</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </Link>
                <Link className="project" to="/">
                    <img src={image4} alt="Laptop with Business Intelligence Insights" />
                    <h3>Business Insights is a important piece of your business</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </Link>
            </div>
            <div className="center-content">
                <a className="btn-black" href="projects.html">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default ProjectCaseStudies