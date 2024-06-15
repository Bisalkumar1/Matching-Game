import React from 'react';
import smileMonkey from '../Images/Smilemonkey.png';
import { NavLink } from 'react-router-dom';
import fontBack from '../Images/fontback.png';

const Intro = () => {
  return (
   <>
   <div className="intro">
   <img className='fontBack' src={fontBack} alt="fontBack" />
  <h3 className="welcome-text">Welcome Kiddo !</h3>  

<div className='imagemonkey'>
 <img className='imgmonkey' style={{height:"300px"}} src={smileMonkey} alt="SmileMonkey" />
</div>
  <NavLink to='/IntroScreen' className='introbtn'>START</NavLink>
  </div>
   </>
  )
}

export default Intro;