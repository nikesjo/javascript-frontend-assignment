import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import FeaturesBox from './FeaturesBox'

const Features = () => {
  return (
    <section className="features">
        <div className="container">
            <div className="title">
                <SectionTitle title="Features" description="Our Accounting is trusted by thousand of companies" />
                <Button type="yellow" text="Learn More" url="/" />
            </div>
            <div className="information-article">
                <FeaturesBox icon={<i className="fa-regular fa-handshake"></i>} title="Business Advice" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <FeaturesBox icon={<i className="fa-regular fa-lightbulb-on"></i>} title="Startup Business" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <FeaturesBox icon={<i className="fa-sharp fa-regular fa-chart-mixed-up-circle-dollar"></i>} title="Financial Advice" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <FeaturesBox icon={<i className="fa-regular fa-gear-complex"></i>} title="Risk Management" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            </div>
        </div>
    </section>
  )
}

export default Features