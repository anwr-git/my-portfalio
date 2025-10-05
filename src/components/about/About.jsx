import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Go To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">

          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small> +4 years working </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clints</h5>
              <small> 200 World Wide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small> 80+  Completed</small>
            </article>
          </div>
          <p>sdfsfkslfajsfisaf sdfisdf sdf alsfusfsdfsdfs,dsdfbsjdhfbsjdfhshjdfhjsd bshjdbhsjb
          d  sfa sdf;ouj lk h fasufa;difh sd;fhaf</p>
          <a href="#contant" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
