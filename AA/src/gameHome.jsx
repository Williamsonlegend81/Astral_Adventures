import React from 'react'
import { useState } from 'react';
import './gamebox.css'
const gameHome = () => {
  const [selectedComponent, setSelectedComponent] = useState();
      
    const game = (e) => {
        // Determine the class of the clicked element
        const className1 = e?.target?.id;
       console.log(className1);
        // Set the selected component based on the class name
        switch (className1) {
          case 'box1':
            setSelectedComponent("game1");
            window.open('/game1', '_blank');
            break;
          case 'box2':
            setSelectedComponent("game2");
            window.open('/game2', '_blank');
            break;
          case 'box3':
            setSelectedComponent("game3");
            window.open('/game3', '_blank');
            
           case 'box4':
            setSelectedComponent("game4");
            window.open('/game4', '_blank');

            break;
          default:
            setSelectedComponent(null);
            break;
        }
      };
  return (
    <div>
        <div className="Gamecon">
      <div id="box1" className='box10' onClick={(e)=>{game(e)}}>
          <img id="game"src="../public/Game image/NUm1.webp" alt="" />
      </div>
      <div id="box2"  className='box10'onClick={(e)=>{game(e)}}>
          <img id="game" src="../public/Game image/num2.png" alt="" />
      </div>
      <div id="box3" className='box10' onClick={(e)=>{game(e)}}>
          <img id="game"src="../public/Game image/num3.png" alt="" />
      </div>
    
      <div id="box4" className='box10' onClick={(e)=>{game(e)}}>
          <img  id="game" src="../public/Game image/num4.png" alt="" />
          </div>
      
          </div>
          
    </div>
  )
}

export default gameHome