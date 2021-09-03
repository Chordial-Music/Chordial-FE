/* eslint-disable max-len */
import React, { useState } from 'react';
import AlertModal from '../common/AlertModal';
import { createSequence } from '../../utils/hooks';
import DisplayChord from './DisplayChord';
import DisplayChordNodes from './DisplayChordNodes';
import { motion } from 'framer-motion';
import { useChordArray, useDisplayNodes, useNodes, useMute } from '../state/ChordialProvider';
import { useSession } from '../state/SessionProvider';
import uuid from 'react-uuid';
import styled from 'styled-components';

const DisplaySequence = () => {
  const [alert, setAlert] = useState();
  const { chordArray, setChordArray } = useChordArray();
  const [clicked, setClicked] = useState(false);
  const { displayNodes, setDisplayNodes } = useDisplayNodes();
  const { mute } = useMute();
  const { setNodes } = useNodes();
  const { session } = useSession();

  const alertHandler = () => {
    //setAlert to falsey value to dismiss alert
    setAlert(null);
  };

  const handleReset = () => {
    setChordArray(['C']);
    setNodes('C');
  };

  const handleSave = () => {
    if(session && chordArray.length > 0) {
      createSequence(session.id, chordArray);
      handleReset();
    } else if(!session) {
      setAlert({
        title: 'Must have user account',
        message: 'Please login or signup to save your sequence.'
      });
    } else {
      setAlert({
        title: 'Empty Chord Sequence',
        message: 'Sorry, can\'t save an empty sequence.'
      });
    }
  };

  const handleClick = () => {
    if(!mute) {
      const audio = new Audio('/C.mp3');
      audio.load();
      audio.play();
    }
    setChordArray(['C']);
    setNodes('C');
    setDisplayNodes(true);
    setClicked(true);
  };

  const handlePlay = ({ target }) => {
    if(!mute) {
      const audio = new Audio(`/${target.textContent}.mp3`);
      audio.load();
      audio.play();
    }
  };

  const handlePlaySequence = () => {
    const tempArr = [...chordArray];
    tempArr.forEach((element, i) => {
      setTimeout(() => {
        if(!mute) {
          const audio = new Audio(`/${element}.mp3`);
          audio.load();
          audio.play();
        }
      }, i * 750);
    });
  };

  const chords = chordArray.map((element) => {
    return (
      <div key={uuid()} className="Chord">
        <DisplayChord chordName={element} />
      </div>
    );
  });

  return (
    <>
      {alert && <AlertModal title={alert.title} message={alert.message} onConfirm={alertHandler} />}
      <ButtonStyled>
        <motion.div
          drag
          dragConstraints={{ left: 1, right: 1, top: 1, bottom: 1 }}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 150, bounceDamping: 10 }}
        >
          <button
            onClick={handleClick}
            className={clicked ? 'invisible' : 'default'}
          >C</button>
        </motion.div>

        <div>
          {chordArray.length < 16 && displayNodes === true && <DisplayChordNodes />}
          {chordArray.length >= 16 &&
            <div className="max-limit">
              <h3>You've reached the max chord limit for a sequence.</h3>
            </div>}
        </div>
      </ButtonStyled>

      <DisplayChordsStyled
        className="displayChords">
        <div className="container" onClick={handlePlay}>
          <h3
            style={{ color: 'white', padding: '12px', fontFamily: 'Concert One, cursive', cursor: 'pointer' }}
            onClick={handlePlaySequence}
          >Chosen Chords:</h3>
          {chords}
        </div>
        
        <div className="btn-container">
          <button onClick={handleSave} className="save-btn">Save</button>
          <button onClick={handleReset} className="reset-btn">Reset</button>
        </div>
      </DisplayChordsStyled>
    </>
  );
};

export default DisplaySequence;

const DisplayChordsStyled = styled.div`
  position: absolute;
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  top: 0;
  background-color: #92e6ff68;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  width: 80vw;
  height: 120px;
  
  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .btn-container {
    height: 120px;
    display: flex;
  }

  .save-btn {
    font-size: 1.1rem;
    height: 100%;
    width: 80px;
    /* border-radius: 10px; */
    background-color: transparent;
    border: none;
    border-left: 1px solid black;
    color: white;
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    &:hover {
      background-color: #ffffffa7;
      color: black;
    }
  }

  .reset-btn {
    font-size: 1.1rem;
    height: 100%;
    width: 80px;
    background-color: transparent;
    border: none;
    border-left: 1px solid black;
    color: white;
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    &:hover {
      background-color: red;
      color: white;
      border-radius: 0 10px 10px 0;
    }
  }

  .Chord {
    font-family: 'Fjalla One', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.8rem;
    font-size: 1.7rem;
    font-weight: 800;
    cursor: pointer;
    color: antiquewhite;
    text-shadow: 0px 0px 3px black;
    transition: all ease-in-out 0.2s;
    margin: 0.6rem;
    background-color: #ffffff7d;
    border-radius: 50%;
    padding: 0.6rem;
    height: 50px;
    width: 50px;
    text-shadow: 0px 0px 5px black;
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
    background-color: #3ac4f18d;
    font-size: 3rem;
    color: white;
    cursor: pointer;
    transition: all ease-in-out 0.15s;
    animation-name: floating; 
    animation-duration: 3s; 
    animation-iteration-count: infinite; 
    animation-timing-function: ease-in-out;
    box-shadow: 0px 0px 50px 20px white;
    text-shadow: 0px 2px 4px black;
    font-family: 'Fjalla One', sans-serif;

    &:hover {
      transform: scale(1.3);
      background-color: #23d5ab;
    }
  }

  .invisible {
    display: none;
  }

  .max-limit {
    color: white;
    padding: 12px;
    background-color: #92e6ff68;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    animation-name: floating; 
    animation-duration: 3.5s; 
    animation-iteration-count: infinite; 
    animation-timing-function: ease-in-out;
  }

  @keyframes floating { 
    0% { transform: translate(0,  0px); } 
    50%  { transform: translate(0, 30px); } 
    100%   { transform: translate(0, -0px); }     
}
`;
