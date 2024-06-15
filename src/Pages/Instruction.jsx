import React from 'react';
import './Instruction.css';
import leftarw from '../Images/leftarw.png';
import { NavLink } from 'react-router-dom';
import cardapple from '../Images/cardapple.png';
import closepink from '../Images/closepinkcard.png';
import closeblue from '../Images/closebluecard.png';
import paircard from '../Images/2card.png';
import whitebanana from '../Images/whitebanana.png';
import Num1 from '../Images/1number.png';
import Num2 from '../Images/Num2g.png';
import Num3 from '../Images/Num3or.png';
import N2 from '../Images/02.png';
import N3 from '../Images/03.png';


const Instruction = () => {

  return (
    <>

     <div className="header">
     <NavLink to='/IntroScreen2' className='arwbtn'><img src={leftarw} className='leftbtn' alt="Back Button" /> </NavLink>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <img className='WhiteBanana' src={whitebanana} alt="whiteBanana" />
      </div>

<div className="game-page">

        <div className="instruction">
        <img className= 'Num1' src={Num1} alt="Num" />
        <div className="image-container">
          <img className='openpinkimg' src={cardapple} alt="Pink Card" />
          <img className='closepinkimg' src={closepink} alt="closepink" />
          </div>
          <div className="instruction-text">
            <p className='h3'> Select a pink card.</p>
            <p style={{color:'#a1c422',fontWeight:'900',fontSize:'18px'}}>It has images.</p>
          </div>
        </div>

        <div className="instruction">
        <img className='N2' src={N2} alt="N2" />
        <img className='Num1' src={Num2} alt="Num2" />
          <img src={closeblue} alt="Blue Card" />
          <div className="instruction-text">
            <p className='h3'> Select a blue card.</p>
            <p style={{color:'#a1c422',fontWeight:'900',fontSize:'18px'}}>It has alphabets.</p>
          </div>
          </div>
    

        <div className="instruction">
        <img className='N2' src={N3} alt="Num3" />
        <img className='Num1' src={Num3} alt="Num2" />
          <img  src={paircard} alt="Matching Cards" />
          <div className="instruction-text3">
            <p className='h31' style={{color:'#a1c422',fontWeight:'900',fontSize:'18px'}}> If they’re same </p>
            <p className='h3'>It's a match! </p> 
            <p style={{color:'#a1c422',fontWeight:'900',fontSize:'18px'}}>otherwise retry :( </p>
          </div>
        </div>
        
</div>
    
  
  <NavLink to='/Activity' className='introbtn'>PLAY</NavLink>

    </>
  );

}

export default Instruction ;