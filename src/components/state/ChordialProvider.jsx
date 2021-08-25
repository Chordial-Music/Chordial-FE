/* eslint-disable max-len */
import React, { createContext, useContext, useEffect, useState } from 'react';


const ChordialContext = createContext();

export const ChordialProvider = ({ children }) => {
  const [nodes, setNodes] = useState('');
  const [chordArray, setChordArray] = useState(['C']);

  return (
    <ChordialContext.Provider value={{ nodes, setNodes, chordArray, setChordArray }}>
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
