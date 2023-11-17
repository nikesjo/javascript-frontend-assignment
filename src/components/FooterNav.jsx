import React from 'react'
import { Link } from 'react-router-dom'

const FooterNav = ({title, url, link1, link2, link3, link4}) => {
  return (
    <nav>
        <h4>{title}</h4>
        <ul>
            <li><Link to={url}>{link1}</Link></li>
            <li><Link to={url}>{link2}</Link></li>
            <li><Link to={url}>{link3}</Link></li>
            <li><Link to={url}>{link4}</Link></li>
        </ul>
    </nav>
  )
}

export default FooterNav