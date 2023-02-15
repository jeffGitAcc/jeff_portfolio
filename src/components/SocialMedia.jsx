import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/jeffGitAcc"> <BsGithub /></a>
        </div>
        <div>
          <a href="https://www.facebook.com/pingot17"> <FaFacebook /></a>
        </div>

    </div>
  )
}

export default SocialMedia
