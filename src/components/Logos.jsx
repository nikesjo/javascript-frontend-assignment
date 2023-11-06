import React from 'react'
import paperz from '../assets/images/logo-paperz.svg'
import dorfus from '../assets/images/logo-dorfus.svg'
import martino from '../assets/images/logo-martino.svg'
import square from '../assets/images/logo-square.svg'
import gobana from '../assets/images/logo-gobana.svg'

const Logos = () => {
  return (
    <section className="logos">
        <div className="container">
            <img className="logo" src={paperz} alt="" />
            <img className="logo" src={dorfus} alt="" />
            <img className="logo" src={martino} alt="" />
            <img className="logo" src={square} alt="" />
            <img className="logo" src={gobana} alt="" />
        </div>
    </section>
  )
}

export default Logos