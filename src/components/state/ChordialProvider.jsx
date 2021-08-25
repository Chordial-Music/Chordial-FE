import React, { createContext, useContext, useEffect, useState } from 'react';
import Chords from '../../data/data';

const ChordialContext = createContext();

export const ChordialProvider = ({ children }) => {
  const [chords, setChords] = useState(Chords['C'].name);
  const [chordArray, setChordArray] = useState(['C', 'Bb', 'F', 'Eb']);

  return (
    <ChordialContext.Provider value={{ chords, setChords, chordArray, setChordArray }}>
      {children}
    </ChordialContext.Provider>
  );
};

export const useChords = () => {
  const { chords } = useContext(ChordialContext);
  return chords;
};

export const useChordArray = () => {
  const { chordArray } = useContext(ChordialContext);
  return chordArray;
};