/* eslint-disable max-len */
import React, { useState } from 'react';
import { useChordArray, useNodes } from '../state/ChordialProvider.jsx';
import DisplayChordNodes from '../display/DisplayChordNodes';

const DisplayChord = ({ chordName }) => {
  
  const [display, setDisplay] = useState(false);
  
  const { nodes, setNodes } = useNodes();
  const { chordArray, setChordArray } = useChordArray();
  console.log('chord array', chordArray);

  const handleClick = ({ target }) => {
    setChordArray(prevState => [...prevState, target.textContent]);
    console.log(chordArray);
    setNodes(target.textContent);
    console.log('nodes', nodes);
    setDisplay(prev => !prev);
  };
  
  return (
    <>
      <div onClick={handleClick}>{chordName}</div>
      <div>{display === true && <DisplayChordNodes/>}</div>
    </>
  );
};

export default DisplayChord;
