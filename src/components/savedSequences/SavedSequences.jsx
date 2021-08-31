/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { del } from '../services/request';
import { useSession } from '../state/SessionProvider';
import { retrieveSequence } from '../../utils/hooks';
import uuid from 'react-uuid';
import styled from 'styled-components';


export default function SavedSequences() {
  const { session } = useSession();
  const [sequences, setSequences] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    return retrieveSequence(session.username).then(sequence => setSequences(sequence))
      .then(() => {
        setToggle(prev => !prev);
      });

  }, [session]);

  // const handleClick = async () => {

  // };

  const handleDelete = async (id) => {
    del(`/api/v1/sequences/${id}`)
      .then(() => window.location.reload());
  };

  const sequenceElements = sequences.map((ele, index) => {
    return (
      <div key={uuid()}>
        <h3 style={{
          fontSize: '2rem',
          padding: '1rem'
        }}>
          Sequence {index + 1}
        </h3>
        <SavedListItemStyled >
          <div className="sequence-container">
            {ele.sequence.map(i => <p
              className="sequence-item"
              key={uuid()}
            >
              {i}
            </p>)}
          </div>
          <button onClick={() => handleDelete(ele.id)}>Delete</button>
        </SavedListItemStyled >
      </div>
    );
  });

  return (
    <div>
      <div>
        <SavedListStyled>
          {sequenceElements}
          {/* {toggle ? <button >Get Saved Sequences</button> : <></>} */}
        </SavedListStyled>
      </div>

    </div>
  );
}

const SavedListStyled = styled.ul`
padding: 2rem;
  background-color: #c764ee55;
  width: 90%;
  height: 75vh;
  margin: auto;
  border-radius: 40px;
  box-shadow: 0px 0px 15px 0px black;
  overflow: auto;

`;

const SavedListItemStyled = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.2rem;
font-size: 2rem;
background-color: #ffffff65;
border-radius: 8px;

  button {
    color: red;
    background-color: transparent;
    
    font-size: 1.3rem;
    border: none;
    outline: none;
    transition: all ease-in-out 0.15s;
    cursor: pointer;
    height: 100%;
    padding: 1rem;
    border-radius: 5px;

    &:hover {
      background-color: red;
      color: white;
      border-radius: 5px;
    }
  }

  .sequence-container {
    display: flex;
  }

  .sequence-item {
    margin: 0 2rem;
  }
`;
