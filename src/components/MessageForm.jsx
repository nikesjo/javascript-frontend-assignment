import React from 'react'

const MessageForm = () => {
  return (
    <section className="message-form">
        <div className="container">
            <h2>Leave us a message for any information.</h2>
            <form id="messageForm" method="post">
                <div className="mb-3 mt-4">
                    <input className="form-input" type="text" id="name" name="name" title="Name" placeholder="Name*" tabIndex="1" autoComplete="name" />
                </div>
                <div className="mb-3">
                    <input className="form-input" type="email" id="email" name="email" title="Email" placeholder="Email*" tabIndex="2" autoComplete="email" />
                </div>
                <div className="mb-5">
                    <textarea className="form-input" id="message" name="message" title="Message" placeholder="Your Message*" tabIndex="3"></textarea>
                </div>

                <div className="d-grid">
                    <button className="btn-yellow" type="submit">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default MessageForm