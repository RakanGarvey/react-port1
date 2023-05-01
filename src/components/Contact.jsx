import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <h1 className='title1'>Stay In Touch</h1>
        <label htmlFor="">
            <input type="email" placeholder='Enter email address'/>
            <button className='sub'>Subscribe</button>
        </label>
    </div>
  )
}

export default Contact