import React from 'react'
import ContactBlock from './ContactBlock'

const ContactInformation = () => {
  return (
    <section className="contact-information">
        <div className="container">
            <ContactBlock icon={<i className="fa-solid fa-location-dot"></i>} title="Visit us" text1="Sveavägen 31" text2="111 34 STOCKHOLM" />
            <ContactBlock icon={<i className="fa-solid fa-phone"></i>} title="Call us" text1="+46 (8) 121 470 50" text2="+46 (8) 121 470 51" />
            <ContactBlock icon={<i className="fa-solid fa-envelope"></i>} title="Email us" text1="info@crito.com" text2="support@crito.com" />
        </div>
    </section>
  )
}

export default ContactInformation