import React from 'react'
import './Footer.scss'
import Logo from '../../assets/images/CropmainLogo.png'
import Contact from '../../Pages/contactPage/Contact'

import {Link} from "react-router-dom";


function Footer() {
    
  return (
    <div className='Footer'>
  
        <div className = 'mainFooter'>
<div className='LogoSide'>
<img className='footerLogo' src={Logo}/>
<p className='legalRights'>© Copyright 2023</p>
<p className='madeBy'>Built From Scratch By <span className='bold'>Arsh Bakhshi </span></p>
</div>

<div className='RedirectSide'>
<p className='pageTitle'>Pages</p>
<div className='redirectColumn'>
<a className='redirectText' href=''>Portfolio</a>
<a className='redirectText' href='#projectPage'>Projects</a>
<Link className='redirectText' to='/resume'>Resume</Link>
</div>
</div>

<div className='SocialSide'>

<p className='Text'>Want to Connect</p>


<div id="newContactContainer">
  <button class="new-learn-more">
    <span class="new-circle" aria-hidden="true">
      <span class="new-icon new-arrow"></span>
    </span>
    <span>
      <Link to='/contact' className='new-contactText'>Contact Me</Link>
    </span>
  </button>
</div>
</div>
        </div>

    </div>

  )
}

export default Footer