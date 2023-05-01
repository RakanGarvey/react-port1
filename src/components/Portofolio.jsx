import React from 'react'
import back1 from '../images/back1.png'
import back2 from '../images/back2.png'
import back3 from '../images/back3.png'
import back4 from '../images/back4.png'
import {FcNext} from 'react-icons/fc'
import {FcPrevious} from 'react-icons/fc'
import {RxDividerHorizontal} from 'react-icons/rx'
import { useState } from 'react'
import pro1 from '../images/pro1.jpg'
import pro2 from '../images/pro2.jpg'
import pro3 from '../images/pro3.jpg'

const Portofolio = () => {
    const [index,setIndex] = useState(0)
    const pics = [back1, back2, back3, back4]
    const immg = pics[index]
    const hundle = (num) =>{
        if(num > pics.length -1){
            return 0
        }
        if(num < 0){
            return pics.length - 1
        }
        return num
    }
    const next = () => {
        setIndex((index)=>{
            let val1 = index + 1
            return hundle(val1)
        })
    }
    const prev = ()=>{
        setIndex((index)=>{
            let val2 = index - 1
            return hundle(val2)
        })
    }
  return (
    <div className='portofolio'>
        <div id='port'>
            <h1 className='port'>Recent projects</h1>
            <p>Some of the projects i have recently worked on</p>
        </div>
        <div>
            <button className='btnn prev' onClick={prev}><FcPrevious className='icn'/></button>
            <button className='btnn next' onClick={next}><FcNext className='icn'/></button>
            <div className="background">
                <img src={back1} alt="" className='back'/>
                <img src={back2} alt="" className='back back1'/>
                <img src={back3} alt="" className='back'/>
                <img src={back4} alt="" className='back'/>
            </div>
            <div>
                <img src={immg} alt="" className='big-pic'/>
            </div>
        </div>
        <h1 className='title'>What My Clients Says</h1>
        <div className="ratings">
            <div className="cart">
                <img src={pro1} alt="" className='profile'/>
                <p className='desc'>Great work you're a talented person
I never seen anyone as good as you keep going and thank you
Thank you for the professional work you have done good job</p>
                <RxDividerHorizontal className='div'/>
                <p className='name'>John Doe</p>
            </div>
            <div className="cart">
                <img src={pro3} alt="" className='profile'/>
                <p className='desc'>Great work you're a talented person
I never seen anyone as good as you keep going and thank you
Thank you for the professional work you have done good job</p>
                <RxDividerHorizontal className='div'/>
                <p className='name'>Jenna Smith</p>
            </div>
            <div className="cart">
                <img src={pro2} alt="" className='profile'/>
                <p className='desc'>Great work you're a talented person
I never seen anyone as good as you keep going and thank you
Thank you for the professional work you have done good job</p>
                <RxDividerHorizontal className='div'/>
                <p className='name'>Samuel Stevens</p>
            </div>
        </div>
    </div>
  )
}

export default Portofolio