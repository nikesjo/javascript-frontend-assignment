import React from 'react'
import Footer from '../components/Footer'
import Button from '../components/Generics/Button'

const NotFound = () => {
  return (
    <div className="wrapper">
      <main>
        <section className="notfound-section">
          <h1>404 Sidan kunde inte hittas</h1>
          <Button type="yellow" text="Go back to home page" url='/' />
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default NotFound