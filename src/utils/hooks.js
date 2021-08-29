/* eslint-disable max-len */
export const createSequence = async (sequence) => {
  const res = await fetch('https://chordial.herokuapp.com/api/v1/sequences', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(sequence)
  });
  const newSequence = res.json();
  return await newSequence;
};

export const retrieveSequence = async (username) => {
  console.log(username);
  const res = await fetch(`https://chordial.herokuapp.com/api/v1/user/${username}`);
  const sequence = await res.json();
  return sequence;
};
