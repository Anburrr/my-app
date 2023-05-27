import React from 'react'
import './Navbar.scss'

function navbar() {
  return (
    <div>
        <div className="navBar">
         <div class="choice1">
           <p class="navNum">01</p>
           <a class="navWords" href="/">
             '// Home
           </a>
         </div>
         <div class="choice2">
           <p class="navNum">02</p>
           <a class="navWords" href="/">
             '// About
           </a>
         </div>
         <div class="choice3">
           <p class="navNum">03</p>
           <a class="navWords" href="/">
             '// Experience
           </a>
         </div>
         <div class="choice4">
           <p class="navNum">04</p>
           <a class="navWords" href="/">
             '// Resume
           </a>
         </div>
       </div>  </div>)
}

export default navbar
