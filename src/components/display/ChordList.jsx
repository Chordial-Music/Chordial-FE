/* eslint-disable max-len */
import React, { useState } from 'react';
import Chords from '../../data/data.js';
import styled from 'styled-components';

// This is the main planet
// It displays chord.name
// And onClick it shows you chord.name's destination chord nodes (chord.chords)
// And it feeds the satellite planets chords from it's chord array
// Click on this planet to see all of the destination chord nodes associated with it
const list = Chords['C'].chords;


const chordList = () => {
  const [display, setDisplay] = useState(false);
  const [chordArray, setChordArray] = useState([]);
  const [newChordArray, setNewChordArray] = useState([]);

  const handleClick = () => {
    setDisplay(true);
  };

  const chords = list.map((item, i) => {
    return (
      <li key={i}>
        <button onClick={() => setChordArray(Chords[item])}>{item}</button>
        
      </li>
      
    ) 
    
  })

  return (
    <>
      <ChordListStyled>
        {display === true && <ul>{chords}</ul> }
        <button 
          onClick={handleClick}
          style={{ position: 'absolute' }}
          className="C"
        >
          C
        </button>
        <div> {chordArray.length !== 0 && chordArray.name } </div>
        <div> {chordArray.length !== 0 && chordArray.chords.map((item, i) => <li key={i}><button onClick={() => setNewChordArray(Chords[item])}>{item}</button></li>) } </div>
      
        <div> {newChordArray.length !== 0 && newChordArray.name } </div>
      </ChordListStyled>
    </>
  );
};

export default chordList;

const ChordListStyled = styled.div`
  display: flex;

  /* .C {
    border: none;
    outline: none;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    background-color: #2e8b57;
    font-size: 3rem;
    color: white;
    transition: all 0.3s ease-in-out;

    &:hover{
      transform: scale(1.2);
      background-color: #3fc579;
    }
  } */
`;
