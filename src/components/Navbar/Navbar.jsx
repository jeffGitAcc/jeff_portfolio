import React, { useState } from 'react'
import './Navbar.scss'
import { FiMenu } from 'react-icons/fi'

import { HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app_navbar-logo'>

        <h2> JEFF
          <div />
        </h2>

      </div>
        <ul className='app_navbar-links'>
          {['home', 'about', 'skills', 'work', 'contact'].map((item, index) => (
            <li key={`link-${item}`}>
              <div />
              <a href={`#${item}`}

              >{item}</a>
            </li>
          ))}
        </ul>

        <div className='app__navbar-menu'>
             <FiMenu
             onClick={() => (setToggle(true))}
             />
             {toggle &&
               <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
               >
                <ul>
                <HiX onClick={() => (setToggle(false))}/>
                    {['home', 'about', 'skills', 'Work', 'contact'].map((item) => (
                    <li key={item}>

                      <a href={`#${item}`} onClick={() => (setToggle(false))}>{item}</a>
                     </li>
                    ))}
                  </ul>

               </motion.div>

               }
        </div>
    </nav>
  )
}

export default Navbar
