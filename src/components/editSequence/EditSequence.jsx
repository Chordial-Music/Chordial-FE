import React, { useState } from 'react';
import { patch } from '../services/request';

export default function EditSequence(props) {
  const sequence = props.location.state.ele;
  //place the sequence into easily usable state
  const [editSequence, setEditSequence] = useState(sequence.sequence);
  const [editNote, setEditNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //hit your backend
  };

  const handleChange = ({ target }) => {
    setEditNote(target.value);
    editSequence[target.id] = target.value;
  };

  const sequenceElements = editSequence.map((e, i) => {
    return (
      <label>
        {i}
        <input
          id={i}
          type='text'
          name={i}
          placeholder={e}
          value={editNote[i]}
          onChange={handleChange}
        />
      </label>
    );
  });

  return (
    <>
      <div>
        <h2>Sequence id: {sequence.id}</h2>
        <h2>Sequence chords: {sequence.sequence}</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          {sequenceElements}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
