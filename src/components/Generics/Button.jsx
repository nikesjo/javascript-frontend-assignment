import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({type, url, text, icon}) => {
  const getButtonClassName = () => {
    switch(type) {
      case 'yellow':
        return 'btn-yellow'
      case 'black':
        return 'btn-black'
      default:
        return 'btn-transparent'
    }
  }

  return (
    <Link className={getButtonClassName()} to={url}>
        {text}
        <i className="fa-regular fa-arrow-up-right"></i>
        {icon}
    </Link>
  )
}

export default Button