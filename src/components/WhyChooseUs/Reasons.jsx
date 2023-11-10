import React from 'react'

const Reasons = ({icon, title, text}) => {
  return (
    <li>
        <div className="icons">
            {icon}
        </div>
        <div className="text">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </li>
  )
}

export default Reasons