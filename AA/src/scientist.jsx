// scientist.jsx
import React from 'react';
import './sci.css'
import { COLOR } from 'rsuite/esm/internals/constants';

const Scientist = () => {
  return (
    <div>
      <h1>INDIAN SCIENTISTS</h1>
      <p id='APJ'>If you want to shine like a SUN….First Burn like one
-Dr.APJ Abdul Kalam
</p>
<h4>
India has a rich history of influential scientists who have made significant contributions across various fields. Here are a few notable Indian scientists:</h4>


  <div className="Science">

    <div className="boxes">
      <img  id="Pic" src="../Scientists/cv_raman.jpg" alt="" />
      <p>
<b>C.V. Raman: </b> An acclaimed physicist, C.V. Raman won the Nobel Prize in Physics in 1930 for his discovery of the Raman Effect, which explains how light interacts with molecules. This discovery laid the foundation for Raman spectroscopy, a crucial tool in molecular physics and chemistry.</p>
</div>

<div className="boxes">
<img  id="Pic" src="../Scientists/SatyenBose.jpg" alt="" />
<p>
<b>Satyendra Nath Bose:</b> A physicist known for his work on quantum mechanics in the early 20th century. Bose's collaboration with Albert Einstein led to the development of Bose-Einstein statistics and the prediction of Bose-Einstein condensates, a state of matter observed at extremely low temperatures.
</p>
</div>

<div className="boxes">
<img  id="Pic" src="../Scientists/A._P._J._Abdul_Kalam.jpg" alt="" />
<p>
<b>Dr. A.P.J. Abdul Kalam:</b> An aerospace scientist and former President of India, Kalam played a key role in India's space and missile programs. He is often referred to as the "Missile Man" for his work on the development of ballistic missiles and satellite launch vehicles.
</p>
</div>

<div className="boxes">
<img  id="Pic" src="../Scientists/Homi_bhabha.jpg" alt="" />
<p>
<b>Homi J. Bhabha:</b> A pioneering nuclear physicist and the founding director of the Tata Institute of Fundamental Research (TIFR) in Mumbai. Bhabha is considered the father of the Indian nuclear program and made significant contributions to the development of nuclear energy in India.
</p>
</div>

<div className="boxes">
<img  id="Pic" src="../Scientists/JC_Bose.jpg" alt="" />
<p>
<b>Jagadish Chandra Bose:</b> A botanist and physicist, Bose is known for his work in plant physiology and radio waves. He demonstrated that plants respond to external stimuli in ways similar to animals, and his research laid the groundwork for the study of biophysics.
</p></div>

<div className="boxes">
<img  id="Pic" src="../Scientists/RM.webp" alt="" />
<p>
<b>Venkatraman Ramakrishnan:</b> A structural biologist who was awarded the Nobel Prize in Chemistry in 2009 for his work on the structure and function of the ribosome, a crucial component of cellular machinery responsible for protein synthesis.
</p>
</div>


<div className="boxes">
<img  id="Pic" src="../Scientists/SC.jpeg" alt="" />
<p>
Subrahmanyan Chandrasekhar: An astrophysicist who won the Nobel Prize in Physics in 1983 for his theoretical studies of the physical processes important to the structure and evolution of stars, particularly his work on the Chandrasekhar limit, which defines the maximum mass of a stable white dwarf star.
</p>
</div>

<div className="boxes">
<img  id="Pic" src="../Scientists/R-RAMANAN.jpg" alt="" />
<p>
Ramanathan Ramanan: A mathematician known for his work in number theory and his contributions to the understanding of prime numbers.
These scientists have made remarkable contributions to their respective fields and continue to inspire future generations with their innovative research and discoveries.
</p>
</div>
</div>
 </div>

  );
};

export default Scientist;
