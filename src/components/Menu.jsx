import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <ul className={`menu__list ${isOpen ? 'menu__list--open' : 'hide'}`}>
        <Link className="menu__item" duration={1000} smooth={true} to='contact'>CONTACT</Link>
        <Link className="menu__item" duration={1000} smooth={true} to='portofolio'>PORTOFOLIO</Link>
        <Link className="menu__item" duration={1000} smooth={true} to='aboutme'>ABOUT</Link>
        <Link className="menu__item" duration={1000} smooth={true} to='home'>HOME</Link>
      </ul>
      <div className="menu__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Menu;
