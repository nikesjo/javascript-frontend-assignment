import React from 'react'
import Footer from '../components/Footer'
import Button from '../components/Generics/Button'

const NotFound = () => {
  return (
    <div className="wrapper">
      <main>
        <section className="notfound-section">
          <h1>Page Not Found!</h1>
          <p>Unable to find the page that you are looking for.</p>
          <Button type="yellow" text="Go back to home page" url='/' />
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default NotFound