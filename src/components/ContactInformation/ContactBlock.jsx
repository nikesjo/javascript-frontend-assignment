import React from 'react'
import { Link } from 'react-router-dom'

const ContactBlock = ({icon, title, text1, text2}) => {
  return (
    <div className="contact-block">
        <Link to='/' className="btn-black">{icon}</Link>
        <div className="information">
            <h2>{title}</h2>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    </div>
  )
}

export default ContactBlock