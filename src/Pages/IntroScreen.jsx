import React from 'react';
import smileMonkey from '../Images/Smilemonkey.png';
import { NavLink } from 'react-router-dom';
import leftarw from '../Images/leftarw.png';
import fontBack from '../Images/fontback.png';
const IntroScreen = () => {
  return (
  <>
  
  <div className="intro">
  <NavLink to='/' className='arwbtn'><img src={leftarw} className='leftbtn1' alt="Back Button" /> </NavLink>

  <img className='fontBack' src={fontBack} alt="fontBack" />
  <h3 className="welcome-text welcome-text1"> Hi, I am Mizo !
        <br />
         and I love bananas 🍌
  </h3>  

       
<div className='imagemonkey'>
 <img className='imgmonkey' style={{height:"300px"}} src={smileMonkey} alt="SmileMonkey" />
</div>
  <NavLink to='/IntroScreen2' className='introbtn'>NEXT</NavLink>
  </div>
    
  </>
  )
}

export default IntroScreen