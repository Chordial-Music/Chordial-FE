/* eslint-disable max-len */
import React from 'react';
import DisplayChord from './DisplayChord';
import { useChordArray, useDisplayNodes } from '../state/ChordialProvider';
import DisplayChordNodes from './DisplayChordNodes';
import styled from 'styled-components';


const DisplaySequence = () => {
  const { chordArray } = useChordArray();
  const { displayNodes, setDisplayNodes } = useDisplayNodes();

  const chords = chordArray.map((element, index) => {
    return (
      <>
        <ul>
          <li
            className="Chord"
            key={index}
          >
            
            <DisplayChord 
              chordName={element}
              style={{ fontSize: 100 }}  />
          </li>
        </ul>
      </>
    );
  });

  return (
    <>
      <div>
        {displayNodes === true && <DisplayChordNodes />}
      </div>
      
      <DisplayChordsStyled
        className="displayChords">
        <h3
          style={{ color: 'white' }}
        >Chosen Chords:</h3>
        {chords}
      </DisplayChordsStyled>
    </>
  );
};

export default DisplaySequence;

const DisplayChordsStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  padding: 1rem;
  background-color: #92e6ff68;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  height: 600px;

  


  .Chord {
    text-align: center;
    padding-top: 0.8rem;
    font-size: 1.8rem;
    font-weight: 800;
    cursor: pointer;
    color: antiquewhite;
    text-shadow: 0px 2px 0px black;
    transition: all ease-in-out 0.2s;
    &:hover {
      transform: scale(1.2);
      color: #00dda6;
    }
  }
`;
