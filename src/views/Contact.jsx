import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ContactInformation from '../components/ContactInformation'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'

const Contact = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Breadcrumb heading="Let’s Connect" />
        <ContactInformation />
        <ContactForm />
        <Map />
      </main>
      <Footer/>
    </div>
  )
}

export default Contact