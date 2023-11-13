import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../assets/images/kristine-palmer.png'
import image2 from '../../assets/images/mark-aubri.png'
import image3 from '../../assets/images/kimberly-hansen.png'
import image4 from '../../assets/images/justin-willoman.png'
import Pictures from './Pictures'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'

const MeetOurTeam = () => {
  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="content">
                <SectionTitle title="Meet Our Team" description="Experience Team Members" />
                <Button type="transparent" text="Browse Team " url="/" />
            </div>
            <div className="team-pictures">
                <Pictures className="pictures" image={image1} name="Kristine Palmer" description="Chef Operation Officer" />
                <Pictures className="pictures" image={image2} name="Mark Aubri" description="Senior Consultant" />
                <Pictures className="pictures" image={image3} name="Kimberly Hansen" description="Senior Consultant" />
                <Pictures className="pictures" image={image4} name="Justin Willoman" description="Senior Tech Consultant" />
            </div>
            <div className="center-content">
                <Link to='/'><i className="fa-solid fa-circle"></i></Link>
                <Link to='/' className="active"><i className="fa-solid fa-circle"></i></Link>
                <Link to='/'><i className="fa-solid fa-circle"></i></Link>
                <Link to='/'><i className="fa-solid fa-circle"></i></Link>
                <Link to='/'><i className="fa-solid fa-circle"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default MeetOurTeam