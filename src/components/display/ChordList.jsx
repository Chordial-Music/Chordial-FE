/* eslint-disable max-len */
import React, { useState } from 'react';
import Chords from '../../data/data.js';

// This is the main planet
// It displays chord.name
// And onClick it shows you chord.name's destination chord nodes (chord.chords)
// And it feeds the satellite planets chords from it's chord array
// Click on this planet to see all of the destination chord nodes associated with it
const list = Chords['C'].chords;


const chordList = () => {
  const [display, setDisplay] = useState(false);
  const [chordArray, setChordArray] = useState([]);

  const pick = [];


  const handleClick = () => {
    setDisplay(true);
  };

  const chords = list.map(item => {
    return (
      <li key={item}>
        <button onClick={() => setChordArray(Chords[item].name) && pick.push(chordArray)}>{item}</button>
      </li>
    );

  });
  // console.log(chordArray);

  return (
    <>
      <div>
        {display === true && <ul>{chords}</ul>}
        <button onClick={handleClick}>C</button>
        <div> {chordArray.length !== 0 && chordArray} </div>
      </div>
    </>
  );
};

export default chordList;
