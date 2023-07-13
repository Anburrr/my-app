import React from 'react'
import './Footer.scss'
import Logo from '../../assets/images/CropmainLogo.png'

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
<a className='redirectText' href=''>Projects</a>
<a className='redirectText' href=''>Resume</a>
</div>
</div>

<div className='SocialSide'>
<p className='contactText'>Want To Connect?
</p>

<div id="container">
  <button className="learnMore">
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text">Contact Me!
    </span>
  </button>
</div>
</div>
        </div>

    </div>
  )
}

export default Footer