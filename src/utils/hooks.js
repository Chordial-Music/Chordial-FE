/* eslint-disable max-len */
export const createSequence = async (id, sequence) => {
  const res = await fetch('https://chordial.herokuapp.com/api/v1/sequences', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ userId: id, sequence })
  });
  const newSequence = res.json();
  return await newSequence;
};

export const retrieveSequence = async (username) => {
  const res = await fetch(`https://chordial.herokuapp.com/api/v1/sequences/user/${username}`);
  const sequence = await res.json();
  return sequence;
};

export const patchSequence = async (id, sequence, userId) => {
  const res = await fetch(`https://chordial.herokuapp.com/api/v1/sequences/${id}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ sequenceId: id, sequence, userId: userId })
  });
  const editedSequence = await res.json();
  return editedSequence;
};