import React from 'react';
import ChordList from './ChordList';
import { useChordArray } from '../state/ChordialProvider';
import Chords from '../../data/data';

const Display = () => {
  const chordArray = useChordArray();

  const chords = chordArray.map((element, index) => {
    return (
      <li key={index}>
        <ChordList chordName={element} />
      </li>
    );
  });

  return (
    <div>
      {chords}
    </div>
  )
};

export default Display;