import React from 'react';
import smileMonkey from '../Images/Smilemonkey.png';
import { NavLink } from 'react-router-dom';
import leftarw from '../Images/leftarw.png';
import fontBack from '../Images/fontback.png';
const Page3 = () => {
  return (
   <>
  
  <div className="intro">
  <NavLink to='/IntroScreen' className='arwbtn'><img src={leftarw} className='leftbtn1' alt="Back Button" /> </NavLink>
  <img className='fontBack fontBack1' src={fontBack} alt="fontBack" />
  <h4 className="welcome-text welcome-text2"> 
  Can you help me get some?
  <br /> 🤔
  </h4>  

       
<div className='imagemonkey'>
 <img className='imgmonkey' style={{height:"300px"}} src={smileMonkey} alt="SmileMonkey" />
</div>
  <NavLink to='/Instruction' className='introbtn'>YES</NavLink>
  </div>

    <button>Yes</button>
   </>
  )
}

export default Page3