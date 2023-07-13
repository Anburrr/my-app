import React from 'react';
import './Intro.scss'

function Intro(){
    return(
        <>
        <div class="intro">
 
            <div class="animation">
                <p class="nameIntro">Hi my name is..</p>
  </div>

                <div class="animation2">
                    <p class="typing">Arsh Bakhshi</p>
                </div>
   
            <div class="name-Class">    </div>

            <div class="textIntro-Class">
                <p class="textIntro">An Aspiring Web Developer </p>
            </div>

            <div class="personInfo-div">
                <p class="personInfo">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at</p>
            </div>

            <div class="btn-holder">
                <button class="btn btn-2 hover-slide-right">
                    <span>Check Out My Resume!</span>
                </button>
            </div>
        </div>


        <div class="openContainer">
                <div class="container">
                    <a href="#projectPage">
                        <div class="scroll-down"></div>
                    </a>
                </div>
            </div>

            </>
    );
}

export default Intro