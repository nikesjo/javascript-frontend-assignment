import React from 'react'
import Button from '../../components/Generics/Button'

const ServiceBox = ({title, description, icon}) => {
  return (
    <div className="service-box">
        <h4>{title}</h4>
        <p>{description}</p>
        <Button type="black" className="btn-circle" icon={<i className="fa-light fa-arrow-right"></i>} />
    </div>
  )
}

export default ServiceBox