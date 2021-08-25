import React from 'react';

// This is the main planet
// It displays chord.name
// And onClick it shows you chord.name's destination chord nodes (chord.chords)
// And it feeds the satellite planets chords from it's chord array
// Click on this planet to see all of the destination chord nodes associated with it
const list = ['Db', 'D', 'Dm', 'Eb', 'Ebm', 'E', 'Em', 'F', 'Fm', 'Gb', 'G', 'Gm', 'Ab', 'A', 'Am', 'Abm', 'Bb', 'Bm', 'B'];


const chordList = () => {

  const handleClick = () => {
    const chordElements = list.map((chord, i) => (
      <li key={i} >
        {chord}
      </li >
    ));
    return chordElements;
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>C</button>
      </div>
      <ul>{chordElements}</ul>
    </>
  )
};

export default chordList;
