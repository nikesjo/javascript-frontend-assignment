import React from 'react'
import Button from '../../components/Generics/Button'
import { Link } from 'react-router-dom'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="service-box">
      <h4>{title}</h4>
      <p>{description}</p>
      <Link to={url} className="btn-black btn-circle"><i className="fa-light fa-arrow-right"></i></Link>
    </div>
  )
}

export default ServiceBox