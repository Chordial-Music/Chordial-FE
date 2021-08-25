/* eslint-disable max-len */
import React, { useState } from 'react';
import { useChordArray } from '../state/ChordialProvider.jsx';
import Chords from '../../data/data.js';
import DisplayChordNodes from '../display/DisplayChordNodes';

const DisplayChord = ({ chordName }) => {
  console.log('chord name', chordName);
  const [display, setDisplay] = useState(false);

  const chordArray = useChordArray();
  console.log('chord array', chordArray);

  const handleClick = ({ target }) => {
    chordArray.push(target.textContent);
    console.log(chordArray);
  };

  return (
    <>
      <div onClick={handleClick}>{chordName}</div>
    </>
  );
};

export default DisplayChord;
