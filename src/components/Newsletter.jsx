import React from 'react'
import img_backgroundlines from '../assets/images/lines-3.svg'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <img className="background-wavy-lines" src={img_backgroundlines} alt="" />
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form id="signupForm" method="post">
                <input className="form-input" type="email" id="email" name="email" title="Email" placeholder="username@domain.com" tabIndex="1" autoComplete="email" />
                <button className="btn-yellow" type="submit">Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>
            </form>
        </div>
    </section>
  )
}

export default Newsletter