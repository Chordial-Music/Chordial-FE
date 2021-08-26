import React from 'react';
import Chords from '../../data/data.js';
import { useNodes, useChordArray } from '../state/ChordialProvider.jsx';
import styled from 'styled-components';

const DisplayChordNodes = () => {
  const { setChordArray } = useChordArray();
  const { nodes } = useNodes();

  const chordNode = Chords[nodes].chords;

  const nodeList = chordNode.map((element, index) => {
    return (
      <NodeItemStyled
        key={index}>
        {element}
      </NodeItemStyled>
    );
  });

  const handleClick = ({ target }) => {
    setChordArray(prevState => [...prevState, target.textContent]);
  };

  return (
    <NodeListStyled
      onClick={handleClick}>
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
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  background: inherit;
  z-index: 1000;
  transition: all ease-in-out 0.2s;

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
    filter: blur(2px);
    
  }
`;

const NodeListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  display: flex;
  justify-content: center;
  margin: auto;
`;

