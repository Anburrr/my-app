import React from "react";
import "./Navbar.scss";
import logo from "../../assets/images/CropmainLogo.png";
import Hamburger from "../../assets/images/hamburgerIcon.png";
import Instagram from "../../assets/images/instagram-logo.png";
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Twitter from "../../assets/images/twitter.png"
import Linkedin from "../../assets/images/linkedin.png"
import Github from "../../assets/images/github.png"
import linktree from "../../assets/images/linktree.png"
import resume from "../../assets/images/resume.png"

function BiggerNav() {
  return (
    <>
        <div className="biggerBox">
          <div className="box">
            <div className="textboxDiv">
              <a href="">
                <img className="myLogo" src={logo} />
              </a>

<Navbar>
      <NavItem icon={Hamburger}>
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
            leftIcon=<img className="resume" src={resume}/>
            goToMenu="settings">
            My Resume
          </DropdownItem>
          <DropdownItem
            leftIcon=<img className="linktree" src={linktree}/>
            goToMenu="animals">
            My Links
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
          <DropdownItem goToMenu="main" leftIcon= <img className="resume" src={resume}/>>
            <h2>My Resume</h2>
          </DropdownItem>
          <DropdownItem leftIcon =<img className="propIcon" src={Hamburger}/>>HTML</DropdownItem>
          <DropdownItem leftIcon=<img className="propIcon" src={Hamburger}/>>CSS</DropdownItem>
          <DropdownItem leftIcon=<img className="propIcon" src={Hamburger}/>>JavaScript</DropdownItem>
          <DropdownItem leftIcon=<img className="propIcon" src={Hamburger}/>>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon=<img className="linktree" src={linktree}/>>
            <h2>My Links</h2>
          </DropdownItem>
          <DropdownItem leftIcon=<img className="propIcon" src={Instagram}/>>Instagram</DropdownItem>
          <DropdownItem leftIcon=<img className="propIcon" src={Twitter}/>>Twitter</DropdownItem>
          <DropdownItem leftIcon=<img className="github" src={Github}/>>Github?</DropdownItem>
          <DropdownItem leftIcon=<img className="linkedin" src={Linkedin}/>>Linkedin</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}




export default BiggerNav;
