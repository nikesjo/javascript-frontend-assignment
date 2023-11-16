import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({url, image, alt, title}) => {
  return (
    <Link className="project" to={url}>
        <img src={image} alt={alt} />
        <h3>{title}</h3>
        <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
    </Link>
  )
}

export default Project