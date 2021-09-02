import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { patchSequence } from '../../utils/hooks';

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
    let newArr = [...editSequence];
    newArr[i] = target.value;
    setEditSequence(newArr);
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
          onChange={handleChange(i)}
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
