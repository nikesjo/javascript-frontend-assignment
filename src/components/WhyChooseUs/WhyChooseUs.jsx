import React from 'react'
import image from '../../assets/images/choose-us-image.png'
import SectionTitle from '../Generics/SectionTitle'
import Reasons from './Reasons'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
        <div className="box"></div>
        <div className="container">
            <div className="text-column">
                <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency" />
                <ul>
                    <Reasons icon={<i className="fa-light fa-thumbs-up"></i>} title="Process Excellence" text="Lorem, ipsum dolor sit amet consectetur." />
                    <Reasons icon={<i className="fa-light fa-gem"></i>} title="Strategic Planning" text="Lorem, ipsum dolor sit amet consectetur." />
                    <Reasons icon={<i className="fa-light fa-pen-nib"></i>} title="Experience Design" text="Lorem, ipsum dolor sit amet consectetur." />   
                    <Reasons icon={<i className="fa-light fa-head-side-gear"></i>} title="Artificial Inteligence" text="Lorem, ipsum dolor sit amet consectetur." />
                </ul>
            </div>
            <img src={image} alt="Two women talking to eachother" />
        </div>
    </section>
  )
}

export default WhyChooseUs