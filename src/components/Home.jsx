import React from 'react'
import img from '../images/Pers.png'
import {BsBehance} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Home = () => {
  return (
    <div className='home'>
        <div className='home1'>
        <div className='info'>
          <h3>HELLO</h3>
          <h1>I'm Arena</h1>
          <p>A Freelancer UI/UX Designer <br />From Manchester</p>
          <button className='hire-btn'>HIRE ME</button>
        </div>
        <div className="image">
        <div className="cercle"></div>
        <img src={img} alt="" className='img'/>
        </div>
        </div>
        <div className="social">
          <div className='btns'><BsBehance className='icon'/></div>
          <div className='btns'><BsDribbble className='icon'/></div>
          <div className='btns'><BsInstagram className='icon'/></div>
          <div className='btns'><BsTwitter className='icon'/></div>
          <div className='btns'><BsLinkedin className='icon'/></div>
        </div>
    </div>
  )
}

export default Home