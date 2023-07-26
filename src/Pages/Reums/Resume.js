import React from 'react'
import './Resume.scss'
import BiggerNav from '../../components/navbar/BiggerNav'
import Footer from '../../components/footer/Footer'
import arshResume from '../../assets/images/ArshResume.png'



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



        <Footer/>
    </div>

  )
}

export default Resume