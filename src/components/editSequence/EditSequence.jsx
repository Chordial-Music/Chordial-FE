import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { patchSequence } from '../../utils/hooks';
import styled from 'styled-components';

export default function EditSequence(props) {
  const history = useHistory();
  const sequence = props.location.state.ele;
  //place the sequence into easily usable state
  const [editSequence, setEditSequence] = useState(sequence.sequence);
  const [editNote, setEditNote] = useState('');

  console.log(sequence.userId);

  const handleSubmit = (e) => {
    e.preventDefault();
    patchSequence(`${sequence.id}`, editSequence, sequence.userId)
      .then(history.push('/saved'));
  };

  const handleChange = i => ({ target }) => {
    const tempArr = [...editSequence];
    tempArr[i] = target.value;
    setEditSequence(tempArr);
  };

  const sequenceElements = editSequence.map((e, i) => {
    return (
      <input
        key={i}
        type="text"
        name={i}
        placeholder={e}
        value={editNote[i]}
        onChange={handleChange(i)}
      />

    );
  });

  return (
    <EditPageStyled>
      <form onSubmit={handleSubmit}>
        <h2>Edit Sequence</h2>
        {sequenceElements}
        <button>Submit</button>
      </form>
    </EditPageStyled>

  );
}

const EditPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  

  form {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* align-items: center; */
    background-color: #5bf1ff7d;
    border-radius: 10px;
    height: 600px;
    width: 450px;
    box-shadow: 0px 0px 10px 0px black;

    h2 {
      text-align: center;
    }

    label {
      font-size: 1.5rem;
      
    }

    input {
      padding: 0.5rem;
      background: transparent;
      outline: none;
      font-size: 1.5rem;
      border: none;
      border-bottom: 1px solid black
    }


    button {
      margin-top: 2rem;
      padding: 1.5rem;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1.5rem;
      transition: all ease-in-out 0.15s;
      /* width: 100px; */
      margin: 0 auto;
      text-align: center;
      border-radius: 10px;

      &:hover {
        color: white;
        background-color: #49e00d;
      }
    }
  }
`;
