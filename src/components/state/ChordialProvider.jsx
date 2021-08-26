/* eslint-disable max-len */
import React, { createContext, useContext, useState } from 'react';


const ChordialContext = createContext();

export const ChordialProvider = ({ children }) => {
  const [nodes, setNodes] = useState('');
  const [chordArray, setChordArray] = useState([]);
  const [displayNodes, setDisplayNodes] = useState(false);

  return (
    <ChordialContext.Provider value={{ nodes, setNodes, chordArray, setChordArray, displayNodes, setDisplayNodes }}>
      {children}
    </ChordialContext.Provider>
  );
};

export const useNodes = () => {
  const { nodes, setNodes } = useContext(ChordialContext);
  return { nodes, setNodes };
};

export const useChordArray = () => {
  const { chordArray, setChordArray } = useContext(ChordialContext);
  return { chordArray, setChordArray };
};

export const useDisplayNodes = () => {
  const { displayNodes, setDisplayNodes } = useContext(ChordialContext);

  return { displayNodes, setDisplayNodes };
};
