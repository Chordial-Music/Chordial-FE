/* eslint-disable max-len */
import React, { useState } from 'react';
import { del } from '../services/request';
import { useSession } from '../state/SessionProvider';
import { retrieveSequence } from '../../utils/hooks';

export default function SavedSequences() {
  const { session } = useSession();
  const [sequences, setSequences] = useState([]);
  const [toggle, setToggle] = useState(true);

  const handleClick = async () => {
    const sequence = await retrieveSequence(session.username);
    setSequences(sequence);
    setToggle(prev => !prev);
  };

  const handleDelete = async (id) => {
    del(`/api/v1/sequences/${id}`)
      .then(() => window.location.reload());
  };

  const sequenceElements = sequences.map((ele, index) => {
    return (
      <li key={index}>
        <p style={{ display: 'flex' }}>{ele.sequence.map(i => <p style={{ padding: '5px' }}>{i}</p>)}</p>
        <button onClick={() => handleDelete(ele.id)}>-</button>
      </li >
    );
  });

  return (
    <div>
      <div><ul>{sequenceElements}</ul></div>
      {toggle ? <button onClick={handleClick}>Get Saved Sequences</button> : <></>}
    </div>
  );
}
