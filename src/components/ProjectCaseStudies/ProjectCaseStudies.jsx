import React from 'react'
import image1 from '../../assets/images/article-image-1.png'
import image2 from '../../assets/images/article-image-2.png'
import image3 from '../../assets/images/article-image-3.png'
import image4 from '../../assets/images/article-image-4.png'
import SectionTitle from '../Generics/SectionTitle'
import Project from './Project'
import Button from '../Generics/Button'

const ProjectCaseStudies = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <SectionTitle title="Project & Case Studies" description="Let´s Looks Our Global Projects" />
            <div className="project-and-cases">
                <Project image={image1} alt="A mans hans reading a business paper" title="Grow your business"  />
                <Project image={image2} alt="Pink Apple products on a desk" title="Why your client needs a responsive website" />
                <Project image={image3} alt="Desk with office supplies" title="Educate your employees to get better results" />
                <Project image={image4} alt="Laptop with Business Intelligence Insights" title="Business Insights is a important piece of your business" />
            </div>
            <div className="center-content">
                <Button type="black" url="/" text="All Recent Projects " />
            </div>
        </div>
    </section>
  )
}

export default ProjectCaseStudies