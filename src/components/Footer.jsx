import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logotype-footer.svg'
import FooterNav from './FooterNav'

const Footer = () => {
  return (
    <footer>
      <section className="footer-section">
        <div className="container">
          <div className="logo">
            <Link to='/'><img src={Logo} alt="" /></Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Placeat obcaecati voluptas voluptates! Voluptates laborum 
              nam ratione minus necessitatibus, iure praesentium.
            </p>
          </div>
          <FooterNav url="/" title="Company" link1="About" link2="Features" link3="Works" link4="Career" />
          <FooterNav url="/" title="Help" link1="Customer Support" link2="Delivery Details" link3="Terms & Conditions" link4="Privacy Policy" />
          <FooterNav url="/" title="Resources" link1="Free eBooks" link2="Development Tutorial" link3="How to - Blog" link4="Youtube Playlist" />
          <FooterNav url="/" title="Link" link1="Free eBooks" link2="Development Tutorial" link3="How to - Blog" link4="Youtube Playlist" />
        </div>
      </section>
      <section className="copyright-section">
        <div className="container">
          <div className="copyright">&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</div>
          <div className="social-media">
            <Link to="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
            <Link to="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
            <Link to="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
            <Link to="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer