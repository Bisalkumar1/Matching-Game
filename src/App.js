import React, { useEffect } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Intro from './Pages/Intro';
import IntroScreen from './Pages/IntroScreen';
import Instruction from './Pages/Instruction';
import Page3 from './Pages/Page3';
import Activity from './Pages/Activity';
import Final from './Pages/Final';
import { useState } from 'react';
import Nodisplay from './Pages/Nodisplay';



const App = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 650);

  useEffect(()=>{
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 650);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  if (isSmallScreen) {
    return (
      <>
      <div className="custom-message">
       <Nodisplay/>
      </div>
      </>
    );
  }
else{
  return (
  <>
    <Routes>
      <Route path="/" Component={Intro}/>
      <Route path='/IntroScreen' Component={IntroScreen}/>
      <Route path='/IntroScreen2' Component={Page3}></Route>
      <Route path='/Instruction' Component={Instruction}/>
      <Route path='/Activity' Component={Activity}></Route>
      <Route path='/Final' Component={Final}></Route>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  </>
  )
}
}
export default App;