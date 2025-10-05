import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_,blank"><FaLinkedin/></a>
        <a href="https://github.com" target="_,blank"><IoLogoGithub/></a>
        <a href="https://dribbble.com" target="_,blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials