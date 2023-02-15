import React from 'react'
import { NavagationDot, SocialMedia } from '../components'
const AppWrap = (Component, idName) => function HOC () {
  return (
    <div id={idName} className='app__container '>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
                <Component />
                {/* <div className='copyright'>
                    <p className='p-text'>@2023 Jeff</p>
                    <p className='p-text'>All rights reserve</p>
                </div> */}
        </div>
        <NavagationDot
        active={idName} />
    </div>
  )
}

export default AppWrap
