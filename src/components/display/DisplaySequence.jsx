/* eslint-disable max-len */
import React, { useState } from 'react';
import { createSequence } from '../../utils/hooks';
import DisplayChord from './DisplayChord';
import DisplayChordNodes from './DisplayChordNodes';
import AlertModal from '../common/AlertModal';
import { useChordArray, useDisplayNodes, useNodes } from '../state/ChordialProvider';
import { useSession } from '../state/SessionProvider';
import styled from 'styled-components';

const DisplaySequence = () => {
  const [alert, setAlert] = useState();
  const { chordArray, setChordArray } = useChordArray();
  const [clicked, setClicked] = useState(false);
  const { displayNodes, setDisplayNodes } = useDisplayNodes();
  const { session } = useSession();
  const { setNodes } = useNodes();

  const alertHandler = () => {
    //setAlert to falsey value to dismiss alert
    setAlert(null);
  }

  const handleReset = () => {
    setChordArray(['C']);
    setNodes('C');
  };

  const handleSave = () => {
    if (session) {
      createSequence(session.id, chordArray);
      handleReset();
    } else {
      //alert modal props to send to alert modal component
      setAlert({
        title: 'Must have user account',
        message: 'Please login or signup to save your sequence.'
      });
    }
  };

  const chords = chordArray.map((element, index) => {
    return (
      <>
        <ul>
          <li
            className="Chord"
            key={index}
          >
            <DisplayChord
              chordName={element}
              style={{ fontSize: 100 }} />
          </li>
        </ul>
      </>
    );
  });

  return (
    <>
      {alert && <AlertModal title={alert.title} message={alert.message} onConfirm={alertHandler} />}
      <ButtonStyled>
        <button
          onClick={() => {
            setChordArray(['C']);
            setNodes('C');
            setDisplayNodes(true);
            setClicked(true);
          }}
          className={clicked ? 'invisible' : 'default'}
        >C</button>
        <div>
          {displayNodes === true && <DisplayChordNodes />}
        </div>
      </ButtonStyled>

      <DisplayChordsStyled
        className="displayChords">
        <h3
          style={{ color: 'white', padding: '12px' }}
        >Chosen Chords:</h3>
        <div className="container">

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
  display: flex;
  justify-content: space-between;
  align-items: center; 
  top: 0;
  padding: 0rem;
  background-color: #92e6ff68;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  width: 800px;
  height: 80px;
  
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .save-btn {
    height: 80px;
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
      border-radius: 10px;
    }
  }

  .reset-btn {
    height: 80px;
    width: 80px;
    /* border-radius: 10px; */
    background-color: transparent;
    border: none;
    border-left: 1px solid black;
    color: white;
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    &:hover {
      background-color: red;
      color: white;
      border-radius: 10px;
    }
  }

  .Chord {
    text-align: center;
    padding-top: 0.8rem;
    font-size: 1.8rem;
    font-weight: 800;
    cursor: pointer;
    color: antiquewhite;
    text-shadow: 0px 2px 0px black;
    transition: all ease-in-out 0.2s;
    margin: 0.6rem;
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
    background-color: #79d7f68d;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    animation-name: floating; 
    animation-duration: 3s; 
    animation-iteration-count: infinite; 
    animation-timing-function: ease-in-out;
    box-shadow: 0px 0px 3px 0px black;

    &:hover {
      transform: scale(1.3);
    }
  }

  .invisible {
    display: none;
  }

  @keyframes floating { 
    0% { transform: translate(0,  0px); } 
    50%  { transform: translate(0, 15px); } 
    100%   { transform: translate(0, -0px); }     
}`;
