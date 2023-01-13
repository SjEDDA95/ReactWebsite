import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="__blank"> <BsLinkedin/> </a>
        <a href="https://github.com" target="__blank"> <BsGithub/> </a>
        <a href="https://dribbble.com" target="__blank">aa</a>
    </div>
  )
}

export default HeaderSocials
