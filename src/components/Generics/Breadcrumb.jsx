import React from 'react'
import img_backgroundlines from '../../assets/images/lines-contact.svg'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = ({heading}) => {
  const location = useLocation()

  // let currentLink = ""
  let currentLink = ""

  const crumbs = location.pathname.split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb.charAt(0).toUpperCase() + crumb.slice(1)}</Link>
        </div>
      )
    })

  return (
    <section className="lets-connect">
        <img className="background-lines" src={img_backgroundlines} alt="" />
        <div className="container">
            <div></div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadbrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadbrumb-item active" aria-current="page">{crumbs}</li>
                </ol>
            </nav>
            <h1>{heading}</h1>
        </div>
    </section>
  )
}

export default Breadcrumb