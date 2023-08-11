import React from 'react'
import './Resume.scss'
import BiggerNav from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import arshResume from '../../assets/images/ArshResume.png'
import Logo from '../../assets/images/CropmainLogo.png'

import {Link} from 'react-router-dom';



function Resume() {
  return (

    
    <div>
        <BiggerNav/>

<div className='resumePage'>
<div className='resumeText'>
    <p>Resume</p>
</div>
    <div className='lookTag'>
    <p>Have A Look Will Ya!</p>
    </div>
<center>
<img className='resumeIMG' src={arshResume}/>
</center>
</div>



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
<Link to='/' className='redirectText' >Portfolio</Link>
<Link to='/' className='redirectText' ><a href='#projectPage' className='redirectText'>Projects</a></Link >

</div>
</div>

<div className='SocialSide'>


<p className='Text'>Want to Connect</p>

<div id="container">
  <button class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span>
<Link to='/contact' className='contactText'>Contact Me</Link>
    </span>
  </button>
</div>
</div>
        </div>

    </div>
    </div>

  )
}

export default Resume