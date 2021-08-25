/* eslint-disable max-len */
import React, { useState } from 'react';
import Chords from '../../data/data.js';

const ChordList = ({ chordName }) => {
  console.log('chord name', chordName);
  const [display, setDisplay] = useState(false);
  // const temp = Object.values(currentChord[0]);
  // console.log('current', Chords[temp].chords);

  // const handleClick = () => {
  //   setDisplay(true);
  // };

  // const nodes = map(item => {
  //   return (
  //     <li key={item}>
  //       {/* <button onClick={() => setChordArray(Chords[item].name)}>{item}</button> */}
  //     </li>
  //   );
  // });

  return (
    <>
      {chordName}
      {/* <div>
        {/* {display === true && <ul>{nodes}</ul>}
        <button onClick={handleClick}>C</button> */}
      {/* <div> {chordArray.length !== 0 && chordArray} </div> */}

      {/* </div> * /} */}
    </>
  );
};

export default ChordList;
