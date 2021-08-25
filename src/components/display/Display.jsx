import React from 'react';
import ChordList from './ChordList';
import { useChordArray } from '../state/ChordialProvider';

// This is the canvas component that  all of the saved chords
// We must feed it each ChordList (main planet)
// Should initially display 'C' as a planet

const Display = () => {
  const chordArray = useChordArray();
  console.log(chordArray);

  const chords = chordArray.map((element, index) => {
    return (
      <li key={index}>
        <ChordList {...element} />
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