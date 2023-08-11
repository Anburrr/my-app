import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BiggerNav from '../../components/navbar/Navbar';
import Logo from "../../assets/images/CropmainLogo.png";
import './Contact.scss'
import { useState} from 'react';

import {Link} from 'react-router-dom';




function Contact() {


    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
    }

  return (
    <>



<BiggerNav/>

<div className='contactInfo'>

<form


          className="formField"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "50%",
          }}
          action="https://formspree.io/f/mpzgwnvd"    
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          
        >

            <h3> Contact</h3>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Name"
            aria-required="true"
            required=""
          />
            <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Email"
            aria-required="true"
            required=""
          />
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Phone Number"
            aria-required="true"
            required=""

          />
          <textarea
            name="message"
            id="message"
            rows="5"
            class="form-control"
            placeholder="Message..."
            aria-required="true"
            required=""
  
          />
          <center>
          <div className="socialContainer" style={{ marginTop: "unset" }}>
            <button className="contactBtn" type="submit" value="Send">
              Send
            </button>
          </div>
          </center>
        </form>

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
<Link to='/resume' className='redirectText' href=''>Resume</Link>
</div>
</div>
</div>
</div>

    </>
  )
}

export default Contact