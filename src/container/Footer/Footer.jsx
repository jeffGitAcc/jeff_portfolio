
import AppWrap from '../../wrapper/AppWrap'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Footer.scss'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'

const Footer = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_440a2vg', 'template_q8y18xv', form.current, 'YhAcOyx7zsPh-cWXE')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
    alert('Youre message has been sent!')
  }
  return (
    <>
    <div className="head__footer">
    <h2 >Get in touch</h2>
    <p>Contact me</p>
    </div>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <AiOutlineMail
          style={{ margin: '5px' }}
          />
          <a href="mailto:jeffindaya@gmail.com" className="p-text">jeffindaya@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <RiMessengerLine
          style={{ margin: '5px' }}
          />
          <a href="https://www.facebook.com/messages/t/100017805431806" className="p-text">Jeff Indaya</a>
        </div>
      </div>

        <form ref={form} onSubmit={sendEmail} className="app__footer-form">

            <input className="p-text" type="text" placeholder="Your Name" name="username" />

            <input className="p-text" type="email" placeholder="Your Email" name="email" />

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"

            />
          </div>
          <button type="submit" className="p-text"> Send</button>

        </form>
                <div className='copyright'>
                    <p className='p-text'>@2023 Jeff</p>
                    <p className='p-text'>All rights reserve</p>
                </div>
    </>
  )
}

export default AppWrap(Footer, 'contact')
