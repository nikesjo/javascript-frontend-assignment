import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logotype-footer.svg'

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
          <nav>
            <h4>Company</h4>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Career</a></li>
            </ul>
          </nav>
          <nav>
            <h4>Help</h4>
            <ul>
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Delivery Details</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
          </nav>
          <nav>
            <h4>Resources</h4>
            <ul>
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </nav>
          <nav>
            <h4>Link</h4>
            <ul>
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </nav>
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