/* eslint-disable max-len */
import React, { useState } from 'react';
import Chords from '../../data.js';


//take a chord name, extrapolate its nodes, and list
const ChordList = () => {
  const [display, setDisplay] = useState(false);

  console.log(chordArray.chords);
  // const temp = Object.values(currentChord[0]);
  // console.log('current', Chords[temp].chords);

  const handleClick = () => {
    setDisplay(true);
  };

  const nodes = Chords[currentChord].chords.map(item => {
    return (
      <li key={item}>
        <button onClick={() => setChordArray(Chords[item].name)}>{item}</button>
      </li>
    );
  });

  return (
    <>
      <div>
        {display === true && <ul>{nodes}</ul>}
        <button onClick={handleClick}>C</button>
        <div> {chordArray.length !== 0 && chordArray} </div>
      </div>
    </>
  );
};

export default ChordList;
