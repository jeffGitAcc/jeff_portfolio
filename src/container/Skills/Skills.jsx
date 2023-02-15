import React from 'react'
import './Skills.scss'
import { motion } from 'framer-motion'
import Frontend from './Frontend'
import Backend from './Backend'
import AppWrap from '../../wrapper/AppWrap'
const Skills = () => {
  return (
    <>
      <h2 className='head-text'>Skills</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
            <motion.div
            className='app__skills-item'
            whileInView={{ opacity: [0, 1] }}
            transition ={{ duration: 0.5 }}
            >
                <div className='skills__app'>
                <Frontend />
                <Backend />
                </div>

            </motion.div>

        </motion.div>

      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills')
