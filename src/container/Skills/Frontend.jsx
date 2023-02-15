import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { FaSass, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const Frontend = () => {
  return (
    <div className='skills__content'>
        <h3 className='skills__title'>Frontend</h3>
        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                <AiFillHtml5 />
                    <div>
                        <h3>HTML</h3>

                    </div>
                </div>

                <div className='skills__data'>
                        <IoLogoCss3 />
                        <FaSass />
                    <div>
                        <h3>CSS/SASS</h3>

                    </div>
                </div>

                <div className='skills__data'>
                       <IoLogoJavascript />
                    <div>
                        <h3>Javascript</h3>

                    </div>
                </div>
                <div className='skills__data'>
                        <SiTailwindcss />
                    <div>
                        <h3>Tailwind</h3>

                    </div>
                </div>
                <div className='skills__data'>
                        <FaReact />
                    <div>
                        <h3>React</h3>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Frontend
