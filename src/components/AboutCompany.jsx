import React from 'react'
import image from '../assets/images/about-company.png'
import img_backgroundlines from '../assets/images/lines-picture.svg'
import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'
import { Link } from 'react-router-dom'

const AboutCompany = () => {
  return (
    <section className="about-company">
        <div className="container">
            <img className="picture" src={image} alt="A woman holding a computer and smiling" />
            <img className="lines" src={img_backgroundlines} alt="" />
            <div className="text-box">
                <span>Samantha Brown, <span className="red-span">Founder</span></span>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
            <div className="content">
                <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts" />
                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                </div>
                <div className="buttons">
                    <Button type="black" text="Learn More " url="/services/about" />
                    <Link className="btn-transparent" to="/video"><i className="fa-sharp fa-solid fa-play"></i></Link>
                    <Link className="intro-video" to="/video">Intro Video</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutCompany