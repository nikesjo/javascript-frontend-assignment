import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ContactInformation from '../components/ContactInformation'
import MessageForm from '../components/MessageForm'
import Map from '../components/Map'

const Contact = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Breadcrumb heading="Let’s Connect" />
        <ContactInformation />
        <MessageForm />
        <Map />
      </main>
      <Footer/>
    </div>
  )
}

export default Contact