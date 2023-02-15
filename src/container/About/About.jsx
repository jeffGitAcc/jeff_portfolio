/* eslint-disable react/no-unescaped-entities */
// import { useState, useEffetct } from 'react'
// import { motion } from 'framer-motion'
import './About.scss'
import images from '../../constants/images'
import { AiFillFileText } from 'react-icons/ai'
import AppWrap from '../../wrapper/AppWrap'
import React from 'react'
const About = () => {
  return (
      <div className='main__div'>
          <h2>About Me</h2>
          <p>My introduction</p>
          <div className='about__info'>

            <img src={images.jeff}/>
            <div className='info__flex'>
              <p>Hello! My name is Jefferson Indaya and I enjoy learning new things. After I graduate I decided to enroll in coding bootcamp to learn more and study other programming language,frameworks and APIs.
              </p>
              <p>Now I'm creating some project to add it to my portfolio and hope to develop and produce a project from the client.</p>
             <a href={images.Brittle}>Download CV <AiFillFileText /></a>
            </div>

          </div>

      </div>

  )
}

export default AppWrap(About, 'about')
