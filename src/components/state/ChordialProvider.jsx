/* eslint-disable max-len */
/* eslint-disable react/prop-types */ 
import React, { createContext, useContext, useState } from 'react';

const ChordialContext = createContext();

export const ChordialProvider = ({ children }) => {
  const [nodes, setNodes] = useState('');
  const [chordArray, setChordArray] = useState([]);
  const [displayNodes, setDisplayNodes] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [mute, setMute] = useState(false);

  return (
    <ChordialContext.Provider value={{ 
      nodes, 
      setNodes, 
      chordArray, 
      setChordArray, 
      displayNodes, 
      setDisplayNodes, 
      sideMenu, 
      setSideMenu,
      mute,
      setMute 
    }}>
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

export const useSideMenu = () => {
  const { sideMenu, setSideMenu } = useContext(ChordialContext);

  return { sideMenu, setSideMenu };
};

export const useMute = () => {
  const { mute, setMute } = useContext(ChordialContext);

  return { mute, setMute };
};
