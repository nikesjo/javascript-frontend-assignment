import React from 'react'
import Button from './Generics/Button'
import img_backgroundlines from '../assets/images/lines-1.svg'
import image from '../assets/images/showcase-image.svg'

const Showcase = () => {
  return (
    <section className="showcase-section">
      <img className="background-lines" src={img_backgroundlines} alt="" />
      <div className="container">
        <div className="content">
          <h1>We Provide The Best Bussiness Solutions</h1>
          <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
          <div className="button-links">
              <Button type="yellow" text="Get Consulting" url="/services/get-consulting" />
              <Button text="Learn More" url="/services/consulting" />
          </div>
        </div>
        <div className="image-column">
          <img src={image} alt="image of a man in a suit with a tablet" />
        </div>
      </div>
    </section>
  )
}

export default Showcase