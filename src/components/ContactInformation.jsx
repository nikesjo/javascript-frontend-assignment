import React from 'react'

const ContactInformation = () => {
  return (
    <section className="contact-information">
        <div className="container">
            <div className="contact-block">
                <a className="btn-black" href="#"><i className="fa-solid fa-location-dot"></i></a>
                <div className="information">
                    <h2>Visit us</h2>
                    <p>Sveavägen 31</p>
                    <p>111 34 STOCKHOLM</p>
                </div>
            </div>
            <div className="contact-block">
                <a className="btn-black" href="#"><i className="fa-solid fa-phone"></i></a>
                <div className="information">
                    <h2>Call us</h2>
                    <p>+46 (8) 121 470 50</p>
                    <p>+46 (8) 121 470 51</p>
                </div>
            </div>
            <div className="contact-block">
                <a className="btn-black" href="#"><i className="fa-solid fa-envelope"></i></a>
                <div className="information">
                    <h2>Email us</h2>
                    <p>info@crito.com</p>
                    <p>support@crito.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactInformation