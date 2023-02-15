import React from 'react'
import { IoLogoNodejs } from 'react-icons/io'
import { FaPhp } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
const Backend = () => {
  return (
    <div className='skills__content'>
        <h3 className='skills__title'>Backend</h3>
        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                       <IoLogoNodejs />
                    <div>
                        <h3>Node</h3>

                    </div>
                </div>

                <div className='skills__data'>
                        <FaPhp />
                    <div>
                        <h3>PHP</h3>

                    </div>
                </div>

                <div className='skills__data'>
                <SiMysql />
                    <div>
                        <h3>MYSQL</h3>

                    </div>
                </div>
                <div className='skills__data'>

                    <div>
                        <h3>Express.js</h3>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Backend
