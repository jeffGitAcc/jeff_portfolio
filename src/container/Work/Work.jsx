import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import images from '../../constants/images'
import './Work.scss'

const Work = () => {
  return (
    <>
      <h2 className="head-text"><span>Portfolio</span> Section</h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >

          <div className="app__work-item app__flex">
            <div
              className="app__work-img app__flex"
            >
              <img src={images.lirika} alt="lirika" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href='https://lirika.netlify.app' target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                     className="app__icon"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href='https://github.com/jeffGitAcc/lirika.git' target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__icon"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Lirika</h4>

            </div>
          </div>

      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'work')
