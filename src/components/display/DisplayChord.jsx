/* eslint-disable max-len */
import React from 'react';
import { useDisplayNodes, useNodes } from '../state/ChordialProvider.jsx';

const DisplayChord = ({ chordName }) => {
  const { setDisplayNodes } = useDisplayNodes();
  const { setNodes } = useNodes();

  const handleClick = ({ target }) => {
    //can refactor this to do edits
    // setNodes(target.textContent);
    // setDisplayNodes(prev => !prev);
  };

  return (
    <>
      <div onClick={handleClick}>
        {chordName}
      </div>
    </>
  );
};

export default DisplayChord;
