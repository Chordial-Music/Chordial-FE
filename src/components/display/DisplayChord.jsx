/* eslint-disable max-len */
import React, { useState } from 'react';
import { useChordArray, useDisplayNodes, useNodes } from '../state/ChordialProvider.jsx';
import DisplayChordNodes from '../display/DisplayChordNodes';

const DisplayChord = ({ chordName }) => {

  
  const { displayNodes, setDisplayNodes } = useDisplayNodes();
  const { nodes, setNodes } = useNodes();
  const { chordArray, setChordArray } = useChordArray();

  const handleClick = ({ target }) => {
    //setChordArray(prevState => [...prevState, target.textContent]);
    console.log('chordArray state', chordArray);
    setNodes(target.textContent);
    setDisplayNodes(prev => !prev);
  };

  return (
    <>
      <div
        onClick={handleClick}
        
      >
        {chordName}
      </div>
      
    </>
  );
};

export default DisplayChord;
