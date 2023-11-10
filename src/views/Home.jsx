import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import OurServices from '../components/OurServices/OurServices'
import Logos from '../components/Logos'
import Features from '../components/Features/Features'
import AboutCompany from '../components/AboutCompany'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import ProjectCaseStudies from '../components/ProjectCaseStudies/ProjectCaseStudies'
import MeetOurTeam from '../components/MeetOurTeam'
import Testimonial from '../components/Testimonial'
import ArticleNews from '../components/ArticleNews'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Showcase />
        <Logos />
        <Features />
        <AboutCompany />
        <OurServices />
        <WhyChooseUs />
        <ProjectCaseStudies />
        <MeetOurTeam />
        <Testimonial />
        <ArticleNews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Home