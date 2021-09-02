/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { del } from '../services/request';
import { Link } from 'react-router-dom';
import { useSession } from '../state/SessionProvider';
import uuid from 'react-uuid';
import { retrieveSequence } from '../../utils/hooks';
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
  }, [session, sequences]);

  const handleDelete = async (id) => {
    del(`/api/v1/sequences/${id}`)
      .then(() => window.location.reload());
  };

  const sequenceElements = sequences.map((ele, index) => {
    return (
      <div key={ele.id}>
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
          <div className="btn-container">
            <Link 
              className="edit-btn"
              to={{
                pathname: '/edit',
                search: `?${ele.id}`,
                state: { ele }
              }}
            >
              Edit
            </Link>
            <button onClick={() => handleDelete(ele.id)}>Delete</button>
          </div>
        </SavedListItemStyled >
      </div>
    );
  });

  return (
    <div>
      <div>
        <SavedListStyled>
          {sequenceElements}
        </SavedListStyled>
      </div>

    </div>
  );
}

const SavedListStyled = styled.ul`
&::-webkit-scrollbar {
  display: none;
}
padding: 2rem;
  background-color: #c764ee55;
  width: 97%;
  height: 75vh;
  margin: auto;
  border-radius: 40px;
  box-shadow: 0px 0px 15px 0px black;
  overflow-y: auto;
  overflow-x: hidden;

`;

const SavedListItemStyled = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.2rem;
font-size: 2rem;
background-color: #ffffff65;
border-radius: 8px;

width: 100%;
overflow-x: auto;

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

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

  .edit-btn {
    color: #0084ff;
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
      background-color: #0084ff;
      color: white;
      border-radius: 5px;
    }
  }

  .sequence-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .sequence-item {
    margin: 0 1rem;
  }
`;
