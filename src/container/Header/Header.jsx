import React from 'react'
import './Header.scss'

import { motion } from 'framer-motion'
import images from '../../constants/images'
// import { Particel } from '../../components'
import AppWrap from '../../wrapper/AppWrap'

const Header = () => {
  return (
  <div className='app__header'>
    {/* <Particel
    /> */}
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8 }}
      className = "app__flex"
    >
      <div className='app_header-badge'>
          <div>
            <p>Hello, I am</p>
            <h1>Jeff</h1>
          </div>
      </div>

      <div className='tag-cmp app__flex'>
          <p>Web Developer</p>
      </div>
    </motion.div>

    <motion.div
    className="app__header-img"
    >
      <img src={images.jeff} alt="profile" />

    </motion.div>

    <motion.div>

      </motion.div>
   </div>
  )
}

export default AppWrap(Header, 'home')
