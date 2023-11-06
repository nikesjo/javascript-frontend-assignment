import React from 'react'
import image from '../assets/images/choose-us-image.png'
import SectionTitle from './Generics/SectionTitle'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
        <div className="box"></div>
        <div className="container">
            <img src={image} alt="Two women talking to eachother" />
            <div className="text-column">
                <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency" />
                <ul>
                    <li>
                        <div className="icons">
                            <i className="fa-light fa-thumbs-up"></i>
                        </div>
                        <div className="text">
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </li>
                    <li>
                        <div className="icons">
                            <i className="fa-light fa-gem"></i>
                        </div>
                        <div className="text">
                            <h3>Strategic Planning</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </li>
                    <li>
                        <div className="icons">
                            <i className="fa-light fa-pen-nib"></i>
                        </div>
                        <div className="text">
                            <h3>Experience Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </li>
                    <li className="last">
                        <div className="icons">
                            <i className="fa-light fa-head-side-gear"></i>
                        </div>
                        <div className="text">
                            <h3>Artificial Inteligence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs