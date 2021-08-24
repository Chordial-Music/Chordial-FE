import React, { createContext, useContext, useEffect, useState } from 'react';

const ChordialContext = createContext();

export const ChordialProvider = ({ children }) => {
  const [chord, setChord] = useState('C');

  // useEffect(() => {

  // }, []);

  return (
    <ChordialContext.Provider value={{ chord, setChord }}>
      {children}
    </ChordialContext.Provider>
  );
};

export const useChords = () => {
  const { chords } = useContext(ChordialContext);
};