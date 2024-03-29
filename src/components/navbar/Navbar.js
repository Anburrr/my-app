import React from "react";
import "./Navbar.scss";
import logo from "../../assets/images/CropmainLogo.png";
import Hamburger from "../../assets/images/hamburgerIcon.png";
import HamburgerIcon from '../../assets/images/IconHamburger.png'
import Instagram from "../../assets/images/instagram-logo.png";
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Twitter from "../../assets/images/twitter.png"
import Linkedin from "../../assets/images/linkedin.png"
import Github from "../../assets/images/github.png"
import linktree from "../../assets/images/linktree.png"
import resume from "../../assets/images/resume.png"
import HomeClip from '../../assets/images/homeClip.png'
import pagesBack from '../../assets/images/pagesBack.png'


import { BrowserRouter  as Router, Routes, Route, Link} from "react-router-dom";

function BiggerNav() {
  return (
    <>
<div className="underConstruction">
<p className="constructionText">🚧Under Construction🚧</p>
</div>


        <div className="biggerBox">
          <div className="box">
            <div className="textboxDiv">
             <Link to='/'>
                <img className="myLogo" src={logo} />
              </Link>

<Navbar>
      <NavItem icon={HamburgerIcon}>
      <DropdownMenu/>
      </NavItem>
</Navbar>

            </div>
          </div>
        </div>
    </>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => {
  console.log('clicked')
  setOpen(prevOpen => !prevOpen)
}}>
        <img className="propIcon" src={props.icon} />
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            leftIcon=<img className="pages" src={pagesBack}/>
            goToMenu="settings">
           <a className="mainHeader">Pages</a>
          </DropdownItem>
          <DropdownItem
            leftIcon=<img className="linktree" src={linktree}/>
            goToMenu="animals">
            <a className="mainHeader">My Links</a>
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">

          <DropdownItem leftIcon =<img className="propIcon" src={HomeClip}/>><Link to='/'>Home</Link></DropdownItem>
          <DropdownItem leftIcon =<img className="resumeProp" src={resume}/>><Link to='/resume'>My Resume</Link></DropdownItem>

      </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem leftIcon=<img className="propIcon" src={Instagram}/>><a className="propText" href="https://www.instagram.com/">Instagram</a></DropdownItem>
          <DropdownItem leftIcon=<img className="propIcon" src={Twitter}/>><a className="propText" href="https://twitter.com/Anba786">Twitter</a></DropdownItem>
          <DropdownItem leftIcon=<img className="github" src={Github}/>><a className="propText" href="https://github.com/Anburrr"></a>Github</DropdownItem>
          <DropdownItem leftIcon=<img className="linkedin" src={Linkedin}/>><a className="propText" href="/"></a></DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}




export default BiggerNav;
