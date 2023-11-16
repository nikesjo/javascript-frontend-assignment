import React from 'react'
import img_backgroundlines from '../../assets/images/lines-contact.svg'
import { Link } from 'react-router-dom'

const Breadcrumb = ({type, heading}) => {
  const page = () => {
    switch(type) {
      case 'contact':
        return 'Contact'
      default:
        return 'News'
    }
  }
  
  return (
    <section className="lets-connect">
        <img className="background-lines" src={img_backgroundlines} alt="" />
        <div className="container">
            <div></div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadbrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadbrumb-item active" aria-current="page">{page()}</li>
                </ol>
            </nav>
            <h1>{heading}</h1>
        </div>
    </section>
  )
}

export default Breadcrumb