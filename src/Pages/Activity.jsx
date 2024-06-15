import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import leftarw from '../Images/leftarw.png';
import whitebanana from '../Images/whitebanana.png';
import openapple from '../Images/openapple.png';
import closepinkcard from '../Images/closepinkcard.png';
import closebluecard from '../Images/closebluecard.png';
import alphaAs from '../Images/AlphaAs.png';
// import openappletilt from '../Images/openappletilt.png';
// import openAlphaAtilt from '../Images/openAlphaAtilt.png';
import openorange from '../Images/Orange.png';
import openOs from '../Images/openOs.png';
// import orangetilt from '../Images/orangetilt.png';
// import otilt from '../Images/Otilt.png';
import { useState } from 'react';


const initialCards = [
  { id: 1, type: 'image', src: openapple, matched: false ,val:1},
  { id: 2, type: 'image', src: openorange, matched: false,val:2 },
  { id: 3, type: 'image', src: openapple, matched: false, val:1 },
  { id: 4, type: 'image', src:  openorange, matched: false,val:2 },
  { id: 5, type: 'image', src:  openapple, matched: false,val:1 },
  { id: 6, type: 'image', src:  openorange, matched: false, val:2 },  
];


const initialCards1=[
    { id: 7, type: 'letter', src: alphaAs, matched: false, val:3 },
  { id: 8, type: 'letter', src: openOs, matched: false ,val:4},
  { id: 9, type: 'letter', src: alphaAs, matched: false ,val:3},
  { id: 10, type: 'letter', src: openOs, matched: false, val:4 },
  { id: 11, type: 'letter', src: alphaAs, matched: false,val:3},
  { id: 12, type: 'letter', src: openOs, matched: false, val:4 },
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Activity = () => {

const navigate=useNavigate();

const [cards, setCards] = useState(shuffleArray([...initialCards]));
const [NumCards,setNumCards]=useState(shuffleArray([...initialCards1]));
const [Progbar,setProgbar]=useState(1);
const [flippedCards, setFlippedCards] = useState([]);
const [score, setScore] = useState(0);
const [chances, setChances] = useState(7);

  useEffect(() => {

    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;

      if (firstCard.val === secondCard.val+2 || firstCard.val+2 === secondCard.val) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCard.id || card.id=== secondCard.id ? { ...card, matched: true } : card
          )
        );

        setNumCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, matched: true }
              : card
          )
        );

        setScore((prevScore) => prevScore + 1);
        setProgbar((preProgbar)=>preProgbar+15);
        setFlippedCards([]);
      }
      
      else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
      setChances((prevChances) => prevChances - 1);
    }
  }, [flippedCards]);
     
     
     
useEffect(()=>{
       if(chances==0 && score!=6){
        navigate('/Instruction');
       }  
       else if(chances==0 && score==6){
        navigate('/Final');
       }                            
  else if(chances < 0){
    navigate('/Instruction');
  }                                    
                                
  else if(chances>0 && score==6 ){
    navigate('/Final');
  }                          
      
},[score,navigate,chances]);



  const handleCardClick = (card) => {
    if (flippedCards.length < 2 && !card.matched && !flippedCards.includes(card)) {
      setFlippedCards((prevFlipped) => [...prevFlipped, card]);
    }
  };


  return (
    <>
    <div className="header">
     <NavLink to='/Instruction' className='arwbtn'><img src={leftarw} className='leftbtn' alt="Back Button" /> </NavLink>
        <div className="progress-bar">
          <div className="progress" style={{width:`${Progbar}%`}}></div>
        </div>
        <img className='WhiteBanana' src={whitebanana} alt="whiteBanana" />
      </div>


 <div className="game-info">
        <h2>Score: {score}</h2>
        <h2>Chances Left: {chances}</h2>
      </div>

      <div className='cardgridmain'>

      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${flippedCards.includes(card) || card.matched ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            <img src={flippedCards.includes(card) || card.matched ? card.src :closepinkcard }  alt="Card" />
          </div>
        ))}
      </div>

      <div className='card-grid'>
      {NumCards.map((card) => (
          <div
            key={card.id}
            className={`card ${flippedCards.includes(card) || card.matched ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card)}>

            <img src={flippedCards.includes(card) || card.matched ? card.src :closebluecard }  alt="Card" />
          </div>
        ))}
    
      </div>
      </div>
       
    </>
  )
}

export default Activity