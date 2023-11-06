import React from 'react'
import img_backgroundlines from '../assets/images/lines-contact.svg'

const LetsConnect = ({heading}) => {
  return (
    <section className="lets-connect">
        <img className="background-lines" src={img_backgroundlines} alt="" />
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadbrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadbrumb-item active" aria-current="page">Contact</li>
                </ol>
            </nav>
            <h1>{heading}</h1>
        </div>
    </section>
  )
}

export default LetsConnect