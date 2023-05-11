import React from 'react'
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <Link className='li' duration={1000} smooth={true} to='contact'>CONTACT</Link>
        <Link className='li' duration={1000} smooth={true} to='portofolio'>PORTOFOLIO</Link>
        <Link className='li' duration={1000} smooth={true} to='aboutme'>ABOUT ME</Link>
        <Link className='li' duration={1000} smooth={true} to='home'>HOME</Link>
      </ul>
    </div>
  )
}

export default Sidebar
