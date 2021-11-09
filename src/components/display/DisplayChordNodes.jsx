/* eslint-disable max-len */
import React from 'react';
import Chords from '../../data/data.js';
import { useNodes, useChordArray, useMute } from '../state/ChordialProvider.jsx';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DisplayChordNodes = () => {
  const { chordArray, setChordArray } = useChordArray();
  const { nodes, setNodes } = useNodes();
  const { mute } = useMute();
  const chordNode = Chords[nodes].chords;

  const handleClick = ({ target }) => {
    if (chordArray.length < 16 && !mute) {
      setChordArray(prevState => [...prevState, target.textContent]);
      const audio = new Audio(`/${target.textContent}.mp3`);
      audio.load();
      audio.play();
    } else if (chordArray.length < 16) {
      setChordArray(prevState => [...prevState, target.textContent]);
    }
    setNodes(target.textContent);
  };

  const handlePlay = (event) => {

    if (event.shiftKey) {
      if (!mute) {
        const audio = new Audio(`/${event.target.textContent}.mp3`);
        audio.load();
        audio.play();
      }
    } else if (event.type === 'click') {
      if (!mute) {
        const audio = new Audio(`/${event.target.textContent}.mp3`);
        audio.load();
        audio.play();
      }
    }
  };

  const variant = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const nodeList = chordNode.map((element) => {
    return (
      <motion.div
        key={uuid()}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20
        }}
        whileHover={{ scale: 1.2, rotate: 370 }}
        whileTap={{
          scale: 0.8,
        }}
        variants={variant}
      >
        <NodeItemStyled onClick={handleClick} onMouseEnter={handlePlay}>
          {element}
        </NodeItemStyled>
      </motion.div>
    );
  });

  return (
    <NodeListStyled data-testid="nodeButton">
      <motion.ul
        className="nodeList"
        variants={variant}
        initial="hidden"
        animate="visible"
      >
        {nodeList}
      </motion.ul>
    </NodeListStyled>
  );
};

export default DisplayChordNodes;

const NodeItemStyled = styled.li`
  background-color: lightblue;
  color: white;
  font-size: 1.8rem;
  padding: 1rem;
  width: 100px;
  height: 100px;
  margin: 10px;
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
  font-family: 'Fjalla One', sans-serif;
  box-shadow: 0px 0px 4px 0px black;

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

  @media only screen and (max-width: 800px) {
  background-color: lightblue;
  color: white;
  font-size: 1.8rem;
  padding: 1rem;
  width: 50px;
  height: 50px;
  margin: 10px;
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
  font-family: 'Fjalla One', sans-serif;
  box-shadow: 0px 0px 4px 0px black;

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

  @media only screen and (max-width: 400px) {
    background-color: lightblue;
    color: white;
    font-size: 1.3rem;
    padding: 1rem;
    width: 40px;
    height: 40px;
    margin: 10px;
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
    font-family: 'Fjalla One', sans-serif;
    box-shadow: 0px 0px 4px 0px black;
  
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
  }
`;

const NodeListStyled = styled.div`

.nodeList {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  display: flex;
  justify-content: center;
  margin: auto;
}

@media only screen and (max-width: 800px) {
  .nodeList {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    display: flex;
    justify-content: center;
    margin: auto;
  }
}

@media only screen and (max-width: 600px) {
  .nodeList {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
}
`;
