import React from 'react';
import { NavLink } from 'react-router-dom';
import leftarw from '../Images/leftarw.png';
import lastimage from '../Images/lastimage.png';
import monkeyBanana from '../Images/MonkeyBanana.png';
import Banana from '../Images/Banana.png';
import Banana2 from '../Images/Banana2.png';
const Final = () => {
  return (
<>
<div >
<div className="header">
     <NavLink to='/Instruction' className='arwbtn'><img src={leftarw} className='leftbtn' alt="Back Button" /> </NavLink>
        <div className="progress-bar">
          <div className="progress" style={{width:'100%'}}></div>
        </div>
        <img className='WhiteBanana' src={Banana} alt="whiteBanana" />
      </div>
<div className="mainfinal">
  <img className='Finalimage' src={lastimage} alt="Final Image" />
<img className='MonkeyBanana' src={monkeyBanana} alt="MonkeyBanana"/>
<img className='Bananna1' src={Banana} alt="Banana" />
<img className='Bananna2' src={Banana} alt="Banana" />
<img className='Bananna3' src={Banana} alt="Banana" />
<img className='Bananna4' src={Banana2} alt="Banana" />
<img className='Bananna5' src={Banana2} alt="Banana" />
</div>
</div>

</>
  )
}

export default Final;
