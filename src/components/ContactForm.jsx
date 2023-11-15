import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {
    const emailRegEx = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)
    const [errorMessage, setErrorMessage] = useState('')

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object( {
            name: Yup.string()
                .required("Name is required")
                .min(2, "Name invalid, must have atleast 2 characters"),
            email: Yup.string()
                .required("Email is required")
                .matches(emailRegEx, "Please enter a valid email"),
            message: Yup.string()
                .required("Message is required")
                .min(2, "Message invalid, must have atleast 2 characters")
        }),

        onSubmit: async (values) => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            switch (result.status) {
                case 200:
                    alert('Message was sent!')
                    break;
                case 400:
                    setErrorMessage('Something went wrong.')
                    break;
                default:
                    console.log(result.status)
            }
        }
    })

  return (
    <section className="contact-form">
        <div className="container">
            <h2>Leave us a message for any information.</h2>
            <form id="contactForm" onSubmit={form.handleSubmit} noValidate>
                <p className="errorMessage">{errorMessage}</p>
                <div className="mb-3 mt-4">
                    <label className={(form.touched.name && form.errors.name) ? 'errorMessage' : ''}>{(form.touched.name && form.errors.name) ? form.errors.name : ''}</label>
                    <input className="form-input" type="text" id="name" name="name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} title="Name" placeholder="Name*" tabIndex="1" />
                </div>
                <div className="mb-3">
                    <label className={(form.touched.email && form.errors.email) ? 'errorMessage' : ''}>{(form.touched.email && form.errors.email) ? form.errors.email : ''}</label>
                    <input className="form-input" type="email" id="email" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} title="Email" placeholder="Email*" tabIndex="2" />
                </div>
                <div className="mb-5">
                    <label className={(form.touched.message && form.errors.message) ? 'errorMessage' : ''}>{(form.touched.message && form.errors.message) ? form.errors.message : ''}</label>
                    <textarea className="form-input" id="message" name="message" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur} title="Message" placeholder="Your Message*" tabIndex="3"></textarea>
                </div>

                <div className="d-grid">
                    <button className="btn-yellow" type="submit">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactForm