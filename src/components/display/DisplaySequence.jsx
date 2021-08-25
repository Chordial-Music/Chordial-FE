import React from 'react';
import DisplayChord from './DisplayChord';
import { useChordArray } from '../state/ChordialProvider';

const Display = () => {
  const chordArray = useChordArray();

  const chords = chordArray.map((element, index) => {
    return (
      <ul>
        <li
          style={{ listStyle: 'none' }}
          key={index}>
          <DisplayChord chordName={element} />
        </li>
      </ul>
    );
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {chords}
    </div>
  )
};

export default Display;