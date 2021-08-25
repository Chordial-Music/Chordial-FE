import React, { createContext, useContext, useEffect, useState } from 'react';
import Chords from '../../data/data';

const ChordialContext = createContext();

export const ChordialProvider = ({ children }) => {
  const [chords, setChords] = useState(Chords['C'].name);

  // useEffect(() => {

  // }, []);

  return (
    <ChordialContext.Provider value={{ chords, setChords }}>
      {children}
    </ChordialContext.Provider>
  );
};

export const useChords = () => {
  const { chords } = useContext(ChordialContext);
  return chords;
};