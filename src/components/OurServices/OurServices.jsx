import React from 'react'
import Button from '../Generics/Button'
import SectionTitle from '../Generics/SectionTitle'
import ServiceBox from './ServiceBox'
import img_backgroundlines from '../../assets/images/lines-2.svg'

const OurServices = () => {
  return (
    <section className="our-services">
        <img className="img_backgroundlines" src={img_backgroundlines} alt="" />
        <div className="container">
            <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting" />
            <div className="service-boxes">
                <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/businessadvice" />
                <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startupbusiness" />
                <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financialadvice" />
                <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagement" />
            </div>
            <div className="browse-services center-content">
                <Button type="black" text="Browse Services" url="/services" />
            </div>
        </div>
    </section>
  )
}

export default OurServices