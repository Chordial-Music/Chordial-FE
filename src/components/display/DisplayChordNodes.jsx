import React from 'react';
import Chords from '../../data/data.js';
import { useNodes, useChordArray } from '../state/ChordialProvider.jsx';

const DisplayChordNodes = () => {
  const { setChordArray } = useChordArray();
  const { nodes } = useNodes();

  console.log('nodes', nodes);
  const chordNode = Chords[nodes].chords;

  const nodeList = chordNode.map((element, index) => {
    return (
      <li
        style={{ listStyle: 'none' }}
        key={index}>
        {element}
      </li>
    );
  });

  const handleClick = ({ target }) => {
    setChordArray(prevState => [...prevState, target.textContent]);
  };

  return (
    <ul>
      <div onClick={handleClick}>{nodeList}</div>
    </ul>
  );
};


export default DisplayChordNodes;
