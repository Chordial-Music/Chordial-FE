/* eslint-disable max-len */
import React, { useState } from 'react';
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

  const sequenceElements = sequences.map((ele, index) => {
    return (
      <li key={index}>
        {ele.sequence}
      </li>
    );
  });

  return (
    <div>
      <div>{sequenceElements}</div>
      {toggle ? <button onClick={handleClick}>Get Saved Sequences</button> : <></>}
    </div>
  );
}
