/* eslint-disable max-len */
import React, { useState } from 'react';
import DisplayChord from './DisplayChord';
import { useChordArray, useDisplayNodes, useNodes } from '../state/ChordialProvider';
import DisplayChordNodes from './DisplayChordNodes';
import styled from 'styled-components';



const DisplaySequence = () => {
  const { chordArray, setChordArray } = useChordArray();
  const { displayNodes, setDisplayNodes } = useDisplayNodes();
  const { nodes, setNodes } = useNodes();
  const [clicked, setClicked] = useState(false);

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
      <ButtonStyled>
        <button
          
          onClick={() => {
            setChordArray(['C']);
            setNodes('C');
            setDisplayNodes(true);
            setClicked(true);
          } }
          className={clicked ? 'invisible' : 'default'}
        >C</button>
        <div>
          {displayNodes === true && <DisplayChordNodes />}
        </div>
      </ButtonStyled>
      
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

const ButtonStyled = styled.div`
  .default {
    height: 250px;
    width: 250px;
    border: none;
    border-radius: 50%;
    outline: none;
    background-color: #79d7f68d;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    animation-name: floating; 
    animation-duration: 3s; 
    animation-iteration-count: infinite; 
    animation-timing-function: ease-in-out;
    box-shadow: 0px 0px 3px 0px black;

    &:hover {
      transform: scale(1.3);
    }
  }

  .invisible {
    display: none;
  }

  @keyframes floating { 
    0% { transform: translate(0,  0px); } 
    50%  { transform: translate(0, 15px); } 
    100%   { transform: translate(0, -0px); }     
} 
`;
