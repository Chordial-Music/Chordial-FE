import React, { useState } from 'react';
//import ChordList from './ChordList';
import { useChords } from '../state/ChordialProvider';
// This is the canvas component that  all of the saved chords
// We must feed it each ChordList (main planet)
// Should initially display 'C' as a planet


//[choice1, choice2,]

const Display = () => {
  const chords = useChords();
  const handleClick = () => {

  }

  return (
    <div>
      <button onClick={handleClick}>{chords}</button>
    </div>
  )
};

export default Display;