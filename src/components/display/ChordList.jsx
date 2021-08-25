/* eslint-disable max-len */
import React, { useState } from 'react';
import { useChordArray } from '../state/ChordialProvider.jsx';
import Chords from '../../data/data.js';

const ChordList = ({ chordName }) => {
  console.log('chord name', chordName);
  const [display, setDisplay] = useState(false);
  // const temp = Object.values(currentChord[0]);
  // console.log('current', Chords[temp].chords);

  const handleClick = () => {
    console.log('hi');
  };


  return (
    <>
      <div onClick={handleClick}>{chordName}</div>
    </>
  );
};

export default ChordList;
