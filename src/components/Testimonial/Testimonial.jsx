import React from 'react'
import image1 from '../../assets/images/cassandra-warren.png'
import image2 from '../../assets/images/amanda-tulling.png'
import image3 from '../../assets/images/jack-mcdogglas.png'
import Review from './Review'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <SectionTitle title="Testimonial" description="What Our Client Says" />
        <div className="reviews">
          <Review 
            clientReview="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
            image={image1}
            name="Cassandra Warren"
            description="Business Manager, Dorfus" 
          />
          <Review 
            clientReview="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
            image={image2}
            name="Amanda Tulling"
            description="Senior Developer, Square" 
          />
          <Review 
            clientReview="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
            image={image3}
            name="Jack McDogglas"
            description="Key Account Manager, Gobona" 
          />
        </div>
        <div className="center-content">
          <Button type="black" text="All Reviews " url="/reviews" />
        </div>
      </div>
    </section>
  )
}

export default Testimonial