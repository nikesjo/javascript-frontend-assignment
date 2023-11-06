import React from 'react'
import Button from '../../components/Generics/Button'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="service-box">
        <div className="line"></div>
        <h4>{title}</h4>
        <p>{description}</p>
        <Button type="black" className="btn-circle" href={url} />
    </div>
  )
}

export default ServiceBox