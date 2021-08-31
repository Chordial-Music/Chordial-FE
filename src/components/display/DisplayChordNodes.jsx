/* eslint-disable max-len */
import React from 'react';
import Chords from '../../data/data.js';
import { useNodes, useChordArray } from '../state/ChordialProvider.jsx';
import uuid from 'react-uuid';
import styled from 'styled-components';


const DisplayChordNodes = () => {
  const { chordArray, setChordArray } = useChordArray();
  const { nodes, setNodes } = useNodes();

  const chordNode = Chords[nodes].chords;

  const handleClick = ({ target }) => {
    if (chordArray.length < 16) {
      setChordArray(prevState => [...prevState, target.textContent]);
    }
    setNodes(target.textContent);
  };

  const nodeList = chordNode.map((element) => {
    return (
      <NodeItemStyled
        key={uuid()}
        onClick={handleClick}
      >
        {element}
      </NodeItemStyled>
    );
  });

  return (
    <NodeListStyled>
      {nodeList}
    </NodeListStyled>
  );
};

export default DisplayChordNodes;

const NodeItemStyled = styled.li`
  background-color: lightblue;
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  width: 100px;
  height: 100px;
  margin: 1px;
  text-align: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  background: inherit;
  z-index: 1000;
  transition: all ease-in-out 0.1s;
  box-shadow: 0px 0px 3px 0px black;

  &:hover {
    background-color: #3370ffb9;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    border-radius: 10px;
    
  }
`;

const NodeListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  display: flex;
  justify-content: center;
  margin: auto;
  
`;

