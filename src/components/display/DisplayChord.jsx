/* eslint-disable max-len */
import React, { useState } from 'react';
import { useChordArray, useNodes } from '../state/ChordialProvider.jsx';
import DisplayChordNodes from '../display/DisplayChordNodes';

const DisplayChord = ({ chordName }) => {

  const [displayNodes, setDisplayNodes] = useState(false);
  const [isShown, setIsShown] = useState(false);

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
        onMouseEnter={() => { setIsShown(true); setNodes(chordName); console.log(nodes) }}
        onMouseLeave={() => {
          setTimeout(() => {
            setIsShown(false);
            console.log('false')
          }, 3000)
        }}
      >
        {chordName}</div>
      <div>{displayNodes === true || isShown === true && <DisplayChordNodes />}</div>
    </>
  );
};

export default DisplayChord;
